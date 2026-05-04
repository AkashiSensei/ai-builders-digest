[English](../../en/weekly/ai-digest-2026-05-04-Mon.md) | [中文](./ai-digest-2026-05-04-Mon.md) | [双语](../../bilingual/weekly/ai-digest-2026-05-04-Mon.md)

---

# AI Builders Digest

## 导读

1. 本周的重心从“AI 会写代码”转向“AI 能持续执行工作”。最强信号来自 Greg Brockman 对 Codex、Chronicle 和 agentic workflow 的描述：这些工具不再只是给软件工程师用，而是会成为所有电脑工作者的执行层。

2. Context 正在变成产品基础设施。Peter Yang 用 Codex 和 Claude Code 审计本地文件与 Google Drive；Anthropic 的 Managed Agents 文章则把 durable session、可替换 harness 和 sandbox 当成长期 agent 系统的核心抽象。

3. 真正稀缺的资源正在变成人类判断力。Brockman 说 human attention 会成为瓶颈，其他 builder 的帖子也在指向同一件事：agent 可以持续行动，但团队仍然需要治理、审批、数据来源追踪和 review。

4. AI 未必减少工程师需求，反而可能扩大需求。Aaron Levie 的思想实验是：如果非科技公司也能使用和顶级科技公司一样的模型输出，那么每位工程师都更强之后，公司可能会扩大软件野心并招聘更多工程师。

5. Builder 们对 agent tooling 的讨论越来越落地。Peter Steinberger 发布 Crabbox 0.3.0 和更轻的 plugin，Dan Shipper 指向 codex-native 写作流程，Amjad Masad 强调大量并行 agents，Sam Altman 则认为更聪明的模型仍然比更便宜、更快更重要。

## X / Twitter

**Swyx** 分享了 AIE Europe 上一个很直接的复盘信号：Vibe-kanban 即使做到 30,000 MAU，并继续以开源项目存在，仍然在台上宣布关闭。他强调的教训很尖锐：团队既没有卖给 enterprise，也没有转售 tokens，而“正在赚钱的人”基本都在做这两件事之一。来源：https://x.com/swyx/status/2050753293601935777

**Peter Yang** 正在把 Codex 和 Claude Code 当成个人运维助手，用来整理本地文件和 Google Drive。他的做法很谨慎：先授权访问，再要求 agent 给出审计和计划，最后再决定是否允许它执行这些有一定风险的清理动作。来源：https://x.com/petergyang/status/2050623358488997917, https://x.com/petergyang/status/2050594674394751073, https://x.com/petergyang/status/2050588775609451006

**Amjad Masad** 注意到一种新工作形态：多个项目中同时运行大量 parallel agents。他转发的重点是“10 project 10 parallel agents each”，更大的信号是 agent swarm 正在替代单个助手等待 prompt 的模式。来源：https://x.com/amasad/status/2050801714656424140, https://x.com/amasad/status/2050793150713864678, https://x.com/amasad/status/2050691458920005737

**Aaron Levie** 反驳了“AI 只是替代软件工程师”的说法。他的思想实验是：一家生命科学公司过去因为无法和科技公司争抢工程人才，只能缩小软件项目目标；现在它可以使用和所有人一样的模型输出。如果每位工程师的产出提升 2x 或 5x，理性的选择可能不是少招人，而是多招工程师、做更多软件项目。来源：https://x.com/levie/status/2050684160151617603

**Garry Tan** 提到了两个完全不同的瓶颈：城市执行力和个人 AI 杠杆。他批评 Oakland 税负高但服务差；另一个帖子则把 OpenClaw 上带 book-mirror skill pack 的 GBrain 称作“无限个人 Blinkist”。来源：https://x.com/garrytan/status/2050775806574751816, https://x.com/garrytan/status/2050763012894834952

**Zara Zhang** 询问大家如何处理一个链接中的问题，但 feed 里没有足够上下文来概括具体议题。来源：https://x.com/zarazhangrui/status/2050660712620630402

**Nikunj Kothari** 批评一些投资人只是在限制下行风险，而不是追求上行空间。他认为，有些 deal 的真实理由似乎是“至少大 token factory 会收购它们”，这也许能保护本金，却不明显能带来 5x 到 10x 的基金回报。来源：https://x.com/nikunj/status/2050779734116856137

**Peter Steinberger** 发布了 Crabbox 0.3.0，支持 dirty worktree 的远程 Linux runs、GitHub browser login、Blacksmith Testbox wrap、live run replay、durable run events、AWS image create 和 Cloudflare Access。他还提到一次 plugin 更新，通过把几乎所有内容移到 extensions 中，修复了 npm 安装时的依赖和速度问题。来源：https://x.com/steipete/status/2050490163810230579, https://x.com/steipete/status/2050735979477008412

**Dan Shipper** 指向一个 codex-native 写作流程：用 Proof 来写作。他更大的判断是，未来十年的工作形态可能是左边有一个持续运行的 agent，右边是人和 agent 共同使用的 application。来源：https://x.com/danshipper/status/2050608311888941301, https://x.com/danshipper/status/2050595829954891808, https://x.com/danshipper/status/2050583747041640608

**Aditya Agarwal** 认为人们应该走出 console 和 terminal，看看美国正在建设多少 hard tech。他称这种趋势非常鼓舞人心，并用 space hardware 作为例子。来源：https://x.com/adityaag/status/2050660894234059050

**Sam Altman** 说他一直希望模型更便宜、更快，但最终还是发现“更聪明”最重要。他还表示 5.5 xhigh in fast mode “really good”，说明模型质量提升仍在改变他自己的偏好。来源：https://x.com/sama/status/2050671161915371998, https://x.com/sama/status/2050658558174437701

## Podcast

**Training Data: OpenAI's Greg Brockman: Why Human Attention Is the New Bottleneck**

核心 takeaway：AI agents 正在把执行成本降到很低，以至于人类 attention、context 和 judgment 变成真正的约束。

Greg Brockman 把 OpenAI 描述成一家购买、租用、建设 compute，然后以 margin 转售 intelligence 的公司。需求仍然超过供给：当被问到 OpenAI 是否有足够 compute 时，他的回答很简单：没有。在能力层面，他说按照自己的判断，当前模型距离 AGI “about 80% of the way”，并且当给足 context 时，它们写软件已经比他更强。

给 builder 的实际建议是不要等待。Brockman 说 agentic coding tools 最近从大约写 20% 的代码，推进到接近 80%，这让它们从辅助工具变成主要 workflow。他还介绍了 Chronicle：一个接入 Codex、能从电脑活动中形成 memory 的工具。这背后的重点是一次 context shift：人们花太多时间向电脑解释电脑本来可以观察到的事情。

风险提醒则是治理。Brockman 描述了一个 Codex 工作流：它在 Slack 上 ping 某人求助，两分钟后认为太慢，于是直接升级到对方 manager。这个行为很主动，但社交判断不对，所以他强调 security primitives、observability、approval routing 和更好的模型 “EQ”。他最清楚的一句话是：human attention 会变得稀缺，因为做事变容易了，而判断这些事是否正确才是瓶颈。

来源：https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

## Blog

**Anthropic Engineering: Scaling Managed Agents: Decoupling the brain from the hands**

Anthropic 这篇 Managed Agents 文章讨论的是：如何设计能承受模型和 harness 不断变化的 agent 基础设施。核心做法是把 “brain”（Claude 加 harness）、“hands”（sandboxes 和 tools）以及 “session”（durable event log）拆开，让每个组件都可以独立失败、重启或替换。

文章认为，把所有东西紧耦合在一个 container 里，会让 runtime 变成脆弱的命名服务器：一旦它死掉，session 可能丢失，debug 也会和用户数据、credentials 缠在一起。新设计里，harness 通过简单的 `execute(name, input) -> string` 接口调用 sandboxes 和 tools；session log 则放在 harness 外部，所以新的 harness 可以 wake、读取历史 events，并继续执行。

最有用的基础设施教训是：session 不是 context window。与其让不可逆的 compaction 预先决定未来需要什么，不如把 session log 做成 durable object，让 harness 按 event slices 查询。Anthropic 还提到解耦带来的性能收益：p50 time-to-first-token 下降约 60%，p95 下降超过 90%，因为 session 不再需要等 container 启动，除非真的需要 sandbox。

来源：https://www.anthropic.com/engineering/managed-agents

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
