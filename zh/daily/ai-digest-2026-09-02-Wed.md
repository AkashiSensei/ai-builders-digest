[English](../../en/daily/ai-digest-2026-09-02-Wed.md) | [中文](./ai-digest-2026-09-02-Wed.md) | [双语](../../bilingual/daily/ai-digest-2026-09-02-Wed.md)

---

# AI Builders Digest

## 导读

**1. Anthropic 正式发布 Fable 5.1。** Claude 官方账号宣布，Claude Fable 5.1 今天已在全产品线可用，面向网络安全防御者和生命科学家的 Claude Mythos 5.1 则通过可信访问项目提供。Anthropic 表示安全护栏也有明显改进：网络安全护栏对良性请求的误报减少约 60%，基础生物和医学问题的 fallback 率下降约 85%。Claude Code 的 Boris Cherny 补充说，Fable 5.1 的 cache read 从每百万 token 1 美元降至 0.25 美元，典型 Claude Code 会话最多便宜 38%，团队也正在努力减少「Claude-speak」。

**2. Fable 5.1 的企业实测提升明显。** Box CEO Aaron Levie 报告，在企业复杂工作评估中，Fable 5.1 在非结构化数据任务上比 Fable 5 高出 7 个百分点，其中金融服务场景提升 17%、一项技术成本优化分析提升 37%。Anthropic 的 Cat Wu 表示，这个模型让她的团队敢于接手以往需要数月才能完成的项目；Thariq 则认为，在需要较少验证或边界情况较少的任务上可以调低 effort，而且切换 effort 不再破坏 prompt cache。

**3. 建设者开始追求「更不烦人」的 agent。** 即将加入 OpenAI 产品团队、此前担任 Linear 产品负责人的 Nan Yu 认为，让 agent 更不烦人蕴含巨大机会，因为用户必须先停止「气得摔门而去」才能接触到价值；他还看到 UX 设计师转型为对话与修辞设计师的机会。Peter Yang 分享了自己的原则：只保留十几个精简的 AI skills 并定期删除不用的，同时推荐用 Claude Code 的 prompt-audit 清理过时规则，防止 skill 逐渐漂移。

**4. 自我改进产品正在成为公司级模式。** Meta 的 Madhu Guru 认为，自我改进产品（self-improving products）是每家公司都该落地的元理念，并列出了核心要素：清晰的指标定义、明确的战略、过往产品决策的知识库、与内部系统的连接，以及围绕端到端产品开发流程构建的 harness。他另外称赞 Shopify 的 ML 团队是世界级的，并呼吁更多企业自建 post-training 系统、评估体系与数据飞轮。

**5. AI 的下一个战场：安全、网站与发布节奏。** OpenAI CEO Sam Altman 表示，公司整个夏天都在冲刺安全优先级，Astra 已完成训练、在能力与对齐上都是一大步，但之后的模型会按需放慢节奏，以确保达到安全标准再发布。Aaron Levie 认为 AI 网络安全即将垂直爆发，安全行业会成为好去处；Vercel CEO Guillermo Rauch 则预告了一个统一计算平台，把防止 agent 逃逸的防护扩展到 builds、functions 和 servers。

## X / Twitter

### Boris Cherny（Claude Code，Anthropic）

Anthropic Claude Code 团队的 Boris Cherny 补全了 Fable 5.1 的发布细节：模型写作质量更好、语气更佳；与 Fable 5 相比，新的生物学安全护栏对良性请求的干预减少 85%，Claude Code 用户每会话的 cyber 干预约减少 60%。他还提到面向 Enterprise、API 和 SDK 客户的降价：cache read 从每百万 token 1 美元降至 0.25 美元，典型 Claude Code 会话最多便宜 38%。

- [Boris Cherny 谈 Fable 5.1 的写作与语气](https://x.com/bcherny/status/2094864064648536068)
- [Boris Cherny 谈 Fable 5.1 的安全护栏](https://x.com/bcherny/status/2094864063478276288)
- [Boris Cherny 谈 Fable 5.1 定价](https://x.com/bcherny/status/2094864062186426373)

### Claude

Claude 官方账号宣布 Claude Fable 5.1 今天已在各处可用，面向网络安全防御者和生命科学家的 Claude Mythos 5.1 通过可信访问项目提供。安全护栏同样升级：网络安全护栏对良性请求的标记减少约 60%，基础生物与医学问题的 fallback 率近期下降约 85%。另外，Anthropic 还推出 Enterprise Frontier Safeguards（EFS），为企业客户提供与 zero data retention 同等的完全隐私，同时在阻止对抗性滥用方面保持最先进水平；EFS 将从今年秋季起分阶段上线。

- [Claude 谈 Fable 5.1 与 Mythos 5.1 可用性](https://x.com/claudeai/status/2094848592812917122)
- [Claude 谈安全护栏改进](https://x.com/claudeai/status/2094848591617483020)
- [Claude 谈 Enterprise Frontier Safeguards](https://x.com/claudeai/status/2094848590245965931)

### Peter Yang

为忙碌人群制作实用 AI 教程与访谈的 Peter Yang 主张 skills 宜少而精：他只保留大约十几个（大多是自己写的），并定期删除不再使用的 skills，同时尽量把每个 skill 写得尽可能短。他还指出 skill 维护中的真实痛点：在一次成功运行后让 AI 更新 skill，容易让它在单一线程上过拟合，久而久之 skill 就会漂移。他给 Fable 5.1 用户的实用建议是，对自己的 skills 运行 Claude Code 的 /claude-api prompt-audit，清理为旧模型优化的冗余规则。

- [Peter Yang 谈精简 skills](https://x.com/petergyang/status/2094999358525821099)
- [Peter Yang 谈 skill 漂移与过拟合](https://x.com/petergyang/status/2094995775952740795)
- [Peter Yang 谈用 prompt-audit 适配 Fable 5.1](https://x.com/petergyang/status/2094987791566622971)

### Nan Yu（OpenAI 产品团队，此前为 Linear 产品负责人）

在 Linear 担任四年产品负责人后即将加入 OpenAI 产品团队的 Nan Yu 认为，让 agent「更不烦人」蕴含巨大机会：用户必须先停止 rage-quitting，才能接触到价值。他还看到 UX 设计师尚未被开发的机会，即转型为对话与修辞设计师。

- [Nan Yu 谈让 agent 更不烦人](https://x.com/thenanyu/status/2094928205753040999)

### Madhu Guru（Meta 高级 AI 总监）

Meta 高级 AI 总监 Madhu Guru 认为，自我改进产品（self-improving products）是每家公司都该落地的元理念。他列出了核心要素：清晰定义 primary、secondary 和 guardrail 指标；阐明战略以及最想推动的指标；建立过往产品决策与原则的知识库；连接仪表盘、API、MCP 等内部系统；以及围绕端到端产品开发流程构建 harness。他还指出，企业自建 post-training 系统、评估体系与数据飞轮蕴含巨大机会，并说他与 Shopify 的 ML 团队合作过，他们是世界级的。

- [Madhu Guru 谈自我改进产品](https://x.com/realmadhuguru/status/2094817857821704659)
- [Madhu Guru 谈企业自建 post-training 系统](https://x.com/realmadhuguru/status/2094973690576576675)

### Cat Wu（Anthropic，Claude Code 与 Cowork）

在 Anthropic 负责 Claude Code 与 Cowork 的 Cat Wu 表示，有了 Fable 5.1，她的团队开始接手以往需要数月才能完成的更大胆项目，并邀请大家在 Claude Code、Claude Cowork 和 Claude Tag 里让模型放手一试。

- [Cat Wu 谈 Fable 5.1 带来的大胆项目](https://x.com/_catwu/status/2094933602228416603)

### Thariq（Claude Code，Anthropic）

Anthropic Claude Code 团队的 Thariq 花了很多时间深入测试 Fable 5.1，评价它是非常好的模型，并建议在需要较少验证、边界情况较少的任务上使用较低 effort。他还提到一个实用细节：切换 effort 不再破坏 prompt cache。

- [Thariq 谈 Fable 5.1 实测](https://x.com/trq212/status/2094945951865520458)

### Guillermo Rauch（Vercel CEO）

Vercel CEO Guillermo Rauch 宣布 Fable 5.1 现已上线 Vercel AI Gateway，所有模型都可在一个界面调用。在另一条帖子中，他为 Fluid 站台，认为它是 Vercel Build 性能、Sandbox 可靠性与 30 分钟 Function 时长的统一底座：所有计算产品共享 Dockerfile、安全边界、网络与文件系统。他设想，Sandbox 中防止 agent 逃逸的 egress Firewall 功能也能应用到 builds、functions 和 servers，最终走向一个全球统一的计算平台。他还欢迎与 Tanner Linsley 及 TanStack 团队的合作，承诺无论客户选择 Next.js 还是 TanStack 都会提供高质量服务。

- [Guillermo Rauch 谈 Fable 5.1 上线 AI Gateway](https://x.com/rauchg/status/2094867652573528074)
- [Guillermo Rauch 谈 Fluid 与统一计算](https://x.com/rauchg/status/2094831747037085978)
- [Guillermo Rauch 谈与 TanStack 的合作](https://x.com/rauchg/status/2094901483414372716)

### Alex Albert（Anthropic，Research）

在 Anthropic 从事研究的 Alex Albert 对随 Fable 5.1 发布的非模型功能 Enterprise Frontier Safeguards（EFS）最为兴奋。他解释，传统 zero data retention 无法发现 agent 在内部系统的多次会话之间留下的行为模式，而 EFS 让企业数据留在自己的云中，并增加一个自动监控层来标记风险模式。他称之为面向 agent 的 observability 与风险缓解层，并预测它会成为企业运行越来越强大的 AI 时的标准要求。他还分享了一个演示：Fable 5.1 通过代码生成视频，他给出一张地块照片，模型便设计了一栋房子、完成渲染并生成了电影感的漫游视频。

- [Alex Albert 谈 Enterprise Frontier Safeguards](https://x.com/alexalbert__/status/2094889286990446769)
- [Alex Albert 谈用 Fable 5.1 通过代码生成视频](https://x.com/alexalbert__/status/2094860187743986169)

### Aaron Levie（Box CEO）

Box CEO Aaron Levie 报告了对 Fable 5.1 的早期测试：在企业复杂工作评估中，它在非结构化数据任务上比 Fable 5 高出 7 个百分点，其中金融服务场景的税后利润预测提升 17%（模型正确地在计算税负前应用了资本减免）、技术场景的成本优化分析提升 37%（模型识别出归一化方式的歧义并同时计算两种口径）、公共部门的教育数据分析任务提升 16%。他表示 Fable 5.1 很快会在 Box AI Studio 中可用。他还认为 AI 网络安全即将垂直爆发：模型越来越擅长发现和利用漏洞，前沿模型领先，但开源权重模型也落后不远；对企业而言，用更多 AI 加人工监督来做分流和自动化修复几乎是唯一出路。他的结论是：安全行业一定会迎来好时候。

- [Aaron Levie 谈 Box 对 Fable 5.1 的评估结果](https://x.com/levie/status/2094851976769257770)
- [Aaron Levie 谈 AI 网络安全即将垂直爆发](https://x.com/levie/status/2095024699441119612)

### Nikunj Kothari（FPV Ventures 合伙人）

投资种子轮与 A 轮的 FPV Ventures 合伙人 Nikunj Kothari 认为，人们仍然低估了 WebMCP：它可以让 agent 通过 tool call 原生地与网站交互，包括完整的 UI/UX 支持和交互元素。他分享了自己提交给 WebMCP challenge 的演示：agent 在 El Nino 态势追踪器上自行构建视图、保留人类编辑，并生成可分享链接给其他 agent（或人类），视频与代码由 Codex 与 Railway 制作，现已在 elneenyo.com 上线。

- [Nikunj Kothari 谈面向 agent 的 WebMCP](https://x.com/nikunj/status/2094922789128196314)

### Sam Altman（OpenAI CEO）

OpenAI CEO Sam Altman 表示，公司整个夏天都在冲刺安全优先级，因为能力与安全护栏同步前进比以往任何时候都重要，他们还即将发布下一个模型。他坦言其中的张力：Astra 非常好，且早已完成训练，在能力与对齐上都是一大步；但对于之后的模型，OpenAI 一直在按需放慢节奏，以确保完成足够的安全与对齐工作。他认为，管理好向一个 AI 充裕且强大的世界的过渡，理应成为世界上最高优先级的事之一，而世界将需要对齐的 AI 来管理过渡的后续阶段。

- [Sam Altman 谈安全、Astra 与下一个模型](https://x.com/sama/status/2094934592062959832)

## Podcast

### Training Data：让城市更棒：Peregrine 的 Nick Noone 与 Ben Rudolph

核心要点：如果构建方把数据所有权与治理当作产品本身、而不是把数据收集当作产品，那么 AI 完全可以在不变成监视型全景监狱（surveillance state）的前提下，让城市更安全、更高效。

Peregrine 正在用 AI 保护城市与社区，同时拒绝监视型国家模式。两位联合创始人来自截然不同的世界：Nick Noone 曾执掌 Palantir 的 SOCOM 单元，在中东参与过高风险的情报行动；Ben Rudolph 则在苏丹与哥伦比亚边境为联合国难民署（UNHCR）做难民工作，之后又在印度农村搭建基层医疗方案。殊途同归的两人得出同一个论点：让城市变得很棒的基础是安全，既包括客观安全，也包括「感到安全」。

Peregrine 把 Flock、Axon 这类公司的数据收集商业模式整个倒了过来：不卖更多传感器，也不囤积数据，而是把机构已有的零散信息串联起来，架设在既有系统之上，用治理与权限控制让机构真正用得起自己手里的数据。Noone 说：「We're fundamentally in the business of joining disparate information to provide a more secure, properly governed solution.」（我们本质上做的事情，是把零散的信息连接起来，提供更安全、治理得当的解决方案。）数据属于客户，不属于 Peregrine。Noone 把这称为一场「反网络效应」的赌注：保护每个机构数据的完整性与所有权，而不是把它们汇聚成一个中央全景监狱。

效果是具体的。佛罗里达州一个县一个月内突然要做超过 100 次水上救援，他们用这个平台发现：制造沙渠与离岸流的天气模式从未连续出现过三天，谜团由此变成了可行动的预警。一个调查犹太会堂所受威胁的探员，则用语义搜索找出了关键词搜索永远找不到的一连串历史反犹威胁。Peregrine 的前向部署工程师把问题一路负责到底。Noone 说，这看上去很不「可规模化」，却是检验什么真正有效的最佳信号：「the way that we maintain trust is not actually taking credit and shouting from the rooftops.」（我们维持信任的方式，恰恰是不去抢功、不高调宣扬。）

AI 也在改变 Peregrine 的成本结构：如今约 90% 的数据集成代码由 agent 编写，部署团队监督长达数小时的主 agent 与子 agent 运行。Noone 认为，把交付成本降低几个数量级，才让那些历史上需要八位数合同的小城市也能用上这类技术。他的终局设想是成为 1 万座城市的「机构记忆层」，让每座城市都以自己独特的方式变得更棒。

Source: https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

## Blog

经过验证的博客 feed 中没有新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
