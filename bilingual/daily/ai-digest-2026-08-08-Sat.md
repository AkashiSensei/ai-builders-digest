[English](../../en/daily/ai-digest-2026-08-08-Sat.md) | [中文](../../zh/daily/ai-digest-2026-08-08-Sat.md) | [Bilingual](./ai-digest-2026-08-08-Sat.md)

---

# AI Builders Digest

## Reader's Briefing / 导读
Long-horizon agents are moving from demos into operational design. Basis cofounder Mitch Troyanovsky frames agent reliability less as prompt magic and more as organizational design: context, behavior specs, ontologies, verification, and runtime supervision for non-deterministic workers.
长周期 agents 正在从 demo 走向真正的运营设计。Basis 联合创始人 Mitch Troyanovsky 把 agent 可靠性看成组织设计问题，而不是 prompt 魔法：关键在于 context、behavior specs、ontology、verification，以及对非确定性工作者的运行时监督。

Consumer AI is becoming a distribution and trust problem. Peter Yang argues ChatGPT and Gemini already have the user bases, but the unlock is getting people to connect real apps and understand that agents can now do work, not just answer questions.
Consumer AI 正在变成分发与信任问题。Peter Yang 认为 ChatGPT 和 Gemini 已经拥有足够大的用户基础，真正的突破在于让普通用户愿意连接真实 app，并理解 agent 现在能做事，而不只是回答问题。

AI coding is forcing a rethink of what no-code meant. Amjad Masad says the way to make software accessible was never richer UI builders, but solving code itself; Guillermo Rauch adds that agent-era devtools need open source foundations and universal extensibility.
AI coding 正在重新定义 no-code 的含义。Amjad Masad 说，让软件开发大众化的路径从来不是更复杂的 UI builder，而是解决 code 本身；Guillermo Rauch 则强调 agent 时代的 devtools 必须开源且可被统一扩展。

Enterprise systems of record may get more important, not less, as agents spread. Aaron Levie argues that when agents generate more code, process more data, and make decisions across workflows, governance, compliance, guardrails, and safe data access become core infrastructure.
随着 agents 普及，企业 systems of record 可能更重要，而不是更边缘。Aaron Levie 认为，当 agents 生成更多代码、处理更多数据并跨系统决策时，治理、合规、guardrails 和安全数据访问会成为核心基础设施。

Foundation-model integration is becoming more native on Apple platforms. Anthropic is shipping Claude support for Apple's Foundation Models framework so Swift apps can route simple local tasks on-device and hand complex reasoning, code generation, web search, and data analysis to Claude.
Foundation model 正在更原生地进入 Apple 平台。Anthropic 将为 Apple Foundation Models framework 提供 Claude 支持，让 Swift app 可以把简单本地任务交给端侧模型，把复杂推理、代码生成、web search 和数据分析交给 Claude。

## X / Twitter
### Swyx, builder across smol.ai, AI Engineer, Latent Space, and related AI projects
Swyx pointed to an ai-devblog skill that elicits the user's own reading of a technical story, then traces the source material and reports it faithfully, including visuals. His other posts were lightweight replies or spec jokes, so the substantive signal is the workflow: use agents to preserve research provenance rather than flatten it into generic summary.
https://x.com/swyx/status/2085616830786543667
https://x.com/swyx/status/2085613357080723846
https://x.com/swyx/status/2085570817786880265

### Swyx，横跨 smol.ai、AI Engineer、Latent Space 等 AI 项目的 builder
Swyx 提到一个 ai-devblog skill：它会先引导用户说清楚自己如何理解一篇技术内容，再沿着原始材料追踪并忠实报告，还能生成视觉内容。其他几条更像轻量回复或 spec 玩笑，所以真正有价值的信号是这个 workflow：用 agents 保留研究出处和推理路径，而不是压平成通用摘要。
https://x.com/swyx/status/2085616830786543667
https://x.com/swyx/status/2085613357080723846
https://x.com/swyx/status/2085570817786880265

### OpenAI Codex and ChatGPT builder Thibault Sottiaux
Thibault Sottiaux said free ChatGPT users now have unlimited text chats powered by GPT-5.6 Luna, and described GPT-5.6 Sol inside Codex as capable of taking unusually broad, multi-minute requests and returning completed work. The practical point is that model capability is being packaged as longer task delegation, not just better chat.
https://x.com/thsottiaux/status/2085610231707623750
https://x.com/thsottiaux/status/2085597685948813610
https://x.com/thsottiaux/status/2085610005768945984

### OpenAI Codex 和 ChatGPT builder Thibault Sottiaux
Thibault Sottiaux 表示，ChatGPT 免费用户现在可以使用由 GPT-5.6 Luna 驱动的无限文本聊天；他还说 Codex 中的 GPT-5.6 Sol 能接住非常宽泛、连续说几分钟的任务，并交付完成结果。实际信号是：模型能力正在被包装成长任务委托，而不只是更好的聊天。
https://x.com/thsottiaux/status/2085610231707623750
https://x.com/thsottiaux/status/2085597685948813610
https://x.com/thsottiaux/status/2085610005768945984

### AI educator Peter Yang
Peter Yang argued that consumer AI is ChatGPT and Google's market to lose. His read: ChatGPT has roughly 1B users and must get them to connect favorite apps and use agents for real work, while Gemini may benefit from trust around Gmail, Calendar, Workspace, Chrome, and the shared Google login. He also called out the non-product barriers: ordinary users need both trust and clearer messaging about what AI can now do.
https://x.com/petergyang/status/2085427222836658600
https://x.com/petergyang/status/2085423674073751813
https://x.com/petergyang/status/2085520904398999901

### AI 教育者 Peter Yang
Peter Yang 认为 consumer AI 基本是 ChatGPT 和 Google 的市场，除非它们自己丢掉。他的判断是：ChatGPT 已有约 10 亿用户，接下来必须让这些用户连接常用 app，并用 agents 做真实工作；Gemini 则可能因为 Gmail、Calendar、Workspace、Chrome 和统一 Google 登录带来更高信任。他还指出，障碍不只是产品能力，普通用户还需要信任，也需要更清楚地理解今天的 AI 已经能做什么。
https://x.com/petergyang/status/2085427222836658600
https://x.com/petergyang/status/2085423674073751813
https://x.com/petergyang/status/2085520904398999901

### Meta AI leader Madhu Guru
Madhu Guru shared a practical management pattern: have teams speak through a new idea as if explaining it to a friend, use AI for basic cleanup, and preserve the rough original structure. His point is that the core idea often gets buried when people over-polish docs, while spoken explanation keeps the logic clearer.
https://x.com/realmadhuguru/status/2085390240899043406
https://x.com/realmadhuguru/status/2085534442781868128

### Meta AI 负责人 Madhu Guru
Madhu Guru 分享了一个实用管理方法：让团队像对朋友解释一样先把新想法讲出来，再用 AI 做基础清理，同时保留原始结构和思路。他的观点是，人在过度打磨文档时常常会把核心想法埋掉，而口头表达反而能保留更清晰的逻辑。
https://x.com/realmadhuguru/status/2085390240899043406
https://x.com/realmadhuguru/status/2085534442781868128

### Replit CEO Amjad Masad
Amjad Masad connected today's coding-agent momentum to Replit's earlier bet on code-specific models, saying major labs initially underrated coding compared with NLP use cases before Replit trained its own Replit-code-3b. He also argued that Airtable bookends the rise and fall of no-code: UI alone cannot build arbitrary software, so accessibility ultimately comes from solving code itself.
https://x.com/amasad/status/2085544020424716723
https://x.com/amasad/status/2085451197323034902
https://x.com/amasad/status/2085544577415696405

### Replit CEO Amjad Masad
Amjad Masad 把今天 coding agent 的势头和 Replit 早年押注 code-specific models 联系起来。他说，在 Replit 自己训练 Replit-code-3b 之前，大模型实验室普遍更看重 NLP 用例，而低估了 coding。他还认为 Airtable 像是 no-code 兴衰的一个注脚：单靠 UI 无法构建任意软件，真正让软件开发变得大众化的路径，是解决 code 本身。
https://x.com/amasad/status/2085544020424716723
https://x.com/amasad/status/2085451197323034902
https://x.com/amasad/status/2085544577415696405

### Vercel CEO Guillermo Rauch
Guillermo Rauch said AI coding agents are the most important devtools in the industry's history, which makes the extension layer strategic. His requirement is clear: devtools should be open source and universally extensible, and a shared Plugin standard can let one extension reach CLIs, IDEs, cloud agents, and personal assistants.
https://x.com/rauchg/status/2085403169551790359
https://x.com/rauchg/status/2085422692799570171

### Vercel CEO Guillermo Rauch
Guillermo Rauch 说，AI coding agents 是软件行业历史上最重要的 devtools，因此扩展层会变得非常关键。他的要求很明确：devtools 应该开源，并且能被通用扩展；共享的 Plugin standard 可以让一个扩展同时触达 CLI、IDE、cloud agents 和个人助手。
https://x.com/rauchg/status/2085403169551790359
https://x.com/rauchg/status/2085422692799570171

### Box CEO Aaron Levie
Aaron Levie argued that real-world agent adoption is closer to managing someone through a process than asking a chatbot a question: the user must scope the task, define done, provide data, and often change the workflow itself. He also pushed back on the idea that agents automatically hurt enterprise software categories, arguing that 100x more code, data processing, and cross-system decisions increase the value of governance, security, compliance, guardrails, and systems of record.
https://x.com/levie/status/2085587079405425146
https://x.com/levie/status/2085474309943030032

### Box CEO Aaron Levie
Aaron Levie 认为，真实世界中的 agent 采用更像是在流程中管理一个人，而不是问 chatbot 一个问题：用户必须界定任务范围、定义完成标准、提供数据，并且往往要改造 workflow 本身。他也反驳了“agents 会天然伤害企业软件品类”的看法，认为当 agents 生成 100 倍更多代码、处理大量数据并跨系统决策时，治理、安全、合规、guardrails 和 systems of record 的价值反而会上升。
https://x.com/levie/status/2085587079405425146
https://x.com/levie/status/2085474309943030032

### Y Combinator President and CEO Garry Tan
Garry Tan framed personal AGI as something distinct from a generic chatbot: a system that knows the individual uniquely, persists that understanding over time, and can adapt to the user's future context.
https://x.com/garrytan/status/2085446068461043722

### Y Combinator President and CEO Garry Tan
Garry Tan 把 personal AGI 描述成不同于通用 chatbot 的东西：它应该独特地理解某个个人，长期保留这种理解，并能随着用户未来的 context 变化而适应。
https://x.com/garrytan/status/2085446068461043722

### FirstMark VC and MAD Podcast host Matt Turck
Matt Turck highlighted his conversation with Basis cofounder Mitch Troyanovsky on long-horizon agents, including behavior specs, ontologies, process supervision, and autonomous multi-day tax work. He also noted the depth of Basis's investor group, which includes major AI, startup, and finance names.
https://x.com/mattturck/status/2085402933579964730
https://x.com/mattturck/status/2085402938101379487
https://x.com/mattturck/status/2085419899078295979

### FirstMark VC、MAD Podcast 主持人 Matt Turck
Matt Turck 重点推荐了他与 Basis 联合创始人 Mitch Troyanovsky 关于 long-horizon agents 的对谈，主题包括 behavior specs、ontology、process supervision，以及可持续多天执行的自主税务工作。他还提到 Basis 投资人阵容很深，覆盖 AI、创业和金融领域的重要人物。
https://x.com/mattturck/status/2085402933579964730
https://x.com/mattturck/status/2085402938101379487
https://x.com/mattturck/status/2085419899078295979

### Builder Zara Zhang
Zara Zhang asked whether teams are using Claude Tag or equivalent team agents heavily, and what their top use cases or aha moments have been. The useful signal is that team-level agents are moving from curiosity to workflow evaluation.
https://x.com/zarazhangrui/status/2085371310042169630

### Builder Zara Zhang
Zara Zhang 询问团队是否已经重度使用 Claude Tag 或类似的 team agents，以及最重要的 use cases 和 aha moments 是什么。这个问题本身的信号是：团队级 agents 正在从好奇尝试进入 workflow 评估阶段。
https://x.com/zarazhangrui/status/2085371310042169630

### FPV Ventures partner Nikunj Kothari
Nikunj Kothari shared fundraising advice for August: founders should care deeply about who inside a VC firm receives the intro, whether that person has real leverage, and whether the fund is genuinely interested or only offering polite process. He emphasized that once a founder is assigned in a CRM, they may be stuck with that path, so routing the first conversation matters.
https://x.com/nikunj/status/2085382457457828153
https://x.com/nikunj/status/2085597628121878721

### FPV Ventures partner Nikunj Kothari
Nikunj Kothari 分享了 8 月融资建议：创始人要非常在意 VC firm 内部是谁接到 intro，那个人是否真的有影响力，以及基金是真的感兴趣还是只是礼貌性走流程。他强调，一旦创始人在 CRM 里被分配给某个人，后续路径可能就被锁定，因此第一次对话的路由很重要。
https://x.com/nikunj/status/2085382457457828153
https://x.com/nikunj/status/2085597628121878721

### Every CEO Dan Shipper
Dan Shipper noted Axios coverage of his work at Every. The post is mainly a media mention rather than a new product or technical argument.
https://x.com/danshipper/status/2085420793400316270

### Every CEO Dan Shipper
Dan Shipper 提到 Axios 对 Every 相关工作的报道。这条主要是媒体曝光，而不是新的产品或技术观点。
https://x.com/danshipper/status/2085420793400316270

### SPC General Partner Aditya Agarwal
Aditya Agarwal pointed founders toward SPC and highlighted GoodfireAI as a company born at SPC. The posts are primarily program and portfolio signals rather than a new AI thesis.
https://x.com/adityaag/status/2085364323707150758
https://x.com/adityaag/status/2085315202237546603
https://x.com/adityaag/status/2085364438845022389

### SPC General Partner Aditya Agarwal
Aditya Agarwal 引导创始人关注 SPC，并提到 GoodfireAI 是从 SPC 诞生的公司。这些内容更多是项目和 portfolio 信号，而不是新的 AI thesis。
https://x.com/adityaag/status/2085364323707150758
https://x.com/adityaag/status/2085315202237546603
https://x.com/adityaag/status/2085364438845022389

### Sam Altman
Sam Altman amplified that GPT-5.6 Sol is much better in chat and that free users now have unlimited text chat. The theme matches Thibault Sottiaux's post: capability gains are being paired with broader free-tier access.
https://x.com/sama/status/2085454964814753990

### Sam Altman
Sam Altman 转发强调 GPT-5.6 Sol 在聊天中明显更好，同时免费用户现在拥有无限文本聊天。这和 Thibault Sottiaux 的信息一致：能力提升正在和更广泛的免费访问绑定在一起。
https://x.com/sama/status/2085454964814753990

### Claude by Anthropic
Claude announced an update to Claude Fable 5 biology safeguards that reduced biology-related fallbacks by about 85% in testing. Claude says Fable can now handle a wider range of everyday health and educational questions, while dual-use areas such as virology, toxicology, and molecular design still fall back to Opus 5.
https://x.com/claudeai/status/2085563808773189680

### Anthropic 的 Claude
Claude 宣布更新 Claude Fable 5 的生物安全保护机制，测试中 biology 相关 fallback 减少约 85%。Claude 表示 Fable 现在可以处理更多日常健康和教育问题，但 virology、toxicology、molecular design 等 dual-use 领域仍会 fallback 到 Opus 5。
https://x.com/claudeai/status/2085563808773189680

## Podcast
### The MAD Podcast with Matt Turck: How to Build Long-Horizon AI Agents — Mitch Troyanovsky, Basis
The Takeaway: long-horizon agents are less like chatbots and more like organizations made of non-deterministic workers, so reliability comes from context, behavior specs, verification, and runtime design.

### The MAD Podcast with Matt Turck: How to Build Long-Horizon AI Agents — Mitch Troyanovsky, Basis
核心结论：long-horizon agents 更像由非确定性工作者组成的组织，而不是 chatbot，所以可靠性来自 context、behavior specs、verification 和 runtime design。

Basis cofounder Mitch Troyanovsky describes agents that run for hours or days and can complete complex tax-return workflows end to end. His sharpest point is that passing evals is not enough: if an agent gets the right answer by consulting the wrong source, an accounting firm would not hire it. That is why Basis emphasizes primary-source verification, process checks, and judge-like review signals at runtime.

Basis 联合创始人 Mitch Troyanovsky 描述了可以运行数小时甚至数天，并端到端完成复杂税务申报 workflow 的 agents。他最尖锐的观点是：通过 evals 还不够。如果一个 agent 靠错误来源得出正确答案，会计事务所也不会雇它。因此 Basis 强调 primary-source verification、流程检查，以及在 runtime 中提供类似 judge 的审查信号。

Troyanovsky also argues that agent builders underrate context quality. His memorable line: "The English is more precious because the English affects the performance." In other words, the repo, docs, behavior files, ontologies, and task instructions are not side material; they are runtime training data. Long-horizon work breaks down when the system cannot maintain coherent state, because LLMs have large working memory but no default short-term or long-term memory.

Troyanovsky 还认为，agent builders 普遍低估了 context 质量。他有一句很有代表性的话："The English is more precious"。换句话说，repo、docs、behavior files、ontologies 和任务指令不是旁支材料，而是 runtime training data。Long-horizon 工作之所以会崩，是因为系统无法持续维护 coherent state。LLM 有很大的 working memory，但默认没有 short-term 或 long-term memory。

The practical design pattern is to borrow from how humans coordinate in companies: define the task, scope what done means, build independent verification, and create a world where the agent knows what objects, rules, and tools exist. For accounting, that means source documents, spreadsheets, deterministic checks, expert-like review, and behavior specs that describe how the agent should act across many trajectories.
https://www.youtube.com/@DataDrivenNYC/videos

实际设计模式是借鉴人类公司如何协作：定义任务，明确 done 是什么，建立独立 verification，并创造一个让 agent 知道对象、规则和工具如何存在的世界。对会计场景来说，这意味着源文档、电子表格、确定性检查、专家式审查，以及描述 agent 在多种轨迹中应该如何行动的 behavior specs。
https://www.youtube.com/@DataDrivenNYC/videos

## Blog
### Claude Blog: Building intelligent apps for Apple platforms with Claude in the Foundation Models framework
Anthropic announced Claude support for Apple's Foundation Models framework through a new Swift package. The practical point is model routing inside native Apple apps: use Apple's on-device models for fast local tasks such as summarization or extraction, then hand off to Claude for multi-step reasoning, code generation, web search, and data analysis.

### Claude Blog: Building intelligent apps for Apple platforms with Claude in the Foundation Models framework
Anthropic 宣布通过一个新的 Swift package，为 Apple Foundation Models framework 提供 Claude 支持。重点是 Apple 原生 app 内的模型路由：快速本地任务，比如 summarization 或 extraction，可以使用 Apple 端侧模型；复杂的 multi-step reasoning、code generation、web search 和 data analysis 则交给 Claude。

The integration matters because Apple's framework can return typed Swift values through guided generation, so a developer can pass clean structured inputs into a Claude request rather than raw user text. Anthropic gives examples like journaling apps that generate prompts locally and then ask Claude to find patterns across months of entries, or study apps that define a term locally and ask Claude to explain why it matters in a broader course context.

这个集成的重要性在于，Apple 的 framework 可以通过 guided generation 返回 typed Swift values，所以开发者传给 Claude request 的是干净的结构化输入，而不是原始用户文本。Anthropic 给出的例子包括：journaling app 先在端侧生成 prompt，再让 Claude 从几个月的日记中找模式；study app 先在本地解释术语，再让 Claude 说明它为什么和课程里其他内容有关。

Claude support is described as available tomorrow for iOS 27, iPadOS 27, macOS 27, visionOS 27, and watchOS 27. Developers add the package, sign in with an Anthropic API key, and stream Claude responses, tool calls, and structured outputs back into SwiftUI.
https://claude.com/blog/claude-for-foundation-models

Claude 支持预计明天可用于 iOS 27、iPadOS 27、macOS 27、visionOS 27 和 watchOS 27。开发者添加 package，用 Anthropic API key 登录，然后把 Claude responses、tool calls 和 structured outputs 流式返回到 SwiftUI。
https://claude.com/blog/claude-for-foundation-models
