[English](../../en/daily/ai-digest-2026-10-14-Wed.md) | [中文](./ai-digest-2026-10-14-Wed.md) | [双语](../../bilingual/daily/ai-digest-2026-10-14-Wed.md)

---

# AI Builders Digest

## 导读

**1. Gemini 4 Argon 发布后，builder 分成两派：一边是热情，一边是硬核 benchmark。** Vercel CEO Guillermo Rauch 的评价很直接：「Never bet against Google, the company that brought us Transformers and has overwhelming data, engineering talent, and compute.」他称 coding agent 是「the killer app of AI」，并指出 Muse Wonder 与 Gemini Argon 接连落地，提醒个人与公司都「should stay model agnostic and gateway-maxxx / fx-maxxx」。Google 的 VP Josh Woodward 用一天时间展示模型能生成什么：从一个 24 个词的 prompt 做出来的定制合成器，到一条量产的家具腿。Every CEO Dan Shipper 则给出相反的检验：Gemini 4 Argon 在他团队的资深工程师 benchmark 上「really struggles」，成绩只有 21%，「far below Sol 6 and even Muse」。（[Guillermo Rauch](https://x.com/rauchg/status/2110044152482365747)、[Josh Woodward](https://x.com/joshwoodward/status/2110179883045560674)、[Josh Woodward](https://x.com/joshwoodward/status/2110089824573272547)、[Dan Shipper](https://x.com/danshipper/status/2110056016872427944)、[Dan Shipper](https://x.com/danshipper/status/2110039417650024592)）

**2. Box 的企业级评测把新 Gemini 称为前沿级跃升。** Box CEO Aaron Levie 说，团队用一周时间在 Box AI Complex Work 评测上测试 Gemini 4 Argon，结果是「a huge upgrade over Gemini 3.1 Pro」，整体提升 14 个百分点，并且「firmly at the frontier」。他把提升归因于更强的数学、逻辑、分析与商业领域知识，以及模型「far harder to complete tasks fully」的执行力，并给出了从能源 +16 到科技 +37 的分行业案例。（[Aaron Levie](https://x.com/levie/status/2110046686198550539)）

**3. Aaron Levie 押注网络安全会成为 agent 的核心战场。** 这位 Box CEO 判断，网络安全将是「one of the biggest spaces for AI agents」，因为 agent 是双向的：它放大了攻击面，但也让 agent 集群能够「review every line of code」、测试各种漏洞组合，并比人更快地响应事件。安全一直是一个「can never hire enough people」的领域，agent 终于让防守方有机会做到真正的全覆盖。（[Aaron Levie](https://x.com/levie/status/2110227571090788526)）

**4. Swyx 把死亡 SaaS 的争论变成了一场实验。** 与其停留在理论，Swyx 的团队拿「a real $43,000/year SaaS we use」开刀，办了一场全球黑客松，用一个周末把它克隆出来，评审同时使用「both AI and REAL HUMAN evals, using any models any harness」。在 72 份提交、大量人工评测与约 1000 亿 token 之后，他公布了结果、依然难以攻克的「nontrivial, midtier SaaS」环节，以及 1 万美元「Kill My SaaS」大赛的获奖者。（[Swyx](https://x.com/swyx/status/2110065576764686421)）

**5. 一点点的产品打磨，对 builder 同样重要。** OpenAI 的 Thibault Sottiaux 上线了一个修复：优化 ChatGPT 与 Codex 桌面端在磁盘上存储状态的方式，「should reduce the amount stored on disk by 60%」，针对的是「power users running out of disk space」。Y Combinator 总裁兼 CEO Garry Tan 则指出另一处解锁：「Giving your harnesses access to a real browser with your real credentials is a real unlock」，并推荐了 AsideAI。（[Thibault Sottiaux](https://x.com/thsottiaux/status/2110151780478927344)、[Garry Tan](https://x.com/garrytan/status/2110053836945756234)）

**6. 瓶颈不只在模型速度，还在落地速度。** Replit CEO Amjad Masad 重新框定了节奏之争：「You can pause frontier research today, and it would take AI another 10 years to diffuse into the economy」，而 Replit 正在「working with solutions partners to accelerate that」。FPV Ventures 的 partner Nikunj Kothari 提供了一个走自己路子的案例：他说每次和 Railway 的 Jake 聊天，自己的「priors get shattered」，话题涵盖「how to scale, how to sell, how to hire, how to build」，并称 Railway 是「an n of 1 company」。（[Amjad Masad](https://x.com/amasad/status/2110128937049452575)、[Nikunj Kothari](https://x.com/nikunj/status/2110137649168281871)）

## X / Twitter

### Aaron Levie

Box CEO Aaron Levie 认为，网络安全将是「one of the biggest spaces for AI agents in the future」。他的论证是双向的：一方面，攻击面「increases 100 fold」，因为 agent 能顺着任何裂缝找到它想要的东西；另一方面，agent 也让防守方可以「review every line of code, test any number of permutations of exploits, and research any incident faster than humans as they happen」。安全一直是一个「can never hire enough people」、也清不完「the backlog of all known risks」的领域，agent 终于带来了大幅提升覆盖率的可能。他预期机会会分布在实验室、数据提供商、网络与防火墙、身份、设备与终端、SDLC，以及企业数据等层面。

另一条帖子里，Levie 说 Box 用一周时间在 Box AI Complex Work 评测上测试了 Gemini 4 Argon。他称这是「a huge upgrade over Gemini 3.1 Pro」，所有测试整体高出 14 个百分点，「firmly at the frontier」。提升来自更强的数学、逻辑、分析与商业领域知识，也来自模型「far harder to complete tasks fully without stopping short」。他给出的案例覆盖金融服务（+18 个百分点）、医疗（+25）、科技（+37）、能源（+16）与消费品（+33）。Gemini 4 Argon 很快也会上线 Box AI Studio。

- [Aaron Levie: cyber is a huge space for AI agents](https://x.com/levie/status/2110227571090788526)
- [Aaron Levie: Gemini 4 Argon on Box's enterprise eval](https://x.com/levie/status/2110046686198550539)

### Guillermo Rauch

Vercel CEO Guillermo Rauch 对 Gemini 4 Argon 的判断是：「Never bet against Google, the company that brought us Transformers and has overwhelming data, engineering talent, and compute.」他认为整个行业「rightfully pivoted back to coding」，称 coding agent 是「the killer app of AI」，当下则是「an elysium for developers and builders」。面对 Muse Wonder 与 Gemini Argon 接连发布，他给出一条战略建议：个人与公司都「should stay model agnostic and gateway-maxxx / fx-maxxx」。

- [Guillermo Rauch: never bet against Google; stay model agnostic](https://x.com/rauchg/status/2110044152482365747)

### Dan Shipper

Every CEO Dan Shipper 给 Gemini 4 Argon 的热度泼了一盆冷水。在他团队的资深工程师 benchmark 任务上，这个模型「really struggles」，只拿到 21%，「far below Sol 6 and even Muse」。他还配了一条「VIBE CHECK: GEMINI 4」的评价，认为 Google 回来了，暗示这款模型的观感和硬核工程指标给出的结论很不一样。

- [Dan Shipper: Gemini 4 Argon at 21% on the senior engineer benchmark](https://x.com/danshipper/status/2110056016872427944)
- [Dan Shipper: VIBE CHECK: GEMINI 4](https://x.com/danshipper/status/2110039417650024592)

### Josh Woodward

Google 的 VP Josh Woodward 负责 Google Labs、Gemini App 与 Google AI Studio 相关工作，他用一天时间展示 Gemini 4 Argon 能生成什么。一个例子是用 24 个词的 prompt 做出的定制合成器，它能「turns galloping horses, rippling water, and your own hands into music」。另一个例子是一条宽 96 毫米的量产家具腿，他说最难的部分是决定「how many stacked spheres to give it」。

- [Josh Woodward: a synth from a 24-word prompt](https://x.com/joshwoodward/status/2110179883045560674)
- [Josh Woodward: a manufactured furniture leg](https://x.com/joshwoodward/status/2110089824573272547)

### Thibault Sottiaux

在 OpenAI 负责 Codex 与 ChatGPT 的 Thibault Sottiaux 上线了一个不大但实用的桌面端修复：优化 ChatGPT 与 Codex 桌面应用在磁盘上存储状态的方式，他说这「should reduce the amount stored on disk by 60%」。他把这项改动定位为对「power users running out of disk space」的回应。

- [Thibault Sottiaux: 60% less disk usage on desktop](https://x.com/thsottiaux/status/2110151780478927344)

### Swyx

Swyx 的关联身份包括 smol.ai、Cognition、AI Engineer 与 Latent Space 播客。他把死亡 SaaS 的讨论做成了一场实验而非辩论：团队拿「a real $43,000/year SaaS we use」开刀，发起全球黑客松，用一个周末把它克隆出来，评审同时使用「both AI and REAL HUMAN evals, using any models any harness」。在 72 份提交、大量人工评测与约 1000 亿 token 之后，他公布了结果、「killing nontrivial, midtier SaaS」中依然困难的部分，以及 1 万美元「Kill My SaaS」大赛的获奖者。

- [Swyx: How to Kill Your SaaS](https://x.com/swyx/status/2110065576764686421)

### Amjad Masad

Replit CEO Amjad Masad 认为节奏之争算错了扩散这笔账：「You can pause frontier research today, and it would take AI another 10 years to diffuse into the economy」。他的观点是，决定时钟的不只是模型进展，还有落地速度，而 Replit 正在「working with solutions partners to accelerate that」。

- [Amjad Masad: a 10-year diffusion lag](https://x.com/amasad/status/2110128937049452575)

### Garry Tan

Y Combinator 总裁兼 CEO Garry Tan 指出了一处他认为 builder 低估的能力解锁：「Giving your harnesses access to a real browser with your real credentials is a real unlock」。他为此推荐了 AsideAI。

- [Garry Tan: real browsers for harnesses](https://x.com/garrytan/status/2110053836945756234)

### Nikunj Kothari

FPV Ventures 的 partner Nikunj Kothari 说，每个月和 Railway 的 Jake 聊天，自己的「priors get shattered」，话题涵盖「how to scale, how to sell, how to hire, how to build」，并称 Railway 是「an n of 1 company」，原因正是创始人按自己的方式经营公司。他把听众引向一集讨论这两人为何特别的播客。

- [Nikunj Kothari: Railway as an n of 1](https://x.com/nikunj/status/2110137649168281871)

## Podcast

### Training Data: David Silver and Lasse Espeholt of Ineffable Intelligence: A Superlearner for the Age of Experience

核心要点：带领 AlphaGo 与 AlphaZero 实现突破的 David Silver，正在为他的新实验室下注一个判断：超智能不会来自更多人类数据，而会来自完全从经验中学习的系统，而且这个赌注的时机终于到了。

David Silver 与 Lasse Espeholt 共同创办了 Ineffable Intelligence，其使命是「build a super learner and make first contact with super intelligence」。Silver 2009 年的博士研究把强化学习用在了围棋上，此后他搭建的系统证明了机器可以实现超越人类的智能；Espeholt 在 DeepMind 做了把强化学习扩展到 GPU 的基础性工作，包括被广泛采用的 IMPALA agent 与 SeedRL。他们离开大实验室是主动的选择，因为不想成为「the 100,001 person」，去挤那条同样的、以 LLM 为中心的路径。

这个赌注的核心是放弃几乎所有人都在依赖的人类数据，这是一种刻意的短期牺牲，逻辑是：越依赖海量的、以万亿 token 计的人类知识，就越难发现真正全新的知识。AlphaGo 就是概念验证：它花了大约两年累积人工先验、并靠人在回路中不断改进，才击败李世石；而只从自我对弈学习的 AlphaZero，在国际象棋上只用几个小时、在围棋上只用几天就全面超越了这一切。

方法是把只被赋予简单目标的 agent 放进极度复杂的模拟世界，团队称之为「crucibles」，让涌现出的复杂性自己发挥作用，就像进化只优化一个简单的适应度信号，却造就了生命的全部复杂。Silver 预期会对自己 agent 最先重新发现什么感到意外，他也希望这些 agent 能找到超越人类语言的推理方式，因为语言会「pulls in all of our biases about how we think agents should think」。

Ineffable 刻意保持小规模，只有 20 人，并称其拿到了 Google Cloud 上最大的 GPU 集群，基于 Nvidia GPU。在安全上，Silver 希望在模拟中建立一门真正的超智能科学，并用这些证据来为现实世界的每一步设闸，同时支持在前沿上保持节奏。他的预测相当惊人：「strong evidence that we're on the right track within a year」，以及大约三年内实现真正的超智能，这一时间从早先的三到五年提前，原因是 coding agent 带来的加速。

Source: https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

## Blog

### Anthropic Engineering: Redesigning source control at Anthropic

Anthropic 说，他们的瓶颈已经不再是写代码，而是那些为人类规模设计的开发者基础设施。2026 年 5 月，公司每天合并约 2500 个代码改动；到 9 月，这个数字涨到每天 30000 多个。git 开始不适应这种负载：仅主分支历史就接近 100 GB，压缩后的工作副本超过 25 GB，CI 每天要执行约 2500 万次 checkout，高峰时 Anthropic 运行着数百个内部 git 镜像来撑住压力。

于是他们自建了版本控制系统 Scion，用五个月把 monorepo 从 git 完整迁移过去，同期还做了代码评审界面 Antique、代码搜索，以及一套源代码管理 IAM 系统。Scion 的设计前提是：它的客户端主要是永远在线的 agent。客户端按需拉取数据，服务端回答历史与 blame 查询并创建 commit，所有源代码管理查询都通过 API 暴露，仓库是分布式的，任何地方都没有完整物化的副本。它的工作单元是 write-ahead log 里的「changeset」，其余一切都是从 changeset 递归计算出来的「derived data」。

回报相当可观。Anthropic 说，Scion 的基础设施占用「200x smaller than our previous git mirroring infrastructure in terms of CPU and memory requirements」。checkout 从几分钟缩短到几秒，快了整整两个数量级，仅 CI 就省下 25% 的 CPU 容量。一个七人团队在五个月里同时构建了 Scion 与 Antique 并完成迁移，期间每天合并的代码量还增长了 10 倍。Anthropic 还提到，Claude Mythos Preview 把一份原型数据摄取管线重写成内存占用少 20 倍、速度快 4 倍的版本，并且他们用「superfan」agent 来盯守各个组件。谈到工程师角色的变化，这篇文章很坦诚：「Very often, we found that the role of the engineers was to tell Claude 'no.'」Scion 并不打算成为通用的 git 替代品；Anthropic 分享这套经验，是希望别人能把其中一部分用到 git 上。

Source: https://www.anthropic.com/engineering/redesigning-source-control

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
