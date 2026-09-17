[English](../../en/daily/ai-digest-2026-09-17-Thu.md) | [中文](../../zh/daily/ai-digest-2026-09-17-Thu.md) | [Bilingual](./ai-digest-2026-09-17-Thu.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. Claude Cowork and chat merge into one Claude, and Docs, Slides, and Design move into the conversation.** Anthropic shipped the consolidation on September 16. Boris Cherny, who works on Claude Code at Anthropic, frames it as the sequel to two proofs: Claude Code showed AI could do real work instead of just answering questions, and Cowork showed knowledge workers could hand over a brief and come back to finished files. The new direction is one Claude that carries context across everything you are working on. Cat Wu says the trigger was user feedback, because people did not want to choose a product for every task, and Claude now routes between a quick answer and deeper agentic work on its own. Users keep the final say and can still stop, redirect, or change how much effort Claude spends.

**1. Claude Cowork 与 chat 合并为一个 Claude，Docs、Slides、Design 也进入对话。** Anthropic 在 9 月 16 日发布这次整合。在 Anthropic 做 Claude Code 的 Boris Cherny 把它看作两次验证之后的下一步：Claude Code 证明 AI 能真正干活，而不只是回答问题；Cowork 证明知识工作者可以把 brief 交出去，再回来收文件。新的方向是一个 Claude，把你正在做的所有事情都带在同一个 context 里。Cat Wu 说，推动这次变化的是用户反馈，因为大家不想为每个任务挑产品，现在 Claude 会自己判断是给一个快速回答，还是做更深的 agentic work。最终决定权仍在用户手里，你随时可以叫停、改变方向，或者调整 Claude 投入的力度。

**2. The new artifacts are documents, decks, and designs, reachable from any conversation.** Claude Docs, Claude Slides, and Claude Design are in beta on paid plans and appear inside chat, so a one-pager can become a deck with a matching visual without switching tools. Anthropic researcher Alex Albert calls the resulting UX much better than chat or Cowork on their own. The official Claude account notes that Cowork users keep their chats, projects, artifacts, connectors, and skills exactly where they left them. The Claude Blog example is a weekly report due at noon: hand over the brief before you leave, check progress from your phone, and come back to a doc and slides that already match. Roll-out starts on Pro and Max, with Team and Free to follow.

**2. 新的产出物是文档、演示稿和设计稿，并且可以从任何对话里拿到。** Claude Docs、Claude Slides 和 Claude Design 已在付费方案上进入 beta，并直接出现在对话里，所以一份 one-pager 可以变成一套演示稿，再配上一张风格一致的视觉稿，全程不用切换工具。Anthropic 研究员 Alex Albert 说，合并后的 UX 比单独的 chat 或 Cowork 好很多。Claude 官方账号补充说，Cowork 用户的 chats、projects、artifacts、connectors 和 skills 都留在原处。Claude Blog 举的例子是一份中午要交的周报：出门前把 brief 交出去，路上用手机看进度，回到工位时文档和 slides 已经互相匹配。首发从 Pro 和 Max 开始，Team 和 Free 随后跟进。

**3. OpenAI signals a slip this week and teases a model called Astra.** OpenAI CEO Sam Altman told followers that "the main thing i was excited about launching this week will be next week instead," adding that he thinks it is worth the wait. Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, teased Astra with four checks: fast, frontier, efficient, and for everyone. Neither post names a ship date or a benchmark, but together they set expectations for the next OpenAI release.

**3. OpenAI 暗示本周的发布推迟，并预告了一个叫 Astra 的模型。** OpenAI CEO Sam Altman 对关注者说，「这周我最期待发布的东西会放到下周，不过我觉得值得等」。在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 用四个勾来预告 Astra：快、前沿、高效、面向所有人。两条帖子都没有给出发布时间或 benchmark，但一起定下了下一轮 OpenAI 发布的预期。

**4. The agent substrate keeps shifting: safety reviewers on cheap models, and tools shaped to fit the job.** Vercel CEO Guillermo Rauch says default mode in fx is now auto, with a safety reviewer analyzing every command. That reviewer runs on GPT Luna today, and he says Jev is up to 18x faster at p95 and more accurate as a result; it is coming to Vercel AI Gateway and is likely the new default. Anthropic's Thariq updates his own earlier advice: bash is no longer all you need if the goal is reliable tool calling, sandboxes plus bash still fit code generation and execution, and tools should be shaped the way you want them instead of hiding behind a layer of indirection. He says Claude Managed Agents gets the balance right because the sandbox is optional.

**4. Agent 脚下的工具层仍在变化：用便宜模型做安全审查，工具按需要来设计。** Vercel CEO Guillermo Rauch 说，fx 的默认模式现在是 auto，会有一个 safety reviewer 分析每一条命令。这个 reviewer 目前跑在 GPT Luna 上，他说这让 Jev 在 p95 上快了最多 18 倍，而且更准；它即将进入 Vercel AI Gateway，很可能成为新的默认。Anthropic 的 Thariq 则修正了自己过去的建议：如果目标只是可靠的 tool calling，bash 已经不再是全部答案；sandboxes 加 bash 依然适合涉及代码生成与执行的工作；工具应该按你想要的样子来设计，而不是靠一层间接层去绕。他说 Claude Managed Agents 的平衡点找得不错，因为 sandbox 是可选的。

**5. The enterprise opportunity is fast, cheap judgment, and safety treated as a feature.** Box CEO Aaron Levie writes that there are entire universes of AI innovation that were not even on most radars, and that processing information insanely quickly at crazy low cost is huge for enterprise tasks. Data classification, routing decisions inside a workflow, judgment on a particular domain problem, and quick calls about safety or security are the gates in a large number of processes, which makes them prime targets for agentic workflows. Madhu Guru, a senior director of AI at Meta, makes the design point bluntly: safety and security are features of your AI product and model, not guardrails imposed from the outside.

**5. 企业端的机会，是又快又便宜的判断力，以及把安全当成功能。** Box CEO Aaron Levie 写道，还有一整片「AI 创新的宇宙」根本不在大多数人的雷达上，而能以极低成本、极快速度处理信息，对企业任务来说是巨大的机会。数据分类、工作流内部的路由决策、针对某个领域问题做判断、以及对安全或风险做快速评估，都是大量流程里的关口，因此很适合用 agentic workflow 来承接。Meta 的 AI 高级总监 Madhu Guru 则把设计原则说得很直接：安全和保障应该是 AI 产品和模型的功能，而不是从外部强加给你的 guardrail。

**6. Builders are voting with their own workflows, and not always in Claude's favor.** Builder Zara Zhang says she is using Claude less because the way it speaks has become insufferable, constantly showcasing sophistication instead of communicating a point. FPV Ventures partner Nikunj Kothari has spent months on a "Home" agent built on Nous Research that he and his wife use daily as a shared bot, and says he cannot recreate its granularity and control elsewhere. Practical AI author Peter Yang runs his entire podcast with eight reusable AI skills, arguing skills still matter because they encode his specific editing and browser instructions. Y Combinator President and CEO Garry Tan says he can use any harness and still get the same personality and full memory from his personal AGI, while SPC general partner Aditya Agarwal writes that great ideas rarely emerge from isolation.

**6. Builders 正在用自己的工作流投票，而且并不总是投给 Claude。** Builder Zara Zhang 说她最近用 Claude 变少了，因为它说话的方式让人受不了，总是在展示自己多聪明、多高级，而不是把观点讲清楚。FPV Ventures 合伙人 Nikunj Kothari 花了几个月打磨一个基于 Nous Research 的「Home」agent，他和妻子每天都会用，是他们的第一个共享 bot；他说用 Grok Bot 之类的工具复现不出这种细粒度控制。实用 AI 内容作者 Peter Yang 用 8 个可复用的 AI skills 完成整档播客，他认为 skills 仍然重要，因为它们把他的剪辑和浏览器操作指令固化了下来。Y Combinator 总裁兼 CEO Garry Tan 说，他可以用任意 harness，得到的是同一个 personal AGI 的完整人格和记忆；SPC 普通合伙人 Aditya Agarwal 则写道，好想法很少诞生于孤立之中。

## X / Twitter

### Boris Cherny: Claude Code, Anthropic

Boris Cherny of Anthropic's Claude Code team frames the Cowork-and-chat merge as the next step after two proofs: Claude Code showed AI could do real work rather than just answer questions, and Cowork showed knowledge workers could hand over a brief and come back to finished files. The direction, he writes, is one Claude that carries context across everything you are working on, simple enough for everyone to reach its full capabilities. He has used the new experience daily for weeks and calls it simpler, faster, and more powerful, with a slow roll-out to keep it fast and reliable. He also highlights that Claude Docs, Claude Slides, and Claude Design are now in every conversation, so a request for a presentation returns something you can open, edit, and export as PowerPoint or PDF with no separate tool to navigate to.

在 Anthropic 做 Claude Code 的 Boris Cherny 把 Cowork 与 chat 的合并，看作两次验证之后的下一步：Claude Code 证明 AI 能真正干活，而不只是回答问题；Cowork 证明知识工作者可以把 brief 交出去，回来时收到完成好的文件。他写道，新的方向是一个 Claude，把你正在做的所有事情都带进同一个 context，简单到每个人都能用上 Claude 的完整能力。他已经每天使用这套新体验好几周，觉得更简单、更快、也更强，发布节奏会放慢，以保证快速和稳定。他还强调，Claude Docs、Claude Slides 和 Claude Design 现在都在每一个对话里，想要一份演示稿，就能拿到可以打开、编辑并导出为 PowerPoint 或 PDF 的成品，不需要再跳转到单独的工具。

- [Boris Cherny: chat and Cowork become one Claude / chat 与 Cowork 合并为一个 Claude](https://x.com/bcherny/status/2100259951398789487)
- [Boris Cherny: Docs, Slides, and Design in every conversation / 每个对话里的 Docs、Slides 和 Design](https://x.com/bcherny/status/2100260544087535639)

### Cat Wu: Claude Code and Cowork, Anthropic

Cat Wu, who works on Claude Code and Cowork at Anthropic, explains the reasoning behind the merge: many users said they did not want to choose which Claude product to use for any task, and as the models became more capable the company found Claude could handle the routing itself. Based on the prompt, Claude decides whether to give a quick answer or do deeper agentic work, and what kind of output best fits the task. She stresses that users stay in control the whole time and can stop, redirect, or exert finer control over Claude's effort, with a slow roll-out over the coming weeks.

在 Anthropic 负责 Claude Code 和 Cowork 的 Cat Wu 解释了这次合并的思考：很多用户说，他们不想为任何一个任务去挑该用哪个 Claude 产品；随着模型能力变强，公司发现路由这件事可以交给 Claude 自己处理。Claude 会根据 prompt 判断，是给一个快速回答，还是做更深的 agentic work，以及哪种产出形式最适合这个任务。她强调用户始终掌握控制权，可以随时叫停、改变方向，或更细致地调整 Claude 投入的力度；发布会在接下来几周里慢慢推进。

- [Cat Wu: merging Cowork and chat, and integrating Design / 合并 Cowork 与 chat，并整合 Design](https://x.com/_catwu/status/2100260655312089562)

### Alex Albert: Research, Anthropic

Anthropic researcher Alex Albert says the team did an amazing job with the merge and that the resulting UX feels much better than chat or Cowork did on their own. He adds that the new slides, docs, and design integrations work very well.

Anthropic 研究员 Alex Albert 说，团队这次合并做得非常好，合并后的 UX 比单独的 chat 或 Cowork 好很多。他还说，新的 slides、docs 和 design 集成用起来也很顺畅。

- [Alex Albert: the merged UX is better than chat or Cowork alone / 合并后的 UX 比单独的 chat 或 Cowork 更好](https://x.com/alexalbert__/status/2100295757953917120)

### Claude: Anthropic

The official Claude account walks through the practical details. Decks, docs, and designs can now be made inside a conversation: draft a one-pager in Claude Docs, turn it into a deck with Claude Slides, and mock up a matching visual in Claude Design, all from one place. You can fix a line in the doc yourself, leave a comment for Claude on a slide, or select an element and move it, then present straight from Claude, export in the format you already use, or share everything at one link. Cowork users keep their chats, projects, artifacts, connectors, and skills, and the three new surfaces are in beta on all paid plans.

Claude 官方账号讲了具体用法。现在可以在一个对话里做出演示稿、文档和设计稿：先用 Claude Docs 起草一份 one-pager，再用 Claude Slides 变成演示稿，最后用 Claude Design 做一张风格一致的视觉稿，全部在一个地方完成。你可以自己改文档里的一行字，在 slide 上给 Claude 留评论，或者选中一个元素把它移走；完成后可以直接从 Claude 演示、按你习惯的格式导出，或者把所有内容放在一个链接里分享。Cowork 用户的 chats、projects、artifacts、connectors 和 skills 都会保留，三个新功能都在所有付费方案的 beta 中。

- [Claude: make decks, docs, and designs in your conversation / 在对话里做演示稿、文档和设计稿](https://x.com/claudeai/status/2100258492590207079)
- [Claude: edit, export, and share from one place / 在一个地方编辑、导出和分享](https://x.com/claudeai/status/2100258494221812123)
- [Claude: Cowork work carries over, Design, Slides, and Docs in beta / Cowork 的内容会保留，Design、Slides 和 Docs 进入 beta](https://x.com/claudeai/status/2100258495543071016)

### Thibault Sottiaux: Codex and ChatGPT, OpenAI

Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, teased a model called Astra with four claims: fast, frontier, efficient, and for everyone.

在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 预告了一个叫 Astra 的模型，给了四个评价：快、前沿、高效、面向所有人。

- [Thibault Sottiaux: Astra is fast, frontier, efficient, and for everyone / Astra 又快又前沿、高效，而且面向所有人](https://x.com/thsottiaux/status/2100297380968997327)

### Sam Altman: OpenAI

OpenAI CEO Sam Altman said that the main thing he was excited about launching this week will move to next week instead, adding that he thinks it is worth the wait.

OpenAI CEO Sam Altman 说，这周他最期待发布的东西会挪到下周，不过他觉得很值得等。

- [Sam Altman: this week's planned launch slips to next week / 本周计划中的发布推迟到下周](https://x.com/sama/status/2100351958167220547)

### Guillermo Rauch: CEO, Vercel

Vercel CEO Guillermo Rauch says the company is seeing extraordinary results from typesafeai, with default mode in fx set to auto and a safety reviewer analyzing every command. That reviewer runs on GPT Luna today, and he says Jev is up to 18x faster at p95 and more accurate as a result. It is coming to Vercel AI Gateway and is likely to become the new default.

Vercel CEO Guillermo Rauch 说，公司从 typesafeai 看到了非常惊人的结果：fx 的默认模式是 auto，会有一个 safety reviewer 分析每一条命令。这个 reviewer 目前跑在 GPT Luna 上，他说这让 Jev 在 p95 上快了最多 18 倍，而且更准。它即将进入 Vercel AI Gateway，很可能成为新的默认设置。

- [Guillermo Rauch: safety reviewer on GPT Luna makes Jev up to 18x faster / GPT Luna 上的 safety reviewer 让 Jev 快了最多 18 倍](https://x.com/rauchg/status/2100307962262872105)

### Thariq: Claude Code, Anthropic

Thariq, who works on Claude Code at Anthropic, has updated his own earlier position on agent tooling. He now thinks bash is no longer all you need if the goal is just reliable tool calling, though sandboxes plus bash remain good for work that involves code generation and execution. He argues you can give Claude tools shaped the way you want instead of tricking it through a layer of indirection, and offers a concrete example: for data storage, ask whether you really want a file system or an API to a database. He says Claude Managed Agents strikes the right balance because the sandbox is optional and can be spun up independently of the rest of the agent loop, and that an old project he ported over from bash tool calling worked well.

在 Anthropic 做 Claude Code 的 Thariq 修正了自己过去关于 agent 工具层的看法。他现在的判断是，如果目标只是可靠的 tool calling，bash 不再是全部答案；不过对于涉及代码生成和执行的工作，sandboxes 加 bash 仍然很好用。他认为可以直接给 Claude 按你想要的方式设计工具，而不是靠一层间接层去绕。他举了一个具体例子：做数据存储时，先问自己真正想要的是一个文件系统，还是一个数据库的 API。他说 Claude Managed Agents 的平衡点找得不错，因为 sandbox 是可选的，可以脱离 agent loop 的其他部分单独启动；他还把一个原本基于 bash tool calling 的旧项目迁移了过去，效果很好。

- [Thariq: bash is no longer all you need for reliable tool calling / 想要可靠的 tool calling，bash 已经不是全部答案](https://x.com/trq212/status/2100315535758217422)
- [Thariq: give Claude tools shaped the way you want / 给 Claude 按你想要的方式设计工具](https://x.com/trq212/status/2100315537251463523)
- [Thariq: Claude Managed Agents gets the sandbox balance right / Claude Managed Agents 把 sandbox 的平衡点找对了](https://x.com/trq212/status/2100315538472009897)

### Madhu Guru: Senior Director of AI, Meta

Madhu Guru, a senior director of AI at Meta, argues that safety and security are features of your AI product and model, not guardrails that need to be imposed on you from the outside.

Meta 的 AI 高级总监 Madhu Guru 认为，安全和保障是 AI 产品和模型的功能，而不是从外部强加给你的 guardrail。

- [Madhu Guru: safety and security are features, not outside guardrails / 安全是功能，而不是外部强加的 guardrail](https://x.com/realmadhuguru/status/2100312717739667963)

### Zara Zhang: Builder

Builder Zara Zhang says she finds herself using Claude less these days because the way it speaks has become insufferable, constantly trying to showcase how smart or sophisticated it is rather than actually communicating a point.

Builder Zara Zhang 说她最近用 Claude 变少了，因为它说话的方式让人受不了，总是在展示自己多聪明、多高级，而不是把观点讲清楚。

- [Zara Zhang: Claude's tone is why she uses it less / Claude 的说话方式让她用得更少](https://x.com/zarazhangrui/status/2100278750776824115)

### Nikunj Kothari: Partner, FPV Ventures

FPV Ventures partner Nikunj Kothari has spent a few months tinkering with a "Home" agent built on Nous Research, and says it has finally gotten really good. It is the couple's first shared bot, used daily by him and his wife, and he says he cannot recreate the same granularity and control with Grok Bot or similar tools, for example reading only certain emails, converting inline attachments into structured data, and using logged-in browser sessions.

FPV Ventures 合伙人 Nikunj Kothari 花了几个月打磨一个基于 Nous Research 的「Home」agent，说它终于变得非常好用。这也是他和妻子第一个共同使用的 bot，两个人每天都会用；他说用 Grok Bot 之类的工具复现不出这种细粒度控制，比如只读某些邮件、把内嵌附件转成结构化数据，以及使用已登录的浏览器会话。

- [Nikunj Kothari: a Home agent on Nous Research he and his wife use daily / 一个他和妻子每天使用的 Nous Research Home agent](https://x.com/nikunj/status/2100212813625196917)

### Peter Yang: Practical AI tutorials and interviews

Peter Yang runs his entire podcast with eight AI skills while still applying his own taste and judgment. podcast-prep researches the guest and builds an interview guide, podcast-edit reviews the raw transcript and helps pick engaging quotes for the intro reel along with moments to cut, and podcast-production orchestrates five skills to turn one episode into six different assets. Some people think the latest models make skills redundant, he writes, but they have been indispensable for getting AI to follow his specific edit and browser-use instructions.

Peter Yang 用 8 个 AI skills 完成整档播客，同时仍然保留自己的品味和判断。podcast-prep 会研究嘉宾并准备访谈提纲；podcast-edit 会审阅原始 transcript，和他一起挑出适合放进片头的精彩引语，以及需要剪掉的段落；podcast-production 则编排 5 个 skill，把一整期节目变成 6 种不同的素材。他写道，有些人觉得最新模型会让 skills 变得多余，但对让他自己的剪辑和浏览器操作指令被 AI 准确执行来说，这些 skills 一直不可缺少。

- [Peter Yang: eight AI skills that produce a whole podcast / 做出整档播客的 8 个 AI skills](https://x.com/petergyang/status/2100328939034128856)

### Garry Tan: President and CEO, Y Combinator

Y Combinator President and CEO Garry Tan says he can use any harness he wants and still get the same personality and full memory from his personal AGI.

Y Combinator 总裁兼 CEO Garry Tan 说，他可以用任意 harness，得到的都是同一个 personal AGI 的人格和完整记忆。

- [Garry Tan: same personality and full memory across any harness / 换任何 harness，人格和完整记忆都一样](https://x.com/garrytan/status/2100339347669279149)

### Aditya Agarwal: General Partner, SPC

SPC general partner Aditya Agarwal writes that great ideas rarely emerge from isolation. He is also hosting California governor candidate Steve Hilton at SPC in a couple of weeks to discuss priorities, execution, and what Hilton would want to be held accountable for.

SPC 普通合伙人 Aditya Agarwal 写道，好想法很少诞生于孤立之中。他还将在几周后于 SPC 接待加州州长候选人 Steve Hilton，讨论优先级、执行，以及他希望被公众问责的地方。

- [Aditya Agarwal: great ideas rarely emerge from isolation / 好想法很少诞生于孤立之中](https://x.com/adityaag/status/2100347763502329951)
- [Aditya Agarwal: hosting Steve Hilton at SPC / 在 SPC 接待 Steve Hilton](https://x.com/adityaag/status/2100275836792492463)

### Aaron Levie: CEO, Box

Box CEO Aaron Levie writes that there are entire universes of AI innovation that still exist and were not even on most of our radars, and that being able to process information insanely quickly, at crazy low costs with high levels of capability, is huge for a wide number of enterprise tasks. Data classification tasks, routing decisions inside a workflow, decision making when handed a particular domain problem, and quick judgment calls about safety or security are the gates in a large number of processes, he writes, and this model and approach could be quite cool in enterprise agentic workflows.

Box CEO Aaron Levie 写道，还有一整片 AI 创新的宇宙存在，而且根本不在大多数人的雷达上；能以极快的速度、极低的成本和高水平的能力处理信息，对大量企业任务来说都是巨大的机会。他写道，数据分类、工作流内部的路由决策、拿到某个具体领域问题时做判断、以及对安全或风险做快速评估，都是大量流程里的关口，而这个模型和路线在企业 agentic workflow 里可能会非常有意思。

- [Aaron Levie: fast, cheap processing unlocks enterprise gates / 又快又便宜的处理能力，打开了企业流程里的关口](https://x.com/levie/status/2100448648672993540)

## Podcast

The validated podcast feed for this run contained no new qualifying episodes, so there is no podcast content to report.

本次运行所验证的 podcast feed 中没有新的合格单集，因此没有播客内容可以报告。

## Blog

### Claude Blog: Claude Cowork and chat are now one Claude

Claude Cowork and chat are merging into one Claude, rolling out on Pro and Max plans over the next few weeks with more plans to follow. The stated reason is that people used both Cowork and Design and told Anthropic the frustrating part was deciding where a task belonged, and work started in one did not carry into the other. Claude can now figure out what a task needs, so what Cowork and Design can do is available from any conversation, with the context, skills, and connectors a user already has. Claude Docs and Claude Slides are new, and Claude Design now works inside conversations too; all three are in beta on paid plans, and Enterprise admins choose when to turn them on. Users keep the final say: by default Claude asks before taking an action, and there is an option to let it keep working and check in only when something needs a closer look. Senior Economist Andrew Keller describes having Claude pull up a legal research database, read the cases, figure out which other cases he might need, download them, and store them in a folder for his personal review. A weekly report due at noon can be handed over before leaving, checked from a phone, and returned as a matching doc and deck of five slides. If you have been working in Cowork, everything is where you left it, including chats, projects, artifacts, connectors, and skills.

Claude Cowork 和 chat 正在合并为一个 Claude，会先在 Pro 和 Max 方案上于接下来几周内推出，之后还有更多方案跟进。官方给出的原因是，很多人同时使用 Cowork 和 Design，并告诉 Anthropic，最让人头疼的是要决定一个任务属于哪里；而且在一个产品里开始的工作，也无法延续到另一个产品里。现在 Claude 会自己判断任务需要什么，所以 Cowork 和 Design 能做到的事情，在任何对话里都可以用，并且带着你已有的 context、skills 和 connectors。Claude Docs 和 Claude Slides 是新的，Claude Design 现在也能在对话里使用；三者在付费方案上都处于 beta，Enterprise 管理员可以选择何时开启。最终决定权在用户手里：默认情况下 Claude 会在行动前先询问，也可以开启让它持续工作、只在需要仔细查看时才来确认。Senior Economist Andrew Keller 描述了这样的用法：让 Claude 调出他的法律研究数据库，读完全部案例，判断还需要哪些相关案例，下载下来，并存进一个文件夹供他本人审阅。一份中午要交的周报，可以在出门前交出去，路上用手机查看进度，回来时已经变成一份文档和一套 5 页的 slide，而且内容互相匹配。如果你一直在用 Cowork，你的 chats、projects、artifacts、connectors 和 skills 都还在原来的地方。

- [Claude Blog: Claude Cowork and chat are now one Claude / Claude Cowork 与 chat 现在合并为一个 Claude](https://claude.com/blog/cowork-is-now-claude)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
