[English](../../en/daily/ai-digest-2026-09-10-Thu.md) | [中文](./ai-digest-2026-09-10-Thu.md) | [双语](../../bilingual/daily/ai-digest-2026-09-10-Thu.md)

---

# AI Builders Digest

## 导读

**1. 编码 agent 会扩大软件需求，而不是简单的减法。** Box CEO Aaron Levie 认为，代码成本下降意味着世界会用 coding agent 做远超所有人想象的事：打造全新品类的工具、为过去负担不起软件的公司开发软件、用 agent 保护系统免受网络风险、自动化生命科学研究、在复杂工作流中处理海量数据、升级遗留系统与基础设施。工程师的杠杆会随之大幅提高，所以他预计需要更多工程师，而不是更少。Every CEO Dan Shipper 则对标准的自动化模型提出警告：它假设工作可以干净地拆解成任务，并假设自动化总是减少人类劳动，而在他的经验里，自动化经常创造出多倍的工作量。

**2. 真正的瓶颈是扩散，而不是能力。** 在第二个观点里，Levie 认为 AI 能力与 GDP 影响之间的落差，来自扩散远比人们想象得慢。即便把世界上最强的超级智能接入许多工作流，团队仍受制于「企业物理定律」：准备数据并接入管道、流程再造与变革管理；之后还要受制于现实世界的速度：等客户回复提案、等项目许可、等耗时数年才能到达消费者的药物研发管线。他指出，许多正向的日常 AI 用例短期内对 GDP 完全中性。他把 AI 扩散称为「下一个十年的主题」，并认为「在超级智能与真实工作流之间搭建桥梁」蕴含巨大机会。

**3. 智能正在变得更便宜、也更容易分发。** Vercel CEO Guillermo Rauch 表示，公司「仅在过去 6 个月里」就做了 8 次降价、费用减免与结构优化，外加 16 项模型折扣，而且还会继续。在分发侧，Anthropic 的 Claude Marketplace 新增了 CrowdStrike、Cursor、FactoryAI、GammaApp 和 Vercel，企业现在可以用已有的 Anthropic 支出承诺，购买更多由 Claude 驱动的产品与 agent。

**4. Agent 平台正在变成真正的产品界面。** Peter Steinberger 表示，OpenClaw 的 cloud sessions 现在跑得很快，支持 Remote Terminal、WebVNC 以及用于 computer use 的 CUA；他还说，两个月前推动的 dashboards 与 mini-apps 已经替代了团队围绕 OC 搭建的大量定制工具。Peter Yang 测试新模型思考能力的最爱方式，是让它对自己真正的盲点给出极其诚实的反馈，把整张提示词图片直接粘贴进 ChatGPT。

**5. 可靠性、安全与长期主义，仍然是人的工作。** OpenAI 的 Thibault Sottiaux 为一次问题道歉：部分 banked resets 在 ChatGPT Work 和 Codex 中没有完全生效，受影响的用户在获得额外一次额度之外，还会收到一封道歉邮件。Sam Altman 欢迎 Paul，感谢他为 AI 安全所做的一切，并表示很期待再次合作。South Park Commons 普通合伙人、Bevel Health 联合创始人 Aditya Agarwal 称 Waymo 是「以人为本的技术」最伟大的例子之一，并指出从 Google 2009 年的自动驾驶项目，到 Dmitri Dolgov 如今作为联合 CEO 领导 Waymo，是一条漫长的路。Zara Zhang 则用一句话收尾：idea 很容易，conviction 很难。

## X / Twitter

### Aaron Levie（Box CEO）

Box CEO Aaron Levie 认为，世界使用 coding agent 的范围会远超所有人的想象：打造全新品类的工具、为过去负担不起软件的公司开发软件、用 agent 保护系统免受网络风险、自动化生命科学研究、在复杂工作流中处理海量数据、升级遗留系统与基础设施。他的结论是：降低代码成本之后，我们会用它做多得多的事，软件变得更有用，工程师的杠杆大幅提高，「这意味着我们需要更多工程师，而不是更少」。

在另一条帖子里，他说调和 AI 能力与 GDP 影响的关键，是承认扩散远比人们想象得慢，而且会以短期内难以在 GDP 中衡量的方式出现。即便把世界上最强的超级智能接入许多工作流，团队仍受制于「企业物理定律」：准备数据并接入管道、流程再造与变革管理、就新工作流该如何运转达成一致。之后还要受制于现实世界的速度：等客户回复提案、等项目许可、等耗时数年才能到达消费者的药物研发管线。他指出，许多正向的日常 AI 用例短期内对 GDP 完全中性，称 AI 扩散是「下一个十年的主题」，并认为「在超级智能与真实工作流之间搭建桥梁」蕴含着巨大机会。

- [Aaron Levie 谈 coding agent 会创造更多工程需求](https://x.com/levie/status/2097920810543468551)
- [Aaron Levie 谈 AI 扩散与 GDP](https://x.com/levie/status/2097738533297689012)

### Dan Shipper（Every CEO）

Every CEO Dan Shipper 称一份近期报告「非常好，设计也很出色」，但指出两个会显著改变分析结论的假设：第一，假设工作可以拆解成任务；第二，把自动化创造的人类任务，总是建模成被自动化任务的一个比例，也就是说，假设自动化总是减少人类劳动，或者最多保持不变。他写道：「以我的经验，答案是否定的。自动化经常为人类创造出多倍的工作量。」他认为任务拆解是有用的视角，可以回答一份工作有多少可被自动化，但不是全貌，因为它无法解释新任务从何而来。

借用 Wittgenstein 和 Heidegger 的观点，他认为工作是一种「看待并关心世界的特定方式」：编辑会注意到护士注意不到的东西，反之亦然。你在意什么，决定了你会注意到什么、什么值得做、以及怎样才算做好。你可以把其中一部分明确写成任务清单，但当工具和环境变化时，同样的在意会生成全新的任务。他说，这个过程本身就是工作的一部分，而分析恰恰漏掉了它，尽管它从定义上就极难建模。

- [Dan Shipper 谈自动化与工作创造](https://x.com/danshipper/status/2097758891270697101)

### Guillermo Rauch（Vercel CEO）

Vercel CEO Guillermo Rauch 提到，公司在「过去 6 个月里」做了 8 次降价、费用减免与结构优化，外加 16 项模型折扣，并表示还会继续。

- [Guillermo Rauch 谈 Vercel 降价与模型折扣](https://x.com/rauchg/status/2097828203658383674)

### Claude（Anthropic 的 AI 助手）

Claude 公布了 Claude Marketplace 的新成员：CrowdStrike、Cursor、FactoryAI、GammaApp 和 Vercel。对企业的关键变化是：现在可以用已有的 Anthropic 支出承诺，购买更多由 Claude 驱动的产品与 agent。Anthropic 同时邀请 Claude Platform 上的开发者入驻，让它的客户更容易购买他们的产品。

- [Claude 谈 Claude Marketplace 的新伙伴](https://x.com/claudeai/status/2097718980437831935)
- [Claude 谈在 Claude Platform 上入驻](https://x.com/claudeai/status/2097718982920855834)

### Peter Steinberger（OpenClaw 与 OpenAI）

Peter Steinberger 表示，OpenClaw 的 cloud sessions 现在跑得很快，支持 Remote Terminal、WebVNC 以及用于 computer use 的 CUA。在另一条帖子里，他说两个月前推动的 dashboards 与 mini-apps 已经替代了团队围绕 OC 搭建的大量定制工具：「现在对我们团队服务器来说，一切都只是一个侧边栏入口、一个 dashboard 或一个插件。」

- [Peter Steinberger 谈 OpenClaw 的快速 cloud sessions](https://x.com/steipete/status/2097935551735423464)
- [Peter Steinberger 谈 dashboards 与 mini-apps 替代定制工具](https://x.com/steipete/status/2097880507753382201)

### Peter Yang

制作用于忙碌人群的实用 AI 教程与访谈的 Peter Yang 分享了他测试新模型思考能力的最爱方式：让它对自己真正的盲点给出极其诚实的反馈，把整张提示词图片粘贴进 ChatGPT。他觉得 Astra 的反馈尤其直白。

- [Peter Yang 谈用盲点提示词测试模型思考能力](https://x.com/petergyang/status/2097729250505966046)

### Thibault Sottiaux（OpenAI，负责 Codex 与 ChatGPT）

在 OpenAI 负责 Codex 与 ChatGPT 的 Thibault Sottiaux 说，今早出现了一点「小混乱」：部分 banked resets 在 ChatGPT Work 和 Codex 中没有完全生效。所有在受影响时间窗口内使用过的用户，都会再获得一次额度，并收到一封道歉邮件。

- [Thibault Sottiaux 谈 banked reset 问题](https://x.com/thsottiaux/status/2097752790177370535)

### Sam Altman（OpenAI）

Sam Altman 欢迎 Paul，表示很感激他正在做的事，以及他为 AI 安全所做的一切，并期待再次合作。

- [Sam Altman 欢迎 Paul](https://x.com/sama/status/2097776310940569783)

### Aditya Agarwal（South Park Commons 普通合伙人）

South Park Commons 普通合伙人、Bevel Health 联合创始人 Aditya Agarwal 称 Waymo 是「以人为本的技术」最伟大的例子之一，并指出它背后是一条漫长的路：Dmitri Dolgov 在 2009 年加入 Google 的自动驾驶项目，如今作为联合 CEO 领导 Waymo。Agarwal 提到，Dolgov 本月会到访 SPC。

- [Aditya Agarwal 谈 Waymo 与 Dmitri Dolgov](https://x.com/adityaag/status/2097736847879192917)

### Zara Zhang（Builder）

Builder Zara Zhang 用一句话总结：「Idea 很容易，conviction 很难。」

- [Zara Zhang 谈 idea 与 conviction](https://x.com/zarazhangrui/status/2097599758391255259)

## Podcast

经过验证的 podcast feed 中没有新的合格节目。

## Blog

经过验证的博客 feed 中没有新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
