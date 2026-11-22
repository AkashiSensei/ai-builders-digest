[English](../../en/daily/ai-digest-2026-11-22-Sun.md) | [中文](./ai-digest-2026-11-22-Sun.md) | [双语](../../bilingual/daily/ai-digest-2026-11-22-Sun.md)

---

# AI Builders Digest

## 导读

围绕 Codex 和 ChatGPT 的发布节奏，正在变成持续的反馈循环。OpenAI 的 Thibault Sottiaux 已经在准备下一次大更新，同时询问桌面版发布后还有哪些问题需要处理（[推文](https://x.com/thsottiaux/status/2124322968499282388)）。Peter Yang 则在记录决定 Codex 在移动端是否顺手的界面细节：新版 ChatGPT app 很清爽，长按最右侧标签可以把 Codex 固定到底部导航，而左侧导航也应该显示本地最近的 Codex 线程（[推文](https://x.com/petergyang/status/2124217176655843483)）（[推文](https://x.com/petergyang/status/2124217179717648537)）。

模型越强，人如何与模型协作反而越有价值。Thariq 反对过早把 builder 移出流程，他认为，与模型协作并推动能力边界本身就是一项很深的技术能力（[推文](https://x.com/trq212/status/2124239688013914132)）（[推文](https://x.com/trq212/status/2124239686482923553)）（[推文](https://x.com/trq212/status/2124239684536840682)）。

agent 协作正在出现在意想不到的地方。Amjad Masad 提到，一名高中生在把 GTA6 重新编译到 PC 时，用 GitHub issues 把任务分给多个 agent swarm；Garry Tan 则预测，只要 token 足够，一两个月内就可能出现一个由 vibe coding 做出、移除了被诟病设计的爱好者 PC 移植版（[推文](https://x.com/amasad/status/2124345037408686228)）（[推文](https://x.com/garrytan/status/2124154280450134231)）。这两件事都指向同一个变化：agent 让大胆的副项目成本更低，也更容易协调。

AI 更深的潜力不止是更快执行，而是改变人与上下文的关系。Aaron Levie 认为，agent 将能连接不相关的研究和企业数据，把人类上下文限制与生产力和发现能力解耦（[推文](https://x.com/levie/status/2124252844710887549)）。Matt Turck 则提供了必要的提醒：技术突破带来的兴奋，可能跑在真正理解之前（[推文](https://x.com/mattturck/status/2124239403107459490)）。

衡量能力仍然是建立信任的瓶颈。Dan Shipper 提到，benchmark 必须选择衡量什么、固定什么，所以分数上涨需要解释；观察深度使用 AI 的团队如何工作，也能看到 benchmark 没有覆盖的能力（[推文](https://x.com/danshipper/status/2124292892168475086)）。

药物研发是这项能力最清晰的应用场景之一。Isomorphic Labs 总裁 Max Jaderberg 描述了一个仍以经验试错为主的行业，许多失败要到患者阶段才暴露。他认为，更好的预测模型可以把理解提前，并让不同项目之间产生复利（[节目](https://www.youtube.com/watch?v=IiKf3BgBezE)）。

## X / Twitter

### Thibault Sottiaux

在 OpenAI 参与 Codex 与 ChatGPT 的 Thibault Sottiaux 说，团队正在准备下一次大更新，同时询问用户前一天的 ChatGPT/Codex 桌面版表现如何，还有哪些问题需要处理。他的提问把注意力继续放在桌面版发布后的细节打磨上（[推文](https://x.com/thsottiaux/status/2124322968499282388)）。

### Peter Yang

面向忙碌人群制作实用 AI 教程的 Peter Yang 说，新版 ChatGPT 移动 app 很清爽，但 Codex 线程的位置并不直观。他说明，长按最右侧标签可以把 Codex 固定到底部导航，并认为左侧导航也应该显示本地最近的 Codex 线程，而不是只显示聊天线程（[推文](https://x.com/petergyang/status/2124217176655843483)）（[推文](https://x.com/petergyang/status/2124217179717648537)）。

### Thariq

曾在 Anthropic 的 Claude Code 团队工作的 Thariq 认为，builder 们太急于把自己从流程中移除（[推文](https://x.com/trq212/status/2124239688013914132)）。他说，随着模型越来越强，与模型协作的能力会越来越重要，而且他还没有看到这项能力的回报递减（[推文](https://x.com/trq212/status/2124239686482923553)）。在他看来，与模型一起推动能力边界，本身就是一项很深的技术能力（[推文](https://x.com/trq212/status/2124239684536840682)）。

### Amjad Masad

Replit CEO Amjad Masad 提到，一名高中生正在把 GTA6 重新编译到 PC，但更值得关注的是，这名学生用 GitHub issues 协调多个 agent swarm 的任务。他问，这是否指向一种新的开源模式（[推文](https://x.com/amasad/status/2124345037408686228)）。另外，他宣布由 Replit Missions 打造的 Amuse 已经开源（[推文](https://x.com/amasad/status/2124277564596519355)）。

### Garry Tan

Y Combinator 总裁兼 CEO Garry Tan 把 GTA6 的话题推向另一个方向，问多久会出现一个由 vibe coding 做出、移除了被诟病设计的爱好者 PC 移植版。他的估计是，只要 token 足够，一两个月就够（[推文](https://x.com/garrytan/status/2124154280450134231)）。

### Aaron Levie

Box CEO Aaron Levie 认为，近期关于 Riemann Hypothesis 突破的讨论，意义远不止数学，因为它展示了 AI 正在改变解决问题的方式。他预计，agent 将能连接不相关的前人工作、研究和决策，也能扫描企业数据来寻找答案，第一次把人类上下文限制与推动生产力和发现的能力解耦。Levie 预计，即使方案不再那么优雅，我们也会得到多得多的问题解法：“过去的方案可能更优雅，但我们一定会拥有多得多的问题解法。”（[推文](https://x.com/levie/status/2124252844710887549)）。

### Matt Turck

FirstMark Capital 的投资人 Matt Turck 给 Riemann Hypothesis 的热潮加了一句冷幽默，形容这是“在完全不懂 Riemann Hypothesis 的情况下，兴奋地发推说 AI 解决了它”的艺术。这句话提醒人们，突破叙事和真正理解之间可能存在落差（[推文](https://x.com/mattturck/status/2124239403107459490)）。

### Dan Shipper

Every CEO Dan Shipper 提到一篇文章的观点：benchmark 必须选择衡量什么、固定什么，所以数字上涨不一定代表你以为的意思。他建议再开一扇观察真实能力的窗口，也就是仔细看深度使用 AI 的团队如何把模型能力落到实践中（[推文](https://x.com/danshipper/status/2124292892168475086)）。

## Podcast

### No Priors: Powering AI-Driven Drug Discovery with President of Isomorphic Labs Max Jaderberg

**核心结论：** 药物研发最大的机会，是在患者进入临床试验之前，把对疾病生物学和毒性的理解更多地搬到计算机上。

Max Jaderberg 是 Isomorphic Labs 的总裁兼创始团队成员，这家由 Alphabet 支持的公司致力于把机器学习用于药物设计。他的论证从行业经济性开始：制药在很大程度仍是经验驱动，每个项目昂贵且高度定制，许多失败只有在临床试验中出现毒性或脱靶效应时才暴露。现有数据往往来自多年被动收集，可能带有偏差，限制模型的泛化能力。

Isomorphic 的选择是构建通用的药物设计引擎，围绕需要回答的问题主动生成数据，并让模型跨模态、跨疾病领域工作。Jaderberg 说，公司自研模型，不对外授权，而是用于自有管线和合作项目。内部重点放在肿瘤、免疫和炎症，包括可能影响多种下游疾病的根节点问题。

更关键的是复利。若每个项目都能沉淀可迁移的疾病生物学和分子设计知识，平台就会比一组彼此孤立的实验更快进步。他说：“最大的机会，是在患者进入临床试验之前，就对疾病有更多理解。”

Jaderberg 也清楚边界。生物学仍需真实世界验证，有些物理步骤无法压缩。但他认为，预测模型、体外终点、类器官、器官芯片和自动化实验室能缩短循环。五年后的检验标准不是某一款神药，而是预测疾病生物学、设计更精准且毒性更低分子的能力出现阶跃式提升（[收听节目](https://www.youtube.com/watch?v=IiKf3BgBezE)）。

## Blog

通过验证的 feed 中没有新的合格博客内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
