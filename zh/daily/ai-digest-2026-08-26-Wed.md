[English](../../en/daily/ai-digest-2026-08-26-Wed.md) | [中文](./ai-digest-2026-08-26-Wed.md) | [双语](../../bilingual/daily/ai-digest-2026-08-26-Wed.md)

---

# AI Builders Digest

## 导读

**1. Claude 的记忆现在跨 Chat 和 Cowork 打通，且由你掌控。** Claude 宣布，记忆现在在 Chat 和 Claude Cowork 之间统一，Free、Pro 和 Max 套餐默认开启，所有记忆都以主题列表的形式保存在 Settings 中，可以查看、编辑或删除；健康、宗教信仰等敏感主题在 Settings 中手动开启前不会进入记忆。Claude Code 的 Boris Cherny 形容这次更新「更简单、更强大」，Anthropic 负责 Claude Code 和 Cowork 的 Cat Wu 则表示，让 Claude 记住一件事一次，就能在多个界面间共享这份上下文。

**2. 搜索的下一个时代是给 agent 用的，而不是给人用的。** 前 Twitter CEO、如今创立 Parallel Web Systems 的 Parag Agrawal 认为，「人类的点击数据是一种 bug」，面向 agent 的搜索应该依赖 agent 反馈而不是人类点击，他的赌注是 agent 带来的搜索量会超过人类的一千倍。Parallel 刚宣布与 Google Cloud 合作，作为其企业 agent API 的搜索与 grounding 服务商，还发布了 TurboNow，Agrawal 称它是市场上最快、质量最高的 agentic web search，同时正在用 Shapley 值设计分成方案，让内容所有者按数据创造的价值获得回报。

**3. agent 开发工具链变得更快速、更安全、更协作。** Vercel CEO Guillermo Rauch 发布 Run SDK，在动态 Code Mode 中用轻量 QuickJS 安全上下文执行代码，并宣布 Vercel Connect 正式可用，开发者可以创建 MCP client，以已认证用户身份查询 Notion 等服务。Google Labs 开放了 Play with Putty 的候补名单，这是一个可以实时协作 vibe coding 的工具。OpenAI 的 Thibault Sottiaux 介绍了面向团队和小公司的新方案，且没有 5 小时限制；Swyx 则提醒暂时别用 Codex 的 locked use 功能，因为不稳定的 macOS 特性本周两次把他锁在 macOS keychain 之外。

**4. applied AI 公司正处在一个窗口期。** Box CEO Aaron Levie 认为，AI 模型与企业底层工作流之间存在巨大差距，给 applied AI 公司留下「大量机会」：「世界要的不只是裸模型和 agent，它要的是问题被解决、结果被达成。」Meta 的 Madhu Guru 则在 eval 系列第九篇中指出，eval 失败大多因为团队把它们当成静态制品，它们需要随使用模式演进的路线图，从短上下文、单轮问答走向长上下文、多轮和主动式 agent。

**5. AI 的受益面与公众观感正在被重新讨论。** SPC 合伙人 Aditya Agarwal 说，普通大众反感数据中心建设「一点都不意外」，因为今天的 AI 主要服务知识工作者和收入最高的群体，他预计重大变化会出现在 AI 能治愈困扰所有人的疾病之时，并批评行业一直在制造恐惧。Sam Altman 预告「我们做了一颗芯片，而且它很快」；Peter Yang 则开源了 /fuck-cancer，一个帮助患者和照护者应对癌症诊疗的 AI skill，用一份实时更新的简报陪伴他们走完整个治疗过程。

## X / Twitter

### Claude
Claude 宣布，记忆现在在 Chat 和 Claude Cowork 之间统一，内容由你决定：把任务交给 Cowork 时，它会从 Claude 在聊天中已经知道的上下文出发，比如你聊过的项目、你经理的偏好或上个季度的客户。所有记住的内容都会以主题列表的形式保存在 Settings 中，可以查看、编辑或删除；记忆会在聊天中自动更新，也可以说「remember this」主动保存某件事。记忆在 Free、Pro 和 Max 套餐上默认开启，健康、宗教信仰等敏感主题在 Settings 中手动开启前不会进入记忆。

- [Claude 谈统一记忆](https://x.com/claudeai/status/2092299704864284888)
- [Claude 谈 Settings 中的记忆管理](https://x.com/claudeai/status/2092299707653439497)
- [Claude 谈敏感主题与默认设置](https://x.com/claudeai/status/2092299710002319742)

### Cat Wu（Anthropic 的 Claude Code 与 Cowork）
Wu 宣布，根据用户反馈，记忆现在已在 Chat 和 Cowork 之间打通：「现在你让 Claude 记住一件事一次，它就能在多个界面间共享这份上下文！」

- [Cat Wu 谈统一记忆](https://x.com/_catwu/status/2092337156455051345)

### Boris Cherny（Anthropic 的 Claude Code）
在 Anthropic 负责 Claude Code 的 Cherny 用一句话欢迎这次记忆更新：「一个小改进：记忆现在更简单、更强大。」

- [Boris Cherny 谈 Claude 记忆](https://x.com/bcherny/status/2092355642363453943)

### Thibault Sottiaux（OpenAI 的 Codex & ChatGPT）
Sottiaux 介绍了一个「类似 Pro $100 套餐、但为团队和小公司设计」的新方案：包含全部 ChatGPT、ChatGPT Work 和 Codex 功能，可连接 Google Workspace、Slack、GitHub、Microsoft 365 等，提供带 SAML、SSO 和 MFA 的安全工作区，集中式计费和管理，使用分析与预算控制，而且「没有 5 小时限制」。

- [Thibault Sottiaux 谈团队方案](https://x.com/thsottiaux/status/2092345330272780499)

### Sam Altman
Altman 用一句话预告了公司的芯片进展：「我们做了一颗芯片，而且它很快。」

- [Sam Altman 谈芯片](https://x.com/sama/status/2092339694210040187)

### Guillermo Rauch（Vercel CEO）
Rauch 发布了 Run SDK，为动态 Code Mode 执行提供安全 eval：当 agent 写代码时，不一定要完整沙箱，可以把代码放在轻量 QuickJS 安全上下文中运行，更快也更省成本。他还庆祝 Vercel Connect 正式可用，称「构建 agent 最难的问题是安全地连接服务和数据」，现在运行 vercel connect create notion，就能获得一个以已认证用户身份查询数据的 MCP client。

- [Guillermo Rauch 谈 Run SDK](https://x.com/rauchg/status/2092382653161107534)
- [Guillermo Rauch 谈 Vercel Connect GA](https://x.com/rauchg/status/2092352411839193234)

### Google Labs
Google Labs 开放了 Play with Putty 的候补名单，这是一个协作式 vibe coding 工具，可以实时一起构建工具和网站。目前仅限美国，18 岁以上。

- [Google Labs 谈 Play with Putty](https://x.com/GoogleLabs/status/2092293667688173593)

### Aaron Levie（Box CEO）
Levie 分享了一篇关于规模化 applied AI 战略的文章，认为 AI 模型与企业底层工作流之间存在巨大差距，给 applied AI 公司留下「大量机会」：「世界要的不只是裸模型和 agent；它要的是问题被解决、结果被达成。」要赢，需要理解业务上下文、推动变革管理、拥有能路由到不同模型的 harness、连接垂直领域的关键业务系统、解决工作流中用户与 agent 连接的 UX 问题，还要懂 evals。这些价值「远超模型智能本身」，而当下正是窗口期。

- [Aaron Levie 谈规模化 applied AI 战略](https://x.com/levie/status/2092466424694649066)

### Madhu Guru（Meta AI 高级总监）
在「如何构建好的 eval」系列第九篇中，Guru 认为大多数 eval 失败是因为团队把它们当成静态制品，而用户的期望和行为一直在演变。他以金融研究 agent 为例，展示使用方式如何从总结一份 5 页财报，演进到监控投资组合并在重大变化时发出提醒，并给出 eval 随使用演进的路径：从短上下文到长上下文、从单轮问答到多轮、从段落引用到文档与行级引用、从简单问答到复杂综合、从被动聊天到主动式 agent。他的实操路线图是：梳理使用会演进的维度、按重要性排优先级、挖掘生产环境轨迹寻找变化、为下一阶段使用构建 P0 eval，再运行并针对失败模式 hill-climb。

- [Madhu Guru 谈 Eval Roadmap 问题](https://x.com/realmadhuguru/status/2092426017118028266)
- [Madhu Guru 的 eval 系列全集](https://x.com/realmadhuguru/status/2092461206783373758)

### Peter Yang
Yang 开源了 /fuck-cancer，一个帮助患者和照护者应对癌症诊疗、为自己和亲人发声的 AI skill。它会创建并持续更新一份实用简报，包含五个部分：患者与照护团队信息、最多三项的下一步行动、区分已确认事实与未知信息的「我们所知」、用通俗语言解释的医学术语，以及近期更新与决策的照护日志。简报可以保存为本地 Markdown，也可以更新到可共享的 Google Doc；需要研究时，会使用美国国家癌症研究所和 ClinicalTrials.gov API 等可信来源。

- [Peter Yang 谈 /fuck-cancer](https://x.com/petergyang/status/2092249012913258946)
- [Peter Yang 展示简报示例](https://x.com/petergyang/status/2092311110871617915)

### Nikunj Kothari（FPV Ventures 合伙人）
Kothari 发布了用 ChatGPT Codex 和 Railway 构建的「El Niño situation monitor」（elneenyo.com）：实时更新、来自政府来源的最新动态，按地区的冲击与成本、历史记录，以及所有读数的术语表与 FAQ。他提到这个项目最初受 The Stalwart 的 Odd Lots 节目启发。

- [Nikunj Kothari 谈 El Niño 监测站](https://x.com/nikunj/status/2092383834470002922)
- [Nikunj Kothari 谈构建过程](https://x.com/nikunj/status/2092384774459674957)

### Aditya Agarwal（SPC 合伙人）
Agarwal 认为，普通大众反感数据中心建设「一点都不意外」，因为今天的 AI 主要服务知识工作者和收入最高的群体。他预计重大变化会出现在 AI 能治愈困扰所有人的疾病之时，并批评行业一直以来的恐吓式叙事：「我们不是在描绘一个积极的未来，而是一直在讲各种应该害怕的理由。」

- [Aditya Agarwal 谈 AI 的受益面与观感](https://x.com/adityaag/status/2092290497826173186)

### Swyx
Swyx 提醒大家暂时不要使用 Codex 的 locked use 功能：它依赖不稳定的 macOS 特性，本周已经两次把他锁在 macOS keychain 之外，他还引用 Apple 开发者论坛上承认这是「已知 bug」的讨论。他说如果一切都能在云端完成就好了，但「云端还没到那一步」。

- [Swyx 谈 Codex locked use](https://x.com/swyx/status/2092492963435946494)

## Podcast

### Training Data：Parallel 的 Parag Agrawal：为 AI agent 构建一个新的 Web

核心 takeaway：搜索正在被重新构建，服务对象是 agent 而不是人。胜出的方案会用 agent 反馈取代人类点击数据，并重构 web 的经济模型，让内容所有者按数据创造的价值获得回报。

前 Twitter CEO、如今创立 Parallel Web Systems 的 Parag Agrawal 押注：agent 带来的搜索量将超过人类的一千倍，而为人类眼球设计的搜索技术和商业模式都撑不过这次转变。他说：「我们在 Parallel 的观点是，人类的点击数据是一种 bug。」面向 agent 的搜索应该依赖 agent 反馈而不是人类反馈，而且模型在信息压缩上已经足够强，可以把构建模型的研究直接用到搜索索引和排序上。

Parallel 起步时先做的是搜索 agent 而不是搜索引擎，把外包给人类的数据整理当作竞争对手，从而可以逐步建设自己的索引；最近发布的 TurboNow 把一次检索的响应预算从三秒压到 200 毫秒，Agrawal 称它是「市场上最快、质量最高的 agentic web search」。公司还宣布与 Google Cloud 合作，在 GCP 上作为企业 agent API 的搜索与 grounding 服务商。

更深层的争论在经济学。Agrawal 认为广告支撑的 web 无法为 agent 访问变现，而现在的替代方案，也就是与模型实验室签订固定费用的授权协议，在推理量每年增长 7 倍的情况下也会瓦解。他的方案是差异化定价加 Shapley 值：模拟去掉某个来源后 agent 输出的变化，估算它的边际贡献，再据此给内容所有者付费，他预计 12 到 24 个月内，这套数学就能为大量内容所有者带来「有意义的收入」。web 本身也会从 pull 变成 push：后台 agent 会持续观察网上发生的变化并触发工作，「如果发生这种事，就叫我」会成为新的查询方式。正如 Agrawal 常对团队说的：「今天能做的事，今天就做。」

来源：https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

## Blog

本次通过验证的 blog feed 中没有新的符合条件的内容，本期没有可总结的条目。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
