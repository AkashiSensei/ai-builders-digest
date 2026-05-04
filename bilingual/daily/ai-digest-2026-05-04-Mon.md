[English](../../en/daily/ai-digest-2026-05-04-Mon.md) | [中文](../../zh/daily/ai-digest-2026-05-04-Mon.md) | [Bilingual](./ai-digest-2026-05-04-Mon.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

Context is becoming the real agent bottleneck. Greg Brockman argues that models are getting strong enough that the scarce resource is increasingly human attention and the context needed for agents to act well.
Context 正在成为 agent 的真正瓶颈。Greg Brockman 认为，模型能力继续上升后，稀缺资源越来越不是单点智能，而是人的注意力以及 agent 执行任务所需的上下文。

Agent infrastructure is moving from clever loops to durable systems. Anthropic's Managed Agents post treats sessions, harnesses, and sandboxes as separate interfaces so long-running agents can recover, scale, and stay secure.
Agent 基础设施正在从巧妙循环走向耐久系统。Anthropic 的 Managed Agents 文章把 session、harness 和 sandbox 拆成独立接口，让长任务 agent 可以恢复、扩展并保持更清晰的安全边界。

Builders are normalizing agents as daily operating surfaces. Peter Yang, Dan Shipper, Peter Steinberger, and Amjad Masad all point toward workflows where agents organize files, run beside apps, coordinate in parallel, and ship through leaner plugin surfaces.
Builders 正在把 agent 当成日常工作界面。Peter Yang、Dan Shipper、Peter Steinberger 和 Amjad Masad 的动态共同指向一种新工作流：agent 整理文件、常驻在应用旁、多路并行协作，并通过更轻量的插件表面交付。

The startup lesson is to lean into model progress without mistaking it for the whole product. Brockman says startups should invest in context and harnesses, while Aaron Levie argues AI expands the useful software surface by making more engineering work economically viable.
创业公司的关键是拥抱模型进步，但不要把模型当成全部产品。Brockman 建议团队投资 context 和 harness；Aaron Levie 则认为 AI 会让更多软件项目在经济上变得可行，从而扩大软件需求。

AI market pressure is showing up in business models and capital allocation. Swyx's Vibe-kanban note and Nikunj Kothari's venture critique both suggest that token economics, enterprise selling, and upside discipline matter as much as demos.
AI 市场压力正在反映到商业模式和资本配置上。Swyx 对 Vibe-kanban 的记录，以及 Nikunj Kothari 对基金下行保护心态的批评，都说明 token 经济、企业销售和上行空间纪律与 demo 同样重要。

## X / Twitter

**Swyx**
Swyx pointed to Vibe-kanban shutting down live onstage at AIE Europe despite having 30,000 MAU and remaining open source. The sharp lesson was business-model fit: the team said companies making money were either selling to enterprise or reselling tokens, and Vibe-kanban was doing neither.

**Swyx**
Swyx 记录了 Vibe-kanban 在 AIE Europe 现场宣布关闭的瞬间，虽然它仍有 30,000 MAU，并且会继续作为开源项目存在。最尖锐的教训是商业模式匹配：团队说，真正赚钱的公司要么卖给企业，要么转售 tokens，而 Vibe-kanban 两者都不是。

https://x.com/swyx/status/2050753293601935777

https://x.com/swyx/status/2050753293601935777

**Peter Yang**
Peter Yang is using Codex and Claude Code as local operations assistants, giving them access to his computer and Google Workspace CLI to inspect boot apps, downloads, and Drive organization before asking for a cleanup plan. His useful pattern is explicit: ask for a plan first, then review before letting agents touch personal or work files.

**Peter Yang**
Peter Yang 正在把 Codex 和 Claude Code 当成本地运维助手使用，让它们访问电脑和 Google Workspace CLI，先检查开机启动项、下载目录和 Google Drive 组织方式，再给出清理计划。他的实用模式很明确：先让 agent 给计划，人工审阅后再允许它处理个人或工作文件。

https://x.com/petergyang/status/2050623358488997917
https://x.com/petergyang/status/2050594674394751073
https://x.com/petergyang/status/2050588775609451006

https://x.com/petergyang/status/2050623358488997917
https://x.com/petergyang/status/2050594674394751073
https://x.com/petergyang/status/2050588775609451006

**Amjad Masad (CEO, Replit)**
Amjad Masad reacted to a parallel-agent workflow with "10 project 10 parallel agents each," which captures where Replit-style creation is heading: many small autonomous workers operating across projects instead of one chat thread at a time. His other posts were light reactions, but the substantive signal is that multi-agent coordination is becoming a normal builder primitive.

**Amjad Masad (CEO, Replit)**
Amjad Masad 转发并评论了一个并行 agent 工作流：“10 project 10 parallel agents each”。这句话概括了 Replit 式创造工具的方向：不是一次只跑一个聊天线程，而是在多个项目里让许多小型自主 worker 同时工作。其他帖子偏轻量，但核心信号是多 agent 协调正在变成常规 builder 原语。

https://x.com/amasad/status/2050801714656424140
https://x.com/amasad/status/2050793150713864678
https://x.com/amasad/status/2050691458920005737

https://x.com/amasad/status/2050801714656424140
https://x.com/amasad/status/2050793150713864678
https://x.com/amasad/status/2050691458920005737

**Aaron Levie (CEO, Box)**
Aaron Levie pushed back on the idea that AI simply replaces software engineers. His thought experiment: a life sciences company that previously could not afford enough software work may now automate labs, process data, and build more internal tools because AI lowers the fixed cost of each project. The result is more software demand, not less, especially in sectors that were engineering-constrained.

**Aaron Levie (CEO, Box)**
Aaron Levie 反驳了“AI 会直接替代软件工程师”的说法。他的思想实验是：一家生命科学公司过去因为雇不起足够多工程师，只能放弃很多实验室自动化、数据处理和内部软件项目；现在 AI 降低了每个项目的固定成本，反而会让更多软件项目变得可行。结论不是软件需求减少，而是很多原本工程资源受限的行业会产生更多软件需求。

https://x.com/levie/status/2050684160151617603

https://x.com/levie/status/2050684160151617603

**Garry Tan (President & CEO, Y Combinator)**
Garry Tan's AI-adjacent note was that OpenClaw with a book-mirror skill pack can act like an infinite personal Blinkist, a compact example of agents turning long-form personal knowledge into reusable summaries. His other substantive post focused on Oakland tax and governance rather than AI product building.

**Garry Tan (President & CEO, Y Combinator)**
Garry Tan 的 AI 相关信号是，带 book-mirror skill pack 的 OpenClaw 可以像无限个人版 Blinkist 一样，把长内容转成可复用摘要。这是 agent 把个人知识处理流程产品化的一个小例子。他另一条实质内容主要讨论 Oakland 税收和治理，不属于 AI 产品建设。

https://x.com/garrytan/status/2050775806574751816
https://x.com/garrytan/status/2050763012894834952

https://x.com/garrytan/status/2050775806574751816
https://x.com/garrytan/status/2050763012894834952

**Zara Zhang**
Zara Zhang posted a short prompt, "How are you dealing with this?", linked to a larger discussion. The feed slice does not include the quoted context, so there is not enough source material to infer her position beyond flagging the issue for builders.

**Zara Zhang**
Zara Zhang 发了一句简短提问：“How are you dealing with this?” 并链接到一段更大的讨论。当前 feed 片段没有包含被引用内容，因此无法在不推断的情况下总结她的具体立场，只能确认她把这个问题抛给了 builders。

https://x.com/zarazhangrui/status/2050660712620630402

https://x.com/zarazhangrui/status/2050660712620630402

**Nikunj Kothari**
Nikunj Kothari criticized venture funds that optimize for capped downside rather than uncapped upside. His concern is that some investors justify deals because a large token factory might acquire the company, which may protect capital but is unlikely to return a 5-10x fund. It is a reminder that AI capital allocation can drift toward AUM-maxing and acquisition optionality instead of real power-law outcomes.

**Nikunj Kothari**
Nikunj Kothari 批评了一类更重视“锁住下行”而不是“放大上行”的基金心态。他担心，有些投资人做交易的真实理由是“大 token factory 至少会收购它们”，这也许能保护本金，却很难带来 5-10x 基金回报。这提醒 AI 投资可能会滑向 AUM 最大化和并购期权，而不是押注真正的幂律结果。

https://x.com/nikunj/status/2050779734116856137
https://x.com/nikunj/status/2050593851459747957

https://x.com/nikunj/status/2050779734116856137
https://x.com/nikunj/status/2050593851459747957

**Peter Steinberger**
Peter Steinberger shipped Crabbox 0.3.0 with remote Linux runs for dirty worktrees, GitHub browser login, Blacksmith Testbox wrapping, live run replay, durable run events, AWS image creation, and Cloudflare Access. He also noted that plugin packaging got leaner after moving almost everything into extensions, which points to a practical agent-tooling lesson: plugin systems are hard, but thinner packages make daily use less painful.

**Peter Steinberger**
Peter Steinberger 发布了 Crabbox 0.3.0，支持 dirty worktree 的远程 Linux 运行、GitHub 浏览器登录、Blacksmith Testbox 包装、实时运行回放、durable run events、AWS image create 和 Cloudflare Access。他还提到，插件包在把几乎所有东西移到 extensions 后变得更轻量。这里的实用教训是：插件系统很难，但更薄的 package 会让日常使用更顺。

https://x.com/steipete/status/2050735979477008412
https://x.com/steipete/status/2050676702242644465
https://x.com/steipete/status/2050490163810230579

https://x.com/steipete/status/2050735979477008412
https://x.com/steipete/status/2050676702242644465
https://x.com/steipete/status/2050490163810230579

**Dan Shipper (CEO, Every)**
Dan Shipper argued that a common work pattern for the next decade is an agent running continuously beside the application that both the human and the agent use. He also pointed people to Proof as a Codex-native writing app, making the product thesis concrete: the interface is not just chat, but a shared work surface where the agent and user operate together.

**Dan Shipper (CEO, Every)**
Dan Shipper 认为，未来十年的主流工作方式可能是：左边有持续运行的 agent，右边是人和 agent 共同使用的应用。他还推荐 Proof 作为 Codex-native 写作应用，把这个产品观点具体化：界面不只是 chat，而是人和 agent 一起操作的共享工作面。

https://x.com/danshipper/status/2050608311888941301
https://x.com/danshipper/status/2050595829954891808
https://x.com/danshipper/status/2050583747041640608

https://x.com/danshipper/status/2050608311888941301
https://x.com/danshipper/status/2050595829954891808
https://x.com/danshipper/status/2050583747041640608

**Aditya Agarwal (General Partner, South Park Commons)**
Aditya Agarwal said stepping outside consoles and terminals reveals how much hard tech is being built in America. It is not narrowly about AI, but it is a useful reminder for AI builders that the frontier is also physical: robotics, space, manufacturing, and infrastructure are becoming more programmable.

**Aditya Agarwal (General Partner, South Park Commons)**
Aditya Agarwal 说，如果走出 console 和 terminal，就会看到美国正在建设大量 hard tech。这不是狭义 AI 内容，但对 AI builders 有提醒意义：前沿也在物理世界里，robotics、space、manufacturing 和 infrastructure 都正在变得更可编程。

https://x.com/adityaag/status/2050660894234059050

https://x.com/adityaag/status/2050660894234059050

**Sam Altman (CEO, OpenAI)**
Sam Altman said he keeps wanting models to be cheaper and faster more than smarter, but that raw intelligence still appears to matter most. He also called out GPT-5.5 xhigh in fast mode as "really good," suggesting that the product bar is still being pulled upward by capability even when latency and cost are top of mind.

**Sam Altman (CEO, OpenAI)**
Sam Altman 说，他一直以为自己更想要更便宜、更快的模型，而不是更聪明的模型，但现在看起来，单纯变得更聪明仍然最重要。他还称 GPT-5.5 xhigh fast mode “really good”，说明即使 latency 和 cost 很重要，产品上限仍在被能力本身继续拉高。

https://x.com/sama/status/2050671161915371998
https://x.com/sama/status/2050661006230344083
https://x.com/sama/status/2050658558174437701

https://x.com/sama/status/2050671161915371998
https://x.com/sama/status/2050661006230344083
https://x.com/sama/status/2050658558174437701

## Podcast

**Training Data - "OpenAI's Greg Brockman: Why Human Attention Is the New Bottleneck"**
The Takeaway: OpenAI cofounder and president Greg Brockman says the next bottleneck is not only compute or model intelligence, but whether humans can give agents enough context and organizational permission to use that intelligence well.

**Training Data - "OpenAI's Greg Brockman: Why Human Attention Is the New Bottleneck"**
核心 takeaway：OpenAI cofounder and president Greg Brockman 认为，下一个瓶颈不只是 compute 或模型智能，而是人类能否给 agent 足够的 context 和组织权限，让这些智能真正发挥作用。

Brockman describes OpenAI's business bluntly: buy, rent, and build compute, then resell intelligence at a margin. Demand still outruns supply; when ChatGPT launched, his instinct was to buy "all of it," because no compute ramp would keep up. He argues scaling laws still show no wall, even though real progress also comes from constant algorithmic and data-formatting improvements.

Brockman 对 OpenAI 商业模式的描述很直接：买、租、建 compute，然后以一定 margin 转售 intelligence。需求仍然超过供给；ChatGPT 刚发布时，他的直觉就是买下“all of it”，因为无论 compute 扩张多快都追不上需求。他认为 scaling laws 仍然没有撞墙，尽管真正的进展也来自算法、架构和数据格式上的持续改进。

The most practical advice for startups is to lean in now. Coding agents have moved from writing a minority of code to handling most of the work when the setup is right, and Brockman says the same shift is coming for all computer work. The one-time investment is context: agents need access to meetings, files, workflows, and enough business background to solve the real problem. He also warns that production agents need governance, provenance, security primitives, and human accountability, because a proactive model can do something technically reasonable but socially wrong, like escalating a Slack request too quickly.

对创业公司最实用的建议是现在就 lean in。Coding agents 已经从只能写一小部分代码，走向在 setup 正确时承担大部分工作；Brockman 认为同样的变化会扩展到所有电脑工作。一次性的关键投入是 context：agent 需要接入会议、文件、workflow 和足够的业务背景，才可能解决真实问题。他也提醒，production agents 需要 governance、provenance、security primitives 和 human accountability，因为一个主动模型可能做出技术上合理但社交上错误的动作，比如过快升级 Slack 求助。

https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

## Blog

**Anthropic Engineering - "Scaling Managed Agents: Decoupling the brain from the hands"**
Anthropic Engineering explains the architecture behind Claude Managed Agents, a hosted Claude Platform service for long-horizon agents. The core idea is to decouple the "brain" from the "hands": keep the harness and Claude separate from sandboxes, tools, and the durable session log. That lets each part fail, recover, scale, or be replaced independently.

**Anthropic Engineering - "Scaling Managed Agents: Decoupling the brain from the hands"**
Anthropic Engineering 解释了 Claude Managed Agents 的架构，这是一项面向长周期 agent 的 Claude Platform 托管服务。核心思想是把“brain”和“hands”解耦：让 harness 和 Claude 与 sandbox、tools、durable session log 分离。这样每个部分都可以独立失败、恢复、扩展或替换。

The post is especially useful because it treats agent harnesses as temporary assumptions. A workaround that helped Claude Sonnet 4.5 with context anxiety became dead weight for Claude Opus 4.5, so Anthropic designed interfaces meant to outlast any specific harness. Sessions become durable event logs, sandboxes become replaceable execution environments, and credentials stay outside generated-code sandboxes. The practical payoff is lower time-to-first-token when no container is needed immediately, better recovery after crashes, and a cleaner security boundary for customer environments and MCP tools.

这篇文章最有价值的地方，是把 agent harness 当成会过期的临时假设。曾经帮助 Claude Sonnet 4.5 缓解 context anxiety 的 workaround，到 Claude Opus 4.5 上已经变成 dead weight，所以 Anthropic 设计了能比任何具体 harness 活得更久的接口。Session 是 durable event log，sandbox 是可替换执行环境，credentials 不进入 generated-code sandbox。实际收益包括：不需要立即启动 container 时 time-to-first-token 更低，crash 后更容易恢复，并且客户环境和 MCP tools 有更清晰的安全边界。

https://www.anthropic.com/engineering/managed-agents

https://www.anthropic.com/engineering/managed-agents

---

*Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders*
