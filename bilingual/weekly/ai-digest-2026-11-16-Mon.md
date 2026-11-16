[English](../../en/weekly/ai-digest-2026-11-16-Mon.md) | [中文](../../zh/weekly/ai-digest-2026-11-16-Mon.md) | [Bilingual](./ai-digest-2026-11-16-Mon.md)

---

# AI Builders Digest

Coverage: 2026-11-09 00:00 to 2026-11-16 00:00 Asia/Shanghai
覆盖范围：2026-11-09 00:00 至 2026-11-16 00:00（Asia/Shanghai）
Known feed coverage gaps (UTC): X/Twitter 2026-11-14T06:25:34.902Z to 2026-11-14T06:26:52.164Z (0.02h); X/Twitter 2026-11-15T06:26:52.164Z to 2026-11-15T06:42:15.797Z (0.26h).
已知 feed 覆盖缺口（UTC）：X/Twitter 2026-11-14T06:25:34.902Z 至 2026-11-14T06:26:52.164Z（0.02 小时）；X/Twitter 2026-11-15T06:26:52.164Z 至 2026-11-15T06:42:15.797Z（0.26 小时）。

## Reader's Briefing / 导读

The week's most consequential shift is that agents are being handed outcomes, not turns. Box CEO Aaron Levie describes swarms taking a problem and fanning it across parallel workers until productivity stops tracking chat time; Replit CEO Amjad Masad moves from self-healing software to agents that buy ads and an autonomous business; Vercel CEO Guillermo Rauch says parallel work is now limited by ambition and compute. The management problem is no longer how to prompt better, but how to define done, allocate budget, inspect state, and keep humans at the two remaining choke points: intent and verification.

本周最重要的变化，是 agent 开始被交付结果，而不是一问一答。Box CEO Aaron Levie 描述了 agent swarm 如何接下一个问题，再把工作并行铺开，直到产出不再受聊天时间限制；Replit CEO Amjad Masad 从自愈软件走向能替企业买广告的 agent 和“自主企业”；Vercel CEO Guillermo Rauch 则认为，并行工作的上限已经变成野心和算力。管理问题不再是如何写出更好的 prompt，而是如何定义完成、分配预算、检查状态，并把人类留在意图和验证这两个剩余瓶颈上。

Cheap generation is making judgment scarce. Dan Shipper's experiment gave Every staff the same survey and models; each found a different useful signal, while Claude could generate a plausible Shipper answer 93% of the time with 400 attempts but ranked it in the top 10% only about 60% of the time. That is the week's cleanest argument for teams: models widen the search space, but responsibility and perspective decide what matters. Madhu Guru makes the same point inside product management, where AI should let PMs go deeper into users, prototypes, code, analytics, and go-to-market rather than replace the role.

生成变得便宜，判断反而更稀缺。Dan Shipper 的实验让 Every 团队所有人使用同一份问卷和同样的模型，每个人都找到了不同的有用信号；而 Claude 在 400 次尝试中可以生成 93% 像 Shipper 的回答，但把它排进前 10% 的概率只有约 60%。这是本周关于团队价值最清晰的论证：模型扩大了搜索空间，但责任和视角决定什么才重要。Madhu Guru 在产品管理里提出同样的观点，AI 应该让 PM 更深入用户、原型、代码、分析和 GTM，而不是取代这个角色。

Model progress is also too fast for fixed playbooks. Levie says teams should re-test assumptions every three to six months; Anthropic researcher Alex Albert reruns a whole-project audit after each new model; Garry Tan's harness evaluation found Fable 5.2 and Opus 5.5 close on 52 coding tasks, at 82.7% versus 84.6%, while Fable cost 2.80x as much per solved task. Dan Shipper's Gemini 4 Carbon test showed a sharp coding gain but weaker stopping behavior. The practical rule is not to chase one leaderboard, but to re-evaluate each model on the actual workflow and its cost.

模型进步也太快，固定套路很快会过期。Levie 说团队应该每三到六个月重新测试过去的假设；Anthropic 研究员 Alex Albert 会在每个新模型发布后重跑一次全项目审计；Garry Tan 的 harness 评测发现，Fable 5.2 和 Opus 5.5 在 52 个编程任务上的表现接近，分别为 82.7% 和 84.6%，但 Fable 每个已解决任务的成本是 2.80 倍。Dan Shipper 对 Gemini 4 Carbon 的测试显示了明显的编程提升，但也暴露出更弱的停止行为。实际规则不是追逐某一张榜单，而是在真实工作流和成本下重新评估每个模型。

Agent infrastructure is converging on shared state and permissions. Box and Anthropic added read/write MCP interoperability for enterprise files; Vercel added MCP Events so agents can subscribe to callbacks instead of polling; Claude added interactive connectors and visible meeting participation. Resend's Zeno Rocha describes the less glamorous work behind the same pattern: remote MCP forced OAuth, RBAC, observability, and official ownership of the integration. An agent-addressable product is becoming a distribution channel, and the trust boundary is the product.

Agent 基础设施正在围绕共享状态和权限收敛。Box 和 Anthropic 为企业文件加入了 MCP 读写互操作；Vercel 加入 MCP Events，让 agent 可以订阅回调而不是轮询；Claude 加入了交互式 connector 和可见的会议参与。Resend 的 Zeno Rocha 描述了同一模式背后不那么光鲜的工作：远程 MCP 迫使团队重建 OAuth、RBAC、可观测性，并明确由软件厂商自己拥有这个集成。能被 agent 访问正在成为一种分发渠道，而信任边界本身就是产品。

Software creation is spreading beyond engineering, but craft is not disappearing. Every built a video editor, a documentary workflow, and games for its team and kids with frontier models; Peter Yang packaged a cancer-research skill and prompt audits; Guillermo Rauch's UI SDK packages browser behaviors for generated interfaces. Mihail Eric's Stanford course answers the obvious objection by making students build a 200-line harness, inspect a production harness through a proxy, and contribute to open-source repositories with maintainers reviewing the work. The point is not to remove code from the curriculum. It is to move human effort toward architecture, context, intent, review, and systems understanding.

软件创造正在走出工程团队，但手艺没有消失。Every 用前沿模型做出了视频编辑器、纪录片工作流，以及给团队和孩子做的游戏；Peter Yang 把癌症研究 skill 和 prompt 审计打包给用户；Guillermo Rauch 的 UI SDK 为生成式界面封装了浏览器行为。Mihail Eric 在斯坦福的课程正面回应了质疑：学生要写一个 200 行的 harness，通过代理检查生产 harness，并向维护者会审阅的开源仓库贡献代码。重点不是把代码从课程里拿掉，而是把人的精力移向架构、上下文、意图、审查和系统理解。

Finally, AI's move into science and health is forcing a different standard of proof. Claude Fable 5.2 produced preprints on a physics technique used to rule out candidate quantum-gravity theories, but the larger health story is validation. Isomorphic Labs president Max Jaderberg says most drug failures surface only in patients, rat studies are only about 30% predictive of human clinical toxicity, and the goal is to move learning into computation while keeping wet labs for validation. Aditya Agarwal's frontier-science portfolio and Peter Yang's patient-records skill point in the same direction: useful AI in biology must connect models to evidence, not just generate plausible answers.

最后，AI 进入科学和健康领域后，证明标准也随之改变。Claude Fable 5.2 生成了关于一种物理技术的预印本，这种技术用于排除候选的量子引力理论；但健康领域更重要的故事是验证。Isomorphic Labs 总裁 Max Jaderberg 说，大多数药物失败只有在患者身上才会显现，大鼠研究对人类临床毒性的预测力只有约 30%，目标是把学习移进计算，同时保留湿实验室做验证。Aditya Agarwal 的前沿科学投资组合和 Peter Yang 的患者病历 skill 指向同一件事：生物学里有用的 AI 必须把模型连接到证据，而不只是生成看似合理的答案。

## X / Twitter

### Box CEO Aaron Levie

Box CEO Aaron Levie argues that the operating unit of knowledge work is shifting from a chat turn to a swarm of agents that can take an arbitrarily large, parallelizable job. He says that moves the productivity ceiling beyond 20-50% gains, because compute rather than human interaction becomes the variable; domains such as cyber, life sciences, gaming, and IT automation fit because work can be fanned out. Box is also making its content agent-addressable: read/write interoperability with Claude via MCP lets agents create and update files, not just retrieve them. Levie's early test of Gemini 4 Hydrogen found it 5 percentage points more accurate than Gemini 3.8 Flash on Box's complex-work evaluation while finishing in under half the time with roughly 12% fewer tokens.

Box CEO Aaron Levie 认为，知识工作的基本单位正在从一轮聊天转向一组 agent swarm，它们可以接下任意规模的并行任务。他说，这会把生产力上限推过 20% 到 50% 的增量，因为变量变成了算力，而不是人与 AI 的来回互动；网络安全、生命科学、游戏和 IT 自动化等领域适合这种模式，因为工作可以被拆分并行。Box 也在让内容可以被 agent 直接操作：通过 MCP 与 Claude 建立读写互操作，agent 不仅能读取文件，还能创建和更新文件。Levie 对 Gemini 4 Hydrogen 的早期测试发现，它在 Box 的复杂工作评测中比 Gemini 3.8 Flash 准确率高 5 个百分点，同时用不到一半的时间完成任务，典型任务少用约 12% 的 token。

Sources: [1](https://x.com/levie/status/2119502716770902234) | [2](https://x.com/levie/status/2119592025440092192) | [3](https://x.com/levie/status/2120261416733036905) | [4](https://x.com/levie/status/2120947988143198302)

### SPC General Partner Aditya Agarwal

SPC General Partner Aditya Agarwal splits current AI companies into two categories: diffusion and frontier. Diffusion is the vertical SaaS of the moment, whether delivered by forward-deployed engineers, rollups, or horizontal products, and its job is to put AI close to where work happens; he cites Profound, Cognition, and Harvey. The frontier category uses AI to accelerate scientific progress and then builds products from that progress, with portfolio examples including Externa, Epana Bio, VenomicsAI, and Equivariant. Agarwal argues that this second category is harder to see and rarely discussed, but will drive most model-driven returns.

SPC General Partner Aditya Agarwal 把当前的 AI 公司分成两类：扩散和前沿。扩散就是当下的垂直 SaaS，无论由前置部署工程师、rollup 还是水平产品交付，核心都是把 AI 放到工作发生的地方；他举了 Profound、Cognition 和 Harvey。前沿这一类则用 AI 加速科学进步，再从这些进步中构建产品，他给出的投资组合例子包括 Externa、Epana Bio、VenomicsAI 和 Equivariant。Agarwal 认为第二类更难被看见，外界讨论也少，但会贡献模型驱动回报的绝大部分。

Sources: [1](https://x.com/adityaag/status/2120578134177464356)

### Anthropic Researcher Alex Albert

Anthropic researcher Alex Albert recommends rerunning a simple whole-project audit after every new model: ask the model to find everything broken, inconsistent, inefficient, or unnecessary, fix what it is sure about, and list the rest for review. He says much of getting good work from Claude now consists of finding the context it is missing and figuring out how to close that gap. He also predicts that robotics will fall to the bitter lesson.

Anthropic 研究员 Alex Albert 建议，每个新模型发布后都重跑一次简单的全项目审计：让模型找出所有损坏、不一致、低效或不再需要的东西，确定的部分直接修复，其余列出来供人工检查。他说，现在要让 Claude 产出好工作，很大一部分是找出它缺失的上下文，并想办法补上这个缺口。他还预测机器人领域也会服从 bitter lesson。

Sources: [1](https://x.com/alexalbert__/status/2119884951550386671) | [2](https://x.com/alexalbert__/status/2120983722182988206) | [3](https://x.com/alexalbert__/status/2119869925288558799)

### Replit CEO Amjad Masad

Replit CEO Amjad Masad is extending agents from coding into procurement and growth: Replit Agent can now buy things for a business, including ads to acquire customers, and Replit is partnering with Visa on agentic commerce. He framed maintenance as the next objection, answering the question of who maintains vibe-coded apps with self-healing software. His closing claim was blunt: "Autonomous Businesses are here."

Replit CEO Amjad Masad 正在把 agent 从编程扩展到采购和增长：Replit Agent 现在可以替企业买东西，包括购买广告来获取新客户，Replit 也在与 Visa 合作推进 agentic commerce。他用自愈软件回应“谁来维护 vibe coding 应用”的质疑。他的收尾判断很直接：“Autonomous Businesses are here.”

Sources: [1](https://x.com/amasad/status/2119893236747780567) | [2](https://x.com/amasad/status/2121018020520931712) | [3](https://x.com/amasad/status/2121428406764204199) | [4](https://x.com/amasad/status/2121765647168483589)

### Every CEO Dan Shipper

Every CEO Dan Shipper's day-zero tests treat models as production tools, not demos. With Fable 5.2, his team built a video editor's first version in three days; the model was slow and token-hungry, 20% cheaper than Fable 5.1 but not his default for everyday work. Gemini 4 Carbon scored 44% on Every's Senior Engineer benchmark versus Argon's 21%, yet in a backlog test it did 15 tasks after identifying six as ready and had to be stopped after almost 4.5 hours. Shipper's larger lesson came from giving the whole team the same survey: generation is cheap, but knowing which finding matters is still a human advantage.

Every CEO Dan Shipper 的 day-zero 测试把模型当作生产工具，而不是 demo。使用 Fable 5.2 时，他的团队在三天内做出了视频编辑器的第一版；这个模型很慢，也很耗 token，比 Fable 5.1 便宜 20%，但不是他日常工作的默认选择。Gemini 4 Carbon 在 Every 的 Senior Engineer 基准上得分 44%，Argon 为 21%，但在一次积压任务测试中，它先判断 6 个任务已就绪，最后做了 15 个，并在接近 4.5 小时后被叫停。Shipper 更大的结论来自让整个团队分析同一份问卷：生成很便宜，但知道哪个发现重要仍然是人的优势。

Sources: [1](https://x.com/danshipper/status/2119869228207546638) | [2](https://x.com/danshipper/status/2120187507396530309) | [3](https://x.com/danshipper/status/2120539547620790424)

### Y Combinator President and CEO Garry Tan

Y Combinator President and CEO Garry Tan says frontier-model releases still create a step-function improvement across projects, making personal just-in-time software feel inevitable. His open-source harness evaluation offers a more disciplined counterweight: keep Opus 5.5 as the coding default in Claude Code because Fable 5.2 solved about as many of 52 tasks, 82.7% versus 84.6%, while costing 2.80x as much per solved task. Tan's conclusion is to measure the model against the tasks and economics you actually have, not the launch narrative.

Y Combinator 总裁兼 CEO Garry Tan 说，前沿模型发布仍会给每个项目带来阶梯式提升，让个人即时软件变得越来越必然。他的开源 harness 评测提供了一个更自律的反例：在 Claude Code 里继续把 Opus 5.5 作为编程默认值，因为 Fable 5.2 在 52 个任务中的完成率与它接近，分别为 82.7% 和 84.6%，但每个已解决任务的成本是 2.80 倍。Tan 的结论是，用自己真实拥有的任务和经济约束来衡量模型，而不是跟着发布叙事走。

Sources: [1](https://x.com/garrytan/status/2119612084220842483) | [2](https://x.com/garrytan/status/2121463161069228382) | [3](https://x.com/garrytan/status/2121464508225053153)

### Vercel CEO Guillermo Rauch

Vercel CEO Guillermo Rauch says the new generation of models can take on unprecedented bodies of parallel work, which makes cloud sandboxes necessary and turns ambition and parallel compute into the main bottlenecks. He added MCP Events so an agent can subscribe to events such as a successful deployment instead of polling for completion. Vercel's security review identified 57,897 vulnerabilities in less than a week, including 6,029 critical or high findings, and 14,665 were already patched by an agent. Rauch's point is that agent infrastructure has to handle both more concurrent work and more automated action without loosening control.

Vercel CEO Guillermo Rauch 说，新一代模型可以承担前所未有的并行工作量，这让云沙箱成为必需品，也让野心和并行算力成为主要瓶颈。他加入了 MCP Events，让 agent 可以订阅部署成功之类的回调，而不是轮询完成状态。Vercel 的安全审查在不到一周内发现了 57,897 个漏洞，其中 6,029 个为严重或高危，已有 14,665 个由 agent 修复。Rauch 的重点是，agent 基础设施必须同时承接更多并发工作和更多自动操作，同时不能放松控制。

Sources: [1](https://x.com/rauchg/status/2119878364794372162) | [2](https://x.com/rauchg/status/2119891138450755670) | [3](https://x.com/rauchg/status/2120188488628977819)

### Meta Senior Director of AI Madhu Guru

Meta Senior Director of AI Madhu Guru proposes drawing the entire product lifecycle, from market understanding through design, development, and go-to-market, then asking where AI can let PMs go deeper. His list includes richer user and market understanding, faster working prototypes, direct exploration of code and technical tradeoffs, self-serve analytics, and a deeper grasp of the GTM funnel. The goal is not for PMs to replace every specialist, but to combine their breadth with much greater depth.

Meta AI 高级总监 Madhu Guru 建议画出完整的产品生命周期，从市场理解到设计、开发再到 GTM，然后追问 AI 能让 PM 在哪些环节走得更深。他的清单包括更丰富地理解用户和市场、更快做出可用原型、直接研究代码和技术取舍、自己做分析，以及更深入理解 GTM 漏斗。目标不是让 PM 取代每个专家，而是把广度与更大的深度结合起来。

Sources: [1](https://x.com/realmadhuguru/status/2119999748086362466)

### OpenAI's Nan Yu

OpenAI's Nan Yu, who works on Codex product, argues that software has become much easier if you know what you want to build and much harder if you do not. Without clarity, teams can now ship a pile of junk quickly, so he recommends choosing the dumbest architecture and design that will work rather than the cleverest. He also points out a practical ChatGPT feature: global dictation uses the same fast transcription path as in-app dictation and can be mapped to the Apple dictation key.

OpenAI 的 Nan Yu 负责 Codex 产品，他认为如果你知道自己要做什么，软件开发已经容易得多；如果不知道，反而难得多。没有清晰度时，团队现在可以很快交付一堆垃圾，所以他建议选择能工作的最笨架构和最笨设计，而不是最聪明的方案。他还指出一个实用的 ChatGPT 功能：全局听写使用与 app 内听写相同的快速转录路径，并且可以映射到 Apple 的听写键。

Sources: [1](https://x.com/thenanyu/status/2119462224721002560) | [2](https://x.com/thenanyu/status/2119462979179892925) | [3](https://x.com/thenanyu/status/2120037431261184454)

### FPV Ventures Partner Nikunj Kothari

FPV Ventures partner Nikunj Kothari scraped the subprocessor lists of 803 AI-native companies and found that 44% list two or more model providers, up from 33%, while 33% list an inference provider, up from 22%. He flags Anthropic's relative growth, Modal's strength, Chinese models arriving mainly through video, and Typesafe as a breakout, while cautioning that subprocessor lists are lagging indicators. He also warns that benchmark-maxxing is back and that most public benchmarks matter less than testing models on your own workflow.

FPV Ventures 合伙人 Nikunj Kothari 抓取了 803 家 AI native 公司的子处理商名单，发现 44% 的公司列出两个或更多模型供应商，高于此前的 33%；33% 列出推理供应商，从 22% 上升。他指出 Anthropic 的相对增长、Modal 的强势、中国模型主要通过视频进入，以及 Typesafe 的突破，同时提醒子处理商名单是滞后指标。他还警告 benchmark-maxxing 又回来了，大多数公开 benchmark 都不如用模型测试自己的工作流重要。

Sources: [1](https://x.com/nikunj/status/2120669243918418237) | [2](https://x.com/nikunj/status/2121320899161010360)

### Peter Yang

Peter Yang released a free /fuck-cancer skill that lets ChatGPT or Claude work through a folder of a patient's medical records to create a one-page brief and research clinical trials, and invites people to fork it for other long-term conditions. He also shared two prompts for auditing a Claude Code setup or an individual skill after a model release.

Peter Yang 发布了一个免费的 /fuck-cancer skill，让 ChatGPT 或 Claude 读取患者病历文件夹，生成一页摘要并研究临床试验，也邀请人们把它 fork 用于其他长期疾病。他还分享了两个 prompt，用于在模型发布后审计 Claude Code 配置或单个 skill。

Sources: [1](https://x.com/petergyang/status/2121430386685395022) | [2](https://x.com/petergyang/status/2121649295950762363)

### Designer Ryo Lu

Ryo Lu, who has designed at Cursor, Notion, and Stripe, asks what happens when we can do anything: do we still know what we want? He argues that the magic comes from working with other humans, not from each person running an isolated army of agents. His broader case is that software is not only for optimization and task completion; it can create worlds that let people in, aspire, create, and find themselves, much like film and music.

曾在 Cursor、Notion 和 Stripe 做设计的 Ryo Lu 问，当我们可以做任何事时，我们是否还知道自己想要什么？他认为魔力来自与其他人类合作，而不是每个人都运行一支孤立的 agent 军队。他更完整的观点是，软件不只是用于优化和完成任务；它可以创造让人进入、产生向往、创造并找到自我的世界，就像电影和音乐一样。

Sources: [1](https://x.com/ryolu_/status/2119586846657454152) | [2](https://x.com/ryolu_/status/2120337691661443081) | [3](https://x.com/ryolu_/status/2120380317429350654)

### Builder Zara Zhang

Builder Zara Zhang has almost stopped using the term vibe coding because it implies low effort and AI slop even when people put real heart and soul into AI-assisted work. She advises sharing work in progress rather than waiting for it to be finished, and says 80% of users who do not return forgot the product exists while 20% did not like it. She also cites the product lesson that technology finishes its most important work once the audience forgets the technology.

Builder Zara Zhang 已经几乎不再使用 vibe coding 这个词，因为它暗示低投入和 AI slop，即使人们在使用 AI 编程工具时投入了真心和灵魂。她建议分享进行中的作品，而不是等到完成或完美；她说 80% 不再回访的用户是忘了产品存在，20% 是不喜欢产品。她还引用了一条产品经验：当观众忘记技术的存在时，技术才完成它最重要的工作。

Sources: [1](https://x.com/zarazhangrui/status/2119592080318341128) | [2](https://x.com/zarazhangrui/status/2120041030951297033) | [3](https://x.com/zarazhangrui/status/2120235104194932841) | [4](https://x.com/zarazhangrui/status/2120429971718156375)

### Claude

Claude Fable 5.2 found the exact limit of the simplest version of a 15-year-old technique called modular bootstrapping, which is used to rule out candidate theories of quantum gravity in theoretical universes; the result is written up in a preprint, and the model is available on all paid plans. Claude Data, formerly Dashboards, is now generally available with data stories and narrated videos, while interactive connectors let users work inside Adobe, Atlassian, and Box alongside the conversation. Claude Meetings also joins Google Meet as a visible participant that can take notes and save the transcript, action items, and anything it builds to the meeting page.

Claude Fable 5.2 找到了“modular bootstrapping”这项 15 年历史技术最简单版本的精确极限，这项技术用于在理论宇宙中排除候选的量子引力理论；结果写成了预印本，模型也已在所有付费套餐上线。Claude Data 原名为 Dashboards，现已正式可用，可以生成数据故事和带旁白的视频；交互式 connector 让用户可以在对话旁直接使用 Adobe、Atlassian 和 Box。Claude Meetings 也以可见参与者身份加入 Google Meet，可以记笔记，并把会议记录、行动项、transcript 以及它构建的内容保存到会议页面。

Sources: [1](https://x.com/claudeai/status/2119899488995131439) | [2](https://x.com/claudeai/status/2119899492778398163) | [3](https://x.com/claudeai/status/2120206372478566799) | [4](https://x.com/claudeai/status/2120206375137484875) | [5](https://x.com/claudeai/status/2120973996304830859) | [6](https://x.com/claudeai/status/2120973999295643679)

## Podcast

### Latent Space: [One Million AI Engineer Special] How Stanford Teaches AI-Native Engineering (Mihail Eric, Monaco)

The Takeaway: An AI-native engineer is not someone who types less, but someone who can specify intent, supply context, and verify work at a level models cannot supply on their own.

核心结论：AI native 工程师不是打字更少的人，而是能够清晰表达意图、提供上下文，并以模型自身无法提供的水平验证工作的人。

Mihail Eric, an adjunct professor at Stanford and head of AI at Monaco, refreshed CS 146, The Modern Software Developer, around that premise. His students are already agent users; in his survey, no student said they still type code by hand. The course starts with a 200-line coding harness, then uses a proxy to inspect a production harness's real prompts and context management. It moves through MCP and tool design, skills, agent-ready repositories, code review, security, and the human choke points in an agent factory. The open-source assignments are deliberate: maintainers review student work, so juniors learn architecture and taste from people with production judgment.

Mihail Eric 是斯坦福兼职教授，也是 Monaco 的 AI 负责人，他围绕这个前提更新了 CS 146“The Modern Software Developer”。他的学生已经是 agent 用户；在他的调查里，没有学生说自己还手写代码。课程从一个 200 行的编程 harness 开始，然后用代理检查生产 harness 的真实 prompt 和上下文管理。课程还覆盖 MCP 和工具设计、skill、agent-ready 仓库、代码审查、安全，以及 agent factory 中仍然需要人类参与的瓶颈。开源作业是刻意安排的：维护者会审查学生的工作，让初级工程师从有生产判断力的人那里学习架构和品味。

Eric's warning is that generation has become easy while understanding has not. Code review is now a bottleneck, and the ability to define intent and build verifiable systems is what separates useful delegation from expensive slop. As he puts it, "There's no situation in which turning your brain off is a good idea." The course is therefore less a tour of tools than training in how to stay accountable for systems that agents increasingly write.

Eric 的警告是，生成已经变容易，理解却没有。代码审查现在是瓶颈，而定义意图和构建可验证系统的能力，决定了有用的委托与昂贵的 slop 之间的差别。正如他所说，“There's no situation in which turning your brain off is a good idea.” 因此，这门课与其说是工具巡览，不如说是在训练学生如何对 agent 越来越多地写出的系统继续负责。

https://www.youtube.com/watch?v=dpY7YzZo4kE

### Latent Space: Designing for Agents (Zeno Rocha, Resend)

The Takeaway: Agent readiness is becoming a product distribution problem, not a side integration.

核心结论：agent readiness 正在变成产品分发问题，而不是一个附加集成。

Resend's Zeno Rocha built an email platform for developers by starting with the API and treating the product as formless: whatever workflow a developer wants should be expressible through the interface. That bet paid off when coding agents began choosing tools. Resend's MCP usage grew quickly, but making remote MCP trustworthy required a full permissions rebuild around OAuth, RBAC, and observability. Rocha argues that an official connector has to be owned by the software vendor, not left to a third party, because buyers increasingly select products by whether their agents can access them.

Resend 的 Zeno Rocha 从 API 出发，把产品设计成“无固定形态”，任何开发者想要的工作流都应该能通过界面表达出来，从而为开发者构建了一个邮件平台。当编程 agent 开始选择工具时，这个押注得到了回报。Resend 的 MCP 使用量增长很快，但要让远程 MCP 值得信任，团队必须围绕 OAuth、RBAC 和可观测性重建整套权限体系。Rocha 认为，官方 connector 必须由软件厂商自己拥有，不能交给第三方，因为买家越来越会根据 agent 是否能访问产品来做选择。

The operational details matter as much as the protocol. Resend automatically generates a plain-text version of every email because more agents consume messages that way, and Rocha says this improved deliverability. The team is also moving deeper into email infrastructure to gain direct visibility into delivery, rather than depending entirely on other providers. "If I knew how hard email is, I probably wouldn't start the company either," he says, but the developer-first wedge still gave Resend a way into a crowded market.

运营细节和协议本身同样重要。Resend 会自动为每封邮件生成纯文本版本，因为越来越多 agent 以这种方式消费消息，Rocha 说这提升了送达率。团队也在深入邮件基础设施，以便直接看到投递情况，而不是完全依赖其他供应商。“If I knew how hard email is, I probably wouldn't start the company either,” 他说，但开发者优先的切入点仍然给了 Resend 进入拥挤市场的机会。

For AI builders, the lesson is that MCP is not a badge. It is a product surface that forces identity, permissions, support, and data ownership to become explicit.

对 AI builder 来说，教训是 MCP 不是一个徽章。它是一个产品界面，会迫使身份、权限、支持和数据所有权变得明确。

https://www.youtube.com/@LatentSpacePod

### No Priors: Powering AI-Driven Drug Discovery with President of Isomorphic Labs Max Jaderberg

The Takeaway: AI drug discovery will matter only if it moves the expensive failures out of the clinic and into predictive models.

核心结论：AI 药物发现只有在把昂贵的失败从临床移进预测模型时，才真正重要。

Max Jaderberg is president and part of the founding team of Isomorphic Labs, the Alphabet-backed company built around the goal of solving disease. His path ran through DeepMind's game-playing work and AlphaFold, which showed that deep learning could generalize in biology. The problem he is attacking is economic as much as scientific: drug development is slow and expensive because failures often become visible only when molecules reach patients. Animal studies are an imperfect proxy, and Jaderberg says rat studies are only about 30% predictive of human clinical toxicity.

Max Jaderberg 是 Isomorphic Labs 总裁，也是创始团队成员。这家由 Alphabet 支持的公司以解决疾病为目标。他的路径经过 DeepMind 的游戏工作和 AlphaFold，后者证明深度学习可以在生物学中泛化。他面对的问题既是经济问题也是科学问题：药物开发缓慢而昂贵，因为失败往往只有在分子进入患者体内后才变得可见。动物研究是不完美的代理，Jaderberg 说大鼠研究对人类临床毒性的预测力只有约 30%。

Isomorphic's response is to model more of disease biology, generate proprietary data, and use automated labs to shorten real-world iteration. The aim is not to eliminate experiments but to change their role. "I wanna get out of the real world," Jaderberg says, meaning more learning should happen in silico, with wet labs reserved for validation. The company keeps its drug-design engine in house, runs its own pipeline, and partners with pharma on hard disease areas.

Isomorphic 的回应是建模更多疾病生物学、生成专有数据，并用自动化实验室缩短真实世界的迭代。目标不是取消实验，而是改变实验的角色。“I wanna get out of the real world,” Jaderberg 说，意思是更多学习应该发生在计算机里，湿实验室保留给验证。公司把药物设计引擎留在内部，运行自己的管线，并与药企合作攻克困难疾病领域。

His five-year test is concrete: predictive understanding of disease biology and the ability to design more precise, less toxic molecules should both step-change. He says, "I'd be really disappointed if we fast forward even five years' time" without that shift.

他的五年检验很具体：对疾病生物学的预测性理解，以及设计更精准、更低毒分子的能力，都应该出现阶跃式提升。他说，如果“fast forward even five years' time”后这个转变还没有发生，他会非常失望。

https://www.youtube.com/@NoPriorsPodcast

**Also published / 同样发布:** AI & I by Every: [A New Vision for Human Work After Automation](https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL)

## Blog

The validated weekly feed contained no qualifying blog posts.

经校验的周度 feed 中没有符合条件的博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
