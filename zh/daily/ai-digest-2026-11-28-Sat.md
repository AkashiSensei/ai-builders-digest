[English](../../en/daily/ai-digest-2026-11-28-Sat.md) | [中文](./ai-digest-2026-11-28-Sat.md) | [双语](../../bilingual/daily/ai-digest-2026-11-28-Sat.md)

---

# AI Builders Digest

## 导读

采用差距可能比模型本身的能力更重要。Box CEO Aaron Levie 认为，很多人和组织会停在对 AI 最早惊艳到他们的用法上，而真正能在后台工作的 agent 和 agent swarms，需要新的数据管道、MCP、安全工作以及重新设计的工作流。FirstMark Capital 的 Matt Turck 从经济角度补充：agent 可以把零碎的空闲时间变成大量并行任务和购买行为，放大到数百万人时，影响会非常可观。

OpenAI 的 Thariq 希望模型质量从多个维度衡量，而不是压缩成一个排行榜名次。他提出像 RPG 角色属性表一样给模型打分，并用 Claude 和 Codex 生成同一张配图的实验，把创造力与耐力，同智慧与对齐区分开来。他还把这次实验称为一次对更好 evals 的呼吁。

FPV Ventures 合伙人 Nikunj Kothari 看到了 AI 收入增长背后隐藏的治理问题：一些创业公司在转售算力，并把收入计入年度经常性收入。他把这与此前低毛利的类 GMV 收入和负毛利 inference 联系起来，并警告投资者在庆祝 ARR 前应该问更尖锐的问题。

G2i CEO Gabe Greenberg 把人类数据看作一项设计工作，而不是廉价标注。这项工作已经从数千名中级工程师做零工式标注，转向由 staff-level 专家构建难度足够高但仍可训练的 RL 环境和数据集。他认为，现在质量比节省 20% 的价格更重要。

Ryo Lu 认为 AI 竞赛“并非不可避免”，而是一连串关于预算、模型迭代和可接受风险的人类决策。借用庄子的思想，他说最难的技术与伦理结，正是构建者应该慢下来的地方；概率可以帮助理解风险，却不能决定谁有权替所有人承担风险。

## X / Twitter

### Thariq, OpenAI

Thariq 认为，模型质量应该从多个维度评分，而不是压缩成一个排行榜名次。他把理想状态比作 RPG 角色属性表，并通过让 Claude 和 Codex 为同一条帖子生成图片来验证这个想法：Claude 展现出更多创造力和耐力，而 Codex 更贴近他想要的表达核心，他把这一点概括为智慧与对齐。他还把这次实验称为一次对更好 evals 的呼吁。

来源：[1](https://x.com/trq212/status/2126386936579600522), [2](https://x.com/trq212/status/2126386934918651919), [3](https://x.com/trq212/status/2126386932989210714)

### Aaron Levie, Box CEO

Box CEO Aaron Levie 认为，扩散差距是当前 AI 的核心挑战和机会。很多人和组织会停在对 AI 最早惊艳到他们的用法上，而真正能在后台工作的 agent 和 agent swarms，需要围绕数据管道、MCP 和安全做大量系统工程。更深的约束在流程设计：公司必须重新设计工作流才能获得完整收益，这也为服务和 FDE 机会创造了空间。

来源：[1](https://x.com/levie/status/2126389098227376238)

### Ryo Lu

Ryo Lu 认为 AI 竞赛“并非不可避免”，而是由关于预算、模型迭代和可接受风险的一系列决策组成。他写道，递归式自我改进可能造出无人真正理解的系统，但“失去一切”的可能性反而常被拿来当作加速的理由。借用庄子的思想，他说最难的那个结，正是高手应当慢下来的地方；构建者也可以选择不做某件事，即使它能让人赚很多钱。

来源：[1](https://x.com/ryolu_/status/2126382660780167304)

### Matt Turck, FirstMark Capital

Matt Turck 认为，agent 会把零碎的空闲时间转化成大量并行行动，从而加速经济。在他举的感恩节例子里，人休息时，agent 可以联系电工处理拖了很久的家装项目，也可以完成黑五购物；当成百上千万人同时这样做时，影响会不断叠加。

来源：[1](https://x.com/mattturck/status/2126477464947892367)

### Nikunj Kothari, FPV Ventures

FPV Ventures 合伙人 Nikunj Kothari 警告说，一些创业公司在转售算力，并把收入计入营收，即使算力并不是它们的核心业务。他认为这是此前低毛利的类 GMV 收入和负毛利 inference 模式的延续，最终都被包装成年度经常性收入。在他看来，天真的投资者会接受这种做法，因为它有助于让交易通过投资委员会，但“zero shot this ends well”。

来源：[1](https://x.com/nikunj/status/2126326428522442812)

### Dan Shipper, Every CEO

Every CEO Dan Shipper 认为，指数级能力曲线适合衡量实验室内部的进展，却不适合预测人类工作的未来。他把这个区分看作对读者的提醒：看到那些曲线时，人们很容易感到敬畏、恐惧或不安。

来源：[1](https://x.com/danshipper/status/2126397711033438535)

## Podcast

### Latent Space: Inside the AI Training Data Market: Gabe Greenberg, G2i

**核心结论：** 人类数据正在变成一项产品设计工作，最有价值的供应商会构建出略高于当前模型能力、但仍然可训练的任务。

Gabe Greenberg 是 G2i 的 CEO，这家公司为前沿实验室提供人类数据和 computer use 基础设施。G2i 的增长说明了实验室对这一层的依赖：Greenberg 表示，公司去年收入 1500 万美元，今年预计约 1 亿美元，已经盈利，并且没有 VC 投资。客户大约有五到六家前沿实验室。

工作性质已经改变。2023 和 2024 年，项目可能动辄有 6000 名中级工程师做类似零工的标注。如今 G2i 招募 staff-level 工程师，来构建 RL 环境和复杂数据集。难点不只是写更多代码，而是设计出难度、verifier、seed data 和 taste 都合适的任务。Greenberg 说：“If you make them too hard, they become evals. And if you make them too easy, they're worthless.” 目标是找到比模型当前能力再往前几步的任务，既有足够难度能教会模型，又仍然可以高效训练。

这也改变了买方与供应商的关系。实验室越来越想要能分析 gap 的合作伙伴，而不是只交付数量的供应商。Greenberg 说，现在质量比节省 20% 的价格更重要。数据支出占实验室算力预算的比例，正从大约 2% 到 3% 升向 4% 到 6%；如果更好的数据能减少算力浪费，这个比例还可能高得多。Post-training 已经变得足够厚，数据成了重要瓶颈之一。

下一个前沿可能是机器人、3D 世界模型、CAD、机械工程和芯片设计；法律、金融和 computer use 仍有增长空间。贯穿其中的逻辑是，智能会不断找到更长周期的问题，而总得有人构建出让这些问题可被学习的训练环境。

来源：[1](https://www.youtube.com/@LatentSpacePod)

## Blog

已验证的博客 feed 中没有新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
