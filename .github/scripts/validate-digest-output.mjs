import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const FOOTER =
  "Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders";
const FOOTER_URL = "https://github.com/zarazhangrui/follow-builders";
const DAY_MS = 24 * 60 * 60 * 1000;

const digestType = process.env.DIGEST_TYPE;
const digestFilename = process.env.DIGEST_FILENAME;
const inputDirectory = path.resolve(
  process.env.DIGEST_INPUT_DIR ?? ".codex-input",
);

function fail(message) {
  throw new Error(message);
}

function readJson(filename) {
  const filePath = path.join(inputDirectory, filename);
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    fail(`Unable to read ${filePath}: ${error.message}`);
  }
}

function readText(filename) {
  try {
    return fs.readFileSync(filename, "utf8").replaceAll("\r\n", "\n");
  } catch (error) {
    fail(`Unable to read ${filename}: ${error.message}`);
  }
}

function sameArray(left, right) {
  return (
    left.length === right.length &&
    left.every((value, index) => value === right[index])
  );
}

function countExactLine(lines, expected) {
  return lines.filter((line) => line === expected).length;
}

function paragraphBlocks(lines, start, end) {
  const body = lines.slice(start, end).join("\n").trim();
  return body.length === 0 ? [] : body.split(/\n[ \t]*\n/u);
}

function extractUrls(text) {
  const matches = text.match(/https?:\/\/[^\s<>\])]+/gu) ?? [];
  return new Set(
    matches.map((url) => url.replace(/[.,;:!?"'`，。；：！？]+$/gu, "")),
  );
}

function setsEqual(left, right) {
  return left.size === right.size && [...left].every((value) => right.has(value));
}

function validateReadme(filename, expectedLine, prefixes) {
  const current = readText(filename).split("\n");
  let original;
  try {
    original = execFileSync("git", ["show", `HEAD:${filename}`], {
      encoding: "utf8",
    })
      .replaceAll("\r\n", "\n")
      .split("\n");
  } catch (error) {
    fail(`Unable to read HEAD:${filename}: ${error.message}`);
  }

  const isTarget = (line) => prefixes.some((prefix) => line.startsWith(prefix));
  const currentTargets = current.filter(isTarget);
  if (currentTargets.length !== 1 || currentTargets[0] !== expectedLine) {
    fail(`${filename} must contain exactly this latest line: ${expectedLine}`);
  }

  const scrub = (lines) =>
    lines.map((line) => (isTarget(line) ? "<LATEST_DIGEST_LINE>" : line));
  if (!sameArray(scrub(current), scrub(original))) {
    fail(`${filename} changed outside its ${digestType} latest-digest line.`);
  }
}

if (!new Set(["daily", "weekly"]).has(digestType)) {
  fail("DIGEST_TYPE must be either 'daily' or 'weekly'.");
}
if (!digestFilename) {
  fail("DIGEST_FILENAME must be set.");
}

const context = readJson("run-context.json");
const xFeed = readJson("feed-x.json");
const podcastFeed = readJson("feed-podcasts.json");
const blogFeed = readJson("feed-blogs.json");

if (context.digestType !== digestType || context.filename !== digestFilename) {
  fail("run-context.json does not match DIGEST_TYPE and DIGEST_FILENAME.");
}

const outputFiles = {
  en: `en/${digestType}/${digestFilename}`,
  zh: `zh/${digestType}/${digestFilename}`,
  bilingual: `bilingual/${digestType}/${digestFilename}`,
};
const expectedOutputFiles = Object.values(outputFiles);
if (
  !Array.isArray(context.outputFiles) ||
  !sameArray(context.outputFiles, expectedOutputFiles)
) {
  fail("run-context.json contains unexpected output paths.");
}

if (digestType === "weekly") {
  const { coverage } = context;
  if (!coverage || coverage.timezone !== "Asia/Shanghai") {
    fail("Weekly context must contain an Asia/Shanghai coverage window.");
  }
  const start = new Date(coverage.start);
  const end = new Date(coverage.end);
  if (
    Number.isNaN(start.getTime()) ||
    Number.isNaN(end.getTime()) ||
    end.getTime() - start.getTime() !== 7 * DAY_MS
  ) {
    fail("Weekly coverage must be exactly seven days.");
  }
  if (
    start.getUTCHours() !== 16 ||
    end.getUTCHours() !== 16 ||
    start.getUTCMinutes() !== 0 ||
    end.getUTCMinutes() !== 0 ||
    start.getUTCSeconds() !== 0 ||
    end.getUTCSeconds() !== 0 ||
    start.getUTCMilliseconds() !== 0 ||
    end.getUTCMilliseconds() !== 0
  ) {
    fail("Weekly coverage boundaries must be midnight in Asia/Shanghai.");
  }
  const localDate = (date) =>
    new Date(date.getTime() + 8 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10);
  if (
    coverage.startDate !== localDate(start) ||
    coverage.endDate !== localDate(end)
  ) {
    fail("Weekly coverage dates do not match their timestamp boundaries.");
  }
  if ((context.feeds?.sourceSnapshotCount ?? 0) < 8) {
    fail("Weekly context must contain at least eight source snapshots.");
  }

  for (const [filename, feed] of [
    ["feed-x.json", xFeed],
    ["feed-podcasts.json", podcastFeed],
    ["feed-blogs.json", blogFeed],
  ]) {
    if (
      feed.weeklyWindow?.start !== coverage.start ||
      feed.weeklyWindow?.end !== coverage.end ||
      feed.weeklyWindow?.timezone !== coverage.timezone
    ) {
      fail(`${filename} does not match the weekly coverage window.`);
    }
  }
}

const allowedSourceUrls = new Set();
for (const builder of xFeed.x ?? []) {
  for (const tweet of builder.tweets ?? []) {
    if (tweet.url) allowedSourceUrls.add(tweet.url);
  }
}
for (const item of podcastFeed.podcasts ?? []) {
  if (item.url) allowedSourceUrls.add(item.url);
}
for (const item of blogFeed.blogs ?? []) {
  if (item.url) allowedSourceUrls.add(item.url);
}

const documents = {};
const navigation = {
  en:
    `[English](./${digestFilename}) | ` +
    `[中文](../../zh/${digestType}/${digestFilename}) | ` +
    `[Bilingual](../../bilingual/${digestType}/${digestFilename})`,
  zh:
    `[English](../../en/${digestType}/${digestFilename}) | ` +
    `[中文](./${digestFilename}) | ` +
    `[双语](../../bilingual/${digestType}/${digestFilename})`,
  bilingual:
    `[English](../../en/${digestType}/${digestFilename}) | ` +
    `[中文](../../zh/${digestType}/${digestFilename}) | ` +
    `[Bilingual](./${digestFilename})`,
};
const briefingHeadings = {
  en: "## Reader's Briefing",
  zh: "## 导读",
  bilingual: "## Reader's Briefing / 导读",
};

for (const language of ["en", "zh", "bilingual"]) {
  const filename = outputFiles[language];
  const text = readText(filename);
  const lines = text.split("\n");
  documents[language] = { text, lines };

  if (lines[0] !== navigation[language]) {
    fail(`${filename} has an incorrect first-line language switch.`);
  }

  const requiredHeadings = [
    briefingHeadings[language],
    "## X / Twitter",
    "## Podcast",
    "## Blog",
  ];
  const actualHeadings = lines.filter((line) => line.startsWith("## "));
  if (!sameArray(actualHeadings, requiredHeadings)) {
    fail(`${filename} has missing, extra, or out-of-order level-two headings.`);
  }

  const separatorIndex = lines.indexOf("---");
  const titleIndex = lines.indexOf("# AI Builders Digest");
  const briefingIndex = lines.indexOf(briefingHeadings[language]);
  const xIndex = lines.indexOf("## X / Twitter");
  if (
    separatorIndex <= 0 ||
    titleIndex <= separatorIndex ||
    briefingIndex <= titleIndex ||
    xIndex <= briefingIndex
  ) {
    fail(`${filename} does not follow the required document structure.`);
  }

  const expectedBlocks = language === "bilingual" ? 10 : 5;
  const blocks = paragraphBlocks(lines, briefingIndex + 1, xIndex);
  if (blocks.length !== expectedBlocks) {
    fail(
      `${filename} must contain exactly ${expectedBlocks} briefing paragraphs; found ${blocks.length}.`,
    );
  }

  const lastNonEmpty = [...lines].reverse().find((line) => line.trim().length > 0);
  if (lastNonEmpty !== FOOTER) {
    fail(`${filename} must end with the exact Follow Builders footer.`);
  }
  if (countExactLine(lines, FOOTER) !== 1) {
    fail(`${filename} must contain the Follow Builders footer exactly once.`);
  }

  if (digestType === "weekly") {
    const englishCoverage =
      `Coverage: ${context.coverage.startDate} 00:00 to ` +
      `${context.coverage.endDate} 00:00 Asia/Shanghai`;
    const chineseCoverage =
      `覆盖范围：${context.coverage.startDate} 00:00 至 ` +
      `${context.coverage.endDate} 00:00（Asia/Shanghai）`;
    const expectedCoverage =
      language === "en"
        ? englishCoverage
        : language === "zh"
          ? chineseCoverage
          : `${englishCoverage}\n${chineseCoverage}`;
    if (!text.includes(expectedCoverage)) {
      fail(`${filename} is missing its exact weekly coverage line.`);
    }
    if (
      countExactLine(lines, englishCoverage) !==
        (language === "en" || language === "bilingual" ? 1 : 0) ||
      countExactLine(lines, chineseCoverage) !==
        (language === "zh" || language === "bilingual" ? 1 : 0)
    ) {
      fail(`${filename} contains duplicate or unexpected coverage lines.`);
    }
    const firstCoverageIndex = lines.indexOf(
      language === "zh" ? chineseCoverage : englishCoverage,
    );
    const lastCoverageIndex = lines.indexOf(
      language === "en" ? englishCoverage : chineseCoverage,
    );
    if (
      firstCoverageIndex <= titleIndex ||
      lastCoverageIndex >= briefingIndex ||
      (language === "bilingual" &&
        lastCoverageIndex !== firstCoverageIndex + 1)
    ) {
      fail(`${filename} has a misplaced weekly coverage line.`);
    }
  }

  const sourceUrls = extractUrls(text);
  sourceUrls.delete(FOOTER_URL);
  for (const url of sourceUrls) {
    if (!allowedSourceUrls.has(url)) {
      fail(`${filename} contains a URL that is absent from the feeds: ${url}`);
    }
  }
  documents[language].sourceUrls = sourceUrls;
}

if (documents.zh.text.includes("—")) {
  fail(`${outputFiles.zh} contains an em dash.`);
}

if (
  !setsEqual(documents.en.sourceUrls, documents.zh.sourceUrls) ||
  !setsEqual(documents.en.sourceUrls, documents.bilingual.sourceUrls)
) {
  fail("English, Chinese, and bilingual outputs must cite the same source URLs.");
}

const readmePrefixes =
  digestType === "daily"
    ? {
        en: ["Latest daily:"],
        zh: ["最新日报:", "Latest daily:"],
      }
    : {
        en: ["Latest weekly:"],
        zh: ["最新周报:", "Latest weekly:"],
      };
validateReadme("README.md", context.readme.english, readmePrefixes.en);
validateReadme("README.zh-CN.md", context.readme.chinese, readmePrefixes.zh);

console.log(
  `Validated ${digestType} digest ${digestFilename}: ` +
    `${documents.en.sourceUrls.size} source URLs across three editions.`,
);
