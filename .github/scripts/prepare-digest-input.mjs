import fs from "node:fs";
import path from "node:path";

const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;
const TIME_ZONE = "Asia/Shanghai";

const digestType = process.env.DIGEST_TYPE;
const sourceDirectory = path.resolve(
  process.env.FOLLOW_BUILDERS_DIR ?? "_follow-builders",
);
const inputDirectory = path.resolve(
  process.env.DIGEST_INPUT_DIR ?? ".codex-input",
);
const maxFeedAgeHours = Number(process.env.MAX_FEED_AGE_HOURS ?? "24");
const now = process.env.DIGEST_NOW
  ? new Date(process.env.DIGEST_NOW)
  : new Date();

if (!new Set(["daily", "weekly"]).has(digestType)) {
  throw new Error("DIGEST_TYPE must be either 'daily' or 'weekly'.");
}

if (!Number.isFinite(maxFeedAgeHours) || maxFeedAgeHours <= 0) {
  throw new Error("MAX_FEED_AGE_HOURS must be a positive number.");
}

if (Number.isNaN(now.getTime())) {
  throw new Error("DIGEST_NOW must be a valid ISO date when provided.");
}

const feedSpecifications = [
  { filename: "feed-x.json", collection: "x" },
  { filename: "feed-podcasts.json", collection: "podcasts" },
  { filename: "feed-blogs.json", collection: "blogs" },
];

const promptFilenames = [
  "digest-intro.md",
  "summarize-tweets.md",
  "summarize-podcast.md",
  "summarize-blogs.md",
  "translate.md",
];

fs.mkdirSync(inputDirectory, { recursive: true });

const feedData = {};
const generatedAt = {};

for (const { filename, collection } of feedSpecifications) {
  const sourcePath = path.join(sourceDirectory, filename);
  let parsed;

  try {
    parsed = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
  } catch (error) {
    throw new Error(`Unable to parse ${sourcePath}: ${error.message}`);
  }

  if (!Array.isArray(parsed[collection])) {
    throw new Error(`${filename} must contain a '${collection}' array.`);
  }

  if (typeof parsed.generatedAt !== "string" || parsed.generatedAt.length === 0) {
    throw new Error(`${filename} must contain a non-empty generatedAt value.`);
  }

  const feedTimestamp = new Date(parsed.generatedAt);
  if (Number.isNaN(feedTimestamp.getTime())) {
    throw new Error(`${filename} contains an invalid generatedAt value.`);
  }

  const ageHours = (now.getTime() - feedTimestamp.getTime()) / HOUR_MS;
  if (ageHours < -1) {
    throw new Error(
      `${filename} is more than one hour in the future (${ageHours.toFixed(2)}h).`,
    );
  }
  if (ageHours > maxFeedAgeHours) {
    throw new Error(
      `${filename} is stale (${ageHours.toFixed(2)}h old; maximum is ${maxFeedAgeHours}h).`,
    );
  }

  feedData[collection] = parsed[collection];
  generatedAt[collection] = parsed.generatedAt;
  fs.copyFileSync(sourcePath, path.join(inputDirectory, filename));
}

for (const filename of promptFilenames) {
  const sourcePath = path.join(sourceDirectory, "prompts", filename);
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Required prompt is missing: ${sourcePath}`);
  }
  fs.copyFileSync(sourcePath, path.join(inputDirectory, filename));
}

function getLocalDateParts(date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
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

const localParts = getLocalDateParts(now);
const localDateAtNoonUtc = new Date(
  Date.UTC(
    Number(localParts.year),
    Number(localParts.month) - 1,
    Number(localParts.day),
    12,
  ),
);

let digestDate;
let dayOfWeek;
if (digestType === "weekly") {
  const daysSinceMonday = (localDateAtNoonUtc.getUTCDay() + 6) % 7;
  digestDate = formatUtcDate(
    new Date(localDateAtNoonUtc.getTime() - daysSinceMonday * DAY_MS),
  );
  dayOfWeek = "Mon";
} else {
  digestDate = formatUtcDate(localDateAtNoonUtc);
  dayOfWeek = localParts.weekday;
}

const filename = `ai-digest-${digestDate}-${dayOfWeek}.md`;
const outputFiles = [
  `en/${digestType}/${filename}`,
  `zh/${digestType}/${filename}`,
  `bilingual/${digestType}/${filename}`,
];
const commitMessage = `add: ${digestType} digest ${digestDate} (${dayOfWeek}) by Codex`;

const context = {
  digestType,
  timezone: TIME_ZONE,
  digestDate,
  dayOfWeek,
  filename,
  outputFiles,
  readme: {
    english:
      `Latest ${digestType}: ${filename} ` +
      `[中文](zh/${digestType}/${filename}) | ` +
      `[English](en/${digestType}/${filename}) | ` +
      `[Bilingual](bilingual/${digestType}/${filename})`,
    chinese:
      `${digestType === "daily" ? "最新日报" : "最新周报"}: ${filename} ` +
      `[中文](zh/${digestType}/${filename}) | ` +
      `[English](en/${digestType}/${filename}) | ` +
      `[双语](bilingual/${digestType}/${filename})`,
  },
  commitMessage,
  feeds: {
    generatedAt,
    counts: {
      xBuilders: feedData.x.length,
      totalTweets: feedData.x.reduce(
        (total, builder) =>
          total + (Array.isArray(builder.tweets) ? builder.tweets.length : 0),
        0,
      ),
      podcastEpisodes: feedData.podcasts.length,
      blogPosts: feedData.blogs.length,
    },
  },
  preparedAt: now.toISOString(),
};

fs.writeFileSync(
  path.join(inputDirectory, "run-context.json"),
  `${JSON.stringify(context, null, 2)}\n`,
);

if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(
    process.env.GITHUB_OUTPUT,
    [
      `filename=${filename}`,
      `digest_type=${digestType}`,
      `commit_message=${commitMessage}`,
      "",
    ].join("\n"),
  );
}

console.log(JSON.stringify(context, null, 2));
