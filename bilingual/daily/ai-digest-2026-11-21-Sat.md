[English](../../en/daily/ai-digest-2026-11-21-Sat.md) | [中文](../../zh/daily/ai-digest-2026-11-21-Sat.md) | [Bilingual](./ai-digest-2026-11-21-Sat.md)

---

# AI Builders Digest

## Reader's Briefing / 导读
The agentic interface is moving from chat into workflows. Linear COO Christina Cordova says more than half of new issues are now created by agents after the company rebuilt around its MCP server, Triage Intelligence and Loops. Google VP Josh Woodward shipped a Gemini Neon experiment from a Friday afternoon into production, OpenAI's Thibault Sottiaux points to a faster and simpler desktop app, and AI tutorial creator Peter Yang shows how to turn Antigravity's web interface into a mobile remote control. The product shifts span agent workflows, rapid experiments and interface polish.

agent 的交互界面正在从聊天窗口转向工作流。Linear COO Christina Cordova 表示，在公司围绕 MCP server、Triage Intelligence 和 Loops 重构产品后，如今新建 issue 中超过一半由 agent 创建。Google VP Josh Woodward 把一个周五的实验性 Gemini Neon 功能直接推向生产环境，OpenAI 的 Thibault Sottiaux 则强调桌面应用变得更快、更简单、更好用，AI 教程创作者 Peter Yang 还展示了如何把 Antigravity 的网页界面变成手机远程控制。这些动作分别落在 agent 工作流、快速试验和界面打磨上。

Agent design is moving from instructions toward intent. Box CEO Aaron Levie says agents now do better when given goals and enough freedom, because they can connect dots across a solution space larger than any one person can hold. Cordova adds a counterweight: not every feature needs to be its own agent, and some automation should simply be part of the product. Vercel CEO Guillermo Rauch's personal-shopper example makes the infrastructure point: channels, payments, durability and encryption have to mature before an agent feels shippable.

agent 的设计重心正在从指令转向目标。Box CEO Aaron Levie 认为，与其精确告诉 agent 每一步怎么做，不如给它目标和足够自由，因为模型能在比任何个人都更大的解空间里连接线索。Cordova 补充了另一面：并非所有功能都需要做成 agent，有些自动化直接融入产品更好。Vercel CEO Guillermo Rauch 的个人购物 agent 例子说明了基础设施的重要性：渠道、支付、持久性和加密成熟后，agent 才真正具备可交付性。

Go-to-market discipline matters as much as model capability. Cordova reset Linear's goal from enterprise to growth-stage accounts when the company had one salesperson, waited until 2025 to pursue enterprise, and says Linear has at least 10xed since she joined. The company now has 40,000 paying customers, remains seat-based for its core product, and prices some AI features against transparent model costs.

进入市场的节奏和模型能力同样重要。Cordova 在 Linear 只有一名销售人员时，把公司目标从企业客户改为增长型客户，直到 2025 年才正式推进企业市场，并称她加入后公司至少增长了 10 倍。Linear 目前有 40,000 名付费客户，核心产品仍按席位收费，部分 AI 功能则按照透明的模型成本计价。

AI costs are pushing new pricing and trust rules. Cordova says new AI features enter beta with clear notice that they may later be paid, and Linear avoids turning previously free features into paid ones. Rauch calls ISO 42001 the SOC 2 of AI and says Vercel's AI infrastructure is audited annually by an accredited third party. Enterprise buyers are being asked to trust the model and the surrounding system together.

AI 成本正在推动新的定价与信任规则。Cordova 说，新的 AI 功能会先以 beta 形式上线，并明确告知用户未来可能收费，Linear 也避免把原本免费的功能改成付费。Rauch 把 ISO 42001 称为 AI 领域的 SOC 2，并表示 Vercel 的 AI 基础设施每年由认证第三方审计。企业买家不只在评估模型输出，也在评估整套系统是否可信。

Capability progress is outrunning familiar evaluation and relationship signals. Replit CEO Amjad Masad wants to compare two simultaneous Riemann proofs, one AI and one human, on elegance. SPC General Partner Aditya Agarwal cites Riemann progress and a pancreatic-cancer pill as reasons the debate over the "AI trade" misses the point. FirstMarkCap VC Matt Turck's conference story shows automated outreach can create the appearance of persistence without real context, while builder Zara Zhang warns that client-facing artifacts invite clients to ask why they could not have prompted the tool themselves.

能力进展正在超出熟悉的评估方式和关系信号。Replit CEO Amjad Masad 想比较两份同时出现的 Riemann 证明，一份来自 AI，一份来自人类，尤其看两者的优雅程度。SPC General Partner Aditya Agarwal 用 Riemann 进展和胰腺癌药丸举例，认为争论“AI trade”好不好没有抓住重点。FirstMarkCap 投资人 Matt Turck 的会议故事说明，自动外联可以制造持续跟进的样子，却没有真实上下文，而 builder Zara Zhang 提醒，直接给客户发送生成式产物会让客户觉得他们自己也能 prompt 出同样的东西。

Policy and distribution are part of the builder stack. Y Combinator President and CEO Garry Tan argues California should encourage startups instead of an asset seizure tax and spend public money wisely. Peter Yang's mobile setup shows builders improvising distribution when a native app is missing, and Nan Yu's note about improvements for actions performed dozens to hundreds of times a day is a reminder that small interface wins compound inside agent-heavy workflows.

政策与分发同样构成 builder 的底层环境。Y Combinator President & CEO Garry Tan 认为，加州应当鼓励新想法和创业公司，而不是 asset seizure tax，并让政府把收入明智地花在真正帮助人们的事情上。Peter Yang 展示了在 Antigravity 没有移动应用时，如何通过网页版和“添加到主屏幕”把线程变成手机远程控制。Nan Yu 则强调高频操作的性能和体验改进，这些动作一天可能执行几十到几百次。

## X / Twitter

### Google VP Josh Woodward
Josh Woodward says a few people were experimenting with Gemini Neon on the Friday afternoon before the holiday week when they saw a user's post they liked, built the idea and put it into production. Users can find the result by long-clicking the model picker on the web.

Josh Woodward 说，团队在假期前的周五试用 Gemini Neon 时看到一个用户帖子，很喜欢其中的想法，于是把它做出来并直接推入生产环境。现在用户可以在网页版长按模型选择器体验。

Source / 来源: https://x.com/joshwoodward/status/2123943606906138868

### Thibault Sottiaux, Codex and ChatGPT at OpenAI
Thibault Sottiaux says the team is locked in and asks users to upgrade the desktop app. He describes the new version as faster, simpler and much more pleasant to use.

Thibault Sottiaux 表示团队状态很专注，并请用户升级桌面应用。他说新版更快、更简单，也顺手得多。

Source / 来源: https://x.com/thsottiaux/status/2123861214644347122

### AI tutorial creator Peter Yang
Peter Yang shares a mobile workaround for Antigravity with Neon: open its web interface, tap see more and share, then choose Add to Home Screen. He says Antigravity does not yet have a mobile app, but the remote-control setup beats Claude's because all threads are available by default.

Peter Yang 分享了在 Neon 上使用 Antigravity 的移动端技巧：打开网页界面，点开更多选项和分享按钮，再选择“添加到主屏幕”。他说 Antigravity 还没有移动应用，但这种远程控制比 Claude 的更好，因为所有线程默认可见。

Source / 来源: https://x.com/petergyang/status/2123879309463228445

### Nan Yu, product for Codex at OpenAI
Nan Yu highlights performance and quality-of-life gains for actions users perform dozens to hundreds of times a day.

Nan Yu 提到，针对用户每天执行几十到几百次的操作，团队取得了明显的性能和体验改进。

Source / 来源: https://x.com/thenanyu/status/2123983081577267264

### Replit CEO Amjad Masad
Amjad Masad says two separate Riemann proofs, one from AI and one from a human, are arriving at the same time. Assuming both are correct, he wants to compare them, especially for elegance.

Amjad Masad 说，两份 Riemann 证明几乎同时出现，一份来自 AI，一份来自人类。假设两份都正确，他很想比较它们在优雅程度上的差别。

Source / 来源: https://x.com/amasad/status/2123874539218010491

### Vercel CEO Guillermo Rauch
Guillermo Rauch says a personal shopper agent was his hello world on an internal pre-release version of Eve, but much of the infrastructure was missing. He says agentcardhq now exists, models are better, iMessage and WhatsApp channels are mature, and performance has improved without sacrificing durability or encryption, making it possible to ship a Muse or Instinct-caliber platform on Vercel's open intelligence stack. Separately, he calls ISO 42001:2023 the SOC 2 of AI and says Vercel's AI infrastructure is audited annually by an accredited third party.

Guillermo Rauch 说，他在 Eve 的内部预发布版本上把个人购物 agent 当作 hello world，当时很多基础设施还不存在。现在 agentcardhq 已经出现，模型更强，iMessage 和 WhatsApp 渠道更成熟，性能大幅提升，同时没有牺牲持久性和加密，因此可以在 Vercel 的开放智能栈上交付 Muse 或 Instinct 级别的平台。他还把 ISO 42001:2023 称为 AI 领域的 SOC 2，并表示 Vercel 的 AI 基础设施每年由认证第三方审计。

Sources / 来源: https://x.com/rauchg/status/2123879031049449791, https://x.com/rauchg/status/2123869175085191298

### Box CEO Aaron Levie
Aaron Levie argues that model capability has jumped enough that agents work better with goals and freedom than with precise instructions. A year ago builders had to spell out how to design and develop an idea, but now an agent can connect dots across a much larger solution space and may produce a better implementation. He expects the shift to reach finance, legal, life sciences, cyber and other domains where no person can hold all the relevant knowledge.

Aaron Levie 认为，模型能力出现了明显跃升，与其精确告诉 agent 怎么做，不如让它们带着目标和自由去解决问题。一年前，开发者必须把产品设计和开发方式讲得很清楚，否则几乎不会成功，现在 agent 能在更大的解空间里连接线索，可能给出更好的实现。他预计这种变化会进入金融、法律、生命科学、网络安全等众多领域，工作方式将从下指令转向给目标和自由。

Source / 来源: https://x.com/levie/status/2123686350410912145

### Y Combinator President and CEO Garry Tan
Garry Tan argues that California does not need an asset seizure tax. He says it should encourage new ideas and startups, then spend public money wisely on things that help people, and he says ivory-tower academics and SEIU-HNW union bosses have it wrong.

Garry Tan 认为，加州不需要 asset seizure tax。他说加州应当鼓励新想法和创业公司，再把公共资金明智地花在帮助人们的事情上，并称象牙塔里的学者和 SEIU-HNW 工会领袖判断错了。

Source / 来源: https://x.com/garrytan/status/2123796297836896292

### FirstMarkCap VC Matt Turck
Matt Turck tells a cautionary story about automated agentic emailing. A prospect emailed twice to meet at Slush and then three more times after one reply, but when they met by chance, the prospect read Turck's name tag twice, showed no recognition and walked away.

Matt Turck 讲了一个关于自动 agent 外联的故事。对方为在 Slush 见面连发多封邮件，Turck 只回了一封，后来两人偶遇，对方却两次看他的名牌，明显不知道他是谁，只说了句“oh hi”就走开了。

Source / 来源: https://x.com/mattturck/status/2123777488786538982

### Builder Zara Zhang
Zara Zhang warns against sending clients Claude Artifacts or ChatGPT-generated sites because it can make them feel they could have prompted the tool themselves. She also writes, "If you curate, you should create."

Zara Zhang 提醒，不要把 Claude Artifacts 或 ChatGPT 生成的网站直接发给客户，因为客户会觉得“我自己也能 prompt Claude 或 Codex”。她还写道：“If you curate, you should create.”

Sources / 来源: https://x.com/zarazhangrui/status/2123813583339532321, https://x.com/zarazhangrui/status/2123692630655873269

### SPC General Partner and Bevel Health Co-founder Aditya Agarwal
Aditya Agarwal writes that "We are solving Riemann and also crushing pancreatic cancer with a pill," then mocks the debate over whether the "AI trade" is good.

Aditya Agarwal 写道：“We are solving Riemann and also crushing pancreatic cancer with a pill,” 然后反问是否还要争论“AI trade”好不好。

Source / 来源: https://x.com/adityaag/status/2124019178843894078

## Podcast

### Scaling Linear’s GTM to $100M ARR — Cristina Cordova, COO
**Latent Space**

**The Takeaway:** Linear's path to scale came less from building a large sales machine than from sequencing markets, rebuilding the product around agentic workflows, and pricing AI in ways customers could understand.

**核心观点：** Linear 的规模化靠的不是迅速扩张销售团队，而是按顺序打开市场、围绕 agent 工作流重构产品，并用客户能理解的方式为 AI 收费。

Christina Cordova, COO of Linear, joined in 2023 after leading platform work at Notion and spending seven and a half years at Stripe. Linear then had one salesperson, no public-company customers and no account above roughly 500 seats. Rather than chasing enterprise immediately, she reset the company goal to winning growth-stage companies that already had a competing tool. Only in 2025 did Linear declare an enterprise push. Cordova says the company has at least 10xed since she joined and now has 40,000 paying customers.

Christina Cordova 是 Linear 的 COO，2023 年加入，此前在 Notion 负责平台业务，并在 Stripe 工作七年半。当时 Linear 只有一名销售人员，没有上市公司客户，单个客户规模也没有超过约 500 个席位。她没有立刻追逐企业客户，而是把公司目标改为赢得已经使用竞品工具的增长型公司。直到 2025 年，Linear 才正式推进企业市场。Cordova 说，她加入以来公司至少增长了 10 倍，现在有 40,000 名付费客户。

The product story changed just as sharply. Linear's CEO published "issue tracking is dead," and Cordova describes a shift from manual ticket movement to a system where agents create, assign and act on work. More than 50% of issues created on Linear now come from agents, about a year and a half after its MCP server launched. The company built features such as Triage Intelligence and Loops, but Cordova is careful about the boundary: "not everything necessarily needs to be an agent. It can just be part of the product."

产品叙事也发生了同样剧烈的变化。Linear CEO 发布“issue tracking is dead”后，Cordova 把公司重心从人工流转工单，转向由 agent 创建、分配并执行工作的系统。MCP server 上线约一年半后，Linear 上超过 50% 的 issue 由 agent 创建。公司推出了 Triage Intelligence 和 Loops，但 Cordova 对边界很谨慎：“not everything necessarily needs to be an agent. It can just be part of the product.”

Her pricing and organization choices follow the same discipline. Linear remains seat-based for its core product, while some AI features are usage-based and billed transparently against model costs. New AI capabilities start in beta, and customers are told they may eventually be paid. Headcount stays deliberately lean at about 170 people, with no SDR layer, experienced technical account executives, in-house support and work trials. Cordova's lesson is that advantages now come from speed with quality and from a team that can keep changing. "This new world," she says, "ultimately rewards speed and operating in a very different way."

定价和组织选择遵循同样的纪律。Linear 的核心产品仍按席位收费，部分 AI 功能按使用量收费，并按照模型成本透明计价。新的 AI 能力先进入 beta，并提前告知客户未来可能收费。公司保持约 170 人的精简规模，不设 SDR，招聘有技术销售经验的 AE，坚持内部支持团队，并用工作试用期筛选人才。Cordova 的结论是，优势来自兼顾质量的速度，以及一支能持续变化的团队。她说，这个新世界最终奖励的是速度，以及用很不一样的方式运营。

Source / 来源: https://www.youtube.com/watch?v=x0VSm6IjcDQ

## Blog
The validated blog feed contained no new qualifying items in its 72-hour lookback window.

已校验的博客 feed 在 72 小时回看窗口内没有新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
