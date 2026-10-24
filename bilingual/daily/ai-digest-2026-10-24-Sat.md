[English](../../en/daily/ai-digest-2026-10-24-Sat.md) | [中文](../../zh/daily/ai-digest-2026-10-24-Sat.md) | [Bilingual](./ai-digest-2026-10-24-Sat.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

Coding agents are competing on operational polish as much as model quality. OpenAI's Thibault Sottiaux said Codex CLI added reusable prompt presets, inline model and permission settings, enterprise MCP sign-in, long-session resume fixes, and Windows corporate-proxy authentication, and reported that CLI usage has doubled since DevDay. He also noted faster call connections and a cache-preserving change for reasoning switches mid-conversation. ([Codex CLI update](https://x.com/thsottiaux/status/2113770862860222611); [Day 19 update](https://x.com/thsottiaux/status/2113770573994299544))

编码 agent 的竞争，已经不只比模型质量，也比产品和运营细节。OpenAI 的 Thibault Sottiaux 表示，Codex CLI 新增了可复用 prompt 预设、行内模型与权限设置、企业 MCP 登录，并修复了长会话恢复失败的问题，还加入了 Windows 企业代理认证；他说 DevDay 以来 CLI 使用量翻了一倍。他还提到连接速度提升，以及会话中切换 reasoning 不再让缓存失效。([Codex CLI 更新](https://x.com/thsottiaux/status/2113770862860222611)；[Day 19 更新](https://x.com/thsottiaux/status/2113770573994299544))

Context and memory are becoming first-class agent infrastructure. Replit CEO Amjad Masad welcomed Jeff and the Chroma team to Replit, praising their early RAG work and saying they will help give agents the context and memory they need to do real work. He framed the move as part of a larger push toward the "self-driving company." ([Chroma announcement](https://x.com/amasad/status/2113736007111827606))

上下文和记忆正在成为 agent 的基础设施。Replit CEO Amjad Masad 欢迎 Jeff 和 Chroma 团队加入 Replit，称赞他们是 AI 先驱，在 RAG 还没有成为流行概念之前就在做 RAG，并表示他们将帮助 agent 获得完成实际工作所需的上下文和记忆。他把这一步视为通往 "self-driving company" 的一部分。([Chroma 公告](https://x.com/amasad/status/2113736007111827606))

Agent security is now a systems problem. Vercel CEO Guillermo Rauch described a shared-host timing attack as a "noisy neighbor" issue: one agent can generate CPU-cache noise that another agent detects by measuring its own computation. He said the class of attack has been known since at least 2015, has no complete fix apart from dedicated hardware, and requires practical mitigations plus monitoring and red-teaming. ([timing-attack analysis](https://x.com/rauchg/status/2113759533801877920))

agent 安全已经成为系统问题。Vercel CEO Guillermo Rauch 把 OpenAI 的一项发现描述为云端的 "noisy neighbor" timing attack：当两个 agent 共用一台机器时，一个 agent 可以制造足够的 CPU 缓存噪声，让另一个 agent 通过测量自身计算和缓存访问的时间来探测到它。他说这类攻击至少从 2015 年起就为人所知，目前没有完整解法；让每个 agent 运行在专用硬件上虽然是唯一完整的办法，但经济代价很高。Rauch 表示，Vercel Sandbox 已经部署了可行的缓解措施，并配合持续监控和 red teaming。([分析](https://x.com/rauchg/status/2113759533801877920))

Cyber defense is emerging as a major agent workload. Box CEO Aaron Levie argues that agent swarms will review code and infrastructure, test many risk permutations, and process large data volumes because more compute translates into more security value. In the podcast feed, Cloudflare CTO Dane Knecht says AI is both accelerating vulnerability discovery and offering a faster path to patching. ([agent swarms](https://x.com/levie/status/2113738768645808277); [podcast source](https://www.youtube.com/@NoPriorsPodcast))

网络防御正在成为 agent 的重要工作负载。Box CEO Aaron Levie 认为，用于网络防御的 agent swarm 将成为 AI 最大的类别之一。他的理由是，安全非常适合这种模式，因为投入更多算力就能产出更多价值，而且 agent 可以测试远超人工数量的风险组合，并处理更多数据。他还说，网络安全的下一阶段会是一段 "wild time"。([帖子](https://x.com/levie/status/2113738768645808277)；[播客来源](https://www.youtube.com/@NoPriorsPodcast))

Enterprise and public-sector agents need deployment channels. Replit separately announced Replit for Government and welcomed Michael Greenwald, who previously led AWS's public-sector business, to the team. ([government announcement](https://x.com/amasad/status/2113676717105787192))

面向企业和公共部门的 agent 需要实际可用的部署渠道。Replit 另外宣布了 Replit for Government，并欢迎 Michael Greenwald 加入团队，他此前负责 AWS 的公共部门业务。([政府产品公告](https://x.com/amasad/status/2113676717105787192))

Talent and technical strategy are shifting around agents. Thariq announced he left Anthropic after more than a year on Claude Code, praising the team's mission-driven "race to the top" while taking a break before his next step. SPC general partner and Bevel Health co-founder Aditya Agarwal highlighted a complementary lesson from robotics: solve many problems together rather than building specialized systems, and summarized the principle as "Make the problem bigger." ([Thariq's announcement](https://x.com/trq212/status/2113844051938054167); [Aditya Agarwal](https://x.com/adityaag/status/2113666947766169868))

人才与技术路线也在围绕 agent 发生变化。Thariq 宣布在参与 Claude Code 一年多后离开 Anthropic，他称赞团队以使命为驱动的 "race to the top"，并表示会先休息一段时间再开始下一步。SPC 普通合伙人、Bevel Health 联合创始人 Aditya Agarwal 则强调了一个来自机器人领域的互补原则：同时解决许多问题，而不是为单个任务训练专用系统，并把这一原则概括为 "Make the problem bigger." ([Thariq 的公告](https://x.com/trq212/status/2113844051938054167)；[Aditya Agarwal](https://x.com/adityaag/status/2113666947766169868))

## X / Twitter

### Thibault Sottiaux

OpenAI's Thibault Sottiaux, who works on Codex and ChatGPT, said Codex CLI now supports reusable prompt presets, inline model and permission settings, and enterprise MCP sign-in. The update also fixes failures when resuming long sessions and adds Windows corporate-proxy authentication; Sottiaux said CLI usage has doubled since DevDay. Separately, he reported faster call connections, cache-preserving reasoning changes during a conversation, and another CLI update. ([Codex CLI update](https://x.com/thsottiaux/status/2113770862860222611); [Day 19 update](https://x.com/thsottiaux/status/2113770573994299544))

在 OpenAI 负责 Codex 与 ChatGPT 的 Thibault Sottiaux 表示，Codex CLI 现在支持可复用 prompt 预设、行内模型与权限设置，以及企业 MCP 登录。这次更新还修复了恢复长会话时的失败，并加入了 Windows 企业代理认证；Sottiaux 说 DevDay 以来 CLI 使用量翻了一倍。他还报告了更快的调用连接、会话中切换 reasoning 不再让缓存失效，以及又一次 CLI 更新。([Codex CLI 更新](https://x.com/thsottiaux/status/2113770862860222611)；[Day 19 更新](https://x.com/thsottiaux/status/2113770573994299544))

### Thariq

Thariq announced that he left Anthropic after more than a year working on Claude Code, which he said scaled larger than he ever imagined. He praised Anthropic's mission, especially the idea of a "race to the top," and called his colleagues the most talented, thoughtful, competent, and earnest people he has met. He is taking a break before starting something new and directed readers to other Claude Code contributors for more content. ([announcement](https://x.com/trq212/status/2113844051938054167))

Thariq 宣布，在参与 Claude Code 一年多后离开 Anthropic，并说这个产品的规模超过了他曾经的想象。他称赞 Anthropic 的使命，尤其是 "race to the top" 这一理念，还称同事们是他见过的最有才华、最体贴、最有能力、最真诚的人。他会先休息一段时间再开始新的事情，并建议读者关注其他 Claude Code 内容创作者。([公告](https://x.com/trq212/status/2113844051938054167))

### Amjad Masad

Replit CEO Amjad Masad welcomed Jeff and the Chroma team to Replit, calling them AI pioneers who were building RAG before it was a thing. He said they will help give agents the context and memory needed for real work and called the move a step toward the "self-driving company." Separately, Replit announced Replit for Government and welcomed Michael Greenwald, who previously led AWS's public-sector business. ([Chroma announcement](https://x.com/amasad/status/2113736007111827606); [Replit for Government](https://x.com/amasad/status/2113676717105787192))

Replit CEO Amjad Masad 欢迎 Jeff 和 Chroma 团队加入 Replit，称他们是 AI 先驱，在 RAG 还没有成为流行概念之前就在做 RAG。他说，他们将帮助 agent 获得完成实际工作所需的上下文和记忆，并把这一步称为通往 "self-driving company" 的一步。Replit 还宣布了 Replit for Government，并欢迎此前负责 AWS 公共部门业务的 Michael Greenwald 加入。([Chroma 公告](https://x.com/amasad/status/2113736007111827606)；[Replit for Government](https://x.com/amasad/status/2113676717105787192))

### Guillermo Rauch

Vercel CEO Guillermo Rauch described an OpenAI finding as a "noisy neighbor" timing attack in the cloud: when two agents share a machine, one can generate enough CPU-cache noise for the other to detect it by timing its own computation and cache accesses. He said attacks in this class have been known since at least 2015 and have no full solution; running each agent on dedicated hardware is the only complete fix, but it has significant economic costs. Rauch said Vercel Sandbox has deployed practical mitigations plus always-on monitoring and red-teaming. ([analysis](https://x.com/rauchg/status/2113759533801877920))

Vercel CEO Guillermo Rauch 把 OpenAI 的一项发现描述为云端的 "noisy neighbor" timing attack：当两个 agent 共用一台机器时，一个 agent 可以制造足够的 CPU 缓存噪声，让另一个 agent 通过测量自身计算和缓存访问的时间来探测到它。他说这类攻击至少从 2015 年起就为人所知，并没有完整解法；让每个 agent 运行在专用硬件上是唯一完整的办法，但会带来显著的经济成本。Rauch 表示，Vercel Sandbox 已经部署了实际可行的缓解措施，并配合持续监控和 red teaming。([分析](https://x.com/rauchg/status/2113759533801877920))

### Aaron Levie

Box CEO Aaron Levie predicts that agent swarms for cyber defense will become one of the biggest categories in AI. He argues that security is a strong fit because more compute produces more value, and agents can test far more permutations of risk and process more data than teams can handle manually. In his view, the next period in cyber will be "a wild time." ([post](https://x.com/levie/status/2113738768645808277))

Box CEO Aaron Levie 预测，用于网络防御的 agent swarm 将成为 AI 最大的类别之一。他认为安全非常适合这种模式，因为投入更多算力就能产出更多价值，而且 agent 能测试远超人工数量的风险组合，并处理更多数据。在他看来，网络安全的下一阶段会是一段 "wild time"。([帖子](https://x.com/levie/status/2113738768645808277))

### Aditya Agarwal

SPC general partner and Bevel Health co-founder Aditya Agarwal highlighted a recurring AI principle: major advances come from solving many problems together rather than training specialized systems for individual tasks. He connected it to svlevine's robotics argument at physical_int and summarized the lesson as "Make the problem bigger." ([post](https://x.com/adityaag/status/2113666947766169868))

SPC 普通合伙人、Bevel Health 联合创始人 Aditya Agarwal 强调了一条反复出现的 AI 原则：AI 的许多重大进展来自同时解决多个问题，而不是为单个任务训练专用系统。他把这一点与 svlevine 在 physical_int 提出的机器人观点联系起来，并把其中的经验概括为 "Make the problem bigger." ([帖子](https://x.com/adityaag/status/2113666947766169868))

## Podcast

### No Priors: Democratizing Security for the Agentic Web with Cloudflare CTO Dane Knecht

**The Takeaway:** AI is both widening the software vulnerability problem and supplying the tooling to contain it faster, which means security must be designed into every stage of the agent development lifecycle.

**核心结论：** AI 既在扩大软件漏洞问题，也在提供更快控制问题的工具，因此安全必须被设计进 agent 开发生命周期的每一个阶段。

Dane Knecht, CTO of Cloudflare, sees the past year as an inflection point in which AI moved from experimentation to a new security surface. He says serious vulnerabilities that once arrived roughly once a year now arrive weekly, and he expects security to absorb more than half of engineering time during the next 18 months. Teams are still patching 70 years of accumulated software while agents increase the rate at which new code is produced. Knecht is less fatalistic than the air-gap-everything camp: he argues that zero-trust architecture leaves many organizations better prepared than a retreat from the internet would suggest.

Cloudflare CTO Dane Knecht 认为，过去一年是一个转折点，AI 从实验阶段变成了新的安全面。他说，过去大约一年才出现一次的严重漏洞，现在每周都会出现，并预计未来 18 个月内，安全会占用超过一半的工程时间。团队仍在修补过去 70 年积累的软件，同时 agent 又提高了新代码的生产速度。Knecht 并不认同把所有重要系统都 air gap 的悲观论调：他认为，相比直接退离互联网，zero-trust 架构让许多组织准备得更好。

His most useful warning is that AI can make software harder to secure before it makes it easier. "AI is very verbose. It likes to create complexity," he says, which works against the first principle of reducing attack surface. The answer is to combine human judgment, adversarial reviews, formal verification, safer languages, and safer runtimes. Cloudflare is also expanding from one red team to four or five and encoding its engineering standards so agents can follow them during reviews.

他最有价值的提醒是，AI 可能先让软件更难保护，然后才让保护变得更容易。他说："AI 非常啰嗦，它喜欢制造复杂性。"这与减少攻击面的第一原则相冲突。解决办法是把人类判断、对抗性审查、formal verification、更安全的语言和更安全的运行时结合起来。Cloudflare 也在把 red team 从一个扩展到四到五个，并把工程标准写下来，让 agent 在审查过程中遵循。

Knecht rejects a security freeze: "if you're not shipping, you're dying." His argument is that AI can help teams patch and ship faster at the same time, provided discovery and remediation are automated into the workflow. On open models, he expects security capabilities to become broadly available because determined attackers will obtain them anyway; restricting access mainly excludes defenders who need the tools. ([source](https://www.youtube.com/@NoPriorsPodcast))

Knecht 不赞成为了安全而停止发布："if you're not shipping, you're dying." 他的观点是，只要把发现和修复漏洞自动化进工作流，AI 就能帮助团队同时更快修补和发布。对于开放模型，他预计安全能力最终会广泛可用，因为坚决的攻击者总会获得这些能力；限制访问主要会把需要这些工具的防御者排除在外。([来源](https://www.youtube.com/@NoPriorsPodcast))

## Blog

No new qualifying blog posts were present in the validated feed.

验证后的 feed 中没有新的合格博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
