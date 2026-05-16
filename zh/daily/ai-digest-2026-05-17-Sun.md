[English](../../en/daily/ai-digest-2026-05-17-Sun.md) | [中文](./ai-digest-2026-05-17-Sun.md) | [双语](../../bilingual/daily/ai-digest-2026-05-17-Sun.md)

---

# AI Builders Digest

## 导读

1. 今天最强的信号是，builders 正在把 agentic software 当作一种运营模式，而不只是一个功能。Peter Steinberger 把 OpenClaw 描述成一个由大量 Codex loop 驱动的公司：review、安全检查、issue triage、benchmark 检测、会议驱动 PR 都在自动运行。

2. Codex 正在成为实际 agent 工作里的反复参照物。Swyx 说 Codex 和三个月前相比已经完全不像同一个产品，Dan Shipper 提到 Codex-native apps，Nikunj Kothari 描述了一个长时间运行的 `/goal` workflow，Sam Altman 则回应了用户在适应当前能力后继续想要更多能力的反馈。

3. agent deployment 正在催生新的基础设施和安全模式。Guillermo Rauch 提到 Vercel plugins、Skills、SSO 保护的 agent deployments，以及 `vercel curl` 这类让 agent 能在认证环境中工作的工具。

4. AI 产品工作正在脱离旧 playbook。Madhu Guru 认为，过去习惯执行框架的 PM 现在需要重新成为模式发明者；Aaron Levie 则说，AI 产品需要 forward deployed engineering，因为模型、workflow 和最佳实践会在部署后持续变化。

5. Yann LeCun 的长访谈继续把架构争论推到前台。他的核心观点是：LLM 很有用，但不是通向动物级或人类级智能的路线，因为真正的 agent 需要 world model、后果预测，以及通过 search 规划，而不是只做 next-token generation。

## X / Twitter

### Swyx

Swyx 说 Codex 和三个月前相比已经“完全认不出来了”，他看到的 demo 像是“Mac 上的 agentic Excel”。他还提到 Singapore GovTech 负责人估计未来两年新加坡会有 13 亿个 agent，并正在建设 national MCP gateway，同时指出 keynote 中出现了一些 Codex roadmap 的暗示。

来源: https://x.com/swyx/status/2055494400252481687
来源: https://x.com/swyx/status/2055470634331750588
来源: https://x.com/swyx/status/2055467498888118647

### Peter Yang

Roblox 产品负责人 Peter Yang 认可 ChatGPT Finances 的方向，但马上把重点放在信任和数据边界上。他关闭了“improve the model for everyone”设置，因为不希望自己的金融数据被用于模型训练或广告定向。他也指出，AI 目前仍然很难把交易正确分类。

来源: https://x.com/petergyang/status/2055450577094738018
来源: https://x.com/petergyang/status/2055396161910194395
来源: https://x.com/petergyang/status/2055436179643019395

### Madhu Guru

Google 产品负责人 Madhu Guru 认为，AI 正在打破那些只会复用 playbook 的 PM 职业模型。过去二十年，很多产品团队靠把少数团队发明的产品模式迁移到自己的领域也能做出成绩，但 AI 产品工作里稳定模板更少。他的结论很直接：PM 需要重新成为 inventor，因为“你不能靠 A/B test 做出突破性的 AI product”。

来源: https://x.com/realmadhuguru/status/2055414865146327088

### Guillermo Rauch

Vercel CEO Guillermo Rauch 展示了 Grok CLI 如何通过 Plugins 和 Skills 生成 creative coding 网站并部署到 Vercel。他还指出 agent 生成应用后的一个企业场景问题：Vercel 可以把 production deployment 放在 SSO 后面，但 agent 随后也需要访问自己刚创建的受保护 URL。他给出的答案是 `vercel curl`，让 builder 和 agent 可以在 Vercel 生态内 curl 已认证的 URL。他还认为，同时擅长 agent management 和基础功的人会非常强。

来源: https://x.com/rauchg/status/2055491454307582454
来源: https://x.com/rauchg/status/2055440326765244742
来源: https://x.com/rauchg/status/2055278852931530784

### Aaron Levie

Box CEO Aaron Levie 说自己已经完全认同 forward deployed engineering，因为 AI 和传统软件不同。经典 SaaS 交付的是相对稳定的技术，而 AI system 会随着模型升级、能力变化和使用实践演进而持续改变。他认为，一个服务数千家客户的 vendor 比每家公司单独摸索更适合沉淀和传播最佳实践，而且这些学习应该回流到核心产品里。他也再次强调 headless software 是未来。

来源: https://x.com/levie/status/2055501840419328286
来源: https://x.com/levie/status/2055357619888595271

### Garry Tan

Y Combinator CEO Garry Tan 今天的 feed 主要集中在 California 政策，而不是 AI 产品。他认为“Overpaid CEO”税不会真正针对高薪 CEO，而会把成本转嫁给消费者，降低城市收入，并让城市和州变得更穷。他也推荐读者查看自己的 California voter guide。

来源: https://x.com/garrytan/status/2055446378596474891
来源: https://x.com/garrytan/status/2055384351307858390
来源: https://x.com/garrytan/status/2055320066577891415

### Matt Turck

FirstMark 的 Matt Turck 今天的 feed 中没有实质性 AI 分析，主要是一条个人高互动帖子。

来源: https://x.com/mattturck/status/2055404881024848056

### Nikunj Kothari

FPV Ventures partner Nikunj Kothari 说，`/goal` 在给到合适工具后感觉“就像 AGI”。他的例子是一个长时间运行的 agentic workflow：处理 2,000 多条数据库 item，修复产品图片以及由不同图片引发的前端 bug，改写描述，用 browser harness 获取实时网页信息，用 web search fact check，并把未来可复用的脚本写好，而他本人当时不在电脑前。

来源: https://x.com/nikunj/status/2055426430654439485
来源: https://x.com/nikunj/status/2055428193398780296
来源: https://x.com/nikunj/status/2055288369958289536

### Peter Steinberger

Peter Steinberger 今天给出了最清晰的 agent-native 公司运营图景。他说 OpenClaw 想回答一个问题：如果 token 不再重要，未来的软件会怎么构建？他们在云端常态运行约 100 个 Codex instance，做 PR review、安全 review、issue 去重、spam detection、benchmark regression 检测、会议监听并根据讨论创建 PR，以及用 browser-driven agent 复现复杂环境。他还发布了 `clawpatch` 0.1.0，这个工具会把 codebase 映射成语义 feature slice，检查 bug 和质量问题，并记录带验证的修复尝试。另外，他说最近几个项目用 Svelte 体验不错，相比 React 少一些坑，Codex 也处理得很好。

来源: https://x.com/steipete/status/2055405041843052792
来源: https://x.com/steipete/status/2055364630709448970
来源: https://x.com/steipete/status/2055402519841411165

### Dan Shipper

Every CEO Dan Shipper 说 Codex-native apps 是未来，并推荐了一篇关于在 OpenClaw 上构建 agent-as-a-service platform 的 deep dive。他的两个 takeaway 是：OpenClaw 很强，但作为平台承载层很难，因为变化太快、regression 很多；相比给每个人一个脆弱的一对一 agent，一个由专人维护好的公司级 super agent 可能更有效。运营层面的结论是，agent adoption 往往需要一个技术 owner 持续把共享 agent 维护好。

来源: https://x.com/danshipper/status/2055451869841965154
来源: https://x.com/danshipper/status/2055412891910586516
来源: https://x.com/danshipper/status/2055347527457886336

### Sam Altman

OpenAI CEO Sam Altman 回应了一条产品反馈，感谢团队认真对待这些 report。他补充说，有时最后答案只是用户已经习惯了当前这层“魔法”，于是自然想要更多能力。

来源: https://x.com/sama/status/2055356452286640630

## Podcast

### Unsupervised Learning: Ep 86: Yann LeCun on Leaving Meta, Breaking The LLM Paradigm, &amp; Why Hinton is Wrong

核心 takeaway：Yann LeCun 并不是说 LLM 没用，而是说它不是通向 human-like intelligence 的正确路线。

LeCun 把自己的新公司 AMI 定位为“AI for the real world”。语言模型对语言、代码、数学和其他符号领域很有用，但现实世界是高维、连续、嘈杂且混乱的。他的观点是，agent 需要 world model：系统必须能预测自己行动的后果，然后通过 search 或 optimization 做规划，而不是生成下一个 token 或下一个 action。

这也解释了他对当前 robotics 和 VLA 路线的批评。他承认 imitation learning 驱动的 demo 有进展，但认为它们不是通向可靠物理智能的路线，因为它们需要巨量数据，而且仍缺少深层的后果预测能力。他更看好的模型是 JEPA，也就是 joint embedding predictive architecture，让系统预测抽象 representation，而不是预测 pixel。他认为包括 DINO、iJEPA、VJEPA 在内的非生成式路线，在 image 和 video representation 上比 pixel reconstruction 成功得多。

Meta 的背景也很关键。LeCun 说，Llama 商业化推进以及后续不如预期之后，Meta 越来越专注于追赶 LLM 产业前沿，这让它不再适合把 world-model 路线扩展成产品。他的新创业公司本质上是在押注：真实世界智能需要不同的架构，也需要不同的组织重心。

来源: https://www.youtube.com/@RedpointAI

## Blog

今天的 feed 中没有 blog post。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
