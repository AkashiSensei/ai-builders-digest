[English](../../en/daily/ai-digest-2026-10-22-Thu.md) | [中文](./ai-digest-2026-10-22-Thu.md) | [双语](../../bilingual/daily/ai-digest-2026-10-22-Thu.md)

---

# AI Builders Digest

## 导读

Anthropic 的 Claude Duet 是今天最清晰的产品信号：这是一个面向美国 Pro 和 Max 用户、通过候补名单开放的早期研究预览，定位为始终在线的个人 agent，底层基于 Claude Opus 5.5。Anthropic 表示，它能继承用户 Claude 账户中的记忆、skills 和已连接应用；分类器会防止敏感信息外泄，重要决定仍由用户掌握。Every CEO Dan Shipper 在两周测试后认为它足够有价值，使自己在 ChatGPT 和 Claude 之间的使用比例约为 50/50；不过他也指出，Duet 目前还不能指挥电脑上的 Claude 会话，语音功能也只支持转写。

Every 的 frontier team 是对一个结构性问题给出的实际答案：个人无法同时完成当前工作，又持续评估每一个新模型和新工作流。这个团队把两类任务分开：pirates 快速尝试大量想法，architects 把其中有用的部分变成可维护的系统，然后只把经得起验证的经验带回产品和整个公司。重点不在实验数量，而在整合；把一百个 demo 丢进频道，并不会自动形成能力。

安全正在成为最具体的 agent 应用场景之一。Box CEO Aaron Levie 预计，企业会消耗多得多的 tokens 来扫描日志、代码、流量和数据，也需要更多人手来指挥 agents、审查发现并处理事件。Vercel CEO Guillermo Rauch 表示，Vercel 在 Node.js RCE 漏洞和 php2shell 的官方补丁发布前就部署了防火墙和 WAF 缓解措施；Peter Steinberger 则称，本周可能造成混乱的 PHP 漏洞是用 GPT-5.6 Sol 发现的。

模型访问方式正在针对 agent 工作负载重新打包。Rauch 表示，DeepSeek v4.1 Flash 已加入 Vercel Token Pass，并支持零数据保留；他的定位是，这款便宜模型可以负责执行由更大、更昂贵模型制定的计划，充当 subagent 的引擎。这一点很重要，因为上面的网络安全和 agent 工作流意味着更多推理：更多扫描、更多检查，以及更多并行 worker。

资本仍在流向 AI 相关软件。FirstMark Capital 的 VC Matt Turck 指出，Pigment 和 Legora 在同一周分别宣布 2.5 亿美元和 5.5 亿美元 E 轮融资；他把 Pigment 定位为面向 tokens、APIs 和 agents 时代的连续财务规划平台。与此同时，Google Labs 表示，Dreambeans 已在美国面向 18 岁及以上用户上线，未来会进入更多地区。

使用 AI 与用 AI 构建之间的边界也在变得模糊。SPC 普通合伙人、Bevel Health 联合创始人 Aditya Agarwal 描述，他的儿子看了大约三小时《星球大战》，随后花了约 20 小时制作受其启发的游戏，却只玩了一小会儿，因为真正吸引他的是制作过程。Agarwal 从中得到的启发是，AI 可能让更多人体验到程序员创造软件时的快乐，即使成品本身不是重点。

## X / Twitter

### Cat Wu，Anthropic 的 Claude Code 与 Cowork

Anthropic 正在邀请用户加入 Claude Duet 候补名单。Cat Wu 称，这是 Claude 主动替用户分担工作的重要一步；Duet 会注意到需要完成的工作，并能在用户开口前采取行动。

来源：[Claude Duet 发布](https://x.com/_catwu/status/2112988751576330487)

### Claude，Anthropic

Claude Duet 是在美国面向 Pro 和 Max 用户、通过候补名单开放的早期研究预览。Anthropic 表示，它基于 Claude Opus 5.5 构建，会继承用户 Claude 账户中的记忆、skills 和已连接应用，永远不会直接看到密码，并用新的分类器防止敏感信息被分享，重要决定仍由用户掌握。Anthropic 也提醒，Duet 仍可能误判事情是否紧急，并会根据早期用户的反馈继续调整。

来源：[Claude Duet 发布细节](https://x.com/claudeai/status/2112984669943968099) | [安全方案](https://x.com/claudeai/status/2112984667758510197) | [Opus 5.5 设计](https://x.com/claudeai/status/2112984666437546104)

### Dan Shipper，Every CEO

经过两周测试，Dan Shipper 称 Claude Duet 是他第一个愿意称为专业工具的个人 agent，并说自己的使用习惯已变为 ChatGPT 和 Claude 大致各占一半。他喜欢 Duet 拥有独立 app 和频道，但也指出，它目前无法指挥他电脑上的 Claude 会话，邮件草稿不如 dot，语音只支持转写。另外，他认为每家公司都需要一支 frontier team 来吸收模型变化，让其他员工专注于使用团队学到的成果。

来源：[Claude Duet 评测](https://x.com/danshipper/status/2112997559463506059) | [Frontier team](https://x.com/danshipper/status/2113010761786175970)

### Aaron Levie，Box CEO

Aaron Levie 预计，网络安全将成为企业最大的投资领域之一，因为 AI 带来了一支不知疲倦的劳动力，可以寻找漏洞、修补系统，也能攻击系统。即使安全工作变得更 agentic，企业仍需要更多人才来指挥 agents 处理关键任务、审查发现、修补系统并响应事件。他预测，这个循环消耗的 tokens 可能比现在想象的多约 100 倍，因为每一行日志、每一行代码和每一种流量模式都能以前所未有的规模被处理。

来源：[网络安全机会](https://x.com/levie/status/2113137032633757773) | [Agentic 安全新格局](https://x.com/levie/status/2112964214818283917)

### Guillermo Rauch，Vercel CEO

Vercel 在官方补丁发布前就为 Node.js RCE 漏洞部署了防火墙层面的防护，并表示所有部署都自动受到保护，同时持续监控并推出运行时升级。Rauch 还说，Vercel 为 php2shell 部署的 WAF 缓解措施已经阻止了针对 PHP 源的攻击，并提醒团队为更多漏洞保持随时修补和重新部署的能力。在模型方面，他表示 DeepSeek v4.1 Flash 已加入 Vercel Token Pass 并支持零数据保留，便宜到可以作为 subagents 的执行层，去执行更大模型制定的计划。

来源：[Node.js RCE 缓解措施](https://x.com/rauchg/status/2113050053724221732) | [Vercel Token Pass 中的 DeepSeek v4.1 Flash](https://x.com/rauchg/status/2113010010766913815) | [php2shell 响应](https://x.com/rauchg/status/2112989629536440400)

### Peter Steinberger，OpenClaw 与 OpenAI

Peter Steinberger 表示，本周可能造成混乱的 PHP 漏洞是用 GPT-5.6 Sol 发现的。这一说法把模型辅助的漏洞发现直接放进了正在展开的安全响应之中。

来源：[GPT-5.6 Sol 发现漏洞](https://x.com/steipete/status/2112913060709228764)

### Matt Turck，FirstMark Capital VC

Matt Turck 指出，Pigment 和 Legora 在同一周分别完成 2.5 亿美元和 5.5 亿美元的 E 轮融资。他把 Pigment 定位为面向 tokens、APIs 和 agents 时代的连续财务规划平台，并提到 FirstMark 从种子轮起就投资了这家公司。

来源：[E 轮融资动态](https://x.com/mattturck/status/2113026098669777365) | [Pigment](https://x.com/mattturck/status/2112927524321726921)

### Google Labs，Google 的 AI 工具与实验团队

Google Labs 继续推出 Dreambeans Roulette 系列第二部分，讨论 Dreambeans 故事如何被制作、如何做得更好，以及旨在让人离开手机的应用会是什么样。Dreambeans 已在美国面向 18 岁及以上用户上线，未来会进入更多地区。

来源：[Dreambeans Roulette 第二部分](https://x.com/GoogleLabs/status/2112968628861878648)

### Aditya Agarwal，SPC 普通合伙人、Bevel Health 联合创始人

Aditya Agarwal 描述，他的儿子看了大约三小时《星球大战》，随后花了约 20 小时制作受其启发的游戏，却只玩了一小会儿，因为真正吸引他的是制作过程。对 Agarwal 来说，这说明 AI 可能让更多人体验到程序员创造软件时的快乐，即使制作过程比成品本身更重要。

来源：[用 AI 构建](https://x.com/adityaag/status/2112923959176106056)

## Podcast

### AI & I by Every: How a Frontier Team Can Help Your Company Keep Up With AI

核心观点：一支专门的 frontier team 能让组织跟上快速变化的 AI，而不必要求每位员工同时承担两份工作。

Every 的 Dan Shipper 和负责企业 AI 落地的 Natalia 讲述了他们如何建立 frontier team。此前，人们总是在完成本职工作与追逐每个新模型之间来回摇摆。Dan 说得很直接：“The reason why you need a frontier team is it separates things out.” 一小群人负责做实验，把最强的成果变成内容或产品原型，只把经得起验证的结果推回公司。

这支团队有意混合 pirates 和 architects。Pirates 快速尝试大量想法，也接受过程中的混乱；architects 则判断哪些实验能经受真实用户的检验，并把它们变成其他人可以维护的系统。这样的分工很重要，因为生成实验很容易，吸收实验却很难；真正有价值的是判断哪些东西值得进入公司的运营模式。

几位成员展示了这套机制能走多远。Head of evals Mike Taylor 从真实工作中建立个人 benchmark，并用 Opus 把 Slack 消息和会议记录整理成一段带可审计引用的讲解视频。Frontier Wrangler Arielle 做了一个 dashboard，用来追踪不同 harness 中的 token 花费，并按工作类型分类；高级编辑 Jack Chang 则做了一个没有标签页、带有 agent pane 的浏览器，用来保护自己的注意力。

作者 Katy Parrott 在 Compound Writing 插件中用 audience.md 对照特定读者和英雄旅程来检验草稿；architect Jannik Jung 正在构建一个名为 Minga 的 orchestrator，它从目标和计划出发，而不是围绕单次编码会话工作。Kieran 对这套纪律的总结很适合收尾：“If you do a hundred experiments and don't let it land and don't integrate it, it doesn't work.” frontier team 不是脱离业务的秘密实验室，而是一层翻译机制，必须让一部分实验真正落地。

来源：[How a Frontier Team Can Help Your Company Keep Up With AI](https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL)

## Blog

本次验证的博客 feed 中没有新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
