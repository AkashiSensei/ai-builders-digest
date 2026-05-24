[English](../../en/daily/ai-digest-2026-05-25-Mon.md) | [中文](./ai-digest-2026-05-25-Mon.md) | [双语](../../bilingual/daily/ai-digest-2026-05-25-Mon.md)

---

# AI Builders Digest

## 导读

1. AI 编程正在从聊天窗口进入可衡量的生产工作流。Thariq 用 agentic 的“帮我省钱”提示清理旧 startup 服务成本；Peter Steinberger 做了 GitHub dashboard，并建议 Codex 在大型重构中维护 scratch log；Aditya Agarwal 则把 2026 年 5 月描述成 LLM 产出代码总量超过人类历史手写代码的时刻。

2. 模型和 agent 竞争正在由实际发布的产品来检验，而不只是 benchmark。Guillermo Rauch 收集大家最自豪的 AI-built product URL 和主要使用的 model/agent；他的回复分析也显示 OpenAI/Codex 的声量正在追上 Anthropic/Claude Code，尽管模型偏好仍有分歧。

3. 速度正在变成 AI 基础设施的硬需求。Cerebras 这期播客的核心观点是：当 AI 真正进入日常工作，慢 inference 就不再可接受；Andrew Feldman 把 Cerebras 的 wafer-scale 架构、OpenAI/AWS 需求和 630 亿美元公开市场估值，都归结到市场终于开始重视 fast inference。

4. AI 能力更像是在扩展工作，而不是整齐地删除工作。Aaron Levie 提醒不要把自动完成任务误认为整个岗位会消失：当任务成本下降，人们往往会做更多任务、提高质量要求，或扩展到相邻工作。

5. 个人 AI 系统和叙事质量正在成为 builder 杠杆。Garry Tan 推进新的 GBrain evals 和快速个人微调；Amjad Masad 转发了一个周末用 Replit 做出并通过 App Store 审核的故事；Nikunj Kothari 则提醒 B2B 公司需要更清晰的 narrative，才能从 AI slop 中脱颖而出。

## X / Twitter

### Thariq

Thariq 分享了一个很实际的 agent 用法：为旧 startup 清理遗留服务成本。这个项目有巨大的 legacy codebase，也仍然有社区在使用，但他一直没有时间亲自做 cost saving。提示词很简单：让 agent “帮我省钱”。这里的信号不是炫技 demo，而是 agent 开始承担那些重要但长期被搁置的运维工作。

Source: https://x.com/trq212/status/2058380417716125966
Source: https://x.com/trq212/status/2058377974882210096

### Amjad Masad

Amjad Masad 转发了一个 Replit 案例：一位 builder 之前用 Cursor 做前三个 app 已经觉得很快，但用 Replit 做 Dial 时，一个周末就完成 MVP，并且第一次提交就通过 Apple 审核。他也认同更广泛的观点：集成式 agentic development environment 能压缩从想法到移动产品发布的路径。对 builder 来说，速度叙事现在应该用端到端 shipping 结果来检验，而不只是编辑器里的速度。

Source: https://x.com/amasad/status/2058418731840159953
Source: https://x.com/amasad/status/2058417703958773965
Source: https://x.com/amasad/status/2058292230700372356

### Guillermo Rauch

Guillermo Rauch 分析了 1,400 条关于 AI-built products 的回复，得到两个有用信号：OpenAI 在 builder 心智里正在追上 Anthropic；Codex 的提及次数超过 Claude Code，不过按 model 提及来看 Anthropic 仍然更强。他还请 builders 回复自己最自豪的 AI-built product URL，以及主要使用的 model 或 agent。这是 agent 市场更健康的 framing：真正有用的排行榜正在转向可以打开和检查的真实产品。

Source: https://x.com/rauchg/status/2058353051073970416
Source: https://x.com/rauchg/status/2058245330836271263
Source: https://x.com/rauchg/status/2058239837195628941

### Aaron Levie

Aaron Levie 反驳了一个常见跳跃：从“AI 能自动化任务”直接推导到“AI 会消灭岗位”。他的观点是，当一些任务变便宜，岗位往往会扩展：团队会做更多同类工作，提高质量标准，或进入过去不可触达的工作。他把这个逻辑用于 coding、legal work、sales 和 marketing：小企业和非科技公司现在可能会启动过去无法负担的软件、营销或运营项目。

Source: https://x.com/levie/status/2058223867815227756

### Garry Tan

Garry Tan 强调了新的 GBrain evals，称 GBrain 在 reranking、embedding 成本、速度和 retrieval success 上表现很强，并且在他的 benchmark 中明显超过 vector RAG。他还说自己用 Thinking Machines 在几个小时内 fine-tune 了一个 Qwen3.5-397B 模型，并把 fast usable multimodal 与更强的 personal AI 联系起来。他关于让 startup 留在 San Francisco 的非 AI 帖子也提醒我们：AI builder infrastructure 仍然离不开本地人才、资本和政策生态。

Source: https://x.com/garrytan/status/2058448209027141709
Source: https://x.com/garrytan/status/2058378310254793013
Source: https://x.com/garrytan/status/2058251537298980992

### Nikunj Kothari

Nikunj Kothari 说，越来越多 B2B 公司开始意识到 narrative 和 vibe 的重要性。他的提醒是，在充满 AI-generated slop 的市场里，清晰定位并不会变得不重要，反而更重要。对 builders 来说，这是 agent 杠杆之外的 go-to-market 补充：生产速度越快，taste、specificity 和能被客户记住的故事就越有价值。

Source: https://x.com/nikunj/status/2058338294191227247
Source: https://x.com/nikunj/status/2058203594672021769

### Peter Steinberger

Peter Steinberger 发布了一个 GitHub dashboard，用来看 repositories、open issues/PRs、最新 release version，以及距离上次 release 以来的 commit 数。他还建议在大型重构时让 Codex 维护 scratch log，记录决策、tradeoffs、review fixes，以及用户忘记说明的内容。这是一个很实用的 agent-operations 模式：保留 reasoning trace，让人类能审计过程，而不只是看最终 diff。

Source: https://x.com/steipete/status/2058381186884411473
Source: https://x.com/steipete/status/2058332234247987379
Source: https://x.com/steipete/status/2058308112134635528

### Aditya Agarwal

Aditya Agarwal 对比了 2025 年 11 月和 2026 年 5 月：六个月前，人们还主要满足于和 LLM chat；现在，LLM 产出的代码已经超过了人类历史上写过的全部代码。这个说法有刻意 provocative 的成分，但底层信号很明确：AI coding 已经从新奇体验迅速变成主要生产通道，团队需要新的 review、ownership 和 measurement 习惯。

Source: https://x.com/adityaag/status/2058233900464238801

## Podcast

### The Story Behind Cerebras’ $63 Billion IPO with Founder and CEO Andrew Feldman

Andrew Feldman 在 No Priors 的访谈是一套关于 AI infrastructure 的 speed thesis。Cerebras 构建 wafer-scale AI computers，他称其在各种规模和来源的模型 inference 上比 GPU 快 15 到 20 倍。很多年里，这种速度没有转化成商业价值，因为 AI 仍然更像 novelty，而不是日常 workflow。到 2025 年模型变得足够有用后，slow inference 才变得不可接受。

Cerebras 的反共识选择是架构级的，而不是增量式的。Feldman 认为，想获得数量级速度提升，不可能只靠对 GPU 做小改动，所以 Cerebras 选择了 dinner-plate-sized 的 wafer-scale chip，而不是行业熟悉的 postage-stamp-sized chip。难点也不只是市场时机：2017 到 2019 年之间，团队每月投入巨大，但芯片仍然无法工作，直到最终 yield 出来并成功运行。

商业路径同样值得注意。Cerebras 最早进入 supercomputing、国家实验室、oil and gas、pharma 和 sovereign AI，因为这些客户在主流软件市场之前就重视速度。真正的 mainstream inflection 则来自 OpenAI、AWS、Cognition、Cursor、Lovable 等公司的 inference 需求，让 latency 和 throughput 成为一阶产品约束。

对 builders 来说，这期的实际启示是：当某个 workload 变成日常习惯，性能会创造新产品类别。Fast AI 不只是 slow AI 的便宜版本；就像 broadband 改变 DVD 时代之后的 Netflix，它会带来新的 workflow、新的用户预期和新的 business model。

Source: https://www.youtube.com/watch?v=jeop9wfb9jU

## Blog

今天 feed 中没有新的 blog posts。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
