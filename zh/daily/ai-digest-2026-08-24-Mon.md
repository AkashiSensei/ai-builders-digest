[English](../../en/daily/ai-digest-2026-08-24-Mon.md) | [中文](./ai-digest-2026-08-24-Mon.md) | [双语](../../bilingual/daily/ai-digest-2026-08-24-Mon.md)

---

# AI Builders Digest

## 导读

**1. 智能正在变便宜，效率开始成为关键基础设施。** Vercel CEO Guillermo Rauch 表示，OpenAI Sol 的降价以及 Vercel AI Gateway 上的折扣让 Sol 成为 Vercel 增长最快的 frontier 模型，这说明智能的需求弹性极高，gateway 正在变得不可避免。OpenAI 的 Thibault Sottiaux 则从供给侧给出了同样的判断：2026 年是企业开始认真对待模型效率与可靠性的年份，因为模型正在成为关键基础设施。

**2. 好的 eval 应该度量「要做的工作」，而不只是最终答案。** Meta 的 Madhu Guru 在「如何构建好的 eval」系列第七篇中反对只检查最终输出的一组标准答案。他以金融分析 agent 为例，指出理解客户、收集证据、分析数据、给出建议等每个阶段都值得有自己的 eval，才能定位问题出在哪里。Peter Yang 分享了 Shreya 的类似区分：自上而下的 eval 从任务描述出发，Claude 做得非常好；自下而上的 eval 来自你对大量样本输出的直觉反馈，而「Claude 非常非常不擅长构建自下而上的 eval，这部分只能靠你」。

**3. Systems of record 正面临 agent 的挑战。** Y Combinator 总裁兼 CEO Garry Tan 预测，systems of record（系统记录）要么变成 AI harness，要么面临被 agent 取代。

**4. Claude 进入 Apple 的设备端 AI 体系。** Claude Blog 宣布推出一个 Swift package，让 Apple 开发者先用 Foundation Models framework 处理摘要、抽取等快速本地任务，当请求需要多步推理、代码生成或最新网络信息时，再把任务交给 Claude；类型化的 Swift 值会流式传回同一个视图，支持 iOS 27、iPadOS 27、macOS 27、visionOS 27 和 watchOS 27。

**5. Agent 工具正在超越 CLI。** OpenClaw 的 Peter Steinberger 认为 CLI 工具不错，但团队日常所在的 UI 可视化更胜一筹，他还演示了为自己的 claw 加入 rotation USB 协议，让它能操作 360 度摄像头。Guillermo Rauch 则阐述了扩展 fx 的哲学：建立在 MCP、Skills、Plugins 等开放协议之上，还有「最好的一个，Unix」，再加上让 fx 可以嵌入更大程序的 libfx。

## X / Twitter

### Thibault Sottiaux（OpenAI 的 Codex & ChatGPT）
Sottiaux 预测 2026 年是企业开始认真对待模型效率与可靠性的年份，因为模型正在成为关键基础设施。他还发布了一则用量更新：reset 已经同步到所有账号，并修复了前一天发现的用量问题，后续还会有更多改进。

- [Thibault Sottiaux 谈模型效率与可靠性](https://x.com/thsottiaux/status/2091581575108653374)
- [Thibault Sottiaux 谈用量 reset](https://x.com/thsottiaux/status/2091688655828246890)

### Peter Yang
Yang 分享了 Shreya 对两种 AI eval 的区分：自上而下的 eval 从任务描述出发，Claude 做得非常好；自下而上的 eval 需要你把对大量样本输出的直觉反馈沉淀成 eval，「Claude 非常非常不擅长构建自下而上的 eval，这部分只能靠你」。

- [Peter Yang 谈自上而下与自下而上的 eval](https://x.com/petergyang/status/2091586298779955512)

### Madhu Guru（Meta 的 AI 高级总监）
Guru 在「如何构建好的 eval」系列第七篇中提出 eval 构建的 Goldilocks 原则：eval 应该度量各个「要做的工作」的层面，而不只是最终答案。以金融分析 agent 为例，只检查它是否推荐了「正确」的股票，会漏掉推荐之前的各个阶段，包括理解客户、收集证据、分析数据以及给出建议本身，每个阶段都可以有自己的 eval，以便定位问题。设计良好的 eval 集会告诉你该往哪里深挖，比如客户理解 92%、证据提取 92%、数据分析 70%、建议 75%。「不要太细，也不要太粗，刚刚好。」

- [Madhu Guru 谈 eval 的 Goldilocks 原则](https://x.com/realmadhuguru/status/2091684812012875981)

### Guillermo Rauch（Vercel CEO）
Rauch 认为智能正在变便宜：OpenAI Sol 的降价和 Vercel AI Gateway 上的折扣让 Sol 成为 Vercel 增长最快的 frontier 模型，这说明智能的需求弹性极高，不用 gateway 就会错过推理价格的波动，而那是降低运营成本、提升利润的机会。他还阐述了扩展 fx 的哲学：开放协议，包括 MCP、Skills、Plugins，以及「最好的一个，Unix」，即只做一件事的小程序彼此组合，再加上让 fx 可以嵌入更大程序的 libfx，你可以构建自己的 CLI、后台 agent 或软件工厂，本地或云端皆可。

- [Guillermo Rauch 谈智能变便宜](https://x.com/rauchg/status/2091671326897713424)
- [Guillermo Rauch 谈 fx 的开放协议哲学](https://x.com/rauchg/status/2091583525661384813)

### Garry Tan（Y Combinator 总裁兼 CEO）
Tan 预测，systems of record 要么变成 AI harness，要么面临被 agent 取代。

- [Garry Tan 谈 systems of record 与 agent](https://x.com/garrytan/status/2091742825042030681)

### Peter Steinberger（OpenClaw）
Steinberger 认为 CLI agent 工具不错，但团队日常所在的 UI 可视化更胜一筹。他还演示了为自己的项目加入 rotation USB 协议，并让他的 claw 环顾四周，现在它正在玩他的 360 度摄像头。

- [Peter Steinberger 谈 CLI 与 UI 可视化](https://x.com/steipete/status/2091650136506327253)
- [Peter Steinberger 演示 rotation USB 协议](https://x.com/steipete/status/2091639468935831910)

## Podcast

本次验证后的播客源没有新的合格内容。该 feed 对其唯一追踪的一期节目报告了 transcript 错误（HTTP 404: "Episode not found"），因此本期没有可总结的内容。

## Blog

### Claude Blog：Building intelligent apps for Apple platforms with Claude in the Foundation Models framework
Claude 即将进入 Apple 的 Foundation Models framework。一个新的 Swift package 将于明天上线，让 Apple 开发者先用 Apple 的设备端模型处理摘要、抽取等快速本地任务，当请求需要多步推理、代码生成或最新网络信息时，再把任务交给 Claude。Apple 的 framework 通过 guided generation 用短短三行代码返回类型化的 Swift 值，开发者带着干净的输入而不是原始用户文本调用 Claude API，Claude 的响应也会流式传回同一个视图。Claude 还可以搜索最新信息并执行代码做数据分析。该 package 通过 Apple 的 Foundation Models framework 支持 iOS 27、iPadOS 27、macOS 27、visionOS 27 和 watchOS 27；开发者把它加入项目并用 Anthropic API key 登录即可。公告将其概括为「对用户而言是一个体验，每一步由合适的模型支撑」。

- [Claude Blog：Building intelligent apps for Apple platforms with Claude in the Foundation Models framework](https://claude.com/blog/claude-for-foundation-models)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
