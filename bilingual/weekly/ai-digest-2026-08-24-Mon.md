[English](../../en/weekly/ai-digest-2026-08-24-Mon.md) | [中文](../../zh/weekly/ai-digest-2026-08-24-Mon.md) | [Bilingual](./ai-digest-2026-08-24-Mon.md)

---

# AI Builders Digest

Coverage: 2026-08-17 00:00 to 2026-08-24 00:00 Asia/Shanghai
覆盖范围：2026-08-17 00:00 至 2026-08-24 00:00（Asia/Shanghai）

## Reader's Briefing / 导读

Evals are becoming the rate-limiting layer of AI. Box CEO Aaron Levie argues that AI diffusion is far more constrained by good evals than most people realize, because you cannot automate what you cannot assess. Meta's Madhu Guru published a six-part series on building evals, from studying production traces and building failure-mode taxonomies to running a laddered strategy of hill-climbing, regression, smoke-test and launch evals, warning against the "tyranny of the average" that hides a model regressing on your frontier use case. Vercel's Guillermo Rauch pushed the same theme operationally, running cybersecurity evals on GLM 5.3 and driving his own product to 100/100 on an is-agentic benchmark.

Evals 正在成为 AI 扩散的限速层。Box CEO Aaron Levie 认为，AI 扩散受限于好的 evals 的程度远超大多数人想象，因为你无法自动化无法评估的东西。Meta 的 Madhu Guru 发了一个六篇的 evals 系列：从研究生产 trace、建立 failure mode 分类，到运行 hill-climbing、regression、smoke test 和 launch eval 的分层策略，并警告 "tyranny of the average" 会让模型在最核心的 use case 上退步而不被发现。Vercel 的 Guillermo Rauch 则在操作层面呼应，对 GLM 5.3 跑了网络安全 evals，并把自己的产品用 is-agentic benchmark 一路逼到 100/100。

The applied layer between models and end users is where value is concentrating. Levie argues that the value created between the AI model and the ultimate end-user workflow is far larger than people assumed, and spells out what enterprise diffusion takes: domain-tuned harnesses, workflow-specific data access, change management, model mixing, evals, and pricing beyond raw tokens. Anthropic's Thariq frames the "software factory" as the promise that finally makes software reliable and predictable for non-software companies, while Replit's Amjad Masad and OpenAI announced a partnership to make coding cheap again, after agents made software cheaper but made coding expensive.

模型与终端用户之间的 applied 层正在成为价值聚集地。Levie 认为，AI 模型与最终用户工作流之间能创造的价值远超人们想象，并列出 AI 进入企业所需要的要素：针对特定领域调校的 harness、面向工作流的数据访问、变革管理、多模型混用、evals，以及 token 之外的定价方式。Anthropic 的 Thariq 把 "software factory" 定义为让软件对非软件公司变得可靠、可预测的承诺，而 Replit 的 Amjad Masad 与 OpenAI 宣布合作，让 coding 重新变便宜，因为 agent 让软件变便宜了，却让 coding 变贵了。

Safety, security, and privacy moved to the center of the week. OpenAI's Sam Altman announced a pause on some frontier RL training to meet alignment, security, and monitoring standards, saying confidence in safety will increasingly set the pace of AI progress. Thibault Sottiaux detailed layered protections after reports of destructive Codex actions and previewed Private Safety Processing to keep Zero Data Retention while improving safeguards. Anthropic pushed defenders forward with Mythos-powered Claude Security and a $35M open-source security fund, Vercel committed $1M to open verification of its Sandbox, and Peter Yang's public privacy complaint about the Instinct assistant got a deletion option shipped within a day.

安全、隐私与信任成为本周的中心议题。OpenAI 的 Sam Altman 宣布暂停部分前沿 RL 训练，以确保达到对齐、安全和监控标准，并说对安全的信心将越来越决定 AI 进步的节奏。Thibault Sottiaux 在 Codex 出现破坏性操作报告后详细列出了多层防护，并预告了 Private Safety Processing，以在提升防护的同时保留 Zero Data Retention。Anthropic 用 Mythos 驱动的 Claude Security 和 3500 万美元的开源安全基金支持防御者，Vercel 拿出 100 万美元公开验证 Sandbox 的安全性，Peter Yang 对 Instinct 助手的一通公开隐私投诉，则让删除功能在一天内上线。

Speed is the new product moat. Guillermo Rauch evangelized fx, a 6.3MB Zig-compiled CLI that boots in microseconds, declaring "fast is a one-way street" and predicting AI will make most infrastructure natively optimized. Amjad Masad touted Replit Free Mode's speed and noted intelligence per joule has improved 18x in 16 months. Portola's founders learned that a 500-millisecond latency increase from a reflection pass tanked every metric in their AI companion app. OpenAI's rate-limit transparency thread showed how cache-hit rates and billing hygiene, not just model quality, shape the experience.

速度正在成为新的产品护城河。Guillermo Rauch 力推 fx：一个 6.3MB、微秒级启动的 Zig 编译 CLI，宣称 "fast is a one-way street"，并预测 AI 会让大部分基础设施原生优化。Amjad Masad 夸赞 Replit Free Mode 的速度，并指出每焦耳智能在 16 个月内提升了 18 倍。Portola 的创始人们用惨痛教训证明，一个反思步骤带来的 500 毫秒延迟上涨，让 AI 陪伴应用的每一项指标都崩了。OpenAI 关于 rate limit 的透明更新也说明，cache 命中率和计费习惯和模型质量一样影响体验。

AI is rewriting who builds software and how work is organized. Peter Yang shared data showing PMs attaching pull requests rose from 3% to 10% and designers from 1% to 8% in two years, while noting AI has landed on top of existing work rather than replacing it. Zara Zhang observed that talented individuals can 10x their potential with AI on their own thing but gain at most 20% inside large organizations. Dan Shipper pushed back on the centralization-of-power hypothesis, pointing to fine-tuning and the brain as evidence for decentralization, and Nikunj Kothari argued brand marketing and venture ambition math are being reshaped by agent-first, trillion-dollar outcomes.

AI 正在改写"谁来做软件"以及"工作如何组织"。Peter Yang 分享的数据显示，PM 提交 pull request 的比例两年内从 3% 涨到 10%，设计师从 1% 涨到 8%，founder 以 23% 仅次于工程师；他也指出 AI 是叠加在现有工作之上，而不是取代它们。Zara Zhang 观察到，有才华的人在自己的事业上用 AI 可以把潜力放大 10 倍，但在大组织里最多提升 20%。Dan Shipper 反驳了"AI 必然走向权力集中"的假说，用 fine-tuning 和大脑本身作为去中心化的证据；Nikunj Kothari 则认为，在 agent 优先、万亿美元市值结果主导的世界里，brand marketing 和风投的野心数学都在被重塑。

## X / Twitter

Aaron Levie, CEO of Box, argued that the value created between the AI model and the ultimate end-user workflow is far larger than people assumed, then spelled out what enterprise diffusion takes: domain-tuned harnesses, workflow-specific data access, change management, model mixing, domain-specific evals, and pricing beyond raw tokens. He also made the contrarian point that AI diffusion is more rate-limited by good evals than most realize ("you can't automate what you can't assess the progress on"), argued that experts beat generalists, and flagged post-training as a credible way for applied AI companies to cut cost and raise accuracy.

Box CEO Aaron Levie 认为，AI 模型与最终用户工作流之间创造的价值远超人们想象。他列出了 AI 进入企业所需的要素：针对特定领域调校的 harness、面向工作流的数据访问、变革管理、多模型混用、针对特定领域的 evals，以及 token 之外的定价方式。他还提出了一个反直觉的观点：AI 扩散受限于好的 evals 的程度远超大多数人的认知（"you can't automate what you can't assess the progress on"），专家依然胜过通才，post-training 则是 applied AI 公司在特定任务上降本增效的可行路径。

https://x.com/levie/status/2089921630650925170
https://x.com/levie/status/2091359223368315050
https://x.com/levie/status/2090278256306229675
https://x.com/levie/status/2090664811185205722

Madhu Guru, Senior Director of AI at Meta, ran a six-part series on building great evals: study real traces, write a rubric for what good looks like, and establish the quality frontier before working down the cost curve ("Quality first. Cost next."). He says teams need a laddered strategy of hill-climbing, regression, smoke-test and launch evals, and warns that compressing results into a single number, the "tyranny of the average," hides regressions on frontier use cases.

Meta AI 高级总监 Madhu Guru 发了一个六篇的 evals 系列：研究真实的生产 trace、写出"什么是好"的 rubric、先建立质量上限再沿成本曲线往下走（"Quality first. Cost next."）。他说团队需要 hill-climbing、regression、smoke test 和 launch eval 的分层策略，并警告说，把复杂结果压成一个数字，也就是他所说的 "tyranny of the average"，会掩盖前沿 use case 上的退步。

https://x.com/realmadhuguru/status/2089480958571331623
https://x.com/realmadhuguru/status/2089918106814603728
https://x.com/realmadhuguru/status/2090242427944833047
https://x.com/realmadhuguru/status/2090595384905113939
https://x.com/realmadhuguru/status/2090930137885774324

Guillermo Rauch, CEO of Vercel, shared evals showing GLM 5.3 as the new open frontier for cybersecurity, and at lower cost expects it to be a boon for defensive security work. He committed $1M to open verification of Vercel Sandbox security, pushed "fast is a one-way street" with fx, a 6.3MB Zig-compiled CLI that boots in microseconds, declared Vercel is "building AWS for agents," and said looping is-agentic until 100/100 closed real gaps.

Vercel CEO Guillermo Rauch 分享了网络安全 evals，显示 GLM 5.3 是新的开放前沿，并预期更低的成本会让防守型安全工作的收益更大。他拿出 100 万美元公开验证 Vercel Sandbox 的安全性，继续用 fx 力推 "fast is a one-way street"（一个 6.3MB、微秒级启动的 Zig 编译 CLI），宣称 Vercel 正在 "building AWS for agents"，并说把 is-agentic 对自己的产品循环跑到 100/100，确实补上了不少真实的缺口。

https://x.com/rauchg/status/2089126690043916495
https://x.com/rauchg/status/2089747453004468339
https://x.com/rauchg/status/2090255740384751664
https://x.com/rauchg/status/2090520415336845595
https://x.com/rauchg/status/2090858571613470919

Thibault Sottiaux of OpenAI's Codex and ChatGPT team documented enabling a 1M-token context window in Codex for GPT-5.6 Sol, now also working for ChatGPT-account usage. He recapped layered protections added after reports of destructive Codex actions, previewed Private Safety Processing to preserve Zero Data Retention while improving safeguards, and gave a transparency update on rate-limit reports, tracing usage drain to sub2api-style misuse and cache-hit inefficiencies.

OpenAI Codex 与 ChatGPT 团队的 Thibault Sottiaux 介绍了如何在 Codex 中为 GPT-5.6 Sol 开启 1M token 的 context window，现在 ChatGPT 账户的用量也可以使用。他在 Codex 出现破坏性操作报告后复盘了多层防护，预告了在保持 Zero Data Retention 的同时提升防护的 Private Safety Processing，并就 rate limit 的报告做了透明更新，指出部分用量流失来自 sub2api 式的滥用和 cache 命中率的问题。

https://x.com/thsottiaux/status/2089082893804896524
https://x.com/thsottiaux/status/2089143488696705077
https://x.com/thsottiaux/status/2089891927659585918
https://x.com/thsottiaux/status/2090173536010957128
https://x.com/thsottiaux/status/2091407991736332689
https://x.com/thsottiaux/status/2090675027670978569

Sam Altman, CEO of OpenAI, announced that OpenAI paused some frontier RL training to meet alignment, security, and monitoring standards for new capability levels, saying model progress is extremely rapid and that confidence in safety will increasingly set the pace of AI progress, while still expecting great new models soon. He also confirmed OpenAI supports business privacy.

OpenAI CEO Sam Altman 宣布，OpenAI 暂停了部分前沿 RL 训练，以确保能够达到新能力水平下的对齐、安全和监控标准。他说模型进步极快，对安全的信心将越来越决定 AI 进步的节奏，同时仍预期很快会发布优秀的新模型。他还确认 OpenAI 支持 business privacy。

https://x.com/sama/status/2089787807611195475
https://x.com/sama/status/2089805495783813196
https://x.com/sama/status/2090163991234453611

Claude, Anthropic's assistant, announced Claude Cowork is now available on mobile and web for all paid plans, and that Claude can send emails in Gmail and manage files in Google Drive through connectors. The account also detailed Claude Security: point it at a GitHub repo and Mythos scans for vulnerabilities with CWE categories, confidence and severity ratings, and suggested fixes that open in Claude Code, while Anthropic works with partners to integrate Mythos 5 into security products and offers a $35M Defender Advantage Fund for open source.

Anthropic 的 Claude 官方账号宣布，Claude Cowork 现已面向所有付费套餐在移动端和网页端开放，Claude 也可以通过 connectors 在 Gmail 中发送邮件、在 Google Drive 中管理文件。账号还详细介绍了 Claude Security：把 Claude Security 指向一个 GitHub 仓库，Mythos 就会扫描漏洞，返回 CWE 分类、置信度和严重度评级，以及可以在 Claude Code 中打开的建议修复；Anthropic 同时与合作伙伴一起把 Mythos 5 集成进安全产品，并推出 3500 万美元的 Defender Advantage Fund 支持开源安全。

https://x.com/claudeai/status/2089756371570900999
https://x.com/claudeai/status/2089806039088517356
https://x.com/claudeai/status/2090852320128938319
https://x.com/claudeai/status/2090852316328902930
https://x.com/claudeai/status/2090852318527033804

Thariq of Anthropic's Claude Code team argued that companies whose core competency is not software need software to be a reliable, predictable process, framing the "software factory" as the promise that finally delivers it, while net-new software products remain risky but profitable. He also floated the "make a lot of money button": make your SaaS headless, let agents use it, and charge per interaction, shared an ELI5 skill popular inside Anthropic, and announced Fable enterprise safeguards that run on customer infrastructure, built with around 100 companies.

Anthropic Claude Code 团队的 Thariq 认为，核心能力不是软件的公司，需要软件成为可靠、可预测的流程，"software factory" 就是最终实现这一点的承诺，而全新的软件产品仍然风险高但有利可图。他还提出了 "make a lot of money button"：把你的 SaaS 做成 headless，让 agent 来用，按交互次数收费；分享了 Anthropic 内部很受欢迎的 ELI5 skill，并宣布 Fable 的企业级 safeguards 可以在客户自己的基础设施上运行，已与约 100 家公司共同开发。

https://x.com/trq212/status/2090134945490678071
https://x.com/trq212/status/2090134946598039646
https://x.com/trq212/status/2089844723691479333
https://x.com/trq212/status/2090884854590382515
https://x.com/trq212/status/2090569474139439335

Amjad Masad, CEO of Replit, announced a partnership with OpenAI to make coding cheap again: "Agents made software cheaper but made coding expensive. Today, together with OpenAI, we're changing this." He also touted the speed of the new Free Mode ("Making coding interactive again!"), noted an 18x improvement in intelligence per joule in 16 months, and promised seven ships for a seven-day week.

Replit CEO Amjad Masad 宣布与 OpenAI 合作，让 coding 重新变便宜："Agents made software cheaper but made coding expensive. Today, together with OpenAI, we're changing this."他还夸赞新 Free Mode 的速度（"Making coding interactive again!"），指出每焦耳智能在 16 个月内提升了 18 倍，并承诺一周 7 天每天发版。

https://x.com/amasad/status/2090079496124674377
https://x.com/amasad/status/2090484698413740186
https://x.com/amasad/status/2089069905375351169
https://x.com/amasad/status/2091346778746757204

Dan Shipper, CEO of Every, pushed back on the centralization-of-power hypothesis for AI, tracing it to Lewis Mumford's 1964 distinction between authoritarian and democratic technologies and Peter Thiel's "crypto is libertarian and AI is communist," citing fine-tuning and the human brain as evidence for decentralization. He also announced a frontier team inside Every for experimenting at the edge of AI, and shared a vibe-coded app built with Fable that visualizes everyone who applied to Thesis.

Every CEO Dan Shipper 反驳了 AI 权力集中的假说。他把这个说法追溯到 Lewis Mumford 1964 年对专制技术与民主技术的区分，以及 Peter Thiel 的 "crypto is libertarian and AI is communist"，认为 fine-tuning 的复兴和人类大脑本身就是去中心化的证据。他还宣布 Every 内部成立了一支 frontier 团队，专门在 AI 的边缘地带做探索和实验，并分享了一个用 Fable vibe code 出来的应用，把申请来 Thesis 的所有人可视化。

https://x.com/danshipper/status/2089127868903375257
https://x.com/danshipper/status/2090122240025071907
https://x.com/danshipper/status/2089121597017759800

Peter Yang shared data that non-engineers are shipping more code: PMs attaching pull requests rose from 3% to 10% and designers from 1% to 8% in two years, founders second only to engineers at 23%, and noted AI has landed on top of existing work rather than replacing it. He also called out the Instinct assistant for indexing and retaining emails without permission, credited the team for shipping a data-deletion option within a day, and celebrated 100K YouTube subscribers with upcoming interviews on evals, vibe-coded businesses, ChatGPT Finance, and the Grok Bot team.

Peter Yang 分享了非工程师正在贡献更多代码的数据：PM 提交 pull request 的比例两年内从 3% 涨到 10%，设计师从 1% 涨到 8%，founder 以 23% 仅次于工程师；同时他指出，AI 是叠加在现有工作之上，而不是取代它们。他还公开质疑 Instinct 助手在未经许可的情况下索引并保留邮件，随后肯定团队在一天内上线了数据删除选项；他还庆祝 YouTube 订阅达到 10 万，并预告了关于 evals、vibe-coded 生意、ChatGPT Finance 和 Grok Bot 团队的系列访谈。

https://x.com/petergyang/status/2089877068188471545
https://x.com/petergyang/status/2089877083510235328
https://x.com/petergyang/status/2090936583814025417
https://x.com/petergyang/status/2091187611507499321
https://x.com/petergyang/status/2090589731927282021

Zara Zhang shared Claude's line that motivation follows action more than it precedes it, observed that everyone ahead in using AI thinks they are behind, and argued that talented individuals can 10x their potential with AI on their own thing but gain at most 20% inside large organizations, with top AI labs as the exception, explaining why more talented people are leaving big companies.

Zara Zhang 分享了 Claude 的一句话：motivation follows action more than it precedes it（行动先于动力）。她观察到，每个在用 AI 上领先的人都觉得自己落后；她还认为，有才华的人在自己的事业上用 AI 可以把潜力放大 10 倍，但在大组织里最多提升 20%，顶级 AI 实验室除外，这也解释了为什么越来越多有才华的人离开大公司。

https://x.com/zarazhangrui/status/2090399357145317837
https://x.com/zarazhangrui/status/2091338374447763481
https://x.com/zarazhangrui/status/2091379220257603593

Garry Tan, President and CEO of Y Combinator, open-sourced a "Personal AGI" starter: paste an image into Claude Code or Codex and it creates a private GitHub repo with 70 of his proven skills and the start of a Karpathy-style knowledge wiki, all MIT-licensed. He also declared that "YC is the YC for consumer hardware" and "YC is the YC for AI Researchers."

YC 总裁兼 CEO Garry Tan 开源了一个 "Personal AGI" 启动包：把一张图片粘进 Claude Code 或 Codex，它就会创建一个私有 GitHub 仓库，里面包含 70 个他验证过的 skills，以及一个 Karpathy 式知识 wiki 的开端，全部 MIT 许可。他还宣布 "YC is the YC for consumer hardware" 和 "YC is the YC for AI Researchers"。

https://x.com/garrytan/status/2089424620764168485
https://x.com/garrytan/status/2089425134339961173
https://x.com/garrytan/status/2090469087722041567
https://x.com/garrytan/status/2090471408996659339

Nikunj Kothari, partner at FPV Ventures, satirized the "no one in AI has a moat" discourse with a sweep from models and IDEs to app builders, wrappers, inference, voice, data labeling, infrastructure and neoclouds, concluding "apparently nobody in AI has a moat except the venture firm." He also explained why ambition matters in fundraising: mega-funds underwrite trillion-dollar outcomes, citing Anthropic as the fastest company to a trillion-dollar valuation and Cursor's bellwether exit, so the error of omission dominates, and argued brand marketing becomes THE differentiator once agents are the primary users.

FPV Ventures 合伙人 Nikunj Kothari 调侃了"AI 圈没有人有护城河"的说法，从模型、IDE 一路扫到 app builder、wrapper、推理、语音、数据标注、基础设施和 neoclouds，结论是 "apparently nobody in AI has a moat except the venture firm"。他还解释了为什么融资时 ambition 如此重要：巨型基金按万亿美元级别的结果来下注，他举了 Anthropic 成为最快达到万亿美元估值的公司、Cursor 作为风向标的退出，所以 omission 的代价远大于 admission；他还认为，一旦 agent 成为产品的主要用户，brand marketing 就会成为最重要的差异化因素。

https://x.com/nikunj/status/2089486802356961364
https://x.com/nikunj/status/2090585553947517298
https://x.com/nikunj/status/2089374392295842086

Swyx shared Trajectory's rronak_ overview on continual learning's remaining data problems, including why GRPO isn't enough and the team had to go on-policy, and open-sourced AI Engineer's YouTube thumbnail A/B testing learnings. He also made the case that "Simulation is a new scaling law," explaining why he now understands the backing for Simile: if models automate large parts of ML research, the last barrier is simulating humans and human feedback, and Simile is already finding product-market fit at Fortune 100s.

Swyx 分享了 Trajectory 的 rronak_ 对 continual learning 剩余数据问题的概述，包括为什么光靠 GRPO 不够、团队必须转向 on-policy，并把 AI Engineer YouTube 缩略图的 A/B 测试经验开源。他还论证了 "Simulation is a new scaling law"：如果模型自动化了 ML 研究中越来越大的部分，最后一个瓶颈就是模拟人类和人类反馈，而 Simile 已经在 Fortune 100 公司里找到了 product-market fit。

https://x.com/swyx/status/2089393073327653344
https://x.com/swyx/status/2089798658225266806
https://x.com/swyx/status/2090948945753076141

Aditya Agarwal, General Partner at SPC, launched the Minus One episode with Sridhar Ramaswamy, who scaled Google ads from $1B to $100B and now leads Snowflake through the AI shift, distilling the throughline as clarity, working on things that truly matter, "the best founders are reductionists," and "the frontier model race is just getting started."

SPC 普通合伙人 Aditya Agarwal 发布了与 Sridhar Ramaswamy 的 Minus One 节目，后者曾把 Google 广告从 10 亿美元做到 1000 亿美元，现在正带领 Snowflake 穿越 AI 转型。他把整场对话的线索提炼为 clarity、做真正重要的事、"the best founders are reductionists"，以及 "the frontier model race is just getting started"。

https://x.com/adityaag/status/2090478527313252494
https://x.com/adityaag/status/2090478530513543631
https://x.com/adityaag/status/2090501112927223889
https://x.com/adityaag/status/2090814574400307585

Josh Woodward, VP at Google, circled back on Gemini feedback: revamped Workspace tools tested in one to two weeks, improved tool calling in 3.7 Flash, a new Projects design being implemented, and 49 connectors supported. He also announced university student plans are back globally, covering more than 140 countries with higher limits, more storage, a student hub, Notebook, and Flow.

Google VP Josh Woodward 就 Gemini 的反馈给出了更新清单：重构后的 Workspace tools 将在 1-2 周内测试，3.7 Flash 的工具调用能力有改进，新的 Projects 设计正在实现中，现已支持 49 个 connectors。他还宣布大学学生套餐在全球回归，覆盖超过 140 个国家，提供更高的额度、更多存储空间、学生专区，以及 Notebook 和 Flow。

https://x.com/joshwoodward/status/2089520767281324112
https://x.com/joshwoodward/status/2090166806401228912

## Podcast

Training Data: Rich Sutton and Khurram Javed: Why AI Models Stop Learning, and How to Start It Again

The Takeaway: Today's frontier models stop learning the moment they ship, and treating that as normal is the field's biggest blind spot.

Rich Sutton, the reinforcement-learning pioneer behind The Bitter Lesson, and co-founder Khurram Javed are building Oak Lab to change it. Sutton's framing is deliberately blunt: "I'm not weird. The field is weird." All learning is continual, he argues; we always act and learn, and a system that never updates its weights is not really learning at all. He reads large language models as both a positive and a negative example of the Bitter Lesson: they scaled brilliantly with computation and drank in the internet, but the internet is finite while the world is vastly bigger than everything stored on it. That is why he calls synthetic data generation "a big mistake": it stays bottlenecked by human experts who decide what good data looks like.

The Oak Lab agenda turns the Alberta Plan into engineering. Two capabilities matter most: continual deep learning, which Sutton says is curable via per-weight step sizes plus generate-and-test feature growth (their Nature-published continual backprop), and learning abstractions from experience rather than being handed them. The missing skill, learning a model and then planning with it, barely exists in the field today. Sutton is careful to credit LLMs as a genuine scientific breakthrough in language while insisting they are not all of intelligence, and he warns they may be at risk once systems that keep learning arrive.

核心 takeaway：今天的前沿模型一旦发布就停止学习了，而把这件事当成常态，正是这个领域最大的盲点。

强化学习先驱、The Bitter Lesson 的作者 Rich Sutton 与联合创始人 Khurram Javed 正在创立 Oak Lab 来改变这一点。Sutton 的表述刻意直白："I'm not weird. The field is weird."他认为所有学习都是持续性的，我们总是在行动中学习，一个权重永远不会更新的系统根本算不上在学习。他把大语言模型看作 Bitter Lesson 的正反两个例子：它们靠算力大规模扩展、把整个互联网都"喝"了进去，但互联网是有限的，而世界远比网上存下来的东西大得多。这也是他称合成数据生成是 "a big mistake" 的原因：它始终受制于决定什么数据才算好的人类专家。

Oak Lab 的议程是把 Alberta Plan 变成工程。最重要的是两种能力：持续深度学习，以及从经验中习得抽象。Sutton 说灾难性遗忘是可以治愈的，方法包括每个权重独立的 step size，以及 generate-and-test 式的特征增长（他们发表在 Nature 上的 continual backprop）；而"先学习一个模型、再用它做规划"这项能力，在今天的研究里几乎还不存在。Sutton 谨慎地肯定 LLM 是语言领域真正的科学突破，但同时坚持它们不等于全部智能，并警告说，一旦真正持续学习的系统出现，LLM 可能面临风险。

https://www.youtube.com/watch?v=xH7U7w9Qzlo

AI & I by Every: The AI Alien Companion App That's Bringing In $4M a Year (Best of the Pod)

The Takeaway: Making an AI companion feel alive is a latency problem as much as a writing problem, and the fix is improv, not plot.

Portola founder and CEO Quentin and head of story Elliot, a bestselling science-fiction author, told Every's Dan Shipper how the Tolan, an embodied alien companion app, hit $4M in ARR from $1M in four weeks. They started with an AI creative tool for kids, which they now call a terrible market, and pivoted once generation speed, quality, and cost made a genuine friendship with an AI character sellable at consumer prices.

Two lessons stand out. First, latency: a reflection pass that checked each message against memory pushed median response time past two and a half seconds and "tanked literally every metric in the product," a 500-millisecond change. The prompt, they learned, is a canvas that must be recompiled inside a two-second voice loop. Second, story: choose-your-own-adventure style structures failed completely, so they now give the model a hook and teach it to be "the best improv actor possible." Elliot says he stopped being the writer: "The Tolan is the writer and the actor... My job is to teach them how to tell the best story in that moment."

Growth came from seeding TikTok and Reels content; one video of a woman cooking with her Tolan drew about 7 million views in 72 hours and caused a 10x spike in downloads, an example of the capability overhang: model abilities have run ahead of what consumers imagine.

核心 takeaway：让 AI 陪伴产品活起来，一半是延迟问题，一半是写作问题，解法是即兴表演，而不是情节。

Portola 创始人兼 CEO Quentin 和故事负责人、畅销科幻作家 Elliot，向 Every 的 Dan Shipper 讲述了 Tolan（一个具身的 AI 外星人陪伴应用）如何在四周内把 ARR 从 100 万美元做到 400 万美元。他们从最显而易见的起点出发，做了一个面向儿童的 AI 创意工具，如今他们称之为一个糟糕的市场；当生成速度、质量和成本跨过某个临界点后，他们转向了"以消费者价格卖一段和 AI 角色真正的友谊"。

两个教训最突出。第一是延迟：他们加了一个反思步骤，让模型把下一条消息和记忆做对照，中位响应时间因此超过两秒半，"it tanked literally every metric in the product"，而这只是 500 毫秒的变化。他们学到，prompt 是一块画布，必须在大约两秒的语音循环里重新编译。第二是故事：重度结构化的 choose-your-own-adventure 式叙事彻底失败，所以现在他们只给模型一个钩子，教它成为 "the best improv actor possible"。Elliot 说他不再是作者："The Tolan is the writer and the actor... My job is to teach them how to tell the best story in that moment."

增长来自在 TikTok 和 Reels 上埋种子内容；一段女孩和她的 Tolan 一起做饭的视频在 72 小时内获得约 700 万次观看，带来 10 倍的下载暴增，这也是他们所说的 capability overhang 的例证：模型能力已经跑在了消费者想象力的前面。

https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

No Priors: From Restoring Sight to Reimagining the Brain, with Max Hodak

The Takeaway: If you can get vision, hearing, balance, and a kilobit per second of motor control in and out of the brain, you are halfway to a very different kind of computing.

Max Hodak, founder and CEO of Science and formerly of Neuralink, argues that "the brain very literally, very clearly, plainly is a computer," and that the skull is a brain in a vat connected to the world by a few wires. His company's first product is Prima, a retinal prosthesis: a chip implanted under the retina that works with glasses projecting an image, bypassing dead photoreceptors to restore form vision, which he says nobody had previously achieved in a blind patient's mind's eye. Prima just received regulatory approval in Europe, with studies planned for retinitis pigmentosa and Stargardt's disease.

Hodak is deliberately skeptical of the hottest BCI pitch, high-bandwidth chat with AI models. "Talking or writing is thinking," he argues, citing the famous 10-bits-per-second cognitive bottleneck: a faster pipe to thought is less valuable than it sounds. His company focuses on generating vision and hearing and, ultimately, substrate independence: swappable parts, connectomics (a mouse connectome is not far away), and reducing the fragility of the human condition, including attackable targets like cardiovascular disease and brain-metastasized cancer. Adapting humans to space, he says, is the same project as preserving ourselves.

核心 takeaway：如果你能把视觉、听觉、平衡感和每秒一千比特的运动控制接入大脑，你就已经走到了一种非常不同的计算的半路。

Science 创始人兼 CEO、前 Neuralink 的 Max Hodak 认为，"the brain very literally, very clearly, plainly is a computer"，头骨就是一个泡在缸里的脑，通过几根"线"（颅神经和脊神经）与世界相连。公司的第一个产品是 Prima，一款视网膜假体：植入视网膜下方的芯片配合投射图像的眼镜，绕过坏死的感光细胞恢复形觉，他说此前从来没有人能在盲人脑海的视觉中恢复这种形态的视觉。Prima 刚刚获得欧洲的监管批准，并计划开展针对色素性视网膜炎和 Stargardt 病的临床研究。

Hodak 刻意质疑 BCI 领域最热门的叙事：和 AI 模型进行高带宽对话。"Talking or writing is thinking."他说，并引用著名的每秒 10 比特认知瓶颈：通往思维的高速管道并没有听上去那么值钱。他的公司专注于生成视觉和听觉，并最终实现 substrate independence：可更换的部件、connectomics（小鼠 connectome 已不遥远），以及降低人类处境的脆弱性，包括心血管疾病和转移到脑部的癌症这些可以攻克的靶点。他说，让人类适应太空，和保存我们自己，是同一个项目。

https://www.youtube.com/watch?v=7HXqMepjvy8

## Blog

No blog posts appeared in this week's validated feed.

本周通过验证的 feed 中没有 blog posts。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
