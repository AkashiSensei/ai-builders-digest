[English](../../en/weekly/ai-digest-2026-11-09-Mon.md) | [中文](../../zh/weekly/ai-digest-2026-11-09-Mon.md) | [Bilingual](./ai-digest-2026-11-09-Mon.md)

---

# AI Builders Digest

Coverage: 2026-11-02 00:00 to 2026-11-09 00:00 Asia/Shanghai
覆盖范围：2026-11-02 00:00 至 2026-11-09 00:00（Asia/Shanghai）
Known feed coverage gaps (UTC): X/Twitter 2026-11-08T06:25:57.526Z to 2026-11-08T06:36:37.960Z (0.18h).
已知 feed 覆盖缺口（UTC）：X/Twitter 2026-11-08T06:25:57.526Z 至 2026-11-08T06:36:37.960Z（0.18 小时）。

## Reader's Briefing / 导读

The week's clearest shift is organizational. Builders are designing workflows around teams of agents rather than treating AI as a faster individual tool. Aaron Levie describes knowledge workers becoming managers of agent teams whose output no longer scales linearly with hours; Garry Tan reports a roughly 5x jump in issue-fixing throughput after coordinating captains and subthreads. The management problem is becoming concrete: assign work, inspect state, and keep enough independent verification in the loop.

本周最明显的变化发生在组织层面。Builder 们开始围绕 agent 团队设计工作流，而不是把 AI 当成一个更快的个人工具。Aaron Levie 认为知识工作者正在变成 agent 团队的管理者，产出不再随工时线性增长；Garry Tan 在协调多个 captain 和子线程后，把问题修复吞吐量提升了约 5 倍。管理问题正变得具体：分配工作、检查状态，并让独立验证留在流程里。

Coding agents can now produce complete artifacts quickly. Andrej Karpathy one-shotted HackerTube from 43 million Hacker News comments and later built TristanTube in three minutes; Replit cites a one-person, one-week project that previously needed six people for six months. Yet the interesting constraint has moved to quality. Security review, formal proof, evaluation, and domain judgment are now the scarce layers. Thibault Sottiaux expects turbulence before hypersecure software; Guillermo Rauch frames AI as the force that will rewrite slow and vulnerable code.

编程 agent 已经可以快速产出完整成品。Andrej Karpathy 用 Claude 从 4300 万条 Hacker News 评论中整理出 HackerTube，后来又在 3 分钟内做出 TristanTube；Replit 则举出一个原本需要 6 个人做 6 个月、如今 1 个人 1 周完成的项目。但真正的约束已经转向质量。安全审查、形式化证明、评测和领域判断成为稀缺层。Thibault Sottiaux 预计在实现高度安全的软件之前还会经历动荡；Guillermo Rauch 则把 AI 看作重写缓慢、脆弱代码的力量。

Context and state are emerging as the real agent platform. Box is pairing lexical and semantic retrieval over unstructured enterprise content with access controls; Vercel argues that stateful workspaces beat stateless sandbox benchmarks; the creator behind Jev attacks append-only KV-cache state as a global-variable problem. The common point is that a model without the right memory, identity, permissions, and workspace is not an agent that can be trusted with real work.

上下文和状态正在成为真正的 agent 平台。Box 把词法检索和语义检索结合起来处理企业非结构化内容，同时保留访问控制；Vercel 认为有状态工作区比无状态沙箱基准更有意义；Jev 的创作者则批评只追加的 KV cache 状态像全局变量，会让系统越来越脆弱。共同点是：如果模型没有合适的记忆、身份、权限和工作区，它就不是一个可以被信任去处理真实工作的 agent。

The winning product is rarely one model in one chat box. Peter Yang assigns browser use, design, scheduled agents, and writing to different tools; Nikunj Kothari uses several coding apps and pairs Codex with Claude Code; Cat Wu moves from Claude Code to OpenAI Core Products; Boris Cherny's Claude plugins remove repeated sign-ins. Builders are routing tasks across harnesses while trying to preserve control and continuity.

最终胜出的产品很少只是一个聊天框里的一个模型。Peter Yang 把浏览器操作、设计、定时 agent 和写作分给不同工具；Nikunj Kothari 同时使用多个编程应用，并把 Codex 和 Claude Code 搭配起来；Cat Wu 从 Claude Code 转向 OpenAI Core Products；Boris Cherny 介绍的 Claude 插件减少了重复登录。Builder 们正在不同 harness 之间路由任务，同时努力维持控制权和连续性。

AI is also entering domains where trust and ownership are the product. Claude's Personal Finance is read-only and ad-free; Robinhood has 150,000 agentic trading accounts and is sandboxing execution; Fabian Theis describes biology models that steer the next experiment, not just map or predict; Kevin Roose argues for safety certification and a coordination mechanism for frontier speed. The through line is that adoption now depends less on demos than on institutional design.

AI 也在进入以信任和所有权为核心产品的领域。Claude 的 Personal Finance 只读且无广告；Robinhood 已有 15 万个 agentic trading 账户，并在沙箱中执行交易；Fabian Theis 描述的生物模型不仅负责映射和预测，还会指导下一次实验；Kevin Roose 则主张在模型公开发布前进行安全测试和认证，并建立协调机制来放慢前沿速度。贯穿其中的结论是：采用与否越来越不取决于 demo，而取决于制度设计。

## X / Twitter

### Box CEO Aaron Levie

Box CEO Aaron Levie argues that knowledge work is moving from people using AI for incremental speed to people managing teams of agents. He says agents can parallelize work, decoupling output from hours, and estimates that top productivity gains have moved from 30-50% to roughly 5-10x in two years. He also points to the context bottleneck: enterprises are about 90% unstructured data, so Box is combining lexical and semantic retrieval with access controls in a partnership with NVIDIA. Because long-running inference is relatively latency-tolerant, he expects AI factories to be deployable far from users.

Box CEO Aaron Levie 认为，知识工作正在从人使用 AI 获得增量提速，转向人管理 agent 团队。他说 agent 可以并行工作，因此产出不再与工时绑定，并估计顶尖生产力提升已经从 30% 到 50% 上升到约 5 到 10 倍，只用了两年。他还指出上下文瓶颈：企业数据中约 90% 是非结构化的，所以 Box 与 NVIDIA 合作，把词法检索、语义检索和访问控制结合起来。由于长时间运行的推理对延迟相对不敏感，他预计 AI 工厂可以部署在离用户很远的地方。

Sources: [1](https://x.com/levie/status/2117134917847093491) | [2](https://x.com/levie/status/2117505799937577263) | [3](https://x.com/levie/status/2118498574497665316) | [4](https://x.com/levie/status/2118953909524050288)

### SPC General Partner Aditya Agarwal

SPC general partner Aditya Agarwal expects data-center constraints to reshape AI economics. If building capacity gets harder, he argues that existing hyperscalers with available capacity become the obvious winners, while the pace of new model training suffers. He calls this a political constraint on the frontier rather than a demand problem: demand keeps rising, but supply does not.

SPC General Partner Aditya Agarwal 预计数据中心约束会重塑 AI 经济。如果建设容量变得更困难，他认为已有容量的 hyperscaler 会成为明显赢家，而新模型训练的速度会受影响。他把这称为对前沿能力施加的政治约束，而不是需求问题：需求持续上升，但供给没有跟上。

Sources: [1](https://x.com/adityaag/status/2119157297167372646)

### Replit CEO Amjad Masad

Replit CEO Amjad Masad says agents should run in dedicated, organization-controlled environments with only the access each task requires. He points to Replit's custom kernel, which he says avoids 96% of Linux zero-day vulnerabilities, and to an enterprise customer that completed in one week with one person a project that previously needed six people for six months. The pair of claims captures his pitch: faster software creation and tighter isolation have to ship together.

Replit CEO Amjad Masad 认为，agent 应该运行在由组织控制的专用环境中，只获得当前任务所需的访问权限。他提到 Replit 的自定义 kernel 可以避开 96% 的 Linux 零日漏洞，还提到一个企业客户原本需要 6 个人做 6 个月的项目，如今 1 个人 1 周完成。这两点合起来就是他的主张：更快地创建软件和更严格的隔离必须同时实现。

Sources: [1](https://x.com/amasad/status/2117499074496872882) | [2](https://x.com/amasad/status/2118180254300688857) | [3](https://x.com/amasad/status/2118503241390665776)

### Andrej Karpathy

Andrej Karpathy built HackerTube by having Claude filter 43 million Hacker News comments into 6,454 repeatedly recommended videos, then deploy the site end to end. He says the project required only a few manual steps, mostly around credentials, a server, and a domain. Days later he turned another curated list into TristanTube in three minutes, arguing that many projects that once took weeks can now be few-shotted.

Andrej Karpathy 让 Claude 从 4300 万条 Hacker News 评论中筛出 6454 个被反复推荐的视频，然后把 HackerTube 端到端部署上线。他说整个过程只有少数几步需要手动完成，主要是凭证、服务器和域名相关操作。几天后，他又在 3 分钟内把另一份精选清单变成 TristanTube，并认为许多过去要花数周的项目现在可以 few-shot 完成。

Sources: [1](https://x.com/karpathy/status/2116957135661945283) | [2](https://x.com/karpathy/status/2119114537442189652)

### Anthropic's Boris Cherny

Anthropic's Boris Cherny says Claude can now auto-connect to company plugins, removing the need for each teammate to sign in individually. Team and Enterprise admins configure the plugins, and teammates connect automatically the first time they use them. It is a small but revealing product move: enterprise agent adoption depends on making shared identity and access boring.

Anthropic 的 Boris Cherny 表示，Claude 现在可以自动连接公司插件，团队成员不再需要逐个登录。Team 和 Enterprise 管理员配置插件后，成员第一次使用时就会自动连接。这是一个很小但很有代表性的产品动作：企业 agent 的采用取决于身份和访问权限能否变得足够无感。

Sources: [1](https://x.com/bcherny/status/2117693181651542387)

### Cat Wu, Core Products at OpenAI

Cat Wu left Anthropic after two years on Claude Code and joined OpenAI to lead product management for Core Products. Her retrospective tracks the shift from users approving every permission prompt by hand to trusting Claude's judgment for auto-approval on large migrations and new products. At OpenAI she says the goal is agents that support individuals and teams while keeping people in control.

Cat Wu 在 Claude Code 工作两年后离开 Anthropic，加入 OpenAI 负责 Core Products 的产品管理。她的回顾记录了一次转变：早期用户会手动批准每一个权限请求，如今 Claude 的判断可以用于自动批准大型迁移和新产品开发。她说，在 OpenAI 的目标是做出支持个人和团队、同时让用户保持控制的 agent。

Sources: [1](https://x.com/_catwu/status/2117731934340337676) | [2](https://x.com/_catwu/status/2118137612577968402)

### Claude

Claude introduced Personal Finance in beta in the United States on Pro, Max, and Ultra plans. Users connect accounts they choose, and Claude answers money questions from their own balances and transactions. Access is read-only, Claude cannot move or invest money, and the feature has no ads or sponsored recommendations.

Claude 在美国面向 Pro、Max 和 Ultra 套餐推出 Personal Finance beta。用户连接自己选择的账户，Claude 根据用户自己的余额和交易回答问题。该功能只能读取数据，Claude 不能转移或投资资金，也没有广告或赞助推荐。

Sources: [1](https://x.com/claudeai/status/2118403114890137895) | [2](https://x.com/claudeai/status/2118403117779988744)

### Y Combinator President and CEO Garry Tan

Y Combinator President and CEO Garry Tan says agent skills need eval-driven development loops because each new model can make parts of a skill obsolete. He removed his /investigate skill after Opus 5.5 handled the work without it. He also reports that coordinating Capy Captains and subthreads raised his issue-fixing throughput about 5x overnight.

Y Combinator President and CEO Garry Tan 认为，agent skills 需要由 eval 驱动的开发循环，因为每个新模型都可能让一部分 skill 过时。Opus 5.5 能直接完成相关工作后，他删掉了自己的 /investigate skill。他还表示，在协调 Capy Captains 和子线程之后，自己的问题修复吞吐量一夜之间提升了约 5 倍。

Sources: [1](https://x.com/garrytan/status/2117410016730964358) | [2](https://x.com/garrytan/status/2118920030243139596)

### Vercel CEO Guillermo Rauch

Vercel CEO Guillermo Rauch argues that agents need stateful workspaces, not stateless sandboxes, because identity, skills, repositories, and memory travel with the work. He launched Vercel Security Review and reported 6,817 vulnerabilities identified, 580 critical or high, and 1,411 already patched by an agent in the first 24 hours. He also expects generative UI to become the dominant interface for conversational agents in Slack and Teams.

Vercel CEO Guillermo Rauch 认为，agent 需要的是有状态工作区，而不是无状态沙箱，因为身份、skills、代码仓库和记忆都要跟随工作。他推出 Vercel Security Review，并报告首个 24 小时内识别出 6817 个漏洞，其中 580 个为 critical 或 high，已有 1411 个由 agent 修补。他还预计 generative UI 会成为 Slack 和 Teams 中对话式 agent 的主流界面。

Sources: [1](https://x.com/rauchg/status/2117338179535810957) | [2](https://x.com/rauchg/status/2118152230260092940) | [3](https://x.com/rauchg/status/2118856239719608353)

### FPV Ventures Partner Nikunj Kothari

Nikunj Kothari, a partner at FPV Ventures, says he now reaches for ChatGPT Codex, Claude, Bot, and Muse because each is well designed for different work. His favorite underused Claude Code skills are /insights, which he runs on a cron job to improve his setup, and /playground, which visualizes workflows and architecture. He pairs Codex and Claude Code to find dead code, hot paths, and latency improvements.

FPV Ventures 的 partner Nikunj Kothari 说，他现在会同时使用 ChatGPT Codex、Claude、Bot 和 Muse，因为每个工具都针对不同工作做了很好的设计。他最喜欢但仍较少人使用的 Claude Code skills 是 /insights 和 /playground：前者通过 cron job 定期运行，帮他改进自己的配置；后者用来可视化工作流和架构。他还会把 Codex 和 Claude Code 搭配起来找无用代码、热点路径和延迟改进点。

Sources: [1](https://x.com/nikunj/status/2117650163066183769) | [2](https://x.com/nikunj/status/2117773647868018897)

### Peter Yang

Peter Yang argues that model quality is increasingly constrained by the harness. He finds clear category winners for browser use, design, scheduled agents, and writing, but says Gemini's strong editing suggestions were trapped in Antigravity because browser use was not working. He also expects continued demand for apps that let enterprises use models from multiple labs rather than locking into one vendor.

Peter Yang 认为，模型质量越来越受 harness 制约。他在浏览器操作、设计、定时 agent 和写作上都能找到明确的分类赢家，但表示 Gemini 很好的编辑建议被卡在 Antigravity 里，因为浏览器操作不可用。他还预计，允许企业使用多家实验室模型的应用会继续有需求，而不是被单一供应商锁定。

Sources: [1](https://x.com/petergyang/status/2116946320674152810) | [2](https://x.com/petergyang/status/2117333424403042330) | [3](https://x.com/petergyang/status/2118811231545122998)

### Sam Altman

Sam Altman says people should always remain in control of the future. He rejects the idea that humans should be assigned roles that AI systems decide are worth rewarding, and says that constraint should ultimately limit AI progress. The post is a direct statement that control is not a downstream usability feature but a boundary on capability.

Sam Altman 表示，人应该始终掌控未来。他反对由 AI 系统决定哪些人类角色值得奖励、再把人类安排到这些角色里的想法，并认为这一约束最终应该限制 AI 的进展。这条表态很直接：控制权不是事后的可用性功能，而是对能力设定的边界。

Sources: [1](https://x.com/sama/status/2117794005165748448)

### Thariq, formerly of Claude Code at Anthropic

Thariq, formerly of Claude Code at Anthropic, argues that unlimited tokens are not required for strong work and that $200 plans are already powerful. He expects the smartest models to need fewer tokens and less self-verification, describing the trend as the bitter lesson at work. He also likes creator apps that ship built-in MCPs, so agents can assist without forcing power users out of familiar tools.

曾在 Anthropic 参与 Claude Code 的 Thariq 认为，做出好工作并不需要无限 tokens，200 美元的套餐已经很强。他预计最聪明的模型会需要更少 tokens，也更少自我验证，并把这一趋势称为 bitter lesson 在起作用。他还喜欢内置 MCP 的创作类应用，这样 agent 可以参与工作，同时不把高级用户赶出熟悉的工具。

Sources: [1](https://x.com/trq212/status/2117305792923889731) | [2](https://x.com/trq212/status/2117670540148347273) | [3](https://x.com/trq212/status/2118822238262853904)

### OpenAI's Thibault Sottiaux

OpenAI's Thibault Sottiaux says humans were not very good at writing secure infrastructure and expects turbulence before hypersecure systems become normal. He argues that formal proofs over tens of millions of lines of code are no longer ridiculous and should be considered when designing new systems. The point turns security from a cleanup task into an architectural requirement for agent-built software.

OpenAI 的 Thibault Sottiaux 说，人类并不擅长编写安全的基础设施，并预计在高度安全的系统成为常态之前还会经历动荡。他认为对数千万行代码进行形式化证明不再荒谬，设计新系统时就应该考虑这一点。这个观点把安全从清理任务变成了 agent 构建软件时的架构要求。

Sources: [1](https://x.com/thsottiaux/status/2118569235953893573) | [2](https://x.com/thsottiaux/status/2118569441860723112)

### Builder Zara Zhang

Builder Zara Zhang argues that a personal website is the new resume because it shows taste, thinking, and actual work rather than a list of titles. She also rejects the idea that startup outcomes are predestined, saying the same idea can be executed in a thousand ways and brilliant execution can create a market where none appeared to exist. Her point is that agency is visible in the artifact.

Builder Zara Zhang 认为，个人网站就是新的简历，因为它展示品味、思考过程和实际作品，而不只是职位列表。她也反对把创业结果视为命中注定：同一个想法可以有 1000 种执行方式，出色的执行可以在原本看似没有市场的地方创造市场。她的重点是，主动性会体现在作品里。

Sources: [1](https://x.com/zarazhangrui/status/2118939184841052386) | [2](https://x.com/zarazhangrui/status/2118968862557475298)

### Swyx, AI Engineer and Latent Space

Swyx, who is affiliated with AI Engineer and Latent Space, highlighted a model that is 3x faster and 5x cheaper while matching evals on FrontierCode 2, calling it distillation without tradeoffs. He also pointed to Anthropic's dark-factory approach of making about 30,000 code changes a day and the need for independent verification in every loop. Both notes lead to the same production lesson: cheaper intelligence only helps when the verification layer scales with it.

同时参与 AI Engineer 和 Latent Space 的 Swyx 提到一个模型在 FrontierCode 2 上保持相同 eval 成绩的同时快了 3 倍、便宜了 5 倍，并称这是没有取舍的 distillation。他还提到 Anthropic 的 dark-factory 做法每天产生约 3 万次代码变更，以及每个循环都需要独立验证。两点指向同一个生产经验：更便宜的智能只有在验证层同步扩展时才有用。

Sources: [1](https://x.com/swyx/status/2117558305891746212) | [2](https://x.com/swyx/status/2118208851506036989)

## Podcast

### The Inside Story of the 50 Who Built Modern AI With Kevin Roose

The takeaway: the AI transition is neither fated nor safe by default; governance and individual choices remain upstream of outcomes. Kevin Roose, former New York Times writer and co-host of Machine Gods with Casey Newton, interviewed roughly 50 central builders and 150 people around them. His verdict is cautious: "I don't think we're doomed. But we have a lot to do." He argues for standard safety testing and certification before public deployment, then a coordination mechanism for slowing the frontier. The practitioner detail is useful too: he wrote the book himself but used a "council of Claudes" to review chapters, NotebookLM to organize research, local models for transcription, and multiple agent tools. He treats the stack as plural by design, using different tools for research, transcription, review, and the occasional side project. His current stack is messy enough that "agents... [are] correcting my other agents," a concrete reminder that orchestration and verification are now part of the work.

核心结论：AI 转型既不是命中注定，也不会默认安全；治理和个人选择仍然决定结果。Kevin Roose 曾是 New York Times 的作者，也是与 Casey Newton 共同主持 Machine Gods 的主播。他采访了约 50 位核心建设者，以及围绕他们的 150 人。他的判断很谨慎：“I don't think we're doomed. But we have a lot to do.” 他主张在模型公开发布前进行标准安全测试和认证，再建立协调机制来放慢前沿速度。书中的实践细节也很有用：书是他自己写的，但他用“council of Claudes”审阅章节，用 NotebookLM 整理研究，用本地模型做转写，还同时使用多个 agent 工具。他有意识地让工具栈保持多元，用不同工具完成研究、转写、审阅，偶尔也处理周末的 side project。他现在的工具栈已经复杂到“agents... [are] correcting my other agents”，这提醒我们，编排和验证已经成为工作本身。

Source: [AI & I by Every](https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL)

### Tokenization, Agentic Trading, Harmonic: Robinhood's Mission to Expand Ownership with CEO Vlad Tenev

The takeaway: agentic trading has crossed from demo to product-market fit, and the next fight is over who controls the harness and the account. Vlad Tenev, founder and CEO of Robinhood, says more than 150,000 customers have opened agentic trading accounts, with roughly 30 million tool calls per day. Robinhood Agents puts the harness and UI inside a segregated account; users can approve trades by default or turn approvals off, and can run recurring portfolio strategies. He also describes prediction markets as an evolution of news, where odds show what is likely to happen next, while tokenization extends ownership globally. Tenev frames the company around ownership, arguing that "a society without broad ownership is inherently very unstable." That mission now extends to prediction markets, tokenized private assets, and Harmonic's attempt to build a more distributed math superintelligence. The useful lesson is that agent products in finance need product-market fit and hard boundaries at the same time: separate balances, explicit permissions, and an execution sandbox.

核心结论：agentic trading 已经从 demo 进入 product-market fit 阶段，接下来的竞争是谁控制 harness 和账户。Robinhood 创始人兼 CEO Vlad Tenev 说，已有超过 15 万客户开通 agentic trading 账户，每天约有 3000 万次 tool calls。Robinhood Agents 把 harness 和 UI 放进隔离账户，用户默认需要批准交易，也可以关闭审批并运行定期组合策略。他还把 prediction markets 描述为新闻的演化，赔率可以显示接下来可能发生什么，而 tokenization 则把所有权扩展到全球。Tenev 用所有权来定义公司，认为“a society without broad ownership is inherently very unstable”。这一使命现在延伸到 prediction markets、tokenized private assets，以及 Harmonic 试图构建的更分布式数学超级智能。可借鉴的经验是，金融 agent 产品必须同时获得 product-market fit 和硬边界：独立余额、明确权限，以及执行沙箱。

Source: [No Priors](https://www.youtube.com/@NoPriorsPodcast)

### Ep 97: Jev Creator on Decision Models, Benchmark Fatigue &amp; Why the Labs Missed It

The takeaway: models should be judged by the decisions they can safely own, not by benchmark noise. The creator behind Jev argues that most future LLM calls will be machine-to-machine rather than for human consumption, so interfaces, state, and type systems need to be redesigned around software. They criticize the dominant append-only KV-cache pattern as a global-variable-like state that grows brittle and makes routing or switching models harder. Jev's bet is a decision-model stack that can try a cheap model first, escalate to a larger one, and preserve correctness through deterministic software and verification. They also call out benchmark fatigue: "people have already gotten, like, extreme fatigue of, like, the benchmarks and not actually useful stuff way faster than I would have thought." The practical test is simple: what stakes can you trust an agent with, and can you get value without the downside? Coding and math are early because errors are cheap or verifiable; most business workflows are not.

核心结论：判断模型应该看它能安全承担哪些决策，而不是看 benchmark 噪音。Jev 的创作者认为，未来大多数 LLM 调用会是机器对机器，而不是供人消费，所以界面、状态和类型系统都需要围绕软件重新设计。他批评主流的只追加 KV cache 模式像全局变量一样不断膨胀，越来越脆弱，也让路由和切换模型更困难。Jev 押注的是 decision model 栈：先用便宜模型尝试，再升级到更大模型，并通过确定性软件和验证保证正确性。他还指出 benchmark 疲劳：“people have already gotten, like, extreme fatigue of, like, the benchmarks and not actually useful stuff way faster than I would have thought.” 实际测试很简单：哪些风险级别的决策可以交给 agent，能否在不承担下行风险的情况下获得价值。编程和数学走得最前，因为错误便宜或可验证；大多数业务流程并非如此。

Source: [Unsupervised Learning](https://www.youtube.com/@RedpointAI)

**Also published / 其他已发布**

- [Controlling Biology - Fabian Theis, Helmholtz Munich](https://www.youtube.com/@LatentSpacePod)

## Blog

The validated weekly feed contained no qualifying blog posts.

经验证的本周 feed 中没有符合条件的博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
