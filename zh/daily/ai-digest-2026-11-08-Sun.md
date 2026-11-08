[English](../../en/daily/ai-digest-2026-11-08-Sun.md) | [中文](./ai-digest-2026-11-08-Sun.md) | [双语](../../bilingual/daily/ai-digest-2026-11-08-Sun.md)

---

# AI Builders Digest

## 导读

今天最清晰的信号是，agentic coding 正从更快的自动补全，变成对项目周期的压缩。Andrej Karpathy 把一份 YouTube 频道清单做成了一个收录 47,000 个视频的观看应用，他说自己用 Claude Code 一次就跑通了，耗时三分钟。Box CEO Aaron Levie 更进一步，认为最好的团队现在能获得比 AI 之前高出一到两个数量级的产出，而且差距还在扩大，没有收敛。

算力设施放在哪里，正在成为战略变量。Levie 认为，长时运行的 agent 对延迟不敏感，推理可以放在远端的“AI factory”里，只把结果传回用户。SPC 普通合伙人 Aditya Agarwal 关注由此产生的瓶颈：如果数据中心越来越难建，已有容量持有者会更有优势，而新的前沿模型训练会变慢。

Robinhood CEO Vlad Tenev 想让“所有权”，而不只是“访问权”，来组织 AI 的下一阶段。他说，一个没有广泛所有权的社会是脆弱的，并认为当前由 AI 推动的数学发现过于集中。他联合创办的数学 AI 公司 Harmonic 做出了拿过奥赛金牌的模型，但他更希望这些工具掌握在每一位数学家手里。

Agentic finance 在 Robinhood 内部已经显示出产品市场契合。超过 150,000 名客户开立了 agentic trading 账户，Tenev 说最近一次公布的数字约为每天 3,000 万次工具调用。公司正用交易 harness、应用商店、股票代币化、预测市场，以及计划中的 KPI 合约来扩展这套模式。

私募 AI 公司的上涨空间，仍是散户缺失的一块。Tenev 指出，最大的 AI 公司大多未上市，普通投资者无法分享正在向机构集中的收益。Robinhood Ventures、私募公司代币化、降低合格投资者门槛，以及 Trump accounts，都是在政治阻力固化之前扩大所有权基础的尝试。

今天较小的信号也指向同样的压力：OpenAI 在解释 Pro 套餐的限制和使用倍数，Peter Steinberger 反对围绕开源 Asahi 项目增加新限制，Zara Zhang 认为创业公司的结局是被做出来的，不是注定的，Nikunj Kothari 在讽刺 Series A 的 FOMO，Garry Tan 则把超级智能框定为一道政治选择题。产品包装、开放程度和执行质量，仍然与更大的 AI 争论密不可分。

## X / Twitter

### Andrej Karpathy

看到 Tristan 发布的顶级 YouTube 频道清单后，Andrej Karpathy 做了 TristanTube。这个观看应用收录 47,000 个“super nerdy”视频，并带有适合轻松观看的 TV 模式。他说自己用 Claude Code 一次就跑通了项目，耗时三分钟，这次开发本身也成了 agent 辅助原型开发的简短演示。([post](https://x.com/karpathy/status/2119114537442189652))

### Aaron Levie

Box CEO Aaron Levie 说，现在编程中已经出现比 AI 之前高出一到两个数量级的产出提升案例。他把原因归于合适的 harness、深厚的领域理解、相对较新的代码库、同时使用多个 agent 的熟练度，以及低摩擦的测试和部署流程。随着模型进步，这个差距没有缩小；过去的积累加上愿意改变做法，会继续放大优势。([post](https://x.com/levie/status/2119111328099168409))

Levie 还认为，AI 推理对延迟的敏感度异常低。长时运行的 agent 可以把工作送到远端的“AI factory”，只返回最终结果，也不必在推理地点长期保存敏感数据。这让各州和国家在吸引 AI 数据中心容量方面有了更大的空间。([post](https://x.com/levie/status/2118953909524050288))

### Thibault Sottiaux

在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 澄清，所有 Pro 套餐都没有 5 小时限制，并且 Pro 100、Pro 200、Pro 500 分别提供 Plus 的 10 倍、20 倍和 50 倍用量，最高档还包含 ultrafast 访问。他还提出是否应该有 Pro 50，并询问用户的看法。([post](https://x.com/thsottiaux/status/2119296267545419987)) ([post](https://x.com/thsottiaux/status/2119305294291612140))

### Peter Steinberger

Peter Steinberger（OpenClaw、OpenAI）认为，Asahi 项目的意义在于把原本封闭、受限的东西开放出来。增加新限制，让其他项目更难在其上构建，方向就错了；他还说，这项与 AI 有关的否决很荒唐。([post](https://x.com/steipete/status/2119264334627090514))

### Zara Zhang

Builder Zara Zhang 不同意创业公司的结局早已注定。同一个想法可以有成千上万种执行方式，强大的团队能从一无所有中创造东西，也能让看似不可能的结果在事后显得理所当然。([post](https://x.com/zarazhangrui/status/2118968862557475298))

### Nikunj Kothari

FPV Ventures 合伙人 Nikunj Kothari 写了一份讽刺版 Series A FOMO 操作手册：画没有纵轴的营收图、为功能拍发布视频、购买“文章”、反复堆叠 agent 和 world model 热词，而且既没有 deck 也没有 data room。他说整篇都是讽刺，但每一句单独来看都是真的。([post](https://x.com/nikunj/status/2119162212044742938))

### Aditya Agarwal

SPC 普通合伙人、Bevel Health 联合创始人 Aditya Agarwal 预计，数据中心建设受到的限制会让已有容量的持有者受益，尤其是 hyperscaler。算力需求仍在上升，所以现有玩家会占优，而新模型训练的速度会受影响。他最后说，前沿推进的速度将由政治共同体决定。([post](https://x.com/adityaag/status/2119157297167372646))

### Garry Tan

YC 总裁兼 CEO Garry Tan 把未来十年的核心政治问题概括为：超级智能究竟能推动科学、医学和工程的人类进步，还是社会会选择“the darkness”。([post](https://x.com/garrytan/status/2119146939514278238))

## Podcast

### No Priors: Tokenization, Agentic Trading, Harmonic: Robinhood's Mission to Expand Ownership with CEO Vlad Tenev

来源: [No Priors](https://www.youtube.com/@NoPriorsPodcast)

**核心观点：** 对 Robinhood CEO Vlad Tenev 来说，广泛的所有权，既是缩小财富差距的方案，也是化解 AI 政治反弹的办法。

Tenev 是 Robinhood 创始人兼 CEO，也是数学 AI 公司 Harmonic 的联合创始人。他把 Robinhood 的使命定义为所有权，覆盖股票、私募公司、代币化资产、预测市场，甚至政府支持的儿童账户。理由既关乎个人，也关乎社会。拥有资产是人积累财富的路径，但一个没有广泛所有权的社会会变得“脆弱”，因为没有利益相关的人，缺少捍卫体系的理由。

AI 让这件事更紧迫。Tenev 称当前由模型驱动的数学发现“过于集中”，集中在少数拥有数据中心和秘密模型的实验室里。Harmonic 的 Aristotle 模型曾在国际数学奥林匹克拿到金牌，后来又被用来处理未解决的 Erdős 问题。但 Tenev 希望这些能力流向个体数学家，而不是留在垂直整合的实验室内部。他说，“Prediction markets are an evolution of news”，因为赔率可以把分散的知识变成关于未来走向的实时信号。

Robinhood 正在产品里检验同一套理念。超过 150,000 名客户开立了 agentic trading 账户，最近一次公布的工具调用量约为每天 3,000 万次。Robinhood Agents 把面向交易的 harness 和应用商店放进账户；股票代币和 Robinhood Chain 试图把美国市场敞口带给全球用户。公司还宣布计划推出 KPI 合约，让用户直接交易公司的每股收益或营收数据。Robinhood Ventures 则让散户获得私募 AI 公司的敞口。

Tenev 更广泛的警告是，AI 的收益正在集中，而成本却留在本地。如果普通人无法拥有上涨空间，对数据中心和自动化的反对就更容易理解。他提出的补救措施包括降低合格投资者规则的门槛、公开交易的创投基金、私募公司代币化，以及为新生儿建立股票组合的 Trump accounts。目标不只是让人“能买到”，而是让所有权足够广泛，使 AI 的经济成功带来更多利益相关者，而不是旁观者。

## Blog

经过验证的 feed 中没有新的合格博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
