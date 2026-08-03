[English](../../en/daily/ai-digest-2026-08-04-Tue.md) | [中文](../../zh/daily/ai-digest-2026-08-04-Tue.md) | [Bilingual](./ai-digest-2026-08-04-Tue.md)

---

# AI Builders Digest

## Reader's Briefing / 导读
The central research question today is no longer just how far transformers can scale, but whether models need architectures that learn from live experience rather than only from lab training and short context windows.
今天最核心的研究问题已经不只是 transformer 还能扩到多远，而是模型是否需要能从真实使用经验中持续学习的新架构，而不是只依赖实验室训练和短上下文。

Company agents are starting to look like internal operating systems. Vercel's @v is framed as both router and worker, with sub-agents, skills, memories, and delegation across daily business functions.
公司级 agent 正在变成内部操作系统。Vercel 的 @v 被描述成既是 worker 又是 router，能调用子 agent、技能、记忆和委派机制，覆盖日常业务工作。

Builders are separating domains where AI progress is easy to verify from domains where value depends on judgment, timing, taste, and messy real-world feedback loops.
Builders 正在区分两类 AI 领域：一类结果容易验证，适合快速自动化；另一类依赖判断、时机、品味和复杂反馈，价值更多落在应用层和流程重构上。

AI is changing the psychology of work as much as the workflow. Several posts point at agency, identity, craft, and the human scaffolding that remains once the model can do more of the task.
AI 改变的不只是工作流，也包括人对工作的心理感受。多条内容都指向 agency、身份感、craft，以及模型做得更多之后仍然存在的人类脚手架。

Experiments are moving from demos into strange but concrete surfaces: browser-playable model tests, autonomous chess engines, self-cleaning agent skills, and support-chat agents that negotiate with humans.
实验正在从 demo 进入具体表面：可在浏览器运行的模型测试、自主下棋引擎、自清理 agent 技能，以及能和客服人员沟通并据理力争的 support-chat agent。

## X / Twitter
### Andrej Karpathy
Andrej Karpathy pointed back to Simon Willison's pelican-on-a-bicycle test and made the source playable and forkable in the browser. The useful signal is that odd, reproducible model tests are turning into small software artifacts, not just screenshots or anecdotes.

Andrej Karpathy 回到 Simon Willison 的“骑自行车的鹈鹕”测试，并把源代码做成可在浏览器中运行和 fork 的版本。这里的信号不是单个 demo 有多精美，而是奇怪但可复现的模型测试正在变成小型软件工件，而不只是截图或轶事。

- https://x.com/karpathy/status/2083948654377996480

### Swyx
Swyx collected two different signals about agents in the wild. One was a caution that social platforms can consume years while making people feel productive. The other was more tactical: in preparation for a computer-use podcast, he shared a Codex CUA moment where an agent handled a support chat, escalated for faster resolution, and replied with receipts when support pushed back.

Swyx 给出了两个关于 agent 真实使用的信号。一个是提醒：社交平台可能吞掉人很多年，同时让人误以为自己在推进事情。另一个更具体：为了准备 computer-use podcast，他记录了 Codex CUA 处理客服聊天的时刻，agent 替他升级问题、争取更快解决，并在客服推责时拿出完整证据回应。

- https://x.com/swyx/status/2084171901451268599
- https://x.com/swyx/status/2084156733027701164
- https://x.com/swyx/status/2084155512573288478

### Peter Yang
Peter Yang's strongest AI-specific note came from his Hermes interview with Nous Research co-founder Karan Malhotra. Hermes can build its own skills, and the guardrail against skill slop is Hermes Curator: a scheduled background loop that reviews skills and memory, removes waste, and can be customized because the system is open source. He also made the broader product point that personality matters: a capable assistant still fails if it is annoying to talk to.

Peter Yang 最有 AI 信号的一条来自他对 Nous Research 联合创始人 Karan Malhotra 的 Hermes 访谈。Hermes 可以构建自己的技能，而防止技能变成 slop 的机制是 Hermes Curator：一个按计划运行的后台任务，会审查技能和记忆、清理浪费，并且因为开源，用户可以定义自己的 slop 标准。他还补充了一个产品层面的判断：个性很重要，一个聪明但不好交流的助手依然不好用。

- https://x.com/petergyang/status/2083968605432267139
- https://x.com/petergyang/status/2083947480136421384
- https://x.com/petergyang/status/2084065527081980285

### Thariq
Anthropic's Thariq connected AI-assisted mathematics to the chess story and Jevons paradox. His point is that making mathematical work easier may increase demand for people who think deeply about math, because there will be more work, more understanding, and more high-level discussion rather than less.

Anthropic 的 Thariq 把 AI 辅助数学和国际象棋历史、Jevons paradox 联系起来。他的观点是，让数学工作更容易并不会降低对数学家的需求，反而可能带来更多工作、更容易理解的成果，以及更多高抽象层次的讨论。

- https://x.com/trq212/status/2083978109376987365
- https://x.com/trq212/status/2083977795290734975

### Amjad Masad
Replit CEO Amjad Masad showed his LLM chess engine playing live, autonomous games on LiChess against humans and bots, with a reported 1253 Elo and three concurrent games running. It is a small but concrete example of agents moving from offline demos into public competitive environments.

Replit CEO Amjad Masad 展示了他的 LLM chess engine 在 LiChess 上自主进行实时对局，对手包括真人和 bot，Elo 约 1253，并且同时运行三盘棋。这是一个小但很具体的例子：agent 正在从离线 demo 进入公开竞争环境。

- https://x.com/amasad/status/2083926395403821427
- https://x.com/amasad/status/2083936067355635948
- https://x.com/amasad/status/2084017252152856716

### Guillermo Rauch
Vercel CEO Guillermo Rauch described @v as an internal company agent that now participates in daily work across finance, communications, docs, marketing, engineering, analytics, and personalized workflows. The more interesting architecture note is that Vercel had too many separate agents, so @v became both an agent and a router: a front door with sub-agents, skills, memory, and delegation, with occasional purpose-built agents addressed directly.

Vercel CEO Guillermo Rauch 描述了 @v 这个公司内部 agent：它已经参与财务、沟通、文档、营销、工程、业务分析和个人工作流等日常工作。更重要的架构信号是，Vercel 曾经有太多分散的 agent，于是 @v 变成了统一入口和路由器：它有子 agent、技能、记忆和委派能力，必要时再让少数专用 agent 作为独立入口存在。

- https://x.com/rauchg/status/2084042561690456157
- https://x.com/rauchg/status/2084060157085143512
- https://x.com/rauchg/status/2083969120270450911

### Aaron Levie
Box CEO Aaron Levie argued that some of the hardest fields may automate first precisely because they are objectively verifiable. Math, cyber, and code give clearer reward signals during training and scalable tests during execution. By contrast, legal, marketing, sales, finance, and other judgment-heavy domains often have no single right answer, shifting value toward applied AI layers, process redesign, and new ways to test knowledge work over time.

Box CEO Aaron Levie 认为，一些最难的领域可能反而最先被自动化，因为它们更容易客观验证。数学、网络安全和代码能在训练时提供更清晰的 reward signal，也能在运行时规模化测试结果。相反，法律、营销、销售、财务等判断密集型领域常常没有唯一正确答案，因此价值会更多转向应用层、流程重构，以及长期测试知识工作的全新能力。

- https://x.com/levie/status/2083965372747882741

### Ryo Lu
Cursor designer Ryo Lu used Rdio, Mailbox, and Apple as reminders that software once became simpler through visible, tactile patterns. His question for the agent era is what remains visible when we leave the world of apps behind, and how software should feel when the interface is less tied to screens full of controls.

Cursor 设计师 Ryo Lu 用 Rdio、Mailbox 和 Apple 回忆了软件曾经如何通过可见、可触摸的新模式变得更简单。他在 agent 时代提出的问题是：当我们离开传统 app 世界之后，软件还有哪些部分会保持可见？界面不再是满屏控件时，软件应该如何被感知？

- https://x.com/ryolu_/status/2083939454017053179

### Garry Tan
YC CEO Garry Tan framed AI as a growth engine and pushed back against a loss of wonder just as the amount of technological wonder is going parabolic. His market point was old-fashioned but relevant: meritocracy is judged by the territory, not the map, and in startups that still means making something people want.

YC CEO Garry Tan 把 AI 视为增长引擎，并提醒大家：当技术奇迹正在指数增长时，人们的惊奇感反而消失了。他的市场观点很传统但仍然重要：不要把地图误认为领土，在创业和市场里，真正的领土仍然是你有没有做出人们想要的东西。

- https://x.com/garrytan/status/2083957110711386439
- https://x.com/garrytan/status/2083923385193828612
- https://x.com/garrytan/status/2083920039208693996

### Nikunj Kothari
FPV Ventures partner Nikunj Kothari described early and mid-stage venture as "vibes capital," where AI tailwinds, dry powder, and sector fashion can overwhelm fundamentals for another 12-18 months. His warning to founders is practical: in a capital market where funding itself becomes a competitive weapon, understand the volatility before stepping in.

FPV Ventures 合伙人 Nikunj Kothari 把早中期风险投资描述成“vibes capital”：AI 顺风、dry powder 和热门赛道情绪可能在未来 12 到 18 个月继续压过基本面。他给创始人的提醒很实际：当融资本身变成竞争武器时，进入资本市场之前要先理解这种波动。

- https://x.com/nikunj/status/2083873335998333227
- https://x.com/nikunj/status/2083925904598733088

### Peter Steinberger
Peter Steinberger only had a light signal in this window, noting a newer kind of spam. There was not enough technical context in the feed to draw a stronger product takeaway.

Peter Steinberger 在这个窗口里只有一个轻量信号，提到一种较新的 spam 形式。feed 中没有足够技术上下文来总结更强的产品或工程 takeaway。

- https://x.com/steipete/status/2083976289485230449

### Dan Shipper
Every CEO Dan Shipper named a useful emotional pattern around AI: agency rupture. When a model suddenly performs a task that used to require you at every step, the first reaction can feel like identity loss. Over time, people start seeing the human scaffolding around the model, then reconstruct agency so the AI becomes an invisible tool and the human work shifts to quality, taste, and orchestration.

Every CEO Dan Shipper 给 AI 带来的情绪体验起了一个有用的名字：agency rupture。当模型突然完成过去每一步都需要你参与的任务时，人会先感到身份感被抽走。随着经验增加，人会开始看到模型周围的人类脚手架，最后重新建立 agency：AI 变成几乎不可见的工具，而人的工作转向质量、品味和编排。

- https://x.com/danshipper/status/2084038453831020916
- https://x.com/danshipper/status/2084024211539116466
- https://x.com/danshipper/status/2084144207254663417

## Podcast
### Training Data: Building the Automated AGI Lab: Core Automation's Jerry Tworek and Rohan Anil
The takeaway: Core Automation's bet is that the next frontier is not just scaling transformers harder, but building architectures and systems that can learn from real experience, use compute more efficiently, and adapt outside the lab.

核心 takeaway：Core Automation 的赌注不是继续更用力地扩展 transformer，而是寻找能从真实经验中学习、更高效使用 compute、并能在实验室之外适应环境的新架构和系统。

Jerry Tworek argues that transformers should be appreciated before they are replaced. They carried the field through large-scale pretraining, RL, coding systems, and workflow automation, but their weakness is increasingly visible: models are trained in a lab and then deployed into messy real-world distributions. Benchmarks and training tasks can improve while real-world autonomy remains incomplete.

Jerry Tworek 认为，在替代 transformer 之前，必须先真正理解它的贡献。Transformer 带来了大规模 pretraining、RL、coding systems 和 workflow automation，但它的弱点也越来越明显：模型在实验室训练，却被部署到混乱的真实世界分布中。benchmark 和训练任务可以持续提升，但真实世界自主性仍然不完整。

His proposed direction is test-time learning. In-context learning is useful but small and mechanically limited; continuous fine-tuning runs into catastrophic forgetting and poor data efficiency. Core Automation is therefore looking for architectures that can represent richer learning algorithms over much longer horizons, especially for systems that must learn with users, data, tools, and changing environments.

他提出的方向是 test-time learning。In-context learning 有用但规模很小，并受到机械限制；连续 fine-tuning 又会遇到 catastrophic forgetting 和低数据效率。因此 Core Automation 想寻找能在架构层表达更丰富学习算法的模型，尤其是能在更长时间尺度上和用户、数据、工具、变化环境一起学习的系统。

Rohan Anil frames the architecture question as a compute-allocation problem. Transformers spend inference compute one token at a time, and chain-of-thought increases computational depth by generating more tokens. That works, but it is inefficient. He wants architectures that spend computation better across pretraining and RL, fit hardware realities, and make frontier capability cheaper enough to reach far more people.

Rohan Anil 把架构问题定义为 compute allocation 问题。Transformer 在推理时一次生成一个 token，chain-of-thought 通过生成更多 token 来增加 computational depth，这有效但低效。他希望找到能在 pretraining 和 RL 之间更好分配计算、符合硬件现实、并把 frontier capability 变得更便宜的新架构，让更多人真正用得上。

The episode's deeper disagreement with the current market is organizational. The biggest labs are locked into competitive product races around transformer scaling and coding agents, while smaller labs often copy the leaders. Core Automation is trying to occupy the niche of doing large-scale architectural research with an integrated team across research, kernels, production, and systems.

这期节目对当前市场更深的分歧在组织层面。最大的实验室被锁在 transformer scaling 和 coding agent 的短期产品竞争里，小实验室又常常复制领先者路线。Core Automation 想占据的生态位，是用一个整合 research、kernels、production 和 systems 的团队做大规模架构研究。

- https://www.youtube.com/watch?v=2RJiaf0SY8s

## Blog
No new blog posts were included in today's feed.

今天的 feed 没有包含新的 blog 文章。
