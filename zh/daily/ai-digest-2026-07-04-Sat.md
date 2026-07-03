[English](../../en/daily/ai-digest-2026-07-04-Sat.md) | [中文](./ai-digest-2026-07-04-Sat.md) | [双语](../../bilingual/daily/ai-digest-2026-07-04-Sat.md)

---

# AI Builders Digest

## 导读
1. Claude 的产品边界正在从代码扩展到组织级工作。Boris Cherny 说 Claude Code Artifacts 改变了他的工作方式，Cat Wu 描述 Claude Tag 已经在 Anthropic 内部覆盖工程、产品、数据、销售和营销，Claude 官方也把 Fable 5 放进了 Claude Tag。

2. Fable 仍然是今天最值得关注的模型线索。Peter Yang 的用法是用便宜模型准备上下文、用 Fable 做规划、再交给其他模型执行；Thariq 则澄清 Fable 会在 7 月 7 日后暂时退出订阅套餐，但 Anthropic 希望在容量允许后恢复。

3. AI 基础设施正在变成生产环境的管道层，而不只是模型选择。Guillermo Rauch 把 Vercel AI Gateway 称为 token delivery network，并展示了针对退役模型的实时 rewrite rules，以及后端服务之间的 private bindings。

4. 企业 AI 的重点正在转向真正落地。Aaron Levie 认为 agent 不能直接塞进碎片化业务流程里，数据清理、evals、变更管理和 FDE 式实施会成为核心工作。

5. AI 建设正在把能源、芯片和实体基础设施拉进同一张图里。No Priors 的 Valar Atomics 访谈把 AI compute 需求和核能硬件迭代连在一起，包括一个由核反应堆直接供电的 NVIDIA Blackwell 系统。

## X / Twitter
### Swyx
Swyx 今天的 AI Engineer 信号不只是会议热闹，而是社区正在把什么议题正常化。他提醒大家去 AIE Expo 和 Latent Space 与 Etched 的现场播客，又说今年 keynote 里掌声最大的点，是把男性在高增长环境下谈感受和心理健康这件事正常化。对 AI builder 来说，这是一个有用信号：这个圈子已经不只讨论模型和工具，也在讨论组织文化。

https://x.com/swyx/status/2072760421627597198
https://x.com/swyx/status/2072754722059239471

### Claude Code 的 Boris Cherny
Claude Code 的 Boris Cherny 说 Claude Code 里的 Artifacts 改变了他的工作方式，并强调它们正在扩展到 Pro 和 Max。产品信号是，Anthropic 正在把原本偏 power user 的工作流开放给更广泛的付费用户，让代码周边的创作能力不再只属于 Enterprise 场景。

https://x.com/bcherny/status/2072777472970563995

### OpenAI 的 Thibault Sottiaux
OpenAI 的 Thibault Sottiaux 让 builder 把最难的 prompts 存起来，留给 GPT-5.6 Sol Ultra。捕获到的帖子很短，没有产品细节，但实际信号很明确：OpenAI 的 builder 正在鼓励大家用真正困难的任务测试下一代模型，而不是只跑漂亮 demo。

https://x.com/thsottiaux/status/2072607914217320644

### Peter Yang
Peter Yang 分享了一个具体的 Fable 工作流：先用便宜模型准备上下文，再用 Fable 做规划，最后交给另一个模型执行，同时把 Fable 设在较低 effort 并观察它的动作。他还和女儿一起用 Codex 把手绘 dragon 变成多种贴纸姿势，这是 AI 作为家庭创作生产工具的一个小而具体的例子。

https://x.com/petergyang/status/2072842766053499353
https://x.com/petergyang/status/2072756657856422379

### Linear 产品负责人 Nan Yu
Linear 产品负责人 Nan Yu 的信号很短：如果多个实体需要协调工作，缺的就是一个协调工作的系统。这很像 Linear 对 agent orchestration 讨论的回答：在增加更多 agent 之前，先把协调底座做好。

https://x.com/thenanyu/status/2072714076614950961

### Anthropic 的 Cat Wu
Anthropic 的 Cat Wu 把 Claude Tag 定位成内部 operating layer，而不只是编码功能。她说 Anthropic 内部版本已经能落地 65% 的 product PRs，并被工程、产品、数据、销售和营销使用，安全从第一天就被设计进来。Claude Enterprise 组织可获得 $25k credits，Claude Team 组织可获得 $2.5k credits，用于在 9 月 1 日前使用 Claude Tag。

https://x.com/_catwu/status/2072731500928508331
https://x.com/_catwu/status/2072743070316257662

### Anthropic 的 Thariq
Anthropic 的 Thariq 澄清了 Fable 的可用性。Fable 会在 7 月 7 日后从订阅套餐中移除，但 Anthropic 希望在容量允许后尽快恢复为订阅的标准能力。这里的运营教训很熟悉：frontier model 的访问越来越像容量管理问题，而不只是产品开关。

https://x.com/trq212/status/2072814903170408784

### Vercel CEO Guillermo Rauch
Vercel CEO Guillermo Rauch 介绍了 AI Gateway Rules，把它作为模型路由的实时流量控制。他的例子是把 Anthropic Claude Fable 5 的请求 rewrite 到 Claude Opus 5，这很重要，因为模型会退役，容量也会变化，但生产应用仍然可能依赖它们。他还展示了通过 Vercel service bindings 做 private connectivity，用一行配置连接 Node、Python、Dockerfile 等后端部署。

https://x.com/rauchg/status/2072741369848746315
https://x.com/rauchg/status/2072715658157027375

### Box CEO Aaron Levie
Box CEO Aaron Levie 认为，企业 agent 想可靠地产生结果，前面必须有大量实施工作。大多数企业流程都有碎片化数据、legacy systems、未文档化的组织知识和流程约束，所以规模化部署 agent 意味着清理数据、现代化 IT、定义 evals、推动变更管理、设计 human-in-the-loop 环节，并重新思考公司的 IP。这就是为什么他认为 FDE 工作和 deploycos 会成为 applied AI 的核心。

https://x.com/levie/status/2072875685811716182

### YC CEO Garry Tan
YC CEO Garry Tan 今天和 AI 相关的 builder 信号很短："It's time to build." feed 里还捕获了非 AI 政治评论，所以安全的 AI 结论只有一个：YC 仍在强调，这个市场奖励从讨论转向建设的人。

https://x.com/garrytan/status/2072846648854954240

### FirstMark 的 Matt Turck
FirstMark 的 Matt Turck 指向了他和 NVIDIA Bryan Catanzaro 关于 Nemotron 与 NVIDIA AI lab 的访谈。议程包括 open models 与 frontier labs、企业为什么选择 open models、Megatron 的起源、Nemotron Nano/Super/Ultra、hybrid Mamba-Transformer 架构、mixture of experts、百万 token context、multi-token prediction、multi-teacher distillation，以及 open AI 可能比 closed AI 更安全的观点。

https://x.com/mattturck/status/2072723410975629364
https://x.com/mattturck/status/2072723415870411232

### Zara Zhang
Zara Zhang 认为，"AI slop" 的根源不是风格差，而是没有内容。她还说，对 agents 最有帮助的事情之一，是在群里说话而不是 DM，因为这样交互历史可见、可复用。另一条帖子提到，一位刚毕业的大学生会把课件喂给 AI，让 AI 教他，而不是去上课，因为 AI 经常讲得比教授更好。

https://x.com/zarazhangrui/status/2072943922385715262
https://x.com/zarazhangrui/status/2072726336158998760
https://x.com/zarazhangrui/status/2072729444943577601

### FPV Ventures Partner Nikunj Kothari
FPV Ventures partner Nikunj Kothari 把当前时刻称为 "AGI summer"，并反对那些只在 San Francisco 待几天就下判断的游客视角。他的意思是，AI boom 从外面看可能像 996 文化，但这座城市仍然奖励真正花时间在这里、并主动把人和机会连接起来的人。

https://x.com/nikunj/status/2072780155924480074
https://x.com/nikunj/status/2072684481824309411

### Every CEO Dan Shipper
Every CEO Dan Shipper 说，Fable 可以工作几个小时，最后只返回两段话解释它做了什么。他的结论很实际：当模型开始进行更长时间的自主运行，用户需要 AI 系统更好地讲清楚自己工作的过程。

https://x.com/danshipper/status/2072805884376301737

### Claude
Claude 宣布了一场 Boris Cherny 和 Cat Wu 的对话，主题是从 Claude Code 到 Claude Tag 的路径、这个工具如何在 Anthropic 内部扩展到工程之外，以及 Claude Fable 5 现在已进入 Claude Tag。Claude 还宣布 Built with Claude: Life Sciences，这是和 Gladstone Institutes 合作的全球虚拟 hackathon，将在 7 月 7 日至 13 日举行，奖金池为 $100k credits。

https://x.com/claudeai/status/2072725610061803522
https://x.com/claudeai/status/2072681853971001849
https://x.com/claudeai/status/2072681856730792282

## Podcast
### No Priors: How Nuclear Will Unlock Energy Abundance with Valar Atomics Founder Isaiah Taylor
核心 takeaway：Valar Atomics 正在把核能当作硬件创业公司来做：先构建、测试、点火反应堆，用真实运行数据推进，而不是等待一个完美的纸面反应堆。

Valar Atomics 创始人兼 CEO Isaiah Taylor 认为，核能一直没有迎来 Ford 或 Tesla 时刻，是因为行业太依赖 modeling、simulation 和缓慢的商业许可流程。Valar 的判断是，美国现在更擅长 advanced manufacturing，而不是巨型 civil infrastructure，所以反应堆应该更像制造品，而不是大型土建项目。公司在 Department of Energy 的测试路径下启动了一个 100 kilowatt 反应堆，并认为这条路径打破了旧的 chicken-and-egg：监管需要数据，但数据必须来自真正运行的电站。

这和 AI 的关系非常直接。Taylor 说，能源需求本质上由价格决定，便宜能源会创造自己的需求。Valar 把一套 NVIDIA Blackwell 系统直接连接到反应堆上，并用核能托管网站，甚至展示每次加载页面裂变了多少 uranium atoms。更重要的判断是，他认为 compute buyers 低估了未来五年硬件迭代能带来的变化，因为大多数核能创业公司仍然更像纸面和模拟公司。

最锋利的运营经验是 verticalization。Valar 会围绕瓶颈自己构建能力，而不是等供应商，包括 custom concrete 和 reactor protection electronics。Taylor 的一句话概括了整套哲学："Companies are what they do." 对 AI infrastructure 来说，这意味着能源 stack 可能会越来越像 SpaceX 式迭代，而不是传统 utility procurement。

https://www.youtube.com/watch?v=5Xvbq_zvOQ4

## Blog
feed 中没有新的 blog posts。
