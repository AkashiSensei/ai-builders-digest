[English](../../en/daily/ai-digest-2026-09-19-Sat.md) | [中文](../../zh/daily/ai-digest-2026-09-19-Sat.md) | [Bilingual](./ai-digest-2026-09-19-Sat.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. Diffusion wants to break the autoregressive default.** Inception co-founder and CEO Stefano Ermon, a longtime Stanford professor known as one of the fathers of diffusion, argues the next efficiency jump in AI will come not from chips but from a more parallel way of generating text. He says Inception's Mercury models match the speed-optimized frontier models on benchmarks while running significantly faster, and that a voice-agent customer switched to Mercury to get custom-chip speed on ordinary NVIDIA GPUs. His thesis is that inference is where the economics get decided, and that "the more parallel solution is the one that is eventually going to win."

**1. Diffusion 想打破自回归的默认路线。** Inception 联合创始人兼 CEO Stefano Ermon 长期在 Stanford 任教，被称为 diffusion 之父之一。他认为 AI 下一轮效率跃升不会来自芯片，而来自一种更并行的文本生成方式。他说 Inception 的 Mercury 模型在 benchmark 上能追上各家的速度优化版前沿模型，同时明显更快，并有一家语音 agent 客户从定制芯片切换到 Mercury，在普通 NVIDIA GPU 上就能拿到同样的速度。他的判断是：推理才是决定经济性的地方，「更并行的方案最终会赢」。

**2. Claude Code signs on to AGENTS.md.** Thariq, who works on Claude Code at Anthropic, announced that starting in version 2.1.277, Claude Code will check for and use AGENTS.md when a folder has no CLAUDE.md, with the behavior toggleable in /config. The support is built on Claude Code mods, an upcoming way to customize the Claude Code harness; it ships as a built-in mod, and users will be able to build custom versions of project instructions themselves. The feature is small, but the signal is not: agent tools are converging on shared instruction files instead of each inventing its own.

**2. Claude Code 接入 AGENTS.md。** 在 Anthropic 负责 Claude Code 的 Thariq 宣布，从 2.1.277 版本开始，如果一个文件夹里没有 CLAUDE.md，Claude Code 会检查并使用 AGENTS.md，这个行为可以在 /config 里切换。他说这项支持基于 Claude Code mods，也就是即将推出的 Claude Code harness 定制方式；它是内置 mod，但用户之后也可以自己构建自定义的项目指令。功能不大，信号不小：agent 工具正在向共享的指令文件收敛，而不是各做一套。

**3. Jev and the cheap, fast inference wave.** Box CEO Aaron Levie showed a Box plus Jev demo that pulls an incident report, asks whether it is customer-facing and how severe it is, files it into escalate, monitor, or review folders, and writes a metadata template with the result, all nearly instantly and at almost no cost. Vercel CEO Guillermo Rauch said open models hit 78.4% of token volume on Vercel AI Gateway that day versus 21.6% closed, with Moonshot AI and DeepSeek at #3 and #4, and that adding Z.ai would push their combined inference spend past OpenAI at #2. FPV Ventures partner Nikunj Kothari built Jevable to catalog Jev demos from X, and highlighted one that scored 3,000 kid snacks against multiple criteria in 28 seconds for $0.11. The release cadence is not slowing: OpenAI's Thibault Sottiaux says he has been working on the keynote with Romain Huet and Sam Altman, that there is so much good stuff it is hard to explain, and that some announcements will land next week.

**3. Jev 与便宜、快速的推理浪潮。** Box CEO Aaron Levie 展示了一个 Box 加 Jev 的 demo：从 Box 里取出事故报告，判断它是否面向客户、严重程度如何，然后把文件放进 escalate、monitor 或 review 文件夹，并写入一个 metadata template，整个过程几乎瞬时且成本极低。Vercel CEO Guillermo Rauch 说，当天 Vercel AI Gateway 上开放模型的 token 占比可能创下纪录，达到 78.4%，闭源模型为 21.6%；按花费看，Moonshot AI 和 DeepSeek 排在第 3 和第 4，再加上 Z.ai，三者合计的推理花费会超过排在第 2 的 OpenAI。FPV Ventures 合伙人 Nikunj Kothari 做了 Jevable，用来收录 X 上的 Jev demo，并特别提到 Jev 在 28 秒内、花 0.11 美元给 3,000 种儿童零食按多个标准打分。发布节奏也没有慢下来：OpenAI 的 Thibault Sottiaux 说，他一直在和 Romain Huet、Sam Altman 一起准备 keynote，好东西多到很难讲清楚，其中一些下周就会发布。

**4. Personal agents get real, and support lines are not ready.** Peter Yang, who makes practical AI tutorials and interviews, calls Meta's Muse the best personal agent he has tried and says it saved him more than $800 a year on cable and phone bills, which he calls insane value for a free agent. His walkthrough covers 10 use cases, including a personalized morning news feed, a habit tracker, and letting Muse call customer support to negotiate bills; a follow-up transcript shows it negotiating $288 in annual savings on his Comcast bill. His conclusion is a warning: most companies' customer support lines are not ready for agents.

**4. 个人 agent 走向实用，客服系统还没准备好。** 做实用 AI 教程和访谈的 Peter Yang 称 Meta 的 Muse 是他试过最好的个人 agent，说它一年帮自己在宽带和电话账单上省了 800 多美元，并认为对一个免费 agent 来说这是难以想象的价值。他的视频讲了 10 个用法，包括个性化晨间新闻、习惯追踪，以及让 Muse 打客服电话帮忙谈价格；随后他晒出一段通话记录，Muse 把他 Comcast 账单每年砍掉了 288 美元。他的结论更像一个警告：大多数公司的客服热线还没有为 agent 做好准备。

**5. Agents move from sessions to teammates.** Peter Steinberger, who works on OpenClaw and OpenAI, describes roboclaw running the team server, living on Discord, talking with gpt-live, and tracking every session it juggles, so the team can ask about current and past context during meetings. He likes having a teammate hijack his sessions to "deslop" them before a pull request lands, and suggests reorganizing sessions from the home sidebar. He adds that CUA works across these surfaces, so an agent can be more efficient than working from screenshots alone.

**5. Agent 从 session 走向团队成员。** 在 OpenClaw 和 OpenAI 工作的 Peter Steinberger 说，roboclaw 最酷的地方是它运行团队服务器、常驻 Discord、和 gpt-live 对话，并了解自己正在处理的所有 session，所以团队开会时可以直接问当前和历史 session 的上下文。他喜欢有同事在他发 PR 之前「劫持」他的 session 去 deslop，并给出一个技巧：打开 home sidebar，让你的 claw 重新整理 session。他还说 CUA 在这些场景里都能用，所以 agent 可以比只靠截图更高效。

**6. Craft is the counterweight to slop.** Builder Zara Zhang writes that it is hard not to create slop when most of what you consume is slop, and that fixing output starts with fixing input. Every CEO Dan Shipper makes a related point, defending jackcheng's demo against a "fake" accusation: he calls the work real and an interesting peek into the future, and says the accusation is not a good look.

**6. 在 slop 泛滥的世界里，craft 才是解药。** Builder Zara Zhang 写道，当你消费的大部分内容都是 slop 时，很难不生产 slop；要修输出，先修输入。Every CEO Dan Shipper 从另一个角度说同一件事：他为 jackcheng 的 demo 被指「造假」鸣不平，说这份作品既真实，又是一次对未来的有趣窥视，并认为这种指责很不好看。

## X / Twitter

### Thibault Sottiaux: Codex and ChatGPT, OpenAI

Thibault Sottiaux says he was working on the keynote with Romain Huet and Sam Altman, and that most of the fun was figuring out how to explain everything because there is so much good stuff arriving in quick succession. He says some things will land next week so people are not kept waiting too long, and that he is excited to show what the team has been building and how it comes together over the coming months.

Thibault Sottiaux 说，他一直在和 Romain Huet、Sam Altman 一起准备 keynote，最有意思的部分是想办法把一切都讲清楚，因为好东西太多、来得又太密集。他说其中一些下周就会发布，不会让大家等太久，并说他很期待展示团队一直在做的东西，以及未来几个月它们会如何整合到一起。

- [Thibault Sottiaux: keynote work with Romain Huet and Sam Altman / 与 Romain Huet、Sam Altman 一起准备 keynote](https://x.com/thsottiaux/status/2101157729037586694)

### Peter Yang: Practical AI tutorials and interviews for busy people

Peter Yang calls Meta's Muse the best personal agent he has tried, saying it saved him more than $800 a year on his cable and phone bills and calling that insane value for a free AI agent. His new video walks through 10 favorite use cases, including a personalized morning news feed, a habit tracker, and getting Muse to call customer support and negotiate bills. He follows up with a transcript of Muse negotiating $288 in annual savings on his Comcast bill, argues most companies' customer support lines are not ready for agents, and says he can see Muse becoming Meta's next billion-user app.

Peter Yang 称 Meta 的 Muse 是他试过最好的个人 agent，说它一年帮他在宽带和电话账单上省了 800 多美元，并认为对一个免费 AI agent 来说这是难以想象的价值。他的新视频讲了 10 个最喜欢的用法，包括个性化晨间新闻、习惯追踪，以及让 Muse 打客服电话帮忙谈账单。他随后晒出 Muse 为他 Comcast 账单每年省下 288 美元的记录，认为大多数公司的客服热线还没有为 agent 做好准备，并说他能看到 Muse 成为 Meta 的下一个十亿用户级应用。

- [Peter Yang: Meta's Muse is the best personal agent he has tried / Meta 的 Muse 是他试过最好的个人 agent](https://x.com/petergyang/status/2101033599319613533)
- [Peter Yang: Muse negotiated $288 off his Comcast bill / Muse 帮他把 Comcast 账单砍掉 288 美元](https://x.com/petergyang/status/2101083891507593576)

### Thariq: Claude Code, Anthropic

Thariq announced that Claude Code is adding support for AGENTS.md: starting in version 2.1.277, if there is no CLAUDE.md in a folder, Claude will check for and use AGENTS.md, and the behavior can be toggled in /config. He explains that the support is built off Claude Code mods, an upcoming way to customize the Claude Code harness; it is a built-in mod, but users will be able to build custom versions of project instructions. He also links the source for the mod.

Thariq 宣布 Claude Code 开始支持 AGENTS.md：从 2.1.277 版本开始，如果一个文件夹里没有 CLAUDE.md，Claude 会检查并使用 AGENTS.md，这个行为可以在 /config 里切换。他解释说，这项支持基于 Claude Code mods，也就是即将推出的 Claude Code harness 定制方式；它是内置 mod，但用户之后也可以自己构建自定义的项目指令。他还给出了这个 mod 的源码链接。

- [Thariq: Claude Code adds AGENTS.md support in 2.1.277 / Claude Code 在 2.1.277 中加入 AGENTS.md 支持](https://x.com/trq212/status/2101009392611278961)
- [Thariq: AGENTS.md is built on Claude Code mods / AGENTS.md 基于 Claude Code mods 构建](https://x.com/trq212/status/2101009393731223817)
- [Thariq: source for the mod / 这个 mod 的源码](https://x.com/trq212/status/2101009395052343462)

### Guillermo Rauch: CEO, Vercel

Guillermo Rauch says today may be a record day for the share of token volume going to open models on Vercel AI Gateway, at 78.4% open versus 21.6% closed. While spend usually tells a different story, he says Moonshot AI and DeepSeek were #3 and #4 that day, and that adding Z.ai would push their combined inference spend past OpenAI at #2; he notes this is inference spend across providers, mostly in the US, not revenue going to the open-weight labs. He also calls the data and anecdata on Jev's adoption shocking, reads it as demand downstream of an "AI is too expensive or slow" zeitgeist, and says he knows what he is doing this weekend: trying Jev on Vercel.

Guillermo Rauch 说，当天 Vercel AI Gateway 上开放模型的 token 占比可能创下纪录，达到 78.4%，闭源模型为 21.6%。虽然花费通常会讲出另一个故事，但他说当天 Moonshot AI 和 DeepSeek 排在第 3 和第 4，再加上 Z.ai，三者合计的推理花费会超过排在第 2 的 OpenAI；他同时说明，这是各家 provider 上的推理花费，主要发生在美国，并不是直接流向开放权重实验室的收入。他还说 Jev 的采用数据和一些经验观察都令人震惊，认为这背后是「AI 太贵、太慢」的情绪，并表示这个周末他要在 Vercel 上试试 Jev。

- [Guillermo Rauch: open models at 78.4% of token volume / 开放模型占到 token 量的 78.4%](https://x.com/rauchg/status/2101186741042663579)
- [Guillermo Rauch: the data on Jev's adoption is shocking / Jev 的采用数据令人震惊](https://x.com/rauchg/status/2101079472732848510)
- [Guillermo Rauch: trying Jev on Vercel this weekend / 这个周末要在 Vercel 上试试 Jev](https://x.com/rauchg/status/2101116978677285241)

### Aaron Levie: CEO, Box

Aaron Levie argues Jev will be useful for agents making split-second decisions in workflows, data classification, judgment calls, and hundreds of other enterprise use cases. He walks through a Box plus Jev demo that pulls an incident report from Box, asks whether it is customer-facing and how severe it is, moves the file into escalate, monitor, or review folders, and sets a metadata template instance with the result, all nearly instantly and at almost no cost. He points to insurance claims, contract management, loan processing, security reviews, and customer log analysis as the same pattern.

Aaron Levie 认为，Jev 对 agent 很有用，可以让它们在 workflow、数据分类、判断决策以及成百上千种企业场景里做瞬间决定。他展示了一个 Box 加 Jev 的 demo：从 Box 里取出事故报告，判断它是否面向客户、严重程度如何，然后把文件放进 escalate、monitor 或 review 文件夹，并写入一个 metadata template 实例，整个过程几乎瞬时且成本极低。他指出，保险理赔、合同管理、贷款处理、安全审查和客户日志分析都是同一类机会。

- [Aaron Levie: a Box and Jev demo for instant enterprise decisions / 一个用 Box 加 Jev 做瞬时企业决策的 demo](https://x.com/levie/status/2101007708044574906)

### Zara Zhang

Zara Zhang argues it is hard not to create slop when most of what you consume is slop. To fix output, she writes, you first have to fix input.

Zara Zhang 写道，当你消费的大部分内容都是 slop 时，很难不生产 slop。要修输出，先修输入。

- [Zara Zhang: to fix output, first fix input / 要修输出，先修输入](https://x.com/zarazhangrui/status/2101123389528457596)

### Nikunj Kothari: Partner, FPV Ventures

Nikunj Kothari built Jevable, a site that showcases the Jev demos being posted on X, filterable by category, with a plus button so people can add their own projects. He also highlights Jev scoring 3,000 kid snacks against multiple criteria in 28 seconds for $0.11.

Nikunj Kothari 做了 Jevable，一个收录 X 上 Jev demo 的网站，可以按类别筛选，还有加号按钮让用户加入自己的项目。他还特别提到，Jev 在 28 秒内、花 0.11 美元给 3,000 种儿童零食按多个标准打分。

- [Nikunj Kothari: Jevable catalogs Jev demos from X / Jevable 收录 X 上的 Jev demo](https://x.com/nikunj/status/2101077053567332618)
- [Nikunj Kothari: 3,000 snacks scored in 28 seconds for $0.11 / 28 秒、0.11 美元给 3,000 种零食打分](https://x.com/nikunj/status/2101006585481073093)

### Peter Steinberger: OpenClaw and OpenAI

Peter Steinberger says the coolest part of roboclaw is that it runs the team server, is live on Discord, talks with gpt-live, and knows about all the sessions it is juggling, so the team can ask about context from current and past sessions while in meetings. He likes having a teammate hijack his sessions to "deslop" them before a pull request lands, and shares a tip: open the home sidebar and ask your claw to reorganize your sessions. He adds that CUA works on all of these too, so an agent can be more efficient than working from screenshots alone.

Peter Steinberger 说，roboclaw 最酷的地方是它运行团队服务器、常驻 Discord、和 gpt-live 对话，并了解自己正在处理的所有 session，所以团队开会时可以直接问当前和历史 session 的上下文。他喜欢有同事在他发 PR 之前「劫持」他的 session 去 deslop，并给出一个技巧：打开 home sidebar，让你的 claw 重新整理 session。他还说 CUA 在这些场景里都能用，所以 agent 可以比只靠截图更高效。

- [Peter Steinberger: roboclaw runs the team server and knows its sessions / roboclaw 运行团队服务器并了解自己的 session](https://x.com/steipete/status/2101141707375227372)
- [Peter Steinberger: teammates deslop sessions before a PR lands / 同事会在 PR 落地前给 session 做 deslop](https://x.com/steipete/status/2101139037801283997)
- [Peter Steinberger: CUA works across these surfaces / CUA 在这些场景里都能用](https://x.com/steipete/status/2101115690719809873)

### Dan Shipper: CEO, Every

Dan Shipper acknowledges there are over-the-top AI demos on X, but says it is sad to see someone call jackcheng's work "fake." He calls jackcheng one of the smartest, most intellectually honest, and craft-focused people he has worked with, says the demo is both real and an interesting peek into the future, and concludes that the accusation is not a good look.

Dan Shipper 承认 X 上确实有夸张的 AI demo，但他说看到有人把 jackcheng 的作品说成「造假」让人很难过。他称 jackcheng 是他共事过的人里最聪明、最诚实、最注重 craft 的人之一，说这个 demo 既真实，也是一次对未来的有趣窥视，并认为这种指责很不好看。

- [Dan Shipper: defending jackcheng's demo against a "fake" claim / 为 jackcheng 的 demo 反驳「造假」的说法](https://x.com/danshipper/status/2101155521818476693)

## Podcast

### No Priors: Why Diffusion Will Win AI Inference with Inception Co-Founder and CEO Stefano Ermon

The Takeaway: the next big efficiency win in AI may come not from better chips but from a different way of generating text, and the company betting on it thinks parallelism is destiny.

核心结论：AI 下一轮大的效率提升，可能不来自更好的芯片，而来自一种不同的文本生成方式；押注这条路线的那家公司认为，并行就是宿命。

Stefano Ermon has spent his career on generative models. He was at Stanford when he and his student Yang Song developed the score-based approach that became diffusion, and he now runs Inception, a roughly two-year-old, 50-person company building diffusion-based language models. His argument is that the industry has been optimizing an inherently serial process. Autoregressive models emit one token at a time; diffusion models start from noise and refine the whole output in parallel, the way image and video models already work. Ermon calls it coarse-to-fine generation, and says it makes models easier to steer: instead of waiting for a finished answer to score it, you can nudge the generation toward a constraint or a reward from the start.

Stefano Ermon 的整个职业生涯都在做生成模型。他在 Stanford 期间和博士生 Yang Song 一起提出了后来演变成 diffusion 的 score based approach，如今他经营 Inception，一家大约成立两年、约 50 人的公司，做的是基于 diffusion 的语言模型。他的论点是，这个行业一直在优化一个天生串行的过程。自回归模型一次只生成一个 token；diffusion 模型从噪声出发，并行地反复细化整个输出，就像图像和视频模型已经做的那样。Ermon 称之为从粗到细的生成方式，并说这让模型更容易被引导：你不必等到完整答案生成完再打分，而是可以从一开始就把生成推向某个约束或奖励函数。

Inception's Mercury models, he says, are "comparable in quality with the speed-optimized models for Frontier Labs" while being significantly faster, and they are already serving production traffic. One voice-agent customer moved off custom chips because Mercury matched that speed on ordinary NVIDIA GPUs, which are more available and cheaper. Inception had to build its own serving engine, since nothing like vLLM exists for diffusion language models, and that engineering has become part of its moat.

他说，Inception 的 Mercury 模型在质量上「能媲美前沿实验室的速度优化模型」，同时明显更快，而且已经在服务生产流量。一家语音 agent 客户放弃了定制芯片，因为 Mercury 在普通 NVIDIA GPU 上就能达到那种速度，而 GPU 更易获得、成本更低。Inception 不得不自建 serving engine，因为 diffusion 语言模型没有类似 vLLM 的东西，而这部分工程能力也成了它的护城河。

The harder question is whether diffusion can match frontier intelligence, not just frontier speed. Ermon is candid that he does not know. He puts the latency-sensitive share of today's workloads at 20% to 30% as a lower bound, and argues diffusion models show signs of being more data-efficient because denoising acts as a form of data augmentation. His long-run bet is the bitter lesson: "the more parallel solution is the one that is eventually going to win." He still thinks human ingenuity is what matters most, and points to academia as the place where contrarian bets produced ideas like flash attention and DPO.

更难的问题是，diffusion 能否在智能水平而不只是速度上追上前沿。Ermon 坦诚地说，他不知道。他把当前对延迟敏感、因此可被这类模型覆盖的工作负载下限估在 20% 到 30%，并认为 diffusion 模型有希望更省数据，因为去噪本身相当于一种数据增强。他的长期判断是那句 bitter lesson：「更并行的方案最终会赢」。他仍然认为人的创造力最重要，并指出学术界正是做逆向押注的地方，flash attention 和 DPO 都产自那里。

- [No Priors: Why Diffusion Will Win AI Inference with Inception Co-Founder and CEO Stefano Ermon](https://www.youtube.com/@NoPriorsPodcast)

## Blog

The validated blog feed for this run contained no new qualifying posts.

本次运行中通过验证的博客 feed 没有新的合格文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
