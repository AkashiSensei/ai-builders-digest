[English](../../en/daily/ai-digest-2026-10-23-Fri.md) | [中文](./ai-digest-2026-10-23-Fri.md) | [双语](../../bilingual/daily/ai-digest-2026-10-23-Fri.md)

---

# AI Builders Digest

## 导读

agent stack 正在基础设施层加速整合。Anthropic 将 Agent Skills 捐赠给 Agentic AI Foundation，与 MCP 并列；Claude Platform 的新功能与 Google Cloud 上的正式可用版本同步推进；Vercel CEO Guillermo Rauch 则把 AI Gateway 描述成一个工具市场，只要在 AI SDK 中加入一个工具，就能接入天气、体育、股票和选举数据。

安全问题正在变成 autonomous systems 问题，而不只是合规检查。builder 们关注 AI 发现的 bug、过弱的凭据，以及无法抵御会检查每个缝隙的攻击者的遗留基础设施。共同药方是更快修复、更强的身份控制，以及让 agent 参与防守。

即使 AI 采用面在扩大，创业公司的算术正在收紧。Nikunj Kothari 认为 seed 到 Series A 的挤压处于历史高位，Matt Turck 看到 AI 各层玩家互相入侵，Aaron Levie 预计企业现代化会又慢又贵，Alex Albert 则看到 Claude Duet 这类产品在本地小企业中的大机会。

工作方式本身正在围绕 agent 重新校准。Swyx 希望用 agent 小时而不是人类天数来衡量任务，Madhu Guru 建议产品经理用行动走出不确定，Peter Yang 的帖子同时展示了 AI 支持的家庭项目，以及仍停留在传真和 CD-ROM 的护理系统。Garry Tan 指出 agent 需要更好的浏览器基础设施，Google Labs 则在推出面向消费者的故事产品。

研究前沿正在转向经验与具身智能。Aditya Agarwal 强调机器人正在转向自然语言指导，David Silver 和 Lasse Espeholt 则认为，通过强化学习在丰富模拟环境中训练出的 superlearner，可以发现人类数据之外的新知识。

## X / Twitter

### Swyx

Swyx 认为 agent 的工作估算需要重新校准：AGI 可以用 2 到 3 小时完成人类原本会排期 2 到 3 天的工作。Swyx 还说，团队不应责怪 AI 找出了 bug，而应尽快清掉它们，并指出在 pipeline 仍在运行时估算修复 ETA 很有价值。

来源：[帖子 1](https://x.com/swyx/status/2113283272130412684)、[帖子 2](https://x.com/swyx/status/2113359027682050352)、[帖子 3](https://x.com/swyx/status/2113509413537693703)

### Boris Cherny

Anthropic Claude 团队成员 Boris Cherny 表示，Agent Skills 最初是 Claude Code 中的一个实验，在获得行业广泛采用后，Anthropic 正将其与 MCP 并列捐赠给 Agentic AI Foundation。

来源：[帖子](https://x.com/bcherny/status/2113333859907747871)

### Thibault Sottiaux

OpenAI Codex 与 ChatGPT 团队成员 Thibault Sottiaux 用 Day 18 总结了 Decisions API 正式可用、OpenResponses 加入 Linux Foundation、性能改进，以及 Uber 全面投入 Codex 和 Work。

来源：[帖子](https://x.com/thsottiaux/status/2113492187770175603)

### Peter Yang

AI 教程创作者 Peter Yang 把离开产品岗位后的生活描述为送孩子上学、通过和 ChatGPT 对话做游戏，以及照顾年幼孩子和年迈父母的混合体。他把 AI 突破与仍依赖传真和 CD-ROM 的护理流程做了对比，并分享了一个六步账户安全 prompt，用来生成个性化安全报告。

来源：[帖子 1](https://x.com/petergyang/status/2113442789367435735)、[帖子 2](https://x.com/petergyang/status/2113420357726257335)、[帖子 3](https://x.com/petergyang/status/2113405131106742406)

### Madhu Guru

Meta AI 高级总监 Madhu Guru 建议在 AI 转型中感到停滞的产品经理用行动创造清晰：做点东西、自动化一个工作流、接触能激励自己的人，再用反馈校正方向。

来源：[帖子](https://x.com/realmadhuguru/status/2113437016818057641)

### Google Labs

Google Labs 向美国 18 岁以上用户开放 Dreambeans，把这个体验定位为没有连续打卡、没有无脑刷屏的个性化故事提示。新一期 Dreambeans Roulette 中，产品副总裁 Brian R. 谈到了行业忽视的机会和敢于下注的重要性。

来源：[帖子](https://x.com/GoogleLabs/status/2113340712523841696)

### Amjad Masad

Replit CEO Amjad Masad 介绍了一份关于如何保护应用免受近期一批漏洞影响的说明。

来源：[帖子](https://x.com/amasad/status/2113474587166171560)

### Guillermo Rauch

Vercel CEO Guillermo Rauch 认为，静态凭据应被可自毁的密钥取代，并呼吁像当年推广 TLS 那样推动 OIDC 的行业普及。他还强调 AI Gateway 是一个工具市场，只要在 AI SDK 中加入一个工具，就能接入天气、体育、股票和选举数据；同时批评了保护一个可能解密“几乎一切”的密钥的方式。

来源：[帖子 1](https://x.com/rauchg/status/2113462657059639505)、[帖子 2](https://x.com/rauchg/status/2113451268316205515)、[帖子 3](https://x.com/rauchg/status/2113399539227136084)

### Alex Albert

Anthropic 研究员 Alex Albert 预测，对本地小企业来说，Claude Duet 这类产品可能比当年的 Square 或 Google Maps 更大，并邀请小企业经营者分享 Claude 已经在如何帮助他们。

来源：[帖子 1](https://x.com/alexalbert__/status/2113386454907007444)、[帖子 2](https://x.com/alexalbert__/status/2113386456098197941)

### Aaron Levie

Box CEO Aaron Levie 表示，一旦 autonomous systems 能检查每个缝隙并尝试每一种攻击组合，security through obscurity 就彻底结束了。他预计企业要花多年升级遗留基础设施、清理数据 pipeline、改进访问控制，agent 会在防守和风险模拟两边提供帮助；这也是扩散速度会慢于部分人预期的原因之一。

来源：[帖子](https://x.com/levie/status/2113499900399034689)

### Garry Tan

Y Combinator 总裁兼 CEO Garry Tan 认为，Aside Browser 解决了让 agent 真正擅长使用网页的一个实际缺口。他还认为，AI 正在改变许多强大的 SaaS 业务。

来源：[帖子 1](https://x.com/garrytan/status/2113367007567794563)、[帖子 2](https://x.com/garrytan/status/2113353678895919196)

### Matt Turck

FirstMark Capital VC 兼 MAD Podcast 主持人 Matt Turck 认为，AI 竞争正在模糊类别边界：芯片厂商与推理服务商竞争，推理服务商与 neo-cloud 和 post-training 竞争，模型则与应用和芯片竞争。他还介绍了一场与 Mistral 的 Pierre Stock 关于 Le Chonk 和西方开放权重模型回归的对话，章节主题包括在 3,800 块 GPU 上训练、10 万亿参数模型和强化学习。

来源：[帖子 1](https://x.com/mattturck/status/2113311361639829673)、[帖子 2](https://x.com/mattturck/status/2113263905950568730)

### Nikunj Kothari

FPV Ventures 合伙人 Nikunj Kothari 认为，seed 到 Series A 的挤压正处于历史高位：做梦从未如此容易，扩张从未如此困难；他第一次见面后几个月内被收购的 seed 公司比例约为 10%。

来源：[帖子](https://x.com/nikunj/status/2113405034826477910)

### Aditya Agarwal

SPC 普通合伙人 Aditya Agarwal 认为，机器人正在经历 LLM 经历过的那次转变：从 fine-tuning 到 prompting，再到直接告诉模型你想要什么。他提到 π0.7 能通过自然语言指导学习新技能，也提到与 physical_int 联合创始人 Sergey Levine 的对话，并提醒顶尖大学的 PhD 不一定能造就优秀的机器人研究员。

来源：[帖子 1](https://x.com/adityaag/status/2113385971844518124)、[帖子 2](https://x.com/adityaag/status/2113385973304160663)、[帖子 3](https://x.com/adityaag/status/2113332746277789845)

### Claude

Claude 现已在 Google Cloud 上由 Anthropic 托管并正式可用，支持 Google Cloud IAM 凭据、账单和 commitment retirement。包括 Opus 5.5 fast mode、code execution 和 Skills API 在内的新功能与 beta，会在原生 Claude Platform 上线当天同步推出。从下周开始，Pro、Max 和 Team 计划在 web、桌面和移动端的会话将默认使用 auto mode，它会拦截风险操作，也可以切回手动模式。

来源：[帖子 1](https://x.com/claudeai/status/2113380122468454765)、[帖子 2](https://x.com/claudeai/status/2113380126561800305)、[帖子 3](https://x.com/claudeai/status/2113360845409583307)

## Podcast

### Training Data: David Silver and Lasse Espeholt of Ineffable Intelligence: A Superlearner for the Age of Experience

**核心观点：** 超级智能将来自持续从经验中学习的系统，而不是依赖越来越多人类数据的模型。

Ineffable Intelligence 联合创始人 David Silver 和 Lasse Espeholt 正在构建他们所说的 superlearner。Silver 2009 年的博士研究把强化学习应用于围棋，Espeholt 则在 DeepMind 和 Google Brain 构建了基础性的大规模 RL 系统。公司目前有 20 人，并有意识地保持很高的人均算力。

核心赌注是停止用人类数据手把手引导模型。Ineffable 在复杂模拟世界中给 agent 简单目标，再让涌现行为完成剩下的工作，这些环境被称为 crucible。Silver 以 AlphaZero 为例：AlphaGo 花了两年人类在环改进才击败 Lee Sedol，而 AlphaZero 在放弃人类数据后以快得多的时间超过了那项工作。目标不是复现人类已知知识，而是发现新的科学、数学、技术和语言。

模拟也是安全策略。Silver 认为，如果超级智能可以在模拟中构建，它会更快也更安全；现实世界的前沿部署应当控制节奏，同时加快模拟中的研究。他明确说明了设计选择：“我们给 agent 一些简单的目标，让它去发现会让我们惊讶和惊叹的东西。” Silver 预计一年内会出现证明路线可行的强证据，三年内实现真正的超级智能，coding agents 会加快这一进程。

来源：[Training Data 节目](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8)

## Blog

已校验的 feed 中没有新的合格博客内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
