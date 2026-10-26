[English](../../en/daily/ai-digest-2026-10-26-Mon.md) | [中文](./ai-digest-2026-10-26-Mon.md) | [双语](../../bilingual/daily/ai-digest-2026-10-26-Mon.md)

---

# AI Builders Digest

## 导读

安全正在变成 AI 系统问题，而不只是软件预算里的一个新条目。Aaron Levie 认为，数据碎片化、权限过宽和基础设施分散，让企业很难看清自身风险；Greg Brockman 则判断，防守方只有一个有限的窗口，可以赶在广泛可用的攻击能力追上来之前利用前沿模型。

同样的能力跃迁也在推动科学前进。Brockman 说，最近的数学成果表明 AI 已经能够产生新知识，尽管它还没有开始提出全新的理论。更有影响的落点可能是生物学：药物研发既关系到巨大的人类福祉，又存在与数学完全不同的数据瓶颈。

产品竞争越来越取决于上下文和默认体验，而不只是功能数量。Brockman 描述了按需出现、不用时隐去的界面；Thibault Sottiaux 提到 ChatGPT 的一个小型个性化选项；Nan Yu 则提醒，糟糕的 app 默认体验会在问题进入研究数据之前就损害信任。

Builder 们也在把模型变成可重复的工作流，而不是一次性的演示。Peter Yang 分享了一套借助 Claude 在 HyperFrames Studio 中复刻短视频视觉风格的方法：保留参考片段的结构，同时调整字体和颜色等细节。

持续发布仍然是一种长期优势。Zara Zhang 认为，建立每天发布视频的系统，比把一切押在一次昂贵的发布上更有价值，因为稳定输出会不断累积注意力，而单次爆发做不到这一点。

投资叙事也在转向。Matt Turck 以讽刺口吻看待一种重构：2021 年在元宇宙、游戏和加密挖矿上的押注，如今被描述成“mission-critical AI infrastructure”。

## X / Twitter

### Box CEO Aaron Levie

Levie 认为，AI 安全要从并不耀眼的现代化工作做起：数据碎片化会让风险难以评估，权限经常给得过宽，一些系统仍在依赖 security through obscurity。等数据和基础设施整理到位后，能够长时间运行的 agent 和 computer use 才能分散调用安全工具、测试不同攻击变体、读取日志并评估企业风险。他看好身份、防火墙、网络、代码扫描和数据保护等各层的机会，同时强调企业必须先打好基础。[来源](https://x.com/levie/status/2114391265655816315)

### Thibault Sottiaux, Codex & ChatGPT at OpenAI

Thibault Sottiaux 提醒，ChatGPT 网页版的外观可以自定义。他把这个选项描述为让工作界面更舒缓的一种小改动。[来源](https://x.com/thsottiaux/status/2114595002210783279)

### Peter Yang, Practical AI Tutorials and Interviews

Peter Yang 分享了一套用 Claude 复制短视频视觉风格的工作流。在 HyperFrames Studio 中，用户可以上传或选择参考片段，再通过 prompt 指定更换字体或颜色，同时保留原有的结构；帖子里还链接了更完整的 AI 视频剪辑教程。[来源](https://x.com/petergyang/status/2114507378532229214)

### Nan Yu, Product at OpenAI Codex

Nan Yu 质疑，在 iPhone Duo 支持分屏模式的情况下，为什么未优化的 app 仍会默认呈现糟糕的体验。他还指出，当质量问题出现在数据或用户研究中时已经太晚，声誉损失早已发生。[来源](https://x.com/thenanyu/status/2114433404557279435) [来源](https://x.com/thenanyu/status/2114427877240488442)

### FirstMark Capital VC Matt Turck

Matt Turck 以讽刺口吻看待一种重构叙事的做法：2021 年在元宇宙、游戏和加密挖矿上的押注，如今被包装成“mission-critical AI infrastructure”。他在帖子里给这句话加上了引号。[来源](https://x.com/mattturck/status/2114507945585328606)

### Zara Zhang

Zara Zhang 认为，大多数人高估了一次大型发布的重要性，却低估了每天在时间线上持续出现的力量。她建议建立每天制作一条视频的系统，而不是把数万美元花在一条发布视频上。[来源](https://x.com/zarazhangrui/status/2114255477907570865)

## Podcast

### The Changing Physics of Cybersecurity and Drug Development with OpenAI President Greg Brockman

**核心观点：** AI 近期最重要的机会，未必是再增加一个聊天界面，而是让人类在药物研发和网络安全等复杂系统中获得更大的杠杆。

OpenAI 联合创始人兼总裁 Greg Brockman 认为，最近的数学成果标志着一个真实门槛：AI 已经证明自己能够产生新知识，尽管它还没有开始创造全新的理论。关键变化不只是机器单独给出答案，而是人借助这些工具解决过去无法企及的问题。

他看好的生物学路径建立在一个简单的不对称上：数学和理论物理有丰富的数据，生物学则受数据瓶颈限制。如果模型能用更少的数据工作，药物研发就是最清晰的高影响应用。他不仅期待分子设计提速，也期待监管申报这类繁琐环节被压缩。Brockman 直言人类“incredibly bad at biology”，并认为神经网络没有理由在理解生物学上天然弱于自然语言。

在安全上，Brockman 看到一个“defender's window”：前沿模型现在能帮助防守方发现并修复漏洞，而广泛可用的能力还在持续抬升。他说 OpenAI 已投入 10 亿美元帮助一线防守者，内部还让约 25 名生产工程师暂停项目，用当时最强的模型扫描 OpenAI 的基础设施，修复发现的问题，并在新模型发布后重复这一过程。他更大的判断是经济学层面的：当软件变便宜，可靠性和安全性会成为溢价，因此“security spend should actually vastly outstrip software spend”。

这些判断背后是一套强调人类能动性的产品哲学。Brockman 认为最好的界面是没有界面，AI 可以通过 Slack、iMessage 或任何用户已经在用的入口触达，然后在视觉布局确实有帮助时生成定制界面。他检验技术的标准不是模型能否给出漂亮结果，而是人是否仍然掌控方向，并最终得到自己真正想要的东西。[来源](https://www.youtube.com/@NoPriorsPodcast)

## Blog

本次已验证的 feed 中没有新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
