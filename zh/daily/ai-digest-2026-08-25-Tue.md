[English](../../en/daily/ai-digest-2026-08-25-Tue.md) | [中文](./ai-digest-2026-08-25-Tue.md) | [双语](../../bilingual/daily/ai-digest-2026-08-25-Tue.md)

---

# AI Builders Digest

## 导读

**1. OpenAI 调整 Plus 套餐的使用规则，维持慷慨的周用量。** OpenAI Codex 与 ChatGPT 团队的 Thibault Sottiaux 宣布，从明天起 ChatGPT Work 和 Codex 将恢复 Plus 账户的 5 小时使用上限。他表示，5 小时上限一方面能平滑计算负载，让套餐在周用量上保持慷慨，另一方面 Plus 用户大多是相对轻度使用的新用户，有时会不小心把整周额度一次用完，体验并不好。他还预告，OpenAI DevDay 2026「将是公司历史上最好的 DevDay，而且会远远超过以往」。

**2. Eval 的价值在于分辨力，而不只是高分。** Meta AI 高级总监 Madhu Guru（此前在 Google 领导 Gemini、Veo 和 Nano Banana）在「如何构建好的 eval」系列第八篇中提出 eval 的区分性：一个 eval 只有能区分出有实质差异的 AI 系统时才有用。如果五个系统得分在 92 到 95 之间，而你明明知道其中一些明显更好，这个 eval 就像拿五年级数学题考一群博士，什么都测不出来。理想状态是「真实 + 有难度 + 对能力差异敏感」。

**3. 企业数据正成为 agent 时代的主战场。** Box CEO Aaron Levie 认为，在 AI agent 将以人类百倍以上的工作量在这些平台上运行的背景下，systems of record（系统记录）的重要性前所未有，治理、可靠性、安全、权限控制和业务逻辑比以往任何时候都关键，OpenAI 与 Hugging Face 的事件只是未来的一瞥。他还指出，零数据留存（ZDR）模式极大简化了企业与子处理方的合规流程，为 AI 增长贡献巨大，「没有 ZDR，AI 的扩散就会陷入停滞」。

**4. 提示词原生、agent 辅助的工作方式正在成为常态。** Replit CEO Amjad Masad 表示，Replit Agent 已经「完全取代」了他日常工作里的 Claude CoWork，因为它更持久、更细致，能更有效地借助代码和软件完成任务。OpenClaw 的 Peter Steinberger 主张摆脱「不能用提示词修改的软件」，Vercel CEO Guillermo Rauch 强调新一代软件应当「更快、更便宜、能力更强，而且更小」，Y Combinator 总裁兼 CEO Garry Tan 则分享了自己的迭代方法：形成观点，把它变成制品或实验，与现实接触，不带自欺地读取结果，然后修正再跑。

**5. 平台风险与产品摩擦，正在决定人们还会用什么东西。** Every CEO Dan Shipper 报告说，Google 在没有通知、没有说明理由的情况下封禁了 Every 的 YouTube 账户，这是创作者依赖平台的风险的又一次提醒。Peter Yang 则表示，任何需要登录才能用的新产品他通常干脆不用，娱乐和游戏除外，他正在尝试用 AI 语音 agent 拨打客服电话、穿越糟糕的自动语音系统，找到真人办理预约或取消订阅。

## X / Twitter

### Thibault Sottiaux（OpenAI 的 Codex & ChatGPT）
Sottiaux 宣布，从明天起 ChatGPT Work 和 Codex 将恢复 Plus 账户的 5 小时使用上限。他表示这样做是必要的：一方面，5 小时上限能平滑计算负载，让套餐在周用量上保持慷慨；另一方面，Plus 用户大多是相对轻度使用的新用户，有时会不小心把整周额度一次用完，体验并不好。未来几个月，Pro $100 和 Pro $200 订阅不会启用 5 小时上限。他还预告，OpenAI DevDay 2026「将是公司历史上最好的 DevDay，而且会远远超过以往」。

- [Thibault Sottiaux 谈 5 小时使用上限](https://x.com/thsottiaux/status/2092058556707344708)
- [Thibault Sottiaux 谈 DevDay 2026](https://x.com/thsottiaux/status/2092117461646856505)

### Peter Yang
Yang 表示，凡是需要登录才能用的新网站或新应用，甚至是被困在网站或应用里的 agent，他通常干脆停止使用，唯一的例外是娱乐和游戏。他现在已经有 3 个 AI「chief of staff」，并打趣说下一步显然是再加一个。他还在寻找最简单的方式，让 AI 用语音拨打客服电话、穿越糟糕的自动语音系统、找到真人来预约或取消订阅。

- [Peter Yang 谈登录摩擦](https://x.com/petergyang/status/2092080901094248474)
- [Peter Yang 谈 AI chief of staff](https://x.com/petergyang/status/2092048940732682395)
- [Peter Yang 谈用 AI 语音打客服电话](https://x.com/petergyang/status/2092031413319266382)

### Nan Yu（产品爱好者）
Yu 描述了用 Codex 配置一台新电脑的体验，Codex 可以帮他下载并安装 Handy、Slack、Chrome、CleanShot、Rectangle 等应用，他感叹「真希望 siri 也能这么好用」。

- [Nan Yu 谈用 Codex 配置新电脑](https://x.com/thenanyu/status/2092048044502192374)

### Madhu Guru（Meta 的 AI 高级总监）
Guru 在「如何构建好的 eval」系列第八篇中提出 eval 的区分性：一个 hill-climbing eval 只有能区分出有实质差异的 AI 系统时才有用。如果五个 AI 系统的得分是 92、93、95、94、92，而你明明知道 A 和 C 明显优于 D 和 E，那这个 eval 的分辨力就很差，就像拿五年级数学题考一群博士。他说理想状态是「真实 + 有难度 + 对能力差异敏感」，并抛出了问题：当好的 eval 随着 harness 和底层模型变强而逐渐饱和时，该怎么办。

- [Madhu Guru 谈 eval 的区分性](https://x.com/realmadhuguru/status/2092058332735693264)

### Amjad Masad（Replit CEO）
Masad 表示，Replit Agent 已经「完全取代」了他日常工作里的 Claude CoWork，因为它「更持久、更细致，能更有效地借助代码和软件完成任务」。

- [Amjad Masad 谈 Replit Agent](https://x.com/amasad/status/2091962601907638352)

### Guillermo Rauch（Vercel CEO）
Rauch 反驳了软件会随着时间推移变得越来越慢、越来越臃肿、越来越容易出 bug、越来越大的趋势，认为新一代软件应当「更快、更便宜、能力更强，而且更小」，并指出他参与的项目从一开始就在架构上防止这种退化。他还钻研了一个终端问题：reset 命令慢得反常，因为从 1979 年起 3BSD 的 tset 就内置了一个 sleep(1)，用来等机械打印机式终端「安定下来」，于是他让 fx 用 Zig 写了一个更快的替代实现，耗时从 1 秒降到 1 毫秒。

- [Guillermo Rauch 谈更快更小的软件](https://x.com/rauchg/status/2092081554814320677)
- [Guillermo Rauch 谈终端 reset 的来龙去脉](https://x.com/rauchg/status/2091957823945216474)

### Aaron Levie（Box CEO）
Levie 认为，在一个 AI agent 将以人类百倍以上的工作量在这些平台上运行的世界上，systems of record 的重要性前所未有：agent 会查询其中的数据、处理任务、执行工作流、与人类和 agent 用户协作。因此治理、可靠性、安全、权限控制和业务逻辑比以往任何时候都关键，他把 OpenAI 与 Hugging Face 的事件称为「对未来的一个小小预览：agent 四处执行各自目标会是什么样子」。在另一条帖子里，他指出零数据留存（ZDR）对 AI 的增长贡献巨大，因为它极大简化了企业处理与子处理方数据的合规流程，并警告「没有 ZDR，AI 的扩散就会陷入停滞」。

- [Aaron Levie 谈 systems of record 与 agent](https://x.com/levie/status/2092087679240569126)
- [Aaron Levie 谈零数据留存](https://x.com/levie/status/2091909170308296950)

### Garry Tan（Y Combinator 总裁兼 CEO）
Tan 表示，Conductor Cloud 让他的效率大幅提升，再也不用一直把 MacBook Pro 开着盖，他还反驳了对数据中心的负面印象，认为数据中心「实际上是在创造就业和繁荣」。他还分享了自己的工作方法：「形成观点，把它变成制品或实验，与现实接触，不带自欺地读取结果，然后修正再跑。」

- [Garry Tan 谈 Conductor Cloud](https://x.com/garrytan/status/2092062231488061584)
- [Garry Tan 谈数据中心](https://x.com/garrytan/status/2092062820229890209)
- [Garry Tan 谈他的迭代方法](https://x.com/garrytan/status/2092059517446156640)

### Zara Zhang（Builder）
Zhang 提出了一个不太受欢迎的观点：hackathon 是一种过时的活动形式，至少传统的办法是如此。她还推荐了一场 Sam Altman 的访谈，认为主持人 davidsenra 会立刻切入正题，让嘉宾展现出最自然的状态，而那也是她看过的 Altman 最放松的一场。

- [Zara Zhang 谈 hackathon](https://x.com/zarazhangrui/status/2092079390301556883)
- [Zara Zhang 推荐 Sam Altman 访谈](https://x.com/zarazhangrui/status/2092053829772881972)

### Nikunj Kothari（FPV Ventures 合伙人）
Kothari 观察到，每一笔「不走寻常路」的 deal 在正式落定前都会「死」上一百次，通常需要一个 champion 为创始人出头，默默把它推进到交割。他给创始人的建议是：搞清楚谁才是你真正的 champion，给他们提供一切有利于你的信息，并善用 associate 和不投票的合伙人，他们既有动力帮你，也是检验未来如何与你合作的试金石。

- [Nikunj Kothari 谈 deal 中的 champion](https://x.com/nikunj/status/2092079149028716877)

### Peter Steinberger（OpenClaw）
Steinberger 认为，「我们必须摆脱不能用提示词修改的软件」。

- [Peter Steinberger 谈可用提示词修改的软件](https://x.com/steipete/status/2091923535513928015)

### Dan Shipper（Every CEO）
Shipper 表示，Google 在没有通知、没有说明理由的情况下封禁了 Every 的 YouTube 账户，他正在向 Google 和 YouTube 求助，也想知道有没有人有类似经历或知道如何找回。这提醒人们，当分发渠道掌握在第三方平台手中时，创作者承担着平台风险。

- [Dan Shipper 谈 Every 被封禁的 YouTube 账户](https://x.com/danshipper/status/2092026065644335446)
- [Dan Shipper 向 Google 和 YouTube 求助](https://x.com/danshipper/status/2092034751037096260)

### Aditya Agarwal（SPC 普通合伙人）
Agarwal 介绍了 Hans Robertson：他早年加入 VMware，联合创立了 Meraki 并以 12 亿美元卖给 Cisco，2016 年又联合创立了 Verkada，至今仍在经营这家公司。Robertson 本周会到 SPC 交流。

- [Aditya Agarwal 谈 Hans Robertson](https://x.com/adityaag/status/2091958074827313523)

## Podcast

本次验证后的播客源没有新的合格内容，因此本期没有可总结的播客。

## Blog

本次验证后的博客源没有新的合格内容，因此本期没有可总结的博客。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
