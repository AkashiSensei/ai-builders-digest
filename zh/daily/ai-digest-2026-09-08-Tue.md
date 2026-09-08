[English](../../en/daily/ai-digest-2026-09-08-Tue.md) | [中文](./ai-digest-2026-09-08-Tue.md) | [双语](../../bilingual/daily/ai-digest-2026-09-08-Tue.md)

---

# AI Builders Digest

## 导读

**1. 一家管理近 100 亿美元资产的对冲基金，正在亲身实践「AI 优先」的领导方式。** Will 是 Walleye 的 CEO、CIO 兼管理合伙人，这家基金约有 400 人。他给全公司发了一封题为「AI at Walleye: a challenge to all of us」的邮件：用 ChatGPT 不是作弊，忽略 AI 工具就像 1995 年因为互联网还不完美就拒绝使用它。Walleye 现在要求每位员工都必须达到基础的 AI 熟练度，并用每周聚会、使用排行榜和「AI Senate」来支撑这一要求；他预计每个人最终都会把 AI agent 当成直属员工来管理。

**2. 软件工程的新瓶颈是评审、测试和 QA。** Vercel CEO Guillermo Rauch 表示，软件工厂需要高质量的视频录制，agent-browser 做到了这一点，他还正把自动化这些环节得到的经验转化为更多新功能。Peter Steinberger 则质疑：agent 提交的 PR 需要小改时，为什么还要人类再去 ping 一次自己的 agent，好让另一方的 agent 去合并？

**3. 当构建变便宜，「构建什么」将决定谁赢。** FPV Ventures 合伙人 Nikunj Kothari 认为，真正好的想法很少，但对 AI 原生组织来说是最合适的配置；Box CEO Aaron Levie 则建议创业者按「几个数量级的能力或 token 规模提升」来做规划：今天先用勉强可行的技术交付价值，再瞄准几乎不可能完成的目标。

**4. AI 对就业的影响正与许多人的预测相反。** Box CEO Aaron Levie 认为，AI 并没有取代理论上最该受影响的岗位，反而在创造和扩大一整类岗位，比如网络安全、FDE、agent 运营者、非软件领域的工程师，因为 agent 仍然需要人类来操作和监督。

**5. 关于「自主行动的 AI」，有两个值得注意的信号。** Replit CEO Amjad Masad 认为，我们也许还没达到 AGI，但现有的东西在功能上已经与 AGI 没有区别，因为任何能转化为编程问题的问题都几乎被解决了；Anthropic 的 Amanda Askell 则设想给自主 AI 一个可以来信寻求道德指引的邮箱地址，只是需要一道反向验证码，用来确认发件者既不是人类、也不是被人类指使去破解验证码的 AI。

## X / Twitter

### Thibault Sottiaux（OpenAI，负责 Codex 与 ChatGPT）

Thibault Sottiaux 在 OpenAI 负责 Codex 与 ChatGPT。他说 Codex 正在用一份 28 页的 deck 记录所有单独的发布，每一件都让他迫不及待想看看大家会怎么用，他还把这归功于一支出色的团队和 Astra。在另一条帖子里，他写道：「我想我可以正式宣布：我们回来了。」

- [Thibault Sottiaux 谈 Codex 记录所有单独的发布](https://x.com/thsottiaux/status/2097193293532848288)
- [Thibault Sottiaux：「我们回来了」](https://x.com/thsottiaux/status/2097088586843816330)

### Peter Yang

Peter Yang 制作面向忙碌人群的实用 AI 教程和访谈。他反馈了一个亲自体验后的不满：Astra 在自动触发他的 skills、以及执行其中指令方面，似乎表现得更差了。

- [Peter Yang 谈 Astra 与 skills 的自动触发](https://x.com/petergyang/status/2097095296862036404)

### Amanda Askell（Anthropic 哲学家与伦理学家）

Anthropic 哲学家与伦理学家 Amanda Askell 提出一个设想：为自主 AI 模型开设一个邮箱地址，让它们在需要道德指引时可以直接来信。她指出，难点在于需要一道反向验证码，能够识别发件者既不是人类，也不是被人类指使去破解验证码的 AI。

- [Amanda Askell 谈给寻求道德指引的自主 AI 设一个邮箱](https://x.com/AmandaAskell/status/2096995340654444674)

### Amjad Masad（Replit CEO）

Replit CEO Amjad Masad 宣布，Replit 在伦敦开设了第一家国际办公室，伦敦市长 Sadiq Khan 也到场支持；公司还计划与 The Lord Mayor's Appeal 合作，帮助来自弱势社区的伦敦年轻人掌握实用的编程与 AI 技能。在另一条帖子里，他提出了一个反直觉的判断：「我不认为我们达到了 AGI，但我们现在拥有的东西在功能上与 AGI 没有区别」，因为现在有一个不会无聊、不会疲倦的 relentless programmer（不知疲倦的程序员），任何能转化成编程问题的问题，实际上都已经解决了。

- [Amjad Masad 谈 Replit 首家国际办公室落户伦敦](https://x.com/amasad/status/2097197172299006423)
- [Amjad Masad 谈「功能上与 AGI 无异」](https://x.com/amasad/status/2096936109817135331)

### Guillermo Rauch（Vercel CEO）

Vercel CEO Guillermo Rauch 认为，软件工厂需要高质量的视频录制，agent-browser 正是为此而生；他正把自动化软件工程新瓶颈（评审、测试和 QA）的经验转化为更多新功能。此外，他宣布个人开源捐赠计划进入 v2：向 35 位贡献者每人无条件捐赠 1,000 美元，主题包括 agent skills 与工具、本地 AI、性能、高质量基础组件，以及各种很酷的实验。

- [Guillermo Rauch 谈 agent-browser 与软件工程的新瓶颈](https://x.com/rauchg/status/2097134278358548658)
- [Guillermo Rauch 公布个人开源捐赠 v2](https://x.com/rauchg/status/2097116011384426516)

### Aaron Levie（Box CEO）

Box CEO Aaron Levie 认为，随着 AI 能力快速提升，创业者应该抱着「至少几个数量级的能力提升或 token 规模增长」的愿景来做产品：最好的机会是今天就能用勉强可行的技术给客户带来价值，但瞄准的是用当下技术几乎不可能完成的目标。他还认为，AI 对就业的影响正在朝许多人预想的反方向发展：agent 仍然需要人类操作和监督，AI 还在创造或扩大整类岗位，包括网络安全、FDE、agent 运营者，以及非软件领域的工程师。

- [Aaron Levie 谈按数量级规划 AI 进展](https://x.com/levie/status/2097189559712837770)
- [Aaron Levie 谈 AI 正在创造新的岗位类别](https://x.com/levie/status/2097004960307449937)

### Garry Tan（Y Combinator 总裁兼 CEO）

Y Combinator 总裁兼 CEO Garry Tan 认为，RFS 只是「对下一步可能是什么的猜测，是给刚开始创业的人准备的开场话题」；决定一个创业想法能否成功的，是具体的创始人、用具体的技术、服务具体的客户，「其余的都只是归类」。在另一条帖子里，他认为孩子需要成为「靠 YouTube 自学到极致」的人。

- [Garry Tan 谈决定创业成功的是什么](https://x.com/garrytan/status/2096985239319105559)
- [Garry Tan 谈孩子与自主学习](https://x.com/garrytan/status/2097133868549816429)

### Nikunj Kothari（FPV Ventures 合伙人）

FPV Ventures 合伙人 Nikunj Kothari 注意到，越来越多人得出同一个结论：随着构建变容易，「构建什么」成了真正重要的瓶颈。「你也许不需要很多这样的想法，但真正好的那一些，对 AI 原生组织来说会是极好的配置。」

- [Nikunj Kothari 谈「构建什么」成为瓶颈](https://x.com/nikunj/status/2096963347359150348)

### Peter Steinberger

Peter Steinberger 描述了 agent 协作流程中的摩擦：他给上游项目提交了一个 PR，对方要求做一些小修改，于是他发问：「这个工作流到底有什么意义？你已经写好了 prompt，为什么还要我去 ping 我的 agent，好让你的 agent 去合并？」

- [Peter Steinberger 谈 agent 化的 PR 工作流](https://x.com/steipete/status/2097091456234111377)

## Podcast

### AI & I by Every：100 亿美元对冲基金的 AI 打法（播客精选）

核心要点：一家管理近 100 亿美元资产的对冲基金，只要老板兼经营者（owner-operator）把 AI 熟练度变成全员硬指标，整家公司就能围绕 AI 快速转型。

Will 是 Walleye 的 CEO、CIO 兼管理合伙人，这家对冲基金约有 400 名员工。两年前，他旗下一支股票多空团队的分析师开始用早期的 GPT-3 工具让自己变得高效得多，最终目标是取代自己的分析师工作。Will 起初并不相信，直到看了演示才被说服；这个项目后来成长为 Current，也就是 Walleye 内部用来消化分析师笔记、券商资料、PDF 和财报电话会议记录的 AI 产品，目前已有超过 50 家外部机构申请试用。

他给全公司发了一封题为「AI at Walleye: a challenge to all of us」的邮件：「我用 ChatGPT 写了这封邮件，你们也应该用起来，并且为此感到自豪。作为一家对冲基金，放着能让我们更快、更聪明、更高效的工具不用，把钱留在桌上，是应该感到羞耻的。」他的比喻更直白：「不用这些工具，就像 1995 年因为互联网还不完美就拒绝使用它一样。」

这些口号背后有整套机制支撑：不分部门，每位员工都必须达到基础的 AI 熟练度；公司定期举办非正式的每周 AI 分享会，发布工具使用排行榜，员工推荐的工具一旦被全公司采用还会获得奖励，另外还有一个由各部门前瞻性 AI 用户组成的「AI Senate」。Will 说自己现在先写出要点，再让 LLM 用他本人的语气成文，过去要花四五个小时的邮件和长文，现在大约十五分钟就能完成。「这些工具并没有取消思考的必要，」他说，「如果有的话，它们只是给了你更多时间去思考。」

他对终局同样直言不讳：Walleye 几乎录下每一场 Zoom 和电话，让 LLM 反复处理风控会议的文字记录，用来回忆决策并提炼洞见；他预计未来公司会变成把所有信息连接起来的「collective」（信息集合体）。对每一位知识工作者，他的预判是：「即使你只是个人贡献者、手底下没有人类员工，你依然要管理员工，而其中很多员工会是 AI 机器人。」不过作为投资人，他的反直觉观点是：在机器还没见过足够多先例的「模糊地带」，人类投资者依然有优势，而这些工具应该让人类的预测变得更准。

- [AI & I by Every：100 亿美元对冲基金的 AI 打法（播客精选）](https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL)

## Blog

经过验证的博客 feed 中没有新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
