[English](./ai-digest-2026-10-24-Sat.md) | [中文](../../zh/daily/ai-digest-2026-10-24-Sat.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-10-24-Sat.md)

---

# AI Builders Digest

## Reader's Briefing

Coding agents are competing on operational polish as much as model quality. OpenAI's Thibault Sottiaux said Codex CLI added reusable prompt presets, inline model and permission settings, enterprise MCP sign-in, long-session resume fixes, and Windows corporate-proxy authentication, and reported that CLI usage has doubled since DevDay. He also noted faster call connections and a cache-preserving change for reasoning switches mid-conversation. ([Codex CLI update](https://x.com/thsottiaux/status/2113770862860222611); [Day 19 update](https://x.com/thsottiaux/status/2113770573994299544))

Context and memory are becoming first-class agent infrastructure. Replit CEO Amjad Masad welcomed Jeff and the Chroma team to Replit, praising their early RAG work and saying they will help give agents the context and memory they need to do real work. He framed the move as part of a larger push toward the "self-driving company." ([Chroma announcement](https://x.com/amasad/status/2113736007111827606))

Agent security is now a systems problem. Vercel CEO Guillermo Rauch described a shared-host timing attack as a "noisy neighbor" issue: one agent can generate CPU-cache noise that another agent detects by measuring its own computation. He said the class of attack has been known since at least 2015, has no complete fix apart from dedicated hardware, and requires practical mitigations plus monitoring and red-teaming. ([timing-attack analysis](https://x.com/rauchg/status/2113759533801877920))

Cyber defense is emerging as a major agent workload. Box CEO Aaron Levie argues that agent swarms will review code and infrastructure, test many risk permutations, and process large data volumes because more compute translates into more security value. In the podcast feed, Cloudflare CTO Dane Knecht says AI is both accelerating vulnerability discovery and offering a faster path to patching. ([agent swarms](https://x.com/levie/status/2113738768645808277); [podcast source](https://www.youtube.com/@NoPriorsPodcast))

Enterprise and public-sector agents need deployment channels. Replit separately announced Replit for Government and welcomed Michael Greenwald, who previously led AWS's public-sector business, to the team. ([government announcement](https://x.com/amasad/status/2113676717105787192))

Talent and technical strategy are shifting around agents. Thariq announced he left Anthropic after more than a year on Claude Code, praising the team's mission-driven "race to the top" while taking a break before his next step. SPC general partner and Bevel Health co-founder Aditya Agarwal highlighted a complementary lesson from robotics: solve many problems together rather than building specialized systems, and summarized the principle as "Make the problem bigger." ([Thariq's announcement](https://x.com/trq212/status/2113844051938054167); [Aditya Agarwal](https://x.com/adityaag/status/2113666947766169868))

## X / Twitter

### Thibault Sottiaux

OpenAI's Thibault Sottiaux, who works on Codex and ChatGPT, said Codex CLI now supports reusable prompt presets, inline model and permission settings, and enterprise MCP sign-in. The update also fixes failures when resuming long sessions and adds Windows corporate-proxy authentication; Sottiaux said CLI usage has doubled since DevDay. Separately, he reported faster call connections, cache-preserving reasoning changes during a conversation, and another CLI update. ([Codex CLI update](https://x.com/thsottiaux/status/2113770862860222611); [Day 19 update](https://x.com/thsottiaux/status/2113770573994299544))

### Thariq

Thariq announced that he left Anthropic after more than a year working on Claude Code, which he said scaled larger than he ever imagined. He praised Anthropic's mission, especially the idea of a "race to the top," and called his colleagues the most talented, thoughtful, competent, and earnest people he has met. He is taking a break before starting something new and directed readers to other Claude Code contributors for more content. ([announcement](https://x.com/trq212/status/2113844051938054167))

### Amjad Masad

Replit CEO Amjad Masad welcomed Jeff and the Chroma team to Replit, calling them AI pioneers who were building RAG before it was a thing. He said they will help give agents the context and memory needed for real work and called the move a step toward the "self-driving company." Separately, Replit announced Replit for Government and welcomed Michael Greenwald, who previously led AWS's public-sector business. ([Chroma announcement](https://x.com/amasad/status/2113736007111827606); [Replit for Government](https://x.com/amasad/status/2113676717105787192))

### Guillermo Rauch

Vercel CEO Guillermo Rauch described an OpenAI finding as a "noisy neighbor" timing attack in the cloud: when two agents share a machine, one can generate enough CPU-cache noise for the other to detect it by timing its own computation and cache accesses. He said attacks in this class have been known since at least 2015 and have no full solution; running each agent on dedicated hardware is the only complete fix, but it has significant economic costs. Rauch said Vercel Sandbox has deployed practical mitigations plus always-on monitoring and red-teaming. ([analysis](https://x.com/rauchg/status/2113759533801877920))

### Aaron Levie

Box CEO Aaron Levie predicts that agent swarms for cyber defense will become one of the biggest categories in AI. He argues that security is a strong fit because more compute produces more value, and agents can test far more permutations of risk and process more data than teams can handle manually. In his view, the next period in cyber will be "a wild time." ([post](https://x.com/levie/status/2113738768645808277))

### Aditya Agarwal

SPC general partner and Bevel Health co-founder Aditya Agarwal highlighted a recurring AI principle: major advances come from solving many problems together rather than training specialized systems for individual tasks. He connected it to svlevine's robotics argument at physical_int and summarized the lesson as "Make the problem bigger." ([post](https://x.com/adityaag/status/2113666947766169868))

## Podcast

### No Priors: Democratizing Security for the Agentic Web with Cloudflare CTO Dane Knecht

**The Takeaway:** AI is both widening the software vulnerability problem and supplying the tooling to contain it faster, which means security must be designed into every stage of the agent development lifecycle.

Dane Knecht, CTO of Cloudflare, sees the past year as an inflection point in which AI moved from experimentation to a new security surface. He says serious vulnerabilities that once arrived roughly once a year now arrive weekly, and he expects security to absorb more than half of engineering time during the next 18 months. Teams are still patching 70 years of accumulated software while agents increase the rate at which new code is produced. Knecht is less fatalistic than the air-gap-everything camp: he argues that zero-trust architecture leaves many organizations better prepared than a retreat from the internet would suggest.

His most useful warning is that AI can make software harder to secure before it makes it easier. "AI is very verbose. It likes to create complexity," he says, which works against the first principle of reducing attack surface. The answer is to combine human judgment, adversarial reviews, formal verification, safer languages, and safer runtimes. Cloudflare is also expanding from one red team to four or five and encoding its engineering standards so agents can follow them during reviews.

Knecht rejects a security freeze: "if you're not shipping, you're dying." His argument is that AI can help teams patch and ship faster at the same time, provided discovery and remediation are automated into the workflow. On open models, he expects security capabilities to become broadly available because determined attackers will obtain them anyway; restricting access mainly excludes defenders who need the tools. ([source](https://www.youtube.com/@NoPriorsPodcast))

## Blog

No new qualifying blog posts were present in the validated feed.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
