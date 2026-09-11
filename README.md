[简体中文](README.zh-CN.md) | **English**

# AI Builders Digest

Daily and weekly digests of ideas, product moves, and signals from AI builders.

Curated highlights from leading builders in AI—researchers, founders, product managers, and engineers.

> Follow people who build products and have original opinions, not influencers who regurgitate information.

This digest emphasizes builders' personal insights, firsthand observations, and product thinking rather than recycled or repackaged industry commentary.

If you're looking for a more classic newsletter experience instead, please visit [Horizon](https://thysrael.github.io/Horizon/).

This project is in beta. Daily and weekly updates are generated in GitHub Actions by Codex from the verified Follow Builders feeds. If an update is delayed, check the workflow run, feed freshness, and DeepSeek API availability.

---

Latest daily: ai-digest-2026-09-11-Fri.md [中文](zh/daily/ai-digest-2026-09-11-Fri.md) | [English](en/daily/ai-digest-2026-09-11-Fri.md) | [Bilingual](bilingual/daily/ai-digest-2026-09-11-Fri.md)

Latest weekly: ai-digest-2026-09-07-Mon.md [中文](zh/weekly/ai-digest-2026-09-07-Mon.md) | [English](en/weekly/ai-digest-2026-09-07-Mon.md) | [Bilingual](bilingual/weekly/ai-digest-2026-09-07-Mon.md)

---

## Automation

- Daily digest: primary slot at 16:30 Asia/Shanghai, with one recovery slot at 10:30 the next day. A delayed primary defers cleanly when feeds are stale; the recovery slot targets the previous Shanghai date and fails visibly if the feeds are still unavailable.
- Weekly digest: primary slot on Monday at 18:30 Asia/Shanghai, with one recovery slot on Tuesday at 12:30. It deduplicates the upstream feed history into the previous complete Monday-to-Monday week. Upstream scheduler gaps up to 18 hours are disclosed exactly; larger gaps stop publication.
- Recovery slots skip before the model call when all three language editions already exist, so each date or week is generated at most once. A recovery that arrives after a newer edition is also skipped to prevent the README pointer from moving backwards.
- Successful runs commit directly to `main`.
- Required GitHub Actions secret: `DEEPSEEK_API_KEY`.

Powered by: the latest verified feeds from the [follow-builders skill](https://github.com/zarazhangrui/follow-builders).

Executed by: [GitHub Actions](https://github.com/features/actions) & [Codex](https://chatgpt.com/codex/), using DeepSeek V4 Flash as the model backend.
