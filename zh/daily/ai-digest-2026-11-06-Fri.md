[English](../../en/daily/ai-digest-2026-11-06-Fri.md) | [中文](./ai-digest-2026-11-06-Fri.md) | [双语](../../bilingual/daily/ai-digest-2026-11-06-Fri.md)

---

# AI Builders Digest

## 导读

Agent 设计正从一次性回答转向能够跨越时间和上下文持续工作。前 Anthropic Claude Code 成员 Thariq 把位置触发提醒列为他最喜欢的 agent 提示模式之一：agent 跟踪上次洗衣服的时间，在工作日回家 30 分钟后提醒，并持续催促直到用户确认或推迟。Vercel CEO Guillermo Rauch 把“替用户持续做事”称为 agent 的 killer app，并提到夜间整合记忆、早晨提醒、在若干天后主动联系等模式，而 Vercel Schedules 可以在 Sandbox 之外运行。Anthropic 的 Claude 也在美国推出只读的 Personal Finance，显示消费级产品同样在加入持续上下文和明确边界。

安全与可靠性正在成为产品基础设施。OpenAI 的 Thibault Sottiaux 认为，对数千万行代码进行形式化证明已经不再是荒谬的设计目标，而应纳入新系统的设计考量。他预计最终会出现面向所有人的超安全基础设施和软件，但在此之前会经历一段动荡，因为人类一直不擅长编写安全的基础设施。Replit CEO Amjad Masad 表示，Replit 的自定义 Kernel 构建可以避开当前 96% 的 Linux 零日漏洞。Jev 的创作者则从模型侧给出相近判断：benchmark 成绩不如软件能否依赖模型行为重要。

企业 agent 的瓶颈在于上下文。Box CEO Aaron Levie 预计，企业里与数据和系统协作的 agent 数量将达到人的 100 倍。他说企业 90% 的数据是非结构化数据，因此 agent 需要从文档、合同、营销素材、研究材料、财务计划和设计文件中获取关键上下文。Box 正与 NVIDIA 合作，把词法搜索和语义搜索结合起来，同时遵守企业安全、访问控制和数据治理策略，让 agent 只使用被允许的数据。

构建、部署、分发和变现正在被压缩进同一个循环。Rauch 描述的路径是：获取 X 订阅，用 Bot 或 Cursor 构建，部署到 Vercel，在 X 上发布和分发，再通过 X Money 或 Creators 变现。他说这个循环“几乎完整”，并称 Grok 和 Cursor 现在可以构建、部署和扩展。Masad 则把 Replit 称为唯一一个协作式 AI 编程系统。竞争焦点因此不再只是代码生成，而是从想法到分发的整条路径。

Jev 的创作者对 benchmark 驱动的发布文化持怀疑态度。他说任务形态很容易复制，业界过度关注形态而不是可靠性，过度承诺会消耗开发者的信任。他把 coding agent 带来的工程提效粗略估计为 20% 到 40%，具体取决于任务和用户水平，并认为下一步应追求类似软件的基础设施：如实暴露限制、提供可组合的原语、衡量系统是否真正可用，而不是只看发布期的分数。

资本和市场结构仍然影响产品叙事。SPC 普通合伙人、Bevel Health 联合创始人 Aditya Agarwal 提醒创始人，有投资人愿意按某个估值投资，并不意味着这个估值适合公司。Y Combinator 总裁兼 CEO Garry Tan 认为，发明强大的 AI 只完成了一半工作，国会应开放市场，让成千上万家创业公司竞争，而不是让少数万亿美元公司控制分发。Peter Steinberger 则质疑 Apple 对 Safari 的说法，称其为 Safari 构建或使用 Safari 时，速度更慢、功能更少、bug 更怪，而且很多网站无法正常工作，要接近 Chrome 的性能需要费力挣扎。

## X / Twitter

### Thibault Sottiaux，OpenAI 的 Codex 与 ChatGPT

Thibault Sottiaux 认为，对数千万行代码进行形式化证明已经不再是荒谬的设计目标，设计新系统时应把它纳入考虑。他预计最终会有面向所有人的超安全基础设施和软件，但在此之前会经历一段动荡，因为人类一直不擅长编写安全的基础设施。[形式化证明帖子](https://x.com/thsottiaux/status/2118569441860723112) [安全基础设施帖子](https://x.com/thsottiaux/status/2118569235953893573)

### Peter Yang，实用 AI 教程与访谈创作者

Peter Yang 希望 Suno 和 Tesla 默认把 Suno 应用加入汽车，认为开车时通过语音创作歌曲会比听广播更好。他说，开车并创作自己想听的歌曲会非常棒。[帖子](https://x.com/petergyang/status/2118537836098203781)

### Thariq，前 Anthropic Claude Code 成员

Thariq 把位置触发提醒列为他最喜欢的 agent 提示模式之一，并举例说明 Instinct 这类 agent 可以怎样使用。示例要求 agent 跟踪上次洗衣服的时间，如果已经超过五天，就在工作日回家 30 分钟后提醒，并持续催促直到用户确认或推迟。这个模式展示了 agent 如何承载状态、时间和后续循环。[帖子](https://x.com/trq212/status/2118399561324699655)

### Amjad Masad，Replit CEO

Amjad Masad 把 Replit 称为市面上唯一一个协作式 AI 编程系统。他还表示，Replit 通过自定义 Kernel 构建避开了当前 96% 的 Linux 零日漏洞，并引导读者查看新的 sandbox 设计。[协作帖子](https://x.com/amasad/status/2118506378440400951) [Sandbox 帖子](https://x.com/amasad/status/2118503241390665776)

### Guillermo Rauch，Vercel CEO

Guillermo Rauch 认为，“替用户持续做事”是 agent 的 killer app。他提到 Muse 和 Instinct 在夜间整合记忆、在早晨发送提醒、在若干天后主动联系，而 Vercel Schedules 提供可在运行时定义、可无限扩展的类 cron 任务，并且位于 Sandbox 之外。他还描述了几乎完整的构建者循环：获取 X 订阅，用 Bot 或 Cursor 构建，部署到 Vercel，在 X 上分发，再通过 X Money 或 Creators 变现。在另一条帖子中，他说 Grok 和 Cursor 现在可以构建、部署和扩展。[定时 agent 帖子](https://x.com/rauchg/status/2118440831355068671) [构建者循环帖子](https://x.com/rauchg/status/2118474519925158186) [Grok 与 Cursor 帖子](https://x.com/rauchg/status/2118464177211940997)

### Aaron Levie，Box CEO

Box CEO Aaron Levie 预计，企业里与数据和系统协作的 agent 数量将达到现在人的 100 倍。他说企业 90% 的数据是非结构化数据，因此 agent 需要更好地获取文档、合同、营销素材、研究材料、财务计划和设计文件中的上下文。Box 正与 NVIDIA 合作，把词法搜索和语义搜索结合起来，同时执行企业安全、访问控制和数据治理，让 agent 只处理被允许的数据。[帖子](https://x.com/levie/status/2118498574497665316)

### Garry Tan，Y Combinator 总裁兼 CEO

Garry Tan 认为，现在有一个前所未有的两党合作机会，可以挑战 Big Tech 对市场力量的滥用，并为下一代创始人开放市场。他说，发明强大的 AI 只完成了一半工作：人们必须能用它改善生活和业务，国会应该让成千上万家创业公司竞争，而不是让收益集中在已经控制分发的公司手里。他还把一项面向私募股权和投资银行工作的新长期 benchmark 描述为通往 AGI 的一部分。[市场力量帖子](https://x.com/garrytan/status/2118557763156733984) [Benchmark 帖子](https://x.com/garrytan/status/2118527182092071179)

### Peter Steinberger，OpenClaw 与 OpenAI

Peter Steinberger 质疑 Apple 关于 Safari 的说法。他说，每次为 Safari 构建或使用 Safari 时，它都更慢、功能更少、出现奇怪的 bug，而且很多网站无法正常工作。他表示，要接近 Chrome 的性能需要费力挣扎。[帖子](https://x.com/steipete/status/2118492097917628704)

### Aditya Agarwal，SPC 普通合伙人、Bevel Health 联合创始人

Aditya Agarwal 提醒创始人，有投资人愿意投资并不能验证一个估值。用他的话说，仅仅因为有人愿意按某个估值投资，并不意味着这个估值适合公司。[帖子](https://x.com/adityaag/status/2118477020325884357)

### Claude，Anthropic 的 AI 助手

Claude 正在美国以 beta 形式推出 Personal Finance，让用户连接自己选择的账户，并用日常语言询问与自身余额和交易有关的问题。访问权限是只读的，Claude 不能移动、管理或投资资金。该功能没有广告或赞助推荐，也不是为了提供投资建议，目前正在美国面向 Pro、Max 和 Ultra 套餐逐步推出。[发布帖子](https://x.com/claudeai/status/2118403114890137895) [详情帖子](https://x.com/claudeai/status/2118403117779988744)

## Podcast

### Unsupervised Learning: Ep 97: Jev Creator on Decision Models, Benchmark Fatigue &amp; Why the Labs Missed It

**核心结论：** Jev 的创作者认为，AI 的下一次跃迁不会来自又一场 benchmark 胜利，而会来自可靠到软件可以直接调用、无需人类全程照看的模型。

大多数 LLM 调用仍然是为人类消费设计的。文风、措辞和说服力都很重要。软件需要的是另一种东西：一个决定、一个枚举值，或者一个能在 harness 中执行的动作。这个差距解释了为什么模型可以在测试中表现亮眼，却依然无法提升生产力。Jev 的创作者曾在 OpenAI 工作，他围绕机器消费来构建 Jev，并认为最了解下游应用需要多少可靠性的不是模型提供方，而是开发者。

Benchmark 会绕过这种判断。这位创作者明确反对 benchmark 和 benchmaxing，因为任务形态很容易复制，demo 又会奖励可识别的模式。他说：“任务形态相比真正有用，其实根本不重要。”过度承诺和交付不足会浪费那些没有时间测试每次发布的开发者的时间，反复失望也造成了 benchmark 疲劳。问题不在于模型能力是假的，而在于发布周期的分数无法告诉软件团队什么能在生产环境里工作。

Coding agent 很有价值，但使用量不等于价值。他粗略估计，工程提效在 20% 到 40% 之间，而且会因任务和用户水平大幅变化；有些工作离开 agent 就不现实，另一些则并不比手写代码更好。更大的机会是把 AI 当作软件基础设施：如实暴露限制，提供可组合的原语，衡量整个系统而不是发布分数。他说：“智能的北极星会很像 SQL。”意思是模型应该足够可靠、足够与供应商无关，让开发者可以直接组合，而不必为每个模型建立一套心智理论。

[播客来源](https://www.youtube.com/@RedpointAI)

## Blog

已验证的 feed 在 72 小时窗口内没有新的合格博客内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
