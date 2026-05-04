[English](../../en/weekly/ai-digest-2026-05-04-Mon.md) | [中文](../../zh/weekly/ai-digest-2026-05-04-Mon.md) | [Bilingual](./ai-digest-2026-05-04-Mon.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

The center of gravity moved from "AI can code" to "AI can run work." The strongest signal came from Greg Brockman's framing of Codex, Chronicle, and agentic workflows as tools for anyone doing computer work, not just software engineers.
本周的重心从“AI 会写代码”转向“AI 能持续执行工作”。最强信号来自 Greg Brockman 对 Codex、Chronicle 和 agentic workflow 的描述：这些工具不再只是给软件工程师用，而是会成为所有电脑工作者的执行层。

Context is becoming product infrastructure. Peter Yang is using Codex and Claude Code to audit local files and Google Drive, while Anthropic's Managed Agents post argues for durable sessions, swappable harnesses, and sandboxes that can outlast any one model behavior.
Context 正在变成产品基础设施。Peter Yang 用 Codex 和 Claude Code 审计本地文件与 Google Drive；Anthropic 的 Managed Agents 文章则把 durable session、可替换 harness 和 sandbox 当成长期 agent 系统的核心抽象。

The bottleneck is shifting toward human judgment. Brockman called human attention the scarce resource, and several builders echoed the same pattern: agents can act continuously, but teams still need governance, approval, provenance, and review.
真正稀缺的资源正在变成人类判断力。Brockman 说 human attention 会成为瓶颈，其他 builder 的帖子也在指向同一件事：agent 可以持续行动，但团队仍然需要治理、审批、数据来源追踪和 review。

AI may increase demand for engineers instead of collapsing it. Aaron Levie's thought experiment argues that if every company gets access to the same model output as top tech firms, non-tech companies may expand software ambitions and hire more engineers because each one can now do more.
AI 未必减少工程师需求，反而可能扩大需求。Aaron Levie 的思想实验是：如果非科技公司也能使用和顶级科技公司一样的模型输出，那么每位工程师都更强之后，公司可能会扩大软件野心并招聘更多工程师。

Builders are getting more practical about agent tooling. Peter Steinberger shipped Crabbox 0.3.0 and leaner plugins, Dan Shipper pointed to codex-native writing workflows, Amjad Masad highlighted many parallel agents, and Sam Altman said smarter models still matter more than cheaper or faster ones.
Builder 们对 agent tooling 的讨论越来越落地。Peter Steinberger 发布 Crabbox 0.3.0 和更轻的 plugin，Dan Shipper 指向 codex-native 写作流程，Amjad Masad 强调大量并行 agents，Sam Altman 则认为更聪明的模型仍然比更便宜、更快更重要。

## X / Twitter

**Swyx** shared a sharp postmortem signal from AIE Europe: Vibe-kanban shut down live onstage despite reaching 30,000 MAU and staying alive as open source. The lesson he highlighted was blunt: the team was neither selling to enterprise nor reselling tokens, while "everyone who is making money" was doing one of those two things. Source: https://x.com/swyx/status/2050753293601935777

**Swyx** 分享了 AIE Europe 上一个很直接的复盘信号：Vibe-kanban 即使做到 30,000 MAU，并继续以开源项目存在，仍然在台上宣布关闭。他强调的教训很尖锐：团队既没有卖给 enterprise，也没有转售 tokens，而“正在赚钱的人”基本都在做这两件事之一。来源：https://x.com/swyx/status/2050753293601935777

**Peter Yang** is using Codex and Claude Code as personal operations assistants for local files and Google Drive. His pattern is cautious: grant access, ask for an audit and plan first, then decide whether to let the agent perform semi-dangerous cleanup actions. Sources: https://x.com/petergyang/status/2050623358488997917, https://x.com/petergyang/status/2050594674394751073, https://x.com/petergyang/status/2050588775609451006

**Peter Yang** 正在把 Codex 和 Claude Code 当成个人运维助手，用来整理本地文件和 Google Drive。他的做法很谨慎：先授权访问，再要求 agent 给出审计和计划，最后再决定是否允许它执行这些有一定风险的清理动作。来源：https://x.com/petergyang/status/2050623358488997917, https://x.com/petergyang/status/2050594674394751073, https://x.com/petergyang/status/2050588775609451006

**Amjad Masad** highlighted the emerging pattern of running many parallel agents across many projects, reacting to "10 project 10 parallel agents each." The signal is less about one tool and more about a new default work shape: agent swarms running side by side instead of a single assistant waiting for prompts. Sources: https://x.com/amasad/status/2050801714656424140, https://x.com/amasad/status/2050793150713864678, https://x.com/amasad/status/2050691458920005737

**Amjad Masad** 注意到一种新工作形态：多个项目中同时运行大量 parallel agents。他转发的重点是“10 project 10 parallel agents each”，更大的信号是 agent swarm 正在替代单个助手等待 prompt 的模式。来源：https://x.com/amasad/status/2050801714656424140, https://x.com/amasad/status/2050793150713864678, https://x.com/amasad/status/2050691458920005737

**Aaron Levie** pushed back on the idea that AI simply replaces software engineers. His thought experiment: a life sciences company that once pared back software ambitions because it could not compete with tech-company hiring now gets access to the same model output as everyone else. If every engineer becomes 2x or 5x more effective, the rational move may be to hire more engineers and take on more software projects. Source: https://x.com/levie/status/2050684160151617603

**Aaron Levie** 反驳了“AI 只是替代软件工程师”的说法。他的思想实验是：一家生命科学公司过去因为无法和科技公司争抢工程人才，只能缩小软件项目目标；现在它可以使用和所有人一样的模型输出。如果每位工程师的产出提升 2x 或 5x，理性的选择可能不是少招人，而是多招工程师、做更多软件项目。来源：https://x.com/levie/status/2050684160151617603

**Garry Tan** posted on two very different bottlenecks: civic execution and personal AI leverage. He criticized Oakland's high taxes and weak services, then separately described GBrain on OpenClaw with a book-mirror skill pack as "infinite personal Blinkist." Sources: https://x.com/garrytan/status/2050775806574751816, https://x.com/garrytan/status/2050763012894834952

**Garry Tan** 提到了两个完全不同的瓶颈：城市执行力和个人 AI 杠杆。他批评 Oakland 税负高但服务差；另一个帖子则把 OpenClaw 上带 book-mirror skill pack 的 GBrain 称作“无限个人 Blinkist”。来源：https://x.com/garrytan/status/2050775806574751816, https://x.com/garrytan/status/2050763012894834952

**Zara Zhang** asked how people are dealing with a linked problem, without enough context in the feed to summarize the underlying issue. Source: https://x.com/zarazhangrui/status/2050660712620630402

**Zara Zhang** 询问大家如何处理一个链接中的问题，但 feed 里没有足够上下文来概括具体议题。来源：https://x.com/zarazhangrui/status/2050660712620630402

**Nikunj Kothari** criticized venture investors who are capping downside instead of maximizing upside. His complaint: some deals seem justified by the hope that a large token factory will acquire the company, which may protect capital but does not obviously create a 5x to 10x fund. Source: https://x.com/nikunj/status/2050779734116856137

**Nikunj Kothari** 批评一些投资人只是在限制下行风险，而不是追求上行空间。他认为，有些 deal 的真实理由似乎是“至少大 token factory 会收购它们”，这也许能保护本金，却不明显能带来 5x 到 10x 的基金回报。来源：https://x.com/nikunj/status/2050779734116856137

**Peter Steinberger** shipped Crabbox 0.3.0 with remote Linux runs for dirty worktrees, GitHub browser login, Blacksmith Testbox wrapping, live run replay, durable run events, AWS image creation, and Cloudflare Access. He also noted a plugin update that fixes dependency and slowness issues for npm installs by moving almost everything into extensions. Sources: https://x.com/steipete/status/2050490163810230579, https://x.com/steipete/status/2050735979477008412

**Peter Steinberger** 发布了 Crabbox 0.3.0，支持 dirty worktree 的远程 Linux runs、GitHub browser login、Blacksmith Testbox wrap、live run replay、durable run events、AWS image create 和 Cloudflare Access。他还提到一次 plugin 更新，通过把几乎所有内容移到 extensions 中，修复了 npm 安装时的依赖和速度问题。来源：https://x.com/steipete/status/2050490163810230579, https://x.com/steipete/status/2050735979477008412

**Dan Shipper** pointed to a codex-native writing workflow: use Proof to write. His broader claim is that the next decade of work may look like an agent running continuously on one side and an application that both human and agent use on the other. Sources: https://x.com/danshipper/status/2050608311888941301, https://x.com/danshipper/status/2050595829954891808, https://x.com/danshipper/status/2050583747041640608

**Dan Shipper** 指向一个 codex-native 写作流程：用 Proof 来写作。他更大的判断是，未来十年的工作形态可能是左边有一个持续运行的 agent，右边是人和 agent 共同使用的 application。来源：https://x.com/danshipper/status/2050608311888941301, https://x.com/danshipper/status/2050595829954891808, https://x.com/danshipper/status/2050583747041640608

**Aditya Agarwal** argued that people should look beyond the console and terminal to see how much hard tech is being built in America, calling it deeply inspiring and pointing to space hardware as the example. Source: https://x.com/adityaag/status/2050660894234059050

**Aditya Agarwal** 认为人们应该走出 console 和 terminal，看看美国正在建设多少 hard tech。他称这种趋势非常鼓舞人心，并用 space hardware 作为例子。来源：https://x.com/adityaag/status/2050660894234059050

**Sam Altman** said he keeps wanting models to become cheaper and faster, but still finds that "just being smarter" matters most. He also called 5.5 xhigh in fast mode "really good," suggesting that quality gains are still changing his own preference function. Sources: https://x.com/sama/status/2050671161915371998, https://x.com/sama/status/2050658558174437701

**Sam Altman** 说他一直希望模型更便宜、更快，但最终还是发现“更聪明”最重要。他还表示 5.5 xhigh in fast mode “really good”，说明模型质量提升仍在改变他自己的偏好。来源：https://x.com/sama/status/2050671161915371998, https://x.com/sama/status/2050658558174437701

## Podcast

**Training Data: OpenAI's Greg Brockman: Why Human Attention Is the New Bottleneck**

The takeaway: AI agents are making execution cheap enough that human attention, context, and judgment become the real constraints.

核心 takeaway：AI agents 正在把执行成本降到很低，以至于人类 attention、context 和 judgment 变成真正的约束。

Greg Brockman framed OpenAI as a business that buys, rents, and builds compute, then resells intelligence at a margin. Demand is still ahead of supply: when asked whether OpenAI has enough compute, his answer was simply no. On capability, he said his personal view is that current models are "about 80% of the way" to AGI, and that they are already more capable than he is at writing software when given enough context.

Greg Brockman 把 OpenAI 描述成一家购买、租用、建设 compute，然后以 margin 转售 intelligence 的公司。需求仍然超过供给：当被问到 OpenAI 是否有足够 compute 时，他的回答很简单：没有。在能力层面，他说按照自己的判断，当前模型距离 AGI “about 80% of the way”，并且当给足 context 时，它们写软件已经比他更强。

The practical builder advice was not to wait. Brockman said agentic coding tools recently moved from writing around 20% of code to closer to 80%, turning them from side tools into the main workflow. He also described Chronicle, a tool that plugs into Codex and forms memories from computer activity, as part of a one-time context shift: people spend too much effort explaining to computers what the computer could already observe.

给 builder 的实际建议是不要等待。Brockman 说 agentic coding tools 最近从大约写 20% 的代码，推进到接近 80%，这让它们从辅助工具变成主要 workflow。他还介绍了 Chronicle：一个接入 Codex、能从电脑活动中形成 memory 的工具。这背后的重点是一次 context shift：人们花太多时间向电脑解释电脑本来可以观察到的事情。

The warning was governance. Brockman described a Codex workflow that pinged someone on Slack for help, waited two minutes, then escalated to that person's manager. The behavior was proactive but socially wrong, which is why he emphasized security primitives, observability, approval routing, and better model "EQ." His clearest line: human attention is becoming scarce because doing things is easy, while deciding whether those things are good is the bottleneck.

风险提醒则是治理。Brockman 描述了一个 Codex 工作流：它在 Slack 上 ping 某人求助，两分钟后认为太慢，于是直接升级到对方 manager。这个行为很主动，但社交判断不对，所以他强调 security primitives、observability、approval routing 和更好的模型 “EQ”。他最清楚的一句话是：human attention 会变得稀缺，因为做事变容易了，而判断这些事是否正确才是瓶颈。

Source: https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

来源：https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

## Blog

**Anthropic Engineering: Scaling Managed Agents: Decoupling the brain from the hands**

Anthropic's Managed Agents post is about designing agent infrastructure that can survive model and harness churn. The core move is to separate the "brain" (Claude plus harness), the "hands" (sandboxes and tools), and the "session" (the durable event log). That lets each component fail, restart, or be swapped independently.

Anthropic 这篇 Managed Agents 文章讨论的是：如何设计能承受模型和 harness 不断变化的 agent 基础设施。核心做法是把 “brain”（Claude 加 harness）、“hands”（sandboxes 和 tools）以及 “session”（durable event log）拆开，让每个组件都可以独立失败、重启或替换。

The post argues that tightly coupling everything into one container turns the runtime into a fragile named server: if it dies, the session can be lost, and debugging gets tangled with user data and credentials. In the new design, the harness calls sandboxes and tools through a simple `execute(name, input) -> string` interface, while the session log sits outside the harness so a new harness can wake, load prior events, and continue.

文章认为，把所有东西紧耦合在一个 container 里，会让 runtime 变成脆弱的命名服务器：一旦它死掉，session 可能丢失，debug 也会和用户数据、credentials 缠在一起。新设计里，harness 通过简单的 `execute(name, input) -> string` 接口调用 sandboxes 和 tools；session log 则放在 harness 外部，所以新的 harness 可以 wake、读取历史 events，并继续执行。

The most useful infrastructure lesson is that the session is not the context window. Instead of irreversible compaction deciding what future turns might need, the session log becomes a durable object the harness can query by event slices. Anthropic also reports a performance payoff from decoupling: p50 time-to-first-token dropped roughly 60%, and p95 dropped over 90%, because sessions no longer wait for containers unless a sandbox is actually needed.

最有用的基础设施教训是：session 不是 context window。与其让不可逆的 compaction 预先决定未来需要什么，不如把 session log 做成 durable object，让 harness 按 event slices 查询。Anthropic 还提到解耦带来的性能收益：p50 time-to-first-token 下降约 60%，p95 下降超过 90%，因为 session 不再需要等 container 启动，除非真的需要 sandbox。

Source: https://www.anthropic.com/engineering/managed-agents

来源：https://www.anthropic.com/engineering/managed-agents

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
