[English](../../en/weekly/ai-digest-2026-10-19-Mon.md) | [中文](../../zh/weekly/ai-digest-2026-10-19-Mon.md) | [Bilingual](./ai-digest-2026-10-19-Mon.md)

---

# AI Builders Digest

Coverage: 2026-10-12 00:00 to 2026-10-19 00:00 Asia/Shanghai
覆盖范围：2026-10-12 00:00 至 2026-10-19 00:00（Asia/Shanghai）
Known feed coverage gaps (UTC): X/Twitter 2026-10-14T06:42:17.865Z to 2026-10-14T06:42:36.600Z (0.01h); X/Twitter 2026-10-17T06:37:54.211Z to 2026-10-17T06:38:12.951Z (0.01h); X/Twitter 2026-10-18T06:38:12.951Z to 2026-10-18T06:54:43.642Z (0.28h).
已知 feed 覆盖缺口（UTC）：X/Twitter 2026-10-14T06:42:17.865Z 至 2026-10-14T06:42:36.600Z（0.01 小时）；X/Twitter 2026-10-17T06:37:54.211Z 至 2026-10-17T06:38:12.951Z（0.01 小时）；X/Twitter 2026-10-18T06:38:12.951Z 至 2026-10-18T06:54:43.642Z（0.28 小时）。

## Reader's Briefing / 导读

The week's clearest shift is from conversation to delegation. Builders are no longer describing AI as a better chat box; they are sketching systems that launch many agents, run for long periods, and consume far more tokens than a human-in-the-loop session. Aaron Levie predicts a 100X to 1000X increase in token use as background agents take on parallel work, while Thibault Sottiaux is already tuning Codex's context window and disk footprint for that operating model.

本周最清晰的变化，是从对话转向委托。builders 不再把 AI 描述成一个更好的聊天框，而是在设计能够启动大量 agent、长时间运行，并且消耗远高于人类在环会话的 token 的系统。Aaron Levie 预计，随着后台 agent 承担并行工作，token 使用量会提高 100 倍到 1000 倍；Thibault Sottiaux 已经在为这种运行方式调整 Codex 的上下文窗口和磁盘占用。

The second theme is the gap between benchmark performance and dependable work. Box's enterprise tests show a large jump from Gemini 4 Argon, yet Dan Shipper's senior-engineer test puts the same model far behind rivals. Peter Yang's sources emphasize evidence-driven testing and manual review; Greg Brockman's security argument implies that verification and trust will become bigger markets than generation alone.

第二个主题是 benchmark 表现与可靠工作之间的落差。Box 的企业测试显示 Gemini 4 Argon 有明显跃升，但 Dan Shipper 的资深工程师测试却让同一模型落后于竞争对手。Peter Yang 引用的实践强调证据驱动测试和人工复核；Greg Brockman 的安全论证则意味着，验证与信任会比单纯的生成能力形成更大的市场。

Model pluralism is becoming an architectural choice, not a slogan. Meta's Muse open weights, Google's Gemini 4 Argon, OpenAI's preferred status inside Replit, and Vercel's gateway-first posture all point to portfolios of models rather than loyalty to one vendor. The practical question is how to route work by capability, cost, latency, and control.

多模型正在从口号变成架构选择。Meta 的 Muse 开放权重、Google 的 Gemini 4 Argon、OpenAI 在 Replit 内部成为首选合作伙伴，以及 Vercel 的 gateway-first 路线，都指向按任务组合模型的组合，而不是绑定单一供应商。真正的问题是，如何按能力、成本、延迟和控制权来路由工作。

Adoption remains sharply uneven. Andrej Karpathy's funnel ranges from billions of people with little exposure to roughly 5,000 with access to frontier systems internally. Amjad Masad argues that even a pause in frontier research would leave a decade of diffusion ahead, while Aditya Agarwal sees a company opportunity in narrowing the gap between top labs and everyone else.

采用速度依然极不均衡。Andrej Karpathy 的漏斗从数十亿几乎没有接触过 LLM 的人，一直延伸到约 5,000 名能在内部使用前沿系统的人。Amjad Masad 认为，即使立刻暂停前沿研究，AI 仍需要大约十年才能扩散到经济中；Aditya Agarwal 则看到，缩小顶尖实验室与其他人之间的差距本身就是创业机会。

Research strategies are diverging. David Silver and Lasse Espeholt are betting on autonomous learning from experience rather than human text, Greg Brockman points to mathematics as evidence of new knowledge generation while flagging biology's data bottlenecks, and Diogo Almeida argues that reliable system-one decisions can be more valuable than fluent text. Each path defines progress differently.

研究路线正在分化。David Silver 和 Lasse Espeholt 押注从经验中自主学习，而不是依赖人类文本；Greg Brockman 把数学视为 AI 生成新知识的证据，同时提醒生物领域存在数据瓶颈；Diogo Almeida 认为，可靠的 System 1 决策可能比流畅文本更有价值。每条路线对“进展”的定义都不同。

Finally, generation is becoming cheap while judgment remains scarce. Dan Shipper says editing and oversight are the next capability frontier; Thariq argues that communication is a signal of intelligence; Zara Zhang shows code becoming a storytelling medium. The builders who win may be those who design the right unit of work, evaluation, and human control.

最后，生成正在变便宜，而判断仍然稀缺。Dan Shipper 认为，下一轮能力提升来自编辑与监督；Thariq 认为沟通是智能的信号；Zara Zhang 展示了代码如何成为叙事媒介。赢家可能是那些能设计出正确工作单元、评估方式与人类控制点的 builders。

## X / Twitter

### Aaron Levie, CEO of Box

Levie thinks AI diffusion is far earlier than the chatbot experience suggests. He describes agent swarms as the likely enterprise form factor because compute can be thrown at parallel work in cyber, science, finance, and software, though workflows, data, governance, and security still need major upgrades ([tweet](https://x.com/levie/status/2109467575025578330)). He expects cyber to become one of the largest token consumers as swarms test permutations of attacks and defenses without fatigue ([tweet](https://x.com/levie/status/2109682812811137061)). At Box, Gemini 4 Argon improved its complex-work evaluation by 14 percentage points over Gemini 3.1 Pro, with gains across document-heavy tasks; moving from interactive chat to background agents could drive 100X to 1000X more token use, and he rejects the idea that automating software work shrinks engineering's importance ([tweet](https://x.com/levie/status/2110046686198550539), [tweet](https://x.com/levie/status/2110622982762803449), [tweet](https://x.com/levie/status/2111525362446520466)).

Levie 认为，AI 的扩散程度远低于聊天机器人体验所暗示的水平。他把 agent swarm 视为企业工作流的重要形态，因为可以把算力投入 cyber、科学、金融和软件中的并行任务；不过工作流、数据、治理和安全仍需要大幅升级（[tweet](https://x.com/levie/status/2109467575025578330)）。他预计，随着 swarm 不知疲倦地测试攻击与防御的各种排列组合，cyber 会成为最大的 token 消耗场景之一（[tweet](https://x.com/levie/status/2109682812811137061)）。在 Box，Gemini 4 Argon 在其复杂工作评测中比 Gemini 3.1 Pro 高出 14 个百分点，并在大量文档任务上取得提升；从交互式聊天转向后台 agent，可能带来 100 倍到 1000 倍的 token 使用量增长，他也不认同自动化软件工作会削弱工程重要性的说法（[tweet](https://x.com/levie/status/2110046686198550539)，[tweet](https://x.com/levie/status/2110622982762803449)，[tweet](https://x.com/levie/status/2111525362446520466)）。

### Andrej Karpathy

Karpathy argues that the gap in firsthand understanding of LLM capability is widening into a sharp funnel. He estimates that about 6 billion people have barely touched LLMs, 1 to 2 billion use them casually, roughly 20 million professionals experience frontier models in math and coding, and only about 5,000 people see internal systems capable of week-long agent swarms. The difference is driven by the ambition of the problem, the jaggedness of capability in digital and verifiable domains, and unequal access ([tweet](https://x.com/karpathy/status/2109361546505966046)).

Karpathy 认为，人们对 LLM 能力的切身体验正在扩大成一道陡峭的漏斗。他估算，约 60 亿人几乎没有接触过 LLM，10 亿到 20 亿人只是偶尔使用，约 2,000 万专业人士在数学和编程中体验前沿模型，而只有约 5,000 人能看到内部系统中运行数周的 agent swarm。造成差异的因素包括问题规模、能力在数字化且可验证领域中的参差不齐，以及访问权限的不平等（[tweet](https://x.com/karpathy/status/2109361546505966046)）。

### Aditya Agarwal, General Partner at SPC and Co-Founder of Bevel Health

Agarwal sees a large gap between how frontier-lab employees use AI and how even the top 1% of AI organizations use it, and suspects that gap will persist long enough to support a horizontal acceleration business ([tweet](https://x.com/adityaag/status/2109748501982872003)). At SPC he is responding to rapid technical progress and consensus-heavy venture capital with a $200,000 uncapped bet on a handful of maximalist ideas in markets that lack an obvious funding template ([tweet](https://x.com/adityaag/status/2110422584357478530)). He also points to Goodfire as evidence that interpretability and alignment can be treated as engineering problems ([tweet](https://x.com/adityaag/status/2110779602453066224)).

Agarwal 发现，前沿实验室员工使用 AI 的方式，与即使是顶尖 1% AI 组织使用 AI 的方式之间也存在很大差距；他怀疑这一差距会长期存在，足以支撑一家横向加速型公司（[tweet](https://x.com/adityaag/status/2109748501982872003)）。在 SPC，他把技术高速进步与风险投资过度集中于共识之间的矛盾，转化为一项 20 万美元、不设上限的实验，押注少数最有野心的想法（[tweet](https://x.com/adityaag/status/2110422584357478530)）。他还把 Goodfire 视为可解释性与对齐可以当作工程问题来解决的证据（[tweet](https://x.com/adityaag/status/2110779602453066224)）。

### Amjad Masad, CEO of Replit

Masad argues that frontier research could pause immediately and AI would still need roughly a decade to diffuse through the economy, so Replit is working with solutions partners to accelerate adoption ([tweet](https://x.com/amasad/status/2110128937049452575)). He is also pushing deployment inside customers' own clouds, with data never leaving their environment, for governments, finance, and healthcare ([tweet](https://x.com/amasad/status/2111267314012496121)). After saying OpenAI became Replit's preferred partner for its agent, he clarified that the platform remains model agnostic and users can still choose Anthropic and other models ([tweet](https://x.com/amasad/status/2111494912562888939)).

Masad 认为，即使立刻暂停前沿研究，AI 仍需要大约十年才能扩散到经济中，因此 Replit 正与解决方案伙伴合作加速采用（[tweet](https://x.com/amasad/status/2110128937049452575)）。他也在推动把 Replit 部署到客户自己的云中，让数据不离开本地环境，面向政府、金融和医疗等高敏感场景（[tweet](https://x.com/amasad/status/2111267314012496121)）。在称 OpenAI 成为 Replit agent 的首选合作伙伴后，他澄清平台仍然保持模型无关，用户依然可以选择 Anthropic 和其他模型（[tweet](https://x.com/amasad/status/2111494912562888939)）。

### Boris Cherny, Claude at Anthropic

Cherny says prompt injection remains an urgent industry problem as agents take on more responsibility, and highlighted Anthropic's competition with Gray Swan to find new attacks ([tweet](https://x.com/bcherny/status/2110791698611855624)). He credits Claude Code Review with catching almost every bug before it ships on his pull requests, calling it part of the team's speed advantage ([tweet](https://x.com/bcherny/status/2111158313463525518)). He also uses Claude Slides to build presentations directly rather than hunting for assets manually ([tweet](https://x.com/bcherny/status/2111158659971699136)).

Cherny 表示，随着 agent 承担更多责任，prompt injection 仍是整个行业亟待解决的问题，并提到 Anthropic 与 Gray Swan 合办竞赛来寻找新的攻击方式（[tweet](https://x.com/bcherny/status/2110791698611855624)）。他说 Claude Code Review 会检查自己的每个 PR，几乎能在上线前抓住所有 bug，是团队保持速度与质量的一部分（[tweet](https://x.com/bcherny/status/2111158313463525518)）。他也会直接用 Claude Slides 制作演示文稿，不再手动寻找素材（[tweet](https://x.com/bcherny/status/2111158659971699136)）。

### Dan Shipper, CEO of Every

Shipper's hands-on review of Gemini 4 Argon was mixed: he found it a strong writing model but said it scored only 21% on Every's senior-engineer benchmark, below Sol 6 and Muse ([tweet](https://x.com/danshipper/status/2110056016872427944)). He argues that generation is now cheap and high quality, so the next capability jump must come from editing and oversight ([tweet](https://x.com/danshipper/status/2111174407637139668)). He is also skeptical of interpretability work that stops at identifying features, noting that recognizing the Eiffel Tower does not reveal what a model is planning ([tweet](https://x.com/danshipper/status/2110831666587713810)).

Shipper 对 Gemini 4 Argon 的实测评价比较复杂：他认为这是很强的写作模型，但在 Every 的资深工程师 benchmark 上只有 21%，低于 Sol 6 和 Muse（[tweet](https://x.com/danshipper/status/2110056016872427944)）。他认为生成已经变得便宜且高质量，下一次能力跃迁必须来自编辑与监督（[tweet](https://x.com/danshipper/status/2111174407637139668)）。他也对只停留在特征识别层面的可解释性研究持怀疑态度，指出模型能识别 Eiffel Tower，并不等于知道它在计划什么（[tweet](https://x.com/danshipper/status/2110831666587713810)）。

### Guillermo Rauch, CEO of Vercel

Rauch complains that coding CLIs have become complex piles of daemons and interfaces, and argues for a minimal, fast, model-agnostic tool with MCP, skills, subagents, and ACP built in ([tweet](https://x.com/rauchg/status/2109734766107099312)). He calls coding agents the killer app of AI and says their rapid succession is a reason for people and companies to stay model agnostic ([tweet](https://x.com/rauchg/status/2110044152482365747)). He also treats agent containment as critical infrastructure after a researcher with an agent swarm pierced a Linux virtualization boundary used by many cloud sandboxes; Vercel found no evidence of customer-data compromise ([tweet](https://x.com/rauchg/status/2110514201559228606)).

Rauch 抱怨编码 CLI 正在变成由 daemon 和多层界面堆起来的复杂系统，主张做一个极简、快速、模型无关的工具，并内置 MCP、skills、subagents 和 ACP（[tweet](https://x.com/rauchg/status/2109734766107099312)）。他称编码 agent 是 AI 的 killer app，并认为模型快速迭代正是个人和公司都应保持模型无关的原因（[tweet](https://x.com/rauchg/status/2110044152482365747)）。在一位研究者带着 agent swarm 突破许多云沙箱依赖的 Linux 虚拟化边界后，他把 agent containment 视为关键基础设施；Vercel 表示没有发现客户数据被泄露的证据（[tweet](https://x.com/rauchg/status/2110514201559228606)）。

### Matt Turck, FirstMark Capital and The MAD Podcast

Turck frames job evolution as a sequence of platform transitions: punch-card operators became Lotus Notes admins, then Flash developers, DevOps engineers, and Tableau analysts, and now many are becoming agent managers and harness engineers. His conclusion is that the transition will work out, even if the title changes again ([tweet](https://x.com/mattturck/status/2109345191010472332)).

Turck 把职业演化描述为一连串平台迁移：打孔卡操作员后来成为 Lotus Notes 管理员，再后来是 Flash 开发者、DevOps 工程师和 Tableau 分析师，如今许多人正在成为 agent manager 和 harness engineer。他的结论是，这次转型最终也会走通，即使职位名称还会再变（[tweet](https://x.com/mattturck/status/2109345191010472332)）。

### Nikunj Kothari, Partner at FPV Ventures

Kothari argues that venture investing looks simple but requires four hard things at once: earning the right to invest, finding exceptional founders, getting in before consensus, and repeating that every year. He says most investors manage one or a few of those, while durable firms need all four and the discipline to keep competing for the next opportunity ([tweet](https://x.com/nikunj/status/2110493174787670529)).

Kothari 认为，风险投资看起来简单，但同时要求四件难事：赢得投资资格、找到卓越创始人、在共识形成前进入，并且每年都重复做到。他说，多数投资人只能做好一项或几项，而真正持久的机构需要四项全做到，还要有持续争夺下一个机会的纪律（[tweet](https://x.com/nikunj/status/2110493174787670529)）。

### Peter Yang

Yang highlights a workflow in which an agent presents before-and-after evidence so manual review becomes the final check rather than the main discovery process ([tweet](https://x.com/petergyang/status/2109433961223180517)). He prefers Grok bots built around personas with defined jobs, such as customer support, research, errands, and fitness coaching, because they feel more like hiring employees than managing chat threads ([tweet](https://x.com/petergyang/status/2109803399332213090)). He says the Claude Code app is now faster and arguably simpler than ChatGPT, but still needs better browser use, remote control, and live voice ([tweet](https://x.com/petergyang/status/2111496600522805624)). He also shares a prompt for auditing dozens of connected Google apps and removing broad or unused permissions ([tweet](https://x.com/petergyang/status/2111508293818671449)).

Yang 介绍了一种工作流：agent 先提供前后对比证据，让人的手动复核成为最后一步，而不是主要的信息发现过程（[tweet](https://x.com/petergyang/status/2109433961223180517)）。他更喜欢围绕明确岗位构建的 Grok bot，例如客服、研究、家庭事务和健身教练，因为这更像雇用员工，而不是管理聊天线程（[tweet](https://x.com/petergyang/status/2109803399332213090)）。他说 Claude Code app 现在更快，使用上甚至可能比 ChatGPT 更简单，但仍需要更好的浏览器操作、远程控制和实时语音（[tweet](https://x.com/petergyang/status/2111496600522805624)）。他还分享了一段 prompt，用来审计数十个已连接的 Google 应用，并移除宽泛或不再使用的权限（[tweet](https://x.com/petergyang/status/2111508293818671449)）。

### Swyx, AI Engineer and Latent Space

Swyx ran an experiment to clone a $43,000-per-year SaaS product in a weekend, drawing 72 submissions and roughly 100 billion tokens of model use, with both AI and human evaluations ([tweet](https://x.com/swyx/status/2110065576764686421)). The exercise found that nontrivial mid-tier SaaS remains hard to kill, even when generation is cheap. He also shared channel data showing more than 1 million unique viewers a month, with 58% new to the audience and 68% not subscribed, a reminder that reach does not automatically become a durable audience ([tweet](https://x.com/swyx/status/2111350966419411070)).

Swyx 做了一次实验，试图在一个周末内复制一款每年 4.3 万美元的 SaaS 产品，最终收到 72 份提交，消耗约 1,000 亿 token，并同时使用 AI 与真人评估（[tweet](https://x.com/swyx/status/2110065576764686421)）。实验发现，即使生成成本很低，非平凡的中型 SaaS 仍然很难被真正取代。他还披露了频道数据：每月有超过 100 万独立观众，其中 58% 是新观众，68% 没有订阅，这说明触达并不自动等于可持续的受众（[tweet](https://x.com/swyx/status/2111350966419411070)）。

### Thariq, Claude Code at Anthropic

Thariq agrees with Terence Tao that intelligence should not be accepted as an opaque black box. He argues that communication is a key signal of intelligence and that products should build understanding with humans rather than disintermediate them ([tweet](https://x.com/trq212/status/2109329495341867391)). He also refines the advice to "be technical": technical people need to work in the right details of the code, while nontechnical people need to understand how the system works at the right level ([tweet](https://x.com/trq212/status/2110488897453257169)).

Thariq 同意 Terence Tao 的方向性判断：我们不应接受一个不透明的超级智能。他认为沟通是智能的关键信号，产品应该帮助人类建立理解，而不是把人类排除在外（[tweet](https://x.com/trq212/status/2109329495341867391)）。他也修正了“要懂技术”这句建议：技术人需要深入正确的代码细节，非技术人则需要在正确层级理解系统如何工作（[tweet](https://x.com/trq212/status/2110488897453257169)）。

### Thibault Sottiaux, Codex and ChatGPT at OpenAI

Sottiaux raised the default context length for GPT-6.1 Sol in Codex and Work from 272,000 to 500,000 tokens, about an 80% increase, while removing long-context fees for subscription usage ([tweet](https://x.com/thsottiaux/status/2109430343346581527)). He also reduced desktop app state storage by 60% for power users running out of disk space ([tweet](https://x.com/thsottiaux/status/2110151780478927344)). Slides support arrived for Pro, Business, and Enterprise users ([tweet](https://x.com/thsottiaux/status/2111249810502353152)). His most concrete demo was a work agent and a personal agent coordinating over email to gather documents and work with his CPA on taxes in 20 minutes ([tweet](https://x.com/thsottiaux/status/2111495392559067199)).

Sottiaux 把 Codex 和 Work 中 GPT-6.1 Sol 的默认上下文长度从 27.2 万 token 提高到 50 万，增幅约 80%，同时取消订阅用量中的长上下文费用（[tweet](https://x.com/thsottiaux/status/2109430343346581527)）。他还把桌面应用的状态存储减少了 60%，回应重度用户磁盘空间不足的问题（[tweet](https://x.com/thsottiaux/status/2110151780478927344)）。Slides 支持已向 Pro、Business 和 Enterprise 用户开放（[tweet](https://x.com/thsottiaux/status/2111249810502353152)）。他给出的最具体演示，是工作 agent 与个人 agent 通过邮件协调收集文件，并与他的 CPA 一起处理报税，整个过程用了 20 分钟（[tweet](https://x.com/thsottiaux/status/2111495392559067199)）。

### Zara Zhang, Builder

Zhang argues that code has become a new storytelling medium. She describes a technically simple game built from a friend's childhood memory of turning cockroach-catching into a game with her mother; the human story and emotion gave it a soul that model capability alone could not ([tweet](https://x.com/zarazhangrui/status/2109673430245421415)). She also shares Ezra Klein's advice never to underestimate an audience's intelligence or overestimate its prior knowledge ([tweet](https://x.com/zarazhangrui/status/2110815456458412179)).

Zhang 认为，代码已经成为新的叙事媒介。她讲了一个技术上并不复杂、却来自朋友童年记忆的游戏：朋友小时候家里蟑螂很多，母亲把抓蟑螂变成了一场比赛；人类故事和情感让这个游戏有了模型能力本身无法给予的灵魂（[tweet](https://x.com/zarazhangrui/status/2109673430245421415)）。她还分享了 Ezra Klein 的建议：永远不要低估受众的智力，也不要高估他们的先备知识（[tweet](https://x.com/zarazhangrui/status/2110815456458412179)）。

### Garry Tan, President and CEO of Y Combinator

Tan says replacing LLM calls with deterministic code is an obvious win because it produces better code that better matches user intent ([tweet](https://x.com/garrytan/status/2109410082769482174)). He also calls giving an agent harness access to a real browser with real credentials a major unlock ([tweet](https://x.com/garrytan/status/2110053836945756234)). He is applying that pattern to a new project where Capy and Aside let agents write the first version and set up DevOps ([tweet](https://x.com/garrytan/status/2111235500568969451)).

Tan 认为，用确定性代码替换 LLM 调用是显而易见的选择，因为这样能产生更符合用户意图的更好代码（[tweet](https://x.com/garrytan/status/2109410082769482174)）。他还说，让 agent harness 使用带有真实凭据的真实浏览器，是一个重要解锁（[tweet](https://x.com/garrytan/status/2110053836945756234)）。在新项目中，他用 Capy 和 Aside 让 agent 写出第一版并完成 DevOps 配置（[tweet](https://x.com/garrytan/status/2111235500568969451)）。

## Podcast

### Training Data: David Silver and Lasse Espeholt of Ineffable Intelligence: A Superlearner for the Age of Experience

**The Takeaway:** Ineffable Intelligence is betting that superintelligence will come from agents that learn continuously from experience in open-ended worlds, not from LLMs trained on human text.

**核心要点：** Ineffable Intelligence 押注的超级智能，来自能在开放式世界中持续从经验里学习的 agent，而不是依赖人类文本训练的 LLM。

David Silver, co-founder of Ineffable Intelligence and the researcher behind milestone reinforcement-learning work on Go, argues that the dominant LLM path starts from human language and therefore inherits human priors. His company is building a "super learner" plus "crucibles": rich simulated environments that reward simple objectives while allowing complex behavior to emerge. The aim is not to hand-code science or mathematics but to let agents discover tools, concepts, and strategies for themselves. Lasse Espeholt, also a co-founder, adds the systems view: a compact team of 20, a high compute-per-person ratio, and a reinforcement-learning stack designed to scale across cheap and expensive simulations. Silver says progress will be judged by whether the system keeps discovering beyond its starting data, not by benchmark polish. He expects strong evidence within a year and puts the superintelligence target at roughly three years, accelerated by coding agents. "A super learner" is, in his words, "a system that can just keep learning and discovering knowledge forever." The bet is expensive and deliberately contrarian, but it gives the week a concrete alternative to the LLM-first roadmap ([episode](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8)).

David Silver 是 Ineffable Intelligence 联合创始人，也因在围棋上取得里程碑式的强化学习成果而知名。他认为主流 LLM 路线从人类语言出发，因此继承了人类先验。公司正在构建“super learner”和“crucibles”：奖励目标很简单、但能涌现复杂行为的丰富模拟环境。目标不是手工编写科学和数学，而是让 agent 自己发现工具、概念和策略。另一位联合创始人 Lasse Espeholt 补充了系统视角：20 人的精简团队、很高的人均算力，以及能同时适配廉价和昂贵模拟的强化学习栈。Silver 说，衡量进展的标准不是 benchmark 是否好看，而是系统能否在初始数据之外继续发现。他预计一年内会有强证据，并把超级智能目标放在约三年，编码 agent 会加速这一进程。用他的话说，super learner 是“a system that can just keep learning and discovering knowledge forever”。这是一项昂贵且刻意逆势的押注，但它为本周提供了一个具体的、不同于 LLM 优先路线的选项（[episode](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8)）。

### No Priors: The Changing Physics of Cybersecurity and Drug Development with OpenAI President Greg Brockman

**The Takeaway:** Greg Brockman argues that AI's newest math results mark a genuine knowledge-generation milestone, but biology and security will advance only where data, feedback loops, and trust can support it.

**核心要点：** Greg Brockman 认为，AI 最新的数学成果标志着真正的新知识生成，但生物和安全领域只有在数据、反馈回路和信任都能支撑时才会前进。

Brockman, co-founder and president of OpenAI, says the important shift is not a model producing an answer but a human with AI solving problems that were previously out of reach. OpenAI's latest math work resolved longstanding problems, which he treats as proof that new knowledge is possible; broader theories remain ahead. The same capability does not transfer automatically to drug discovery. Biology is data bottlenecked in places, and regulatory work, wet labs, and simulations may matter as much as model intelligence. Brockman is even more expansive about cyber. As software gets cheaper, he expects reliable and secure software to become the scarce good: "cyber spend, security spend should actually vastly outstrip software spend." That implies a much larger market for verification, containment, and defense, not merely for code generation. The practical message for builders is to separate domains where verifiable feedback exists from those where the bottleneck is physical or institutional. Brockman's optimism is not that AI removes those bottlenecks by itself, but that it makes each step cheaper to attack ([episode](https://www.youtube.com/@NoPriorsPodcast)).

OpenAI 联合创始人兼总裁 Brockman 说，关键变化不是模型给出一个答案，而是人类借助 AI 解决过去无法触及的问题。OpenAI 近期的数学工作解决了一些长期存在的问题，他把这视为 AI 能生成新知识的证明，不过更完整的理论仍在前面。这种能力不会自动迁移到药物发现。生物领域在部分环节受制于数据，监管文件、湿实验和模拟的重要性可能不亚于模型智能。谈到 cyber 时，Brockman 的判断更激进：软件变便宜后，可靠且安全的软件会成为稀缺品，所以“cyber spend, security spend should actually vastly outstrip software spend”。这意味着验证、隔离和防御市场会远大于单纯的代码生成。对 builders 的实用启示，是区分两类领域：一类有可验证反馈，另一类的瓶颈在物理世界或制度流程。Brockman 的乐观并不是 AI 会自动消除这些瓶颈，而是它会让攻破每一步都更便宜（[episode](https://www.youtube.com/@NoPriorsPodcast)）。

### The MAD Podcast with Matt Turck: Jev: The AI That Makes Decisions, Not Text - and Why It Changes Everything (Diogo Almeida)

**The Takeaway:** Jev is not a smaller chatbot. It is a decision model designed to replace fragile natural-language prompting with legible, measurable classifiers inside ordinary software.

**核心要点：** Jev 不是更小的聊天机器人，而是决策模型：它用可读、可测量的分类器嵌入普通软件，替代脆弱的自然语言 prompt。

Diogo Almeida, CEO of TypeSafe, built Jev around a contrarian claim: most valuable automation needs reliable system-one decisions more than fluent text. Instead of asking an LLM to hold an entire workflow in a giant prompt, developers can compose small classifiers, set thresholds, inspect errors, and keep the system inside code. Almeida says this makes failures visible and composable, while LLMs remain better suited to open-ended language and reasoning. The commercial argument is intelligence per dollar. Jev removes autoregressive text generation, returns probabilities rather than prose, and aims to make large volumes of routine decisions cheap enough to run everywhere. That is why Almeida describes classification as "AI complete" rather than narrow: a strong general verifier could be composed into far more complex behavior. He is skeptical of benchmark-maxing and of claims that scaling alone closes the gap between demos and dependable automation. "You can now express things that you couldn't express in software before," he says. The useful lesson is to design AI systems around controllable units of work, explicit thresholds, and measured failure modes, not around the hope that a prompt will behave ([episode](https://www.youtube.com/@DataDrivenNYC/videos)).

TypeSafe CEO Diogo Almeida 围绕一个逆势判断构建 Jev：大多数有价值的自动化，需要的是可靠的 System 1 决策，而不是流畅文本。开发者不必让 LLM 在巨大的 prompt 中记住整个工作流，而是可以组合小型分类器、设置阈值、检查错误，并把系统留在代码里。Almeida 说，这让失败变得可见、可组合，而 LLM 仍更适合开放式语言和推理。商业论证是 intelligence per dollar。Jev 去掉自回归文本生成，返回概率而不是段落，目标是让海量日常决策便宜到可以到处运行。这也是为什么他把分类称为“classification is AI complete”，而不是狭窄任务：一个强通用验证器可以被组合成复杂得多的行为。他对 benchmark 刷分，以及“只靠 scaling 就能填平 demo 与可靠自动化之间差距”的说法持怀疑态度。他说：“You can now express things that you couldn't express in software before.” 实用教训是围绕可控的工作单元、明确阈值和可测量的失败模式来设计 AI 系统，而不是指望 prompt 自己守规矩（[episode](https://www.youtube.com/@DataDrivenNYC/videos)）。

**Also published / 其他已发布**
- AI & I by Every: How Hugging Face’s Investor Spots Winners ([episode](https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL))

## Blog

The validated weekly feed contained no qualifying blog items.

经校验的周度 feed 中没有符合条件的博客内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders

