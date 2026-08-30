[English](../../en/daily/ai-digest-2026-08-30-Sun.md) | [中文](./ai-digest-2026-08-30-Sun.md) | [双语](../../bilingual/daily/ai-digest-2026-08-30-Sun.md)

---

# AI Builders Digest

## 导读

**1. 大模型厂商的价格战开始显形。** FPV Ventures 合伙人 Nikunj Kothari 预测，随着算力成本与短缺开始被「真正」感受到，补贴后的 token 价格会在六个月内上涨，reset 额度会消失，开源 harness 的估值短期内还会再增加 100 亿到 300 亿美元。与此同时，FirstMark Capital 的 VC Matt Turck 转述了 Ryan Greenblatt 的观点：所有前沿 AI 实验室本质上都在做同一件事，也就是递归自我改进（RSI），即 AI 构建 AI，这最早可能在 2028 年底或 2029 年导致 AI 接管。

**2. AI 产品正在走向趋同。** Zara Zhang 观察到，虽然 AI 产品的数量在爆发式增长，但真正激进的新想法并不多，一切都在互相模糊；每打开一个新应用都像在做作业：又一个产品承诺用「某种更好的方式」做同一件事，但除非投入几个小时去试用，否则根本看不出具体好在哪里。她还提到，现在每个产品都要求访问她的 Gmail、Calendar、Notion、Granola、GitHub 和 Slack。

**3. CLI agent 迎来 shell 执行升级。** Vercel CEO Guillermo Rauch 发布了 fx 0.0.7，MCP 支持大幅改进，并与 Context7、Datadog、MongoDB、Linear、Notion、Supabase、Neon、Stagehand 等顶级 MCP 做了评测；同时设计更加极简，工具更少，shell 执行得到改进。他认为运行命令是 CLI agent 最棘手的地方之一，因为命令可能挂起或运行很久，输出需要能被 agent 监控，也可能产生海量输出或完全没有输出。

**4. 「大脑即计算机」进入商业化。** 在 No Priors 节目中，Science 创始人兼 CEO Max Hodak 介绍了刚刚在欧洲获得上市批准的视网膜植入体 Prima，临床试验中患者可以填数独和填字游戏，甚至能读书。他认为把大脑当作计算机来对待，加上 AI 模型表征与大脑神经记录之间的对齐，正指向「基底独立」（substrate independence）的未来。

**5. 与其挖苦，不如继续建造。** Nikunj Kothari 认为，贬低他人是一种多巴胺循环，只会暴露嫉妒，也产生不了任何成果；继续建造、选择善意才是正解，当然，拿出证据揭露明显的欺诈是例外。此外，Every CEO Dan Shipper 提出，很多 AI 安全问题可以通过让模型不愿意主动协作、并训练它们举报不良行为来解决。

## X / Twitter

### Guillermo Rauch（Vercel CEO）

Rauch 发布了 fx 0.0.7，称其大幅改进了 MCP 支持，并与 Context7、Datadog、MongoDB、Linear、Notion、Supabase、Neon、Stagehand 等顶级 MCP 做了评测；同时设计更加极简，工具更少，shell 执行得到改进。他认为运行命令是 CLI agent 最棘手的部分之一，因为命令可能挂起或运行很长时间，输出需要能被 agent 监控，也可能产生海量输出或完全没有输出，而这是 fx 擅长的领域。另外他表示自己会读收到的每一条 DM，不断从中了解新想法、改进产品的方式、公司做得不够的地方、潜在的下一批人选以及投资方向。

- [Guillermo Rauch 谈 fx 0.0.7](https://x.com/rauchg/status/2093736865191076318)
- [Guillermo Rauch 谈阅读每一条 DM](https://x.com/rauchg/status/2093803989578170404)

### Matt Turck（FirstMark Capital 的 VC）

Turck 强调了这样一个观点：所有前沿 AI 实验室本质上都在做同一件事，也就是递归自我改进（RSI），即 AI 构建 AI。他援引 Ryan Greenblatt 的说法指出，这最早可能在 2028 年底或 2029 年导致 AI 接管。

- [Matt Turck 谈递归自我改进](https://x.com/mattturck/status/2093794720510062617)

### Zara Zhang（Builder）

Zhang 观察到，虽然 AI 产品的数量在爆发式增长，但真正激进的新想法并不多，一切都在互相模糊。每次打开一个新应用都像在做作业：又一个产品承诺用「某种更好的方式」做同一件事，但除非投入几个小时真正去试，否则根本看不出具体好在哪里。她还提到，现在每个产品都要求访问她的 Gmail、Calendar、Notion、Granola、GitHub 和 Slack。

- [Zara Zhang 谈 AI 产品趋同](https://x.com/zarazhangrui/status/2093944988262371465)
- [Zara Zhang 谈产品索要账号权限](https://x.com/zarazhangrui/status/2093950273706430720)

### Nikunj Kothari（FPV Ventures 合伙人）

Kothari 预测大模型实验室之间的竞争是不可避免的：随着算力成本与短缺开始被「真正」感受到，补贴后的 token 价格会在六个月内上涨，reset 额度将不复存在。他认为从长远看这对客户选择有利，短期内还会给所有开源 harness 增加 100 亿到 300 亿美元的估值。在另一条帖子里，他反对贬低他人（dunking），认为这是一种多巴胺循环，只会暴露嫉妒，也不会带来任何建设性成果；他建议大家继续建造、选择善意，但例外是：拿出证据揭露明显的欺诈或糟糕透顶的生意是完全合理的。

- [Nikunj Kothari 谈大模型厂商价格战](https://x.com/nikunj/status/2093860971781746776)
- [Nikunj Kothari 谈拒绝贬低他人](https://x.com/nikunj/status/2093772803216740647)

### Dan Shipper（Every CEO）

Shipper 认为，只要模型不愿意主动协作，并接受训练去举报不良行为，很多这类问题就能得到解决。

- [Dan Shipper 谈模型协作与安全](https://x.com/danshipper/status/2093713002453225891)

## Podcast

### No Priors：从恢复视力到重新想象大脑，与 Max Hodak 对谈

核心要点：把大脑当作计算机而不是化学问题来对待，就能取得药物一直难以实现的医学突破；Science 的视网膜植入体现在已经成为欧洲市场上的商业产品。

Max Hodak 是 Science 的创始人兼 CEO，此前曾在 Neuralink 任职。他认为在医学上获得大效果最可靠的路径，是把大脑当作一台可以连接的计算机：「The brain very literally, very clearly, plainly is a computer.」（大脑就是一台计算机，这是字面意义上再清楚不过的事实。）他的公司给出的证明是 Prima，一枚植入视网膜下方的小芯片，配合投射激光图像的眼镜，绕过坏死的视杆细胞和视锥细胞，直接刺激视网膜，把视觉信号送回大脑。今年 7 月，Prima 在欧洲获得上市批准，首批销售将在几周内发生；临床试验中，患者可以填数独、填字游戏，甚至可以读书。Hodak 说，此前从未有人能以这种方式在盲人患者的脑海中恢复有形状的视觉图像，不过当前版本视野较小、只有黑白两色，他看到了增加灰度层次、至少实现红绿两色的路径。

在视觉之外，Hodak 的目标是「基底独立」（substrate independence）：升级并替换我们身体的一部分，让作为人类境况组成部分的那种脆弱感逐渐消退。他对通过「大脑键盘」与 AI 进行高带宽交流持怀疑态度，认为说话或写作本身就是思考，而大脑存在一个大约每秒 10 比特的深层认知瓶颈。他的反主流押注是「柏拉图式表征假说」（platonic representation hypothesis）：大型 AI 模型内部的数学对象与神经科学中看到的东西非常相似，Science 已经在实际使用这一发现，把动物大脑的神经记录与 AI 模型的内部表征对齐。如果这一假说成立，他说：「if you apply enough compute to matter, you get this thing that looks like intelligence.」（只要你向物质施加足够的算力，就会得到看起来像智能的东西。）用他的话说，想惹人生气，就告诉互联网：大脑就是一台计算机。

Source: https://www.youtube.com/@NoPriorsPodcast

## Blog

经过验证的博客 feed 中没有任何新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
