[English](../../en/daily/ai-digest-2026-09-25-Fri.md) | [中文](../../zh/daily/ai-digest-2026-09-25-Fri.md) | [Bilingual](./ai-digest-2026-09-25-Fri.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. The model spend war is being repriced in real time.** Vercel CEO Guillermo Rauch published two months of spend data from Vercel AI Gateway, and the shape of the market moved a lot. Anthropic is still number one in spend but slid from 69% to 40%, OpenAI climbed from 10% to 24% and now leads on token volume, GPT-6 Astra and GPT 5.6 Sol "are ripping," Opus 5.5 reached 10% of spend within two days, and Kimi K3 plus DeepSeek took roughly half of Anthropic's loss. OpenAI is also 62% of image generations.

**1. 模型支出的格局正在被实时重新定价。**Vercel CEO Guillermo Rauch 公布了 Vercel AI Gateway 最近两个月的支出数据，市场结构变化很大。Anthropic 的支出仍然排第一，但从 69% 滑落到 40%；OpenAI 从 10% 升到 24%，并在 token 用量上开始领先；GPT-6 Astra 和 GPT 5.6 Sol「非常猛」；Opus 5.5 上线两天就占到 10% 的支出；Kimi K3 和 DeepSeek 拿走了 Anthropic 流失份额的大约一半；图像生成方面 OpenAI 占 62%。

**2. The most important layer in the AI stack is the one almost nobody talks about.** VAST Data CEO Renen Hallak describes his company as sitting in the middle of Jensen Huang's five layer cake, doing the software infrastructure that manages compute, storage, networking and data for the model builders above and the hardware vendors below. That unglamorous position turned VAST into a $30 billion company whose customers include CoreWeave, Nebius, Mistral and Nscale, and whose shared-everything architecture he says is why vendors built on older shared-nothing designs and services like S3 struggle with AI-era workloads.

**2. AI 栈里最重要的那一层，恰恰是几乎没人谈论的一层。**VAST Data CEO Renen Hallak 说，公司就坐在 Jensen Huang 那个五层蛋糕的中间：为上面的模型公司和下面的硬件厂商提供软件基础设施，管理算力、存储、网络和数据。这个不起眼的位置让 VAST 成为一家估值 300 亿美元的公司，客户包括 CoreWeave、Nebius、Mistral 和 Nscale；他说，正是这套 shared everything 架构，让那些基于老的 shared nothing 设计和 S3 之类服务的厂商在 AI 时代的工作负载上吃力。

**3. Demand is outrunning the physical buildout.** Hallak says one AI cloud customer projected 500 petabytes over three years and came back a quarter later asking for an extra two exabytes, while other customers have stopped selling capacity because they are sold out for the next year and a half. He does not see idle infrastructure anywhere, so the real constraint is land, power, chips and fabs, and he expects this pace to hold for five to ten years.

**3. 需求正在跑赢物理世界的建设速度。**Hallak 说，有一家 AI 云客户原本预计三年需要 500 PB，结果一个季度后回来，要求在此基础上再加 2 EB；还有客户因为未来一年半的产能已经卖光而停止接单。他在任何地方都看不到闲置的基础设施，真正的瓶颈是土地、电力、芯片和晶圆厂，他预计这个速度还能持续五到十年。

**4. Confidential computing is becoming the trust layer that unlocks regulated enterprises.** VAST's announcement is about model management, including DataEnclave, which lets an enterprise run inference on its own premises while the model builder's weights stay encrypted end to end, with help from Nvidia and encrypted memory underneath. Hallak argues this is not a technology breakthrough but "an idea whose time has come," and that this low layer is the right place to enforce who, and which agent, is allowed to see what.

**4. 机密计算正在成为让受监管企业愿意上车的信任层。**VAST 这次发布的核心是模型管理，其中包括 DataEnclave：企业可以在自己的场地内跑推理，模型方的权重则端到端加密，底层借助 Nvidia 的加密内存能力。Hallak 认为这不是技术突破，而是「一个时机已到的想法」，并且认为处在这么底层的位置，正是执行「谁、以及哪个 agent 能看到什么」这类策略的合适场所。

**5. Agent-era craft is shifting from prompt tricks to goal setting and tool design.** Peter Steinberger warns that an agent told only to "clean up" stops far too early, and suggests giving it an ambitious goal such as removing 20% of the least useful tests while keeping code coverage within 2%. Thariq says Claude Code will turn plan mode into a built-in mod so users can customize the plan mode prompt, create and share their own modes, or rebind shift+tab entirely.

**5. agent 时代的手艺，正从 prompt 技巧转向设定目标和设计工具。**Peter Steinberger 提醒，如果你只是让 agent「清理一下」，它会远远过早地停下来，应该给它一个有野心的目标，比如「删掉 20% 最没用的测试，同时把代码覆盖率的变化控制在 2% 以内」。Thariq 说 Claude Code 会把 plan mode 做成内置的 mod，用户可以自定义 plan mode 的 prompt、创建并分享自己的 mode，或者干脆忽略它，把 shift+tab 重新绑定到别的功能。

**6. Product and go-to-market moves are stacking up across the stack.** Google Labs shipped Dreambeans, a fixed daily set of "beans" that point you at the real world; Replit CEO Amjad Masad says Muse can now make apps on Replit; and Claude for Small Business added 43 workflows and 27 integrations on top of more than 900,000 installs. On the media side, Swyx says his "Scaling without Slop" bet is finally working and teased the next phase of Latent Space and AINews, while FPV Ventures partner Nikunj Kothari predicts every trades business will eventually get bespoke software.

**6. 从产品到市场，各种动作在整条栈上叠加。**Google Labs 上线了 Dreambeans：每天早上固定数量的「beans」，把用户指向真实世界；Replit CEO Amjad Masad 说 Muse 现在可以在 Replit 上做 app；Claude for Small Business 在超过 90 万次安装的基础上，又新增了 43 个 workflow 和 27 个集成。媒体侧，Swyx 说他那套「Scaling without Slop」的打法终于开始奏效，并预告了 Latent Space 和 AINews 的下一阶段；FPV Ventures 合伙人 Nikunj Kothari 则判断，每一个做 trades 的小企业最终都会有属于自己的定制软件。

## X / Twitter

### Swyx

Swyx said his January bet on a content strategy he called "Scaling without Slop" is finally working: it took three years to reach the first 100k YouTube subscribers and only 1.2 months to add the next 100k, with similar traction on AEO, SEO and subscriptions. He also gave notice that the next phase of Latent Space, AINews and the rest of swyx inc is coming.

Swyx 说，他今年 1 月下注的内容策略「Scaling without Slop」终于开始奏效：YouTube 从 0 到第一个 10 万订阅用了三年，而再涨 10 万只用了 1.2 个月，AEO、SEO 和订阅等其他指标也有类似走势。他还预告了 Latent Space、AINews 以及 swyx inc 的下一阶段。

- [Swyx: the next phase of Latent Space and AINews](https://x.com/swyx/status/2103361254433993165)

### Josh Woodward: VP at Google for Google Labs, Gemini App and Google AI Studio

Josh Woodward introduced Dreambeans, one of the newer experiments in Google Labs, which he says has a growing cult following. The premise is simple: a fixed number of "beans" brew every morning, and they point you at the real world, with real people, doing things you care about together.

Josh Woodward 介绍了 Dreambeans，这是 Google Labs 里较新的实验之一，他说它正在积累一批忠实的追随者。逻辑很简单：每天早上固定数量的「beans」会煮好，它们把你指向真实世界，和真实的人一起做你在乎的事。

- [Josh Woodward: Dreambeans in Google Labs](https://x.com/joshwoodward/status/2103182635992514569)

### Peter Yang

Peter Yang's read on the current model race is that Astra "blew up" 3D models, then Opus "blew up" videos, and he no longer knows what comes next. He also shared a prompting observation: stroking the AI's ego works.

Peter Yang 对当前模型竞赛的判断是：Astra 把 3D 模型掀翻了，接着 Opus 又把视频掀翻了，他已经不知道下一个会是什么。他还分享了一个 prompt 观察：顺着 AI 的「自我」去夸它，是有用的。

- [Peter Yang: Astra blew up 3D models, Opus blew up videos](https://x.com/petergyang/status/2103318850641260959)
- [Peter Yang: stroking the AI's ego works](https://x.com/petergyang/status/2103310612864569388)

### Thariq: Claude Code at Anthropic

Thariq responded to feedback that many users plan on their own and do not need plan mode, while others like the UX of entering a mode where Claude is just thinking and brainstorming with them. His plan: make plan mode into a built-in mod, and let mods add new modes or override shift+tab. That would let people customize the plan mode prompt, create and share their own modes, or ignore it and rebind shift+tab to something else entirely.

Thariq 回应了用户反馈：很多人自己就会做规划，不需要 plan mode；另一些人则喜欢进入一个「Claude 只是在思考、和你一起头脑风暴」的模式。他的计划是把 plan mode 做成内置的 mod，并允许 mod 添加新的 mode，或者覆盖 shift+tab。这样一来，用户就可以自定义 plan mode 的 prompt、创建并分享自己的 mode，或者干脆忽略它，把 shift+tab 重新绑定。

- [Thariq: making plan mode into a built-in mod](https://x.com/trq212/status/2103212051065921632)
- [Thariq: customize the plan mode prompt or rebind shift+tab](https://x.com/trq212/status/2103212052391354794)

### Amjad Masad: CEO, Replit

Amjad Masad announced that Muse can now make apps on Replit.

Amjad Masad 宣布，Muse 现在可以在 Replit 上做 app。

- [Amjad Masad: Muse can now make apps on Replit](https://x.com/amasad/status/2103129037011120525)

### Guillermo Rauch: CEO, Vercel

Guillermo Rauch shared two months of AI Gateway spend data showing the model market shifting underneath Anthropic: Anthropic still leads in spend but fell from 69% to 40%, OpenAI rose from 10% to 24% and now leads in token volume, Opus 5.5 hit 10% of spend in two days, and Kimi K3 plus DeepSeek took about half of Anthropic's loss. He singled out GPT-6 Astra and GPT 5.6 Sol as "ripping," and noted OpenAI is 62% of image generations.

Guillermo Rauch 分享了 AI Gateway 两个月的支出数据，显示模型市场正在 Anthropic 脚下发生位移：Anthropic 的支出仍居第一，但从 69% 降到 40%；OpenAI 从 10% 升到 24%，并在 token 用量上领先；Opus 5.5 两天内就达到 10% 的支出占比；Kimi K3 加 DeepSeek 拿走了 Anthropic 流失份额的一半左右。他特别点出 GPT-6 Astra 和 GPT 5.6 Sol「非常猛」，并提到图像生成中 OpenAI 占 62%。

- [Guillermo Rauch: OpenAI vs Anthropic vs open models, in spend](https://x.com/rauchg/status/2103216656747262419)

### Matt Turck: VC at FirstMark Capital, host of the MAD Podcast

Matt Turck published a conversation with VAST Data CEO Renen Hallak about the middle layer of Jensen Huang's five layer cake for AI, the software infrastructure that few people understand and where VAST became a $30 billion company powering customers including CoreWeave, Nebius, Mistral and Nscale. The episode also points to VAST's announcement on frontier models and sensitive data.

Matt Turck 发布了他与 VAST Data CEO Renen Hallak 的对话，主题是 Jensen Huang 那个 AI 五层蛋糕的中间层：很少有人真正理解的软件基础设施，VAST 正是在这里成为一家估值 300 亿美元、客户包括 CoreWeave、Nebius、Mistral 和 Nscale 的公司。这一期也指向 VAST 关于前沿模型与敏感数据的发布。

- [Matt Turck: why VAST became a $30B company in the hidden AI software layer](https://x.com/mattturck/status/2103167531917721866)
- [Matt Turck: the conversation is also on Spotify, Apple Podcasts and YouTube](https://x.com/mattturck/status/2103167536141353053)

### Nikunj Kothari: partner at FPV Ventures

Nikunj Kothari shared a thesis he is backing: every small business owner, specifically in the trades, will have bespoke software, and that last mile is where differentiation can happen, in the experience a company gives its customers and its employees.

Nikunj Kothari 分享了一个他正在下注的判断：每一个小企业主，具体来说是在 trades 行业里，最终都会拥有定制软件；而最后一公里正是差异化的来源，也就是你为客户和员工提供的独特体验。

- [Nikunj Kothari: every trades business will have bespoke software](https://x.com/nikunj/status/2103360292973633770)

### Peter Steinberger: OpenClaw and OpenAI

Peter Steinberger says he pointed Daybreak at a codebase and found eight more long-standing leaks, with a reminder to care for your open source dependencies. He also offered a concrete agent tip: if you just tell the agent to clean up, it will stop far too early, so give it an ambitious goal, for example "remove 20% of the least useful tests while maintaining code coverage within 2%".

Peter Steinberger 说他用 Daybreak 跑了一遍，又发现了 8 个长期存在的漏洞，并提醒大家要照顾好自己的开源依赖。他还给了一条很具体的 agent 建议：如果你只是让 agent 去清理，它会远远过早地停下，所以要给它一个有野心的目标，比如「删掉 20% 最没用的测试，同时把代码覆盖率的变化控制在 2% 以内」。

- [Peter Steinberger: Daybreak found 8 more long-standing leaks](https://x.com/steipete/status/2103200311641076100)
- [Peter Steinberger: give cleanup agents an ambitious goal](https://x.com/steipete/status/2103148444701610233)

## Podcast

### The MAD Podcast with Matt Turck: Who Feeds the GPUs? Inside AI's Hidden $30B Layer | Renen Hallak, VAST Data

The Takeaway: the AI buildout is not really bottlenecked by models or GPUs but by the unglamorous software layer in between that has to feed those GPUs, and by the land, power and chips nobody can conjure fast enough.

**核心结论：这轮 AI 建设真正的瓶颈，既不是模型也不是 GPU，而是夹在中间、负责把数据喂给 GPU 的那层不起眼的软件，以及没人能凭空变出来的土地、电力和芯片。**

Renen Hallak founded VAST Data in early 2016, before the transformer paper and long before ChatGPT, after spending six months as a student trying and failing to prove P=NP. What convinced him computers were the way to crack the hardest open problems was watching neural nets recognize which videos had cats in them: the algorithms were not new, the data access was, and he concluded the infrastructure of the time was built to be either fast or big, never both. That bet produced a company most recently valued at $30 billion, sitting in the middle of Jensen Huang's five layer cake. "Sometimes I like to call it software infrastructure, and other times I like to call it the operating system for this new era."

Renen Hallak 从 2016 年初开始做 VAST Data，那还在 transformer 论文之前，更远在 ChatGPT 之前。念书时他曾花六个月试图证明 P=NP，最后承认自己不够聪明。真正让他相信计算机才是攻克难题的路径的，是看到神经网络能分辨哪些视频里有猫：算法并不新，新的是数据访问的方式。他由此判断，当时的基础设施要么快、要么大，做不到两者兼得。这个判断最终变成一家估值 300 亿美元的公司，位置就在 Jensen Huang 五层蛋糕的中间。「有时我喜欢叫它软件基础设施，有时我喜欢叫它这个新时代的操作系统。」

The technical core is an architecture Hallak calls disaggregated shared everything. Conventional systems shard data across nodes that must talk to each other, which breaks down badly at AI scale, because cluster communication grows quadratically and one failure forces everybody to recover. VAST instead puts storage media on the far side of a fast network, so every node sees everything as if it were locally attached, and one customer cluster already spans multiple exabytes at tens of terabytes per second. On the demand side, Hallak sounds less excited than spooked: a customer that planned for 500 petabytes over three years came back a quarter later asking for two more exabytes, and some AI clouds have stopped selling capacity because they are sold out for a year and a half. He is blunt about why the traditional hyperscalers are behind, saying their lunch is being eaten by someone else, an innovator's dilemma in which the incumbents' existing cash cows keep them from rebuilding the stack. His new announcement is model management plus DataEnclave, confidential computing that lets a regulated enterprise run inference on premises while the model builder's weights stay encrypted end to end, so neither side sees what it should not.

技术核心是他称为 disaggregated shared everything 的架构。传统系统把数据分片到各个节点，节点之间必须互相通信；到了 AI 的规模，这套做法会崩掉，因为集群内的通信量按平方增长，而且任何一个部件出问题都会让所有人都要恢复。VAST 的做法是把存储介质放到高速网络的另一端，让每个节点都像本地挂载一样看到全部数据，目前已经有一个客户集群达到数 EB、每秒数十 TB。需求一侧，Hallak 的语气与其说是兴奋，不如说是有点害怕：一家原本规划三年 500 PB 的客户，一个季度后就回来要求再加 2 EB；一些 AI 云因为未来一年半的产能售罄，已经停止接单。他也直说传统 hyperscaler 为什么落后：他们的午餐正在被别人吃掉，本质上是创新者的窘境，既有的现金牛让他们没法重建整条栈。他这次的新发布是模型管理，以及 DataEnclave：一种机密计算方案，让受监管的企业可以在自己的场地内跑推理，同时模型方的权重保持端到端加密，双方都看不到自己不该看的东西。

https://www.youtube.com/@DataDrivenNYC/videos

## Blog

**Claude Blog: Claude for Small Business launches new workflows, integrations, and training programs**

Claude for Small Business got a large expansion: 43 workflows and 27 new integrations with tools small businesses already use, including Shopify, Salesforce, TikTok, Atlassian, Zoom, Xero, Gusto, Square, Stripe and Zapier. The claim is that these workflows extend Claude from running the back office into growing the business, which is what owners asked for. On the spring Claude SMB Tour, more than 1,000 owners in 10 cities gave feedback, and about a third wanted help generating leads, answering inbound inquiries and writing proposals, while many others wanted day-to-day reporting handled for them. Since launching in May as a set of connectors and ready-to-run workflows, Claude for Small Business has been installed more than 900,000 times. Early partners include Intuit Quickbooks, PayPal, HubSpot, Canva, Docusign, Google Workspace and Microsoft 365.

Claude for Small Business 迎来一次大幅扩展：新增 43 个 workflow 和 27 个集成，对接小企业本来就在用的工具，包括 Shopify、Salesforce、TikTok、Atlassian、Zoom、Xero、Gusto、Square、Stripe 和 Zapier。官方的说法是，这批 workflow 把 Claude 从「管好后台」延伸到「把生意做大」，而这正是老板们提出的需求。在春季的 Claude SMB Tour 上，10 个城市里超过 1000 位企业主给了反馈，大约三分之一的人希望 Claude 能帮忙获客、回复咨询和撰写提案，还有很多人希望日常报表能自动完成。这项服务 5 月上线，最初是一组 connector 和开箱即用的 workflow，目前安装量已超过 90 万次。早期的合作伙伴包括 Intuit Quickbooks、PayPal、HubSpot、Canva、Docusign、Google Workspace 和 Microsoft 365。

The training side scales with the product: the tour returns this fall with free workshops in 10 US cities, more than 150 organizations trained as Approved Claude SMB Trainers will run over 750 workshops in their own communities, and 14 integration partners are hosting free webinars about their connectors. The outcomes owners describe are specific. "What used to take me 120 hours now takes me five minutes," says Pedro Rubio, founder and CEO of Blackfyre GovCon in Washington, D.C. Garrett French, owner of Driller Design Co. in Tulsa, describes an agent that runs at 6:00 am every morning, reads the CRM, prioritizes the to-do list and emails what needs to be done that day. The release is a direct answer to the most common small business request: help growing the business, not just administering it.

培训也随产品一起铺开：巡讲今秋回归，在美国 10 个城市提供免费工作坊；超过 150 家被培训为 Approved Claude SMB Trainer 的机构，将在各自社区举办 750 多场工作坊；还有 14 家集成合作伙伴举办免费 webinar，介绍各自的 connector。企业主给出的结果很具体。华盛顿特区 Blackfyre GovCon 创始人兼 CEO Pedro Rubio 说：「以前要花我 120 个小时的事，现在五分钟就做完了。」图尔萨 Driller Design Co. 的老板 Garrett French 描述了一个每天早上 6 点运行的 agent：它翻查 CRM，把待办事项排好优先级，然后发一封邮件告诉他今天该做什么、哪些最要紧。这次发布的指向很明确，就是回应小企业最集中提出的那个诉求：不只是帮忙打理生意，还要帮忙把生意做起来。

https://claude.com/blog/claude-for-small-business-launches-new-workflows-integrations-and-training-programs

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
