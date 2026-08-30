[English](../../en/daily/ai-digest-2026-08-30-Sun.md) | [中文](../../zh/daily/ai-digest-2026-08-30-Sun.md) | [Bilingual](./ai-digest-2026-08-30-Sun.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. The model-lab price war starts to bite.** FPV Ventures partner Nikunj Kothari predicts subsidized token prices will go up in under six months as the price of compute and shortages start being "actually" felt, reset limits will disappear, and open harnesses will gain another $1-30B in valuation in the short run. Meanwhile, FirstMark Capital VC Matt Turck highlights the view, attributed to Ryan Greenblatt, that all frontier AI labs are working on the same thing: recursive self-improvement (RSI), meaning AI building AI, which could lead to an AI takeover as early as late 2028 or 2029.

**1. 大模型厂商的价格战开始显形。** FPV Ventures 合伙人 Nikunj Kothari 预测，随着算力成本与短缺开始被「真正」感受到，补贴后的 token 价格会在六个月内上涨，reset 额度会消失，开源 harness 的估值短期内还会再增加 100 亿到 300 亿美元。与此同时，FirstMark Capital 的 VC Matt Turck 转述了 Ryan Greenblatt 的观点：所有前沿 AI 实验室本质上都在做同一件事，也就是递归自我改进（RSI），即 AI 构建 AI，这最早可能在 2028 年底或 2029 年导致 AI 接管。

**2. AI products are converging into sameness.** Zara Zhang observes that while the number of AI products is exploding, there aren't that many radical new ideas and everything blurs into each other; every new app feels like homework, promising to do the same thing "but somehow better" in ways you can't judge without investing hours. She also notes that every product now asks for her Gmail, Calendar, Notion, Granola, GitHub, and Slack.

**2. AI 产品正在走向趋同。** Zara Zhang 观察到，虽然 AI 产品的数量在爆发式增长，但真正激进的新想法并不多，一切都在互相模糊；每打开一个新应用都像在做作业：又一个产品承诺用「某种更好的方式」做同一件事，但除非投入几个小时去试用，否则根本看不出具体好在哪里。她还提到，现在每个产品都要求访问她的 Gmail、Calendar、Notion、Granola、GitHub 和 Slack。

**3. CLI agents get a shell-execution upgrade.** Vercel CEO Guillermo Rauch released fx 0.0.7 with hugely improved MCP support, evaluated against top MCPs including Context7, Datadog, MongoDB, Linear, Notion, Supabase, Neon, and Stagehand, plus a more minimalist toolset and improved shell execution, an area he argues is trickier than it looks because commands can hang, run for a long time, or produce huge amounts of output or none at all.

**3. CLI agent 迎来 shell 执行升级。** Vercel CEO Guillermo Rauch 发布了 fx 0.0.7，MCP 支持大幅改进，并与 Context7、Datadog、MongoDB、Linear、Notion、Supabase、Neon、Stagehand 等顶级 MCP 做了评测；同时设计更加极简，工具更少，shell 执行得到改进。他认为运行命令是 CLI agent 最棘手的地方之一，因为命令可能挂起或运行很久，输出需要能被 agent 监控，也可能产生海量输出或完全没有输出。

**4. The brain-as-computer thesis goes commercial.** On No Priors, Science founder and CEO Max Hodak discusses Prima, the retina implant that just received marketing approval in Europe, after clinical trials where patients filled in sudoku and crossword puzzles and read books. He argues that treating the brain as a computer, plus the alignments between AI model representations and brain recordings, points toward a future of "substrate independence."

**4. 「大脑即计算机」进入商业化。** 在 No Priors 节目中，Science 创始人兼 CEO Max Hodak 介绍了刚刚在欧洲获得上市批准的视网膜植入体 Prima，临床试验中患者可以填数独和填字游戏，甚至能读书。他认为把大脑当作计算机来对待，加上 AI 模型表征与大脑神经记录之间的对齐，正指向「基底独立」（substrate independence）的未来。

**5. Choose building over dunking.** Nikunj Kothari argues that dunking on others is a dopamine loop that screams envy and leads nowhere; keep building and choose kindness, with the caveat that calling out obvious fraud with evidence is fair. Separately, Every CEO Dan Shipper suggests a lot of AI-safety problems get solved if models don't collaborate willingly and/or are trained to report bad behavior.

**5. 与其挖苦，不如继续建造。** Nikunj Kothari 认为，贬低他人是一种多巴胺循环，只会暴露嫉妒，也产生不了任何成果；继续建造、选择善意才是正解，当然，拿出证据揭露明显的欺诈是例外。此外，Every CEO Dan Shipper 提出，很多 AI 安全问题可以通过让模型不愿意主动协作、并训练它们举报不良行为来解决。

## X / Twitter

### Guillermo Rauch: CEO of Vercel

Rauch released fx 0.0.7, describing hugely improved MCP support, evaluated with top MCPs like Context7, Datadog, MongoDB, Linear, Notion, Supabase, Neon, and Stagehand, along with a more minimalist design: fewer tools and improved shell execution. He argues that running commands is one of the trickiest things about CLI agents, since commands can hang or run for very long, their output needs to be monitorable by the agent, and they might produce huge amounts of output or none; this is an area where he says fx really shines. Separately, he shared that he reads every DM people send him, constantly learning about new ideas, ways to improve the product, where the company falls short, who could join next, and where to invest.

Rauch 发布了 fx 0.0.7，称其大幅改进了 MCP 支持，并与 Context7、Datadog、MongoDB、Linear、Notion、Supabase、Neon、Stagehand 等顶级 MCP 做了评测；同时设计更加极简，工具更少，shell 执行得到改进。他认为运行命令是 CLI agent 最棘手的部分之一，因为命令可能挂起或运行很长时间，输出需要能被 agent 监控，也可能产生海量输出或完全没有输出，而这是 fx 擅长的领域。另外他表示自己会读收到的每一条 DM，不断从中了解新想法、改进产品的方式、公司做得不够的地方、潜在的下一批人选以及投资方向。

- [Guillermo Rauch on fx 0.0.7](https://x.com/rauchg/status/2093736865191076318)
- [Guillermo Rauch on reading every DM](https://x.com/rauchg/status/2093803989578170404)

### Matt Turck: VC at FirstMark Capital

Turck highlighted the view that all frontier AI labs are essentially working on the same thing: recursive self-improvement (RSI), meaning AI building AI. Citing Ryan Greenblatt, he noted this could lead to an AI takeover as early as late 2028 or 2029.

Turck 强调了这样一个观点：所有前沿 AI 实验室本质上都在做同一件事，也就是递归自我改进（RSI），即 AI 构建 AI。他援引 Ryan Greenblatt 的说法指出，这最早可能在 2028 年底或 2029 年导致 AI 接管。

- [Matt Turck on recursive self-improvement](https://x.com/mattturck/status/2093794720510062617)

### Zara Zhang: Builder

Zhang observes that even though the number of AI products is exploding, there aren't that many radical new ideas and everything blurs into each other. Every time she opens a new app it feels like homework: yet another product that promises to do the same thing but somehow better, in ways that aren't clear unless you invest hours actually trying it. She also notes that every product asks for her Gmail, Calendar, Notion, Granola, GitHub, and Slack.

Zhang 观察到，虽然 AI 产品的数量在爆发式增长，但真正激进的新想法并不多，一切都在互相模糊。每次打开一个新应用都像在做作业：又一个产品承诺用「某种更好的方式」做同一件事，但除非投入几个小时真正去试，否则根本看不出具体好在哪里。她还提到，现在每个产品都要求访问她的 Gmail、Calendar、Notion、Granola、GitHub 和 Slack。

- [Zara Zhang on AI products looking similar](https://x.com/zarazhangrui/status/2093944988262371465)
- [Zara Zhang on products asking for account access](https://x.com/zarazhangrui/status/2093950273706430720)

### Nikunj Kothari: Partner at FPV Ventures

Kothari predicts that the big model labs fighting was inevitable: watch as subsidized token prices go up in under six months as the price of compute and shortages start being "actually" felt, and say goodbye to reset limits. He calls it great for customer choice in the long run and expects another $1-30B in valuation added to all the open harnesses in the short run. In a separate post, he argues against "dunking" on people, calling it a dopamine loop that screams envy and doesn't lead to anything productive; he advises keeping building, choosing kindness, with the caveat that calling out obvious fraud or woefully bad businesses with evidence is fair.

Kothari 预测大模型实验室之间的竞争是不可避免的：随着算力成本与短缺开始被「真正」感受到，补贴后的 token 价格会在六个月内上涨，reset 额度将不复存在。他认为从长远看这对客户选择有利，短期内还会给所有开源 harness 增加 100 亿到 300 亿美元的估值。在另一条帖子里，他反对贬低他人（dunking），认为这是一种多巴胺循环，只会暴露嫉妒，也不会带来任何建设性成果；他建议大家继续建造、选择善意，但例外是：拿出证据揭露明显的欺诈或糟糕透顶的生意是完全合理的。

- [Nikunj Kothari on the model-lab price war](https://x.com/nikunj/status/2093860971781746776)
- [Nikunj Kothari on resisting dunking](https://x.com/nikunj/status/2093772803216740647)

### Dan Shipper: CEO of Every

Shipper suggests that a lot of this gets solved if models don't collaborate willingly and/or are trained to report bad behavior.

Shipper 认为，只要模型不愿意主动协作，并接受训练去举报不良行为，很多这类问题就能得到解决。

- [Dan Shipper on model collaboration and safety](https://x.com/danshipper/status/2093713002453225891)

## Podcast

### No Priors: From Restoring Sight to Reimagining the Brain, with Max Hodak

The Takeaway: Treat the brain like a computer rather than a chemistry problem, and you can deliver medical breakthroughs that drugs have struggled to produce; Science's retina implant is now a commercial product in Europe.

核心要点：把大脑当作计算机而不是化学问题来对待，就能取得药物一直难以实现的医学突破；Science 的视网膜植入体现在已经成为欧洲市场上的商业产品。

Max Hodak, founder and CEO of Science and formerly of Neuralink, argues that the most reliable way to get large effects in medicine is to interface with the brain as a computer: "The brain very literally, very clearly, plainly is a computer." His company's proof of concept is Prima, a tiny chip implanted under the retina that, paired with glasses projecting a laser image, bypasses dead rods and cones and stimulates the retina directly to send a visual signal back into the brain. In July, Prima received marketing approval in Europe, with first sales expected in the coming weeks, after clinical trials in which patients filled in sudoku and crossword puzzles and read books. Hodak says nobody had previously been able to restore a form vision image in the mind's eye of a blind patient this way, though the current version offers a small field of view and only black and white, with a path toward grayscale depth and at least red and green.

Max Hodak 是 Science 的创始人兼 CEO，此前曾在 Neuralink 任职。他认为在医学上获得大效果最可靠的路径，是把大脑当作一台可以连接的计算机：「The brain very literally, very clearly, plainly is a computer.」（大脑就是一台计算机，这是字面意义上再清楚不过的事实。）他的公司给出的证明是 Prima，一枚植入视网膜下方的小芯片，配合投射激光图像的眼镜，绕过坏死的视杆细胞和视锥细胞，直接刺激视网膜，把视觉信号送回大脑。今年 7 月，Prima 在欧洲获得上市批准，首批销售将在几周内发生；临床试验中，患者可以填数独、填字游戏，甚至可以读书。Hodak 说，此前从未有人能以这种方式在盲人患者的脑海中恢复有形状的视觉图像，不过当前版本视野较小、只有黑白两色，他看到了增加灰度层次、至少实现红绿两色的路径。

Beyond vision, Hodak's mission is "substrate independence": upgrading and replacing parts of ourselves so the sense of jeopardy that defines the human condition fades. He is skeptical of "brain keyboards" for high-bandwidth communication with AI, arguing that talking or writing is thinking, and that the brain has a deeply evolved cognitive bottleneck around 10 bits per second. His contrarian bet is the platonic representation hypothesis, the idea that the mathematical objects inside large AI models look a lot like what you see in neuroscience, which Science uses practically by aligning animal brain neural recordings with AI model internal representations. If true, he says, "if you apply enough compute to matter, you get this thing that looks like intelligence." As he puts it: if you want to make people angry, tell the Internet that the brain is a computer.

在视觉之外，Hodak 的目标是「基底独立」（substrate independence）：升级并替换我们身体的一部分，让作为人类境况组成部分的那种脆弱感逐渐消退。他对通过「大脑键盘」与 AI 进行高带宽交流持怀疑态度，认为说话或写作本身就是思考，而大脑存在一个大约每秒 10 比特的深层认知瓶颈。他的反主流押注是「柏拉图式表征假说」（platonic representation hypothesis）：大型 AI 模型内部的数学对象与神经科学中看到的东西非常相似，Science 已经在实际使用这一发现，把动物大脑的神经记录与 AI 模型的内部表征对齐。如果这一假说成立，他说：「if you apply enough compute to matter, you get this thing that looks like intelligence.」（只要你向物质施加足够的算力，就会得到看起来像智能的东西。）用他的话说，想惹人生气，就告诉互联网：大脑就是一台计算机。

Source: https://www.youtube.com/@NoPriorsPodcast

## Blog

The validated blog feed contained no new qualifying items.

经过验证的博客 feed 中没有任何新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
