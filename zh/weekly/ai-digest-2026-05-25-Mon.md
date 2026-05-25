[English](../../en/weekly/ai-digest-2026-05-25-Mon.md) | [中文](./ai-digest-2026-05-25-Mon.md) | [双语](../../bilingual/weekly/ai-digest-2026-05-25-Mon.md)

---

# AI Builders Digest

## 导读
1. 快速 inference 正在从性能炫技变成产品基础设施。Cerebras 的 Andrew Feldman 认为，一旦 AI 进入日常工作，慢 inference 的市场空间就会像慢搜索一样归零。

2. agentic coding 正从新奇体验变成团队操作规范。Peter Steinberger 的 GitHub dashboard 和 scratch-log 建议、Guillermo Rauch 对 builder 回复的分析，以及 Aditya Agarwal 对代码产量变化的观察，都指向同一个需求：团队需要更好地检查 AI 生成的工作。

3. personal AI 的下一阶段会围绕记忆和 multimodal 系统展开。Garry Tan 关于 GBrain evals 和快速 multimodal fine-tuning 的帖子，把重点放在 retrieval 质量、速度，以及真正个人化的上下文上。

4. 关于工作的讨论正在变得更精确。Aaron Levie 把任务自动化和岗位消失区分开来，认为 AI 消除某个任务后，岗位本身常常会扩展到更高质量或原本无法覆盖的新工作。

5. 分发和叙事依然重要。Replit 帮一个周末 MVP 通过 Apple 审核的案例，以及 Nikunj Kothari 对 B2B 叙事的提醒，都说明 AI 能让 builder 更快，但产品仍然需要信任、定位和清晰故事。

## X / Twitter
### Thariq

Anthropic 的 Thariq 分享了一个很实用的 agentic maintenance 案例：他用一个省钱 prompt 清理旧创业项目 OMMultiverse 留下的服务。这个项目还有庞大的 legacy codebase 和仍在使用的社区，但他已经没有时间亲自做成本审计。真正有价值的信号不是 prompt 本身，而是工作流：让 agent 检查被忽略的基础设施、找出浪费，并提出可以执行的节省方案。链接：https://x.com/trq212/status/2058377974882210096

### Amjad Masad

Replit CEO Amjad Masad 转发了 Dial builder 的反馈：对方说 Replit 让 Cursor 显得没那么快，自己用一个周末做出了 MVP，并且第一次提交就通过了 Apple 审核。这个案例对 Replit 的产品信号很强，因为价值不只是生成代码，而是帮助一个真实 app 通过真实分发关口。链接：https://x.com/amasad/status/2058418731840159953

### Guillermo Rauch

Vercel CEO Guillermo Rauch 让 builders 回复自己最自豪的 AI-built product，并附上可用 URL 和主要使用的 model 或 agent。在处理 1,400 条回复后，他总结说 OpenAI 正在追上 Anthropic，Codex 的提及次数超过 Claude Code，但按 model 提及量看 Anthropic 仍然领先。链接：https://x.com/rauchg/status/2058245330836271263，https://x.com/rauchg/status/2058353051073970416

### Aaron Levie

Box CEO Aaron Levie 反驳了一个过于简化的“AI 取代工作”叙事：自动化任务并不等于消灭整个岗位。他认为，当人们能完成更多任务、以更高质量完成任务，或服务以前不经济的客户群时，岗位反而经常会扩展。这对 coding、法律、销售和 marketing 都适用。链接：https://x.com/levie/status/2058223867815227756

### Garry Tan

Y Combinator CEO Garry Tan 发布了新的 GBrain evals，称 GBrain 在 reranking、embedding 成本、速度和 retrieval success 上表现很强，在 LongMemEval 上比 MemPalace 高 1%，比 Vector RAG 高 38%。他还在尝试 Thinking Machines 后提到快速 multimodal fine-tuning，认为快速可用的 multimodal model 会打开更强大的 personal AI。链接：https://x.com/garrytan/status/2058448209027141709，https://x.com/garrytan/status/2058378310254793013

Tan 还从产品观点转向本地创业生态，承诺向 Garry's List Action 投入 5 万美元，并呼吁更多人支持让 startups 留在 San Francisco。他的实际框架是：城市政策不是背景噪音，而是 startup 运营环境的一部分。链接：https://x.com/garrytan/status/2058251537298980992

### Nikunj Kothari

FPV Ventures partner Nikunj Kothari 回到自己一年前关于 B2B 公司需要更强 narrative 的观点。他提醒说，要在泛滥的 AI 内容中脱颖而出，只有产品实力不够，公司还需要清晰、能被买家记住的故事和气质。链接：https://x.com/nikunj/status/2058203594672021769

### Peter Steinberger

Peter Steinberger 发布了一个 GitHub dashboard，帮助用户在一个地方看到 repos、open issues 和 PRs、最新发布版本，以及距离上次 release 之后的 commit 数。它很贴合当前 agent workflow 的需求：当 AI 帮你制造更多代码和分支时，builder 需要减少 repo 不确定性的 dashboard，而不是又一个信息流。链接：https://x.com/steipete/status/2058381186884411473

他还建议在大型 refactor 中要求 Codex 维护 scratch-log，记录执行过程中的决策、tradeoffs 和 review fixes。这是本期 feed 里最可执行的 agent 管理模式之一：让 agent 留下一条可复查的工作轨迹，尤其适合跨多个文件或存在模糊产品选择的改动。链接：https://x.com/steipete/status/2058308112134635528

### Aditya Agarwal

South Park Commons general partner Aditya Agarwal 捕捉到基线变化的速度：六个月前大家还主要是在和 LLM 聊天，并且已经很满意；现在 LLM 生成的代码量已经超过人类历史上写过的所有代码。这个数字更适合当作方向性观察，而不是严谨测量，但战略含义很清楚：软件团队正在进入一个生成代码量不再边缘化的世界。链接：https://x.com/adityaag/status/2058233900464238801

## Podcast
### No Priors: The Story Behind Cerebras' $63 Billion IPO with Founder and CEO Andrew Feldman

The Takeaway：Cerebras 的 Andrew Feldman 把 inference speed 视为 AI 从 demo 变成新商业基础设施的关键转折。

Feldman 的核心观点是，快速 AI 不只是更好的用户体验，它会改变公司能构建什么。他用了 Netflix 的类比：当带宽变快，Netflix 不只是更高效地寄 DVD，而是变成了影视工作室。在他看来，快速 inference 也可能为 coding、design、SaaS tools，以及那些还没有围绕 AI 重组的 workflow 带来类似的商业模式变化。

Cerebras 的赌注既是架构性的，也是逆向的。Feldman 说，公司选择 wafer scale，是因为如果想获得根本性的提升，就不能继续沿用相似架构。其他公司做邮票大小的芯片，Cerebras 做的是 46,000 平方毫米、接近餐盘大小的芯片。公司多年里处于技术上正确、商业上太早的状态：2019 年证明架构可行，但直到 2025 年 model 足够有用、用户每天都用 AI 时，大家才真正重视 latency。

现在需求故事反过来了。Feldman 说 Cerebras 在大模型、小模型、美国模型、中国模型，甚至 trillion-parameter models 上都比 GPU 快 15 到 20 倍。他还提到与 OpenAI 达成了超过 200 亿美元的大型协议，并与 AWS 达成部署合作。最锋利的产品 lesson 是他的判断：慢 inference 的市场会像慢搜索的市场一样，等于零。一旦 AI 成为日常工作，latency 就不再只是性能指标，而是产品本身。链接：https://www.youtube.com/watch?v=jeop9wfb9jU

## Blog
本周 feed 中没有新的博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
