[English](../../en/daily/ai-digest-2026-05-31-Sun.md) | [中文](../../zh/daily/ai-digest-2026-05-31-Sun.md) | [Bilingual](./ai-digest-2026-05-31-Sun.md)

---

# AI Builders Digest

## Reader's Briefing / 导读
Agent adoption is now forcing enterprise security to move from chat governance to action governance. The useful question is no longer only what employees paste into a model, but whether autonomous tools are taking legitimate actions with broad permissions.
agent 采用正在迫使企业安全从聊天治理转向行动治理。关键问题不再只是员工把什么贴进模型，而是拥有广泛权限的自治工具是否在执行合法动作。

The day's strongest technical theme is oversight for agents by agents. Onyx's model is to use small specialized models to decide when a more capable reviewer should inspect an action, which turns supervision into a latency and cost problem as much as a safety problem.
今天最强的技术主题是用 agent 监督 agent。Onyx 的思路是用小型专用模型判断何时需要更强的 reviewer 检查某个动作，这让监督同时变成安全、延迟和成本问题。

Coding agents remain the first mass enterprise deployment surface for autonomy. Boris Cherny's Salesforce example and the No Priors interview both point to coding tools as the place where long-horizon agent work, security controls, and workflow redesign are colliding first.
编码 agent 仍然是企业大规模部署自治能力的第一入口。Boris Cherny 提到的 Salesforce 案例和 No Priors 访谈都说明，长周期 agent 工作、安全控制和工作流重设计首先在编码工具里相撞。

Builders are still searching for trustworthy signals. Thibault Sottiaux asks whether benchmarks or friends drive model trials, while product demos from Google keep emphasizing visible, everyday AI capability rather than abstract leaderboard claims.
builders 仍在寻找可信信号。Thibault Sottiaux 追问大家是相信 benchmark 还是朋友推荐来试新模型，而 Google 的产品 demo 继续强调可见的日常 AI 能力，而不是抽象榜单。

The business layer is split between optimism and discipline. Aaron Levie reads internal app rebuilds as bullish for software, while Garry Tan reminds founders that funding only amplifies demand that already exists.
商业层同时存在乐观和纪律。Aaron Levie 把大公司自建应用层视为对软件的利好信号，而 Garry Tan 提醒 founders：融资只是放大已经存在的需求，不会凭空制造需求。

## X / Twitter

### Josh Woodward

Google Labs VP Josh Woodward shared two short creative-AI demos: turning a car into a Lamborghini and making multilingual output feel "ridiculously easy." The posts are lightweight, but they fit Google's current product story: multimodal generation should feel like an everyday transformation tool, not a specialist workflow.

Google Labs VP Josh Woodward 分享了两个简短的创意 AI demo：把汽车变成 Lamborghini，以及让多语言输出变得“ridiculously easy”。内容本身不长，但符合 Google 当前的产品叙事：多模态生成应该像日常转换工具，而不是专家工作流。

Links: https://x.com/joshwoodward/status/2060443095527989413, https://x.com/joshwoodward/status/2060443093825094091

### Boris Cherny

Anthropic's Boris Cherny highlighted Salesforce's writeup on adopting Claude Code. The concrete numbers are the hook: a migration scoped at 231 days shipped in 13, and one PR delivered 21 endpoints with full test coverage. His larger point is that the best teams are not just doing existing steps faster; they are deleting handoffs and letting agents own more end-to-end work.

Anthropic 的 Boris Cherny 转发并总结了 Salesforce 使用 Claude Code 的文章。最抓人的数字是：原本估算 231 天的迁移，13 天完成；一个 PR 交付了 21 个 endpoint，并达到 100% 测试覆盖。他更大的观点是，效果最好的团队不是把原有步骤做快一点，而是在删除 handoff，让 agent 端到端拥有更多工作。

He also calls out a useful adoption detail: Salesforce reported higher output alongside fewer total incidents because guardrails and quality standards were built into the agentic workflow itself. That is the important enterprise claim: productivity and quality do not have to be a tradeoff if the workflow is redesigned around agents rather than merely adding agents to the old process.

他还指出一个重要的企业采用细节：Salesforce 在产出增加的同时，总事故数下降，因为安全 guardrail 和质量标准被内建进 agentic workflow。这里真正重要的企业命题是：如果围绕 agent 重新设计工作流，而不是把 agent 加到旧流程上，生产力和质量不一定是取舍关系。

Links: https://x.com/bcherny/status/2060390855383400729, https://x.com/bcherny/status/2060390853835726946, https://x.com/bcherny/status/2060390852619272526

### Thibault Sottiaux

OpenAI's Thibault Sottiaux teased a Codex dashboard number and said more news is coming, framing Codex adoption as still very early. He also asked a sharp product question: do people still trust benchmarks, or do they try models because friends recommend them? That is a live go-to-market problem for frontier models, where social proof, daily workflow fit, and benchmark scores all compete as trust signals.

OpenAI 的 Thibault Sottiaux 预告了一个让他高兴的 Codex dashboard 数字，并表示后续会有更多消息，同时称 Codex 采用仍然非常早。他还问了一个尖锐的产品问题：大家还相信 benchmark 吗，还是听朋友推荐才试新模型？对前沿模型来说，这是正在发生的 go-to-market 问题：社交证明、日常工作流适配和 benchmark 分数都在竞争可信信号。

Links: https://x.com/thsottiaux/status/2060565265906290786, https://x.com/thsottiaux/status/2060563528596287874, https://x.com/thsottiaux/status/2060529970523603099

### Aaron Levie

Box CEO Aaron Levie argued that a company spending $500M to build its own version of the app layer is actually a strong advertisement for software. The subtext is that internal rebuilds validate how much business value still lives above the model layer: workflow, data, permissions, UX, deployment, and organizational specificity.

Box CEO Aaron Levie 认为，一家公司花 5 亿美元自建自己的 app layer，反而是对软件最好的广告。潜台词是，模型层之上仍然有大量业务价值：工作流、数据、权限、UX、部署，以及组织特定性。

Link: https://x.com/levie/status/2060525104384418271

### Garry Tan

YC President Garry Tan gave founders a blunt financing reminder: money is gasoline, not fire. If customers do not want the thing yet, funding will not fix the core problem. His other posts in the feed were about UC governance and admissions rather than AI building, so the founder-market-fit point is the relevant builder signal.

YC President Garry Tan 给 founders 一个直接的融资提醒：钱是汽油，不是火。如果客户还不想要这个东西，融资解决不了核心问题。feed 中他的其他帖子主要关于 UC 治理和招生，而不是 AI building，因此 founder-market fit 这条是最相关的 builder 信号。

Links: https://x.com/garrytan/status/2060600088079356292, https://x.com/garrytan/status/2060586945491931202, https://x.com/garrytan/status/2060582680216084925

### Nikunj Kothari

FPV Ventures partner Nikunj Kothari reacted to a founder going through the YC interview process and said he is excited to meet the upcoming batch. The post is more community signal than technical substance, but it fits the broader early-stage pattern: AI startup formation remains intensely tied to founder selection, batch momentum, and networks.

FPV Ventures partner Nikunj Kothari 转发了一位 founder 经历 YC 面试流程的内容，并表示期待见到即将到来的 batch。这个帖子更多是社区信号，而不是技术内容，但也符合更大的早期创业模式：AI startup formation 仍然强烈依赖 founder selection、batch momentum 和 network。

Link: https://x.com/nikunj/status/2060580468781953169

### Peter Steinberger

Peter Steinberger said he is excited to have Vince on board because very few people understand "the new ways" software is built. It is a short post, but the signal is clear: teams now value engineers who understand agent-native development practice, not just conventional software delivery.

Peter Steinberger 表示很高兴 Vince 加入，因为很少有人理解软件构建的“new ways”。帖子很短，但信号明确：团队现在重视理解 agent-native development practice 的工程师，而不只是传统软件交付能力。

Links: https://x.com/steipete/status/2060306947035832628, https://x.com/steipete/status/2060294413377519808

### Dan Shipper

Every CEO Dan Shipper posted a brief reaction rather than a substantive thread. There is not much to summarize from the text itself, but it is consistent with the surrounding feed's focus on new AI work styles and tool-mediated output.

Every CEO Dan Shipper 只是发了一个简短反应，并不是完整 thread。从文本本身可总结的内容不多，但它与今天 feed 的整体主题一致：新的 AI 工作方式和工具中介的产出正在成为核心关注点。

Link: https://x.com/danshipper/status/2060487621915152571

## Podcast

### Building an AI Guardian for Enterprise with Onyx Security CEO Maxim Bar Kogan

The Takeaway: Onyx CEO Maxim Bar Kogan argues that enterprise AI security is shifting from monitoring prompts to governing agent actions. Companies cannot stop agent adoption, so they need controls that can judge whether autonomous actions are legitimate before broad permissions turn into real incidents.

核心看点：Onyx CEO Maxim Bar Kogan 认为，企业 AI 安全正在从监控 prompt 转向治理 agent action。公司已经无法阻止 agent 采用，因此需要能判断自治动作是否合法的控制层，避免广泛权限变成真实事故。

The interview's clearest frame is that coding agents made autonomy real inside large companies. Bar Kogan says Onyx originally bet on the AutoGPT-style loop before the market was ready, but reasoning models and tools such as Claude Code made long-horizon agents useful enough that enterprises adopted them despite weak controls. In typical deployments he sees three buckets: low-code AI automations, first-party agents built inside the company, and autonomous coding agents or assistants, with coding agents now the biggest category and automations growing quickly.

这期访谈最清楚的框架是：coding agent 让自治能力在大公司内部变成现实。Bar Kogan 说，Onyx 很早就押注 AutoGPT 式循环，当时市场还没准备好；但 reasoning model 和 Claude Code 等工具让长周期 agent 足够有用，企业即使缺少成熟控制也开始采用。在典型部署中，他看到三类系统：低代码 AI automation、公司内部自建 first-party agent，以及自治 coding agent 或 assistant；其中 coding agent 目前占比最大，automation 增长最快。

The security challenge is that old controls do not understand agent intent. Identity systems can limit permissions, but agents often need a user's broad permissions to be useful. Endpoint and API tools may see a database deletion, but they do not know whether that deletion matched the user's task. A simple proxy with a policy engine is also insufficient because the hard problem is not only seeing the data; it is deciding whether the next action makes sense in context.

安全挑战在于，旧控制无法理解 agent intent。身份系统可以限制权限，但 agent 往往需要用户的广泛权限才有用。endpoint 和 API 工具可能看到一次数据库删除，但不知道这个删除是否符合用户任务。简单的 proxy 加 policy engine 也不够，因为难点不只是看到数据，而是判断下一步动作在上下文里是否合理。

Onyx's technical answer is agents watching agents, but with a cost-control layer. Running a full smart reviewer for every action would be too expensive and slow, so the company trains small specialized models that are good at one thing: deciding when an action deserves deeper inspection. Bar Kogan compares it to fast chess intuition: most moves are handled quickly, but the system spends heavy intelligence when a position looks risky.

Onyx 的技术答案是用 agent 监督 agent，但要加成本控制层。为每个动作运行一个完整的强 reviewer 会太贵、太慢，所以公司训练小型专用模型，只做好一件事：判断某个动作是否值得更深检查。Bar Kogan 把它类比为快棋直觉：大多数 move 可以快速处理，但当局面看起来危险时，系统才投入更重的智能。

The conversation also connects agent security to the falling cost of vulnerability discovery. Bar Kogan says the market is not overreacting to Mythos-level security models; security teams should assume those capabilities are coming and invest in foundational controls for the AI attack surface. He also argues that independent oversight vendors have a structural role because enterprises may not want model labs to receive historical agent behavior data, and because future companies will use many model vendors rather than one lab's stack.

访谈还把 agent security 和漏洞发现成本骤降联系起来。Bar Kogan 认为市场对 Mythos 级安全模型并没有过度反应；安全团队应假设这些能力一定会到来，并为 AI attack surface 投资基础控制。他还认为独立监督厂商有结构性角色，因为企业未必愿意把历史 agent 行为数据交给模型实验室，而且未来公司会同时使用多个模型供应商，而不是只用一个实验室的 stack。

Link: https://www.youtube.com/watch?v=QDsbFLEt9ro

## Blog

No blog posts were present in today's validated feed. The section is included for structure, but there are no blog summaries today.

今天通过验证的 feed 中没有 blog post。本节保留用于结构完整性，但今天没有 blog 摘要。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders

