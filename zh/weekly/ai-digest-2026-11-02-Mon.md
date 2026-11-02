[English](../../en/weekly/ai-digest-2026-11-02-Mon.md) | [中文](./ai-digest-2026-11-02-Mon.md) | [双语](../../bilingual/weekly/ai-digest-2026-11-02-Mon.md)

---

# AI Builders Digest

覆盖范围：2026-10-26 00:00 至 2026-11-02 00:00（Asia/Shanghai）
已知 feed 覆盖缺口（UTC）：X/Twitter 2026-10-31T06:25:12.592Z 至 2026-10-31T06:26:17.261Z（0.02 小时）；X/Twitter 2026-11-01T06:26:17.261Z 至 2026-11-01T06:35:38.590Z（0.16 小时）。

## 导读

本周最关键的矛盾，不是 agent 能不能工作，而是整个经济中真正围绕 agent 重建的部分仍然很少。Box CEO Aaron Levie 指出，Anthropic 的 Fortune 500 客户平均只把不到 0.1% 的支出用于它，而真正有实际 agent 部署的经济活动不足 1%。Replit CEO Amjad Masad 的 Agent Habitat 和 Serval CEO Jake Stauch 的企业级护栏，从两端指向同一块缺失的基础设施：组织需要为 agent 设计流程、权限和审核系统，而不只是获得更强的模型。

算力仍是一个物理上分散的市场，而不是干净的公共事业。Modal 创始人兼 CEO Eric 描述的 GPU 交易充满深夜引荐、异构硬件和不可靠供应商；Modal 聚合 25 家云厂商，并把故障容量移出轮转。Nikunj Kothari 对 Anthropic S-1 的解读显示 5870 亿美元采购承诺和尚未开始的租约，其取消条款、融资方式和最低采购额差异很大。基础设施竞赛因此也是资产负债表和可靠性竞赛，这也解释了为什么模型网关别名、推理延迟、沙箱性能和容量利用率会在同一周集中出现。

安全从抽象的政策担忧变成了工程约束。Vercel CEO Guillermo Rauch 演示了隔离 microVM 如何通过 CPU 争用、缓存计时和 DRAM 带宽隐蔽通信；Masad 发布了 agent 沙箱指南；Serval 把审计轨迹和最小权限变成产品边界。Nathan Benaich 的 State of AI 对话把这一转向说得更直接：网络风险是近期威胁，模型权重被窃是现实情景，agent swarm 既带来防御杠杆，也带来新的暴露面。

产品层正汇聚到能在现有软件中运行、长期执行并调用工具的 agent。OpenAI 推出 6.1 Terra，强化 computer use 并提高用量，随后把多个订阅档位的限额翻倍；Anthropic 取消已验证 Ultra 账户的五小时限制，并分享了犹他州 Claude Code 试点；Codex 和 Claude 的用量变化已经成为产品战略，而不只是计费消息。Replit 可以通过链接导入 GitHub 仓库，Vercel 在构建 agentic CI，模型路由正在成为基础设施，而不是仪表盘里的一个设置。

另一股力量是对人类主体性的重新强调。设计师 Ryo Lu 希望工具增强人的智力，而不是把软件变成工厂；电影人 Fred Graver 把 AI 当作制作伙伴，但不交出作者身份。Builder Zara Zhang 展示了 coding agent 的一条超长 prompt 如何承载视觉品味，前 Claude Code 工程师 Thariq 则警告，agent 驱动的忙碌可能变成感觉高效、实际逃避的狂热。共同教训是，更好的委托并不会取消判断、手艺和观点的必要性。

## X / Twitter

### Box CEO Aaron Levie

Box CEO Aaron Levie 认为，企业采用 agent 的缺口仍然巨大：Anthropic 的 Fortune 500 客户平均只把不到 0.1% 的支出花在它身上，而真正有意义地部署 agent 的经济活动不足 1%。他预计真正的跃升会发生在企业围绕长期运行的 agent 和 swarm 重构流程之后，而不是停留在用 prompt 完成单个任务，届时 token 消耗最终会达到今天的 1000 倍。他的安全例子遵循同一逻辑：必须先把碎片化的数据和基础设施修好，agent swarm 才能读取日志、测试攻击并防御整个技术栈。（[来源](https://x.com/levie/status/2114761816199098587)，[来源](https://x.com/levie/status/2115516370695987435)，[来源](https://x.com/levie/status/2114391265655816315)）

### Replit CEO Amjad Masad

Replit CEO Amjad Masad 把 Agent Habitat 描述为一次远离部门和官僚体系的转变，走向由人类行使判断、agent 执行大部分工作的 self-driving company。产品动作与这一论点一致：Replit 现在可以从粘贴的链接运行任意 GitHub 仓库，公司还发布了一份关于如何为 agent 建立沙箱、提高生产力并降低风险的 whitepaper。他还表示，如果投资前沿 AI，他会主要押注新发现及其医学等应用，因为 coding 和大部分知识工作正被 sub-frontier 模型快速覆盖。（[来源](https://x.com/amasad/status/2114760898225299721)，[来源](https://x.com/amasad/status/2115890577430438063)，[来源](https://x.com/amasad/status/2116183233784394039)，[来源](https://x.com/amasad/status/2115207856496480261)）

### Anthropic 的 Boris Cherny

Anthropic 的 Boris Cherny 分享了一个具体的公共部门数据点：犹他州把 Claude Code 交给 10 个州级机构的 34 名开发者，80% 的人在 30 分钟内拥有可用环境，71% 的人表示在四周试点结束时节省了至少 20 小时。他还宣布，已验证 Ultra 账户不再受五小时限制。（[来源](https://x.com/bcherny/status/2115491259381072269)，[来源](https://x.com/bcherny/status/2116222842413142111)）

### Every CEO Dan Shipper

Every CEO Dan Shipper 把 Anthropic 的 S-1 概括成五个数字：2026 年上半年收入同比增长 1,300%，GAAP 经营盈利，85% 毛利率，900% 收入留存率，以及 80% 的收入来自过去六个月内发布的模型。他还预测，视频创作和游戏制作会像今天的文档与演示文稿一样，成为广泛分布的知识工作基础能力。（[来源](https://x.com/danshipper/status/2114714881312305542)，[来源](https://x.com/danshipper/status/2115093098816745910)）

### Y Combinator President and CEO Garry Tan

Y Combinator President and CEO Garry Tan 正在运行一个可见的 software factory，在 GStack 和 GBrain 上始终保持 10 到 20 个 subagent 运行，同时努力降低 token 使用和任务延迟。他把被他称为“smartest-for-the-money” codegen 模型的 Particle-1 与 Capy agent-swarm harness 搭配，并指出 GBrain Cloud 可以让同一层上下文跨 Claude Code、Codex、OpenClaw 和其他 harness 使用。重点是可携带的 context，而不是忠于某一个 agent。（[来源](https://x.com/garrytan/status/2115193524152860771)，[来源](https://x.com/garrytan/status/2115973131206799619)，[来源](https://x.com/garrytan/status/2116303457774899251)）

### Vercel CEO Guillermo Rauch

Vercel CEO Guillermo Rauch 复现了 OpenAI 关于共享 CPU 硬件隐蔽通信的研究，让彼此隔离、没有互联网的 Firecracker microVM 通过 CPU 争用、缓存驱逐计时和 DRAM 带宽争用进行聊天。他强调这不是窃取信息的那类 side channel，在真实生产环境中也更难实施，但他认为实验室拒绝参与这类工作，可能让开发者更难构建安全的沙箱。在产品侧，他把 agentic CI 描述为一种转变：agent 可以检查、触发、重放并最终判断 CI；他还把模型别名称为模型的 DNS，可以引导流量并减少团队被旧版本锁定的问题。（[来源](https://x.com/rauchg/status/2114770919436808572)，[来源](https://x.com/rauchg/status/2115539426684408300)，[来源](https://x.com/rauchg/status/2115573969369845855)）

### Google Labs VP Josh Woodward

Google Labs VP Josh Woodward 表示，Gemini 4 Carbon 在 Gemini 4 Argon 之后两周到来，先从网络防御者开始推送。Gemini Notebook 还免费开放了来自领先出版社的 700 多本教材，这是 AI 辅助学习的一次具体分发动作。（[来源](https://x.com/joshwoodward/status/2115495943948902517)，[来源](https://x.com/joshwoodward/status/2115953461108023400)）

### FPV Partner Nikunj Kothari

FPV partner Nikunj Kothari 为了研究算力合同仔细阅读了 Anthropic 的 S-1，发现 2656 亿美元采购承诺加上 3214 亿美元尚未开始的租约，合计 5870 亿美元，将在多年内支付。他指出，Google 和 Amazon 要求无论使用量多少都达到最低支出；SpaceXAI 价值 1205 亿美元的协议在锁定阶段于 2027 年 1 月和 3 月结束后，可以提前 90 天通知取消；Broadcom 的 420 亿美元融资安排不向 Anthropic 提供现金，而是支付设备租金，并按季度计入 9% 利息。总计算与基础设施费用每一美元带来的收入，从 2025 年第二季度的 0.57 美元升至 2026 年第二季度的 2.08 美元，这是衡量容量变现效率的一个有用指标。（[来源](https://x.com/nikunj/status/2114761204333998427)）

### AI 教程创作者 Peter Yang

AI 教程创作者 Peter Yang 认为，world model 仍处在 GPT-3.5 时代：画面和声音令人印象深刻，但还没有掌握让游戏好玩的核心循环和机制。一旦达到 GPT-5 或 GPT-6 的水平，他预计导演可以从单帧生成完整特效场景，个人也能制作视觉和声音都很精良的游戏。他还希望招聘从年限、公司名和轮次面试，转向实际作品、短期试做和真实项目。（[来源](https://x.com/petergyang/status/2115556794076741647)，[来源](https://x.com/petergyang/status/2115319325137731757)）

### 设计师 Ryo Lu

设计师 Ryo Lu 写了一篇长文，主张增强人的智力，而不是把软件优化成工厂。他引用 Engelbart、Licklider 和 Smalltalk，希望工具帮助人发现自己真正想表达什么，让人随着理解变化重塑系统，并避免一边让人更依赖、一边把这种依赖称为赋能。检验标准不是有多少工作不需要我们完成，而是过去无法参与的人现在能理解、表达和改变什么。（[来源](https://x.com/ryolu_/status/2115683228027912634)，[来源](https://x.com/ryolu_/status/2116126528060973480)）

### Sam Altman

Sam Altman 发布了 6.1 Terra，称它在许多任务上表现很强，而 computer use 是他尤其兴奋的能力。这一表述呼应了本周从聊天转向能操作软件的 agent 的整体方向。（[来源](https://x.com/sama/status/2114818620782248024)）

### Swyx

Swyx 与 Cognition 和 Latent Space 有关。他把 Gemini 在 AAv5 上排名第一视为 model neurodiversity 的证据，并指出现在的前沿实验室数量大约是上一次 AI Engineer 舞台分享时的两倍。他的实践建议与最大化 effort 相反：用低 effort 加 critique loop 提高吞吐，并把 effort 设置看成 tabs 与 spaces 之争，一种他乐于争论的个人偏好。（[来源](https://x.com/swyx/status/2115624308567658713)，[来源](https://x.com/swyx/status/2116642586387730593)，[来源](https://x.com/swyx/status/2116773135668404286)）

### 前 Claude Code 成员 Thariq

前 Anthropic Claude Code 成员 Thariq 原型开发了一个 AI 原生的 macOS dock，为写作、构建等场景提供不同模式，agent 会实时分类活动和通知，并能添加新模式。他还指出 coding agent 的一种失灵模式：一种感觉一直在高效工作、实际什么也没发生的狂热，往往是逃避其他事情的形式。他对经济末日论的回应是更加 AGI-pilled，押注一个能解释自身工作、让每个人发挥最大效能的 aligned ASI，而不是假设大规模失业。（[来源](https://x.com/trq212/status/2115135857669881939)，[来源](https://x.com/trq212/status/2115937378674372783)，[来源](https://x.com/trq212/status/2116212322838655014)）

### OpenAI 的 Thibault Sottiaux

OpenAI 的 Thibault Sottiaux 介绍 6.1 Terra，称它在写作、人格和细微请求理解上明显更强，computer use 也更好，在 API 和订阅中的用量是 6.1 Sol 的两倍。随后他把 Pro 100/200/500 档位和 Business Premium 的所有限额翻倍，并增加了移动端账户切换和 banked reset。（[来源](https://x.com/thsottiaux/status/2114800277677092936)，[来源](https://x.com/thsottiaux/status/2115850175868727621)，[来源](https://x.com/thsottiaux/status/2116405414921384099)）

### Builder Zara Zhang

Builder Zara Zhang 制作了一期视频随笔，讲如何在不成为设计师的情况下用 AI 创作有品味的作品。她表示剪辑只用了 coding agent 的一条超长 prompt，这是一个很紧凑的例子，说明品味可以通过指令表达，而不是只能靠手工执行。（[来源](https://x.com/zarazhangrui/status/2116281211962454056)，[来源](https://x.com/zarazhangrui/status/2116283023415287932)）

### SPC General Partner Aditya Agarwal

SPC general partner Aditya Agarwal 认为，美国 AI 最大的风险是把自己吓到放慢速度：“Fear is a policy choice. So is building.” 他还发布了一封 LP letter，讨论如何识别人才，试图让创始人评估更具体、更可证伪；他指出，无论 Anthropic 以 1.2 万亿美元还是 2 万亿美元 IPO，其价值创造都极其惊人，而大多数公司的价值通常是在上市之后才创造出来。（[来源](https://x.com/adityaag/status/2114793226154418314)，[来源](https://x.com/adityaag/status/2115486597739430004)，[来源](https://x.com/adityaag/status/2116249251651215822)）

## Podcast

### Unsupervised Learning：Ep 95：Modal CEO 谈推理的未来、GPU 市场的混乱与沙箱赌注的起源

**核心结论：** AI 基础设施市场会长期保持混乱和异构，胜出的层是能把不可靠算力变成可靠产品的公司。

Modal 创始人兼 CEO Eric 经营的公司为 AI 工作负载聚合来自 25 家云厂商的容量。他描述的 GPU 市场不像一个干净的交易所，而更像由深夜消息、酒店大堂引荐以及硬件、位置和可靠性各不相同的供应商组成的网络。团队在必要时接受更高价格和更长合同，然后把故障容量移出轮转。反直觉的教训是，算力不是一种可互换的合约。可靠性、网络和地域重要到足以让市场无法只发布一个价格。“这根本不像可以在交易所买卖的东西，因为它不是一种可互换的合约。” Modal 的沙箱赌注是 timing 不对称的案例：2023 年原型只花几天，随后 coding agent 在 2025 年爆发，系统不得不重写五次。Eric 接下来的大赌注是更低延迟的推理，“几乎像为推理建一个 CDN”，以及被低估的中型模型训练和 reinforcement learning 机会。对 builder 来说，含义是抽象掉波动的底层，按故障来设计，并让应用在算力市场演变时保持可迁移。（[来源](https://www.youtube.com/@RedpointAI)）

### No Priors：挑战 ServiceNow：面向普通人的 coding agent，对话 Serval 联合创始人兼 CEO Jake Stauch

**核心结论：** Coding agent 要走出工程团队，企业必须用软件开发生命周期、权限和审计轨迹把它们包起来，让代码可以安全上线。

Serval 联合创始人兼 CEO Jake Stauch 正在通过给 IT 和其他非工程团队提供内部自动化的 coding agent 平台，挑战 ServiceNow。他对既有平台的诊断不是功能少，而是每个新工作流都需要实施，通常还要请顾问，导致团队总是落后六到十二个月。Serval 的答案不是无限制的自主性，而是把 agent 放进 staging、审批、审计轨迹和最小权限控制之后，让大型机构可以允许很多人构建，同时不让任何一个 agent 触碰所有系统。“Serval 是边界。Serval 是护栏。” 他最有意思的经营观点是，软件开发生命周期才是企业 agent 缺失的产品类别。AI 原生公司会把 agent 直接发到生产环境；银行等大型机构则需要审核、用户验收测试，以及 agent 请求调用特定工具或脚本时的批准机制。Serval 还把产品决策下放给每天参加客户电话的工程师，Jake 说团队愿意在市场变化时删掉已有功能。Fox 已在全公司采用 Serval，带领迁移的人被提名为公司 MVP，这提醒人们，买家需要的是职业上的胜利，而不只是一个更安全的工具。（[来源](https://www.youtube.com/@NoPriorsPodcast)）

### The MAD Podcast with Matt Turck：State of AI 2026：年度最大故事与 2027 年 AGI？对话 Nathan Benaich

**核心结论：** 2027 年预测最有用之处不是一个具体的 AGI 日期，而是约束条件从模型智力转向算力、验证、安全和机构吸收能力。

Nathan Benaich 是风险投资人，也是 State of AI Report 的作者；他用报告最后的预测提出 AGI 可能在 2027 年到来。他的定义很实际：当模型在陌生的法律、金融和投资话题上，比他能在有限时间内完成的压缩思考更好时，就近似 AGI。Recursive self-improvement 是加速器，尤其是当任务可以放进有可验证奖励的软件环境，而且模型能充当自己的 verifier 时。“网络风险比 AI 消灭人类真实得多。” 安全主导了他对近期风险的判断。他讨论了窃取模型权重的尝试、Hugging Face 的 agent 事件、自我复制的 agent swarm，以及前沿实验室的网络防御可能是什么样。物理世界构成另一重约束：社区阻止数据中心建设，欧洲大约 8 万块 GPU 和电力成本，以及追赶 OpenAI 需要的一万亿美元。他对独立实验室的直白框架是：要么拼死冲向前沿，要么活得足够久去服务推理。报告还追踪 agent 进入知识工作的进程，Codex 的非开发者使用量增速远高于开发者。（[来源](https://www.youtube.com/@DataDrivenNYC/videos)）

### 同时发布

- **AI & I by Every：** 《AI 能做出好艺术吗？对话 Fred Graver》（[来源](https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL)）
- **Latent Space：** 《用 agent 处理长周期金融工作：对话 Arca 的 Aman Singh》（[来源](https://www.youtube.com/@LatentSpacePod)）

## Blog

经过验证的本周 feed 中没有符合条件的博客内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
