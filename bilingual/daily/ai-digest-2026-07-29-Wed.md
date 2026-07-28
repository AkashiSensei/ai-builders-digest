[English](../../en/daily/ai-digest-2026-07-29-Wed.md) | [中文](../../zh/daily/ai-digest-2026-07-29-Wed.md) | [Bilingual](./ai-digest-2026-07-29-Wed.md)

---

# AI Builders Digest

## Reader's Briefing / 导读
Codex-style delegated work stayed front and center. Thibault Sottiaux pointed to reset limits and rapid ChatGPT Work adoption, while Peter Yang highlighted Jason Liu using Codex from a phone to edit a launch video, monitor Slack feedback, and ship revisions while away from his laptop.
Codex 式的委托工作仍是核心信号。Thibault Sottiaux 提到 Codex 和 ChatGPT Work 的用量限制重置以及 ChatGPT Work 的快速采用；Peter Yang 则分享 Jason Liu 在骑车时用手机远程让 Codex 编辑发布视频、持续查看 Slack 反馈并迭代版本。

The cost and evaluation vocabulary is shifting from token prices to task outcomes. Swyx argued that dollars per input/output token is no longer the right axis, and that serious comparisons should move toward dollars per task and agent-lab-style routing, interactivity, evals, and ROI.
成本与评测语言正在从 token 单价转向任务结果。Swyx 认为美元每输入/输出 token 已不再是关键坐标，更严肃的比较应转向美元每任务，以及 agent lab 所强调的路由、交互性、评测和 ROI。

AI agents are pushing infrastructure and security boundaries. Guillermo Rauch cited Kimi research showing container isolation is insufficient when agents can crash underlying machines, arguing for Firecracker microVMs, while also sharing price-performance benchmarks for cybersecurity models.
AI agents 正在逼近基础设施与安全边界。Guillermo Rauch 引用 Kimi 研究称，仅靠容器隔离不足以承载会导致宿主机崩溃的 agents，并主张使用 Firecracker microVM；他也分享了网络安全模型的性价比基准。

Builders are treating AI as expansion rather than pure cost cutting. Aaron Levie said enterprises are still hiring with a different role mix because AI lets them pursue more customer, engineering, sales, and internal deployment work.
builders 更倾向于把 AI 视为业务扩张工具，而不是单纯降本工具。Aaron Levie 说，许多企业仍在招聘，只是岗位组合变化，因为 AI 让他们能追求更多客户、工程、销售和内部部署工作。

The podcast theme is that first-wave AI apps are only a wedge. Granola CEO Chris Pedregal argues meeting notes are not the final prize; the bigger opportunity is the AI-native interface for work, and startups have to keep fighting even when the product is working.
播客主线是第一波 AI 应用只是入口。Granola CEO Chris Pedregal 认为会议笔记不是最终价值，真正更大的机会是 AI-native 的工作界面；即便产品跑通，创业公司也依然是在持续搏斗。

## X / Twitter
Swyx argued that token-level pricing has stopped being the serious cost metric for AI work: comparisons should move toward dollars per task. He also revisited his agent lab thesis, noting that evals, routing, interactivity, and ROI still matter, but Claude Code being accidentally open sourced did not visibly change competitor roadmaps.
- https://x.com/swyx/status/2081979163117052311
- https://x.com/swyx/status/2081904230768816487
- https://x.com/swyx/status/2081890955070980416

Swyx 认为，按输入/输出 token 计价已经不再是衡量 AI 工作成本的严肃指标，比较应转向美元每任务。他也回看自己的 agent lab 论点：评测、路由、交互性和 ROI 依然重要，但 Claude Code 被意外开源后，并没有明显改变它或竞品的路线图。
- https://x.com/swyx/status/2081979163117052311
- https://x.com/swyx/status/2081904230768816487
- https://x.com/swyx/status/2081890955070980416

OpenAI Codex and ChatGPT builder Thibault Sottiaux said paid users of Codex and ChatGPT Work had their usage limits reset, framed the reset as a celebration of ChatGPT Work adoption, and said he would briefly recharge before more ChatGPT and Codex updates this week.
- https://x.com/thsottiaux/status/2081979033261412537
- https://x.com/thsottiaux/status/2081940052154933696
- https://x.com/thsottiaux/status/2081899343091843463

OpenAI Codex 与 ChatGPT builder Thibault Sottiaux 表示，Codex 和 ChatGPT Work 付费用户的用量限制已经重置；他把这次重置称为庆祝 ChatGPT Work 快速采用的一部分，并说会短暂休息，随后本周继续带来 ChatGPT 和 Codex 更新。
- https://x.com/thsottiaux/status/2081979033261412537
- https://x.com/thsottiaux/status/2081940052154933696
- https://x.com/thsottiaux/status/2081899343091843463

Peter Yang highlighted OpenAI DevEx Jason Liu using Codex as a remote work agent: from a phone during a bike ride, Liu asked Codex to edit a launch video with computer use, export it, post it to Slack, then check feedback every 30 minutes and produce later versions until the video was approved.
- https://x.com/petergyang/status/2081775399097549083
- https://x.com/petergyang/status/2081767570198401263
- https://x.com/petergyang/status/2081767558408175867

Peter Yang 分享了 OpenAI DevEx Jason Liu 如何把 Codex 当作远程工作 agent：他在骑车时用手机让 Codex 通过 computer use 编辑发布视频、导出并发到 Slack，随后每 30 分钟查看反馈并产出后续版本，直到视频通过。
- https://x.com/petergyang/status/2081775399097549083
- https://x.com/petergyang/status/2081767570198401263
- https://x.com/petergyang/status/2081767558408175867

Linear head of product Nan Yu made a product-craft point under the jokes: if you have very smart people, put them on making your own product very good and nice to use, then pay Linear a nominal fee to use its product.
- https://x.com/thenanyu/status/2081926688250691884
- https://x.com/thenanyu/status/2081768780045156358

Linear 产品负责人 Nan Yu 在玩笑之外提出了一个产品工艺观点：如果你有非常聪明的人，就应该让他们把自己的产品做得非常好、非常好用，然后再付一点费用使用 Linear。
- https://x.com/thenanyu/status/2081926688250691884
- https://x.com/thenanyu/status/2081768780045156358

Meta AI senior director Madhu Guru argued that strong product reviews should compress months of market learning into an hour. When reviews drift into status updates, leadership visibility, and alignment theater, they stop teaching teams and become overhead.
- https://x.com/realmadhuguru/status/2081781952437486052

Meta AI 高级总监 Madhu Guru 认为，优秀的产品评审应当把数月的市场学习压缩进一小时。若评审滑向状态更新、领导可见性和跨职能对齐，它就不再帮助团队学习，而会变成负担。
- https://x.com/realmadhuguru/status/2081781952437486052

Replit CEO Amjad Masad framed AI agents as the next exploration frontier: after mapping Earth and exploring space, this generation may explore the computational universe of algorithms, programs, proofs, and designs that agents can search.
- https://x.com/amasad/status/2082000490066592127

Replit CEO Amjad Masad 把 AI agents 描述为新的探索前沿：在人类绘制地球、探索太空之后，这一代人可能会探索由算法、程序、证明和设计构成、可由 agents 搜索的计算宇宙。
- https://x.com/amasad/status/2082000490066592127

Vercel CEO Guillermo Rauch shared cybersecurity model benchmarks where Grok 4.5 led on price-performance while Sol stayed at the frontier. He also pointed to Kimi research arguing container isolation is not enough for agents because they can crash underlying machines; Firecracker microVMs, as used in Vercel Sandbox, are the safer boundary.
- https://x.com/rauchg/status/2081852481517318560
- https://x.com/rauchg/status/2081845695112446364
- https://x.com/rauchg/status/2081842439304995169

Vercel CEO Guillermo Rauch 分享了网络安全模型基准：Grok 4.5 在性价比上领先，而 Sol 仍处于前沿。他还引用 Kimi 研究指出，仅用容器隔离不足以承载 agents，因为它们可能让宿主机崩溃；Vercel Sandbox 使用的 Firecracker microVM 是更安全的边界。
- https://x.com/rauchg/status/2081852481517318560
- https://x.com/rauchg/status/2081845695112446364
- https://x.com/rauchg/status/2081842439304995169

Box CEO Aaron Levie said the predicted negative AI jobs outcome is still not showing up in the enterprises he talks to. He sees hiring continue with a changed role mix: more engineers for previously unreachable problems, more sales capacity for deeper client work, and more internal FDEs for AI deployment. His warning is that companies using AI only to cut cost risk being outcompeted by companies using it to serve customers better.
- https://x.com/levie/status/2081930301752942703
- https://x.com/levie/status/2081760710108012702

Box CEO Aaron Levie 表示，在他接触的企业中，外界预测的 AI 负面就业结果仍没有出现。他看到招聘仍在继续，只是岗位结构变化：更多工程师处理过去无法触及的问题，更多销售人员借助 AI 深入客户关系，更多内部 FDE 帮助部署 AI。他的警示是，只把 AI 用于降本的公司，最终会被用 AI 更好服务客户的公司超过。
- https://x.com/levie/status/2081930301752942703
- https://x.com/levie/status/2081760710108012702

MAD Podcast host and FirstMark VC Matt Turck reacted to a study saying fewer than 40% of VCs have any successful investment, capturing the industry habit of everyone assuming they are in the winning minority.
- https://x.com/mattturck/status/2081679801769668980

MAD Podcast 主持人、FirstMark VC Matt Turck 转发一项研究称，少于 40% 的 VC 拥有成功投资，并借此调侃行业里每个人都默认自己属于赢家少数派。
- https://x.com/mattturck/status/2081679801769668980

Zara Zhang shared a lightweight content-creation loop and a blunt reminder that the magic people want is often inside the work they are avoiding.
- https://x.com/zarazhangrui/status/2081983750658044079
- https://x.com/zarazhangrui/status/2081976736854737164

Zara Zhang 分享了一个轻量的内容创意循环，并提醒人们：你正在寻找的魔法，往往就在你正在逃避的工作里。
- https://x.com/zarazhangrui/status/2081983750658044079
- https://x.com/zarazhangrui/status/2081976736854737164

FPV Ventures partner Nikunj Kothari said he used Claude Code as the primary interface for a two-week trip, then asked it to produce a retrospective on what could be improved next time. The practical signal is that agents are becoming planning and postmortem tools, not just code editors.
- https://x.com/nikunj/status/2081992618649547100
- https://x.com/nikunj/status/2081805464757485706
- https://x.com/nikunj/status/2081750712761852341

FPV Ventures partner Nikunj Kothari 表示，他在两周旅行中把 Claude Code 当作主要界面使用，随后让它生成下一次可改进事项的完整复盘。这里的实用信号是，agents 正在成为规划和复盘工具，而不只是代码编辑器。
- https://x.com/nikunj/status/2081992618649547100
- https://x.com/nikunj/status/2081805464757485706
- https://x.com/nikunj/status/2081750712761852341

OpenClaw and OpenAI builder Peter Steinberger pointed to agent-to-agent development: his agent reported a bug and Jarred Sumner's agent fixed it the same night. He also pushed back on the idea that their security work is unsafe despite working with strong security teams.
- https://x.com/steipete/status/2081865727443902654
- https://x.com/steipete/status/2081790109415002468
- https://x.com/steipete/status/2081767828278170002

OpenClaw 与 OpenAI builder Peter Steinberger 指向了 agent-to-agent 开发场景：他的 agent 报告了一个 bug，Jarred Sumner 的 agent 当晚就修好了。他也回应了外界对安全性的质疑，强调他们正在与很强的安全团队合作。
- https://x.com/steipete/status/2081865727443902654
- https://x.com/steipete/status/2081790109415002468
- https://x.com/steipete/status/2081767828278170002

Every CEO Dan Shipper flagged concern about rare books in response to another post, a reminder that AI-era data practices still collide with cultural preservation and access questions.
- https://x.com/danshipper/status/2081754482568835152

Every CEO Dan Shipper 对另一条关于珍本书的帖子表达担忧，提醒人们 AI 时代的数据实践仍会与文化保存和获取问题发生碰撞。
- https://x.com/danshipper/status/2081754482568835152

Sam Altman replied simply “wrong” to a post. The feed does not include enough context to infer the target claim, so the useful signal here is only that he publicly rejected it.
- https://x.com/sama/status/2081832600591892712

Sam Altman 对一条帖子简短回复“wrong”。feed 中没有足够上下文判断他反驳的具体主张，因此可用信号只是他公开否定了该说法。
- https://x.com/sama/status/2081832600591892712

## Podcast
**AI & I by Every - The Founder of a $1.5B AI Company on What Comes After the First Wave of AI Apps**
Dan Shipper's conversation with Granola cofounder and CEO Chris Pedregal is less about meeting notes as a category and more about what survives after the first wave of AI apps gets copied into every suite. Pedregal says startups remain knife fights even when they are working: once the product catches a wave, the job becomes staying on the surfboard while the market shifts underneath you. His competition answer is deliberately zoomed out. Granola was not the first AI notetaker, and bigger platforms adding notes is not the end of the story, because meeting notes are not the final value everyone is chasing. The larger opportunity is the AI-native interface for work: how people collaborate, remember, decide, and move through their day once software can understand context and act. The builder takeaway is to avoid confusing the wedge with the destination. A delightful first use case can create distribution and trust, but the company has to keep earning relevance as the interface layer changes.
- https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

**AI & I by Every - The Founder of a $1.5B AI Company on What Comes After the First Wave of AI Apps**
Dan Shipper 与 Granola 联合创始人兼 CEO Chris Pedregal 的对话，表面上谈会议笔记，核心其实是第一波 AI 应用被各大套件复制之后，什么价值还能留下。Pedregal 说，即使产品已经跑通，创业公司仍然像近身搏斗：当产品搭上一波浪潮，真正的任务是市场不断变化时仍站在冲浪板上。他对竞争的回答刻意拉远视角。Granola 并不是第一个 AI 会议笔记工具，大平台加入笔记功能也不是故事终点，因为会议笔记不是大家最终追逐的全部价值。更大的机会是 AI-native 的工作界面：当软件能理解上下文并采取行动，人们如何协作、记忆、决策并推进一天的工作。给 builders 的启发是，不要把切入口误认为终点。一个让人愉悦的首个用例可以带来分发和信任，但公司必须在界面层变化中持续证明自己的相关性。
- https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

## Blog
No new blog posts were present in today's feed.
今天的 feed 中没有新的博客文章。
