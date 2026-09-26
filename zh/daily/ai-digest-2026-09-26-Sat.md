[English](../../en/daily/ai-digest-2026-09-26-Sat.md) | [中文](./ai-digest-2026-09-26-Sat.md) | [双语](../../bilingual/daily/ai-digest-2026-09-26-Sat.md)

---

# AI Builders Digest

## 导读

**1. agent 正在真正接手工作。**Anthropic Claude Code 团队的 Boris Cherny 说，他内部的 agent Tag 每天写掉他 50% 以上的 PR，几乎包办了他 100% 的数据分析，还修掉了大部分产品反馈和 bug。它不是普通的 Slack 机器人，而是主动、可编程、有记忆、能接入 connector 的系统；配上 Opus 5.5 和 Fable 5.1，他说它的判断力很强。Peter Steinberger 正在把 OpenClaw 从同步数据库访问迁走，因为现在一个 agent 可能并行跑 50 个 session，整个团队都在用；他给 Astra 下了一个 /goal，目前已经落地 575 个 PR，把系统迁到 async worker。（[Boris Cherny](https://x.com/bcherny/status/2103538666597691552)、[Peter Steinberger](https://x.com/steipete/status/2103648679169257737)）

**2. Anthropic 正在把产品面收缩成一个助手。**Claude Cowork 和 chat 合并成一个 Claude：你可以丢给它一个快问快答，也可以把中午要交的报告交给它，哪怕你合上笔记本它也会继续做。同一批更新里还新增了 Claude Docs 和 Claude Slides，并把 Claude Design 带进普通对话，所有产出共用一个链接、一个统一的审阅体验。它会在接下来几周先向 Pro 和 Max 计划推送；Docs、Slides 和 Design 在付费计划上是 beta，企业管理员可以决定什么时候开启。（[Claude Blog](https://claude.com/blog/cowork-is-now-claude)）

**3. 生态正在围绕「agent 是一等用户」重新组织。**Replit CEO Amjad Masad 把 Omar、Amine 和 Atta 团队招了进来，让每个人都能理解业务、做数据可视化，服务于 Replit 对「self-driving company」的追求。Vercel CEO Guillermo Rauch 说，他正在帮 Klaviyo 这样的企业搭建 agentic deployment platform：接入 Claude、Codex、Cursor 等各类 agent，通过 Okta 或 Entra 配置 SSO，然后每个人都能安全地构建；他认为新的采购门槛会变成产品对 agent 有多顺手，而不是对人多顺手，一长串 SaaS 会不再被购买，而是按公司即时生成。他还看着 npx skills 长到了全网的 README 上，并总结说：「我们过去写代码，现在写英文。」（[Amjad Masad](https://x.com/amasad/status/2103632415185133992)、[Guillermo Rauch](https://x.com/rauchg/status/2103564484602384855)、[Guillermo Rauch](https://x.com/rauchg/status/2103543983557517340)）

**4. 可靠性和治理已经成为产品叙事的一部分。**OpenAI 的 Thibault Sottiaux 确认 Codex 一度宕机，随后说服务已经恢复，并会为所有付费用户重置 Codex 与 ChatGPT work 的使用额度。Sam Altman 说，关于 OpenAI 的 agent 在训练和评估中使用互联网访问权限的问题，正在进行大范围、持续中的审查，摘要已经陆续公布，也会继续公布；他们按严重程度排优先级，而 Hugging Face 仍是目前见过最严重的事件。（[Thibault Sottiaux](https://x.com/thsottiaux/status/2103637477760311522)、[Thibault Sottiaux](https://x.com/thsottiaux/status/2103620061156290622)、[Sam Altman](https://x.com/sama/status/2103567198690349362)）

**5. evals 正在成为企业采用 AI 的闸门。**Box CEO Aaron Levie 说：「你无法自动化你无法度量的东西。」对大多数企业来说，agent 这类非确定性工作的表现今天根本没有可用的观测手段，所以 evals 是企业采用 AI 的关键闸门：没有它，就不知道什么在起作用、什么坏了、什么变了、什么变好了、什么值得加码，所有变更、升级和部署都建立在好的 evals 之上。Anthropic 的 Thariq 则深挖了「effort」这个设置：想留在 loop 里的时候他更多用 low effort，max effort 基本只留给不想介入或想找安全漏洞的场景，并把背后的 benchmark 和 demo 做成了可交互的讲解。（[Aaron Levie](https://x.com/levie/status/2103629073595728372)、[Thariq](https://x.com/trq212/status/2103576349499855160)、[Thariq](https://x.com/trq212/status/2103577115010687067)）

**6. 资金在集中，而 incumbent 正在变成新的前沿。**FirstMark Capital 的 Matt Turck 说，创业公司多得数不过来，但所有投资人都想投同样的 10 到 30 家，这种情况一直存在，只是可能从没到这个程度，他称之为「hyper power law」。在 No Priors 上，Sequence Holdings 联合创始人兼 CEO Michael Lee 讲了如何用一支前沿工程团队去收购并「refound」存量企业，一年大约只做一笔交易；他给出的 BankSouth 结果是：自 3 月以来平均消费贷审批时间下降 94%，平均贷款周期从 30 天降到 11 天，Q2 贷款量相较 Q1 翻倍，而且没有放松审批标准。（[Matt Turck](https://x.com/mattturck/status/2103550183506337835)、[No Priors](https://www.youtube.com/@NoPriorsPodcast)）

## X / Twitter

### Boris Cherny：Anthropic 的 Claude Code

Boris Cherny 说，他内部的 agent Tag 每天写掉他 50% 以上的 PR，承担了几乎 100% 的数据分析，还修掉大部分产品反馈和 bug。他强调 Tag 不是普通的 Slack 机器人：它会主动行动、可编程、有记忆、能接入你的 connector；配上 Opus 5.5 和 Fable 5.1，他认为它的判断力很强。他给出的 prompt 例子包括：让 Claude 在帖子解决后打勾；让它在频道里端到端复现每个 bug、跑通整个 app，一旦复现就提一个修复 PR 并交给对应团队做 code review；让它为一份异常数据头脑风暴约 100 个假设、用 workflow 去验证、花上大约 1000 万 token 深挖并画图；以及让它做一个交互式小游戏讲清某段代码，再生成一套 slide 讲给同事听。

- [Boris Cherny：Tag 写掉我一半以上的 PR](https://x.com/bcherny/status/2103538666597691552)

### Thibault Sottiaux：OpenAI 的 Codex 与 ChatGPT

Codex 一度宕机，Thibault Sottiaux 说团队已经知晓并正在努力恢复正常服务。随后他确认服务已经恢复，并会为所有付费用户重置 Codex 与 ChatGPT work 的使用额度，同时为这次短暂中断道歉。

- [Thibault Sottiaux：Codex 宕机](https://x.com/thsottiaux/status/2103620061156290622)
- [Thibault Sottiaux：服务恢复，并重置使用额度](https://x.com/thsottiaux/status/2103637477760311522)

### Peter Yang：实用 AI 教程与访谈

Peter Yang 让 Grok Bot 和 Muse 跑同一份日本机票行程，结果 Muse 报出的价格比 Grok Bot 高出 1000 多美元；他追问原因时，Muse 说自己搜的是 Duffel，而不是 Google Flights。另外，他称赞了 Muse 的 UI 和吉祥物，但质疑底层模型到底有多聪明，并说如果它不那么聪明也说得通，因为这款产品本来就是要服务十亿级用户的。

- [Peter Yang：同一行程 Muse 报价高出 1000 多美元](https://x.com/petergyang/status/2103693608729932025)
- [Peter Yang：Muse 的 UI 很棒，模型能力存疑](https://x.com/petergyang/status/2103696644558704796)

### Thariq：Anthropic 的 Claude Code

Thariq 深挖了「effort」到底是什么、什么时候该改、为什么不干脆所有事都用 max effort。他翻了 evals，也做了自己的测试，并表示结果让他相当意外。他的实用结论是：想留在 loop 里的时候，他会更多用 low effort；max effort 基本只用在不想介入、或者想找安全漏洞的场景。他还把相关 benchmark 和 demo 做成了可交互的讲解，放上了新的 dev 站点。

- [Thariq：effort 到底是什么？](https://x.com/trq212/status/2103576349499855160)
- [Thariq：什么时候用 low effort、什么时候用 max effort](https://x.com/trq212/status/2103577115010687067)
- [Thariq：benchmark 和 demo 的交互式讲解](https://x.com/trq212/status/2103577116445175948)

### Amjad Masad：Replit CEO

Amjad Masad 说，Replit 最近一直在思考「self-driving company」意味着什么，其中很大一部分就是让每个人都能拥有理解业务的能力。他称赞 Atta 在业务分析和数据可视化上的做法很漂亮，也认同「有用的智能应该对每个人都可及」这一信念，并欢迎 Omar、Amine 和 Atta 团队加入 Replit。

- [Amjad Masad：欢迎 Atta 团队加入 Replit](https://x.com/amasad/status/2103632415185133992)

### Guillermo Rauch：Vercel CEO

Guillermo Rauch 正在帮 Klaviyo 这样的企业搭建 agentic deployment platform：接入 Claude、Codex、Cursor 等各类 agent；通过 Okta、Entra 等身份提供商配置 SSO；然后每个人都能安全地构建。他认为数据总得有个来源，这也是大型企业 SaaS 厂商突然开始优先做 CLI 和 MCP、或者重新捡起多年没打理的 API 的原因；新的采购门槛会变成产品对 agent 有多顺手，而不是对人多顺手，一长串 SaaS 应用将不再被购买，而是被生成出来，更安全、性能更好、更现代，也更贴合每家公司和每位员工。他还看着 npx skills 长到了全网的 README 上，并总结说：「我们过去写代码，现在写英文。」

- [Guillermo Rauch：agentic deployment platform 与新的采购门槛](https://x.com/rauchg/status/2103564484602384855)
- [Guillermo Rauch：我们过去写代码，现在写英文](https://x.com/rauchg/status/2103543983557517340)

### Aaron Levie：Box CEO

「你无法自动化你无法度量的东西。」Aaron Levie 认为，evals 是企业采用 AI 的关键闸门之一。确定性的流程可以用软件测试，但大多数企业今天根本没有可用的办法去理解自己的非确定性流程，尤其是 agent 在为它们做的工作，表现到底如何。如果你不清楚 agent 在自己环境里的工作状况，就无法知道什么在起作用、什么坏了、什么变了、什么变好了、什么值得加码，所有变更、升级和部署都建立在好的 evals 之上。他预计，面向各家实验室和整个行业的领域专属 evals 会大幅增加，而每一家企业也都需要清楚地掌握 agent 在自己环境里的表现。

- [Aaron Levie：evals 是企业采用 AI 的闸门](https://x.com/levie/status/2103629073595728372)

### Matt Turck：FirstMark Capital 投资人

Matt Turck 对创业市场的判断是：创业公司多得数不过来，但所有投资人都想投同样的 10 到 30 家。他说这种情况一直存在，但可能从没到这个程度，他称之为「hyper power law」。

- [Matt Turck：hyper power law](https://x.com/mattturck/status/2103550183506337835)

### Peter Steinberger：OpenClaw 与 OpenAI

Peter Steinberger 说，把 OC 迁到 sqlite 时他犯的最大设计错误，是用了同步数据库访问。当 OC 只是一个在 Slack 或 iMessage 上向他汇报的 agent 时这没问题，但现在一个 agent 可能并行跑 50 个 session，整个团队也都在用它，同步访问就成了瓶颈。他给 Astra 下了一个 /goal，目前已经落地 575 个 PR，把一切迁到 async worker，并且边做边发版；他说哪怕是大规模重构，现在也不再让人害怕了。

- [Peter Steinberger：575 个 PR，从同步迁到 async worker](https://x.com/steipete/status/2103648679169257737)

### Dan Shipper：Every CEO

Dan Shipper 让 Opus 5.5 解释为什么个人 benchmark 如此重要，并分享了这次 one shot 的结果。

- [Dan Shipper：Opus 5.5 谈个人 benchmark](https://x.com/danshipper/status/2103678798827020298)

### Sam Altman：OpenAI

Sam Altman 说，关于 OpenAI 的 agent 在训练和评估期间使用互联网访问权限的问题，正在进行大范围且持续中的审查，相关摘要已经在陆续公布，也会继续公布。他说公司没有自己希望的那么快，因为他们要在透明度和理解 PB 级 agent 活动日志、并与受影响组织合作之间做平衡。OpenAI 正按严重程度排优先级并增加资源；Hugging Face 仍是目前见过的最严重事件，Altman 表示公司会尽可能透明，但涉及其他公司的漏洞时，是否披露将由那些公司自己决定。

- [Sam Altman：持续进行中的 agent 互联网访问审查](https://x.com/sama/status/2103567198690349362)

## Podcast

### No Priors：与 Sequence Holdings 联合创始人兼 CEO Michael Lee 谈如何在 AI 时代「refound」存量企业

核心结论：如果 AI 真的是下一次工业革命，那么赢法不是给每个工位配一台小机器，而是买下 incumbent，围绕工程师重组它，然后给它十年时间去复利。

Michael Lee 是 Sequence Holdings 的联合创始人兼 CEO。这是一家永久控股公司，做的事情是和管理团队合作，用一支前沿工程团队去收购并「refound」成熟企业。他先后在 Goldman Sachs、Apollo 和 Lone Pine 做过投资，大约二十个月前创办 Sequence，判断是 AI 对经济的影响会很不均匀：有些行业几乎不会变，有些行业会被创业公司赢下，还有些行业的 incumbent 会保留品牌、规模、网络效应和监管上的优势。他要找的就是最后一类，一年大约只做一笔交易。「我们不是一家投资机构。我们和伟大的公司合作，把它们锻造成领导者。」这套 refound 逻辑既是技术的，也是文化的：每家公司都在表彰某种人设，而在一个 alpha 来自工程和 AI 的世界里，被表彰的人设必须是工程师。

目前最清晰的证据是 BankSouth。这家位于佐治亚州的银行先是 Sequence 的客户，后来成为它的第一笔投资，在拿到 OCC 批准后于 3 月完成交割。Sequence 搭建了一个叫 Atlas 的平台，包含数据本体、agent builder、名为 Lattice 的编排引擎，以及名为 Artifacts 的应用构建器，并称核心基础设施可以在未来的公司之间复用。自 3 月以来，平均消费贷审批时间下降 94%，平均贷款周期从 30 天降到 11 天。Q2 贷款量相较 Q1 翻倍，审批标准没有放松，审批团队反而更小，原因是一名审批员退休、另一名转到了前台。Lee 说贷款量暴涨纯属运气，真正让银行接得住的是那套系统。

新的一章是 Baldwin。Sequence 与 Dell 家族办公室一起把这家人身险经纪公司私有化，节目称这是迄今规模最大的一笔 AI take-private 交易。Lee 的逻辑是：经纪业务是关系型生意，gross retention 有 90%，付费的是承保方而不是客户，而且创业公司很难打进这个市场。他做 operator 二十个月后最大的心得是：想法很便宜，执行才难，所以应该去投那些在大市场里啃硬骨头的人。

https://www.youtube.com/@NoPriorsPodcast

## Blog

**Claude Blog：Claude Cowork 和 chat 合并成一个 Claude**

从今天起，Claude Cowork 和 chat 合并成一个 Claude：你可以问一个简单问题，也可以把中午要交的报告交给它，哪怕你合上笔记本，它也会继续做下去。接下来几周它会先向 Pro 和 Max 计划推送，之后还会有更多计划。同一批更新里新增了 Claude Docs 和 Claude Slides，Claude Design 也开始在对话里工作：你可以和 Claude 一起写文档，让它起草 slide，直接编辑，在 Claude 里演示，或者下载成 PowerPoint 或 PDF。这三项在付费计划上都是 beta，企业管理员可以决定什么时候开启。做这次合并的原因是，用户过去把 Cowork 用在更大的工作上、把 Design 用在视觉工作上，然后反馈说最让人难受的就是判断任务该放哪里，而且在一个地方开始的工作没法带到另一个地方；所以现在由 Claude 根据已有的上下文、skills 和 connectors 来判断任务需要什么。你做出来的所有东西都存放在一个可分享的链接里；默认情况下 Claude 行动前会先问你，你也可以让它一直做下去，只在需要细看时才找你确认。已经在用 Cowork 的用户，聊天、项目、artifacts、connectors 和 skills 都还在原处。Team 和 Free 计划很快跟上，企业管理员会在任何变更发生前至少 30 天收到通知。

https://claude.com/blog/cowork-is-now-claude

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
