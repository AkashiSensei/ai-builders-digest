[English](../../en/daily/ai-digest-2026-10-12-Mon.md) | [中文](../../zh/daily/ai-digest-2026-10-12-Mon.md) | [Bilingual](./ai-digest-2026-10-12-Mon.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. Andrej Karpathy: shared understanding of LLM capability is splitting into a sharp funnel.** Andrej Karpathy revisits an April post because "this gap in shared understanding of LLM capability is *widening*," now less two groups speaking past each other and more a sharp funnel. His napkin math: about 6B people (~75% of the population) "have barely come in contact with LLMs at all"; 1-2B (~20%) use free-tier chatbots casually and see "derpy chatbots"; roughly 20M (0.2%) use frontier-grade models professionally in math and code, where "large, complex projects that used to take them weeks/months can now be completed by agents with a prompt"; and about 5,000 (~0.00006%) have internal access to frontier systems, where "swarms of thousands of agents collaborating over weeks" mint zero days, run cyber attacks and defenses, discover new science, and advance mathematics. He credits three drivers: impact scales with ambition and horizon, the system is jagged because capability peaks in "domains that are digital, verifiable and economically valuable" via "reinforcement learning on verifiable rewards," and access tiering. "It is all happening at the same time." ([Andrej Karpathy](https://x.com/karpathy/status/2109361546505966046))

**1. Andrej Karpathy：人们对 LLM 能力的理解正在分化成一条陡峭的漏斗。** Andrej Karpathy 重新翻出了 4 月的一条帖子，因为「this gap in shared understanding of LLM capability is *widening*」，如今这已经不再只是「两拨人各说各话」，而是一条陡峭的漏斗。他给出的粗略估算：约 60 亿人（约占全球人口 75%）「have barely come in contact with LLMs at all」；10 到 20 亿人（约 20%）只是偶尔使用免费版聊天机器人，看到的多是「derpy chatbots」；约 2000 万人（0.2%）在数学与代码场景里专业地使用前沿模型，过去要花数周乃至数月的大型复杂项目，「can now be completed by agents with a prompt」；而约 5000 人（0.00006%）能在内部接触到前沿系统，那里「swarms of thousands of agents collaborating over weeks」，挖掘 zero day、以机器速度进行网络攻防、发现新科学、推动数学前沿。他把原因归为三点：影响会随野心与时间跨度放大；系统本身高度不平整，因为能力在「domains that are digital, verifiable and economically valuable」达到峰值，而这来自「reinforcement learning on verifiable rewards」；以及访问权限分层。他说：「It is all happening at the same time.」（[Andrej Karpathy](https://x.com/karpathy/status/2109361546505966046)）

**2. Aaron Levie: agent swarms are the enterprise's applied-layer opportunity.** Box CEO Aaron Levie reads the funnel as proof of "how early we actually are in AI diffusion right now": most people use AI as a chatbot that approximates "next-generation search," which "dramatically underrepresents the full capability of AI." At the other end, agent swarms are "possibly the ultimate form factor of what agents will do inside of our workflows," suited to any field with valuable parallelizable tasks, including math, cyber, bio, materials science, software engineering, and finance. He warns that "a huge amount of change management" lies beyond software and AI research: companies must upgrade workflows, integrate and migrate data into modern platforms, and clear compliance, governance, and security frameworks, which is where "the applied layer of AI will really shine in the enterprise." ([Aaron Levie](https://x.com/levie/status/2109467575025578330))

**2. Aaron Levie：agent 集群是企业应用层的机会所在。** Box CEO Aaron Levie 把这条漏斗解读为 AI 扩散「how early we actually are in AI diffusion right now」的证据：大多数人把 AI 当作近似「next-generation search」的聊天机器人，而这「dramatically underrepresents the full capability of AI」。在另一端，agent 集群「possibly the ultimate form factor of what agents will do inside of our workflows」，适用于任何拥有可并行执行的高价值任务的领域，包括数学、网络安全、生物、材料科学、软件工程与金融。他提醒，真正的难点在软件与 AI 研究之外的「a huge amount of change management」：公司需要升级工作流、把数据集成并迁移到现代平台，还要走完合规、治理与安全框架，而这正是「the applied layer of AI will really shine in the enterprise」的地方。（[Aaron Levie](https://x.com/levie/status/2109467575025578330)）

**3. OpenAI lengthens the context window and drops its long-context fee.** OpenAI's Thibault Sottiaux, who works on Codex and ChatGPT, announced on "Day 7" that the default context length for GPT-6.1 Sol through Codex and Work is now 500k, up from 272k, an ~80% increase, with a 1M maximum still available. He says the new default "helps reduce occurrence of compactions" and supports tasks "that require keeping a lot of context and nuance over periods of time." He also said OpenAI is "not charging long context fees for GPT-6.1 Sol when drawing usage from the subscription," and admitted surprise that a poll on trading 2X usage across Pro 100/200/500 for restoring 5-hour limits did not move as favorably as he expected. ([Thibault Sottiaux](https://x.com/thsottiaux/status/2109430343346581527), [Thibault Sottiaux](https://x.com/thsottiaux/status/2109430894604026039), [Thibault Sottiaux](https://x.com/thsottiaux/status/2109439315570999598))

**3. OpenAI 拉长上下文窗口，并取消长上下文的额外费用。** 在 OpenAI 负责 Codex 与 ChatGPT 的 Thibault Sottiaux 在「Day 7」宣布，通过 Codex 与 Work 使用时，GPT-6.1 Sol 的默认上下文长度已提升到 500k，高于此前的 272k，增幅约 80%，同时仍可选用最高 1M。他表示新的默认值「helps reduce occurrence of compactions」，并能支撑那些「that require keeping a lot of context and nuance over periods of time」的任务。他还表示，OpenAI「not charging long context fees for GPT-6.1 Sol when drawing usage from the subscription」，并坦言一项关于「用 2X 用量换取恢复 5 小时限制」的投票结果，没有像他预期的那样明显偏向支持。（[Thibault Sottiaux](https://x.com/thsottiaux/status/2109430343346581527)、[Thibault Sottiaux](https://x.com/thsottiaux/status/2109430894604026039)、[Thibault Sottiaux](https://x.com/thsottiaux/status/2109439315570999598)）

**4. Trust and verification become the craft of working with agents.** Peter Yang relays a blunt admission from Micky (Rasmic), who has taught 100K+ people to build with AI: "I'm not at a point where I trust the agent, especially with stuff that people are using." Micky treats manual review as "the final step" once the work is done and the agent has surfaced evidence, using evidence-driven testing, before/after comparisons, and "greploop" to build trust so the agent can present "evidence: This is the work that's done, and this is why it's good." Y Combinator President and CEO Garry Tan pushes the instinct further: "replacing LLM calls with deterministic code is a no brainer and also results in better code that better matches what users want." FirstMark Capital VC Matt Turck frames the shift as the latest in a long lineage of tech roles, from punch card operators and DevOps analysts to what he calls "agent managers and harness engineers." ([Peter Yang](https://x.com/petergyang/status/2109433961223180517), [Garry Tan](https://x.com/garrytan/status/2109410082769482174), [Matt Turck](https://x.com/mattturck/status/2109345191010472332))

**4. 信任与验证正在成为与 agent 协作的核心手艺。** Peter Yang 转述了 Micky（Rasmic）的一句坦率表态。Micky 教过 10 万多人用 AI 做东西，他说：「I'm not at a point where I trust the agent, especially with stuff that people are using.」Micky 的做法是把人工审查当作「the final step」：等工作完成、agent 已经给出证据之后再进行，靠 evidence-driven testing、前后对比以及「greploop」来建立信任，让 agent 能拿出「evidence: This is the work that's done, and this is why it's good」。Y Combinator 总裁兼 CEO Garry Tan 把这个直觉推得更远：「replacing LLM calls with deterministic code is a no brainer and also results in better code that better matches what users want.」FirstMark Capital 的 VC Matt Turck 则把这轮变化放进一条很长的技术岗位谱系里，从打孔机操作员、DevOps 分析师，一直到今天他所说的「agent managers and harness engineers」。（[Peter Yang](https://x.com/petergyang/status/2109433961223180517)、[Garry Tan](https://x.com/garrytan/status/2109410082769482174)、[Matt Turck](https://x.com/mattturck/status/2109345191010472332)）

**5. Do not settle for opaque intelligence.** Thariq, who works on Claude Code at Anthropic, sides with Terrence Tao in arguing "we shouldn't settle for a super intelligence that is opaque." His reason: "a key signal of intelligence is communication," so builders "should strive to make products and models that build understanding with humans instead of disintermediating them." The same window brought smaller product signals: Zara Zhang says "the only place where I use Gemini these days is in Chrome," and Every CEO Dan Shipper built "a feed that automatically tracks the books im reading (and have read going back to 2012!)." ([Thariq](https://x.com/trq212/status/2109329495341867391), [Zara Zhang](https://x.com/zarazhangrui/status/2109483079106740500), [Dan Shipper](https://x.com/danshipper/status/2109331798282915907))

**5. 不要接受一个不透明的智能。** 在 Anthropic 负责 Claude Code 的 Thariq 站在 Terrence Tao 一边，认为「we shouldn't settle for a super intelligence that is opaque」。他的理由是「a key signal of intelligence is communication」，因此建造者「should strive to make products and models that build understanding with humans instead of disintermediating them」。同一时间还有一些更小的产品信号：Zara Zhang 说「the only place where I use Gemini these days is in Chrome」；Every CEO Dan Shipper 做了一个「a feed that automatically tracks the books im reading (and have read going back to 2012!)」。（[Thariq](https://x.com/trq212/status/2109329495341867391)、[Zara Zhang](https://x.com/zarazhangrui/status/2109483079106740500)、[Dan Shipper](https://x.com/danshipper/status/2109331798282915907)）

**6. Fractile's Walter Goodwin: speed, not just FLOPs, is the next chip frontier.** Fractile founder and CEO Walter Goodwin argues the industry has scaled FLOPs "like a million fold in the last twenty years" while memory bandwidth rose only about 40x, and that this imbalance now binds frontier inference. His full-stack chip company, about 150 people, started on SRAM-based designs before pivoting to very high bandwidth DRAM, aiming to unite DRAM's capacity and cost with SRAM-like speed in a platform ramping in the second half of next year. He says the payoff is not "a snappier chatbot" but radically faster long-running agents, and claims roughly 25 times more bandwidth per chip than an HBM-based chip. He also argues frontier labs cannot safely go all-in on proprietary silicon, because a rival's efficiency breakthrough might only run on that rival's chip, which is why he expects third-party frontier chip players to persist. ([No Priors](https://www.youtube.com/watch?v=OpeCP4wCxkA))

**6. Fractile 的 Walter Goodwin：下一块芯片前沿是速度，而不只是 FLOPs。** Fractile 创始人兼 CEO Walter Goodwin 认为，过去二十年行业把 FLOPs 提升了「like a million fold in the last twenty years」，而内存带宽只增长了约 40 倍，这种失衡如今正卡住前沿推理。他这家约 150 人的全栈芯片公司最早做基于 SRAM 的设计，后来转向极高带宽的 DRAM，目标是在明年下半年量产的平台上，把 DRAM 的容量与低成本同接近 SRAM 的速度结合起来。他说回报不是「a snappier chatbot」，而是让长时间运行的 agent 变得快得多，并称每颗芯片的带宽约为基于 HBM 芯片的 25 倍。他还认为，前沿实验室无法放心地全面押注自研芯片，因为竞争对手的效率突破可能只能跑在对手自己的芯片上，这也是他相信第三方前沿芯片厂商会长期存在的原因。（[No Priors](https://www.youtube.com/watch?v=OpeCP4wCxkA)）

## X / Twitter

### Andrej Karpathy

Andrej Karpathy revisited an April post because "this gap in shared understanding of LLM capability is *widening*," describing it now as "a sharp funnel" rather than "two groups of people speaking past each other." He sketches four tiers: roughly 6B people (~75% of the population) who "have barely come in contact with LLMs at all"; 1-2B (~20%) who use free-tier chatbots casually and mostly see "derpy chatbots"; about 20M (0.2%) who use frontier-grade models professionally in math and code, where "large, complex projects that used to take them weeks/months can now be completed by agents with a prompt"; and roughly 5,000 (~0.00006%) with internal access to frontier systems, where "swarms of thousands of agents collaborating over weeks" mint zero days, run cyber attacks and defenses, discover new science, and advance mathematics while "human review and comprehension are starting to fall behind." He attributes the funnel to three forces: impact scaling with ambition and horizon, the jaggedness of the system, whose capability peaks in "domains that are digital, verifiable and economically valuable" because it emerges from "reinforcement learning on verifiable rewards," and access tiers. "It is all happening at the same time."

Andrej Karpathy 重新翻出了 4 月的一条帖子，因为「this gap in shared understanding of LLM capability is *widening*」，如今他把它形容为「a sharp funnel」，而不再是「two groups of people speaking past each other」。他勾画了四个层级：约 60 亿人（约占全球人口 75%）「have barely come in contact with LLMs at all」；10 到 20 亿人（约 20%）偶尔使用免费版聊天机器人，看到的多是「derpy chatbots」；约 2000 万人（0.2%）在数学与代码场景里专业地使用前沿模型，那里「large, complex projects that used to take them weeks/months can now be completed by agents with a prompt」；而约 5000 人（0.00006%）能在内部接触到前沿系统，那里「swarms of thousands of agents collaborating over weeks」，挖掘 zero day、进行网络攻防、发现新科学、推动数学前沿，同时「human review and comprehension are starting to fall behind」。他把这条漏斗归因于三股力量：影响会随野心与时间跨度放大；系统高度不平整，能力在「domains that are digital, verifiable and economically valuable」达到峰值，因为它来自「reinforcement learning on verifiable rewards」；以及访问权限分层。他说：「It is all happening at the same time.」

- [Andrej Karpathy: the LLM capability funnel](https://x.com/karpathy/status/2109361546505966046)

### Thibault Sottiaux

Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, marked "Day 7" of a rollout by announcing that the default context length for GPT-6.1 Sol through Codex and Work is now 500k, up from 272k, an ~80% increase, with a 1M maximum still available. He said the new default "helps reduce occurrence of compactions" and supports tasks that require keeping a lot of context and nuance over time. He also announced that OpenAI is "not charging long context fees for GPT-6.1 Sol when drawing usage from the subscription," and noted surprise that a poll on trading 2X usage across Pro 100/200/500 for restoring 5-hour limits did not sway as favorably as he expected.

在 OpenAI 负责 Codex 与 ChatGPT 的 Thibault Sottiaux 在「Day 7」宣布，通过 Codex 与 Work 使用时，GPT-6.1 Sol 的默认上下文长度已提升到 500k，高于此前的 272k，增幅约 80%，同时仍可选最高 1M。他说新的默认值「helps reduce occurrence of compactions」，并能支撑那些需要长期保持大量上下文与细节的任务。他还表示，OpenAI「not charging long context fees for GPT-6.1 Sol when drawing usage from the subscription」，并坦言一项关于「用 2X 用量换取恢复 5 小时限制」的投票结果，没有像他预期的那样明显偏向支持。

- [Thibault Sottiaux: 500k default context for GPT-6.1 Sol](https://x.com/thsottiaux/status/2109430343346581527)
- [Thibault Sottiaux: no long context fees from subscription usage](https://x.com/thsottiaux/status/2109430894604026039)
- [Thibault Sottiaux: poll on 2X usage versus 5h limits](https://x.com/thsottiaux/status/2109439315570999598)

### Peter Yang

Peter Yang, who writes practical AI tutorials and interviews, shared a quote from Micky (Rasmic), who has taught 100K+ people to build with AI: "I'm not at a point where I trust the agent, especially with stuff that people are using." Micky describes manual review as "the final step" once the work is done and the agent has surfaced evidence, leaning on evidence-driven testing, before/after comparisons, and "greploop" to build trust: "The agent presents evidence: This is the work that's done, and this is why it's good." Peter separately noted he was "building a @modretro game with my daughter and Codex."

Peter Yang 从事实用的 AI 教程与访谈写作。他转述了 Micky（Rasmic）的话。Micky 教过 10 万多人用 AI 做东西，他说：「I'm not at a point where I trust the agent, especially with stuff that people are using.」Micky 把人工审查描述为「the final step」：等工作完成、agent 已经给出证据之后再进行，靠 evidence-driven testing、前后对比以及「greploop」来建立信任：「The agent presents evidence: This is the work that's done, and this is why it's good.」Peter 还提到自己「building a @modretro game with my daughter and Codex」。

- [Peter Yang: Micky on trusting agents and evidence-driven testing](https://x.com/petergyang/status/2109433961223180517)
- [Peter Yang: building a ModRetro game with his daughter and Codex](https://x.com/petergyang/status/2109434554729824397)

### Thariq

Thariq, who works on Claude Code at Anthropic (previously YC W20, SPC, and Media Lab), argues Terrence Tao is "directionally correct" that "we shouldn't settle for a super intelligence that is opaque." He writes that "a key signal of intelligence is communication" and that builders "should strive to make products and models that build understanding with humans instead of disintermediating them."

在 Anthropic 负责 Claude Code 的 Thariq（此前经历包括 YC W20、SPC 与 Media Lab）认为，Terrence Tao 的说法「directionally correct」，也就是「we shouldn't settle for a super intelligence that is opaque」。他写道「a key signal of intelligence is communication」，建造者「should strive to make products and models that build understanding with humans instead of disintermediating them」。

- [Thariq: don't settle for an opaque superintelligence](https://x.com/trq212/status/2109329495341867391)

### Aaron Levie

Aaron Levie, CEO of Box, quotes Karpathy's funnel to argue "how early we actually are in AI diffusion right now": the vast majority use AI as a chatbot that approximates "next-generation search," which "dramatically underrepresents the full capability of AI." He calls agent swarms "possibly the ultimate form factor of what agents will do inside of our workflows," pointing to math, cyber, bio, materials science, software engineering, finance, and any other field with valuable tasks that can run in parallel, and notes that "less than a fraction of a fraction of the population uses AI in this way right now." He attributes the gap to model capability relative to a user's domain, the cost of these workflows, the available harnesses, and limited access to frontier models, and warns of "a huge amount of change management" ahead as companies upgrade workflows, integrate and migrate data, and work through compliance, governance, and security frameworks, which is where "the applied layer of AI will really shine in the enterprise."

Box CEO Aaron Levie 引用 Karpathy 的漏斗，说明「how early we actually are in AI diffusion right now」：绝大多数人把 AI 当作一种近似「next-generation search」的聊天机器人，而这「dramatically underrepresents the full capability of AI」。他把 agent 集群称为「possibly the ultimate form factor of what agents will do inside of our workflows」，点出数学、网络安全、生物、材料科学、软件工程、金融，以及任何拥有可并行执行的高价值任务的领域，并指出「less than a fraction of a fraction of the population uses AI in this way right now」。他把这道差距归因于模型能力与用户所在领域的匹配度、这类工作流的成本、可用的 harness，以及前沿模型的获取门槛，并提醒前方有「a huge amount of change management」：公司要升级工作流、集成并迁移数据、走完合规、治理与安全框架，而这正是「the applied layer of AI will really shine in the enterprise」的地方。

- [Aaron Levie: the funnel shows how early AI diffusion still is](https://x.com/levie/status/2109467575025578330)

### Garry Tan

Garry Tan, President and CEO of Y Combinator, argues "replacing LLM calls with deterministic code is a no brainer and also results in better code that better matches what users want." He also amplified Karpathy's "5,000" tier, urging people to "be part of the 5000 today" and predicting "the price will come down and more people will see this," which he called "the greatest alpha fountain in the history of man."

Y Combinator 总裁兼 CEO Garry Tan 认为，「replacing LLM calls with deterministic code is a no brainer and also results in better code that better matches what users want」。他也呼应了 Karpathy 提到的「5000」这一层，呼吁大家「be part of the 5000 today」，并预测「the price will come down and more people will see this」，称其为「the greatest alpha fountain in the history of man」。

- [Garry Tan: replace LLM calls with deterministic code](https://x.com/garrytan/status/2109410082769482174)
- [Garry Tan: be part of the 5000](https://x.com/garrytan/status/2109418482953814026)

### Matt Turck

Matt Turck, a VC at FirstMark Capital who hosts the MAD Podcast and organizes Data Driven NYC, traces the lineage of tech jobs: "People were punch card operators then they were Lotus Notes admins, then they were Flash developers and Dreamweaver webmasters, then they were DevOps and Tableau analysts, and now they're becoming agent managers and harness engineers." His verdict on the shift: "It will work out just fine."

FirstMark Capital 的 VC、MAD Podcast 主持人、Data Driven NYC 组织者 Matt Turck 梳理了技术岗位的谱系：「People were punch card operators then they were Lotus Notes admins, then they were Flash developers and Dreamweaver webmasters, then they were DevOps and Tableau analysts, and now they're becoming agent managers and harness engineers.」他对这轮变化的判断是：「It will work out just fine.」

- [Matt Turck: from punch card operators to harness engineers](https://x.com/mattturck/status/2109345191010472332)

### Zara Zhang

Zara Zhang, a builder and creator, observes that "the only place where I use Gemini these days is in Chrome," a small marker of where a frontier model is winning real usage.

建造者与创作者 Zara Zhang 观察道：「the only place where I use Gemini these days is in Chrome」，这是一个关于前沿模型真正在使用场景里取胜的小信号。

- [Zara Zhang: Gemini in Chrome](https://x.com/zarazhangrui/status/2109483079106740500)

### Dan Shipper

Dan Shipper, CEO of Every, built "a feed that automatically tracks the books im reading (and have read going back to 2012!)" and floated extending the idea: "maybe we should have a feed for everybody @every could be fun to see."

Every CEO Dan Shipper 做了一个「a feed that automatically tracks the books im reading (and have read going back to 2012!)」，并提出了一个想法：「maybe we should have a feed for everybody @every could be fun to see」。

- [Dan Shipper: a feed that tracks his reading](https://x.com/danshipper/status/2109331798282915907)

## Podcast

### No Priors: Frontier Chips for Frontier AI Labs, with Walter Goodwin, Founder/CEO of Fractile

The Takeaway: The next leap in frontier AI capability will come less from raw FLOPs than from memory bandwidth, and a chipmaker that can structurally carve out a three-to-six month speed advantage gets to win the deployments.

核心要点：前沿 AI 能力的下一次跃升，与其说来自更多 FLOPs，不如说来自内存带宽；而一家能在结构上撬出三到六个月速度优势的芯片公司，就能赢下这些部署。

Walter Goodwin is the founder and CEO of Fractile, a full-stack AI chip company he started in the summer of 2022 and that today numbers about 150 people, building very fast inference chips for the world's largest models. He bet on speed and inference from the outset, at a time when much of the industry still treated inference as an afterthought and the world was being educated on why the marginal cost of deployment mattered. The architecture evolved: an early SRAM-based design delivered enormous on-die bandwidth, until growing context lengths exposed its limits. Fractile then worked with memory vendors on skunkworks projects to get extremely high bandwidth to higher-capacity DRAM, aiming to combine DRAM's capacity and low cost with the speed of an on-chip-memory design in a platform ramping in the second half of next year.

Walter Goodwin 是 Fractile 的创始人兼 CEO。这家全栈 AI 芯片公司创立于 2022 年夏天，如今约 150 人，为世界上最大的模型打造速度极快的推理芯片。他从一开始就把赌注押在速度与推理上，而当时行业里很多人仍把推理视作附属品，市场还需要被教育：为什么部署的边际成本如此重要。架构也随之演进：早期基于 SRAM 的设计带来了极高的片内带宽，直到不断增长的上下文长度暴露出它的局限。此后 Fractile 与内存厂商合作，开展了一系列秘密项目，设法为容量更大的 DRAM 提供极高带宽，目标是在明年下半年量产的平台上，把 DRAM 的容量与低成本同片内存储设计的速度结合起来。

The central thesis is that fast inference is not about a snappier chatbot. Speed, Goodwin argues, is what turns long-running agents into a fundamentally more capable form factor, and today's fast inference chips are mismatched for it: they carry extremely high bandwidth memory but very low capacity, and still flip back to a GPU for long-context attention. He puts the opportunity in plain numbers: Fractile aims for roughly 25 times more bandwidth per chip than an HBM-based chip, at a time when the industry has scaled FLOPs "like a million fold in the last twenty years" while memory bandwidth grew only about 40x. That gap is why sparser mixture-of-experts models, which should be cheaper for the same intelligence, end up bandwidth-bottlenecked and served at low FLOPs utilization.

核心论点是：快速推理并不意味着一个更顺滑的聊天机器人。Goodwin 认为，速度才能把长时间运行的 agent 变成一种能力上完全不同的形态，而今天的快速推理芯片与这一需求并不匹配：它们拥有极高带宽的内存，容量却非常有限，遇到长上下文注意力时仍要切回 GPU。他用直白的数字描述机会：Fractile 的目标是每颗芯片的带宽约为基于 HBM 芯片的 25 倍，而过去二十年行业把 FLOPs 提升了「like a million fold」，内存带宽只增长了约 40 倍。正是这道差距，让本应在同等智能下更省算力的稀疏 mixture-of-experts 模型，最终卡在带宽瓶颈上，只能以很低的 FLOPs 利用率来服务。

Owning front-end design, physical design, back-end implementation, and advanced packaging in house, Goodwin says, buys an agile closed loop, but physics still sets the tempo: three-to-five-month fab cycle times and a three-to-five-year amortization window mean no one ships a fundamentally new chip every few weeks. The prize is compressing the gap between an observation and a bet realized in volume. "It's the equivalent of the frontier model for the chip space: if you can just find a way to structurally carve out a three to six month advantage, you will be winning all of those deployments."

Goodwin 说，把前端设计、物理设计、后端实现与先进封装都握在自己手里，能换来一个敏捷的闭环；但物理规律依然决定节奏：三到五个月的晶圆厂周期，以及三到五年的摊销窗口，意味着没有人能每隔几周就推出一款全新芯片。真正的价值在于压缩从观察到赌注以规模落地之间的时间差。他说：「It's the equivalent of the frontier model for the chip space: if you can just find a way to structurally carve out a three to six month advantage, you will be winning all of those deployments.」

He expects frontier labs to keep hedging across NVIDIA, AMD, and internal efforts, joking that first-party silicon partly exists to reduce the price paid to NVIDIA. He argues they cannot rationally go all-in on proprietary chips, because a rival's computational breakthrough might only run on the rival's silicon, which is why he believes third-party frontier chip players will persist.

他预计前沿实验室会继续在 NVIDIA、AMD 与自研方案之间分散下注，还开玩笑说，第一方芯片有一部分存在的意义就是压低付给 NVIDIA 的价格。他认为，这些实验室无法理性地全面押注自研芯片，因为竞争对手的计算突破可能只能跑在对手自己的芯片上，这也是他相信第三方前沿芯片厂商会长期存在的原因。

Source: https://www.youtube.com/watch?v=OpeCP4wCxkA

## Blog

The validated blog feed contained no new qualifying items for this run. No blog post passed the schema and 24-hour freshness checks applied to this digest.

本次经过验证的博客 feed 中没有任何符合收录条件的新内容。没有任何一篇博客通过本摘要所采用的 schema 与 24 小时新鲜度校验。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
