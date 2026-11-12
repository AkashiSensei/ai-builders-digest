[English](../../en/daily/ai-digest-2026-11-12-Thu.md) | [中文](./ai-digest-2026-11-12-Thu.md) | [双语](../../bilingual/daily/ai-digest-2026-11-12-Thu.md)

---

# AI Builders Digest

## 导读

信息流里最激烈的讨论不是某个新模型，而是 Nvidia 的领导层问题。Peter Yang 称 Jensen Huang 争议中的出轨行为令人震惊，但他认为这与是否应当因此被解雇是两回事。他希望在董事会采取行动前进行正式调查，并让股东参与决定。Y Combinator 总裁兼 CEO Garry Tan 表示，罢免 Huang 是“不明智的”，因为他的领导力对一个推动未来繁荣的引擎至关重要，并警告说领导层更替可能引发市值大幅崩塌。Replit CEO Amjad Masad 则进一步追问时机：谁会受益，为什么是现在？他提出，希望 AI 封闭、集中和受控的势力，中期选举，或即将到来的 IPO，都可能是时机因素。

SPC 普通合伙人和 Bevel Health 联合创始人 Aditya Agarwal 认为，现在值得构建的 AI 公司有两类。第一类是“AI 扩散”，也就是今天的垂直 SaaS：通过 FDE 公司、rollup 或横向产品，让 AI 尽可能贴近工作发生的地方。他点名了 Profound、Cognition 和 Harvey。第二类是“AI 前沿”：用 AI 加速科学进步，再基于这些进步构建产品。他的投资组合例子包括 Externa、Epana Bio、VenomicsAI 和 Equivariant。他认为第二类被低估了，而且绝大多数由模型驱动的回报将来自这里。

基础设施选择正在以一种不易察觉的方式收敛。FPV Ventures 合伙人 Nikunj Kothari 抓取了 803 家公司的 subprocessor 列表，发现 44% 的公司列出两个或更多模型供应商，高于此前的 33%；33% 的公司列出 inference provider，高于此前的 22%；还有 86 对公司互相把对方列为 subprocessor。他说，在他的样本中，Anthropic 的增速是 OpenAI 的两倍，Modal 继续表现突出，中国模型主要通过视频而不是文本进入这些列表，typesafeai 则是脱颖而出的黑马。他的提醒很重要：subprocessor 列表是滞后指标，但它能具体反映 AI native 公司实际在用什么。

Every CEO Dan Shipper 认为，稀缺的输入是视角，而不是生成能力。他引用 OpenAI 的 GDPval benchmark：AI 在 2024 年有 12.4% 的时候击败人类专家，2025 年为 47.6%，2026 年约为 83%。这条总量曲线看起来像是替代。但当 Every 把同一份客户调查和同样的模型交给不同团队成员时，每个人都发现了不同的有用洞察，因为每个人负责业务的不同部分。在一项实验中，给 Claude 400 次尝试，它能以 93% 的概率生成像 Shipper 会说出的 Slack 回复；但当它需要给自己的答案排序时，他真正会说的答案只有约 60% 的概率进入前 10%。生成很便宜，排序很难，而一个人带来的责任感和视角，才是推动模型超越默认答案的东西。

AI 也正在进入日常协作和创作场景，而产品工艺仍然决定它是否真正落地。Google Labs 推出了 Tabletop，这是一个可以即时创建共享空间的实验，例子包括互动公路旅行地图、晚餐选择转盘、实时 pickleball 对阵表和拖拽式座位表。Claude 提到艺术家 Mariko Mori 在回顾展“All That Shines”中使用 Claude 为一段计算机生成动画编写代码。Vercel CEO Guillermo Rauch 则给自动化热潮加了一个平衡点：做出精彩的产品仍然需要大量人的专注、努力、动力、热爱，以及足够长的注意力持续时间。

## X / Twitter

### Peter Yang

Peter Yang 称 Jensen Huang 争议中的出轨行为令人震惊，但他认为这与是否应当因此被解雇是两回事。他说，董事会应当在采取行动前进行正式调查，并让股东参与决定，同时承认 Huang 建立了一家具有世代意义的公司。（[来源](https://x.com/petergyang/status/2120726673452933269)）

### Garry Tan

Y Combinator 总裁兼 CEO Garry Tan 表示，Nvidia 董事会罢免 Jensen Huang 将是“不明智的”，因为他的领导力对一个“推动我们未来繁荣的引擎”至关重要。他说，很难相信领导层更替不会引发市值大幅崩塌。（[来源](https://x.com/garrytan/status/2120657462353330604)）

### Amjad Masad

Replit CEO Amjad Masad 质疑 Jensen Huang 相关故事的时机，反问“谁会受益，为什么是现在？”他认为，如果被称为“开放模型首要旗手”的 Huang 被拿下，任何希望 AI“封闭、集中和受控”的势力都可能受益，并指出中期选举和即将到来的 IPO 可能是时机因素。（[来源](https://x.com/amasad/status/2120671838909194695)）

### Aditya Agarwal

SPC 普通合伙人和 Bevel Health 联合创始人 Aditya Agarwal 把 AI 创业公司分成两类。“AI 扩散”是今天的垂直 SaaS：通过 FDE 公司、rollup 或横向产品，让 AI 贴近工作发生的地方。他点名了 Profound、Cognition 和 Harvey。“AI 前沿”则是用 AI 加速科学进步，再基于这些进步构建产品，例子包括 Externa、Epana Bio、VenomicsAI 和 Equivariant。他认为第二类被低估了，而且绝大多数由模型驱动的回报将来自这里。（[来源](https://x.com/adityaag/status/2120578134177464356)）

### Nikunj Kothari

FPV Ventures 合伙人 Nikunj Kothari 抓取了 803 家公司的 subprocessor 列表。他发现，44% 的公司列出两个或更多模型供应商，高于此前的 33%；33% 的公司列出 inference provider，高于此前的 22%；还有 86 对公司互相把对方列为 subprocessor。他说，样本中 Anthropic 的增速是 OpenAI 的两倍，Modal 继续表现突出，中国模型主要通过视频而不是文本进入，typesafeai 则是脱颖而出的黑马。他提醒说，subprocessor 列表是滞后指标。（[来源](https://x.com/nikunj/status/2120669243918418237)）

### Dan Shipper

Every CEO Dan Shipper 说，他现在用 AI 完成的工作原本需要五个人和 20 万美元，然后反问自己为什么还需要团队。他引用 OpenAI 的 GDPval benchmark：AI 击败人类专家的比例从 2024 年的 12.4% 上升到 2026 年的约 83%，这是总量视角。亲密视角则不同：Every 的每个人拿到同一份调查和同样的模型，但每个人都发现了不同的洞察，因为每个人承担的责任和视角不同。他提到一项实验：给 Claude 400 次尝试，它能以 93% 的概率预测他的 Slack 回复；但当它需要给自己的答案排序时，他真正的答案只有约 60% 的概率进入前 10%。生成可能性很便宜，知道哪些重要却很难。（[来源](https://x.com/danshipper/status/2120539547620790424)）

### Google Labs

Google Labs 推出了 Tabletop，这是一个让一群人从“我们应该去做”变成“我们真的在做”的新实验。用户可以把链接和文件放进一个共享空间，加入自己的伙伴，然后让 Tabletop 即时创建各种自定义空间，例如互动公路旅行地图、晚餐选择转盘、实时 pickleball 对阵表、周边商品投票板或拖拽式座位表。等候名单目前面向美国 18 岁及以上用户开放。（[来源](https://x.com/GoogleLabs/status/2120549258692882702)）

### Claude

Claude 表示，艺术家 Mariko Mori 在回顾展“All That Shines”中使用 Claude 为一段计算机生成动画编写代码，并以新的视频装置形式呈现。（[来源](https://x.com/claudeai/status/2120669165316915259)）

### Guillermo Rauch

Vercel CEO Guillermo Rauch 认为，做出精彩的产品仍然需要“大量人的专注、努力、动力和热爱”，以及足够长的注意力持续时间。另外，他提到 Beam by Reflection 在 11 月 12 日前免费，并将其描述为美国开放权重、零数据保留。（[来源](https://x.com/rauchg/status/2120601000176439478)；[来源](https://x.com/rauchg/status/2120581196363268265)）

## Podcast

### A New Vision for Human Work After Automation：Dan Shipper, Every

**核心要点：** 当所有人都有同样的模型时，优势不在默认答案，而在一个人带入工作的视角和责任感。

Dan Shipper 是 Every 的联合创始人兼 CEO。他把自己的一周当成测试案例：在会议间隙分析客户调查、为团队做一个游戏、发现把 Every 卖给团队的机会、搭建一个 CRM，并开始联系客户。按前 AI 时代的算法，这大约是五个人的工作，成本约 20 万美元。显而易见的结论是，模型可以取代团队。Shipper 认为这个读法不完整。

他从总量视角开始。在 OpenAI 的 GDPval benchmark 上，他说 AI 在 2024 年有 12.4% 的时候击败人类专家，2025 年为 47.6%，2026 年约为 83%。这条曲线看起来像是人类工作归零。但总量视角必须把人冻结在原地。亲密视角则问一个人能用模型做什么，而不是问模型能对一个静止的人类基线做什么。

Every 用同一份调查和同样的模型做了一次自然实验。Shipper 发现了把产品卖给团队的机会。Yash 发现首次订阅者流失，是因为 Every 发了太多邮件。Douglas 发现很多读者感到孤独，因为身边的人觉得他们对 AI 的热情很奇怪。Jack 把结果做成了一档 Claymation 游戏节目。Claude 的默认答案准确，但泛泛，因此很便宜。Shipper 说：“生成真的很便宜，排序却很难。”团队的价值在于，每个人对世界的不同部分负责，这缩小了他们寻找的范围，也塑造了他们判断什么重要。

他把这个逻辑延伸到 Every 评估负责人 Mike Taylor 的一项实验。给 Claude 400 次尝试，它能以 93% 的概率生成像 Shipper 会说的话。但当它需要给自己的答案排序时，他真正的答案只有约 60% 的概率进入前 10%。一年后，模型的排序能力会更好，但这种比较本身是不公平的：不是 2026 年的 Yash 对 2027 年的 Claude，而是 2027 年的 Yash 使用 2027 年的 Claude，对默认 prompt。这就是 allocation economy：随着能力扩散，默认答案变成基线，真正的 alpha 在于，一个人用自己的视角和责任感推动模型。（[来源](https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL)）

## Blog

已验证的博客 feed 中没有新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
