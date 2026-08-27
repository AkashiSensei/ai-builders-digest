[English](../../en/daily/ai-digest-2026-08-28-Fri.md) | [中文](./ai-digest-2026-08-28-Fri.md) | [双语](../../bilingual/daily/ai-digest-2026-08-28-Fri.md)

---

# AI Builders Digest

## 导读

**1. Claude 把浏览器装进了 agent 的工作流。** Claude 现在在桌面端 Cowork 中内置了自己的浏览器：当任务涉及网站时，侧边栏会打开浏览器，Claude 自己导航、填表、完成工作，无需安装任何东西，除非你主动选择，否则不会共享你自己浏览器里的内容。与此同时，Claude in Chrome 已在所有付费套餐上正式可用，Claude 可以在浏览器中自主执行操作，每个动作在执行前都会经过安全分类器校验。在最新的 prompt injection 评估中，开启 probes 与自动批准分类器后，没有任何攻击能突破 Claude Sonnet 5、Opus 5 和 Mythos 5，只有 0.3% 的攻击成功突破了 Fable 5，且都发生在低风险场景。

**2. 企业正在涌向 applied AI 层。** Box CEO Aaron Levie 公布 Q2 财报：季度营收 3.211 亿美元，同比增长 9%（按固定汇率计算增长 11%，是 14 个季度以来的最高固定汇率增速），并把全年营收目标上调至 12.9 亿美元，动力来自企业希望在 AI 时代从非结构化数据中挖掘更多价值。他的观点是：「世界上最先进的超级智能，其价值只取决于它能访问到的企业知识。」企业需要能随时在流程中切换模型和 agent 的 applied AI 平台，同时具备防护栏、完整的审计日志和实时安全告警。

**3. post-training 成为新的前沿押注。** SPC 合伙人 Aditya Agarwal 宣布，post-training 研究实验室 DeepCogito 正在公布 4300 万美元 A 轮融资，研究方向是大规模强化学习和递归自我改进，核心方法是 iterated distillation and amplification（IDA），创始团队已经在 3B 到 600B+ 参数的模型上公开验证过这套方法。FirstMark 的 Matt Turck 称 NVIDIA 与 Hugging Face 的交易是「三赢」，让 NVIDIA 正式成为开源 AI 的中心；他还在一次播客客串中提出，世界上最好的 VC 公司可能是 NVIDIA，而且 apps 变成 labs 的速度比 labs 变成 apps 更快。

**4. agent 基础设施变得更快速、更安全。** Vercel CEO Guillermo Rauch 展示了面向 agent 的全球计算能力：多区域、故障转移、默认最高 10,000 个并发 sandbox，以及每分钟 5,000 个 vCPU 的扩展速度，还有更多区域即将上线；他还发布了 vercel security check CLI，可以像 is-agentic 一样让 agent 在 human-in-the-loop 或 cron 模式下帮你改善安全态势。Anthropic 的 Thariq（Claude Code）上线了 SendFeedback 工具，用户可以直接让 Claude 起草并确认反馈；他还指出多个客户正被欺诈请求盯上。

**5. 围绕 AI 的文化争论在升级。** Zara Zhang 认为，大公司里大多数 PR 团队的存在意义就是阻挠真正的营销和品牌建设，一个本应提升品牌的功能最终反而与品牌背道而驰；她还指出，在 AI 写作这件事上，很多人都在用双重标准：「我用可以，你用就不行。」Dan Shipper 称这是通才和哲学家的黄金时代；Peter Steinberger 则反问「也许这就是泡沫？」，并称赞 Codex 的可视化功能「变得真的很强」。

## X / Twitter

### Claude（Anthropic 的 AI 助手）
Claude 宣布，Cowork 现在内置了自己的浏览器：当任务涉及网站时，Cowork 的侧边栏会打开浏览器，由 Claude 导航、填表并完成工作。无需安装任何东西，浏览器就在桌面应用里，并且与你自己的浏览器和登录状态相互隔离，未来一周内会向所有付费套餐的桌面应用推送。如果你更喜欢用自己的浏览器，Claude in Chrome 现在已在所有付费套餐上正式可用，老用户继续默认使用它。

- [Claude 谈 Cowork 内置浏览器](https://x.com/claudeai/status/2092755571455758427)
- [Claude 谈桌面应用推送](https://x.com/claudeai/status/2092755573183828193)
- [Claude 谈 Claude in Chrome 正式可用](https://x.com/claudeai/status/2092755574563741871)

### Aaron Levie（Box CEO）
Levie 分享了 Box 的 Q2 业绩和他对 applied AI 层的判断：季度营收达到 3.211 亿美元，同比增长 9%，按固定汇率计算增长 11%（14 个季度以来的最高固定汇率增速），公司在企业 AI 转型需求的推动下把全年营收目标上调至 12.9 亿美元。他认为「世界上最先进的超级智能，其价值只取决于它能访问到的企业知识」，而从合同到财务文件再到产品路线图，企业知识的绝大部分都在非结构化数据里。随着外部 AI agent 与企业数据交互，企业需要具备完善防护栏、完整审计日志和实时安全告警的 applied AI 平台，并且能随时在工作流中切换模型和 agent。

- [Aaron Levie 谈 Box Q2 与 applied AI 层](https://x.com/levie/status/2092702955292230100)

### Guillermo Rauch（Vercel CEO）
Rauch 展示了 Vercel 面向 agent 的全球计算能力：多区域、故障转移、默认最高 10,000 个并发 sandbox，以及每分钟 5,000 个 vCPU 的扩展速度，还有更多区域即将上线。他还发布了安全 dashboard，以及 vercel security check CLI，可以像 is-agentic 一样让 agent 在 human-in-the-loop 或 cron 模式下帮你改善安全态势。

- [Guillermo Rauch 谈面向 agent 的全球计算](https://x.com/rauchg/status/2092735785460277627)
- [Guillermo Rauch 谈 security check CLI](https://x.com/rauchg/status/2092621371914482026)

### Thariq（Anthropic 的 Claude Code）
Thariq 上线了一个改动，让 Claude 拥有 SendFeedback 工具：用户不用再手动输入 /feedback 写报告，直接让 Claude 起草并确认即可，他说这些反馈能帮助团队改进和定位问题。他还指出，多个客户正被欺诈请求盯上，感谢 Stripe 正在做的帮助，并提醒这类攻击会伤害所有人向合法用户提供服务的能力。

- [Thariq 谈 SendFeedback 工具](https://x.com/trq212/status/2092696449616376140)
- [Thariq 谈欺诈请求](https://x.com/trq212/status/2092729394565657010)

### Aditya Agarwal（SPC 合伙人）
Agarwal 宣布，post-training 研究实验室 DeepCogito 正在公布 4300 万美元 A 轮融资。他认为 AI 的前沿将由 post-training 决定，该实验室的研究聚焦大规模强化学习和递归自我改进，核心方法是 iterated distillation and amplification（IDA），并已在 3B 到 600B+ 参数的模型上公开验证。SPC 与 Benchmark、TQ Ventures、Atreides Management、Nexus Venture Partners 和 Zscaler 一起支持这对相识 14 年的创始人。

- [Aditya Agarwal 谈 DeepCogito 的 A 轮](https://x.com/adityaag/status/2092679288869019700)

### Matt Turck（FirstMark 的 VC）
Turck 称 NVIDIA 与 Hugging Face 的交易「真的是三赢」：NVIDIA 凭借 Nemotron 和现在的 Hugging Face 正式成为开源 AI 的中心，Hugging Face 大获全胜并找到了「完美的家」，开源 AI 也赢了。他还在 Dan Nathan 主持的节目里做客，聊了为什么世界上最好的 VC 公司可能是 NVIDIA、「hyper power law」、为什么 apps 变成 labs 的速度比 labs 变成 apps 更快、RSI 与「building God」、AI 泡沫与久期错配的担忧，以及学会不再低估中国。

- [Matt Turck 谈 NVIDIA 与 Hugging Face](https://x.com/mattturck/status/2092808287280329097)
- [Matt Turck 谈播客客串](https://x.com/mattturck/status/2092688916969095587)

### Zara Zhang
Zhang 认为，大公司里大多数 PR 团队的存在意义就是阻挠真正的营销和品牌建设，一个本应提升品牌的功能最终反而与品牌背道而驰，这很讽刺。她还指出了 AI 写作中的双重标准：很多人似乎在用「我用可以，你用就不行」的逻辑。

- [Zara Zhang 谈 PR 团队](https://x.com/zarazhangrui/status/2092774923320369394)
- [Zara Zhang 谈 AI 写作的双重标准](https://x.com/zarazhangrui/status/2092773720112988366)

### Peter Steinberger（OpenClaw + OpenAI）
Steinberger 称赞 Codex 的可视化功能「变得真的很强」，并且对 AI 的炒作周期抛出一个反问：「也许这就是泡沫？」

- [Peter Steinberger 谈 Codex 可视化](https://x.com/steipete/status/2092822007843061823)
- [Peter Steinberger 谈泡沫问题](https://x.com/steipete/status/2092756010280853815)

### Dan Shipper（Every CEO）
Shipper 认为，现在是「通才和哲学家的黄金时代」，也是对抗认知绝望的一剂良药，并称之为不可思议的时代。

- [Dan Shipper 谈通才与哲学家的黄金时代](https://x.com/danshipper/status/2092636264902148262)

## Podcast

### AI & I by Every：A $10B Hedge Fund's AI Playbook (Best of the Pod)

核心 takeaway：把 AI 熟练度变成全公司非做不可的硬性要求，而不是留给好奇者的可选福利，这是一家管理规模接近 100 亿美元的基金打算赶在竞争对手之前拿到优势的方法。

Will 是 Walleye 的 CEO、CIO 兼管理合伙人。这家对冲基金管理着接近 100 亿美元的资产，员工约 400 人。他并不是典型的 AI 布道者：他是数学博士，职业生涯从为算法策略写代码开始，所以机器参与金融工作对他而言并不新鲜。他说真正改变的是，大语言模型让这些工具对非技术人群也变得真正好用，尤其是在非结构化数据上，而把 AI 当成可选项的公司会被甩在后面。

他给出的证据是一封发往全公司的邮件，标题是「AI at Walleye, a challenge to all of us」。开头写道：「用 ChatGPT 不算作弊，那是学术界才适用的想法。作为一家对冲基金，放着能让我们更快、更聪明、更高效的工具不用，白白把钱留在桌上，我们该感到羞愧。」他说，不用这些工具，就像因为 1995 年的互联网还不完美就拒绝使用它。

这套打法的重点不在新奇的模型，而在文化和基础设施：所有员工不论部门都必须接受 AI 培训，每周有内部 AI 聚会，有工具使用排行榜，谁建议的工具被全公司采用，谁就获得激励。现在大约 75% 的员工几乎每天都用 ChatGPT 这类工具，约三分之一的人用 Windsurf 这类 AI 编程工具。公司内部几乎每一场 Zoom 和通话都会被录下来，汇入一个被他们称为 Borg 的数据湖，LLM 会处理风控电话的转录文本，用来记忆、提炼洞察，甚至做预测。

Will 坚持认为工具不会取代思考：「这些工具不会消除思考的必要性，如果要说，它们只是给了你更多时间去思考。」他的第一性原理是激励、智识上的诚实和量化，「你无法管理你无法衡量的东西」，他还会用 AI 辅助写每日日志。AI 在他看来是乐趣而不是恐惧，而领导者的责任，是让员工为即将到来的变化做好准备。

来源：https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

## Blog

### Claude Blog：Claude in Chrome is generally available
Claude in Chrome 现在已在所有付费 Claude 套餐上正式可用，Claude 可以在浏览器中自主执行操作，而不再需要每个动作都获得批准。每个动作执行前都会经过安全分类器校验，确保它安全且符合你的请求。这个扩展之所以重要，是因为很多日常工具已经接入了 Claude，但内部 dashboard、遗留系统和供应商门户没有；Claude in Chrome 让 Claude 用你现有的登录态访问这些系统，查看页面并执行读取、输入文本、点击链接、页面跳转和填写表单等操作。

这次发布依托的是加强过的 prompt injection 防线。Claude 会针对不断扩充的攻击库进行训练，probe 会在 Claude 行动前筛查网页内容，分类器则会对照你最初的请求审查每个动作：「如果动作与你的请求不符，就会被拦截。」在采用专业红队更强攻击的最新评估中，开启 probes 和自动批准分类器后，没有任何攻击成功突破 Claude Sonnet 5、Opus 5 和 Mythos 5，只有 0.3% 的攻击成功突破了 Fable 5，Anthropic 已人工确认这些都是低风险场景，并正在着手缓解。Claude in Chrome 可从 Chrome Web Store 安装，Enterprise 管理员可以把它限制在批准的域名内，目前还不支持其他 Chromium 浏览器和移动端。

- [Claude Blog：Claude in Chrome is generally available](https://claude.com/blog/claude-in-chrome-generally-available)

### Claude Blog：Claude gets its own browser in Cowork
Claude 现在在桌面端的 Claude Cowork 中内置了浏览器。当任务需要使用网站时，侧边栏会打开浏览器，Claude 自己导航网页、阅读、点击和输入，你可以把任务里涉及 web 的部分交给它，自己留在原地：Claude 可以填表、从 dashboard 里取数字，或者处理没有连接器的门户。无需扩展、无需设置，除非你主动选择，否则不会从你的浏览器共享任何内容。

这是 Claude 的浏览器，不是你的：Claude 永远看不到你的标签页、书签或密码，你可以逐站点把登录态从 macOS 的 Chrome、Edge、Firefox 以及 Windows 和 Linux 的 Firefox 带过来，银行、邮箱和单点登录站点除非你主动加入，否则默认排除。内置浏览器用于把 web 任务交给 Claude 同时你继续干活；Claude in Chrome 则用于处理你已经打开的页面和已登录的账号，你可以随时在 Settings → Cowork → Preferred browser 里切换。它和 Claude in Chrome 使用相同的 prompt injection 防护，但这些措施「能显著降低风险，却无法完全消除」，所以 Anthropic 建议从你信任的网站开始。本周起，Pro、Max 和 Team 套餐的 macOS、Windows、Linux（beta）桌面应用会陆续上线，Enterprise 管理员今天就可以启用。

- [Claude Blog：Claude gets its own browser in Cowork](https://claude.com/blog/cowork-built-in-browser)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
