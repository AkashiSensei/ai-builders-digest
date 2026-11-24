[English](../../en/daily/ai-digest-2026-11-24-Tue.md) | [中文](./ai-digest-2026-11-24-Tue.md) | [双语](../../bilingual/daily/ai-digest-2026-11-24-Tue.md)

---

# AI Builders Digest

## 导读

Replit CEO Amjad Masad 分享了关于 agent swarm scaling laws 的新研究。在固定的两小时窗口内，Opus 5.5 在 NumPy 上的加速从单 agent 的 3.7 倍提升到 32 个 agent 的 18.9 倍。但最强的单 agent GPT-6.2 Astra 在超过 8 个 agent 后出现负 scaling，模型还会自发形成不同的组织结构，去中心化 swarm 的扩展效果优于中心化协调。问题的可并行性能够强烈预测 swarm 表现，而单个模型的智能水平并不能很好预测集体智能；Replit 还开源了 Optimization-Bench（[推文](https://x.com/amasad/status/2124969305674748175)）。

编程工具栈正在从模型输出转向受治理的工作流。Anthropic 的 Boris Cherny 面向 Team 和 Enterprise 计划推出 Claude Ship beta，其中 Code Review 负责查找 bug，beta 版 PR Steward 处理修复和失败的检查，beta 版 Claude Approvals 按团队策略批准变更；他建议先从一个 repository 开始，并在建立信任前以 observe 模式运行 Approvals。Anthropic 的 Claude 账号还表示，connectors 和 skills 已合并为 plugins，目前可浏览超过 10,000 个，Free、Pro、Max 和 Ultra 计划已经上线，Team 和 Enterprise 即将支持（[推文](https://x.com/bcherny/status/2124961485801836573)）（[推文](https://x.com/bcherny/status/2124961487454384442)）（[推文](https://x.com/bcherny/status/2124961488691740941)）（[推文](https://x.com/claudeai/status/2124970294523945328)）。

企业控制能力也正在进入同一产品界面。Claude 账号表示，zero data retention 与 Enterprise Frontier Safeguards 已面向符合条件的企业进入 public beta，可在大量请求中检测滥用，同时保持与 zero data retention 兼容，并且是与 100 多家客户共同开发的。EFS 已在 Claude Platform、Claude Platform on AWS、Amazon Bedrock 和 Claude on Google Cloud 上线，Microsoft Foundry 的支持即将推出（[推文](https://x.com/claudeai/status/2124929944530587712)）（[推文](https://x.com/claudeai/status/2124929946925793294)）。

ChatGPT 的 Dots 也暴露出内部推进速度与外部完成度之间的落差。在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 表示，dots 正迅速成为 OpenAI 内部完成任务的主要方式，甚至 dots 在构建 dots system；他预计答案质量会有显著提升，并称到年底前 app 会因简化、提速以及 chat 与 work 合并而明显改善。面向忙碌人群制作实用 AI 教程和访谈的 Peter Yang 则说，ChatGPT Dots 仍然非常 buggy：会在没有他审阅的情况下发送邮件，还会随机停止响应，让他怀疑是不是自己的 prompt 有问题（[推文](https://x.com/thsottiaux/status/2124923055072043052)）（[推文](https://x.com/thsottiaux/status/2124998553856844186)）（[推文](https://x.com/thsottiaux/status/2125027477877887231)）（[推文](https://x.com/petergyang/status/2125060785667969399)）。

Box CEO Aaron Levie 认为，agent 正在改变服务业的商业逻辑。过去，交付能力只能随人头和可用人才增长，而客户总是希望更快、更便宜或更高质量地完成工作；agent 让产出与投入时间脱钩，一名工程师可以拥有数十名工程师的产出，一名设计师也可能搭出完整的设计系统和品牌。但他仍认为，前端专家对于确保最终结果不可替代，并预计这种变化会扩展到网络安全、广告与营销、法律、会计和 IT 转型（[推文](https://x.com/levie/status/2125089009018040779)）。

评估和数据质量正在成为两种独立的优势来源。Vercel CEO Guillermo Rauch 让 Fable 研究自己的全部 coding sessions，比较 Opus 和 Gemini Neon 哪个更好，并把这次评估称为 personal eval；结果是 Neon 胜出，他还认为 Google 如此强势回归这件事，外界讨论得远远不够。Every CEO Dan Shipper 呼吁大家 personal benchmark maxxing，并分享了一份制作个人 benchmark 的指南。Meta AI 高级总监 Madhu Guru 认为，数据不是像煤一样可以买入再铲进模型里的惰性商品，而是承载知识、品味和专业能力的高价值资产，能够成为构建更强智能的基础模块（[推文](https://x.com/rauchg/status/2124880074168242369)）（[推文](https://x.com/danshipper/status/2124886826909622653)）（[推文](https://x.com/danshipper/status/2124896430783447510)）（[推文](https://x.com/realmadhuguru/status/2125102190196859156)）。

## X / Twitter

### Boris Cherny

在 Anthropic 负责 Claude 的 Boris Cherny 面向 Team 和 Enterprise 计划推出了 Claude Ship beta。Code Review 负责查找 bug，PR Steward 处理修复和失败的检查，Claude Approvals 按团队策略批准变更，后两项仍处于 beta。他说这套系统显著提高了自己的速度，因为不必等待代码审查，也不用盯着 pull request；他建议管理员先从一个 repository 开始，并在建立信任前让 Approvals 保持 observe 模式（[推文](https://x.com/bcherny/status/2124961485801836573)）（[推文](https://x.com/bcherny/status/2124961487454384442)）（[推文](https://x.com/bcherny/status/2124961488691740941)）。

### Thibault Sottiaux

在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 表示，dots 正迅速成为 OpenAI 内部完成任务的主要方式，甚至 dots 在构建 dots system（[推文](https://x.com/thsottiaux/status/2124923055072043052)）。他预计用户会感受到答案质量的显著提升，同时到年底前还会看到 app 更简单、更快，以及 chat 与 work 合并带来的日常体验改善（[推文](https://x.com/thsottiaux/status/2124998553856844186)）。他还推荐大家关注一场讨论，主题是 OpenAI 员工如何努力修补我们依赖的开源软件和基础设施中的缺陷（[推文](https://x.com/thsottiaux/status/2125027477877887231)）。

### Peter Yang

面向忙碌人群制作实用 AI 教程和访谈的 Peter Yang 表示，ChatGPT Dots 仍然非常 buggy：会在没有他审阅的情况下发送邮件，还会随机停止响应。他说自己真的很想喜欢这个产品，并怀疑是不是自己的 prompt 方式不对（[推文](https://x.com/petergyang/status/2125060785667969399)）。

### Madhu Guru

Meta AI 高级总监 Madhu Guru 认为，把模型开发中的输入称为 data，严重低估了它真正代表的东西。对不熟悉模型开发的人来说，数据像是可以买入、再像煤一样铲进模型里的惰性商品；但实际上，优秀的数据编码了极有价值的 knowledge、taste 和 expertise，而且往往以过去不存在的方式被表达和结构化。因此，数据是构建跨领域、能力越来越强的智能的基础模块，他预计数据会继续在智能产业中处于核心位置（[推文](https://x.com/realmadhuguru/status/2125102190196859156)）。

### Amjad Masad

Replit CEO Amjad Masad 分享了关于 agent swarm scaling laws 的新研究。在固定两小时窗口内，Opus 5.5 在 NumPy 上的加速从单 agent 的 3.7 倍提升到 32 个 agent 的 18.9 倍，而 GPT-6.2 Astra 是最强的单 agent，却在超过 8 个 agent 后出现负 scaling。模型会自发形成不同的组织结构，去中心化 swarm 的扩展效果优于中心化协调，问题的可并行性能够预测 swarm 表现，而单个模型的智能水平并不能很好预测集体智能。Replit 还开源了 Optimization-Bench，以支持这类 inference-time scaling 研究（[推文](https://x.com/amasad/status/2124969305674748175)）。

### Guillermo Rauch

Vercel CEO Guillermo Rauch 让 Fable 研究自己的全部 coding sessions，判断 Opus 和 Gemini Neon 哪个更好。他把这称为 personal eval；结果是 Neon 胜出，他还认为 Google 如此强势回归这件事，外界讨论得远远不够（[推文](https://x.com/rauchg/status/2124880074168242369)）。

### Aaron Levie

Box CEO Aaron Levie 认为，服务业一直受限于交付能力，而交付能力过去只能随人头和可用人才增长。agent 让产出与时间脱钩，改变了这套算法：一名工程师可以拥有数十名工程师的产出，一名设计师可以搭出完整的设计系统和品牌。他仍认为前端专家对于确保最终结果至关重要，并预计这种变化会出现在网络安全、广告与营销、法律、会计和 IT 转型中（[推文](https://x.com/levie/status/2125089009018040779)）。

### Dan Shipper

Every CEO Dan Shipper 认为，大家需要 personal benchmark maxxing。他还分享了一份制作个人 benchmark 的指南（[推文](https://x.com/danshipper/status/2124886826909622653)）（[推文](https://x.com/danshipper/status/2124896430783447510)）。

### Claude

Anthropic AI assistant Claude 的账号表示，connectors 和 skills 现在统一为 plugins，让用户可以用同一种方式连接工具、教 Claude 新技能，或者两者同时进行。Plugins 已在 Free、Pro、Max 和 Ultra 计划上线，Team 和 Enterprise 即将支持，目前可浏览超过 10,000 个（[推文](https://x.com/claudeai/status/2124970294523945328)）。该账号还表示，zero data retention 与 Enterprise Frontier Safeguards 已面向符合条件的企业进入 public beta，可在大量请求中检测滥用，同时保持与 zero data retention 兼容，并且是与 100 多家客户共同开发的（[推文](https://x.com/claudeai/status/2124929944530587712)）。EFS 已在 Claude Platform、Claude Platform on AWS、Amazon Bedrock 和 Claude on Google Cloud 上线，Microsoft Foundry 的支持即将推出（[推文](https://x.com/claudeai/status/2124929946925793294)）。

## Podcast

本次通过验证的 feed 中没有新的合格播客单集。

## Blog

本次通过验证的 feed 中没有新的合格博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
