[English](../../en/weekly/ai-digest-2026-06-08-Mon.md) | [中文](./ai-digest-2026-06-08-Mon.md) | [双语](../../bilingual/weekly/ai-digest-2026-06-08-Mon.md)

---

# AI Builders Digest

## 导读
1. 模型路由正在成为核心产品能力。Madhu Guru 和 Aaron Levie 指向同一个企业模式：当 token 成本变得显著，应用层 AI 需要 eval、领域知识和任务级路由，而不是把所有工作都默认交给同一个前沿模型。

2. 编程 Agent 已经从新奇功能进入日常工作。Peter Yang 说 agentic coding 像游戏一样让人上瘾；Lucas Kaiser 则说自己现在每天花很多时间和 Codex 一起工作，编辑器不再是编程的中心。

3. 下一阶段研究前沿仍然没有定论。Kaiser 认为，transformer 加 reasoning 和工具已经惊人强大，但模型学习概念的效率仍然不够，这给 post-transformer、world model 和更探索性的研究留下空间。

4. AI 产品信任现在包括数据本地性、界面管理和使用习惯设计。Garry Tan 关于 Paxel 的说明、Yang 对 Codex 线程过滤的需求，以及播客中对监督 Agent 使用的讨论，都指向同一个运营问题：用户如何知道 Agent 在做什么、数据去了哪里。

5. Builder 文化正在转向更原始的互动和现场连接。Swyx 认为加州非竞业规则通过人才流动扩散 AI tacit knowledge；Zara Zhang 则说 live interaction 和有观点的人类存在，正在比精修静态内容更有价值。

## X / Twitter

### Swyx

Swyx 认为，AI research tacit knowledge 的传播现在可能不再主要靠论文、GitHub、arXiv 或 Hugging Face，而是靠加州非竞业规则。他的意思是，研究人员可以带着受法律保护的经验离开实验室并融到大额资金，这改变了前沿知识在行业中的流动方式。他也把 AI Engineer 定位成以产品为中心的行业会议，用来补充以论文为中心的研究会议。链接：https://x.com/swyx/status/2063432747432268259

### Peter Yang

Peter Yang 最有用的产品观察是一个 Codex 工作流需求：他希望线程可以按状态过滤，比如等待批准、正在工作，而不是只能按项目查看。这是一个小 UI 问题，但信号更大：一旦用户同时运行很多 Agent 会话，队列管理就会成为产品的一部分。他还直接概括了这个品类的习惯形成能力：agentic coding 比电子游戏还让人上瘾。链接：https://x.com/petergyang/status/2063486871037153558, https://x.com/petergyang/status/2063475353335869922

### Madhu Guru

前 Gemini 产品负责人 Madhu Guru 把模型路由描述成一项困难但有价值的产品能力。他看到的演进是：2024 年团队默认使用最热门模型；2025 年初又过度追求最小、最便宜模型；然后进入更细的路由阶段，成熟的 AI-native 团队把产品拆成 sub-agent，并把每个任务交给最合适的模型。对企业来说，eval 质量、任务拆分能力和成本质量权衡，正在变成长期产品优势。链接：https://x.com/realmadhuguru/status/2063342268472574268

### Amjad Masad

Replit CEO Amjad Masad 本周最实质的内容不是产品机制，而是创始人与投资人的品格。他说自己公开谈论 Gaza 之后，一些 VC 在公开和私下攻击他，但也有更好的投资人支持他。对 builder 来说，信号是：公开立场会筛选你的网络，而这种筛选有时和资本本身一样重要。链接：https://x.com/amasad/status/2063344460705288401

### Aaron Levie

Box CEO Aaron Levie 说，token 成本已经成为企业 AI 讨论中最热的话题之一，因为 AI 系统终于被用到足够大的规模，token 经济性开始重要。他认为这会给应用层 AI 公司创造新的差异化：足够理解自身领域，才能把每个 workflow 路由到合适模型。前沿模型在编程、法律、金融、医疗等高难任务上仍然重要，但拥有最佳 eval、最佳路由能力，并且商业模式和客户财务目标一致的公司，会更有优势。链接：https://x.com/levie/status/2063320673217609936

### Garry Tan

YC CEO Garry Tan 澄清了 Paxel 的数据本地性承诺：公司说代码文件内容不会上传到云端，但并没有声称完全不上传任何用户数据。他还说，随着本地模型变强，Paxel 会有更多能力在本地完成。实用含义是，AI 开发者工具需要更精确的隐私语言，因为用户已经开始区分代码、metadata、使用数据和本地推理。链接：https://x.com/garrytan/status/2063418130714800487, https://x.com/garrytan/status/2063409501706018903

### Zara Zhang

Zara Zhang 最有信号量的观察是关于媒体和 builder 存在感：静态内容的价值在下降，实时互动的价值在上升。她更尖锐的表达是，人们想连接内容或软件背后的真人，而 raw、opinionated 的东西胜过 polished、generic 的东西。对 AI builder 来说，这是产品和分发启发：信任越来越来自可见的判断力，而不只是完成品。链接：https://x.com/zarazhangrui/status/2063391758189572266

### Nikunj Kothari

FPV Ventures 合伙人 Nikunj Kothari 分享了一期新的 "Walk In The Park"，嘉宾是 Reactor 创始人 Tai Uti，内容覆盖 world model、从 text-to-3D 到 Reactor 的路径、低延迟要求、stealth 阶段建设和投资人选择。可读主题是：world-model 创业公司正在通过游戏、3D、latency 和创始人 conviction 被讲述，而不只是泛泛的 AI demo。链接：https://x.com/nikunj/status/2063263389238087745

### Dan Shipper

Every CEO Dan Shipper 用 Plato 来讨论 AI 的边界，认为 techne 还需要 aidōs 和 dikē，也就是对他人的敬畏与感知正确之事的能力。他还写下一个有意保持张力的判断："LLMs are not conscious" 和 "LLMs are not not conscious." 实用信号是，一些 builder 正在尝试讨论 AI 能力，但不把它简单压扁成纯工具或类人心智。链接：https://x.com/danshipper/status/2063438262841094604, https://x.com/danshipper/status/2063436919967522848, https://x.com/danshipper/status/2063426632824562167

## Podcast

### Unsupervised Learning: Ep 89: AI Research Legend's Honest Assessment of Where We Are

核心 takeaway：Transformer 论文共同作者 Lucas Kaiser 认为，今天会 reasoning、会用工具的模型已经非常惊人，尤其是在编程上，但它们未必就是 generalization 的最终架构。

Kaiser 的视角很少见：他参与写作了 "Attention Is All You Need"，又在 Google 和 OpenAI 经历了多个 AI 周期。他的判断刻意保持平衡：带有 reasoning、强化学习、agent 和 shell access 的 transformer，现在能做很多他几年前不会相信的事情。他说自己每天花很多时间和 Codex 讨论困难工作问题，它能理解并实现。但他仍然看到模型学习方式上的缺口。人类可以从很少证据跳到概念；而 LLM，按他的说法，会学会概念，但通常是在穷尽其他所有选项之后。

这也是他仍然对 post-transformer 研究保持开放的原因。Transformer 一直在追赶并补齐能力，但寻找其他路径的理由也在增强。Kaiser 特别关心能改善长期理解、用更少数据 generalize，以及把错误方向扭转成有用发现的研究方向。

他对编程的评论尤其直接。他说 coding agent 改变了自己的行为：现在每天和 AI 谈工作，不再主要通过编辑器编程；Anthropic 早期在 coding 上领先，是因为它在 OpenAI 专注 ChatGPT 时做了战略聚焦。下一阶段挑战不只是赢得编程市场。真正的产品前沿，是让 accountant、analyst、operator 和其他职业也能使用这种 agentic power，而不要求他们先成为专业监督者。链接：https://www.youtube.com/watch?v=N1geOimmdDo

## Blog

已验证 fallback feed 中没有新的 blog posts。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
