[English](../../en/daily/ai-digest-2026-09-18-Fri.md) | [中文](../../zh/daily/ai-digest-2026-09-18-Fri.md) | [Bilingual](./ai-digest-2026-09-18-Fri.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. Anthropic reworks Claude Code around persistent projects.** Anthropic's Claude Code team spent the day describing a new Projects experience. Boris Cherny says it changed not only how he interacts with Claude but how he codes: he stopped managing sessions, sends thoughts as they come, and Claude splits them into threads while the project remembers how he works. Cat Wu says Claude now coordinates all of a user's sessions, lets her fire off a batch of tasks and operate at a higher level of abstraction, gives aggregated status updates on request, and keeps long-lived memory that evolves with use. Thariq describes the architecture as one agent per project that manages memory and spins off subagents, and says it can be asked to be proactive or to work on a schedule. The Claude account adds that every thread adds to and draws from shared memory and that the project library keeps user files and Claude-created files, with cloud threads that keep running offline but cannot yet reach local files or internal network tools.

**1. Anthropic 围绕持久化的 Projects 重做 Claude Code。** Anthropic 的 Claude Code 团队用一整天描述新的 Projects 体验。Boris Cherny 说，它不仅改变了他和 Claude 的交互方式，也改变了他写代码的方式：他不再管理一个个 session，想到什么就直接发出去，Claude 会把它们拆成不同的 thread，而 project 会记住他的工作方式。Cat Wu 说，现在 Claude 会统一协调用户的所有 session，让她把一批任务一次性发出去，在更高的抽象层级上工作，随时可以拿到汇总后的状态更新，而且它拥有会随着使用不断演进的长久记忆。Thariq 把架构概括为每个 project 一个 agent，由它管理记忆并派生出 subagent 去执行任务，还可以要求它主动做事或按计划执行。Claude 官方账号补充说，每个 thread 都会往共享记忆里写入、也会从中读取，project 的 library 会保存你添加的文件和 Claude 创建的文件；thread 跑在云端，所以电脑离线也能继续工作，但目前还无法访问你电脑或内网里的文件和工具。

**2. Google takes its agent pitch to the family.** Google Labs announced CC, an AI agent built for families to spend less time on logistics. Up to 5 members can join, mornings start with a shared "Your Day Ahead" brief email, schedules and to-dos autosync with a shared Google Calendar and Tasks, and families can coordinate in Google Chat to offload tasks like weekly meal plans and school supply lists. CC can also be delegated paperwork such as permission slips and forms, and it remembers what applies to everyone versus one person, from grocery lists to dietary restrictions. It is US-only for users 18 and over, with a waitlist or an upgrade path for existing CC. Josh Woodward, a Google VP, says his own family loves it.

**2. Google 把 agent 的叙事带进家庭场景。** Google Labs 发布 CC，一个为家庭打造的 AI agent，目标是让大家少花时间处理琐事。最多可以加入 5 位成员，早晨会收到一封共享的 "Your Day Ahead" 简报邮件，日程和待办会与共享的 Google Calendar 和 Tasks 自动同步，一家人还能在 Google Chat 里协调，把每周餐单、开学采购清单这类事情交出去。Permission slip、表格之类的文书也可以委托给 CC 处理，它还分得清哪些信息适用于所有人、哪些只适用于某一个人，比如家庭购物清单和常去的餐厅，对比 dietary restriction 和本地时区。目前仅限美国、18 岁以上用户，可以加入 waitlist 或升级现有的 CC。Google 副总裁 Josh Woodward 说，他自己的家庭就很喜欢它。

**3. Agents are becoming the workload.** Box CEO Aaron Levie argues that agents already make up the majority of inference and will trend toward nearly all of it within a year or two, with the vast majority of tokens consumed by agents executing tasks in the background around the clock. He lists the work: reading every code change to secure software, processing data inside workflows, handling most recruiting and customer-prospecting research, reviewing event streams and logs, and running personal tasks. Replit CEO Amjad Masad draws the compute conclusion, writing that this is why we need a gazillion data centers, and that it is worth it.

**3. Agent 正在成为负载本身。** Box CEO Aaron Levie 认为，agent 已经占据 inference 的大多数，并会在一两年内逼近全部，绝大多数 token 都会被 7x24 小时在后台执行任务的 agent 消耗。他列举了这些工作：读取每一处代码改动来保障软件安全、在工作流内部处理数据、承担招聘和客户拓展所需的大部分调研、检查来自各个系统的事件流和日志，以及替我们处理个人生活中的任务。Replit CEO Amjad Masad 由此得出算力层面的结论：这就是我们需要大量 data center 的原因，而这值得。

**4. Software output is exploding, and deployment speed is the new scoreboard.** Vercel CEO Guillermo Rauch expects more software to be produced next year than in all of computing history. Vercel took 10 years to reach 1 billion deployments, then added 1.4 billion in the last 10 months, and he says deployment, upload, domain assignment and global propagation now take 1 second. The range runs from tiny, personal, even disposable artifacts like an HTML file, a report, a pricing calculator or a slide deck, up to sophisticated apps, agents and platforms. He also notes that an agent pressured to ship a hotfix can run `vercel --turbo --prod` and use the fastest available build machine.

**4. 软件产出正在爆发，部署速度成为新的记分牌。** Vercel CEO Guillermo Rauch 预计，明年产出的软件会超过计算史上所有软件的总和。Vercel 花了 10 年才做到 10 亿次部署，而最近 10 个月就新增了 14 亿次；他说，如今部署、上传、分配域名并在全球完成分发只需要 1 秒。产出范围从极小的、个人的、甚至一次性的 artifacts，比如一个带 JavaScript 的 HTML 文件、一份报告、一个报价计算器或一套 slide deck，一直到复杂的 app、agent 和平台。他还提到，当 agent 被要求尽快上线一个 hotfix 时，它可以运行 `vercel --turbo --prod`，使用最快的 build machine。

**5. Builders are testing always-on agents and cheaper memory.** FPV Ventures partner Nikunj Kothari built nosugarforkids, a catalog of healthy snacks for kids, with a Claude agent that wakes once a day to check the catalog, prune dead products, find content ideas, check dataforSEO and Google Search Console, write and edit useful pieces without adding slop, and reach out to publications for backlinks. With zero backlinks and no social presence, he says the site has grown organically to about 6k impressions a day and 60 clicks. Y Combinator President and CEO Garry Tan highlights Memorable, which optimizes memory with embeddings instead of more tokens. OpenAI's Thibault Sottiaux, who works on Codex and ChatGPT, floats a multi-model experiment: getting Astra and Fable to agree on a perfect styleguide and hosting it somewhere with a web MCP.

**5. Builder 们在试验常驻 agent 和更省成本的记忆方案。** FPV Ventures 合伙人 Nikunj Kothari 做出了 nosugarforkids，一个只收录儿童健康零食的目录，背后有一个 Claude agent 每天醒来一次：检查目录里的新增商品、清理可能已经下架的产品、寻找内容选题、查看 dataforSEO 和 Google Search Console 的表现、撰写和编辑有用内容并尽量避免制造 slop，还会主动联系媒体争取 backlink。他说，在零 backlink、完全没有社交存在的情况下，网站自然增长到每天约 6k 次曝光和 60 次点击。Y Combinator 总裁兼 CEO Garry Tan 提到 Memorable，它用 embedding 而不是更多 token 来优化记忆，是一种很强的新思路。OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 则抛出一个多模型实验：让 Astra 和 Fable 就一份完美 styleguide 达成一致，再用 web MCP 把它托管到某个地方。

**6. Safety and alignment stay on the agenda.** SPC General Partner Aditya Agarwal says Goodfire AI is the leading non-frontier-lab company working on alignment and safety, calls its approach the right way to solve the problem, and calls the work generationally important. Garry Tan makes the values question explicit, writing that we need alignment to humankind versus any other goal.

**6. 安全与 alignment 仍然在议程上。** SPC 普通合伙人 Aditya Agarwal 说，Goodfire AI 是前沿实验室之外最领先的 alignment 与安全公司，认为它的路线是解决这个问题的正确方式，并称这项工作具有世代级的重要性。Garry Tan 则把价值取向问题说得更直接：我们需要的是对齐到全人类，而不是对齐到任何其他目标。

## X / Twitter

### Josh Woodward: VP, Google (Google Labs, Gemini app, Google AI Studio)

Josh Woodward pointed followers to the new CC family agent from Google Labs, saying his own family loves it. He also told people who are not yet using Gemini Notebook on their phone that they are missing out.

Josh Woodward 向关注者推荐 Google Labs 新推出的家庭 agent CC，说自己的家庭很喜欢它。他还提醒还没在手机上使用 Gemini Notebook 的人，错过了一个很不错的东西。

- [Josh Woodward: his family loves the new CC agent / 他的家庭很喜欢新的 CC agent](https://x.com/joshwoodward/status/2100665648825483726)
- [Josh Woodward: Gemini Notebook on your phone / 在手机上使用 Gemini Notebook](https://x.com/joshwoodward/status/2100616682431807860)

### Boris Cherny: Claude Code, Anthropic

Boris Cherny writes that Projects changed not only how he interacts with Claude but how he codes. He stopped managing sessions: he sends thoughts as they come, Claude splits them into threads, and the project remembers how he works, which is where a large part of his coding now happens. Projects are how he writes much of his code these days, and the new experience is rolling out now.

Boris Cherny 写道，Projects 不仅改变了他和 Claude 的交互方式，也改变了他写代码的方式。他不再管理 session：想到什么就发出去，Claude 把它们拆成 thread，project 记住他的工作方式，他现在很大一部分编码都在这里完成。他说，这些天他有很多代码都是通过 Projects 写出来的，新体验正在逐步上线。

- [Boris Cherny: Projects changed how he codes / Projects 改变了他写代码的方式](https://x.com/bcherny/status/2100669598995816511)
- [Boris Cherny: rolling out the new Projects experience / 新的 Projects 体验正在上线](https://x.com/bcherny/status/2100639991244427490)

### Thibault Sottiaux: Codex and ChatGPT, OpenAI

Thibault Sottiaux floated a multi-model experiment rather than an announcement: has anyone tried to get Astra and Fable to agree on the perfect styleguide, and then host it somewhere with a web MCP. It reads as a prompt to builders already wiring agents into shared, hostable artifacts.

Thibault Sottiaux 抛出的更像是一个多模型实验，而不是发布消息：有没有人试过让 Astra 和 Fable 就一份完美 styleguide 达成一致，再用 web MCP 把它托管到某处。这像是给已经在把 agent 接入可共享、可托管 artifacts 的 builder 们出的题。

- [Thibault Sottiaux: Astra, Fable, and a web-hosted styleguide / Astra、Fable 与托管在 web 上的 styleguide](https://x.com/thsottiaux/status/2100645454245720513)

### Cat Wu: Claude Code and Cowork, Anthropic

In the new Projects experience, Cat Wu says, Claude coordinates all of a user's sessions. She has used it every day because it lets her operate at a higher level of abstraction: she fires off a batch of tasks and moves on, Claude has context on everything she is working on and can give an aggregated status update whenever she asks, and it has long-lived memory that evolves as she uses it. The rollout runs over the coming weeks.

Cat Wu 说，在新的 Projects 体验里，Claude 会统一协调用户的所有 session。她每天都在用，因为它让她在更高的抽象层级上工作：把一批任务发出去就可以去做别的，Claude 掌握她正在做的所有事情的 context，随时能给出汇总后的状态更新，而且它拥有会随着使用不断演进的长久记忆。这项能力会在接下来几周逐步铺开。

- [Cat Wu: Claude coordinates all of your sessions / Claude 会统一协调你的所有 session](https://x.com/_catwu/status/2100641163120423057)

### Thariq: Claude Code, Anthropic

Thariq describes Projects as bringing the architecture of Claude Tag to Claude Code: one agent per project that manages memory and spins off subagents for tasks. You can ask it to be proactive, to do things on a schedule, and he says it feels a lot nicer than juggling a bunch of sessions.

Thariq 说，Projects 把 Claude Tag 的架构带进了 Claude Code：每个 project 一个 agent，由它管理记忆并派生出 subagent 执行任务。你可以要求它主动做事，也可以让它按计划执行，他觉得这比管理一堆 session 舒服得多。

- [Thariq: one agent per project that manages memory / 每个 project 一个 agent，由它管理记忆](https://x.com/trq212/status/2100638355872706571)

### Google Labs: Google's home for its latest AI tools and experiments

Google Labs announced CC, an AI agent built for families to spend less time on logistics and more time together. You can add up to 5 members, start mornings with a shared "Your Day Ahead" brief email, autosync schedules and to-dos with a shared Google Calendar and Tasks, and coordinate in Google Chat to offload tasks such as crafting weekly meal plans or school supply shopping lists. CC can be delegated paperwork like permission slips and forms, and it remembers what applies to everyone versus what applies to one person, from family grocery lists and favorite restaurants to dietary restrictions and local timezones. Access is US only for users 18 and over, through the waitlist or by upgrading an existing CC.

Google Labs 发布 CC，一个为家庭打造的 AI agent，让大家少花时间处理琐事，多一些时间在一起。最多可以加入 5 位成员，早晨会收到共享的 "Your Day Ahead" 简报邮件，日程和待办会与共享的 Google Calendar 和 Tasks 自动同步，一家人还可以在 Google Chat 里协调，把每周餐单、开学采购清单这类事情交出去。Permission slip、表格之类的文书也能委托给 CC，并且它会记住哪些信息适用于所有人、哪些只适用于某一个人，从家庭购物清单、常去的餐厅，到 dietary restriction 和本地时区。目前仅限美国、18 岁以上用户，可以加入 waitlist 或升级现有的 CC。

- [Google Labs: CC, an AI agent built for families / CC，一个为家庭打造的 AI agent](https://x.com/GoogleLabs/status/2100653821907366366)

### Amjad Masad: CEO, Replit

Amjad Masad's reaction to the scale of agent-driven compute was blunt: "This is why we need a gazillion data centers (worth it)."

面对 agent 带来的算力规模，Amjad Masad 的反应很直接："This is why we need a gazillion data centers (worth it)."

- [Amjad Masad: a gazillion data centers, worth it / 我们需要大量 data center，而且值得](https://x.com/amasad/status/2100829093923320083)

### Guillermo Rauch: CEO, Vercel

Guillermo Rauch expects more software to be produced next year than in all of the history of computing. Vercel took 10 years to reach 1 billion deployments, he says, then added another 1.4 billion in the last 10 months alone. Some of that will be tiny, personal and even disposable software, such as an HTML file with some JavaScript, a report, a pricing calculator or a slide deck, all the way up to sophisticated apps, agents and platforms. He says Vercel has brought the time to deploy, upload, assign a domain and globally propagate an artifact down to 1 second, including the global CDN, firewall, immutable deployments, domain assignment, observability and rollbacks. He also notes that an agent under pressure to ship a hotfix fast can now run `vercel --turbo --prod` and use the fastest available build machine.

Guillermo Rauch 预计，明年产出的软件会超过计算史上所有软件的总和。他说，Vercel 花了 10 年才做到 10 亿次部署，而最近 10 个月就新增了 14 亿次。其中一部分会是很小、很个人化、甚至一次性的软件，比如一个带 JavaScript 的 HTML 文件、一份报告、一个报价计算器或一套 slide deck，另一部分则会是复杂的 app、agent 和平台。他说，Vercel 已经把部署、上传、分配域名并在全球分发一个 artifact 的时间压缩到 1 秒，这背后包括全球 CDN、firewall、immutable deployment、域名分配、observability 和 rollback。他还提到，当 agent 被要求尽快上线一个 hotfix 时，现在可以运行 `vercel --turbo --prod`，使用最快的 build machine。

- [Guillermo Rauch: more software next year than in all computing history / 明年产出的软件会超过计算史上的总和](https://x.com/rauchg/status/2100698591417499972)
- [Guillermo Rauch: an agent can ship a hotfix with vercel --turbo --prod / agent 可以用 vercel --turbo --prod 上线 hotfix](https://x.com/rauchg/status/2100682030170489160)

### Aaron Levie: CEO, Box

Aaron Levie writes that agents already make up the majority of inference, and that this will quickly trend toward nearly all inference over the next year or two, with the vast majority of tokens used by agents executing tasks for us in the background around the clock. He expects agents to read every code change to secure software, process data inside workflows, handle a significant majority of the research that goes into recruiting and customer prospecting, review every event stream and log from every system, and execute tasks in our personal lives. The rate of new agents coming online that consume tokens is not slowing down, he adds, and new workflows are appearing that were not technically possible a month ago.

Aaron Levie 写道，agent 已经占据 inference 的大多数，并会在一两年内迅速逼近全部，绝大多数 token 都会被 7x24 小时在后台替我们执行任务的 agent 消耗。他预计，agent 会读取每一处代码改动来保障软件安全、在工作流内部处理数据、承担招聘和客户拓展所需的大部分调研、检查来自各个系统的事件流和日志，也会在我们的个人生活中执行任务。他还说，新 agent 上线的速度并没有放缓，而一些一个月前在技术上还不可能实现的工作流正在出现。

- [Aaron Levie: agents will soon be nearly all inference / agent 很快会占据几乎全部 inference](https://x.com/levie/status/2100799668573946191)

### Garry Tan: President and CEO, Y Combinator

Garry Tan highlights Memorable, which found a way to optimize memory with embeddings instead of more tokens, and calls it a powerful new way to do memory. He also argues that alignment should be to humankind versus any other goal.

Garry Tan 提到 Memorable，它用 embedding 而不是更多 token 来优化记忆，他认为这是一种很强的新记忆方案。他还主张，对齐的对象应该是全人类，而不是任何其他目标。

- [Garry Tan: Memorable optimizes memory with embeddings / Memorable 用 embedding 优化记忆](https://x.com/garrytan/status/2100668489178456268)
- [Garry Tan: alignment to humankind versus any other goal / 对齐全人类，而不是任何其他目标](https://x.com/garrytan/status/2100636443127210112)

### Nikunj Kothari: Partner, FPV Ventures

Nikunj Kothari spent more than a year obsessed with self-driving companies, tried a lot of products that did not meet his bar, and built his own first experiment with Claude in the loop: nosugarforkids, a catalog of only healthy snacks for kids, with chat recommendations for school, lunches and snack boxes and a tier list built from nutrients. A Claude agent wakes up once a day to check the catalog for new additions, prune products that may be dead, find content ideas, check dataforSEO and Google Search Console for performance, write and edit useful pieces while trying not to introduce slop, and reach out to publications to get backlinks. Even with zero backlinks and no social presence, he says the site has grown organically to about 6k impressions a day and 60 clicks. He notes there is a full MCP and WebMCP for directing an agent toward the site.

Nikunj Kothari 花了一年多时间着迷于 self-driving company，试过很多产品都没达到他的标准，于是自己动手做了第一个实验，把 Claude 放进 loop：nosugarforkids，一个只收录儿童健康零食的目录，提供聊天式推荐，覆盖学校、午餐和零食盒，还根据营养成分做了一份 tier list。一个 Claude agent 每天醒来一次，检查目录里的新增商品、清理可能已经下架的产品、寻找内容选题、查看 dataforSEO 和 Google Search Console 的表现、撰写和编辑有用内容并尽量避免制造 slop，还会主动联系媒体争取 backlink。他说，即使零 backlink、完全没有社交存在，网站也自然增长到每天约 6k 次曝光和 60 次点击。他还提到，这件事有一套完整的 MCP 和 WebMCP，可以把你的 agent 引向这个网站。

- [Nikunj Kothari: nosugarforkids, built with Claude in the loop / 把 Claude 放进 loop，做出 nosugarforkids](https://x.com/nikunj/status/2100714665571737885)
- [Nikunj Kothari: an MCP and WebMCP for the site / 这个网站有 MCP 和 WebMCP](https://x.com/nikunj/status/2100718806004064730)

### Aditya Agarwal: General Partner, SPC

Aditya Agarwal calls one approach the right way to solve alignment and safety, and says Goodfire AI is the leading non-frontier-lab company working on it. In his words, this is generationally important.

Aditya Agarwal 认为有一条路线是解决 alignment 与安全问题的正确方式，并说 Goodfire AI 是前沿实验室之外最领先的公司。用他的话说，这件事具有世代级的重要性。

- [Aditya Agarwal: Goodfire AI and the right way to solve alignment / Goodfire AI 与解决 alignment 的正确方式](https://x.com/adityaag/status/2100746235426836708)

### Claude: Anthropic's AI assistant

Anthropic's Claude account explains how the new Projects work: a project builds over time, every thread adds to and draws from its shared memory, so Claude can remember that a release moved to Friday or who to ask before touching the billing service, and the project's library keeps the files you add and the ones Claude creates. Threads run in the cloud, so they keep working even when your computer is offline, but they cannot reach files or tools on your computer or your internal network yet, and local support is coming very soon. Existing projects on Pro and Max plans keep working as they do today and will be upgraded as the rollout expands across Claude.

Anthropic 的 Claude 官方账号解释了新的 Projects 如何运作：一个 project 会随着时间不断积累，每个 thread 都会往共享记忆里写入、也会从中读取，所以 Claude 能记住发布改到了周五，或者动 billing service 之前该先问谁；project 的 library 会保存你添加的文件和 Claude 创建的文件。thread 跑在云端，所以电脑离线也能继续工作，但目前还无法访问你电脑或内网里的文件和工具，本地支持很快就会到来。Pro 和 Max 方案上已有的 project 会照常工作，并随着 rollout 在 Claude 上逐步扩展而升级。

- [Claude: a project builds over time with shared memory / project 随着时间积累，并拥有共享记忆](https://x.com/claudeai/status/2100632684074549309)
- [Claude: threads run in the cloud / thread 跑在云端](https://x.com/claudeai/status/2100632687316730327)
- [Claude: existing Pro and Max projects keep working / Pro 和 Max 上已有的 project 照常工作](https://x.com/claudeai/status/2100632688625348890)

## Podcast

The validated podcast feed for this run contained no new qualifying episodes.

本次运行中通过验证的播客 feed 没有新的合格节目。

## Blog

The validated blog feed for this run contained no new qualifying posts.

本次运行中通过验证的博客 feed 没有新的合格文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
