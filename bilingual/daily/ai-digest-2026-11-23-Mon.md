[English](../../en/daily/ai-digest-2026-11-23-Mon.md) | [中文](../../zh/daily/ai-digest-2026-11-23-Mon.md) | [Bilingual](./ai-digest-2026-11-23-Mon.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

The day's clearest policy thread is a push to make AI safety and pacing measurable across labs. Sam Altman said labs agreed under the White House Accords to establish standards and best practices, then proposed shared evaluation norms, red-teaming and transparency before first use, plus common limits based on perplexity and other measurements until monitoring reaches a concrete milestone such as a successor to chain-of-thought monitors ([tweet](https://x.com/sama/status/2124558713646428663)) ([tweet](https://x.com/sama/status/2124551883130114403)). Swyx highlighted a related OpenAI argument for perplexity as a universal benchmark and warned that headline metrics may only translate at the frontier math level ([tweet](https://x.com/swyx/status/2124583459356373052)) ([tweet](https://x.com/swyx/status/2124590240539259381)).

今天最清晰的政策主线，是推动 AI 安全和研发节奏变成跨实验室可衡量的规则。Sam Altman 表示，各实验室已在 White House Accords 下同意建立提升系统安全的标准和最佳实践，随后提出前沿模型开发者应共同制定评估规范、红队测试和透明度标准，并在模型首次使用前完成。他还提出，以 perplexity 和其他指标为基础设定共同上限，直到对 AI 行为的监测达到某个具体里程碑，例如出现 chain-of-thought monitor 的继任者（[推文](https://x.com/sama/status/2124558713646428663)）（[推文](https://x.com/sama/status/2124551883130114403)）。Swyx 则提到 OpenAI 关于把 perplexity 作为通用 benchmark 的相关论证，同时提醒，头条指标可能只在 frontier math 层面转化为真实进展（[推文](https://x.com/swyx/status/2124583459356373052)）（[推文](https://x.com/swyx/status/2124590240539259381)）。

Agent-era software design is splitting into two questions: how agents behave as customers, and how teams of agents coordinate. Peter Yang shared Microsoft Copilot EVP Clamanna's warning that "Agents are very harsh customers," with preferences for performance, price and reliability that differ from human users, down to tolerating a thousand search results instead of ten links ([tweet](https://x.com/petergyang/status/2124669298191090033)). Aaron Levie argued that long-running agents and parallel agent swarms will force the harness and orchestration layer to evolve around shared knowledge, task tracking, human coordination and controlled resource access ([tweet](https://x.com/levie/status/2124658150771188157)).

agent 时代的软件设计正在分成两个问题：agent 作为客户会如何行动，以及 agent 团队如何协作。Peter Yang 分享了 Microsoft Copilot EVP Clamanna 的提醒：“Agents are very harsh customers.” Clamanna 认为，agent 会追求最佳性能、价格和可靠性，它们的偏好并不总与人类相同，例如人类搜索时需要十条链接和小段摘要，而 agent 不在乎，可以一次返回上千条结果（[推文](https://x.com/petergyang/status/2124669298191090033)）。Aaron Levie 认为，长周期 agent 和并行 agent swarm 会迫使 harness 与 orchestration 层围绕知识共享、任务跟踪、人类协作和受控资源访问继续演化（[推文](https://x.com/levie/status/2124658150771188157)）。

Security was the day's strongest counterweight to agent optimism. Amjad Masad called desktop AI apps "a security and privacy nightmare," then pointed to Replit Desktop's security model built with Windows and Christie's adoption for secure agentic work ([tweet](https://x.com/amasad/status/2124604574606795002)). Guillermo Rauch warned that free "stealth model" inference can be industrial-scale data exfiltration to nation-state programs, said Dragos research seems to confirm the suspicion, and contrasted Vercel AI Gateway with providers taking those shortcuts ([tweet](https://x.com/rauchg/status/2124595496849445079)). Dan Shipper added a conditional aviation warning: if an incident was caused by an AI-assisted cyber attack, attacks on a plane's weight, fuel and location data could bypass assumptions built after 9/11 ([tweet](https://x.com/danshipper/status/2124567533449613819)).

安全是当天对 agent 乐观情绪最强的制衡。Amjad Masad 称桌面 AI app 通常是“a security and privacy nightmare”，随后提到 Replit Desktop 与 Windows 合作打造的安全模型，以及 Christie’s 选择 Replit 进行安全的 agentic work（[推文](https://x.com/amasad/status/2124604574606795002)）。Guillermo Rauch 警告，免费的“stealth model”推理可能成为面向国家级项目的工业化数据外泄渠道，并表示 Dragos 的研究似乎印证了这一怀疑；他同时强调 Vercel AI Gateway 没有走这些捷径（[推文](https://x.com/rauchg/status/2124595496849445079)）。Dan Shipper 则补充了一个有条件的航空安全警报：如果某起事件由 AI 辅助的网络攻击造成，那么攻击飞机对重量、燃油和位置的判断，可能绕过 9/11 之后建立的安全假设（[推文](https://x.com/danshipper/status/2124567533449613819)）。

The tactical builders were unusually concrete. Nan Yu's secret prompt for making vibecoded projects scale, perform better and become more reliable is simply "Use Postgres" ([tweet](https://x.com/thenanyu/status/2124592238974156861)). Swyx recommended a founder journey breakdown that covers IP assignment problems, hiring and layoff advice and how to fish for an acquisition, arguing that more founders should document these lessons ([tweet](https://x.com/swyx/status/2124730733147390347)).

一线 builder 的建议异常具体。Nan Yu 说，让 vibe coding 项目更容易扩展、性能更好、可靠性更高的秘密 prompt 很简单：“Use Postgres”（[推文](https://x.com/thenanyu/status/2124592238974156861)）。Swyx 推荐了一份从创立到被收购的创始人历程拆解，内容涵盖 IP assignment 问题、招聘和裁员建议，以及如何寻找收购机会；他认为更多创始人应该记录这些经验，因为这能替别人省下很多痛苦（[推文](https://x.com/swyx/status/2124730733147390347)）。

Dan Shipper's closing argument at Every's conference was the day's deepest reframing of work. He cited GDPval results showing AI beating human experts 12.4% of the time in 2024, 47.6% in 2025 and about 83% in 2026, then described doing the work of five roles in one week with one Claude subscription. The point is not that the aggregate curve is fake; it is that generation is becoming cheap while ranking remains hard. "Generation is really cheap, but ranking is hard." Responsibility narrows the search space, perspective decides what matters, and the valuable alpha is the non-consensus use of a model that everyone can access ([episode](https://www.youtube.com/watch?v=WstNofgQF5Q)).

Dan Shipper 在 Every 大会上的闭幕演讲，是当天对工作意义最深的一次重新框定。他引用 GDPval 的结果：AI 相对人类专家的胜率从 2024 年的 12.4% 升到 2025 年的 47.6%，2026 年约为 83%。随后他描述了自己如何用一个 Claude 订阅，在一周内完成原本需要五个角色完成的工作。重点不是总体曲线是假的，而是生成正在变便宜，排序仍然很难。“Generation is really cheap, but ranking is hard.” 责任缩小搜索空间，视角决定什么重要，真正有价值的 alpha，是用所有人都能拿到的模型做出非共识的用法（[节目](https://www.youtube.com/watch?v=WstNofgQF5Q)）。

## X / Twitter

### Swyx

Swyx recommended a detailed founder journey breakdown that traces a company from founding to acquisition, including IP assignment problems, hiring and layoff advice and how to fish for an acquisition. He argued that more founders should document these lessons because it can save others a lot of pain ([tweet](https://x.com/swyx/status/2124730733147390347)). On AI progress, he highlighted OpenAI's proposal to use perplexity as a universal metric for industry self-regulation and pacing instead of FLOPS. He quoted the claim that progress on compression gives a shared benchmark for general intelligence, with further transformative capabilities expected in the roughly 0.68 to 0.7 log-perplexity window, and argued that post-training debates are the B plot next to large-scale pretraining. He also wondered whether a metric showing more progress this year than in 2022-2025 reflects reality or only translates at the frontier math level ([tweet](https://x.com/swyx/status/2124583459356373052)) ([tweet](https://x.com/swyx/status/2124590240539259381)).

Swyx 推荐了一份详细的创始人历程拆解，从公司创立一路讲到被收购，内容涵盖 IP assignment 问题、招聘和裁员建议，以及如何寻找收购机会。他认为更多创始人应该记录这些经验，因为这能替别人省下很多痛苦（[推文](https://x.com/swyx/status/2124730733147390347)）。在 AI 进展方面，他提到 OpenAI 提议用 perplexity 作为行业自我监管和节奏控制的通用指标，而不是 FLOPS。他引用了这样的论证：压缩能力的进步可以为通用智能提供共享 benchmark，随着我们进入约 0.68 到 0.7 的 log-perplexity 区间，应该预期更多变革性能力出现；他还认为，大家争论的 post-training 问题，只是大规模预训练这条主线旁边的 B plot。他也质疑，一个显示今年进展超过 2022 到 2025 年的指标，究竟反映真实能力，还是只在 frontier math 层面成立（[推文](https://x.com/swyx/status/2124583459356373052)）（[推文](https://x.com/swyx/status/2124590240539259381)）。

### Peter Yang

Peter Yang, who makes practical AI tutorials and interviews for busy people, shared a warning from Microsoft Copilot EVP Clamanna: "Agents are very harsh customers." Clamanna argued that agents will look for the best performance, price and reliability, and that what an agent prefers is not always what a person prefers. A person searching the web gets ten links and small snippets; an agent does not care and can be given a thousand results. The implication is that APIs and user experiences will evolve modes that better support agents ([tweet](https://x.com/petergyang/status/2124669298191090033)).

面向忙碌人群制作实用 AI 教程和访谈的 Peter Yang，分享了 Microsoft Copilot EVP Clamanna 的一句提醒：“Agents are very harsh customers.” Clamanna 认为，agent 会寻找最佳性能、价格和可靠性，而 agent 的偏好并不总是人类偏好。人类做搜索时会拿到十条链接和简短摘要，agent 不在乎这些，可以接收上千条结果。言下之意是，API 和用户体验会演化出更适合 agent 的模式（[推文](https://x.com/petergyang/status/2124669298191090033)）。

### Nan Yu

Nan Yu, who works on product for Codex at OpenAI and previously led product at Linear, offered a deliberately simple fix for vibecoded projects that need to scale: "Use Postgres." He framed it as a secret prompt that makes projects scale, perform better and become more reliable ([tweet](https://x.com/thenanyu/status/2124592238974156861)).

在 OpenAI 负责 Codex 产品、此前担任 Linear 产品负责人的 Nan Yu，给需要扩展的 vibe coding 项目开了一个极简药方：“Use Postgres。” 他把这称为一个秘密 prompt，能让项目更容易扩展、性能更好、可靠性更高（[推文](https://x.com/thenanyu/status/2124592238974156861)）。

### Amjad Masad

Replit CEO Amjad Masad argued that desktop AI apps are generally "a security and privacy nightmare." He said Replit worked with Windows to ship a world-class security model for Replit Desktop, and that Christie's, which he describes as the world's preeminent custodian of rare art, chose Replit for secure agentic work ([tweet](https://x.com/amasad/status/2124604574606795002)).

Replit CEO Amjad Masad 认为，桌面 AI app 通常是“a security and privacy nightmare”。他说 Replit 与 Windows 合作，为 Replit Desktop 打造了世界级安全模型，而被他称为全球最重要的稀有艺术品托管方 Christie’s，也选择 Replit 进行安全的 agentic work（[推文](https://x.com/amasad/status/2124604574606795002)）。

### Guillermo Rauch

Vercel CEO Guillermo Rauch argued that AI should be pointed toward human-understandability and conceptualization. He said the Riemann proof should come with a paper, a walkthrough and new concepts, much as high-level code benefits from an intermediate representation even when an LLM can go straight to CPU instructions ([tweet](https://x.com/rauchg/status/2124654108124848350)). In a separate post, he warned that free "stealth model" inference can be a mechanism of industrial-scale data exfiltration to nation-state programs, said Dragos research seems to confirm that suspicion, and noted that Vercel AI Gateway built real token volume without those shortcuts ([tweet](https://x.com/rauchg/status/2124595496849445079)).

Vercel CEO Guillermo Rauch 认为，AI 应该指向人类可理解性和概念化。他说 Riemann 证明应该附带论文、walkthrough 和新概念，就像即使 LLM 可以直接输出 CPU 指令，高层代码的中间表示仍然有价值（[推文](https://x.com/rauchg/status/2124654108124848350)）。在另一条推文中，他警告，免费的“stealth model”推理可能成为面向国家级项目的工业化数据外泄机制，并表示 Dragos 的研究似乎印证了这一怀疑；他还指出，Vercel AI Gateway 建立了真实的 token 用量，却没有走这些捷径（[推文](https://x.com/rauchg/status/2124595496849445079)）。

### Aaron Levie

Box CEO Aaron Levie argued that as agents take on more long-running project work and swarms of agents parallelize toward a goal, the agent harness and orchestration architecture will have to evolve. The hardest part is how agents collectively share knowledge, track tasks, coordinate with human users and get access to the right resources without too much or too little exposure. He sees lessons in how human teams already share files, work on computers and communicate in chats and inboxes, but says the primitives must support far higher throughput in a world where agents can more easily become a security risk ([tweet](https://x.com/levie/status/2124658150771188157)).

Box CEO Aaron Levie 认为，随着 agent 承担越来越多长周期项目，且 agent swarm 围绕同一个目标并行工作，agent harness 和 orchestration 架构必须继续演化。最难的部分，是 agent 如何集体共享知识、跟踪任务、与人类用户协作，并在不过度暴露的前提下访问合适资源。他认为可以从人类团队共享文件、使用电脑、通过聊天和收件箱沟通的方式中吸取经验，但新的 primitives 必须支持远高于人类的吞吐量，同时意识到 agent 更容易成为安全风险（[推文](https://x.com/levie/status/2124658150771188157)）。

### Dan Shipper

Every CEO Dan Shipper, who described himself as usually not alarmist, warned that if an aviation incident was caused by an AI-assisted cyber attack, it would be "very bad." He argued that an attacker able to mess with a plane and its pilot's knowledge of weight, fuel and location could make security measures built after 9/11 irrelevant. He stressed that he is not an expert on airplane systems, noted that most planes have manual overrides, and invited people with more knowledge to weigh in ([tweet](https://x.com/danshipper/status/2124567533449613819)).

Every CEO Dan Shipper 说自己通常并不爱危言耸听，但他警告，如果某起事件由 AI 辅助的网络攻击造成，那会“very bad”。他认为，攻击者如果能干扰飞机，以及飞行员对重量、燃油和位置的判断，就可能让 9/11 之后建立的安全措施失去意义。他强调自己不是飞机系统专家，并提到大多数飞机有手动接管机制，同时邀请更了解情况的人补充（[推文](https://x.com/danshipper/status/2124567533449613819)）。

### Sam Altman

Sam Altman said labs agreed under the White House Accords to establish standards and best practices to improve the safety of their systems, and argued that a discussion about perplexity can further those goals. He proposed that frontier model developers jointly establish shared norms for evaluating models, red-teaming safety cases and transparency standards by the time models are first used. He also floated common limits based on perplexity and other measurements that developers would not cross until monitoring reaches a concrete milestone, such as a successor to chain-of-thought monitors ([tweet](https://x.com/sama/status/2124558713646428663)) ([tweet](https://x.com/sama/status/2124551883130114403)).

Sam Altman 表示，各实验室已在 White House Accords 下同意建立提升系统安全的标准和最佳实践，并认为围绕 perplexity 的讨论可以推进这些目标。他提议，前沿模型开发者应共同建立评估模型的共享规范、安全案例红队测试，以及模型首次使用前的透明度标准。他还提出，以 perplexity 和其他测量为基础设定共同上限，开发者不得越过，直到监测能力达到某个具体里程碑，例如出现 chain-of-thought monitor 的继任者（[推文](https://x.com/sama/status/2124558713646428663)）（[推文](https://x.com/sama/status/2124551883130114403)）。

## Podcast

### AI & I by Every: A New Vision for Human Work After Automation

**The Takeaway:** In an economy where everyone gets the same model, the scarce asset is the judgment to decide what matters and the responsibility to act on it.

**核心结论：** 当每个人都能拿到同一个模型时，真正稀缺的是判断什么重要、并为此承担责任的能力。

Dan Shipper, co-founder and CEO of Every, makes that case by starting with an uncomfortable measurement. On GDPval, a benchmark where blind experts compare AI and human output on real work tasks, AI won 12.4% of the time in 2024, 47.6% in 2025 and about 83% in 2026, a result he attributes to GPT-5.4. He also describes a week in which one Claude subscription let him do work that would have required a data scientist, game developer, product marketer, engineer and salesperson. The aggregate curve looks like human work going to zero.

Dan Shipper 是 Every 的联合创始人兼 CEO。他的论证从一个不太舒服的测量结果开始：在 GDPval 这个由 OpenAI 提出、让盲测专家比较 AI 与人类真实工作任务输出的 benchmark 上，AI 相对人类专家的胜率从 2024 年的 12.4% 升到 2025 年的 47.6%，2026 年在 GPT-5.4 上约为 83%。他还描述了自己的一周：一个 Claude 订阅，让他完成了原本需要 data scientist、game developer、product marketer、engineer 和 salesperson 才能完成的工作。只看总体曲线，人类工作似乎正在归零。

Then he zooms in. His team ran the same customer survey through the same model. One colleague found that first-time subscribers churn because Every sends too much email; another found that readers feel lonely; a third turned the results into a Claymation game show. The default model answer was accurate but generic: the writing is the business, the bundle drives retention, and volume is a risk. Because everyone can get that answer, it is cheap.

然后他把镜头拉近。团队用同一个模型分析同一份客户调查。一位同事发现，首次订阅用户会在第一个月后流失，因为 Every 发了太多邮件；另一位发现，很多读者感到孤独；还有一位把结果做成了一档 Claymation 家庭问答游戏节目。模型的默认回答准确但很泛：写作是业务核心，bundle 带来留存，内容量太大是风险。因为每个人都能得到这个答案，所以它很便宜。

The sharper experiment came from Every's head of evals, who could predict what Shipper would say in Slack 93% of the time, but only if Claude generated 400 candidate answers per question. It could not reliably rank them. "Generation is really cheap, but ranking is hard." That is why teams still matter. Responsibility narrows the search space; perspective determines what gets picked.

更尖锐的实验来自 Every 的 head of evals。他能以 93% 的准确率预测 Shipper 会在 Slack 里说什么，但前提是 Claude 为每个问题生成 400 个候选答案。Claude 无法可靠地排序这些答案。“Generation is really cheap, but ranking is hard.” 生成很便宜，但排序很难。这正是团队仍然重要的原因。责任缩小搜索空间，视角决定最后选中什么。

Shipper calls this the allocation economy. "You won't be judged on how much you know, but instead on how well you can allocate and manage the resources to get work done, the resources of intelligence." The floor keeps rising for everyone, so default capability becomes status quo. The alpha is where a person pushes the model with a non-consensus view. He argues this should change how we measure AI: not only whether it solves consensus problems like math and code, but whether it does my work from my perspective. The aggregate freezes humans at their old baseline; the intimate view shows what a person can become with the model ([watch the episode](https://www.youtube.com/watch?v=WstNofgQF5Q)).

Shipper 把这称为 allocation economy。他说，评判你的标准不再是你知道多少，而是你能否分配和管理资源来完成工作，也就是分配和管理智能资源。所有人的地板都在抬高，默认能力会变成新的基准。真正的 alpha，来自一个人用自己的非共识视角推动模型。他认为，这也应该改变我们衡量 AI 的方式：不只是看它能否解决数学和编程这类共识问题，而是看它能否从我的视角完成我的工作。总体视角把人类冻结在旧基准上，具体视角则展示一个人借助模型可以成为什么（[节目](https://www.youtube.com/watch?v=WstNofgQF5Q)）。

## Blog

The validated feed contained no new qualifying blog items.

通过验证的 feed 中没有新的合格博客内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
