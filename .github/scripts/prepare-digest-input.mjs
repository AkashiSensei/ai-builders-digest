import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;
const TIME_ZONE = "Asia/Shanghai";
const TIME_ZONE_OFFSET_HOURS = 8;
const WEEKLY_WINDOW_DAYS = 7;

const digestType = process.env.DIGEST_TYPE;
const sourceDirectory = path.resolve(
  process.env.FOLLOW_BUILDERS_DIR ?? "_follow-builders",
);
const inputDirectory = path.resolve(
  process.env.DIGEST_INPUT_DIR ?? ".codex-input",
);
const outputDirectory = path.resolve(
  process.env.DIGEST_OUTPUT_DIR ?? ".",
);
const maxFeedAgeHours = Number(process.env.MAX_FEED_AGE_HOURS ?? "24");
const maxSnapshotGapHours = Number(
  process.env.MAX_SNAPSHOT_GAP_HOURS ?? "2",
);
const weeklyHistoryLimit = Number(
  process.env.WEEKLY_HISTORY_LIMIT ?? "30",
);
const minimumWeeklySnapshots = Number(
  process.env.MIN_WEEKLY_SNAPSHOTS ?? "8",
);
const digestEventName = process.env.DIGEST_EVENT_NAME ?? "";
const scheduledLocalTime = process.env.DIGEST_SCHEDULE_LOCAL_TIME ?? "";
const scheduledDateOffsetDays = Number(
  process.env.DIGEST_SCHEDULE_DATE_OFFSET_DAYS ?? "0",
);
const deferUnreadyInputs = process.env.DEFER_UNREADY_INPUTS === "true";
const preflightOnly = process.env.DIGEST_PREFLIGHT_ONLY === "true";
const now = process.env.DIGEST_NOW
  ? new Date(process.env.DIGEST_NOW)
  : new Date();

class InputNotReadyError extends Error {
  constructor(message) {
    super(message);
    this.name = "InputNotReadyError";
  }
}

if (!new Set(["daily", "weekly"]).has(digestType)) {
  throw new Error("DIGEST_TYPE must be either 'daily' or 'weekly'.");
}

for (const [name, value] of [
  ["MAX_FEED_AGE_HOURS", maxFeedAgeHours],
  ["MAX_SNAPSHOT_GAP_HOURS", maxSnapshotGapHours],
  ["WEEKLY_HISTORY_LIMIT", weeklyHistoryLimit],
  ["MIN_WEEKLY_SNAPSHOTS", minimumWeeklySnapshots],
]) {
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error(`${name} must be a positive number.`);
  }
}
for (const [name, value] of [
  ["WEEKLY_HISTORY_LIMIT", weeklyHistoryLimit],
  ["MIN_WEEKLY_SNAPSHOTS", minimumWeeklySnapshots],
]) {
  if (!Number.isInteger(value)) {
    throw new Error(`${name} must be an integer.`);
  }
}

if (Number.isNaN(now.getTime())) {
  throw new Error("DIGEST_NOW must be a valid ISO date when provided.");
}
if (!Number.isInteger(scheduledDateOffsetDays)) {
  throw new Error("DIGEST_SCHEDULE_DATE_OFFSET_DAYS must be an integer.");
}
if (Math.abs(scheduledDateOffsetDays) > 7) {
  throw new Error(
    "DIGEST_SCHEDULE_DATE_OFFSET_DAYS must be between -7 and 7.",
  );
}

const feedSpecifications = [
  {
    filename: "feed-x.json",
    collection: "x",
    englishLabel: "X/Twitter",
    chineseLabel: "X/Twitter",
  },
  {
    filename: "feed-podcasts.json",
    collection: "podcasts",
    englishLabel: "Podcast",
    chineseLabel: "播客",
  },
  {
    filename: "feed-blogs.json",
    collection: "blogs",
    englishLabel: "Blog",
    chineseLabel: "博客",
  },
];

const promptFilenames = [
  "digest-intro.md",
  "summarize-tweets.md",
  "summarize-podcast.md",
  "summarize-blogs.md",
  "translate.md",
];

function parseDate(value, label) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`${label} must be a valid date, received: ${value}`);
  }
  return parsed;
}

function parseFeed(raw, specification, label) {
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Unable to parse ${label}: ${error.message}`);
  }

  if (!Array.isArray(parsed[specification.collection])) {
    throw new Error(
      `${label} must contain a '${specification.collection}' array.`,
    );
  }

  if (typeof parsed.generatedAt !== "string" || parsed.generatedAt.length === 0) {
    throw new Error(`${label} must contain a non-empty generatedAt value.`);
  }
  parseDate(parsed.generatedAt, `${label} generatedAt`);

  return parsed;
}

function validateFeedAge(feed, label) {
  const feedTimestamp = parseDate(feed.generatedAt, `${label} generatedAt`);
  const ageHours = (now.getTime() - feedTimestamp.getTime()) / HOUR_MS;

  if (ageHours < -1) {
    throw new Error(
      `${label} is more than one hour in the future (${ageHours.toFixed(2)}h).`,
    );
  }
  if (ageHours > maxFeedAgeHours) {
    throw new InputNotReadyError(
      `${label} is stale (${ageHours.toFixed(2)}h old; maximum is ${maxFeedAgeHours}h).`,
    );
  }
}

function getLocalDateParts(date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  return Object.fromEntries(parts.map(({ type, value }) => [type, value]));
}

function formatUtcDate(date) {
  return [
    date.getUTCFullYear(),
    String(date.getUTCMonth() + 1).padStart(2, "0"),
    String(date.getUTCDate()).padStart(2, "0"),
  ].join("-");
}

function getDigestCalendar() {
  const localParts = getLocalDateParts(now);
  let localDateAtNoonUtc = new Date(
    Date.UTC(
      Number(localParts.year),
      Number(localParts.month) - 1,
      Number(localParts.day),
      12,
    ),
  );

  if (digestEventName === "schedule") {
    const match = /^(\d{2}):(\d{2})$/u.exec(scheduledLocalTime);
    const scheduledHour = Number(match?.[1]);
    const scheduledMinute = Number(match?.[2]);
    if (!match || scheduledHour > 23 || scheduledMinute > 59) {
      throw new Error(
        "DIGEST_SCHEDULE_LOCAL_TIME must use a valid HH:MM value for scheduled runs.",
      );
    }

    const currentLocalMinute =
      Number(localParts.hour) * 60 + Number(localParts.minute);
    const scheduledMinuteOfDay = scheduledHour * 60 + scheduledMinute;
    if (currentLocalMinute < scheduledMinuteOfDay) {
      localDateAtNoonUtc = new Date(localDateAtNoonUtc.getTime() - DAY_MS);
    }
    localDateAtNoonUtc = new Date(
      localDateAtNoonUtc.getTime() + scheduledDateOffsetDays * DAY_MS,
    );
  }

  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    localDateAtNoonUtc.getUTCDay()
  ];

  if (digestType === "daily") {
    return {
      digestDate: formatUtcDate(localDateAtNoonUtc),
      dayOfWeek,
      localDateAtNoonUtc,
    };
  }

  const daysSinceMonday = (localDateAtNoonUtc.getUTCDay() + 6) % 7;
  const mondayAtNoonUtc = new Date(
    localDateAtNoonUtc.getTime() - daysSinceMonday * DAY_MS,
  );
  return {
    digestDate: formatUtcDate(mondayAtNoonUtc),
    dayOfWeek: "Mon",
    localDateAtNoonUtc: mondayAtNoonUtc,
  };
}

function getWeeklyWindow(localMondayAtNoonUtc) {
  const windowEnd = new Date(
    Date.UTC(
      localMondayAtNoonUtc.getUTCFullYear(),
      localMondayAtNoonUtc.getUTCMonth(),
      localMondayAtNoonUtc.getUTCDate(),
    ) -
      TIME_ZONE_OFFSET_HOURS * HOUR_MS,
  );
  const windowStart = new Date(
    windowEnd.getTime() - WEEKLY_WINDOW_DAYS * DAY_MS,
  );
  return { windowStart, windowEnd };
}

function readFeedFromWorkingTree(specification) {
  const sourcePath = path.join(sourceDirectory, specification.filename);
  return parseFeed(
    fs.readFileSync(sourcePath, "utf8"),
    specification,
    sourcePath,
  );
}

function readFeedAtCommit(commit, specification) {
  let raw;
  try {
    raw = execFileSync(
      "git",
      ["-C", sourceDirectory, "show", `${commit}:${specification.filename}`],
      { encoding: "utf8", maxBuffer: 32 * 1024 * 1024 },
    );
  } catch (error) {
    throw new Error(
      `Unable to read ${specification.filename} at ${commit}: ${error.message}`,
    );
  }
  return parseFeed(raw, specification, `${commit}:${specification.filename}`);
}

function getFeedCommits() {
  let output;
  try {
    output = execFileSync(
      "git",
      [
        "-C",
        sourceDirectory,
        "log",
        `--max-count=${weeklyHistoryLimit}`,
        "--format=%H",
        "--",
        "feed-x.json",
      ],
      { encoding: "utf8" },
    );
  } catch (error) {
    throw new Error(
      `Unable to inspect Follow Builders feed history: ${error.message}`,
    );
  }

  const commits = [...new Set(output.split("\n").map((line) => line.trim()))].filter(
    Boolean,
  );
  if (commits.length < minimumWeeklySnapshots) {
    throw new Error(
      `Only ${commits.length} feed commits are available; at least ${minimumWeeklySnapshots} are required. Increase the Follow Builders checkout depth.`,
    );
  }
  return commits;
}

function getInterval(feed, label) {
  const lookbackHours = Number(feed.lookbackHours);
  if (!Number.isFinite(lookbackHours) || lookbackHours <= 0) {
    throw new Error(`${label} must contain a positive lookbackHours value.`);
  }
  const end = parseDate(feed.generatedAt, `${label} generatedAt`);
  const start = new Date(end.getTime() - lookbackHours * HOUR_MS);
  return { start, end, lookbackHours };
}

function validateWindowCoverage(intervals, windowStart, windowEnd, collection) {
  if (intervals.length < minimumWeeklySnapshots) {
    throw new InputNotReadyError(
      `${collection} has only ${intervals.length} snapshots intersecting the weekly window; at least ${minimumWeeklySnapshots} are required.`,
    );
  }

  const sorted = [...intervals].sort(
    (left, right) => left.start.getTime() - right.start.getTime(),
  );
  let cursor = windowStart.getTime();
  const gaps = [];

  for (const interval of sorted) {
    const intervalStart = Math.max(interval.start.getTime(), windowStart.getTime());
    const intervalEnd = Math.min(interval.end.getTime(), windowEnd.getTime());
    if (intervalEnd <= cursor) {
      continue;
    }
    if (intervalStart > cursor) {
      const gapHours = (intervalStart - cursor) / HOUR_MS;
      if (gapHours > maxSnapshotGapHours) {
        throw new Error(
          `${collection} has an uncovered ${gapHours.toFixed(2)}h gap before ${new Date(intervalStart).toISOString()}.`,
        );
      }
      gaps.push({
        start: new Date(cursor).toISOString(),
        end: new Date(intervalStart).toISOString(),
        hours: Number(gapHours.toFixed(2)),
      });
    }
    cursor = Math.max(cursor, intervalEnd);
  }

  if (cursor < windowEnd.getTime()) {
    const gapHours = (windowEnd.getTime() - cursor) / HOUR_MS;
    throw new InputNotReadyError(
      `${collection} does not reach the weekly window end; ${gapHours.toFixed(2)}h are uncovered. The current Monday feed may not be ready yet.`,
    );
  }

  return gaps;
}

function buildCoverageGapNotices(coverageGaps) {
  const englishGaps = [];
  const chineseGaps = [];

  for (const specification of feedSpecifications) {
    for (const gap of coverageGaps[specification.collection]) {
      englishGaps.push(
        `${specification.englishLabel} ${gap.start} to ${gap.end} ` +
          `(${gap.hours.toFixed(2)}h)`,
      );
      chineseGaps.push(
        `${specification.chineseLabel} ${gap.start} 至 ${gap.end}` +
          `（${gap.hours.toFixed(2)} 小时）`,
      );
    }
  }

  if (englishGaps.length === 0) {
    return null;
  }
  return {
    english: `Known feed coverage gaps (UTC): ${englishGaps.join("; ")}.`,
    chinese: `已知 feed 覆盖缺口（UTC）：${chineseGaps.join("；")}。`,
  };
}

function isInsideWindow(value, windowStart, windowEnd, label) {
  const timestamp = parseDate(value, label).getTime();
  return timestamp >= windowStart.getTime() && timestamp < windowEnd.getTime();
}

function mergeTweets(snapshotFeeds, windowStart, windowEnd) {
  const builders = new Map();

  for (const { feed } of snapshotFeeds) {
    for (const builder of feed.x) {
      if (!Array.isArray(builder.tweets)) {
        throw new Error(`Builder ${builder.name ?? "unknown"} has no tweets array.`);
      }
      const builderKey = builder.handle || builder.source || builder.name;
      if (!builderKey) {
        throw new Error("Every X builder must have a handle, source, or name.");
      }
      const merged = builders.get(builderKey) ?? {
        name: builder.name,
        handle: builder.handle,
        bio: builder.bio,
        source: builder.source,
        tweets: new Map(),
      };
      merged.name = builder.name ?? merged.name;
      merged.handle = builder.handle ?? merged.handle;
      merged.bio = builder.bio ?? merged.bio;
      merged.source = builder.source ?? merged.source;

      for (const tweet of builder.tweets) {
        if (!tweet.url) {
          continue;
        }
        if (
          isInsideWindow(
            tweet.createdAt,
            windowStart,
            windowEnd,
            `Tweet ${tweet.url} createdAt`,
          )
        ) {
          const identity = tweet.id || tweet.url;
          for (const [existingIdentity, existingTweet] of merged.tweets) {
            if (existingTweet.url === tweet.url && existingIdentity !== identity) {
              merged.tweets.delete(existingIdentity);
            }
          }
          merged.tweets.set(identity, tweet);
        }
      }
      builders.set(builderKey, merged);
    }
  }

  return [...builders.values()]
    .map((builder) => ({
      name: builder.name,
      handle: builder.handle,
      bio: builder.bio,
      source: builder.source,
      tweets: [...builder.tweets.values()].sort(
        (left, right) =>
          parseDate(left.createdAt, `${left.url} createdAt`).getTime() -
          parseDate(right.createdAt, `${right.url} createdAt`).getTime(),
      ),
    }))
    .filter((builder) => builder.tweets.length > 0)
    .sort((left, right) =>
      (left.name ?? left.handle ?? left.source).localeCompare(
        right.name ?? right.handle ?? right.source,
      ),
    );
}

function mergeFlatCollection(
  snapshotFeeds,
  collection,
  timestampField,
  windowStart,
  windowEnd,
) {
  const items = new Map();
  const identitiesByUrl = new Map();
  for (const { feed } of snapshotFeeds) {
    for (const item of feed[collection]) {
      if (!item.url) {
        continue;
      }
      if (
        isInsideWindow(
          item[timestampField],
          windowStart,
          windowEnd,
          `${collection} item ${item.url} ${timestampField}`,
        )
      ) {
        const identity = item.guid || item.url;
        const existingIdentity = identitiesByUrl.get(item.url);
        if (existingIdentity && existingIdentity !== identity) {
          items.delete(existingIdentity);
        }
        const previousItem = items.get(identity);
        if (
          previousItem &&
          previousItem.url !== item.url &&
          identitiesByUrl.get(previousItem.url) === identity
        ) {
          identitiesByUrl.delete(previousItem.url);
        }
        items.set(identity, item);
        identitiesByUrl.set(item.url, identity);
      }
    }
  }
  return [...items.values()].sort(
    (left, right) =>
      parseDate(left[timestampField], `${left.url} ${timestampField}`).getTime() -
      parseDate(right[timestampField], `${right.url} ${timestampField}`).getTime(),
  );
}

function writeFeed(filename, value) {
  fs.writeFileSync(
    path.join(inputDirectory, filename),
    `${JSON.stringify(value, null, 2)}\n`,
  );
}

function prepareDailyFeeds() {
  const feedData = {};
  const generatedAt = {};

  for (const specification of feedSpecifications) {
    const feed = readFeedFromWorkingTree(specification);
    validateFeedAge(feed, specification.filename);
    feedData[specification.collection] = feed[specification.collection];
    generatedAt[specification.collection] = feed.generatedAt;
    fs.copyFileSync(
      path.join(sourceDirectory, specification.filename),
      path.join(inputDirectory, specification.filename),
    );
  }

  return {
    feedData,
    generatedAt,
    coverage: null,
    sourceSnapshots: [],
  };
}

function prepareWeeklyFeeds(windowStart, windowEnd) {
  const snapshots = getFeedCommits()
    .map((commit) => ({
      commit,
      feeds: Object.fromEntries(
        feedSpecifications.map((specification) => [
          specification.collection,
          readFeedAtCommit(commit, specification),
        ]),
      ),
    }))
    .filter((snapshot) =>
      Object.values(snapshot.feeds).every(
        (feed) =>
          parseDate(feed.generatedAt, `${snapshot.commit} generatedAt`).getTime() <=
          now.getTime() + HOUR_MS,
      ),
    );

  if (snapshots.length < minimumWeeklySnapshots) {
    throw new Error(
      `Only ${snapshots.length} non-future feed snapshots are available; at least ${minimumWeeklySnapshots} are required.`,
    );
  }

  for (const specification of feedSpecifications) {
    const newest = [...snapshots].sort(
      (left, right) =>
        parseDate(
          right.feeds[specification.collection].generatedAt,
          `${right.commit} generatedAt`,
        ).getTime() -
        parseDate(
          left.feeds[specification.collection].generatedAt,
          `${left.commit} generatedAt`,
        ).getTime(),
    )[0];
    validateFeedAge(
      newest.feeds[specification.collection],
      `latest ${specification.filename}`,
    );
  }

  const byCollection = {};
  const coverageGaps = {};

  for (const specification of feedSpecifications) {
    const selected = snapshots
      .map((snapshot) => {
        const feed = snapshot.feeds[specification.collection];
        const interval = getInterval(
          feed,
          `${snapshot.commit}:${specification.filename}`,
        );
        return { commit: snapshot.commit, feed, ...interval };
      })
      .filter(
        (snapshot) =>
          snapshot.end.getTime() >= windowStart.getTime() &&
          snapshot.start.getTime() <= windowEnd.getTime(),
      )
      .sort((left, right) => left.end.getTime() - right.end.getTime());

    coverageGaps[specification.collection] = validateWindowCoverage(
      selected,
      windowStart,
      windowEnd,
      specification.collection,
    );
    byCollection[specification.collection] = selected;
  }

  const x = mergeTweets(byCollection.x, windowStart, windowEnd);
  const podcasts = mergeFlatCollection(
    byCollection.podcasts,
    "podcasts",
    "publishedAt",
    windowStart,
    windowEnd,
  );
  const blogs = mergeFlatCollection(
    byCollection.blogs,
    "blogs",
    "publishedAt",
    windowStart,
    windowEnd,
  );
  const feedData = { x, podcasts, blogs };
  const generatedAt = Object.fromEntries(
    feedSpecifications.map((specification) => {
      const selected = byCollection[specification.collection];
      return [specification.collection, selected.at(-1).feed.generatedAt];
    }),
  );

  const sourceSnapshotMap = new Map();
  for (const specification of feedSpecifications) {
    for (const snapshot of byCollection[specification.collection]) {
      const entry = sourceSnapshotMap.get(snapshot.commit) ?? {
        commit: snapshot.commit,
        generatedAt: {},
        lookbackHours: {},
      };
      entry.generatedAt[specification.collection] = snapshot.feed.generatedAt;
      entry.lookbackHours[specification.collection] = snapshot.lookbackHours;
      sourceSnapshotMap.set(snapshot.commit, entry);
    }
  }
  const sourceSnapshots = [...sourceSnapshotMap.values()].sort((left, right) => {
    const leftTime = Math.max(
      ...Object.values(left.generatedAt).map((value) => new Date(value).getTime()),
    );
    const rightTime = Math.max(
      ...Object.values(right.generatedAt).map((value) => new Date(value).getTime()),
    );
    return leftTime - rightTime;
  });

  const commonMetadata = {
    weeklyWindow: {
      start: windowStart.toISOString(),
      end: windowEnd.toISOString(),
      timezone: TIME_ZONE,
    },
    sourceSnapshots,
  };

  writeFeed("feed-x.json", {
    generatedAt: generatedAt.x,
    lookbackHours: WEEKLY_WINDOW_DAYS * 24,
    ...commonMetadata,
    stats: {
      xBuilders: x.length,
      totalTweets: x.reduce((total, builder) => total + builder.tweets.length, 0),
    },
    x,
  });
  writeFeed("feed-podcasts.json", {
    generatedAt: generatedAt.podcasts,
    lookbackHours: WEEKLY_WINDOW_DAYS * 24,
    ...commonMetadata,
    stats: { podcastEpisodes: podcasts.length },
    podcasts,
  });
  writeFeed("feed-blogs.json", {
    generatedAt: generatedAt.blogs,
    lookbackHours: WEEKLY_WINDOW_DAYS * 24,
    ...commonMetadata,
    stats: { blogPosts: blogs.length },
    blogs,
  });

  return {
    feedData,
    generatedAt,
    sourceSnapshots,
    coverage: {
      start: windowStart.toISOString(),
      end: windowEnd.toISOString(),
      startDate: formatUtcDate(
        new Date(windowStart.getTime() + TIME_ZONE_OFFSET_HOURS * HOUR_MS),
      ),
      endDate: formatUtcDate(
        new Date(windowEnd.getTime() + TIME_ZONE_OFFSET_HOURS * HOUR_MS),
      ),
      timezone: TIME_ZONE,
      gaps: coverageGaps,
      gapNotices: buildCoverageGapNotices(coverageGaps),
    },
  };
}

function buildTarget() {
  const calendar = getDigestCalendar();
  const filename = `ai-digest-${calendar.digestDate}-${calendar.dayOfWeek}.md`;
  const outputFiles = [
    `en/${digestType}/${filename}`,
    `zh/${digestType}/${filename}`,
    `bilingual/${digestType}/${filename}`,
  ];
  const commitMessage =
    `add: ${digestType} digest ${calendar.digestDate} ` +
    `(${calendar.dayOfWeek}) by Codex`;
  const promptFile =
    digestType === "weekly"
      ? ".github/codex/prompts/generate-weekly-digest.md"
      : ".github/codex/prompts/generate-digest.md";
  return { calendar, filename, outputFiles, commitMessage, promptFile };
}

function writeStepOutputs(target, shouldGenerate, skipReason = "") {
  if (!process.env.GITHUB_OUTPUT) {
    return;
  }
  fs.appendFileSync(
    process.env.GITHUB_OUTPUT,
    [
      `filename=${target.filename}`,
      `digest_type=${digestType}`,
      `commit_message=${target.commitMessage}`,
      `prompt_file=${target.promptFile}`,
      `should_generate=${shouldGenerate}`,
      `skip_reason=${skipReason}`,
      "",
    ].join("\n"),
  );
}

function getLatestPublishedDate() {
  const readmePath = path.join(outputDirectory, "README.md");
  if (!fs.existsSync(readmePath)) {
    return null;
  }
  const readme = fs.readFileSync(readmePath, "utf8");
  const match = new RegExp(
    `^Latest ${digestType}: ai-digest-(\\d{4}-\\d{2}-\\d{2})-`,
    "mu",
  ).exec(readme);
  return match?.[1] ?? null;
}

function main() {
  const target = buildTarget();
  const existingOutputFiles = target.outputFiles.filter((filename) =>
    fs.existsSync(path.join(outputDirectory, filename)),
  );

  if (existingOutputFiles.length === target.outputFiles.length) {
    writeStepOutputs(target, false, "already_exists");
    console.log(
      `Skipping ${digestType} digest ${target.calendar.digestDate}: ` +
        "all language editions already exist.",
    );
    return;
  }
  if (existingOutputFiles.length > 0) {
    throw new Error(
      `Digest ${target.filename} is only partially present: ` +
      `${existingOutputFiles.join(", ")}. Refusing to overwrite it.`,
    );
  }

  const latestPublishedDate = getLatestPublishedDate();
  if (latestPublishedDate === target.calendar.digestDate) {
    throw new Error(
      `README.md points to ${target.filename}, but its three language editions ` +
        "are missing.",
    );
  }
  if (latestPublishedDate > target.calendar.digestDate) {
    writeStepOutputs(target, false, "superseded");
    console.log(
      `Skipping ${digestType} digest ${target.calendar.digestDate}: ` +
        `README.md already points to newer ${digestType} digest ` +
        `${latestPublishedDate}.`,
    );
    return;
  }

  if (preflightOnly) {
    writeStepOutputs(target, true);
    console.log(
      `${digestType} digest ${target.calendar.digestDate} requires generation.`,
    );
    return;
  }

  fs.mkdirSync(inputDirectory, { recursive: true });

  const weeklyWindow =
    digestType === "weekly"
      ? getWeeklyWindow(target.calendar.localDateAtNoonUtc)
      : null;
  let preparedFeeds;
  try {
    preparedFeeds =
      digestType === "weekly"
        ? prepareWeeklyFeeds(weeklyWindow.windowStart, weeklyWindow.windowEnd)
        : prepareDailyFeeds();
  } catch (error) {
    if (!(error instanceof InputNotReadyError) || !deferUnreadyInputs) {
      throw error;
    }
    writeStepOutputs(target, false, "inputs_not_ready");
    console.log(
      `Deferring ${digestType} digest ${target.calendar.digestDate}: ` +
        error.message,
    );
    return;
  }

  for (const promptFilename of promptFilenames) {
    const sourcePath = path.join(sourceDirectory, "prompts", promptFilename);
    if (!fs.existsSync(sourcePath)) {
      throw new Error(`Required prompt is missing: ${sourcePath}`);
    }
    fs.copyFileSync(sourcePath, path.join(inputDirectory, promptFilename));
  }

  const context = {
    digestType,
    timezone: TIME_ZONE,
    digestDate: target.calendar.digestDate,
    dayOfWeek: target.calendar.dayOfWeek,
    filename: target.filename,
    outputFiles: target.outputFiles,
    promptFile: target.promptFile,
    schedule:
      digestEventName === "schedule"
        ? {
            localTime: scheduledLocalTime,
            dateOffsetDays: scheduledDateOffsetDays,
          }
        : null,
    coverage: preparedFeeds.coverage,
    readme: {
      english:
        `Latest ${digestType}: ${target.filename} ` +
        `[中文](zh/${digestType}/${target.filename}) | ` +
        `[English](en/${digestType}/${target.filename}) | ` +
        `[Bilingual](bilingual/${digestType}/${target.filename})`,
      chinese:
        `${digestType === "daily" ? "最新日报" : "最新周报"}: ${target.filename} ` +
        `[中文](zh/${digestType}/${target.filename}) | ` +
        `[English](en/${digestType}/${target.filename}) | ` +
        `[双语](bilingual/${digestType}/${target.filename})`,
    },
    commitMessage: target.commitMessage,
    feeds: {
      generatedAt: preparedFeeds.generatedAt,
      sourceSnapshotCount: preparedFeeds.sourceSnapshots.length,
      sourceSnapshots: preparedFeeds.sourceSnapshots,
      counts: {
        xBuilders: preparedFeeds.feedData.x.length,
        totalTweets: preparedFeeds.feedData.x.reduce(
          (total, builder) => total + builder.tweets.length,
          0,
        ),
        podcastEpisodes: preparedFeeds.feedData.podcasts.length,
        blogPosts: preparedFeeds.feedData.blogs.length,
      },
    },
    preparedAt: now.toISOString(),
  };

  fs.writeFileSync(
    path.join(inputDirectory, "run-context.json"),
    `${JSON.stringify(context, null, 2)}\n`,
  );
  writeStepOutputs(target, true);
  console.log(JSON.stringify(context, null, 2));
}

main();
