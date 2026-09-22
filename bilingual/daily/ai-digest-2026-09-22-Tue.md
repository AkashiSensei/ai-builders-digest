[English](../../en/daily/ai-digest-2026-09-22-Tue.md) | [中文](../../zh/daily/ai-digest-2026-09-22-Tue.md) | [Bilingual](./ai-digest-2026-09-22-Tue.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. Agents are becoming economic actors, and the platform layer underneath them may matter more than the chat window.** Box CEO Aaron Levie argues that personal agents which transact on your behalf carry significant monetization potential, because once agents can handle arbitrarily complex tasks end to end, a substantial share of commerce inevitably flows through them. He expects people to start by throwing simple, annoying daily tasks at an agent, get comfortable, and then hand over more complex work, which means lower friction produces more spending than before rather than less. That creates room for the agent providers such as Muse, and for an entirely new layer built for agents to interact with, from commerce and local services to B2B services. In a second post he pushes further: agents will use software 100 times more than people ever did, and as interfaces fade into the background the core primitives matter more, especially when agents can take destructive actions. His conclusion is that the biggest opportunity sits with platforms that can act as the security layer and guardrails for agents, manage data for both agents and people, and orchestrate the business logic.

**1. agent 正在成为经济活动的主体，而它下面的平台层可能比聊天窗口更重要。** Box CEO Aaron Levie 认为，替你完成交易的 personal agent 有很大的变现潜力：一旦 agent 能端到端处理任意复杂的任务，相当一部分商业不可避免地会从它们身上流过。他预计人们会先把日常琐碎烦人的任务丢给 agent，用习惯之后再交出更复杂的工作，也就是说摩擦降低带来的是比过去更多的支出，而不是更少。这既给 Muse 这样的 agent 提供方创造了空间，也催生了一个全新的、供 agent 交互的层，覆盖电商、本地服务和 B2B 服务。在另一条帖子里他更进一步：agent 使用软件的频率将是人类的 100 倍，当界面逐渐退到幕后，那些核心 primitives 反而更重要，尤其当 agent 可以在系统里执行破坏性操作时。他的结论是，最大的机会属于那些能为 agent 充当安全层和护栏、同时为 agent 和人管理数据、并编排业务逻辑的平台。

**2. Peter Yang says the inbox is being replaced by the chat with your agent, and asks what that does to advertising.** Yang, who makes practical AI tutorials and interviews for busy people, thinks the ad markets are in for a rude awakening: if a large part of your business is showing targeted display ads to humans, what happens when agents browse your website and get the job done without a human seeing your ads at all. He also pointed to ChatGPT Finances as evidence of what agents already handle, quoting Ethan, the product lead for ChatGPT Finances, who used points to book a hotel, was billed anyway, and says ChatGPT caught the charge, worked with customer service and got him reimbursed. Yang added his own version: he asked ChatGPT to cancel a hotel booking for his parents, monitor the replies and keep following up until the money came back. His summary of how he lives now: "Nah. I no longer live in email or text, I live in the chat with my agent(s)."

**2. Peter Yang 认为收件箱正在被「和 agent 的对话」取代，并追问这会怎样冲击广告业。** 做实用 AI 教程和访谈的 Peter Yang 预计广告市场会迎来一次惨痛的觉醒：如果你的生意很大一部分是把定向展示广告投给真人看，那么当 agent 自己浏览你的网站、把事情办完，而全程没有真人看到广告时，会发生什么。他还用 ChatGPT Finances 说明 agent 今天已经能做什么，并引用 ChatGPT Finances 产品负责人 Ethan 的话：他用积分订了酒店，结果还是被扣了钱，ChatGPT 发现了这笔费用，与客服沟通，最终帮他拿到了退款。Yang 也补充了自己的经历，他让 ChatGPT 帮父母取消酒店预订、盯着回复、持续跟进，直到钱退回来。他对自身状态的总结是：「Nah. I no longer live in email or text, I live in the chat with my agent(s).」

**3. Coding agents are now competing on big, parallel, PR-sized work.** Y Combinator President and CEO Garry Tan calls Capy his favorite new agentic coding secret weapon of the past week, saying he is not sure how it does it but that it tracks multi-step workflows and produces large PRs faster than Codex or Claude Code on their own. He shared a worked example, a PR where an agent executed an ambitious bug-fix wave on GBrain with clear task delineation, automatic parallelization and a clean GitHub PR and CI workflow. Nikunj Kothari, a partner at FPV Ventures, says he has used Codex as his primary agent for so long that he forgets the average person has never touched one, rates Instinct and Muse for zero-setup browser use on the phone, calls Codex on Mac undefeated for computer-use work, and is waiting to see what the rumored mass-market agent release looks like. Vercel CEO Guillermo Rauch says he gave Grok 4.7 a hard problem involving reverse-engineering a running binary and that it was beautifully solved, and fast. Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, teased that a promised reset for Tuesday is close.

**3. 编码 agent 的竞争已经转向又大又并行的 PR 级任务。** Y Combinator 总裁兼 CEO Garry Tan 把 Capy 称为他近一周最喜欢的 agentic 编码秘密武器，说他不太清楚它怎么做到的，但它能跟踪多步工作流，产出大型 PR 的速度比单用 Codex 或 Claude Code 更快。他还给了一个实例：一个 agent 在 GBrain 上执行了一波雄心不小的 bug 修复，任务切分非常清晰、自动并行，GitHub PR 和 CI 流程也很干净。FPV Ventures 合伙人 Nikunj Kothari 说，他用 Codex 当主力 agent 太久，已经忘了普通人根本没用过；他称赞 Instinct 和 Muse 在手机上做浏览器任务开箱即用，认为 Codex on Mac 在 computer use 上简直无人能敌，也在等传闻中面向大众的 agent 发布。Vercel CEO Guillermo Rauch 说，他给 Grok 4.7 出了一道逆向分析运行中二进制的难题，结果解得漂亮，而且非常快。在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 则预告，他承诺的周二 reset 即将到来。

**4. Curation beats brute force, and running your own agent is leverage.** Nikunj Kothari argues that with a few exceptions, the companies boasting about tokenmaxxing have the worst product experiences, because good products are about curation and gardening rather than throwing the kitchen sink at agents and expecting them to figure it out. Peter Steinberger, who works on OpenClaw and OpenAI, addressed the "Meta uses OpenClaw" story by saying Meta built its own agent, inspired by the work, and crediting Nat and his team on the result. In a separate post he said a review found nothing critical, writing that he was proud to say they did their homework, and he framed the appeal of self-hosting bluntly: "The beauty of running a claw yourself: they cannot block you."

**4. 精挑细选胜过蛮力堆砌，自己跑 agent 本身就是一种杠杆。** Nikunj Kothari 认为，除了少数例外，那些吹嘘 tokenmaxxing 的公司，产品体验往往最差，因为好产品靠的是 curation 和 gardening，而不是把所有东西一股脑丢给 agent，指望它自己想明白。在 OpenClaw 和 OpenAI 工作的 Peter Steinberger 回应了「Meta 在用 OpenClaw」的说法：Meta 是受这份工作的启发后自己造了 agent，他把功劳归于 Nat 和他的团队。在另一条帖子里他说，一次审查没有发现任何严重问题，他很自豪地说团队做了该做的功课。他也把自托管的吸引力说得很直白：「The beauty of running a claw yourself: they cannot block you.」

**5. Browser agents just crossed a safety threshold.** Claude in Chrome is now generally available on every paid Claude plan, and Claude can take actions autonomously in the browser instead of needing approval for every one, with a safety classifier that validates each action before it runs to confirm it is safe and matches your request. Claude Blog describes the defenses built since the pilot: training against a growing library of prompt injection attacks, probes that screen web content before Claude acts on it, and pre-action verification that uses the same mechanism as auto mode in Claude Code. On Anthropic's current evaluation, built from stronger attacks sourced by professional red-teamers, attacks that reached the model succeeded 17.6 percent of the time against Opus 4.5 and 3.8 percent against Opus 5 before any additional safeguards; with probes and the safety classifier, no attacks succeeded against Claude Sonnet 5, Claude Opus 5 or Claude Mythos 5, while Fable 5 saw a 0.3 percent attack success rate, and all successful breaks were manually verified as low severity. Anthropic calls prompt injection a moving target and says it will keep investing in attack discovery and red-teaming. Claude in Chrome still requires the desktop app for files and other applications, and does not run on other Chromium browsers or on mobile yet.

**5. 浏览器 agent 刚刚跨过了一道安全门槛。** Claude in Chrome 现在已在所有付费 Claude 套餐中正式可用，Claude 可以在浏览器里自主执行操作，不再每一步都需要批准；每次操作在执行前都会先经过一个安全分类器校验，确认它安全并且符合你的要求。Claude Blog 介绍了 pilot 以来补上的几道防线：用不断扩充的 prompt injection 攻击库训练 Claude，用 probe 在 Claude 行动前筛查网页内容，以及在执行前做动作校验，机制与 Claude Code 的 auto mode 相同。在 Anthropic 当前这轮评测中，攻击由专业红队提供，强度更高；在加入额外防护之前，触及模型的攻击对 Opus 4.5 的成功率是 17.6%，对 Opus 5 是 3.8%；在 probe 加安全分类器的情况下，Claude Sonnet 5、Claude Opus 5 和 Claude Mythos 5 都没有被攻破，Fable 5 的攻击成功率是 0.3%，所有成功突破的案例都经过人工确认，属于低严重度场景。Anthropic 说 prompt injection 是一个不断移动的目标，会持续投入攻击发现、红队测试和更强的分类器。Claude in Chrome 目前处理电脑文件和调用其他应用仍需桌面版，也还不能在其他 Chromium 浏览器或手机上运行。

## X / Twitter

### Swyx: affiliations include smol.ai, Cognition and the Latent Space podcast

Swyx said the latest Latent Space episode is out, available by email, Apple Podcasts and YouTube.

Swyx 说最新一期 Latent Space 已经上线，可以在 email、Apple Podcasts 和 YouTube 收听。

- [Swyx: the latest Latent Space episode is out / 最新一期 Latent Space 已上线](https://x.com/swyx/status/2102160025666101658)

### Thibault Sottiaux: Codex and ChatGPT at OpenAI

Thibault Sottiaux teased an imminent change, writing that the reset he promised for Tuesday is almost here: "Ladies and gentlemen... start... your... ENGINES. We are almost Tuesday and I promised a reset for Tuesday. Among some other things. See you soon."

Thibault Sottiaux 预告了一个即将到来的变化，说他承诺的周二 reset 快到了：「Ladies and gentlemen... start... your... ENGINES. We are almost Tuesday and I promised a reset for Tuesday. Among some other things. See you soon.」

- [Thibault Sottiaux: a promised Tuesday reset is coming / 承诺的周二 reset 即将到来](https://x.com/thsottiaux/status/2102254445082116335)

### Peter Yang: practical AI tutorials and interviews for busy people

Peter Yang made three points. First, he expects a rude awakening in the ad markets: if a huge part of your business is showing targeted display ads to humans, what happens when agents browse your website and get the job done without a human seeing your ads at all. Second, he highlighted ChatGPT Finances, quoting Ethan, the product lead for ChatGPT Finances, who said points booked him a hotel but he was still billed, and that ChatGPT caught it, worked with customer service and got him reimbursed; Yang added that he once asked ChatGPT to cancel a hotel booking for his parents, monitor the replies and keep following up until the money came back. Third, on how he works now: "Nah. I no longer live in email or text, I live in the chat with my agent(s)."

Peter Yang 提了三点。第一，他预计广告市场会迎来一次惨痛的觉醒：如果你的生意很大一部分是把定向展示广告投给真人看，那么当 agent 自己浏览你的网站、把事情办完、全程没有真人看到广告时，会发生什么。第二，他重点提到了 ChatGPT Finances，并引用产品负责人 Ethan 的话：他用积分订了酒店却仍被扣款，ChatGPT 发现了这笔费用，与客服沟通，最终帮他拿到了退款；Yang 还补充了自己的经历，他让 ChatGPT 帮父母取消酒店预订、盯着回复、持续跟进，直到钱退回来。第三，关于他现在的工作方式：「Nah. I no longer live in email or text, I live in the chat with my agent(s).」

- [Peter Yang: a rude awakening for the ad markets / 广告市场将迎来一次惨痛的觉醒](https://x.com/petergyang/status/2102215701255844074)
- [Peter Yang: ChatGPT Finances caught a charge he missed / ChatGPT Finances 发现了他漏掉的扣款](https://x.com/petergyang/status/2102186174911746151)
- [Peter Yang: "I live in the chat with my agent(s)" / 「I live in the chat with my agent(s)」](https://x.com/petergyang/status/2102181024507765167)

### Thariq: Claude Code at Anthropic

Thariq says a phrase has become part of his daily prompting habit: "I now type 'use big pictures and few words' several times a day."

Thariq 说，有一个短语已经成了他每天要打好几次的 prompting 习惯：「use big pictures and few words」。

- [Thariq: "use big pictures and few words" / 「use big pictures and few words」](https://x.com/trq212/status/2102186805034635576)

### Amjad Masad: CEO, Replit

Amjad Masad argued that "AI is reviving the American Dream."

Amjad Masad 的判断是：「AI is reviving the American Dream.」

- [Amjad Masad: "AI is reviving the American Dream" / 「AI is reviving the American Dream」](https://x.com/amasad/status/2102120769232978174)

### Guillermo Rauch: CEO, Vercel

Guillermo Rauch says he gave Grok 4.7 a pretty hard problem that involved reverse-engineering a running binary, and that it was beautifully solved and very fast. He also announced that in addition to the type-safe AI SDK API, Jev can now be used over HTTP in AI Gateway, and responded to a comparison of two products with "Game recognizing game."

Guillermo Rauch 说，他给 Grok 4.7 出了一道相当难的题，涉及逆向分析一个正在运行的二进制，结果解得漂亮，而且非常快。他还宣布，除了类型安全的 AI SDK API，现在还可以在 AI Gateway 里通过 HTTP 使用 Jev，并对两个产品的比较回应道「Game recognizing game」。

- [Guillermo Rauch: Grok 4.7 solved a hard reverse-engineering problem / Grok 4.7 解掉了一道棘手的逆向题](https://x.com/rauchg/status/2102089968860721335)
- [Guillermo Rauch: Jev over HTTP in AI Gateway / AI Gateway 支持通过 HTTP 使用 Jev](https://x.com/rauchg/status/2102205684544852121)
- [Guillermo Rauch: "Game recognizing game" / 「Game recognizing game」](https://x.com/rauchg/status/2102126936592191695)

### Aaron Levie: CEO, Box

Aaron Levie sees significant monetization potential in personal agents that transact on your behalf. If agents are perfectly capable of handling an arbitrarily complex task end to end, he expects a substantial amount of commerce to inevitably go through them: people start with daily simple and annoying tasks, get used to it, then throw more complex tasks at the agent, and lower friction for commerce and services means spending even more than before. That creates opportunity for agent providers like Muse as well as for a completely new layer that agents want to interact with, from commerce to local to B2B services. In a second post he argues that agents will use software 100 times more than people ever did, so the core primitives behind fading interfaces become even more important, especially when agents can take destructive actions or when the context they access can make or break a workflow. He expects the platforms that best act as the security layer and guardrails for agents, manage data for agents and people, and orchestrate business logic to have a huge opportunity right now, for both new startups and existing platforms that can move fast enough.

Aaron Levie 认为，替你完成交易的 personal agent 有相当大的变现潜力。如果 agent 能端到端处理任意复杂的任务，他预计会有相当一部分商业不可避免地从它们身上流过：人们先从日常琐碎烦人的任务开始，慢慢习惯，然后把更复杂的任务丢给 agent；而商业和服务摩擦的降低，会带来比过去更多的支出。这既给 Muse 这样的 agent 提供方创造了机会，也催生了一个全新的、agent 愿意与之交互的层，覆盖电商、本地服务和 B2B 服务。在第二条帖子里他进一步论证，agent 使用软件的频率将是人类的 100 倍，所以在界面退到幕后之后，那些核心 primitives 反而更重要，尤其当 agent 可以执行破坏性操作，或者它读取的上下文足以决定一个工作流成败的时候。他认为，最能为 agent 充当安全层和护栏、为 agent 和人管理数据、并编排业务逻辑的平台，眼下都有巨大的机会，无论是全新创业公司，还是跑得足够快的现有平台。

- [Aaron Levie: personal agents that transact have big monetization potential / 替你交易的 personal agent 变现潜力巨大](https://x.com/levie/status/2102253246807261579)
- [Aaron Levie: agents will use software 100X more than people / agent 使用软件的频率是人类的 100 倍](https://x.com/levie/status/2102235949430354273)

### Garry Tan: President and CEO, Y Combinator

Garry Tan calls Capy his most favorite new agentic coding secret weapon of the last week, saying he is not really sure how it does it but that it tracks multi-step workflows and does large PRs faster than Codex or Claude Code on its own. He shared an example PR where an agent executed an ambitious bug-fix wave on GBrain with very clear task delineation, automatic parallelization and a clean GitHub PR and CI workflow. He also argued that Cluely, as a real-time thought helper and semi-adversarial assistant with ongoing context, is still a good idea.

Garry Tan 把 Capy 称为他近一周最喜欢的 agentic 编码秘密武器，说他不太清楚它怎么做到的，但它能跟踪多步工作流，产出大型 PR 的速度比单用 Codex 或 Claude Code 更快。他分享了一个示例 PR：一个 agent 在 GBrain 上执行了一波雄心不小的 bug 修复，任务切分非常清晰、自动并行，GitHub PR 和 CI 流程也很干净。他还认为，Cluely 作为实时思考助手、带有持续上下文的半对抗式助手，依然是个好主意。

- [Garry Tan: Capy is his favorite new agentic coding tool / Capy 是他最喜欢的 agentic 编码新工具](https://x.com/garrytan/status/2102095924893827501)
- [Garry Tan: an example parallelized bug-fix PR on GBrain / GBrain 上一个自动并行的 bug 修复 PR 实例](https://x.com/garrytan/status/2102096495847551011)
- [Garry Tan: Cluely is still a good idea / Cluely 依然是个好主意](https://x.com/garrytan/status/2102233173833007536)

### Nikunj Kothari: partner, FPV Ventures

Nikunj Kothari has used Codex as his primary agent for so long that he forgets the average person has never used one. He rates Instinct and Muse for browser use on the phone, showing what a great agent feels like for the masses with zero setup, but calls Codex on Mac simply undefeated in all the work it can do with computer use, and he cannot wait to see the latest launch as companies reportedly get ready to release their agent to the masses. His other point is a warning about excess: with a few exceptions, the companies boasting about tokenmaxxing have the worst product experiences, because good products are all about curation and gardening rather than throwing the kitchen sink at agents expecting them to figure it out. As he puts it, "Less is more has never more apt."

Nikunj Kothari 用 Codex 当主力 agent 太久，已经忘了普通人根本没用过。他称赞 Instinct 和 Muse 在手机上做浏览器任务开箱即用，让人看到面向大众的好 agent 该是什么样；但他认为 Codex on Mac 在 computer use 能做的所有事情上简直无人能敌，也迫不及待想看各家据报道准备把 agent 推向大众时的新发布。他的另一个观点是提醒大家别贪多：除了少数例外，那些吹嘘 tokenmaxxing 的公司，产品体验往往最差，因为好产品靠的是 curation 和 gardening，而不是把所有东西一股脑丢给 agent、指望它自己想明白。用他的话说：「Less is more has never more apt.」

- [Nikunj Kothari: Codex as a primary agent, and waiting for the mass-market launch / 把 Codex 当主力 agent，并期待面向大众的发布](https://x.com/nikunj/status/2102186665863463199)
- [Nikunj Kothari: tokenmaxxing companies have the worst product experiences / tokenmaxxing 的公司产品体验最差](https://x.com/nikunj/status/2102049065504739366)

### Peter Steinberger: OpenClaw and OpenAI

Peter Steinberger addressed the "Meta uses OpenClaw" story by clarifying that Meta built its own agent, inspired by the work, and crediting Nat and his team: "They built their own agent, being inspired. Nat and his team did a great job. Kudos!" In a separate post he wrote that he was proud to say they did their homework and that a review "found nothing critical." He also framed the case for self-hosting an agent: "The beauty of running a claw yourself: they cannot block you."

Peter Steinberger 回应了「Meta 在用 OpenClaw」的说法，澄清 Meta 是受这份工作的启发后自己造了 agent，并把功劳归于 Nat 和他的团队：「They built their own agent, being inspired. Nat and his team did a great job. Kudos!」在另一条帖子里他写道，他很自豪地说团队做了该做的功课，一次审查「found nothing critical」。他还把自托管 agent 的价值说得很直接：「The beauty of running a claw yourself: they cannot block you.」

- [Peter Steinberger: Meta built its own agent, inspired by OpenClaw / Meta 受 OpenClaw 启发造了自己的 agent](https://x.com/steipete/status/2102116206371315854)
- [Peter Steinberger: "Proud to say that we did our homework" / 「Proud to say that we did our homework」](https://x.com/steipete/status/2102049706830647467)
- [Peter Steinberger: "they cannot block you" / 「they cannot block you」](https://x.com/steipete/status/2102044040397238286)

## Podcast

The validated podcast feed for this run contained no new qualifying episodes.

本次运行中通过验证的播客 feed 没有新的合格剧集。

## Blog

### Claude Blog: Claude in Chrome is generally available / Claude in Chrome 正式可用

Claude in Chrome is now generally available on every paid Claude plan, and Claude can take actions autonomously in the browser instead of needing approval for every one. A safety classifier validates each action before it is performed to ensure it is safe and matches your request, and automatic approval can be switched off in settings. Much of the product's value is reach: many of the tools people use every day connect to Claude, but internal dashboards, legacy systems and vendor portals do not, and Claude in Chrome can view the page you are on and take actions like reading and typing text, clicking links, navigating between pages and filling out forms using your existing logins.

Claude in Chrome 现在已在所有付费 Claude 套餐中正式可用，Claude 可以在浏览器里自主执行操作，不再每一步都需要批准。每次操作在执行前都会先经过一个安全分类器校验，确认它安全并且符合你的要求；自动批准可以在设置里关掉。这个产品真正的价值在于覆盖面：人们每天使用的许多工具已经接入 Claude，但内部 dashboard、遗留系统和厂商门户并没有，而 Claude in Chrome 可以查看你正在浏览的页面，并完成读取和输入文字、点击链接、页面跳转、填写表单等操作，用的还是你现有的登录状态。

Most of the post is about prompt injection, the class of attack where malicious instructions are hidden in a website, an email or a form field and try to redirect an agent against the user's wishes. Claude Blog says the team trained Claude against a growing library of attacks sourced from internal automated attackers, external red-teamers and real-world monitoring, deployed probes that screen web content before Claude acts on it, and added classifiers that make it possible for Claude to safely take more autonomous actions. The results it reports: on an evaluation using stronger attacks sourced by professional red-teamers, attacks that reached the model succeeded 17.6 percent of the time against Opus 4.5 and 3.8 percent against Opus 5 before any additional safeguards, while with probes and the safety classifier no attacks succeeded against Claude Sonnet 5, Claude Opus 5 or Claude Mythos 5, and Fable 5 saw a 0.3 percent attack success rate, with all successful breaks manually verified as low severity. The post calls prompt injection a moving target and says the team will keep investing in attack discovery, red-teaming and stronger classifiers. Claude in Chrome still needs the desktop app to work with files on your computer or other applications, and it does not run on other Chromium browsers or on mobile yet.

这篇文章大部分内容都在讲 prompt injection，也就是把恶意指令藏在网页、邮件或表单字段里，试图诱导 agent 违背用户意愿的那类攻击。Claude Blog 说，团队用不断扩充的攻击库训练 Claude，这些攻击来自内部自动化攻击程序、外部红队和真实世界监控；还部署了 probe，在 Claude 行动之前先筛查网页内容；并新增了分类器，让 Claude 可以安全地执行更多自主操作。文章给出的结果包括：在一轮由专业红队提供更强攻击的评测中，在加入额外防护之前，触及模型的攻击对 Opus 4.5 的成功率是 17.6%，对 Opus 5 是 3.8%；而在 probe 加安全分类器的情况下，Claude Sonnet 5、Claude Opus 5 和 Claude Mythos 5 都没有被攻破，Fable 5 的攻击成功率是 0.3%，所有成功突破的案例都经过人工确认，属于低严重度场景。文章说 prompt injection 是一个不断移动的目标，团队会持续投入攻击发现、红队测试和更强的分类器。Claude in Chrome 处理电脑上的文件或调用其他应用仍需桌面版，也还不能在其他 Chromium 浏览器或手机上运行。

- [Claude Blog: Claude in Chrome is generally available / Claude in Chrome 正式可用](https://claude.com/blog/claude-in-chrome-generally-available)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
