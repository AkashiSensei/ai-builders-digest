[English](../../en/daily/ai-digest-2026-09-11-Fri.md) | [中文](../../zh/daily/ai-digest-2026-09-11-Fri.md) | [Bilingual](./ai-digest-2026-09-11-Fri.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. Compute capacity is the binding constraint, and it is reshaping access.** OpenAI's Thibault Sottiaux says the company will pause new subscriptions to its $200 Pro plan so current users keep an incredible experience and continued access to Astra, calling it "the smallest step that allows us to continue giving the broadest access possible." All other plans and the API stay available, existing accounts are unaffected, and capacity is being added as fast as possible. Peter Steinberger's read is that Astra demand is growing too fast. On the podcast, Recursive's Richard Socher calls compute the biggest constraint on the road to recursive self-improvement, and the conversation notes the company raised $650 million and committed $410 million of it to a single Amazon compute deal.

**1. 算力正在成为硬约束，并直接改变着产品的可用性。** OpenAI 的 Thibault Sottiaux 表示，为了让现有用户继续获得出色的体验并持续使用 Astra，公司将暂停 200 美元 Pro 套餐的新订阅，称这是「既能保持最广泛可用性、影响又最小的一步」。其他所有套餐和 API 继续可用，现有账户不受影响，团队正在尽快补充算力。Peter Steinberger 的判断是 Astra 的需求增长太快。播客里，Recursive 的 Richard Socher 把算力称为通往递归自我改进路上最大的约束，节目中提到公司融资 6.5 亿美元，其中 4.1 亿美元投入了与 Amazon 的单一算力交易。

**2. Recursive self-improvement is being framed as a science engine, not just a bigger model.** Socher's Recursive is built to automate AI research itself. The blueprint in his book The Eureka Machine has four pillars: human knowledge ingested through LLMs, the scientific measurements we can now capture, simulation, and real-world experimentation through robotics, with an agent swarm on top. His central claim is that anything AI can simulate, it will solve, and he treats hallucinations as a feature when the goal is exploring genuinely new proteins, molecules, and ideas.

**2. 递归自我改进被包装成科研引擎，而不只是更大的模型。** Socher 的 Recursive 目标是自动化 AI 研究本身。他在《The Eureka Machine》里给出的蓝图有四大支柱：通过 LLM 吸收人类知识、科学测量、仿真，以及借助机器人完成的真实世界实验，最上层再叠加 agent swarm。他的核心判断是：任何可以仿真的东西，AI 最终都会解决。他还认为，当目标是探索全新的蛋白质、分子和想法时，幻觉可以是特性而不是缺陷。

**3. AI risk has moved from a thought experiment to an enterprise operating problem.** Boris Cherny calls the latest Threat Intelligence report "absolutely terrifying and important," arguing that as models get more intelligent they also become more dangerous without the right safeguards and monitoring, and that many capabilities are dual use. Aaron Levie reports that cyber is the top concern among the technology leaders he met, tied to the OpenAI Hugging Face incident, though the conversation in enterprises is pragmatic rather than existential. Amjad Masad pushes back on the most extreme framing.

**3. AI 风险已经从思想实验变成企业的运营问题。** Boris Cherny 把最新的 Threat Intelligence 报告称为「极其可怕又极其重要」，认为随着模型变得更聪明，如果没有正确的防护与监控，它们也会变得更危险，而且许多能力都是双用途的。Aaron Levie 说，在他接触的技术负责人中，网络安全是头号担忧，这与 OpenAI Hugging Face 事件有关，不过企业里的讨论更务实，而不是存在主义式的。Amjad Masad 则对最极端的说法提出了反对。

**4. Coding agents are raising the quality bar and rewriting the deployment stack.** Cherny argues that production code written by Claude should have a higher bar than human-written code, supported at Anthropic by lint rules, tests, Claude-driven end-to-end tests, daily Claude-powered fuzzers, automated code and security reviews, and automated refactoring. Steinberger's instinct: duplicating logic is no longer painful, but abstractions still are. Vercel's Guillermo Rauch says the platform does about 10 million deployments a day and has made its global metadata store 91% faster at p99, under pressure from the growth in agentic deployments.

**4. Coding agent 在抬高代码质量标准，也在重写部署栈。** Cherny 认为，由 Claude 写的生产代码应该比人类写的代码有更高标准，Anthropic 靠 lint 规则、测试、Claude 驱动的端到端测试、每日 Claude fuzzer、自动代码审查与安全审查，以及自动重构来兜底。Steinberger 的直觉是：重复逻辑不再痛苦，抽象依然痛苦。Vercel 的 Guillermo Rauch 说平台每天大约发生 1000 万次部署，并把全球元数据存储的 p99 性能提升了 91%，而且这一切是在 agentic 部署快速增长的压力下完成的。

**5. Enterprise adoption is a workflow and architecture problem, not a model problem.** Levie's notes from the road list multi-model deployments, agent identity and security, ruthless architecture swaps, an early-stages evals gap, and legacy systems as recurring blockers, with process reengineering and embedded forward-deployed engineers producing the biggest ROI. The product layer keeps moving too: Gemini arrives on Windows, Google opens Dreambeans to all US users, and Claude kicks off Fable 5.1 Build Days.

**5. 企业采用 AI 是流程与架构问题，而不是模型问题。** Levie 的一线笔记列出多模型并行、agent 身份与安全、激进更换架构、评估能力尚早、遗留系统等反复出现的障碍，并认为流程再造与嵌入式 FDE 带来的 ROI 最大。产品层也在继续前进：Gemini 登陆 Windows，Google 的 Dreambeans 向所有美国用户开放，Claude 的 Fable 5.1 Build Days 也正式开始。

## X / Twitter

### Thibault Sottiaux: Codex & ChatGPT at OpenAI

Sottiaux says OpenAI will pause subscriptions to its $200 Pro plan to make sure current users have an incredible experience and continued access to Astra, calling it "the smallest step that allows us to continue giving the broadest access possible." All other plans and the API remain available, existing accounts are unaffected, and the company is adding more capacity as fast as it can. He also shared a new API for scaled agents on demand, describing it as pretty much the infrastructure that runs under the hood for ChatGPT Work, wrapped up so builders can get started in under a minute.

Sottiaux 表示，为了确保现有用户继续拥有出色的体验并持续使用 Astra，OpenAI 将暂停 200 美元 Pro 套餐的新订阅，并称这是「既能保持最广泛可用性、影响又最小的一步」。其他所有套餐和 API 继续可用，现有账户不受影响，公司正在尽快增加算力。他还分享了一个按需扩展 agent 的新 API，称它基本就是把 ChatGPT Work 背后的基础设施打包出来，让开发者不到一分钟就能上手。

- [Thibault Sottiaux on pausing $200 Pro subscriptions](https://x.com/thsottiaux/status/2098113585683808624)
- [Thibault Sottiaux on scaled agents on demand](https://x.com/thsottiaux/status/2098238138334548260)

### Boris Cherny: Claude Code at Anthropic

Cherny calls the latest Threat Intelligence report "absolutely terrifying and important," arguing that as models become more intelligent, they also become more dangerous without the right safeguards and monitoring. Many capabilities are dual use, he writes: a model that codes well can be used to hack critical infrastructure, and a model that assists with biology research can also be used to engineer the next pandemic. In a separate reply to a reader, he lays out his code quality rule: throw-away prototypes can be treated as a black box, but production code written by Claude should have a higher bar than human-written code, backed at Anthropic by lint rules, tests, Claude-driven end-to-end tests, daily Claude-powered fuzzers, automated code and security reviews, and automated refactoring. When Claude's code misses the bar, his advice is to use the latest frontier model such as Opus 5 or Fable 5.1, raise effort to high or xhigh, and invest in CLAUDE.md and skills.

Cherny 把最新的 Threat Intelligence 报告称为「极其可怕又极其重要」，认为随着模型变得更聪明，如果没有正确的防护与监控，它们也会变得更危险。他写道，许多能力都是双用途的：一个很会写代码的模型可以被用来攻击关键基础设施，一个能协助生物学研究的模型也可以被用来设计下一场大流行。在另一条回复读者的帖子里，他给出了自己的代码质量标准：一次性的原型可以当成黑箱，但由 Claude 写的生产代码应该有比人类写的代码更高的标准，Anthropic 用 lint 规则、测试、Claude 驱动的端到端测试、每日 Claude fuzzer、自动代码审查与安全审查，以及自动重构来兜底。当 Claude 写的代码达不到标准时，他的建议是换用最新的前沿模型，例如 Opus 5 或 Fable 5.1，把 effort 提到 high 或 xhigh，并投入精力打磨 CLAUDE.md 和 skills。

- [Boris Cherny on the Threat Intelligence report](https://x.com/bcherny/status/2098281805770309686)
- [Boris Cherny on holding the bar on Claude-written code](https://x.com/bcherny/status/2098217573276131577)
- [Boris Cherny on responding to reader questions](https://x.com/bcherny/status/2098217571153838124)

### Aaron Levie: CEO of Box

Levie's "tales from the road" come from meetings with a couple dozen technology leaders across banking, media, information services, insurance, and consulting. Cyber is top of mind because of the growing rate of vulnerabilities coming at them from AI and the implications of the OpenAI Hugging Face incident, but the conversation is pragmatic rather than existential. Most companies are running multiple frontier models and finding it hard to standardize, with dollars still concentrated on a few vendors and open weights still in their infancy at scale. Agent security and identity management is a growing concern, the biggest ROI comes from changing the workflow itself rather than layering agents onto existing flows, and embedded forward-deployed engineers were the best lesson. He also notes that enterprises keep swapping out architectures, that evals are still very early for most companies, and that legacy systems and fragmented data remain a hurdle. Separately, he announced a deeper partnership with OpenAI so Box enterprise content can be worked with securely in ChatGPT, arguing that software continues to go headless.

Levie 的「一线笔记」来自他与银行、媒体、信息服务、保险和咨询行业几十位技术负责人的交流。网络安全是他们最关心的话题，因为来自 AI 的漏洞正在变多，OpenAI Hugging Face 事件也让人们更在意其影响，不过讨论是务实而非存在主义式的。大多数公司同时部署多个前沿模型，很难标准化，预算仍然集中在少数几家供应商，开放权重在大规模企业环境里仍处于早期。Agent 的安全与身份管理越来越受关注，最大的 ROI 来自改变工作流本身，而不是把 agent 硬塞进现有流程，嵌入式 FDE 是他听到的最好的做法。他还提到企业会不断换掉旧架构、大多数公司的评估能力仍处于很早期、遗留系统和碎片化数据仍是障碍。另外，他宣布与 OpenAI 加深合作，让 Box 里的企业内容可以安全地在 ChatGPT 中使用，并认为软件会继续走向 headless。

- [Aaron Levie on agents in the enterprise](https://x.com/levie/status/2098218284139311615)
- [Aaron Levie on the Box and OpenAI partnership](https://x.com/levie/status/2098135659714085281)

### Guillermo Rauch: CEO of Vercel

Rauch says about 10 million deployments are made on Vercel each day, with 2.35 billion made to date, making it one of the most heavily multi-tenant systems in the world. The global metadata store underneath its CDN, which synchronizes within hundreds of milliseconds so rollbacks, config changes, and new routes propagate, was just made 91% faster at p99, and that also sped up the build-to-deploy pipeline, all while the system is under immense pressure from the growth in agentic deployments. He also frames the platform's direction as "a computer for every agent, in every region."

Rauch 说 Vercel 每天大约发生 1000 万次部署，累计已达 23.5 亿次，是全球多租户程度最高的系统之一。它 CDN 底层那个能在几百毫秒内完成全球同步的元数据存储，负责让回滚、配置变更和新增路由及时生效，最近 p99 性能提升了 91%，这也加快了 build 到 deploy 的流水线，而且这一切是在 agentic 部署快速增长带来的巨大压力下完成的。他还把平台的方向概括为「每个 region 里，每个 agent 都有一台计算机」。

- [Guillermo Rauch on Vercel deployment volume and metadata performance](https://x.com/rauchg/status/2098091056302833837)
- [Guillermo Rauch on a computer for every agent](https://x.com/rauchg/status/2098158541932794222)
- [Guillermo Rauch on faster deployments](https://x.com/rauchg/status/2098066258155708851)

### Madhu Guru: Senior Director, AI at Meta

Guru's tenth installment on how to build great evals: measure the steps, not just the result. Two agent trajectories can reach the same answer while one searches the right sources, retrieves the right document, makes four clean tool calls, and calculates the result, and the other makes 17 calls, searches the same thing three times, recovers from two errors, and eventually gets there. His process: clearly define the whole workflow, define the tasks in each step, decide how each step is measured, and define the median and hard tasks that the evals should reflect.

Guru 关于如何做好 eval 的第十篇：衡量步骤，而不只是结果。两条 agent 轨迹可能得到同一个答案，但其中一条搜索了正确的来源、检索到正确的文档、做了四次干净的工具调用并算出结果，另一条打了 17 次调用、把同一个搜索重复了三遍、从两次错误中恢复后才勉强到达。他的流程是：清楚定义整个 workflow，定义每一步的任务，想清楚每一步该怎么衡量，并定义中位数任务和困难任务，让它们体现在 eval 里。

- [Madhu Guru on measuring the steps, not just the result](https://x.com/realmadhuguru/status/2098064969464217720)

### Josh Woodward: VP, Google

Woodward, a VP at Google working across Google Labs, the Gemini app, and Google AI Studio, announced that Gemini is now on Windows.

Woodward 是 Google 的副总裁，负责 Google Labs、Gemini app 和 Google AI Studio，他宣布 Gemini 现在已经登陆 Windows。

- [Josh Woodward on Gemini for Windows](https://x.com/joshwoodward/status/2098131750660772342)

### Google Labs

Google Labs made Dreambeans available to all US users 18 and older on iOS and Android, free of charge with no subscription required. Users can also connect the Gemini app to Dreambeans, which builds on the nuance and understanding from their chats to surface more insightful and personalized daily stories.

Google Labs 把 Dreambeans 开放给所有 18 岁以上的美国用户，支持 iOS 和 Android，免费且无需订阅。用户还可以把 Gemini app 连接到 Dreambeans，它会基于聊天里的细节和理解，生成更有洞察、更个性化的每日故事。

- [Google Labs on Dreambeans and the Gemini app](https://x.com/GoogleLabs/status/2098110018289803558)

### Claude: Anthropic's AI Assistant

Claude announced that Fable 5.1 Build Days start this week, with the Claude community hosting buildathons in cities around the world from September 11 to 25. The invitation: bring a problem, an idea, or just show up and see what is possible.

Claude 宣布 Fable 5.1 Build Days 本周开始，Claude 社区将在 9 月 11 日到 25 日期间在全球多个城市举办 buildathon。邀请语是：带一个问题来，带一个想法来，或者直接来现场看看能做出什么。

- [Claude on Fable 5.1 Build Days](https://x.com/claudeai/status/2098138736642933143)

### Amjad Masad: CEO of Replit

Masad's contrarian take: there is a lot of risk with AI, and he worries about cybersecurity in particular, but "extinction risk," meaning literally 100% of humans die, "is not remotely one of them."

Masad 的反主流观点：AI 确实带来很多风险，他尤其担心网络安全，但「灭绝风险」，也就是字面意义上 100% 的人类都会死亡，他说「完全不在其中」。

- [Amjad Masad on AI risk](https://x.com/amasad/status/2098171265924116732)

### Peter Steinberger: OpenClaw and OpenAI

Steinberger's observation on how coding with agents changes design instincts: duplicating logic is no longer painful, but abstractions still are. He also urges people to move quickly on Astra, saying demand is growing too fast.

Steinberger 关于用 agent 写代码如何改变设计直觉的观察：重复逻辑不再痛苦，抽象依然痛苦。他还催促大家尽快上手 Astra，说需求增长太快。

- [Peter Steinberger on duplication versus abstractions](https://x.com/steipete/status/2098089196800098798)
- [Peter Steinberger on Astra demand](https://x.com/steipete/status/2098088917782413740)

### Thariq: Claude Code at Anthropic

Thariq shared a prompt for Claude chat: ask it to interview you in depth, using free text or the AskUserQuestion tool when multiple choice works, about relevant parts of your life it does not know about yet, and save it all to memory.

Thariq 分享了一个用在 Claude chat 里的 prompt：让 Claude 深入采访你，可以用自由文本，也可以用 AskUserQuestion 工具来做选择题，问那些它还不知道的、与你生活相关的部分，然后把所有内容存入 memory。

- [Thariq on a prompt to teach Claude about you](https://x.com/trq212/status/2098157600361861579)

### Aditya Agarwal: General Partner at SPC

Agarwal poses a question: if you had a machine capable of doing only one thing, finding cures to our most pressing diseases, how much of your GDP would you devote to it? His answer is "very high," and his conclusion is that this is the world we live in now.

Agarwal 提出一个问题：如果你有一台机器只能做一件事，那就是找到治愈我们最紧迫疾病的方法，你愿意把 GDP 的多大比例投入给它？他的答案是「非常高」，结论是我们现在就活在这个世界里。

- [Aditya Agarwal on a machine that finds cures](https://x.com/adityaag/status/2098112281267843264)

### Matt Turck: VC at FirstMarkCap and Host of the MAD Podcast

Turck published his conversation with Richard Socher about RSI and scientific progress, with chapters covering why scientific progress is slowing, LLMs learning biology and proteins, next-token prediction as a world model, simulations and verifiers, the path to recursive self-improvement, why hallucinations can drive discovery, going from reading biology to writing it, AI in drug discovery and cancer, the scientific data bottleneck, the four pillars of the Eureka Machine, self-driving robotic laboratories, agent swarms and open-ended discovery, the compute bottleneck, and what Recursive will build first. He notes the conversation is also available on Spotify, Apple Podcasts, and YouTube.

Turck 发布了他与 Richard Socher 关于 RSI 与科学进步的对话，章节涵盖科学进步为何放缓、LLM 如何学习生物学与蛋白质、next-token prediction 作为世界模型、仿真与 verifier、通往递归自我改进的路径、幻觉为何能推动发现、从阅读生物学到书写生物学、AI 在药物研发与癌症中的应用、科学数据的瓶颈、Eureka Machine 的四大支柱、自动驾驶机器人实验室、agent swarm 与开放式发现、算力瓶颈，以及 Recursive 会最先做什么。他还提到这段对话也可以在 Spotify、Apple Podcasts 和 YouTube 上收听。

- [Matt Turck on the conversation with Richard Socher](https://x.com/mattturck/status/2098081448330674182)
- [Matt Turck on other places to listen](https://x.com/mattturck/status/2098081452839637480)

### Nikunj Kothari: Partner at FPV Ventures

Kothari's "three truths in early stage venture right now": everyone wants to raise a $50 million seed, everyone thinks they will hit $30 million ARR next year, and every hot tranched seed round magically ends up at roughly a $300 million valuation.

Kothari 总结的「当前早期风投的三个真相」：每个人都想融 5000 万美元的种子轮，每个人都觉得自己明年能做到 3000 万美元 ARR，每一轮热门的分批种子轮最后都会神奇地落在约 3 亿美元估值。

- [Nikunj Kothari on early stage venture](https://x.com/nikunj/status/2098078391065018816)

### Peter Yang

Peter Yang, who makes practical AI tutorials and interviews for busy people, says that in his opinion, for getting things done, Sol beats Astra.

Peter Yang 为忙碌的人制作实用的 AI 教程和访谈，他说在他看来，真要干活的话，Sol 比 Astra 更好用。

- [Peter Yang on Sol versus Astra](https://x.com/petergyang/status/2098215935467544604)

### Zara Zhang: Builder

Zara Zhang asks why computer use is still so painfully slow.

Zara Zhang 发问：为什么 computer use 还是慢得让人难受？

- [Zara Zhang on computer use](https://x.com/zarazhangrui/status/2098136119154254287)

## Podcast

### The MAD Podcast with Matt Turck: When AI Improves Itself | Richard Socher (Recursive)

The Takeaway: anything AI can simulate, it will solve, and the most valuable thing to point that loop at first is AI research itself.

核心结论：任何可以仿真的东西，AI 最终都会解决，而最值得先把这套循环用上去的对象，就是 AI 研究本身。

Richard Socher, one of the most cited researchers in AI, has watched fields move from understanding basic pieces to engineering with them, and he thinks biology is in that transition now. His argument opens with a counterintuitive claim: scientific progress has slowed even as the number of researchers and the money going into science have grown. The reason is that knowledge has fragmented into a labyrinth of subfields, each taking years to master, so we have plenty of pieces and not enough people able to weave them back together.

Richard Socher 是 AI 领域被引用最多的研究者之一，他眼看着一个个领域从「理解基本零件」走向「用零件做工程」，并认为生物学正处于这个转折点。他的论证从一个反直觉的判断开始：尽管研究者数量和投入科学的资金都在增长，科学进步却在放缓。原因是知识已经碎化成一个由无数字领域组成的迷宫，每个子领域都要花好几年才能深入，于是我们有很多零件，却缺少能把它们重新编织起来的人。

His company, Recursive, raised $650 million to attack that problem by first automating AI research itself, then pointing the resulting intelligence at physics, chemistry, and especially biology. The blueprint in his book The Eureka Machine has four pillars: human knowledge ingested through large language models, the scientific measurements we can now collect, simulation, and real-world experimentation through robotics, all with an agent swarm on top. Compute is the biggest constraint, and the company committed $410 million of its raise to a single Amazon compute deal.

他的公司 Recursive 融资 6.5 亿美元来解决这个问题，路径是先自动化 AI 研究本身，再把由此获得的智能投向物理、化学，尤其是生物学。他在《The Eureka Machine》里给出的蓝图有四大支柱：通过大语言模型吸收人类知识、我们已经能够采集的科学测量、仿真，以及借助机器人完成的真实世界实验，最上层再叠加 agent swarm。算力是最大的约束，公司把融资中的 4.1 亿美元投入到与 Amazon 的单一算力交易。

Two ideas cut against conventional wisdom. First, hallucinations can be a feature: exploring genuinely new proteins or molecules requires predictions that sit outside the training distribution. Second, the impact on jobs depends on the elasticity of demand. Illustration prices collapsed without demand exploding, so illustrators lost. Coding is different, where cheaper code has so far meant more code and more demand for programmers. He is not a believer in a hard takeoff: biology still moves at the speed of clinical trials, and the real bottleneck is data, which is why virtual cells and robotic labs matter more than another benchmark. As he puts it, "Anything you can simulate, AI will solve."

有两个想法与主流判断相反。第一，幻觉可以是特性：要探索真正全新的蛋白质或分子，就需要落在训练分布之外的预测。第二，对就业的影响取决于需求的价格弹性。插画的价格崩塌了，需求却没有爆炸式增长，所以插画师受损；编程则不同，更便宜的代码到目前为止意味着更多代码，也意味着对程序员更多需求。他并不相信所谓的硬起飞：生物学仍然受制于临床试验的速度，真正的瓶颈是数据，这也是为什么虚拟细胞和机器人实验室比又一个 benchmark 更重要。用他的话说：「任何可以仿真的东西，AI 最终都会解决。」

- [The MAD Podcast with Matt Turck: When AI Improves Itself | Richard Socher (Recursive)](https://www.youtube.com/@DataDrivenNYC/videos)

## Blog

The validated blog feed contained no new qualifying items.

经过验证的博客 feed 中没有新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
