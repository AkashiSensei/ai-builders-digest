[English](../../en/daily/ai-digest-2026-08-24-Mon.md) | [中文](../../zh/daily/ai-digest-2026-08-24-Mon.md) | [Bilingual](./ai-digest-2026-08-24-Mon.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. Model efficiency and cheaper intelligence are moving to center stage.** Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, predicts 2026 is the year companies start seriously caring about model efficiency and reliability, as models become critical infrastructure. Vercel CEO Guillermo Rauch makes the price case: OpenAI Sol's price reductions and discounts on Vercel AI Gateway made Sol Vercel's fastest-growing frontier model, evidence that demand for intelligence is highly elastic and that gateways are becoming inevitable.

模型效率与更便宜的智能正在走向舞台中央。在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 预测，2026 年是企业开始认真对待模型效率与可靠性的年份，因为模型正在成为关键基础设施。Vercel CEO Guillermo Rauch 则从价格角度给出佐证：OpenAI Sol 的降价以及在 Vercel AI Gateway 上的折扣让 Sol 成为 Vercel 增长最快的 frontier 模型，这说明智能的需求弹性极高，gateway 正在变得不可避免。

**2. Evals should measure jobs to be done, not just final answers.** Meta's Madhu Guru, in part seven of his evals series, says teams often build golden sets of right answers and miss the stages before the final output. Using a financial-analysis agent as an example, he argues each stage, from understanding the client to gathering evidence, data analysis, and the recommendation itself, deserves its own eval so failures can be diagnosed. Peter Yang also surfaced Shreya's distinction between top-down evals, which Claude handles well, and bottom-up evals built from your gut reactions to sample outputs, which "Claude is very, very bad at."

Eval 应该度量「要做的工作」，而不只是最终答案。Meta 的 Madhu Guru 在「如何构建好的 eval」系列第七篇中指出，很多团队只构建一组标准答案，却忽略了最终输出之前的各个阶段。他以金融分析 agent 为例：理解客户、收集证据、分析数据、给出建议，每个阶段都可以有自己的 eval，才能定位问题出在哪里。Peter Yang 也分享了 Shreya 的观点：Claude 很擅长自上而下的 eval，而自下而上的 eval 需要你从大量样本输出中提炼直觉反馈，这部分「Claude 非常非常差，只能靠你」。

**3. Agents are forcing a rethink of software infrastructure.** Y Combinator President and CEO Garry Tan predicts systems of record will need to become AI harnesses or face replacement by agents. Peter Yang argues the best assistants today need to know how to work with AI agents, describing how his human assistant uses Claude Code and Codex for podcast post-production, show notes, and clips.

Agent 正在倒逼软件基础设施重新思考。Y Combinator 总裁兼 CEO Garry Tan 预测，systems of record（系统记录）要么变成 AI harness，要么面临被 agent 取代。Peter Yang 则认为，如今最好的助理必须懂得如何与 AI agent 协作，他描述了自己的真人助理如何用 Claude Code 和 Codex 完成播客后期制作、撰写 show notes 和制作切片。

**4. Claude enters Apple's on-device AI stack.** The Claude Blog announced a Swift package that lets Apple developers use the Foundation Models framework for fast local tasks and then hand off to Claude when a request calls for multi-step reasoning, code generation, or current web information. The package returns typed Swift values, streams responses into the same view, and arrives on iOS 27, iPadOS 27, macOS 27, visionOS 27, and watchOS 27.

Claude 进入 Apple 的设备端 AI 体系。Claude Blog 宣布推出一个 Swift package，让 Apple 开发者先用 Foundation Models framework 上的设备端模型处理摘要、抽取等快速本地任务，当请求需要多步推理、代码生成或最新网络信息时，再把任务交给 Claude。该 package 返回类型化的 Swift 值，把响应流式传回同一个视图，并将在 iOS 27、iPadOS 27、macOS 27、visionOS 27 和 watchOS 27 上可用。

**5. Open protocols and where agents work best.** Guillermo Rauch says extending fx is built on open protocols: MCP, Skills, Plugins, and "the best one, Unix," with libfx for embeddability. Peter Steinberger of OpenClaw argues CLI tools are nice but UI visualizations where your team works are nicer, and demoed his claw driving a 360 webcam through a rotation USB protocol.

开放协议与 agent 的最佳工作形态。Guillermo Rauch 表示，扩展 fx 的哲学建立在开放协议之上：MCP、Skills、Plugins，以及「最好的一个，Unix」，即只做一件事的小程序彼此组合，再加上让 fx 可嵌入更大程序的 libfx。OpenClaw 的 Peter Steinberger 则认为 CLI 工具不错，但团队日常所在的 UI 可视化更胜一筹，并演示了他的 claw 通过 rotation USB 协议操作 360 度摄像头。

## X / Twitter

### Thibault Sottiaux — Codex & ChatGPT at OpenAI
Sottiaux predicts 2026 is the year companies start seriously caring about model efficiency and reliability, as models become critical infrastructure. He also updated users that a usage reset has been propagated to accounts along with fixes to usage issues reported earlier, promising more to come.

Sottiaux 预测 2026 年是企业开始认真对待模型效率与可靠性的年份，因为模型正在成为关键基础设施。他还向用户更新：用量 reset 已经同步到所有账号，并修复了此前发现的用量问题，后续还会有更多改进。

- [Thibault Sottiaux on model efficiency and reliability](https://x.com/thsottiaux/status/2091581575108653374)
- [Thibault Sottiaux on the usage reset](https://x.com/thsottiaux/status/2091688655828246890)

### Peter Yang
Yang shared Shreya's distinction between two types of AI evals: top-down evals, built from a task description, which Claude does very well; and bottom-up evals, which externalize your gut feedback from many sample outputs, and which "Claude is very, very bad at" — that part is all you. He also argued, in a sponsored post for Oceans, that the best assistants today need to know how to work with AI agents, describing how his assistant Char uses Claude Code and Codex to run podcast post-production, draft show notes, and make clips.

Yang 分享了 Shreya 对两种 AI eval 的区分：自上而下的 eval 从任务描述出发，Claude 做得非常好；自下而上的 eval 需要你从大量样本输出中提炼直觉反馈，「Claude 在这方面非常非常差，这部分只能靠你」。他还在 Oceans 的一篇赞助帖中提出，如今最好的助理必须懂得如何与 AI agent 协作，并描述了他的助理 Char 如何用 Claude Code 和 Codex 完成播客后期制作、撰写 show notes 和制作切片。

- [Peter Yang on top-down vs. bottom-up evals](https://x.com/petergyang/status/2091586298779955512)
- [Peter Yang on AI-fluent assistants](https://x.com/petergyang/status/2091631590799737306)

### Madhu Guru — Senior Director of AI at Meta
In part seven of his "How to build great evals" series, Guru lays out the Goldilocks principle: evals should measure at the level of the various jobs to be done, not just the final answer. Using a financial-analysis agent as an example, he argues that teams checking only whether the agent picked the "right" stock miss the stages before the recommendation, such as understanding the client, gathering evidence, and analyzing data, each of which can have its own eval. A well-designed eval set tells you where to dig, for example data analysis at 70% versus recommendation at 75%: not too granular, not too coarse.

Guru 在「如何构建好的 eval」系列第七篇中提出 Goldilocks 原则：eval 应该度量各个「要做的工作」的层面，而不只是最终答案。他以金融分析 agent 为例，指出只检查 agent 是否选对了股票会漏掉建议之前的各个阶段，比如理解客户、收集证据、分析数据，每个阶段都可以有自己的 eval。设计良好的 eval 集能告诉你该往哪里深挖，比如数据分析 70%、建议 75%：不要太细，也不要太粗。

- [Madhu Guru on the Goldilocks principle for evals](https://x.com/realmadhuguru/status/2091684812012875981)

### Guillermo Rauch — CEO of Vercel
Rauch argues intelligence is getting cheaper: OpenAI Sol's price reductions and discounts on Vercel AI Gateway made Sol Vercel's fastest-growing frontier model, showing that demand for intelligence is highly elastic and that gateways are inevitable for capturing inference price volatility. He also laid out the philosophy for extending fx: open protocols, including MCP, Skills, Plugins, and "the best one, Unix," where small programs do one thing well and compose, plus libfx so fx can be embedded in bigger programs, your own CLI, background agent, or software factory, local or cloud.

Rauch 认为智能正在变便宜：OpenAI Sol 的降价和 Vercel AI Gateway 上的折扣让 Sol 成为 Vercel 增长最快的 frontier 模型，这说明智能的需求弹性极高，想要吃到推理价格波动红利的人离不开 gateway。他还阐述了扩展 fx 的哲学：开放协议，包括 MCP、Skills、Plugins，以及「最好的一个，Unix」，即只做一件事的小程序彼此组合，再加上让 fx 能嵌入更大程序的 libfx，你可以构建自己的 CLI、后台 agent 或软件工厂，本地或云端皆可。

- [Guillermo Rauch on intelligence getting cheaper](https://x.com/rauchg/status/2091671326897713424)
- [Guillermo Rauch on fx's open-protocol philosophy](https://x.com/rauchg/status/2091583525661384813)

### Garry Tan — President & CEO of Y Combinator
Tan predicts systems of record will need to become AI harnesses or face replacement by agents.

Tan 预测，systems of record 要么变成 AI harness，要么面临被 agent 取代。

- [Garry Tan on systems of record and agents](https://x.com/garrytan/status/2091742825042030681)

### Peter Steinberger — OpenClaw
Steinberger argues CLI agent tools are nice, but UI visualizations where your team works are nicer. He also demoed adding a rotation USB protocol to his project so his claw can look around, with it now playing with his 360 webcam.

Steinberger 认为 CLI 工具不错，但团队日常所在的 UI 可视化更胜一筹。他还演示了为自己的项目加入 rotation USB 协议，让他的 claw 可以环顾四周，现在它正在玩他的 360 度摄像头。

- [Peter Steinberger on CLI vs. UI visualizations](https://x.com/steipete/status/2091650136506327253)
- [Peter Steinberger on the rotation USB protocol demo](https://x.com/steipete/status/2091639468935831910)

## Podcast

The validated podcast feed contained no new qualifying episodes for this digest. The validator reported a transcript error (HTTP 404: "Episode not found") for the only tracked episode, so there is nothing to summarize this cycle.

验证后的播客源本次没有新的合格内容。校验器对唯一追踪的一期节目报告了 transcript 错误（HTTP 404: "Episode not found"），因此本期没有可总结的内容。

## Blog

### Claude Blog: Building intelligent apps for Apple platforms with Claude in the Foundation Models framework
Claude is coming to Apple's Foundation Models framework. A new Swift package, available tomorrow, lets Apple developers start with Apple's on-device models for fast, local tasks like summarization or extraction, then hand off to Claude when a request calls for multi-step reasoning, code generation, or current web information. Apple's framework returns typed Swift values through guided generation in as few as three lines of code, so developers arrive at the Claude API call with clean inputs instead of raw user text, and Claude's responses stream back into the same view. Claude can also search the web and execute code for data analysis. The package works on iOS 27, iPadOS 27, macOS 27, visionOS 27, and watchOS 27; developers add it to their project and sign in with an Anthropic API key. The announcement frames it as "one experience for the user, backed by the right model for each step."

Claude 即将进入 Apple 的 Foundation Models framework。一个新的 Swift package 将于明天上线，让 Apple 开发者先用设备端模型处理摘要、抽取等快速本地任务，当请求需要多步推理、代码生成或最新网络信息时，再通过 Foundation Models framework 把任务交给 Claude。Apple 的 framework 通过 guided generation 用短短三行代码返回类型化的 Swift 值，开发者带着干净的输入而不是原始用户文本调用 Claude API，Claude 的响应也会流式传回同一个视图。Claude 还可以搜索最新信息并执行代码做数据分析。该 package 支持 iOS 27、iPadOS 27、macOS 27、visionOS 27 和 watchOS 27，开发者把它加入项目并用 Anthropic API key 登录即可。公告将其概括为「对用户而言是一个体验，每一步由合适的模型支撑」。

- [Claude Blog: Building intelligent apps for Apple platforms with Claude in the Foundation Models framework](https://claude.com/blog/claude-for-foundation-models)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
