[English](../../en/daily/ai-digest-2026-09-11-Fri.md) | [中文](./ai-digest-2026-09-11-Fri.md) | [双语](../../bilingual/daily/ai-digest-2026-09-11-Fri.md)

---

# AI Builders Digest

## 导读

**1. 算力正在成为硬约束，并直接改变着产品的可用性。** OpenAI 的 Thibault Sottiaux 表示，为了让现有用户继续获得出色的体验并持续使用 Astra，公司将暂停 200 美元 Pro 套餐的新订阅，称这是「既能保持最广泛可用性、影响又最小的一步」。其他所有套餐和 API 继续可用，现有账户不受影响，团队正在尽快补充算力。Peter Steinberger 的判断是 Astra 的需求增长太快。播客里，Recursive 的 Richard Socher 把算力称为通往递归自我改进路上最大的约束，节目中提到公司融资 6.5 亿美元，其中 4.1 亿美元投入了与 Amazon 的单一算力交易。

**2. 递归自我改进被包装成科研引擎，而不只是更大的模型。** Socher 的 Recursive 目标是自动化 AI 研究本身。他在《The Eureka Machine》里给出的蓝图有四大支柱：通过 LLM 吸收人类知识、科学测量、仿真，以及借助机器人完成的真实世界实验，最上层再叠加 agent swarm。他的核心判断是：任何可以仿真的东西，AI 最终都会解决。他还认为，当目标是探索全新的蛋白质、分子和想法时，幻觉可以是特性而不是缺陷。

**3. AI 风险已经从思想实验变成企业的运营问题。** Boris Cherny 把最新的 Threat Intelligence 报告称为「极其可怕又极其重要」，认为随着模型变得更聪明，如果没有正确的防护与监控，它们也会变得更危险，而且许多能力都是双用途的。Aaron Levie 说，在他接触的技术负责人中，网络安全是头号担忧，这与 OpenAI Hugging Face 事件有关，不过企业里的讨论更务实，而不是存在主义式的。Amjad Masad 则对最极端的说法提出了反对。

**4. Coding agent 在抬高代码质量标准，也在重写部署栈。** Cherny 认为，由 Claude 写的生产代码应该比人类写的代码有更高标准，Anthropic 靠 lint 规则、测试、Claude 驱动的端到端测试、每日 Claude fuzzer、自动代码审查与安全审查，以及自动重构来兜底。Steinberger 的直觉是：重复逻辑不再痛苦，抽象依然痛苦。Vercel 的 Guillermo Rauch 说平台每天大约发生 1000 万次部署，并把全球元数据存储的 p99 性能提升了 91%，而且这一切是在 agentic 部署快速增长的压力下完成的。

**5. 企业采用 AI 是流程与架构问题，而不是模型问题。** Levie 的一线笔记列出多模型并行、agent 身份与安全、激进更换架构、评估能力尚早、遗留系统等反复出现的障碍，并认为流程再造与嵌入式 FDE 带来的 ROI 最大。产品层也在继续前进：Gemini 登陆 Windows，Google 的 Dreambeans 向所有美国用户开放，Claude 的 Fable 5.1 Build Days 也正式开始。

## X / Twitter

### Thibault Sottiaux（OpenAI，负责 Codex 与 ChatGPT）

Sottiaux 表示，为了确保现有用户继续拥有出色的体验并持续使用 Astra，OpenAI 将暂停 200 美元 Pro 套餐的新订阅，并称这是「既能保持最广泛可用性、影响又最小的一步」。其他所有套餐和 API 继续可用，现有账户不受影响，公司正在尽快增加算力。他还分享了一个按需扩展 agent 的新 API，称它基本就是把 ChatGPT Work 背后的基础设施打包出来，让开发者不到一分钟就能上手。

- [Thibault Sottiaux 谈暂停 200 美元 Pro 套餐订阅](https://x.com/thsottiaux/status/2098113585683808624)
- [Thibault Sottiaux 谈按需扩展 agent](https://x.com/thsottiaux/status/2098238138334548260)

### Boris Cherny（Anthropic，Claude Code）

Cherny 把最新的 Threat Intelligence 报告称为「极其可怕又极其重要」，认为随着模型变得更聪明，如果没有正确的防护与监控，它们也会变得更危险。他写道，许多能力都是双用途的：一个很会写代码的模型可以被用来攻击关键基础设施，一个能协助生物学研究的模型也可以被用来设计下一场大流行。在另一条回复读者的帖子里，他给出了自己的代码质量标准：一次性的原型可以当成黑箱，但由 Claude 写的生产代码应该有比人类写的代码更高的标准，Anthropic 用 lint 规则、测试、Claude 驱动的端到端测试、每日 Claude fuzzer、自动代码审查与安全审查，以及自动重构来兜底。当 Claude 写的代码达不到标准时，他的建议是换用最新的前沿模型，例如 Opus 5 或 Fable 5.1，把 effort 提到 high 或 xhigh，并投入精力打磨 CLAUDE.md 和 skills。

- [Boris Cherny 谈 Threat Intelligence 报告](https://x.com/bcherny/status/2098281805770309686)
- [Boris Cherny 谈守住 Claude 写代码的质量标准](https://x.com/bcherny/status/2098217573276131577)
- [Boris Cherny 谈回复读者提问](https://x.com/bcherny/status/2098217571153838124)

### Aaron Levie（Box CEO）

Levie 的「一线笔记」来自他与银行、媒体、信息服务、保险和咨询行业几十位技术负责人的交流。网络安全是他们最关心的话题，因为来自 AI 的漏洞正在变多，OpenAI Hugging Face 事件也让人们更在意其影响，不过讨论是务实而非存在主义式的。大多数公司同时部署多个前沿模型，很难标准化，预算仍然集中在少数几家供应商，开放权重在大规模企业环境里仍处于早期。Agent 的安全与身份管理越来越受关注，最大的 ROI 来自改变工作流本身，而不是把 agent 硬塞进现有流程，嵌入式 FDE 是他听到的最好的做法。他还提到企业会不断换掉旧架构、大多数公司的评估能力仍处于很早期、遗留系统和碎片化数据仍是障碍。另外，他宣布与 OpenAI 加深合作，让 Box 里的企业内容可以安全地在 ChatGPT 中使用，并认为软件会继续走向 headless。

- [Aaron Levie 谈企业里的 agent](https://x.com/levie/status/2098218284139311615)
- [Aaron Levie 谈 Box 与 OpenAI 的合作](https://x.com/levie/status/2098135659714085281)

### Guillermo Rauch（Vercel CEO）

Rauch 说 Vercel 每天大约发生 1000 万次部署，累计已达 23.5 亿次，是全球多租户程度最高的系统之一。它 CDN 底层那个能在几百毫秒内完成全球同步的元数据存储，负责让回滚、配置变更和新增路由及时生效，最近 p99 性能提升了 91%，这也加快了 build 到 deploy 的流水线，而且这一切是在 agentic 部署快速增长带来的巨大压力下完成的。他还把平台的方向概括为「每个 region 里，每个 agent 都有一台计算机」。

- [Guillermo Rauch 谈 Vercel 的部署量与元数据性能](https://x.com/rauchg/status/2098091056302833837)
- [Guillermo Rauch 谈每个 agent 都有一台计算机](https://x.com/rauchg/status/2098158541932794222)
- [Guillermo Rauch 谈更快的部署](https://x.com/rauchg/status/2098066258155708851)

### Madhu Guru（Meta 高级 AI 总监）

Guru 关于如何做好 eval 的第十篇：衡量步骤，而不只是结果。两条 agent 轨迹可能得到同一个答案，但其中一条搜索了正确的来源、检索到正确的文档、做了四次干净的工具调用并算出结果，另一条打了 17 次调用、把同一个搜索重复了三遍、从两次错误中恢复后才勉强到达。他的流程是：清楚定义整个 workflow，定义每一步的任务，想清楚每一步该怎么衡量，并定义中位数任务和困难任务，让它们体现在 eval 里。

- [Madhu Guru 谈衡量步骤而不只是结果](https://x.com/realmadhuguru/status/2098064969464217720)

### Josh Woodward（Google 副总裁）

Woodward 是 Google 的副总裁，负责 Google Labs、Gemini app 和 Google AI Studio，他宣布 Gemini 现在已经登陆 Windows。

- [Josh Woodward 谈 Gemini 登陆 Windows](https://x.com/joshwoodward/status/2098131750660772342)

### Google Labs

Google Labs 把 Dreambeans 开放给所有 18 岁以上的美国用户，支持 iOS 和 Android，免费且无需订阅。用户还可以把 Gemini app 连接到 Dreambeans，它会基于聊天里的细节和理解，生成更有洞察、更个性化的每日故事。

- [Google Labs 谈 Dreambeans 与 Gemini app](https://x.com/GoogleLabs/status/2098110018289803558)

### Claude（Anthropic 的 AI 助手）

Claude 宣布 Fable 5.1 Build Days 本周开始，Claude 社区将在 9 月 11 日到 25 日期间在全球多个城市举办 buildathon。邀请语是：带一个问题来，带一个想法来，或者直接来现场看看能做出什么。

- [Claude 谈 Fable 5.1 Build Days](https://x.com/claudeai/status/2098138736642933143)

### Amjad Masad（Replit CEO）

Masad 的反主流观点：AI 确实带来很多风险，他尤其担心网络安全，但「灭绝风险」，也就是字面意义上 100% 的人类都会死亡，他说「完全不在其中」。

- [Amjad Masad 谈 AI 风险](https://x.com/amasad/status/2098171265924116732)

### Peter Steinberger（OpenClaw 与 OpenAI）

Steinberger 关于用 agent 写代码如何改变设计直觉的观察：重复逻辑不再痛苦，抽象依然痛苦。他还催促大家尽快上手 Astra，说需求增长太快。

- [Peter Steinberger 谈重复逻辑与抽象](https://x.com/steipete/status/2098089196800098798)
- [Peter Steinberger 谈 Astra 的需求](https://x.com/steipete/status/2098088917782413740)

### Thariq（Anthropic，Claude Code）

Thariq 分享了一个用在 Claude chat 里的 prompt：让 Claude 深入采访你，可以用自由文本，也可以用 AskUserQuestion 工具来做选择题，问那些它还不知道的、与你生活相关的部分，然后把所有内容存入 memory。

- [Thariq 谈用一个 prompt 让 Claude 了解你](https://x.com/trq212/status/2098157600361861579)

### Aditya Agarwal（SPC 普通合伙人）

Agarwal 提出一个问题：如果你有一台机器只能做一件事，那就是找到治愈我们最紧迫疾病的方法，你愿意把 GDP 的多大比例投入给它？他的答案是「非常高」，结论是我们现在就活在这个世界里。

- [Aditya Agarwal 谈一台能治愈疾病的机器](https://x.com/adityaag/status/2098112281267843264)

### Matt Turck（FirstMarkCap 风投人，MAD Podcast 主持人）

Turck 发布了他与 Richard Socher 关于 RSI 与科学进步的对话，章节涵盖科学进步为何放缓、LLM 如何学习生物学与蛋白质、next-token prediction 作为世界模型、仿真与 verifier、通往递归自我改进的路径、幻觉为何能推动发现、从阅读生物学到书写生物学、AI 在药物研发与癌症中的应用、科学数据的瓶颈、Eureka Machine 的四大支柱、自动驾驶机器人实验室、agent swarm 与开放式发现、算力瓶颈，以及 Recursive 会最先做什么。他还提到这段对话也可以在 Spotify、Apple Podcasts 和 YouTube 上收听。

- [Matt Turck 谈与 Richard Socher 的对话](https://x.com/mattturck/status/2098081448330674182)
- [Matt Turck 谈其他收听渠道](https://x.com/mattturck/status/2098081452839637480)

### Nikunj Kothari（FPV Ventures 合伙人）

Kothari 总结的「当前早期风投的三个真相」：每个人都想融 5000 万美元的种子轮，每个人都觉得自己明年能做到 3000 万美元 ARR，每一轮热门的分批种子轮最后都会神奇地落在约 3 亿美元估值。

- [Nikunj Kothari 谈早期风投](https://x.com/nikunj/status/2098078391065018816)

### Peter Yang

Peter Yang 为忙碌的人制作实用的 AI 教程和访谈，他说在他看来，真要干活的话，Sol 比 Astra 更好用。

- [Peter Yang 谈 Sol 与 Astra](https://x.com/petergyang/status/2098215935467544604)

### Zara Zhang（Builder）

Zara Zhang 发问：为什么 computer use 还是慢得让人难受？

- [Zara Zhang 谈 computer use](https://x.com/zarazhangrui/status/2098136119154254287)

## Podcast

### The MAD Podcast with Matt Turck: When AI Improves Itself | Richard Socher (Recursive)

核心结论：任何可以仿真的东西，AI 最终都会解决，而最值得先把这套循环用上去的对象，就是 AI 研究本身。

Richard Socher 是 AI 领域被引用最多的研究者之一，他眼看着一个个领域从「理解基本零件」走向「用零件做工程」，并认为生物学正处于这个转折点。他的论证从一个反直觉的判断开始：尽管研究者数量和投入科学的资金都在增长，科学进步却在放缓。原因是知识已经碎化成一个由无数字领域组成的迷宫，每个子领域都要花好几年才能深入，于是我们有很多零件，却缺少能把它们重新编织起来的人。

他的公司 Recursive 融资 6.5 亿美元来解决这个问题，路径是先自动化 AI 研究本身，再把由此获得的智能投向物理、化学，尤其是生物学。他在《The Eureka Machine》里给出的蓝图有四大支柱：通过大语言模型吸收人类知识、我们已经能够采集的科学测量、仿真，以及借助机器人完成的真实世界实验，最上层再叠加 agent swarm。算力是最大的约束，公司把融资中的 4.1 亿美元投入到与 Amazon 的单一算力交易。

有两个想法与主流判断相反。第一，幻觉可以是特性：要探索真正全新的蛋白质或分子，就需要落在训练分布之外的预测。第二，对就业的影响取决于需求的价格弹性。插画的价格崩塌了，需求却没有爆炸式增长，所以插画师受损；编程则不同，更便宜的代码到目前为止意味着更多代码，也意味着对程序员更多需求。他并不相信所谓的硬起飞：生物学仍然受制于临床试验的速度，真正的瓶颈是数据，这也是为什么虚拟细胞和机器人实验室比又一个 benchmark 更重要。用他的话说：「任何可以仿真的东西，AI 最终都会解决。」

- [The MAD Podcast with Matt Turck: When AI Improves Itself | Richard Socher (Recursive)](https://www.youtube.com/@DataDrivenNYC/videos)

## Blog

经过验证的博客 feed 中没有新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
