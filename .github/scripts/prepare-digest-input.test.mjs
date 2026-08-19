import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const SCRIPT = path.resolve(".github/scripts/prepare-digest-input.mjs");
const VALIDATOR = path.resolve(".github/scripts/validate-digest-output.mjs");
const HOUR_MS = 60 * 60 * 1000;
const FOOTER =
  "Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders";
const PROMPTS = [
  "digest-intro.md",
  "summarize-tweets.md",
  "summarize-podcast.md",
  "summarize-blogs.md",
  "translate.md",
];

function writeJson(filename, value) {
  fs.writeFileSync(filename, `${JSON.stringify(value, null, 2)}\n`);
}

function makeItem(kind, id, timestamp) {
  const root =
    kind === "tweet" ? "https://x.com/example/status" : "https://example.com";
  return {
    ...(kind === "tweet" ? { id } : { guid: id }),
    title: `${kind} ${id}`,
    text: `${kind} source text ${id}`,
    url: `${root}/${id}`,
    [kind === "tweet" ? "createdAt" : "publishedAt"]: timestamp,
  };
}

function createSource(snapshotCount = 8) {
  const root = fs.mkdtempSync(
    path.join(os.tmpdir(), "ai-builders-automation-test-"),
  );
  const source = path.join(root, "follow-builders");
  const input = path.join(root, "input");
  fs.mkdirSync(path.join(source, "prompts"), { recursive: true });
  for (const prompt of PROMPTS) {
    fs.writeFileSync(path.join(source, "prompts", prompt), `# ${prompt}\n`);
  }

  execFileSync("git", ["init", "--quiet", source]);
  execFileSync("git", ["-C", source, "config", "user.name", "Test"]);
  execFileSync("git", ["-C", source, "config", "user.email", "test@example.com"]);

  const firstGeneratedAt = Date.parse("2026-08-10T06:30:00.000Z");
  for (let index = 0; index < snapshotCount; index += 1) {
    const generatedAt = new Date(firstGeneratedAt + index * 24 * HOUR_MS);
    const itemTimestamp = new Date(generatedAt.getTime() - 12 * HOUR_MS);
    const tweets = [makeItem("tweet", `tweet-${index}`, itemTimestamp.toISOString())];
    const podcasts = [
      makeItem("podcast", `podcast-${index}`, itemTimestamp.toISOString()),
    ];
    const blogs = [makeItem("blog", `blog-${index}`, itemTimestamp.toISOString())];

    if (index === 0) {
      tweets.push(
        makeItem("tweet", "before-start", "2026-08-09T15:59:59.999Z"),
        makeItem("tweet", "at-start", "2026-08-09T16:00:00.000Z"),
      );
    }
    if (index === snapshotCount - 1 && snapshotCount === 8) {
      tweets.push(
        makeItem("tweet", "before-end", "2026-08-16T15:59:59.999Z"),
        makeItem("tweet", "at-end", "2026-08-16T16:00:00.000Z"),
      );
    }
    if (index === 2 || index === 3) {
      const repeated = makeItem(
        "tweet",
        index === 2 ? "repeated" : "repeated-alias",
        "2026-08-12T00:00:00.000Z",
      );
      repeated.url = "https://x.com/example/status/repeated";
      tweets.push(repeated);
    }

    writeJson(path.join(source, "feed-x.json"), {
      generatedAt: generatedAt.toISOString(),
      lookbackHours: 24,
      x: [
        {
          name: "Example Builder",
          handle: "example",
          bio: "Builder",
          source: "fixture",
          tweets,
        },
      ],
    });
    writeJson(path.join(source, "feed-podcasts.json"), {
      generatedAt: generatedAt.toISOString(),
      lookbackHours: 336,
      podcasts,
    });
    writeJson(path.join(source, "feed-blogs.json"), {
      generatedAt: generatedAt.toISOString(),
      lookbackHours: 72,
      blogs,
    });
    execFileSync("git", ["-C", source, "add", "feed-x.json", "feed-podcasts.json", "feed-blogs.json"]);
    execFileSync("git", ["-C", source, "commit", "--quiet", "-m", `feed ${index}`]);
  }

  return { root, source, input };
}

function runPrepare(fixture, overrides = {}) {
  const githubOutput = path.join(fixture.root, "github-output.txt");
  const result = spawnSync(process.execPath, [SCRIPT], {
    encoding: "utf8",
    env: {
      ...process.env,
      DIGEST_TYPE: "weekly",
      DIGEST_NOW: "2026-08-17T10:30:00.000Z",
      FOLLOW_BUILDERS_DIR: fixture.source,
      DIGEST_INPUT_DIR: fixture.input,
      MAX_FEED_AGE_HOURS: "24",
      MAX_SNAPSHOT_GAP_HOURS: "2",
      WEEKLY_HISTORY_LIMIT: "30",
      MIN_WEEKLY_SNAPSHOTS: "8",
      GITHUB_OUTPUT: githubOutput,
      ...overrides,
    },
  });
  return { ...result, githubOutput };
}

function weeklyDocument(language, filename, sourceUrl) {
  const navigation = {
    en:
      `[English](./${filename}) | [中文](../../zh/weekly/${filename}) | ` +
      `[Bilingual](../../bilingual/weekly/${filename})`,
    zh:
      `[English](../../en/weekly/${filename}) | [中文](./${filename}) | ` +
      `[双语](../../bilingual/weekly/${filename})`,
    bilingual:
      `[English](../../en/weekly/${filename}) | ` +
      `[中文](../../zh/weekly/${filename}) | [Bilingual](./${filename})`,
  };
  const briefing = {
    en: Array.from({ length: 5 }, (_, index) => `Weekly theme ${index + 1}.`),
    zh: Array.from({ length: 5 }, (_, index) => `每周主题 ${index + 1}。`),
    bilingual: Array.from({ length: 5 }, (_, index) => [
      `Weekly theme ${index + 1}.`,
      `每周主题 ${index + 1}。`,
    ]).flat(),
  };
  const briefingHeading = {
    en: "## Reader's Briefing",
    zh: "## 导读",
    bilingual: "## Reader's Briefing / 导读",
  };
  const coverage = {
    en: ["Coverage: 2026-08-10 00:00 to 2026-08-17 00:00 Asia/Shanghai"],
    zh: ["覆盖范围：2026-08-10 00:00 至 2026-08-17 00:00（Asia/Shanghai）"],
    bilingual: [
      "Coverage: 2026-08-10 00:00 to 2026-08-17 00:00 Asia/Shanghai",
      "覆盖范围：2026-08-10 00:00 至 2026-08-17 00:00（Asia/Shanghai）",
    ],
  };

  return [
    navigation[language],
    "",
    "---",
    "",
    "# AI Builders Digest",
    "",
    ...coverage[language],
    "",
    briefingHeading[language],
    "",
    ...briefing[language].flatMap((paragraph) => [paragraph, ""]),
    "## X / Twitter",
    "",
    language === "zh" ? "来源摘要。" : "Source summary.",
    "",
    sourceUrl,
    "",
    "## Podcast",
    "",
    language === "zh" ? "本周没有播客。" : "No podcast this week.",
    "",
    "## Blog",
    "",
    language === "zh" ? "本周没有博客。" : "No blog this week.",
    "",
    FOOTER,
    "",
  ].join("\n");
}

test("weekly preparation uses eight snapshots and exact Shanghai boundaries", (t) => {
  const fixture = createSource();
  t.after(() => fs.rmSync(fixture.root, { recursive: true, force: true }));

  const result = runPrepare(fixture);
  assert.equal(result.status, 0, result.stderr);

  const context = JSON.parse(
    fs.readFileSync(path.join(fixture.input, "run-context.json"), "utf8"),
  );
  assert.equal(context.filename, "ai-digest-2026-08-17-Mon.md");
  assert.equal(context.promptFile, ".github/codex/prompts/generate-weekly-digest.md");
  assert.deepEqual(
    [context.coverage.start, context.coverage.end],
    ["2026-08-09T16:00:00.000Z", "2026-08-16T16:00:00.000Z"],
  );
  assert.equal(context.feeds.sourceSnapshotCount, 8);

  const xFeed = JSON.parse(
    fs.readFileSync(path.join(fixture.input, "feed-x.json"), "utf8"),
  );
  const tweets = xFeed.x.flatMap((builder) => builder.tweets);
  const ids = tweets.map((tweet) => tweet.id);
  assert(ids.includes("at-start"));
  assert(ids.includes("before-end"));
  assert(!ids.includes("before-start"));
  assert(!ids.includes("at-end"));
  assert.equal(ids.filter((id) => id.startsWith("repeated")).length, 1);
  assert.equal(new Set(tweets.map((tweet) => tweet.url)).size, tweets.length);
  assert(
    tweets.every((tweet) => {
      const timestamp = Date.parse(tweet.createdAt);
      return (
        timestamp >= Date.parse(context.coverage.start) &&
        timestamp < Date.parse(context.coverage.end)
      );
    }),
  );

  const outputs = fs.readFileSync(result.githubOutput, "utf8");
  assert.match(outputs, /prompt_file=.github\/codex\/prompts\/generate-weekly-digest\.md/u);
});

test("weekly preparation fails instead of publishing without Monday's snapshot", (t) => {
  const fixture = createSource(7);
  t.after(() => fs.rmSync(fixture.root, { recursive: true, force: true }));

  const result = runPrepare(fixture, {
    MIN_WEEKLY_SNAPSHOTS: "7",
    MAX_FEED_AGE_HOURS: "48",
  });
  assert.notEqual(result.status, 0);
  assert.match(
    `${result.stdout}\n${result.stderr}`,
    /does not reach the weekly window end/u,
  );
});

test("daily preparation keeps the latest-feed path", (t) => {
  const fixture = createSource();
  t.after(() => fs.rmSync(fixture.root, { recursive: true, force: true }));

  const result = runPrepare(fixture, { DIGEST_TYPE: "daily" });
  assert.equal(result.status, 0, result.stderr);

  const context = JSON.parse(
    fs.readFileSync(path.join(fixture.input, "run-context.json"), "utf8"),
  );
  assert.equal(context.filename, "ai-digest-2026-08-17-Mon.md");
  assert.equal(context.coverage, null);
  assert.equal(context.feeds.sourceSnapshotCount, 0);
  assert.equal(context.promptFile, ".github/codex/prompts/generate-digest.md");
  assert.equal(
    fs.readFileSync(path.join(fixture.input, "feed-x.json"), "utf8"),
    fs.readFileSync(path.join(fixture.source, "feed-x.json"), "utf8"),
  );
});

test("output validation accepts sourced weekly editions and rejects unknown URLs", (t) => {
  const fixture = createSource();
  t.after(() => fs.rmSync(fixture.root, { recursive: true, force: true }));
  const preparation = runPrepare(fixture);
  assert.equal(preparation.status, 0, preparation.stderr);

  const context = JSON.parse(
    fs.readFileSync(path.join(fixture.input, "run-context.json"), "utf8"),
  );
  const xFeed = JSON.parse(
    fs.readFileSync(path.join(fixture.input, "feed-x.json"), "utf8"),
  );
  const sourceUrl = xFeed.x[0].tweets[0].url;
  const project = path.join(fixture.root, "project");
  fs.mkdirSync(project);
  fs.writeFileSync(
    path.join(project, "README.md"),
    "# Test\n\nLatest daily: unchanged\n\nLatest weekly: old\n",
  );
  fs.writeFileSync(
    path.join(project, "README.zh-CN.md"),
    "# 测试\n\n最新日报: 不变\n\n最新周报: 旧\n",
  );
  execFileSync("git", ["init", "--quiet", project]);
  execFileSync("git", ["-C", project, "config", "user.name", "Test"]);
  execFileSync("git", ["-C", project, "config", "user.email", "test@example.com"]);
  execFileSync("git", ["-C", project, "add", "README.md", "README.zh-CN.md"]);
  execFileSync("git", ["-C", project, "commit", "--quiet", "-m", "initial"]);

  fs.writeFileSync(
    path.join(project, "README.md"),
    `# Test\n\nLatest daily: unchanged\n\n${context.readme.english}\n`,
  );
  fs.writeFileSync(
    path.join(project, "README.zh-CN.md"),
    `# 测试\n\n最新日报: 不变\n\n${context.readme.chinese}\n`,
  );

  for (const language of ["en", "zh", "bilingual"]) {
    const output = path.join(
      project,
      language,
      "weekly",
      context.filename,
    );
    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(output, weeklyDocument(language, context.filename, sourceUrl));
  }

  const validate = () =>
    spawnSync(process.execPath, [VALIDATOR], {
      cwd: project,
      encoding: "utf8",
      env: {
        ...process.env,
        DIGEST_TYPE: "weekly",
        DIGEST_FILENAME: context.filename,
        DIGEST_INPUT_DIR: fixture.input,
      },
    });
  const validResult = validate();
  assert.equal(validResult.status, 0, validResult.stderr);

  const englishOutput = path.join(project, context.outputFiles[0]);
  fs.writeFileSync(
    englishOutput,
    fs
      .readFileSync(englishOutput, "utf8")
      .replace(FOOTER, `https://example.com/not-in-feed\n\n${FOOTER}`),
  );
  const invalidResult = validate();
  assert.notEqual(invalidResult.status, 0);
  assert.match(
    `${invalidResult.stdout}\n${invalidResult.stderr}`,
    /URL that is absent from the feeds/u,
  );
});
