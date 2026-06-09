[English](../../en/daily/ai-digest-2026-06-10-Wed.md) | [中文](../../zh/daily/ai-digest-2026-06-10-Wed.md) | [Bilingual](./ai-digest-2026-06-10-Wed.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

Agentic coding benchmarks are moving from simple test-passing toward maintainable software engineering, with FrontierCode framed as a harder evaluation layer for real maintainer-grade work.
智能体编程评测正在从“通过测试”转向“可维护的软件工程”。FrontierCode 被定位为更难的一层，用真实维护者标准衡量模型能否完成高质量工程工作。

AI product workflows are becoming more context-heavy: NotebookLM is expanding beyond source-only research, Claude Code users are refining routines, and builders are asking how coding agents converge with everyday chat products.
AI 产品工作流越来越依赖上下文：NotebookLM 扩展到源文件之外的研究，Claude Code 用户沉淀日常例程，开发者也在讨论编程智能体与通用聊天产品的融合。

Enterprise AI security is shifting from chatbot data loss prevention to oversight of autonomous agent actions, with Onyx Security positioning agent-monitoring models as a control plane for high-volume AI operations.
企业 AI 安全正在从聊天机器人防泄漏，转向监督自主智能体的具体行动。Onyx Security 把“监督其他智能体的模型”包装成企业 AI 控制平面。

Model orchestration is becoming a platform pattern: Anthropic is plugging Claude into Apple Foundation Models so Swift apps can move between local typed generation and remote reasoning, code, search, and tool use.
模型编排正在成为平台模式：Anthropic 将 Claude 接入 Apple Foundation Models，让 Swift 应用在本地类型化生成与远端推理、代码、搜索、工具调用之间切换。

Several posts point to the practical last mile of AI adoption: context still matters, autonomous companies remain hard to close end to end, and cost practices diverge sharply between individual power users and enterprise API budgets.
多条动态都指向 AI 落地的最后一公里：上下文仍然不可替代，自主公司闭环仍难，个人订阅用户与企业 API 预算之间也出现了不同的最佳实践。

## X / Twitter

### Swyx (@swyx)
- [Tweet](https://x.com/swyx/status/2064100566536708503) (5 likes, 0 reposts, 2 replies): @METR_Evals previously on @cognition_labs https://t.co/PdMrqxtuV0
  
  Swyx 补充说 METR 此前已经关注过 Cognition Labs。
- [Tweet](https://x.com/swyx/status/2064081945567580323) (631 likes, 59 reposts, 70 replies): It's finally out!!! @METR_Evals found that more than half of SWEBench results is unmergeable slop.  FrontierCode represents over 1000+ hours of maintainer validated software engineering work most frontier models cannot yet solve, much less solve with high quality.

Cog had IOI Gold medalists and top code maintainers Look At The Data — FrontierCode includes 3000+ rubrics covering code quality and anticheat reward hacking plaguing other benchmarks. 

FC Diamond is so hard that Opus 4.8 scores 13.8%.

Three eras of AI coding : Three eras of benchmarks

2021 • Autocomplete : HumanEval
2023 • Passing Tests: SWEBench, TerminalBench
2026 • Maintainable Code: FrontierCode

to me the most beautiful chart when I requested a special historical run into all extant old models, the data was finding that the easiest third of FC tasks (in FC Extended) were rapidlly and suddenly solved over late 2025 - Opus almost doubled from a 41% pass rate to 74% in 4 months. 

This describes the "WTF happened in Dec 2025" vibe shift that a lot of folks from @dhh to @karpathy have called out: it is the difference between getting 95% success in 2 rerolls vs 6, making it finally feasible to go up the next layer of abstraction in agentic coding, eg @GeoffreyHuntley's ralph loops or @bcherny's /goals or  @steipete's "loops that prompt your agents" without fearing too much that things go off the rails.

My guess: as AI accelerates from here, each FrontierCode tier will saturate in sequence, hopefully ~annually. I've already asked the team to prepare FrontierCode 2027....

The old mountains will be destroyed. Their rubble becomes regolith. And from that regolith, the next model forest grows. Circle of life.
  
  Swyx 重点介绍 METR 的 FrontierCode：他们认为许多 SWE-bench 结果在真实维护场景中不可合并，因此需要用超过 1000 小时维护者验证工作、3000 多条质量与防作弊 rubrics 来评估模型。它把 AI 编程评测划分为 HumanEval 的补全时代、SWE-bench 的测试通过时代，以及 FrontierCode 的可维护代码时代。

### Josh Woodward (@joshwoodward)
- [Tweet](https://x.com/joshwoodward/status/2064046368352825492) (745 likes, 72 reposts, 60 replies): The new killer NotebookLM feature: easily being able to expand your search beyond your own source files

Then, with today's update, you can also make new output formats: PDFs, DOCX, XLSX, PPTX, charts, etc.

We want NotebookLM to keep helping you do better research https://t.co/4TCw7tQ2GV
  
  Josh Woodward 介绍 NotebookLM 的新能力：研究可以扩展到用户源文件之外，并生成 PDF、DOCX、XLSX、PPTX、图表等输出格式。

### Boris Cherny (@bcherny)
- [Tweet](https://x.com/bcherny/status/2064034799711588805) (1794 likes, 99 reposts, 111 replies): When we first demoed Claude Code internally, it got two reactions on Slack. 

A year after GA, @_catwu and I sat down to talk about what's changed: why I use auto mode instead of plan mode, how routines fix bugs before I see them, why I do most of my coding from my phone now, and where the product is going
  
  Boris Cherny 回顾 Claude Code 内部首次演示和 GA 一年后的变化，包括为何使用 auto mode、日常例程如何在他看到问题前修 bug，以及 Claude Code 如何改变团队构建方式。

### Thibault Sottiaux (@thsottiaux)
- [Tweet](https://x.com/thsottiaux/status/2064226958494572727) (255 likes, 8 reposts, 102 replies): Anyone writing nested loops yet? https://t.co/sZi6Bthq5Z
  
  Thibault Sottiaux 询问大家是否已经在写嵌套循环。
- [Tweet](https://x.com/thsottiaux/status/2064224790672769307) (47 likes, 1 reposts, 10 replies): Not clear from the image, but the codex dial goes to 11.
  
  他调侃图片里的 Codex 旋钮“可以转到 11”。
- [Tweet](https://x.com/thsottiaux/status/2064224657822413137) (338 likes, 8 reposts, 125 replies): Would you use this controller? https://t.co/k3tWgio5XD
  
  他展示一个控制器概念并询问大家是否会使用。

### Peter Yang (@petergyang)
- [Tweet](https://x.com/petergyang/status/2064204735671124073) (37 likes, 0 reposts, 15 replies): If you’re addicted to talking to Codex on your phone like I am this is how you add it to your iPhone Home Screen.

Btw @OpenAI hoping there’s an easier way to do this in the future. The everything app should not take 9 steps to open 😉 https://t.co/LCzNSFjbrM
  
  Peter Yang 分享如何把手机上的 Codex 加到 iPhone 主屏幕，同时希望未来流程更简单。
- [Tweet](https://x.com/petergyang/status/2064187731685831081) (70 likes, 1 reposts, 29 replies): What is Google’s equivalent (or up and coming competitor) of Codex and Claude Code? 

If it’s Antigravity, should that be part of Gemini?

This stuff is going to merge very fast like ChatGPT / Codex being able to do coding, knowledge work, basic Q&A, and much more from any device.

Hoping Google is working on a good solution here.
  
  他询问 Google 对标 Codex 和 Claude Code 的产品是什么，并判断这些编程智能体能力会很快与 Gemini、ChatGPT/Codex 等通用入口合并。
- [Tweet](https://x.com/petergyang/status/2064063499517743417) (325 likes, 12 reposts, 43 replies): Feels like there’s a completely different set of best practices for AI builders on the $200 / month subsidized subscriptions vs employees working at companies that are trying not to overspend API costs
  
  他指出个人每月 200 美元订阅用户与需要控制 API 成本的企业员工，正在形成完全不同的 AI 构建最佳实践。

### Amanda Askell (@AmandaAskell)
- [Tweet](https://x.com/AmandaAskell/status/2064223861512847456) (225 likes, 13 reposts, 28 replies): In the world where everything goes well and all the Claudes come out of their sabbaticals to play together, Claude 1 is going to be very confused.
  
  Amanda Askell 用轻松方式设想所有 Claude 从“休假”中回来一起玩时，Claude 1 会非常困惑。

### Amjad Masad (@amasad)
- [Tweet](https://x.com/amasad/status/2064208108361322996) (61 likes, 3 reposts, 5 replies): Make games for Tesla on your Tesla https://t.co/4GHRmDVteR
  
  Amjad Masad 展示在 Tesla 车上为 Tesla 制作游戏。

### Guillermo Rauch (@rauchg)
- [Tweet](https://x.com/rauchg/status/2064189366562656602) (193 likes, 10 reposts, 19 replies): DeepSeek entered the chat https://t.co/hqahb5ppke
  
  Guillermo Rauch 转发“DeepSeek entered the chat”，暗示 DeepSeek 进入相关竞争或讨论。

### Aaron Levie (@levie)
- [Tweet](https://x.com/levie/status/2064186766907887941) (216 likes, 25 reposts, 51 replies): There’s no amount of intelligence that can get packed into AI models that replaces the need for context. For any sufficiently general purpose AI, you will always have to guide it in the direction you want as it has an infinite range of directions it can go in.

As long as the same model is used by a lawyer, an engineer, a financial analyst, or a healthcare professional, and as long as you’re trying to do anything uniquely differentiated or specific, then instructions, domain context, and proprietary data will always need to get into the context window for the model to be useful.

This is partly why AI automation doesn’t come for free, and why there’s still a wide spectrum of who’s getting the largest gains from AI and who’s not. You have to put in real work, and you get real value on the other end.

This is one of the advantages that applied AI will also have in the market. Any layer of abstraction above just the raw intelligence that can meaningfully get you off to the races faster will likely continue to be valuable.
  
  Aaron Levie 强调，无论模型智能提高到什么程度，通用 AI 仍然需要上下文；用户必须持续引导它朝正确方向前进。

### Garry Tan (@garrytan)
- [Tweet](https://x.com/garrytan/status/2064122528445153280) (317 likes, 13 reposts, 33 replies): Flock Safety makes cities safer

Stop protecting criminals https://t.co/NKdKSoVhiH
  
  Garry Tan 表示 Flock Safety 能让城市更安全，并批评“保护犯罪者”的做法。
- [Tweet](https://x.com/garrytan/status/2064122143793950928) (56 likes, 4 reposts, 10 replies): NIMBYism only impoverishes the people but people like Connie Chan will say or do anything to get political power https://t.co/Xu14bgPW0p
  
  他批评旧金山的 NIMBY 政治，认为这种路线会让普通人更贫困。
- [Tweet](https://x.com/garrytan/status/2064004333818249660) (229 likes, 21 reposts, 29 replies): Because this is a brand new form of centrism being born in San Francisco

The 2030’s will look back on this time when the new San Francisco common sense Democrat was born from the failures of the hard left https://t.co/fxkV2LozeF
  
  他认为旧金山正在出现一种新的中间派常识政治，2030 年代会回头看见它从硬左路线失败中诞生。

### Zara Zhang (@zarazhangrui)
- [Tweet](https://x.com/zarazhangrui/status/2064108976565092706) (61 likes, 2 reposts, 14 replies): Actually I think the new world might be: Markdown, HTML, SVG

SVG is underrated https://t.co/7jh75DNpUC
  
  Zara Zhang 认为新的内容工作流可能是 Markdown、HTML 和 SVG，并称 SVG 被低估了。
- [Tweet](https://x.com/zarazhangrui/status/2064101916725096810) (37 likes, 3 reposts, 1 replies): This part is so well-written and resonated SO much:

"I am the programming equivalent of a home cook" https://t.co/Sdwx0pZn2Y https://t.co/9auqS9f0Q5
  
  她引用“我是家常厨师式程序员”的说法，表示这段文字写得很好且很有共鸣。
- [Tweet](https://x.com/zarazhangrui/status/2064089017822650718) (7 likes, 0 reposts, 0 replies): https://t.co/RpZ07FjlZl
  
  她分享了一条链接。

### Nikunj Kothari (@nikunj)
- [Tweet](https://x.com/nikunj/status/2064231488544280855) (7 likes, 0 reposts, 2 replies): One of my favorite bits on my chat with @taiuti was how GTA played a major influence in his career and how it eventually led to @reactorworld https://t.co/OkqaFdj5HG
  
  Nikunj Kothari 分享与 Taiuti 对谈中一个喜欢的片段：GTA 对其职业路径产生重要影响，并最终通向 ReactorWorld。
- [Tweet](https://x.com/nikunj/status/2064175088824717401) (52 likes, 0 reposts, 9 replies): The funniest texts are from founders who meet “thesis driven” GPs hoping they’ll understand EXACTLY what they are building.. 

And then realize the thesis was written and built by an associate (or, worse an intern). 

Don’t always read what the VC writes on the internet - yes, that includes me too (although I can guarantee I don’t have an associate, intern, EA or ghostwriter) 😆
  
  他调侃创始人见到“thesis driven”投资人后发现 thesis 其实由 associate 甚至 intern 写成，提醒不要过度期待对方真的理解产品。
- [Tweet](https://x.com/nikunj/status/2063981835290562692) (13 likes, 2 reposts, 2 replies): Fun to see all the “autonomous” companies being launched in the late few months.. however, even with all the loops, the last mile is still quite hard. 

That gap probably shrinks in the next few months! https://t.co/R7L8TDFuvC
  
  他观察到近期很多“autonomous”公司出现，但即使有各种循环，最后一公里仍然很难；这个差距可能会在未来几个月缩小。

### Dan Shipper (@danshipper)
- [Tweet](https://x.com/danshipper/status/2064102403108925935) (232 likes, 1 reposts, 14 replies): !!!! 🥹 https://t.co/MHD8RC4cOq
  
  Dan Shipper 对一条动态表达强烈兴奋和感动。
- [Tweet](https://x.com/danshipper/status/2063948403566854585) (1533 likes, 63 reposts, 41 replies): this is good https://t.co/TNV8PS3lEs
  
  他转发并评价“this is good”。

### Sam Altman (@sama)
- [Tweet](https://x.com/sama/status/2064088940932641225) (5834 likes, 615 reposts, 887 replies): Here is our current plan for OpenAI:

https://t.co/r29FUUee3A
  
  Sam Altman 分享 OpenAI 当前计划的链接。

### Claude (@claudeai)
- [Tweet](https://x.com/claudeai/status/2064139073590104402) (2600 likes, 309 reposts, 93 replies): Final stop: Tokyo.

Register to hear directly from the teams behind Claude: https://t.co/SkYZwjK3GS https://t.co/sbGHgDaEW5
  
  Claude 宣布活动最后一站到东京，并邀请用户注册直接听 Claude 团队分享。

## Podcast

### Building an AI Guardian for Enterprise with Onyx Security CEO Maxim Bar Kogan

Source: No Priors | [Watch](https://www.youtube.com/watch?v=QDsbFLEt9ro) | Published: 2026-05-28T10:00:00.000Z

The episode with Onyx Security CEO Maxim Bar Kogan frames enterprise AI risk around agent actions rather than chatbot prompts. Onyx trains models and builds agents that oversee other agents, then packages that capability as a secure AI control plane for companies adopting autonomous tools at scale. The key argument is that human-in-the-loop review breaks down when AI systems produce 100x or 1000x more actions, while enterprises also hesitate to share detailed agent histories with frontier model labs. The conversation connects AutoGPT-era imagination, Claude Code-style autonomy, long-horizon reasoning, and the need to judge whether high-volume AI actions are legitimate, incorrect, or dangerous before they cause downtime, leaked secrets, or unauthorized changes.

### Building an AI Guardian for Enterprise with Onyx Security CEO Maxim Bar Kogan

来源：No Priors | [观看](https://www.youtube.com/watch?v=QDsbFLEt9ro) | 发布时间：2026-05-28T10:00:00.000Z

这期与 Onyx Security CEO Maxim Bar Kogan 的访谈，把企业 AI 风险从“聊天机器人提示词泄漏”重新定义为“智能体行动是否可靠”。Onyx 的做法是训练模型、构建智能体去监督其他智能体，并将其产品化为企业的安全 AI 控制平面。核心判断是，当 AI 行动数量增长 100 倍、1000 倍甚至更多时，human-in-the-loop 很快失效；同时企业也不愿把完整的智能体历史数据交给基础模型公司。访谈把 AutoGPT 时代的想象、Claude Code 式自主性、长程推理能力和企业级行动审计连接起来：关键不是阻止采用，而是在错误操作、宕机、密钥泄漏或未授权变更发生前，判断这些 AI 行动是否合法、正确、可接受。

## Blog

### Building intelligent apps for Apple platforms with Claude in the Foundation Models framework

Source: Claude Blog | [Read](https://claude.com/blog/claude-for-foundation-models) | Published: Jun 08, 2026

Anthropic announced Claude support for Apple's Foundation Models framework through a Swift package. The pattern is model routing inside Apple-platform apps: use Apple's local Foundation Models framework for fast typed tasks such as summarization or extraction, then hand off to Claude for multi-step reasoning, code generation, web search, tool use, and data analysis. Because Apple's framework can return typed Swift values through @Generable annotations, developers can pass cleaner structured inputs into Claude instead of raw user text. The package handles streaming, tool calls, and structured responses back into SwiftUI views, opening workflows like local journaling prompts followed by Claude-powered long-range reflection, or local study definitions followed by deeper reasoning.

### Building intelligent apps for Apple platforms with Claude in the Foundation Models framework

来源：Claude Blog | [阅读](https://claude.com/blog/claude-for-foundation-models) | 发布时间：Jun 08, 2026

Anthropic 宣布通过新的 Swift package 支持 Apple Foundation Models framework。这个模式本质上是在 Apple 平台应用中做模型路由：本地 Foundation Models 负责快速、类型化的摘要或抽取，遇到多步推理、代码生成、网页搜索、工具调用、数据分析等复杂任务时交给 Claude。由于 Apple 的框架可以通过 @Generable 注解返回类型化 Swift 值，开发者传给 Claude 的输入会比原始用户文本更干净、更结构化。这个 package 还处理流式输出、工具调用和结构化响应回写 SwiftUI 视图，适合日记应用先本地生成提示、再让 Claude 跨月份找线索，或学习应用先本地解释术语、再把深层追问交给 Claude。
