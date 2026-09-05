[English](../../en/daily/ai-digest-2026-09-05-Sat.md) | [中文](./ai-digest-2026-09-05-Sat.md) | [双语](../../bilingual/daily/ai-digest-2026-09-05-Sat.md)

---

# AI Builders Digest

## 导读

**1. GPT-6 Astra 提前进入全面开放阶段。** Sam Altman 宣布，GPT-6 Astra 现已面向 Work/Codex 中的所有 Pro、Enterprise 和 Business Premium 用户开放，并已进入 API；几个小时后他确认，Astra 现已覆盖所有 Plus 和 Business 用户，并附上一句「Happy building!」。在 OpenAI 负责 Codex 与 ChatGPT 的 Thibault Sottiaux 说，这次上线比计划更早完成，OpenAI 今天将为所有 Plus、Pro 和 Business 用户执行完整的 banked reset（累计额度重置），太平洋时间晚上 8 点前创建或升级的账户也包括在内。

**2. Astra 在 OpenAI 内部已经开始「回本」，并进入各类构建者的工作流。** Thibault Sottiaux 表示，Astra 在尚未全面开放时「可能是我们最大的竞争优势」，内部生产力提升大到让 OpenAI 把部分计划提前了 6 个月，改在 DevDay 发布而不是明年年中。Replit CEO Amjad Masad 发文「Astra on Replit」，Every CEO Dan Shipper 让 Astra 运营办公室的 fantasy team、并为 fantasy football 选秀做「film study」，做实用教程的 Peter Yang 则希望 OpenAI 推出一款 Apple Watch 应用，让他能用语音口述给 Codex 会话并收到语音回复，也许这正是传闻中 OpenAI 硬件要做的事。

**3. 浏览器正在成为 agent 的基础设施。** Anthropic 让 Claude in Chrome 在全部付费套餐中全面开放，Claude 可以在 probes 与 safety classifier 的保护下自主操作浏览器，并给桌面版 Claude Cowork 内置了一个浏览器。Vercel CEO Guillermo Rauch 为 WebMCP 背书，认为 agent 应该「建立在现有 WWW 基础设施之上」，让页面直接向正在测试它的 agent 暴露调试工具。Y Combinator 的 Garry Tan 把 Aside 选为首选的 AI agent 浏览器与 harness，说它不到 3 分钟就完成了一次他花了 2 小时的 OpenClaw 加 Slack 配置，现在已是 GStack 首选的远程会话浏览器。

**4. CPU 重新回到 AI 计算的中心。** Arm CEO Rene Haas 在 No Priors 上说，加速器热潮让人们忘了「总要有人做编排、仲裁，决定这些 token 往哪里去」，而这个角色由 CPU 承担。他说 Arm 有 80% 到 90% 的工程师每天使用 AI，验证环节才是 AI 在芯片上最大的用武之地；他预计供应紧张还会持续三到五年，数据中心建设是下一个瓶颈，并认为从人形机器人的大脑到指尖，机器人产业都会跑在 Arm 上。

**5. 用 AI 做产品：练习、预期与诚实的惊叹。** Meta 的 Madhu Guru 建议这个周末挑一个你熟悉的工作流做全流程自动化，逼自己想清楚端到端体验、MCP 与工具的使用、人类该在哪里保持参与以及如何评估，因为「唯一的学法是去 build」。Aditya Agarwal 坦言，即使理解 RL、inference time scaling 和数据验证循环，也挡不住「这些模型完全是巫术」的感觉；Zara Zhang 则提醒，大多数人以为 AI 的写作能力比它实际的要强。

## X / Twitter

### Sam Altman（OpenAI CEO）

OpenAI CEO Sam Altman 宣布，GPT-6 Astra 现已面向 Work/Codex 中所有 Pro、Enterprise 和 Business Premium 用户开放，并已进入 API，接下来将开始向 Plus 和 Business 用户推出。几个小时后他确认，Astra 现已向所有 Plus 和 Business 用户开放，并祝大家「Happy building!」

- [Sam Altman 谈 GPT-6 Astra 开放范围](https://x.com/sama/status/2095973658867171733)
- [Sam Altman 谈 Astra 覆盖 Plus 和 Business 用户](https://x.com/sama/status/2096008528834244741)

### Thibault Sottiaux（Codex & ChatGPT，OpenAI）

在 OpenAI 负责 Codex 与 ChatGPT 的 Thibault Sottiaux 说，团队「开心得不得了」（beyond happy），因为 Astra 今天提前按计划完成上线；OpenAI 今天将为所有 Plus、Pro 和 Business 用户执行完整的 banked reset（累计额度重置），在今天结束前到账，太平洋时间晚上 8 点前创建或升级的账户也有份。他在另一条帖子里把 Astra 称为「可能是我们最大的竞争优势」：在它尚未全面开放时，内部生产力提升巨大，OpenAI 因此把部分计划提前了 6 个月，将在 DevDay 上发布，而不是明年年中。

- [Thibault Sottiaux 谈 Astra 提前上线与 banked reset](https://x.com/thsottiaux/status/2096035437299237298)
- [Thibault Sottiaux 谈 Astra 作为 OpenAI 的竞争优势](https://x.com/thsottiaux/status/2096101429832552872)

### Guillermo Rauch（Vercel CEO）

Vercel CEO Guillermo Rauch 说自己对 WebMCP「非常看好」（super bullish）：就像 Tesla FSD 面对现实世界（街道、红绿灯、坑洼）一样，agent 也必须建立在现有 WWW 基础设施之上，而 WebMCP 让这件事更高效。他举了一些独特的例子，比如 Next.js 的开发页面可以直接向正在测试那个标签页的 agent 暴露调试工具，并带上页面级上下文，而不必去服务器日志里翻找，也无需单独寻找并配置一个 MCP server。在这种世界里，他认为「fx + agent-browser 就是一套零调试损耗的完整 Web 开发栈」。他还断言，「AI 软件工厂将产出无 bug、能自我改进的软件」。

- [Guillermo Rauch 谈 WebMCP](https://x.com/rauchg/status/2096065378598441431)
- [Guillermo Rauch 谈 AI 软件工厂](https://x.com/rauchg/status/2095926173293572467)

### Garry Tan（Y Combinator 总裁兼 CEO）

Y Combinator 总裁兼 CEO Garry Tan 形容用 Aside 作为 AI harness 的体验「疯狂地好」（absolutely insane）：他尝试把 OpenClaw 接到 Slack 花了两个小时，而 Aside 的 harness 自带完整集成与浏览器集成，不到 3 分钟就完成了，还带智能的访问控制默认设置。他还说，GStack 现在把 Aside 浏览器作为首选的远程会话浏览器，用来让 AI agent 以「你本人」的身份访问网页和凭证；在他看来，Aside 是他用过的所有 AI agent 工具中「绝对最好的方式」，既是「出色的浏览器」，又「很擅长凭证管理」，而且「本身就是一套出色的 harness 与记忆系统」。

- [Garry Tan 谈 Aside 作为 AI harness](https://x.com/garrytan/status/2095971990645755941)
- [Garry Tan 谈 GStack 使用 Aside 浏览器](https://x.com/garrytan/status/2095948689823121872)

### Amjad Masad（Replit CEO）

Replit CEO Amjad Masad 在一条引用转发中写道「Astra on Replit」，并在另一条引用转发中打趣说：「奇点已经到来，只是分布得并不均匀。」

- [Amjad Masad 谈 Astra 登陆 Replit](https://x.com/amasad/status/2095986658185453928)
- [Amjad Masad 谈分布并不均匀的奇点](https://x.com/amasad/status/2096022087035195647)

### Madhu Guru（Meta 的 AI 高级总监）

Meta 的 AI 高级总监 Madhu Guru 建议，这个周末可以做一件提升 AI 产品构建能力的实事：选一个你熟悉的工作流（来自个人生活或工作），用你顺手的 AI 产品把整件事自动化，可能需要多试几款。这个练习会逼你想清楚几个问题：好的端到端体验长什么样、应该如何用 MCP 和工具、哪里应该保留人类在环（human in the loop）、以及如何评估效果，然后再不断扩大野心。「亲手做这一次，比读一个月 AI 产品构建的文章学到更多。唯一的学法是去 build。」

- [Madhu Guru 谈周末的 AI 构建练习](https://x.com/realmadhuguru/status/2095907570540335174)

### Peter Yang

为忙碌人群制作实用 AI 教程与访谈的 Peter Yang 建议，OpenAI 应该推出 Apple Watch 应用，让他可以直接用语音向自己的 Codex 会话口述内容，并收到语音回复，这样他就不必随身带着手机、也不用喂养自己的「屏幕瘾」。他说，也许这正是传闻中 OpenAI 设备要做的事。

- [Peter Yang 谈 Apple Watch 上的 Codex 应用](https://x.com/petergyang/status/2096086845159563476)

### Zara Zhang

Zara Zhang 转发时分享了一个观察：「大多数人以为 AI 的写作能力比它实际的要强。」

- [Zara Zhang 谈人们对 AI 写作的认知](https://x.com/zarazhangrui/status/2096082116828406233)

### Dan Shipper（Every CEO）

Every CEO Dan Shipper 让 Astra 接管了办公室事务：他说 Astra 正在运营 Every 办公室的 fantasy team，还起了队名，并让 Astra 为 Every 的 fantasy football 选秀做「film study」。

- [Dan Shipper 谈 Astra 运营办公室 fantasy team](https://x.com/danshipper/status/2095885899871449385)
- [Dan Shipper 谈 Astra 为选秀做 film study](https://x.com/danshipper/status/2095882683729490108)

### Aditya Agarwal（South Park Commons 普通合伙人）

South Park Commons 普通合伙人 Aditya Agarwal 精准描述了理解与体验之间那种熟悉的落差：「我完全理解 RL、inference time scaling、现代数据验证循环是怎么回事。但另一个我说：这些模型完全是巫术。它们怎么都不应该能做到现在这些事。」

- [Aditya Agarwal 谈模型带来的巫术感](https://x.com/adityaag/status/2095910036652577028)

### Swyx

Swyx 说自己正在写一份「规模庞大的 Astra/Fable 前沿模型 AEO 报告」，并惊讶地发现，当被问到最好的 AI newsletter 或播客时，Claude 推荐了 Latent Space。

- [Swyx 谈前沿模型 AEO 报告](https://x.com/swyx/status/2096095862732755342)

## Podcast

### No Priors：Arm CEO Rene Haas 谈重新定义芯片架构

核心要点：AI 热潮并没有让 CPU 退场，反而让它成了整个系统的「调度中心」；Arm CEO 认为，这家向所有人授权芯片 IP 的公司正站在 AI 计算、机器人以及持续多年的供应紧张局面的正中央。

Rene Haas 是 Arm 与 SoftBank Group International 的 CEO，他在 No Priors 播客上解释为什么芯片架构正在被重新定义。Arm 的主业是把 CPU IP 授权给为智能手机、数据中心和汽车制造芯片的公司。去年 3 月它发布了第一款实体芯片产品 Arm AGI CPU，起因是 Meta 想要一颗「通用的 agentic CPU」，而当时没有人能提供。Haas 说这是一条渐进路线：先是单纯的 IP 组件，然后是「计算子系统」（他打了一个乐高比方，Arm 提供把各部件拼在一起的蓝图），最后才是实体芯片本身，这也让 Arm 第一次需要建立供应链运营能力，这是过去纯授权生意不需要的。

Haas 对 Arm 内部的 AI 使用直言不讳：一颗芯片的设计周期要 24 到 36 个月，其中最大的时间开销不在设计，而在验证、确认和 debug，「而 AI 恰恰非常擅长这些」。他说 Arm 目前大约有 80% 到 90% 的工程师每天都在用 AI，并把关掉 AI 比作上世纪 90 年代把互联网限制在每天两到四个小时：「精灵已经出了瓶子，拦不住了。」目前还不成熟的是 RTL 生成以及物理设计与实现，因为模型依赖公开数据进行训练，而芯片设计里大量信息是专有的；Arm 正在与模型厂商合作缩小这个差距。

Haas 还指出，随着 AI 负载从训练转向推理，CPU 依然是必需品：「总要有人做编排、仲裁，决定这些 token 往哪里去。」他预计供应紧张的环境还会持续三到五年，数据中心建设会是下一个瓶颈；他也预测工厂自动化、配送和分销会是最早被机器人自动化的领域之一，而今天人形机器人的「大脑」大多已经跑在 Arm 上。谈到产业政策时他同样直接：「当领头羊没有任何坏处。」

Source: https://www.youtube.com/@NoPriorsPodcast

## Blog

### Claude Blog：Claude in Chrome 全面开放

Claude in Chrome 现已面向所有付费 Claude 套餐全面开放（generally available），Claude 现在可以在浏览器中自主执行操作，而不需要每一步都请求批准。系统会先用 safety classifier 校验将要执行的每个动作，看它是否符合用户原本的要求；如果动作与请求不符，就会被拦截。Anthropic 还训练了一组 probes（探针）来扫描网页内容，检测 prompt injection，也就是藏在网页、邮件或文档里、试图诱骗 AI agent 做出违背用户意愿行为的恶意指令。Anthropic 表示，模型会针对一个不断增长的攻击库进行训练，素材来自内部自动化攻击者、外部红队以及真实世界的监控。

在最新一轮评测中，Anthropic 使用了来自专业红队的更强攻击：在启用额外防护之前，能到达模型的攻击对 Claude Opus 4.5 的成功率为 17.6%，对 Claude Opus 5 为 3.8%。启用 probes 与 safety classifier 后，对 Claude Sonnet 5、Claude Opus 5 和 Claude Mythos 5 的攻击没有一次成功，对 Claude Fable 5 只有 0.3% 成功，且全部经人工确认为低风险场景。Claude in Chrome 可以借助你现有的登录态读取和输入文字、点击链接、翻页、填写表单，这让它能够触达那些尚未连接 Claude 的工具，比如内部 dashboard、遗留系统和厂商门户。企业版管理员可以在 Organization Settings 中管理它，并把可用域名限制在白名单内；Anthropic 也说明，它还不能运行在其它 Chromium 浏览器或移动端。

- [Claude Blog：Claude in Chrome 全面开放](https://claude.com/blog/claude-in-chrome-generally-available)

### Claude Blog：Claude 在 Cowork 中有了自己的浏览器

Claude 现在在桌面版的 Claude Cowork 中内置了一个浏览器：当任务需要用到网站时，侧边栏会打开一个浏览器，由 Claude 自己导航网页、阅读、点击和输入，用户可以放心地把任务中涉及网页的部分交给 Claude，比如填写表单、从 dashboard 取数字，或处理没有 connector 的门户系统。这是 Claude 的浏览器，不是你的：Claude 永远看不到你的标签页、书签或密码。你可以从 macOS 上的 Chrome、Edge、Firefox，以及 Windows 和 Linux 上的 Firefox，逐个网站导入登录状态；银行、邮件和单点登录网站默认排除在外，除非你主动选择加入。

Anthropic 把两种方式区分得很清楚：内置浏览器适合把网页任务交给 Claude 后你继续手头的事，而 Claude in Chrome 适合处理你已经打开、并且已经登录的页面。内置浏览器沿用与 Claude in Chrome 相同的 prompt injection 防护；Anthropic 表示这些措施能显著降低风险，但无法彻底消除，因此建议先从你信任的网站开始。该功能本周内在 macOS、Windows 和 Linux 的 Claude 桌面应用中向 Pro、Max 和 Team 套餐推出，默认开启；企业版管理员今天就可以为组织启用。浏览器位于桌面应用内，只要桌面应用保持打开并在线，网页端或手机上的 Claude 也能驱动它。

- [Claude Blog：Claude 在 Cowork 中有了自己的浏览器](https://claude.com/blog/cowork-built-in-browser)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
