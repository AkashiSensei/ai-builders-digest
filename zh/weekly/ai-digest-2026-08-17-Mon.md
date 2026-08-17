[English](../../en/weekly/ai-digest-2026-08-17-Mon.md) | [中文](./ai-digest-2026-08-17-Mon.md) | [双语](../../bilingual/weekly/ai-digest-2026-08-17-Mon.md)

---

# AI Builders Digest

## 导读

AI 定价正在从 token 转向 outcome。OpenAI 的 Thibault Sottiaux 指出，token 不是标准单位：在他覆盖英文、技术、多语言和数值文本的对比中，GPT-5.6 Sol 用了 766 个 token，而 Claude Opus 5 估计要用 1,170 个，少了约 34.5%，所以更低的每 token 价格并不等于更低的账单。他还公开问那些仍在用 Opus 的公司，什么能说服他们切换。实际建议是：在自己的 use case 上实测，按每次成功 outcome 的价格来比较。

下一个爆款 AI 产品很可能是社交化的。Benchmark 合伙人、早期 Pinterest 的 Sarah Tavel 认为，ChatGPT 是 Google 式的单机文本框，下一个范式是带网络效应、status 激励和信任机制的 multiplayer UGC 社区。同样的信号也出现在 Linear 产品负责人 Nan Yu "让一队 agent 把录好的内容变成可运行软件"的愿景，以及 Peter Yang 预告的 Riley Brown 用 Codex 运营整个内容生意。

效率正在成为规模论的对手盘。Replit CEO Amjad Masad 认为，scaling law 是经验规律而不是物理定律，算力饥渴的现在不代表 AGI 永远需要集中式数据中心；他援引 compute 价格性能比 125 年的超指数增长和大脑本身的效率，预测真正的 AGI 很可能非常高效。他的挑衅性观点是：现在的 scaling law 可能是个 bug 而不是 feature，恰好说明我们目前发现的 ML 算法有多低效。

模型周围的 craft 层正在快速成熟。Vercel CEO Guillermo Rauch 把 React 的很大一部分成功归给 shadcn，说它是一种代码注定要被吸收进 context window 再重新混合的 pseudo-library；Anthropic 的 Thariq 用 Claude 做了一个 artifact 解释无质量损失的 watermarking；Meta 的 Madhu Guru 说 AI 让 B2B 软件没有理由再拥有糟糕的 UX；Swyx 则观察到，行业的大部分精力还是在做事，而不是经营叙事。

长期主义者在押注进步和真正的护城河。YC 的 Garry Tan 用创纪录的粮食产量证明市场和科技会跨千年复利；FPV Ventures 的 Nikunj Kothari 认为，碎片化市场里官僚流程带来的短期痛苦会成为长期护城河，而表演式的 996 痛苦不是；Aditya Agarwal 用印度建国 80 周年纪念艰难的建国工程；Peter Yang 则背书了"用 AI 治愈疾病能带来其它一切加起来 10 倍收益"的判断。

## X / Twitter

Swyx 反驳了"科技精英圈里全是秘密群聊"的印象。他说，以他的经验，真正顶尖的人其实很少互相认识，所谓的小圈子只是短命的例外，外界看到的大新闻，圈内人看到的也差不多。他的结论令人安心：这个行业的大部分精力还是在做事，而不是经营叙事或八卦。

https://x.com/swyx/status/2088755688361378082

OpenAI 的 Thibault Sottiaux 指出，用每百万 token 的价格比较不同模型，就像用披萨切片比较价格一样失真，因为同一段文字在不同 tokenizer 下的成本可能差很多，单价更便宜并不等于账单更便宜。在他覆盖英文、技术、多语言和数值文本的对比中，GPT-5.6 Sol 用了 766 个 token，而 Claude Opus 5 估计要用 1,170 个，少了约 34.5%。他的结论是：真正该看的是每次成功 outcome 的价格，并且要在自己的 use case 上实测；他还公开问那些仍在用 Opus 的公司，什么能说服他们切换到 Sol。

https://x.com/thsottiaux/status/2088866513008873560

https://x.com/thsottiaux/status/2088850995430477882

Peter Yang 预告了一期新节目：Riley Brown 如何用 Codex 运营整个内容生意。他特别提到一个工作流：用 Codex 找出某个 niche 里表现最好的 100 张缩略图放进 Paper canvas，再把 Brown 自己的照片和这些缩略图混合出满意的成品。他还表示 100% 同意 Dario 的观点：用 AI 治愈疾病，并加快 AI 医疗突破的监管审批，可能给人类带来比其它一切加起来还大 10 倍的收益。

https://x.com/petergyang/status/2088626815166464507

https://x.com/petergyang/status/2088772605323214999

Linear 产品负责人 Nan Yu 在转发中分享了一个愿景：整天坐在公园里和朋友录内容，让一队 agent 把那些内容变成可执行的行动和可运行的软件。

https://x.com/thenanyu/status/2088810666958196988

Meta 的 AI 高级总监 Madhu Guru 认为，B2B 软件再也没有理由拥有糟糕的 UX。他说，有了 AI，每个软件产品都可以也应该做到和最好的消费级软件一样易用。

https://x.com/realmadhuguru/status/2088710566689018103

Anthropic Claude Code 团队的 Thariq 用 Claude 做了一个交互式 artifact，帮助理解"无质量损失的 watermarking"为什么能成立，并把它分享出来，希望对人有用。这是一个用 AI 拆解硬核技术概念的手把手示例。

https://x.com/trq212/status/2088721023223132213

Replit CEO Amjad Masad 反驳了"AI 因为算力需求高所以必然导致权力集中"的说法。他援引 compute 价格性能比 125 年的超指数增长，指出 scaling law 只是经验关系而不是物理定律，并预测真正的 AGI 很可能非常高效。他的挑衅性观点是：现在的 scaling law 可能是个 bug 而不是 feature，恰好说明我们目前发现的 ML 算法有多低效。

https://x.com/amasad/status/2088867492907327573

Vercel CEO Guillermo Rauch 认为，人们低估了 React 的成功有多少要归功于 shadcn。他说 React 只是规格，是砖块的几何形状，而 shadcn 才是人们真正想要的：可复用、高质量、可调校的组件。他把它称为一种 pseudo-library，代码的意义就是被吸收进 context window 再重新混合。

https://x.com/rauchg/status/2088757738037989755

YC 总裁兼 CEO Garry Tan 发了一条 "whitepill" 式的时间线净化：创纪录的粮食产量逐年向上向右增长，这就是 progress 和 abundance 的样子，也是市场和科技合作数千年的产物。他还问了一个很实际的运营问题：有没有人的 Codex Desktop 在聊天时报错。

https://x.com/garrytan/status/2088661047913914847

https://x.com/garrytan/status/2088642982614651196

FPV Ventures 合伙人 Nikunj Kothari 讲了一个故事：一位 stealth 投资组合创始人被纯粹的官僚流程卡在最后一码线，关键合同和合作迟迟签不下来。短期很痛苦，但他认为长期会变成强大的护城河。他的金句是：无谓的、表演式的 996 痛苦不是护城河，但需要大量痛苦才能建成的嵌入式软件和关系是。

https://x.com/nikunj/status/2088716743615352963

Every CEO Dan Shipper 发了一条一句话的转发："Dario should tweet more"。

https://x.com/danshipper/status/2088780884048552202

SPC 合伙人、Bevel Health 联合创始人、前 Dropbox CTO Aditya Agarwal 庆祝印度建国 80 周年，并把它和美国建国 250 年对照，指出美国在相近年纪时正陷于内战。他的观点是：建设国家非常难，印度人应该为自己建成的国家感到骄傲；像美国一样，印度想要更多，也终会到达。

https://x.com/adityaag/status/2088734739893293175

## Podcast

AI & I by Every: Why the Next Hit AI Product Will Be Social Why the Next Hit AI Product Will Be Social (Best of the Pod)

核心 takeaway：下一个爆款 AI 产品不会是更聪明的文本框。Benchmark 合伙人 Sarah Tavel 认为，AI 正在从深度技术、单机体验的爆款，走向一个 multiplayer 和社交化的范式，网络效应、status 和 trust 将决定谁赢。

Tavel 把消费科技史读成一条滑杆：从"深度技术"开始，随着基础设施成熟，一路滑向"产品天才"。Google 大概 95% 是技术；Facebook 比 Friendster 和 Myspace 更懂技术，只是晚了一点；而 Pinterest、Snap、Instagram 的 CEO 都不是技术出身，他们是产品天才。她说 ChatGPT 基本上就是又一个 Google，只是一个文本框。缺的是社交这一层：她认为 custom GPTs 和 Gemini 的 gems "clearly made by a team that is unbelievably capable but isn't social"（显然出自一支能力惊人的团队，但它不 social）。

社交化 AI 产品需要的是 multiplayer 那一层。她预测会有人做出一个 UGC 式社区，让真正擅长 prompt 和定制 AI 的人帮其他人把这件事变得容易得多，并用 Eugene Wei 所说的 status seeking 激励来驱动质量。有两件事必须解决：发现，也就是能找到并关注你信任的人；以及信任本身，因为现在的 custom GPT 把 prompt 藏起来，表面之下没有任何可见性。关键的是，这个社交产品必须成为你每天真的会用、并且替代 ChatGPT 的地方，而不是一个附加功能。

她还提出 personal 和 worky 的分野：ChatGPT 和 Claude 占据 worky 这一桶，而 personal 这一桶还是空的，那里放着你的数据、健康和各种关系，按照这个讨论的说法，你会成为你花最多时间相处的五个 AI 的平均值。她猜测 DeepSeek 可能是一个转折点，让非深度技术背景的 founder 也有机会做出这些体验；她也警告，另一种结果是现有平台的引力、记忆和习惯太强，或者一个社交化 AI 最终蚕食掉 ChatGPT。

在 AI 之外，她是稳定币的坚定信徒，并且是 Chainalysis 的董事。她认为美元背书的稳定币能移除让阿根廷这类高通胀国家无法参与全球经济的摩擦。她的 founder 判断也一以贯之：她偏爱那些用网络效应思考的人，对他们来说做公司是一种"affliction"（执念）而不是一份很酷的新工作，而且他们首先是学习机器。

https://www.youtube.com/watch?v=dlI-5W7d7uU

## Blog

本周通过验证的 feed 中没有 blog posts。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
