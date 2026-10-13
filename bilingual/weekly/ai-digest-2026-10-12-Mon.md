[English](../../en/weekly/ai-digest-2026-10-12-Mon.md) | [中文](../../zh/weekly/ai-digest-2026-10-12-Mon.md) | [Bilingual](./ai-digest-2026-10-12-Mon.md)

---

# AI Builders Digest

Coverage: 2026-10-05 00:00 to 2026-10-12 00:00 Asia/Shanghai
覆盖范围：2026-10-05 00:00 至 2026-10-12 00:00（Asia/Shanghai）
Known feed coverage gaps (UTC): X/Twitter 2026-10-07T06:45:10.543Z to 2026-10-07T06:47:17.990Z (0.04h); X/Twitter 2026-10-10T06:42:38.645Z to 2026-10-10T06:43:45.305Z (0.02h); X/Twitter 2026-10-11T06:43:45.305Z to 2026-10-11T07:04:13.260Z (0.34h).
已知 feed 覆盖缺口（UTC）：X/Twitter 2026-10-07T06:45:10.543Z 至 2026-10-07T06:47:17.990Z（0.04 小时）；X/Twitter 2026-10-10T06:42:38.645Z 至 2026-10-10T06:43:45.305Z（0.02 小时）；X/Twitter 2026-10-11T06:43:45.305Z 至 2026-10-11T07:04:13.260Z（0.34 小时）。

## Reader's Briefing / 导读

The week's most repeated claim was that the primary user of software is becoming an agent. Vercel CEO Guillermo Rauch reported that 58.18% of traffic on Vercel's network is now bot-originated, up from 32% in January 2024, that more than 60% of deployments are agentic, and that up to 83% of pageviews on Vercel's docs come from agents. Meta senior director of AI Madhu Guru listed what that rebuild demands: operating systems where agents are first-class users, cloud infrastructure and permissions built for thousands of agents, and interfaces for humans and agents together.

本周被重复最多的一句话是：软件的首要用户正在变成 agent。Vercel CEO Guillermo Rauch 公布了 Vercel 网络上的机器流量数据：目前 58.18% 的流量来自 bot，而 2024 年 1 月这一比例是 32%；超过 60% 的 deployment 由 agent 发起，而 2026 年 1 月只有约 3%；Vercel 自家文档站点的 pageview 中，最多有 83% 来自 agent。Meta AI 高级总监 Madhu Guru 把同样的变化映射到整个 stack：操作系统的用户以 agent 为先、为成千上万 agent 准备的云基础设施和权限体系，以及人与 agent 共同使用的界面。

Compute economics was the second theme, framed less around training than around the flood of inference agents will create. Box CEO Aaron Levie argued agent swarms and background agents will consume 1,000X more tokens than people prompting one at a time, and that the one-agent chat model will look like a relic within a year or two. Google's AI infrastructure chief Amin Vahdat gave the physical version: Google must roughly double token-generation capacity every six months, with as much coming from software as from hardware.

第二个主题是算力经济，讨论的重点不是训练，而是 agent 将带来的推理洪水。Box CEO Aaron Levie 认为，agent swarm 和后台 agent 消耗的 token 会比人类逐个 prompting 多出 1000 倍，而"一次只跟一个 agent 对话"的模式在一两年内就会像老古董。Google AI 基础设施负责人 Amin Vahdat 给出了物理层面的版本：Google 必须大约每六个月把 token 生成能力翻一倍，其中来自软件的部分和来自硬件的一样多。

Labs kept compressing the price of intelligence. Anthropic shipped Haiku 5.5, citing major alignment improvements, and halved cache-read prices on Sonnet 5.5 to $0.10 per million tokens, making it about 20% cheaper for long-running work. OpenAI's Thibault Sottiaux re-shipped Codex Cloud, made steering instant, released GPT-6.1 Sol ultrafast and tied ChatGPT subscriptions into a Devin subscription. On No Priors, Reflection AI's Misha Laskin launched Beam, a 500B-parameter open model with 23B active parameters.

各大实验室继续压低智能的价格。Anthropic 发布 Haiku 5.5，称其在 alignment 评测上有明显提升，并把 Sonnet 5.5 的 cache read 价格降到每百万 token 0.10 美元，使其在长时间任务上便宜约 20%。OpenAI 的 Thibault Sottiaux 重新上线了更好的 Codex Cloud，让 steering 变为即时，发布 GPT-6.1 Sol ultrafast，并把 ChatGPT 订阅打通为 Devin 订阅。在 No Priors 上，Reflection AI 的 Misha Laskin 发布了 Beam，一个总参数 5000 亿、激活参数 230 亿的开放权重模型。

When builders named the enterprise bottleneck, they named evals. Madhu Guru said the most common mistake is treating evals as a QA step after the agent is built, when "your evals are your product spec." Levie said deployment is bottlenecked by the ability to test and tune agents in real work environments. Applied Compute's CEO described reinforcement learning as "a hill climbing machine" where "the hardest part is actually defining the hill to climb."

提到企业落地的瓶颈时，大家不约而同地说到 eval。Madhu Guru 说，最常见的错误是把 eval 当成 agent 建成之后的额外 QA 步骤，而"你的 eval 就是你的产品规格"。Levie 认为，agent 部署卡在能否在真实工作环境中测试和调优 agent 上。Applied Compute 的 CEO 把 reinforcement learning 形容为一台"爬坡机器"，而"最难的部分其实是如何定义要爬的那座山"。

Open weights and safety ran through both X and the podcasts. Laskin argued that with only a few hundred safety researchers inside closed labs it is impossible to cover the long tail of unintended consequences, evoking Linus's Law, and called open models "Trojan horses for the infrastructure that they bring with them." Madhu Guru said open weights did not start the fall in price per unit of intelligence but are "a tailwind on a trend that was already underway."

开放权重与安全同时贯穿了 X 和播客。Laskin 认为，闭源实验室里只有几百名安全研究员，根本不可能覆盖长尾的意外后果，并引用 Linus 定律；他还把开放模型称为"随其一路携带的基础设施的 Trojan horse"。Madhu Guru 认为，开放权重并不是单位智能价格下降的起点，而是"一个本已在进行中的趋势的顺风"。

The most concrete operator lesson came from Every. CEO Dan Shipper said OpenAI's Dots had become his main interface to ChatGPT, useful for filtering Slack noise and school emails but still maddening on permissions, and predicted the character names are disposable because users switch as soon as something performs better. Every's podcast explained why the team replaced personal agent-per-person setups with one shared company agent that everyone contributes to.

最具体的实操经验来自 Every。CEO Dan Shipper 说 OpenAI 的 Dots 已经成为他用 ChatGPT 的主要界面，能帮他过滤 Slack 噪音和学校邮件，但权限问题依然令人抓狂，并预言这些名字角色是易耗品，因为只要出现更好用的东西用户就会换。Every 自己的播客解释了团队为什么放弃"每人一个 personal agent"的做法，改为一个共享的公司 agent，让所有人都为它贡献。

## X / Twitter

### Box CEO Aaron Levie

Levie argued agent swarms and background agents will consume 1,000X more tokens than one-at-a-time prompting, so "the vast, vast majority of tokens will be consumed by agents that are just doing continuous work for us," and said the one-agent chat model will look like a relic within a year or two. He said agent deployment is bottlenecked by the ability to test and tune agents on real work environments, and predicted every enterprise will need someone running evals and simulated environments. He called cyber a defining AI domain where models must be contained like insider risks with a "zero trust" architecture, and Box shipped Box Mount to mount Box as a file system inside any agent sandbox.

Levie 认为，agent swarm 和后台 agent 消耗的 token 会比逐个 prompting 多出 1000 倍，因此"绝大多数 token 都会由那些持续为我们干活的 agent 消耗"，并说"一次一个 agent"的对话模式在一两年内就会像老古董。他表示 agent 落地卡在能否在真实工作环境中测试和调优 agent，并预测每家企业都会有人专门负责 eval 和模拟环境。他称 cyber 是 AI 最具决定性的领域之一，模型必须像内部风险一样被 zero trust 架构隔离；Box 还发布了 Box Mount，让开发者把 Box 作为文件系统挂载进任意 agent sandbox。

https://x.com/levie/status/2108750943680630893 | https://x.com/levie/status/2107283615247999257 | https://x.com/levie/status/2107680435644039269 | https://x.com/levie/status/2108952226714865966 | https://x.com/levie/status/2108279490510193078

### Vercel CEO Guillermo Rauch

Rauch reported that 58.18% of traffic on Vercel's network is bot-originated, that over 60% of deployments are agentic and that up to 83% of pageviews on Vercel's docs come from agents, concluding that "the web will thrive, but it will be built for and by agents." He said that as models speed up, harness overhead matters more, and that Vercel's Rust migration had contested returns because the human migration cost was so high: what is "best for humans" is no longer necessarily "best for business." He introduced gdp-ts, a TypeScript library and linter that requires "proofs" of authorization checks to stop teams and agents from shipping security bugs.

Rauch 公布，Vercel 网络上 58.18% 的流量来自 bot，超过 60% 的 deployment 由 agent 发起，Vercel 文档站点最多 83% 的 pageview 来自 agent，并总结说"网络会更加繁荣，但它将被 agent 所建、为 agent 而建"。他说随着模型变快，harness 的开销越来越重要；虽然 Vercel 把项目迁移到了 Rust，但人力迁移成本让回报充满争议，因为"对人类最好"的选择不再等于"对生意最好"。他发布了 gdp-ts，一个 TypeScript 库和 linter，要求提供授权检查的 proof，以防团队和 agent 把安全 bug 送上生产。

https://x.com/rauchg/status/2108733051283050964 | https://x.com/rauchg/status/2106885457212825983 | https://x.com/rauchg/status/2106863842450133114 | https://x.com/rauchg/status/2107119811444748555

### OpenAI's Thibault Sottiaux (Codex and ChatGPT)

Sottiaux ran a public 28-day streak promising either a clear improvement for most Codex/ChatGPT users or a full reset, and honored a community vote for a reset while keeping the shipped improvements. He said Codex Cloud was silently re-shipped and is "pretty good now," made steering instant, released GPT-6.1 Sol ultrafast, announced a new ChatGPT, and tied ChatGPT subscriptions into a Devin subscription.

Sottiaux 发起了一个公开的 28 天挑战：每天要么给大多数 Codex/ChatGPT 用户带来明确改进，要么彻底 reset，并在社区投票要求 reset 时照做，同时保留已上线的改进。他说 Codex Cloud 被悄悄重新上线，"现在相当不错"，让 steering 变为即时，发布 GPT-6.1 Sol ultrafast，宣布了新的 ChatGPT，并把 ChatGPT 订阅打通为 Devin 订阅。

https://x.com/thsottiaux/status/2106845241357824205 | https://x.com/thsottiaux/status/2108275041276420573 | https://x.com/thsottiaux/status/2108084615349170480 | https://x.com/thsottiaux/status/2108349826727588000 | https://x.com/thsottiaux/status/2108777962053292398

### Every CEO Dan Shipper

Shipper said OpenAI's Dots have taken over Every: they protect attention by posting results into Slack and bringing back replies, catch school emails and missed Slack messages, and work by voice when you are away from your laptop, though permissions still require repeated approvals. He said Every built Checks, a personal benchmarking platform for measuring how good new models are on real work, and that its company agent could not have been built without Claude Managed Agents. He predicted he will still use a persistent agent in a year, but "Boo will probably be dead," because people switch to whatever performs better.

Shipper 说 OpenAI 的 Dots 已经占领了 Every：它们把结果发到 Slack 再带回回复，从而保护注意力，帮人抓取学校邮件和错过的 Slack 消息，还能在你离开电脑时用语音工作，只是权限仍需反复批准。他说 Every 做了一个个人 benchmark 平台 Checks，用来衡量新模型在真实工作上的表现，并说公司的公司级 agent 离不开 Claude Managed Agents。他预测一年后自己仍会用 persistent agent，但"Boo 大概会死掉"，因为只要出现更好用的东西人们就会换。

https://x.com/danshipper/status/2107890633486582208 | https://x.com/danshipper/status/2108215087030800657 | https://x.com/danshipper/status/2107575089441181861 | https://x.com/danshipper/status/2106892868564431255

### Anthropic's Boris Cherny (Claude)

Cherny said there is "no secret to prompting": talk to Claude like a coworker, give it a goal and it will figure it out, because prompt wording mattered far more in the Sonnet 3.5 era. He now tells the model what to do, how much effort to spend and how to verify it did the right thing, and shared that a single prompt produced working code Claude verified well, with "no bugs so far."

Cherny 说 prompting 没有任何秘密：像跟同事说话一样跟 Claude 交流，给它一个目标，它自己会想办法，因为 prompt 措辞在 Sonnet 3.5 时代要重要得多。他现在只告诉模型三件事：做什么、花多少精力、如何验证自己做对了，并分享说一个 prompt 就产出了可用的代码，Claude 验证得也很好，目前没有 bug。

https://x.com/bcherny/status/2107565388250874193 | https://x.com/bcherny/status/2107565497680314831 | https://x.com/bcherny/status/2108008010253533397

### Anthropic Claude Code's Thariq

Thariq described the "local hands" pattern, where Claude runs in the cloud but reaches files on your computer, and predicted a move toward Claude's brains in the cloud with local hands, while flagging tricky problems if your machine is offline. He said the most common failure he sees is people working outside their expertise who cannot be precise with prompts or plans and burn turns iterating imprecisely. He also ported a side-project Chrome extension from the Agent SDK to Claude Managed Agents with one prompt to Opus 5.5, making it "way more reliable."

Thariq 描述了 local hands 模式：Claude 在云端运行，但能访问你电脑上的文件，并预测未来会走向大脑在云端、local hands 在本地，同时提醒电脑离线时会遇到棘手的技术问题。他说自己见过最常见的失败，是人们在专业领域之外工作时无法把 prompt 和 plan 写得精确，于是不得不大量无谓地反复迭代。他还用一个 prompt 让 Opus 5.5 把一个副业 Chrome 扩展从 Agent SDK 移植到 Claude Managed Agents，可靠多了。

https://x.com/trq212/status/2107229483015258493 | https://x.com/trq212/status/2107580785456976085 | https://x.com/trq212/status/2108021247301062894 | https://x.com/trq212/status/2108689101503566319

### Claude (official account)

Anthropic shipped Haiku 5.5 across AWS, Google Cloud and Microsoft Azure, saying it shows major improvements across almost all alignment evaluations with far fewer instances of misaligned behavior. It halved cache-read prices on Sonnet 5.5 to $0.10 per million tokens, making Sonnet 5.5 roughly 20% cheaper on most long-running work. Claude Docs, Slides and Design left beta for every plan including Free, and Anthropic paused its startup program's Claude Team and $1,000 API credit offers after hundreds of thousands of applicants.

Anthropic 在 AWS、Google Cloud 和 Microsoft Azure 等所有平台上线 Haiku 5.5，称它在几乎所有 alignment 评测上都有明显提升，出现 misaligned 行为的次数大幅减少。它把 Sonnet 5.5 的 cache read 价格降到每百万 token 0.10 美元，使 Sonnet 5.5 在大多数长时间任务上便宜约 20%。Claude Docs、Slides 和 Design 结束 beta，向包括 Free 在内的所有套餐开放；Anthropic 还宣布，由于申请者达到数十万，创业计划中的 Claude Team 和 1000 美元 API credit 将暂停发放。

https://x.com/claudeai/status/2107894057615987198 | https://x.com/claudeai/status/2107894054142787877 | https://x.com/claudeai/status/2107894060229034197 | https://x.com/claudeai/status/2108271559928389679 | https://x.com/claudeai/status/2108404561413349695

### Meta senior director of AI Madhu Guru

Guru argued the most common team mistake is treating evals as an extra QA step once the agent is built, when "your evals are your product spec." He listed the layers to rebuild for agent users, including desktop and mobile operating systems, cloud infrastructure, identity and permissions for thousands of agents, and shared interfaces. He said open-weight models did not start the fall in price per unit of intelligence but are "a tailwind on a trend that was already underway," and that the field moves capability, then trust, then autonomy.

Guru 认为，团队最常见的错误是把 eval 当成 agent 建成后的额外 QA 步骤，而"你的 eval 就是你的产品规格"。他列出了当用户变成 agent 时需要重建的每一层，包括桌面和移动操作系统、云基础设施、面向成千上万 agent 的身份与权限，以及人与 agent 共用的界面。他说开放权重并不是单位智能价格下降的起点，而是"一个本已在进行中的趋势的顺风"，并认为这个领域的方向是能力、然后信任、然后自主。

https://x.com/realmadhuguru/status/2107292113214091355 | https://x.com/realmadhuguru/status/2108236391641706813 | https://x.com/realmadhuguru/status/2108618266776387886 | https://x.com/realmadhuguru/status/2108982858513776899

### Replit CEO Amjad Masad

Masad said AI-powered reverse engineering and decompilation is "absolutely insane" and predicted all software will become "de facto open-source." He warned that desktop AI apps expose users to supply-chain attacks and catastrophic agent mistakes, and said Replit is building a security-focused desktop experience as a Microsoft partner and an early adopter of Nvidia's OpenShell. He said the US is catching up on open-weights models and that "math was bound to fall first" because the purer the field the easier it is for AI to crack.

Masad 说 AI 驱动的逆向工程和反编译简直疯狂，并预言所有软件都会变成事实上的开源。他警告桌面 AI 应用让用户暴露在供应链攻击和 agent 灾难性失误之下，并说 Replit 正与 Microsoft 合作、并作为 Nvidia OpenShell 的早期采用者，打造一个注重安全与可靠的桌面体验。他说美国在开放权重模型上正在追赶，数学注定第一个倒下，因为领域越纯粹，AI 越容易攻破。

https://x.com/amasad/status/2107671204639465961 | https://x.com/amasad/status/2107926712277438503 | https://x.com/amasad/status/2107222388429766970 | https://x.com/amasad/status/2107934939287273551

### Y Combinator President and CEO Garry Tan

Tan argued lab harnesses have an incentive to burn tokens, giving startup harnesses real utility, and pointed to Grep converting token burn into deterministic, repeatable tested code. He predicted "AGI Science Loops" are coming with their own Muse/Instinct equivalents, naming Halmos, and said individual contributors with agents will eventually outproduce comparable people managers from prior eras. He described running the merge queue with GStack's /autoplan and agents that only let green full-CI runs into master, saying he rarely intervenes because "the frontier models are fantastic these days."

Tan 认为实验室的 harness 有烧 token 的动机，这反而让创业公司的 harness 有了真正的价值，并以 Grep 为例，说它能通过观察 agent 的使用，把 token 消耗转化为确定、可重复、经过测试的代码。他预言 AGI Science Loops 即将到来，并会有属于它们的 Muse/Instinct，点名 Halmos 正在做这件事；他还说未来带 agent 的 IC 会比过去同级别的人管更有产出、结果更好。他描述了自己用 GStack 的 /autoplan 和 agent 跑 merge 队列、只把全量 CI 通过的绿色运行合进 master，并说因为现在的前沿模型太棒了，他很少需要插手。

https://x.com/garrytan/status/2107129959550685660 | https://x.com/garrytan/status/2107173670699622830 | https://x.com/garrytan/status/2108433505038606620 | https://x.com/garrytan/status/2108954740013043789

### SPC general partner Aditya Agarwal

Agarwal published a long answer to the question of what an ambitious software engineer should do now, arguing "I can build it" is a weaker advantage now that AI makes working software widely available. He laid out three paths: work on the thing eating software, team up with a world-class domain expert, or accept supervising coding agents on roughly the same backlog, which he called the least compelling. He also celebrated physical intelligence co-founder Sergey Levine visiting SPC and his first Waymo ride with Waymo co-CEO Dmitri Dolgov.

Agarwal 发表了一篇长文，回答一个有野心的软件工程师如今该做什么，认为在 AI 让可运行软件变得唾手可得之后，"我能把它做出来"已经不再是强优势。他给出三条路径：去做那个正在吃掉软件的东西；和世界级领域专家组队；或者接受在同一堆 backlog 上监督 coding agent，而他认为这是最不吸引人的一条。他还庆祝了 physical intelligence 联合创始人 Sergey Levine 到访 SPC，以及自己与 Waymo 联席 CEO Dmitri Dolgov 的第一次 Waymo 体验。

https://x.com/adityaag/status/2107865115831988530 | https://x.com/adityaag/status/2108578813751791926 | https://x.com/adityaag/status/2107934826686759310

### FPV Ventures partner Nikunj Kothari

Kothari said there is "so much alpha in meeting founders at their own office," where you can read the office energy, how cofounders complement each other and what beta releases look like. He warned that VCs rage-baiting on X are destroying their long-term brand, noting two deals that fell apart over the drama. For a seed-stage founder with dwindling runway he offered three options: be a cockroach and get to default profitable, find an orthogonal fast-growing area, or sell or get acquihired and found again later.

Kothari 说到创始人的办公室见他们，能拿到太多 alpha，在那里你能感受到办公室的能量、联合创始人如何互补、beta 产品长什么样。他警告那些在 X 上追逐多巴胺、故意 rage bait 的 VC 正在毁掉自己的长期品牌，并说自己知道有两笔本已谈成的交易因为这场闹剧告吹。对于 runway 将尽的种子期创始人，他给出三个选择：当一只蟑螂、做到默认盈利；找到一个高速增长的正交领域；或者卖身或被 acquihire，之后再去创办新公司。

https://x.com/nikunj/status/2106957269212742135 | https://x.com/nikunj/status/2107706522457497753 | https://x.com/nikunj/status/2108410378233549106 | https://x.com/nikunj/status/2109038632975876395

### Peter Yang (practical AI tutorials and interviews)

Yang interviewed Granola co-founder Sam, who said "the easier it gets to build stuff, the more it matters to really sweat the details," and that it is fine for Granola to be used through an MCP instead of its UI because enterprise internal tooling makes it a non-starter otherwise. Yang said OpenAI simplifying ChatGPT is welcome because it has "become a mess," calling Work's separate brand a mistake. He argued anything you ship can be decompiled and rebuilt by AI, so software margins will depend on proprietary data or distribution.

Yang 采访了 Granola 联合创始人 Sam，后者说做东西越容易，就越需要真正在细节上下功夫，并说 Granola 被通过 MCP 而非其 UI 使用也没关系，因为一旦企业客户变大，内部工具链让它别无选择。Yang 说欢迎 OpenAI 简化 ChatGPT，因为它已经一团乱，并称 Work 单独设品牌是个错误。他认为你发布的任何东西都能被 AI 反编译重建，因此软件的利润将取决于专有数据或分发。

https://x.com/petergyang/status/2106825485624004691 | https://x.com/petergyang/status/2106897211766530299 | https://x.com/petergyang/status/2106926956554195018 | https://x.com/petergyang/status/2107981547102245101

### OpenAI's Nan Yu (product, Codex)

Yu said agents make engineers extremely powerful, but PMs are "generally still bottlenecked on their bandwidth they have to talk to customers," so the ideal engineer-to-PM ratio is 1:1. He described the arc from writing code by hand to tab-completing code to prompting agents, and now "we tab-complete that too," asking whether it is recursive self-improvement. He also worried that fast AI fixes could cause "extreme degradation in systems that no one loves to maintain, but someone has to."

Yu 说 agent 让工程师变得极其强大，但 PM 普遍仍受限于他们必须与客户沟通的带宽，所以理想的工程师对 PM 比例是 1:1。他描述了从手写代码，到 tab 补全代码，到 prompting agent 的演进，而现在连这个也 tab 补全了，并反问这是不是递归式自我改进。他还担心，快速的 AI 修补会导致那些没人愿意维护、但总得有人维护的系统出现极端退化。

https://x.com/thenanyu/status/2108976262698115550 | https://x.com/thenanyu/status/2108671762984731037 | https://x.com/thenanyu/status/2107506074370920796

### OpenClaw creator Peter Steinberger (OpenClaw, OpenAI)

Steinberger said he hooked his team's claw into X so unassigned sessions can be grabbed by anyone, with the agent pinging whoever last worked on the related code. He spoke at OpenAI DevDay 2026 about how teams can use agents to work better together, and celebrated landing a .claw domain.

Steinberger 说他把自己团队的 claw 接到了 X 上，未分配的 session 谁都能接，agent 会去找最近动过相关代码的人。他在 OpenAI DevDay 2026 上讲了团队如何用 agent 更好地协作，并庆祝拿下了 .claw 域名。

https://x.com/steipete/status/2107697554448421160 | https://x.com/steipete/status/2107911769767440832 | https://x.com/steipete/status/2108374513931165759

## Podcast

### Training Data: Google's AI Infrastructure Chief, Amin Vahdat, on the Physics & Economics of Frontier AI

https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

**The Takeaway:** Google measures its buildout in delivered "goodput" per watt, not FLOPS, because at 100,000-accelerator scale something fails multiple times a day and only workload-level performance counts.

**核心结论：** Google 用 delivered goodput 每瓦来衡量建设成果，而不是 FLOPS，因为在 10 万加速器规模下每天都会有多台出故障，只有 workload 层面的性能才算数。

Amin Vahdat runs Google's AI infrastructure during what he calls the biggest buildout in human history, with Google alone expected to spend more than $200 billion on capital expenditure this year. He dismisses FLOPS as a vanity metric; the number that matters is "delivered goodput," the useful work a workload delivers under real failure conditions. At 100,000-accelerator scale, he says something fails multiple times a day and perhaps multiple times an hour, so the hard engineering is continuous near-real-time detection and recovery. Google has told teams to roughly double token-generation capacity every six months, and he says as much of that comes from software and model optimization as from silicon, with most intelligence-per-watt gains coming from models. He walks through the TPU program, launched in 2013 as a bet against what he calls "the bitter lesson of chips," and the 2026 decision to ship two chips, 8i for inference and 8T for training, because inference now justifies specialization. On power, he explains why Google prefers grid connection and years of co-planning over vertical integration, and he is candid that energy is the binding long-term constraint.

Amin Vahdat 负责 Google 的 AI 基础设施，他称这是人类历史上最大的一次建设，仅 Google 一家今年的资本开支预计就超过 2000 亿美元。他不把 FLOPS 当回事，认为它只是虚荣指标；真正重要的是 delivered goodput，也就是在真实故障条件下 workload 实际交付的有用工作。在 10 万加速器规模下，他说每天会出好几次故障，甚至可能每小时好几次，因此最难的工程是持续地、近乎实时地发现故障并恢复。Google 要求团队大约每六个月把 token 生成能力翻一倍，他说其中来自软件和模型优化的部分和来自芯片的一样多，而每一瓦带来的智能提升主要来自模型。他回顾了 2013 年启动的 TPU 项目，当时那场赌注反对的正是他所称的芯片领域的 the bitter lesson；以及 2026 年决定推出两颗芯片，面向推理的 8i 和面向训练的 8T，因为推理规模已经大到足以支撑专门化。关于电力，他解释了 Google 为什么更愿意接入电网、提前多年协同规划，而不是垂直整合，并坦言能源是长期的硬约束。

### No Priors: Beam: The Great American Open Model with ReflectionAI Co-Founder and CEO Misha Laskin

https://www.youtube.com/@NoPriorsPodcast

**The Takeaway:** Reflection AI's Misha Laskin argues open-weight models are the safer default for AI, and that the West needs its own open frontier model so the world is not building on a single country's stack.

**核心结论：** Reflection AI 的 Misha Laskin 认为开放权重模型是 AI 更安全的默认选择，西方也需要自己的开放前沿模型，这样全世界才不至于只建立在某一个国家的 stack 之上。

Misha Laskin, co-founder and CEO of Reflection AI, scaled the company from about 30 to roughly 300 people in a year to build frontier open intelligence, and released Beam, an open model with 500 billion total parameters and 23 billion active parameters, trained on about 6,000 GB300s in roughly 12 days. He says Beam is three to four times more reasoning-efficient than models of the same capability class because Reflection paired a strong pretraining base with what he believes is the largest reinforcement learning run done in open source. His case for openness is empirical: with a few hundred safety researchers inside closed labs, it is "impossible to cover the long tail of unintended consequences," so, evoking Linus's Law, "with enough eyeballs, all bugs become shallow." He argues the West needs at least two strong open-model efforts so the base everyone builds on does not come from one country, and describes open models as "Trojan horses for the infrastructure that they bring with them." He estimates each generation needs roughly 4x more compute, so catching up to the frontier moves from hundreds of millions to billions to tens of billions of dollars.

Reflection AI 联合创始人兼 CEO Misha Laskin 在一年内把公司从约 30 人扩展到约 300 人，以打造前沿的开放智能，并发布了 Beam：一个总参数 5000 亿、激活参数 230 亿的开放模型，用大约 6000 块 GB300 训练了约 12 天。他说 Beam 的推理效率比同能力级别的模型高出三到四倍，因为 Reflection 用强大的预训练底座，配上他认为是目前开源界规模最大的 reinforcement learning 训练。他为开放辩护的理由来自实证：闭源实验室里只有几百名安全研究员，不可能覆盖长尾的意外后果，于是他引用 Linus 定律，只要眼睛够多，所有 bug 都会变浅。他认为西方至少需要两个强大的开放模型项目，这样大家共同依赖的底座就不会只来自一个国家，并把开放模型称为随其一路携带的基础设施的 Trojan horse。他估计每一代模型大约需要 4 倍算力，因此追上前沿的花费会从数亿、到数十亿、再到数百亿美元。

### Unsupervised Learning: Ep 94: Applied Compute CEO on the Limits of RL, the New AI Hyperscaler & Why Post-Training Wins Inference

https://www.youtube.com/@RedpointAI

**The Takeaway:** Post-training custom models is how enterprises differentiate, and because inference is where the money goes, "post training actually wins inference."

**核心结论：** 对企业来说，post-training 定制模型是差异化所在；而由于钱最终花在推理上，post training 实际上赢下了 inference。

The CEO of Applied Compute argues that "owning your intelligence" is really about flexibility and control, not protecting against malicious labs: where models run, how they are deployed, and what they are optimized for. He frames reinforcement learning bluntly as "a hill climbing machine" where "the hardest part is actually defining the hill to climb," which is why evals matter so much and why companies should guard them carefully, because employees, like training data, are not fungible. His central commercial claim is that "post training actually wins inference": the largest, most expensive workloads are where post-training pays off first, and because inference is where most model dollars are eventually spent, controlling the model layer compounds. He says it is surprisingly easy to hill climb on non-verifiable domains by turning them into proxy-verifiable ones, such as rubric-based RL graded against expert answers, which is how Applied Compute built a custom model for the legal AI company Harvey. He calls the blocker to continual learning, data-efficient training from sparse rewards, unsolved, and expects the future to be "a non static set of weights" with feedback loops running from the real world back into the model.

Applied Compute 的 CEO 认为，所谓拥有你自己的智能，本质是灵活性和控制权，而不是提防恶意实验室：模型在哪里跑、如何部署、针对什么做优化。他把 reinforcement learning 直白地形容为一台爬坡机器，而最难的部分其实是如何定义要爬的那座山，所以 eval 才如此重要，企业应该小心地把 eval 保护起来，因为员工就像训练数据一样不可替代。他最核心的商业判断是 post training 实际上赢下了 inference：规模最大、花钱最多的 workload 正是 post-training 最先见效的地方，而由于大部分模型开销最终都花在推理上，掌控模型这一层会产生复利效应。他说，把不可验证的领域变成可代理验证的领域，在非可验证领域爬坡出奇地容易，比如用专家答案评分的 rubric-based RL，Applied Compute 就是这样为法律 AI 公司 Harvey 定制了模型。他称持续学习的主要障碍，也就是从稀疏奖励中做数据高效训练，目前尚未解决，并预期未来会是一组非静态的权重，让真实世界的反馈回路回流到模型之中。

### Also published

- AI & I by Every: Why Every Traded Personal Agents for One Company Agent | https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

还发布了：AI & I by Every《Why Every Traded Personal Agents for One Company Agent》| https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

## Blog

The validated weekly feed contained no qualifying blog posts for this window.

本期经过验证的周度 feed 中没有符合入选标准的 blog 文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
