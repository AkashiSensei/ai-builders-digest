[English](../../en/daily/ai-digest-2026-11-17-Tue.md) | [中文](./ai-digest-2026-11-17-Tue.md) | [双语](../../bilingual/daily/ai-digest-2026-11-17-Tue.md)

---

# AI Builders Digest

## 导读

AI builders 正把 agent 当作新一类用户和劳动力，而不只是聊天功能。Box CEO Aaron Levie 认为，每位员工的 token 支出仍看不到天花板，background agent 和 agent swarm 会让金融、生命科学、网络安全和编程等领域的消耗成倍增长。Vercel CEO Guillermo Rauch 则从软件团队的工作方式给出相似判断：新的“用户”是 agent，因此 evals 不只人类访谈，应该共同塑造工程循环。

基础设施竞赛正在按阶段展开。FPV Ventures 合伙人 Nikunj Kothari 把 2026 年概括为从 vibe coding 和 harness 到 sandbox 与 agentic CI 的连续推进，并称供应商多到难以跟踪。在应用层，Y Combinator 总裁兼 CEO Garry Tan 正用 Rust 构建 GBrain 后端，以替代 Postgres 配合 pgvector 或 PGlite，承载 vector search、graph search、embeddings、RAG 和 HNSW。SPC 普通合伙人 Aditya Agarwal 则指向栈的另一端：BharatSemi 的 2400 万美元种子轮，以及把 AI 尽可能贴近芯片的理由。

agent 工作也暴露出新的摩擦。Peter Steinberger 指出，macOS 的权限提醒仍迫使用户不断照看 agent；Thariq 认为 software factory 只是暂时的问题，更有趣的设计问题是人与 agent 如何共享工作空间。Dan Shipper 提出用 proof of work 给 feed 排序，让 agent 汇报自己在某条内容上消耗的 token。共同点是，自主工作的度量和界面设计正在变得和模型能力同样重要。

产品团队正在围绕这些 agent 调整产品面。Google VP Josh Woodward 提到 Google Labs 欢迎 Howie 团队加入，该团队长期研究日程安排和日历管理，并将共同为小企业打造直观的 AI 工具；他还展示了 Gemini Notebook 把资料转化为可分享互动网站的能力。Peter Yang 总结了让 Claude 避免 AI slop 的实用设计流程：提前给上下文，研究熟悉的 UX 模式，指出模型自身偏好，先做线框图，再生成并重组多个方案。Guillermo Rauch 的“自有智能路线图”则补充了开放 SDK、gateway、trace 数据控制和 private inference。

对工具热潮最有力的平衡来自教育。Stanford 兼任教授、Monaco AI 负责人 Mihail Eric 先让学生从零构建 coding agent，再拆解生产级 harness，随后学习 context engineering、skills、agent-ready codebase、code review 和安全。他的主张不是少用 agent，而是理解其下的系统和代码，从而真正指挥这项工作。

## X / Twitter

### Google Labs

Google Labs 欢迎 Howie 团队加入。该团队多年研究日程安排和日历管理，目标是共同为小企业打造直观的 AI 工具（[来源](https://x.com/GoogleLabs/status/2122461899178820069)）。

### Josh Woodward

Google VP Josh Woodward 展示了 Gemini Notebook 把资料转化为互动网站的能力，并用元素周期表举例，称这类网站易于制作和分享（[来源](https://x.com/joshwoodward/status/2122453269842886788)）。

### Peter Yang

Peter Yang 分享了 Nate Parrott 关于让 Claude 避免 AI slop 完成设计的五条经验：提前提供截图和过往作品等上下文，研究用户熟悉的 UX 模式，让模型意识到自身的设计偏好，先做线框图，再要求五个选项并重组其中的优点。他引用了这句提醒：“The model has no idea what its own biases are.” 并建议用 design.md 或类似文件抑制衬线字体、米白背景和卡片边缘横条等常见套路（[来源](https://x.com/petergyang/status/2122347721298510021)）。

### Thariq

Thariq 曾在 Anthropic 的 Claude Code 团队工作。他认为 software factory 是暂时的问题，因为模型会学会替人构建这些工厂。在他看来，更有趣的问题是如何打造一个让 agent 与人协作的工作空间（[来源](https://x.com/trq212/status/2122438326431154210)）。

### Guillermo Rauch

Vercel CEO Guillermo Rauch 提出了“own your intelligence roadmap”的四层结构：使用开放的 SDK 和 harness，用 gateway 保有模型选择权，掌握 trace 与数据并执行 ZDR，通过 private inference 掌握自有模型（[来源 1](https://x.com/rauchg/status/2122458782294847807)；[来源 2](https://x.com/rauchg/status/2122415506451841215)；[来源 3](https://x.com/rauchg/status/2122396034186014919)）。他还认为，agent 已经成为用户，因此 evals 应像过去的用户访谈一样进入软件工程循环。他将这一结果概括为个性化、完全自有且开源的软件新时代。

### Aaron Levie

Box CEO Aaron Levie 表示，每位员工的 token 支出仍看不到天花板，行业还处在采用曲线的早期（[来源](https://x.com/levie/status/2122508098351038532)）。他认为 coding model 只是最近才真正变得好用，tool use 和 computer use 正在打开更广泛的知识工作场景，而 agent swarm 与 background agent 会消耗多得多的 token。他的结论很直接：“tokens are only going up from here.”

### Garry Tan

Y Combinator 总裁兼 CEO Garry Tan 表示，GBrain 的后端引擎将用 Rust 编写，并以 Vorflux 作为 software factory，用来替代 Postgres 配合 pgvector 或 PGlite，作为 vector search、graph search、embeddings、RAG 和 HNSW 的底层存储（[来源 1](https://x.com/garrytan/status/2122576951080792543)；[来源 2](https://x.com/garrytan/status/2122517681740124271)）。他还表示，GBrain 的托管版本支持把个人员工 brain 汇总为团队 brain 和公司 brain。

### Nikunj Kothari

FPV Ventures 合伙人 Nikunj Kothari 把 2026 年的基础设施竞赛概括为一串进展：第一季度 vibe coding，第二季度 harness，第三季度 sandbox，第四季度 agentic CI（[来源](https://x.com/nikunj/status/2122543500814336281)）。他指出供应商数量已经多到难以跟踪，并追问下一步会是什么。

### Peter Steinberger

Peter Steinberger 在 OpenClaw 和 OpenAI 工作。他描述了 macOS 上 agent 面临的权限错位：用户希望减少权限提醒，让 agent 不必被持续照看，但 Apple 又增加了新的吓人提醒（[来源](https://x.com/steipete/status/2122463466304971068)）。

### Dan Shipper

Every CEO Dan Shipper 提出了一个基于 proof of work 的 feed 排序想法：agent 汇报自己在某条内容上使用了多少 token，这一用量会影响一个同时供人和 agent 阅读的 feed 的排序（[来源](https://x.com/danshipper/status/2122541401804054826)）。

### Aditya Agarwal

SPC 普通合伙人 Aditya Agarwal 表示，对许多 hardtech 应用而言，把 AI 尽可能贴近芯片至关重要，并认为印度可以建设半导体产业（[来源 1](https://x.com/adityaag/status/2122386958101959118)）。他宣布 SPC 与 Redstart Ventures、IndusBridge 共同领投 BharatSemi 的 2400 万美元种子轮。他还表示，interpretability 工作已经发展到可以把方法应用到领先 frontier model 的程度，并称这件事必须做对（[来源 2](https://x.com/adityaag/status/2122367547312119843)）。

## Podcast

### Latent Space：百万 AI 工程师特别节目，Stanford 如何教授 AI 原生工程（Mihail Eric，Monaco）

**核心观点：** 最好的 AI 原生工程教育，会先让学生打开 harness，而不只是使用工具，因为理解与验证仍是稀缺能力。

Mihail Eric 是 Stanford 兼任教授，也是 Monaco 的 AI 负责人。他教授的 CS 146：The Modern Software Developer，面向的是进入职场时 coding agent 已经普及的学生。他在课堂调查中说，已经没有学生亲手敲代码。因此课程刻意从一个不寻常的起点开始：学生先用大约 200 行代码构建一个 coding agent，再通过 proxy 查看生产级 harness 的请求、system prompt、plan prompt 和 compaction prompt。课程要说明的是，agentic loop 本身可以被理解，真正困难的是围绕它设计 context、工具和验证机制。

接下来，课程覆盖大规模 context engineering、MCP 与工具设计、skills、agent 配置、agent-ready codebase、agentic code review、安全、background agent 和 software factory。Eric 把 agent readiness 视为并行与 multi-agent 工作的基础：代码库必须具备清晰结构、可理解性和可验证性，团队才能有效铺开工作。学生还会向开源的 AI 原生仓库贡献代码，由维护者审查并帮助他们建立优秀软件的思维模型。

反直觉之处在于，代码生成越快，理解反而越有价值。Eric 的提醒很直接：“there's no situation in which turning your brain off is a good idea.”（[来源](https://www.youtube.com/@LatentSpacePod)）

## Blog

本轮经过验证的博客 feed 中没有新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
