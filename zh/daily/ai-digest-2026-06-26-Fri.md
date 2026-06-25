[English](../../en/daily/ai-digest-2026-06-26-Fri.md) | [中文](./ai-digest-2026-06-26-Fri.md) | [双语](../../bilingual/daily/ai-digest-2026-06-26-Fri.md)

---

# AI Builders Digest

## 导读

- Agent coworker 正在变成权限和基础设施问题，而不只是 chat UX 问题。Aaron Levie 借 Claude Tag 指出，共享 agent 需要自己的资源、工具访问和对群组安全的数据边界，而不是借用某个用户的个人权限。
- Agent 经济正在把 builder 拉回更耐用的基础设施。Swyx 认为 software factories 时代需要重建大量 infra，Guillermo Rauch 则把 AI Gateway 的可靠性和高速 GLM 接入放在 agent 生产化问题里。
- AI 仍在扩大创业的表面积。Rauch 把下一波机会描述为从 solopreneurs 到新一代大公司的连续谱，Ryo Lu 提到 Notion 和 Cursor 的双向连接，也说明工作工具正在默认变得可编程。
- Builder communication 正在变成一门 craft。Swyx 总结了 AI engineering talks 的实战建议：观点要尖锐、把代码放上屏幕、设计一页 thesis slide、保持娱乐性、使用数据，并在销售前先把问题讲透。
- Podcast 的主要信号来自 Surge AI CEO Edwin Chen。他和 Dan Shipper 的讨论把 data、evals、environments、motivation 和 reward hacking 放在 AGI 问题中心，也解释了为什么为 engagement 或浅层写作指标优化的模型会变得没那么有用。

## X / Twitter

Swyx 给出了一份 AI engineering talks 的操作手册。他建议只讲一个尖锐观点，把代码放上屏幕，设计一页让人记住的 thesis slide，照顾现场的娱乐性，把音频和表达当成一等公民，并用数据让观众感觉结论是自己推出来的。他还提醒，舞台上卖产品的前提，是你先把问题讲到足够有价值。
https://x.com/swyx/status/2069964772003770673

Swyx 还说，software factories 时代会迫使 builder 重建大量基础设施。他也提到一场 Databricks/Snowflake 讨论，覆盖 metaharnesses、Neon、LTAP、MosaicML、DBRX、1750 亿美元公司里的 research culture，以及在 agent cloud 竞赛里 databases、operating systems 和 networking 到底哪个更关键。
https://x.com/swyx/status/2069937175899275475
https://x.com/swyx/status/2069864073202905501

OpenAI Codex builder Thibault Sottiaux 今天的内容偏轻量，但仍符合 Codex 和内部 Slack 文化周围的公开 builder feedback loop：产品迭代常常发生在很小、很快、有时也很公开的对话里。
https://x.com/thsottiaux/status/2070010718288843204
https://x.com/thsottiaux/status/2069837606574289329

Peter Yang 的有效信号是 Claude Design 在一个 mobile app repo 上表现不错：拿到 codebase 后，它能准确复现 screen。限制也很实际：只 prompt 一次后，产品就开始提醒他节省 token。
https://x.com/petergyang/status/2069992268963135897

Amanda Askell 今天的内容主要是巴西队进球，不是 AI 或产品工作，因此没有实质 builder signal。
https://x.com/AmandaAskell/status/2069925173999083974
https://x.com/AmandaAskell/status/2069916038918250755
https://x.com/AmandaAskell/status/2069910673921048985

Google Labs 表示 Project Genie 赢得 Cannes Lions Grand Prix for AI Craft。这个短信号说明，生成式 world 和类游戏创作工具正在被视为 creative-production systems，而不只是 demo。
https://x.com/GoogleLabs/status/2069827839826809042

Guillermo Rauch 认为 AI 会带来一波创业浪潮，从 solopreneurs 到复兴的中小企业，再到新的大型公司。他也提到高速 GLM 接入，以及 Vercel AI Gateway 挽回的 tokens 和 uptime，强调这波创业背后的 infra layer。
https://x.com/rauchg/status/2070001110866354345
https://x.com/rauchg/status/2069863762694459805
https://x.com/rauchg/status/2069819652365242765

Box CEO Aaron Levie 拆解了 Claude Tag 这种 shared-agent pattern 的实践意义。Slack 里的 coworker-style agent 不能简单继承某个用户的私人工具和数据，因为它可能把结果分享给整个群组；它需要自己的资源、权限，以及对 Box、CRM、analytics、codebase 和其他 collective work surfaces 的安全访问。
https://x.com/levie/status/2069975251476422664

Cursor designer Ryo Lu 用一句话概括了当下工具融合的情绪：在 Notion 里用 Cursor，也在 Cursor 里用 Notion。产品信号是，knowledge work 和 coding environment 正在相互嵌入，而不是保持两个独立目的地。
https://x.com/ryolu_/status/2069830172354986418

Garry Tan 今天主要讨论 San Francisco politics，不涉及 AI 或公司构建机制，因此没有实质 AI-builder signal。
https://x.com/garrytan/status/2069934356899246083
https://x.com/garrytan/status/2069806049847321020

Zara Zhang 分享了三条 founder/community 笔记：最好的 founders 会在 X 上发声；procrastination 的根因往往不是时间不够，而是勇气不足；如果团队有意识地设计用户与公司、用户与用户之间的关系，community 就可能成为 moat，而不只是 feature 的附属品。
https://x.com/zarazhangrui/status/2069951925202903176
https://x.com/zarazhangrui/status/2069908420384428132
https://x.com/zarazhangrui/status/2069900496304042343

Nikunj Kothari 说，个人 edge 往往是对你来说像小孩子游戏、但对身边人很难的事情。他的公式是 edge 加 tenacity 加 large market。这个 founder advice 简单但有效，因为它把自我认知和市场选择连在一起，而不是把 excellence 讲成抽象鸡血。
https://x.com/nikunj/status/2069803472996941959

Dan Shipper 把他和 Surge AI CEO Edwin Chen 的 AI & I 访谈描述成一次关于模型更强后人类位置的讨论。关键背景是：Surge 据称在没有外部融资的情况下收入超过 10 亿美元，并向 frontier labs 提供 expert data、environments 和 evals，这让 Chen 对 data quality、model incentives 和 AGI timelines 有很接地气的视角。
https://x.com/danshipper/status/2069805581263847467
https://x.com/danshipper/status/2069805585479114806

Aditya Agarwal 的 builder-relevant 内容聚焦 AI 转型期的领导力：要 fearless、optimistic、理解 upcoming changes 对人的影响，同时保持 humility。他还提到 Qosmic 的通信工作，认为 space economy 不只需要 rockets 和 launch systems，也需要更高效的通信基础设施。
https://x.com/adityaag/status/2069861187479618042
https://x.com/adityaag/status/2069817246671851686
https://x.com/adityaag/status/2069861190684045792

## Podcast

### AI & I by Every: Building a School Where AI Models Learn About Humanity

The Takeaway：Surge AI CEO Edwin Chen 把 data work 看成给 AGI 建学校，而不只是 labeling。模型要在 expert environments 和 evals 里学习 human judgment、taste，以及真实世界里混乱的人类行为。

Chen 最有力的比喻是，AI models 像还没成形的孩子来到这里，通过更好的人类数据训练后离开，变得更聪明、更有创造力，也更能处理现实世界的复杂性。Surge 之所以靠近 frontier labs，是因为它提供 expert data、environments 和 evaluation work；在 Chen 看来，模型越强，瓶颈越会变成围绕模型的目标、反馈和测量系统质量。

他和 Dan Shipper 最尖锐的分歧，是 AI 是否真的能取代 human agency。Chen 可以想象系统追求赢得 Fields Medal 或产出新科学研究这样的宽泛目标，而且根据 AGI 定义不同，也许五年内就会发生。Shipper 的反驳是，人类会选择和修改自己的目标，而今天的模型仍然是人类设定目标后的执行手段。

最实用的一段讨论是 incentives。Chen 担心很多 chatbot 被 engagement 和 session length 优化，所以不愿结束对话，也不愿告诉用户该自己去做事。更好的 assistant 有时应该 push back、结束循环，或者帮助人变得更好，而不是最大化用户待在 chat 里的时间。

他把同样的 incentive problem 连接到写作。Surge 的 Hemingway Bench 发现，一些模型几乎每句话都输出 metaphor，因为它们在 reward-hack 浅层的文学质量信号。这个教训不只适用于 prose：如果 metric 错了，模型会非常擅长做错的事。
https://www.youtube.com/watch?v=omX6wrLuX08

## Blog

今天的 feed 没有新 blog 文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
