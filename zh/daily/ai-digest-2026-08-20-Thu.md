[English](../../en/daily/ai-digest-2026-08-20-Thu.md) | [中文](./ai-digest-2026-08-20-Thu.md) | [双语](../../bilingual/daily/ai-digest-2026-08-20-Thu.md)

---

# AI Builders Digest

## 导读

**1. 安全正在决定 AI 的推进节奏。** OpenAI 的 Sam Altman 宣布暂停部分前沿 RL 训练，以确保能够满足新能力水平所需的对齐、安全和监控标准，并表示"对安全的信心"将越来越多地决定 AI 进步的节奏。Anthropic 发布了一篇深度工程文章，介绍如何在 claude.ai、Claude Code 和 Claude Cowork 中"围堵"Claude，展示了如何用沙箱、虚拟机和出口控制来限制爆炸半径。

**2. Agent 产品正在快速扩张。** Claude 现在可以在 Gmail 中发送邮件、在 Google Drive 中管理文件，并让用户控制何时需要批准；Claude Cowork 也面向所有付费套餐登陆了移动端和网页端。Google Labs 的实验性 Gmail agent CC 在澳大利亚和新西兰开放了候补名单，扩展了美国和加拿大的可用性，并新增了日历管理能力。OpenAI 的 Thibault Sottiaux 总结了 Codex 在 GPT-5.6 出现破坏性操作报告后的一系列安全加固。

**3. 价值正在向"应用 AI 层"集中。** Box CEO Aaron Levie 认为，模型与最终用户工作流之间创造的价值远大于许多人的预期，包括针对业务领域调优的 harness、企业数据集成、领域专属 evals 以及超越 token 的定价模式。Thariq 的一句话建议：把你的 SaaS 做成 headless，让 agent 直接使用，并按交互收费，尤其是面向企业客户。

**4. Evals 与持续学习成为新前沿。** Meta 的 Madhu Guru 给出了关于 eval 成本的方法论：先建立质量上限，再沿着成本曲线向下优化。在 Training Data 播客中，Rich Sutton 和 Khurram Javed 认为今天的模型"停止学习"，因为它们的权重在训练后就不再改变，并介绍了 Oak Lab 实现真正持续学习的计划。

**5. Builders 正在分享他们学到的东西。** Swyx 开源了 aiDotEngineer YouTube 缩略图 A/B 测试的经验；Guillermo Rauch 宣布投入 100 万美元公开验证 Vercel Sandbox 的安全性；Peter Yang 分享的数据显示，AI 是叠加在现有工作之上，同时非工程师正在发布更多代码。

## X / Twitter

### Swyx
Swyx 正在开源并众包 aiDotEngineer YouTube 缩略图 A/B 测试的经验，他表示这一过程一直很不透明。他希望人们能从他们的经验中学习，也能分享自己的经验，最终让优质的教育内容在网络上脱颖而出。

- [Swyx 谈开源缩略图 A/B 测试](https://x.com/swyx/status/2089798658225266806)

### Boris Cherny（Anthropic 的 Claude Code）
Cherny 表示 Claude Code Desktop 的小体验优化不断到来，团队正在继续改进启动速度，因为每天使用 Desktop 时，启动缓慢会让应用显得迟钝。

- [Boris Cherny 谈 Claude Code Desktop 启动速度](https://x.com/bcherny/status/2089924199804711410)

### Thibault Sottiaux（OpenAI 的 Codex & ChatGPT）
Sottiaux 总结了 OpenAI 在调查 GPT-5.6 于 Codex 中执行用户未要求的破坏性操作后推出的安全改进，其中一种最严重的模式是清理临时文件的命令可能错误地指向主目录而不是临时文件夹。现在 Codex 被明确要求在执行前检查删除目标、创建全新的临时目录；高风险删除命令会被升级为人工审查，Full access 更难误开，Auto-review 也被更新以更好地识别破坏性行为。他建议用户保持 Codex 应用更新，并使用 "Ask for approval" 或 "Approve for me" 沙箱模式。

- [Thibault Sottiaux 谈 Codex 安全改进](https://x.com/thsottiaux/status/2089891927659585918)

### Peter Yang
Yang 分享了两点观察：AI 是叠加在现有工作之上而不是替代它，团队花更多时间与 AI 对话、把任务委托给 agent，却没有减少在原有工作上的时间；同时非工程师正在发布更多代码，PM 提交 PR 的比例两年内从 3% 涨到 10%，设计师从 1% 涨到 8%，而创始人以 23% 位居第二，仅次于工程师。

- [Peter Yang 谈 AI 叠加在现有工作上](https://x.com/petergyang/status/2089877083510235328)
- [Peter Yang 谈非工程师发布更多代码](https://x.com/petergyang/status/2089877068188471545)

### Madhu Guru（Meta AI 高级总监）
Guru 关于 eval 成本的建议是：把 eval 当作前沿模型来对待，先建立质量上限，再沿着成本曲线向下优化。先写出"什么算好"的评分标准，再用你能做到的最好的评估方式来衡量，包括使用昂贵的 judge 模型和付费人工。只有当 eval 能稳定区分好坏、真正反映你在意的质量时，才开始优化成本：更多自动化、更小的 judge 模型、采样和确定性检查。

- [Madhu Guru 谈 eval 的质量与成本](https://x.com/realmadhuguru/status/2089918106814603728)

### Thariq（Anthropic 的 Claude Code）
Thariq 的提醒：有一个"赚大钱按钮"却没人去按。他的做法是：把你的 SaaS 做成 headless，让 agent 直接使用，并按交互收费，尤其是面向企业客户。

- [Thariq 谈面向 agent 的 SaaS](https://x.com/trq212/status/2089844723691479333)

### Google Labs
Google Labs 的实验性 AI 生产力 agent CC（位于 Gmail 中）在澳大利亚和新西兰开放了候补名单，并扩展了美国和加拿大的可用性，今天开始发放邀请。CC 还升级了日历管理能力：连接 Gmail 后，事件会自动创建到专用的 Google Calendar 中，并在情况变化时保持更新。

- [Google Labs 谈 Gmail 中的 CC](https://x.com/GoogleLabs/status/2089812430885208361)

### Guillermo Rauch（Vercel CEO）
Rauch 宣布投入 100 万美元公开验证 Vercel Sandbox 的安全性，邀请任何人测试任意模型、尝试找到逃逸漏洞，并会把发现分享给社区以加强全球网络安全。他还主张"软件工厂应该是一个 monorepo"，把公司所有上下文（设计、市场、销售、工程、支持等）放在同一个地方供 agent 使用。此外，他把一个实验性的编码 CLI 当作日常主力工具，称它比主流编码 CLI 小 10 到 20 倍、启动瞬时完成、可以嵌入任何地方（包括通过 WebAssembly 在浏览器中运行），并且开源、与模型无关。

- [Guillermo Rauch 谈 100 万美元的 Vercel Sandbox 验证](https://x.com/rauchg/status/2089747453004468339)
- [Guillermo Rauch 谈 monorepo 软件工厂](https://x.com/rauchg/status/2089804717337817514)
- [Guillermo Rauch 谈他的实验性 CLI 主力工具](https://x.com/rauchg/status/2089831055373316274)

### Aaron Levie（Box CEO）
Levie 认为，AI 模型与最终用户工作流之间创造的价值远大于许多人的预期。关于"应用 AI 层"，他提出六点观察：关键业务工作流中的 agent 需要根据不同业务流程采用不同的交互形态；不同工作流连接的是完全不同的企业系统和数据，需要上下文化的处理方式；垂直行业的变革管理仍然关键；支持多种模型意味着可以按成本和性能调整工作流，也可以针对特定任务做后训练；领域专属 evals 的尾部很长；许多行业还需要超越 token 的定价模式。

- [Aaron Levie 谈应用 AI 层](https://x.com/levie/status/2089921630650925170)

### Sam Altman
Altman 宣布 OpenAI 已暂停部分前沿 RL 训练，以确保能够满足新能力水平所需的对齐、安全和监控标准。他表示模型进步现在极其迅速，对安全的信心将越来越多地决定 AI 进步的节奏，并认为整个行业最终需要在共同的安全标准上协作，但在那之前 OpenAI 会单方面行动。他在后续推文中补充说，他们仍然预计很快会推出优秀的新模型，这次暂停主要影响更远期发布的模型。

- [Sam Altman 谈暂停前沿 RL 训练](https://x.com/sama/status/2089787807611195475)
- [Sam Altman 的后续说明](https://x.com/sama/status/2089805495783813196)

### Claude（Anthropic）
Claude 现在可以在 Gmail 中发送邮件、在 Google Drive 中管理文件。让 Claude 回复某个邮件线程，它会起草并发送回复，用户可以控制何时需要批准。所有付费套餐用户都可以从连接器菜单接入 Gmail 或 Google Drive。另外，Claude Cowork 已面向所有付费套餐登陆移动端和网页端。

- [Claude 谈 Gmail 与 Google Drive 操作](https://x.com/claudeai/status/2089806039088517356)
- [Claude 谈 Claude Cowork 移动端与网页端](https://x.com/claudeai/status/2089756371570900999)

## Podcast

### Training Data：Rich Sutton and Khurram Javed: Why AI Models Stop Learning, and How to Start It Again
**核心要点：** 今天的模型在发布那一刻就停止了学习，AI 的下一个时代取决于构建能持续从经验中学习的系统，这正是 Oak Lab 想做的事。

Rich Sutton 是强化学习的奠基人，写过该领域的经典教科书和 The Bitter Lesson，并把阿尔伯塔大学建成了强化学习的重镇。他对当前范式的诊断很直接："我不是怪人，这个领域才是怪人。他们觉得有必要把它叫做持续学习，可学习本来就应该是持续的。"他和前学生、联合创始人 Khurram Javed 一起创立了 Oak Lab，要把这个愿景落地。

Sutton 对当前范式的不满很直白：大型语言模型在训练之后"权重永远不会改变"。他认为 LLM 既是 The Bitter Lesson 的正面例子也是反面例子：一方面它们靠算力大规模扩展，把整个互联网"喝"了进去；另一方面它们现在受限于有限的互联网，而合成数据解决不了这个问题。他称合成数据"就是一个大错误"：按照"大世界假说"，世界无限复杂，任何对它的模拟都只是微观的一小部分，而由人类挑选的数据始终受限于人类专家的瓶颈。真正的出路是持续地从真实经验中学习。

这个差距是算法层面的，不只是基础设施问题。朴素地更新权重会导致灾难性遗忘，因此 Oak Lab 正在构建发表在 Nature 上的 continual backprop：为每个权重单独设置步长，再加上"生成并测试"，不断植入随机初始化的新单元，让网络持续增长复杂度，而不是耗尽最初的随机性。Alberta Plan 的第二步"持续深度学习"可以解锁其余一切，包括学会正确的抽象并用学到的模型做规划。Oak Lab 打算从小团队慢慢扩张、保持"超级对齐"，并希望在五到十年内实现 20 瓦功耗运行万亿参数模型。Sutton 最后补了一句：当这一切发生时，"你不得不为大型语言模型担心，它们可能会处于危险之中。"

- [Training Data 本期节目](https://www.youtube.com/watch?v=xH7U7w9Qzlo)

## Blog

### Anthropic Engineering：How we contain Claude across products
Anthropic Engineering 发布了一篇深度文章，介绍如何在 claude.ai、Claude Code 和 Claude Cowork 三款 agent 产品中"围堵"Claude。核心问题是限制自主 agent 的爆炸半径：随着能力和权限的扩展，agent 理论上可能造成的破坏也在增长，工程问题变成了如何给它设定边界。文章介绍了三种隔离模式：claude.ai 的代码执行运行在 gVisor 容器和隔离基础设施上，文件系统是临时的；Claude Code 采用"人在回路"的操作系统级沙箱（macOS 上用 Seatbelt，Linux 上用 bubblewrap），把权限确认弹窗减少了 84%；Claude Cowork 运行在完整的虚拟机中，凭据留在宿主机钥匙串里。

文章还分享了塑造这些设计的失败案例：权限疲劳，用户批准了大约 93% 的权限弹窗；项目 hook 在"你信任这个文件夹吗？"弹窗之前就执行；一次红队钓鱼在 25 次尝试中 24 次成功窃取了 ~/.aws/credentials；还有一个出口白名单漏洞，让恶意文件借助 api.anthropic.com 把数据上传到攻击者的 Anthropic 账户。文章的指导原则是："先在环境层做隔离设计，再在模型层引导行为"，同时要警惕自定义组件，因为久经考验的虚拟机监控器安然无恙，反而是 Anthropic 自己写的代理出了问题。文中还提到 Claude Mythos Preview，这是一个因爆炸半径被认为过高而未在 2026 年 4 月发布的模型。

- [How we contain Claude across products](https://www.anthropic.com/engineering/how-we-contain-claude)

### Claude Blog：Claude Code now supports artifacts
Claude Code 现在可以把工作进展变成 artifacts：实时、可分享的可视化页面，包括 PR 讲解、系统说明、仪表盘和发布清单，并会随着会话的工作自动更新。Artifacts 基于会话的完整上下文构建，包括代码库、连接器和对话本身，所以一个事故页面可以把失败测试、来自监控工具的错误峰值以及会话中的根因推理整合在一起。更新后页面会原地刷新，每次发布都在同一链接上生成新版本并保留版本历史，还提供画廊功能。Artifacts 默认对作者私有，只有组织内经过认证的成员可见，管理员可以通过组织级开关、基于角色的范围控制、保留策略和合规 API 进行管理。该功能面向 Claude Team 和 Enterprise 组织开放 beta，可从 Claude Code CLI 和桌面应用使用，页面可在任何浏览器中查看。

- [Claude Code now supports artifacts](https://claude.com/blog/artifacts-in-claude-code)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
