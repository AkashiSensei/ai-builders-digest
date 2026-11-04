[English](../../en/daily/ai-digest-2026-11-04-Wed.md) | [中文](./ai-digest-2026-11-04-Wed.md) | [双语](../../bilingual/daily/ai-digest-2026-11-04-Wed.md)

---

# AI Builders Digest

## 导读

Agentic 编程正在从逐条审批走向委托式信任。Cat Wu 描述了 Claude Code 从人工批准每一次权限请求，转向自动批准大型迁移；Boris Cherny 则表示，Claude 现在可以自动连接 Team 和 Enterprise 用户的企业插件。[Cat Wu](https://x.com/_catwu/status/2117731934340337676) [Boris Cherny](https://x.com/bcherny/status/2117693181651542387)

与此同时，生产力差距正在扩大。Box CEO Aaron Levie 认为，顶级生产力提升已经从两年前的 30% 至 50%，跃升到某些领域可能的 5 至 10 倍；OpenAI 的 Thibault Sottiaux 则提醒，今天的 agent 虽然令人惊叹，却仍然令人沮丧。[Aaron Levie](https://x.com/levie/status/2117505799937577263) [Thibault Sottiaux](https://x.com/thsottiaux/status/2117746467058405665)

Agent 界面正在进入实际运营工作：Peter Yang 展示了 Grok Bot 如何拨打账单协商、取消订阅和餐厅预订电话；Vercel CEO Guillermo Rauch 让自动代码安全 agent 可用于所有 repository；FPV Ventures partner Nikunj Kothari 则把 Codex 与 Claude Code 配合，用于检查代码路径和延迟。[Peter Yang](https://x.com/petergyang/status/2117783921748558185) [Guillermo Rauch](https://x.com/rauchg/status/2117734833824948373) [Nikunj Kothari](https://x.com/nikunj/status/2117773647868018897)

基础设施竞争本质上也是软件竞争。Nebius 的 CTO 认为，尽管算力紧张，软件才是护城河，需求仍只是刚刚触及表面；同一场对话还提到 500 至 700 GB/s 的共享存储吞吐，以及工作负载从 request 转向 outcome。[Unsupervised Learning](https://www.youtube.com/@RedpointAI)

自主性的边界仍未确定。Thariq 预测，最强的模型最终会准确到不再需要验证自己的工作；Sam Altman 则坚持，人必须掌握未来的控制权，这一要求最终应约束 AI 的进展。[Thariq](https://x.com/trq212/status/2117670540148347273) [Sam Altman](https://x.com/sama/status/2117794005165748448)

## X / Twitter

### Swyx

Swyx 提到 Addy Osmani 在 AI Engineer NYC 的分享：Anthropic 如何以 dark factory 方式每天推进 3 万次代码变更，以及 SonarSource 关于每个循环都需要独立验证的研究。他还公布了 AI Engineer 的最后一个 track 主题 "Raising your Ambition"，计划在旧金山聚集 1000 名参会者，并在线上直播。[AI Engineer NYC 分享](https://x.com/swyx/status/2117558305891746212) [AI Engineer track](https://x.com/swyx/status/2117679157035602065)

### Boris Cherny

Anthropic 的 Boris Cherny 表示，Claude 现在可以自动连接企业插件。Team 和 Enterprise 管理员完成配置后，成员第一次使用插件时就会自动连接。[来源](https://x.com/bcherny/status/2117693181651542387)

### Thibault Sottiaux

在 OpenAI 负责 Codex 与 ChatGPT 的 Thibault Sottiaux 表示，今天的 agent 令人惊叹，却仍然令人沮丧。他认为事情还会反复变化，并期待解决剩余摩擦，重新进入 flow state。[来源](https://x.com/thsottiaux/status/2117746467058405665)

### Peter Yang

制作实用 AI 教程和访谈的 Peter Yang 观察到，在 AI 原生公司工作一到两年就离开，已经不再显得异常。他担心这种节奏对父母尤其难以持续。他还展示了 Grok Bot 的电话功能，可用于协商账单、取消订阅、等待客服、预订餐厅和获取承包商报价，目前只支持美国号码。[离职节奏](https://x.com/petergyang/status/2117825980115067035) [Grok Bot](https://x.com/petergyang/status/2117783921748558185)

### Cat Wu

Cat Wu 在 Claude Code 工作两年后，迎来了在 Anthropic 的最后一天。她回顾了从手动批准每一次权限请求、主要用 Claude 回答问题与写测试，到默认自动批准、执行大型迁移和构建新产品的变化。她感谢 Claude Code、Cowork 和 Tag 背后的团队以及用户反馈。[来源](https://x.com/_catwu/status/2117731934340337676)

### Thariq

曾任 Anthropic Claude Code 团队的 Thariq 认为，模型需要的 token 会越来越少，也不再需要验证自己的工作，因为最强的模型最终会直接给出正确答案。他称这基本上就是 bitter lesson 在发挥作用。[来源](https://x.com/trq212/status/2117670540148347273)

### Guillermo Rauch

Vercel CEO Guillermo Rauch 推出了名为 hacker 的安全 agent，它会自动审计每一行代码。这个功能可以用于所有 repository，无论是否托管在 Vercel，且完全由 Vercel 安全团队开发。他还介绍了 Vercel CI 和 Security Review，并建议 CLI 产品加入 doctor 子命令。[安全 agent](https://x.com/rauchg/status/2117734833824948373) [CI 与审查](https://x.com/rauchg/status/2117765475010822497) [doctor 子命令](https://x.com/rauchg/status/2117802827519250568)

### Aaron Levie

Box CEO Aaron Levie 认为，站在 AI 前沿的人与其他人的差距，可能达到了历史最大。他估计，顶级生产力提升已从两年前的 30% 至 50%，上升到今天某些领域的 5 至 10 倍，这来自更长任务、更强的 harness、更好的训练数据，以及能同时协作多个 agent 的系统。他预计随着 RSI 进展，这一差距还会继续扩大。[来源](https://x.com/levie/status/2117505799937577263)

### Matt Turck

FirstMark Capital 的 VC Matt Turck 称 SurrealDB 4 是公司的重要时刻。他表示，这一版本支持 vector、graph 和 document 多模型，符合 ACID，使用重建的引擎，原生支持 Postgres 和 MySQL，并通过 Cloudflare 实现每秒超过 100 亿峰值行的扩展能力。[来源](https://x.com/mattturck/status/2117741948609949932)

### Nikunj Kothari

FPV Ventures partner Nikunj Kothari 最常用、但认为被低估的 Claude Code 技能是 `/insights` 和 `/playground`。他每两周用一次 cron job 运行 `/insights` 来升级自己的配置，并结合 X bookmarks 跟踪软件工厂的新做法；他用 `/playground` 可视化工作流。他还会把 Codex 和 Claude Code 配对使用，寻找死代码、热点路径和延迟优化点，并称自己现在经常同时使用 ChatGPT Codex、Claude、Bot 和 Muse 应用。[Claude Code 工作流](https://x.com/nikunj/status/2117773647868018897) [多个应用](https://x.com/nikunj/status/2117650163066183769)

### Sam Altman

Sam Altman 表示，人应该始终掌控未来。他反对把人类降级为执行 AI 系统认为值得奖励的任务，并认为人不应该把未来的控制权交给 superintelligence，这一要求最终应约束 AI 的进展。[来源](https://x.com/sama/status/2117794005165748448)

## Podcast

### Unsupervised Learning: Ep 96: Nebius CTO on Racing the Hyperscalers Before AWS Wakes Up

**核心观点：** AI 云新玩家的机会不只是稀缺 GPU，而是把稀缺硬件变成可预测、由软件定义的平台，服务差异极大的工作负载。

Nebius 的 CTO 表示，软件才是护城河。公司的核心硬件团队来自 Yandex，而软件平台则从零重建。Nebius 用同一套平台服务两类客户：一类在互联集群中运行数万块 GPU，另一类以自助方式租用一块 GPU 半小时。公司想越过拥挤的 "neocloud" 标签，直接与 AWS 和 Google Cloud 竞争，尽管收入约为 AWS 的 1%。[节目来源](https://www.youtube.com/@RedpointAI)

需求判断依然激进。与两年前相比，这位 CTO 说市场只是刚刚触及表面，并预计未来三年整体需求会增长 10 倍，甚至 100 倍。一部分瓶颈是结构性的：即使芯片更多，超大规模云厂商也要改造为其他工作负载建设的基础设施，而这类投资必须由足够大的业务规模来支撑。[节目来源](https://www.youtube.com/@RedpointAI)

运营细节比市场口号更扎实。训练客户会把共享存储推到 500 至 700 GB/s；Nebius 为最苛刻的客户提供生产环境的 disaggregated inference，但把它视为需要人工处理、按案例定制的方案，而不是通用答案。它的云平台按整机架分配 Blackwell 算力，再把多个工作负载打包进去。[节目来源](https://www.youtube.com/@RedpointAI)

最有价值的转变，是从 request 转向 outcome。对于严肃的企业 agent，这位 CTO 认为客户会越来越在意结果的可预测性，而不只是成本。他更关注 harness 和工具层面的优化，而不是再等一个更大的模型，因为未来 AI 的普及，很大程度上取决于 agentic 场景有多可靠，以及你能多可靠地抵达这些结果。[节目来源](https://www.youtube.com/@RedpointAI)

## Blog

本次验证的 feed 中没有新的合格博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
