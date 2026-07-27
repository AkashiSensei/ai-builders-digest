[English](../../en/daily/ai-digest-2026-07-28-Tue.md) | [中文](./ai-digest-2026-07-28-Tue.md) | [双语](../../bilingual/daily/ai-digest-2026-07-28-Tue.md)

---

# AI Builders Digest

## 导读
- AI 工作正在从聊天演示进入真正的委托式流程。Sam Altman 和 Thibault Sottiaux 都把 ChatGPT Work 描述成已经足够实用的手机端代理，而 Peter Yang 指出真正的门槛是用户是否愿意把 Gmail、Calendar、Workspace、Office 等系统接进来。
- 应用层仍然是企业 AI 的关键瓶颈。Aaron Levie 认为，模型能力必须和工作流设计、合规、数据接入、反馈循环、领域 UX 结合，才会真正改变业务流程。
- 基础设施已经成为 AI 叙事的核心。The MAD Podcast 采访 OpenAI 计算负责人 Sachin Katti，把算力、电力、冷却、自研芯片和供应链都呈现为产品战略，而不是后台管线。
- 开放权重和开放系统仍处在 builder 讨论中心。Guillermo Rauch 联署开放权重倡议，同时 Vercel 将 CLI 编译成微型原生二进制的实验说明，builder 仍然重视可部署、可检查的系统。
- AI 采用指标正在从使用量转向交付结果。Zara Zhang 主张衡量从用户需求到功能上线的时间，Madhu Guru 认为 AI 产品影响仍处于第一阶段，Dan Shipper 则准备写 Codex 诞生过程的深度报道。

## X / Twitter
OpenAI 的 Thibault Sottiaux 表示 OpenAI 当前的状态非常专注，并把 ChatGPT Work 描述成实用的日常代理：用户可以在手机上让它处理账单协商、退订垃圾邮件、寻找优惠，以及每天几十个小任务。
- https://x.com/thsottiaux/status/2081534792903147881
- https://x.com/thsottiaux/status/2081444811647963244

Peter Yang 发了几条轻松内容，但更关键的产品判断是：在 AI 圈层之外，最大阻力不是 token 不够，而是人们是否信任 ChatGPT 到愿意接入 Gmail、Calendar、Google Workspace、Microsoft Office 等个人或业务系统。
- https://x.com/petergyang/status/2081559330537734574
- https://x.com/petergyang/status/2081558653300355083
- https://x.com/petergyang/status/2081555286817648738

Meta AI 负责人 Madhu Guru 认为，AI 在产品中的真实影响仍处于第一阶段。有分发能力的公司正在用 AI 更快进入相邻工作流，但当第二阶段带来更多全新功能和产品形态时，生态层面的变化才会更明显。
- https://x.com/realmadhuguru/status/2081437850466451736

Replit CEO Amjad Masad 转发了前 Anthropic 员工的观点：攻击者更偏好使用被大量补贴的前沿实验室 AI 订阅，而不是开放模型。这为开放权重安全讨论提供了一个有用反例。
- https://x.com/amasad/status/2081576172656456076

Vercel CEO Guillermo Rauch 联署了 Open Weights and American AI Leadership letter，认为开源、数据、协议和研究的开放传统应自然延伸到开放权重。他还展示了用 scriptc 将 Vercel TypeScript CLI 编译为 1.28 MB 原生二进制文件，并保持很低启动开销。
- https://x.com/rauchg/status/2081571905157714199
- https://x.com/rauchg/status/2081546513885622760
- https://x.com/rauchg/status/2081517519303737559

Box CEO Aaron Levie 认为真正的机会在于 AI 进入现实工作流。更强的智能本身还不够，企业仍需要应用 AI 层来连接系统、数据、UX、反馈循环、人类决策、监管约束和行业上下文。
- https://x.com/levie/status/2081491621162668207

YC CEO Garry Tan 感谢 Sam Altman 为 YC Startup School 2026 收尾，并给创始人留下一句简短提醒：不要扮演创业者，要真诚。
- https://x.com/garrytan/status/2081602195292864532
- https://x.com/garrytan/status/2081586567211348432

Zara Zhang 主张用结果速度而不是 token 消耗衡量 AI 采用：从用户需求出现到功能上线需要多久。她还指出，通用聊天产品会制造空白输入框问题，这解释了为什么 AI 教程大量出现。
- https://x.com/zarazhangrui/status/2081627581997269192
- https://x.com/zarazhangrui/status/2081627109299310684
- https://x.com/zarazhangrui/status/2081304884469809295

FPV Ventures partner Nikunj Kothari 预测 proof of prompt 很快会取代 proof of work，折射出一个更大的变化：可见劳动的重要性下降，指令、上下文和意图质量的重要性上升。
- https://x.com/nikunj/status/2081383934928068619

Every CEO Dan Shipper 表示自己将用一周时间写一篇 Codex 诞生史，内容来自对 OpenAI 内部人士的深度采访，并让读者关注 Every 后续发布。
- https://x.com/danshipper/status/2081413625382653985
- https://x.com/danshipper/status/2081412243388788988

Sam Altman 称 ChatGPT Work 非常出色，甚至 "work" 这个词还低估了它。他举例说，自己在手机上让它为 9 位朋友规划长周末旅行、搭建协调网站、帮助达成共识、预订，并起草 Gmail 后续邮件。他还表示自己想要一种新型计算机。
- https://x.com/sama/status/2081513071135346814
- https://x.com/sama/status/2081396796174282900

## Podcast
**The MAD Podcast with Matt Turck - OpenAI's Compute Chief: We Can't Build Fast Enough | Sachin Katti**
Matt Turck 对 OpenAI 工业计算负责人 Sachin Katti 的采访表明，AI 热潮不仅是模型竞赛，也是一场基础设施竞赛。Katti 说，当前需求仍远超算力供给，OpenAI 能上线的任何计算资源都会被立刻消耗掉。节目把 AI 数据中心描述为把电子转化为 token 的巨型工厂：大规模超级计算机、高密度电力系统、芯片和设施层面的液冷，以及必须比传统物理世界更快推进的电网升级。Katti 还谈到现场发电、燃气轮机、核能作为高密度清洁能源的可能性、Jalapeno 自研芯片、与 Broadcom 的合作，以及 AI 帮助设计下一代 AI 所需系统和芯片的递归循环。对 builder 的启示很直接：基础设施决策已经是产品决策，算力战略已经成为 AI 公司执行力的核心。
- https://www.youtube.com/watch?v=wEZBlmvxx4o

## Blog
今天的 feed 中没有新的博客文章。
