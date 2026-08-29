[English](../../en/daily/ai-digest-2026-08-29-Sat.md) | [中文](./ai-digest-2026-08-29-Sat.md) | [双语](../../bilingual/daily/ai-digest-2026-08-29-Sat.md)

---

# AI Builders Digest

## 导读

**1. OpenAI 停止通过 Cursor 提供模型访问。** OpenAI 的 Thibault Sottiaux 宣布，公司决定结束通过 Cursor 提供模型访问的合作，理由是「信任问题」，并已要求该变更于 11 月 12 日生效。用户仍然可以使用自己的 OpenAI API key 在 Cursor 中使用 GPT 模型，OpenAI 的 IDE 扩展也会继续提供访问。Anthropic 的 Thariq 表示他的团队很高兴继续与 Cursor 合作，而 Replit CEO Amjad Masad 则指出 OpenAI 模型可以在 Replit 上免费使用，并愿意资助企业迁移到独立的多模型替代方案。

**2. 数据成为企业的护城河。** 在 No Priors 播客中，Eon 联合创始人 Ofir Ehrlich 和 Gonen Stein 认为，模型和算力都在商品化，企业最值钱的资产其实是自己的数据；他们举例说，Google 花 1000 万美元从破产的 Spirit Airlines 手里买走的是数据，用来训练模型。在 agent 时代，威胁越来越多地来自拥有合法权限的非人类行为者，因此如何盘点、分类并控制数据成为新的核心问题。

**3. AI 产品玩法的保质期很短。** Meta AI 高级总监 Madhu Guru 说，AI 产品构建的 playbook 大约每三个月就会过时，AI 团队必须为「发明」而优化，而不是为「反复套用一套打法」而优化。Box CEO Aaron Levie 呼应了这个主题：从「RAG 已死」到「我们撞上了训练墙」，这些被广泛相信的判断每六个月就会轮回一次，保持思维灵活比坚持信念更重要。

**4. agent 产品形态的路线之争。** Peter Yang 认为 Claude Cowork 和 ChatGPT Work 都只是部分解，Grok Bot 才是面向非技术人群的成熟 AI agent 产品的正确终局。Vercel CEO Guillermo Rauch 看到 Web 正在分化为两个极端：极致的真人体验，以及面向 agent 的内容、数据和 API；中间地带会被 agent 实时生成的 UI 吞掉，「agent 就是新的浏览器」。

**5. 围绕 agent 的信任与安全成为焦点。** Zara Zhang 认为「slop」的定义不在于是否由 AI 生成，而在于内容是否来自具体、独特的人类经验与视角；她还提出疑问：在 Grok Bot 的虚拟电脑上登录自己真实的 X 账号，是否有被封禁或标记的风险。Anthropic 发布了 Claude Code 质量问题的复盘，解释了三个一度导致体验下降的变更，并深入介绍了 Managed Agents 如何让凭证与 sandbox 彻底隔离。

## X / Twitter

### Thibault Sottiaux（OpenAI，负责 Codex 与 ChatGPT）

Sottiaux 宣布，OpenAI 决定结束通过 Cursor 提供模型访问的合作，理由是「信任问题」，并已要求该变更于 11 月 12 日生效。用户仍然可以使用自己的 OpenAI API key 在 Cursor 中使用 GPT 模型，也可以通过 OpenAI 为 Cursor 提供的 IDE 扩展继续访问。他强调，OpenAI 会继续与最广泛的工具和 harness 生态合作，包括开源项目，也会继续投资自己的开源计划。他还提到博客文章会介绍更多决策细节。

- [Thibault Sottiaux 谈终止与 Cursor 的合作](https://x.com/thsottiaux/status/2093515916076343774)

### Thariq（Anthropic Claude Code 团队）

在 Anthropic 负责 Claude Code 的 Thariq 说，他一直很欣赏 Cursor 团队，很少有人比他们为 AI 编程的普及做了更多，并期待继续与他们合作。

- [Thariq 谈继续与 Cursor 合作](https://x.com/trq212/status/2093541555068182781)

### Amjad Masad（Replit CEO）

Masad 说，OpenAI 模型可以在 Replit 上免费使用，Replit 的路由器还能让高端模型变得极具成本效益。对于想要寻找独立、多模型替代方案的企业，他表示 Replit 愿意资助他们的迁移。

- [Amjad Masad 谈 Replit 上的 OpenAI 模型](https://x.com/amasad/status/2093533378880667787)

### Guillermo Rauch（Vercel CEO）

Rauch 认为 Web 正在向两个极端演化：一个是用 WebGL、three.js 和 TypeGPU 打造的极致真人体验；另一个是面向 agent 的内容、数据和 API，markdown 和 MCP 只是冰山一角。中间地带会被 agent 实时生成的 UI 取代：「在这个模型里，把 agent 想成新的浏览器。」他还说 MCP 正在爆发式增长，提到可以用 mcp-handler npm 包来实现 MCP server；同时推荐了 eve，说很少有方案能让你在 Git repo 里拥有完整的智能栈，包括 runtime、模型选择、skills、工具、连接和 sandbox。

- [Guillermo Rauch 谈 Web 的两个极端](https://x.com/rauchg/status/2093482695838007318)
- [Guillermo Rauch 谈 MCP 的增长](https://x.com/rauchg/status/2093463771071336497)
- [Guillermo Rauch 谈 eve](https://x.com/rauchg/status/2093387887668814214)

### Aaron Levie（Box CEO）

Levie 认为，AI 领域里被广泛相信的观点，平均保质期最多只有六个月。他列出了一串行业已经轮回过、目前也未必有共识的判断：开源落后太多追不上、实验室无法规模盈利、所有软件都会被 agent 取代、模型之上建不起护城河、更便宜的模型意味着更少的算力、不需要 evals、RAG 已死、AI 会摧毁工程岗位、prompting 未来不再重要、我们撞上了训练墙、前沿模型危险到不该发布。他的建议是保持思维灵活，因为我们正处在一个持续变化的环境里。

- [Aaron Levie 谈 AI 观点的保质期](https://x.com/levie/status/2093568352736436576)

### Madhu Guru（Meta AI 高级总监）

Guru 认为，AI 产品构建的 playbook 大约每三个月就会过时：传统产品团队天生是「发现一套打法然后吃五年」，而 AI 实验室会每隔几个月主动扔掉旧打法，因为收益递减。Builder 应该专注于定义一套元原则，包括如何持续了解市场现在和三个月后想要什么，以及如何以极致的紧迫感执行。他的结语是：「传统团队为反复套用打法而优化，AI 团队需要为发明而优化。」

- [Madhu Guru 谈 AI playbook 的保质期](https://x.com/realmadhuguru/status/2093562783627620456)

### Peter Yang（AI 教程与指南作者）

Yang 的激进观点是：Claude Cowork 和 ChatGPT Work 都只是部分解，Grok Bot 才是面向非技术人群的成熟 AI agent 产品的正确终局，因为人们很容易理解它是一个运行在云端的电脑。相比之下，他打赌大多数人说不清 ChatGPT Work 和 Codex 的区别，也说不清 Claude Cowork 到底是怎么工作的。

- [Peter Yang 谈 Grok Bot 是 agent 的终局](https://x.com/petergyang/status/2093379695144530313)

### Zara Zhang（Builder）

Zhang 认为，某个内容算不算「slop」，与其说取决于它是不是 AI 生成的，不如说取决于它是否来自具体、独特的人类经验和视角：「人类自己生产的 slop 也不少。」她还提问：如果在 Grok Bot 的虚拟电脑上登录自己真实的 X 账号，让它帮忙挑出时间线上有趣的推文、或者整理关注列表，会不会有账号被封禁或标记的风险？她坦言自己一直非常谨慎，不敢把 X 账号交给任何 agent。

- [Zara Zhang 谈 slop 与人类经验](https://x.com/zarazhangrui/status/2093396989329469505)
- [Zara Zhang 谈 Grok Bot 与账号风险](https://x.com/zarazhangrui/status/2093317719320064164)

### Nikunj Kothari（FPV Ventures 合伙人）

Kothari 给创始人的建议是：最好的 pitch 甚至不需要出现「AI」这个词，AI 也不能成为你 pitch 里唯一的「why now」。

- [Nikunj Kothari 谈 pitch 中的 AI](https://x.com/nikunj/status/2093367245024240043)

### Dan Shipper（Every CEO）

Shipper 的观点：「AI 里没有坏主意，只有不够强的模型。随着指数曲线继续，每个想法都会有自己的时代。」

- [Dan Shipper 谈想法与模型](https://x.com/danshipper/status/2093434101067808930)

### Aditya Agarwal（South Park Commons 合伙人）

Agarwal 以自己持有过 F1、OPT、CPT、H1-B 和 EB-3 绿卡的经历说，很多事情可以同时为真：H1-B 体系存在滥用，应该坚决制止；美国对真正的高技能人才留下来又设置了太多障碍；尤其是高技能印度人才更难；而任何国家的法律都应该优先考虑本国公民。

- [Aditya Agarwal 谈 H1-B 与高技能移民](https://x.com/adityaag/status/2093468512459321512)

## Podcast

### No Priors：与 Eon 联合创始人 Ofir Ehrlich 和 Gonen Stein 重新思考传统数据基础设施

核心要点：在 AI 时代，企业的数据是唯一持久的护城河，模型和算力都在商品化，而新的安全前沿是如何保护这些数据不被拥有合法权限的 agent 破坏。

Ofir Ehrlich 和 Gonen Stein 是 Eon 的联合创始人，Eon 是一家面向 AI 时代的云端备份与灾难恢复服务公司（他们之前创办的 CloudEndure 被 AWS 收购）。他们认为，模型和算力的切换成本几乎为零，数据才是企业真正拥有的东西。他们的证据是：Google 最近花了 1000 万美元从破产的 Spirit Airlines 手里买下数据，而不是飞机，用来训练模型；各大实验室也在找对冲基金，想买那些积累多年、曾经躺在磁带上的数据。「他们买的不是飞机，是数据。」

另一面是全新的威胁模型。过去的安全威胁来自人类攻击者，现在拥有合法凭证和权限的 agent 正在企业环境内部活动，而且速度极快。他们遇到的每个企业负责人要么害怕这种事发生，要么已经亲身经历过，所以企业必须假设会被攻破，并能够对数据进行细粒度的盘点、分类和恢复。与此同时，组织里每个人都可能成为 builder，包括那些不懂安全合规、随手把公司数据放进各种工具的非技术员工，这就形成了一批游离在规则之外、却手握敏感数据的角色。正因如此，他们认为仪表盘不会消失，反而会更多；non-human identity（NHI）安全也由此成为最热门的赛道之一。

旧的数据栈是为单一目的任务设计的。agent 产生的数据正在爆炸式增长，价值与噪音混杂，Eon 的判断是：胜出的基础设施要能跨云盘点并分类数据、持续接入，然后在保持控制的前提下把数据交给 AI 工作流。

Source: https://www.youtube.com/@NoPriorsPodcast

## Blog

### Anthropic Engineering：关于近期 Claude Code 质量报告的更新

Anthropic 将部分用户反馈的「Claude 变笨了」追溯到三个影响 Claude Code、Claude Agent SDK 和 Claude Cowork 的变更，API 未受影响，三个问题都已在 4 月 20 日（v2.1.116）解决。3 月 4 日，默认 reasoning effort 从 high 降为 medium 以减少延迟，Anthropic 承认这是错误的取舍，并在用户反馈后于 4 月 7 日回滚，现在 Opus 4.7 默认 xhigh，其他模型默认 high。3 月 26 日的一个缓存优化本意是清理空闲会话中的旧思考内容，却因 bug 变成了每一轮都清理，导致 Claude 显得健忘、重复，缓存 miss 还加速消耗用量额度，该问题于 4 月 10 日修复。4 月 16 日随 Opus 4.7 上线的一条 system prompt 指令（要求工具调用之间的文本不超过 25 词）损害了代码质量，4 月 20 日被回滚，一次消融实验显示 Opus 4.6 和 4.7 各下降 3%。Anthropic 写道：「我们从未故意让模型变差」，并从 4 月 23 日起重置所有订阅用户的用量额度，未来每次 system prompt 变更都会跑全模型 evals，并引入观察期和逐步放量。

- [Anthropic Engineering：关于近期 Claude Code 质量报告的更新](https://www.anthropic.com/engineering/april-23-postmortem)

### Anthropic Engineering：扩展 Managed Agents：把大脑与双手解耦

Anthropic 的 Managed Agents 是 Claude Platform 上的一项托管服务，面向长周期 agent，基于三个虚拟化接口构建：session（只追加的事件日志）、harness（调用 Claude 并路由工具调用的循环）和 sandbox（Claude 运行代码的环境），三者可以各自替换而不影响其他部分。把「大脑」与「双手」解耦后，容器变成了 cattle：harness 通过 execute(name, input) → string 把容器当作工具调用，只有需要时才创建，这让 p50 的首 token 延迟（TTFT）下降约 60%，p95 下降超过 90%。这套架构还把凭证挡在 sandbox 之外：Git token 在初始化时写入本地 remote，OAuth token 存放在 vault 里，通过 MCP proxy 取用，模型生成的代码永远碰不到凭证。session 充当 Claude 上下文窗口之外持久化的上下文对象，让大脑可以按位置读取事件流片段。「我们面对的是一个老问题：如何为一个『还没被想出来的程序』设计系统。」本文作者为 Lance Martin、Gabe Cemaj 和 Michael Cohen。

- [Anthropic Engineering：扩展 Managed Agents](https://www.anthropic.com/engineering/managed-agents)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
