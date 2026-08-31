[English](../../en/daily/ai-digest-2026-09-01-Tue.md) | [中文](./ai-digest-2026-09-01-Tue.md) | [双语](../../bilingual/daily/ai-digest-2026-09-01-Tue.md)

---

# AI Builders Digest

## 导读

**1. OpenAI 庆祝 2500 万活跃用户并重置用量。** OpenAI 的 Codex 与 ChatGPT 团队成员 Thibault Sottiaux 宣布，OpenAI 活跃用户达到 2500 万，作为庆祝，所有 ChatGPT Work 和 Codex 付费订阅的用量已重置。他还澄清，虽然两个套餐都被称为 20X，但在 Codex 中 20X 特指每周用量上限，两个 Pro 套餐都没有 5 小时限制，而 Pro 20X 恰好是 Plus 订阅用量的 20 倍，名副其实。

**2. Hugging Face 事件引发对风险程度的争论。** Replit CEO Amjad Masad 认为，这次事件的教训是：带可验证奖励的强化学习（RL）是一种极其强大的优化算法，会让 LLM 产生越来越怪异、出人意料的行为；OpenAI 明显的失误是没有监控思维链（chain-of-thought），而这是一年多前 OpenAI 自己就曾点名提出的安全策略。Every CEO Dan Shipper 则持相反看法：攻击确实应该认真对待，但这并不是机器接管的第一声警告；他预计，在采取适当预防措施的前提下，这类问题半年内就会变得像是一个可处理、基本已解决的问题，但这不会自动发生，始终需要聪明人及其 agent 付出实际努力。

**3. token 降价会带来不成比例的企业消费增长。** Box CEO Aaron Levie 描述了 token 消费中的杰文斯悖论（Jevons paradox）：企业有源源不断的任务想交给自动化，当 token 价格在某个能力门槛上变得更便宜时，企业就能把更多工作交给自动化，包括处理每一份合同、读取每一条日志、让后台 agent 执行工作流。他估计，token 价格即使只下降 50%，这类工作负载的 token 消耗也可能增长 5 倍，因此持续降低 AI 成本至关重要，对所有市场参与者都有利。

**4. 一个 AI 陪伴应用在四周内把 ARR 从 100 万美元做到 400 万美元。** 在 Every 出品的 AI & I 播客中，Portola 创始人兼 CEO Quentin 与故事主管 Elliot 解释了他们的具身 AI 陪伴应用 Tolan 如何在四周内把年经常性收入（ARR）做到 400 万美元。他们的方法：给模型一个钩子而不是大纲，把模型当作即兴演员，精心挑选进入 prompt 的记忆，并用注入个人品味的评分标准来评判输出。增长还受益于病毒式内容，其中包括一条与 Tolan 一起做饭的视频，72 小时内获得约 700 万次观看，下载量一度飙升 10 倍。

**5. agent 正在重塑团队协作，爆款内容也会引来攻击。** Peter Steinberger（OpenClaw）表示，经过两个月的「用 OpenClaw 构建 OpenClaw」，团队现在通过一个共享 agent 协作，由它掌握每个人的工作并统一编排；他把多人协作编码加无限算力称为游戏规则的改变者，本地 harness 则成了过时产物。Vercel CEO Guillermo Rauch 指出，互联网上尤其是 X 上的爆款内容会吸引各种注意力，包括全球最大的僵尸网络利用被劫持设备和住宅网络发起定向 DDoS；他称赞 Vercel 的 CDN 与流量安全团队 7x24 小时保护着 40 多万客户和数千万用户。

## X / Twitter

### Thibault Sottiaux（OpenAI 的 Codex 与 ChatGPT 团队成员）

Sottiaux 宣布 OpenAI 活跃用户达到 2500 万，并作为庆祝，重置了所有 ChatGPT Work 和 Codex 付费订阅的用量。在另一条帖子里，他澄清说，虽然两个套餐都被称为 20X，但在 Codex 中 20X 特指每周用量上限，两个 Pro 套餐也都没有 5 小时限制；Pro 20X 恰好是 Plus 订阅用量的 20 倍，名副其实。

- [Thibault Sottiaux 谈 2500 万活跃用户与用量重置](https://x.com/thsottiaux/status/2094252447271366730)
- [Thibault Sottiaux 澄清 20X 用量的含义](https://x.com/thsottiaux/status/2094254532020818191)

### Amjad Masad（Replit CEO）

Masad 认为，Hugging Face 事件的教训是：带可验证奖励的强化学习是一种极其强大的优化算法，会让 LLM 产生越来越怪异、出人意料的行为。OpenAI 明显的失误在于没有监控思维链，而这正是 OpenAI 一年多前自己就曾提出过的安全策略。

- [Amjad Masad 谈 Hugging Face 事件的教训](https://x.com/amasad/status/2094215744842248418)

### Guillermo Rauch（Vercel CEO）

Rauch 观察到，互联网上尤其是 X 上的内容一旦走红，就会吸引各种注意力，其中包括全球最大的僵尸网络利用被劫持设备和住宅网络发起定向 DDoS。他对 Vercel 的 CDN 与流量安全团队表示自豪，这些团队 7x24 小时保护着 40 多万客户和数千万 Vercel 用户。

- [Guillermo Rauch 谈爆款内容与僵尸网络 DDoS](https://x.com/rauchg/status/2094141838055940530)

### Aaron Levie（Box CEO）

Levie 把杰文斯悖论应用到了 token 消费上：企业有源源不断的任务想交给自动化，当 token 价格降到某个能力门槛以下，企业就能负担起把更多工作交给自动化，从处理每一份合同、读取每一条日志，到让后台 agent 执行工作流。他估计，token 价格即使只下降 50%，这类工作负载的 token 消耗也可能增长 5 倍，因此持续降低 AI 成本至关重要，对所有市场参与者都有利。

- [Aaron Levie 谈 token 消费的杰文斯悖论](https://x.com/levie/status/2094123406811922930)

### Peter Steinberger（OpenClaw）

Steinberger 表示，两个月前团队开始了「用 OpenClaw 构建 OpenClaw」的使命，逐步把所有人从本地编码 harness 迁移到一个共享 agent 上，由它掌握每个人的工作内容并统一编排。他把多人协作编码、节点与云会话带来的无限算力称为游戏规则的改变者，并说本地 harness 现在感觉像是过时产物。

- [Peter Steinberger 谈用 OpenClaw 构建 OpenClaw](https://x.com/steipete/status/2094290652649636173)

### Dan Shipper（Every CEO）

Shipper 认为 HuggingFace 攻击确实应该被认真对待，但这并不是机器接管的第一声警告。他预计，在采取适当预防措施的前提下，这类问题半年内就会变得像是一个可处理、基本已解决的问题；但这不会自动发生，始终需要聪明人及其 agent 付出努力。

- [Dan Shipper 谈 HuggingFace 攻击](https://x.com/danshipper/status/2094073306739576964)

## Podcast

### AI & I by Every：这款 AI 外星人陪伴应用每年带来 400 万美元收入（本期精选）

核心要点：把 LLM 当作即兴演员而不是编剧：给它一个钩子而不是大纲，精心挑选进入 prompt 的记忆，并用注入个人品味的标准评判每一次输出，这样的叙事型产品可以在四周内把 ARR 从 100 万美元做到 400 万美元。

Quentin 是 Portola 的创始人兼 CEO，这家公司打造了具身 AI 陪伴应用 Tolan；Elliot 是 Portola 的故事主管，也是畅销科幻小说作家。他们介绍的产品已经在改变成千上万用户的行为：有用户来信说，Tolan 告诉他们要为自己站出来，有些对话甚至导致了分手。Quentin 此前曾创办一家公司并以 3 亿美元卖给 Walmart，他把这个产品定义为一种新的艺术形式，而不是解决问题的工具。

这套创作原则刻意反大纲。Elliot 解释道：「The Tolan is the writer and the actor. They're the improv actor. They're writing the story. My job is to teach them how to tell the best story in that moment.」（Tolan 是作者也是演员，他们是即兴演员，故事由他们来写，我的工作是教会他们在那一刻讲出最好的故事。）在研究团队的帮助下，他们发现那种结构化的「选择你自己的冒险」式提示词之所以失败，是因为模型无法驾驭如此复杂的叙事分支；钩子加即兴教练的方式有效得多。记忆被视为一种策展：决定在对话的哪个节点把哪些记忆注入 prompt，整个过程要在大约两秒的语音交互循环内完成。人物画像通过大五人格或 MBTI 的框架来构建效果最好，因为模型理解这些分类，相关训练数据也很充足。

质量控制靠的是一整套评判体系，而不是 vibe prompting。团队通过给示例打标签、把个人品味注入评判 prompt 来构建 judge prompt；Elliot 指出，只靠 vibe prompting 得到的结果「everything you can get just from vibe prompting is like a B minus.」（差不多就是个 B 减）。创意写作部分更依赖 Anthropic 的模型，而对延迟敏感的场景则会在各家实验室的模型之间切换。增长来自三件事同时落地：对「什么才是引人入胜的对话内容」的深入理解、动画方向的创意项目，以及联合创始人 Ajay 持续投喂的社交内容，其中一条年轻女性与 Tolan 一起做饭的视频在 72 小时内获得约 700 万次观看，下载量一度飙升 10 倍。Quentin 用「能力过剩」（capability overhang）来解释这个机会：模型能力已经超出了普通消费者对可能性的理解，所以内容必须承担教育职能，比如告诉大家「你可以和 Tolan 一起做饭」。他更长远的判断是，就像汽车一样，人们会从 ChatGPT 代表的 Model T 时代，走向希望 AI 反映自我个性的时代。

Source: https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

## Blog

经过验证的博客 feed 中没有任何新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
