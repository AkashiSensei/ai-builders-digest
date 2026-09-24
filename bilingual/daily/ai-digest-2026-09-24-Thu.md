[English](../../en/daily/ai-digest-2026-09-24-Thu.md) | [中文](../../zh/daily/ai-digest-2026-09-24-Thu.md) | [Bilingual](./ai-digest-2026-09-24-Thu.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. Anthropic is turning Claude into a platform, and it is rebuilding the plumbing underneath.** The official Claude account launched Claude Marketplace, where users can add connectors and plugins like Slack and Notion, buy agents and products from companies including Cursor and CrowdStrike, and scale with service partners such as Accenture and Deloitte, while builders can list their own tools, agents or services. The same platform instinct shows up in Anthropic Engineering's write-up of Managed Agents, a hosted service that virtualizes an agent into three swappable pieces, a session, a harness and a sandbox, so no single implementation is baked in. Decoupling the brain from the hands cut p50 time-to-first-token by roughly 60% and p95 by more than 90%.

**1. Anthropic 正在把 Claude 变成平台，也在重写底层的基础设施。**官方 Claude 账号上线了 Claude Marketplace，用户可以添加 Slack、Notion 这样的 connector 和 plugin，购买来自 Cursor、CrowdStrike 等公司的 agent 和产品，并借助 Accenture、Deloitte 这样的服务伙伴扩展，builder 也可以在这里上架自己的工具、agent 或服务。同样的平台思路也出现在 Anthropic Engineering 关于 Managed Agents 的文章里：这是一个托管服务，把 agent 虚拟化成三块可替换的部分，session、harness 和 sandbox，不把任何一种实现写死。把「大脑」和「手」解耦之后，p50 time-to-first-token 下降约 60%，p95 下降超过 90%。

**2. Anthropic published unusually candid engineering notes on agent security and on its own regressions.** "How we contain Claude across products" lays out three risk categories (user misuse, model misbehavior and external attackers) and three things to defend (the environment, the model and the external content the agent can reach), reporting that on Gray Swan's Agent Red Teaming benchmark Claude Opus 4.7 holds attack success to roughly 0.1% on single attempts and around 5% to 6% after 100 adaptive attempts. It also admits telemetry showed users approved about 93% of permission prompts, that an internal phish exfiltrated AWS credentials in 24 of 25 retries, and that a sandbox worked perfectly while data still left through an allowlisted Anthropic domain. A second post, "An update on recent Claude Code quality reports," traces a month of complaints to three separate changes, all now reverted, with usage limits reset for subscribers as of April 23.

**2. Anthropic 罕见地公开了 agent 安全和自己翻车的工程细节。**《How we contain Claude across products》列出三类风险（用户误用、模型行为异常、外部攻击者）和三层要防守的对象（agent 运行的环境、它调用的模型、它能触及的外部内容），并给出数据：在 Gray Swan 的 Agent Red Teaming 基准上，Claude Opus 4.7 单次尝试的攻击成功率约为 0.1%，100 次自适应尝试后约为 5% 到 6%。文章同样坦承失败：遥测显示用户批准了约 93% 的权限弹窗；一次内部钓鱼让模型在 25 次重试中有 24 次读取 AWS 凭证并外发；还有一次第三方披露中 sandbox 运行完美，数据却仍然通过被列入白名单的 Anthropic 域名流出。另一篇《An update on recent Claude Code quality reports》把一个月来的抱怨追溯到三处独立改动，它们如今都已回滚，并自 4 月 23 日起为所有订阅用户重置了使用额度。

**3. As models converge, the harness becomes the competitive frontier.** Peter Yang draws the line sharply: with models this good, the Claude Code harness really needs great live voice plus browser and computer use, and "right now one lab has the best model and another has the best harness." Swyx says he ran the Latent Space AINews pipeline side by side with 6 Sol and the difference was night and day, and that 5.5 Opus is now the default model for AINews because it is more concise and tasteful with less slop than even 5 Opus. Boris Cherny points to a post explaining how Claude Code and the Desktop app got much faster, aimed at engineers speeding up their own apps. Thariq describes a new style of Anthropic post that shares in-depth prompts and techniques readers can replicate.

**3. 模型趋于同质化之后，harness 成了新的竞争前沿。**Peter Yang 说得很直接：模型已经这么强，Claude Code 的 harness 真的很需要出色的实时语音，以及 browser 加 computer use，而「现在一家实验室有最好的模型，另一家有最好的 harness」。Swyx 说他用 6 Sol 跑 Latent Space AINews 的流程做对比，差距是天壤之别，而 5.5 Opus 已成为 AINews 今后默认使用的模型，因为它写出来的内容更精炼、更有品味，比 5 Opus 的 slop 还少。Boris Cherny 分享了一篇文章，讲 Claude Code 和 Desktop app 最近为什么快了很多，面向的是想给自己应用提速的工程师。Thariq 则介绍了一种新的 Anthropic 文章形式，会深入分享具体 prompt 和技巧，读者可以直接复刻。

**4. Builders are converging on an agent architecture of brain, hands and files.** Vercel CEO Guillermo Rauch argues that all successful agents, including Muse, Instinct, OpenClaw and Claude Code, share three parts: a brain (model plus harness), hands (tools, computer, browser) and files (memories, skills, repos). Running everything in one stateful computer is the easy path but costly in the cloud, so he breaks it apart, and Vercel introduced Drives to decouple storage from the agent's computer, which he says also massively improves security and auditability. Anthropic Engineering's Managed Agents post is the same idea from the other direction, and Y Combinator President and CEO Garry Tan frames the market in parallel: make software agents want, and use agents to make people want software.

**4. builders 正在收敛到一套「大脑、手、文件」的 agent 架构。**Vercel CEO Guillermo Rauch 认为，包括 Muse、Instinct、OpenClaw、Claude Code 在内，所有成功的 agent 都有三个关键部分：大脑（模型加 harness）、手（工具、computer、browser）、文件（记忆、skills、repo）。把所有东西塞进一台有状态的电脑是省事的做法，但在云端跑起来很贵，所以他主张拆开；Vercel 推出了 Drives，把存储从 agent 的电脑里解耦出来，他说这也大幅提升了安全性和可审计性。Anthropic Engineering 的 Managed Agents 文章是同一个思路的另一个方向，而 Y Combinator 总裁兼 CEO Garry Tan 则用一句话概括市场变化：让软件 agent 想要，再用 agent 让人想要软件。

**5. Agents are moving into ordinary life and consumer demand.** Meta's Senior Director of AI Madhu Guru pushes back on Ben Thompson's argument, saying consumers do not have one relationship with "doing things": browsing clothes can be entertainment for some while hiring a roofer is miserable for most, and the latent demand for agents that remove that friction is immense. Every CEO Dan Shipper is running the experiment in public, having an Every agent plan the company's September meetup from the food and drinks menu to the guest list. OpenAI's Thibault Sottiaux says he now just calls ChatGPT to talk through work, check email, code and manage a calendar across the full ecosystem of plugins, including third-party ones.

**5. agent 正在走进日常生活和消费者需求。**Meta 的 AI 高级总监 Madhu Guru 反驳 Ben Thompson 的观点：消费者对「把事情做完」并不是同一种关系：逛衣服对某些人来说是娱乐，而找屋顶维修工对大多数人来说是折磨，因此能让消费者省掉这些摩擦的 agent，潜在需求极其巨大。Every CEO Dan Shipper 把实验搬到台前：一个 Every 的 agent 策划了公司 9 月的聚会，从餐饮酒水菜单到嘉宾名单全包。OpenAI 的 Thibault Sottiaux 说他现在直接打电话给 ChatGPT，就能讨论工作、查邮件、写代码、管理日程，而且跑在整个 plugin 生态里，包括第三方开发的 plugin。

**6. Underneath the speed, builders are asking what is actually worth optimizing.** Ryo Lu, who has designed at Cursor, Notion and Stripe, writes that we keep worshipping efficiency, productivity and speed while the real danger is not that AI makes us lazy but that it makes us endlessly busy, giving us infinite production before we have found intention, and that AI could be a new canvas for strange, personal and impossible things rather than a slop factory. Aditya Agarwal, General Partner at SPC and co-founder of Bevel Health, says investors and employees obsess over team size when team longevity is the better metric, since a team together three-plus years is significantly higher throughput and more resilient. Replit CEO Amjad Masad argues you need young people to break the mold, question deeply held beliefs and attempt the impossible. Box CEO Aaron Levie, quoting a vision for the creative industry, expects AI to expand opportunity in film rather than shrink it.

**6. 在提速之下，builders 开始追问到底什么值得优化。**在 Cursor、Notion、Stripe 做过设计的 Ryo Lu 写了一篇长文，反对把效率、生产力、速度当成信条：真正的危险不是 AI 让我们变懒，而是让我们变得永远忙碌，在找到意图之前先获得了无限产能；AI 本可以是一块新的画布，用来做奇怪的、私人的、不可能的东西，而不是变成 slop 工厂。SPC 普通合伙人、Bevel Health 联合创始人 Aditya Agarwal 说，投资人和员工总盯着团队规模，但团队存续时间才是更好的指标，一起干了三年以上的团队，吞吐量和韧性都显著更高。Replit CEO Amjad Masad 认为，你需要年轻人去打破成规、质疑根深蒂固的信念、尝试不可能的事。Box CEO Aaron Levie 引用了一段关于创意产业未来的判断，他相信 AI 会让电影行业的机会变大而不是变小。

## X / Twitter

### Claude: the official Claude account

The official Claude account launched Claude Marketplace, where you can discover tools, agents and expert partners: add connectors and plugins like Slack and Notion, buy agents and products from companies including Cursor and CrowdStrike, and scale with service partners such as Accenture and Deloitte. The account also pointed builders to a page where they can list their own tools, agents or services.

官方 Claude 账号上线了 Claude Marketplace，用户可以在这里发现工具、agent 和专业伙伴：添加 Slack、Notion 这类 connector 和 plugin；购买来自 Cursor、CrowdStrike 等公司的 agent 和产品；借助 Accenture、Deloitte 这样的服务伙伴扩展。该账号还给 builder 指了一个页面，可以上架自己的工具、agent 或服务。

- [Claude: Claude Marketplace is live / Claude Marketplace 上线](https://x.com/claudeai/status/2102840851538080172)
- [Claude: browse the marketplace, or list your tools / 浏览 marketplace，或上架你的工具](https://x.com/claudeai/status/2102840855258452037)

### Boris Cherny: Claude Code at Anthropic

Boris Cherny explained what is happening under the hood when Claude tackles tricky code: Claude builds a model of the program, targeting a tricky state machine or race-prone part of the code, finds counter-examples in the model that are suspected bugs, reproduces them and fixes them in the code. He is explicit that this is not whole-codebase formal verification yet, but that the hairiest parts of the code are modeled, checked for counter-examples and fixed. He also flagged a blog post on how Claude Code and the Desktop app became much faster in recent weeks, with techniques for engineers trying to speed up their own apps.

Boris Cherny 解释了 Claude 处理棘手代码时底层发生了什么：Claude 会为程序建一个模型，锁定某个棘手的状态机或容易出竞态的部分，在模型里找出反例，这些反例就是疑似 bug，然后复现并在代码里修掉。他明确说这不是对整个代码库做形式化验证，而是把代码里最棘手的部分建模、检查反例并修复。他还分享了一篇文章，讲 Claude Code 和 Desktop app 最近几周怎么变快的，里面有可以借鉴的技巧，供想给自家应用提速的工程师参考。

- [Boris Cherny: how Claude models the hairiest code and finds bugs / Claude 如何为最棘手的代码建模并找出 bug](https://x.com/bcherny/status/2102898067133595992)
- [Boris Cherny: how Claude Code and the Desktop app got faster / Claude Code 和 Desktop app 是如何变快的](https://x.com/bcherny/status/2102854267782705648)

### Thibault Sottiaux: Codex and ChatGPT at OpenAI

Thibault Sottiaux said he cannot wait for DevDay next Tuesday, calling it the team's most ambitious sprint and saying Astra has made new things possible in a short amount of time, with many features that should change the way people work. In a separate post he described leaning on voice: simply calling ChatGPT to talk through work, check on emails, do some coding and manage his calendar, all of it working across the full ecosystem of plugins, including third-party developed ones.

Thibault Sottiaux 说他非常期待下周二的 DevDay，称这是团队最有野心的一次冲刺，Astra 让很多新东西在很短时间里成为可能，其中不少会改变大家的工作方式。在另一条帖子里，他讲了自己对语音的依赖：直接打电话给 ChatGPT，就能讨论工作、查邮件、写代码、管理日程，而且整套体验跑在完整的 plugin 生态里，包括第三方开发的 plugin。

- [Thibault Sottiaux: DevDay is next Tuesday / DevDay 在下周二](https://x.com/thsottiaux/status/2102996313780736363)
- [Thibault Sottiaux: using ChatGPT voice across the plugin ecosystem / 在 plugin 生态里使用 ChatGPT 语音](https://x.com/thsottiaux/status/2102814202117411196)

### Peter Yang: practical AI tutorials and interviews

Peter Yang argues that with a model this good, the Claude Code harness really needs great live voice plus browser and computer use, the latter of which is improving, and that right now one lab has the best model while another has the best harness. He also gave a short review of Opus 5.5, listing it as smart, fast, fun to talk to, good at writing, friendly on rate limits and constantly surprising in what it is capable of.

Peter Yang 认为，模型已经这么强，Claude Code 的 harness 真的很需要出色的实时语音，以及 browser 加 computer use（后者正在改善），而「现在一家实验室有最好的模型，另一家有最好的 harness」。他还给 Opus 5.5 写了一段简短评价：聪明、快、聊起来有意思、擅长写作、对 rate limit 友好，而且总能让人惊讶于它的能力。

- [Peter Yang: one lab has the best model, another has the best harness / 一家实验室有最好的模型，另一家有最好的 harness](https://x.com/petergyang/status/2102952201350254667)
- [Peter Yang: a short review of Opus 5.5 / 对 Opus 5.5 的简短评价](https://x.com/petergyang/status/2102946952740741394)

### Swyx

Swyx said he ran the Latent Space AINews pipeline side by side with 6 Sol and the difference was night and day, and that 5.5 Opus is the new default model for AINews going forward because it produces much more concise and tasteful reporting, with less slop than even 5 Opus.

Swyx 说他用 6 Sol 跑 Latent Space AINews 的流程做对比，差距是天壤之别；5.5 Opus 已成为 AINews 今后默认使用的模型，因为它写出来的报道更精炼、更有品味，比 5 Opus 的 slop 还少。

- [Swyx: 5.5 Opus is the new default model for AINews / 5.5 Opus 成为 AINews 的新默认模型](https://x.com/swyx/status/2102650014552182920)

### Guillermo Rauch: Vercel CEO

Guillermo Rauch said he is neurotic about the startup time of a new shell session, and that Opus 5.5 found a lot of great optimizations other models missed, with the advice to tell your agent to optimize .zshrc and friends, since an impatient new terminal is silent suffering. In a longer thread he argued that all successful agents, including Muse, Instinct, OpenClaw and Claude Code, share three key components: a brain (model and harness), hands (tools, computer, browser) and files (memories, skills, repos). Running all of it in one stateful computer is the easy way, but cost-efficiently running agents in the cloud means breaking those parts apart, and Vercel introduced Drives to decouple storage from the agent's computer, which he says also massively improves security and auditability.

Guillermo Rauch 说他对新 shell session 的启动时间非常神经质，而 Opus 5.5 找到了很多其他模型没发现的优化点，他的建议是让你的 agent 去优化 .zshrc 之类的东西，因为每次打开新终端，你可能都在默默受苦。在一条更长的帖子里，他认为包括 Muse、Instinct、OpenClaw、Claude Code 在内，所有成功的 agent 都有三个关键部分：大脑（模型与 harness）、手（工具、computer、browser）、文件（记忆、skills、repo）。把所有东西塞进一台有状态的电脑是最省事的做法，但要在云端经济地运行 agent，就必须把这些部分拆开；Vercel 推出了 Drives，把存储从 agent 的电脑里解耦出来，他说这同时大幅提升了安全性和可审计性。

- [Guillermo Rauch: Opus 5.5 found shell startup optimizations other models missed / Opus 5.5 找到了其他模型没发现的 shell 启动优化](https://x.com/rauchg/status/2102947745132924993)
- [Guillermo Rauch: brain, hands, files, and Vercel Drives / 大脑、手、文件，以及 Vercel Drives](https://x.com/rauchg/status/2102820148629614685)

### Thariq: Claude Code at Anthropic

Thariq described a new type of post Anthropic is trying, where the team shares in-depth how it does work using specific prompts and techniques readers should be able to replicate, and asked for feedback on whether it is useful.

Thariq 介绍了一种 Anthropic 正在尝试的新文章形式：团队会深入分享自己是怎么工作的，包括具体 prompt 和技巧，读者应该可以直接复刻，并请大家反馈是否有用。

- [Thariq: a new in-depth prompt and technique post format / 一种新的深入 prompt 与技巧文章形式](https://x.com/trq212/status/2102857025206255902)

### Aaron Levie: CEO, Box

Aaron Levie shared a vision for the future of the creative industry with AI, arguing that as barriers and costs come down more films will get made rather than fewer, that studios will get to take more risks, and that there will be more seats at the table and entirely new forms of storytelling. His own read: technology has reshaped the creative industry over and over and has generally expanded opportunity, and even when techniques or mediums change, the underlying need for creative skills and taste does not go away.

Aaron Levie 分享了一段关于创意产业与 AI 未来的判断：当门槛和成本下降，电影会变得更多而不是更少，制片厂会更愿意冒险，会有更多席位，也会出现全新的叙事形式。他自己的解读是：技术一次次重塑创意产业，总体上扩张了机会；即便技术和媒介变化，对创意能力和品味的需求也不会消失。

- [Aaron Levie: AI will expand the creative industry / AI 会扩张创意产业的机会](https://x.com/levie/status/2102934874470617303)

### Madhu Guru: Senior Director, AI at Meta

Madhu Guru disagreed with Ben Thompson's argument, saying consumers do not have one relationship with "doing things": browsing clothes can be entertainment for some, while hiring a roofer is miserable for most. He traced this to his years building consumer and small-business products at Google and Meta, compared the skepticism to early-2000s doubts about buying clothes or a $500 TV online, and said the latent demand for agents that remove this friction for consumers is immense.

Madhu Guru 反驳 Ben Thompson 的观点，认为消费者对「把事情做完」并不是同一种关系：逛衣服对某些人来说是娱乐，而找屋顶维修工对大多数人来说是折磨。他把这一点追溯到自己在 Google 和 Meta 多年做消费者和中小企业产品的经验，把这种怀疑类比成 2000 年代初「为什么要在网上买衣服」「为什么要网购 500 美元的电视」，并说能让消费者省掉这些摩擦的 agent，潜在需求极其巨大。

- [Madhu Guru: consumers do not have one relationship with doing things / 消费者对「把事情做完」并不是同一种关系](https://x.com/realmadhuguru/status/2102777931764498536)

### Ryo Lu: designer at Cursor, Notion and Stripe

Ryo Lu wrote a long essay arguing against worshipping efficiency, productivity and speed, saying the danger is not that AI makes us lazy but that it makes us endlessly busy, giving us infinite production before we have found intention and infinite execution before we have developed taste. He says AI could be a new canvas for strange, personal, impossible things, but so much of it is becoming slop factories, and that the real frontier may be discernment: knowing what not to make and knowing when to stop. Tools should give us more life, not turn life into a tool.

Ryo Lu 写了一篇长文，反对把效率、生产力、速度当成信条。他说真正的危险不是 AI 让我们变懒，而是让我们变得永远忙碌：在找到意图之前先获得无限产能，在形成品味之前先获得无限执行。他认为 AI 本可以是一块新的画布，用来做奇怪的、私人的、不可能的东西，但如今太多东西正在变成 slop 工厂；真正的前沿也许是判断力：知道什么不该做，知道什么时候该停。工具应该给我们更多生活，而不是把生活变成工具。

- [Ryo Lu: speed is not meaning / 速度不等于意义](https://x.com/ryolu_/status/2102933485795369213)

### Garry Tan: President and CEO, Y Combinator

Garry Tan described two important simultaneous trends in how startups get customers: making software agents want your product, and using agents to make people want your software.

Garry Tan 说，创业公司获客正在出现两个同时发生的重要趋势：让软件 agent 想要你的产品，以及用 agent 让人想要你的软件。

- [Garry Tan: make software agents want, and use agents to make people want software / 让软件 agent 想要，再用 agent 让人想要软件](https://x.com/garrytan/status/2102955139875397806)

### Amjad Masad: CEO, Replit

Amjad Masad argued that you need young people to break the mold, question deeply held beliefs and attempt the impossible, and that the ideal college would cultivate exactly that.

Amjad Masad 认为，你需要年轻人去打破成规、质疑根深蒂固的信念、尝试不可能的事，而理想的大学恰恰应该培养这种人。

- [Amjad Masad: the ideal college would cultivate mold-breakers / 理想的大学应该培养打破成规的人](https://x.com/amasad/status/2102799031038878172)

### Dan Shipper: CEO, Every

Dan Shipper said the verdict arrives tomorrow at 6pm on whether an AI agent can throw a good party: the Every agent planned the company's September meetup, from the food and drinks menu to the guest list, and the results will be graded in person.

Dan Shipper 说，明天下午 6 点就能知道 AI agent 能不能办好一场聚会：一个 Every 的 agent 策划了公司 9 月的聚会，从餐饮酒水菜单到嘉宾名单全包，结果会现场打分。

- [Dan Shipper: an Every agent planned the September meetup / 一个 Every 的 agent 策划了 9 月的聚会](https://x.com/danshipper/status/2102826854357016793)

### Aditya Agarwal: General Partner at SPC and co-founder of Bevel Health

Aditya Agarwal argued that while people ask about team size, team longevity is the right metric, since a team that has been working together for three-plus years is significantly higher throughput and more resilient than one that has just formed. He called asking about size instead of longevity a key mistake investors and employees make all the time.

Aditya Agarwal 认为，大家总在问团队规模，但团队存续时间才是正确的指标：一起干了三年以上的团队，吞吐量和韧性都显著高于刚刚组建的团队。他说，只问规模不问存续时间，是投资人和员工最常犯的错误之一。

- [Aditya Agarwal: team longevity is the metric that matters / 团队存续时间才是关键指标](https://x.com/adityaag/status/2102782451643040074)

### Josh Woodward: VP at Google for Google Labs, Gemini App and Google AI Studio

Josh Woodward teased that more of users' favorite apps are coming to Gemini and asked which ones people want next.

Josh Woodward 预告更多用户喜欢的应用即将进入 Gemini，并询问大家接下来最想要哪些。

- [Josh Woodward: more favorite apps are coming to Gemini / 更多常用应用即将进入 Gemini](https://x.com/joshwoodward/status/2102800209894056351)

## Podcast

The validated podcast feed for this run contained no new qualifying episodes.

本次运行通过验证的 podcast feed 中没有新的合格单集。

## Blog

**Anthropic Engineering: How we contain Claude across products**

Anthropic Engineering frames agent risk as two components, how likely a failure is and how much damage one could do. Progress on safeguards and training keeps pushing the first down, but the theoretical blast radius only grows as capability and access expand, so the engineering question becomes how to cap it. The post lays out three risk categories, user misuse, model misbehavior and external attackers, and three things to defend: the environment the agent runs in, the model it consults, and the external content it can reach.

Anthropic Engineering 把 agent 的风险拆成两部分：失败发生的概率，以及一次失败能造成多大破坏。safeguard 和模型训练让前者持续下降，但随着能力和权限扩张，理论上的影响范围只会越来越大，于是工程问题变成如何给它设上限。文章列出了三类风险（用户误用、模型行为异常、外部攻击者）和三个要防守的对象：agent 运行的环境、它调用的模型、以及它能触及的外部内容。

The numbers are specific. On Gray Swan's Agent Red Teaming benchmark, Claude Opus 4.7 holds attack success to roughly 0.1% on single attempts and around 5% to 6% after 100 adaptive attempts, while Claude Code auto mode catches roughly 83% of overeager behaviors. The post is also candid about failures: telemetry showed users approved about 93% of permission prompts, an internal phish got a model to read AWS credentials and POST them out in 24 of 25 retries, and in a third-party disclosure a sandbox worked perfectly while files still left through an allowlisted Anthropic domain. Its closing principles: design for containment at the environment layer first, match isolation strength to the user's capacity for oversight, and be wary of custom components, since battle-tested hypervisors and container runtimes held while Anthropic's own allowlist proxy was the piece that broke.

数据相当具体。在 Gray Swan 的 Agent Red Teaming 基准上，Claude Opus 4.7 单次尝试的攻击成功率约为 0.1%，100 次自适应尝试后约为 5% 到 6%；Claude Code auto mode 能拦下约 83% 的过度行为。文章也不回避失败：遥测显示用户批准了约 93% 的权限弹窗；一次内部钓鱼让模型在 25 次重试中有 24 次读取 AWS 凭证并外发；在一次第三方披露中，sandbox 运行完美，数据却仍然通过被列入白名单的 Anthropic 域名流出。结尾的原则是：优先在环境层做 containment；隔离强度要匹配用户的理解能力；对自研组件保持警惕，因为久经考验的 hypervisor 和容器运行时都撑住了，出问题的恰恰是 Anthropic 自己的白名单代理。

https://www.anthropic.com/engineering/how-we-contain-claude

**Anthropic Engineering: An update on recent Claude Code quality reports**

Anthropic Engineering investigated reports that Claude's responses had worsened and traced them to three separate changes affecting Claude Code, the Claude Agent SDK and Claude Cowork, with the API not impacted. All three were resolved as of April 20 (v2.1.116). The first change, on March 4, moved Claude Code's default reasoning effort from high to medium to cut latency, which users experienced as less intelligence and which was reverted on April 7; users now default to xhigh effort for Opus 4.7 and high effort for other models. The second, on March 26, was a caching optimization meant to clear stale thinking once per idle session but which fired on every turn, making Claude seem forgetful and repetitive and draining usage limits faster; it was fixed on April 10. The third, on April 16, added a system prompt instruction to limit verbosity that "caused an outsized effect on intelligence in Claude Code," showing a 3% drop on one evaluation, and was reverted on April 20. Going forward Anthropic says it will run more internal staff on the exact public build, tighten controls on system prompt changes, add soak periods and gradual rollouts, and is resetting usage limits for all subscribers as of April 23.

Anthropic Engineering 调查了「Claude 变差」的反馈，把原因追溯到三处独立改动，分别影响 Claude Code、Claude Agent SDK 和 Claude Cowork，API 没有受影响，三个问题都在 4 月 20 日（v2.1.116）解决。第一处改动发生在 3 月 4 日，把 Claude Code 默认的 reasoning effort 从 high 调成 medium 以降低延迟，却被用户感知为「变笨」，已于 4 月 7 日回滚；现在 Opus 4.7 默认 xhigh effort，其他模型默认 high effort。第二处发生在 3 月 26 日，本意是清理闲置 session 里的旧 thinking，结果缓存优化每一轮都触发，让 Claude 显得健忘、重复，并更快耗尽使用额度，4 月 10 日修复。第三处发生在 4 月 16 日，为减少啰嗦加了一条系统 prompt，用文章的话说「对 Claude Code 的智能造成了超出预期的影响」，在其中一项评测上掉了 3%，4 月 20 日回滚。后续 Anthropic 会安排更多内部员工使用与外部完全一致的公开版本，对系统 prompt 改动加更严的管控，引入 soak period 和灰度发布，并自 4 月 23 日起为所有订阅用户重置使用额度。

https://www.anthropic.com/engineering/april-23-postmortem

**Anthropic Engineering: Scaling Managed Agents, decoupling the brain from the hands**

Anthropic Engineering explains why it built Managed Agents, a hosted service in the Claude Platform that runs long-horizon agents through a small set of interfaces meant to outlast any particular implementation, including the ones it runs today. The starting point is that harnesses encode assumptions about what Claude cannot do, and those assumptions go stale: context resets added to work around Sonnet 4.5's "context anxiety" turned out to be dead weight on Opus 4.5. The team virtualized an agent into a session, a harness and a sandbox, then moved from a single container where the server became a hand-tended "pet" to a decoupled design where the harness calls the container like any other tool, execute(name, input) returns a string. The payoffs are concrete: a crashed harness can be rebooted and resume from the durable session log, containers become disposable, sessions no longer wait for a container before inference starts, and p50 time-to-first-token dropped roughly 60% while p95 dropped over 90%. Managed Agents is described as a "meta-harness," opinionated about the interfaces around Claude but not about what runs behind them, so many brains can connect to many hands and harnesses can be swapped as models improve.

Anthropic Engineering 解释了为什么要做 Managed Agents：这是 Claude Platform 里的托管服务，用一小组接口来跑长周期 agent，这些接口要能比任何具体实现活得更久，包括它今天自己跑的实现。出发点在于，harness 里编码了对「Claude 做不到什么」的假设，而这些假设会过期：为了绕开 Sonnet 4.5 的 context anxiety 而加的 context reset，到了 Opus 4.5 上就变成了多余的负担。团队把 agent 虚拟化成 session、harness 和 sandbox 三部分，又从所有东西塞在一个容器里（服务器成了需要手养的 pet）迁移到解耦架构：harness 像调用普通工具一样调用容器，execute(name, input) 返回字符串。收益很具体：崩溃的 harness 可以重启，并从持久化的 session log 恢复；容器变成一次性的；session 不再需要等容器就绪才能开始推理；采用新架构后，p50 time-to-first-token 下降约 60%，p95 下降超过 90%。文章把 Managed Agents 称为 meta-harness：对 Claude 周围的接口有明确主张，但不规定接口背后跑什么，因此很多「大脑」可以连接很多「手」，模型进步时 harness 也可以随时替换。

https://www.anthropic.com/engineering/managed-agents

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
