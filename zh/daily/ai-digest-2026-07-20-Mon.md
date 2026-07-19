[English](../../en/daily/ai-digest-2026-07-20-Mon.md) | [中文](./ai-digest-2026-07-20-Mon.md) | [双语](../../bilingual/daily/ai-digest-2026-07-20-Mon.md)

---

# AI Builders Digest

## 导读

ChatGPT Work 正在把「委派任务」变成产品界面。Thibault Sottiaux 的例子显示，工作流正在从「问 chatbot」变成直接口述混乱的运营任务，让 agent 整理 DM、生成 spreadsheet、托管网站、管理 email、总结文档，并生成业务材料。

Open model 竞争越来越难被忽视。Guillermo Rauch 表示，内部 cyber eval 显示 Kimi K3 已接近 frontier，Sol 以更高成本领先；Aaron Levie 则认为，试图 gatekeep model 不会奏效，因为中国已经能在 near-frontier 水平竞争。

个人 eval 可能比追逐公开 benchmark 更重要。Zara Zhang 建议每个人都保留一小组来自自己工作和生活的真实任务；Swyx 则把 AEO 视为真实收入渠道，并认为欧洲 AI 工程人才被低估。

企业采用 AI 仍然是人和业务上下文的问题。Zara 的诊断很直接：懂 AI 的人常常不懂业务，懂业务的人常常不懂 AI；而 Thibault 和 Peter Yang 这样的 builders 正在展示，当 agent 接到具体工作和轻量学习场景时，采用才会发生。

AGI 讨论正在被重新拉回物理世界和人的目的。Jürgen Schmidhuber 认为 true AI 不能只存在于 "behind the screen"，因为 robot hardware 仍然落后于人体；Rauch 则认为 "AGI" 这个词已经显得过时，"superintelligence" 必须明确服务于人。

## X / Twitter

Swyx 说，如果知道如何识别和调动人才，欧洲其实拥有一些世界顶级 AI 工程师；他把即将到来的 talks 和 workshops 看成一场 AI 人才的全球竞技场。他还表示，按当前速度，AEO 明年会为他带来 100 万美元收入，把 AI answer-engine visibility 视为真实商业渠道，而不是模糊的营销概念。
https://x.com/swyx/status/2078628617987518855
https://x.com/swyx/status/2078581967768166591

OpenAI 的 Thibault Sottiaux 说，他的工作正在变成向 ChatGPT Work 委派任务。他给出的具体例子是口述一个混乱的运营任务：在几千条 X DM 中找出对 ChatGPT Work beta 感兴趣的人，把姓名、链接、post 文本和评估整理进 spreadsheet；他还说 ChatGPT Work 可以创建并托管网站、管理 email、总结大量文档，以及在 Plus、Pro、Business、Enterprise 计划中创建 docs、sheets 和 slides。
https://x.com/thsottiaux/status/2078702412085498087
https://x.com/thsottiaux/status/2078697741455356367
https://x.com/thsottiaux/status/2078697631019303273

Peter Yang 分享了一个他和 8 岁孩子一起做的 ChatGPT Site，用来练习乘法表，里面用 ChatGPT Images 生成 UI 和角色，还加入了音乐和限时 boss 关卡。真正有用的信号不是数学游戏本身，而是方向：consumer AI building 正在变得足够轻量，父母和孩子可以一起做出有主题的学习软件。
https://x.com/petergyang/status/2078638568784994686
https://x.com/petergyang/status/2078622146247733320
https://x.com/petergyang/status/2078608551745146928

Anthropic 的 Thariq 说，Fable access 背后是 Anthropic 很多人昼夜工作的 "heroic effort"。这条更像容量和发布说明，但它再次说明，高需求 model release 已经不仅是 research milestone，也是一场运营压力测试。
https://x.com/trq212/status/2078514180051906864

Vercel CEO Guillermo Rauch 说，内部 eval 显示 Kimi K3 在 cybersecurity 上已是 top-tier，Sol 以明显更高成本实现了更大跃升，而 Fable 在测试的 cyber run 中全部拒答。他更大的判断是，frontier open-weight cybersecurity capability 已经到来，可用于防御；同时 "AGI" 这个词已经老化，因为 AI 并不是人类式智能，而是在很多经济相关任务上强于人类、但仍无法取代人的关怀与目的。
https://x.com/rauchg/status/2078647648307880209
https://x.com/rauchg/status/2078548458714406959

Box CEO Aaron Levie 认为，AI 的价值不会只流向少数几家公司：frontier labs 仍有巨大优势，但围绕 open models、enterprise applications、infrastructure 和 specialized products 的生态正在形成。他还说，model gatekeeping 不可能规模化奏效，因为中国已经通过 Kimi K3 这类模型进入 near-frontier 竞争；正确回应不是封锁生态，而是安全地强化并加速本土生态。
https://x.com/levie/status/2078567715544121815
https://x.com/levie/status/2078481578779685245

YC President Garry Tan 这次被抓取到的内容主要是关于旧金山政治、市场、康复政策和媒体批评，而不是 AI 产品或技术内容。除这些城市治理和市场观点外，没有值得提炼的 AI builder 更新。
https://x.com/garrytan/status/2078700313461301470
https://x.com/garrytan/status/2078699319209984033
https://x.com/garrytan/status/2078640121369485611

Matt Turck 的实质 AI 观点很简单：人们年复一年预测 model layer 正在 commoditize，但 model layer 到现在仍然没有 commoditized。其余抓取内容是足球评论，所以有用信号是他继续怀疑「模型会变得可互换」这个叙事。
https://x.com/mattturck/status/2078608152086327529
https://x.com/mattturck/status/2078585551729643573
https://x.com/mattturck/status/2078520552680046920

Zara Zhang 说，每个人都应该为 AI models 建立 personal eval set：几项真正和自己工作、生活相关的任务，因为行业 benchmark 未必能反映一个 model 对你是否有用。她还点出企业 AI adoption 的核心断层：懂 AI 的人往往不懂业务，懂业务的人往往不懂 AI。
https://x.com/zarazhangrui/status/2078666187026911488
https://x.com/zarazhangrui/status/2078492577788268549

Nikunj Kothari 这次被抓取到的是关于参观巴黎 Orangerie 和 kids room 的个人记录。抓取文本里没有值得提炼的 AI 产品或行业更新。
https://x.com/nikunj/status/2078453525080629683

Aditya Agarwal 这次被抓取到的是一句简短的资本主义支持表态。抓取文本里没有值得提炼的 AI 产品或行业更新。
https://x.com/adityaag/status/2078501506169340099

## Podcast

Unsupervised Learning 采访了 AI pioneer Jürgen Schmidhuber，标题是 "Ep 90: AI Pioneer Jürgen Schmidhuber on the State of AI Today"。核心 takeaway：Schmidhuber 对 AI 技术乐观，对当下 model company 的经济性谨慎，而且特别强调 true AI 最终必须离开屏幕、处理物理世界。
https://www.youtube.com/watch?v=RKjR8DQ40po

Schmidhuber 说，从宇宙尺度看，造出比自己更聪明的 AI 这个目标，和他 1970 年代第一次提出愿望时一样近；但具体是几年还是几十年并不确定，因为 "true AI is not just the AI behind the screen"。今天的系统可以通过很多语言测试，但 robot hardware 仍然不如人体；他最尖锐的说法是，"you can't have AGI just behind the screen"。

这个物理约束让他的观点比纯软件加速叙事更接地气。Recursive self-improvement 的确存在于一些缩小版形式里，从 self-modifying neural networks 到更早的 Godel-machine 思路，但他并不把它视为当前 model companies 的自动 moat。更逆向的主线是金融判断：他非常看好 AI 作为技术，但预计今天的 capex boom 和 model-company valuations 会经历痛苦修正。

## Blog

今天的 feed 中没有新的 blog posts。
