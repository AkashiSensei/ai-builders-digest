[English](./ai-digest-2026-09-27-Sun.md) | [中文](../../zh/daily/ai-digest-2026-09-27-Sun.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-09-27-Sun.md)

---

# AI Builders Digest

## Reader's Briefing

**1. Diffusion is Inception's bet against the autoregressive default.** Inception co-founder and CEO Stefano Ermon, a longtime Stanford professor who helped develop the score-based generative models that became modern diffusion, argues that the next phase of AI competition will be decided at inference time rather than training time. Autoregressive models generate one token at a time and leave GPUs memory bound, while diffusion processes many tokens in parallel, which is why he is scaling diffusion-based language models instead of the architecture nearly everyone else bet on. ([No Priors](https://www.youtube.com/@NoPriorsPodcast))

**2. Speed and control are the challenger's wedge.** Inception's Mercury models run in production on a custom serving engine rather than vLLM or SGLang, and Ermon says they match frontier labs' speed-optimized models while being significantly faster; the voice agent company OpenCall moved off custom chips to get the same speed on NVIDIA GPUs with more availability and lower cost. Diffusion's coarse-to-fine generation also lets you steer an output with constraints or a reward function from the start instead of grading a finished result, which Ermon says opens product experiences autoregressive models cannot offer. ([No Priors](https://www.youtube.com/@NoPriorsPodcast))

**3. Reject the slop and defend understanding.** Vercel CEO Guillermo Rauch warns that low-quality, unverified AI prose is not only a code problem: the exhaustion of reading it risks discounting reading itself. He points to a viral thread where a "perf improvement" attributed to a compiler change came with a PR description in which the AI itself said the gain came from changed algorithms and data structures instead, and he wants AI "in the service of understanding the universe and enhancing human cognition and creativity." ([Guillermo Rauch](https://x.com/rauchg/status/2103939888513274147))

**4. Builders are wiring new models into everyday work.** Peter Yang is using Gemini's audio API to build an app that teaches him conversational Japanese in 10 lessons of 10 phrases each, and he tried Google's new audio APIs for the first time inside Antigravity while asking where feedback should go. Y Combinator president and CEO Garry Tan says his favorite way to fix bugs now is Capy with GStack's /autoplan on a production issue using GPT-6 medium reasoning. ([Peter Yang](https://x.com/petergyang/status/2104059554204188833), [Peter Yang](https://x.com/petergyang/status/2104003094615052443), [Garry Tan](https://x.com/garrytan/status/2103989902476259702))

**5. Agentic creation is maturing fast.** Thariq, who works on Claude Code at Anthropic, marked roughly a year since he posted one of the first experiments using Claude Code to make videos, recalling how long each one took to iterate on because he had to point out every detail that was wrong, and calling it crazy how far things have come. Every CEO Dan Shipper wrote a novelization of Plato's Protagoras and had Opus 5.5 turn it into a film, then posted scene 2. ([Thariq](https://x.com/trq212/status/2103897226154328502), [Dan Shipper](https://x.com/danshipper/status/2103850415930708437), [Dan Shipper](https://x.com/danshipper/status/2103894152316645620))

**6. Limits and resets stay part of the product experience.** OpenAI's Thibault Sottiaux, who works on Codex and ChatGPT, said the resets had all propagated and signed off for the weekend. Peter Yang observed that Claude's limits went from barely usable to basically unlimited, a reminder that rate limits are now a competitive surface as much as a billing detail. ([Thibault Sottiaux](https://x.com/thsottiaux/status/2103911959544610829), [Peter Yang](https://x.com/petergyang/status/2104066667361992892))

## X / Twitter

### Thibault Sottiaux: Codex and ChatGPT at OpenAI

Thibault Sottiaux said the resets had all propagated and signed off for the weekend.

- [Thibault Sottiaux: resets all propagated](https://x.com/thsottiaux/status/2103911959544610829)

### Peter Yang: Practical AI tutorials and interviews

Peter Yang observed that Claude's limits went from barely usable to basically unlimited. He is building an app with Gemini's audio API to teach himself conversational Japanese, structured as 10 lessons with 10 phrases per lesson. He also said he was using Antigravity for the first time to try Google's new audio APIs and wondered who to give feedback to.

- [Peter Yang: Claude limits went from barely usable to basically unlimited](https://x.com/petergyang/status/2104066667361992892)
- [Peter Yang: building a Japanese tutor with the Gemini audio API](https://x.com/petergyang/status/2104059554204188833)
- [Peter Yang: trying Antigravity and Google's new audio APIs](https://x.com/petergyang/status/2104003094615052443)

### Thariq: Claude Code at Anthropic

Just about a year ago, Thariq posted one of the first experiments using Claude Code to make videos. He recalled that each one actually took a long time to iterate on with Claude and get right, including pointing out details that were wrong, and said it is crazy how far things have come.

- [Thariq: one year of making videos with Claude Code](https://x.com/trq212/status/2103897226154328502)

### Guillermo Rauch: CEO of Vercel

Guillermo Rauch argued that "slop grenades" are not just code and PRs, and that there is a real risk reading itself gets entirely discounted because people are exhausted by low-quality, unverified AI prose. He pointed to a viral thread about a "perf improvement" attributed to a compiler change, where the PR description itself had the AI saying the gain was not from the compiler but from how the algorithms and data structures had changed, implying a similar win could have been attained otherwise. He said he wants AI in the service of understanding the universe and enhancing human cognition and creativity.

- [Guillermo Rauch: reject non-understanding](https://x.com/rauchg/status/2103939888513274147)

### Garry Tan: President and CEO of Y Combinator

Garry Tan said his favorite way to fix bugs now is Capy with GStack's /autoplan running on a production issue with GPT-6 medium reasoning.

- [Garry Tan: fixing bugs with Capy and GStack /autoplan](https://x.com/garrytan/status/2103989902476259702)

### Dan Shipper: CEO of Every

Dan Shipper wrote a novelization of Plato's Protagoras and had Opus 5.5 turn it into a movie, posting scene 1 and then scene 2 as a short film by Opus 5.5.

- [Dan Shipper: a novelization of Plato's Protagoras, turned into a movie](https://x.com/danshipper/status/2103850415930708437)
- [Dan Shipper: Protagoras scene 2, a short film by Opus 5.5](https://x.com/danshipper/status/2103894152316645620)

## Podcast

### No Priors: Why Diffusion Will Win AI Inference with Inception Co-Founder and CEO Stefano Ermon

The Takeaway: the next round of AI competition may be decided less by raw model intelligence than by which architecture maps best to inference hardware, and Inception co-founder and CEO Stefano Ermon is betting that diffusion, not the autoregressive stack everyone else scaled, is the answer.

Stefano Ermon has spent his whole career on generative models. He started at Stanford in 2014, when the field was so unfashionable that he had to justify training a generative model as a way to learn features from unlabeled data. In 2019, with his PhD student Yang Song, he worked out score-based generative models: train a network to denoise images, then build a generation procedure on top of that denoiser. That idea became modern diffusion, and it now powers the best image, video, music and protein models. A 2024 paper from his group matched the quality of an autoregressive model at GPT-2 scale, under a billion parameters, with the same perplexity but text generation roughly 10x faster. That was the cue to found Inception and build commercial diffusion-based language models, the Mercury family.

The strategic argument is about inference. Autoregressive models generate one token at a time, so the workload is sequential and memory bound: the hardware spends its time moving weights around the memory hierarchy instead of doing arithmetic. Diffusion processes many tokens at once, so its inference workload looks like training, which is exactly what GPUs do well. "The bitter lesson is that the more parallel solution is the one that is eventually going to win." If reasoning models keep scaling test-time compute and RL post-training keeps bottlenecking on rollouts, then whatever generates tokens faster and cheaper compounds.

Inception is about two years old and roughly 50 people, and it serves Mercury in production on its own serving engine rather than vLLM or SGLang. Ermon says the Mercury models match the quality of frontier labs' speed-optimized models while being significantly faster; a voice agent company, OpenCall, moved off custom chips to get the same speed on NVIDIA GPUs with more availability, lower cost and higher quality. He estimates that 20% to 30% of workloads are latency critical, and he expects accuracy per watt and per dollar to dominate as compute stays constrained. Diffusion also brings control: because it generates coarse to fine, you can steer an object with a reward function or constraints from the very start, instead of waiting for the whole output to score it. The catch is maturity. There is no open ecosystem of kernels and serving stacks for this architecture, which is why Inception keeps much of its work in house, and why the company sees its serving engine, evals and customer feedback as part of its moat.

https://www.youtube.com/@NoPriorsPodcast

## Blog

The validated feed contained no new qualifying blog posts for this run.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
