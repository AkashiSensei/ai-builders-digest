[English](../../en/daily/ai-digest-2026-09-12-Sat.md) | [中文](../../zh/daily/ai-digest-2026-09-12-Sat.md) | [Bilingual](./ai-digest-2026-09-12-Sat.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. Astra's shipping spree is outrunning its own launch calendar, and OpenAI is clearing the trust debt in public.** Codex and ChatGPT lead Thibault Sottiaux lists Images 2.5, GPT-Live-1, Agents API, Data Agent, and ChatGPT for Financial Services as Astra-powered ships in a single week, and points out that it is not even DevDay yet. He also posted a candid reset: an opt-in context-management experiment that could cause early stops was disabled after an estimated 4,000 to 5,000 users were affected, some skills written for previous models were triggering too often or blocking the model from checking its work, and badly configured engines behind a measured quality degradation were removed. OpenAI also hired Aidan and Sasha from the Git AI team, the makers of an open-source tool that shows how coding agents contribute to a codebase, and committed to keeping Git AI open source. Peter Steinberger added a concrete demo of where computer use stands, showing Astra driving a cloud session playing Doom.

**1. Astra 的发布节奏已经跑在了自家发布会前面，OpenAI 正在公开清理质量欠账。** OpenAI 负责 Codex 与 ChatGPT 的 Thibault Sottiaux 列出本周由 Astra 驱动的产品：Images 2.5、GPT-Live-1、Agents API、Data Agent 和 ChatGPT for Financial Services，并指出这还不是 DevDay。他还发布了一次坦诚的 reset：一个可能导致提前中断的 opt-in 上下文管理实验在影响约 4000 到 5000 名用户后被关闭；一些为旧模型编写的 skills 触发过于频繁，或让模型无法检查自己的工作；一些配置不当、被测量到造成质量下降的引擎也被移除。OpenAI 还招募了 Git AI 团队的 Aidan 和 Sasha，他们开发的 open-source 工具可以展示 coding agents 如何影响代码库，OpenAI 承诺让 Git AI 继续开源。Peter Steinberger 补上了一个具体的演示：Astra 在云会话里通过 computer use 玩 Doom。

**2. Evals are becoming the discipline that decides whether AI works, and pass/fail scores are not enough.** Anthropic's Thariq argues it is basically impossible to interpret evals from pass/fail scores alone, because many benchmark failures come from overly strict hidden tests and the model's answer sometimes makes more sense than the expected result. He also shipped plugin evals, run with `claude plugin eval init`, aimed at the complaint that it is hard to know whether your skills still work after a new model release. Meta's Madhu Guru blames failed enterprise AI programs on old-school playbooks, under-invested evals, and platform teams building from the outside, and prescribes hiring people who have shipped AI, making evals first class, and embedding builders inside finance, sales, and support. Every CEO Dan Shipper says benchmark scores do not predict performance on your real work, which is why his team is turning three years of hands-on vibe checks into personal, quantitative benchmarks.

**2. Evals 正在成为判断 AI 是否真正可用的核心功课，只看 pass/fail 分数远远不够。** Anthropic 的 Thariq 认为，如今只看通过或失败几乎无法解读 evals，因为很多 benchmark 失败来自过于严格的隐藏测试，有时模型的答案比预期结果更合理。他还上线了 plugin evals，用 `claude plugin eval init` 在插件目录里运行，回应的是「新模型发布后很难知道 skills 是否还管用」这一反馈。Meta 的 Madhu Guru 把企业 AI 失败归咎于三件事：沿用旧时代的 playbook、对 evals 投入不足，以及由中心平台团队从外部为公司造 AI，导致工具与真正做事的人的工作流、上下文和判断脱节。他的处方是：招募真正做过 AI 产品的负责人，把 evals 变成一等公民，并把最好的 AI builders 嵌入 finance、sales 和 support，与业务一起构建，而不是替业务构建。Every CEO Dan Shipper 说，benchmark 分数并不能说明模型在真实工作中的表现，这也是团队把三年的手感评测升级为个人化、可量化 benchmark 的原因。

**3. The software factory debate is really a debate about where the human stays in the loop.** Peter Yang is skeptical of end-to-end software factories, arguing that outside verification and testing, AI cannot yet improve a product or build a new feature without a human defining requirements and checking the work, and that one wrong assumption in an overnight run can waste the whole token budget. Coinbase CEO Brian Armstrong describes the opposite discipline: every team and repository gets a "brain" of past incidents, financial controls, A/B tests, and pull-request history that agents ingest before changing code. When a human corrects the agent, that correction has to flow back into the brain so the fix applies to every future case, which is what turns one-shot pull-request acceptance into a recursive self-improvement system. His internal harness, Toshi, planned a feature as three phases of ten parallel agent tasks and reported all ten done before he recorded a podcast.

**3. 关于 software factory 的争论，本质上是人类应该留在回路的哪个位置。** Peter Yang 对端到端的 software factory 持怀疑态度，他认为除了验证和测试之外，AI 还无法在没有人类定义需求和检查工作的情况下自我改进产品，或从头到尾构建新功能，而且夜间自动运行只要有一个错误假设，整个 token 预算就可能白花。Coinbase CEO Brian Armstrong 描述的是另一种纪律：每个团队和代码仓库都有一个 brain，里面装着过往事故、财务控制、A/B 测试和 pull request 历史，agent 在改代码前会先读它。当人类修正 agent 的产出时，这次修正必须回流进 brain，让修复适用于未来所有情况，这才让一次性 pull request 的接受率逐步上升，形成他所说的递归自我改进系统。他的内部 harness 叫 Toshi，能先把一个功能规划成三个阶段、每阶段十个并行 agent 任务，并在播客录制前报告十项全部完成。

**4. Agentic finance is moving from metaphor to plumbing.** On No Priors, Armstrong lays out Coinbase's three bets: an everything exchange, stablecoin payments, and Agentic Finance. Agents can get self-custodial wallets and their own accounts with no KYC process, because they have no government ID, and roughly 76% of the agent ecommerce transactions Coinbase sees are under 30 cents, below the roughly 30-cent flat minimum that makes card payments uneconomic for small transactions. The X402 payment protocol Coinbase incubated and donated to the Linux Foundation now has Google, Cloudflare, and AWS working on it. The same primitive hunger shows up elsewhere: Box CEO Aaron Levie says Box can now be mounted into agent sandboxes so agents can read and write files, and Vercel CEO Guillermo Rauch says Tailscale's model router runs on Vercel AI Gateway, calling AI gateways the new CDNs.

**4. Agentic finance 正在从比喻变成真正的基础设施。** 在 No Priors 里，Armstrong 列出了 Coinbase 的三个方向：everything exchange、stablecoin payments，以及他所说的 Agentic Finance。Agent 可以获得自托管钱包和自己的账户，不需要 KYC，因为 agent 没有政府身份证；Coinbase 看到的 agent 电商交易中约有 76% 金额低于 30 美分，低于约 30 美分的刷卡固定最低费用，这让小额交易在经济上不划算。Coinbase 孵化并捐给 Linux Foundation 的 X402 支付协议，现在有 Google、Cloudflare 和 AWS 一起参与。同样的基础能力需求也出现在别处：Box CEO Aaron Levie 说 Box 现在可以挂载到 agent sandbox，让 agent 读写文件；Vercel CEO Guillermo Rauch 说 Tailscale 的 model router 由 Vercel AI Gateway 提供底层支持，并称 AI gateway 就是新的 CDN。

**5. Builders are rethinking how teams, credit, and attention get allocated.** Zara Zhang calls the one-person company overrated, because building something new is lonely and it is easy to lose motivation without someone to brainstorm, suffer, and celebrate with. FPV Ventures partner Nikunj Kothari watches successful VCs fight over attribution for rare large exits, warns that emerging managers who did the work often do not get the credit, and says founders are the real reference checks. Cursor's Ryo Lu highlights long-lived agents for big ideas now shipping in Cursor, while Peter Yang splits his own stack between local scheduled tasks in Codex and cloud tasks in Grok Bot. Y Combinator's Garry Tan argues for more and higher measures of excellence rather than removing standardized tests.

**5. Builders 正在重新思考团队、功劳和注意力应该如何分配。** Zara Zhang 认为「一人公司」被高估了：AI 确实让一个人能做更多事，但从零构建一件新东西可能极其孤独，你需要有人一起头脑风暴、一起扛、一起庆祝；如果没有人和你一起把自己绑在桅杆上，动力非常容易消失。FPV Ventures 合伙人 Nikunj Kothari 观察到，成功的 VC 会为稀少的大额退出争夺功劳，他提醒说真正出力的新兴 GP 往往得不到应有的认可，而创始人本人才是真正的 reference check。Cursor 的 Ryo Lu 强调，为大想法服务的 long-lived agents 现在已经在 Cursor 上线；Peter Yang 则把自己的工作流拆得很清楚：本地定时任务放在 Codex，云端任务迁到 Grok Bot。Y Combinator 的 Garry Tan 主张提供更多、更高的卓越标准，而不是取消标准化考试。

## X / Twitter

### Thibault Sottiaux: Codex & ChatGPT at OpenAI

Sottiaux says Astra shipped a wave of products in a single week: Images 2.5, GPT-Live-1, Agents API, Data Agent, and ChatGPT for Financial Services, with more planned and DevDay still ahead. In a separate update he walked through fixes for reported quality issues: skills written for previous models were triggering too often or preventing the model from checking its work, an opt-in context-management experiment that could cause early stops or replies to older messages was disabled after an estimated 4,000 to 5,000 users were affected, and badly configured engines behind a measured quality degradation were removed. He also welcomed Aidan and Sasha from the Git AI team to OpenAI, saying their open-source tool helps developers understand how coding agents contribute to a codebase, and committed to keeping Git AI open source.

Sottiaux 说，Astra 在一周内交付了一批产品：Images 2.5、GPT-Live-1、Agents API、Data Agent 和 ChatGPT for Financial Services，后面还有更多计划，而 DevDay 尚未到来。在另一条更新里，他逐项说明了质量问题的修复：为旧模型编写的 skills 触发过于频繁，或让模型无法检查自己的工作；一个可能导致提前中断或回复旧消息的 opt-in 上下文管理实验在影响约 4000 到 5000 名用户后被关闭；一些配置不当、被测量到造成质量下降的引擎也被移除。他还欢迎 Git AI 团队的 Aidan 和 Sasha 加入 OpenAI，称他们的 open-source 工具能帮助开发者理解 coding agents 如何影响代码库，并承诺让 Git AI 继续开源。

- [Thibault Sottiaux on Astra's week of ships](https://x.com/thsottiaux/status/2098639827084480864)
- [Thibault Sottiaux on the reset and quality fixes](https://x.com/thsottiaux/status/2098612714704891959)
- [Thibault Sottiaux on the Git AI team joining OpenAI](https://x.com/thsottiaux/status/2098569976143806918)

### Peter Yang

Yang says he has settled on a clean split for his agents: all local scheduled tasks live in Codex, while cloud tasks are being ported to Grok Bot. He is also skeptical of software factories, arguing that outside verification and testing, AI is not yet at a point where it can self-improve a product or build a new feature end to end without a human in the loop. His evidence is practical: whenever he loops something overnight to build something new, one wrong assumption can turn the entire run into a waste of tokens. He ends with a challenge: what products or features have actually been built end to end with a software factory and no human defining the requirements or checking the work?

Yang 说，他为自己的 agent 定下了一个清晰的分工：所有本地定时任务放在 Codex，云端任务则迁往 Grok Bot。他也对 software factory 持怀疑态度，认为除了验证和测试，AI 还没到能在没有人类定义需求、检查工作的情况下自我改进产品，或端到端构建新功能的地步。他的依据很实际：每次让任务在夜间自动构建新东西，只要有一个假设错了，整个运行就变成对 token 的浪费。他最后发问：有哪些产品或功能是真的由 software factory 端到端做出来，而且没有人类定义需求或检查工作？

- [Peter Yang on splitting local and cloud tasks](https://x.com/petergyang/status/2098614492066435228)
- [Peter Yang on software factories](https://x.com/petergyang/status/2098565668241334366)

### Madhu Guru: Senior Director, AI at Meta

Guru diagnoses why most enterprise AI efforts fail. The first mistake is using old-school playbooks: a CEO appoints a trusted lieutenant to run a central AI team staffed with trusted insiders, but the team structures, product patterns, and launch habits that worked for incremental software do not work for AI, which requires experimentation and invention. The second is under-investing in evals by not understanding what good looks like. The third is building AI for the company from the outside, where a central platform team ships tools disconnected from the actual workflows, context, and judgment of the people doing the work, producing begrudging adoption rather than meaningful productivity gains. His prescription: hire leaders who have actually built AI products, make evals a first-class citizen, and embed the best AI builders inside finance, sales, and support to build with those functions rather than for them.

Guru 诊断了大多数企业 AI 项目失败的原因。第一个错误是沿用旧时代的 playbook：CEO 指派一位信任的副手来领导中心 AI 团队，再从公司各部门拉来一群信任的人；但过去那套团队结构、产品模式和发布学习方式并不适用于 AI，AI 需要实验和发明。第二个错误是对 evals 投入不足，并不清楚什么才算做好。第三个错误是从外部为公司造 AI：中心平台团队交付的工具与真正做事的人的工作流、上下文和判断脱节，结果只有勉强的采用，没有实质性的生产力提升。他的处方是：招募真正做过 AI 产品的负责人，把 evals 变成一等公民，并把最好的 AI builders 嵌入 finance、sales 和 support，与这些职能一起构建，而不是替它们构建。

- [Madhu Guru on why enterprise AI efforts fail](https://x.com/realmadhuguru/status/2098448235048378456)

### Thariq: Claude Code at Anthropic

Thariq says it is basically impossible to interpret evals by looking only at pass/fail scores these days, because many benchmark failures come from overly strict hidden tests and in some cases the model's answer makes more sense than the expected result. He also announced plugin evals to address the feedback that it is hard to know whether your skills are still working with new model releases; the command is `claude plugin eval init`, run inside your plugin folder.

Thariq 说，如今只看 pass/fail 分数基本无法解读 evals，因为很多 benchmark 失败来自过于严格的隐藏测试，有时模型的答案比预期结果更合理。他还宣布了 plugin evals，回应的是「新模型发布后很难知道 skills 是否还管用」这一反馈，命令是在插件目录里运行 `claude plugin eval init`。

- [Thariq on plugin evals](https://x.com/trq212/status/2098531560643539440)
- [Thariq on interpreting evals](https://x.com/trq212/status/2098490139798655427)

### Amjad Masad: CEO of Replit

Masad announced that Replit has acquired a business built entirely on Replit, and said he expects it to be the first of many. He also highlighted a new feature, Routines with budgets.

Masad 宣布 Replit 收购了一家完全建立在 Replit 之上的业务，并表示这预计只是众多收购中的第一笔。他还介绍了一个新功能：Routines with budgets。

- [Amjad Masad on acquiring a business built on Replit](https://x.com/amasad/status/2098548464452055437)
- [Amjad Masad on Routines with budgets](https://x.com/amasad/status/2098317466682179643)

### Guillermo Rauch: CEO of Vercel

Rauch says Tailscale's model router is powered by Vercel AI Gateway as its underlying infrastructure, and uses the moment for a broader argument: AI gateways are the new CDNs. Going direct to origin is brittle, and building it yourself is painful and costly.

Rauch 说，Tailscale 的 model router 由 Vercel AI Gateway 作为底层基础设施提供支持，并借此给出一个更宏观的判断：AI gateway 就是新的 CDN。直接回源很脆弱，自己动手又痛苦又昂贵。

- [Guillermo Rauch on AI gateways as the new CDNs](https://x.com/rauchg/status/2098531157230969062)

### Aaron Levie: CEO of Box

Levie says Box can now be mounted to agent sandboxes, making it far easier for an agent to read and write files on the agent's computer. His framing: as AI agents execute critical workflows in the enterprise, they will need the same primitives that people have had.

Levie 说，Box 现在可以挂载到 agent sandbox，让 agent 读写自己电脑上的文件变得容易得多。他的框架是：当 AI agents 在企业里执行关键工作流时，它们需要人类早已拥有的那些基础能力。

- [Aaron Levie on mounting Box to agent sandboxes](https://x.com/levie/status/2098478938003841123)

### Ryo Lu

Lu says long-lived agents for big ideas are now available in Cursor.

Lu 说，为大想法服务的 long-lived agents 现在已经在 Cursor 上线。

- [Ryo Lu on long-lived agents in Cursor](https://x.com/ryolu_/status/2098324260867772806)

### Garry Tan: President & CEO of Y Combinator

Tan argues that once you score 1600 on the SAT, you should unlock a second, harder test that gives you a second score on top of it, because we should have more and higher measures of excellence. His criticism is that banning the SAT turns everything into a random lottery in which excellence cannot be recognized.

Tan 主张，SAT 考到 1600 分之后，应该解锁一场更难的第二次考试，在 1600 之上再给一个分数，因为我们应该有更多、更高的卓越衡量标准。他的批评是，取消 SAT 会让一切变成随机抽签，卓越反而无法被识别。

- [Garry Tan on higher measures of excellence](https://x.com/garrytan/status/2098615692425851205)

### Zara Zhang: Builder

Zhang argues that the idea of a one-person company is overrated. Yes, AI lets one person do much more, but building something new can be a profoundly lonely experience, and you need someone to brainstorm with, suffer with, and celebrate with. Without tying yourself to the mast alongside someone else, she says, it is extremely easy to lose motivation.

Zhang 认为「一人公司」这个概念被高估了。AI 确实让一个人能做更多事，但从零构建一件新东西可能极其孤独，你需要有人一起头脑风暴、一起扛、一起庆祝。她说，如果不和另一个人一起把自己绑在桅杆上，动力非常容易消失。

- [Zara Zhang on the one-person company](https://x.com/zarazhangrui/status/2098483800456179923)

### Nikunj Kothari: Partner at FPV Ventures

Kothari opens with the line that success has many fathers but failure is an orphan, and says he never grasped its gravity until he watched extremely successful VCs fight over attribution for hot deals. Because large exits and markups are genuinely rare, and are what the next fund gets raised on, he expects many names to be scrubbed or conveniently omitted as people revise history to claim credit for what eventually works. His concern is emerging GPs, whose track record is the only thing they can take to future LPs and who often do not get the credit they deserve. His short-term advice: hold your founders close, because they will be the real reference checks.

Kothari 以「成功有许多父亲，失败却是孤儿」开场，并说直到看见非常成功的 VC 为热门交易争夺功劳，他才真正体会到这句话的分量。由于大额退出和 markups 确实稀少，而它们正是下一支基金募资的依据，他预计未来几年会看到许多名字被抹掉或恰当地省略，因为大家都会改写历史，去认领最终成功的那些项目。他担心的是新兴 GP：他们能带去见未来 LP 的只有自己的业绩记录，却往往得不到应得的认可。他给出的短期建议是：握紧你的创始人，因为他们才是真正的 reference check。

- [Nikunj Kothari on attribution and emerging managers](https://x.com/nikunj/status/2098550718923997430)

### Peter Steinberger

Steinberger submitted a patch to trycua to make keys work reliably under Linux, calling the framework dope overall. He also showed Astra running in an OpenClaw cloud session playing Doom through computer use, joking that it is not quite AGI yet but probably beats a fly brain.

Steinberger 向 trycua 提交了一个补丁，让按键在 Linux 下可靠工作，并称这个框架整体很棒。他还展示了 Astra 在 OpenClaw 云会话里通过 computer use 玩 Doom，并开玩笑说这还不算 AGI，但大概比苍蝇的大脑强。

- [Peter Steinberger on patching trycua for Linux keys](https://x.com/steipete/status/2098527982709256637)
- [Peter Steinberger on Astra playing Doom through CUA](https://x.com/steipete/status/2098527519213604889)

### Dan Shipper: CEO of Every

Shipper argues that better benchmark scores do not tell you much about how well a model performs on your real work. That is why Every has spent the last three years doing vibe checks on new models, long-form reviews based on hands-on testing against real work, and why the team is now doubling down on something more quantitative: an internal platform built inside Every that lets everyone create personal benchmarks from their day-to-day work.

Shipper 认为，更好的 benchmark 分数并不能说明模型在你真实工作中的表现。这也是 Every 过去三年坚持对新模型做 vibe check 的原因：基于真实工作进行上手测试的长文评测。如今团队要进一步量化，在 Every 内部搭了一个平台，让每个人都能用自己的日常工作创建个人 benchmark。

- [Dan Shipper on vibe checks and personal benchmarks](https://x.com/danshipper/status/2098481799047647715)

## Podcast

### No Priors: Coinbase's Everything Exchange: Agentic Finance, Stablecoins, and Tokenization with CEO Brian Armstrong

The Takeaway: the agent economy needs its own financial rails, and whoever builds them will decide whether AI moves from getting stuck at a paywall to paying its own way.

核心结论：agent 经济需要属于自己的金融轨道，而搭建这些轨道的团队，将决定 AI 能否从卡在付费墙前，走到自己付钱办事。

Brian Armstrong, cofounder and CEO of Coinbase, thinks the biggest near-term shift is not a smarter model but a new kind of customer: software agents that need to transact. Crypto rails were useful for humans, he argues, but they will be essential for AI. On No Priors he laid out Coinbase's three bets: an everything exchange where every asset class trades in one place, stablecoin payments that move money anywhere in under a second for under a cent, and what he calls Agentic Finance.

Brian Armstrong 是 Coinbase 的联合创始人兼 CEO。他认为短期内最大的变化不是更聪明的模型，而是一种新的客户：需要完成交易的软件 agent。他说，crypto 轨道对人类很有用，但对 AI 而言将是必需品。在 No Priors 里，他列出了 Coinbase 的三个方向：让所有资产类别在一个地方交易的 everything exchange、能让资金在不到一秒内以不到一美分的成本流向世界任何角落的 stablecoin payments，以及他所说的 Agentic Finance。

The numbers explain why the plumbing matters. Card payments carry a minimum fee of roughly 30 cents plus a percentage, which makes anything under a dollar awkward, and about 76% of the agent ecommerce transactions Coinbase sees are under 30 cents. Most of that is agents buying data or calling specialized agents, not people buying things. So Coinbase gives agents self-custodial wallets and accounts with no KYC, because an agent has no government ID. "We don't want the AIs to be unbanked," Armstrong says. "If we want to bank the AIs, they deserve financial services as well." Coinbase incubated the X402 payment protocol and donated it to the Linux Foundation, where Google, Cloudflare, and AWS are now working on it.

数字解释了为什么这些基础设施重要。刷卡支付有大约 30 美分的固定最低费用，再加一定比例，这让低于一美元的交易很难成立；而 Coinbase 看到的 agent 电商交易中，约有 76% 金额低于 30 美分。这些交易大多是 agent 在购买数据，或调用专门化的其他 agent，而不是人在买东西。因此 Coinbase 给 agent 提供自托管钱包和自己的账户，不需要 KYC，因为 agent 没有政府身份证。Armstrong 说：「我们不想让 AI 没有银行账户。如果我们想让 AI 进入银行体系，它们也值得拥有金融服务。」Coinbase 孵化了 X402 支付协议并把它捐给 Linux Foundation，如今 Google、Cloudflare 和 AWS 都在参与。

Armstrong is also running the playbook on Coinbase itself. Each team and repository gets a "brain" of past incidents, financial controls, A/B tests, and pull-request history that agents ingest before changing code. When a human edits the agent's work, the correction flows back into the brain for every future case, which is how one-shot pull-request acceptance climbs into what he calls a recursive self-improvement system. A harness that can plan a feature, spin up ten agents to build ten pieces in parallel, and report back before the recording starts is already doing that.

Armstrong 也在 Coinbase 内部运行这套方法。每个团队和代码仓库都有一个 brain，里面装着过往事故、财务控制、A/B 测试和 pull request 历史，agent 在改代码前会先读它。当人类修改 agent 的产出时，这次修正必须回流进 brain，让修复适用于未来所有情况，这才让一次性 pull request 的接受率不断上升，形成他所说的递归自我改进系统。一个能在播客开录前把一个功能规划好、拉起十个 agent 并行完成十个模块并回报结果的 harness，已经在这样运转。

Beyond crypto, Armstrong's other company, New Limit, is chasing epigenetic reprogramming. Its first liver program targets alcohol-related liver disease, which he estimates could be worth $20 billion if it works, as a step toward restoring younger cell function across the body. His long-run bet is that most of the diseases that take us out are diseases of aging, so reversing that decline is the meta-problem worth solving.

在 crypto 之外，Armstrong 的另一家公司 New Limit 正在研究表观遗传重编程。它的第一个肝脏项目针对酒精相关肝病，他估计如果成功，这个药本身价值约 200 亿美元，而这只是恢复全身年轻细胞功能的一步。他的长期判断是：带走我们的大多数疾病都与衰老相关，因此逆转这种衰退才是真正值得解决的元问题。

- [No Priors: Coinbase's Everything Exchange: Agentic Finance, Stablecoins, and Tokenization with CEO Brian Armstrong](https://www.youtube.com/watch?v=uLDK4l_-gUE)

## Blog

The validated blog feed contained no new qualifying items.

经过验证的博客 feed 中没有新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
