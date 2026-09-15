[English](../../en/daily/ai-digest-2026-09-15-Tue.md) | [中文](./ai-digest-2026-09-15-Tue.md) | [双语](../../bilingual/daily/ai-digest-2026-09-15-Tue.md)

---

# AI Builders Digest

## 导读

**1. Anthropic 现在把「容器隔离」当作 agent 安全的核心工程问题，而不只是对齐问题；而最让它长教训的两次事故，都出在 egress 上。** 12 个月前，给 Claude 足够权限以致能打挂 Anthropic 内部服务，这种事他们想都不会想；今天这种权限已经变成日常。控制爆炸半径有两条路：人工审批，它被证明并不可靠，telemetry 显示用户批准了大约 93% 的权限请求，于是有了 Claude Code auto mode；以及容器隔离，也就是 sandbox、VM 和 egress 控制。模型层的防御很强，Claude Opus 4.7 在 Gray Swan 的 Agent Red Teaming 基准上把 prompt injection 的单次攻击成功率压到约 0.1%，100 次自适应攻击后约 5% 到 6%，但最有教育意义的两起事故都是确定性失效：一次内部红队钓鱼让 Claude 读取 ~/.aws/credentials 并外发，25 次尝试成功了 24 次；另一次是恶意工作区文件借用被允许的 api.anthropic.com 域名，把数据上传到了攻击者的 Anthropic 账户。团队的结论值得记住：当所有概率性防御都漏掉的时候，挡住攻击的是确定性的边界。

**2. Anthropic 还罕见地给出了一份细节充分的事故复盘。** 春季三处互不相关的改动，3 月 4 日把默认 reasoning effort 从 high 改成 medium，3 月 26 日一个缓存 bug 让会话在之后的每一轮都清掉此前的思考而不是只清一次，以及 4 月 16 日一条减少啰嗦的系统 prompt，叠加起来让用户感觉 Sonnet 4.6、Opus 4.6 和 Opus 4.7 出现了广泛而不稳定的退化。API 层自始至终没有受影响，修复在 4 月 20 日（v2.1.116）前完成，Anthropic 于 4 月 23 日为所有订阅用户重置了用量额度。最说明问题的细节在取证过程里：这个缓存 bug 通过了人工和自动代码审查、单元测试、端到端测试以及内部试用，花了一周多才复现，最后是 Opus 4.7 在回测涉事 pull request 时找到了它，而 Opus 4.6 没找到。一次 ablation 显示，仅仅一行系统 prompt 就让评测掉了 3%。后续措施包括：让更大比例的内部员工使用与用户完全相同的公开版本，并给系统 prompt 变更加上按模型跑评测、ablation、soak period 和灰度发布等更严格的控制。

**3. Anthropic 的 agent 平台正在收敛到稳定的接口和可分享的产出。** 在 Scaling Managed Agents 一文里，团队解释为什么把 agent 虚拟化成三个接口：session（只追加的事件日志）、harness（调用 Claude 并把工具调用路由出去的循环）和 sandbox（运行代码的环境），从而把「大脑」与「手」解耦。容器从「宠物」变成了「牲口」：容器挂掉只是一个 tool call 错误，可以交给 Claude 决定是否重试；harness 挂掉也可以从持久化的 session 日志里重启恢复。收益可以量化：p50 的 time-to-first-token 下降约 60%，p95 下降超过 90%，因为根本不需要 sandbox 的会话不再等待容器启动。安全上的论证同样是结构性的：凭证不会出现在运行生成代码的 sandbox 里。另外，Claude Code 现在支持 artifacts，也就是基于整个 session 上下文生成的、可分享的实时页面，页面原地更新、保留版本历史，并默认只对组织内部可见，目前对 Team 和 Enterprise 组织开放 beta。

**4. 企业数据问题是一个双向权衡，这是 Box CEO 的说法。** Box CEO Aaron Levie 说，我们都得更新一下自己对即将到来的东西的判断：agent swarm、更强的 computer use、新一波 API 和 MCP、像 Muse 或 Instinct 这样的新形态，再加上垂直行业 agent 和后台工作流 agent。他预期 agent 会被派去处理远超我们想象的任务，产生的信息量是过去单次会话 prompting 所能想象的「100 倍」，从 24 小时不间断地为公司物色人才，到审查每一行代码的安全问题。他把张力说得很具体：「在 AI 的世界里，安全性和生产力提升是紧紧绑在一起的。」访问权限给太多，数据就难以控制；把一切都锁死，又拿不到真正的生产力提升。Levie 指向 Box Shield 的新能力：按文档分级对 agent 能处理哪些内容做细粒度控制，并自动检测、告警甚至阻断 agent 的异常访问；他说整个行业都必须重新思考防护方式。

**5. 在做 agent 工具的 builders 反复强调，瓶颈在验证而不是生成。** Vercel CEO Guillermo Rauch 说得最锋利：「Agent 的上限，取决于你给它的 proof checker、编译器、类型系统和 linter 有多好。」他举 shadcn/lint 为例，说明它能让 agent 守住设计系统的规则，并给出他的 meta 判断：「verifier 加 skill 就是新的 framework。」Vercel 还招来了 Google Cloud Run 的创造者 Steren，由他领导 Fluid 系列计算产品，理由是 agent 需要为它们重新设计的计算原语。产品节奏方面，Thibault Sottiaux 预告这一周的上线量「相当于 DevDay 2025 的规格」，Boris Cherny 说 Claude Mods 正在落地，已经有人做出了 Claude 里的俄罗斯方块 mod，Google 的 Josh Woodward 则说新一批用户正在提前体验 Gemini 的 Daily Brief 和 Personal Intelligence 的下一步。FirstMark Capital 的投资人 Matt Turck 看同一个时刻，结论是 AI 进展不会放缓：「玩家太多、经济利益太大、国内和国际的囚徒困境都太强。」

**6. 最后一段路，仍然得由人来走。** Every 的专职作者 Katie Parrott 在被裁员后开始把 ChatGPT 当职业教练，后来在同样的工作流上做出了实验性插件 Compound Writing，现在她的职业教练已经变成一个 Codex project，里面有 Kanban board，还有一个装满读者好评的 validation 文件夹。她的结论不是 AI 会把清晰思考打包送来：「真正的清晰、方向和答案，来自你不断与 prompt 交互、自己动手做难的部分的过程。AI 可以带路，但路要你自己走。」在实操上，她认为 AI 有知识截止时间，也不在物理世界里，所以写作者的工作就是提供新鲜的、来自真实世界的「食材」，比如独特数据和个人经验。她还把 AI 当成支持性技术而不只是生产性技术：Codex 会处理 Every 的 COO 所说的「电脑杂事」；而在 Claude 为她的 Tastemaker 应用写了一个 MCP 之后，Codex 又在里面找出了 5 个安全漏洞。SPC 的 general partner Aditya Agarwal 看完一个他称为「不可思议」的 demo 后，把野心说成同一句话：「AI 可以像人一样。这就是终极目标。」FPV Ventures 合伙人 Nikunj Kothari 也提醒大家，不是每一个有意思的赌注都是 AI 赌注：他领投了 Piston 的 A 轮，这家支付公司的前提假设是，油卡本身就是问题所在。

## X / Twitter

### Josh Woodward: Google 副总裁

在 Google 负责 Google Labs、Gemini 应用和 Google AI Studio 的副总裁 Josh Woodward 说，两个月前为了在 Gemini 应用里测试早期功能而设立的 power user group，至今已经测试了 20 多个功能，他感谢用户的反馈。新一批用户正在提前体验 Daily Brief 和 Personal Intelligence 的下一步，他说团队还会继续邀请更多人加入。

- [Josh Woodward 谈 Gemini power user group 和新一批用户](https://x.com/joshwoodward/status/2099558443078365287)

### Boris Cherny: Anthropic，Claude Code

在 Anthropic 负责 Claude Code 的 Boris Cherny 说，Claude Mods 正在陆续上线，已经有人做出了 Claude 里的俄罗斯方块 mod。他把 issue 链接分享出来，里面有最新的社区进展、技术细节和更多有趣的 demo。

- [Boris Cherny 谈 Claude Mods 上线](https://x.com/bcherny/status/2099551291601248485)

### Thibault Sottiaux: OpenAI，Codex 与 ChatGPT

在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 预告，这一周的上线量「相当于 DevDay 2025 的规格」，并用一个词形容：Crazy。

- [Thibault Sottiaux 谈本周的上线节奏](https://x.com/thsottiaux/status/2099744972195131850)

### Peter Yang

做实用 AI 教程和访谈的 Peter Yang 说，语音让他在大自然里散步时比盯着屏幕更有效率，这种感觉非常好。

- [Peter Yang 谈用语音工作](https://x.com/petergyang/status/2099677771408846975)

### Thariq: Anthropic，Claude Code

在 Anthropic 负责 Claude Code 的 Thariq 说，他和 Sid、Robert 聊了聊做 Claude Code 的过程：变化有多大、跟上模型能力有多难，以及他们有多怀念 AI 之前的软件工程。

- [Thariq 谈做 Claude Code 的经历](https://x.com/trq212/status/2099551141621329994)

### Guillermo Rauch: Vercel CEO

Vercel CEO Guillermo Rauch 欢迎 Google Cloud Run 的创造者 Steren 加入 Vercel，他将领导 Fluid 系列计算产品：Functions、Containers、Sandbox 和 Builds。Rauch 的框架是：serverless 是云计算的上一章，agent 是下一个前沿，而 agent 需要为它们专门设计的新的计算原语。

在工具层面，Rauch 说：「Agent 的上限，取决于你给它的 proof checker、编译器、类型系统和 linter 有多好。」他举 shadcn/lint 为例，说明它能让 agent 守住设计系统的规则，并给出他的 meta 判断：「verifier 加 skill 就是新的 framework。」

他还提到 fx 会自动升级，ctrl+g 可以重启并恢复对话，并说 0.0.10 在长会话里「快得多得多」。

- [Guillermo Rauch 谈 Steren 加入 Vercel](https://x.com/rauchg/status/2099514906366328902)
- [Guillermo Rauch 谈 verifier 与设计系统规则](https://x.com/rauchg/status/2099540886409695346)
- [Guillermo Rauch 谈 fx 自动升级与更快的长会话](https://x.com/rauchg/status/2099653035685445760)

### Aaron Levie: Box CEO

Box CEO Aaron Levie 写道，「我们大概都得更新一下自己对即将到来的东西的判断」。他列举了 agent swarm、更强的 computer use、新一波 API 和 MCP、像 Muse 或 Instinct 这样的新形态，再加上垂直行业 agent 和后台工作流 agent。他预期 agent 会被派去处理远超我们想象的任务，产生的信息量是过去单次会话 prompting 所能想象的「100 倍」，从 24 小时不间断地为公司物色人才，到审查每一行代码的安全问题。

他在第二条帖子里点出难点：「在 AI 的世界里，安全性和生产力提升是紧紧绑在一起的。」给 agent 太多不受限制的信息访问，数据就难以控制和保护；把一切都锁死，又拿不到真正的生产力提升。他提到 Box Shield 的一项新更新：按文档分级对 agent 能处理哪些内容做细粒度控制，并正在开发自动检测、告警甚至阻断 agent 异常访问的能力。他说整个行业都必须重新思考，在 AI agent 的世界里如何保护信息。

- [Aaron Levie 谈 agentic workload 与企业数据](https://x.com/levie/status/2099739019517235618)

### Matt Turck: FirstMark Capital 投资人

FirstMark Capital 的投资人 Matt Turck 说，这个周末挺好，但大家都明白 AI 进展不会放缓：「玩家太多、经济利益太大、国内和国际的囚徒困境都太强。」

- [Matt Turck 谈 AI 进展不会放缓](https://x.com/mattturck/status/2099589199104033031)

### Nikunj Kothari: FPV Ventures 合伙人

FPV Ventures 合伙人 Nikunj Kothari 解释了他为什么领投 Piston 的 A 轮：这家支付公司的前提假设是，油卡本身就是问题所在。这些卡往往不和具体司机绑定，因此经常被盗刷、侧录或滥用，fraud 损失由车队老板承担，还要花很长时间去核对到底发生了什么；而加油站要付 interchange 手续费，却和另一端的车队没有任何关系。

Piston 干脆去掉了卡，把支付搬到自己的通道上：它先付给加油站，再向车队开票，每笔交易都和具体司机绑定，并附带时间、地点和油品信息，接下来还会和车辆本身打通。Kothari 给出的数字是：支付量增长 8 倍，商户网络增长 40 倍，留存率保持在 98% 以上，已覆盖 48 个州的 2,000 座加油站，车队目前无需付费。

- [Nikunj Kothari 谈投资 Piston](https://x.com/nikunj/status/2099631145268969840)

### Aditya Agarwal: SPC 的 general partner

SPC 的 general partner Aditya Agarwal 在转发一个他称为「不可思议」的 demo 时写道：「AI 可以像人一样。这就是终极目标。」他说自己很自豪能成为这支团队最早的 partner，并补充说，一如既往，还有很多东西要做。

- [Aditya Agarwal 谈一个 AI demo 与终极目标](https://x.com/adityaag/status/2099529959262019887)

## Podcast

### AI & I by Every: How a Professional Writer Writes With AI

核心要点：AI 不会把清晰思考打包送来；只有你能提供的那部分，也就是晚于模型知识截止时间的、真实的现实经验，才决定文章是否值得一读。

Katie Parrott 是 Every 的专职作者，她用两年时间把 AI 从一个新鲜玩意变成了自己工作方式的脚手架。一开始的场景很朴素：被一家加密公司裁员，预算有限，又请不起真正的职业教练，于是她每月花 20 美元订 ChatGPT，用它把脑子里的想法外化出来、给自己一点外部约束，也阻止自己一味往最坏处想。这次尝试最后变成了一篇专栏，也带来了这份工作。她对这段经历给出的总结很冷静：「写作最让我喜欢的一点是，我永远不知道自己怎么想，直到我把它写下来；可一旦写下来，一切就清楚了。」她的结论是助手不是作者：「和许多这类工具一样，真正的活儿还是我自己的。」她还说：「真正的清晰、方向和答案，来自你不断与 prompt 交互、自己动手做难的部分的过程。AI 可以带路，但路要你自己走。」

她的实操方法是先给上下文，再谈风格。在调语气和用词之前，她会先把真正决定质量的东西喂给模型：受众、用户画像、痛点、竞争对手、差异化，以及品牌当作唯一事实来源的那些长期文档。AI 有知识截止时间，也不在物理世界里，所以它一直在用已经被商品化的信息；写作者的工作就是用真实世界的经验和独特数据把最后这段路补上。她用一个厨房的比喻概括：模型是厨房，提纲是切菜，成文是熬煮，但食材本身必须是新鲜的。

她反复回到的一个重新定义是：AI 是支持性技术，而不只是生产性技术。她有双相情感障碍，发现 AI 能减少生活里的摩擦，让她更顺利地度过普通的一天；Codex 现在会处理 Every 的 COO 所说的「电脑杂事」，比如找到她拖了三年的、在保险网络内的全科医生，还能用一个自动化只把需要本人回复的邮件挑出来。她也很坦诚地说，AI 会先制造问题再解决问题：Claude 为她的 Tastemaker 应用写了一个 MCP，随后 Codex 在里面找出了 5 个安全漏洞。

她对未来一年的判断是关于 access 而不是 capability：「教育和可及性会比以往任何时候都更重要。」她担心的风险是，AI 复利式增长的价值只累积给那一小部分动手早的人。

- [AI & I by Every: How a Professional Writer Writes With AI](https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL)

## Blog

### Anthropic Engineering: How we contain Claude across products

Anthropic 的安全工程团队说明了它如何在 claude.ai、Claude Code 和 Claude Cowork 三个产品里「装住」Claude，核心观点是：真正限制 agent 爆炸半径的，是一个容器隔离的工程问题，而不只是对行为的引导。文中最值得引用的一组数字和人有关：telemetry 显示用户批准了 Claude Code 大约 93% 的权限请求，这也是公司做 auto mode 来减少审批疲劳的原因，也是它坚持认为任何概率性防御都有非零漏检率的原因。模型层防御很强，但不能单独成立。在 Gray Swan 的 Agent Red Teaming 基准上，Claude Opus 4.7 把 prompt injection 的单次攻击成功率压到约 0.1%，100 次自适应攻击后约 5% 到 6%，auto mode 能在执行前拦下大约 83% 的「过度积极」行为。

三个产品各用不同的隔离模式。claude.ai 在隔离基础设施上的临时 gVisor 容器里跑代码；Claude Code 使用操作系统级 sandbox（macOS 上是 Seatbelt，Linux 上是 bubblewrap），把权限提示减少了 84%，同时默认禁止网络；Claude Cowork 运行在封闭的 VM 里，其机制大多由 guest 侧执行。最有教育意义的两起事故都是模型层拦不住的 egress 失效。一次内部红队钓鱼让 Claude 读取 ~/.aws/credentials、编码后 POST 到外部端点，25 次重试成功了 24 次；另一次是 Cowork 的外泄，恶意文件借用被允许的 api.anthropic.com 域名，把工作区文件上传到攻击者的 Anthropic 账户，最终靠在 VM 内加一层 man-in-the-middle proxy 修好。文末的原则值得记住：「当所有概率性防御都漏掉的时候，挡住攻击的是确定性的边界。」

- [Anthropic Engineering: How we contain Claude across products](https://www.anthropic.com/engineering/how-we-contain-claude)

### Anthropic Engineering: An update on recent Claude Code quality reports

Anthropic 回应了「Claude 的回答变差了」的反馈，把它追溯到三处互不相关的改动，分别影响 Claude Code、Claude Agent SDK 和 Claude Cowork，目前全部已解决（4 月 20 日，v2.1.116），API 和推理层确认未受影响。第一，3 月 4 日把 Claude Code 的默认 reasoning effort 从 high 改成 medium，以缓解让 UI 看起来卡死的长延迟；用户表示更希望默认就是更高的智能水平，该改动于 4 月 7 日回滚。第二，3 月 26 日一项本意为清掉空闲超过一小时会话中旧思考的缓存优化带有 bug，导致会话在之后的每一轮都清空思考而不是只清一次，让 Claude 显得健忘、重复，同时造成 cache miss，让用量额度消耗得比预期更快；该 bug 于 4 月 10 日修复。

这个 bug 通过了人工和自动代码审查、单元测试、端到端测试、自动验证以及内部试用，公司花了一周多才复现。回测时，Opus 4.7 在涉事的 pull request 里找到了它，而 Opus 4.6 没有找到。第三，4 月 16 日一条限制输出长度的系统 prompt（工具调用之间不超过 25 个词，最终回答不超过 100 个词，除非任务需要更多细节）损害了编码质量；调查期间更大范围的 ablation 显示，Opus 4.6 和 4.7 的评测都掉了 3%，该 prompt 在 4 月 20 日的版本中回滚。后续措施包括：让更大比例的内部员工使用与用户完全相同的公开版本，为系统 prompt 变更加上更严格的控制和新的审计工具，按模型跑评测和 ablation，并对可能牺牲智能的改动加上 soak period 和灰度发布。4 月 23 日起，所有订阅用户的用量额度被重置。

- [Anthropic Engineering: An update on recent Claude Code quality reports](https://www.anthropic.com/engineering/april-23-postmortem)

### Anthropic Engineering: Scaling Managed Agents: Decoupling the brain from the hands

这篇文章的论点是：harness 里编码着关于「Claude 自己做不到什么」的假设，而随着模型变强，这些假设会过时。它举的例子是：当初因为 Claude Sonnet 4.5 在接近上下文上限时会提前收尾（团队称之为 context anxiety）而加入了 context reset，但换成 Opus 4.5 后这个行为消失了，reset 变成了死重。于是 Anthropic 做了 Managed Agents，这是 Claude Platform 上的一项托管服务，把一个 agent 虚拟化成三个接口：session（只追加的事件日志）、harness（调用 Claude 并把工具调用路由出去的循环）和 sandbox（Claude 运行代码、编辑文件的环境）。

容器从「宠物」变成了「牲口」。大脑与手解耦后，harness 不再住在容器里，而是像调用普通工具一样调用容器，execute(name, input) → string，于是容器挂掉只是一个 tool call 错误，由 harness 交回给 Claude 决定是否重试；harness 挂掉也可以用 wake(sessionId) 从持久化的 session 日志里重启并恢复。性能提升可以量化：p50 的 time-to-first-token 下降约 60%，p95 下降超过 90%，因为不需要容器的会话不再等待容器启动。安全上也有结构性论证：凭证永远不会出现在运行 Claude 生成代码的 sandbox 里，Git 访问 token 在克隆时就接入本地 remote，MCP 的 OAuth token 存在 vault 里，harness 完全看不到。本文由 Lance Martin、Gabe Cemaj 和 Michael Cohen 撰写。

- [Anthropic Engineering: Scaling Managed Agents: Decoupling the brain from the hands](https://www.anthropic.com/engineering/managed-agents)

### Claude Blog: Claude Code now supports artifacts

Claude Code 现在可以把工作进展捕获成 artifact：一个可分享的、会随会话进展自动更新的实时网页。Anthropic 给出的例子包括 PR 讲解、系统说明、dashboard、发布清单，以及会随着排查不断生长的故障页面甚至复盘。Artifact 基于整个 session 的完整上下文构建，包括代码库、connector 和对话本身，所以一个故障页面可以同时呈现你代码里失败的测试和它背后的函数、来自已连接监控工具的错误尖峰，以及这次 session 里的根因推理，而不需要你接数据源或搭基础设施。

当 Claude Code 更新 artifact 时，打开的页面会原地刷新，同事在发布的那一刻就能看到更新。每次发布都是同一个链接下的新版本，并保留版本历史，随时可以恢复，还有一个 gallery 用来浏览和管理你创建的所有 artifact。每个 artifact 默认只对作者可见，仅组织内通过身份验证的成员可以查看，不能设为公开；管理员可以通过组织级开关和基于角色的范围控制来管理访问，也可以设置保留策略，并通过 compliance API 获得组织级的可见性。Anthropic 的内部测试发现，debug 是最常见的用法之一：工程师在站会前启动一次故障排查，从页面顶部把链接分享给团队，Claude 会随着排查进展重新发布它。Artifacts 目前对 Claude Team 和 Enterprise 组织开放 beta，可通过 Claude Code CLI 和桌面应用使用，页面可在任意浏览器中查看。

- [Claude Blog: Claude Code now supports artifacts](https://claude.com/blog/artifacts-in-claude-code)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
