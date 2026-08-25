[English](../../en/daily/ai-digest-2026-08-25-Tue.md) | [中文](../../zh/daily/ai-digest-2026-08-25-Tue.md) | [Bilingual](./ai-digest-2026-08-25-Tue.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. OpenAI reshapes Plus-plan economics to keep weekly usage generous.** Thibault Sottiaux, who works on Codex & ChatGPT at OpenAI, announced that ChatGPT Work and Codex will bring back the 5-hour usage limit for Plus accounts starting tomorrow, saying the limit smooths compute load so the plan can stay generous on weekly usage and prevents casual, newer users from accidentally burning through their entire week. He also teased that OpenAI DevDay 2026 "will be our best DevDay in the history of the company. It will not be close."

OpenAI 调整 Plus 套餐的使用规则，维持慷慨的周用量。OpenAI Codex 与 ChatGPT 团队的 Thibault Sottiaux 宣布，从明天起 ChatGPT Work 和 Codex 将恢复 Plus 账户的 5 小时使用上限。他表示，5 小时上限一方面能平滑计算负载，让套餐在周用量上保持慷慨，另一方面 Plus 用户大多是相对轻度使用的新用户，有时会不小心把整周额度一次用完，体验并不好。他还预告，OpenAI DevDay 2026「将是公司历史上最好的 DevDay，而且会远远超过以往」。

**2. An eval is only as good as its ability to discriminate.** Madhu Guru, Senior Director of AI at Meta and previously a leader on Gemini, Veo, and Nano Banana at Google, continues his evals series with part eight on the discriminatory property of evals: a hill-climbing eval is useful only when it can separate AI systems that are meaningfully different. Five systems scoring 92 to 95 is like giving a fifth-grade math test to a group of PhDs, he argues. The sweet spot is "realistic + difficult + sensitive to differences in capability."

Eval 的价值在于分辨力，而不只是高分。Meta AI 高级总监 Madhu Guru（此前在 Google 领导 Gemini、Veo 和 Nano Banana）在「如何构建好的 eval」系列第八篇中提出 eval 的区分性：一个 eval 只有能区分出有实质差异的 AI 系统时才有用。如果五个系统得分在 92 到 95 之间，而你明明知道其中一些明显更好，这个 eval 就像拿五年级数学题考一群博士，什么都测不出来。理想状态是「真实 + 有难度 + 对能力差异敏感」。

**3. Enterprise data becomes the battleground for agents.** Box CEO Aaron Levie argues that systems of record have never been more important, because AI agents will do 100X more work on these platforms than people ever did, which makes governance, reliability, security, access controls, and business logic more critical than ever. He calls the OpenAI Hugging Face incident "just a small peek into what the future will look like," and separately credits zero data retention (ZDR) with a substantial share of AI's growth, warning that "without ZDR, AI diffusion grinds to a halt."

企业数据正成为 agent 时代的主战场。Box CEO Aaron Levie 认为，在 AI agent 将以人类百倍以上的工作量在这些平台上运行的背景下，systems of record（系统记录）的重要性前所未有，治理、可靠性、安全、权限控制和业务逻辑比以往任何时候都关键，OpenAI 与 Hugging Face 的事件只是未来的一瞥。他还指出，零数据留存（ZDR）模式极大简化了企业与子处理方的合规流程，为 AI 增长贡献巨大，「没有 ZDR，AI 的扩散就会陷入停滞」。

**4. Prompt-native, agent-assisted work is becoming the default.** Replit CEO Amjad Masad says Replit Agent has "completely replaced Claude CoWork" in his day-to-day work because it is more persistent and uses software more effectively. OpenClaw's Peter Steinberger argues we need to move away from "software that we can't change with a prompt," Vercel CEO Guillermo Rauch points out that new software should be "faster, cheaper, more capable, and… smaller," and Y Combinator President & CEO Garry Tan shares his iteration loop: form a view, turn it into an artifact or experiment, test it against reality, and revise and run again.

提示词原生、agent 辅助的工作方式正在成为常态。Replit CEO Amjad Masad 表示，Replit Agent 已经「完全取代」了他日常工作里的 Claude CoWork，因为它更持久、更细致，能更有效地借助代码和软件完成任务。OpenClaw 的 Peter Steinberger 主张摆脱「不能用提示词修改的软件」，Vercel CEO Guillermo Rauch 强调新一代软件应当「更快、更便宜、能力更强，而且更小」，Y Combinator 总裁兼 CEO Garry Tan 则分享了自己的迭代方法：形成观点，把它变成制品或实验，与现实接触，不带自欺地读取结果，然后修正再跑。

**5. Platform risk and product friction decide what people keep using.** Every CEO Dan Shipper reports that Google disabled Every's YouTube account with zero notice and no reason given, a reminder of creators' dependence on platforms. Peter Yang says he usually stops using any product that forces a login, with entertainment and gaming as the only exceptions, and he is exploring using AI voice agents to navigate phone support systems and talk to real humans.

平台风险与产品摩擦，正在决定人们还会用什么东西。Every CEO Dan Shipper 报告说，Google 在没有通知、没有说明理由的情况下封禁了 Every 的 YouTube 账户，这是创作者依赖平台的风险的又一次提醒。Peter Yang 则表示，任何需要登录才能用的新产品他通常干脆不用，娱乐和游戏除外，他正在尝试用 AI 语音 agent 拨打客服电话、穿越糟糕的自动语音系统，找到真人办理预约或取消订阅。

## X / Twitter

### Thibault Sottiaux: Codex & ChatGPT at OpenAI
Sottiaux announced that the 5-hour usage limit is returning for Plus accounts across ChatGPT Work and Codex starting tomorrow. He explains it as necessary on two fronts: the limit smooths load on compute so the plan can stay generous in terms of weekly usage, and Plus users tend to be relatively casual, newer users who can accidentally eat through their whole week's allowance and end up confused. For the upcoming months, the 5-hour limit will not be enabled for Pro $100 and Pro $200 subscriptions. He also predicted that OpenAI DevDay 2026 "will be our best DevDay in the history of the company. It will not be close."

Sottiaux 宣布，从明天起 ChatGPT Work 和 Codex 将恢复 Plus 账户的 5 小时使用上限。他表示这样做是必要的：一方面，5 小时上限能平滑计算负载，让套餐在周用量上保持慷慨；另一方面，Plus 用户大多是相对轻度使用的新用户，有时会不小心把整周额度一次用完，体验并不好。未来几个月，Pro $100 和 Pro $200 订阅不会启用 5 小时上限。他还预告，OpenAI DevDay 2026「将是公司历史上最好的 DevDay，而且会远远超过以往」。

- [Thibault Sottiaux on the 5-hour Plus limit](https://x.com/thsottiaux/status/2092058556707344708)
- [Thibault Sottiaux on DevDay 2026](https://x.com/thsottiaux/status/2092117461646856505)

### Peter Yang
Yang says that whenever he has to log in to a new website or app, or even use an agent trapped inside one, he usually prefers to stop using the product entirely, with entertainment and gaming as the only exceptions. He's now running three AI "chief of staffs" and notes the next step is to add one more, and he's looking for the easiest way to have AI call customer support phone numbers with voice, navigate automated phone systems, and talk to a human to book appointments or cancel subscriptions.

Yang 表示，凡是需要登录才能用的新网站或新应用，甚至是被困在网站或应用里的 agent，他通常干脆停止使用，唯一的例外是娱乐和游戏。他现在已经有 3 个 AI「chief of staff」，并打趣说下一步显然是再加一个。他还在寻找最简单的方式，让 AI 用语音拨打客服电话、穿越糟糕的自动语音系统、找到真人来预约或取消订阅。

- [Peter Yang on login friction](https://x.com/petergyang/status/2092080901094248474)
- [Peter Yang on AI chiefs of staff](https://x.com/petergyang/status/2092048940732682395)
- [Peter Yang on AI voice for customer support](https://x.com/petergyang/status/2092031413319266382)

### Nan Yu: product enthusiast
Yu describes setting up a new computer with Codex, which handles jobs like downloading and installing Handy, Slack, Chrome, CleanShot, and Rectangle, adding that it "makes you wish siri was good."

Yu 描述了用 Codex 配置一台新电脑的体验，Codex 可以帮他下载并安装 Handy、Slack、Chrome、CleanShot、Rectangle 等应用，他感叹「真希望 siri 也能这么好用」。

- [Nan Yu on setting up a computer with Codex](https://x.com/thenanyu/status/2092048044502192374)

### Madhu Guru: Senior Director of AI at Meta
In part eight of his "How to build great evals" series, Guru argues that an eval is only useful when it can discriminate: if five AI systems score 92, 93, 95, 94, and 92, and you already know A and C are substantially better than D and E, the eval has low discriminatory power, like giving a fifth-grade math test to a group of PhDs. He says the sweet spot is an eval that is "realistic + difficult + sensitive to differences in capability," and poses the question of what to do once good evals saturate as harnesses and underlying models improve.

Guru 在「如何构建好的 eval」系列第八篇中提出 eval 的区分性：一个 hill-climbing eval 只有能区分出有实质差异的 AI 系统时才有用。如果五个 AI 系统的得分是 92、93、95、94、92，而你明明知道 A 和 C 明显优于 D 和 E，那这个 eval 的分辨力就很差，就像拿五年级数学题考一群博士。他说理想状态是「真实 + 有难度 + 对能力差异敏感」，并抛出了问题：当好的 eval 随着 harness 和底层模型变强而逐渐饱和时，该怎么办。

- [Madhu Guru on the discriminatory property of evals](https://x.com/realmadhuguru/status/2092058332735693264)

### Amjad Masad: CEO at Replit
Masad says Replit Agent has completely replaced Claude CoWork in his day-to-day work: it's "much more persistent and fastidious, and it uses code/software more effectively to complete tasks."

Masad 表示，Replit Agent 已经「完全取代」了他日常工作里的 Claude CoWork，因为它「更持久、更细致，能更有效地借助代码和软件完成任务」。

- [Amjad Masad on Replit Agent](https://x.com/amasad/status/2091962601907638352)

### Guillermo Rauch: CEO of Vercel
Rauch pushes back on software's tendency to get slower, more bloated, buggier, and bigger over time, arguing that the new generation should be "faster, cheaper, more capable, and… smaller," and pointing to a project he says is architected from the outset to prevent exactly that. He also went down a terminal rabbit hole: the reset command is oddly slow because, since 1979, 3BSD's tset has included a sleep(1) meant to let mechanical printer-and-ink terminals "settle down," so he asked fx to write a faster alternative in Zig that takes 1ms instead of 1s.

Rauch 反驳了软件会随着时间推移变得越来越慢、越来越臃肿、越来越容易出 bug、越来越大的趋势，认为新一代软件应当「更快、更便宜、能力更强，而且更小」，并指出他参与的项目从一开始就在架构上防止这种退化。他还钻研了一个终端问题：reset 命令慢得反常，因为从 1979 年起 3BSD 的 tset 就内置了一个 sleep(1)，用来等机械打印机式终端「安定下来」，于是他让 fx 用 Zig 写了一个更快的替代实现，耗时从 1 秒降到 1 毫秒。

- [Guillermo Rauch on software getting faster and smaller](https://x.com/rauchg/status/2092081554814320677)
- [Guillermo Rauch on the terminal reset rabbit hole](https://x.com/rauchg/status/2091957823945216474)

### Aaron Levie: CEO of Box
Levie argues that systems of record have never been more important in a world where AI agents will do 100X more work on these platforms than people ever did, querying data, processing tasks, executing workflows, and collaborating with human and agent users. That makes governance, reliability, security, access controls, and business logic more critical than ever; he calls the OpenAI Hugging Face incident "just a small peek into what the future will look like with agents running around trying to execute on their goals." Separately, he argues that zero data retention (ZDR) is responsible for a substantial amount of AI's growth because it simplified the compliance process for handling data with subprocessors, and he warns that "without ZDR, AI diffusion grinds to a halt."

Levie 认为，在一个 AI agent 将以人类百倍以上的工作量在这些平台上运行的世界上，systems of record 的重要性前所未有：agent 会查询其中的数据、处理任务、执行工作流、与人类和 agent 用户协作。因此治理、可靠性、安全、权限控制和业务逻辑比以往任何时候都关键，他把 OpenAI 与 Hugging Face 的事件称为「对未来的一个小小预览：agent 四处执行各自目标会是什么样子」。在另一条帖子里，他指出零数据留存（ZDR）对 AI 的增长贡献巨大，因为它极大简化了企业处理与子处理方数据的合规流程，并警告「没有 ZDR，AI 的扩散就会陷入停滞」。

- [Aaron Levie on systems of record and agents](https://x.com/levie/status/2092087679240569126)
- [Aaron Levie on zero data retention](https://x.com/levie/status/2091909170308296950)

### Garry Tan: President & CEO of Y Combinator
Tan says Conductor Cloud has made him much more productive and freed him from keeping his MacBook Pro cracked open, and he pushes back on negative takes about datacenters, arguing they "create jobs and prosperity, actually." He also shared his working method: "Form a view. Turn it into an artifact or experiment. Put it in contact with reality. Read the result without self-deception. Revise and run again."

Tan 表示，Conductor Cloud 让他的效率大幅提升，再也不用一直把 MacBook Pro 开着盖，他还反驳了对数据中心的负面印象，认为数据中心「实际上是在创造就业和繁荣」。他还分享了自己的工作方法：「形成观点，把它变成制品或实验，与现实接触，不带自欺地读取结果，然后修正再跑。」

- [Garry Tan on Conductor Cloud](https://x.com/garrytan/status/2092062231488061584)
- [Garry Tan on datacenters](https://x.com/garrytan/status/2092062820229890209)
- [Garry Tan on his iteration loop](https://x.com/garrytan/status/2092059517446156640)

### Zara Zhang: Builder
Zhang makes the unpopular case that hackathons are an outdated event format, at least the way they are traditionally held. She also recommends a Sam Altman interview, saying interviewer davidsenra immediately cuts to the chase and gets his guests to be their most natural selves, and that Altman seems his most comfortable self in it.

Zhang 提出了一个不太受欢迎的观点：hackathon 是一种过时的活动形式，至少传统的办法是如此。她还推荐了一场 Sam Altman 的访谈，认为主持人 davidsenra 会立刻切入正题，让嘉宾展现出最自然的状态，而那也是她看过的 Altman 最放松的一场。

- [Zara Zhang on hackathons](https://x.com/zarazhangrui/status/2092079390301556883)
- [Zara Zhang on the Sam Altman interview](https://x.com/zarazhangrui/status/2092053829772881972)

### Nikunj Kothari: Partner at FPV Ventures
Kothari observes that every unconventional deal that's officially wired "dies a 100 times" in venture, and it usually takes one champion sticking their neck out for the founder and quietly steering it to completion. His advice: founders should figure out who their real champion is, arm them with whatever information makes the case, and lean on associates and non-voting partners, who are incentivized to help and are a good test of how they'd partner with you on the cap table.

Kothari 观察到，每一笔「不走寻常路」的 deal 在正式落定前都会「死」上一百次，通常需要一个 champion 为创始人出头，默默把它推进到交割。他给创始人的建议是：搞清楚谁才是你真正的 champion，给他们提供一切有利于你的信息，并善用 associate 和不投票的合伙人，他们既有动力帮你，也是检验未来如何与你合作的试金石。

- [Nikunj Kothari on deal champions](https://x.com/nikunj/status/2092079149028716877)

### Peter Steinberger: OpenClaw
Steinberger argues that "we need to get away from software that we can't change with a prompt."

Steinberger 认为，「我们必须摆脱不能用提示词修改的软件」。

- [Peter Steinberger on prompt-changeable software](https://x.com/steipete/status/2091923535513928015)

### Dan Shipper: CEO of Every
Shipper says Google disabled Every's YouTube account with zero notice and no reason given, and is asking for help or anyone with experience getting such accounts restored. It's a reminder of the platform risk creators carry when their distribution lives on a third-party service.

Shipper 表示，Google 在没有通知、没有说明理由的情况下封禁了 Every 的 YouTube 账户，他正在向 Google 和 YouTube 求助，也想知道有没有人有类似经历或知道如何找回。这提醒人们，当分发渠道掌握在第三方平台手中时，创作者承担着平台风险。

- [Dan Shipper on Every's disabled YouTube account](https://x.com/danshipper/status/2092026065644335446)
- [Dan Shipper asking Google and YouTube for help](https://x.com/danshipper/status/2092034751037096260)

### Aditya Agarwal: General Partner at SPC
Agarwal highlights Hans Robertson, who was early at VMware, co-founded Meraki and sold it to Cisco for $1.2B, and co-founded Verkada in 2016, where he is still running the company today. Robertson is visiting SPC this week.

Agarwal 介绍了 Hans Robertson：他早年加入 VMware，联合创立了 Meraki 并以 12 亿美元卖给 Cisco，2016 年又联合创立了 Verkada，至今仍在经营这家公司。Robertson 本周会到 SPC 交流。

- [Aditya Agarwal on Hans Robertson](https://x.com/adityaag/status/2091958074827313523)

## Podcast

The validated podcast feed contained no new qualifying episodes for this digest, so there is nothing to summarize this cycle.

本次验证后的播客源没有新的合格内容，因此本期没有可总结的播客。

## Blog

The validated blog feed contained no new qualifying posts for this digest, so there is nothing to summarize this cycle.

本次验证后的博客源没有新的合格内容，因此本期没有可总结的博客。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
