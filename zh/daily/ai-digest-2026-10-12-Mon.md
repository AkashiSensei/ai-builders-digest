[English](../../en/daily/ai-digest-2026-10-12-Mon.md) | [中文](./ai-digest-2026-10-12-Mon.md) | [双语](../../bilingual/daily/ai-digest-2026-10-12-Mon.md)

---

# AI Builders Digest

## 导读

**1. Andrej Karpathy：人们对 LLM 能力的理解正在分化成一条陡峭的漏斗。** Andrej Karpathy 重新翻出了 4 月的一条帖子，因为「this gap in shared understanding of LLM capability is *widening*」，如今这已经不再只是「两拨人各说各话」，而是一条陡峭的漏斗。他给出的粗略估算：约 60 亿人（约占全球人口 75%）「have barely come in contact with LLMs at all」；10 到 20 亿人（约 20%）只是偶尔使用免费版聊天机器人，看到的多是「derpy chatbots」；约 2000 万人（0.2%）在数学与代码场景里专业地使用前沿模型，过去要花数周乃至数月的大型复杂项目，「can now be completed by agents with a prompt」；而约 5000 人（0.00006%）能在内部接触到前沿系统，那里「swarms of thousands of agents collaborating over weeks」，挖掘 zero day、以机器速度进行网络攻防、发现新科学、推动数学前沿。他把原因归为三点：影响会随野心与时间跨度放大；系统本身高度不平整，因为能力在「domains that are digital, verifiable and economically valuable」达到峰值，而这来自「reinforcement learning on verifiable rewards」；以及访问权限分层。他说：「It is all happening at the same time.」（[Andrej Karpathy](https://x.com/karpathy/status/2109361546505966046)）

**2. Aaron Levie：agent 集群是企业应用层的机会所在。** Box CEO Aaron Levie 把这条漏斗解读为 AI 扩散「how early we actually are in AI diffusion right now」的证据：大多数人把 AI 当作近似「next-generation search」的聊天机器人，而这「dramatically underrepresents the full capability of AI」。在另一端，agent 集群「possibly the ultimate form factor of what agents will do inside of our workflows」，适用于任何拥有可并行执行的高价值任务的领域，包括数学、网络安全、生物、材料科学、软件工程与金融。他提醒，真正的难点在软件与 AI 研究之外的「a huge amount of change management」：公司需要升级工作流、把数据集成并迁移到现代平台，还要走完合规、治理与安全框架，而这正是「the applied layer of AI will really shine in the enterprise」的地方。（[Aaron Levie](https://x.com/levie/status/2109467575025578330)）

**3. OpenAI 拉长上下文窗口，并取消长上下文的额外费用。** 在 OpenAI 负责 Codex 与 ChatGPT 的 Thibault Sottiaux 在「Day 7」宣布，通过 Codex 与 Work 使用时，GPT-6.1 Sol 的默认上下文长度已提升到 500k，高于此前的 272k，增幅约 80%，同时仍可选用最高 1M。他表示新的默认值「helps reduce occurrence of compactions」，并能支撑那些「that require keeping a lot of context and nuance over periods of time」的任务。他还表示，OpenAI「not charging long context fees for GPT-6.1 Sol when drawing usage from the subscription」，并坦言一项关于「用 2X 用量换取恢复 5 小时限制」的投票结果，没有像他预期的那样明显偏向支持。（[Thibault Sottiaux](https://x.com/thsottiaux/status/2109430343346581527)、[Thibault Sottiaux](https://x.com/thsottiaux/status/2109430894604026039)、[Thibault Sottiaux](https://x.com/thsottiaux/status/2109439315570999598)）

**4. 信任与验证正在成为与 agent 协作的核心手艺。** Peter Yang 转述了 Micky（Rasmic）的一句坦率表态。Micky 教过 10 万多人用 AI 做东西，他说：「I'm not at a point where I trust the agent, especially with stuff that people are using.」Micky 的做法是把人工审查当作「the final step」：等工作完成、agent 已经给出证据之后再进行，靠 evidence-driven testing、前后对比以及「greploop」来建立信任，让 agent 能拿出「evidence: This is the work that's done, and this is why it's good」。Y Combinator 总裁兼 CEO Garry Tan 把这个直觉推得更远：「replacing LLM calls with deterministic code is a no brainer and also results in better code that better matches what users want.」FirstMark Capital 的 VC Matt Turck 则把这轮变化放进一条很长的技术岗位谱系里，从打孔机操作员、DevOps 分析师，一直到今天他所说的「agent managers and harness engineers」。（[Peter Yang](https://x.com/petergyang/status/2109433961223180517)、[Garry Tan](https://x.com/garrytan/status/2109410082769482174)、[Matt Turck](https://x.com/mattturck/status/2109345191010472332)）

**5. 不要接受一个不透明的智能。** 在 Anthropic 负责 Claude Code 的 Thariq 站在 Terrence Tao 一边，认为「we shouldn't settle for a super intelligence that is opaque」。他的理由是「a key signal of intelligence is communication」，因此建造者「should strive to make products and models that build understanding with humans instead of disintermediating them」。同一时间还有一些更小的产品信号：Zara Zhang 说「the only place where I use Gemini these days is in Chrome」；Every CEO Dan Shipper 做了一个「a feed that automatically tracks the books im reading (and have read going back to 2012!)」。（[Thariq](https://x.com/trq212/status/2109329495341867391)、[Zara Zhang](https://x.com/zarazhangrui/status/2109483079106740500)、[Dan Shipper](https://x.com/danshipper/status/2109331798282915907)）

**6. Fractile 的 Walter Goodwin：下一块芯片前沿是速度，而不只是 FLOPs。** Fractile 创始人兼 CEO Walter Goodwin 认为，过去二十年行业把 FLOPs 提升了「like a million fold in the last twenty years」，而内存带宽只增长了约 40 倍，这种失衡如今正卡住前沿推理。他这家约 150 人的全栈芯片公司最早做基于 SRAM 的设计，后来转向极高带宽的 DRAM，目标是在明年下半年量产的平台上，把 DRAM 的容量与低成本同接近 SRAM 的速度结合起来。他说回报不是「a snappier chatbot」，而是让长时间运行的 agent 变得快得多，并称每颗芯片的带宽约为基于 HBM 芯片的 25 倍。他还认为，前沿实验室无法放心地全面押注自研芯片，因为竞争对手的效率突破可能只能跑在对手自己的芯片上，这也是他相信第三方前沿芯片厂商会长期存在的原因。（[No Priors](https://www.youtube.com/watch?v=OpeCP4wCxkA)）

## X / Twitter

### Andrej Karpathy

Andrej Karpathy 重新翻出了 4 月的一条帖子，因为「this gap in shared understanding of LLM capability is *widening*」，如今他把它形容为「a sharp funnel」，而不再是「two groups of people speaking past each other」。他勾画了四个层级：约 60 亿人（约占全球人口 75%）「have barely come in contact with LLMs at all」；10 到 20 亿人（约 20%）偶尔使用免费版聊天机器人，看到的多是「derpy chatbots」；约 2000 万人（0.2%）在数学与代码场景里专业地使用前沿模型，那里「large, complex projects that used to take them weeks/months can now be completed by agents with a prompt」；而约 5000 人（0.00006%）能在内部接触到前沿系统，那里「swarms of thousands of agents collaborating over weeks」，挖掘 zero day、进行网络攻防、发现新科学、推动数学前沿，同时「human review and comprehension are starting to fall behind」。他把这条漏斗归因于三股力量：影响会随野心与时间跨度放大；系统高度不平整，能力在「domains that are digital, verifiable and economically valuable」达到峰值，因为它来自「reinforcement learning on verifiable rewards」；以及访问权限分层。他说：「It is all happening at the same time.」

- [Andrej Karpathy: the LLM capability funnel](https://x.com/karpathy/status/2109361546505966046)

### Thibault Sottiaux

在 OpenAI 负责 Codex 与 ChatGPT 的 Thibault Sottiaux 在「Day 7」宣布，通过 Codex 与 Work 使用时，GPT-6.1 Sol 的默认上下文长度已提升到 500k，高于此前的 272k，增幅约 80%，同时仍可选最高 1M。他说新的默认值「helps reduce occurrence of compactions」，并能支撑那些需要长期保持大量上下文与细节的任务。他还表示，OpenAI「not charging long context fees for GPT-6.1 Sol when drawing usage from the subscription」，并坦言一项关于「用 2X 用量换取恢复 5 小时限制」的投票结果，没有像他预期的那样明显偏向支持。

- [Thibault Sottiaux: 500k default context for GPT-6.1 Sol](https://x.com/thsottiaux/status/2109430343346581527)
- [Thibault Sottiaux: no long context fees from subscription usage](https://x.com/thsottiaux/status/2109430894604026039)
- [Thibault Sottiaux: poll on 2X usage versus 5h limits](https://x.com/thsottiaux/status/2109439315570999598)

### Peter Yang

Peter Yang 从事实用的 AI 教程与访谈写作。他转述了 Micky（Rasmic）的话。Micky 教过 10 万多人用 AI 做东西，他说：「I'm not at a point where I trust the agent, especially with stuff that people are using.」Micky 把人工审查描述为「the final step」：等工作完成、agent 已经给出证据之后再进行，靠 evidence-driven testing、前后对比以及「greploop」来建立信任：「The agent presents evidence: This is the work that's done, and this is why it's good.」Peter 还提到自己「building a @modretro game with my daughter and Codex」。

- [Peter Yang: Micky on trusting agents and evidence-driven testing](https://x.com/petergyang/status/2109433961223180517)
- [Peter Yang: building a ModRetro game with his daughter and Codex](https://x.com/petergyang/status/2109434554729824397)

### Thariq

在 Anthropic 负责 Claude Code 的 Thariq（此前经历包括 YC W20、SPC 与 Media Lab）认为，Terrence Tao 的说法「directionally correct」，也就是「we shouldn't settle for a super intelligence that is opaque」。他写道「a key signal of intelligence is communication」，建造者「should strive to make products and models that build understanding with humans instead of disintermediating them」。

- [Thariq: don't settle for an opaque superintelligence](https://x.com/trq212/status/2109329495341867391)

### Aaron Levie

Box CEO Aaron Levie 引用 Karpathy 的漏斗，说明「how early we actually are in AI diffusion right now」：绝大多数人把 AI 当作一种近似「next-generation search」的聊天机器人，而这「dramatically underrepresents the full capability of AI」。他把 agent 集群称为「possibly the ultimate form factor of what agents will do inside of our workflows」，点出数学、网络安全、生物、材料科学、软件工程、金融，以及任何拥有可并行执行的高价值任务的领域，并指出「less than a fraction of a fraction of the population uses AI in this way right now」。他把这道差距归因于模型能力与用户所在领域的匹配度、这类工作流的成本、可用的 harness，以及前沿模型的获取门槛，并提醒前方有「a huge amount of change management」：公司要升级工作流、集成并迁移数据、走完合规、治理与安全框架，而这正是「the applied layer of AI will really shine in the enterprise」的地方。

- [Aaron Levie: the funnel shows how early AI diffusion still is](https://x.com/levie/status/2109467575025578330)

### Garry Tan

Y Combinator 总裁兼 CEO Garry Tan 认为，「replacing LLM calls with deterministic code is a no brainer and also results in better code that better matches what users want」。他也呼应了 Karpathy 提到的「5000」这一层，呼吁大家「be part of the 5000 today」，并预测「the price will come down and more people will see this」，称其为「the greatest alpha fountain in the history of man」。

- [Garry Tan: replace LLM calls with deterministic code](https://x.com/garrytan/status/2109410082769482174)
- [Garry Tan: be part of the 5000](https://x.com/garrytan/status/2109418482953814026)

### Matt Turck

FirstMark Capital 的 VC、MAD Podcast 主持人、Data Driven NYC 组织者 Matt Turck 梳理了技术岗位的谱系：「People were punch card operators then they were Lotus Notes admins, then they were Flash developers and Dreamweaver webmasters, then they were DevOps and Tableau analysts, and now they're becoming agent managers and harness engineers.」他对这轮变化的判断是：「It will work out just fine.」

- [Matt Turck: from punch card operators to harness engineers](https://x.com/mattturck/status/2109345191010472332)

### Zara Zhang

建造者与创作者 Zara Zhang 观察道：「the only place where I use Gemini these days is in Chrome」，这是一个关于前沿模型真正在使用场景里取胜的小信号。

- [Zara Zhang: Gemini in Chrome](https://x.com/zarazhangrui/status/2109483079106740500)

### Dan Shipper

Every CEO Dan Shipper 做了一个「a feed that automatically tracks the books im reading (and have read going back to 2012!)」，并提出了一个想法：「maybe we should have a feed for everybody @every could be fun to see」。

- [Dan Shipper: a feed that tracks his reading](https://x.com/danshipper/status/2109331798282915907)

## Podcast

### No Priors: Frontier Chips for Frontier AI Labs, with Walter Goodwin, Founder/CEO of Fractile

核心要点：前沿 AI 能力的下一次跃升，与其说来自更多 FLOPs，不如说来自内存带宽；而一家能在结构上撬出三到六个月速度优势的芯片公司，就能赢下这些部署。

Walter Goodwin 是 Fractile 的创始人兼 CEO。这家全栈 AI 芯片公司创立于 2022 年夏天，如今约 150 人，为世界上最大的模型打造速度极快的推理芯片。他从一开始就把赌注押在速度与推理上，而当时行业里很多人仍把推理视作附属品，市场还需要被教育：为什么部署的边际成本如此重要。架构也随之演进：早期基于 SRAM 的设计带来了极高的片内带宽，直到不断增长的上下文长度暴露出它的局限。此后 Fractile 与内存厂商合作，开展了一系列秘密项目，设法为容量更大的 DRAM 提供极高带宽，目标是在明年下半年量产的平台上，把 DRAM 的容量与低成本同片内存储设计的速度结合起来。

核心论点是：快速推理并不意味着一个更顺滑的聊天机器人。Goodwin 认为，速度才能把长时间运行的 agent 变成一种能力上完全不同的形态，而今天的快速推理芯片与这一需求并不匹配：它们拥有极高带宽的内存，容量却非常有限，遇到长上下文注意力时仍要切回 GPU。他用直白的数字描述机会：Fractile 的目标是每颗芯片的带宽约为基于 HBM 芯片的 25 倍，而过去二十年行业把 FLOPs 提升了「like a million fold」，内存带宽只增长了约 40 倍。正是这道差距，让本应在同等智能下更省算力的稀疏 mixture-of-experts 模型，最终卡在带宽瓶颈上，只能以很低的 FLOPs 利用率来服务。

Goodwin 说，把前端设计、物理设计、后端实现与先进封装都握在自己手里，能换来一个敏捷的闭环；但物理规律依然决定节奏：三到五个月的晶圆厂周期，以及三到五年的摊销窗口，意味着没有人能每隔几周就推出一款全新芯片。真正的价值在于压缩从观察到赌注以规模落地之间的时间差。他说：「It's the equivalent of the frontier model for the chip space: if you can just find a way to structurally carve out a three to six month advantage, you will be winning all of those deployments.」

他预计前沿实验室会继续在 NVIDIA、AMD 与自研方案之间分散下注，还开玩笑说，第一方芯片有一部分存在的意义就是压低付给 NVIDIA 的价格。他认为，这些实验室无法理性地全面押注自研芯片，因为竞争对手的计算突破可能只能跑在对手自己的芯片上，这也是他相信第三方前沿芯片厂商会长期存在的原因。

Source: https://www.youtube.com/watch?v=OpeCP4wCxkA

## Blog

本次经过验证的博客 feed 中没有任何符合收录条件的新内容。没有任何一篇博客通过本摘要所采用的 schema 与 24 小时新鲜度校验。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
