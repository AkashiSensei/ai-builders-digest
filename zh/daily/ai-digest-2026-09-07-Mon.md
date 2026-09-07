[English](../../en/daily/ai-digest-2026-09-07-Mon.md) | [中文](./ai-digest-2026-09-07-Mon.md) | [双语](../../bilingual/daily/ai-digest-2026-09-07-Mon.md)

---

# AI Builders Digest

## 导读

**1. 数据正在成为 AI 时代企业的护城河。** Eon 联合创始人 Ofir Ehrlich 和 Gonen Stein 认为，模型、算力和基础设施正在变成商品，切换成本几乎为零，因此一家公司多年积累的数据才是它真正有价值的资产。他们举例说，Google 花了 1000 万美元买下破产的 Spirit Airlines 的数据来训练模型，而不是买它的飞机，当时还有其他 AI 公司参与竞标；AI 实验室也在接触对冲基金等数据持有方，过去积压在磁带上的数据如今被视为黄金。

**2. AI agent 正在成为新的内部威胁。** 两位创始人认为，过去以人类攻击者（比如勒索软件团伙）为中心的威胁模型，如今加入了非人类角色：拥有合法访问权限的 agent，行动速度极快。在他们看来，企业必须假设会被攻破，无论事件是否出于恶意，尤其是当非技术员工用 AI 工具和 agent 处理敏感的公司数据、而这一切完全不受治理约束时。

**3. 大多数企业其实已经拥有 AI 需要的数据，只是被锁住了。** Eon 的主张是，客户不需要去买数据，而是要解锁已有的数据：完成映射和分类、屏蔽敏感字段、接入 LLM 工作流，而不必为每个应用单独搭建管线。两位创始人还预计 dashboard 不会消失，反而会变多，因为人类需要靠它们才能搞清楚 agent 到底在做什么。

**4. 互联网还没有为个人 agent 做好准备。** Box CEO Aaron Levie 认为，互联网几乎完全没有为一个「每个人的个人 agent 都在到处替他们执行任务」的未来做好准备，并预测基础设施层、用户体验和新商业模式中会涌现出无穷无尽的新挑战与新机会。

**5. agent 会让注意力危机变得更糟。** Zara Zhang 认为，人类注意力的缩短是我们这个时代最大的危机之一，而 agent 只会让情况更糟。

## X / Twitter

### Aaron Levie（Box CEO）

Box CEO Aaron Levie 认为，互联网几乎完全没有为一个「每个人的个人 agent 都在到处替他们执行任务」的未来做好准备。他预计基础设施层、用户体验和新商业模式等领域将出现无穷无尽的新挑战与新机会。

- [Aaron Levie 谈互联网尚未为个人 agent 做好准备](https://x.com/levie/status/2096735726750908464)

### Zara Zhang

Zara Zhang 对 agent 时代提出了一个反直觉的看法：人类注意力的缩短是我们这个时代最大的危机之一，而 agent 只会让情况变得更糟。

- [Zara Zhang 谈 agent 与人类注意力](https://x.com/zarazhangrui/status/2096824861108928701)

### Nikunj Kothari（FPV Ventures 合伙人）

FPV Ventures 合伙人 Nikunj Kothari 分享了一个 agent 化工程流程的观察：Fable 会审查 Astra 改的每一行代码，并批准其中一处修复，评价是「this fix is the real deal」。用他的话说，「Fable PM、Astra engineer」这对组合未尝败绩。

- [Nikunj Kothari 谈 Fable 审查 Astra 的代码改动](https://x.com/nikunj/status/2096798671547646134)

### Peter Yang

Peter Yang 制作面向忙碌人群的实用 AI 教程和访谈。他这轮没有值得一提的实质内容，只发了一条带讽刺意味的引用帖：「This man isn't even on Time's 100 Top AI List so why are we listening to him /s」。

- [Peter Yang 谈 Time 100 Top AI List 的引用帖](https://x.com/petergyang/status/2096815819997204639)

### Nan Yu

Nan Yu 即将加入 OpenAI 产品团队，此前担任 Linear 产品负责人。她这轮没有值得一提的实质内容，只有一条纯标题式的引用帖：「J-dog calling AGI」。

- [Nan Yu 的引用帖](https://x.com/thenanyu/status/2096796392102752507)

## Podcast

### No Priors：与 Eon 联合创始人 Ofir Ehrlich 和 Gonen Stein 谈重构传统数据基础设施

核心要点：AI 时代的护城河是数据，而不是模型。最终胜出的企业，将是那些把自己已有的数据解锁并保护好的企业。

Ofir Ehrlich 和 Gonen Stein 是 Eon 的联合创始人。Eon 是一个以备份和灾难恢复为核心的云端数据基座（data foundation），专为 AI 时代打造。两人此前创办过 CloudEndure，后来被 AWS 收购。他们的核心论点是：模型、算力和基础设施正在变成商品，切换成本几乎为零，而一家公司积累的数据才是真正让它与众不同的东西。在他们看来，证据到处都是：Google 花了 1000 万美元买下破产的 Spirit Airlines 的数据，而不是它的飞机，当时还有其他 AI 公司参与竞标；AI 实验室也在接触对冲基金等数据持有方，购买过去积压在磁带上的数据。数据正在成为护城河，也正在成为一股越来越明显的收购趋势。

两位创始人的反直觉观点是：大多数公司其实已经拥有它们需要的数据，只是这些数据被锁在不同业务部门、没人真正搞清楚的系统以及访问成本极高的格式里。Eon 的解法是建立一个 data foundation：跨环境完成数据的映射与分类，屏蔽敏感字段并设置权限，接入结构化和非结构化数据源，再连接到 LLM 工作流，而不必为每个应用手工搭建管线。他们说：「客户其实已经拥有这些数据，只是被锁住了，根本无法访问。」

安全话题是这场讨论最尖锐的部分。两位创始人认为，威胁模型已经从人类攻击者转向非人类角色：勒索软件时代的老问题，正在被拥有合法访问权限的 AI agent 取代，它们行动速度极快，几秒钟就能删掉一张表。他们在 AWS 时就见过旧式的失败：一家大客户因为资源从未被正确映射、分类和打标签，60% 的环境被勒索软件攻破。他们对企业的建议是：「我们必须假设会被攻破，无论事件是否出于恶意。」他们还注意到，六个月前几乎没人愿意谈这个话题，如今几乎所有企业领导要么担心这种事发生在自己身上，要么已经亲身经历过；而普通非技术员工正用 Lovable 这类工具构建应用，把敏感的公司数据放在任何治理范围之外处理。

谈到企业技术栈时，两位创始人预计 dashboard 不会减少，反而会增加：「我们一定会看到更多 dashboard，因为这是人类搞清楚这个世界到底在发生什么的唯一办法。」agent 正在编写世界上大部分代码，agent 又在调用其他 agent，非人类身份（non-human identity）不断激增，人类已经很难追踪责任链条。与云迁移时代相比，他们认为这次变革速度更快，企业正在失去控制，恐惧从推动力变成了阻碍力。大多数公司，他们说，其实还站在这个旅程的起点。

Source: https://www.youtube.com/@NoPriorsPodcast

## Blog

经过验证的博客 feed 中没有新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
