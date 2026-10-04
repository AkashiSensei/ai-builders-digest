[English](../../en/daily/ai-digest-2026-10-04-Sun.md) | [中文](./ai-digest-2026-10-04-Sun.md) | [双语](../../bilingual/daily/ai-digest-2026-10-04-Sun.md)

---

# AI Builders Digest

## 导读

**1. OpenAI 正把重心锁定在简化上，它自己的团队也在展示 dot 能做什么。** 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 说，团队接下来只做几件事：「simplifications, more efficiency for more usage, groundbreaking features or new models」，他承认有时确实要提前投入，但用户的反馈很明确，大家希望产品更简单。他还讲了自己的 dot 如何处理邮箱：批量删除不需要保留的整类邮件、按工作类型给邮件打标签，并逐封带他处理需要回复的邮件，同时在后台上检索相关上下文，这让他第一次做到收件箱清零。OpenAI 负责 Codex 产品的 Nan Yu 用一句话回应了这次简化承诺：「The man has spoken.」（[Thibault Sottiaux](https://x.com/thsottiaux/status/2106610099720720811)、[Thibault Sottiaux](https://x.com/thsottiaux/status/2106603980386394123)、[Thibault Sottiaux](https://x.com/thsottiaux/status/2106602729875685780)、[Nan Yu](https://x.com/thenanyu/status/2106620595534491948)）

**2. Agent 的落地仍然呈双峰分布，瓶颈在产品而不在模型。** Box CEO Aaron Levie 认为，agent 落地分成两块：coding 以及与 coding 相邻的任务已经起飞，其他领域则仍处于很早期，因为大多数工作流还需要围绕 agent 重构，包括重新设计流程、以新方式打通数据、为 agent 参与决策建立问责与责任机制，以及治理、合规和安全方面的调整。他预计会有「100X more agent adoption from what we've seen so far」。Meta 的 AI 高级总监 Madhu Guru 说，AI 落地在很大程度上是一个产品问题：即使在那 2% 的付费用户里，使用深度也很浅，因为大多数 AI 产品看起来「像有 100 个拉杆的飞机驾驶舱」，他预计未来 12 个月内会明显改观。FPV Ventures 合伙人 Nikunj Kothari 把同样的变化称为「创新者的窘境」：Amazon 在保护自己的广告现金牛和品牌，而规模更小的 DoorDash 正通过 CLI 和文本下单慢慢打开大门，因为个人 agent 终将普及；他还提醒：「tokenmaxxing for the sake of doing it is not honestly useful in this era」。Builder Zara Zhang 则直接抛出问题：「How will the world change if coding agents get 10x better?」（[Aaron Levie](https://x.com/levie/status/2106583814709633413)、[Madhu Guru](https://x.com/realmadhuguru/status/2106450089938157720)、[Nikunj Kothari](https://x.com/nikunj/status/2106488814940414455)、[Nikunj Kothari](https://x.com/nikunj/status/2106452873513201930)、[Zara Zhang](https://x.com/zarazhangrui/status/2106405482852434359)）

**3. Builders 正在反对同质化，无论是软件还是 agent 栈。** 设计过 Cursor、Notion 和 Stripe 的 Ryo Lu 写道，当所有人都看着别人来决定自己做什么时，软件会向均值收敛，最后只剩「a tidal wave of mid」；他认为做东西应该更像艺术家，因为「a piece of software expresses beliefs about how life should feel」。在 OpenClaw 和 OpenAI 工作的 Peter Steinberger 开玩笑说「we all are building the same thing」，并提到 OpenClaw 的 Android 应用在 Google 的审核里卡了「over a week in review limbo」。Replit CEO Amjad Masad 发布了「Replit Drift」，并分享了一场与 OpenRouter 的 Alex Atallah 的深度技术对话。（[Ryo Lu](https://x.com/ryolu_/status/2106337039201505453)、[Peter Steinberger](https://x.com/steipete/status/2106489264443981978)、[Peter Steinberger](https://x.com/steipete/status/2106446147791597774)、[Amjad Masad](https://x.com/amasad/status/2106406812316827874)、[Amjad Masad](https://x.com/amasad/status/2106450234369085609)）

**4. AI 的终局看起来是免费的智能、免费的能量，以及一个新的安全论点。** Vercel CEO Guillermo Rauch 预测，安全会成为软件公司里越来越大的一块职能，它既是验证工程，也是资本分配的问题，即「what surface should I throw most tokens at?」；随着 AI 对手越来越老练，这对小团队既是挑战也是机会。他还押注「AI will make everything free, including itself」，而免费能源是「humanity's final frontier」。SPC 普通合伙人、Bevel Health 联合创始人 Aditya Agarwal 写道，AI 既让专业知识变得人人可及，也让每个人的可支配时间近乎无限，这就是「intelligence too cheap to meter」的实际效果。OpenAI 的 Sam Altman 则提出警告：他说自己「very uncomfortable about people trying to ascribe religious force or a surrender of human judgment to AI models, and think it is a real safety issue」。（[Guillermo Rauch](https://x.com/rauchg/status/2106516538836856945)、[Guillermo Rauch](https://x.com/rauchg/status/2106503460384538793)、[Aditya Agarwal](https://x.com/adityaag/status/2106503075209044336)、[Sam Altman](https://x.com/sama/status/2106388373221118198)）

**5. The MAD Podcast with Matt Turck：喂饱 GPU 的那层隐藏软件基础设施。** VAST Data 创始人兼 CEO Renen Hallak 把软件基础设施层称为「operating system for this new era」，它位于 GPU 和模型之间；他说需求一直超出预测，AI clouds 已经卖光产能，而土地、电力和晶圆厂才是真正的天花板。他还认为，机密计算让推理在企业的自有环境里运行，模型权重端到端加密，这会让每个组织都能拥有自己的 AI factory，以及蒸馏进权重里的 IP。（[The MAD Podcast with Matt Turck](https://www.youtube.com/watch?v=awoR908Yu5Y)）

**6. Claude Blog：Cowork 与 chat 合并成一个 Claude，并新增 Docs 和 Slides。** Anthropic 的 Claude 博客宣布，Claude Cowork 与 chat 合并成一个 Claude，用户不必再纠结任务该放在哪里；同时推出 Claude Docs 和 Claude Slides，并让 Claude Design 可以直接在对话里使用。这次更新先在 Pro 和 Max 套餐上线。（[Claude Blog](https://claude.com/blog/cowork-is-now-claude)）

## X / Twitter

### Thibault Sottiaux

负责 OpenAI Codex 和 ChatGPT 的 Thibault Sottiaux 说，团队正在锁定一个很窄的议程：「Only things being worked on are simplifications, more efficiency for more usage, groundbreaking features or new models」。他承认有时确实要提前投入，但反馈很明确，大家希望产品更简单。在另一条推文里，他讲了自己的 dot 为收件箱做了什么：删除所有不需要保留的邮件类别，并批量校验；识别他工作类型的标签，把邮件对应打标；再逐封带他处理需要回复的邮件，同时在后台上检索相关上下文。结果是他人生的第一次收件箱清零，而且顺便处理了很多别人通过邮件发给他的反馈和请求。

- [Thibault Sottiaux: locking in on simplification](https://x.com/thsottiaux/status/2106610099720720811)
- [Thibault Sottiaux: what "dot" did](https://x.com/thsottiaux/status/2106603980386394123)
- [Thibault Sottiaux: first inbox zero](https://x.com/thsottiaux/status/2106602729875685780)

### Nan Yu

在 OpenAI 负责 Codex 产品的 Nan Yu，用一句话回应了 Thibault Sottiaux 的简化承诺：「The man has spoken.」

- [Nan Yu: the man has spoken](https://x.com/thenanyu/status/2106620595534491948)

### Madhu Guru

Meta 的 AI 高级总监 Madhu Guru 认为，「AI adoption is largely a product problem today」。他说，即使在那 2% 的付费用户里，使用深度也很浅，主要原因是大多数 AI 产品看起来「like airplane cockpits with 100 levers」，塞满了 connectors、权限、模型选择和 token 用量。他预计未来 12 个月内，随着产品团队把 AI 产品做得更好用，情况会明显不同。

- [Madhu Guru: AI adoption is a product problem](https://x.com/realmadhuguru/status/2106450089938157720)

### Amjad Masad

Replit CEO Amjad Masad 用一条简短推文发布了「Replit Drift」。他还提示大家去看一场与 OpenRouter 的 Alex Atallah 的深度、偏技术的对话。

- [Amjad Masad: Replit Drift](https://x.com/amasad/status/2106406812316827874)
- [Amjad Masad: talking with OpenRouter's Alex Atallah](https://x.com/amasad/status/2106450234369085609)

### Guillermo Rauch

Vercel CEO Guillermo Rauch 预测，安全会成为软件公司里越来越大的一块职能。他把它拆成两部分：验证工程，比如「my code is probably memory-safe」；以及资本分配，决定「what surface should I throw most tokens at?」。对创业公司来说，他既是挑战也是机会，因为当 AI 对手越来越老练，别人凭什么信任一个「2-person-and-a-dog company」；同时他也指出，小团队现在能切入和颠覆的领域非常多。他还押了一个更大的注：「AI will make everything free, including itself」，而免费能源是最后一块倒下的多米诺骨牌。

- [Guillermo Rauch: security is verification engineering and capital allocation](https://x.com/rauchg/status/2106516538836856945)
- [Guillermo Rauch: AI will make everything free](https://x.com/rauchg/status/2106503460384538793)

### Aaron Levie

Box CEO Aaron Levie 认为，AI agent 的落地「still very bimodal right now」。coding 以及与 coding 相邻的任务已经起飞，而整个知识工作的其他部分仍非常早期；即使在 coding 内部，也有一条很宽的光谱，一端是少数开发者并行运行后台 agent，另一端是大多数人还在和 agent 一对一协作。他说其他知识工作落后的原因是，大多数工作流还需要围绕 agent 重构，这意味着重建流程、以新方式打通数据，还要为 agent 参与决策建立问责与责任机制，并在治理、合规和安全上做出改变。正因如此，他预计会有「100X more agent adoption from what we've seen so far」。

- [Aaron Levie: agent adoption is still bimodal](https://x.com/levie/status/2106583814709633413)

### Ryo Lu

设计过 Cursor、Notion 和 Stripe 的 Ryo Lu 发表了一篇长文，谈「convergence to the mean」。他写道，当每个人都看着别人来决定自己做什么时，我们会复制已经被验证的东西，借用别人的语言和功能，最终「eventually stop making anything of our own」，留下的是一片精致却可互换、没有生命力的产品。AI 让这个循环变得毫无摩擦，因为它能调用的参考比一个人一辈子能看到的还多，但「access to every perspective isn't the same as having one」。他给出的解法是像艺术家一样做东西：通过作品形成自己的视角，让工作之外的生活去滋养它，并把软件当成一种媒介，因为「a piece of software expresses beliefs about how life should feel」。他最后抛出的问题是：「what is the point of everyone being able to make something, if we all end up making the same thing?」

- [Ryo Lu: convergence to the mean](https://x.com/ryolu_/status/2106337039201505453)

### Zara Zhang

Builder Zara Zhang 向这个领域抛出一个面向未来的问题：「How will the world change if coding agents get 10x better?」

- [Zara Zhang: if coding agents get 10x better](https://x.com/zarazhangrui/status/2106405482852434359)

### Nikunj Kothari

FPV Ventures 合伙人 Nikunj Kothari 说，接下来几年会很值得观察，「how this innovator's dilemma plays out in the next few years as personal agents become inevitable」。他指出，Amazon 在保护自己的广告现金牛和品牌，而规模更小的 DoorDash 正通过 CLI，以及让用户用文本下单，慢慢打开大门。在另一条推文里，他反对为了技术而技术：「tokenmaxxing for the sake of doing it is not honestly useful in this era」，不过他也说，做一阵子去探索边界、找到真正的用途是可以的。

- [Nikunj Kothari: personal agents and the innovator's dilemma](https://x.com/nikunj/status/2106488814940414455)
- [Nikunj Kothari: on tokenmaxxing](https://x.com/nikunj/status/2106452873513201930)

### Peter Steinberger

在 OpenClaw 和 OpenAI 工作的 Peter Steinberger 开玩笑说，「we all are building the same thing」。在运营层面，他问有没有人认识 Google 能帮上忙，并说 OpenClaw 的 Android 应用已经「over a week in review limbo」。

- [Peter Steinberger: we are all building the same thing](https://x.com/steipete/status/2106489264443981978)
- [Peter Steinberger: OpenClaw's Android app stuck in review](https://x.com/steipete/status/2106446147791597774)

### Aditya Agarwal

SPC 普通合伙人、Bevel Health 联合创始人 Aditya Agarwal 指出一个常见的误解：以为非常有钱就能无限次接触世界上最好的医生、律师或创意专业人士。他写道，现实是，哪怕你再有钱，世界上顶尖的癌症医生也只会给你 20 到 30 分钟。这正是 AI 如此重要的原因：它既让专业服务变得人人可及，也让每个人的可支配时间近乎无限。他把这称为「the practical effect of intelligence too cheap to meter」。

- [Aditya Agarwal: intelligence too cheap to meter](https://x.com/adityaag/status/2106503075209044336)

### Sam Altman

OpenAI 的 Sam Altman 说，他「very uncomfortable about people trying to ascribe religious force or a surrender of human judgment to AI models, and think it is a real safety issue」。

- [Sam Altman: on AI and human judgment](https://x.com/sama/status/2106388373221118198)

## Podcast

### The MAD Podcast with Matt Turck：Who Feeds the GPUs? Inside AI's Hidden $30B Layer | Renen Hallak, VAST Data

The Takeaway：AI 热潮里最被低估的一层，是把数据喂给 GPU 的软件基础设施，而它的需求增长速度已经超过任何人能实际建出来的速度。

Renen Hallak 是 VAST Data 的创始人兼 CEO，这家公司最新估值达到 300 亿美元，为包括 xAI 在内的头部 AI 玩家和不少全球最大的 AI clouds 提供支持。他把自己公司做的事放在 NVIDIA 那套五层 AI「蛋糕」的正中间：在电力和硬件之上，在模型和应用之下。他说：「Sometimes I like to call it software infrastructure, and other times I like to call it the operating system for this new era.」

旧的技术栈建立在 shared-nothing 架构上，是为文本、数字和数据库列设计的。AI 需要的是另一样东西：既要快、又要非常大的系统，因为数据变成了图像、视频、声音、自然语言和模型权重，而集群规模可以从几百个节点扩展到数百万个节点。VAST 在 2015 年前后开始下注，赌的是当时还不存在的硬件；Hallak 告诉早期 VC 自己没有 plan B，而这个反共识的赌注后来成了公司的护城河。

需求信号相当惊人。有一家 AI cloud 客户原本预测三年需要 500 PB，一个季度后就回来要求在此基础上再加 2 EB。一些 AI clouds 已经停止出售更多产能，因为未来一年半都卖光了，而 Hallak 认为真正的约束是物理层面的：土地、电力、芯片和晶圆厂。具体到推理，他引用了一位大模型厂商的话：「if training is down nobody notices, if inference is down there is no service」，所以韧性、低延迟和安全在推理侧重要得多。

他的增长押注是：每个企业最终都会运行自己的「AI factory」，并拥有蒸馏进微调权重里的 IP。机密计算是解锁点，它让推理在企业自有环境里运行，模型权重从网络到内存再上到 GPU 全程加密。看到 1 万个 agent 围攻一个古老数学问题这样的验证点后，他对未来轨迹很直接：「I think in the next ten years, we'll see more difference than we did in the last thousand years.」

https://www.youtube.com/watch?v=awoR908Yu5Y

## Blog

### Claude Blog：Claude Cowork 与 chat 合并为一个 Claude

Anthropic 的 Claude 博客宣布，Claude Cowork 与 chat 合并成一个 Claude。用户不再需要在一个专门处理大任务的地方和一个专门做视觉工作的工具之间做选择，Claude 现在会自己判断任务需要什么，于是 Cowork 和 Design 的能力可以在任何对话里调用，并带着已有的上下文、skills 和 connectors。这次更新会在接下来几周先向 Pro 和 Max 套餐推出，之后覆盖更多套餐，用户不需要手动开启任何东西。

随之而来的是两个新产品。Claude Docs 和 Claude Slides 在付费套餐上进入 beta，用户可以和自己一起写文档，也可以让 Claude 起草幻灯片，然后直接编辑、从 Claude 里演示，或下载成 PowerPoint 或 PDF。Claude Design 现在也能直接在对话里使用。企业管理员可以决定何时开启这些新能力，Anthropic 说在组织的使用方式发生任何变化前，会提前至少 30 天通知管理员。

这套组合卖的是连续性：一个工作流可以从一句提问开始，最后变成一份中午要交的报告。Claude 会拉出上周 pipeline 的变化、起草文档、标出哪里延期了，并在同一场对话里生成给管理层会议用的五页幻灯片，所以幻灯片天然和报告一致。Senior Economist Andrew Keller 说：「I could have Claude pull up [my legal research database], and it would pull all the cases, read them, figure out which other cases I might need, download them, and store them in a folder for my personal review.」如果你主要用 chat，什么都不用改；如果你一直攒着一个又大又乱的项目，这篇博客说，现在正是时候。

- [Claude Blog: Claude Cowork and chat are now one Claude](https://claude.com/blog/cowork-is-now-claude)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
