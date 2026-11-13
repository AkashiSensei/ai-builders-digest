[English](../../en/daily/ai-digest-2026-11-13-Fri.md) | [中文](./ai-digest-2026-11-13-Fri.md) | [双语](../../bilingual/daily/ai-digest-2026-11-13-Fri.md)

---

# AI Builders Digest

## 导读

快模型的竞争已经从跑分转向企业实际工作。Google 发布 Gemini 4 Hydrogen，称它已进入 Gemini App，速度快、能力强，是一次大幅跃升；Box CEO Aaron Levie 则称，在 Box AI Complex Work Eval 的早期测试中，Hydrogen 比 Gemini 3.8 Flash 准确率高 5 个百分点，在典型任务上耗时不到一半，token 使用量还减少约 12%。这意味着买家真正要比较的不只是最强能力，还有每秒、每个 token 能换来多少可靠产出。

Claude Meetings 把助手从侧边聊天窗口带进会议现场。Claude 以可见参与者身份加入 Google Meet，可以回答口头或聊天中的问题，也可以开始写文档，团队成员能实时看到并纠正它的产出。会后，笔记、行动项、转录以及 Claude 创建的内容都会出现在会议页面。这里的产品判断是，共享上下文越完整，助手越能成为协作的一部分。

agent 正在从“生成软件”走向“替企业办事”。Replit CEO Amjad Masad 宣布，Replit Agent 现在可以为业务采购商品，包括购买广告来获取新客户。Vercel CEO Guillermo Rauch 则认为，agent 正在成为新的设计工程师，需要的是更底层的 UI SDK，而不是僵硬、绑定单一框架的高层抽象。

安全正在成为 agent 的执行界面。OpenAI 的 Thibault Sottiaux（Codex 与 ChatGPT）表示，OpenAI 公布了正在开发的网络安全工具，覆盖自动修补和自动红队测试。这说明相关 agent 工作正指向可执行的安全流程，从发现弱点到修复问题。

Isomorphic Labs 试图在药物进入患者之前，把药物发现搬到模拟环境中。总裁 Max Jaderberg 认为，临床失败常常来自毒性或脱靶效应，而这些问题只有进入人体后才会暴露；更好的预测模型可以让湿实验变成验证步骤，而不是主要的学习循环。目标不是取消实验，而是让每次实验成功的概率更高。

行业对创始人资本与交易能力的依赖，也是当天另一条线索。FirstMark Capital 的 VC Matt Turck 将 Jensen Huang 一事描述为 AI 生态失去“central banker”、最活跃的投资者和敢于收购的买家，并称这类激进动作只有创始人才能做出来；SPC General Partner Aditya Agarwal 则表示，没有 Jensen Huang，行业不会有今天，看到眼下发生的一切让人“痛彻心扉”。

## X / Twitter

**Google 副总裁 Josh Woodward**

Google 副总裁 Josh Woodward 发布 Gemini 4 Hydrogen，称它已进入 Gemini App，速度快、能力强，是一次“big jump”。他还展示了 Gemini 转向第一人称视角的应用，并宣布现已开启预购，可在部分 Warby Parker、Gentle Monster 和 Google 门店体验，12 月 10 日发货。([Hydrogen](https://x.com/joshwoodward/status/2120942262054232392)、[point of view](https://x.com/joshwoodward/status/2120990820631450061)、[pre-orders](https://x.com/joshwoodward/status/2120990821902397885))

**Claude，Anthropic 的 AI 助手**

Claude Meetings 首先支持 Google Meet，其他视频会议平台将陆续加入。Claude 以可见参与者身份加入会议，可以回答口头或聊天中的提问，也可以开始写文档，团队成员能实时看到并纠正它的产出；会后，笔记、行动项、转录以及 Claude 创建的内容都会出现在会议页面。([launch](https://x.com/claudeai/status/2120974000746582357)、[meeting page](https://x.com/claudeai/status/2120973999295643679)、[participant mode](https://x.com/claudeai/status/2120973996304830859))

**Box CEO Aaron Levie**

Box CEO Aaron Levie 表示，团队在 Box AI Complex Work Eval 中提前测试 Gemini 4 Hydrogen，发现它比 Gemini 3.8 Flash 准确率高 5 个百分点。在典型任务上，它还以不到一半的耗时完成工作，token 使用量减少约 12%；该模型将很快在 Box AI Studio 上线，客户可以用它构建自定义 agent。([source](https://x.com/levie/status/2120947988143198302))

**Vercel CEO Guillermo Rauch**

Vercel CEO Guillermo Rauch 认为，agent 时代会改变框架和组件库的意义：应该下沉到更低层的能力，再让 agent 组装界面。他把 UI SDK 称为 agent 的“x86 指令集”，并称僵硬、绑定单一框架的高层抽象是无限创作机器的“kryptonite”；打包好的行为可以保留无障碍、性能、一致性，并节省 token、错误和人力。([source](https://x.com/rauchg/status/2120966768483262648))

**Replit CEO Amjad Masad**

Replit CEO Amjad Masad 宣布，Replit Agent 现在可以替企业采购商品，包括购买广告来获取新客户。这使 agent 从写软件进一步走向执行日常运营采购。([source](https://x.com/amasad/status/2121018020520931712))

**OpenAI 的 Thibault Sottiaux（Codex 与 ChatGPT）**

OpenAI 的 Thibault Sottiaux 表示，OpenAI 公布了正在开发的网络安全工具，覆盖自动修补和自动红队测试，并提供了发布会的录制链接。([source](https://x.com/thsottiaux/status/2121036562058400200))

**FirstMark Capital 的 VC Matt Turck**

FirstMark Capital 的 VC Matt Turck 将 Jensen Huang 一事描述为 AI 生态失去“central banker”、最活跃的投资者和敢于收购的买家，并称这类激进动作只有创始人才能做出来。([source](https://x.com/mattturck/status/2120951444526264388))

**SPC General Partner Aditya Agarwal**

SPC General Partner Aditya Agarwal 表示，没有 Jensen Huang，行业不会有今天；看到眼下发生的一切让人“痛彻心扉”。([source](https://x.com/adityaag/status/2120924059709956201))

## Podcast

### No Priors: Powering AI-Driven Drug Discovery with President of Isomorphic Labs Max Jaderberg

**核心结论：** 解决药物发现难题的最佳方式，是在分子进入患者体内之前，就学会判断它会在哪里失败。

Max Jaderberg 是 Isomorphic Labs 的总裁，也是创始团队成员。Isomorphic Labs 由 Alphabet 支持，公开目标是攻克所有疾病。他的经历从计算机视觉、DeepMind 的游戏 AI 研究，一路延伸到 AlphaFold 的结果。正是这些结果让创始团队第一次看到，深度学习能够在生物学中实现有意义的泛化。问题的分量很重：药物获批数量大致停滞，而知识、药物模态、研发成本和周期都在上升。Isomorphic 的答案，是尽可能把药物化学和疾病生物学搬进预测模型，让实验用于验证假设，而不是成为唯一的学习方式。

核心判断是，传统药物发现过度依赖经验式试错。Jaderberg 指出，毒性、打错靶点，或者生物学反应与预期不同，往往要等到人体试验才暴露。更准确地模拟蛋白质、细胞和化合物行为，可以压缩这种不确定性，提高每一次真实实验的成功率。

Jaderberg 说：“A rat isn't actually a human. It's not actually very predictive.” 他估计，动物研究对人类临床毒性的预测能力约为 30%，因此 Isomorphic 希望把体外测量、类器官、器官芯片和 AI 模型结合起来，建立更贴近人体的终点指标。公司也主动生成数据，而不是只依赖过去药物项目被动积累、可能存在偏差的数据仓库。

商业模式同样经过设计。Isomorphic 把药物设计引擎留在内部，不出售模型访问权，也不按 token 售卖，而是同时用于自有项目和与药企、生物科技公司的合作。模型被设计为跨疾病、跨靶点、跨模态通用；内部项目聚焦肿瘤、免疫和炎症。更好的分子工程能力，还可能解锁同时调控多个靶点的联合用药，而这类策略目前受制于肝脏毒性和药物相互作用风险。

Jaderberg 没有给出临床试验的确定日期，只说这是困难的 frontier science，公司正在建设临床团队。他给出的五年检验标准很直接：对疾病生物学的预测理解，以及设计精准、低毒分子的能力，都应该出现阶跃式提升。([source](https://www.youtube.com/@NoPriorsPodcast))

## Blog

已验证的博客 feed 中没有新的符合条件的条目。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
