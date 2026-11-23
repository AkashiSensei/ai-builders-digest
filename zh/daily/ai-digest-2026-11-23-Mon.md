[English](../../en/daily/ai-digest-2026-11-23-Mon.md) | [中文](./ai-digest-2026-11-23-Mon.md) | [双语](../../bilingual/daily/ai-digest-2026-11-23-Mon.md)

---

# AI Builders Digest

## 导读

今天最清晰的政策主线，是推动 AI 安全和研发节奏变成跨实验室可衡量的规则。Sam Altman 表示，各实验室已在 White House Accords 下同意建立提升系统安全的标准和最佳实践，随后提出前沿模型开发者应共同制定评估规范、红队测试和透明度标准，并在模型首次使用前完成。他还提出，以 perplexity 和其他指标为基础设定共同上限，直到对 AI 行为的监测达到某个具体里程碑，例如出现 chain-of-thought monitor 的继任者（[推文](https://x.com/sama/status/2124558713646428663)）（[推文](https://x.com/sama/status/2124551883130114403)）。Swyx 则提到 OpenAI 关于把 perplexity 作为通用 benchmark 的相关论证，同时提醒，头条指标可能只在 frontier math 层面转化为真实进展（[推文](https://x.com/swyx/status/2124583459356373052)）（[推文](https://x.com/swyx/status/2124590240539259381)）。

agent 时代的软件设计正在分成两个问题：agent 作为客户会如何行动，以及 agent 团队如何协作。Peter Yang 分享了 Microsoft Copilot EVP Clamanna 的提醒：“Agents are very harsh customers.” Clamanna 认为，agent 会追求最佳性能、价格和可靠性，它们的偏好并不总与人类相同，例如人类搜索时需要十条链接和小段摘要，而 agent 不在乎，可以一次返回上千条结果（[推文](https://x.com/petergyang/status/2124669298191090033)）。Aaron Levie 认为，长周期 agent 和并行 agent swarm 会迫使 harness 与 orchestration 层围绕知识共享、任务跟踪、人类协作和受控资源访问继续演化（[推文](https://x.com/levie/status/2124658150771188157)）。

安全是当天对 agent 乐观情绪最强的制衡。Amjad Masad 称桌面 AI app 通常是“a security and privacy nightmare”，随后提到 Replit Desktop 与 Windows 合作打造的安全模型，以及 Christie’s 选择 Replit 进行安全的 agentic work（[推文](https://x.com/amasad/status/2124604574606795002)）。Guillermo Rauch 警告，免费的“stealth model”推理可能成为面向国家级项目的工业化数据外泄渠道，并表示 Dragos 的研究似乎印证了这一怀疑；他同时强调 Vercel AI Gateway 没有走这些捷径（[推文](https://x.com/rauchg/status/2124595496849445079)）。Dan Shipper 则补充了一个有条件的航空安全警报：如果某起事件由 AI 辅助的网络攻击造成，那么攻击飞机对重量、燃油和位置的判断，可能绕过 9/11 之后建立的安全假设（[推文](https://x.com/danshipper/status/2124567533449613819)）。

一线 builder 的建议异常具体。Nan Yu 说，让 vibe coding 项目更容易扩展、性能更好、可靠性更高的秘密 prompt 很简单：“Use Postgres”（[推文](https://x.com/thenanyu/status/2124592238974156861)）。Swyx 推荐了一份从创立到被收购的创始人历程拆解，内容涵盖 IP assignment 问题、招聘和裁员建议，以及如何寻找收购机会；他认为更多创始人应该记录这些经验，因为这能替别人省下很多痛苦（[推文](https://x.com/swyx/status/2124730733147390347)）。

Dan Shipper 在 Every 大会上的闭幕演讲，是当天对工作意义最深的一次重新框定。他引用 GDPval 的结果：AI 相对人类专家的胜率从 2024 年的 12.4% 升到 2025 年的 47.6%，2026 年约为 83%。随后他描述了自己如何用一个 Claude 订阅，在一周内完成原本需要五个角色完成的工作。重点不是总体曲线是假的，而是生成正在变便宜，排序仍然很难。“Generation is really cheap, but ranking is hard.” 责任缩小搜索空间，视角决定什么重要，真正有价值的 alpha，是用所有人都能拿到的模型做出非共识的用法（[节目](https://www.youtube.com/watch?v=WstNofgQF5Q)）。

## X / Twitter

### Swyx

Swyx 推荐了一份详细的创始人历程拆解，从公司创立一路讲到被收购，内容涵盖 IP assignment 问题、招聘和裁员建议，以及如何寻找收购机会。他认为更多创始人应该记录这些经验，因为这能替别人省下很多痛苦（[推文](https://x.com/swyx/status/2124730733147390347)）。在 AI 进展方面，他提到 OpenAI 提议用 perplexity 作为行业自我监管和节奏控制的通用指标，而不是 FLOPS。他引用了这样的论证：压缩能力的进步可以为通用智能提供共享 benchmark，随着我们进入约 0.68 到 0.7 的 log-perplexity 区间，应该预期更多变革性能力出现；他还认为，大家争论的 post-training 问题，只是大规模预训练这条主线旁边的 B plot。他也质疑，一个显示今年进展超过 2022 到 2025 年的指标，究竟反映真实能力，还是只在 frontier math 层面成立（[推文](https://x.com/swyx/status/2124583459356373052)）（[推文](https://x.com/swyx/status/2124590240539259381)）。

### Peter Yang

面向忙碌人群制作实用 AI 教程和访谈的 Peter Yang，分享了 Microsoft Copilot EVP Clamanna 的一句提醒：“Agents are very harsh customers.” Clamanna 认为，agent 会寻找最佳性能、价格和可靠性，而 agent 的偏好并不总是人类偏好。人类做搜索时会拿到十条链接和简短摘要，agent 不在乎这些，可以接收上千条结果。言下之意是，API 和用户体验会演化出更适合 agent 的模式（[推文](https://x.com/petergyang/status/2124669298191090033)）。

### Nan Yu

在 OpenAI 负责 Codex 产品、此前担任 Linear 产品负责人的 Nan Yu，给需要扩展的 vibe coding 项目开了一个极简药方：“Use Postgres。” 他把这称为一个秘密 prompt，能让项目更容易扩展、性能更好、可靠性更高（[推文](https://x.com/thenanyu/status/2124592238974156861)）。

### Amjad Masad

Replit CEO Amjad Masad 认为，桌面 AI app 通常是“a security and privacy nightmare”。他说 Replit 与 Windows 合作，为 Replit Desktop 打造了世界级安全模型，而被他称为全球最重要的稀有艺术品托管方 Christie’s，也选择 Replit 进行安全的 agentic work（[推文](https://x.com/amasad/status/2124604574606795002)）。

### Guillermo Rauch

Vercel CEO Guillermo Rauch 认为，AI 应该指向人类可理解性和概念化。他说 Riemann 证明应该附带论文、walkthrough 和新概念，就像即使 LLM 可以直接输出 CPU 指令，高层代码的中间表示仍然有价值（[推文](https://x.com/rauchg/status/2124654108124848350)）。在另一条推文中，他警告，免费的“stealth model”推理可能成为面向国家级项目的工业化数据外泄机制，并表示 Dragos 的研究似乎印证了这一怀疑；他还指出，Vercel AI Gateway 建立了真实的 token 用量，却没有走这些捷径（[推文](https://x.com/rauchg/status/2124595496849445079)）。

### Aaron Levie

Box CEO Aaron Levie 认为，随着 agent 承担越来越多长周期项目，且 agent swarm 围绕同一个目标并行工作，agent harness 和 orchestration 架构必须继续演化。最难的部分，是 agent 如何集体共享知识、跟踪任务、与人类用户协作，并在不过度暴露的前提下访问合适资源。他认为可以从人类团队共享文件、使用电脑、通过聊天和收件箱沟通的方式中吸取经验，但新的 primitives 必须支持远高于人类的吞吐量，同时意识到 agent 更容易成为安全风险（[推文](https://x.com/levie/status/2124658150771188157)）。

### Dan Shipper

Every CEO Dan Shipper 说自己通常并不爱危言耸听，但他警告，如果某起事件由 AI 辅助的网络攻击造成，那会“very bad”。他认为，攻击者如果能干扰飞机，以及飞行员对重量、燃油和位置的判断，就可能让 9/11 之后建立的安全措施失去意义。他强调自己不是飞机系统专家，并提到大多数飞机有手动接管机制，同时邀请更了解情况的人补充（[推文](https://x.com/danshipper/status/2124567533449613819)）。

### Sam Altman

Sam Altman 表示，各实验室已在 White House Accords 下同意建立提升系统安全的标准和最佳实践，并认为围绕 perplexity 的讨论可以推进这些目标。他提议，前沿模型开发者应共同建立评估模型的共享规范、安全案例红队测试，以及模型首次使用前的透明度标准。他还提出，以 perplexity 和其他测量为基础设定共同上限，开发者不得越过，直到监测能力达到某个具体里程碑，例如出现 chain-of-thought monitor 的继任者（[推文](https://x.com/sama/status/2124558713646428663)）（[推文](https://x.com/sama/status/2124551883130114403)）。

## Podcast

### AI & I by Every: A New Vision for Human Work After Automation

**核心结论：** 当每个人都能拿到同一个模型时，真正稀缺的是判断什么重要、并为此承担责任的能力。

Dan Shipper 是 Every 的联合创始人兼 CEO。他的论证从一个不太舒服的测量结果开始：在 GDPval 这个由 OpenAI 提出、让盲测专家比较 AI 与人类真实工作任务输出的 benchmark 上，AI 相对人类专家的胜率从 2024 年的 12.4% 升到 2025 年的 47.6%，2026 年在 GPT-5.4 上约为 83%。他还描述了自己的一周：一个 Claude 订阅，让他完成了原本需要 data scientist、game developer、product marketer、engineer 和 salesperson 才能完成的工作。只看总体曲线，人类工作似乎正在归零。

然后他把镜头拉近。团队用同一个模型分析同一份客户调查。一位同事发现，首次订阅用户会在第一个月后流失，因为 Every 发了太多邮件；另一位发现，很多读者感到孤独；还有一位把结果做成了一档 Claymation 家庭问答游戏节目。模型的默认回答准确但很泛：写作是业务核心，bundle 带来留存，内容量太大是风险。因为每个人都能得到这个答案，所以它很便宜。

更尖锐的实验来自 Every 的 head of evals。他能以 93% 的准确率预测 Shipper 会在 Slack 里说什么，但前提是 Claude 为每个问题生成 400 个候选答案。Claude 无法可靠地排序这些答案。“Generation is really cheap, but ranking is hard.” 生成很便宜，但排序很难。这正是团队仍然重要的原因。责任缩小搜索空间，视角决定最后选中什么。

Shipper 把这称为 allocation economy。他说，评判你的标准不再是你知道多少，而是你能否分配和管理资源来完成工作，也就是分配和管理智能资源。所有人的地板都在抬高，默认能力会变成新的基准。真正的 alpha，来自一个人用自己的非共识视角推动模型。他认为，这也应该改变我们衡量 AI 的方式：不只是看它能否解决数学和编程这类共识问题，而是看它能否从我的视角完成我的工作。总体视角把人类冻结在旧基准上，具体视角则展示一个人借助模型可以成为什么（[节目](https://www.youtube.com/watch?v=WstNofgQF5Q)）。

## Blog

通过验证的 feed 中没有新的合格博客内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
