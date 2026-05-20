[English](../../en/daily/ai-digest-2026-05-21-Thu.md) | [中文](../../zh/daily/ai-digest-2026-05-21-Thu.md) | [Bilingual](./ai-digest-2026-05-21-Thu.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

1. The frontier talent story today is Karpathy joining Anthropic. That turns the Claude ecosystem into an even more visible center of gravity for research, education, and agent infrastructure.
今天最重要的人才信号是 Karpathy 加入 Anthropic。这让 Claude 生态在研究、教育和 Agent 基础设施上的中心引力更明显。

2. Google is pushing AI from model announcements into personal agents, world simulation, and research automation. Gemini Spark, Project Genie, and ERA point to consumer assistance, generative environments, and computational discovery becoming parallel product tracks.
Google 正在把 AI 从模型发布推向个人 Agent、世界模拟和研究自动化。Gemini Spark、Project Genie 和 ERA 分别指向消费级助手、生成式环境和计算发现三条并行产品线。

3. The enterprise AI conversation is moving from "can the model do it?" to "who pays for the tokens, where does execution run, and how do we keep control?" Sam Altman, Aaron Levie, Anthropic, Claude, and Vercel all touched different parts of the capacity, cost, sandbox, and private-network problem.
企业 AI 话题正在从「模型能不能做」转向「谁为 token 付费、执行环境跑在哪里、怎样保持控制」。Sam Altman、Aaron Levie、Anthropic、Claude 和 Vercel 分别触及了容量、成本、沙箱和私有网络问题。

4. Builder workflows are becoming more disciplined. Swyx described an AI SDLC with tests, visual checks, refactors, planning, deployment, and periodic steering; Peter Yang emphasized short roadmaps and building to learn.
Builder 工作流正在变得更有纪律。Swyx 描述了包含测试、视觉检查、重构、规划、部署和周期性 steering 的 AI SDLC；Peter Yang 则强调短周期路线图和 build to learn。

5. AI-native enterprise software is being rebuilt around natural-language automation. Serval's Jake Stauch argues that workflows and databases still matter, but AI should make building and maintaining them easier than doing the work manually.
AI-native 企业软件正在围绕自然语言自动化重建。Serval 的 Jake Stauch 认为 workflow 和 database 仍然重要，但 AI 应该让构建和维护它们比手工执行任务更容易。

## X / Twitter

### Andrej Karpathy

Andrej Karpathy said he has joined Anthropic, calling the next few years at the frontier of LLMs "especially formative." The signal is less about a specific product and more about talent density: Anthropic is adding one of the most visible educators and applied research leaders in the field while Karpathy returns to R&D and keeps education on his longer-term agenda.

Andrej Karpathy 表示自己已加入 Anthropic，并称未来几年会是 LLM 前沿「尤其有塑造力」的阶段。这个信号不只是某个具体产品，而是人才密度：Anthropic 增加了一位最具影响力的 AI 教育者和应用研究者，而 Karpathy 也回到 R&D，同时把教育继续放在长期计划里。

Source: https://x.com/karpathy/status/2056753169888334312

### Swyx

Swyx laid out a practical AI software-development lifecycle: keep roughly 50 tests in place, instruct agents to add more, use browser end-to-end tests with visual checks across device sizes, refactor hot paths for maintainability, add logging and error handling, then let the agent work through slices with periodic deploys and steering. The useful point is that AI coding is starting to look like an operating discipline, not a prompt trick.

Swyx 给出了一个很实际的 AI 软件开发生命周期：保留大约 50 个测试，让 Agent 继续补测试，用 browser e2e 加计算机视觉检查不同设备尺寸上的设计和 UX，重构热路径以提升可维护性，加入日志和错误处理，然后让 Agent 分片推进，并周期性部署、检查和 steering。关键点是：AI coding 正在变成一套操作纪律，而不是单个 prompt 技巧。

He also reacted to Contextual getting "windsurfed" and flagged physical strain from intensive AI coding workflows. The builder lesson is that faster software loops create new bottlenecks in process design, review, and even ergonomics.

他还提到 Contextual 被「windsurfed」，并提醒高强度 AI coding workflow 带来的身体负担。更广义的 builder 教训是：软件循环变快之后，新的瓶颈会出现在流程设计、审查，甚至人体工学上。

Source: https://x.com/swyx/status/2056999228405346812
Source: https://x.com/swyx/status/2056877529991205072
Source: https://x.com/swyx/status/2056790544731484358

### Josh Woodward

Google Labs VP Josh Woodward introduced Gemini Spark, described as a 24/7 personal AI agent for proactively managing tasks under user direction. It is coming first to trusted testers, then as a beta for US Google AI Ultra subscribers. The direction is clear: Google wants Gemini to move from answer surface to persistent personal operator.

Google Labs VP Josh Woodward 发布 Gemini Spark，把它描述为一个 24/7 的个人 AI Agent，可以在用户指令下主动管理任务。它会先面向 trusted testers，本周开始测试，下周作为 beta 提供给美国 Google AI Ultra 订阅者。方向很清楚：Google 想让 Gemini 从回答界面变成持续存在的个人 operator。

Source: https://x.com/joshwoodward/status/2056873495116845485

### Peter Yang

Peter Yang's most useful note from Google I/O was cultural: "build to learn" and iterate three or four times before assuming what will work. He also highlighted a shorter planning cadence, saying the old one-year roadmap has effectively been replaced by 90-to-120-day horizons in fast-moving product teams.

Peter Yang 在 Google I/O 里提炼出的最有用信号是文化层面的：「build to learn」，并在判断什么能起飞之前做三到四轮迭代。他还强调更短的规划节奏：在快速变化的产品团队里，旧的一年路线图已经被 90 到 120 天的视野替代。

He paired that with a personal reflection on not becoming only an influencer. The useful builder signal is that creator distribution is valuable, but the craft still has to be refreshed by building real things.

他也反思自己不想只变成拿着自拍杆的 influencer。可用的 builder 信号是：creator distribution 很有价值，但真正的技艺仍然要通过持续构建来更新。

Source: https://x.com/petergyang/status/2056953057066598805
Source: https://x.com/petergyang/status/2056927645657641378
Source: https://x.com/petergyang/status/2056910185650856446

### Thariq

Thariq pointed readers to a Claude Blog post and kept the tone simple: "the future is bright, lets get to work." Given his Claude Code role, the signal is Anthropic continuing to package agent infrastructure work publicly rather than leaving it as internal platform lore.

Thariq 指向了一篇 Claude Blog，并用很直接的语气说「the future is bright, lets get to work」。考虑到他在 Claude Code 的角色，这个信号是 Anthropic 继续把 Agent 基础设施工作公开产品化，而不是只留在内部平台经验里。

Source: https://x.com/trq212/status/2056843158965858380
Source: https://x.com/trq212/status/2056777186062032964

### Google Labs

Google Labs announced major Project Genie updates: generated worlds can now start from real places through Google Maps Street View grounding, users can save and organize worlds in a library, and creations can be shared externally. Genie is also rolling out globally to eligible Google AI Ultra subscribers. Alongside that, Google Labs pointed to AlphaEvolve and the Empirical Research Agent as a computational discovery engine that generates and evaluates many code variations to find better models and algorithms.

Google Labs 宣布 Project Genie 的一组重要更新：生成世界现在可以通过 Google Maps Street View 从真实地点开始，用户可以在 library 中保存和整理世界，也可以对外分享作品。Genie 也开始向符合条件的全球 Google AI Ultra 订阅者逐步开放。与此同时，Google Labs 还指向 AlphaEvolve 和 Empirical Research Agent，把它们描述为一个计算发现引擎，可以生成并评估大量代码变体，以发现更好的模型和算法。

Source: https://x.com/GoogleLabs/status/2056872996988756228
Source: https://x.com/GoogleLabs/status/2056812957775142985
Source: https://x.com/GoogleLabs/status/2056813720257663354

### Guillermo Rauch

Vercel CEO Guillermo Rauch said Vercel is shipping a CDN pricing model that smooths traffic spikes and viral events, aiming for predictable bills without lower-quality routes or priority bandwidth tiers. He also highlighted Claude Managed Agents working with Vercel Sandbox. The broader developer-infrastructure signal is that agent execution, predictable usage economics, and sandboxed runtime environments are converging.

Vercel CEO Guillermo Rauch 表示 Vercel 正在推出一种 CDN 定价模型，用来平滑流量尖峰和爆款事件，在不牺牲路由质量或引入优先带宽层级的情况下让账单更可预测。他还强调 Claude Managed Agents 与 Vercel Sandbox 的结合。更大的开发者基础设施信号是：Agent 执行、可预测使用成本和沙箱运行环境正在汇合。

Source: https://x.com/rauchg/status/2056802789477740713
Source: https://x.com/rauchg/status/2056735989830471977
Source: https://x.com/rauchg/status/2056734559048536070

### Aaron Levie

Box CEO Aaron Levie said token costs have become one of the hottest enterprise AI topics after a dinner with Fortune 500 CIOs. Teams are experimenting with workload routing, model tiers by user type, team-level spend caps, use-case justification, and unfettered access, but no one seems fully confident in the operating model yet.

Box CEO Aaron Levie 说，在一次与多位 Fortune 500 企业 CIO 的晚餐后，token 成本已经成为企业 AI 中最激烈的话题之一。团队正在尝试按 workload 路由模型、按用户类型提供不同模型层级、设定团队 spend cap、要求按 use case 证明 AI 使用价值，或干脆开放访问，但没人觉得自己已经找到了足够稳定的 operating model。

Levie also shared Box's early evaluation of Gemini 3.5 Flash on complex document tasks. Box saw a 12-point overall jump versus Gemini 3 Flash, including large gains in public sector, healthcare, and life sciences document work. The enterprise message is that capability is improving quickly, but cost governance and model selection are becoming board-level operating questions.

Levie 还分享了 Box 对 Gemini 3.5 Flash 在复杂文档任务上的早期评估。Box 看到它相对 Gemini 3 Flash 总体提升 12 个百分点，在公共部门、医疗和生命科学文档任务上提升尤其明显。企业信息很直接：能力在快速提高，但成本治理和模型选择正在变成运营级问题。

Source: https://x.com/levie/status/2056965292753146019
Source: https://x.com/levie/status/2056804573449474527

### Ryo Lu

Cursor designer Ryo Lu said Composer 2.5 has become his default for planning, building, iteration, and debugging, especially UI work in Cursor's Design Mode. He also showed Jira backlog work being pushed into Cursor. The product signal is that coding assistants are being pulled directly into the planning and issue-management layer, not just the editor.

Cursor 设计师 Ryo Lu 说 Composer 2.5 已经成为他做规划、构建、迭代和调试的默认工具，尤其适合 Cursor Design Mode 里的 UI 工作。他还展示了把 Jira backlog 推进 Cursor 的工作流。产品信号是：coding assistant 正在被拉进规划和 issue 管理层，而不只是编辑器里。

Source: https://x.com/ryolu_/status/2056892527626817935
Source: https://x.com/ryolu_/status/2056878599333102053

### Garry Tan

YC CEO Garry Tan connected "tokenmaxxing" to GBrain and argued that code can be art. His more concrete point was historical: he worked at Microsoft when WinFS failed to make a new file-and-knowledge layer work, and he now sees LLMs making that old ambition plausible through GBrain. The theme is that memory, files, and personal knowledge systems are reappearing with language models as the missing interface.

YC CEO Garry Tan 把「tokenmaxxing」与 GBrain 联系起来，并说代码也可以是艺术。他更具体的点是历史性的：他曾在 Microsoft 见证 WinFS 试图构建新文件和知识层但未能成功，如今他认为 LLM 让这个旧愿景通过 GBrain 变得可行。主题是：记忆、文件和个人知识系统正在以语言模型作为缺失接口重新出现。

Source: https://x.com/garrytan/status/2056976600294650266
Source: https://x.com/garrytan/status/2056967665001082919
Source: https://x.com/garrytan/status/2056931642967798226

### Matt Turck

Matt Turck called Google's Gemini 3.5 Flash release genuinely impressive, especially on multimodal, agentic coding, tool-use, and expert-task benchmarks. His caveat was that benchmarks are still benchmarks and the model is not cheap, but the broader takeaway is that the top labs are now competing across many real-world task surfaces at once.

Matt Turck 称 Google 的 Gemini 3.5 Flash 发布确实令人印象深刻，尤其是在多模态、agentic coding、工具使用和专家任务 benchmark 上。他的保留意见是 benchmark 仍然只是 benchmark，而且模型并不便宜；但更大的结论是，头部实验室正在同时围绕多个真实任务表面竞争。

Source: https://x.com/mattturck/status/2056834038946775343
Source: https://x.com/mattturck/status/2056759042333147467

### Nikunj Kothari

Nikunj Kothari argued that even AI-forward circles have underpriced the move from assistants to coworkers and toward autonomous workers. His reasoning is that labs want long-horizon task data, model harnesses are supporting longer tasks, and models are getting better at recursive self-correction. He calls this the diffusion era of AI: not diffusion models, but the long period where capable models spread through every workflow.

Nikunj Kothari 认为，即使在 Bay Area 的 AI 圈里，也很少有人真正消化了从 assistant 到 coworker、再到 autonomous worker 的转变。他的理由是：实验室需要长周期任务数据，model harness 正在支持越来越长的任务，而模型也越来越能递归纠正自己的错误。他把这称为 AI 的 diffusion era：不是扩散模型，而是能力模型扩散进所有工作流的长期阶段。

Source: https://x.com/nikunj/status/2056865808832397344
Source: https://x.com/nikunj/status/2056755713830171023

### Dan Shipper

Dan Shipper's substantive signal was his reaction to Karpathy joining Anthropic. He did not add implementation detail, but the response captures how much the ecosystem treats major talent moves as product and research signal.

Dan Shipper 今天最实质的信号是对 Karpathy 加入 Anthropic 的反应。他没有提供实现细节，但这个反应本身说明，生态会把重大人才流动视为产品与研究方向信号。

Source: https://x.com/danshipper/status/2056762096352649421
Source: https://x.com/danshipper/status/2056757317907988900
Source: https://x.com/danshipper/status/2056777922757730555

### Aditya Agarwal

Aditya Agarwal pointed toward "AI+Atoms" as a bright frontier. The post was brief, but it fits the day's wider mood: frontier AI is moving beyond chat surfaces into physical-world workflows, research automation, and enterprise operations.

Aditya Agarwal 指向了「AI+Atoms」这个明亮前沿。帖子很短，但契合今天更大的情绪：前沿 AI 正在从聊天界面进入物理世界 workflow、研究自动化和企业运营。

Source: https://x.com/adityaag/status/2056747510736249162

### Sam Altman

Sam Altman said OpenAI is offering $2M in tokens to every startup in the current YC batch and is also offering discounted tokens for one-to-three-year capacity commitments. The strategic signal is blunt: as models improve, customers want capacity certainty, and compute itself is becoming a startup-building resource, not just an API line item.

Sam Altman 表示 OpenAI 会向当前 YC batch 的每家 startup 提供 200 万美元 token 投资，同时也为一到三年的容量承诺提供折扣 token。战略信号很直接：随着模型变强，客户越来越需要容量确定性，而 compute 本身正在成为 startup building resource，不只是 API 成本项。

Source: https://x.com/sama/status/2056933166875857290
Source: https://x.com/sama/status/2056834734915977382
Source: https://x.com/sama/status/2056827105401614656

### Claude

Claude promoted its Problem Solvers series with Cognition CEO Scott Wu, framing Devin as an AI software engineer built on Claude and aimed at making software development 10x faster. Claude also pointed builders to self-hosted sandboxes on the Claude Platform and MCP tunnels. The through-line is clear: Anthropic is turning customer stories and platform primitives into a public narrative for long-running software agents.

Claude 推广了 Problem Solvers 系列，主角是 Cognition CEO Scott Wu，并把 Devin 定位为基于 Claude 构建、目标是让软件开发快 10 倍的 AI 软件工程师。Claude 还指向 Claude Platform 的 self-hosted sandboxes 和 MCP tunnels。贯穿线很清楚：Anthropic 正在把客户故事和平台 primitive 组合成一套长任务软件 Agent 的公开叙事。

Source: https://x.com/claudeai/status/2056805730359931007
Source: https://x.com/claudeai/status/2056805728774402428
Source: https://x.com/claudeai/status/2056645493493575681

## Podcast

### Training Data: Rebuilding IT From the Ground Up for the AI Age: Serval's Jake Stauch

The takeaway: Serval is betting that enterprise automation only works when creating the automation is easier than doing the manual task.

核心结论：Serval 的赌注是，只有当创建自动化比手工执行任务更容易时，企业自动化才真正成立。

Jake Stauch, founder and CEO of Serval, is rebuilding employee support as an AI-native alternative to traditional enterprise service-management systems. His starting point is simple: employees need help at work, and the ideal version of that help is instant, automatic, and not trapped in ticket queues. The old ServiceNow-style abstraction of workflows on top of databases is still right, but the maintenance burden is wrong for a world where business processes change quickly.

Serval 创始人兼 CEO Jake Stauch 正在把员工支持重建为 AI-native 的企业服务管理系统。起点很简单：员工在工作中需要帮助，而理想状态是帮助能即时、自动完成，而不是困在 ticket 队列里。旧的 ServiceNow 式抽象，也就是 workflow 跑在 database 之上，仍然是对的；但在业务流程快速变化的世界里，维护负担是错的。

Stauch's sharpest idea is that automation usually fails because it is more annoying to create than the task it replaces. If resetting a password takes a few clicks, but building the workflow takes weeks, the operator will keep doing it manually. Serval keeps the primitives, workflows and databases, but uses AI to generate workflow code from natural-language descriptions and to keep operational data current from described sources.

Stauch 最尖锐的想法是：自动化经常失败，是因为创建自动化比被替代的任务本身更烦。如果重置密码只要点几下，但构建 workflow 要几周，operator 就会继续手工做。Serval 保留 workflow 和 database 这两个 primitive，但用 AI 从自然语言描述生成 workflow code，并根据描述从数据源中保持运营数据最新。

The memorable line: "you have to make the process of building the automation just as simple." That is the wedge. AI-native IT is not only about a chatbot answering employee questions; it is about collapsing the gap between describing a process and running it safely across permissions, approvals, data, and systems.

最有记忆点的一句是："you have to make the process of building the automation just as simple." 这就是切入口。AI-native IT 不只是用 chatbot 回答员工问题，而是把「描述流程」和「在权限、审批、数据、系统之间安全运行流程」之间的距离压缩掉。

Source: https://www.youtube.com/watch?v=j7ypvRUFY7M

## Blog

### Anthropic Engineering: Scaling Managed Agents: Decoupling the brain from the hands

Anthropic Engineering explained the architecture behind Claude Managed Agents: split the agent into a session, a harness, and a sandbox so each can evolve or fail independently. The core move is to decouple the "brain" from the "hands" and the event log. In the first implementation, everything lived in one container, which made local file edits simple but turned the container into a fragile, hard-to-debug pet.

Anthropic Engineering 解释了 Claude Managed Agents 背后的架构：把 Agent 拆成 session、harness 和 sandbox，让每个部分都能独立演进或失败。核心动作是把「brain」与「hands」以及事件日志解耦。第一版实现把所有东西放在同一个 container 里，这让本地文件编辑很简单，但也把 container 变成了脆弱且难调试的 pet。

The practical implication is that long-running agents need operating-system-like abstractions. Sessions become append-only logs, harnesses become replaceable control loops, and sandboxes become execution environments that can run near customer data or private infrastructure. This lets Anthropic change internal agent implementations without breaking the developer-facing interface.

实际含义是：长任务 Agent 需要类似操作系统的抽象。Session 变成 append-only log，harness 变成可替换控制循环，sandbox 变成可以靠近客户数据或私有基础设施运行的执行环境。这让 Anthropic 可以更换内部 Agent 实现，而不破坏面向开发者的接口。

The article's architectural lesson is compact: "the abstractions outlasted the hardware." Managed Agents is Anthropic's attempt to make that true for agent runtimes too.

文章里的架构教训很简洁："the abstractions outlasted the hardware." Managed Agents 是 Anthropic 试图让这个规律也适用于 Agent runtime。

Source: https://www.anthropic.com/engineering/managed-agents

### Claude Blog: New in Claude Managed Agents: self-hosted sandboxes and MCP tunnels

Claude Managed Agents now support self-hosted sandboxes in public beta and MCP tunnels in research preview. The product change is aimed squarely at enterprises: keep files, packages, repositories, network policies, audit logs, and compute controls inside the customer's perimeter while Anthropic runs the orchestration loop.

Claude Managed Agents 现在支持 public beta 的 self-hosted sandboxes，以及 research preview 的 MCP tunnels。这个产品变化非常面向企业：文件、packages、repositories、网络策略、审计日志和 compute control 都留在客户 perimeter 内，而 Anthropic 负责运行 orchestration loop。

Self-hosted sandboxes can run on customer infrastructure or providers such as Cloudflare, Daytona, Modal, and Vercel. MCP tunnels let agents reach private MCP servers through an outbound gateway, without exposing internal services to the public internet. That means internal databases, APIs, ticketing systems, and knowledge bases can become agent tools while staying behind existing controls.

Self-hosted sandboxes 可以运行在客户自己的基础设施上，也可以运行在 Cloudflare、Daytona、Modal、Vercel 等 provider 上。MCP tunnels 则让 Agent 通过 outbound gateway 访问私有 MCP servers，而不需要把内部服务暴露到公网。也就是说，内部数据库、API、ticketing system 和 knowledge base 可以变成 Agent 工具，同时仍留在既有控制边界内。

The trust line is explicit: "files and repositories don't leave." For builders, this is the enterprise agent checklist becoming productized: private execution, controlled egress, auditability, right-sized compute, and secure access to internal tools.

信任线很明确："files and repositories don't leave." 对 builder 来说，这是 enterprise agent checklist 正在产品化：私有执行、受控 egress、可审计、可配置算力，以及安全访问内部工具。

Source: https://claude.com/blog/claude-managed-agents-updates

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
