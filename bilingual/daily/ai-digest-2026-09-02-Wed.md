[English](../../en/daily/ai-digest-2026-09-02-Wed.md) | [中文](../../zh/daily/ai-digest-2026-09-02-Wed.md) | [Bilingual](./ai-digest-2026-09-02-Wed.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. Anthropic ships Fable 5.1 everywhere.** The Claude account announced Claude Fable 5.1 is available across the product line today, with Claude Mythos 5.1, its model for cyberdefenders and life scientists, offered through trusted access programs. Anthropic says safeguards improved substantially: cybersecurity safeguards flag benign requests about 60% less often, and fallback rates on basic biology and medical questions fell around 85%. Claude Code's Boris Cherny adds that cache reads on Fable 5.1 dropped to $0.25 per million tokens from $1, cutting up to 38% off a typical Claude Code session, and notes the team is working to reduce "Claude-speak."

**1. Anthropic 正式发布 Fable 5.1。** Claude 官方账号宣布，Claude Fable 5.1 今天已在全产品线可用，面向网络安全防御者和生命科学家的 Claude Mythos 5.1 则通过可信访问项目提供。Anthropic 表示安全护栏也有明显改进：网络安全护栏对良性请求的误报减少约 60%，基础生物和医学问题的 fallback 率下降约 85%。Claude Code 的 Boris Cherny 补充说，Fable 5.1 的 cache read 从每百万 token 1 美元降至 0.25 美元，典型 Claude Code 会话最多便宜 38%，团队也正在努力减少「Claude-speak」。

**2. Enterprise testing of Fable 5.1 shows sharp gains.** Box CEO Aaron Levie reports that Fable 5.1 jumped 7 percentage points over Fable 5 on Box's complex enterprise work eval for unstructured data tasks, with wins including +17% in financial services and +37% on a technology cost-optimization analysis. Anthropic's Cat Wu says the model let her team take on projects that would previously have taken months, while Thariq says lower-effort settings work well for tasks needing less verification, and switching effort no longer breaks prompt cache.

**2. Fable 5.1 的企业实测提升明显。** Box CEO Aaron Levie 报告，在企业复杂工作评估中，Fable 5.1 在非结构化数据任务上比 Fable 5 高出 7 个百分点，其中金融服务场景提升 17%、一项技术成本优化分析提升 37%。Anthropic 的 Cat Wu 表示，这个模型让她的团队敢于接手以往需要数月才能完成的项目；Thariq 则认为，在需要较少验证或边界情况较少的任务上可以调低 effort，而且切换 effort 不再破坏 prompt cache。

**3. Builders push past raw capability toward less annoying agents.** Nan Yu, joining OpenAI's product staff after leading product at Linear, argues there is real alpha in making agents less annoying, since users need to stop rage-quitting to reach value, and sees an opening for UX designers to become conversation and rhetoric designers. Peter Yang shares his rule of keeping only a dozen or so lean AI skills and deleting unused ones, and recommends Claude Code's prompt-audit to strip redundant rules as skills drift.

**3. 建设者开始追求「更不烦人」的 agent。** 即将加入 OpenAI 产品团队、此前担任 Linear 产品负责人的 Nan Yu 认为，让 agent 更不烦人蕴含巨大机会，因为用户必须先停止「气得摔门而去」才能接触到价值；他还看到 UX 设计师转型为对话与修辞设计师的机会。Peter Yang 分享了自己的原则：只保留十几个精简的 AI skills 并定期删除不用的，同时推荐用 Claude Code 的 prompt-audit 清理过时规则，防止 skill 逐渐漂移。

**4. The self-improving product becomes a company pattern.** Meta's Madhu Guru argues self-improving products are a meta idea every company should implement, and lays out the core pieces: crisp metrics, an articulated strategy, a knowledge base of past decisions, connections to internal systems, and a harness built around the product development flow. He separately credits Shopify's ML team as world-class and urges more enterprises to build their own post-training systems, evals, and data flywheels.

**4. 自我改进产品正在成为公司级模式。** Meta 的 Madhu Guru 认为，自我改进产品（self-improving products）是每家公司都该落地的元理念，并列出了核心要素：清晰的指标定义、明确的战略、过往产品决策的知识库、与内部系统的连接，以及围绕端到端产品开发流程构建的 harness。他另外称赞 Shopify 的 ML 团队是世界级的，并呼吁更多企业自建 post-training 系统、评估体系与数据飞轮。

**5. AI's next battlegrounds: security, websites, and model rollout discipline.** OpenAI CEO Sam Altman says the company sprinted on safety over the summer, that Astra is done training and is a significant step forward in capability and alignment, and that OpenAI is pacing subsequent models to meet safety standards before launch. Aaron Levie argues AI for cyber is about to go vertical and that security will be a great field as AI helps triage multiplying threats, and Vercel CEO Guillermo Rauch previews a unified compute platform where agent-escape protections apply to builds, functions, and servers.

**5. AI 的下一个战场：安全、网站与发布节奏。** OpenAI CEO Sam Altman 表示，公司整个夏天都在冲刺安全优先级，Astra 已完成训练、在能力与对齐上都是一大步，但之后的模型会按需放慢节奏，以确保达到安全标准再发布。Aaron Levie 认为 AI 网络安全即将垂直爆发，安全行业会成为好去处；Vercel CEO Guillermo Rauch 则预告了一个统一计算平台，把防止 agent 逃逸的防护扩展到 builds、functions 和 servers。

## X / Twitter

### Boris Cherny: Claude Code, Anthropic

Boris Cherny of Claude Code at Anthropic rounds out the Fable 5.1 release notes: the model writes better with better tone, safeguards now intervene 85% less often on benign biology requests than with Fable 5, and Claude Code users should see around 60% fewer cyber interventions per session. He also flags lower prices for Enterprise, API, and SDK customers, with cache reads at $0.25 per million tokens versus $1 before, up to 38% cheaper for a typical Claude Code session.

Anthropic Claude Code 团队的 Boris Cherny 补全了 Fable 5.1 的发布细节：模型写作质量更好、语气更佳；与 Fable 5 相比，新的生物学安全护栏对良性请求的干预减少 85%，Claude Code 用户每会话的 cyber 干预约减少 60%。他还提到面向 Enterprise、API 和 SDK 客户的降价：cache read 从每百万 token 1 美元降至 0.25 美元，典型 Claude Code 会话最多便宜 38%。

- [Boris Cherny on Fable 5.1 writing and tone](https://x.com/bcherny/status/2094864064648536068)
- [Boris Cherny on Fable 5.1 safeguards](https://x.com/bcherny/status/2094864063478276288)
- [Boris Cherny on Fable 5.1 pricing](https://x.com/bcherny/status/2094864062186426373)

### Claude

The Claude account announces Claude Fable 5.1 is available everywhere today, while Claude Mythos 5.1, the model for cyberdefenders and life scientists, is available through trusted access programs. Safeguards also improved: cybersecurity safeguards flag benign requests about 60% less often, and fallback rates on basic biology and medical questions recently dropped around 85%. Separately, Anthropic is introducing Enterprise Frontier Safeguards (EFS), which give enterprise customers complete privacy, equivalent to zero data retention, while remaining state-of-the-art at preventing adversarial use; EFS rolls out in phases starting this fall.

Claude 官方账号宣布 Claude Fable 5.1 今天已在各处可用，面向网络安全防御者和生命科学家的 Claude Mythos 5.1 通过可信访问项目提供。安全护栏同样升级：网络安全护栏对良性请求的标记减少约 60%，基础生物与医学问题的 fallback 率近期下降约 85%。另外，Anthropic 还推出 Enterprise Frontier Safeguards（EFS），为企业客户提供与 zero data retention 同等的完全隐私，同时在阻止对抗性滥用方面保持最先进水平；EFS 将从今年秋季起分阶段上线。

- [Claude on Fable 5.1 and Mythos 5.1 availability](https://x.com/claudeai/status/2094848592812917122)
- [Claude on improved safeguards](https://x.com/claudeai/status/2094848591617483020)
- [Claude on Enterprise Frontier Safeguards](https://x.com/claudeai/status/2094848590245965931)

### Peter Yang

Peter Yang, who creates practical AI tutorials and interviews for busy people, argues for fewer, leaner skills: he keeps only about a dozen, mostly his own, regularly deletes skills he no longer uses, and keeps each as short as possible. He also flags a real problem with skill maintenance, where asking AI to update a skill after a successful run tends to overfit on one thread and make the skill drift over time. His practical tip for Fable 5.1 users is to run Claude Code's /claude-api prompt-audit on skills to strip redundancies and rules tuned for older models.

为忙碌人群制作实用 AI 教程与访谈的 Peter Yang 主张 skills 宜少而精：他只保留大约十几个（大多是自己写的），并定期删除不再使用的 skills，同时尽量把每个 skill 写得尽可能短。他还指出 skill 维护中的真实痛点：在一次成功运行后让 AI 更新 skill，容易让它在单一线程上过拟合，久而久之 skill 就会漂移。他给 Fable 5.1 用户的实用建议是，对自己的 skills 运行 Claude Code 的 /claude-api prompt-audit，清理为旧模型优化的冗余规则。

- [Peter Yang on keeping skills lean](https://x.com/petergyang/status/2094999358525821099)
- [Peter Yang on skill drift and overfitting](https://x.com/petergyang/status/2094995775952740795)
- [Peter Yang on prompt-audit for Fable 5.1](https://x.com/petergyang/status/2094987791566622971)

### Nan Yu: OpenAI product staff (prev. head of product at Linear)

Nan Yu, who is joining OpenAI's product staff after four years as head of product at Linear, argues there is a lot of alpha in making agents less annoying: users need to stop rage-quitting before they can get to value. He sees an untapped opportunity for UX designers to become conversation and rhetoric designers.

在 Linear 担任四年产品负责人后即将加入 OpenAI 产品团队的 Nan Yu 认为，让 agent「更不烦人」蕴含巨大机会：用户必须先停止 rage-quitting，才能接触到价值。他还看到 UX 设计师尚未被开发的机会，即转型为对话与修辞设计师。

- [Nan Yu on making agents less annoying](https://x.com/thenanyu/status/2094928205753040999)

### Madhu Guru: Senior Director of AI at Meta

Madhu Guru, Senior Director of AI at Meta, argues self-improving products are a meta idea every company should implement. He lists the core pieces: crisp definitions of primary, secondary, and guardrail metrics; an articulation of strategy and the metrics you want to move most; a knowledge base of past product decisions and principles; connections to internal systems such as dashboards, APIs, and MCPs; and a harness built around the end-to-end product development flow. He also points to the opportunity for enterprises that build their own post-training systems, evals, and data flywheels, saying he has worked with the Shopify ML team and that they are world class.

Meta 高级 AI 总监 Madhu Guru 认为，自我改进产品（self-improving products）是每家公司都该落地的元理念。他列出了核心要素：清晰定义 primary、secondary 和 guardrail 指标；阐明战略以及最想推动的指标；建立过往产品决策与原则的知识库；连接仪表盘、API、MCP 等内部系统；以及围绕端到端产品开发流程构建 harness。他还指出，企业自建 post-training 系统、评估体系与数据飞轮蕴含巨大机会，并说他与 Shopify 的 ML 团队合作过，他们是世界级的。

- [Madhu Guru on self-improving products](https://x.com/realmadhuguru/status/2094817857821704659)
- [Madhu Guru on enterprise post-training systems](https://x.com/realmadhuguru/status/2094973690576576675)

### Cat Wu: Claude Code and Cowork, Anthropic

Cat Wu, who works on Claude Code and Cowork at Anthropic, says that with Fable 5.1 her team has taken on more ambitious projects that would previously have taken months, and invites builders to put the model to work in Claude Code, Claude Cowork, and Claude Tag.

在 Anthropic 负责 Claude Code 与 Cowork 的 Cat Wu 表示，有了 Fable 5.1，她的团队开始接手以往需要数月才能完成的更大胆项目，并邀请大家在 Claude Code、Claude Cowork 和 Claude Tag 里让模型放手一试。

- [Cat Wu on ambitious Fable 5.1 projects](https://x.com/_catwu/status/2094933602228416603)

### Thariq: Claude Code, Anthropic

Thariq of Claude Code at Anthropic has spent a lot of time with Fable 5.1 and rates it a very good model, recommending it on lower-effort settings for tasks that need less verification or have fewer edge cases. He notes a practical detail: switching effort levels no longer breaks prompt cache.

Anthropic Claude Code 团队的 Thariq 花了很多时间深入测试 Fable 5.1，评价它是非常好的模型，并建议在需要较少验证、边界情况较少的任务上使用较低 effort。他还提到一个实用细节：切换 effort 不再破坏 prompt cache。

- [Thariq on Fable 5.1 hands-on](https://x.com/trq212/status/2094945951865520458)

### Guillermo Rauch: CEO of Vercel

Vercel CEO Guillermo Rauch announces Fable 5.1 is now on Vercel AI Gateway, so every model is available through one interface. In a separate thread, he makes the case for Fluid as the unification behind Vercel's build performance, sandbox reliability, and 30-minute function durations: shared Dockerfile, security perimeters, networking, and file systems across compute products. He imagines the same egress firewall features that prevent agent escapes in Sandbox applying to builds, functions, and servers, toward one global unified compute platform. He also welcomes a partnership supporting Tanner Linsley and the TanStack team, committing to high-quality support whether customers choose Next.js or TanStack.

Vercel CEO Guillermo Rauch 宣布 Fable 5.1 现已上线 Vercel AI Gateway，所有模型都可在一个界面调用。在另一条帖子中，他为 Fluid 站台，认为它是 Vercel Build 性能、Sandbox 可靠性与 30 分钟 Function 时长的统一底座：所有计算产品共享 Dockerfile、安全边界、网络与文件系统。他设想，Sandbox 中防止 agent 逃逸的 egress Firewall 功能也能应用到 builds、functions 和 servers，最终走向一个全球统一的计算平台。他还欢迎与 Tanner Linsley 及 TanStack 团队的合作，承诺无论客户选择 Next.js 还是 TanStack 都会提供高质量服务。

- [Guillermo Rauch on Fable 5.1 on AI Gateway](https://x.com/rauchg/status/2094867652573528074)
- [Guillermo Rauch on Fluid and unified compute](https://x.com/rauchg/status/2094831747037085978)
- [Guillermo Rauch on the TanStack partnership](https://x.com/rauchg/status/2094901483414372716)

### Alex Albert: Research, Anthropic

Alex Albert, who does research at Anthropic, is most excited about Enterprise Frontier Safeguards (EFS), the non-model feature that shipped with Fable 5.1. He explains that with traditional zero data retention there was no way to spot patterns in what agents do across sessions on internal systems, while EFS keeps a company's data in its own cloud and adds an automated monitoring layer that flags risky patterns. He calls it an observability and risk mitigation layer for agents that he expects will become a standard enterprise requirement. He also shares a demo of Fable 5.1 generating videos through code: given a picture of a property lot, it designed a house, rendered it, and produced a cinematic walkthrough.

在 Anthropic 从事研究的 Alex Albert 对随 Fable 5.1 发布的非模型功能 Enterprise Frontier Safeguards（EFS）最为兴奋。他解释，传统 zero data retention 无法发现 agent 在内部系统的多次会话之间留下的行为模式，而 EFS 让企业数据留在自己的云中，并增加一个自动监控层来标记风险模式。他称之为面向 agent 的 observability 与风险缓解层，并预测它会成为企业运行越来越强大的 AI 时的标准要求。他还分享了一个演示：Fable 5.1 通过代码生成视频，他给出一张地块照片，模型便设计了一栋房子、完成渲染并生成了电影感的漫游视频。

- [Alex Albert on Enterprise Frontier Safeguards](https://x.com/alexalbert__/status/2094889286990446769)
- [Alex Albert on code-generated video with Fable 5.1](https://x.com/alexalbert__/status/2094860187743986169)

### Aaron Levie: CEO of Box

Box CEO Aaron Levie reports early-release testing of Fable 5.1 against Box's complex enterprise work eval, with a 7 percentage point jump over Fable 5 on unstructured data tasks. He cites wins including +17% on a tax-adjusted profit projection in financial services, +37% on a cost-optimization analysis where the model recognized an ambiguous normalization and computed both forms, and +16% on an educational data analysis task in the public sector, and says Fable 5.1 will be available shortly in Box AI Studio. Separately, he argues AI for cyber is about to go vertical: models are getting insanely good at finding and exploiting vulnerabilities, frontier models lead but open weights are not far behind, and triaging and automating fixes with more AI plus human oversight is essentially the only way forward. His punchline: it is going to be a great time to be in security.

Box CEO Aaron Levie 报告了对 Fable 5.1 的早期测试：在企业复杂工作评估中，它在非结构化数据任务上比 Fable 5 高出 7 个百分点，其中金融服务场景的税后利润预测提升 17%（模型正确地在计算税负前应用了资本减免）、技术场景的成本优化分析提升 37%（模型识别出归一化方式的歧义并同时计算两种口径）、公共部门的教育数据分析任务提升 16%。他表示 Fable 5.1 很快会在 Box AI Studio 中可用。他还认为 AI 网络安全即将垂直爆发：模型越来越擅长发现和利用漏洞，前沿模型领先，但开源权重模型也落后不远；对企业而言，用更多 AI 加人工监督来做分流和自动化修复几乎是唯一出路。他的结论是：安全行业一定会迎来好时候。

- [Aaron Levie on Box's Fable 5.1 eval results](https://x.com/levie/status/2094851976769257770)
- [Aaron Levie on AI for cyber going vertical](https://x.com/levie/status/2095024699441119612)

### Nikunj Kothari: Partner, FPV Ventures

Nikunj Kothari, a partner at FPV Ventures investing in seed and Series A, argues people are still sleeping on WebMCP, which lets agents call tools to interact with a website natively, including full UI/UX support and interactive elements. He shares a WebMCP challenge demo where an agent built its own views on an El Nino situation tracker, preserved human edits, and created a shareable link for other agents or humans, built with Codex and Railway and live at elneenyo.com.

投资种子轮与 A 轮的 FPV Ventures 合伙人 Nikunj Kothari 认为，人们仍然低估了 WebMCP：它可以让 agent 通过 tool call 原生地与网站交互，包括完整的 UI/UX 支持和交互元素。他分享了自己提交给 WebMCP challenge 的演示：agent 在 El Nino 态势追踪器上自行构建视图、保留人类编辑，并生成可分享链接给其他 agent（或人类），视频与代码由 Codex 与 Railway 制作，现已在 elneenyo.com 上线。

- [Nikunj Kothari on WebMCP for agents](https://x.com/nikunj/status/2094922789128196314)

### Sam Altman: CEO of OpenAI

OpenAI CEO Sam Altman says that over the summer the company has been sprinting on safety priorities, because it is more important than ever for capabilities and safeguards to advance together, and that OpenAI is going to launch its next model soon. He acknowledges the tension: Astra is very good and finished training a while ago, a significant step forward in both capabilities and alignment, but for the models after it OpenAI has been slowing things as needed to do sufficient safety and alignment work. He argues that managing the transition to a world with abundant and powerful AI should be one of the highest priorities in the world, and that the world will need aligned AI to manage future phases of the transition.

OpenAI CEO Sam Altman 表示，公司整个夏天都在冲刺安全优先级，因为能力与安全护栏同步前进比以往任何时候都重要，他们还即将发布下一个模型。他坦言其中的张力：Astra 非常好，且早已完成训练，在能力与对齐上都是一大步；但对于之后的模型，OpenAI 一直在按需放慢节奏，以确保完成足够的安全与对齐工作。他认为，管理好向一个 AI 充裕且强大的世界的过渡，理应成为世界上最高优先级的事之一，而世界将需要对齐的 AI 来管理过渡的后续阶段。

- [Sam Altman on safety, Astra, and the next model](https://x.com/sama/status/2094934592062959832)

## Podcast

### Training Data: Making Cities Awesome: Peregrine's Nick Noone & Ben Rudolph

The Takeaway: AI can make cities safer and more effective without becoming a surveillance panopticon, if the company building it treats data ownership and governance as the product rather than data collection.

核心要点：如果构建方把数据所有权与治理当作产品本身、而不是把数据收集当作产品，那么 AI 完全可以在不变成监视型全景监狱（surveillance state）的前提下，让城市更安全、更高效。

Peregrine is building AI that protects cities and communities while rejecting the surveillance state. Co-founders Nick Noone and Ben Rudolph came from opposite worlds: Noone ran Palantir's SOCOM unit and deployed into high-stakes intelligence operations in the Middle East, while Rudolph did refugee work at the Sudanese and Colombian borders with the UN Refugee Agency before building last-mile healthcare in rural India. Both landed on the same thesis: the foundation of an awesome city is safety, both objective safety and the feeling of being safe.

Peregrine 正在用 AI 保护城市与社区，同时拒绝监视型国家模式。两位联合创始人来自截然不同的世界：Nick Noone 曾执掌 Palantir 的 SOCOM 单元，在中东参与过高风险的情报行动；Ben Rudolph 则在苏丹与哥伦比亚边境为联合国难民署（UNHCR）做难民工作，之后又在印度农村搭建基层医疗方案。殊途同归的两人得出同一个论点：让城市变得很棒的基础是安全，既包括客观安全，也包括「感到安全」。

Peregrine inverts the data-collection business model of companies like Flock or Axon: it does not sell more sensors or hoard data, but joins the disparate information an agency already owns, on top of existing systems, with governance and permissioning so institutions can use what they have. "We're fundamentally in the business of joining disparate information to provide a more secure, properly governed solution," Noone says. Customers own their data, and Noone frames this as an anti-network-effect bet: protect the sanctity of each agency's data rather than aggregating it into a central panopticon.

Peregrine 把 Flock、Axon 这类公司的数据收集商业模式整个倒了过来：不卖更多传感器，也不囤积数据，而是把机构已有的零散信息串联起来，架设在既有系统之上，用治理与权限控制让机构真正用得起自己手里的数据。Noone 说：「We're fundamentally in the business of joining disparate information to provide a more secure, properly governed solution.」（我们本质上做的事情，是把零散的信息连接起来，提供更安全、治理得当的解决方案。）数据属于客户，不属于 Peregrine。Noone 把这称为一场「反网络效应」的赌注：保护每个机构数据的完整性与所有权，而不是把它们汇聚成一个中央全景监狱。

The results are concrete. A county in Florida that suddenly had to run over 100 water rescues in a month discovered that the storm patterns creating sand channels and rip currents had never before occurred for three consecutive days, turning a mystery into an actionable warning. A detective probing a threat against a synagogue used semantic search to find a pattern of prior antisemitic threats that keyword search would have missed. Peregrine's forward-deployed engineers own problems all the way to the outcome, which Noone says looks unscalable but is the best signal for what works: "the way that we maintain trust is not actually taking credit and shouting from the rooftops."

效果是具体的。佛罗里达州一个县一个月内突然要做超过 100 次水上救援，他们用这个平台发现：制造沙渠与离岸流的天气模式从未连续出现过三天，谜团由此变成了可行动的预警。一个调查犹太会堂所受威胁的探员，则用语义搜索找出了关键词搜索永远找不到的一连串历史反犹威胁。Peregrine 的前向部署工程师把问题一路负责到底。Noone 说，这看上去很不「可规模化」，却是检验什么真正有效的最佳信号：「the way that we maintain trust is not actually taking credit and shouting from the rooftops.」（我们维持信任的方式，恰恰是不去抢功、不高调宣扬。）

AI is also changing Peregrine's economics: around 90% of the code for its data integrations is now written by agents, with deployment teams supervising hours-long runs of orchestrator and sub-agents. Noone argues that dropping delivery costs by orders of magnitude is what earned small cities access to technology that once required eight-figure contracts, and he wants the endgame to be an institutional memory layer for 10,000 cities, each kept awesome in its own way.

AI 也在改变 Peregrine 的成本结构：如今约 90% 的数据集成代码由 agent 编写，部署团队监督长达数小时的主 agent 与子 agent 运行。Noone 认为，把交付成本降低几个数量级，才让那些历史上需要八位数合同的小城市也能用上这类技术。他的终局设想是成为 1 万座城市的「机构记忆层」，让每座城市都以自己独特的方式变得更棒。

Source: https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

## Blog

The validated blog feed contained no new qualifying items.

经过验证的博客 feed 中没有新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
