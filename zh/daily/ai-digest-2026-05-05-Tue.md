[English](../../en/daily/ai-digest-2026-05-05-Tue.md) | [中文](./ai-digest-2026-05-05-Tue.md) | [双语](../../bilingual/daily/ai-digest-2026-05-05-Tue.md)

---

# AI Builders Digest - 2026-05-05

## 导读

Agentic engineering 正在从新奇工作流变成一门专业工程纪律。Andrej Karpathy 的核心观点是：使用 agents 获得更高杠杆的同时，仍然要维持过去专业软件的质量标准，人类依然要负责 spec、架构、安全和品味。

企业 AI 正在变成实施市场，而不只是模型市场。Aaron Levie 认为，真正部署 agents 需要安全的数据访问、权限设计、日志、流程文档、evals 和工作流重构，这会给内部团队、服务商和垂直 AI 公司创造大量工作。

Builders 正在共同强调个人上下文的所有权。Garry Tan 关于 GBrain 的帖子和 Sam Altman 对 Agents SDK 的提醒，都指向同一个方向：当 agents 能安全地跨 repos、数据、MCP endpoints 和长期用户上下文工作时，价值会明显提升。

小型软件的成本还在下降。Zara Zhang 和 Amjad Masad 从不同角度说的是同一件事：一个人加一个 coding agent，现在就能尝试过去因为太怪、太小、太难过会而无法启动的软件想法。

Agent-native 工具正在变得更实用。Peter Steinberger 的 RepoBar 更新、Peter Yang 关于 Mac 常驻 agents 的技巧，以及 Hermes/OpenClaw 的对比讨论，都说明生态正在从 demo 走向日常操作。

## X / Twitter

### Swyx

Swyx 分享说节目现在可以在 YouTube 免费观看，并发布了一篇新的短篇小说。相比本期其他更偏 agent 工程的讨论，这是一个更轻量的更新。

来源: https://x.com/swyx/status/2051115027210346936

### Peter Yang

Roblox 产品负责人 Peter Yang 正在比较 Hermes 和 OpenClaw，并向同时用过两者的人征求真实差异。他还分享了一个实用的 Mac agent 设置：使用 Amphetamine，并调整 session defaults，让 MacBook 合盖后 agents 仍能继续运行。

来源: https://x.com/petergyang/status/2051129249348894754, https://x.com/petergyang/status/2050963126234034387

### Amjad Masad

Replit CEO Amjad Masad 强调了 Replit 上并行 agent 工作的规模："10 active, 198 draft, 700+ done." 他的帖子把 vibe coding 描述成一种能快速产生真实产出的工作方式，尤其是在大量 agent 任务并行执行时。

来源: https://x.com/amasad/status/2051167532523074015, https://x.com/amasad/status/2051007848440877242

### Aaron Levie

Box CEO Aaron Levie 认为，企业落地 agents 会创造出比人们想象更多的工作。从 chat 走向参与关键流程的 agents，企业需要安全连接旧系统数据、落实 scopes 和 entitlements、监控 agent 行为、整理流程文档、重构人机协作流程，并为目标流程建立 evals。他也提醒大家应该把 AI 当作 utility，而不是某种 being，因为拟人化类比很快会失效。

来源: https://x.com/levie/status/2051057677984469277, https://x.com/levie/status/2051009208393589096

### Garry Tan

Y Combinator CEO Garry Tan 把 Personal AI 描述为一种自由问题：拥有自己的 prompts、数据和上下文，个人才更有可能在不被掠夺性机构绑定的情况下做有意义的事。他把这个理念连接到 GBrain，后者支持多个 repos、多个 MCP endpoints、OAuth、Bearer Tokens，并能通过 OpenClaw 或 Hermes 获取一次性 admin login link。

来源: https://x.com/garrytan/status/2051110206466302136, https://x.com/garrytan/status/2051099735176659256, https://x.com/garrytan/status/2051089704658010321

### Zara Zhang

Zara Zhang 推荐了一个 human-agent interaction demo，称其值得所有关注人机协作的人观看。她随后提出一个更强的 builder 观点：AI 之前，小软件往往因为开发成本太高而无法成立；现在，一个人和一个 coding agent 就能直接把那些奇怪、小众、会被大厂评审会否掉的想法做出来。

来源: https://x.com/zarazhangrui/status/2051192270632993176, https://x.com/zarazhangrui/status/2051155065331941873

### Nikunj Kothari

FPV Ventures partner Nikunj Kothari 发了一条简短提醒：不要放弃梦想，persistence has alpha，并表达了对一位年轻 builder 的看好。

来源: https://x.com/nikunj/status/2051096096110502063

### Peter Steinberger

Peter Steinberger 发布了 RepoBar 0.4.0。这个小型 menubar app 让 GitHub 工作流更智能：持久化 SQLite 缓存、减少浪费的 API calls、显示 rate limits、更好的 Issues/PR 加载，以及 archive fallback 支持。他还提到 Discord 用户可以获取新的 OpenClaw beta。

来源: https://x.com/steipete/status/2051088325100831046, https://x.com/steipete/status/2051033065367970195

### Dan Shipper

Every CEO Dan Shipper 表示本周没有 Mythos，但预告接下来会有一些有意思的东西。

来源: https://x.com/danshipper/status/2050997402514161781

### Sam Altman

Sam Altman 说 Agents SDK 2.0 被低估了。他也发帖感谢 Greg Brockman 的技术能力和决心，表示很难想象 OpenAI 没有 Greg 还能成功。

来源: https://x.com/sama/status/2050998576671859003, https://x.com/sama/status/2050964040026050727, https://x.com/sama/status/2050964008480723059

## Podcast

### Training Data: Andrej Karpathy: From Vibe Coding to Agentic Engineering

核心 takeaway：Karpathy 认为 AI coding 已经从 "vibe coding" 进入 agentic engineering。机会不只是更快写代码，而是形成一套新工程纪律，用来协调这些强大但会犯错的 agents，同时不降低质量标准。

Karpathy 把 LLM 看作一种新计算机：software 1.0 是显式代码，software 2.0 是学习到的权重，software 3.0 则是通过 context 编程。他举的例子很具体。过去为了适配不同机器，你可能要写一个巨大的安装脚本；现在可以给 agent 一段紧凑的安装说明，让它自己检查环境、适配和调试。过去为了识别餐厅菜单并生成菜品图片，你可能要做完整 OCR 和图片生成 app；现在多模态模型可以直接把原始菜单图片转换成带菜品视觉信息的图片。

最有价值的区分是 vibe coding 和 agentic engineering。Vibe coding 抬高下限，让几乎所有人都能做软件。Agentic engineering 保住专业上限："You're still responsible for your software just as before, but can you go faster?" 人类角色转向 spec、架构、判断、安全和品味。Agents 可以记住 API 细节，但仍然可能犯类别错误，比如用 email 去匹配 Stripe credits 和 Google account，而不是用稳定的 user ID。

Karpathy 也提醒，模型能力是 jagged 的。LLM 在输出可验证、且实验室投入了数据或 RL environments 的领域会很强，但仍会在一些明显的现实推理上失败。给 founders 的启发是：找到那些能把验证做扎实的高价值领域，然后构建能让 agents 改进的环境和流程。

来源: https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

## Blog

今日 feed 中没有新的 blog posts。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
