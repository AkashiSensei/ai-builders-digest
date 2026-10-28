[English](../../en/daily/ai-digest-2026-10-28-Wed.md) | [中文](../../zh/daily/ai-digest-2026-10-28-Wed.md) | [Bilingual](./ai-digest-2026-10-28-Wed.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

Box CEO Aaron Levie argues that the enterprise agent opportunity is still almost untouched: the vast majority of enterprise workflows have not had agents applied to them in any meaningful way, and he estimates the economy has deployed them at under 1%. He says computer use, long-running agents, better harnesses and surrounding infrastructure are finally making more complex workflows addressable, with self-improving systems and agent swarms pushing companies to reengineer processes rather than simply prompt agents one task at a time. [Source](https://x.com/levie/status/2115305369799110905)

Box CEO Aaron Levie 认为，企业在 agent 上的机会几乎还没有被真正开发：绝大多数企业工作流还没有以任何有意义的方式应用 agent，他估计整个经济体的部署比例目前不到 1%。他说，computer use、长时间运行的 agent、更好的 harness 以及周边基础设施，终于让更复杂的工作流变得可处理；自我改进系统和 agent swarm 会推动公司重新设计流程，而不是只让 agent 一次完成一个任务。

Replit CEO Amjad Masad would underwrite frontier AI mostly on new discovery and applications such as medicine, because coding and most knowledge work are being quickly saturated by sub-frontier models. [Source](https://x.com/amasad/status/2115207856496480261)

Replit CEO Amjad Masad 表示，如果他投资前沿 AI，他会主要基于新发现及其在医学等领域的应用来下注，因为编程和大多数知识工作正在被 sub-frontier 模型快速覆盖。

Two builders shared new experiments at the interface and deployment layers. Thariq is experimenting with an AI-native macOS dock whose custom modes for writing, building and other activities can be adjusted by his agent, which uses jev to classify activity and notifications in real time; he says it remains an experiment with many edge cases. He also proposed a new way to distribute open-source software so people can modify it through agents while upstream changes merge automatically, noting agents can do the work but will not do it by default. Vercel CEO Guillermo Rauch shared a minimal terminal demo that aliases now to vercel, writes a Bun server into a Dockerfile and deploys it. [Source](https://x.com/trq212/status/2115135857669881939) [Source](https://x.com/trq212/status/2115188992861970693) [Source](https://x.com/trq212/status/2115135859075015137) [Source](https://x.com/rauchg/status/2115218670389756243)

在工具与部署层面，两位开发者分享了新的实验。Thariq 正在试验一个 AI 原生的 macOS dock，它有针对写作、构建等活动的自定义模式；他的 agent 可以自定义模式行为、增加新模式，并用 jev 实时分类他的活动和通知。他说这个项目仍有很多边界情况，目前不建议使用。他还提出一种新的开源软件分发方式，让人们通过 agent 修改软件，同时上游改动可以自动合并；他指出 agent 能做这件事，但不会自动去做。Vercel CEO Guillermo Rauch 则分享了一个紧凑的终端演示：把 now 别名为 vercel，把一个 Bun server 写进 Dockerfile，然后执行部署。

Peter Yang lists four hiring practices that he says need to change: filtering candidates by years of experience or company name, prioritizing resumes and cover letters over proof of work and real projects, listing the number of people managed as an accomplishment by itself, and running endless interview rounds instead of short work trials. [Source](https://x.com/petergyang/status/2115319325137731757)

Peter Yang 列出了他认为需要改变的四项招聘做法：按工作年限或公司名称筛选候选人，把简历和求职信置于实际作品和真实项目之上，把管理人数本身当作一项成就，以及用没完没了的面试轮次取代短期工作试用。

FirstMark Capital's Matt Turck and FPV Ventures partner Nikunj Kothari both push back on startup orthodoxy. Turck contrasts the usual warning that too many co-founders is bad with Anthropic's seven, OpenAI's 11 and Databricks' seven; Kothari says such outlier outcomes show there is no single right way to identify or build a startup. Kothari also notes that terms such as long horizon, out of distribution, intelligence per watt, RL environments, forward deployed, revenue, frontier and self improving still produce wildly different definitions even among people who use them. [Source](https://x.com/mattturck/status/2115132327131328806) [Source](https://x.com/nikunj/status/2115157188704612735) [Source](https://x.com/nikunj/status/2115111451614744845)

FirstMark Capital 的 Matt Turck 和 FPV Ventures 合伙人 Nikunj Kothari 都在挑战创业公司的常规认知。Turck 把“联合创始人太多不好”的常见警告，与 Anthropic 的 7 位、OpenAI 的 11 位和 Databricks 的 7 位联合创始人作对比；Kothari 说，这些异常成功的结果说明，识别或构建创业公司没有唯一正确的方法。Kothari 还指出，long horizon、out of distribution、intelligence per watt、RL environments、forward deployed、revenue、frontier 和 self improving 这些术语，即使在使用它们的人之间也会得到截然不同的定义。

Every CEO Dan Shipper predicts that video creation and game making will become widely distributed foundations of knowledge work, much as document and deck creation are today. [Source](https://x.com/danshipper/status/2115093098816745910)

Every CEO Dan Shipper 预测，视频创作和游戏制作会像今天的文档和演示文稿制作一样，成为广泛分布的知识工作基础能力。

## X / Twitter

### Box CEO Aaron Levie

Box CEO Aaron Levie says the vast majority of enterprise workflows have not had agents applied to them in any meaningful way, and he puts deployment across the economy at under 1% today. He attributes much of that gap to AI capability rather than adoption alone, and argues that computer use, long-running agents, harness improvements and surrounding infrastructure now make more complex workflows tractable. He expects self-improving systems and agent swarms to let organizations reengineer workflows around agents, with a large impact in finance, life sciences, healthcare and other information-heavy domains. [Source](https://x.com/levie/status/2115305369799110905)

Box CEO Aaron Levie 表示，绝大多数企业工作流还没有以任何有意义的方式应用 agent，他估计目前整个经济体的部署比例不到 1%。他认为，这一差距很大程度上来自 AI 能力本身，而不只是采用速度；computer use、长时间运行的 agent、harness 改进和周边基础设施，让更复杂的工作流变得可处理。他预计，自我改进系统和 agent swarm 会让组织围绕 agent 重新设计工作流，并对金融、生命科学、医疗健康以及其他信息密集型领域产生巨大影响。

### Replit CEO Amjad Masad

Replit CEO Amjad Masad says that if he were investing in frontier AI, he would underwrite it mostly on new discovery and applications such as medicine. His reasoning is that coding and most knowledge work are being quickly saturated by sub-frontier models. [Source](https://x.com/amasad/status/2115207856496480261)

Replit CEO Amjad Masad 表示，如果他投资前沿 AI，他会主要基于新发现及其在医学等领域的应用来下注。他的理由是，编程和大多数知识工作正在被 sub-frontier 模型快速覆盖。

### Thariq

Thariq is experimenting with an AI-native macOS dock that has custom modes for writing, building and other activities; his agent can customize mode behavior, add new modes and use jev to classify his activity and notifications in real time. He says the project is still full of edge cases and is not recommending that others use it yet. He also argues for a new way to distribute open-source software so people can modify it through agents while upstream changes merge automatically, noting that coding agents can do the work but will not do it automatically. [Source](https://x.com/trq212/status/2115135857669881939) [Source](https://x.com/trq212/status/2115188992861970693) [Source](https://x.com/trq212/status/2115135859075015137)

Thariq 正在试验一个 AI 原生的 macOS dock，它有针对写作、构建等活动的自定义模式；他的 agent 可以自定义模式行为、增加新模式，并用 jev 实时分类他的活动和通知。他说这个项目仍有很多边界情况，目前不建议使用。他还主张一种新的开源软件分发方式，让人们通过 agent 修改软件，同时上游改动可以自动合并；他指出 coding agent 能做这件事，但不会自动去做。

### Vercel CEO Guillermo Rauch

Vercel CEO Guillermo Rauch shared a compact terminal demo that aliases now to vercel, writes a minimal Bun server into a Dockerfile and runs a deploy command that ends with a Ready line. The snippet uses oven/bun:alpine and Bun.serve. [Source](https://x.com/rauchg/status/2115218670389756243)

Guillermo Rauch 分享了一个紧凑的终端演示：把 now 别名为 vercel，把一个最小化的 Bun server 写进 Dockerfile，然后执行一个以 Ready 结束的部署命令。代码片段使用了 oven/bun:alpine 和 Bun.serve。

### Peter Yang

Peter Yang lists four hiring practices that he says need to change: filtering candidates by years of experience or company name, prioritizing resumes and cover letters over proof of work and real projects, listing the number of people managed as an accomplishment by itself, and running endless interview rounds instead of short work trials. [Source](https://x.com/petergyang/status/2115319325137731757)

Peter Yang 列出了四项他认为需要改变的招聘做法：按工作年限或公司名称筛选候选人，把简历和求职信置于实际作品和真实项目之上，把管理人数本身当作一项成就，以及用没完没了的面试轮次取代短期工作试用。

### FirstMark Capital VC Matt Turck

FirstMark Capital VC Matt Turck contrasts the usual startup advice that too many co-founders is bad, citing dilution, founder friction and analysis paralysis. He then lists Anthropic and Databricks at seven co-founders each, and OpenAI at 11. [Source](https://x.com/mattturck/status/2115132327131328806)

Matt Turck 把“联合创始人太多不好”的常见创业建议，与一些行业大型公司的联合创始人数量作对比。常见的担忧包括稀释过多、创始人摩擦和分析瘫痪；他随后列出 Anthropic 和 Databricks 各有 7 位联合创始人，OpenAI 有 11 位。

### FPV Ventures partner Nikunj Kothari

FPV Ventures partner Nikunj Kothari makes a similar point about co-founder counts, noting that Anthropic and Databricks both have seven and arguing that the best startups are truly outliers. He rejects the idea of a single right way to identify or build a startup: there is only the way that works for you. Separately, he lists terms he still has to go deep on because he gets wildly different definitions, including long horizon, out of distribution, intelligence per watt, RL environments, forward deployed, revenue, frontier and self improving. [Source](https://x.com/nikunj/status/2115157188704612735) [Source](https://x.com/nikunj/status/2115111451614744845)

Nikunj Kothari 就联合创始人数量表达了类似观点，指出 Anthropic 和 Databricks 都有 7 位联合创始人，并认为最好的创业公司都是异常值。他拒绝接受存在唯一正确方法来识别或构建创业公司的说法：只有适合你的方法。另外，他列出了自己仍需深入理解的一些术语，因为不同人会给出截然不同的定义，包括 long horizon、out of distribution、intelligence per watt、RL environments、forward deployed、revenue、frontier 和 self improving。

### Every CEO Dan Shipper

Every CEO Dan Shipper predicts that video creation and game making will become widely distributed foundations of knowledge work, just as document and deck creation are today. [Source](https://x.com/danshipper/status/2115093098816745910)

Dan Shipper 预测，视频创作和游戏制作会像今天的文档和演示文稿制作一样，成为广泛分布的知识工作基础能力。

## Podcast

The validated podcast feed contained no new qualifying items.

本次经校验的播客源中没有新的符合条件的条目。

## Blog

The validated blog feed contained no new qualifying items.

本次经校验的博客源中没有新的符合条件的条目。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
