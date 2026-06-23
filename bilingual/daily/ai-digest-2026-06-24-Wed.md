[English](../../en/daily/ai-digest-2026-06-24-Wed.md) | [中文](../../zh/daily/ai-digest-2026-06-24-Wed.md) | [Bilingual](./ai-digest-2026-06-24-Wed.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

Security is moving from detection to repair. Sam Altman and Thibault Sottiaux both pointed to GPT-5.5-Cyber, Patch The Planet, and Codex Security as a push toward AI systems that fix vulnerabilities rather than only report them.
安全正在从“发现问题”转向“修复问题”。Sam Altman 和 Thibault Sottiaux 都提到 GPT-5.5-Cyber、Patch The Planet 和 Codex Security，核心方向是让 AI 系统解决漏洞，而不只是报告漏洞。

Claude Fable 5 is framed less as a chat model and more as a long-horizon teammate. Mike Krieger described delegating multi-hour or overnight work, with verification still acting as the human control loop.
Claude Fable 5 被描述成长期协作队友，而不只是聊天模型。Mike Krieger 讲的是把数小时甚至隔夜任务委托给模型，同时把 verification 保留为人类控制回路。

Agent-native software is becoming self-modifying and context-rich. Krieger's personal media tracker, Box's HTML support, and Vercel's Claude Design flow all point toward apps where agents can create, edit, preview, and ship artifacts directly.
Agent-native 软件正在变得可自我修改、可预览、可治理。Krieger 的个人 media tracker、Box 的 HTML 支持、Vercel 的 Claude Design 到 Vercel 流程，都指向 agent 直接创建、编辑、预览和交付 artifact 的软件形态。

Evals are becoming an enterprise operating discipline. Aaron Levie argued that model progress, applied agent improvements, and real enterprise automation all depend on companies understanding workflows and measuring agent performance inside them.
Evals 正在成为企业自动化的核心能力。Aaron Levie 认为 model 进步、特定领域 post-training、agent 改进和真正可用的企业部署，都取决于公司能否理解 workflow 并衡量 agent 的表现。

Builders are still wrestling with interfaces and workflow abstractions. Peter Yang questioned Claude Code dynamic workflows, Ryo Lu shared a Cursor Compile talk on building with AI, and Krieger argued that chat needs artifacts, mobile handoff, multiplayer, and richer verification loops.
Builder 仍在摸索更适合 agent 的界面和 workflow 抽象。Peter Yang 质疑 Claude Code dynamic workflows 的表达是否清楚，Ryo Lu 分享 AI 时代的构建经验，Krieger 则强调 chat 需要 artifacts、mobile handoff、multiplayer 和更强的 verification loop。

## X / Twitter

Swyx argued that the most interesting strategic shape in AI may be a combined model lab and neocloud. His read on SpaceX was that compute deals can effectively pay back a major part of a Cursor investment, creating a go-to-market loop no pure model lab or pure GPU cloud can easily copy. The important caveat is supply planning: the strategy works only if the company can handle both outcomes, in-house training going very well or not going well.

Swyx 认为，AI 里最有意思的战略形态之一，可能是 model lab 和 neocloud 的结合。他对 SpaceX 的解读是，compute deals 可以有效回收 Cursor 投资中的很大一部分，形成纯 model lab 或纯 GPU cloud 都很难复制的 go-to-market loop。关键前提是 GPU 供应规划：无论自研训练进展很好还是不够好，公司都要能承接结果。
https://x.com/swyx/status/2069301071965741388

OpenAI Codex builder Thibault Sottiaux framed the day around cyber defense acceleration: Codex Security, Patch The Planet, and the full version of GPT-5.5-Cyber. He also asked the Codex community what they were building that night, which fits the broader signal that Codex is being positioned as both a security repair system and an everyday building surface.

OpenAI Codex builder Thibault Sottiaux 把这一天的重点放在 cyber defense acceleration：Codex Security、Patch The Planet，以及完整版 GPT-5.5-Cyber。他也问 Codex 社区今晚在 codexing 什么，这个小问题和更大的产品信号是一致的：Codex 正在同时被定位为安全修复系统和日常构建界面。
https://x.com/thsottiaux/status/2069152290326630518
https://x.com/thsottiaux/status/2069267387464274366

Peter Yang surfaced two workflow questions for AI builders. First, he said Claude Code's "dynamic workflow" concept still was not clear to him from the public explanation, which is useful feedback for a feature meant to organize long-running agent work. Second, he wants to interview someone who can use Codex or Claude Code to build fun pixel or Three.js games, a sign that agent coding content is moving from productivity demos into more creative, inspectable software.

Peter Yang 提出了两个 AI builder workflow 问题。第一，他说自己读完公开说明后仍不清楚 Claude Code 的 “dynamic workflow” 是什么、什么时候该用，这对一个用于组织长期 agent 工作的功能来说是很有价值的反馈。第二，他想采访能用 Codex 或 Claude Code 做有趣 pixel 或 Three.js 游戏的人，说明 agent coding 内容正在从生产力 demo 走向更有创造性、更可检查的软件作品。
https://x.com/petergyang/status/2069267139576693028
https://x.com/petergyang/status/2069118077313425840

Vercel CEO Guillermo Rauch highlighted two product-surface moves. Claude Design can now go to Vercel in one click, tightening the path from AI-generated design to deployable web artifact. Vercel also added WebSocket and socket.io support from CDN to Fluid, which matters for realtime agent and collaboration products that need deployment infrastructure without leaving the Vercel workflow.

Vercel CEO Guillermo Rauch 提到了两个产品表面变化。Claude Design 现在可以一键到 Vercel，把 AI 生成设计到可部署 Web artifact 的路径缩得更短。Vercel 也新增了从 CDN 到 Fluid 的 WebSocket 和 socket.io 支持，这对需要实时能力的 agent 产品和协作产品很重要，因为它们可以留在 Vercel workflow 里完成部署。
https://x.com/rauchg/status/2069219190834127276
https://x.com/rauchg/status/2069109057433035171

Box CEO Aaron Levie made evals the center of the agent story. He argued that model progress, open-weight post-training for specific domains, applied agent improvements, and enterprise deployments that actually augment work all depend on evals. His practical point is that enterprises will need to understand their own workflows and measure how well agents participate in them before they can drive real automation.

Box CEO Aaron Levie 把 evals 放在 agent 叙事的中心。他认为 model 进步、特定领域的 open-weight post-training、应用层 agent 改进，以及真正能增强工作的企业部署，本质上都依赖 evals。他的实践判断是：企业必须理解自己的 workflows，并衡量 agent 如何参与这些工作，才有可能推动真正的自动化。
https://x.com/levie/status/2069228335255949775

Levie also said Box now lets users preview, edit, manage versions, and securely share HTML-based content. The product read is simple: if agents are producing more HTML artifacts, enterprise content systems need to treat those artifacts as first-class business documents rather than odd files sitting outside governance.

Levie 还说 Box 现在支持预览、编辑、管理版本并安全分享 HTML 内容。产品含义很直接：如果 agent 会产出越来越多 HTML artifacts，企业内容系统就需要把这些 artifacts 当作一等 business documents，而不是治理体系外的零散文件。
https://x.com/levie/status/2069140445205348432

Cursor designer Ryo Lu shared his Cursor Compile talk on how people build in the age of AI and what does not change. The tweet itself is mostly a pointer, but the signal is consistent with recent Cursor design work: AI changes the speed and shape of making software, while taste, intent, and judgment remain the durable human layer.

Cursor designer Ryo Lu 分享了他在 Cursor Compile 的演讲，主题是 AI 时代如何构建，以及哪些东西不会改变。tweet 本身主要是指向视频，但信号和 Cursor 最近的设计工作一致：AI 改变了做软件的速度和形态，但 taste、intent 和 judgment 仍然是稳定的人类层。
https://x.com/ryolu_/status/2069218497272717661
https://x.com/ryolu_/status/2069218604449771989

Zara Zhang published an 11-minute walkthrough of her Frontend Slides skill, including a complete Claude Code demo, how she created the skill, how others can make their own skills, publishing tips, and lessons learned. It is a useful builder artifact because it turns a popular skill into a replicable pattern: package the workflow, explain the design decisions, then show others how to extend it.

Zara Zhang 发布了一个 11 分钟视频，完整 walkthrough 她的 Frontend Slides skill，包括用 Claude Code 创建漂亮 HTML slides 的 demo、她如何创建这个 skill、别人如何做自己的 skill、如何插入图片和视频、如何发布，以及她学到的经验。这是一个有用的 builder artifact：把受欢迎的 skill 变成可复用模式，解释设计决策，再展示如何扩展。
https://x.com/zarazhangrui/status/2069311440692072481
https://x.com/zarazhangrui/status/2069311581985665385

Peter Steinberger posted two compact signals around agent culture. "Patch the Planet" aligned with the OpenAI security push, while his note about shared office spaces was more cultural than technical. The work-relevant thread is that agent builders are increasingly talking about software repair, deployment, and collaboration as social systems, not just local coding loops.

Peter Steinberger 发了两个简短的 agent culture 信号。“Patch the Planet” 和 OpenAI 的安全推进方向一致；关于 shared office spaces 的看法更偏文化而非技术。和工作最相关的线索是：agent builder 越来越多地把软件修复、部署和协作当作社会系统来讨论，而不只是本地 coding loop。
https://x.com/steipete/status/2069132838356840857
https://x.com/steipete/status/2069254835686576316

Sam Altman said OpenAI wants to help companies be secure in partnership with the US government and the security ecosystem. He pointed to GPT-5.5-Cyber's CyberGym performance and described Patch The Planet plus Codex Security as tools meant to solve security problems rather than merely find them. That is a clear positioning shift from AI as scanner to AI as remediation teammate.

Sam Altman 说 OpenAI 希望与美国政府和安全生态合作，帮助所有公司变得更安全。他提到 GPT-5.5-Cyber 在 CyberGym 上的表现，并把 Patch The Planet 和 Codex Security 描述为用于解决安全问题的工具，而不只是发现安全问题。这是一个明确的定位变化：AI 从 scanner 变成 remediation teammate。
https://x.com/sama/status/2069121360744550796

## Podcast

### AI & I by Every: How Anthropic Uses Claude Fable 5 With Mike Krieger

The Takeaway: Mike Krieger's clearest message is that Claude Fable 5 changes the unit of work. The model is not just better at turns; it is good enough to accept a complex goal, keep state over hours, recover from blocked services, and come back with something that can be reviewed.

The Takeaway：Mike Krieger 最清楚的信息是，Claude Fable 5 改变了“工作单元”。它不只是单轮回答更强，而是已经足够接住复杂目标，在数小时内保持状态，从被阻塞的服务里恢复，并交付一个可以被人 review 的结果。

Krieger, head of Anthropic Labs and cofounder of Instagram, said Fable forced him to rethink prompting, task decomposition, and the time horizon of AI work. Instead of starting with small feature prompts, he now spends more time on intent and architecture, then lets long-running Claude Code sessions execute chunks of work in parallel. His most vivid description was that the model feels "like a teammate that I can delegate a lot of work to."

Krieger 是 Anthropic Labs 负责人，也是 Instagram cofounder。他说 Fable 让他重新思考 prompting、任务拆解和 AI 工作的时间跨度。相比从很小的 feature prompt 开始，他现在会花更多时间表达 intent 和 architecture，然后让长期运行的 Claude Code sessions 并行执行一块块工作。他最形象的描述是，这个 model 感觉 “like a teammate that I can delegate a lot of work to.”

The biggest workflow lesson is verification. Krieger said every serious AI-generated pull request should come with artifacts that let humans check it quickly: screenshot galleries, video captures, real staging flows, regression paths, and robust mocks when real services are hard to spin up. He argued that humans still need to stand behind production work, even if Claude wrote much of it.

最大的 workflow 经验是 verification。Krieger 认为，每个严肃的 AI-generated pull request 都应该附带能让人快速检查的 artifacts：screenshot galleries、video captures、真实 staging flows、regression paths，以及在真实服务难以启动时足够稳健的 mocks。他强调，即使大部分代码是 Claude 写的，人类仍然需要为 production work 背书。

The product implications are broader than coding. Krieger showed a personal media tracker where Claude could add items, research sequels, modify the app from inside itself, preview changes, and keep improving the product after the weekend. His point is that agent-native software should expose actions to the agent and eventually let the agent modify the software itself.

产品含义不只在 coding。Krieger 展示了一个个人 media tracker，Claude 可以添加条目、研究续集、从软件内部修改 app、预览变更，并在一个周末之后继续改进产品。他的观点是，agent-native 软件应该把动作暴露给 agent，并最终允许 agent 修改软件本身。

He also described new organizational patterns inside Anthropic: each human still owns a product area, but works with many Claude sessions, dashboards of pending PRs, and follow-up conversations to understand tradeoffs before merging. Software engineering is not over in his view. It is being pulled upward into ownership, product judgment, architecture, production understanding, and verification.

他也描述了 Anthropic 内部的新组织模式：每个人仍然拥有一个产品区域，但会和多个 Claude sessions 一起工作，用 dashboards 跟踪待处理 PR，并通过后续对话理解 tradeoffs 后再 merge。在他看来，software engineering 并没有结束，而是被上拉到 ownership、product judgment、architecture、production understanding 和 verification。

The most forward-looking part was dynamic workflows. Krieger described using them to port a complex Python project to TypeScript and Bun over a weekend: understand the system, write a spec, translate module by module, test incrementally, run adversarial checks, and document what could not be ported. Chat may remain the composition interface, but the work increasingly needs code-expressed workflows, mobile handoff, multiplayer context, and progressive disclosure of complexity.

最前沿的部分是 dynamic workflows。Krieger 描述了用它们在一个周末把复杂 Python 项目 port 到 TypeScript 和 Bun：理解系统、写 spec、逐模块翻译、增量测试、做 adversarial checks，并记录无法 port 的部分。Chat 可能仍是组合界面，但这类工作越来越需要用代码表达的 workflows、mobile handoff、multiplayer context，以及对复杂度的 progressive disclosure。
https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

## Blog

No new blog posts in today's feed.

今天的 feed 没有新 blog 文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
