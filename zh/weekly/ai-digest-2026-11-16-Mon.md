[English](../../en/weekly/ai-digest-2026-11-16-Mon.md) | [中文](./ai-digest-2026-11-16-Mon.md) | [双语](../../bilingual/weekly/ai-digest-2026-11-16-Mon.md)

---

# AI Builders Digest

覆盖范围：2026-11-09 00:00 至 2026-11-16 00:00（Asia/Shanghai）
已知 feed 覆盖缺口（UTC）：X/Twitter 2026-11-14T06:25:34.902Z 至 2026-11-14T06:26:52.164Z（0.02 小时）；X/Twitter 2026-11-15T06:26:52.164Z 至 2026-11-15T06:42:15.797Z（0.26 小时）。

## 导读

本周最重要的变化，是 agent 开始被交付结果，而不是一问一答。Box CEO Aaron Levie 描述了 agent swarm 如何接下一个问题，再把工作并行铺开，直到产出不再受聊天时间限制；Replit CEO Amjad Masad 从自愈软件走向能替企业买广告的 agent 和“自主企业”；Vercel CEO Guillermo Rauch 则认为，并行工作的上限已经变成野心和算力。管理问题不再是如何写出更好的 prompt，而是如何定义完成、分配预算、检查状态，并把人类留在意图和验证这两个剩余瓶颈上。

生成变得便宜，判断反而更稀缺。Dan Shipper 的实验让 Every 团队所有人使用同一份问卷和同样的模型，每个人都找到了不同的有用信号；而 Claude 在 400 次尝试中可以生成 93% 像 Shipper 的回答，但把它排进前 10% 的概率只有约 60%。这是本周关于团队价值最清晰的论证：模型扩大了搜索空间，但责任和视角决定什么才重要。Madhu Guru 在产品管理里提出同样的观点，AI 应该让 PM 更深入用户、原型、代码、分析和 GTM，而不是取代这个角色。

模型进步也太快，固定套路很快会过期。Levie 说团队应该每三到六个月重新测试过去的假设；Anthropic 研究员 Alex Albert 会在每个新模型发布后重跑一次全项目审计；Garry Tan 的 harness 评测发现，Fable 5.2 和 Opus 5.5 在 52 个编程任务上的表现接近，分别为 82.7% 和 84.6%，但 Fable 每个已解决任务的成本是 2.80 倍。Dan Shipper 对 Gemini 4 Carbon 的测试显示了明显的编程提升，但也暴露出更弱的停止行为。实际规则不是追逐某一张榜单，而是在真实工作流和成本下重新评估每个模型。

Agent 基础设施正在围绕共享状态和权限收敛。Box 和 Anthropic 为企业文件加入了 MCP 读写互操作；Vercel 加入 MCP Events，让 agent 可以订阅回调而不是轮询；Claude 加入了交互式 connector 和可见的会议参与。Resend 的 Zeno Rocha 描述了同一模式背后不那么光鲜的工作：远程 MCP 迫使团队重建 OAuth、RBAC、可观测性，并明确由软件厂商自己拥有这个集成。能被 agent 访问正在成为一种分发渠道，而信任边界本身就是产品。

软件创造正在走出工程团队，但手艺没有消失。Every 用前沿模型做出了视频编辑器、纪录片工作流，以及给团队和孩子做的游戏；Peter Yang 把癌症研究 skill 和 prompt 审计打包给用户；Guillermo Rauch 的 UI SDK 为生成式界面封装了浏览器行为。Mihail Eric 在斯坦福的课程正面回应了质疑：学生要写一个 200 行的 harness，通过代理检查生产 harness，并向维护者会审阅的开源仓库贡献代码。重点不是把代码从课程里拿掉，而是把人的精力移向架构、上下文、意图、审查和系统理解。

最后，AI 进入科学和健康领域后，证明标准也随之改变。Claude Fable 5.2 生成了关于一种物理技术的预印本，这种技术用于排除候选的量子引力理论；但健康领域更重要的故事是验证。Isomorphic Labs 总裁 Max Jaderberg 说，大多数药物失败只有在患者身上才会显现，大鼠研究对人类临床毒性的预测力只有约 30%，目标是把学习移进计算，同时保留湿实验室做验证。Aditya Agarwal 的前沿科学投资组合和 Peter Yang 的患者病历 skill 指向同一件事：生物学里有用的 AI 必须把模型连接到证据，而不只是生成看似合理的答案。

## X / Twitter

### Box CEO Aaron Levie

Box CEO Aaron Levie 认为，知识工作的基本单位正在从一轮聊天转向一组 agent swarm，它们可以接下任意规模的并行任务。他说，这会把生产力上限推过 20% 到 50% 的增量，因为变量变成了算力，而不是人与 AI 的来回互动；网络安全、生命科学、游戏和 IT 自动化等领域适合这种模式，因为工作可以被拆分并行。Box 也在让内容可以被 agent 直接操作：通过 MCP 与 Claude 建立读写互操作，agent 不仅能读取文件，还能创建和更新文件。Levie 对 Gemini 4 Hydrogen 的早期测试发现，它在 Box 的复杂工作评测中比 Gemini 3.8 Flash 准确率高 5 个百分点，同时用不到一半的时间完成任务，典型任务少用约 12% 的 token。

来源：[1](https://x.com/levie/status/2119502716770902234) | [2](https://x.com/levie/status/2119592025440092192) | [3](https://x.com/levie/status/2120261416733036905) | [4](https://x.com/levie/status/2120947988143198302)

### SPC General Partner Aditya Agarwal

SPC General Partner Aditya Agarwal 把当前的 AI 公司分成两类：扩散和前沿。扩散就是当下的垂直 SaaS，无论由前置部署工程师、rollup 还是水平产品交付，核心都是把 AI 放到工作发生的地方；他举了 Profound、Cognition 和 Harvey。前沿这一类则用 AI 加速科学进步，再从这些进步中构建产品，他给出的投资组合例子包括 Externa、Epana Bio、VenomicsAI 和 Equivariant。Agarwal 认为第二类更难被看见，外界讨论也少，但会贡献模型驱动回报的绝大部分。

来源：[1](https://x.com/adityaag/status/2120578134177464356)

### Anthropic Researcher Alex Albert

Anthropic 研究员 Alex Albert 建议，每个新模型发布后都重跑一次简单的全项目审计：让模型找出所有损坏、不一致、低效或不再需要的东西，确定的部分直接修复，其余列出来供人工检查。他说，现在要让 Claude 产出好工作，很大一部分是找出它缺失的上下文，并想办法补上这个缺口。他还预测机器人领域也会服从 bitter lesson。

来源：[1](https://x.com/alexalbert__/status/2119884951550386671) | [2](https://x.com/alexalbert__/status/2120983722182988206) | [3](https://x.com/alexalbert__/status/2119869925288558799)

### Replit CEO Amjad Masad

Replit CEO Amjad Masad 正在把 agent 从编程扩展到采购和增长：Replit Agent 现在可以替企业买东西，包括购买广告来获取新客户，Replit 也在与 Visa 合作推进 agentic commerce。他用自愈软件回应“谁来维护 vibe coding 应用”的质疑。他的收尾判断很直接：“Autonomous Businesses are here.”

来源：[1](https://x.com/amasad/status/2119893236747780567) | [2](https://x.com/amasad/status/2121018020520931712) | [3](https://x.com/amasad/status/2121428406764204199) | [4](https://x.com/amasad/status/2121765647168483589)

### Every CEO Dan Shipper

Every CEO Dan Shipper 的 day-zero 测试把模型当作生产工具，而不是 demo。使用 Fable 5.2 时，他的团队在三天内做出了视频编辑器的第一版；这个模型很慢，也很耗 token，比 Fable 5.1 便宜 20%，但不是他日常工作的默认选择。Gemini 4 Carbon 在 Every 的 Senior Engineer 基准上得分 44%，Argon 为 21%，但在一次积压任务测试中，它先判断 6 个任务已就绪，最后做了 15 个，并在接近 4.5 小时后被叫停。Shipper 更大的结论来自让整个团队分析同一份问卷：生成很便宜，但知道哪个发现重要仍然是人的优势。

来源：[1](https://x.com/danshipper/status/2119869228207546638) | [2](https://x.com/danshipper/status/2120187507396530309) | [3](https://x.com/danshipper/status/2120539547620790424)

### Y Combinator President and CEO Garry Tan

Y Combinator 总裁兼 CEO Garry Tan 说，前沿模型发布仍会给每个项目带来阶梯式提升，让个人即时软件变得越来越必然。他的开源 harness 评测提供了一个更自律的反例：在 Claude Code 里继续把 Opus 5.5 作为编程默认值，因为 Fable 5.2 在 52 个任务中的完成率与它接近，分别为 82.7% 和 84.6%，但每个已解决任务的成本是 2.80 倍。Tan 的结论是，用自己真实拥有的任务和经济约束来衡量模型，而不是跟着发布叙事走。

来源：[1](https://x.com/garrytan/status/2119612084220842483) | [2](https://x.com/garrytan/status/2121463161069228382) | [3](https://x.com/garrytan/status/2121464508225053153)

### Vercel CEO Guillermo Rauch

Vercel CEO Guillermo Rauch 说，新一代模型可以承担前所未有的并行工作量，这让云沙箱成为必需品，也让野心和并行算力成为主要瓶颈。他加入了 MCP Events，让 agent 可以订阅部署成功之类的回调，而不是轮询完成状态。Vercel 的安全审查在不到一周内发现了 57,897 个漏洞，其中 6,029 个为严重或高危，已有 14,665 个由 agent 修复。Rauch 的重点是，agent 基础设施必须同时承接更多并发工作和更多自动操作，同时不能放松控制。

来源：[1](https://x.com/rauchg/status/2119878364794372162) | [2](https://x.com/rauchg/status/2119891138450755670) | [3](https://x.com/rauchg/status/2120188488628977819)

### Meta Senior Director of AI Madhu Guru

Meta AI 高级总监 Madhu Guru 建议画出完整的产品生命周期，从市场理解到设计、开发再到 GTM，然后追问 AI 能让 PM 在哪些环节走得更深。他的清单包括更丰富地理解用户和市场、更快做出可用原型、直接研究代码和技术取舍、自己做分析，以及更深入理解 GTM 漏斗。目标不是让 PM 取代每个专家，而是把广度与更大的深度结合起来。

来源：[1](https://x.com/realmadhuguru/status/2119999748086362466)

### OpenAI 的 Nan Yu

OpenAI 的 Nan Yu 负责 Codex 产品，他认为如果你知道自己要做什么，软件开发已经容易得多；如果不知道，反而难得多。没有清晰度时，团队现在可以很快交付一堆垃圾，所以他建议选择能工作的最笨架构和最笨设计，而不是最聪明的方案。他还指出一个实用的 ChatGPT 功能：全局听写使用与 app 内听写相同的快速转录路径，并且可以映射到 Apple 的听写键。

来源：[1](https://x.com/thenanyu/status/2119462224721002560) | [2](https://x.com/thenanyu/status/2119462979179892925) | [3](https://x.com/thenanyu/status/2120037431261184454)

### FPV Ventures Partner Nikunj Kothari

FPV Ventures 合伙人 Nikunj Kothari 抓取了 803 家 AI native 公司的子处理商名单，发现 44% 的公司列出两个或更多模型供应商，高于此前的 33%；33% 列出推理供应商，从 22% 上升。他指出 Anthropic 的相对增长、Modal 的强势、中国模型主要通过视频进入，以及 Typesafe 的突破，同时提醒子处理商名单是滞后指标。他还警告 benchmark-maxxing 又回来了，大多数公开 benchmark 都不如用模型测试自己的工作流重要。

来源：[1](https://x.com/nikunj/status/2120669243918418237) | [2](https://x.com/nikunj/status/2121320899161010360)

### Peter Yang

Peter Yang 发布了一个免费的 /fuck-cancer skill，让 ChatGPT 或 Claude 读取患者病历文件夹，生成一页摘要并研究临床试验，也邀请人们把它 fork 用于其他长期疾病。他还分享了两个 prompt，用于在模型发布后审计 Claude Code 配置或单个 skill。

来源：[1](https://x.com/petergyang/status/2121430386685395022) | [2](https://x.com/petergyang/status/2121649295950762363)

### Designer Ryo Lu

曾在 Cursor、Notion 和 Stripe 做设计的 Ryo Lu 问，当我们可以做任何事时，我们是否还知道自己想要什么？他认为魔力来自与其他人类合作，而不是每个人都运行一支孤立的 agent 军队。他更完整的观点是，软件不只是用于优化和完成任务；它可以创造让人进入、产生向往、创造并找到自我的世界，就像电影和音乐一样。

来源：[1](https://x.com/ryolu_/status/2119586846657454152) | [2](https://x.com/ryolu_/status/2120337691661443081) | [3](https://x.com/ryolu_/status/2120380317429350654)

### Builder Zara Zhang

Builder Zara Zhang 已经几乎不再使用 vibe coding 这个词，因为它暗示低投入和 AI slop，即使人们在使用 AI 编程工具时投入了真心和灵魂。她建议分享进行中的作品，而不是等到完成或完美；她说 80% 不再回访的用户是忘了产品存在，20% 是不喜欢产品。她还引用了一条产品经验：当观众忘记技术的存在时，技术才完成它最重要的工作。

来源：[1](https://x.com/zarazhangrui/status/2119592080318341128) | [2](https://x.com/zarazhangrui/status/2120041030951297033) | [3](https://x.com/zarazhangrui/status/2120235104194932841) | [4](https://x.com/zarazhangrui/status/2120429971718156375)

### Claude

Claude Fable 5.2 找到了“modular bootstrapping”这项 15 年历史技术最简单版本的精确极限，这项技术用于在理论宇宙中排除候选的量子引力理论；结果写成了预印本，模型也已在所有付费套餐上线。Claude Data 原名为 Dashboards，现已正式可用，可以生成数据故事和带旁白的视频；交互式 connector 让用户可以在对话旁直接使用 Adobe、Atlassian 和 Box。Claude Meetings 也以可见参与者身份加入 Google Meet，可以记笔记，并把会议记录、行动项、transcript 以及它构建的内容保存到会议页面。

来源：[1](https://x.com/claudeai/status/2119899488995131439) | [2](https://x.com/claudeai/status/2119899492778398163) | [3](https://x.com/claudeai/status/2120206372478566799) | [4](https://x.com/claudeai/status/2120206375137484875) | [5](https://x.com/claudeai/status/2120973996304830859) | [6](https://x.com/claudeai/status/2120973999295643679)

## Podcast

### Latent Space：[One Million AI Engineer Special] How Stanford Teaches AI-Native Engineering（Mihail Eric, Monaco）

核心结论：AI native 工程师不是打字更少的人，而是能够清晰表达意图、提供上下文，并以模型自身无法提供的水平验证工作的人。

Mihail Eric 是斯坦福兼职教授，也是 Monaco 的 AI 负责人，他围绕这个前提更新了 CS 146“The Modern Software Developer”。他的学生已经是 agent 用户；在他的调查里，没有学生说自己还手写代码。课程从一个 200 行的编程 harness 开始，然后用代理检查生产 harness 的真实 prompt 和上下文管理。课程还覆盖 MCP 和工具设计、skill、agent-ready 仓库、代码审查、安全，以及 agent factory 中仍然需要人类参与的瓶颈。开源作业是刻意安排的：维护者会审查学生的工作，让初级工程师从有生产判断力的人那里学习架构和品味。

Eric 的警告是，生成已经变容易，理解却没有。代码审查现在是瓶颈，而定义意图和构建可验证系统的能力，决定了有用的委托与昂贵的 slop 之间的差别。正如他所说，“There's no situation in which turning your brain off is a good idea.” 因此，这门课与其说是工具巡览，不如说是在训练学生如何对 agent 越来越多地写出的系统继续负责。

https://www.youtube.com/watch?v=dpY7YzZo4kE

### Latent Space：Designing for Agents（Zeno Rocha, Resend）

核心结论：agent readiness 正在变成产品分发问题，而不是一个附加集成。

Resend 的 Zeno Rocha 从 API 出发，把产品设计成“无固定形态”，任何开发者想要的工作流都应该能通过界面表达出来，从而为开发者构建了一个邮件平台。当编程 agent 开始选择工具时，这个押注得到了回报。Resend 的 MCP 使用量增长很快，但要让远程 MCP 值得信任，团队必须围绕 OAuth、RBAC 和可观测性重建整套权限体系。Rocha 认为，官方 connector 必须由软件厂商自己拥有，不能交给第三方，因为买家越来越会根据 agent 是否能访问产品来做选择。

运营细节和协议本身同样重要。Resend 会自动为每封邮件生成纯文本版本，因为越来越多 agent 以这种方式消费消息，Rocha 说这提升了送达率。团队也在深入邮件基础设施，以便直接看到投递情况，而不是完全依赖其他供应商。“If I knew how hard email is, I probably wouldn't start the company either,” 他说，但开发者优先的切入点仍然给了 Resend 进入拥挤市场的机会。

对 AI builder 来说，教训是 MCP 不是一个徽章。它是一个产品界面，会迫使身份、权限、支持和数据所有权变得明确。

https://www.youtube.com/@LatentSpacePod

### No Priors：Powering AI-Driven Drug Discovery with President of Isomorphic Labs Max Jaderberg

核心结论：AI 药物发现只有在把昂贵的失败从临床移进预测模型时，才真正重要。

Max Jaderberg 是 Isomorphic Labs 总裁，也是创始团队成员。这家由 Alphabet 支持的公司以解决疾病为目标。他的路径经过 DeepMind 的游戏工作和 AlphaFold，后者证明深度学习可以在生物学中泛化。他面对的问题既是经济问题也是科学问题：药物开发缓慢而昂贵，因为失败往往只有在分子进入患者体内后才变得可见。动物研究是不完美的代理，Jaderberg 说大鼠研究对人类临床毒性的预测力只有约 30%。

Isomorphic 的回应是建模更多疾病生物学、生成专有数据，并用自动化实验室缩短真实世界的迭代。目标不是取消实验，而是改变实验的角色。“I wanna get out of the real world,” Jaderberg 说，意思是更多学习应该发生在计算机里，湿实验室保留给验证。公司把药物设计引擎留在内部，运行自己的管线，并与药企合作攻克困难疾病领域。

他的五年检验很具体：对疾病生物学的预测性理解，以及设计更精准、更低毒分子的能力，都应该出现阶跃式提升。他说，如果“fast forward even five years' time”后这个转变还没有发生，他会非常失望。

https://www.youtube.com/@NoPriorsPodcast

**同样发布：** AI & I by Every：[A New Vision for Human Work After Automation](https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL)

## Blog

经校验的周度 feed 中没有符合条件的博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
