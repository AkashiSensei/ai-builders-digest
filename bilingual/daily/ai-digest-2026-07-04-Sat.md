[English](../../en/daily/ai-digest-2026-07-04-Sat.md) | [中文](../../zh/daily/ai-digest-2026-07-04-Sat.md) | [Bilingual](./ai-digest-2026-07-04-Sat.md)

---

# AI Builders Digest

## Reader's Briefing / 导读
1. Claude's product surface is expanding from code into organizational work. Boris Cherny called Claude Code Artifacts life-changing, Cat Wu described Claude Tag spreading across engineering, product, data, sales, and marketing inside Anthropic, and Claude positioned Fable 5 as available in Claude Tag.
Claude 的产品边界正在从代码扩展到组织级工作。Boris Cherny 说 Claude Code Artifacts 改变了他的工作方式，Cat Wu 描述 Claude Tag 已经在 Anthropic 内部覆盖工程、产品、数据、销售和营销，Claude 官方也把 Fable 5 放进了 Claude Tag。

2. Fable remains the high-leverage model story. Peter Yang is using cheaper models for context, Fable for planning, and other models for execution, while Thariq clarified that Fable will leave subscriptions after July 7 but Anthropic wants to restore it when capacity allows.
Fable 仍然是今天最值得关注的模型线索。Peter Yang 的用法是用便宜模型准备上下文、用 Fable 做规划、再交给其他模型执行；Thariq 则澄清 Fable 会在 7 月 7 日后暂时退出订阅套餐，但 Anthropic 希望在容量允许后恢复。

3. AI infrastructure is becoming operational plumbing, not just model choice. Guillermo Rauch framed Vercel AI Gateway as a token delivery network with live rewrite rules for retired models, plus private service bindings for backend connectivity.
AI 基础设施正在变成生产环境的管道层，而不只是模型选择。Guillermo Rauch 把 Vercel AI Gateway 称为 token delivery network，并展示了针对退役模型的实时 rewrite rules，以及后端服务之间的 private bindings。

4. Enterprise AI is shifting toward deployment work. Aaron Levie argued that agents cannot simply be dropped into fragmented business workflows, which is why data cleanup, evals, change management, and FDE-style implementation are becoming central.
企业 AI 的重点正在转向真正落地。Aaron Levie 认为 agent 不能直接塞进碎片化业务流程里，数据清理、evals、变更管理和 FDE 式实施会成为核心工作。

5. The AI buildout is pulling energy, chips, and physical infrastructure into the digest. No Priors' Valar Atomics episode ties AI compute demand to nuclear hardware iteration, including an NVIDIA Blackwell system powered directly by a reactor.
AI 建设正在把能源、芯片和实体基础设施拉进同一张图里。No Priors 的 Valar Atomics 访谈把 AI compute 需求和核能硬件迭代连在一起，包括一个由核反应堆直接供电的 NVIDIA Blackwell 系统。

## X / Twitter
### Swyx
Swyx's AI Engineer signal was less about raw conference volume and more about what the community is normalizing. He pointed people to the AIE Expo and a live Latent Space session with Etched, then said the biggest applause line in the keynotes came from normalizing men talking about feelings and mental health in hypergrowth. That is a useful reminder that the AI builder scene is now discussing operating culture alongside models and tools.

https://x.com/swyx/status/2072760421627597198
https://x.com/swyx/status/2072754722059239471

### Swyx
Swyx 今天的 AI Engineer 信号不只是会议热闹，而是社区正在把什么议题正常化。他提醒大家去 AIE Expo 和 Latent Space 与 Etched 的现场播客，又说今年 keynote 里掌声最大的点，是把男性在高增长环境下谈感受和心理健康这件事正常化。对 AI builder 来说，这是一个有用信号：这个圈子已经不只讨论模型和工具，也在讨论组织文化。

https://x.com/swyx/status/2072760421627597198
https://x.com/swyx/status/2072754722059239471

### Claude Code's Boris Cherny
Claude Code's Boris Cherny said Artifacts in Claude Code have been "life changing" and highlighted their expansion to Pro and Max. The product signal is that Anthropic is moving a once power-user workflow into broader paid access, making code-adjacent creation more available to non-Enterprise users.

https://x.com/bcherny/status/2072777472970563995

### Claude Code 的 Boris Cherny
Claude Code 的 Boris Cherny 说 Claude Code 里的 Artifacts 改变了他的工作方式，并强调它们正在扩展到 Pro 和 Max。产品信号是，Anthropic 正在把原本偏 power user 的工作流开放给更广泛的付费用户，让代码周边的创作能力不再只属于 Enterprise 场景。

https://x.com/bcherny/status/2072777472970563995

### OpenAI's Thibault Sottiaux
OpenAI's Thibault Sottiaux told builders to stash their hardest prompts for GPT-5.6 Sol Ultra. The captured post is short and does not include product details, but the practical takeaway is clear: OpenAI builders are priming people to test the next model on genuinely difficult tasks rather than polished demos.

https://x.com/thsottiaux/status/2072607914217320644

### OpenAI 的 Thibault Sottiaux
OpenAI 的 Thibault Sottiaux 让 builder 把最难的 prompts 存起来，留给 GPT-5.6 Sol Ultra。捕获到的帖子很短，没有产品细节，但实际信号很明确：OpenAI 的 builder 正在鼓励大家用真正困难的任务测试下一代模型，而不是只跑漂亮 demo。

https://x.com/thsottiaux/status/2072607914217320644

### Peter Yang
Peter Yang shared a concrete Fable workflow: prepare context with cheaper models, use Fable for planning, then execute with another model while keeping Fable on lower effort and watching its work. He also used Codex with his daughter to turn a hand-drawn dragon into generated sticker poses, a small but vivid example of AI as a family-friendly creative production tool.

https://x.com/petergyang/status/2072842766053499353
https://x.com/petergyang/status/2072756657856422379

### Peter Yang
Peter Yang 分享了一个具体的 Fable 工作流：先用便宜模型准备上下文，再用 Fable 做规划，最后交给另一个模型执行，同时把 Fable 设在较低 effort 并观察它的动作。他还和女儿一起用 Codex 把手绘 dragon 变成多种贴纸姿势，这是 AI 作为家庭创作生产工具的一个小而具体的例子。

https://x.com/petergyang/status/2072842766053499353
https://x.com/petergyang/status/2072756657856422379

### Linear Head of Product Nan Yu
Linear head of product Nan Yu kept the signal terse: if multiple entities need to coordinate work, the missing primitive is a system that coordinates that work. It reads like a Linear-flavored answer to the agent orchestration conversation: before adding more agents, get the coordination substrate right.

https://x.com/thenanyu/status/2072714076614950961

### Linear 产品负责人 Nan Yu
Linear 产品负责人 Nan Yu 的信号很短：如果多个实体需要协调工作，缺的就是一个协调工作的系统。这很像 Linear 对 agent orchestration 讨论的回答：在增加更多 agent 之前，先把协调底座做好。

https://x.com/thenanyu/status/2072714076614950961

### Anthropic's Cat Wu
Anthropic's Cat Wu framed Claude Tag as an internal operating layer, not just a coding feature. She said Anthropic's internal version lands 65% of product PRs and is already used across engineering, product, data, sales, and marketing, with security designed in from day one. Claude Enterprise orgs can get $25k in credits and Claude Team orgs $2.5k in credits for Claude Tag through September 1.

https://x.com/_catwu/status/2072731500928508331
https://x.com/_catwu/status/2072743070316257662

### Anthropic 的 Cat Wu
Anthropic 的 Cat Wu 把 Claude Tag 定位成内部 operating layer，而不只是编码功能。她说 Anthropic 内部版本已经能落地 65% 的 product PRs，并被工程、产品、数据、销售和营销使用，安全从第一天就被设计进来。Claude Enterprise 组织可获得 $25k credits，Claude Team 组织可获得 $2.5k credits，用于在 9 月 1 日前使用 Claude Tag。

https://x.com/_catwu/status/2072731500928508331
https://x.com/_catwu/status/2072743070316257662

### Anthropic's Thariq
Anthropic's Thariq clarified Fable availability. Fable will come off subscription plans after July 7, but Anthropic aims to restore it as a standard subscription feature as soon as capacity allows. The operational lesson is familiar for frontier models: access is increasingly a capacity-management question, not just a product toggle.

https://x.com/trq212/status/2072814903170408784

### Anthropic 的 Thariq
Anthropic 的 Thariq 澄清了 Fable 的可用性。Fable 会在 7 月 7 日后从订阅套餐中移除，但 Anthropic 希望在容量允许后尽快恢复为订阅的标准能力。这里的运营教训很熟悉：frontier model 的访问越来越像容量管理问题，而不只是产品开关。

https://x.com/trq212/status/2072814903170408784

### Vercel CEO Guillermo Rauch
Vercel CEO Guillermo Rauch introduced AI Gateway Rules as live traffic control for model routes. His example rewrites requests from Anthropic's Claude Fable 5 to Claude Opus 5, which matters because models retire or capacity shifts while production apps still depend on them. He also highlighted private connectivity through Vercel service bindings, a one-line config pattern for connecting backends across Node, Python, Dockerfile deployments, and more.

https://x.com/rauchg/status/2072741369848746315
https://x.com/rauchg/status/2072715658157027375

### Vercel CEO Guillermo Rauch
Vercel CEO Guillermo Rauch 介绍了 AI Gateway Rules，把它作为模型路由的实时流量控制。他的例子是把 Anthropic Claude Fable 5 的请求 rewrite 到 Claude Opus 5，这很重要，因为模型会退役，容量也会变化，但生产应用仍然可能依赖它们。他还展示了通过 Vercel service bindings 做 private connectivity，用一行配置连接 Node、Python、Dockerfile 等后端部署。

https://x.com/rauchg/status/2072741369848746315
https://x.com/rauchg/status/2072715658157027375

### Box CEO Aaron Levie
Box CEO Aaron Levie argued that enterprise agents require real implementation work before they can produce reliable outcomes. Most enterprise workflows have fragmented data, legacy systems, undocumented institutional knowledge, and process constraints, so deploying agents at scale means cleaning data, modernizing IT, defining evals, managing change, designing human-in-the-loop steps, and rethinking company IP. That is why he sees FDE work and deploycos becoming central to applied AI.

https://x.com/levie/status/2072875685811716182

### Box CEO Aaron Levie
Box CEO Aaron Levie 认为，企业 agent 想可靠地产生结果，前面必须有大量实施工作。大多数企业流程都有碎片化数据、legacy systems、未文档化的组织知识和流程约束，所以规模化部署 agent 意味着清理数据、现代化 IT、定义 evals、推动变更管理、设计 human-in-the-loop 环节，并重新思考公司的 IP。这就是为什么他认为 FDE 工作和 deploycos 会成为 applied AI 的核心。

https://x.com/levie/status/2072875685811716182

### YC CEO Garry Tan
YC CEO Garry Tan's AI-relevant builder note was short but pointed: "It's time to build." The feed also captured non-AI political commentary, so the only safe AI takeaway is the continued YC framing that this market rewards people who move from discourse into construction.

https://x.com/garrytan/status/2072846648854954240

### YC CEO Garry Tan
YC CEO Garry Tan 今天和 AI 相关的 builder 信号很短："It's time to build." feed 里还捕获了非 AI 政治评论，所以安全的 AI 结论只有一个：YC 仍在强调，这个市场奖励从讨论转向建设的人。

https://x.com/garrytan/status/2072846648854954240

### FirstMark's Matt Turck
FirstMark's Matt Turck pointed to his conversation with NVIDIA's Bryan Catanzaro on Nemotron and NVIDIA's AI lab. The agenda spans open models versus frontier labs, why enterprises choose open models, the origins of Megatron, Nemotron Nano/Super/Ultra, hybrid Mamba-Transformer architecture, mixture of experts, one-million-token context, multi-token prediction, multi-teacher distillation, and the argument that open AI can be safer than closed AI.

https://x.com/mattturck/status/2072723410975629364
https://x.com/mattturck/status/2072723415870411232

### FirstMark 的 Matt Turck
FirstMark 的 Matt Turck 指向了他和 NVIDIA Bryan Catanzaro 关于 Nemotron 与 NVIDIA AI lab 的访谈。议程包括 open models 与 frontier labs、企业为什么选择 open models、Megatron 的起源、Nemotron Nano/Super/Ultra、hybrid Mamba-Transformer 架构、mixture of experts、百万 token context、multi-token prediction、multi-teacher distillation，以及 open AI 可能比 closed AI 更安全的观点。

https://x.com/mattturck/status/2072723410975629364
https://x.com/mattturck/status/2072723415870411232

### Zara Zhang
Zara Zhang argued that "AI slop" is not primarily a style problem but a substance problem. She also said one of the best things people can do for agents is to talk in groups rather than DMs, making the interaction history observable and reusable. A third post noted a recent graduate using AI to learn from lecture decks instead of attending lectures, because the AI often taught better than the professor.

https://x.com/zarazhangrui/status/2072943922385715262
https://x.com/zarazhangrui/status/2072726336158998760
https://x.com/zarazhangrui/status/2072729444943577601

### Zara Zhang
Zara Zhang 认为，"AI slop" 的根源不是风格差，而是没有内容。她还说，对 agents 最有帮助的事情之一，是在群里说话而不是 DM，因为这样交互历史可见、可复用。另一条帖子提到，一位刚毕业的大学生会把课件喂给 AI，让 AI 教他，而不是去上课，因为 AI 经常讲得比教授更好。

https://x.com/zarazhangrui/status/2072943922385715262
https://x.com/zarazhangrui/status/2072726336158998760
https://x.com/zarazhangrui/status/2072729444943577601

### FPV Ventures Partner Nikunj Kothari
FPV Ventures partner Nikunj Kothari called the current moment "AGI summer" and pushed back on tourists who judge San Francisco after a few days. His point is that the AI boom can look like 996 culture from the outside, but the city still rewards people who spend real time there and connect others to opportunity.

https://x.com/nikunj/status/2072780155924480074
https://x.com/nikunj/status/2072684481824309411

### FPV Ventures Partner Nikunj Kothari
FPV Ventures partner Nikunj Kothari 把当前时刻称为 "AGI summer"，并反对那些只在 San Francisco 待几天就下判断的游客视角。他的意思是，AI boom 从外面看可能像 996 文化，但这座城市仍然奖励真正花时间在这里、并主动把人和机会连接起来的人。

https://x.com/nikunj/status/2072780155924480074
https://x.com/nikunj/status/2072684481824309411

### Every CEO Dan Shipper
Every CEO Dan Shipper said Fable can work for hours and return with only a two-paragraph explanation of what it did. His conclusion is practical: as models take longer autonomous runs, users need better ways for AI systems to tell the story of their work.

https://x.com/danshipper/status/2072805884376301737

### Every CEO Dan Shipper
Every CEO Dan Shipper 说，Fable 可以工作几个小时，最后只返回两段话解释它做了什么。他的结论很实际：当模型开始进行更长时间的自主运行，用户需要 AI 系统更好地讲清楚自己工作的过程。

https://x.com/danshipper/status/2072805884376301737

### Claude
Claude announced a conversation with Boris Cherny and Cat Wu on the path from Claude Code to Claude Tag, how the tool spread beyond engineering inside Anthropic, and the fact that Claude Fable 5 is now available in Claude Tag. Claude also announced Built with Claude: Life Sciences, a global virtual hackathon with Gladstone Institutes running July 7-13 and offering a $100k credit prize pool.

https://x.com/claudeai/status/2072725610061803522
https://x.com/claudeai/status/2072681853971001849
https://x.com/claudeai/status/2072681856730792282

### Claude
Claude 宣布了一场 Boris Cherny 和 Cat Wu 的对话，主题是从 Claude Code 到 Claude Tag 的路径、这个工具如何在 Anthropic 内部扩展到工程之外，以及 Claude Fable 5 现在已进入 Claude Tag。Claude 还宣布 Built with Claude: Life Sciences，这是和 Gladstone Institutes 合作的全球虚拟 hackathon，将在 7 月 7 日至 13 日举行，奖金池为 $100k credits。

https://x.com/claudeai/status/2072725610061803522
https://x.com/claudeai/status/2072681853971001849
https://x.com/claudeai/status/2072681856730792282

## Podcast
### No Priors: How Nuclear Will Unlock Energy Abundance with Valar Atomics Founder Isaiah Taylor
The Takeaway: Valar Atomics is treating nuclear like a hardware startup: build, test, turn reactors on, and use real operating data instead of waiting for a perfect paper reactor.

Isaiah Taylor, founder and CEO of Valar Atomics, argues that nuclear power has not had its Ford or Tesla moment because the industry became too centered on modeling, simulation, and slow commercial licensing. Valar's bet is that the United States is now better at advanced manufacturing than massive civil infrastructure, so reactors should be more manufactured than constructed. The company turned on a 100-kilowatt reactor under a Department of Energy testing pathway and says that pathway breaks the old chicken-and-egg problem: you need data for regulators, but you need a running plant to get data.

The AI relevance is explicit. Taylor says energy demand is ultimately price-driven, and cheap energy creates its own demand. Valar connected an NVIDIA Blackwell system directly to its reactor and hosted a website from nuclear power, down to showing how many uranium atoms were split to serve a page. His more important claim is that compute buyers are underestimating what hardware iteration can do over the next five years, because most nuclear startups still look like paper and simulation companies.

The sharpest operating lesson is verticalization. Valar built around bottlenecks rather than waiting for vendors, including custom concrete and reactor protection electronics. Taylor's line captures the whole philosophy: "Companies are what they do." For AI infrastructure, that means the energy stack may start to look more like SpaceX-style iteration than traditional utility procurement.

https://www.youtube.com/watch?v=5Xvbq_zvOQ4

### No Priors: How Nuclear Will Unlock Energy Abundance with Valar Atomics Founder Isaiah Taylor
核心 takeaway：Valar Atomics 正在把核能当作硬件创业公司来做：先构建、测试、点火反应堆，用真实运行数据推进，而不是等待一个完美的纸面反应堆。

Valar Atomics 创始人兼 CEO Isaiah Taylor 认为，核能一直没有迎来 Ford 或 Tesla 时刻，是因为行业太依赖 modeling、simulation 和缓慢的商业许可流程。Valar 的判断是，美国现在更擅长 advanced manufacturing，而不是巨型 civil infrastructure，所以反应堆应该更像制造品，而不是大型土建项目。公司在 Department of Energy 的测试路径下启动了一个 100 kilowatt 反应堆，并认为这条路径打破了旧的 chicken-and-egg：监管需要数据，但数据必须来自真正运行的电站。

这和 AI 的关系非常直接。Taylor 说，能源需求本质上由价格决定，便宜能源会创造自己的需求。Valar 把一套 NVIDIA Blackwell 系统直接连接到反应堆上，并用核能托管网站，甚至展示每次加载页面裂变了多少 uranium atoms。更重要的判断是，他认为 compute buyers 低估了未来五年硬件迭代能带来的变化，因为大多数核能创业公司仍然更像纸面和模拟公司。

最锋利的运营经验是 verticalization。Valar 会围绕瓶颈自己构建能力，而不是等供应商，包括 custom concrete 和 reactor protection electronics。Taylor 的一句话概括了整套哲学："Companies are what they do." 对 AI infrastructure 来说，这意味着能源 stack 可能会越来越像 SpaceX 式迭代，而不是传统 utility procurement。

https://www.youtube.com/watch?v=5Xvbq_zvOQ4

## Blog
No new blog posts were present in the feed.
feed 中没有新的 blog posts。
