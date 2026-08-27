[English](../../en/daily/ai-digest-2026-08-28-Fri.md) | [中文](../../zh/daily/ai-digest-2026-08-28-Fri.md) | [Bilingual](./ai-digest-2026-08-28-Fri.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. Claude puts a browser inside the agent loop.** Claude now has its own built-in browser in Cowork on the desktop app: when a task involves a website, a browser opens in the side panel and Claude navigates, fills forms, and finishes the job, with nothing to install and nothing shared from your own browser unless you choose. At the same time, Claude in Chrome is now generally available on all paid plans, and Claude can take autonomous actions in the browser; a safety classifier validates each action before it's performed. In the latest prompt injection evaluations, no attacks succeeded against Claude Sonnet 5, Opus 5, or Mythos 5 with probes plus the automatic approval classifiers, and only 0.3% of attacks succeeded against Fable 5, all in low-severity scenarios.

**1. Claude 把浏览器装进了 agent 的工作流。** Claude 现在在桌面端 Cowork 中内置了自己的浏览器：当任务涉及网站时，侧边栏会打开浏览器，Claude 自己导航、填表、完成工作，无需安装任何东西，除非你主动选择，否则不会共享你自己浏览器里的内容。与此同时，Claude in Chrome 已在所有付费套餐上正式可用，Claude 可以在浏览器中自主执行操作，每个动作在执行前都会经过安全分类器校验。在最新的 prompt injection 评估中，开启 probes 与自动批准分类器后，没有任何攻击能突破 Claude Sonnet 5、Opus 5 和 Mythos 5，只有 0.3% 的攻击成功突破了 Fable 5，且都发生在低风险场景。

**2. Enterprises are racing to the applied AI layer.** Box CEO Aaron Levie reported Q2 revenue of $321.1 million, up 9% (11% in constant currency, the company's highest constant-currency growth in 14 quarters), and raised the full-year revenue target to $1.290 billion, driven by enterprise demand to get more out of unstructured data in the AI era. His argument: "the world's most advanced superintelligence is only as useful as the underlying enterprise knowledge it has access to," so enterprises need applied AI platforms that let them swap models and agents at any time while providing guardrails, comprehensive audit logs, and real-time security alerts.

**2. 企业正在涌向 applied AI 层。** Box CEO Aaron Levie 公布 Q2 财报：季度营收 3.211 亿美元，同比增长 9%（按固定汇率计算增长 11%，是 14 个季度以来的最高固定汇率增速），并把全年营收目标上调至 12.9 亿美元，动力来自企业希望在 AI 时代从非结构化数据中挖掘更多价值。他的观点是：「世界上最先进的超级智能，其价值只取决于它能访问到的企业知识。」企业需要能随时在流程中切换模型和 agent 的 applied AI 平台，同时具备防护栏、完整的审计日志和实时安全告警。

**3. Post-training becomes the new frontier bet.** SPC general partner Aditya Agarwal announced that DeepCogito, a post-training research lab, is announcing a $43M Series A, with research focused on large-scale reinforcement learning and recursive self-improvement; its core method, iterated distillation and amplification (IDA), has been proven publicly on models from 3B to 600B+ parameters. FirstMark's Matt Turck called the NVIDIA-Hugging Face deal a "win-win-win" that makes NVIDIA officially the center of open source AI, and in a podcast guest spot argued that the best venture firm in the world might be NVIDIA and that apps are becoming labs faster than labs are becoming apps.

**3. post-training 成为新的前沿押注。** SPC 合伙人 Aditya Agarwal 宣布，post-training 研究实验室 DeepCogito 正在公布 4300 万美元 A 轮融资，研究方向是大规模强化学习和递归自我改进，核心方法是 iterated distillation and amplification（IDA），创始团队已经在 3B 到 600B+ 参数的模型上公开验证过这套方法。FirstMark 的 Matt Turck 称 NVIDIA 与 Hugging Face 的交易是「三赢」，让 NVIDIA 正式成为开源 AI 的中心；他还在一次播客客串中提出，世界上最好的 VC 公司可能是 NVIDIA，而且 apps 变成 labs 的速度比 labs 变成 apps 更快。

**4. Agent infrastructure gets faster and safer.** Vercel CEO Guillermo Rauch highlighted global compute for agents: multiple regions, failover, up to 10,000 concurrent sandboxes, and a 5,000 vCPUs/min ramp by default, plus a new vercel security check CLI that calls agents to improve security posture with human-in-the-loop or on a cron. Anthropic's Thariq, who works on Claude Code, shipped a SendFeedback tool so users can have Claude draft and approve feedback, and flagged that several customers are being targeted by fraudulent requests.

**4. agent 基础设施变得更快速、更安全。** Vercel CEO Guillermo Rauch 展示了面向 agent 的全球计算能力：多区域、故障转移、默认最高 10,000 个并发 sandbox，以及每分钟 5,000 个 vCPU 的扩展速度，还有更多区域即将上线；他还发布了 vercel security check CLI，可以像 is-agentic 一样让 agent 在 human-in-the-loop 或 cron 模式下帮你改善安全态势。Anthropic 的 Thariq（Claude Code）上线了 SendFeedback 工具，用户可以直接让 Claude 起草并确认反馈；他还指出多个客户正被欺诈请求盯上。

**5. The culture war over AI sharpens.** Zara Zhang argued that most PR teams at large companies exist to block real marketing and branding, and that people apply a double standard to AI writing: "it's fine if I use it; it's not fine if YOU use it." Dan Shipper calls this a "definite golden age for polymaths and philosophers," while Peter Steinberger asks "maybe it is a bubble?" and notes that Codex's visualization feature "got really good."

**5. 围绕 AI 的文化争论在升级。** Zara Zhang 认为，大公司里大多数 PR 团队的存在意义就是阻挠真正的营销和品牌建设，一个本应提升品牌的功能最终反而与品牌背道而驰；她还指出，在 AI 写作这件事上，很多人都在用双重标准：「我用可以，你用就不行。」Dan Shipper 称这是通才和哲学家的黄金时代；Peter Steinberger 则反问「也许这就是泡沫？」，并称赞 Codex 的可视化功能「变得真的很强」。

## X / Twitter

### Claude
Claude announced that it now has its own built-in browser in Cowork: when a task involves a website, a browser opens in Cowork's side panel, and Claude navigates, fills forms, and finishes the job. There's nothing to install; the browser lives in the desktop app and stays separate from your own browser and logins, rolling out over the next week on the desktop app for all paid plans. For users who prefer their own browser, Claude in Chrome is now generally available on all paid plans and remains the default for existing users.

Claude 宣布，Cowork 现在内置了自己的浏览器：当任务涉及网站时，Cowork 的侧边栏会打开浏览器，由 Claude 导航、填表并完成工作。无需安装任何东西，浏览器就在桌面应用里，并且与你自己的浏览器和登录状态相互隔离，未来一周内会向所有付费套餐的桌面应用推送。如果你更喜欢用自己的浏览器，Claude in Chrome 现在已在所有付费套餐上正式可用，老用户继续默认使用它。

- [Claude on the built-in browser in Cowork](https://x.com/claudeai/status/2092755571455758427)
- [Claude on the desktop app rollout](https://x.com/claudeai/status/2092755573183828193)
- [Claude on Claude in Chrome GA](https://x.com/claudeai/status/2092755574563741871)

### Aaron Levie: CEO of Box
Levie shared Box's Q2 results and his thesis on the applied AI layer: revenue reached $321.1 million for the quarter, up 9%, or 11% in constant currency (the highest constant-currency growth in 14 quarters), and the company raised its full-year revenue target to $1.290 billion on the back of enterprise demand to transform in the AI era. He argues that "the world's most advanced superintelligence is only as useful as the underlying enterprise knowledge it has access to," and that the bulk of corporate knowledge, from contracts to financial documents to product roadmaps, lives in unstructured data. As AI agents interact with enterprise data, he says, companies will need applied AI platforms with robust guardrails, comprehensive audit logs, and real-time security alerts, plus the ability to swap models and agents on their workflows at any time.

Levie 分享了 Box 的 Q2 业绩和他对 applied AI 层的判断：季度营收达到 3.211 亿美元，同比增长 9%，按固定汇率计算增长 11%（14 个季度以来的最高固定汇率增速），公司在企业 AI 转型需求的推动下把全年营收目标上调至 12.9 亿美元。他认为「世界上最先进的超级智能，其价值只取决于它能访问到的企业知识」，而从合同到财务文件再到产品路线图，企业知识的绝大部分都在非结构化数据里。随着外部 AI agent 与企业数据交互，企业需要具备完善防护栏、完整审计日志和实时安全告警的 applied AI 平台，并且能随时在工作流中切换模型和 agent。

- [Aaron Levie on Box Q2 and the applied AI layer](https://x.com/levie/status/2092702955292230100)

### Guillermo Rauch: CEO of Vercel
Rauch spotlighted global compute for agents now available through Vercel: multiple regions, failover, up to 10,000 concurrent sandboxes, and a 5,000 vCPUs/min ramp by default, with more regions to come. He also announced a security dashboard alongside a vercel security check CLI, which, much like is-agentic, lets you call on agents to improve your security posture with human-in-the-loop or run in crons.

Rauch 展示了 Vercel 面向 agent 的全球计算能力：多区域、故障转移、默认最高 10,000 个并发 sandbox，以及每分钟 5,000 个 vCPU 的扩展速度，还有更多区域即将上线。他还发布了安全 dashboard，以及 vercel security check CLI，可以像 is-agentic 一样让 agent 在 human-in-the-loop 或 cron 模式下帮你改善安全态势。

- [Guillermo Rauch on global compute for agents](https://x.com/rauchg/status/2092735785460277627)
- [Guillermo Rauch on the security check CLI](https://x.com/rauchg/status/2092621371914482026)

### Thariq: Claude Code at Anthropic
Thariq shipped a change that gives Claude a SendFeedback tool: instead of hitting /feedback and writing up a report, users can tell Claude to draft and approve it, which he says helps the team improve and understand problems. He also flagged that several customers are being targeted by fraudulent requests, praised the work Stripe is doing to help, and noted such attacks hurt everyone's ability to provide usage to legitimate users.

Thariq 上线了一个改动，让 Claude 拥有 SendFeedback 工具：用户不用再手动输入 /feedback 写报告，直接让 Claude 起草并确认即可，他说这些反馈能帮助团队改进和定位问题。他还指出，多个客户正被欺诈请求盯上，感谢 Stripe 正在做的帮助，并提醒这类攻击会伤害所有人向合法用户提供服务的能力。

- [Thariq on the SendFeedback tool](https://x.com/trq212/status/2092696449616376140)
- [Thariq on fraudulent requests](https://x.com/trq212/status/2092729394565657010)

### Aditya Agarwal: General Partner at SPC
Agarwal announced that DeepCogito, a post-training research lab, is announcing a $43M Series A. He argues the AI frontier will be determined by post-training, and that the lab's research focuses on large-scale reinforcement learning and recursive self-improvement, with iterated distillation and amplification (IDA) as the core method, proven publicly on models from 3B to 600B+ parameters. SPC is backing the founders, who have known each other for 14 years, alongside Benchmark, TQ Ventures, Atreides Management, Nexus Venture Partners, and Zscaler.

Agarwal 宣布，post-training 研究实验室 DeepCogito 正在公布 4300 万美元 A 轮融资。他认为 AI 的前沿将由 post-training 决定，该实验室的研究聚焦大规模强化学习和递归自我改进，核心方法是 iterated distillation and amplification（IDA），并已在 3B 到 600B+ 参数的模型上公开验证。SPC 与 Benchmark、TQ Ventures、Atreides Management、Nexus Venture Partners 和 Zscaler 一起支持这对相识 14 年的创始人。

- [Aditya Agarwal on DeepCogito's Series A](https://x.com/adityaag/status/2092679288869019700)

### Matt Turck: VC at FirstMark
Turck called the NVIDIA-Hugging Face deal "truly a win-win-win": NVIDIA becomes officially the center of open source AI with Nemotron and now Hugging Face, Hugging Face scores a huge win and gets "the perfect home," and open source AI wins. In a guest spot on a show hosted by Dan Nathan, he covered why the best venture firm in the world might be NVIDIA, the "hyper power law," why apps are becoming labs faster than labs are becoming apps, RSI and "building God," AI bubble versus duration mismatch concerns, and learning to stop underestimating China.

Turck 称 NVIDIA 与 Hugging Face 的交易「真的是三赢」：NVIDIA 凭借 Nemotron 和现在的 Hugging Face 正式成为开源 AI 的中心，Hugging Face 大获全胜并找到了「完美的家」，开源 AI 也赢了。他还在 Dan Nathan 主持的节目里做客，聊了为什么世界上最好的 VC 公司可能是 NVIDIA、「hyper power law」、为什么 apps 变成 labs 的速度比 labs 变成 apps 更快、RSI 与「building God」、AI 泡沫与久期错配的担忧，以及学会不再低估中国。

- [Matt Turck on NVIDIA and Hugging Face](https://x.com/mattturck/status/2092808287280329097)
- [Matt Turck on his guest appearance](https://x.com/mattturck/status/2092688916969095587)

### Zara Zhang: Builder
Zhang argued that most PR teams at large companies exist in order to block real marketing and branding, calling it ironic that a function designed to enhance a company's brand ends up being antithetical to it. She also called out a double standard in AI writing: many people seem to apply the logic of "it's fine if I use it; it's not fine if YOU use it."

Zhang 认为，大公司里大多数 PR 团队的存在意义就是阻挠真正的营销和品牌建设，一个本应提升品牌的功能最终反而与品牌背道而驰，这很讽刺。她还指出了 AI 写作中的双重标准：很多人似乎在用「我用可以，你用就不行」的逻辑。

- [Zara Zhang on PR teams](https://x.com/zarazhangrui/status/2092774923320369394)
- [Zara Zhang on the AI writing double standard](https://x.com/zarazhangrui/status/2092773720112988366)

### Peter Steinberger: OpenClaw + OpenAI
Steinberger noted that Codex's visualization feature "got really good," and, with a contrarian jab at the AI hype cycle, asked "maybe it is a bubble?"

Steinberger 称赞 Codex 的可视化功能「变得真的很强」，并且对 AI 的炒作周期抛出一个反问：「也许这就是泡沫？」

- [Peter Steinberger on Codex visualization](https://x.com/steipete/status/2092822007843061823)
- [Peter Steinberger on the bubble question](https://x.com/steipete/status/2092756010280853815)

### Dan Shipper: CEO of Every
Shipper observed that this is a "definite golden age for polymaths and philosophers," a useful antidote to epistemic despair, calling it an incredible time.

Shipper 认为，现在是「通才和哲学家的黄金时代」，也是对抗认知绝望的一剂良药，并称之为不可思议的时代。

- [Dan Shipper on the golden age for polymaths](https://x.com/danshipper/status/2092636264902148262)

## Podcast

### AI & I by Every: A $10B Hedge Fund's AI Playbook (Best of the Pod)

The Takeaway: Making AI fluency a firm-wide, non-negotiable requirement, not a perk for the curious, is how a ~$10B hedge fund plans to capture the edge before its competitors do.

核心 takeaway：把 AI 熟练度变成全公司非做不可的硬性要求，而不是留给好奇者的可选福利，这是一家管理规模接近 100 亿美元的基金打算赶在竞争对手之前拿到优势的方法。

Will, the CEO, CIO, and managing partner of Walleye, a hedge fund managing close to $10 billion with about 400 employees, is an unlikely AI evangelist. He's a math PhD who started his career writing code for algorithmic strategies, so machines doing financial work is nothing new to him. What changed, he argues, is that large language models made these tools genuinely useful to non-technical people, especially on unstructured data, and firms that treat AI as optional will fall behind.

Will 是 Walleye 的 CEO、CIO 兼管理合伙人。这家对冲基金管理着接近 100 亿美元的资产，员工约 400 人。他并不是典型的 AI 布道者：他是数学博士，职业生涯从为算法策略写代码开始，所以机器参与金融工作对他而言并不新鲜。他说真正改变的是，大语言模型让这些工具对非技术人群也变得真正好用，尤其是在非结构化数据上，而把 AI 当成可选项的公司会被甩在后面。

His proof is a firm-wide email titled "AI at Walleye, a challenge to all of us." It opens: "Using ChatGPT is not cheating. That's a non applicable idea from academia. As a hedge fund, we should be ashamed to leave money on the table by ignoring tools that make us faster, smarter, and more effective." Not using these tools, he says, is like refusing to use the Internet in 1995 because it wasn't perfect.

他给出的证据是一封发往全公司的邮件，标题是「AI at Walleye, a challenge to all of us」。开头写道：「用 ChatGPT 不算作弊，那是学术界才适用的想法。作为一家对冲基金，放着能让我们更快、更聪明、更高效的工具不用，白白把钱留在桌上，我们该感到羞愧。」他说，不用这些工具，就像因为 1995 年的互联网还不完美就拒绝使用它。

The playbook is less about exotic models than culture and plumbing: mandatory AI training for every employee regardless of department, weekly internal AI meetups, leaderboards for tool usage, and incentives for anyone whose tool suggestion gets rolled out firm-wide. Around 75% of the firm now uses ChatGPT-class tools almost daily, and about a third use AI coding tools like Windsurf. Internally, nearly every Zoom and call is recorded into a data lake the team calls the Borg, and LLMs process risk-call transcripts to remember, surface insights, and even predict.

这套打法的重点不在新奇的模型，而在文化和基础设施：所有员工不论部门都必须接受 AI 培训，每周有内部 AI 聚会，有工具使用排行榜，谁建议的工具被全公司采用，谁就获得激励。现在大约 75% 的员工几乎每天都用 ChatGPT 这类工具，约三分之一的人用 Windsurf 这类 AI 编程工具。公司内部几乎每一场 Zoom 和通话都会被录下来，汇入一个被他们称为 Borg 的数据湖，LLM 会处理风控电话的转录文本，用来记忆、提炼洞察，甚至做预测。

Will is adamant that tools don't replace thinking: "These tools don't negate the necessity to think. If anything, they should just give you more time to think." His first principles are incentives, intellectual honesty, and measurement, and he keeps a daily AI-assisted journal because "you can't manage what you can't measure." AI, he insists, is fun, not scary, and leaders have a responsibility to prepare their people for what's coming next.

Will 坚持认为工具不会取代思考：「这些工具不会消除思考的必要性，如果要说，它们只是给了你更多时间去思考。」他的第一性原理是激励、智识上的诚实和量化，「你无法管理你无法衡量的东西」，他还会用 AI 辅助写每日日志。AI 在他看来是乐趣而不是恐惧，而领导者的责任，是让员工为即将到来的变化做好准备。

Source: https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

## Blog

### Claude Blog: Claude in Chrome is generally available
Claude in Chrome is now generally available on every paid Claude plan, and Claude can take actions autonomously in the browser instead of needing approval for every one. A safety classifier validates each action before it's performed to ensure it's safe and matches your request. The extension matters because many everyday tools connect to Claude, but internal dashboards, legacy systems, and vendor portals don't; Claude in Chrome lets Claude access those with your existing logins, viewing pages and doing things like reading and typing text, clicking links, navigating, and filling out forms.

Claude in Chrome 现在已在所有付费 Claude 套餐上正式可用，Claude 可以在浏览器中自主执行操作，而不再需要每个动作都获得批准。每个动作执行前都会经过安全分类器校验，确保它安全且符合你的请求。这个扩展之所以重要，是因为很多日常工具已经接入了 Claude，但内部 dashboard、遗留系统和供应商门户没有；Claude in Chrome 让 Claude 用你现有的登录态访问这些系统，查看页面并执行读取、输入文本、点击链接、页面跳转和填写表单等操作。

The release leans on hardened prompt injection defenses. Claude is trained against a growing library of attacks, probes screen web content before Claude acts on it, and a classifier reviews every action against what you originally asked: "If the action doesn't match your request, it's blocked." In the latest evaluations using stronger attacks from professional red-teamers, with probes plus the automatic approval safety classifiers, no attacks succeeded against Claude Sonnet 5, Opus 5, or Mythos 5, and 0.3% of attacks succeeded against Fable 5, all manually verified as low-severity scenarios that Anthropic is working to mitigate. Claude in Chrome is available from the Chrome Web Store, Enterprise admins can limit it to approved domains, and it doesn't yet run on other Chromium browsers or on mobile.

这次发布依托的是加强过的 prompt injection 防线。Claude 会针对不断扩充的攻击库进行训练，probe 会在 Claude 行动前筛查网页内容，分类器则会对照你最初的请求审查每个动作：「如果动作与你的请求不符，就会被拦截。」在采用专业红队更强攻击的最新评估中，开启 probes 和自动批准分类器后，没有任何攻击成功突破 Claude Sonnet 5、Opus 5 和 Mythos 5，只有 0.3% 的攻击成功突破了 Fable 5，Anthropic 已人工确认这些都是低风险场景，并正在着手缓解。Claude in Chrome 可从 Chrome Web Store 安装，Enterprise 管理员可以把它限制在批准的域名内，目前还不支持其他 Chromium 浏览器和移动端。

- [Claude Blog: Claude in Chrome is generally available](https://claude.com/blog/claude-in-chrome-generally-available)

### Claude Blog: Claude gets its own browser in Cowork
Claude now has a browser built into Claude Cowork on the desktop app. When a task needs a website, a browser opens in the side panel and Claude navigates webpages, reads them, clicks, and types, so you can hand off the web part of the task and stay where you are: Claude can fill in a form, pull numbers from a dashboard, or work through a portal that has no connector. No extension, no setup, and nothing is shared from your own browser unless you choose.

Claude 现在在桌面端的 Claude Cowork 中内置了浏览器。当任务需要使用网站时，侧边栏会打开浏览器，Claude 自己导航网页、阅读、点击和输入，你可以把任务里涉及 web 的部分交给它，自己留在原地：Claude 可以填表、从 dashboard 里取数字，或者处理没有连接器的门户。无需扩展、无需设置，除非你主动选择，否则不会从你的浏览器共享任何内容。

It's Claude's browser, not yours: Claude never sees your tabs, bookmarks, or passwords, and you bring logins over site by site from Chrome, Edge, or Firefox on macOS and from Firefox on Windows and Linux, with banking, email, and single sign-on sites left out unless you include them. The built-in browser is for handing web tasks to Claude while you keep working; Claude in Chrome is for pages you already have open with accounts you're signed in to, and you can switch anytime in Settings → Cowork → Preferred browser. The same prompt injection safeguards as Claude in Chrome apply, though those measures "meaningfully reduce the risk but can't eliminate it," so Anthropic recommends starting on sites you trust. The rollout begins this week for Pro, Max, and Team plans in the desktop app on macOS, Windows, and Linux (in beta), and Enterprise admins can enable it today.

这是 Claude 的浏览器，不是你的：Claude 永远看不到你的标签页、书签或密码，你可以逐站点把登录态从 macOS 的 Chrome、Edge、Firefox 以及 Windows 和 Linux 的 Firefox 带过来，银行、邮箱和单点登录站点除非你主动加入，否则默认排除。内置浏览器用于把 web 任务交给 Claude 同时你继续干活；Claude in Chrome 则用于处理你已经打开的页面和已登录的账号，你可以随时在 Settings → Cowork → Preferred browser 里切换。它和 Claude in Chrome 使用相同的 prompt injection 防护，但这些措施「能显著降低风险，却无法完全消除」，所以 Anthropic 建议从你信任的网站开始。本周起，Pro、Max 和 Team 套餐的 macOS、Windows、Linux（beta）桌面应用会陆续上线，Enterprise 管理员今天就可以启用。

- [Claude Blog: Claude gets its own browser in Cowork](https://claude.com/blog/cowork-built-in-browser)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
