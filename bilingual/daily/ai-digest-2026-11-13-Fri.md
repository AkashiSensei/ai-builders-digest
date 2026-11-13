[English](../../en/daily/ai-digest-2026-11-13-Fri.md) | [中文](../../zh/daily/ai-digest-2026-11-13-Fri.md) | [Bilingual](./ai-digest-2026-11-13-Fri.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

The fast-model race is now being judged on enterprise work, not benchmark bragging. Google introduced Gemini 4 Hydrogen as a big step for Gemini, while Box CEO Aaron Levie reported that it beat Gemini 3.8 Flash by 5 percentage points on Box's Complex Work Eval, finished tasks in less than half the time, and used about 12% fewer tokens on a typical task. That combination points to a practical question for buyers: not just peak intelligence, but accuracy per second and per token.

快模型的竞争已经从跑分转向企业实际工作。Google 发布 Gemini 4 Hydrogen，称它已进入 Gemini App，速度快、能力强，是一次大幅跃升；Box CEO Aaron Levie 则称，在 Box AI Complex Work Eval 的早期测试中，Hydrogen 比 Gemini 3.8 Flash 准确率高 5 个百分点，在典型任务上耗时不到一半，token 使用量还减少约 12%。这意味着买家真正要比较的不只是最强能力，还有每秒、每个 token 能换来多少可靠产出。

Claude Meetings pushes assistants from a side chat into the room. Claude joins Google Meet as a visible participant, can answer spoken or chat questions, start a document, keep notes, and leave action items and transcripts on the meeting page. The design bet is that shared context is more useful when teammates can see and correct the work as it happens.

Claude Meetings 把助手从侧边聊天窗口带进会议现场。Claude 以可见参与者身份加入 Google Meet，可以回答口头或聊天中的问题，也可以开始写文档，团队成员能实时看到并纠正它的产出。会后，笔记、行动项、转录以及 Claude 创建的内容都会出现在会议页面。这里的产品判断是，共享上下文越完整，助手越能成为协作的一部分。

Agents are moving from generating software to operating the business around it. Replit Agent can now buy things for a company, including ads to acquire customers, while Vercel CEO Guillermo Rauch argues that agents are becoming design engineers and need a low-level UI SDK rather than rigid, single-framework abstractions.

agent 正在从“生成软件”走向“替企业办事”。Replit CEO Amjad Masad 宣布，Replit Agent 现在可以为业务采购商品，包括购买广告来获取新客户。Vercel CEO Guillermo Rauch 则认为，agent 正在成为新的设计工程师，需要的是更底层的 UI SDK，而不是僵硬、绑定单一框架的高层抽象。

Security is becoming an agent interface. OpenAI's Thibault Sottiaux says the company announced tools under development for automated patching and automated red teaming. The announcement positions agent work around executable security workflows, from finding weaknesses to repairing them.

安全正在成为 agent 的执行界面。OpenAI 的 Thibault Sottiaux（Codex 与 ChatGPT）表示，OpenAI 公布了正在开发的网络安全工具，覆盖自动修补和自动红队测试。这说明相关 agent 工作正指向可执行的安全流程，从发现弱点到修复问题。

Isomorphic Labs is trying to move drug discovery into simulation before it reaches patients. President Max Jaderberg argues that clinical failure often comes from toxicity or off-target effects that only show up in people, and that better predictive models could make wet-lab work a validation step rather than the main learning loop. The goal is not to eliminate experiments, but to enter them with far higher odds.

Isomorphic Labs 试图在药物进入患者之前，把药物发现搬到模拟环境中。总裁 Max Jaderberg 认为，临床失败常常来自毒性或脱靶效应，而这些问题只有进入人体后才会暴露；更好的预测模型可以让湿实验变成验证步骤，而不是主要的学习循环。目标不是取消实验，而是让每次实验成功的概率更高。

The industry's dependence on founder-led capital and dealmaking was another thread. FirstMark Capital VC Matt Turck described the AI ecosystem losing its "central banker," its most active investor, and a bold acquirer in Jensen Huang, while SPC General Partner Aditya Agarwal said the industry would not be where it is today without him and called the moment "viscerally painful."

行业对创始人资本与交易能力的依赖，也是当天另一条线索。FirstMark Capital 的 VC Matt Turck 将 Jensen Huang 一事描述为 AI 生态失去“central banker”、最活跃的投资者和敢于收购的买家，并称这类激进动作只有创始人才能做出来；SPC General Partner Aditya Agarwal 则表示，没有 Jensen Huang，行业不会有今天，看到眼下发生的一切让人“痛彻心扉”。

## X / Twitter

**Josh Woodward, VP at Google**

Google VP Josh Woodward announced Gemini 4 Hydrogen, now in Gemini App, calling it fast, smart, and "a big jump." He also showed Gemini shifting to a first-person view, with pre-orders, demos at select Warby Parker, Gentle Monster, and Google stores, and shipping on Dec. 10. ([Hydrogen](https://x.com/joshwoodward/status/2120942262054232392), [point of view](https://x.com/joshwoodward/status/2120990820631450061), [pre-orders](https://x.com/joshwoodward/status/2120990821902397885))

Google 副总裁 Josh Woodward 发布 Gemini 4 Hydrogen，称它已进入 Gemini App，速度快、能力强，是一次“big jump”。他还展示了 Gemini 转向第一人称视角的应用，并宣布现已开启预购，可在部分 Warby Parker、Gentle Monster 和 Google 门店体验，12 月 10 日发货。([Hydrogen](https://x.com/joshwoodward/status/2120942262054232392)、[point of view](https://x.com/joshwoodward/status/2120990820631450061)、[pre-orders](https://x.com/joshwoodward/status/2120990821902397885))

**Claude, Anthropic's AI assistant**

Claude Meetings begins with Google Meet, with other video platforms to follow. Claude joins as a visible participant, can take spoken or chat questions, start a doc, and lets teammates watch and correct the work; after the call, notes, action items, the transcript, and anything Claude built appear on the meeting page. ([launch](https://x.com/claudeai/status/2120974000746582357), [meeting page](https://x.com/claudeai/status/2120973999295643679), [participant mode](https://x.com/claudeai/status/2120973996304830859))

Claude Meetings 首先支持 Google Meet，其他视频会议平台将陆续加入。Claude 以可见参与者身份加入会议，可以回答口头或聊天中的提问，也可以开始写文档，团队成员能实时看到并纠正它的产出；会后，笔记、行动项、转录以及 Claude 创建的内容都会出现在会议页面。([launch](https://x.com/claudeai/status/2120974000746582357)、[meeting page](https://x.com/claudeai/status/2120973999295643679)、[participant mode](https://x.com/claudeai/status/2120973996304830859))

**Aaron Levie, Box CEO**

Box CEO Aaron Levie said early access testing of Gemini 4 Hydrogen on the Box AI Complex Work Eval found it 5 percentage points more accurate than Gemini 3.8 Flash. It also completed tasks in less than half the time with about 12% fewer tokens on a typical task, and it will roll out in Box AI Studio so customers can build custom agents. ([source](https://x.com/levie/status/2120947988143198302))

Box CEO Aaron Levie 表示，团队在 Box AI Complex Work Eval 中提前测试 Gemini 4 Hydrogen，发现它比 Gemini 3.8 Flash 准确率高 5 个百分点。在典型任务上，它还以不到一半的耗时完成工作，token 使用量减少约 12%；该模型将很快在 Box AI Studio 上线，客户可以用它构建自定义 agent。([source](https://x.com/levie/status/2120947988143198302))

**Guillermo Rauch, Vercel CEO**

Vercel CEO Guillermo Rauch argues that agents change what frameworks and component libraries are for: build lower-level primitives, then let agents assemble UI. He calls UI SDK the "x86 instruction set" for agents and says rigid, single-framework abstractions are "kryptonite" for an untiring creation machine, while packaged behaviors preserve accessibility, performance, cohesion, and token efficiency. ([source](https://x.com/rauchg/status/2120966768483262648))

Vercel CEO Guillermo Rauch 认为，agent 时代会改变框架和组件库的意义：应该下沉到更低层的能力，再让 agent 组装界面。他把 UI SDK 称为 agent 的“x86 指令集”，并称僵硬、绑定单一框架的高层抽象是无限创作机器的“kryptonite”；打包好的行为可以保留无障碍、性能、一致性，并节省 token、错误和人力。([source](https://x.com/rauchg/status/2120966768483262648))

**Amjad Masad, Replit CEO**

Replit CEO Amjad Masad announced that Replit Agent can now buy things for a business, including ads to acquire new customers. The move extends the agent from building software toward running operational purchasing tasks. ([source](https://x.com/amasad/status/2121018020520931712))

Replit CEO Amjad Masad 宣布，Replit Agent 现在可以替企业采购商品，包括购买广告来获取新客户。这使 agent 从写软件进一步走向执行日常运营采购。([source](https://x.com/amasad/status/2121018020520931712))

**Thibault Sottiaux, Codex and ChatGPT at OpenAI**

Thibault Sottiaux of OpenAI's Codex and ChatGPT work said OpenAI announced tools under development for cybersecurity across automated patching and automated red teaming. He pointed readers to the recording of the announcement. ([source](https://x.com/thsottiaux/status/2121036562058400200))

OpenAI 的 Thibault Sottiaux 表示，OpenAI 公布了正在开发的网络安全工具，覆盖自动修补和自动红队测试，并提供了发布会的录制链接。([source](https://x.com/thsottiaux/status/2121036562058400200))

**Matt Turck, FirstMark Capital VC**

FirstMark Capital VC Matt Turck framed the Jensen Huang situation as a loss of the AI ecosystem's "central banker," its most active investor, and a bold acquirer, adding that such aggressive moves are the kind only a founder can make. ([source](https://x.com/mattturck/status/2120951444526264388))

FirstMark Capital 的 VC Matt Turck 将 Jensen Huang 一事描述为 AI 生态失去“central banker”、最活跃的投资者和敢于收购的买家，并称这类激进动作只有创始人才能做出来。([source](https://x.com/mattturck/status/2120951444526264388))

**Aditya Agarwal, SPC General Partner**

SPC General Partner Aditya Agarwal said the industry would not be where it is today without Jensen Huang, and that it is "viscerally painful" to see what is happening. ([source](https://x.com/adityaag/status/2120924059709956201))

SPC General Partner Aditya Agarwal 表示，没有 Jensen Huang，行业不会有今天；看到眼下发生的一切让人“痛彻心扉”。([source](https://x.com/adityaag/status/2120924059709956201))

## Podcast

### No Priors: Powering AI-Driven Drug Discovery with President of Isomorphic Labs Max Jaderberg

**The Takeaway:** The best way to fix drug discovery is to learn what will fail before a molecule reaches a patient.

**核心结论：** 解决药物发现难题的最佳方式，是在分子进入患者体内之前，就学会判断它会在哪里失败。

Max Jaderberg is president and a founding-team member of Isomorphic Labs, an Alphabet-backed company with the stated goal of solving all disease. His path ran from computer vision and DeepMind's game-playing research to the AlphaFold results, which gave the founding team its first proof that deep learning could generalize in biology. The stakes are hard to overstate: approval counts have stayed roughly flat while knowledge, modalities, cost, and timelines have all grown. Isomorphic's answer is to turn as much medicinal chemistry and disease biology as possible into predictive models, so experiments validate hypotheses rather than serve as the only way to discover them.

Max Jaderberg 是 Isomorphic Labs 的总裁，也是创始团队成员。Isomorphic Labs 由 Alphabet 支持，公开目标是攻克所有疾病。他的经历从计算机视觉、DeepMind 的游戏 AI 研究，一路延伸到 AlphaFold 的结果。正是这些结果让创始团队第一次看到，深度学习能够在生物学中实现有意义的泛化。问题的分量很重：药物获批数量大致停滞，而知识、药物模态、研发成本和周期都在上升。Isomorphic 的答案，是尽可能把药物化学和疾病生物学搬进预测模型，让实验用于验证假设，而不是成为唯一的学习方式。

The core diagnosis is empirical trial and error. Jaderberg notes that problems such as toxicity, hitting the wrong target, or biology behaving differently than expected can stay invisible until human trials. Better simulations of proteins, cells, and compound behavior could compress that uncertainty and raise the odds that each real-world experiment works.

核心判断是，传统药物发现过度依赖经验式试错。Jaderberg 指出，毒性、打错靶点，或者生物学反应与预期不同，往往要等到人体试验才暴露。更准确地模拟蛋白质、细胞和化合物行为，可以压缩这种不确定性，提高每一次真实实验的成功率。

"A rat isn't actually a human. It's not actually very predictive," Jaderberg says, estimating that animal studies are about 30% predictive of human clinical toxicity. That is why Isomorphic wants to combine in-vitro measurements, organoids, organs-on-chip, and AI models into better human-relevant endpoints. It also generates its own data rather than relying only on biased repositories assembled as byproducts of past drug programs.

Jaderberg 说：“A rat isn't actually a human. It's not actually very predictive.” 他估计，动物研究对人类临床毒性的预测能力约为 30%，因此 Isomorphic 希望把体外测量、类器官、器官芯片和 AI 模型结合起来，建立更贴近人体的终点指标。公司也主动生成数据，而不是只依赖过去药物项目被动积累、可能存在偏差的数据仓库。

The business model is equally deliberate. Isomorphic keeps its drug-design engine in-house, does not sell access or tokens, and applies it to both proprietary programs and partnerships with pharma and biotech teams. The models are designed to be general across diseases, targets, and modalities; internal work focuses on oncology, immunology, and inflammation. Better engineering could also unlock combinations of drugs that modulate several targets at once, a strategy currently limited by liver and toxicity risks.

商业模式同样经过设计。Isomorphic 把药物设计引擎留在内部，不出售模型访问权，也不按 token 售卖，而是同时用于自有项目和与药企、生物科技公司的合作。模型被设计为跨疾病、跨靶点、跨模态通用；内部项目聚焦肿瘤、免疫和炎症。更好的分子工程能力，还可能解锁同时调控多个靶点的联合用药，而这类策略目前受制于肝脏毒性和药物相互作用风险。

Jaderberg does not promise a clinical-trial date, saying the science is hard and the company is building its clinical team. His five-year test is blunt: predictive understanding of disease biology and the ability to design precise, low-toxicity molecules should improve by a step change. ([source](https://www.youtube.com/@NoPriorsPodcast))

Jaderberg 没有给出临床试验的确定日期，只说这是困难的 frontier science，公司正在建设临床团队。他给出的五年检验标准很直接：对疾病生物学的预测理解，以及设计精准、低毒分子的能力，都应该出现阶跃式提升。([source](https://www.youtube.com/@NoPriorsPodcast))

## Blog

The validated blog feed contained no new qualifying items.

已验证的博客 feed 中没有新的符合条件的条目。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
