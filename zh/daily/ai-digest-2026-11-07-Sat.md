[English](../../en/daily/ai-digest-2026-11-07-Sat.md) | [中文](./ai-digest-2026-11-07-Sat.md) | [双语](../../bilingual/daily/ai-digest-2026-11-07-Sat.md)

---

# AI Builders Digest

## 导读

应用层正在变成一场围绕模型选择的竞争。Peter Yang 认为，能够调用多家实验室模型的 app 正在被这些实验室收购，而剩下的独立案例往往是开源的。他依然看好用户和企业对多模型工具的需求，因此接下来的收购与开源分叉值得关注。

agent 正在进入人们已经使用的工具，界面也随之改变。Thariq 提到，Instagram Edits 和 Roblox Studio 这类创作者 app 开始内置 MCP，让 agent 承担部分工作，用户则在熟悉的软件里继续完成。Vercel CEO Guillermo Rauch 给出了一个相关判断：由 LLM 直接渲染到 Slack 或 Teams 的生成式 UI，会成为人机交互的主流形态。

agent 技术栈也变得更可替换、更可衡量。YC 总裁兼 CEO Garry Tan 主张用 eval 驱动 agent skill 的开发，并提到自己删掉了一个 skill，因为 Opus 5.5 做得更好。他还强调 Aside 的 computer use 是一个真实的 Chromium 浏览器，很多网站难以屏蔽，并分享了一个引人注目的说法：少量来自普通人的道德建议把恶意行为降到了 0%。

生物学是 AI 从描述走向干预的最清晰例子。负责 Helmholtz Munich 计算健康研究的 Fabian Theis 描述了这样一条路径：从构建细胞图谱，到预测细胞行为，再到指导下一次实验。他实验室的 Lab Compass 是一个逆向生成模型，在给定细胞前向模型后，它能提出达到目标状态所需的扰动。

这一转变的瓶颈不只是模型架构。Theis 强调，扰动数据已经丰富得多，但简单基线在许多任务上仍然胜出，基准指标也可能被钻空子。他认为表示学习和动作建模是两个问题，并判断最强的商业壁垒会把独特数据与 lab-in-the-loop 执行结合起来，而不是一个通用的 virtual cell 平台。

建设者也在重新思考如何获得注意力和资本。Zara Zhang 把个人网站称为新的简历，因为它展示品味和实际工作，而不只是一串头衔。Nikunj Kothari 一边推出本地开源的消息分析工具，一边讽刺 token 消耗巨大的种子轮。Swyx 则把潜在的 Anthropic IPO 变成一项每周更新的内容产品。共同点在于，用鲜明观点建立分发能力。

## X / Twitter

### Swyx

Swyx 的个人简介列出的关联包括 smol.ai、Cognition、Temporal、AI Engineer 和 Latent Space。他表示会每周跟进 Anthropic IPO，直到它发生或最终没有发生。他把这项计划描述为把自己从 $BABA 到 $TEAM 的 mega-IPO 报道经验，与 AI 工程工作结合起来，并与 Jamin Ball 合作。([原帖](https://x.com/swyx/status/2118905788915982341))

### Peter Yang

撰写实用 AI 教程和访谈的 Peter Yang 认为，能够使用不同实验室模型的 app 正在被这些实验室收购。他以 conductor_build 和 Cursor 作为这一趋势的例子，而 t3dotcodes 和 orca_build 仍然开源。他仍然相信多模型 app 拥有“大量用户和企业需求”，并好奇市场最终会如何演变。([原帖](https://x.com/petergyang/status/2118811231545122998))

### Thariq

曾任 Anthropic Claude Code 团队成员的 Thariq 提到了一种他喜欢的模式：Instagram Edits 和 Roblox Studio 这类创作者 app 开始内置 MCP。这样 agent 可以承担部分工作，高级用户则能在熟悉的工具里协作并继续完成。([原帖](https://x.com/trq212/status/2118822238262853904))

### Guillermo Rauch

Vercel CEO Guillermo Rauch 认为，面向对话式 agent 的生成式 UI 会成为主流的人机交互范式。他描述了如何把 AI SDK 与 Chat SDK 和 json-render 结合起来，在 Slack、Teams 等平台上直接从 LLM 生成 UI。([原帖](https://x.com/rauchg/status/2118856239719608353))

### Garry Tan

YC 总裁兼 CEO Garry Tan 表示，Aside 的 computer use 令人印象深刻，部分原因是它是一个真实的 Chromium 浏览器，很少有网站能屏蔽它。([原帖](https://x.com/garrytan/status/2118951284376285508)) 他认为 agent skill 需要 eval 驱动的开发循环，因为每个新模型都会进步，旧 skill 可以被删除；在 Opus 5.5 做得更好之后，他删掉了 /investigate。([原帖](https://x.com/garrytan/status/2118920030243139596)) 他还分享了一个说法：300 万 token 来自普通人应对复杂道德困境的建议，把恶意行为降到 0%，并带来跨模型代际 28 倍的效率提升。([原帖](https://x.com/garrytan/status/2118950671886287323))

### Zara Zhang

Builder Zara Zhang 认为，“个人网站就是新的简历”。她说，LinkedIn 展示的是一串头衔，而个人网站展示品味、思考方式和实际工作。她还表示，建设者不必被现有社交媒体平台限制。([原帖](https://x.com/zarazhangrui/status/2118939184841052386))

### Nikunj Kothari

FPV Ventures 合伙人 Nikunj Kothari 重新推出了 texts wrapped。这是一个 Mac 工具，只需一条终端命令和完整磁盘权限，就能分析 iMessage、WhatsApp 和电话内容。它完全本地运行，不使用 AI，并且开源。([原帖](https://x.com/nikunj/status/2118840414853861627)) 他还发布了一份讽刺性的“两周打造 1 亿美元公司”融资指南，调侃 token 驱动的烧钱、付费推广发布视频、创造性 ARR 指标以及分批种子轮。他明确说这是讽刺，但其中每一句话都分别在他身上发生过。([原帖](https://x.com/nikunj/status/2118758688567792008))

## Podcast

### Latent Space: Controlling Biology - Fabian Theis, Helmholtz Munich

来源：[Latent Space](https://www.youtube.com/@LatentSpacePod)

**核心观点：** virtual cell 领域正在从绘制图谱和预测细胞行为，转向主动选择下一次实验。Fabian Theis 负责 Helmholtz Munich 的 AI 与计算生物学工作，其实验室产出了 Scanpy、scVerse 等被广泛使用的工具。他认为，下一次跃迁来自模型与湿实验室之间的闭环。团队的新工具 Lab Compass 是一个逆向生成模型：一旦拥有细胞的前向世界模型，它就能告诉你要施加什么扰动，才能到达目标状态。用 Theis 的话说，“We can really now start guiding the experimentation.”

这一转变依赖更丰富的扰动数据。Theis 回顾了从稀疏的对照组与疾病组比较，到单次实验测量数百万个 transcriptome、测试大量药物或 CRISPR panel 的变化。他预计 organoid 和多细胞系统会得到更多关注，因为单一细胞系能提供的信息有限。但规模本身不够。他直言，简单基线在许多任务上仍然很难被击败，Arc virtual cell 挑战赛也暴露出指标很容易被钻空子。获胜方案是 flow matching 这类非线性方法，但他仍然要求学生先把基线做好。

Theis 把表示学习和动作建模分开。基础模型可以学到有用的 latent space，但要预测细胞在扰动下如何变化，需要把状态与动作映射到下一状态的世界模型。他的团队把 3.5 亿个细胞、16 个物种的 latent space 与 flow matching 结合起来。谈到商业化，他怀疑通用的 virtual cell 平台叙事，认为最强的壁垒来自独特数据与 lab-in-the-loop 执行，例如与药企共建的 Cancer Organoid Perturbation Atlas。他长期推行的 Y 模型让方法导师与湿实验室导师共同指导学生，因为最难的部分不只是建模，还要说服实验人员去验证模型提出的下一个问题。

## Blog

已验证的 feed 中没有新的合格博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
