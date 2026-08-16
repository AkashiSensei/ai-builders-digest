[English](../../en/daily/ai-digest-2026-08-16-Sun.md) | [中文](./ai-digest-2026-08-16-Sun.md) | [双语](../../bilingual/daily/ai-digest-2026-08-16-Sun.md)

---

# AI Builders Digest

## 导读

按 token 单价比较 AI 价格会误导人。OpenAI 的 Thibault Sottiaux 指出，token 并不是跨模型统一的标准单位：在同样的文本上，GPT-5.6 Sol 的 tokenizer 只用了 766 个 token，而 Claude Opus 5 估计需要 1,170 个，少了约 34.5%。单价更便宜，账单却可能更贵。真正要看的是每个成功结果的价格，需要在自己真实场景里测量。

下一个爆款 AI 产品会是社交化的。Benchmark 的 Sarah 从 Google 到 Pinterest 的消费科技历史出发，认为 AI 的下一个大赢家将是多玩家、带网络效应的体验，由高手把技术变简单，让所有人都能受益；Linear 的产品负责人 Nan Yu 也表达了同样的向往，梦想着让一队 agents 把录好的内容变成行动和可运行的软件。

AI 在抬高 UX 的门槛。Meta AI 高级总监 Madhu Guru 说，B2B 软件再也没有理由拥有糟糕的 UX：有了 AI，每个软件产品都可以也应该做到和最好的消费级软件一样易用。

Scaling laws 不是物理定律。Replit CEO Amjad Masad 反驳了“AI 会因为算力密集而结构性集中权力”的说法，指出 125 年来算力性价比呈超指数增长，效率持续提升意味着 AGI 级能力不会永远需要数据中心才能运行。

持久价值来自可重组的组件和真正的护城河。Vercel CEO Guillermo Rauch 认为 React 的成功很大程度要归功于 shadcn；Anthropic 的 Thariq 分享了用 Claude 做的、用来理解无质量损失水印的 artifact；FPV 的 Nikunj Kothari 认为护城河来自深度嵌入的软件和关系，而不是表演式的 996；YC CEO Garry Tan 则用创纪录的粮食产量作为进步的证据。

## X / Twitter

- Swyx 反驳了“顶尖科技圈的人私下都互相认识”的刻板印象。以他的观察，头条人物之间其实很少见面或认识，“秘密小圈子群聊”只是短暂存在的例外，大多数人仍然把精力花在做事情上，而不是经营叙事或八卦，这让他感到安心。
  https://x.com/swyx/status/2088755688361378082

- OpenAI 的 Thibault Sottiaux 认为按 token 单价比较 AI 价格没有意义，因为 token 不像克或千瓦时那样是标准化单位。在同样的文本上，GPT-5.6 Sol 的 tokenizer 用了 766 个 token，而 Claude Opus 5 估计需要 1,170 个，少了约 34.5%，单价更低不一定意味着账单更低。他认为真正重要的是每个成功结果的价格，必须在自己场景里实际测量。
  https://x.com/thsottiaux/status/2088866513008873560

- Peter Yang 完全同意 Dario 的判断：用 AI 治愈疾病，并加快 AI 医疗突破的监管审批，可能给人类带来比其他所有事加起来高 10 倍的好处。他还预告了与 Riley Brown 的新一期节目，讲如何用 Codex 运营整个内容业务，并演示了缩略图工作流：先用 Codex 找到细分领域 100 个表现最好的缩略图放进 Paper canvas，再用 Paper 把自己的照片和这些缩略图混搭。
  https://x.com/petergyang/status/2088772605323214999
  https://x.com/petergyang/status/2088626815166464507

- Linear 产品负责人 Nan Yu 分享了他称之为“梦想”的愿景：整天坐在公园里和朋友录内容，然后让一队 agents 把这些内容变成行动和可运行的软件。
  https://x.com/thenanyu/status/2088810666958196988

- Meta AI 高级总监 Madhu Guru 认为 B2B 软件再也没有理由拥有糟糕的 UX：借助 AI，每个软件产品都可以也应该做到和最好的消费级软件一样易用。
  https://x.com/realmadhuguru/status/2088710566689018103

- Anthropic 的 Thariq 分享了用 Claude 做的一个 artifact，用来理解水印如何做到无质量损失，他坦言这“感觉不应该能行”。
  https://x.com/trq212/status/2088721023223132213

- Replit CEO Amjad Masad 反驳了“AI 因为算力密集而结构性集中权力”的说法。他引用 125 年来算力性价比的超指数增长，并指出 scaling laws 只是经验关系，不是物理定律：改变架构、目标或数据集，就会得到不同的曲线。如果大脑是参考，真正的 AGI 会很高效，当前的 scaling laws 也许是一个 bug，而不是 feature。
  https://x.com/amasad/status/2088867492907327573

- Vercel CEO Guillermo Rauch 认为，人们没有意识到 React 的成功有多大程度要归功于 shadcn。他曾把 React 称为“成年人的乐高积木”，但其实那更像是对积木几何形状的描述，也就是 spec。shadcn 才是人们真正想要的：可复用、高质量、可调参的组件，一个“伪库”，代码是用来被吸收进 context window 再重新混合的。
  https://x.com/rauchg/status/2088757738037989755

- YC 总裁兼 CEO Garry Tan 发了一条“白丸时间线净化”：创纪录的粮食产量逐年向上向右，这是市场与技术合作数千年的成果，也是进步与丰饶的证据。
  https://x.com/garrytan/status/2088661047913914847

- FPV Ventures 合伙人 Nikunj Kothari 讲了一个故事：一位 stealth 模式的投资组合创始人的关键合同因为官僚流程卡在“1 码线”。他的看法是，短期痛苦会变成长期护城河；真正的护城河是需要经历痛苦才能建立的深度嵌入式软件和关系，而不是表演式的 996。
  https://x.com/nikunj/status/2088716743615352963

## Podcast

- AI & I by Every：《Why the Next Hit AI Product Will Be Social Why the Next Hit AI Product Will Be Social (Best of the Pod)》

  **The Takeaway：** 下一个爆款 AI 消费产品会是社交化的：一种多玩家、带网络效应的体验，由高手把技术变简单，让所有人都能用上。

  Benchmark 合伙人 Sarah 曾是最早加入 Pinterest 的一批人，也学过哲学。她把消费科技史看作一条滑杆：底层技术越成熟，主导权越从深度技术型创始团队滑向产品天才。Google 时代大约 95% 靠后端工程；到了 Pinterest、Snap 和 Instagram 的时代，CEO 们几乎都不是技术出身，而是“产品天才”。她认为 AI 还处在这条曲线的前段。ChatGPT 只是“一个文本框”，和当年的 Google 一样；custom GPTs 让她觉得可惜，“它显然出自一个能力超群、但不懂社交的团队”。她的判断是，会有人做出一个 UGC 社区，让真正擅长用 AI 的人可以被找到、被关注、被信任，从而让所有人更容易用好这项技术，这个产品甚至可能最终蚕食 ChatGPT。她还把“工作向”的产品（ChatGPT、Claude）和“个人向”的 AI 朋友区分开，并借用 Eugene Wei 的框架指出，社交产品需要 status-seeking 机制。谈到网络效应，她区分了“幻灯片上的词”和真正的早期证据，比如 Agentio，一个用 LLM 自动化掉创作者经济摩擦的 marketplace。她还预测 AI 会通过个人训练数据、pre-mortem 和人才评分重塑 VC 的决策方式，但最终做决定的人仍然是人：“你不是让 LLM 给你答案，而是让它帮你审视你的思考。”
  https://www.youtube.com/watch?v=dlI-5W7d7uU

## Blog

验证过的 feed 中没有新的合格博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
