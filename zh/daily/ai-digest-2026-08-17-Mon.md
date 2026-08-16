[English](../../en/daily/ai-digest-2026-08-17-Mon.md) | [中文](./ai-digest-2026-08-17-Mon.md) | [双语](../../bilingual/daily/ai-digest-2026-08-17-Mon.md)

---

# AI Builders Digest

## 导读

按 token 单价比较 AI 价格会误导人。OpenAI 的 Thibault Sottiaux 指出，token 并不是跨模型统一的标准单位：在同样的文本上，GPT-5.6 Sol 的 tokenizer 用了 766 个 token，而 Claude Opus 5 估计需要 1,170 个，少了约 34.5%。单价更便宜，账单却可能更贵。他说，真正重要的是每个成功结果的价格，必须在自己真实的使用场景里去测量。

下一个爆款 AI 产品会是社交化的。Benchmark 合伙人 Sarah 认为，AI 的下一个消费级大赢家将是多人在线、带网络效应的体验，让高手用户把技术变得对所有人都更简单；Linear 的产品负责人 Nan Yu 也表达了同样的向往，梦想着让一队 agents 把录好的内容变成行动和可运行的软件。

AI 在抬高 UX 的门槛。Meta 的 AI 高级总监 Madhu Guru 说，B2B 软件再也没有借口把 UX 做得这么差：有了 AI，每个软件产品都可以也应该做到和最好的消费级软件一样好用。

Scaling laws 不是物理定律。Replit CEO Amjad Masad 反驳了"AI 会因算力密集而结构性集中权力"的说法，指出 125 年来算力性价比呈超指数增长，效率持续提升意味着 AGI 级能力不会永远需要数据中心才能运行。

持久的价值来自可重组的组件和真正的护城河。Vercel CEO Guillermo Rauch 认为 React 的成功很大程度要归功于 shadcn；Anthropic 的 Thariq 分享了用 Claude 做的、用来理解无质量损失水印原理的 artifact；FPV Ventures 合伙人 Nikunj Kothari 认为护城河来自深度嵌入的软件和关系，而不是表演式的内卷；YC CEO Garry Tan 则用创纪录的粮食产量作为进步的证据。

## X / Twitter

- Swyx 反驳了"顶尖科技圈的人私下都互相认识"的刻板印象。以他的观察，头条人物之间其实很少见面或相识，"秘密小圈子群聊"只是短暂存在的例外，大多数人仍然把精力花在做事情上，而不是经营叙事或八卦，这让他感到安心。
  https://x.com/swyx/status/2088755688361378082

- OpenAI 的 Thibault Sottiaux 认为按 token 单价比较 AI 价格没有意义，因为 token 不像克或千瓦时那样是标准化单位。在同样的文本上，GPT-5.6 Sol 的 tokenizer 用了 766 个 token，而 Claude Opus 5 估计需要 1,170 个，少了约 34.5%，单价更低不一定意味着账单更低。他认为真正重要的是每个成功结果的价格，必须在自己场景里实际测量。
  https://x.com/thsottiaux/status/2088866513008873560

- Peter Yang 完全同意 Dario 的判断：用 AI 治愈疾病，并加快 AI 医疗突破的监管审批，可能给人类带来比其他所有事加起来高 10 倍的好处。他还预告了与 Riley Brown 的新一期节目，讲如何用 Codex 运营整个内容业务，并演示了缩略图工作流：先用 Codex 找到细分领域 100 个表现最好的缩略图放进 Paper 画布，再用 Paper 把自己的照片和这些缩略图混搭。
  https://x.com/petergyang/status/2088772605323214999
  https://x.com/petergyang/status/2088626815166464507

- Linear 产品负责人 Nan Yu 分享了他称之为"梦想"的愿景：整天坐在公园里和朋友录内容，然后让一队 agents 把这些内容变成行动和可运行的软件。
  https://x.com/thenanyu/status/2088810666958196988

- Meta AI 高级总监 Madhu Guru 认为 B2B 软件再也没有借口拥有糟糕的 UX：借助 AI，每个软件产品都可以也应该做到和最好的消费级软件一样好用。
  https://x.com/realmadhuguru/status/2088710566689018103

- Anthropic 的 Thariq 分享了用 Claude 做的一个 artifact，用来理解水印如何做到不损失质量，他坦言这"感觉不太像是能成立的事"。
  https://x.com/trq212/status/2088721023223132213

- Replit CEO Amjad Masad 反驳了"AI 因为耗算力所以会结构性集中权力"的说法。他引用 125 年来算力性价比的超指数增长，并指出 scaling laws 只是经验关系，不是物理定律：改变架构、目标或数据集，就会得到不同的曲线。如果大脑可以作参考，真正的 AGI 会非常高效，当前的 scaling laws 可能是一个 bug，而不是 feature。
  https://x.com/amasad/status/2088867492907327573

- Vercel CEO Guillermo Rauch 认为，人们没有意识到 React 的成功有多大程度要归功于 shadcn。他曾把 React 称作"成人的乐高积木"，但他说那其实只是描述积木几何形状的规格说明，而 shadcn 才是人们真正想要的东西：可复用、高质量、可调优的组件，一种"伪库"，它的代码本意就是被读进你的 context window 然后重新组合。
  https://x.com/rauchg/status/2088757738037989755

- YC 总裁兼 CEO Garry Tan 发了一条"白药丸时间线净化器"：粮食产量年复一年创下纪录，曲线不断向右上延伸，这是市场和技术共同作用数千年的产物。
  https://x.com/garrytan/status/2088661047913914847

- FPV Ventures 合伙人 Nikunj Kothari 讲了一个故事：他投资的一家隐形公司，关键合同和合作因为官僚流程卡在"最后一码线"。他的观点是：这种短期痛苦最终会变成长期护城河，真正的护城河是需要付出痛苦去建立的深度嵌入的软件和关系，而不是表演式的 996 奋斗。
  https://x.com/nikunj/status/2088716743615352963

## Podcast

- AI & I by Every："Why the Next Hit AI Product Will Be Social Why the Next Hit AI Product Will Be Social (Best of the Pod)"

  **核心结论（The Takeaway）：** 下一个突破性的 AI 消费产品将是社交化的：一种多人在线、带网络效应的体验，让高手用户把技术变得对所有人都更简单。

  Benchmark 合伙人 Sarah 很早就加入了 Pinterest，还学过哲学。她把消费科技史看作一个滑杆：随着底层技术成熟，主导者从深度技术型的创始团队，一路滑向产品天才。Google 大约有 95% 的功夫花在后台工程上；到了 Pinterest、Snap 和 Instagram 的时代，CEO 们完全不懂技术，但都是产品天才。她认为 AI 还处在这条曲线的早期。ChatGPT 就像当年的 Google 一样，"只是一个文本框"；custom GPTs 让她觉得遗憾："这显然出自一个能力惊人但不做社交的团队。"她押注会有人做出一个 UGC 社区，让真正擅长写 prompt 的高手可以被找到、被关注、被信任，从而让技术对所有人都容易得多，这个产品甚至可能最终蚕食 ChatGPT。她还把"工作向"的场景（ChatGPT 和 Claude 所在的场景）和"个人向"的 AI 朋友区分开来，并认为社交产品需要地位追逐机制，这也延续了 Eugene Wei 的框架。谈到网络效应时，她区分了只是"幻灯片上的词"的飞轮和有早期证据的产品，举例说 Agentio 这个 marketplace 用 LLM 自动化了长期阻碍创作者经济的摩擦。她还预期 AI 会通过个人训练数据、事前验尸（pre-mortem）和人才评分来重塑 VC 的决策方式，而人类仍然是最终拍板的人："你不是让 LLM 给你答案……你是让它来检验你的思考。"
  https://www.youtube.com/watch?v=dlI-5W7d7uU

## Blog

经过验证的 feed 在过去 24 小时内没有新的合格博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
