[English](../../en/daily/ai-digest-2026-06-12-Fri.md) | [中文](../../zh/daily/ai-digest-2026-06-12-Fri.md) | [Bilingual](./ai-digest-2026-06-12-Fri.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

Claude Fable 5 is moving from launch excitement into operational evidence: builders are citing Box eval gains, platform deployment features, and Mike Krieger’s longer-horizon view of how stronger models change day-to-day workflows.
Claude Fable 5 正从发布热度进入实际验证阶段：builder 们开始谈 Box eval 的提升、Claude Platform 的部署能力，以及 Mike Krieger 对更强模型如何改变日常工作流的长期观察。

Coding agents are becoming more ambitious work partners. Codex usage appears to be spiking, Peter Yang says his requests keep getting bigger, and Thariq shows Fable handling video-production work through code, tool calls, ffmpeg, Figma MCP, and Remotion.
编程智能体正在变成更有野心的工作伙伴。Codex 用量似乎在快速上涨，Peter Yang 说自己对 Codex 的请求越来越大胆，Thariq 则展示 Fable 通过代码、tool calls、ffmpeg、Figma MCP 和 Remotion 完成发布视频编辑。

The enterprise AI discussion is shifting from “which model is cheapest” to “which model shows what is possible.” Madhu Guru argues teams should start new applications with the most capable model, then optimize down once quality is understood.
企业 AI 讨论正在从“哪个模型最便宜”转向“哪个模型能先证明可能性”。Madhu Guru 建议，新应用应先用最强模型探索上限，等质量标准清楚后再向更小模型优化成本。

Teams are starting to package expertise as agent-ready files and skills. Zara Zhang frames this as cross-functional leverage: design teams can build agents for marketing, agencies can deliver folders of reusable agent context, and organizations can form around loops rather than functions.
团队正在把专业知识打包成 agent 可用的文件和 skill。Zara Zhang 将其视为跨职能杠杆：设计团队可以为市场团队构建设计 agent，agency 可以交付可复用的 agent 上下文，组织也可能围绕 loop 而不是 function 重组。

The broader ecosystem is busy but uneven: Gemini had and resolved an outage, Google expanded Project Genie access, Replit promoted job-search automation, Claude highlighted Cursor’s growth, and Vercel is teeing up Ship announcements in London.
更广泛的生态仍然活跃但不均衡：Gemini 发生并修复了服务中断，Google 扩大 Project Genie 访问，Replit 推出求职自动化，Claude 强调 Cursor 的增长，Vercel 则预告伦敦 Ship 的新发布。

## X / Twitter

### Swyx (@swyx)
- [Tweet / 推文](https://x.com/swyx/status/2064698525917827092) (8 likes, 1 reposts, 1 replies): wooh https://t.co/TCPfb1tyr1

  Swyx 分享了一条围绕 AI 产品、builder 工作流或创业生态的动态：wooh https://t.co/TCPfb1tyr1

### Josh Woodward (@joshwoodward)
- [Tweet / 推文](https://x.com/joshwoodward/status/2064869366290841716) (429 likes, 27 reposts, 43 replies): Update: Everything is back up and running, sorry again!

  Josh Woodward 分享了一条围绕 AI 产品、builder 工作流或创业生态的动态：Update: Everything is back up and running, sorry again!
- [Tweet / 推文](https://x.com/joshwoodward/status/2064762269674918013) (1553 likes, 137 reposts, 123 replies): Heads up: Gemini is currently experiencing an outage. We're on it and will get everything back up ASAP. Some of the fixes are in, the rest coming very soon. Stay tuned for updates, and thanks for bearing with us!

  Josh Woodward 更新 Gemini 服务中断处理进展，说明团队正在修复并随后恢复服务。

### Boris Cherny (@bcherny)
- [Tweet / 推文](https://x.com/bcherny/status/2064885111477219664) (1820 likes, 77 reposts, 86 replies): Hello from Code with Claude Tokyo!! https://t.co/OGzffa1w58

  Boris Cherny 讨论 Claude Fable 或 Claude 平台能力，重点是更强模型在复杂工作、编码、部署或产品发布中的实际用途。

### Thibault Sottiaux (@thsottiaux)
- [Tweet / 推文](https://x.com/thsottiaux/status/2064911328087810308) (2460 likes, 105 reposts, 257 replies): Can confirm we saw a strong spike in growth of token consumption for Codex over last 48 hours. Unusual when we don't launch something. https://t.co/UG7hB1URMC

  Thibault Sottiaux 讨论 Codex 使用方式和需求变化，信号是 coding agent 正在让用户提出更大、更复杂的任务。
- [Tweet / 推文](https://x.com/thsottiaux/status/2064900105032135010) (580 likes, 12 reposts, 69 replies): Simplify until there is nothing to simplify https://t.co/4Rt5GGlGvA

  Thibault Sottiaux 分享了一条围绕 AI 产品、builder 工作流或创业生态的动态：Simplify until there is nothing to simplify https://t.co/4Rt5GGlGvA
- [Tweet / 推文](https://x.com/thsottiaux/status/2064869401359417799) (772 likes, 18 reposts, 28 replies): Welcome Clint and Michael! Incredibly excited to see what we do together to contribute to the cybersecurity field and accelerate defenders across the globe.

It's time to build. https://t.co/wu9CtJk38u

  Thibault Sottiaux 分享了一条围绕 AI 产品、builder 工作流或创业生态的动态：Welcome Clint and Michael! Incredibly excited to see what we do together to contribute to the cybersecurity field and accelerate defenders across the globe.

It's time to build. ht...

### Peter Yang (@petergyang)
- [Tweet / 推文](https://x.com/petergyang/status/2064799855059616172) (52 likes, 1 reposts, 8 replies): Give yourself permission to build.

The traditional career ladder pushes everyone to become a leader, but I just want to be a builder.

As you climb the ladder at most companies, you’re expected to step away from building and fill your time with product reviews, cross-functional alignment, managing up, and performance calibrations.

I know a lot of builders who spent their best years climbing the wrong ladder.

The good news is that this is finally changing. Companies are rewarding builders and ICs more than ever, and even managers are increasingly expected to do IC work too.

But becoming a good builder takes reps, and it’s hard to put in those reps when you’re in back-to-back meetings all day.

So if you’re a builder at heart, embrace it. You don’t have to give up what you’re good at to be a “leader.”

📌 Watch now: https://t.co/wv2SINll18

  Peter Yang 强调 builder 路径与 IC 工作价值，认为 AI 时代更需要给真正动手建设的人更多空间。
- [Tweet / 推文](https://x.com/petergyang/status/2064760792684335133) (8 likes, 0 reposts, 1 replies): This shit is actually working unbelievable https://t.co/0wtkHtT6kD

  Peter Yang 分享了一条围绕 AI 产品、builder 工作流或创业生态的动态：This shit is actually working unbelievable https://t.co/0wtkHtT6kD
- [Tweet / 推文](https://x.com/petergyang/status/2064748427892945313) (48 likes, 0 reposts, 12 replies): The more I use Codex the more ambitious my requests get. Or maybe this is not ambitious enough? https://t.co/C0qgjmKGRt

  Peter Yang 讨论 Codex 使用方式和需求变化，信号是 coding agent 正在让用户提出更大、更复杂的任务。

### Nan Yu (@thenanyu)
- [Tweet / 推文](https://x.com/thenanyu/status/2064733338779177459) (10 likes, 0 reposts, 2 replies): gangprompting https://t.co/ZnO5TTrFv6

  Nan Yu 分享了一条围绕 AI 产品、builder 工作流或创业生态的动态：gangprompting https://t.co/ZnO5TTrFv6
- [Tweet / 推文](https://x.com/thenanyu/status/2064711789556732316) (15 likes, 0 reposts, 0 replies): There's a thing they say about being a boat owner: the two best days of being a boat owner are the day you buy the boat and the day you sell the boat. https://t.co/ohqCRBqpUA

  Nan Yu 分享了一条围绕 AI 产品、builder 工作流或创业生态的动态：There's a thing they say about being a boat owner: the two best days of being a boat owner are the day you buy the boat and the day you sell the boat. https://t.co/ohqCRBqpUA

### Madhu Guru (@realmadhuguru)
- [Tweet / 推文](https://x.com/realmadhuguru/status/2064794601320481150) (20 likes, 1 reposts, 0 replies): Right from the early days of Gemini, enterprises would get the quality/cost tradeoff wrong. They’d often start with the smallest, cheapest model.

The rule of thumb we gave customers:

Replacing a traditional ML model with an LLM - start small, cos you already know what good looks like.

Building something new - start with the most capable model. Think magically. Figure out what’s actually possible first.

Once they had a high-quality working application, we’d help them move to a smaller model while maintaining quality.

  Madhu Guru 从企业 AI 落地角度讨论模型选择：先用强模型找出质量上限，再考虑成本和小模型迁移。

### Thariq (@trq212)
- [Tweet / 推文](https://x.com/trq212/status/2064828193446740023) (92 likes, 1 reposts, 5 replies): and the video for reference: https://t.co/tw0w0tmjIK

(I didnt get to use the updated designs in time)

  Thariq 分享了一条围绕 AI 产品、builder 工作流或创业生态的动态：and the video for reference: https://t.co/tw0w0tmjIK

(I didnt get to use the updated designs in time)
- [Tweet / 推文](https://x.com/trq212/status/2064826541947940910) (203 likes, 9 reposts, 13 replies): here's the deck from this video if you want to go over it yourself: https://t.co/6adKYvxUxD

lmk if you have any questions!

  Thariq 分享了一条围绕 AI 产品、builder 工作流或创业生态的动态：here's the deck from this video if you want to go over it yourself: https://t.co/6adKYvxUxD

lmk if you have any questions!
- [Tweet / 推文](https://x.com/trq212/status/2064826394589442448) (6036 likes, 367 reposts, 207 replies): Lots of people asked how I used Fable to edit its own launch video so I made a video about that!

TLDR it wrote a lot of code &amp;  tool calls to use transcription services, ffmpeg, do colorgrading, use the figma mcp, make remotion UI and render it. 

I didn't touch a video editor. https://t.co/hJRdJye5Fy

  Thariq 展示 Fable 如何通过代码和工具链参与视频编辑，把发布视频制作流程转成可编排的 agent 工作流。

### Google Labs (@GoogleLabs)
- [Tweet / 推文](https://x.com/GoogleLabs/status/2064801929339752527) (365 likes, 60 reposts, 13 replies): 🌍 Project Genie access is expanding even more! Starting today, Google AI Ultra 5X subscribers (our latest tier!) globally can access Project Genie.

Try it out here! https://t.co/4BFYHSiAMv https://t.co/VL4MCvc44B

  Google Labs 宣布 Project Genie 访问范围扩大，Google AI Ultra 5X 订阅者可以在全球使用。

### Amjad Masad (@amasad)
- [Tweet / 推文](https://x.com/amasad/status/2064864439275536495) (164 likes, 5 reposts, 8 replies): Automate your job search with Replit! https://t.co/OiJSdTvhi2

  Amjad Masad 分享 Replit 相关产品动态，包括用自动化能力辅助求职或企业 agent 场景。
- [Tweet / 推文](https://x.com/amasad/status/2064864076430504282) (802 likes, 40 reposts, 49 replies): 🇺🇸🇺🇸🇺🇸 https://t.co/EBM3X4YQ5T

  Amjad Masad 分享了一条围绕 AI 产品、builder 工作流或创业生态的动态：🇺🇸🇺🇸🇺🇸 https://t.co/EBM3X4YQ5T
- [Tweet / 推文](https://x.com/amasad/status/2064806473352540643) (185 likes, 11 reposts, 7 replies): Super interesting approach to enterprise agents. Congrats on the launch @markiewagner https://t.co/BfGani53y1

  Amjad Masad 从企业 AI 落地角度讨论模型选择：先用强模型找出质量上限，再考虑成本和小模型迁移。

### Guillermo Rauch (@rauchg)
- [Tweet / 推文](https://x.com/rauchg/status/2064777495422161205) (182 likes, 8 reposts, 28 replies): 🇬🇧 London calling
Excited for Vercel Ship next week
Some special announcements… https://t.co/WmOe53Q0Au https://t.co/ks68xJOHL7

  Guillermo Rauch 预告 Vercel Ship London 及相关发布，延续围绕 AI 基础设施和产品平台的节奏。
- [Tweet / 推文](https://x.com/rauchg/status/2064732935484514729) (815 likes, 20 reposts, 53 replies): What I love about Silicon Valley is that the future is up for grabs, ready for anyone to build. 

I get intros for angel investing to all kinds of people. I take everyone equally seriously. 2 lads &amp; a dog, or a 5-time award-winning entrepreneur.

No place more meritocratic.

  Guillermo Rauch 分享了一条围绕 AI 产品、builder 工作流或创业生态的动态：What I love about Silicon Valley is that the future is up for grabs, ready for anyone to build. 

I get intros for angel investing to all kinds of people. I take everyone equally s...

### Aaron Levie (@levie)
- [Tweet / 推文](https://x.com/levie/status/2064922814688481678) (177 likes, 19 reposts, 26 replies): Lots of evidence of huge jumps in capability for Fable across coding (and related) tasks. It’s also a major jump in accuracy and success in complex knowledge work tasks.

In our Box AI Complex Work Eval, we tested the model against Opus 4.8 and saw huge boosts across almost every industry. For our eval we give the Box AI Agent, using Fable, a set of hard real world knowledge work problems that deal with enterprise documents. Then score how the agent performs the tasks.

The main differentiators for Fable vs Opus 4.8 is that it doesn't take shortcuts on complex reasoning, it gets multi-step calculations right, and it's significantly more consistent across runs. We saw the biggest leaps in Media & Entertainment (78% vs 61%), Technology (81% vs 73%), Financial Services (89% vs 83%), and Healthcare (66% vs 60%).

Here are some specific examples:

* Legal M&A due diligence: On a task reviewing NDA terms against a semiconductor company's contracting policy, Fable correctly identified that a joint-ownership clause violates exclusivity requirements while a liability cap is permitted under a Super Cap exception. Fable scored 100% vs Opus's 78%.

* Healthcare: On a clinical radiology error audit across 12 reports, Fable precisely categorized each error by severity grade and correctly concluded no Grade 3 errors existed. Opus prematurely escalated a case to "major error requiring immediate departmental review" when the evidence didn't support it — Fable 63% vs Opus 41%.

* Media & Entertainment: On a genre profitability projection task, Fable correctly recognized that a 20% Argentine tax deduction was already embedded in the source spreadsheet figures and didn't double-apply it. Opus applied it again on top — a compounding error across 4 genre calculations that took its score negative on the task vs Fable's 74%.

* Retail analytics: On a task analyzing high-growth product articles against an investment benchmark, Fable correctly computed each article's growth rate individually and identified that only 2 of 5 exceeded the threshold. Opus confused "high growth relative to average" with "above the benchmark" — scoring 61% vs Fable's 94%.

* Financial Services: On a 5-year debt facility projection, Fable correctly applied interest to opening balances and used the right capex figure. Opus applied interest to the total facility amount and computed tax from the wrong base — two compounding errors. Fable scored 83% vs Opus's 62%.

* Technology: On a SaaS feature valuation requiring computation of a Feature Value Index across multiple regions, Fable applied the formula correctly and got exact values for the markets. Opus got the arithmetic wrong on multiple criteria — Fable scored 100% vs Opus's 74%.

Overall, huge step change in complex analysis, work that requires analytical reasoning, and deep domain understanding. Fable will be available shortly in the Box AI Studio for customers to build agents with.

  Aaron Levie 讨论 Claude Fable 或 Claude 平台能力，重点是更强模型在复杂工作、编码、部署或产品发布中的实际用途。

### Garry Tan (@garrytan)
- [Tweet / 推文](https://x.com/garrytan/status/2064948068076986657) (54 likes, 4 reposts, 11 replies): May common sense reign in San Francisco for 100 years

Aaron Peskin, enjoy being a private citizen. https://t.co/QjawbyY7mj

  Garry Tan 分享了一条围绕 AI 产品、builder 工作流或创业生态的动态：May common sense reign in San Francisco for 100 years

Aaron Peskin, enjoy being a private citizen. https://t.co/QjawbyY7mj
- [Tweet / 推文](https://x.com/garrytan/status/2064947547735789715) (114 likes, 9 reposts, 7 replies): Performative nonprofit industrial complex must be rooted out and defunded. 

Their political cronies and grifter friends must not be allowed to squander the gifts of San Francisco any longer. https://t.co/rMPnV732TZ

  Garry Tan 分享了一条围绕 AI 产品、builder 工作流或创业生态的动态：Performative nonprofit industrial complex must be rooted out and defunded. 

Their political cronies and grifter friends must not be allowed to squander the gifts of San Francisco ...
- [Tweet / 推文](https://x.com/garrytan/status/2064947145652994510) (269 likes, 23 reposts, 41 replies): Nessie just became the best way to get all your existing context, memory and history from ChatGPT, Perplexity, and Gemini into all the other places you have memory, and also get it into OpenClaw/Hermes Agent. Their OpenClaw and MCP servers are ace. 

https://t.co/0L1JaBlTvg

  Garry Tan 讨论 agent、skill 和跨团队工作流，强调把专业知识封装成其他团队可直接使用的能力。

### Matt Turck (@mattturck)
- [Tweet / 推文](https://x.com/mattturck/status/2064806681612362113) (488 likes, 22 reposts, 32 replies): 2026 is a BRUTAL grind in VC. You start in Davos, freeze in Aspen, hit Upfront, survive Milken, then it’s straight to Paris for the French Open.  Briefly back in NYC for the Knicks. Then, total blur: SuperReturn in Berlin, Founders Forum in London, then back stateside for the World Cup, back to Paris for Raise AI, Idaho for Sun Valley, quick respite in Mykonos, then the Goldman tech gauntlet, Slush in Finland, NeurIPS in freakin’ Sydney… and *boom*, a productive year of thought leadership and adding value is over, and you’re a wreck.

  Matt Turck 预告 Vercel Ship London 及相关发布，延续围绕 AI 基础设施和产品平台的节奏。

### Zara Zhang (@zarazhangrui)
- [Tweet / 推文](https://x.com/zarazhangrui/status/2064843560248332577) (104 likes, 7 reposts, 5 replies): This is so good

Increasingly the output of an agency looks like a folder of files for agents, instead of one-off assets

"Get paid for your mind, not your hands" https://t.co/C1O4J2HW2F https://t.co/WMf0DetvTY

  Zara Zhang 讨论 agent、skill 和跨团队工作流，强调把专业知识封装成其他团队可直接使用的能力。
- [Tweet / 推文](https://x.com/zarazhangrui/status/2064835289559023958) (50 likes, 3 reposts, 12 replies): People should build agents/skills for their cross-functional teams.

For example, if a design team builds a design agent/skill for the marketing team (trained on all of the brand's guidelines and design patterns), then the marketing team can produce more on-brand assets without having to bug designers every time

But the marketing team couldn't have built this on their own; it takes the designer with their expertise, context, and knowledge

Same thing applies to every pair of teams that work closely with each other, often rely on each other, and complain about each other's limited bandwidth

Building agents for your cross-functional teams ensures each team can be more self-sufficient, and moves us to a direction where teams can be organized by "loops" rather than "functions"

  Zara Zhang 讨论 agent、skill 和跨团队工作流，强调把专业知识封装成其他团队可直接使用的能力。
- [Tweet / 推文](https://x.com/zarazhangrui/status/2064825302359150870) (203 likes, 17 reposts, 66 replies): It seems like most startups in San Francisco are selling products to each other

When I ask founders who their target audience is, 90% of the time it's "engineering and product teams, AI-native startups"

Feels like the same small group of target audience is being bombarded with a million products, whereas very few people are building for the 99% of the world

  Zara Zhang 分享了一条围绕 AI 产品、builder 工作流或创业生态的动态：It seems like most startups in San Francisco are selling products to each other

When I ask founders who their target audience is, 90% of the time it's "engineering and product tea...

### Nikunj Kothari (@nikunj)
- [Tweet / 推文](https://x.com/nikunj/status/2064901295383990417) (26 likes, 0 reposts, 4 replies): TIL: You can just roast your way into getting some legit coffee at the Cognition office ☕️ https://t.co/kfMU1x2Xez https://t.co/WXthHoSa1U

  Nikunj Kothari 分享了一条围绕 AI 产品、builder 工作流或创业生态的动态：TIL: You can just roast your way into getting some legit coffee at the Cognition office ☕️ https://t.co/kfMU1x2Xez https://t.co/WXthHoSa1U

### Dan Shipper (@danshipper)
- [Tweet / 推文](https://x.com/danshipper/status/2064916544417829027) (91 likes, 0 reposts, 8 replies): absolutely insane game

  Dan Shipper 分享了一条围绕 AI 产品、builder 工作流或创业生态的动态：absolutely insane game
- [Tweet / 推文](https://x.com/danshipper/status/2064777216656097445) (164 likes, 15 reposts, 13 replies): I predicted this might happen on on @lennysan’s pod last year 

Higher productivity from each individual employee with AI, makes it appealing to reshore certain jobs back to the US to be close to customers https://t.co/rNpLF3BerE

  Dan Shipper 分享了一条围绕 AI 产品、builder 工作流或创业生态的动态：I predicted this might happen on on @lennysan’s pod last year 

Higher productivity from each individual employee with AI, makes it appealing to reshore certain jobs back to the US...
- [Tweet / 推文](https://x.com/danshipper/status/2064767202767602122) (50 likes, 0 reposts, 7 replies): fable maxxing on the plane to SF https://t.co/KDB8T8Z8Ci

  Dan Shipper 讨论 Claude Fable 或 Claude 平台能力，重点是更强模型在复杂工作、编码、部署或产品发布中的实际用途。

### Claude (@claudeai)
- [Tweet / 推文](https://x.com/claudeai/status/2064757539762295177) (137 likes, 11 reposts, 14 replies): From The Problem Solvers, our series featuring founders taking on hard problems with Claude: https://t.co/lXWwc2eHPe

  Claude 讨论 Claude Fable 或 Claude 平台能力，重点是更强模型在复杂工作、编码、部署或产品发布中的实际用途。
- [Tweet / 推文](https://x.com/claudeai/status/2064757537992249734) (5258 likes, 246 reposts, 175 replies): Michael Truell (@mntruell) fell in love with coding at 12. The company he co-founded, @cursor_ai, went from 15 people to 700 in two years.

Today, over 60% of the Fortune 500 build with its AI coding platform. https://t.co/1UROi02oHJ

  Claude 分享 Cursor 创始人与 Claude 的案例，强调 AI coding 平台进入更多企业和 Fortune 500 工作流。
- [Tweet / 推文](https://x.com/claudeai/status/2064741184547795408) (119 likes, 10 reposts, 9 replies): Scheduled deployments and environment variables in vaults are available today on the Claude Platform.

Read more: https://t.co/kCYH1FnRbO

  Claude 讨论 Claude Fable 或 Claude 平台能力，重点是更强模型在复杂工作、编码、部署或产品发布中的实际用途。

## Podcast

### How Anthropic Uses Claude Fable 5 With Mike Krieger
Source / 来源: AI & I by Every | [Watch / 观看](https://www.youtube.com/watch?v=XWpTgCvgYaE) | Published / 发布时间: 2026-06-10T17:27:38.000Z

This AI & I conversation with Anthropic Labs head Mike Krieger is a practical “after the launch” guide to Claude Fable 5. Krieger argues that the real shift only appears after extended use: people need to push the model further, rethink workflows, and learn a new set of habits for orchestrating stronger agents. The episode is especially useful for teams trying to move beyond day-one benchmark reactions. It frames Fable as a model that changes ambition, not just speed, while still requiring users to define objectives, judgment, verification, and the right level of delegation.

这期 AI & I 邀请 Anthropic Labs 负责人 Mike Krieger 讨论 Claude Fable 5，更像是一份“发布后如何真正使用”的实践指南。Krieger 强调，模型的真实变化往往要在连续使用几周后才显现：用户需要把任务推得更远，重新设计工作流，并学习如何编排更强的 agent。对团队来说，重点不是发布当天的 benchmark 情绪，而是 Fable 如何改变野心、任务边界和协作方式；同时，人仍然要定义目标、判断标准、验证路径和授权边界。

## Blog

No new blog posts today.

今天没有新的博客内容。
