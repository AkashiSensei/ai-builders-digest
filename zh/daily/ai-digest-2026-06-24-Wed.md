[English](../../en/daily/ai-digest-2026-06-24-Wed.md) | [中文](./ai-digest-2026-06-24-Wed.md) | [双语](../../bilingual/daily/ai-digest-2026-06-24-Wed.md)

---

# AI Builders Digest

## 导读

- 安全正在从“发现问题”转向“修复问题”。Sam Altman 和 Thibault Sottiaux 都提到 GPT-5.5-Cyber、Patch The Planet 和 Codex Security，核心方向是让 AI 系统解决漏洞，而不只是报告漏洞。
- Claude Fable 5 被描述成长期协作队友，而不只是聊天模型。Mike Krieger 讲的是把数小时甚至隔夜任务委托给模型，同时把 verification 保留为人类控制回路。
- Agent-native 软件正在变得可自我修改、可预览、可治理。Krieger 的个人 media tracker、Box 的 HTML 支持、Vercel 的 Claude Design 到 Vercel 流程，都指向 agent 直接创建、编辑、预览和交付 artifact 的软件形态。
- Evals 正在成为企业自动化的核心能力。Aaron Levie 认为 model 进步、特定领域 post-training、agent 改进和真正可用的企业部署，都取决于公司能否理解 workflow 并衡量 agent 的表现。
- Builder 仍在摸索更适合 agent 的界面和 workflow 抽象。Peter Yang 质疑 Claude Code dynamic workflows 的表达是否清楚，Ryo Lu 分享 AI 时代的构建经验，Krieger 则强调 chat 需要 artifacts、mobile handoff、multiplayer 和更强的 verification loop。

## X / Twitter

Swyx 认为，AI 里最有意思的战略形态之一，可能是 model lab 和 neocloud 的结合。他对 SpaceX 的解读是，compute deals 可以有效回收 Cursor 投资中的很大一部分，形成纯 model lab 或纯 GPU cloud 都很难复制的 go-to-market loop。关键前提是 GPU 供应规划：无论自研训练进展很好还是不够好，公司都要能承接结果。
https://x.com/swyx/status/2069301071965741388

OpenAI Codex builder Thibault Sottiaux 把这一天的重点放在 cyber defense acceleration：Codex Security、Patch The Planet，以及完整版 GPT-5.5-Cyber。他也问 Codex 社区今晚在 codexing 什么，这个小问题和更大的产品信号是一致的：Codex 正在同时被定位为安全修复系统和日常构建界面。
https://x.com/thsottiaux/status/2069152290326630518
https://x.com/thsottiaux/status/2069267387464274366

Peter Yang 提出了两个 AI builder workflow 问题。第一，他说自己读完公开说明后仍不清楚 Claude Code 的 “dynamic workflow” 是什么、什么时候该用，这对一个用于组织长期 agent 工作的功能来说是很有价值的反馈。第二，他想采访能用 Codex 或 Claude Code 做有趣 pixel 或 Three.js 游戏的人，说明 agent coding 内容正在从生产力 demo 走向更有创造性、更可检查的软件作品。
https://x.com/petergyang/status/2069267139576693028
https://x.com/petergyang/status/2069118077313425840

Vercel CEO Guillermo Rauch 提到了两个产品表面变化。Claude Design 现在可以一键到 Vercel，把 AI 生成设计到可部署 Web artifact 的路径缩得更短。Vercel 也新增了从 CDN 到 Fluid 的 WebSocket 和 socket.io 支持，这对需要实时能力的 agent 产品和协作产品很重要，因为它们可以留在 Vercel workflow 里完成部署。
https://x.com/rauchg/status/2069219190834127276
https://x.com/rauchg/status/2069109057433035171

Box CEO Aaron Levie 把 evals 放在 agent 叙事的中心。他认为 model 进步、特定领域的 open-weight post-training、应用层 agent 改进，以及真正能增强工作的企业部署，本质上都依赖 evals。他的实践判断是：企业必须理解自己的 workflows，并衡量 agent 如何参与这些工作，才有可能推动真正的自动化。
https://x.com/levie/status/2069228335255949775

Levie 还说 Box 现在支持预览、编辑、管理版本并安全分享 HTML 内容。产品含义很直接：如果 agent 会产出越来越多 HTML artifacts，企业内容系统就需要把这些 artifacts 当作一等 business documents，而不是治理体系外的零散文件。
https://x.com/levie/status/2069140445205348432

Cursor designer Ryo Lu 分享了他在 Cursor Compile 的演讲，主题是 AI 时代如何构建，以及哪些东西不会改变。tweet 本身主要是指向视频，但信号和 Cursor 最近的设计工作一致：AI 改变了做软件的速度和形态，但 taste、intent 和 judgment 仍然是稳定的人类层。
https://x.com/ryolu_/status/2069218497272717661
https://x.com/ryolu_/status/2069218604449771989

Zara Zhang 发布了一个 11 分钟视频，完整 walkthrough 她的 Frontend Slides skill，包括用 Claude Code 创建漂亮 HTML slides 的 demo、她如何创建这个 skill、别人如何做自己的 skill、如何插入图片和视频、如何发布，以及她学到的经验。这是一个有用的 builder artifact：把受欢迎的 skill 变成可复用模式，解释设计决策，再展示如何扩展。
https://x.com/zarazhangrui/status/2069311440692072481
https://x.com/zarazhangrui/status/2069311581985665385

Peter Steinberger 发了两个简短的 agent culture 信号。“Patch the Planet” 和 OpenAI 的安全推进方向一致；关于 shared office spaces 的看法更偏文化而非技术。和工作最相关的线索是：agent builder 越来越多地把软件修复、部署和协作当作社会系统来讨论，而不只是本地 coding loop。
https://x.com/steipete/status/2069132838356840857
https://x.com/steipete/status/2069254835686576316

Sam Altman 说 OpenAI 希望与美国政府和安全生态合作，帮助所有公司变得更安全。他提到 GPT-5.5-Cyber 在 CyberGym 上的表现，并把 Patch The Planet 和 Codex Security 描述为用于解决安全问题的工具，而不只是发现安全问题。这是一个明确的定位变化：AI 从 scanner 变成 remediation teammate。
https://x.com/sama/status/2069121360744550796

## Podcast

### AI & I by Every: How Anthropic Uses Claude Fable 5 With Mike Krieger

The Takeaway：Mike Krieger 最清楚的信息是，Claude Fable 5 改变了“工作单元”。它不只是单轮回答更强，而是已经足够接住复杂目标，在数小时内保持状态，从被阻塞的服务里恢复，并交付一个可以被人 review 的结果。

Krieger 是 Anthropic Labs 负责人，也是 Instagram cofounder。他说 Fable 让他重新思考 prompting、任务拆解和 AI 工作的时间跨度。相比从很小的 feature prompt 开始，他现在会花更多时间表达 intent 和 architecture，然后让长期运行的 Claude Code sessions 并行执行一块块工作。他最形象的描述是，这个 model 感觉 “like a teammate that I can delegate a lot of work to.”

最大的 workflow 经验是 verification。Krieger 认为，每个严肃的 AI-generated pull request 都应该附带能让人快速检查的 artifacts：screenshot galleries、video captures、真实 staging flows、regression paths，以及在真实服务难以启动时足够稳健的 mocks。他强调，即使大部分代码是 Claude 写的，人类仍然需要为 production work 背书。

产品含义不只在 coding。Krieger 展示了一个个人 media tracker，Claude 可以添加条目、研究续集、从软件内部修改 app、预览变更，并在一个周末之后继续改进产品。他的观点是，agent-native 软件应该把动作暴露给 agent，并最终允许 agent 修改软件本身。

他也描述了 Anthropic 内部的新组织模式：每个人仍然拥有一个产品区域，但会和多个 Claude sessions 一起工作，用 dashboards 跟踪待处理 PR，并通过后续对话理解 tradeoffs 后再 merge。在他看来，software engineering 并没有结束，而是被上拉到 ownership、product judgment、architecture、production understanding 和 verification。

最前沿的部分是 dynamic workflows。Krieger 描述了用它们在一个周末把复杂 Python 项目 port 到 TypeScript 和 Bun：理解系统、写 spec、逐模块翻译、增量测试、做 adversarial checks，并记录无法 port 的部分。Chat 可能仍是组合界面，但这类工作越来越需要用代码表达的 workflows、mobile handoff、multiplayer context，以及对复杂度的 progressive disclosure。
https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

## Blog

今天的 feed 没有新 blog 文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
