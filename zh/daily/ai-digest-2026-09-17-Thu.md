[English](../../en/daily/ai-digest-2026-09-17-Thu.md) | [中文](./ai-digest-2026-09-17-Thu.md) | [双语](../../bilingual/daily/ai-digest-2026-09-17-Thu.md)

---

# AI Builders Digest

## 导读

**1. Claude Cowork 与 chat 合并为一个 Claude，Docs、Slides、Design 也进入对话。** Anthropic 在 9 月 16 日发布这次整合。在 Anthropic 做 Claude Code 的 Boris Cherny 把它看作两次验证之后的下一步：Claude Code 证明 AI 能真正干活，而不只是回答问题；Cowork 证明知识工作者可以把 brief 交出去，再回来收文件。新的方向是一个 Claude，把你正在做的所有事情都带在同一个 context 里。Cat Wu 说，推动这次变化的是用户反馈，因为大家不想为每个任务挑产品，现在 Claude 会自己判断是给一个快速回答，还是做更深的 agentic work。最终决定权仍在用户手里，你随时可以叫停、改变方向，或者调整 Claude 投入的力度。

**2. 新的产出物是文档、演示稿和设计稿，并且可以从任何对话里拿到。** Claude Docs、Claude Slides 和 Claude Design 已在付费方案上进入 beta，并直接出现在对话里，所以一份 one-pager 可以变成一套演示稿，再配上一张风格一致的视觉稿，全程不用切换工具。Anthropic 研究员 Alex Albert 说，合并后的 UX 比单独的 chat 或 Cowork 好很多。Claude 官方账号补充说，Cowork 用户的 chats、projects、artifacts、connectors 和 skills 都留在原处。Claude Blog 举的例子是一份中午要交的周报：出门前把 brief 交出去，路上用手机看进度，回到工位时文档和 slides 已经互相匹配。首发从 Pro 和 Max 开始，Team 和 Free 随后跟进。

**3. OpenAI 暗示本周的发布推迟，并预告了一个叫 Astra 的模型。** OpenAI CEO Sam Altman 对关注者说，「这周我最期待发布的东西会放到下周，不过我觉得值得等」。在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 用四个勾来预告 Astra：快、前沿、高效、面向所有人。两条帖子都没有给出发布时间或 benchmark，但一起定下了下一轮 OpenAI 发布的预期。

**4. Agent 脚下的工具层仍在变化：用便宜模型做安全审查，工具按需要来设计。** Vercel CEO Guillermo Rauch 说，fx 的默认模式现在是 auto，会有一个 safety reviewer 分析每一条命令。这个 reviewer 目前跑在 GPT Luna 上，他说这让 Jev 在 p95 上快了最多 18 倍，而且更准；它即将进入 Vercel AI Gateway，很可能成为新的默认。Anthropic 的 Thariq 则修正了自己过去的建议：如果目标只是可靠的 tool calling，bash 已经不再是全部答案；sandboxes 加 bash 依然适合涉及代码生成与执行的工作；工具应该按你想要的样子来设计，而不是靠一层间接层去绕。他说 Claude Managed Agents 的平衡点找得不错，因为 sandbox 是可选的。

**5. 企业端的机会，是又快又便宜的判断力，以及把安全当成功能。** Box CEO Aaron Levie 写道，还有一整片「AI 创新的宇宙」根本不在大多数人的雷达上，而能以极低成本、极快速度处理信息，对企业任务来说是巨大的机会。数据分类、工作流内部的路由决策、针对某个领域问题做判断、以及对安全或风险做快速评估，都是大量流程里的关口，因此很适合用 agentic workflow 来承接。Meta 的 AI 高级总监 Madhu Guru 则把设计原则说得很直接：安全和保障应该是 AI 产品和模型的功能，而不是从外部强加给你的 guardrail。

**6. Builders 正在用自己的工作流投票，而且并不总是投给 Claude。** Builder Zara Zhang 说她最近用 Claude 变少了，因为它说话的方式让人受不了，总是在展示自己多聪明、多高级，而不是把观点讲清楚。FPV Ventures 合伙人 Nikunj Kothari 花了几个月打磨一个基于 Nous Research 的「Home」agent，他和妻子每天都会用，是他们的第一个共享 bot；他说用 Grok Bot 之类的工具复现不出这种细粒度控制。实用 AI 内容作者 Peter Yang 用 8 个可复用的 AI skills 完成整档播客，他认为 skills 仍然重要，因为它们把他的剪辑和浏览器操作指令固化了下来。Y Combinator 总裁兼 CEO Garry Tan 说，他可以用任意 harness，得到的是同一个 personal AGI 的完整人格和记忆；SPC 普通合伙人 Aditya Agarwal 则写道，好想法很少诞生于孤立之中。

## X / Twitter

### Boris Cherny: Anthropic 的 Claude Code

在 Anthropic 做 Claude Code 的 Boris Cherny 把 Cowork 与 chat 的合并，看作两次验证之后的下一步：Claude Code 证明 AI 能真正干活，而不只是回答问题；Cowork 证明知识工作者可以把 brief 交出去，回来时收到完成好的文件。他写道，新的方向是一个 Claude，把你正在做的所有事情都带进同一个 context，简单到每个人都能用上 Claude 的完整能力。他已经每天使用这套新体验好几周，觉得更简单、更快、也更强，发布节奏会放慢，以保证快速和稳定。他还强调，Claude Docs、Claude Slides 和 Claude Design 现在都在每一个对话里，想要一份演示稿，就能拿到可以打开、编辑并导出为 PowerPoint 或 PDF 的成品，不需要再跳转到单独的工具。

- [Boris Cherny：chat 与 Cowork 合并为一个 Claude](https://x.com/bcherny/status/2100259951398789487)
- [Boris Cherny：每个对话里的 Docs、Slides 和 Design](https://x.com/bcherny/status/2100260544087535639)

### Cat Wu: Anthropic 的 Claude Code 与 Cowork

在 Anthropic 负责 Claude Code 和 Cowork 的 Cat Wu 解释了这次合并的思考：很多用户说，他们不想为任何一个任务去挑该用哪个 Claude 产品；随着模型能力变强，公司发现路由这件事可以交给 Claude 自己处理。Claude 会根据 prompt 判断，是给一个快速回答，还是做更深的 agentic work，以及哪种产出形式最适合这个任务。她强调用户始终掌握控制权，可以随时叫停、改变方向，或更细致地调整 Claude 投入的力度；发布会在接下来几周里慢慢推进。

- [Cat Wu：合并 Cowork 与 chat，并整合 Design](https://x.com/_catwu/status/2100260655312089562)

### Alex Albert: Anthropic 研究员

Anthropic 研究员 Alex Albert 说，团队这次合并做得非常好，合并后的 UX 比单独的 chat 或 Cowork 好很多。他还说，新的 slides、docs 和 design 集成用起来也很顺畅。

- [Alex Albert：合并后的 UX 比单独的 chat 或 Cowork 更好](https://x.com/alexalbert__/status/2100295757953917120)

### Claude: Anthropic

Claude 官方账号讲了具体用法。现在可以在一个对话里做出演示稿、文档和设计稿：先用 Claude Docs 起草一份 one-pager，再用 Claude Slides 变成演示稿，最后用 Claude Design 做一张风格一致的视觉稿，全部在一个地方完成。你可以自己改文档里的一行字，在 slide 上给 Claude 留评论，或者选中一个元素把它移走；完成后可以直接从 Claude 演示、按你习惯的格式导出，或者把所有内容放在一个链接里分享。Cowork 用户的 chats、projects、artifacts、connectors 和 skills 都会保留，三个新功能都在所有付费方案的 beta 中。

- [Claude：在对话里做演示稿、文档和设计稿](https://x.com/claudeai/status/2100258492590207079)
- [Claude：在一个地方编辑、导出和分享](https://x.com/claudeai/status/2100258494221812123)
- [Claude：Cowork 的内容会保留，Design、Slides 和 Docs 进入 beta](https://x.com/claudeai/status/2100258495543071016)

### Thibault Sottiaux: OpenAI 的 Codex 与 ChatGPT

在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 预告了一个叫 Astra 的模型，给了四个评价：快、前沿、高效、面向所有人。

- [Thibault Sottiaux：Astra 又快又前沿、高效，而且面向所有人](https://x.com/thsottiaux/status/2100297380968997327)

### Sam Altman: OpenAI

OpenAI CEO Sam Altman 说，这周他最期待发布的东西会挪到下周，不过他觉得很值得等。

- [Sam Altman：本周计划中的发布推迟到下周](https://x.com/sama/status/2100351958167220547)

### Guillermo Rauch: Vercel CEO

Vercel CEO Guillermo Rauch 说，公司从 typesafeai 看到了非常惊人的结果：fx 的默认模式是 auto，会有一个 safety reviewer 分析每一条命令。这个 reviewer 目前跑在 GPT Luna 上，他说这让 Jev 在 p95 上快了最多 18 倍，而且更准。它即将进入 Vercel AI Gateway，很可能成为新的默认设置。

- [Guillermo Rauch：GPT Luna 上的 safety reviewer 让 Jev 快了最多 18 倍](https://x.com/rauchg/status/2100307962262872105)

### Thariq: Anthropic 的 Claude Code

在 Anthropic 做 Claude Code 的 Thariq 修正了自己过去关于 agent 工具层的看法。他现在的判断是，如果目标只是可靠的 tool calling，bash 不再是全部答案；不过对于涉及代码生成和执行的工作，sandboxes 加 bash 仍然很好用。他认为可以直接给 Claude 按你想要的方式设计工具，而不是靠一层间接层去绕。他举了一个具体例子：做数据存储时，先问自己真正想要的是一个文件系统，还是一个数据库的 API。他说 Claude Managed Agents 的平衡点找得不错，因为 sandbox 是可选的，可以脱离 agent loop 的其他部分单独启动；他还把一个原本基于 bash tool calling 的旧项目迁移了过去，效果很好。

- [Thariq：想要可靠的 tool calling，bash 已经不是全部答案](https://x.com/trq212/status/2100315535758217422)
- [Thariq：给 Claude 按你想要的方式设计工具](https://x.com/trq212/status/2100315537251463523)
- [Thariq：Claude Managed Agents 把 sandbox 的平衡点找对了](https://x.com/trq212/status/2100315538472009897)

### Madhu Guru: Meta AI 高级总监

Meta 的 AI 高级总监 Madhu Guru 认为，安全和保障是 AI 产品和模型的功能，而不是从外部强加给你的 guardrail。

- [Madhu Guru：安全是功能，而不是外部强加的 guardrail](https://x.com/realmadhuguru/status/2100312717739667963)

### Zara Zhang: Builder

Builder Zara Zhang 说她最近用 Claude 变少了，因为它说话的方式让人受不了，总是在展示自己多聪明、多高级，而不是把观点讲清楚。

- [Zara Zhang：Claude 的说话方式让她用得更少](https://x.com/zarazhangrui/status/2100278750776824115)

### Nikunj Kothari: FPV Ventures 合伙人

FPV Ventures 合伙人 Nikunj Kothari 花了几个月打磨一个基于 Nous Research 的「Home」agent，说它终于变得非常好用。这也是他和妻子第一个共同使用的 bot，两个人每天都会用；他说用 Grok Bot 之类的工具复现不出这种细粒度控制，比如只读某些邮件、把内嵌附件转成结构化数据，以及使用已登录的浏览器会话。

- [Nikunj Kothari：一个他和妻子每天使用的 Nous Research Home agent](https://x.com/nikunj/status/2100212813625196917)

### Peter Yang: 实用 AI 教程与访谈

Peter Yang 用 8 个 AI skills 完成整档播客，同时仍然保留自己的品味和判断。podcast-prep 会研究嘉宾并准备访谈提纲；podcast-edit 会审阅原始 transcript，和他一起挑出适合放进片头的精彩引语，以及需要剪掉的段落；podcast-production 则编排 5 个 skill，把一整期节目变成 6 种不同的素材。他写道，有些人觉得最新模型会让 skills 变得多余，但对让他自己的剪辑和浏览器操作指令被 AI 准确执行来说，这些 skills 一直不可缺少。

- [Peter Yang：做出整档播客的 8 个 AI skills](https://x.com/petergyang/status/2100328939034128856)

### Garry Tan: Y Combinator 总裁兼 CEO

Y Combinator 总裁兼 CEO Garry Tan 说，他可以用任意 harness，得到的都是同一个 personal AGI 的人格和完整记忆。

- [Garry Tan：换任何 harness，人格和完整记忆都一样](https://x.com/garrytan/status/2100339347669279149)

### Aditya Agarwal: SPC 普通合伙人

SPC 普通合伙人 Aditya Agarwal 写道，好想法很少诞生于孤立之中。他还将在几周后于 SPC 接待加州州长候选人 Steve Hilton，讨论优先级、执行，以及他希望被公众问责的地方。

- [Aditya Agarwal：好想法很少诞生于孤立之中](https://x.com/adityaag/status/2100347763502329951)
- [Aditya Agarwal：在 SPC 接待 Steve Hilton](https://x.com/adityaag/status/2100275836792492463)

### Aaron Levie: Box CEO

Box CEO Aaron Levie 写道，还有一整片 AI 创新的宇宙存在，而且根本不在大多数人的雷达上；能以极快的速度、极低的成本和高水平的能力处理信息，对大量企业任务来说都是巨大的机会。他写道，数据分类、工作流内部的路由决策、拿到某个具体领域问题时做判断、以及对安全或风险做快速评估，都是大量流程里的关口，而这个模型和路线在企业 agentic workflow 里可能会非常有意思。

- [Aaron Levie：又快又便宜的处理能力，打开了企业流程里的关口](https://x.com/levie/status/2100448648672993540)

## Podcast

本次运行所验证的 podcast feed 中没有新的合格单集，因此没有播客内容可以报告。

## Blog

### Claude Blog: Claude Cowork 与 chat 现在合并为一个 Claude

Claude Cowork 和 chat 正在合并为一个 Claude，会先在 Pro 和 Max 方案上于接下来几周内推出，之后还有更多方案跟进。官方给出的原因是，很多人同时使用 Cowork 和 Design，并告诉 Anthropic，最让人头疼的是要决定一个任务属于哪里；而且在一个产品里开始的工作，也无法延续到另一个产品里。现在 Claude 会自己判断任务需要什么，所以 Cowork 和 Design 能做到的事情，在任何对话里都可以用，并且带着你已有的 context、skills 和 connectors。Claude Docs 和 Claude Slides 是新的，Claude Design 现在也能在对话里使用；三者在付费方案上都处于 beta，Enterprise 管理员可以选择何时开启。最终决定权在用户手里：默认情况下 Claude 会在行动前先询问，也可以开启让它持续工作、只在需要仔细查看时才来确认。Senior Economist Andrew Keller 描述了这样的用法：让 Claude 调出他的法律研究数据库，读完全部案例，判断还需要哪些相关案例，下载下来，并存进一个文件夹供他本人审阅。一份中午要交的周报，可以在出门前交出去，路上用手机查看进度，回来时已经变成一份文档和一套 5 页的 slide，而且内容互相匹配。如果你一直在用 Cowork，你的 chats、projects、artifacts、connectors 和 skills 都还在原来的地方。

- [Claude Blog：Claude Cowork 与 chat 现在合并为一个 Claude](https://claude.com/blog/cowork-is-now-claude)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
