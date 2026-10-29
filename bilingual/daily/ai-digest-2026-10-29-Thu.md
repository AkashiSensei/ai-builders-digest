[English](../../en/daily/ai-digest-2026-10-29-Thu.md) | [中文](../../zh/daily/ai-digest-2026-10-29-Thu.md) | [Bilingual](./ai-digest-2026-10-29-Thu.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

The frontier race is no longer a single leaderboard story. Google VP Josh Woodward says Gemini 4 Carbon is rolling out to cyber defenders first, while Swyx points to Gemini sitting at No. 1 on AAv5 as reason to reopen Antigravity. Replit CEO Amjad Masad highlights another signal: ViBench 2.0, a prompt-to-app benchmark, has GPT 6.1 Sol in the lead. [Source](https://x.com/joshwoodward/status/2115495943948902517) [Source](https://x.com/swyx/status/2115624308567658713) [Source](https://x.com/amasad/status/2115565072734888447)

前沿模型的竞争已经不能只用一张榜单来理解。Google 副总裁 Josh Woodward 表示，Gemini 4 Carbon 将先向网络安全防御者开放，再扩大范围；Swyx 则提到 Gemini 在 AAv5 上排名第一，这让他重新打开 Antigravity 做早期评测。Replit CEO Amjad Masad 给出另一个信号：在 prompt-to-app 基准 ViBench 2.0 上，GPT 6.1 Sol 拿到第一。[来源](https://x.com/joshwoodward/status/2115495943948902517) [来源](https://x.com/swyx/status/2115624308567658713) [来源](https://x.com/amasad/status/2115565072734888447)

Agent infrastructure is being sized for a much larger workload. Box CEO Aaron Levie predicts agents will consume 1,000X more tokens than people do today because they will run in workflows, process data, build software and secure enterprises. He argues that scale requires both stronger closed models and more capable, secure and efficient open-weight models. Vercel CEO Guillermo Rauch adds a routing layer: model aliases that work like DNS, plus a Vercel AI Gateway partnership with Particle for serving models and inference. [Source](https://x.com/levie/status/2115516370695987435) [Source](https://x.com/rauchg/status/2115573969369845855) [Source](https://x.com/rauchg/status/2115566139447382115)

Agent 基础设施正按远大于今天的负载来设计。Box CEO Aaron Levie 预测，agent 消耗的 token 将是今天人类消耗量的 1,000 倍，因为它们会进入工作流、处理数据、构建软件并保护企业。他认为，要支撑这种规模，既需要继续推进闭源模型，也需要让开源权重模型更强、更安全、更适合大规模负载。Vercel CEO Guillermo Rauch 补充了一层路由能力：像 DNS 一样指向模型的 alias，以及 Vercel AI Gateway 与 Particle 合作提供模型和推理服务。[来源](https://x.com/levie/status/2115516370695987435) [来源](https://x.com/rauchg/status/2115573969369845855) [来源](https://x.com/rauchg/status/2115566139447382115)

Real deployments are starting to produce concrete operating data. Boris Cherny of Anthropic says Utah gave Claude Code to 34 developers across 10 state agencies; 80% had a working environment within 30 minutes, and 71% reported saving more than 20 hours by the end of a four-week pilot. On the delivery side, Guillermo Rauch describes agentic CI as the future of shipping software, combining stable infrastructure, Turborepo caching and CLI controls that let agents inspect, abort, trigger and replay CI. Peter Steinberger says OpenClaw's web UI now works offline with compression and reconnect logic, and argues agents can make some bugs easier to spot. [Source](https://x.com/bcherny/status/2115491259381072269) [Source](https://x.com/rauchg/status/2115539426684408300) [Source](https://x.com/steipete/status/2115397368229060636) [Source](https://x.com/steipete/status/2115380217938158049)

实际部署开始给出具体的运营数据。Anthropic 的 Boris Cherny 表示，犹他州把 Claude Code 交给 10 个州级机构的 34 名开发者使用；在为期四周的试点中，80% 的人在 30 分钟内搭好可用环境，71% 的人表示节省了 20 小时以上。交付侧，Guillermo Rauch 把 agentic CI 视为软件发布的未来，强调稳定的基础设施、Turborepo 缓存，以及让 agent 可以检查、中止、触发和重放 CI 的 CLI 控制。Peter Steinberger 说 OpenClaw 的 Web UI 现在可以离线工作，并加入 websocket 压缩和重连逻辑；他还认为，有些 bug 对 agent 来说比对人更容易发现。[来源](https://x.com/bcherny/status/2115491259381072269) [来源](https://x.com/rauchg/status/2115539426684408300) [来源](https://x.com/steipete/status/2115397368229060636) [来源](https://x.com/steipete/status/2115380217938158049)

World models still have a way to go, but the implications are already visible. Peter Yang says they are in a GPT-3.5-like phase and expects movie effects and game creation to change when they reach a GPT-5 or GPT-6 level. Thariq sees the anxiety cutting both ways: technical people fear their skills are becoming useless, while non-technical people wish they were more technical so they could use agents, including for creative work such as fleshing out animation and character ideas. [Source](https://x.com/petergyang/status/2115556794076741647) [Source](https://x.com/trq212/status/2115641110710419752) [Source](https://x.com/trq212/status/2115544056038350960)

世界模型还有很长的路要走，但影响已经显现。Peter Yang 认为它们仍处在类似 GPT-3.5 的阶段，一旦达到 GPT-5 或 GPT-6 的水平，电影特效和游戏创作都会发生巨大变化。Thariq 看到焦虑是双向的：技术人员担心自己的技能会失去价值，而非技术人员则希望自己更懂技术，好更充分地使用 agent，包括把动画和角色构思交给 agent 展开。[来源](https://x.com/petergyang/status/2115556794076741647) [来源](https://x.com/trq212/status/2115641110710419752) [来源](https://x.com/trq212/status/2115544056038350960)

AI products are moving into specific workflows and personal data. Claude for Legal offers a gallery of ready-made artifacts for contract review, regulatory horizon scans and cite checks that can be extended with documents and connectors. Gemini can connect a Strava account and turn workout logs into a coaching plan. OpenAI's Thibault Sottiaux says the team is working toward combining the best of ChatGPT Chat and Work this year, but the change is not rolling out yet. [Source](https://x.com/claudeai/status/2115467192276025500) [Source](https://x.com/joshwoodward/status/2115580552170627080) [Source](https://x.com/thsottiaux/status/2115588390414581916)

AI 产品正在进入具体工作流和个人数据。Claude for Legal 提供一组现成 artifacts，可用于合同审阅、监管动态扫描、引用核查等工作，用户可以基于内置示例开始，加入自己的文档和连接器，并在企业内分享。Gemini 可以连接 Strava 账号，把多年的训练记录转成个性化教练计划。OpenAI 的 Thibault Sottiaux 表示，团队计划在今年某个时候把 ChatGPT 的 Chat 与 Work 能力更好地结合，但目前还没有上线。[来源](https://x.com/claudeai/status/2115467192276025500) [来源](https://x.com/joshwoodward/status/2115580552170627080) [来源](https://x.com/thsottiaux/status/2115588390414581916)

The design question is whether AI enlarges human agency or simply removes the work. Ryo Lu argues for augmenting human intellect, citing Engelbart, Licklider and Smalltalk's design ideals; tools should help people understand, reshape and question what they are making rather than only produce output. Four-time Emmy award-winning filmmaker and technologist Fred Graver makes a related point about creative work: AI can serve as a virtual writers' room, but it cannot supply the unique perspective that makes the work worth watching. [Source](https://x.com/ryolu_/status/2115683228027912634) [Source](https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL)

真正要回答的设计问题是，AI 是在扩展人的能动性，还是只把工作拿走。Ryo Lu 主张 augmenting human intellect，并引用 Engelbart、Licklider 和 Smalltalk 的设计理念；工具应该帮助人理解、重塑和质疑自己正在做的东西，而不只是产出结果。四次获得 Emmy 奖的影视制作人和技术人 Fred Graver 对创作给出了相近的判断：AI 可以充当虚拟编剧室，但无法提供让作品值得被观看的独特视角。[来源](https://x.com/ryolu_/status/2115683228027912634) [来源](https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL)

## X / Twitter

### Swyx

Swyx says Gemini's No. 1 position on AAv5 prompted him to reopen Antigravity for an early review. He frames a successful Google result as part of a broader comeback with Meta and Grok, and notes that there are roughly twice as many frontier labs as when the AI Engineer stage last heard the model-diversity argument. He calls it a bizarre counterexample to the bitter lesson. [Source](https://x.com/swyx/status/2115624308567658713)

Swyx 表示，Gemini 在 AAv5 上排名第一，让他重新打开 Antigravity 做早期评测。他把 Google 若真能兑现这一结果，视为 Meta、Grok 与 Google 一起回归的信号，并提到当前前沿实验室的数量大约是那位演讲者上次登上 AI Engineer 舞台谈论模型多样性时的两倍。他称这是对 bitter lesson 的一个非常奇怪的例外。[来源](https://x.com/swyx/status/2115624308567658713)

### Josh Woodward

Google VP Josh Woodward says Gemini 4 Carbon follows Gemini 4 Argon and is rolling out to cyber defenders first before wider availability, with strong internal feedback behind it. He also announced a Strava connection for Gemini that turns years of workout logs into a personalized coaching plan. [Source](https://x.com/joshwoodward/status/2115495943948902517) [Source](https://x.com/joshwoodward/status/2115580552170627080)

Google 副总裁 Josh Woodward 表示，Gemini 4 Carbon 紧接 Gemini 4 Argon 推出，将先向网络安全防御者开放，再扩大可用范围，并称内部对这款模型的反馈很好。他还宣布 Gemini 可以连接 Strava，把多年的训练记录转成个性化教练计划。[来源](https://x.com/joshwoodward/status/2115495943948902517) [来源](https://x.com/joshwoodward/status/2115580552170627080)

### Boris Cherny

Boris Cherny of Anthropic says Utah gave Claude Code to 34 developers across 10 state agencies. In the four-week pilot, 80% had a working environment within 30 minutes and 71% reported saving more than 20 hours. [Source](https://x.com/bcherny/status/2115491259381072269)

Anthropic 的 Boris Cherny 表示，犹他州把 Claude Code 交给 10 个州级机构的 34 名开发者使用。在为期四周的试点中，80% 的人在 30 分钟内搭好可用环境，71% 的人表示节省了 20 小时以上。[来源](https://x.com/bcherny/status/2115491259381072269)

### Thibault Sottiaux

OpenAI's Thibault Sottiaux, who works on Codex and ChatGPT, says the team is working toward combining the best of Chat and Work capabilities at some point this year. He says the change is not rolling out yet and that OpenAI will proceed carefully. [Source](https://x.com/thsottiaux/status/2115588390414581916)

OpenAI 的 Thibault Sottiaux 负责 Codex 和 ChatGPT，他表示团队正在努力在今年某个时候把 Chat 与 Work 的最佳能力结合起来。他说这项变化还没有上线，OpenAI 会谨慎推进。[来源](https://x.com/thsottiaux/status/2115588390414581916)

### Peter Yang

Peter Yang argues that world models are still at a GPT-3.5-like stage, but not for long. He expects them to reshape movies, where a director could turn one frame into a full effects-heavy scene, and games, where they can already help with graphics and sound but still lack the core loops and mechanics that make play compelling. [Source](https://x.com/petergyang/status/2115556794076741647)

Peter Yang 认为，世界模型仍处在类似 GPT-3.5 的阶段，但不会停留太久。他预计，当世界模型达到 GPT-5 或 GPT-6 的水平时，电影里的大型特效镜头可能从导演的一帧概念图生成整场戏，游戏创作也会因为画面和声音更容易生成而发生变化；不过他强调，真正让游戏好玩的核心循环、成长系统和机制还没有被解决。[来源](https://x.com/petergyang/status/2115556794076741647)

### Thariq

Thariq describes two opposite anxieties: technical people fear their skills are becoming useless, while non-technical people wish they were more technical so they could use agents better. He also wants to sketch animation and character concepts and let an agent flesh them out, rather than searching for examples, because he says he lacks the language to describe them fully. [Source](https://x.com/trq212/status/2115544056038350960) [Source](https://x.com/trq212/status/2115641110710419752)

Thariq 认为，技术人员的焦虑在于觉得自己的技能正在失去用处，而非技术人员则迫切希望自己更懂技术，以便更好地使用 agent。他同时希望自己能画出动画和角色概念，再让 agent 展开，而不是只能到处找参考，因为他觉得自己还缺少描述这些想法的语言。[来源](https://x.com/trq212/status/2115544056038350960) [来源](https://x.com/trq212/status/2115641110710419752)

### Amjad Masad

Replit CEO Amjad Masad says ViBench 2.0, a prompt-to-app benchmark, has just been released, and GPT 6.1 Sol takes the lead. [Source](https://x.com/amasad/status/2115565072734888447)

Replit CEO Amjad Masad 表示，prompt-to-app 基准 ViBench 2.0 刚刚发布，GPT 6.1 Sol 排名第一。[来源](https://x.com/amasad/status/2115565072734888447)

### Guillermo Rauch

Vercel CEO Guillermo Rauch describes model aliases as DNS for models: an alias resolves to a model and gives teams traffic-steering control, avoiding lock-in to old versions, reducing cost and removing decision paralysis. He also says Vercel is partnering with Particle to serve Particle's models and inference through Vercel AI Gateway. Separately, he presents Vercel CI as a response to the AI coding bottleneck through fast infrastructure, Turborepo caching and agentic CI that can inspect, abort, trigger and replay runs. [Source](https://x.com/rauchg/status/2115573969369845855) [Source](https://x.com/rauchg/status/2115566139447382115) [Source](https://x.com/rauchg/status/2115539426684408300)

Vercel CEO Guillermo Rauch 把模型 alias 描述成模型世界的 DNS：alias 会解析到一个模型，让团队获得流量调度能力，避免卡在旧版本上，降低成本，也减少决策瘫痪。他还表示，Vercel 正与 Particle 合作，通过 Vercel AI Gateway 提供 Particle 的模型和推理服务。另一条帖子里，他把 Vercel CI 视为对 AI 编程瓶颈的回应，路径包括快速稳定的基础设施、Turborepo 缓存，以及能够检查、中止、触发和重放运行的 agentic CI。[来源](https://x.com/rauchg/status/2115573969369845855) [来源](https://x.com/rauchg/status/2115566139447382115) [来源](https://x.com/rauchg/status/2115539426684408300)

### Aaron Levie

Box CEO Aaron Levie predicts agents will consume 1,000X more tokens than people do today as they run workflows, process company data, build software and secure enterprises. He says operating at that scale will require both pushing closed models forward and making open-weight models more capable, secure and efficient. [Source](https://x.com/levie/status/2115516370695987435)

Box CEO Aaron Levie 预测，agent 消耗的 token 将是今天人类消耗量的 1,000 倍，因为它们会运行工作流、处理公司数据、构建软件并保护企业。他说，要支撑这种规模，既需要继续推进闭源模型，也需要让开源权重模型更强、更安全、更高效。[来源](https://x.com/levie/status/2115516370695987435)

### Ryo Lu

Ryo Lu, whose bio lists design work at Cursor, Notion and Stripe and experience building startups, argues for augmenting human intellect rather than treating software as an output factory. He traces the idea through Engelbart's 1962 framing, Licklider's human-computer symbiosis and Ingalls's 1981 Smalltalk paper, and asks whether a system helps a person discover what they mean, reshape the work and make the next change themselves. [Source](https://x.com/ryolu_/status/2115683228027912634)

Ryo Lu 的简介写着，他曾设计 Cursor、Notion 和 Stripe，也创办过公司。他主张 augmenting human intellect，并引用 Engelbart 1962 年的论述、Licklider 的人机共生，以及 1981 年关于 Smalltalk 的论文。判断标准不是系统替人完成多少工作，而是它是否帮助人发现自己的意思、重塑工作，并最终有能力做出下一次修改。[来源](https://x.com/ryolu_/status/2115683228027912634)

### Peter Steinberger

Peter Steinberger says OpenClaw's web UI now works offline and uses websocket compression and reconnect logic; he reports getting work done on a flight with spotty Wi-Fi. He also argues that agents can make some bugs easier to spot than humans can, using hand-written code as his example. [Source](https://x.com/steipete/status/2115397368229060636) [Source](https://x.com/steipete/status/2115380217938158049)

Peter Steinberger 说，OpenClaw 的 Web UI 现在可以离线工作，并使用 websocket 压缩和重连逻辑；他在网络不稳定的航班上完成了不少工作。他还认为，有些 bug 对 agent 来说比对人更容易发现，并以人类手写代码作为例子。[来源](https://x.com/steipete/status/2115397368229060636) [来源](https://x.com/steipete/status/2115380217938158049)

### Claude

Claude's official account says Claude for Legal now includes a gallery of ready-made artifacts for contract review, regulatory horizon scans, cite checks and other work. Users can start from built-in examples, add their own documents and connectors, and share the result across the business. [Source](https://x.com/claudeai/status/2115467192276025500)

Claude 官方账号表示，Claude for Legal 现在包含一组现成 artifacts，可用于合同审阅、监管动态扫描、引用核查等工作。用户可以从内置示例开始，加入自己的文档和连接器，并在企业内分享结果。[来源](https://x.com/claudeai/status/2115467192276025500)

## Podcast

### AI & I by Every: Can You Use AI To Make Good Art? — With Fred Graver

**The Takeaway:** AI is most useful to creative people when it expands their thinking and production capacity without taking over the judgment that gives the work a point of view.

**核心结论：** 对创作者来说，AI 最有价值的用法，是在不接管作品观点的情况下扩展思考和生产能力。

Fred Graver is a four-time Emmy award-winning filmmaker and technologist whose career runs from Disney Imagineering and the National Lampoon to VH1, MTV, Twitter and Microsoft. He now builds production processes and skills around AI, and his central claim is that AI is a relationship, not just a search engine.

Fred Graver 是四次获得 Emmy 奖的影视制作人和技术人，职业生涯横跨 Disney Imagineering、National Lampoon、VH1、MTV、Twitter 和 Microsoft。他如今围绕 AI 搭建制作流程和技能，核心主张是：AI 是一段关系，而不只是一个搜索引擎。

His practical starting point is uncomfortable for people who want to prompt immediately: empty your own brain first. Write down who you are, what you care about, what you are trying to say and everything you know about the project before asking a model to help. Graver warns that if you ask AI to tell you what you should be saying, it goes to the mean. He describes AI as a virtual writers' room, a group of intelligences that can challenge assumptions, surface audience questions and help mediate friction between writing, marketing and production. The point is not to get AI to write for you. It is to make your own intent more legible and test it against more perspectives.

他的起点对急着写 prompt 的人并不舒服：先清空自己的大脑。向模型求助之前，先写下自己是谁、在意什么、想表达什么，以及关于项目的全部已知信息。Graver 提醒，如果让 AI 告诉你应该表达什么，它只会走向平均值。他把 AI 描述成一个虚拟编剧室，一组可以挑战假设、提出观众问题、帮助协调写作、营销和制作冲突的智能。重点不是让 AI 替你写，而是让自己的意图更清楚，并接受更多视角的检验。

His process has three stages: ideation and architecture, production, and marketing and distribution, arranged as a loop rather than a traditional assembly line. AI can participate at each stage, but the creator still has to supply the distinctive observation. As he puts it: "success is knowing what the audience wants before the audience knows it." AI can help assemble what is known about an audience; it cannot invent the personal quirk or point of view that makes a character or story land.

他的流程分三步：构思与架构、制作、营销与发行，三者组成循环，而不是传统流水线。AI 可以参与每一步，但创作者仍要提供独特的观察。用他的话说：“成功就是在观众知道自己想要什么之前，先知道他们想要什么。” AI 可以帮忙整理你对观众的已知信息，却无法凭空创造让角色和故事成立的个人特质或观点。

[Source](https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL) [来源](https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL)

## Blog

The validated blog feed contained no new qualifying items.

本次经校验的博客源中没有新的符合条件的条目。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
