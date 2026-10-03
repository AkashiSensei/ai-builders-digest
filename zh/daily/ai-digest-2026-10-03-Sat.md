[English](../../en/daily/ai-digest-2026-10-03-Sat.md) | [中文](./ai-digest-2026-10-03-Sat.md) | [双语](../../bilingual/daily/ai-digest-2026-10-03-Sat.md)

---

# AI Builders Digest

## 导读

**1. OpenAI 的 dot 赢得了自家 CEO，重置风波也告一段落。**OpenAI 的 Sam Altman 说 dot 是他目前为止最喜欢的 OpenAI 产品，它每天都在学习他的工作流和风格，因此感觉明显在变好；把这件他不喜欢做、通常会「像恐惧的重力井一样堆积起来」的事情交出去，让他非常开心。Swyx 指出，这家公司「做 dots 已经有一段时间了」，把它当成一次经典的「one more thing」。在运营一侧，负责 Codex 和 ChatGPT 的 Thibault Sottiaux 承认有用户反馈 Pro 500 没有按预期拿到重置额度，承诺调查并补偿，随后确认「全部修好了」。（[Sam Altman](https://x.com/sama/status/2106085986606403684)、[Swyx](https://x.com/swyx/status/2106103958657958298)、[Thibault Sottiaux](https://x.com/thsottiaux/status/2106239435461579088)）

**2. Anthropic 展示 Opus 5.5 与 Sonnet 5.5，并力推 Claude Code mods。**Anthropic 的 Claude 账号分享了一个可剖切、可拆解的交互式 3D 喷气发动机（用 Opus 5.5 制作），以及一座每栋建筑都是画在平面画布上的折纸的弹出式城市（用 Sonnet 5.5 制作）。Claude Code 的 Thariq 说「you should know」是掌握 Claude 能力边界的好方法，也是 mods 能实现的那类事情的好例子，他的结论是：「你真的可以把 Claude Code 变成你自己的。」（[Claude](https://x.com/claudeai/status/2106125478956507480)、[Claude](https://x.com/claudeai/status/2106125477710901276)、[Thariq](https://x.com/trq212/status/2106119299484221762)）

**3. Builders 正在把杂事和付费工具交给 agent。**Peter Yang 说他每年为一个 YouTube 调研工具付将近 300 美元，产品却越来越复杂，于是他试了试 Claude 能不能做出自己真正需要的核心功能，结果 Claude 五分钟就做出来了。FPV Ventures 合伙人 Nikunj Kothari 分享了一个可以在 Claude Code 或 Codex 上跑的 prompt：让它在家里嗅探网络数据包，找出还有什么可以自动化；他给出的背景是他家已经有一个 Hermes agent 在跑个人 Gmail、恒温器、DoorDash 和 Amazon 等。Y Combinator 总裁兼 CEO Garry Tan 把 Capy 形容成「为你的 agent 提供 24/7 站会」，并说一个意外的跨会话协同效果是，一位合作者正在绕开他在多个 Capy 线程里已经做的工作，而且完全与模型无关。（[Peter Yang](https://x.com/petergyang/status/2106072698564874410)、[Nikunj Kothari](https://x.com/nikunj/status/2106072546206773574)、[Garry Tan](https://x.com/garrytan/status/2106092289173213444)）

**4. 来自信息流的两个信号：安全，以及人类味。**Swyx 说「是时候认真对待 Security x AI 了」，警告说与一年前相比格局已经完全改变，流氓 agent 数量爆炸式增长，泄露更多，AI 驱动的攻击也更多，并提到第 2 届 AI Security Summit 由 Snyk Security 担任创始合作伙伴。Meta 的 AI 高级总监 Madhu Guru 说，读到 100% 由人类写成的优秀文字是一种被低估的感受。FirstMark Capital 的 VC Matt Turck 则论证说，说湾区是单一文化「完全不公平：它既有 neo-clouds，也有 neo-labs」。（[Swyx](https://x.com/swyx/status/2106042773510177256)、[Madhu Guru](https://x.com/realmadhuguru/status/2106102222501376050)、[Matt Turck](https://x.com/mattturck/status/2106076198027890750)）

**5. No Priors 播客：为让长时程 agent 变快而生的芯片。**Fractile 创始人兼 CEO Walter Goodwin 认为，快速推理真正的价值不是更跟手的 chatbot，而是让数万亿参数模型以每秒数千 token 的速度运行，从而支撑非常长时程的 agent。Fractile 是一家约 150 人的全栈芯片公司，最初和其他快速推理玩家一样做基于 SRAM 的设计，后来因为上下文长度不断增长、SRAM 难以扩展，转向极高带宽的 DRAM。（[No Priors](https://www.youtube.com/@NoPriorsPodcast)）

**6. Claude Blog：Claude for Small Business 全面扩容。**Claude for Small Business 现在包含 43 个工作流和 27 个新集成，接入小企业已经在用的工具，包括 Shopify、Salesforce、TikTok、Atlassian、Zoom、Xero、Gusto、Square、Stripe 和 Zapier；自 5 月发布以来，它已被安装超过 90 万次。（[Claude Blog](https://claude.com/blog/claude-for-small-business-launches-new-workflows-integrations-and-training-programs)）

## X / Twitter

### Sam Altman

OpenAI 的 Sam Altman 说 dot 是他目前为止最喜欢的 OpenAI 产品。他写道，最让他惊奇的是它每天都在学习更多他的工作流和风格，因此感觉明显在变好；把这件他不喜欢做、通常会「像恐惧的重力井一样堆积起来」的事情交给它，让他非常开心。他还回应了关于 OpenAI 与 Cerebras 合作的「一些猜测」，说 Cerebras 是亲密的合作伙伴，「我们在速度前沿上有很深的投入」。

- [Sam Altman：dot 是他最喜欢的 OpenAI 产品](https://x.com/sama/status/2106085986606403684)
- [Sam Altman：谈与 Cerebras 的合作](https://x.com/sama/status/2106147184693620924)

### Thibault Sottiaux

在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 说，他看到有用户反馈 ChatGPT Pro 500 没有按预期拿到重置额度，于是承诺调查并补偿，随后确认「全部修好了」，还说平台上 Pro 500 用户之多让他有些意外。另外，他预测未来的模型「在删除和简化代码方面会强得多」，并说这项能力来得正是时候。

- [Thibault Sottiaux：Pro 500 重置已修复](https://x.com/thsottiaux/status/2106239435461579088)
- [Thibault Sottiaux：调查 Pro 500 重置问题](https://x.com/thsottiaux/status/2106233145163141249)
- [Thibault Sottiaux：未来模型与代码删除](https://x.com/thsottiaux/status/2106252868307271752)

### Swyx

Swyx 与 smol.ai、Cognition 以及 AI Engineer 社区有关联，他说「是时候认真对待 Security x AI 了」。他写道，与一年前相比格局已完全改变，流氓 agent 数量爆炸式增长，泄露更多，AI 驱动的攻击也更多，安全如今必须处在 AI 对话的中心。他宣布第 2 届 AI Security Summit 由 Snyk Security 担任创始合作伙伴。他还预告说，OpenAI「做 dots 已经有一段时间了」，把它称为一次「one more thing」。

- [Swyx：Security x AI 与 AI Security Summit](https://x.com/swyx/status/2106042773510177256)
- [Swyx：「one more thing」与 dots](https://x.com/swyx/status/2106103958657958298)

### Peter Yang

做实用 AI 教程和访谈的 Peter Yang 说，他每年为一个 YouTube 调研工具付将近 300 美元，而产品变得太复杂，于是他决定试试 Claude 能不能做出他真正需要的核心功能。他说 Claude 五分钟就做出来了。

- [Peter Yang：用 Claude 重建每年 300 美元的工具](https://x.com/petergyang/status/2106072698564874410)

### Thariq

在 Anthropic 负责 Claude Code 的 Thariq 说，「you should know」是掌握 Claude 能力边界的好方法，也是 mods 能实现的那类事情的好例子，他的结论是：「你真的可以把 Claude Code 变成你自己的。」

- [Thariq：Claude Code mods](https://x.com/trq212/status/2106119299484221762)

### Garry Tan

Y Combinator 总裁兼 CEO Garry Tan 说 Capy「像是为你的 agent 提供 24/7 站会」。他描述了一个意外很酷的跨会话协同效果：他在 GBrain 的合作者 Sina 掀起了一波修复，正在绕开他在多个 Capy 线程里已经在做的所有事情，而且完全与模型无关。他还谈到 GBrain 的目标，希望 agent 感觉「像当年的网页那样原生、有表现力、不可避免」，不是一个 chatbot 功能，而是「一个了解你、24/7 帮你的私人 Jiminy Cricket」。

- [Garry Tan：Capy 与跨会话协同](https://x.com/garrytan/status/2106092289173213444)
- [Garry Tan：GBrain 的目标](https://x.com/garrytan/status/2106063850453991758)

### Madhu Guru

Meta 的 AI 高级总监 Madhu Guru 说，「读到 100% 由人类写成的优秀文字」这种感觉被低估了，还说他喜欢文档里「那种人类写出来的味道」。

- [Madhu Guru：谈人类写成的文字](https://x.com/realmadhuguru/status/2106102222501376050)

### Matt Turck

FirstMark Capital 的 VC、MAD Podcast 主持人 Matt Turck 论证说，说湾区是单一文化「完全不公平：它既有 neo-clouds，也有 neo-labs」。

- [Matt Turck：谈湾区](https://x.com/mattturck/status/2106076198027890750)

### Nikunj Kothari

FPV Ventures 合伙人 Nikunj Kothari 分享了一个推荐在 Claude Code 或 Codex 上跑的 prompt，面向家庭自动化爱好者。这个 prompt 让模型在家里嗅探网络数据包，看看还有什么可以自动化；它给出背景说家里已经有一个 Hermes agent 在跑个人 Gmail、恒温器、DoorDash 和 Amazon 等；最后要求列出找到的全部设备，并研究它们如何接入一个 agent。

- [Nikunj Kothari：一个家庭自动化 prompt](https://x.com/nikunj/status/2106072546206773574)

### Claude

Anthropic 的 Claude 账号分享了两个模型作品：一个可剖切、可拆解的交互式 3D 喷气发动机，用 Opus 5.5 制作；以及一座每栋建筑都是画在平面画布上的折纸的弹出式城市，用 Sonnet 5.5 制作。

- [Claude：用 Opus 5.5 做的交互式 3D 喷气发动机](https://x.com/claudeai/status/2106125478956507480)
- [Claude：用 Sonnet 5.5 做的弹出式城市](https://x.com/claudeai/status/2106125477710901276)

## Podcast

### No Priors：Frontier Chips for Frontier AI Labs，对话 Fractile 创始人兼 CEO Walter Goodwin

The Takeaway：快速推理芯片真正的回报不是更跟手的 chatbot，而是让长时程 agent 终于能以每秒数千 token 的速度运行。

Walter Goodwin 是 Fractile 的创始人兼 CEO，这是一家为世界上最大的模型打造极快推理芯片的全栈芯片公司，约 150 人，试图把行业通常拆给很多供应商的事情端到端做下来。他的核心判断是，快速推理这件事一直被人误读。「更跟手的 chatbot，是快速推理里的『更快的马』，」他借用了亨利·福特的那句话。真正的回报，是让一个数万亿参数的模型能以每秒数千 token 的速度从容运行，从而让非常长时程的 agent 变得「快得多」。

他认为，大多数 AI 芯片其实惊人地相似：都依赖 HBM 内存、用于矩阵乘法的 Tensor Core，以及来自 TSMC 的先进封装，再由像 Broadcom 这样数量不多的 ASIC 代工商把设计变成硅片。Fractile 自己的历程从一颗基于 SRAM 的芯片开始，思路上与其他快速推理玩家相似，因为 SRAM 和逻辑住在同一块硅上，带宽极大。但随着上下文长度不断增长，这条路看起来越来越难以扩展。公司转向直接与内存厂商合作，从更便宜的 DRAM 里榨取极高带宽，目标是把每颗芯片的带宽做到 HBM 方案的约 25 倍。经济性很关键，因为在数据中心规模上，成本最终会收敛到你所使用的内存的每 GB 成本。

Goodwin 对设计周期也有反共识的看法。被问到「首席架构师的意图变成可用的 GDSII 文件」需要多久时，他给出一个经验法则：「永远先怀疑自己的逻辑假设，再在时间尺度上除以四。」他认为端到端原型会在几年内出现，而不是十年，尽管最终签核仍会留在成熟的 EDA 厂商手里，因为晶圆厂和它们的设计规则检查才是价值所在。更大的结构性观点关乎市场形态。他说，前沿实验室不可能把自己完全押在自有芯片上，因为如果对手发现了只在不同硬件上运行的算力效率突破，下行风险是生死级的。因此第三方芯片玩家有长期的空间。他给「赢」下的定义是：「如果你能结构性地凿出三到六个月的优势，你就会赢下所有这些部署。」

https://www.youtube.com/@NoPriorsPodcast

## Blog

### Claude Blog：Claude for Small Business 推出新工作流、集成与培训项目

Claude for Small Business 现在包含 43 个工作流和 27 个新集成，接入小企业已经在用的工具，包括 Shopify、Salesforce、TikTok、Atlassian、Zoom、Xero、Gusto、Square、Stripe 和 Zapier。新工作流把 Claude 从处理后台事务扩展到帮助业务增长，并配套一套秋季免费线下工作坊和合作伙伴网络研讨会。这款产品在 5 月发布，最初是一组连接器和开箱即用的工作流，此后已被安装超过 90 万次。

这次发布直接回应了老板们的需求。在春季的 Claude SMB Tour 上，10 个城市里 1000 多位企业主说出了他们希望 Claude 接下来承担什么，其中约三分之一的人希望它帮忙增长业务，具体是生成线索、回答主动咨询、撰写提案。秋季巡演回归，在 10 个美国城市提供免费工作坊，超过 150 家被培训为 Approved Claude SMB Trainers 的组织将在自己的社区举办 750 多场工作坊，另外还有 14 家集成合作伙伴在举办关于其连接器的免费网络研讨会。

客户的结果就是最好的宣传。「过去要花我 120 小时的事情，现在只要五分钟，」Blackfyre GovCon 创始人兼 CEO Pedro Rubio 这样描述他省下来的时间。KBSO Consulting 战略与创新总监 Cara Roellgen 称 Claude 是「小企业的均衡器」，说一家 40 人的公司现在能做 100 人或 200 人公司才能做的事。TruckingMBA 联合创始人 Bill Hood 说，当他们把最终目标告诉 Claude，它就会去测试，90% 的情况下都能做对。文章最后还描绘了「与 Claude 的一周」，从周日晚上安装上手，到周一早上涵盖现金、销售、管道和逾期发票的每周简报，再到撰写提案和月末结账。

- [Claude Blog：Claude for Small Business 推出新工作流、集成与培训项目](https://claude.com/blog/claude-for-small-business-launches-new-workflows-integrations-and-training-programs)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
