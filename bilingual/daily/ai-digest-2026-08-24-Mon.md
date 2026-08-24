[English](../../en/daily/ai-digest-2026-08-24-Mon.md) | [中文](../../zh/daily/ai-digest-2026-08-24-Mon.md) | [Bilingual](./ai-digest-2026-08-24-Mon.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. Intelligence is getting cheaper, and efficiency is becoming critical infrastructure.** Vercel CEO Guillermo Rauch says OpenAI Sol's price reductions and discounts on the Vercel AI Gateway have made Sol Vercel's fastest-growing frontier model, evidence that demand for intelligence is highly elastic and that gateways are inevitable. OpenAI's Thibault Sottiaux frames the same shift from the supply side: 2026 is the year companies start seriously caring about model efficiency and reliability as models become critical infrastructure.

智能正在变便宜，效率开始成为关键基础设施。Vercel CEO Guillermo Rauch 表示，OpenAI Sol 的降价以及 Vercel AI Gateway 上的折扣让 Sol 成为 Vercel 增长最快的 frontier 模型，这说明智能的需求弹性极高，gateway 正在变得不可避免。OpenAI 的 Thibault Sottiaux 则从供给侧给出了同样的判断：2026 年是企业开始认真对待模型效率与可靠性的年份，因为模型正在成为关键基础设施。

**2. Good evals measure the jobs to be done, not just the final answer.** Meta's Madhu Guru, in part seven of his series on building evals, argues against golden sets of right answers that only check the final output. Using a financial-analysis agent as an example, he walks through stages such as client understanding, evidence gathering, data analysis, and the recommendation itself, each deserving its own eval so failures can be diagnosed. Peter Yang surfaces Shreya's related distinction: top-down evals start from the task description, where Claude does a very good job, while bottom-up evals come from your gut reactions to sample outputs, and "Claude is very, very bad at coming up with bottom-up evals. That's all you."

好的 eval 应该度量「要做的工作」，而不只是最终答案。Meta 的 Madhu Guru 在「如何构建好的 eval」系列第七篇中反对只检查最终输出的一组标准答案。他以金融分析 agent 为例，指出理解客户、收集证据、分析数据、给出建议等每个阶段都值得有自己的 eval，才能定位问题出在哪里。Peter Yang 分享了 Shreya 的类似区分：自上而下的 eval 从任务描述出发，Claude 做得非常好；自下而上的 eval 来自你对大量样本输出的直觉反馈，而「Claude 非常非常不擅长构建自下而上的 eval，这部分只能靠你」。

**3. Systems of record face an agent reckoning.** Y Combinator President and CEO Garry Tan predicts that systems of record will need to become AI harnesses or face replacement by agents.

Systems of record 正面临 agent 的挑战。Y Combinator 总裁兼 CEO Garry Tan 预测，systems of record（系统记录）要么变成 AI harness，要么面临被 agent 取代。

**4. Claude enters Apple's on-device AI stack.** The Claude Blog announced a Swift package that lets Apple developers use the Foundation Models framework for fast local tasks and then hand off to Claude when a request calls for multi-step reasoning, code generation, or current web information, with typed Swift values streaming back into the same view, on iOS 27, iPadOS 27, macOS 27, visionOS 27, and watchOS 27.

Claude 进入 Apple 的设备端 AI 体系。Claude Blog 宣布推出一个 Swift package，让 Apple 开发者先用 Foundation Models framework 处理摘要、抽取等快速本地任务，当请求需要多步推理、代码生成或最新网络信息时，再把任务交给 Claude；类型化的 Swift 值会流式传回同一个视图，支持 iOS 27、iPadOS 27、macOS 27、visionOS 27 和 watchOS 27。

**5. Agent tooling is moving beyond the CLI.** Peter Steinberger of OpenClaw argues that CLI tools are nice but UI visualizations where your team works are nicer, and he demoed adding a rotation USB protocol to his claw so it can drive a 360 webcam. Guillermo Rauch lays out the philosophy behind extending fx: open protocols such as MCP, Skills, and Plugins, plus "the best one, Unix," with libfx enabling embeddability into bigger programs.

Agent 工具正在超越 CLI。OpenClaw 的 Peter Steinberger 认为 CLI 工具不错，但团队日常所在的 UI 可视化更胜一筹，他还演示了为自己的 claw 加入 rotation USB 协议，让它能操作 360 度摄像头。Guillermo Rauch 则阐述了扩展 fx 的哲学：建立在 MCP、Skills、Plugins 等开放协议之上，还有「最好的一个，Unix」，再加上让 fx 可以嵌入更大程序的 libfx。

## X / Twitter

### Thibault Sottiaux: Codex & ChatGPT at OpenAI
Sottiaux predicts 2026 is the year companies start seriously caring about model efficiency and reliability as models become critical infrastructure. He also posted an update on the Codex and ChatGPT usage reset: the reset has been propagated to accounts, along with fixes to usage issues found the day before, and more improvements are coming.

Sottiaux 预测 2026 年是企业开始认真对待模型效率与可靠性的年份，因为模型正在成为关键基础设施。他还发布了一则用量更新：reset 已经同步到所有账号，并修复了前一天发现的用量问题，后续还会有更多改进。

- [Thibault Sottiaux on model efficiency and reliability](https://x.com/thsottiaux/status/2091581575108653374)
- [Thibault Sottiaux on the usage reset](https://x.com/thsottiaux/status/2091688655828246890)

### Peter Yang
Yang shares Shreya's distinction between two types of AI evals: top-down evals start from the task description in a vacuum, where Claude does a very good job, while bottom-up evals come from externalizing your gut feedback on lots of sample outputs, where "Claude is very, very bad at coming up with bottom-up evals. That's all you."

Yang 分享了 Shreya 对两种 AI eval 的区分：自上而下的 eval 从任务描述出发，Claude 做得非常好；自下而上的 eval 需要你把对大量样本输出的直觉反馈沉淀成 eval，「Claude 非常非常不擅长构建自下而上的 eval，这部分只能靠你」。

- [Peter Yang on top-down and bottom-up evals](https://x.com/petergyang/status/2091586298779955512)

### Madhu Guru: Senior Director of AI at Meta
In part seven of his evals series, Guru lays out the Goldilocks principle for eval construction: evals should measure at the level of the various jobs to be done, not just the final answer. For a financial-analysis agent, checking only whether it recommends the "right" stock misses the stages before the recommendation, including client understanding, evidence gathering, data analysis, and the recommendation itself, and each stage can have its own eval so you can diagnose issues. A well-designed eval set would tell you exactly where to dig, for example client understanding at 92%, evidence extraction at 92%, data analysis at 70%, and recommendation at 75%. "Not too granular. Not too coarse. Just right."

Guru 在「如何构建好的 eval」系列第七篇中提出 eval 构建的 Goldilocks 原则：eval 应该度量各个「要做的工作」的层面，而不只是最终答案。以金融分析 agent 为例，只检查它是否推荐了「正确」的股票，会漏掉推荐之前的各个阶段，包括理解客户、收集证据、分析数据以及给出建议本身，每个阶段都可以有自己的 eval，以便定位问题。设计良好的 eval 集会告诉你该往哪里深挖，比如客户理解 92%、证据提取 92%、数据分析 70%、建议 75%。「不要太细，也不要太粗，刚刚好。」

- [Madhu Guru on the Goldilocks principle for evals](https://x.com/realmadhuguru/status/2091684812012875981)

### Guillermo Rauch: CEO of Vercel
Rauch argues intelligence is getting cheaper: OpenAI Sol's price reductions and discounts on the Vercel AI Gateway have made Sol Vercel's fastest-growing frontier model, showing that demand for intelligence is highly elastic and that if you are not using a gateway, you are missing out on inference price volatility that lowers operating costs and increases margins. He also laid out the philosophy for extending fx: open protocols, including MCP, Skills, and Plugins, and "the best one, Unix," where small programs do one thing well and compose, plus libfx so you can build your own CLI, background agent, or software factory, local or cloud.

Rauch 认为智能正在变便宜：OpenAI Sol 的降价和 Vercel AI Gateway 上的折扣让 Sol 成为 Vercel 增长最快的 frontier 模型，这说明智能的需求弹性极高，不用 gateway 就会错过推理价格的波动，而那是降低运营成本、提升利润的机会。他还阐述了扩展 fx 的哲学：开放协议，包括 MCP、Skills、Plugins，以及「最好的一个，Unix」，即只做一件事的小程序彼此组合，再加上让 fx 可以嵌入更大程序的 libfx，你可以构建自己的 CLI、后台 agent 或软件工厂，本地或云端皆可。

- [Guillermo Rauch on intelligence getting cheaper](https://x.com/rauchg/status/2091671326897713424)
- [Guillermo Rauch on fx's open-protocol philosophy](https://x.com/rauchg/status/2091583525661384813)

### Garry Tan: President & CEO of Y Combinator
Tan predicts that systems of record will need to become AI harnesses or face replacement by agents.

Tan 预测，systems of record 要么变成 AI harness，要么面临被 agent 取代。

- [Garry Tan on systems of record and agents](https://x.com/garrytan/status/2091742825042030681)

### Peter Steinberger: OpenClaw
Steinberger argues CLI agent tools are nice, but UI visualizations where your team works are nicer. He also demoed adding a rotation USB protocol to his project and telling his claw to look around, with the claw now having fun with his 360 webcam.

Steinberger 认为 CLI agent 工具不错，但团队日常所在的 UI 可视化更胜一筹。他还演示了为自己的项目加入 rotation USB 协议，并让他的 claw 环顾四周，现在它正在玩他的 360 度摄像头。

- [Peter Steinberger on CLI vs. UI visualizations](https://x.com/steipete/status/2091650136506327253)
- [Peter Steinberger on the rotation USB protocol demo](https://x.com/steipete/status/2091639468935831910)

## Podcast

The validated podcast feed contained no new qualifying episodes for this digest. The feed reported a transcript error (HTTP 404: "Episode not found") for its only tracked episode, so there is nothing to summarize this cycle.

本次验证后的播客源没有新的合格内容。该 feed 对其唯一追踪的一期节目报告了 transcript 错误（HTTP 404: "Episode not found"），因此本期没有可总结的内容。

## Blog

### Claude Blog: Building intelligent apps for Apple platforms with Claude in the Foundation Models framework
Claude is coming to Apple's Foundation Models framework. A new Swift package, available tomorrow, lets Apple developers use Apple's on-device models for fast local tasks like summarization or extraction, then hand off to Claude when a request calls for multi-step reasoning, code generation, or current web information. Apple's framework returns typed Swift values through guided generation in as few as three lines of code, so developers arrive at the Claude API call with clean inputs instead of raw user text, and Claude's response streams back into the same view. Claude can also search the web for current information and execute code for data analysis. The package works through Apple's Foundation Models framework on iOS 27, iPadOS 27, macOS 27, visionOS 27, and watchOS 27; developers add it to their project and sign in with an Anthropic API key. The announcement frames it as "one experience for the user, backed by the right model for each step."

Claude 即将进入 Apple 的 Foundation Models framework。一个新的 Swift package 将于明天上线，让 Apple 开发者先用 Apple 的设备端模型处理摘要、抽取等快速本地任务，当请求需要多步推理、代码生成或最新网络信息时，再把任务交给 Claude。Apple 的 framework 通过 guided generation 用短短三行代码返回类型化的 Swift 值，开发者带着干净的输入而不是原始用户文本调用 Claude API，Claude 的响应也会流式传回同一个视图。Claude 还可以搜索最新信息并执行代码做数据分析。该 package 通过 Apple 的 Foundation Models framework 支持 iOS 27、iPadOS 27、macOS 27、visionOS 27 和 watchOS 27；开发者把它加入项目并用 Anthropic API key 登录即可。公告将其概括为「对用户而言是一个体验，每一步由合适的模型支撑」。

- [Claude Blog: Building intelligent apps for Apple platforms with Claude in the Foundation Models framework](https://claude.com/blog/claude-for-foundation-models)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
