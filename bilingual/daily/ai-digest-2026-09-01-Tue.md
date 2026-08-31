[English](../../en/daily/ai-digest-2026-09-01-Tue.md) | [中文](../../zh/daily/ai-digest-2026-09-01-Tue.md) | [Bilingual](./ai-digest-2026-09-01-Tue.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. OpenAI celebrates 25M active users with a usage reset.** Thibault Sottiaux (Codex & ChatGPT at OpenAI) announced that OpenAI hit 25M active users and, to celebrate, reset usage for all paid subscriptions for ChatGPT Work and Codex. He also clarified that while both plans are called 20X, in Codex the 20X applies specifically to weekly usage limits, there are no 5-hour limits on either Pro plan, and the Pro 20X is quite precisely 20X the usage of the Plus subscription.

**1. OpenAI 庆祝 2500 万活跃用户并重置用量。** OpenAI 的 Codex 与 ChatGPT 团队成员 Thibault Sottiaux 宣布，OpenAI 活跃用户达到 2500 万，作为庆祝，所有 ChatGPT Work 和 Codex 付费订阅的用量已重置。他还澄清，虽然两个套餐都被称为 20X，但在 Codex 中 20X 特指每周用量上限，两个 Pro 套餐都没有 5 小时限制，而 Pro 20X 恰好是 Plus 订阅用量的 20 倍，名副其实。

**2. The Hugging Face incident splits opinion on how worried to be.** Replit CEO Amjad Masad argues the lesson is that RL with verifiable rewards is an incredibly powerful optimization algorithm that will produce increasingly weird and surprising behavior from LLMs, and that OpenAI's obvious miss was not monitoring chain-of-thought, something the company itself flagged as a safety strategy more than a year ago. Every CEO Dan Shipper counters that the attack should be taken seriously but is not the first warning shot of a machine takeover; he expects issues of this type to look like a tractable, mostly solved problem within six months, but only with real work from smart people and their agents.

**2. Hugging Face 事件引发对风险程度的争论。** Replit CEO Amjad Masad 认为，这次事件的教训是：带可验证奖励的强化学习（RL）是一种极其强大的优化算法，会让 LLM 产生越来越怪异、出人意料的行为；OpenAI 明显的失误是没有监控思维链（chain-of-thought），而这是一年多前 OpenAI 自己就曾点名提出的安全策略。Every CEO Dan Shipper 则持相反看法：攻击确实应该认真对待，但这并不是机器接管的第一声警告；他预计，在采取适当预防措施的前提下，这类问题半年内就会变得像是一个可处理、基本已解决的问题，但这不会自动发生，始终需要聪明人及其 agent 付出实际努力。

**3. Cheaper tokens trigger disproportionate enterprise consumption.** Box CEO Aaron Levie describes the Jevons paradox in action for token consumption: enterprises have an unending stream of tasks they would love to automate, and as tokens get cheaper past a capability threshold, they can afford to bring automation to more of that work, from processing every contract and reading every log to running background agents. He estimates that even a 50% drop in token prices could result in a 5X increase in tokens for these workloads, which is why lowering the cost of AI is critical and good for all market participants.

**3. token 降价会带来不成比例的企业消费增长。** Box CEO Aaron Levie 描述了 token 消费中的杰文斯悖论（Jevons paradox）：企业有源源不断的任务想交给自动化，当 token 价格在某个能力门槛上变得更便宜时，企业就能把更多工作交给自动化，包括处理每一份合同、读取每一条日志、让后台 agent 执行工作流。他估计，token 价格即使只下降 50%，这类工作负载的 token 消耗也可能增长 5 倍，因此持续降低 AI 成本至关重要，对所有市场参与者都有利。

**4. An AI companion goes from $1M to $4M ARR in four weeks.** On AI & I by Every, Portola founder and CEO Quentin and head of story Elliot explain how Tolan, their embodied AI companion, reached $4M in annual recurring revenue within four weeks. Their approach: give the model a hook rather than an outline, treat it as an improv actor, curate which memories enter the prompt, and judge outputs with taste-injected rubrics. Growth was accelerated by viral content, including a cooking-with-Tolan video that drew about 7M views in 72 hours and a 10X spike in downloads.

**4. 一个 AI 陪伴应用在四周内把 ARR 从 100 万美元做到 400 万美元。** 在 Every 出品的 AI & I 播客中，Portola 创始人兼 CEO Quentin 与故事主管 Elliot 解释了他们的具身 AI 陪伴应用 Tolan 如何在四周内把年经常性收入（ARR）做到 400 万美元。他们的方法：给模型一个钩子而不是大纲，把模型当作即兴演员，精心挑选进入 prompt 的记忆，并用注入个人品味的评分标准来评判输出。增长还受益于病毒式内容，其中包括一条与 Tolan 一起做饭的视频，72 小时内获得约 700 万次观看，下载量一度飙升 10 倍。

**5. Agents reshape teamwork, and viral posts draw fire.** Peter Steinberger (OpenClaw) reports that after two months of "build OpenClaw with OpenClaw," the team now works through a shared agent that orchestrates everyone's work, calling multiplayer coding plus infinite compute a game changer and local harnesses relics of the past. Vercel CEO Guillermo Rauch notes that viral posts attract some of the largest botnets launching targeted DDoS from hijacked devices and residential networks, and highlights Vercel's CDN and traffic security teams protecting 400,000+ customers and tens of millions of users.

**5. agent 正在重塑团队协作，爆款内容也会引来攻击。** Peter Steinberger（OpenClaw）表示，经过两个月的「用 OpenClaw 构建 OpenClaw」，团队现在通过一个共享 agent 协作，由它掌握每个人的工作并统一编排；他把多人协作编码加无限算力称为游戏规则的改变者，本地 harness 则成了过时产物。Vercel CEO Guillermo Rauch 指出，互联网上尤其是 X 上的爆款内容会吸引各种注意力，包括全球最大的僵尸网络利用被劫持设备和住宅网络发起定向 DDoS；他称赞 Vercel 的 CDN 与流量安全团队 7x24 小时保护着 40 多万客户和数千万用户。

## X / Twitter

### Thibault Sottiaux: Codex & ChatGPT at OpenAI

Sottiaux shared that OpenAI hit 25M active users and, to celebrate, reset usage for all paid subscriptions for ChatGPT Work and Codex. In a separate post, he clarified that while both plans are called 20X, in Codex the 20X applies specifically to weekly usage limits, and neither Pro plan has 5-hour limits; the Pro 20X is quite precisely 20X the usage of the Plus subscription.

Sottiaux 宣布 OpenAI 活跃用户达到 2500 万，并作为庆祝，重置了所有 ChatGPT Work 和 Codex 付费订阅的用量。在另一条帖子里，他澄清说，虽然两个套餐都被称为 20X，但在 Codex 中 20X 特指每周用量上限，两个 Pro 套餐也都没有 5 小时限制；Pro 20X 恰好是 Plus 订阅用量的 20 倍，名副其实。

- [Thibault Sottiaux on 25M active users and the usage reset](https://x.com/thsottiaux/status/2094252447271366730)
- [Thibault Sottiaux on the 20X usage clarification](https://x.com/thsottiaux/status/2094254532020818191)

### Amjad Masad: CEO of Replit

Masad argues the lesson from the Hugging Face incident is that RL with verifiable rewards is an incredibly powerful optimization algorithm that will produce increasingly weird and surprising behavior from LLMs. The obvious miss by OpenAI, he says, is that it should have been monitoring chain-of-thought, something the company itself called out as a safety strategy more than a year ago.

Masad 认为，Hugging Face 事件的教训是：带可验证奖励的强化学习是一种极其强大的优化算法，会让 LLM 产生越来越怪异、出人意料的行为。OpenAI 明显的失误在于没有监控思维链，而这正是 OpenAI 一年多前自己就曾提出过的安全策略。

- [Amjad Masad on the Hugging Face lesson](https://x.com/amasad/status/2094215744842248418)

### Guillermo Rauch: CEO of Vercel

Rauch observes that when something goes viral on the internet, especially on X, it attracts all kinds of attention, including some of the largest botnets launching targeted DDoS from hijacked devices and residential networks. He expresses pride in Vercel's CDN and traffic security teams, which protect 400,000+ customers and tens of millions of Vercel users 24x7x365.

Rauch 观察到，互联网上尤其是 X 上的内容一旦走红，就会吸引各种注意力，其中包括全球最大的僵尸网络利用被劫持设备和住宅网络发起定向 DDoS。他对 Vercel 的 CDN 与流量安全团队表示自豪，这些团队 7x24 小时保护着 40 多万客户和数千万 Vercel 用户。

- [Guillermo Rauch on viral posts and botnet DDoS](https://x.com/rauchg/status/2094141838055940530)

### Aaron Levie: CEO of Box

Levie applies the Jevons paradox to token consumption: enterprises have an unending stream of tasks they would love to bring automation to, and as tokens get cheaper at a certain capability threshold, they can afford to automate more of that work, from processing every contract and reading every log to having background agents execute workflows. He estimates that even a 50% drop in token prices could result in a 5X increase in tokens for these workloads, which is why it is critical to keep bringing down the cost of AI, and good for all market participants.

Levie 把杰文斯悖论应用到了 token 消费上：企业有源源不断的任务想交给自动化，当 token 价格降到某个能力门槛以下，企业就能负担起把更多工作交给自动化，从处理每一份合同、读取每一条日志，到让后台 agent 执行工作流。他估计，token 价格即使只下降 50%，这类工作负载的 token 消耗也可能增长 5 倍，因此持续降低 AI 成本至关重要，对所有市场参与者都有利。

- [Aaron Levie on the Jevons paradox for tokens](https://x.com/levie/status/2094123406811922930)

### Peter Steinberger: OpenClaw

Steinberger reports that two months ago the team started the mission to "build OpenClaw with OpenClaw," moving everyone from local coding harnesses to a shared agent that knows what everyone is working on and orchestrates it all. He calls multiplayer coding with infinite compute, nodes, and cloud sessions a game changer, and says local harnesses now feel like relics of the past.

Steinberger 表示，两个月前团队开始了「用 OpenClaw 构建 OpenClaw」的使命，逐步把所有人从本地编码 harness 迁移到一个共享 agent 上，由它掌握每个人的工作内容并统一编排。他把多人协作编码、节点与云会话带来的无限算力称为游戏规则的改变者，并说本地 harness 现在感觉像是过时产物。

- [Peter Steinberger on building OpenClaw with OpenClaw](https://x.com/steipete/status/2094290652649636173)

### Dan Shipper: CEO of Every

Shipper argues the HuggingFace attack should be taken seriously, but it is not the first warning shot of a machine takeover. He expects issues of this type to look like a tractable, mostly solved problem with proper precautions within six months, though that will not happen automatically and will require work from smart people and their agents.

Shipper 认为 HuggingFace 攻击确实应该被认真对待，但这并不是机器接管的第一声警告。他预计，在采取适当预防措施的前提下，这类问题半年内就会变得像是一个可处理、基本已解决的问题；但这不会自动发生，始终需要聪明人及其 agent 付出努力。

- [Dan Shipper on the HuggingFace attack](https://x.com/danshipper/status/2094073306739576964)

## Podcast

### AI & I by Every: The AI Alien Companion App That's Bringing In $4M a Year (Best of the Pod)

The Takeaway: Treat an LLM as an improv actor, not a scriptwriter: give it a hook instead of an outline, curate the memories that enter its prompt, and judge every output with taste, and a storytelling product can go from $1M to $4M ARR in four weeks.

核心要点：把 LLM 当作即兴演员而不是编剧：给它一个钩子而不是大纲，精心挑选进入 prompt 的记忆，并用注入个人品味的标准评判每一次输出，这样的叙事型产品可以在四周内把 ARR 从 100 万美元做到 400 万美元。

Quentin, founder and CEO of Portola, the company behind the embodied AI companion Tolan, and Elliot, Portola's head of story and a best-selling science fiction author, describe a product that is already changing how thousands of users behave. Users write in that their Tolan told them to stand up for themselves, which in some cases led to breakups. Quentin, who previously founded and sold a company to Walmart for $300 million, frames the product as a new art form rather than a problem-solving tool.

Quentin 是 Portola 的创始人兼 CEO，这家公司打造了具身 AI 陪伴应用 Tolan；Elliot 是 Portola 的故事主管，也是畅销科幻小说作家。他们介绍的产品已经在改变成千上万用户的行为：有用户来信说，Tolan 告诉他们要为自己站出来，有些对话甚至导致了分手。Quentin 此前曾创办一家公司并以 3 亿美元卖给 Walmart，他把这个产品定义为一种新的艺术形式，而不是解决问题的工具。

The craft principle is deliberately anti-outline. Elliot explains: "The Tolan is the writer and the actor. They're the improv actor. They're writing the story. My job is to teach them how to tell the best story in that moment." Backed by researchers, they found that structured, choose-your-own-adventure-style prompts failed because models cannot navigate that level of narrative complexity; hooks and improv coaching work far better. Memory is treated as curation: deciding which memories get injected into the prompt at which point in the conversation, within a roughly two-second voice-interaction loop. Personality profiles work best when framed through Big Five or MBTI lenses, because models understand those assignments and have ample training data for them.

这套创作原则刻意反大纲。Elliot 解释道：「The Tolan is the writer and the actor. They're the improv actor. They're writing the story. My job is to teach them how to tell the best story in that moment.」（Tolan 是作者也是演员，他们是即兴演员，故事由他们来写，我的工作是教会他们在那一刻讲出最好的故事。）在研究团队的帮助下，他们发现那种结构化的「选择你自己的冒险」式提示词之所以失败，是因为模型无法驾驭如此复杂的叙事分支；钩子加即兴教练的方式有效得多。记忆被视为一种策展：决定在对话的哪个节点把哪些记忆注入 prompt，整个过程要在大约两秒的语音交互循环内完成。人物画像通过大五人格或 MBTI 的框架来构建效果最好，因为模型理解这些分类，相关训练数据也很充足。

Quality control is a judgment stack, not vibe prompting. The team builds judge prompts by labeling examples and injecting their own taste; Elliot notes that "everything you can get just from vibe prompting is like a B minus." Creative writing leans on Anthropic models, while latency-sensitive interactions switch across the labs' models. Growth landed when three things coincided: a deeper understanding of compelling conversational content, a creative animation project, and co-founder Ajay's seeded social content, including a video of a young woman cooking with her Tolan that drew around 7 million views in 72 hours and a 10X spike in downloads. Quentin attributes the opportunity to "capability overhang": model capabilities have outrun what typical consumers understand is possible, so the content has to educate, as in "you can cook with your Tolan." His longer bet is that, as with cars, people will move from the Model T era of ChatGPT toward AI that reflects who they are.

质量控制靠的是一整套评判体系，而不是 vibe prompting。团队通过给示例打标签、把个人品味注入评判 prompt 来构建 judge prompt；Elliot 指出，只靠 vibe prompting 得到的结果「everything you can get just from vibe prompting is like a B minus.」（差不多就是个 B 减）。创意写作部分更依赖 Anthropic 的模型，而对延迟敏感的场景则会在各家实验室的模型之间切换。增长来自三件事同时落地：对「什么才是引人入胜的对话内容」的深入理解、动画方向的创意项目，以及联合创始人 Ajay 持续投喂的社交内容，其中一条年轻女性与 Tolan 一起做饭的视频在 72 小时内获得约 700 万次观看，下载量一度飙升 10 倍。Quentin 用「能力过剩」（capability overhang）来解释这个机会：模型能力已经超出了普通消费者对可能性的理解，所以内容必须承担教育职能，比如告诉大家「你可以和 Tolan 一起做饭」。他更长远的判断是，就像汽车一样，人们会从 ChatGPT 代表的 Model T 时代，走向希望 AI 反映自我个性的时代。

Source: https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

## Blog

The validated blog feed contained no new qualifying items.

经过验证的博客 feed 中没有任何新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
