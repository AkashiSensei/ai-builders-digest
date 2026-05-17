[English](../../en/daily/ai-digest-2026-05-18-Mon.md) | [中文](./ai-digest-2026-05-18-Mon.md) | [双语](../../bilingual/daily/ai-digest-2026-05-18-Mon.md)

---

# AI Builders Digest

## 导读

1. 今天最重要的主题是，AI supply chain policy 正在变成一种 product strategy。Jacob Helberg 把 Pax Silica 描述成一个由 private sector 主导的平台，用来保护 AI 供应链输入，起点是菲律宾 4,000 英亩的 economic security zone，以及一个已有 14 个国家参与的联盟。

2. Builders 也在关注 AI infrastructure 中不那么显眼、但更底层的部分。No Priors 这期讨论不只谈 chip，还谈 rare earth magnets、actuators、robotics components、mineral processing、logistics、energy、nuclear 和 market-access policy。

3. X 上有几条内容都在反思 Silicon Valley 的地位游戏。Peter Yang 和 Madhu Guru 都在说，ambition 不必来自恐惧，钱不会自动带来平静，职业成功也不该吞掉家庭和普通生活。

4. agent 和 personal-AI tooling 仍然是实践主线。Garry Tan 把 GBrain 描述成一个带有八层 memory 的 open-source knowledge system，用来增强 agent；Peter Steinberger 则继续推荐 Codex，并发布了 Blacksmith 菜单栏工具更新。

5. builder culture 的争论仍然围绕一个问题：机构还能不能真的做出东西。Garry Tan 批评学院式怀疑让社会更擅长 critique 而不是 construction；Nikunj Kothari 则提醒想做投资的人，应该先在优秀公司里亲身学习什么是 excellence。

## X / Twitter

### Swyx

Swyx 今天的 feed 比较轻量：AI Engineer 很快会来到 India；他也对一个社媒执行案例表示惊讶，但没有展开实质 AI 观点。

来源: https://x.com/swyx/status/2055889947136237595
来源: https://x.com/swyx/status/2055612276208709731

### Peter Yang

Roblox 产品负责人 Peter Yang 用一条高传播帖子戳破了 Bay Area tech 的地位游戏。他的建议很简单：离开 bubble 去旅行，看看欧洲小镇或亚洲，你会发现人生远不止 IC7、IC8，或者在哪家公司工作。他还用一句很狠的话强调这个点：没有人应该把人生优化成“离婚、忽视孩子，但终于在 FAANG 做到 D2”的墓志铭。

来源: https://x.com/petergyang/status/2055663937061007762
来源: https://x.com/petergyang/status/2055814893216178248
来源: https://x.com/petergyang/status/2055841860279804005

### Madhu Guru

Google 产品负责人 Madhu Guru 认为，Silicon Valley 经常把 ambition 和 happiness 当成互斥项，这是一种错误选择。他不是反对 ambition，而是说人可以想变得富有，同时此刻也保持 content，因为“够不够”最终是内在判断。对 builder 来说，从匮乏和绝望出发去追逐，是一个很差的 operating system。

来源: https://x.com/realmadhuguru/status/2055708451670798839

### Thariq

Anthropic 的 Thariq 发了一句简短的 builder 玩笑，但背后有真实的产品设计意味：HTML 仍然无敌。在这一周各种 agent 和 app-builder 讨论里，这像是在提醒大家，简单、耐用的 web primitives 依然很能打。

来源: https://x.com/trq212/status/2055903660476129723

### Garry Tan

Y Combinator CEO Garry Tan 提出了两个相连的 building 观点。第一，他介绍 GBrain：一个 open-source、MIT license 的 agent knowledge system，不是“RAG in a box”，而是用八层 memory 让 OpenClaw 或 Hermes Agent 更了解你。第二，他批评受 Foucault 和 Derrida 影响的制度性 critique，认为这种文化让人更擅长质疑系统，而不是改进系统。他给出的解药很直接：去建造那些能被现实检验的东西。

来源: https://x.com/garrytan/status/2055670533451366479
来源: https://x.com/garrytan/status/2055670797596012657
来源: https://x.com/garrytan/status/2055674791873630650

### Zara Zhang

Zara Zhang 抓住了 coding-agent 工作带来的情绪过山车：用完 agent 之后，builder 会觉得自己无所不能；刷完 X 之后，又会觉得自己彻底落后。这很准确地描述了当前 AI builder 的心理状态：工具让个人 leverage 暴涨，但社交 feed 又让前沿显得永远追不上。

来源: https://x.com/zarazhangrui/status/2055728641913536762

### Nikunj Kothari

FPV Ventures partner Nikunj Kothari 建议年轻人不要太早去做 venture，除非他们真的痴迷于 investing 这门 craft。他的核心观点是，只靠 board seat、deck 或 sourcing 很难理解什么是 excellence；他对 product、design 和 operations 的判断，来自在优秀公司内部和优秀 operator 一起工作。如果一个人想投资 founder，他更推荐先去一家 great company 工作，同时从 angel investing 开始学习。

来源: https://x.com/nikunj/status/2055648134819450907

### Peter Steinberger

Peter Steinberger 今天把 agent tooling 和 developer workflow 更新放在一起。他推荐还没切到 Codex 的人清理 Claude Code 产出的低质量内容，同时发布了 BlackBar 0.2.0 for Blacksmith：增加 24 小时 vCPU 和 workflow 图、可选状态与 job 通知、更丰富的 job row，以及更紧凑的状态 badge。主线很实用：减少 CI 猜测，让 coding-agent loop 更干净。

来源: https://x.com/steipete/status/2055747016727167035
来源: https://x.com/steipete/status/2055685581758206139
来源: https://x.com/steipete/status/2055775661755715974

### Dan Shipper

Every CEO Dan Shipper 继续把 Codex 变成一种会被直接推荐给朋友和同事的工具，他称之为“用一条条短信把世界 Codex-pilling”。他也反驳了“工具会削弱原生能力”的说法，用 bicycle 作类比：AI assistance 是增强，它会改变人们做事的方式，但这不等于工具本身有害。

来源: https://x.com/danshipper/status/2055715359244566552
来源: https://x.com/danshipper/status/2055727669900141017

## Podcast

### No Priors: Pax Silica: Inside the Trump Administration's Tech Strategy with US Under Secretary of State for Economic Affairs Jacob Helberg

核心 takeaway：Jacob Helberg 想把 AI supply chain security 做成一个由 private companies 运行的 product-like platform，而不是政府自己运营的工业计划。

Helberg 是美国国务院负责经济事务的 Under Secretary。他把 Pax Silica 描述为一个已有 14 个国家参与的 economic security coalition，目标是覆盖完整 AI supply chain。第一个重大 rollout 是菲律宾 4,000 英亩的 economic security zone，目前以 diplomatic property 形式持有，接下来有两年窗口来谈 investor protections、tax treatment 和长期运行规则。目标不只是 chip。他点名的范围包括 precision reducers、servo motors、rare earth magnets、actuators、robotics supply chains、minerals、logistics 和 energy，这些才是 AI industrial capacity 的真实表面积。

最尖锐的对比是中国的 Belt and Road 模式。Helberg 认为，美国不应该在海外建设 state-owned supply chains 或 government-run infrastructure。美国优势应该是 private-sector execution：打造 commercially viable 的平台，对 host countries 是 positive-sum，并且最终能脱离政府、作为长期 private service 存在。他最有代表性的一句话是：美国不会做政府运营的供应链，因为那不是美国擅长的方式。

对 builders 和 investors 的实际要求，是提供反馈和 execution judgment。VC 可以帮助判断哪些 founder 真能在 capital-intensive 且战略重要的领域执行；公司则可以告诉 policymakers，market access、supply-chain partnerships、IP protection、model distillation、mineral pricing 和 energy constraints 这些问题到底在哪里卡住 deployment。

来源: https://www.youtube.com/watch?v=xjlYpGaxIPA

## Blog

今天的 feed 中没有 blog post。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
