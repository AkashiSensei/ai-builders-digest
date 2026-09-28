[English](../../en/weekly/ai-digest-2026-09-28-Mon.md) | [中文](./ai-digest-2026-09-28-Mon.md) | [双语](../../bilingual/weekly/ai-digest-2026-09-28-Mon.md)

---

# AI Builders Digest

覆盖范围：2026-09-21 00:00 至 2026-09-28 00:00（Asia/Shanghai）
已知 feed 覆盖缺口（UTC）：X/Twitter 2026-09-22T06:42:06.429Z 至 2026-09-22T06:42:38.470Z（0.01 小时）；X/Twitter 2026-09-24T06:42:38.168Z 至 2026-09-24T06:43:22.960Z（0.01 小时）；X/Twitter 2026-09-26T06:39:22.753Z 至 2026-09-26T06:41:10.021Z（0.03 小时）；X/Twitter 2026-09-27T06:41:10.021Z 至 2026-09-27T06:57:29.581Z（0.27 小时）。

## 导读

本周前沿实验室密集发布新品。Anthropic 的 Opus 5.5 成为 Claude Code 和 Claude 应用（包括 Cowork）的默认模型，Anthropic 的 Cat Wu 表示，公司全线默认使用 medium effort，因为它能以更快的速度达到 Fable 5.1 级别的智能，rate limit 消耗也比 Opus 5 多出 25%。OpenAI 的 Thibault Sottiaux 发布了 GPT-6 Sol 和 Luna，API 价格永久下调 50%，并为付费用户补发了一次 usage reset。Anthropic Claude Code 工程师 Boris Cherny 说，Opus 5.5 和 Fable 5.1 都完成了把 HAProxy 从 C 移植到 Rust 的任务，但 Opus 5.5 用了 9.5 小时，Fable 用了 12 小时，成本还低 51%；Vercel CEO Guillermo Rauch 最新一轮 Next.js eval 中，Opus 5.5、GPT-6 Sol 和 Fable 5.1 位居前列，Grok 4.7 紧随其后，价格便宜 2 到 7 倍。

这轮发布也让人看到企业预算转移能有多快。Box CEO Aaron Levie 说，Box 用 Box Agent 在复杂的企业知识工作上测试了 Opus 5.5，结果达到前沿水平：token 用量比 Opus 5 少 63%，啰嗦程度低 42%，速度快 30%；在金融尽职调查、云成本分析、客户账户分析和临床诊断上，任务准确率分别提升 39%、65%、17% 和 15%。Rauch 的 Vercel AI Gateway 数据显示，两个月内 Anthropic 的支出份额从 69% 降到 40%，OpenAI 从 10% 升到 24%，Opus 5.5 上线两天就占到 10%。

本周被重复最多的战略判断是：软件的主要用户正在从人变成 agent。Levie 认为，agent 使用软件的频率将达到人类的 100 倍，因此安全层、guardrail、数据管理和工作流编排会成为最有价值的位置。Rauch 推出 Vercel Drives，把 agent 的存储解耦出来，并提出新的采购标准是产品对 agent 是否足够好用，还预测长尾 SaaS 未来会被生成而不是被购买。Y Combinator 总裁兼 CEO Garry Tan 把这一转变压缩成两个趋势：让软件 agent 想要你，以及用 agent 让人想要软件。Peter Yang 警告，当 agent 浏览网页并完成交易、人类根本没看到广告时，广告市场会迎来一次残酷的觉醒。

大规模运行 agent 仍是一件脏活累活。Boris Cherny 用 Opus 5.5 在 Lean 中形式化验证了 Claude Agent SDK，产出 16 个修复 bug 和竞态条件的 PR，并说他在 Slack 里的 Claude Tag 现在写了一多半的 PR。Peter Steinberger 说 Astra 找到了 libuv 中一个约 14 年前的 bug，还把 OpenClaw 从同步数据库访问改成异步，这项改造已经以 575 个 PR 的方式逐步落地。Thibault Sottiaux 处理了一次 Codex 宕机，为付费用户重置用量上限，并预测随着代码可以按请求实时生成，发布前的 code freeze 可能会消失。

消费级 agent 正在收敛到同一套功能，但质量差距很大。Peter Yang 认为，Muse 有望领跑 personal agent 之争，因为 Meta 可以在所有渠道推广它；ChatGPT 在用户规模和模型质量上仍然领先，但很难同时兼顾工作与个人使用；Grok Bot 正在变成知识工作场景里多人的 agentic Slack；而 Apple 的年度发布节奏太慢。他还说 multiplayer AI 仍未解决，因为他没法轻松把配偶拉进一个 Muse 会话。Meta AI 高级总监 Madhu Guru 认为，买衣服可以是一种娱乐，但找屋顶工人对大多数人来说是痛苦，因此能消除这种摩擦的 agent 拥有巨大的潜在需求。Replit CEO Amjad Masad 展示了 Muse 现在可以在 Replit 上做应用，Replit 也收购了 Atta 团队，增强商业分析和数据可视化能力。

对纯粹速度最有力的制衡，来自那些担心 slop 的 builders。设计师 Ryo Lu 写道，危险不是 AI 让我们变懒，而是让我们无休止地忙碌，在还没找到真正的意图之前就拥有无限产能，真正的前沿也许是 discernment。Rauch 呼吁拒绝 non-understanding，警告未经核实的 AI 文本可能让阅读本身被贬值。Anthropic 的 Thariq 认为，使用模型能力的正确方式不是向生产环境塞进十倍的功能，而是花更多时间理解用户；Steinberger 的经验则是给 agent 一个足够有野心的目标，比如在覆盖率波动控制在 2% 以内的前提下删掉 20% 最没用的测试。

## X / Twitter

### Box CEO Aaron Levie
Levie 认为，AI agent 使用软件的频率将达到人类的 100 倍，因此安全层、guardrail、数据管理和工作流编排会成为最有价值的位置。他把替你完成交易的 personal agent 视为巨大的变现机会，因为摩擦降低后会有更多支出通过它们完成；Box 用 Box Agent 对企业知识工作的 Opus 5.5 测试也显示，token 用量比 Opus 5 少 63%，啰嗦程度低 42%，速度快 30%，各行业测试的准确率最高提升 65%。

https://x.com/levie/status/2102235949430354273 | https://x.com/levie/status/2102253246807261579 | https://x.com/levie/status/2102448415775051790

### Anthropic Claude Code 工程师 Boris Cherny
Cherny 让 Opus 5.5 和 Fable 5.1 分别把 HAProxy 从 C 移植到 Rust，结果 Opus 5.5 用了 9.5 小时，比 Fable 的 12 小时更快，成本还低 51%。他还用 Opus 5.5 在 Lean 中形式化验证了 Claude Agent SDK，产出 16 个修复 bug 和竞态条件的 PR，并说他在 Slack 里的 Claude Tag 现在写了一多半的 PR，还修掉了大部分产品反馈和 bug。

https://x.com/bcherny/status/2102439069053747549 | https://x.com/bcherny/status/2102543349102338309 | https://x.com/bcherny/status/2102898067133595992 | https://x.com/bcherny/status/2103538666597691552

### Anthropic 的 Cat Wu（Claude Code 与 Cowork）
Wu 说，Opus 5.5 现在是 Claude Code 和 Claude 应用（包括 Cowork）在 Pro、Max 和 Team 套餐下的默认模型。她表示 Anthropic 全线默认使用 medium effort，智能水平与 Fable 5.1 相当但速度更快，rate limit 消耗也比 Opus 5 多出 25%。

https://x.com/_catwu/status/2102437713781944397

### Claude（官方账号）
Anthropic 的 Claude 账号上线了 Claude Marketplace，用户可以添加 Slack、Notion 等 connector 和 plugin，购买 Cursor、CrowdStrike 等公司提供的 agent 和产品，并与 Accenture、Deloitte 等服务伙伴合作。它还用一批 demo 标记了 Opus 5.5 的发布。

https://x.com/claudeai/status/2102840851538080172 | https://x.com/claudeai/status/2102471892099866883 | https://x.com/claudeai/status/2102471885061812714

### OpenAI 的 Thibault Sottiaux（Codex 与 ChatGPT）
Sottiaux 发布了 GPT-6 Sol 和 Luna，称它们在包括写作质量在内的各方面都有显著提升，API 价格永久下调 50%，并为 Plus、Pro 和 Business 用户补发了一次 usage reset。他还强调 ChatGPT Voice 可以在完整的 plugin 生态中工作；在 Codex 宕机后，他为付费用户重置了用量上限，并预测随着代码可以按请求实时生成，发布前的 code freeze 可能会消失。

https://x.com/thsottiaux/status/2102463847714247142 | https://x.com/thsottiaux/status/2102440619616682120 | https://x.com/thsottiaux/status/2102814202117411196 | https://x.com/thsottiaux/status/2103637477760311522 | https://x.com/thsottiaux/status/2104108167806550046

### Vercel CEO Guillermo Rauch
Rauch 认为 agent 可以拆成三部分：大脑（模型与 harness）、双手（工具、电脑、浏览器）和文件（记忆、skills、repo），要在云端低成本运行它们，就必须把这些部分解耦；Vercel 推出了 Drives，作为可随时挂载的 agent 外部磁盘，同时也提升了安全性和可审计性。他的 AI Gateway 数据显示，Anthropic 的支出份额从 69% 降到 40%，OpenAI 从 10% 升到 24%，Opus 5.5 两天内就占到 10%。他预测新的采购标准将是产品对 agent 是否足够好用，并用一句话概括这场转变：我们过去写代码，现在写英文。

https://x.com/rauchg/status/2102820148629614685 | https://x.com/rauchg/status/2103216656747262419 | https://x.com/rauchg/status/2103564484602384855 | https://x.com/rauchg/status/2103939888513274147 | https://x.com/rauchg/status/2103543983557517340

### Y Combinator 总裁兼 CEO Garry Tan
Tan 把 Capy 当作 agentic coding 层来用，说它能跟踪多步工作流，比单独使用 Codex 或 Claude Code 更快地完成大型 PR，他现在用 Capy 和 GStack 的 /autoplan 搭配 GPT-6 medium reasoning 来修生产环境的 bug。他把获客变化归纳成两个趋势：让软件 agent 想要你，以及用 agent 让人想要软件。他也主张让个性化教育合法化。

https://x.com/garrytan/status/2102095924893827501 | https://x.com/garrytan/status/2102955139875397806 | https://x.com/garrytan/status/2103989902476259702 | https://x.com/garrytan/status/2103470568104468517

### Anthropic Claude Code 的 Thariq
Thariq 认为，使用更强模型能力的正确方式不是向生产环境塞进十倍的功能，而是花更多时间理解用户、做实验和做原型。他深入研究了 effort 设置，结论是当你想保持在回路里时 low effort 更好，而 max effort 主要用于完全不需要你介入的任务或寻找安全漏洞；他还说 workflow 现在是他使用 Claude 的重要方式。

https://x.com/trq212/status/2102548686303854790 | https://x.com/trq212/status/2103576349499855160 | https://x.com/trq212/status/2103577115010687067 | https://x.com/trq212/status/2102477527688388752 | https://x.com/trq212/status/2103212051065921632

### OpenClaw 创始人 Peter Steinberger（OpenClaw、OpenAI）
Steinberger 说，ChatGPT 在 macOS 27 上开始崩溃后，Astra 在 libuv 里找到了一个约 14 年前的 bug，Daybreak 还发现了 8 个长期存在的泄漏。他认为把 OpenClaw 迁到 SQLite 时最大的设计错误是使用同步数据库访问，当单个 agent 可能并行跑 50 个会话时就不够用了；一个与 Astra 设定的目标已经落地了 575 个 PR，把所有东西迁到异步 worker，再大的重构也不再可怕。他还说，只告诉 agent 清理一下会让它太早停下，而一个有野心的目标，比如在覆盖率波动控制在 2% 以内的前提下删掉 20% 最没用的测试，能让它走得更远。

https://x.com/steipete/status/2102501642176528743 | https://x.com/steipete/status/2103200311641076100 | https://x.com/steipete/status/2103648679169257737 | https://x.com/steipete/status/2103148444701610233

### Every CEO Dan Shipper
Shipper 向新关注者推荐了他对 Opus 5.5 与 Sol-6 的 vibe check，以及他关于 AI 自动化会为人类专家创造更多好工作的观点。他还让 Every 的 agent 策划了 9 月的聚会，从菜单到宾客名单，用来检验 AI agent 能不能办好一场派对。

https://x.com/danshipper/status/2102556723244564715 | https://x.com/danshipper/status/2102826854357016793 | https://x.com/danshipper/status/2103850415930708437 | https://x.com/danshipper/status/2103678798827020298

### Replit CEO Amjad Masad
Masad 宣布 Muse 现在可以在 Replit 上做应用，让消费级 agent 与 coding 平台的竞争进一步升温。他把 Replit 收购 Atta 团队放在 self-driving company 的框架下解释，说目标是让每个人都有能力理解一家企业。

https://x.com/amasad/status/2103129037011120525 | https://x.com/amasad/status/2103632415185133992 | https://x.com/amasad/status/2102120769232978174

### Meta AI 高级总监 Madhu Guru
Guru 不同意 Ben Thompson 关于消费级 agent 的论点，她认为消费者与做事之间并不是单一关系：买衣服对某些人来说可以是娱乐，但找屋顶工人对大多数人来说是痛苦。她细数了找屋顶工人的过程，从读十条评价、反复打电话、协调保险到比较报价，认为能消除这种摩擦的 agent 拥有巨大的潜在需求。

https://x.com/realmadhuguru/status/2102777931764498536

### Peter Yang（实用 AI 教程与访谈）
Yang 详细拆解了 personal agent 之争：他认为 Muse 会领先，因为 Meta 在所有渠道推广它；ChatGPT 在用户规模和模型质量上仍然领先，但很难同时兼顾工作与个人使用；Grok Bot 正在变成知识工作场景里多人的 agentic Slack；Google 的 Spark 应该成为 Gemini 的主体验；Apple 的年度发布节奏太慢。他把 multiplayer AI 视为下一个大解锁点，因为他没法轻松把配偶拉进一个 Muse 会话，并建议所有人把 personal skills 和文件设计得可以在不同 harness 和 agent 之间迁移。

https://x.com/petergyang/status/2101862331345154469 | https://x.com/petergyang/status/2101865476145959373 | https://x.com/petergyang/status/2102215701255844074 | https://x.com/petergyang/status/2102946952740741394 | https://x.com/petergyang/status/2103693608729932025

### FPV Ventures 合伙人 Nikunj Kothari
Kothari 认为，除了少数例外，那些吹嘘 tokenmaxxing 的公司往往有最差的产品体验，因为好产品靠的是策展和打理，而不是把一堆东西丢给 agent 让它自己想办法。他说 Codex on Mac 在 computer use 上无人能敌，而 Instinct 和 Muse 展示了零配置下面向大众的优秀 agent 是什么样；他还提醒，大量 SPV 和分期估值意味着新闻里的融资数字已经不能反映真实情况。

https://x.com/nikunj/status/2102049065504739366 | https://x.com/nikunj/status/2102186665863463199 | https://x.com/nikunj/status/2102534909076349291

### 设计师 Ryo Lu（Cursor、Notion、Stripe）
Lu 写了一篇长文，反对把效率、生产力和速度本身当作目的，追问如果连深入思考的时间都没有，无休止的生产又有什么意义。他的答案是：危险不是 AI 让我们变懒，而是让我们无休止地忙碌，在找到真正的意图之前就拥有无限产能。他认为真正的前沿也许是 discernment，知道什么不该做、什么时候该停下，AI 应该帮我们变得更像人，而不是把生活变成工具。

https://x.com/ryolu_/status/2102933485795369213

### OpenAI 的 Sam Altman
Altman 回应了 OpenAI 正在进行的审查，即其 agent 在训练和评估期间如何使用互联网访问，他说公司一直在发布摘要，并努力在透明度和理解数 PB 级 agent 活动日志之间取得平衡，同时与受影响的组织合作。他说 OpenAI 正按严重程度排优先级，称 Hugging Face 是目前见过最严重的事件，并承诺在不受其他公司披露漏洞决定限制的范围内尽量透明。他还称赞了一位 OpenAI 同事的工作，并说创业公司在某件事上天然擅长，而大公司很难保持这种能力。

https://x.com/sama/status/2103567198690349362 | https://x.com/sama/status/2102469008079679640

## Podcast

### No Priors: Re-Founding Incumbents for the AI Era with Sequence Holdings Co-Founder and CEO Michael Lee
https://www.youtube.com/@NoPriorsPodcast

**核心结论：** 最大的 AI 回报，可能来自买下合适的在位企业，围绕前沿工程能力把它重新创办一次，而不是再造一个创业公司。

Sequence Holdings 联合创始人兼 CEO Michael Lee 经营着一家永久控股公司，与管理团队一起收购并重新创办企业，他刚刚宣布了迄今为止规模最大的 AI take-private：与 Dell 家族办公室一起以 77 亿美元收购保险经纪公司 Baldwin。他的判断是，AI 对经济的影响并不均匀。编程应该由创业公司拿下，但那些受到品牌、规模、网络效应和监管保护的行业，更适合能继承这些优势、再加上世界级工程能力的在位企业。Lee 寻找的是他所说的有利组织物理结构，也就是业务密集、运营集中，任何在总部建成的东西都能摊薄到所有分支机构。银行和保险经纪符合这一点，他认为监管是特性而不是缺陷，因为定义清晰的运营和良好的数据卫生让这些业务成为 agent 格外合适的家。他的第一笔投资 BankSouth 就是证明：3 月以来消费贷审批时间下降 94%，平均贷款周期从 30 天缩短到 11 天，银行在人员不增加的情况下贷款量环比翻倍。他对投资者的建议很直接：押注那些在大市场里解决难题的卓越人才，因为真正稀缺的是执行力，而不是想法。

### The MAD Podcast with Matt Turck: Who Feeds the GPUs? Inside AI's Hidden $30B Layer | Renen Hallak, VAST Data
https://www.youtube.com/@DataDrivenNYC/videos

**核心结论：** AI stack 中间层的软件基础设施，是大量长期价值沉淀的地方，它会奖励那些从一开始就为 AI 设计的架构。

VAST Data 创始人兼 CEO Renen Hallak 所处的位置，正是 Jensen Huang 所说的五层 AI 蛋糕的中间：在模型和应用之下，在能源和芯片之上。VAST 估值约 300 亿美元，为多家主要 AI cloud 提供支撑，但基础设施圈之外很少有人知道它。Hallak 在 2015 年的创业洞察是，神经网络进步的原因不是新算法，而是它们终于能快速访问多得多的数据，而当时的系统要么快、要么大，无法兼得。VAST 的答案是一种 disaggregated shared everything 架构，把存储介质放在高速网络的另一侧，让每个节点都像访问本地数据一样看到全部数据，从而扩展到 EB 级容量和每秒数十 TB 的吞吐。他认为新 stack 颠覆了旧 stack：训练主要需要规模和速度，而推理和 agent 还增加了韧性、低延迟、模型路由、KV cache、RAG 以及面向 agent 的细粒度身份。VAST 的机密计算方案 DataEnclave 让企业可以在本地运行推理，而不暴露模型权重或自己的数据。他说存储曾经是创业公司的坟墓，但 VAST 几乎没有流失并且已经盈利，因为软件利润率和每两年增长约 10 倍的市场非常匹配。

## Blog

本期经过验证的周度 feed 中没有符合入选标准的 blog 文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
