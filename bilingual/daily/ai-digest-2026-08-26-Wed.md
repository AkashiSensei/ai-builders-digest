[English](../../en/daily/ai-digest-2026-08-26-Wed.md) | [中文](../../zh/daily/ai-digest-2026-08-26-Wed.md) | [Bilingual](./ai-digest-2026-08-26-Wed.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. Claude memory goes cross-surface and user-controlled.** Claude announced that memory is now unified across chat and Claude Cowork, on by default on Free, Pro, and Max plans, and saved as a list of editable topics in Settings; sensitive topics such as health and religious beliefs stay out of memory unless you switch them on. Claude Code's Boris Cherny calls the update "simpler and more powerful," and Anthropic's Cat Wu, who works on Claude Code and Cowork, says telling Claude to remember something once now carries that context across surfaces.

Claude 的记忆现在跨 Chat 和 Cowork 打通，且由你掌控。Claude 宣布，记忆现在在 Chat 和 Claude Cowork 之间统一，Free、Pro 和 Max 套餐默认开启，所有记忆都以主题列表的形式保存在 Settings 中，可以查看、编辑或删除；健康、宗教信仰等敏感主题在 Settings 中手动开启前不会进入记忆。Claude Code 的 Boris Cherny 形容这次更新「更简单、更强大」，Anthropic 负责 Claude Code 和 Cowork 的 Cat Wu 则表示，让 Claude 记住一件事一次，就能在多个界面间共享这份上下文。

**2. Search's next act is built for agents, not humans.** Former Twitter CEO Parag Agrawal, now founder of Parallel Web Systems, argues that "human click data is a bug" and that search for agents should rely on agent feedback rather than human clicks, betting agents will drive a thousand times more search than humans ever have. Parallel just announced a Google Cloud partnership as a search and grounding provider for enterprise agent APIs, shipped TurboNow, which Agrawal calls the fastest, highest-quality agentic web search on the market, and is designing Shapley-value-based payments that reward content owners for the value their data creates.

搜索的下一个时代是给 agent 用的，而不是给人用的。前 Twitter CEO、如今创立 Parallel Web Systems 的 Parag Agrawal 认为，「人类的点击数据是一种 bug」，面向 agent 的搜索应该依赖 agent 反馈而不是人类点击，他的赌注是 agent 带来的搜索量会超过人类的一千倍。Parallel 刚宣布与 Google Cloud 合作，作为其企业 agent API 的搜索与 grounding 服务商，还发布了 TurboNow，Agrawal 称它是市场上最快、质量最高的 agentic web search，同时正在用 Shapley 值设计分成方案，让内容所有者按数据创造的价值获得回报。

**3. The agent developer stack gets faster, more secure, and more collaborative.** Vercel CEO Guillermo Rauch introduced Run SDK for secure eval of dynamic Code Mode execution in a lightweight QuickJS context, and announced Vercel Connect is GA, letting developers create MCP clients that query services like Notion on behalf of authenticated users. Google Labs opened a waitlist for Play with Putty, a collaborative vibe coding tool for building tools and websites together in real time. OpenAI's Thibault Sottiaux highlighted a new plan for teams and small companies with no 5-hour limits, while Swyx warns to avoid Codex's "locked use" capabilities for now because unstable macOS features locked him out of his keychain twice this week.

agent 开发工具链变得更快速、更安全、更协作。Vercel CEO Guillermo Rauch 发布 Run SDK，在动态 Code Mode 中用轻量 QuickJS 安全上下文执行代码，并宣布 Vercel Connect 正式可用，开发者可以创建 MCP client，以已认证用户身份查询 Notion 等服务。Google Labs 开放了 Play with Putty 的候补名单，这是一个可以实时协作 vibe coding 的工具。OpenAI 的 Thibault Sottiaux 介绍了面向团队和小公司的新方案，且没有 5 小时限制；Swyx 则提醒暂时别用 Codex 的 locked use 功能，因为不稳定的 macOS 特性本周两次把他锁在 macOS keychain 之外。

**4. Applied AI companies have a window in the enterprise.** Box CEO Aaron Levie argues there is a wide gap between AI models and the underlying workflows of an enterprise, leaving "a ton of opportunity" for applied AI companies: "The world doesn't just want raw models and agents; it wants problems resolved and outcomes achieved." Meta's Madhu Guru continues his evals series with the Eval Roadmap Problem, arguing evals fail when teams treat them as static artifacts and need a roadmap that evolves with usage, from short-context, single-turn QA toward long-context, multi-turn, proactive agents.

applied AI 公司正处在一个窗口期。Box CEO Aaron Levie 认为，AI 模型与企业底层工作流之间存在巨大差距，给 applied AI 公司留下「大量机会」：「世界要的不只是裸模型和 agent，它要的是问题被解决、结果被达成。」Meta 的 Madhu Guru 则在 eval 系列第九篇中指出，eval 失败大多因为团队把它们当成静态制品，它们需要随使用模式演进的路线图，从短上下文、单轮问答走向长上下文、多轮和主动式 agent。

**5. AI's beneficiaries and optics are being renegotiated.** SPC general partner Aditya Agarwal says it's unsurprising the public hates datacenter buildout, since AI today mainly helps knowledge workers and the highest-paid segments, and expects the big change when AI finds cures for diseases that ail everyone; he criticizes the industry's fear-mongering. Sam Altman teased "we made a chip and it is fast," and Peter Yang open-sourced /fuck-cancer, an AI skill that helps patients and caregivers navigate cancer diagnosis and treatment with a living, shareable brief.

AI 的受益面与公众观感正在被重新讨论。SPC 合伙人 Aditya Agarwal 说，普通大众反感数据中心建设「一点都不意外」，因为今天的 AI 主要服务知识工作者和收入最高的群体，他预计重大变化会出现在 AI 能治愈困扰所有人的疾病之时，并批评行业一直在制造恐惧。Sam Altman 预告「我们做了一颗芯片，而且它很快」；Peter Yang 则开源了 /fuck-cancer，一个帮助患者和照护者应对癌症诊疗的 AI skill，用一份实时更新的简报陪伴他们走完整个治疗过程。

## X / Twitter

### Claude
Claude announced that memory now works across chat and Claude Cowork, and users decide what's in it: hand Cowork a task and it starts from what Claude already knows from your chats, such as the project you talked through, your manager's preferences, or the client from last quarter. Everything Claude remembers is saved as a list of topics in Settings where each one can be read, edited, or deleted; memory updates on its own as you chat, and you can also say "remember this" to save something specific. Memory is on by default on Free, Pro, and Max plans, and topics some consider sensitive, like health or religious beliefs, stay out of memory unless turned on in Settings.

Claude 宣布，记忆现在在 Chat 和 Claude Cowork 之间统一，内容由你决定：把任务交给 Cowork 时，它会从 Claude 在聊天中已经知道的上下文出发，比如你聊过的项目、你经理的偏好或上个季度的客户。所有记住的内容都会以主题列表的形式保存在 Settings 中，可以查看、编辑或删除；记忆会在聊天中自动更新，也可以说「remember this」主动保存某件事。记忆在 Free、Pro 和 Max 套餐上默认开启，健康、宗教信仰等敏感主题在 Settings 中手动开启前不会进入记忆。

- [Claude on unified memory](https://x.com/claudeai/status/2092299704864284888)
- [Claude on managing memory in Settings](https://x.com/claudeai/status/2092299707653439497)
- [Claude on sensitive topics and defaults](https://x.com/claudeai/status/2092299710002319742)

### Cat Wu: Claude Code and Cowork at Anthropic
Wu announced that, thanks to user feedback, memory is now unified across Chat and Cowork: "you can tell Claude to remember something once and it'll have that context across surfaces!"

Wu 宣布，根据用户反馈，记忆现在已在 Chat 和 Cowork 之间打通：「现在你让 Claude 记住一件事一次，它就能在多个界面间共享这份上下文！」

- [Cat Wu on unified memory](https://x.com/_catwu/status/2092337156455051345)

### Boris Cherny: Claude Code at Anthropic
Cherny, who works on Claude Code at Anthropic, welcomed the memory update with a one-liner: "A small improvement: memory is now simpler and more powerful."

在 Anthropic 负责 Claude Code 的 Cherny 用一句话欢迎这次记忆更新：「一个小改进：记忆现在更简单、更强大。」

- [Boris Cherny on Claude memory](https://x.com/bcherny/status/2092355642363453943)

### Thibault Sottiaux: Codex & ChatGPT at OpenAI
Sottiaux highlighted a new plan "similar to the Pro $100 plan but designed for teams and small companies." It includes all ChatGPT, ChatGPT Work, and Codex features, connects to Google Workspace, Slack, GitHub, Microsoft 365, and more, offers a secure workspace with SAML, SSO, and MFA, centralized billing and administration, usage analytics and spend controls, and notably "no 5h limits."

Sottiaux 介绍了一个「类似 Pro $100 套餐、但为团队和小公司设计」的新方案：包含全部 ChatGPT、ChatGPT Work 和 Codex 功能，可连接 Google Workspace、Slack、GitHub、Microsoft 365 等，提供带 SAML、SSO 和 MFA 的安全工作区，集中式计费和管理，使用分析与预算控制，而且「没有 5 小时限制」。

- [Thibault Sottiaux on the team plan](https://x.com/thsottiaux/status/2092345330272780499)

### Sam Altman
Altman teased the company's chip effort in one line: "we made a chip and it is fast."

Altman 用一句话预告了公司的芯片进展：「我们做了一颗芯片，而且它很快。」

- [Sam Altman on the chip](https://x.com/sama/status/2092339694210040187)

### Guillermo Rauch: CEO of Vercel
Rauch announced Run SDK, which brings "secure eval for dynamic Code Mode execution": when agents write code you don't always need a full sandbox, and you can run their code in a lightweight QuickJS secure context that is faster and more cost-efficient (npm i run). He also celebrated Vercel Connect going GA, calling secure connectivity to services and data "the hardest problem in building agents": run e.g. vercel connect create notion, then get an MCP client you can query on behalf of the authenticated user.

Rauch 发布了 Run SDK，为动态 Code Mode 执行提供安全 eval：当 agent 写代码时，不一定要完整沙箱，可以把代码放在轻量 QuickJS 安全上下文中运行，更快也更省成本。他还庆祝 Vercel Connect 正式可用，称「构建 agent 最难的问题是安全地连接服务和数据」，现在运行 vercel connect create notion，就能获得一个以已认证用户身份查询数据的 MCP client。

- [Guillermo Rauch on Run SDK](https://x.com/rauchg/status/2092382653161107534)
- [Guillermo Rauch on Vercel Connect GA](https://x.com/rauchg/status/2092352411839193234)

### Google Labs
Google Labs opened the waitlist for "Play with Putty," a collaborative vibe coding tool that lets you build tools and websites together in real time. It is currently US only, ages 18+.

Google Labs 开放了 Play with Putty 的候补名单，这是一个协作式 vibe coding 工具，可以实时一起构建工具和网站。目前仅限美国，18 岁以上。

- [Google Labs on Play with Putty](https://x.com/GoogleLabs/status/2092293667688173593)

### Aaron Levie: CEO of Box
Levie shares a post on what applied AI strategy looks like at scale, arguing there is a wide gap between AI models and the underlying workflows of an enterprise, which leaves "a ton of opportunity" for applied AI companies: "The world doesn't just want raw models and agents; it wants problems resolved and outcomes achieved." Winning, he says, requires understanding context, driving change management, having a harness that routes to various models, connecting to the critical business systems in the vertical, solving the UX of connecting users to agents in a workflow, and understanding evals. That is "a ton of value that goes beyond just the model intelligence itself," and there is a window of opportunity right now.

Levie 分享了一篇关于规模化 applied AI 战略的文章，认为 AI 模型与企业底层工作流之间存在巨大差距，给 applied AI 公司留下「大量机会」：「世界要的不只是裸模型和 agent；它要的是问题被解决、结果被达成。」要赢，需要理解业务上下文、推动变革管理、拥有能路由到不同模型的 harness、连接垂直领域的关键业务系统、解决工作流中用户与 agent 连接的 UX 问题，还要懂 evals。这些价值「远超模型智能本身」，而当下正是窗口期。

- [Aaron Levie on applied AI strategy at scale](https://x.com/levie/status/2092466424694649066)

### Madhu Guru: Senior Director of AI at Meta
In part nine of his "How to build great evals" series, Guru argues most evals fail because teams treat them as static artifacts while user expectations and behaviors evolve. Using a financial research agent as an example, he maps how usage moves from summarizing a 5-page earnings report to monitoring a portfolio and alerting on material changes, and says evals should shift with usage: short-context to long-context, single-turn QA to multi-turn, passage citations to doc and line citations, simple QA to complex synthesis, reactive chat to proactive agent. His practical roadmap: map the dimensions along which usage will evolve, prioritize, mine production traces for shifts, build P0 evals for the next stage of usage, then run them and hill-climb on failure modes.

在「如何构建好的 eval」系列第九篇中，Guru 认为大多数 eval 失败是因为团队把它们当成静态制品，而用户的期望和行为一直在演变。他以金融研究 agent 为例，展示使用方式如何从总结一份 5 页财报，演进到监控投资组合并在重大变化时发出提醒，并给出 eval 随使用演进的路径：从短上下文到长上下文、从单轮问答到多轮、从段落引用到文档与行级引用、从简单问答到复杂综合、从被动聊天到主动式 agent。他的实操路线图是：梳理使用会演进的维度、按重要性排优先级、挖掘生产环境轨迹寻找变化、为下一阶段使用构建 P0 eval，再运行并针对失败模式 hill-climb。

- [Madhu Guru on the Eval Roadmap Problem](https://x.com/realmadhuguru/status/2092426017118028266)
- [Madhu Guru's full eval series](https://x.com/realmadhuguru/status/2092461206783373758)

### Peter Yang
Yang open-sourced /fuck-cancer, an AI skill that helps patients and caregivers navigate cancer diagnosis and treatment and advocate for themselves. It creates and updates a practical brief with five sections: patient and care-team information, what to do next limited to three specific actions, what we know separating confirmed facts from what remains unclear, medical terms explained in plain English, and a care log of recent updates and decisions. It can save the brief locally as Markdown or update a shareable Google Doc, and uses trusted sources such as the National Cancer Institute and the ClinicalTrials.gov API when research is needed.

Yang 开源了 /fuck-cancer，一个帮助患者和照护者应对癌症诊疗、为自己和亲人发声的 AI skill。它会创建并持续更新一份实用简报，包含五个部分：患者与照护团队信息、最多三项的下一步行动、区分已确认事实与未知信息的「我们所知」、用通俗语言解释的医学术语，以及近期更新与决策的照护日志。简报可以保存为本地 Markdown，也可以更新到可共享的 Google Doc；需要研究时，会使用美国国家癌症研究所和 ClinicalTrials.gov API 等可信来源。

- [Peter Yang on /fuck-cancer](https://x.com/petergyang/status/2092249012913258946)
- [Peter Yang on the example brief](https://x.com/petergyang/status/2092311110871617915)

### Nikunj Kothari: partner at FPV Ventures
Kothari introduced the "El Niño situation monitor" (elneenyo.com), built with ChatGPT Codex and Railway: real-time updates, news and what's happening straight from government sources, impact per region and costs, historical records, and a glossary and FAQ on all the different readings. He says the project was originally inspired by The Stalwart's Odd Lots episode.

Kothari 发布了用 ChatGPT Codex 和 Railway 构建的「El Niño situation monitor」（elneenyo.com）：实时更新、来自政府来源的最新动态，按地区的冲击与成本、历史记录，以及所有读数的术语表与 FAQ。他提到这个项目最初受 The Stalwart 的 Odd Lots 节目启发。

- [Nikunj Kothari on the El Niño monitor](https://x.com/nikunj/status/2092383834470002922)
- [Nikunj Kothari on how it was built](https://x.com/nikunj/status/2092384774459674957)

### Aditya Agarwal: General Partner at SPC
Agarwal argues it's "totally unsurprising" that the general population hates datacenter buildout, because AI today primarily helps knowledge workers and the highest-paid segments of the country. He suspects the big change will happen when AI can find cures for diseases that ail everyone, and criticizes the industry's fear-mongering: "Instead of painting a positive version of the future, we have instead talked about all the reasons why we should be afraid."

Agarwal 认为，普通大众反感数据中心建设「一点都不意外」，因为今天的 AI 主要服务知识工作者和收入最高的群体。他预计重大变化会出现在 AI 能治愈困扰所有人的疾病之时，并批评行业一直以来的恐吓式叙事：「我们不是在描绘一个积极的未来，而是一直在讲各种应该害怕的理由。」

- [Aditya Agarwal on AI's beneficiaries and optics](https://x.com/adityaag/status/2092290497826173186)

### Swyx
Swyx warns people to avoid Codex's "locked use" capabilities right now: he says the feature relies on unstable macOS features and completely locked him out of his macOS keychain twice this week, pointing to an Apple developer forums thread that acknowledges it as a "known bug." He notes it would be nice to do everything in the cloud, but "cloud isn't there yet."

Swyx 提醒大家暂时不要使用 Codex 的 locked use 功能：它依赖不稳定的 macOS 特性，本周已经两次把他锁在 macOS keychain 之外，他还引用 Apple 开发者论坛上承认这是「已知 bug」的讨论。他说如果一切都能在云端完成就好了，但「云端还没到那一步」。

- [Swyx on Codex locked use](https://x.com/swyx/status/2092492963435946494)

## Podcast

### Training Data: Parallel's Parag Agrawal: Building a New Web for AI Agents

The Takeaway: Search is being rebuilt for agents rather than humans, and the winning design replaces human click data with agent feedback, then reworks the web's economics so content owners get paid for the value their data creates.

Parag Agrawal, the former Twitter CEO who now runs Parallel Web Systems, is betting that agents will drive a thousand times more search than humans ever have, and that the technologies and business models built for human eyeballs will not survive that shift. "Our view at Parallel is that human click data is a bug," he says: search for agents should rely on agent feedback, not human feedback, and models are now good enough at compressing information that research from building models can be applied directly to search indexing and ranking.

Parallel launched with a search agent rather than a search engine, competing with outsourced human data curation so it could build its index incrementally, then shipped TurboNow, which Agrawal says cut a three-second response budget to 200 milliseconds and is "the fastest, highest quality agentic web search on the market by a lot." The company also announced it is working with Google Cloud as a search and grounding provider for enterprise agent APIs on GCP.

The deeper argument is economic. Agrawal believes the ad-supported web cannot monetize agent visits, and the current alternative, fixed-fee licensing deals with model labs, breaks down as inference grows 7x year over year. His proposed fix is differential pricing plus Shapley values: simulate what agent outputs would look like without a given source, estimate its marginal contribution, and pay content owners accordingly, with the math able to deliver "meaningful dollars for a very wide range of content owners" within twelve to twenty-four months. The web itself also shifts from pull to push: background agents will watch everything that changes online and trigger work, so "call me if this happens" becomes the new query. As he tells his team, "If it can be done today, do it."

Source: https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

### Training Data：Parallel 的 Parag Agrawal：为 AI agent 构建一个新的 Web

核心 takeaway：搜索正在被重新构建，服务对象是 agent 而不是人。胜出的方案会用 agent 反馈取代人类点击数据，并重构 web 的经济模型，让内容所有者按数据创造的价值获得回报。

前 Twitter CEO、如今创立 Parallel Web Systems 的 Parag Agrawal 押注：agent 带来的搜索量将超过人类的一千倍，而为人类眼球设计的搜索技术和商业模式都撑不过这次转变。他说：「我们在 Parallel 的观点是，人类的点击数据是一种 bug。」面向 agent 的搜索应该依赖 agent 反馈而不是人类反馈，而且模型在信息压缩上已经足够强，可以把构建模型的研究直接用到搜索索引和排序上。

Parallel 起步时先做的是搜索 agent 而不是搜索引擎，把外包给人类的数据整理当作竞争对手，从而可以逐步建设自己的索引；最近发布的 TurboNow 把一次检索的响应预算从三秒压到 200 毫秒，Agrawal 称它是「市场上最快、质量最高的 agentic web search」。公司还宣布与 Google Cloud 合作，在 GCP 上作为企业 agent API 的搜索与 grounding 服务商。

更深层的争论在经济学。Agrawal 认为广告支撑的 web 无法为 agent 访问变现，而现在的替代方案，也就是与模型实验室签订固定费用的授权协议，在推理量每年增长 7 倍的情况下也会瓦解。他的方案是差异化定价加 Shapley 值：模拟去掉某个来源后 agent 输出的变化，估算它的边际贡献，再据此给内容所有者付费，他预计 12 到 24 个月内，这套数学就能为大量内容所有者带来「有意义的收入」。web 本身也会从 pull 变成 push：后台 agent 会持续观察网上发生的变化并触发工作，「如果发生这种事，就叫我」会成为新的查询方式。正如 Agrawal 常对团队说的：「今天能做的事，今天就做。」

来源：https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

## Blog

The validated blog feed contained no new qualifying posts for this digest, so there is nothing to summarize this cycle.

本次通过验证的 blog feed 中没有新的符合条件的内容，本期没有可总结的条目。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
