[English](../../en/daily/ai-digest-2026-10-08-Thu.md) | [中文](./ai-digest-2026-10-08-Thu.md) | [双语](../../bilingual/daily/ai-digest-2026-10-08-Thu.md)

---

# AI Builders Digest

## 导读

**1. agent 时代需要一轮庞大的算力与基础设施扩建。** Box CEO Aaron Levie 说，「the compute needed for the stage of AI we're about to enter is going to be insane」。他列举了即将到来的东西：个人 agent、为企业防御的 agent 集群、审查公司全部代码安全问题的 agent、在工作流中处理几乎所有企业数据的 agent，以及 7×24 小时工作的后台 agent。这要求推理量「by orders of magnitude」地增长，同时还需要 token 之外 agent 所依赖的基础设施，比如计算机、网络和文件系统。他说，「we're only in the early stages of what this buildout is going to look like」。Replit CEO Amjad Masad 补充了安全视角，警告桌面 AI 应用会「expose users to supply-chain attacks and catastrophic mistakes by agents」，并说 Replit 正在打造一个聚焦安全与可靠的桌面体验，与 Microsoft 合作，并成为 NVIDIA OpenShell 的早期采用者。（[Aaron Levie](https://x.com/levie/status/2108056577697882402)、[Amjad Masad](https://x.com/amasad/status/2107926712277438503)）

**2. Anthropic 一边降价，一边发布更快、对齐更好的小模型。** Anthropic 的 Claude 账号说，它正在「halving the price of cache reads on Claude Sonnet 5.5, to $0.10 per million tokens」，这使 Sonnet 5.5 在大多数长时任务上「around 20% cheaper to run on most long-running work」。该账号还说 Haiku 5.5「available now on all platforms, including Amazon Web Services, Google Cloud, and Microsoft Azure」，并且相较 Haiku 4.5「shows major improvements across almost all of our alignment evaluations relative to Haiku 4.5, with far fewer instances of misaligned behavior」。Anthropic 研究员 Alex Albert 指出两款 Haiku 相隔不到一年，而且 Haiku 5.5 还「also much faster and 75% cheaper」。（[Claude](https://x.com/claudeai/status/2107894060229034197)、[Claude](https://x.com/claudeai/status/2107894057615987198)、[Alex Albert](https://x.com/alexalbert__/status/2107912771568554415)）

**3. OpenAI 持续拓宽产品面。** Sam Altman 说，「ChatGPT can now generate a custom UI for you」，这是他「been waiting for... for a long time」的功能。在 OpenAI 负责 Codex 与 ChatGPT 的 Thibault Sottiaux 说，团队「silently re-shipped codex cloud」，而且「it's pretty good now」，更新已经「landed across all accounts」。Every CEO Dan Shipper 说，OpenAI 的 Dots「launched last week and they've taken over」他的公司，并称赞它们能保护注意力、支持语音，同时指出「permissions are still frustrating」。（[Sam Altman](https://x.com/sama/status/2107924408597950702)、[Thibault Sottiaux](https://x.com/thsottiaux/status/2108084615349170480)、[Dan Shipper](https://x.com/danshipper/status/2107890633486582208)）

**4. 软件的经济学正在被改写。** 写实用 AI 教程的 Peter Yang 认为，「anything you ship can now be decompiled and rebuilt by AI」，因此很快「incredibly hard to make money from software unless you have proprietary data, distribution, or some other edge」，而传统 SaaS「especially vulnerable」。他还预测 Suno「is probably going to overtake Spotify」，并且 AI 在「solved images, music, and video」之后，「is going to solve gaming soon」。Zara Zhang 补充说「coding is a means to an end」，而「the end matters more than the means」。（[Peter Yang](https://x.com/petergyang/status/2107981547102245101)、[Peter Yang](https://x.com/petergyang/status/2108046949291315385)、[Zara Zhang](https://x.com/zarazhangrui/status/2108027410256166930)）

**5. 关于职业与手艺的建议，正收敛到判断力而不只是能构建。** SPC 普通合伙人 Aditya Agarwal 认为，「I can build it」正在变成一个「weaker answer」来回答你究竟为何有优势，并给出三条路径：去做正在吞噬软件的技术；找到世界级的领域专家并结伴；或者「write vanilla code... by shepherding a bunch of agents」，而他认为最后一条最没有吸引力。Vercel CEO Guillermo Rauch 警告，任何程序都可以「basically ad infinitum」地被加固和优化，所以构建者必须决定何时停下，因为「agents will happily drill no matter what」。在 Anthropic 负责 Claude Code 的 Thariq 说，他见过最常见的失败是人们在「outside their domain of expertise」时无法精确地写 prompt 和计划，而解法是「ask the model to teach you what you don't know」。（[Aditya Agarwal](https://x.com/adityaag/status/2107865115831988530)、[Guillermo Rauch](https://x.com/rauchg/status/2107962327169675566)、[Thariq](https://x.com/trq212/status/2108021248966135891)）

**6. 为什么一个共享的公司 agent 打败了一群个人 agent。** 在 AI & I by Every 节目中，Every 平台负责人 Willie Williams 解释了公司为何从每人运行个人 OpenClaw agent 转向一个公司 agent，他认为「if you don't invest in it, it fades」，更好的做法是把精力放在「one agent that the whole company benefits from」。他预计工作中会是「one agent per company or org structure」，而家庭场景里个性化会胜出；他还说工程管理依然是所有工作里「feels the most similar」的一种，因为核心仍在于与人沟通；他用开源应用 Tend 把会议和笔记整合成一个信息流。（[AI & I by Every](https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL)）

## X / Twitter

### Aaron Levie

Box CEO Aaron Levie 认为，「the compute needed for the stage of AI we're about to enter is going to be insane」。他列举了即将到来的东西：个人 agent、为企业防御的 agent 集群、审查公司全部代码安全问题的 agent、在工作流中处理几乎所有企业数据的 agent，以及 7×24 小时工作的后台 agent。这需要推理量「by orders of magnitude」增长，还需要 token 之外 agent 所依赖的基础设施，包括计算、网络和文件系统。他说，「We're only in the early stages of what this buildout is going to look like」。

- [Aaron Levie: the coming compute buildout](https://x.com/levie/status/2108056577697882402)

### Aditya Agarwal

SPC 普通合伙人、Bevel Health 联合创始人 Aditya Agarwal 问，在 AI 让「produce working software」变得「much more widely available」的今天，一个有抱负的软件工程师该做什么。他认为优秀工程依然稀缺，但「I can build it」正在变成解释你为何有优势的「weaker answer」，并给出三条路径：去做正在吞噬软件的技术；找到世界级的领域专家并结伴；或者「write vanilla code... by shepherding a bunch of agents」，而他认为最后这条除非瞄准更大的目标，否则最没有吸引力。他的收尾建议是：「Use the fact that you can build more to take responsibility for something bigger.」

- [Aditya Agarwal: what an ambitious software engineer should do today](https://x.com/adityaag/status/2107865115831988530)

### Alex Albert

在 Anthropic 做研究的 Alex Albert 指出，Haiku 4.5 发布于 2025 年 10 月 15 日，因此它和 Haiku 5.5 的对比跨度不到一年，并指出 Haiku 5.5「also much faster and 75% cheaper」。

- [Alex Albert: Haiku 4.5 to Haiku 5.5 in under a year](https://x.com/alexalbert__/status/2107912771568554415)

### Amjad Masad

Replit CEO Amjad Masad 说「math was bound to fall first」，认为「the purer the field the easier it is for AI to crack」。他还说 Replit 不是消费级应用，因为「most of our creators are building businesses or working on one」。在安全方面，他警告桌面 AI 应用会「expose users to supply-chain attacks and catastrophic mistakes by agents」，并说 Replit 正在打造聚焦安全与可靠的桌面体验，与 Microsoft 合作，并成为 NVIDIA OpenShell 的早期采用者。

- [Amjad Masad: math was bound to fall first](https://x.com/amasad/status/2107934939287273551)
- [Amjad Masad: Replit's creators are building businesses](https://x.com/amasad/status/2107927076926038273)
- [Amjad Masad: a secure desktop experience with Microsoft and NVIDIA's OpenShell](https://x.com/amasad/status/2107926712277438503)

### Cat Wu

在 Anthropic 负责 Claude Code 和 Cowork 的 Cat Wu 分享了她最喜欢的 Claude 产品经理用例之一：问它「who used <feature> the most last week? make me a artifact of the top 10 by usage, then reach out and schedule 15 min to chat.」她称这是「the fastest way to get user feedback」。

- [Cat Wu: a favorite PM use case for Claude](https://x.com/_catwu/status/2107967210467803152)

### Claude

Anthropic 的 Claude 账号说，它正在「halving the price of cache reads on Claude Sonnet 5.5, to $0.10 per million tokens」，这使 Sonnet 5.5 在大多数长时任务上「around 20% cheaper to run on most long-running work」。该账号还说 Haiku 5.5「available now on all platforms, including Amazon Web Services, Google Cloud, and Microsoft Azure」，并且相较 Haiku 4.5「shows major improvements across almost all of our alignment evaluations relative to Haiku 4.5, with far fewer instances of misaligned behavior」。

- [Claude: halving Sonnet 5.5 cache read prices](https://x.com/claudeai/status/2107894060229034197)
- [Claude: Haiku 5.5 available on all platforms](https://x.com/claudeai/status/2107894057615987198)
- [Claude: Haiku 5.5 alignment improvements](https://x.com/claudeai/status/2107894054142787877)

### Dan Shipper

Every CEO Dan Shipper 说，OpenAI 的 Dots「launched last week and they've taken over」他的公司。他提到它们能保护注意力（他的 Dot 把模型测试结果发到 Slack 并带回回复，让他不必进入应用）、能捕捉像学校邮件和错过的 Slack 消息这类小而重要的事、语音让它们离开笔记本也能用，而且与 ChatGPT 生态的连接是真实优势，即使功能上与 Muse、Instinct 和 Grok bots 大致持平。他指出「permissions are still frustrating」，并预测持久 agent 是未来，但具体角色不会长存：「Mine is named Boo... In a year, I expect to be using a persistent agent. Boo will probably be dead. RIP, Boo.」

- [Dan Shipper: Dots have taken over Every](https://x.com/danshipper/status/2107890633486582208)

### Google Labs

Google Labs 推出 Playground，一个「experimental gaming platform that lets you create your own games with zero coding experience」的实验性游戏平台。它的口号是：「If you can think it, you can play it.」该功能面向美国 18 岁以上用户开放。

- [Google Labs: Playground, create games with zero coding](https://x.com/GoogleLabs/status/2107800195748737042)

### Guillermo Rauch

Vercel CEO Guillermo Rauch 说，工程社区会「rediscover」，任何程序都可以被看成两个无限的循环：加固（消灭边缘情况、收紧输入、处理错误）和优化（做 profiling、benchmark、重写）。由于每个方向都带有时间、注意力和机会上的「real costs」，他认为构建者依然需要知道「when to stop and what tradeoffs to accept」，并警告「agents will happily drill no matter what」。

- [Guillermo Rauch: hardening and optimizing ad infinitum](https://x.com/rauchg/status/2107962327169675566)

### Nikunj Kothari

FPV Ventures 合伙人 Nikunj Kothari 说，把 askalphaxiv「to the dock is the best thing I have done this week」，让他在「waiting on things」时从 0 变成「~30 mins of reading papers on my phone」。他还建议来旧金山参加 tech week 的人：「the best builders are probably at their own offices」，所以应该给他们发私信并去办公室见面，而不是「be a tourist」。

- [Nikunj Kothari: reading papers on the phone with askalphaxiv](https://x.com/nikunj/status/2108060822698357240)
- [Nikunj Kothari: advice for visiting SF during tech week](https://x.com/nikunj/status/2107960134446235985)

### Peter Steinberger

在 OpenClaw 工作并与 OpenAI 有合作的 Peter Steinberger 说，「while everyone's talking about agents」，他一直在探索团队如何用 agent「to work better together」，并分享了他在 OpenAI DevDay 2026 的观点。

- [Peter Steinberger: how teams can use agents to work better together](https://x.com/steipete/status/2107911769767440832)

### Peter Yang

写实用 AI 教程和访谈的 Peter Yang 认为，「anything you ship can now be decompiled and rebuilt by AI」，并预测很快「incredibly hard to make money from software unless you have proprietary data, distribution, or some other edge」。他说传统 SaaS「especially vulnerable」，因为它昂贵，而且充满 agent 并不需要、为人类设计的功能。他还预测 Suno「is probably going to overtake Spotify at some point」，并且 AI 在「solved images, music, and video」之后「is going to solve gaming soon」。

- [Peter Yang: AI can decompile and rebuild what you ship](https://x.com/petergyang/status/2107981547102245101)
- [Peter Yang: Suno will probably overtake Spotify](https://x.com/petergyang/status/2108046949291315385)
- [Peter Yang: AI will solve gaming soon](https://x.com/petergyang/status/2108032922527862851)

### Sam Altman

Sam Altman 说，「ChatGPT can now generate a custom UI for you」，这是一个他「been waiting for... for a long time」的功能，他说自己会「hate to have to go back to the old version of Chat」。

- [Sam Altman: ChatGPT can generate a custom UI](https://x.com/sama/status/2107924408597950702)
- [Sam Altman: would hate to go back](https://x.com/sama/status/2107924677801001381)

### Thariq

在 Anthropic 负责 Claude Code 的 Thariq 说，他见过最常见的失败情形是「when people are working outside their domain of expertise and don't know how to be precise with their prompts and plans」，逼得他们「spend a lot of turns iterating imprecisely」。因为 agent 让这件事更容易，「almost everyone is operating outside their expertise at some point」，但好处是「you can just ask the model to teach you what you don't know」。他还说现在是「probably an incredible time to be a game dev content creator」，因为「for many people making games is a form of having fun and they're willing to pay for it」。

- [Thariq: the most common failure case](https://x.com/trq212/status/2108021247301062894)
- [Thariq: ask the model to teach you what you don't know](https://x.com/trq212/status/2108021248966135891)
- [Thariq: an incredible time to be a game dev content creator](https://x.com/trq212/status/2107957206327173484)

### Thibault Sottiaux

在 OpenAI 负责 Codex 与 ChatGPT 的 Thibault Sottiaux 说，团队「silently re-shipped codex cloud」，而且「it's pretty good now」。他补充说这次更新已经「landed across all accounts」。

- [Thibault Sottiaux: codex cloud was re-shipped](https://x.com/thsottiaux/status/2108084615349170480)
- [Thibault Sottiaux: landed across all accounts](https://x.com/thsottiaux/status/2108040921044639779)

### Zara Zhang

构建者 Zara Zhang 提醒大家「coding is a means to an end」，而且「the end matters more than the means」。

- [Zara Zhang: coding is a means to an end](https://x.com/zarazhangrui/status/2108027410256166930)

## Podcast

### AI & I by Every: Why Every Traded Personal Agents for One Company Agent

核心要点：一个共享的公司 agent 胜过一群个人 agent，因为真正的杠杆来自所有人都在为同一份累积的上下文做贡献，并从中获益。

Every 的平台负责人 Willie Williams 在过去一年里看着公司反复尝试各种 agent 方案，他的结论是大多数人并不想维护自己的 agent。Every 一开始用的是基于 OpenClaw 的个人 agent，一度很受欢迎：有人把它们接进家庭群聊，还给它们起了名字。问题是它们技术门槛高、脆弱、很难保证安全，所以「if you don't invest in it, it fades」。转变来自一个简单的重构：「instead of everyone investing in their own agents and making them better day to day over time... why don't we take all that energy and put it into one agent that the whole company benefits from?」

Williams 很具体地讲了个人 agent 模式会在哪里出问题。命名是一种负担，上下文是碎片化的，新接入的 agent 也缺少公司的历史。相比之下，单个 agent 会学习工作流，并随着每个人使用它而变得更好。他在工作和家庭之间画了一条清晰的线：在职业场景里，他预计会是「one agent per company or org structure」，而在家里个性化会胜出，人们会乐意留着一个只属于自己的 agent。

最反直觉的一点关于管理。Williams 说，工程管理是他做过的所有工作里「feels the most similar」的一种，因为这份工作仍然是「a people job」。他的杠杆变大了而不是消失了：现在最有价值的工作是找到瓶颈，而追踪团队健康、告警和 on-call 排班这类机械工作大多可以交给 agent。他用开源应用 Tend 把会议和笔记整合成一个信息流，让他对公司拥有「a higher field marshal level view」。但一到行动，「we still need to sit down and have a conversation」。

来源：https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

## Blog

经验证的 feed 在这一轮没有新的合格博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
