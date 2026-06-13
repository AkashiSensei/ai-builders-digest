[English](../../en/daily/ai-digest-2026-06-14-Sun.md) | [中文](./ai-digest-2026-06-14-Sun.md) | [双语](../../bilingual/daily/ai-digest-2026-06-14-Sun.md)

---

# AI Builders Digest

## 导读

- 本期最强的 builder 主线，是从单个 agent demo 走向长周期 agent 运营：Swyx 质疑 Git 形态的工作流能否撑住 agentic coding，Peter Steinberger 描述 Codex 连续落地可验证工作，播客也把工程师重新定义为 agent 的管理者。
- 访问权限、监管和模型经济学正在变成具体的产品约束。Fable 访问限制引发多位 builder 讨论，Aaron Levie 认为监管 AI 的使用场景比监管底层模型更合理，播客则提出算力压力可能让实验室减少 API 开放。
- harness 设计正在成为模型之上的商业层。Vercel 发布 HarnessAgent 来做 agent 可移植性，播客强调脚手架可能和基础模型同样重要，Anthropic 则把 Managed Agents 描述为编排层与工具执行层之间的新边界。
- 可靠性已经是产品质量问题，而不只是 eval 问题。Anthropic 发布 Claude Code 质量复盘，Alex Albert 分享让 Fable 输出更清晰的提示词经验，多位 builder 也把错误处理、推理轨迹可见性和人工交接视为核心工作流设计。
- AI 产品的分发压力继续升高。Zara Zhang 提到 builders 都在争夺稀缺注意力，而 Replit、Vercel、Claude 以及创始人亲自出镜的产品 demo 都说明：市场更看重可见工作流和结果，而不只是功能列表。

## X / Twitter

### Andrej Karpathy (@karpathy)
- [Tweet](https://x.com/karpathy/status/2065490793092337691) (17009 likes, 791 reposts, 257 replies): 对 SpaceX 以及它的过去、现在和未来仍然感到震撼。你可以从十几个角度反复理解这个故事，每次都会再次被震住。祝贺整个团队！🚀

### Swyx (@swyx)
- [Tweet](https://x.com/swyx/status/2065699264907694123) (1 likes, 0 reposts, 0 replies): 我的邮箱现在是这样找到我的。

如果你还在等我的决定或回复，请别往心里去，我只是正处在 AI Engineer 大会前的高压冲刺期。https://t.co/BISqXaFlHm
- [Tweet](https://x.com/swyx/status/2065559864559145420) (90 likes, 4 reposts, 56 replies): ## 未来代码库

PR 死去之后，Code Review 死去之后，我开始认真思考 Git 是否也该成为下一个被淘汰的东西。

大约 20-40% 的代码时间都花在处理和更新合并冲突上。这是必要之恶，还是旧时代“无马马车”式的路径依赖？

我们和人类同事协作时，并不会逐行处理合并冲突，而是聊天、建议修改、旁批，最后由负责人发布。

顺便说一句，即使是有严肃法律和财务影响的文档协作，我们也不会做 CI/CD。

也许未来的代码库会更像 Notion 或 Linear 数据库，而不是 .git 对象。它会更低效，但更可扩展。这正是 Salty Lesson。
- [Tweet](https://x.com/swyx/status/2065516685113827533) (8 likes, 0 reposts, 4 replies): developer exception engineering 有个有意思的点：

快乐路径各有各的快乐。

不快乐路径却几乎都一样。

https://t.co/Wnbtc9eAzk

### Thibault Sottiaux (@thsottiaux)
- [Tweet](https://x.com/thsottiaux/status/2065468501750649006) (5271 likes, 157 reposts, 470 replies): 我们听到了你们有趣的反馈：Codex 用量在没有提醒时被重置，有时确实让人烦。

下次我们按下按钮时，你可以自己选择何时真正生效。祝 Codex 使用愉快。https://t.co/xXiqGijtIP

### Peter Yang (@petergyang)
- [Tweet](https://x.com/petergyang/status/2065622592309039449) (674 likes, 26 reposts, 111 replies): 是的，我认为很快访问最强模型就会需要身份验证。
- [Tweet](https://x.com/petergyang/status/2065602691850764667) (2015 likes, 46 reposts, 312 replies): 把所有“在美国境内的外国人”都暂停使用 Fable，这太夸张了。你甚至要怎么正确执行？
- [Tweet](https://x.com/petergyang/status/2065601540350750846) (51 likes, 1 reposts, 17 replies): 哇，这什么情况？！https://t.co/T4gztHHj8e

### Madhu Guru (@realmadhuguru)
- [Tweet](https://x.com/realmadhuguru/status/2065541200971759669) (1 likes, 0 reposts, 0 replies): 我刚刚亲手写完了一整份文档，用键盘手动打出来。

没有语音输入，也没有 AI。

因为我喜欢危险地生活。

### Amjad Masad (@amasad)
- [Tweet](https://x.com/amasad/status/2065600809224814835) (450 likes, 11 reposts, 47 replies): 听起来我们得关闭 Fable 的访问了。https://t.co/9LpO1RhlXc
- [Tweet](https://x.com/amasad/status/2065597793998422308) (228 likes, 15 reposts, 17 replies): 当整个 Tokenmaxxing 热潮开始时，一些企业客户要求我们做排行榜。

我们拒绝了。

这本来会对业务“很好”，但我们不是为了卖 token 而卖 token。

我们卖的是结果。

而且我们知道这不会持久：https://t.co/LKwOkfZQm0
- [Tweet](https://x.com/amasad/status/2065503810592833560) (100 likes, 7 reposts, 20 replies): 如果你在 Replit 上赚到了钱，你就能获得免费额度！https://t.co/UfC2HCi7lZ

### Guillermo Rauch (@rauchg)
- [Tweet](https://x.com/rauchg/status/2065595134906191912) (389 likes, 19 reposts, 57 replies): https://t.co/iMbPIuCsnR
- [Tweet](https://x.com/rauchg/status/2065520041894756480) (828 likes, 34 reposts, 46 replies): 我们刚刚发布了 HarnessAgent，这是一个统一抽象，用来编排并集成任何 agent 的“大脑”到你的应用中。

@aisdk 现在让你同时摆脱模型锁定和 agent 锁定。当然，它不只是带来可移植性，用起来也很顺手。https://t.co/CTbttpPKp8
- [Tweet](https://x.com/rauchg/status/2065494112669966660) (1065 likes, 46 reposts, 72 replies): HTML 真的回来了。
拖拽，然后 https://t.co/HJSiShgTtP https://t.co/ay1f9Iol4W

### Alex Albert (@alexalbert__)
- [Tweet](https://x.com/alexalbert__/status/2065493242158924031) (85 likes, 4 reposts, 7 replies): 这段来自我们的提示词指南，里面还有更多使用 Fable 的技巧：https://t.co/xHvvfIY0Ex
- [Tweet](https://x.com/alexalbert__/status/2065493229760565758) (880 likes, 25 reposts, 63 replies): Fable 在长周期 agent 对话上的表现像是超人，有时甚至让我跟不上它在说什么。

这个提示词片段是我找到的最佳修正方式，可以让它写得更清楚，并去掉行话：https://t.co/9mS57mR7jq

### Aaron Levie (@levie)
- [Tweet](https://x.com/levie/status/2065616509666472329) (451 likes, 31 reposts, 77 replies): 这是 AI 监管的一个重要转折点。

政府开始认定某些模型对特定用途来说过于强大，这会为未来一系列可能的管控建立先例。

我认为这没有必要，我们应该主要监管 AI 的使用，而不是底层模型。当然，也有很多人确实更希望出现这种结果。

无论如何，我们大概率回不到政府不深度参与 AI 发展速度的世界了。
- [Tweet](https://x.com/levie/status/2065594956186865815) (384 likes, 12 reposts, 9 replies): 这真的很酷。https://t.co/bHnIUti4FH
- [Tweet](https://x.com/levie/status/2065469347712401712) (276 likes, 25 reposts, 13 replies): 太惊人了。祝贺 @elonmusk 和整个 SpaceX 团队，25 年的心血打造出一家定义世界的公司。能看到这种推动未来向前的样本很棒，它的下游影响会非常巨大。https://t.co/tyDusbJFn0

### Garry Tan (@garrytan)
- [Tweet](https://x.com/garrytan/status/2065595201008398592) (88 likes, 6 reposts, 8 replies): 非常为 @datacurve（YC W24）骄傲，他们正在 DeepSWE 上构建定义软件工程的 benchmark。

累了？SWE-Bench Pro。
兴奋了？Datacurve DeepSWE。https://t.co/ZoftIrEGKc
- [Tweet](https://x.com/garrytan/status/2065432924724539848) (132 likes, 4 reposts, 23 replies): 我刚发现 OpenClaw 里的 forceBlockStreamingForReasoning = resolvedReasoningLevel === "on"，坦白说我很喜欢。

看到我的 claw 使用 Claude Fable 5 时的推理轨迹，是一种震撼体验。看到过程记录并能更深入地参与想法，一直是我的兴奋点。
- [Tweet](https://x.com/garrytan/status/2065416181943865611) (746 likes, 67 reposts, 128 replies): 所有人都以为 AI 编码工具会解放创始人。

但看看人们实际用它们构建了什么：规则、审批、流程和层级。还是同一个笼子，只是组装得更快。

一个下午就能脚手架出任何东西的工具，也能一个下午脚手架出你的官僚体系。

构建速度也是固化速度。要构建能让你创造新事物的东西：以前不会发生的体验。

### Zara Zhang (@zarazhangrui)
- [Tweet](https://x.com/zarazhangrui/status/2065696088519270402) (5 likes, 1 reposts, 1 replies): 每天都有太多人、朋友、熟人、关注者、创业公司，来请我试他们的新 AI 产品。

我每天至少收到 3 个这样的请求。

如果我全都试，就没有时间做别的事了。

builders 太多了，注意力竞争非常激烈。
- [Tweet](https://x.com/zarazhangrui/status/2065674426197393779) (20 likes, 1 reposts, 3 replies): 一个会传播的产品，背后有一个人们能看见、能听见的创始人。

人们是从人这里购买。创始人录的屏幕演示，胜过公司宣传视频或功能墙。

露脸吧。https://t.co/8gdGFsIVJB

### Nikunj Kothari (@nikunj)
- [Tweet](https://x.com/nikunj/status/2065581110822593000) (77 likes, 4 reposts, 2 replies): 这是我对应用公司如何回答“大实验室要是做这个怎么办”问题的一次尝试。https://t.co/2Hux7K4oIQ
- [Tweet](https://x.com/nikunj/status/2065559895450288611) (59 likes, 3 reposts, 6 replies): https://t.co/N1t71afKPF
- [Tweet](https://x.com/nikunj/status/2065473941385421279) (14 likes, 0 reposts, 3 replies): 还有人有两种声音吗？

我在写作和说话时经常会出现两种声音。

一种是急迫、直接、有冲劲、快速切入要点；另一种更冷静、有结构、会不断追问和剥开层次。

它们差异大到让人以为是两个人，尤其在写作里。

它们通常是分开的，但我感觉自己常在同一段对话里来回切换。

### Peter Steinberger (@steipete)
- [Tweet](https://x.com/steipete/status/2065650561484267540) (234 likes, 9 reposts, 20 replies): 我几乎跟不上大家提交到 https://t.co/qUxn0LF7Ct 的 Issues/PRs 的实现、测试和合并速度。

Codex 在构建 crabbox 的同时，运行在 crabbox 里面。
这正变成我工作的基础设施。

Codex 已经连续 4 天在多个工作树里不停循环。因为所有这些都可以端到端验证，它基本上是在自我构建。Codex 甚至会通过浏览器/Computer Use 自动注册服务。我的主要工作是填写信用卡信息，以及关闭我认为不合适的东西。
- [Tweet](https://x.com/steipete/status/2065574894545560062) (524 likes, 25 reposts, 35 replies): “在沟通中并不始终坦诚”是我最喜欢的新美式表达。https://t.co/MJItibA6xZ
- [Tweet](https://x.com/steipete/status/2065567852162355551) (173 likes, 8 reposts, 15 replies): codex -C ~/projects/openclaw -m gpt-5.5-cyber time https://t.co/6ANgzM1JKJ

### Dan Shipper (@danshipper)
- [Tweet](https://x.com/danshipper/status/2065620303729078435) (76 likes, 1 reposts, 6 replies): 哈利波特同人和《乡下人的悲歌》把我们带到了这里。https://t.co/tVAPAWq1Sg
- [Tweet](https://x.com/danshipper/status/2065618107750916323) (564 likes, 31 reposts, 28 replies): 这严重打乱了我的周末计划，我可能不得不真的去见人了。
- [Tweet](https://x.com/danshipper/status/2065610408627724635) (217 likes, 6 reposts, 12 replies): 各地 CFO：我们又回来了。https://t.co/v4ZxOKeYYk

### Aditya Agarwal (@adityaag)
- [Tweet](https://x.com/adityaag/status/2065467866930135491) (75 likes, 3 reposts, 2 replies): 今天叫 SPC 是个好日子。

我们暂时把自己改名为 Space Park Commons。
- [Tweet](https://x.com/adityaag/status/2065460544719704355) (42 likes, 5 reposts, 3 replies): 非常非常高兴欢迎 Ryan Atkins 以 Partner 身份加入团队。

我们在 @southpkcommons 还有很多要构建的东西！https://t.co/LwqApZUBRj

### Claude (@claudeai)
- [Tweet](https://x.com/claudeai/status/2065456700379807900) (737 likes, 17 reposts, 285 replies): 你正在构建什么？
- [Tweet](https://x.com/claudeai/status/2065456697670352901) (1750 likes, 49 reposts, 16 replies): https://t.co/LtOV9OsRkv
- [Tweet](https://x.com/claudeai/status/2065456695422136567) (935 likes, 28 reposts, 4 replies): https://t.co/BtwoXkczqm

## Podcast

### Unsupervised Learning: AI Vibe Check: Lab Wars, Why APIs Might Vanish & Future Predictions
[Episode](https://www.youtube.com/watch?v=W_iO8XxgD_I)

- 这期节目把当前 AI 市场描述为从原始模型发布转向长周期 agent 操作系统：编码 agent 已经能在更长时间范围内工作，工程师也越来越像是在管理 agent 工作，而不是独自实现所有细节。
- 一个核心主题是模型经济学。嘉宾讨论了为什么随着实验室追求托管推理收入，开放模型可能变少；也讨论了算力稀缺为什么可能让 API 访问在前沿实验室战略中变得不那么中心。
- 对话把 harness 和脚手架视为战略产品层。模型加上工具、eval、记忆、权限和工作流胶水，可能比单独模型更有价值，这为围绕完整系统而不只是权重的业务留下空间。
- 对创业公司而言，嘉宾反驳了前沿实验室会吞掉所有应用类别的观点。实验室也会受算力和产品约束影响，给拥有分发、工作流深度、数据和差异化执行力的公司留下机会。
- 对 builder 的实际信号是：假设 agent 能力会继续提升，但要围绕成本、访问、验证和集成这些约束来设计。赢家更可能拥有有用的闭环，而不只是提示词。

## Blog

### An update on recent Claude Code quality reports
[Post](https://www.anthropic.com/engineering/april-23-postmortem)

- Anthropic 表示，近期质量投诉来自影响 Claude Code、Claude Agent SDK 和 Claude Cowork 的三个产品层变更；API 和推理层没有受到影响。
- Claude Code 的问题始于 3 月 4 日将默认 reasoning effort 从 high 改为 medium，原本是为了降低 high 模式延迟；在用户反馈后，Anthropic 于 4 月 7 日回滚了该变更。
- 第二个问题会反复清除空闲会话里的旧 thinking，而不是只清一次，导致 Claude 显得健忘和重复；Anthropic 于 4 月 10 日修复。
- 对 builder 的启示是：即使基础模型没变，harness、记忆和产品默认值也可能让 agent 质量回退，因此可观测性和回滚纪律很重要。

### Scaling Managed Agents: Decoupling the brain from the hands
[Post](https://www.anthropic.com/engineering/managed-agents)

- Anthropic 将 Managed Agents 定位为面向长周期 agent 的托管服务，核心是一组应能跨越具体 harness 实现的接口。
- 文章认为，随着模型进步，harness 假设会过期：某个模型版本需要 context resets 解决的行为，在更强模型中可能已经消失。
- 核心设计是把“大脑”和“手”解耦：Anthropic 管理编排、上下文和恢复，而工具执行可以发生在受控环境中。
- 对 builder 来说，这是一个平台架构信号：围绕文件、进程、工具和 sandbox 的持久抽象，可能比任何单个提示词模式更重要。

### New in Claude Managed Agents: self-hosted sandboxes and MCP tunnels
[Post](https://claude.com/blog/claude-managed-agents-updates)

- Claude Managed Agents 现在支持 self-hosted sandboxes 和 MCP tunnels，让 agent 可以在客户自己控制的基础设施或托管 sandbox provider 中运行。
- 这次更新让敏感文件、包和服务留在企业边界内，同时由 Anthropic 继续运行 agent loop 来做编排和错误恢复。
- 自托管执行也让团队可以控制网络策略、审计日志、运行时镜像，以及面向构建或媒体生成等重任务的算力规格。
- 对 builder 的信号是：企业 agent 采用正在转向明确的执行边界、私有工具访问和可审计基础设施，而不是泛化的云端自动化。
