[English](../../en/daily/ai-digest-2026-09-25-Fri.md) | [中文](./ai-digest-2026-09-25-Fri.md) | [双语](../../bilingual/daily/ai-digest-2026-09-25-Fri.md)

---

# AI Builders Digest

## 导读

**1. 模型支出的格局正在被实时重新定价。**Vercel CEO Guillermo Rauch 公布了 Vercel AI Gateway 最近两个月的支出数据，市场结构变化很大。Anthropic 的支出仍然排第一，但从 69% 滑落到 40%；OpenAI 从 10% 升到 24%，并在 token 用量上开始领先；GPT-6 Astra 和 GPT 5.6 Sol「非常猛」；Opus 5.5 上线两天就占到 10% 的支出；Kimi K3 和 DeepSeek 拿走了 Anthropic 流失份额的大约一半；图像生成方面 OpenAI 占 62%。（[Vercel AI Gateway 数据](https://x.com/rauchg/status/2103216656747262419)）

**2. AI 栈里最重要的那一层，恰恰是几乎没人谈论的一层。**VAST Data CEO Renen Hallak 说，公司就坐在 Jensen Huang 那个五层蛋糕的中间：为上面的模型公司和下面的硬件厂商提供软件基础设施，管理算力、存储、网络和数据。这个不起眼的位置让 VAST 成为一家估值 300 亿美元的公司，客户包括 CoreWeave、Nebius、Mistral 和 Nscale；他说，正是这套 shared everything 架构，让那些基于老的 shared nothing 设计和 S3 之类服务的厂商在 AI 时代的工作负载上吃力。（[Matt Turck 谈 VAST](https://x.com/mattturck/status/2103167531917721866)）

**3. 需求正在跑赢物理世界的建设速度。**Hallak 说，有一家 AI 云客户原本预计三年需要 500 PB，结果一个季度后回来，要求在此基础上再加 2 EB；还有客户因为未来一年半的产能已经卖光而停止接单。他在任何地方都看不到闲置的基础设施，真正的瓶颈是土地、电力、芯片和晶圆厂，他预计这个速度还能持续五到十年。（[MAD Podcast 对话 Renen Hallak](https://www.youtube.com/@DataDrivenNYC/videos)）

**4. 机密计算正在成为让受监管企业愿意上车的信任层。**VAST 这次发布的核心是模型管理，其中包括 DataEnclave：企业可以在自己的场地内跑推理，模型方的权重则端到端加密，底层借助 Nvidia 的加密内存能力。Hallak 认为这不是技术突破，而是「一个时机已到的想法」，并且认为处在这么底层的位置，正是执行「谁、以及哪个 agent 能看到什么」这类策略的合适场所。（[MAD Podcast 对话 Renen Hallak](https://www.youtube.com/@DataDrivenNYC/videos)）

**5. agent 时代的手艺，正从 prompt 技巧转向设定目标和设计工具。**Peter Steinberger 提醒，如果你只是让 agent「清理一下」，它会远远过早地停下来，应该给它一个有野心的目标，比如「删掉 20% 最没用的测试，同时把代码覆盖率的变化控制在 2% 以内」。Thariq 说 Claude Code 会把 plan mode 做成内置的 mod，用户可以自定义 plan mode 的 prompt、创建并分享自己的 mode，或者干脆忽略它，把 shift+tab 重新绑定到别的功能。（[Peter Steinberger](https://x.com/steipete/status/2103148444701610233)、[Thariq](https://x.com/trq212/status/2103212051065921632)）

**6. 从产品到市场，各种动作在整条栈上叠加。**Google Labs 上线了 Dreambeans：每天早上固定数量的「beans」，把用户指向真实世界；Replit CEO Amjad Masad 说 Muse 现在可以在 Replit 上做 app；Claude for Small Business 在超过 90 万次安装的基础上，又新增了 43 个 workflow 和 27 个集成。媒体侧，Swyx 说他那套「Scaling without Slop」的打法终于开始奏效，并预告了 Latent Space 和 AINews 的下一阶段；FPV Ventures 合伙人 Nikunj Kothari 则判断，每一个做 trades 的小企业最终都会有属于自己的定制软件。（[Josh Woodward](https://x.com/joshwoodward/status/2103182635992514569)、[Amjad Masad](https://x.com/amasad/status/2103129037011120525)、[Claude Blog](https://claude.com/blog/claude-for-small-business-launches-new-workflows-integrations-and-training-programs)、[Swyx](https://x.com/swyx/status/2103361254433993165)、[Nikunj Kothari](https://x.com/nikunj/status/2103360292973633770)）

## X / Twitter

### Swyx

Swyx 说，他今年 1 月下注的内容策略「Scaling without Slop」终于开始奏效：YouTube 从 0 到第一个 10 万订阅用了三年，而再涨 10 万只用了 1.2 个月，AEO、SEO 和订阅等其他指标也有类似走势。他还预告了 Latent Space、AINews 以及 swyx inc 的下一阶段。

- [Swyx：Latent Space 和 AINews 的下一阶段](https://x.com/swyx/status/2103361254433993165)

### Josh Woodward：Google 副总裁，负责 Google Labs、Gemini App 和 Google AI Studio

Josh Woodward 介绍了 Dreambeans，这是 Google Labs 里较新的实验之一，他说它正在积累一批忠实的追随者。逻辑很简单：每天早上固定数量的「beans」会煮好，它们把你指向真实世界，和真实的人一起做你在乎的事。

- [Josh Woodward：Google Labs 的 Dreambeans](https://x.com/joshwoodward/status/2103182635992514569)

### Peter Yang

Peter Yang 对当前模型竞赛的判断是：Astra 把 3D 模型掀翻了，接着 Opus 又把视频掀翻了，他已经不知道下一个会是什么。他还分享了一个 prompt 观察：顺着 AI 的「自我」去夸它，是有用的。

- [Peter Yang：Astra 掀翻 3D 模型，Opus 掀翻视频](https://x.com/petergyang/status/2103318850641260959)
- [Peter Yang：顺着 AI 的「自我」是有用的](https://x.com/petergyang/status/2103310612864569388)

### Thariq：Anthropic 的 Claude Code

Thariq 回应了用户反馈：很多人自己就会做规划，不需要 plan mode；另一些人则喜欢进入一个「Claude 只是在思考、和你一起头脑风暴」的模式。他的计划是把 plan mode 做成内置的 mod，并允许 mod 添加新的 mode，或者覆盖 shift+tab。这样一来，用户就可以自定义 plan mode 的 prompt、创建并分享自己的 mode，或者干脆忽略它，把 shift+tab 重新绑定。

- [Thariq：把 plan mode 做成内置 mod](https://x.com/trq212/status/2103212051065921632)
- [Thariq：自定义 plan mode 的 prompt，或重新绑定 shift+tab](https://x.com/trq212/status/2103212052391354794)

### Amjad Masad：Replit CEO

Amjad Masad 宣布，Muse 现在可以在 Replit 上做 app。

- [Amjad Masad：Muse 现在可以在 Replit 上做 app](https://x.com/amasad/status/2103129037011120525)

### Guillermo Rauch：Vercel CEO

Guillermo Rauch 分享了 AI Gateway 两个月的支出数据，显示模型市场正在 Anthropic 脚下发生位移：Anthropic 的支出仍居第一，但从 69% 降到 40%；OpenAI 从 10% 升到 24%，并在 token 用量上领先；Opus 5.5 两天内就达到 10% 的支出占比；Kimi K3 加 DeepSeek 拿走了 Anthropic 流失份额的一半左右。他特别点出 GPT-6 Astra 和 GPT 5.6 Sol「非常猛」，并提到图像生成中 OpenAI 占 62%。

- [Guillermo Rauch：OpenAI、Anthropic 与开源模型的支出对比](https://x.com/rauchg/status/2103216656747262419)

### Matt Turck：FirstMark Capital 投资人，MAD Podcast 主持人

Matt Turck 发布了他与 VAST Data CEO Renen Hallak 的对话，主题是 Jensen Huang 那个 AI 五层蛋糕的中间层：很少有人真正理解的软件基础设施，VAST 正是在这里成为一家估值 300 亿美元、客户包括 CoreWeave、Nebius、Mistral 和 Nscale 的公司。这一期也指向 VAST 关于前沿模型与敏感数据的发布。

- [Matt Turck：VAST 如何在这个隐形的 AI 软件层成为 300 亿美元公司](https://x.com/mattturck/status/2103167531917721866)
- [Matt Turck：这期对话也在 Spotify、Apple Podcasts 和 YouTube 上](https://x.com/mattturck/status/2103167536141353053)

### Nikunj Kothari：FPV Ventures 合伙人

Nikunj Kothari 分享了一个他正在下注的判断：每一个小企业主，具体来说是在 trades 行业里，最终都会拥有定制软件；而最后一公里正是差异化的来源，也就是你为客户和员工提供的独特体验。

- [Nikunj Kothari：每个 trades 行业的小企业都会有定制软件](https://x.com/nikunj/status/2103360292973633770)

### Peter Steinberger：OpenClaw 与 OpenAI

Peter Steinberger 说他用 Daybreak 跑了一遍，又发现了 8 个长期存在的漏洞，并提醒大家要照顾好自己的开源依赖。他还给了一条很具体的 agent 建议：如果你只是让 agent 去清理，它会远远过早地停下，所以要给它一个有野心的目标，比如「删掉 20% 最没用的测试，同时把代码覆盖率的变化控制在 2% 以内」。

- [Peter Steinberger：Daybreak 又发现了 8 个长期漏洞](https://x.com/steipete/status/2103200311641076100)
- [Peter Steinberger：给清理型 agent 一个有野心的目标](https://x.com/steipete/status/2103148444701610233)

## Podcast

### The MAD Podcast with Matt Turck: Who Feeds the GPUs? Inside AI's Hidden $30B Layer | Renen Hallak, VAST Data

**核心结论：这轮 AI 建设真正的瓶颈，既不是模型也不是 GPU，而是夹在中间、负责把数据喂给 GPU 的那层不起眼的软件，以及没人能凭空变出来的土地、电力和芯片。**

Renen Hallak 从 2016 年初开始做 VAST Data，那还在 transformer 论文之前，更远在 ChatGPT 之前。念书时他曾花六个月试图证明 P=NP，最后承认自己不够聪明。真正让他相信计算机才是攻克难题的路径的，是看到神经网络能分辨哪些视频里有猫：算法并不新，新的是数据访问的方式。他由此判断，当时的基础设施要么快、要么大，做不到两者兼得。这个判断最终变成一家估值 300 亿美元的公司，位置就在 Jensen Huang 五层蛋糕的中间。「有时我喜欢叫它软件基础设施，有时我喜欢叫它这个新时代的操作系统。」

技术核心是他称为 disaggregated shared everything 的架构。传统系统把数据分片到各个节点，节点之间必须互相通信；到了 AI 的规模，这套做法会崩掉，因为集群内的通信量按平方增长，而且任何一个部件出问题都会让所有人都要恢复。VAST 的做法是把存储介质放到高速网络的另一端，让每个节点都像本地挂载一样看到全部数据，目前已经有一个客户集群达到数 EB、每秒数十 TB。需求一侧，Hallak 的语气与其说是兴奋，不如说是有点害怕：一家原本规划三年 500 PB 的客户，一个季度后就回来要求再加 2 EB；一些 AI 云因为未来一年半的产能售罄，已经停止接单。他也直说传统 hyperscaler 为什么落后：他们的午餐正在被别人吃掉，本质上是创新者的窘境，既有的现金牛让他们没法重建整条栈。他这次的新发布是模型管理，以及 DataEnclave：一种机密计算方案，让受监管的企业可以在自己的场地内跑推理，同时模型方的权重保持端到端加密，双方都看不到自己不该看的东西。

https://www.youtube.com/@DataDrivenNYC/videos

## Blog

**Claude Blog: Claude for Small Business launches new workflows, integrations, and training programs**

Claude for Small Business 迎来一次大幅扩展：新增 43 个 workflow 和 27 个集成，对接小企业本来就在用的工具，包括 Shopify、Salesforce、TikTok、Atlassian、Zoom、Xero、Gusto、Square、Stripe 和 Zapier。官方的说法是，这批 workflow 把 Claude 从「管好后台」延伸到「把生意做大」，而这正是老板们提出的需求。在春季的 Claude SMB Tour 上，10 个城市里超过 1000 位企业主给了反馈，大约三分之一的人希望 Claude 能帮忙获客、回复咨询和撰写提案，还有很多人希望日常报表能自动完成。这项服务 5 月上线，最初是一组 connector 和开箱即用的 workflow，目前安装量已超过 90 万次。早期的合作伙伴包括 Intuit Quickbooks、PayPal、HubSpot、Canva、Docusign、Google Workspace 和 Microsoft 365。

培训也随产品一起铺开：巡讲今秋回归，在美国 10 个城市提供免费工作坊；超过 150 家被培训为 Approved Claude SMB Trainer 的机构，将在各自社区举办 750 多场工作坊；还有 14 家集成合作伙伴举办免费 webinar，介绍各自的 connector。企业主给出的结果很具体。华盛顿特区 Blackfyre GovCon 创始人兼 CEO Pedro Rubio 说：「以前要花我 120 个小时的事，现在五分钟就做完了。」图尔萨 Driller Design Co. 的老板 Garrett French 描述了一个每天早上 6 点运行的 agent：它翻查 CRM，把待办事项排好优先级，然后发一封邮件告诉他今天该做什么、哪些最要紧。这次发布的指向很明确，就是回应小企业最集中提出的那个诉求：不只是帮忙打理生意，还要帮忙把生意做起来。

https://claude.com/blog/claude-for-small-business-launches-new-workflows-integrations-and-training-programs

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
