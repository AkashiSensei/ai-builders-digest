[English](../../en/daily/ai-digest-2026-09-27-Sun.md) | [中文](../../zh/daily/ai-digest-2026-09-27-Sun.md) | [Bilingual](./ai-digest-2026-09-27-Sun.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. Diffusion is Inception's bet against the autoregressive default.** Inception co-founder and CEO Stefano Ermon, a longtime Stanford professor who helped develop the score-based generative models that became modern diffusion, argues that the next phase of AI competition will be decided at inference time rather than training time. Autoregressive models generate one token at a time and leave GPUs memory bound, while diffusion processes many tokens in parallel, which is why he is scaling diffusion-based language models instead of the architecture nearly everyone else bet on. ([No Priors](https://www.youtube.com/@NoPriorsPodcast))

**1. Diffusion 是 Inception 押注的、与自回归主流相反的方向。**Inception 联合创始人兼 CEO Stefano Ermon 是斯坦福的长期教授，他参与开创的 score-based 生成模型后来演变成了现代 diffusion。他认为，AI 竞争的下一阶段会由推理时决定，而不是训练时：自回归模型一次只生成一个 token，让 GPU 卡在显存带宽上；diffusion 则并行处理大量 token。这也是他选择去扩展基于 diffusion 的语言模型、而不是跟随几乎所有人都在押注的架构的原因。（[No Priors](https://www.youtube.com/@NoPriorsPodcast)）

**2. Speed and control are the challenger's wedge.** Inception's Mercury models run in production on a custom serving engine rather than vLLM or SGLang, and Ermon says they match frontier labs' speed-optimized models while being significantly faster; the voice agent company OpenCall moved off custom chips to get the same speed on NVIDIA GPUs with more availability and lower cost. Diffusion's coarse-to-fine generation also lets you steer an output with constraints or a reward function from the start instead of grading a finished result, which Ermon says opens product experiences autoregressive models cannot offer. ([No Priors](https://www.youtube.com/@NoPriorsPodcast))

**2. 速度和控制力，是挑战者模型的切入口。**Inception 的 Mercury 模型跑在生产环境里，用的是自研推理引擎，而不是 vLLM 或 SGLang。Ermon 说，Mercury 在质量上能对标前沿实验室的速度优化模型，同时明显更快；语音 agent 公司 OpenCall 从定制芯片切换到 NVIDIA GPU，拿到了同样的速度，还有更高的可用性和更低的成本。Diffusion 从粗到细的生成方式还允许你在生成一开始就用约束或 reward function 去引导结果，而不是等整个输出结束再打分，Ermon 说这会带来自回归模型给不了的产品体验。（[No Priors](https://www.youtube.com/@NoPriorsPodcast)）

**3. Reject the slop and defend understanding.** Vercel CEO Guillermo Rauch warns that low-quality, unverified AI prose is not only a code problem: the exhaustion of reading it risks discounting reading itself. He points to a viral thread where a "perf improvement" attributed to a compiler change came with a PR description in which the AI itself said the gain came from changed algorithms and data structures instead, and he wants AI "in the service of understanding the universe and enhancing human cognition and creativity." ([Guillermo Rauch](https://x.com/rauchg/status/2103939888513274147))

**3. 拒绝 slop，守住理解力。**Vercel CEO Guillermo Rauch 警告说，低质量、未经核实的 AI 文本不只是代码问题：读这些东西带来的疲惫，可能让人干脆放弃阅读本身。他举了一个正在病毒式传播的讨论串：一个被归因于编译器改动的「性能提升」，其 PR 描述里 AI 自己说收益并非来自编译器，而是来自算法和数据结构的变化，言下之意是本来也可以拿到类似的收益。他说他希望 AI 服务于理解宇宙，服务于增强人类的认知与创造力。（[Guillermo Rauch](https://x.com/rauchg/status/2103939888513274147)）

**4. Builders are wiring new models into everyday work.** Peter Yang is using Gemini's audio API to build an app that teaches him conversational Japanese in 10 lessons of 10 phrases each, and he tried Google's new audio APIs for the first time inside Antigravity while asking where feedback should go. Y Combinator president and CEO Garry Tan says his favorite way to fix bugs now is Capy with GStack's /autoplan on a production issue using GPT-6 medium reasoning. ([Peter Yang](https://x.com/petergyang/status/2104059554204188833), [Peter Yang](https://x.com/petergyang/status/2104003094615052443), [Garry Tan](https://x.com/garrytan/status/2103989902476259702))

**4. Builders 正在把新模型接进日常工作。**Peter Yang 正在用 Gemini 的 audio API 做一个教自己日语会话的 app，结构是 10 节课、每节 10 个短语；他还第一次在 Antigravity 里试用 Google 的新 audio API，并问反馈该提给谁。Y Combinator 总裁兼 CEO Garry Tan 说，他现在最喜欢的修 bug 方式，是用 Capy 配合 GStack 的 /autoplan 处理生产问题，模型用 GPT-6 medium reasoning。（[Peter Yang](https://x.com/petergyang/status/2104059554204188833)、[Peter Yang](https://x.com/petergyang/status/2104003094615052443)、[Garry Tan](https://x.com/garrytan/status/2103989902476259702)）

**5. Agentic creation is maturing fast.** Thariq, who works on Claude Code at Anthropic, marked roughly a year since he posted one of the first experiments using Claude Code to make videos, recalling how long each one took to iterate on because he had to point out every detail that was wrong, and calling it crazy how far things have come. Every CEO Dan Shipper wrote a novelization of Plato's Protagoras and had Opus 5.5 turn it into a film, then posted scene 2. ([Thariq](https://x.com/trq212/status/2103897226154328502), [Dan Shipper](https://x.com/danshipper/status/2103850415930708437), [Dan Shipper](https://x.com/danshipper/status/2103894152316645620))

**5. Agentic 创作正在快速成熟。**Anthropic Claude Code 团队的 Thariq 回顾了大约一年前他发布的、最早用 Claude Code 做视频的实验之一：每一条都要和 Claude 反复迭代很久才能做对，还要不断指出哪里错了；他说现在回头看，进展快得离谱。Every CEO Dan Shipper 把柏拉图的《Protagoras》改写成了小说，再让 Opus 5.5 把它拍成电影，并放出了第二幕。（[Thariq](https://x.com/trq212/status/2103897226154328502)、[Dan Shipper](https://x.com/danshipper/status/2103850415930708437)、[Dan Shipper](https://x.com/danshipper/status/2103894152316645620)）

**6. Limits and resets stay part of the product experience.** OpenAI's Thibault Sottiaux, who works on Codex and ChatGPT, said the resets had all propagated and signed off for the weekend. Peter Yang observed that Claude's limits went from barely usable to basically unlimited, a reminder that rate limits are now a competitive surface as much as a billing detail. ([Thibault Sottiaux](https://x.com/thsottiaux/status/2103911959544610829), [Peter Yang](https://x.com/petergyang/status/2104066667361992892))

**6. 额度和重置，仍然是产品体验的一部分。**OpenAI 的 Thibault Sottiaux（Codex 与 ChatGPT）说所有重置都已生效，然后祝大家周末愉快。Peter Yang 观察到 Claude 的额度从几乎没法用到几乎无限，这提醒人们：rate limit 现在既是计费细节，也是竞争面。（[Thibault Sottiaux](https://x.com/thsottiaux/status/2103911959544610829)、[Peter Yang](https://x.com/petergyang/status/2104066667361992892)）

## X / Twitter

### Thibault Sottiaux: Codex and ChatGPT at OpenAI

Thibault Sottiaux said the resets had all propagated and signed off for the weekend.

Thibault Sottiaux 说所有重置都已生效，然后祝大家周末愉快。

- [Thibault Sottiaux: resets all propagated](https://x.com/thsottiaux/status/2103911959544610829)

### Peter Yang: Practical AI tutorials and interviews

Peter Yang observed that Claude's limits went from barely usable to basically unlimited. He is building an app with Gemini's audio API to teach himself conversational Japanese, structured as 10 lessons with 10 phrases per lesson. He also said he was using Antigravity for the first time to try Google's new audio APIs and wondered who to give feedback to.

Peter Yang 观察到 Claude 的额度从几乎没法用变成了几乎无限。他正在用 Gemini 的 audio API 做一个教自己日语会话的 app，结构是 10 节课、每节 10 个短语。他还说自己是第一次用 Antigravity 来试 Google 的新 audio API，并问反馈该提给谁。

- [Peter Yang: Claude limits went from barely usable to basically unlimited](https://x.com/petergyang/status/2104066667361992892)
- [Peter Yang: building a Japanese tutor with the Gemini audio API](https://x.com/petergyang/status/2104059554204188833)
- [Peter Yang: trying Antigravity and Google's new audio APIs](https://x.com/petergyang/status/2104003094615052443)

### Thariq: Claude Code at Anthropic

Just about a year ago, Thariq posted one of the first experiments using Claude Code to make videos. He recalled that each one actually took a long time to iterate on with Claude and get right, including pointing out details that were wrong, and said it is crazy how far things have come.

大约一年前，Thariq 发布了他最早用 Claude Code 做视频的实验之一。他回忆说，每一条都要和 Claude 反复迭代很久才能做对，还要不断指出哪里错了；他说现在回头看，进展快得离谱。

- [Thariq: one year of making videos with Claude Code](https://x.com/trq212/status/2103897226154328502)

### Guillermo Rauch: CEO of Vercel

Guillermo Rauch argued that "slop grenades" are not just code and PRs, and that there is a real risk reading itself gets entirely discounted because people are exhausted by low-quality, unverified AI prose. He pointed to a viral thread about a "perf improvement" attributed to a compiler change, where the PR description itself had the AI saying the gain was not from the compiler but from how the algorithms and data structures had changed, implying a similar win could have been attained otherwise. He said he wants AI in the service of understanding the universe and enhancing human cognition and creativity.

Guillermo Rauch 认为，「slop grenades」不只是代码和 PR 的问题，还有真实的风险：因为人们被低质量、未经核实的 AI 文本搞得太疲惫，阅读本身可能会被彻底低估。他举了一个正在病毒式传播的讨论串：一个被归因于编译器改动的「性能提升」，其 PR 描述里 AI 自己说收益并非来自编译器，而是来自算法和数据结构的变化，言下之意是本来也可以拿到类似的收益。他说他希望 AI 服务于理解宇宙，服务于增强人类的认知与创造力。

- [Guillermo Rauch: reject non-understanding](https://x.com/rauchg/status/2103939888513274147)

### Garry Tan: President and CEO of Y Combinator

Garry Tan said his favorite way to fix bugs now is Capy with GStack's /autoplan running on a production issue with GPT-6 medium reasoning.

Garry Tan 说，他现在最喜欢的修 bug 方式，是用 Capy 配合 GStack 的 /autoplan 处理生产问题，模型用 GPT-6 medium reasoning。

- [Garry Tan: fixing bugs with Capy and GStack /autoplan](https://x.com/garrytan/status/2103989902476259702)

### Dan Shipper: CEO of Every

Dan Shipper wrote a novelization of Plato's Protagoras and had Opus 5.5 turn it into a movie, posting scene 1 and then scene 2 as a short film by Opus 5.5.

Dan Shipper 把柏拉图的《Protagoras》改写成了小说，再让 Opus 5.5 把它拍成电影，先后放出了第一幕和第二幕，称第二幕是 Opus 5.5 的短片。

- [Dan Shipper: a novelization of Plato's Protagoras, turned into a movie](https://x.com/danshipper/status/2103850415930708437)
- [Dan Shipper: Protagoras scene 2, a short film by Opus 5.5](https://x.com/danshipper/status/2103894152316645620)

## Podcast

### No Priors: Why Diffusion Will Win AI Inference with Inception Co-Founder and CEO Stefano Ermon

The Takeaway: the next round of AI competition may be decided less by raw model intelligence than by which architecture maps best to inference hardware, and Inception co-founder and CEO Stefano Ermon is betting that diffusion, not the autoregressive stack everyone else scaled, is the answer.

核心结论：下一轮 AI 竞争，可能不再由模型本身有多聪明决定，而是由哪种架构最贴合推理硬件决定。Inception 联合创始人兼 CEO Stefano Ermon 押注的是 diffusion，而不是其他所有人都在扩展的自回归路线。

Stefano Ermon has spent his whole career on generative models. He started at Stanford in 2014, when the field was so unfashionable that he had to justify training a generative model as a way to learn features from unlabeled data. In 2019, with his PhD student Yang Song, he worked out score-based generative models: train a network to denoise images, then build a generation procedure on top of that denoiser. That idea became modern diffusion, and it now powers the best image, video, music and protein models. A 2024 paper from his group matched the quality of an autoregressive model at GPT-2 scale, under a billion parameters, with the same perplexity but text generation roughly 10x faster. That was the cue to found Inception and build commercial diffusion-based language models, the Mercury family.

Stefano Ermon 整个职业生涯都在做生成模型。他 2014 年到斯坦福时，这个方向还很不热门，他不得不把训练生成模型解释成一种从无标注数据里学习特征的方法。2019 年，他和博士生 Yang Song 一起做出了 score-based 生成模型：先训练一个网络给图像去噪，再在这个去噪器之上构建生成过程。这个想法后来成了现代 diffusion，今天最好的图像、视频、音乐和蛋白质模型都建立在它之上。2024 年，他所在的团队在一篇论文里证明，在 GPT-2 这个规模、也就是不到 10 亿参数时，diffusion 模型可以做到和自回归模型同等的质量，perplexity 相同，但文本生成速度大约快 10 倍。这正是他创办 Inception、去构建商业化 diffusion 语言模型 Mercury 系列的起点。

The strategic argument is about inference. Autoregressive models generate one token at a time, so the workload is sequential and memory bound: the hardware spends its time moving weights around the memory hierarchy instead of doing arithmetic. Diffusion processes many tokens at once, so its inference workload looks like training, which is exactly what GPUs do well. "The bitter lesson is that the more parallel solution is the one that is eventually going to win." If reasoning models keep scaling test-time compute and RL post-training keeps bottlenecking on rollouts, then whatever generates tokens faster and cheaper compounds.

他的战略论证围绕推理展开。自回归模型一次只生成一个 token，工作负载是串行的、受限于显存带宽：硬件大部分时间在内存层级之间搬运权重，而不是做算术。Diffusion 并行处理大量 token，推理时的工作负载更像训练，而这正是 GPU 最擅长的。他说：「The bitter lesson is that the more parallel solution is the one that is eventually going to win.」如果推理模型继续扩展 test-time compute，如果 RL 后训练继续卡在 rollout 上，那么谁能更快、更便宜地生成 token，谁的优势就会不断累积。

Inception is about two years old and roughly 50 people, and it serves Mercury in production on its own serving engine rather than vLLM or SGLang. Ermon says the Mercury models match the quality of frontier labs' speed-optimized models while being significantly faster; a voice agent company, OpenCall, moved off custom chips to get the same speed on NVIDIA GPUs with more availability, lower cost and higher quality. He estimates that 20% to 30% of workloads are latency critical, and he expects accuracy per watt and per dollar to dominate as compute stays constrained. Diffusion also brings control: because it generates coarse to fine, you can steer an object with a reward function or constraints from the very start, instead of waiting for the whole output to score it. The catch is maturity. There is no open ecosystem of kernels and serving stacks for this architecture, which is why Inception keeps much of its work in house, and why the company sees its serving engine, evals and customer feedback as part of its moat.

Inception 成立大约两年，团队约 50 人，Mercury 已经在生产环境提供服务，用的不是 vLLM 或 SGLang，而是自研的推理引擎。Ermon 说，Mercury 在质量上能对标前沿实验室的速度优化模型，同时明显更快；语音 agent 公司 OpenCall 从定制芯片切换过来，在 NVIDIA GPU 上拿到了同样的速度，还有更高的可用性、更低的成本和更好的质量。他估计有 20% 到 30% 的工作负载对延迟非常敏感，而在算力持续受限的情况下，每瓦、每美元的智能产出会越来越关键。Diffusion 还带来了控制力：因为它从粗到细地生成，你可以在最开始就用 reward function 或约束去引导对象，而不是等整个输出结束再打分。难点在于成熟度。这个架构还没有现成的 kernel 和推理栈生态，所以 Inception 大量工作要自己做，也因此把推理引擎、evals 和客户反馈都视为自己护城河的一部分。

https://www.youtube.com/@NoPriorsPodcast

## Blog

The validated feed contained no new qualifying blog posts for this run.

本次运行通过验证的 feed 中没有新的合格博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
