[English](../../en/daily/ai-digest-2026-06-16-Tue.md) | [中文](./ai-digest-2026-06-16-Tue.md) | [双语](../../bilingual/daily/ai-digest-2026-06-16-Tue.md)

---

# AI Builders Digest

## 导读

- Agent workflow 正在从单次 prompt 走向可管理的 agent team。Swyx 把 Anthropic Ultracode 描述成 "subroutines but intelligent"，Thibault Sottiaux 把 Codex goal 视为 agent 自己的工具，Garry Tan 则认为下一代 builder 会擅长长周期、多阶段、多团队的 agent task。
- 企业 AI 优势正在被定义为 learning loop，而不是选哪个模型。Swyx 和 Aaron Levie 都转述了 Satya Nadella 的观点：企业需要一种架构，让 human capital、token capital、institutional knowledge 和 unique data 一起复利增长。
- Open source 和 open weights 正在成为韧性叙事。Aaron Levie 与 Garry Tan 都认为，当模型访问可能变化时，企业需要 escape hatch；最近模型被撤回的先例让这个风险不再只是理论问题。
- Builder craft 正在表现为可复用流程。Zara Zhang 认为，好 skill 不是先写出来的，而是先把事情做完、修 20 次，再把这个过程封装给 AI。
- Jensen Huang 的 AI factory 叙事把 compute 变成工业基础设施。在 Training Data 中，他把 NVIDIA 的角色描述为把电子转化为数字、token 和 intelligence，为一个可能由数百亿 agent 使用的互联网供能。

## X / Twitter

Swyx 说，Anthropic Ultracode 最适合那些已经为并行 fanout 做好准备的 repo。他的说法是，最好的 subagent 像 "subroutines but intelligent"：它们接住那些真实工作中反复出现、需要判断力的小绕路，而这些绕路正是静态 workflow 图难以表达的部分。
https://x.com/swyx/status/2066415484149633329

Swyx 还转述了 Satya Nadella 关于 enterprise learning loop 的观点：真正持久的机会不是选择最好的模型，而是在模型之上构建学习循环。关键是把 institutional knowledge、human capital 和 token capital 放进企业自己的架构里复利增长。
https://x.com/swyx/status/2066235625695850526

OpenAI 的 Thibault Sottiaux 把 Codex 的 goal-setting 功能描述为 meta prompting 的泛化。这里的产品信号是，OpenAI 正在把 agent-facing control 做成一等工具：Codex 可以查看并设置自己的 goal，把用户意图变成 agent 能持续维护的任务。
https://x.com/thsottiaux/status/2066270561081454989

Peter Yang 今天的 feed 大多偏轻，但他分享了 Kieran、Kun 和 Matt 的访谈链接，并询问接下来该采访谁。这里的 builder signal 是，他仍在把 practical AI interview 和 tutorial 打包给想成为 AI builder 的人。
https://x.com/petergyang/status/2066309743619244174

Linear 产品负责人 Nan Yu 开玩笑说，现在每个人都在和机器人 pair program。玩笑背后是一个清晰的产品现实：AI coding 已经足够日常，以至于 solo work 和 pair programming 的边界正在变模糊。
https://x.com/thenanyu/status/2066190061419282602

Replit CEO Amjad Masad 说，Satya Nadella 的 enterprise AI 叙事是一个很鼓舞人的 positive-sum vision。放在今天更大的讨论里看，builder 正在把 enterprise AI 理解为 human learning、data、agent 和 organizational memory 的循环，而不是一次性的 productivity layer。
https://x.com/amasad/status/2066195933969412098

Vercel CEO Guillermo Rauch 提到，一个社区驱动的 OpenAI ecosystem 网站已经超过 700,000 个 skills，并强调这是 organic、community-driven 的增长。重点不只是数量，而是方向：AI ecosystem 正在变成可复用 skill 的分发面。
https://x.com/rauchg/status/2066299732277031042

Aaron Levie 认为，拥有 unique IP、institutional knowledge 和 data 的公司，需要一种架构来捕获 AI 带来的收益。他把这直接连接到 learning loop：未来的公司会在人与 AI 之间复利学习，而不是把学习外包给模型供应商。
https://x.com/levie/status/2066237607244427761

Levie 还认为，最近某个模型被撤回的先例，对 open weights 是巨大利好。他的战略判断是：如果一个模型可能突然对某个国家的用户或企业不可用，那么每个严肃公司和国家都有更强理由通过 open model 或 sovereign AI 保留控制权。
https://x.com/levie/status/2066167615618466060

YC president Garry Tan 用更短的话表达了同一个韧性判断：open source 是企业长期掌握自身命运的 escape hatch。他还预测，下一代改变世界的人，会非常擅长高频运行长周期、多阶段、多团队的 agent task。
https://x.com/garrytan/status/2066307697574862905
https://x.com/garrytan/status/2066269412391637050

Zara Zhang 把 skill creation 讲成了一个流程问题：不是先写一个 skill 就能做出好 skill，而是先做这件事，修很多次，再让 AI 把刚刚验证过的过程封装起来。
https://x.com/zarazhangrui/status/2066388749244854771
https://x.com/zarazhangrui/status/2066394505037926426

OpenClaw 和 OpenAI builder Peter Steinberger 分享了一个很实用的 travel setup：Mosh 加 tmux 或 zellij 是糟糕机上网络的救命组合。这是一个小的 operational note，但很符合 agent builder 的现实：长时间远程 session 必须能扛住不稳定网络。
https://x.com/steipete/status/2066427449551036469

Every CEO Dan Shipper 发了 "FREE FABLE"，把昨天的 model availability 争议继续留在 builder 讨论里。帖子本身很短，但底层信号仍然清楚：模型访问、政策冲击和产品连续性，已经成为 AI 工具日常选择的一部分。
https://x.com/danshipper/status/2066217865943093514

## Podcast

### Training Data: LIVE: Jensen Huang on Building the Dynamo of the Intelligence Age

核心 takeaway：Jensen Huang 的核心框架是，AI factory 是下一代工业机器。他从一个简单转变讲起：旧计算是在检索已经存储的文件，而生成式计算是在实时生产新的内容和有用工作。这也是 AI 变得有经济价值的原因；人们不会只为"知道很多"付费，而会为完成工作付费。接着他把视角往上游推：如果 agentic AI 能工作，那么互联网服务的就不只是十亿人，而可能是数百亿个彼此通信、运营公司、控制车辆、运行机器人系统的 agent。

他的类比是能源基础设施。第一台 dynamo 把运动转成电；NVIDIA 的 factory 则把电子转成数字。这些数字可以变成语言、数学、蛋白质、物理、气候模型、机器人指令、自动驾驶行为，或其他形式的 intelligence。在这个叙事里，token 不是聊天输出，而是工业产品。企业应该关注它，是因为 intelligence 可能变成像能源和通信一样的全球 commodity layer。因此真正的投资问题不只是哪个 AI app 会赢，而是谁拥有能大规模生成有用 intelligence 的机器、架构和 operating loop。
https://www.youtube.com/watch?v=2UpQbeAZuqA

## Blog

今天的 feed 中暂无新的 blog 文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
