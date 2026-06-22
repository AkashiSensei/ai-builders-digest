[English](../../en/daily/ai-digest-2026-06-23-Tue.md) | [中文](../../zh/daily/ai-digest-2026-06-23-Tue.md) | [Bilingual](./ai-digest-2026-06-23-Tue.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

Agent infrastructure is becoming a shared product layer. Logan Kilpatrick described Google's Antigravity harness as more than an IDE: a reusable agent system that can power Search, Gemini, Cloud, AI Studio, CLI, SDK, and managed API experiences.
Agent 基础设施正在变成共享产品层。Logan Kilpatrick 把 Google 的 Antigravity harness 描述为不只是 IDE，而是一套可复用的 agent 系统，可以支撑 Search、Gemini、Cloud、AI Studio、CLI、SDK 和托管 API 体验。

Builder workflows are shifting toward token abundance, not token thrift. Thibault Sottiaux asked Codex users how they think about banked usage resets, while Peter Yang framed unlimited-token plans as a psychological challenge for people trained to conserve resources.
Builder 工作流正在从 token 节省转向 token 充裕。Thibault Sottiaux 询问 Codex 用户如何看待可累积的 usage resets，而 Peter Yang 把 unlimited-token plan 描述成一种心理挑战：习惯节省资源的人会觉得不把额度用完就是浪费。

The "model eats the harness" idea is now practical strategy. Logan argued that what people still call a model is becoming a larger system of weights, tools, hosted execution, search, code execution, and agent loops.
“model eats the harness” 已经从概念变成产品战略。Logan 认为，人们仍然称为 model 的东西，正在变成由 weights、tools、hosted execution、search、code execution 和 agent loop 组成的更大系统。

Personal software is getting more plausible. Ryo Lu built a textured Books app in Cursor mobile, Google AI Studio has produced hundreds of thousands of Android apps, and Garry Tan argued that personal and company context remain the real unlock around AGI.
个人软件正在变得更可行。Ryo Lu 在 Cursor mobile 里做了带木质书架质感的 Books app，Google AI Studio 已经生成数十万个 Android app，Garry Tan 则强调 AGI 旁边真正的 unlock 仍然是个人和公司 context。

Agent-heavy software creates new control-plane demand. Aaron Levie argued that agents will use business software far more than humans do, which raises the value of guardrails, authoritative data, logging, auditing, and model routing.
Agent-heavy 软件会催生新的控制平面需求。Aaron Levie 认为 agent 使用商业软件的频率会远高于人类，因此 guardrails、权威数据源、logging、auditing 和 model routing 的价值都会上升。

## X / Twitter

Swyx's most concrete builder signal today was outside pure AI tooling: he said Corgi is winning unusually strong greenfield market share in insurance for the New Media Lab setup, with a real estate broker recommending it as the default choice. The useful read is that even in old-line categories, a sharp wedge plus strong NPS can change default buying behavior quickly.

Swyx 今天最具体的 builder 信号不在纯 AI 工具里：他提到自己为 New Media Lab 采购保险时，Corgi 的 NPS 和绿地市场占有率异常高，连房地产经纪人都把它当作默认推荐。可迁移的判断是：即使在保险这种传统行业，一个清晰 wedge 加强 NPS 也能很快改变购买默认项。
https://x.com/swyx/status/2068924451887129055

OpenAI Codex builder Thibault Sottiaux asked Codex users what the app should improve and what still feels "not delightful." He also asked how people think about banked usage resets, which is a small but telling product signal: Codex usage is becoming something users budget, hoard, or spend intentionally, rather than a background quota they ignore.

OpenAI Codex builder Thibault Sottiaux 询问 Codex 用户希望 App 改进什么、哪些地方还“不够 delight”。他也问用户如何看待可累积的 usage resets，这是一个小但有意思的产品信号：Codex 使用量正在变成用户会预算、囤积或主动消耗的东西，而不是被忽略的后台配额。
https://x.com/thsottiaux/status/2068736857312198928
https://x.com/thsottiaux/status/2068792010715324444
https://x.com/thsottiaux/status/2068792061265121316

Peter Yang connected two practical AI workflow themes. First, he described the psychology of "tokenmaxxing": unlimited-token plans make him feel like he is wasting value if he does not hit the limit, even though he grew up with a scarcity mindset. Second, he amplified a video-agent lesson from liu8in: agents still lack visual intelligence, so HTML, CSS, and JavaScript become a native language for agentic video composition.

Peter Yang 连起了两个实际 AI workflow 主题。第一，他描述了“tokenmaxxing”的心理：unlimited-token plan 会让他觉得如果不把额度用到上限就是浪费，哪怕他成长过程中形成的是节省资源的心态。第二，他转发了 liu8in 关于 video agent 的经验：agent 仍然缺乏视觉智能，所以 HTML、CSS 和 JavaScript 会变成 agentic video composition 的原生语言。
https://x.com/petergyang/status/2068874249167884544
https://x.com/petergyang/status/2068755908319236338

Linear product head Nan Yu argued that quality requires an irrational level of commitment and self-belief, especially when controlling the system end to end instead of using common frameworks. He also pushed back on email-formatting fixes that do not change default behavior. The through line is product taste as operational stubbornness: defaults matter, and quality often means owning details other teams normalize away.

Linear 产品负责人 Nan Yu 认为，质量需要一种非理性的投入和自信，尤其是在选择端到端控制系统，而不是依赖通用框架时。他也反驳了那些不改变默认行为的邮件格式修复方案。贯穿其中的是一种产品 taste：默认值很重要，而质量往往意味着拥有别人习以为常地放弃的细节。
https://x.com/thenanyu/status/2068778750800531640
https://x.com/thenanyu/status/2068668365623710018

Vercel CEO Guillermo Rauch said the team optimized v0 performance across painting, layout, WebGPU shaders, blocking scripts, and every frame, with lessons to be shared later. He also captured the psychology of coding agents in one line: they can "squeeze every ounce of IKEA effect out of you" if you let them. The point is that agent-built software still creates ownership because the human remains deeply involved in shaping and accepting the result.

Vercel CEO Guillermo Rauch 说，团队优化了 v0 performance，覆盖 painting、layout、WebGPU shaders、blocking scripts 和每一帧，之后会分享经验。他也用一句话概括了 coding agent 的心理效应：如果你允许，它们会榨出你所有的 IKEA effect。重点是，即使软件由 agent 辅助生成，人类仍然因为持续塑形和验收结果而产生强烈 ownership。
https://x.com/rauchg/status/2068838709517336756
https://x.com/rauchg/status/2068778558672273422

Box CEO Aaron Levie pointed to two architecture shifts. He highlighted Sakana's Fugu as a single API that routes work across expert models, handles selection, delegation, verification, and synthesis, and hides multi-agent complexity from developers. He also argued that agents will use software 100 times more than people, making guardrails, authoritative systems of record, logs, audits, collaboration paths, and headless business models more valuable.

Box CEO Aaron Levie 指出了两个架构变化。他提到 Sakana 的 Fugu 是一个单一 API，可以在多个 expert model 之间路由任务，自动处理 model selection、delegation、verification 和 synthesis，并把 multi-agent 复杂度隐藏在开发者代码之外。他也认为 agent 使用软件的频率会是人的 100 倍，因此 guardrails、权威系统、logs、audits、协作路径和 headless 商业模式都会更重要。
https://x.com/levie/status/2068917230570795178
https://x.com/levie/status/2068851573175021864

Cursor designer Ryo Lu built "Books" in ryOS because he missed wooden shelves, starting in Cursor mobile and then hand-tuning animations and textures. It works with any epub and syncs progress with a ryOS account. The useful product signal is not just vibe coding, but the combination of agent-built scaffolding and manual sensory tuning.

Cursor 设计师 Ryo Lu 因为想念木质书架，在 ryOS 里做了 Books。他从 Cursor mobile 开始搭建，然后手工调整动画和纹理直到感觉对；它支持任意 epub，并通过 ryOS account 同步进度。这里有用的产品信号不只是 vibe coding，而是 agent 生成脚手架之后仍然需要人工的感官调校。
https://x.com/ryolu_/status/2068923971136098633
https://x.com/ryolu_/status/2068924375341179347

YC president Garry Tan said the dawn of usable AGI makes personal and company brains more important, not less. His framing is concise: AGI gives you intelligence, but you still need to collect your own context to unlock it. That is why he made and open sourced GBrain.

YC 总裁 Garry Tan 说，在 usable AGI 刚出现的阶段，personal brain 和 company brain 反而更重要。他的表述很简洁：AGI 给你 intelligence，但你仍然需要收集自己的 context，才能得到真正的 unlock。这也是他做并开源 GBrain 的原因。
https://x.com/garrytan/status/2068701356358308112
https://x.com/garrytan/status/2068701357696323769

Zara Zhang's anti-slop rule was blunt: for high-quality AI writing, design, or similar work, the input context often needs to be longer than the output, sometimes 3 to 5 times longer. She clarified that she means context, not just prompt. The operating lesson is that quality comes from rich supplied material, not from asking a short instruction to generate a polished artifact from nothing.

Zara Zhang 的 anti-slop 规则很直接：要让 AI 在写作、设计等工作里产出高质量结果，输入 context 往往要比输出更长，有时需要达到输出的 3 到 5 倍。她进一步澄清自己说的是 context，而不只是 prompt。操作层面的经验是：质量来自丰富材料，而不是指望一个很短的指令凭空生成精致作品。
https://x.com/zarazhangrui/status/2068923768500793603
https://x.com/zarazhangrui/status/2068964055235321954

FPV Ventures partner Nikunj Kothari mostly posted personal notes today, but one work-adjacent pattern was useful: he sees interesting projects on X, plays with them, forks them, develops ideas, and then messages the founder. It is a lightweight investor-builder workflow built around trying the thing before opening the conversation.

FPV Ventures partner Nikunj Kothari 今天主要是个人内容，但有一个和工作相关的模式值得保留：他会在 X 上看到有意思的项目，亲自试用、fork、产生想法，然后再去联系 founder。这是一种轻量的 investor-builder workflow：先试东西，再开启对话。
https://x.com/nikunj/status/2068714024934740476

Peter Steinberger said OpenClaw's hype cooled down, but the team improved quality, grew the team, created a non-profit, and is now having its strongest week so far. He also said he was skeptical about multi-model routing and felt that skepticism had been validated. Together, the posts point to two agent-product concerns: durability after hype and whether model-routing abstractions actually hold up in practice.

Peter Steinberger 说 OpenClaw 的热度降下来了，但团队提高了质量、扩充了团队、建立了 non-profit，而本周是目前最强的一周。他也说自己曾经怀疑 multi-model routing，并觉得这种怀疑得到了验证。合起来看，这是两个 agent 产品问题：热度之后能否持续，以及 model-routing 抽象在实践中是否真的站得住。
https://x.com/steipete/status/2068961217524490739
https://x.com/steipete/status/2068960117253632160
https://x.com/steipete/status/2068965200343224367

## Podcast

### Training Data: Google DeepMind's Logan Kilpatrick: Why the Model Eats the Harness

The Takeaway: Logan Kilpatrick's core argument is that the model is no longer just weights. It is becoming a full system of tools, hosted execution, search, code execution, containers, and agent harnesses, and that changes where builders should look for durable advantage.

The Takeaway：Logan Kilpatrick 的核心观点是，model 已经不再只是 weights。它正在变成由 tools、hosted execution、search、code execution、containers 和 agent harness 组成的完整系统，这会改变 builder 对长期优势来源的判断。

Kilpatrick, who runs Google AI Studio and the Gemini API, described Antigravity as an ecosystem rather than a single coding product: IDE, web agent experience, CLI, SDK, managed API path, and a harness that can show up inside Search, Gemini, Cloud, and AI Studio. His view is that coding proved to be the general-purpose agent harness first, then the harness gets specialized for different product contexts.

Kilpatrick 负责 Google AI Studio 和 Gemini API。他把 Antigravity 描述为一个生态，而不是单一 coding 产品：IDE、web agent experience、CLI、SDK、managed API path，以及可以出现在 Search、Gemini、Cloud 和 AI Studio 里的 harness。他认为 coding 首先证明了自己是 general-purpose agent harness，然后这个 harness 会针对不同产品场景做 specialized。

The most useful strategic line was that "success for Google probably doesn't look like maximizing eyeball time." In his framing, the company has to move toward maximizing customer outcomes, even if agents reduce some direct human product usage. He still thinks most Google products are only at the "crawl" stage of agentic behavior because billion-user products require stewardship and users want to stay in the driver's seat.

最有用的战略表述是：“success for Google probably doesn't look like maximizing eyeball time.” 在他的框架里，即使 agent 可能减少某些直接的人类产品使用，Google 也需要转向最大化 customer outcomes。他同时认为，大多数 Google 产品的 agentic 程度仍处于 “crawl” 阶段，因为十亿级用户产品需要 stewardship，而且用户仍然希望自己在驾驶位上。

On coding, Kilpatrick said Google needed real product usage to make progress on long-running developer tasks, which is why Antigravity matters internally. He also argued that personal software is already real: AI Studio users built about 350,000 Android apps in a week, many of them apps that probably would not have existed before.

谈到 coding，Kilpatrick 说 Google 需要真实产品使用，才能推动 long-running developer task 上的进步，这也是 Antigravity 在内部重要的原因。他还认为 personal software 已经是真实趋势：AI Studio 用户一周内做出了约 35 万个 Android app，其中很多 app 原本大概率不会存在。

His "model eats the harness" thesis is the sharpest builder warning. Harness alpha may be temporary because the model system keeps absorbing scaffolding that used to live outside it. That does not kill startups, in his view. It shifts the opportunity toward focus, domain expertise, customer knowledge, and willingness to take risks that large labs cannot.

他的 “model eats the harness” 是最尖锐的 builder 提醒。Harness alpha 可能是暂时的，因为 model system 会不断吸收过去在外部 scaffolding 中的能力。但在他看来，这不会杀死 startup。机会会转向 focus、domain expertise、customer knowledge，以及大公司无法承担的风险偏好。
https://www.youtube.com/watch?v=cMAs8z2dehs

## Blog

No new blog posts in today's feed.

今天的 feed 没有新 blog 文章。
