[English](../../en/daily/ai-digest-2026-05-17-Sun.md) | [中文](../../zh/daily/ai-digest-2026-05-17-Sun.md) | [Bilingual](./ai-digest-2026-05-17-Sun.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

The strongest signal today is that builders are treating agentic software as an operating model, not a feature. Peter Steinberger described OpenClaw as a company run with many Codex loops for reviews, security, issue triage, benchmark checks, and meeting-driven PRs.
今天最强的信号是，builders 正在把 agentic software 当作一种运营模式，而不只是一个功能。Peter Steinberger 把 OpenClaw 描述成一个由大量 Codex loop 驱动的公司：review、安全检查、issue triage、benchmark 检测、会议驱动 PR 都在自动运行。

Codex is becoming a recurring reference point for practical agent work. Swyx called the product unrecognizable from three months ago, Dan Shipper pointed to Codex-native apps, Nikunj Kothari described a long-running `/goal` workflow, and Sam Altman replied to feedback about users wanting more capability after adapting to the current baseline.
Codex 正在成为实际 agent 工作里的反复参照物。Swyx 说 Codex 和三个月前相比已经完全不像同一个产品，Dan Shipper 提到 Codex-native apps，Nikunj Kothari 描述了一个长时间运行的 `/goal` workflow，Sam Altman 则回应了用户在适应当前能力后继续想要更多能力的反馈。

Agent deployment is creating new infrastructure and security patterns. Guillermo Rauch highlighted Vercel plugins, Skills, SSO-protected agent deployments, and `vercel curl` as ways to let agents work inside authenticated environments without losing access controls.
agent deployment 正在催生新的基础设施和安全模式。Guillermo Rauch 提到 Vercel plugins、Skills、SSO 保护的 agent deployments，以及 `vercel curl` 这类让 agent 能在认证环境中工作的工具。

Product work around AI is shifting away from old playbooks. Madhu Guru argued that PMs trained to execute frameworks now need to invent patterns, while Aaron Levie said AI products need forward deployed engineering because models, workflows, and best practices keep changing after deployment.
AI 产品工作正在脱离旧 playbook。Madhu Guru 认为，过去习惯执行框架的 PM 现在需要重新成为模式发明者；Aaron Levie 则说，AI 产品需要 forward deployed engineering，因为模型、workflow 和最佳实践会在部署后持续变化。

Yann LeCun's latest long-form argument keeps the architecture debate alive. His thesis is that LLMs are useful but not a route to animal-like or human-like intelligence because real agents need world models, consequence prediction, and planning by search rather than next-token generation.
Yann LeCun 的长访谈继续把架构争论推到前台。他的核心观点是：LLM 很有用，但不是通向动物级或人类级智能的路线，因为真正的 agent 需要 world model、后果预测，以及通过 search 规划，而不是只做 next-token generation。

## X / Twitter

### Swyx

Swyx said Codex has become "completely unrecognizable from 3 months ago," reacting to a demo that felt like "agentic excel on mac." He also surfaced Singapore GovTech's estimate of 1.3 billion agents in the country within two years and noted that a national MCP gateway is being built, while pointing to hints dropped about the Codex roadmap.

Swyx 说 Codex 和三个月前相比已经“完全认不出来了”，他看到的 demo 像是“Mac 上的 agentic Excel”。他还提到 Singapore GovTech 负责人估计未来两年新加坡会有 13 亿个 agent，并正在建设 national MCP gateway，同时指出 keynote 中出现了一些 Codex roadmap 的暗示。

Source: https://x.com/swyx/status/2055494400252481687
Source: https://x.com/swyx/status/2055470634331750588
Source: https://x.com/swyx/status/2055467498888118647

### Peter Yang

Roblox product leader Peter Yang liked the new ChatGPT Finances direction but immediately focused on trust and data boundaries. He turned off the "improve the model for everyone" setting because he does not want financial data used for model training or targeted ads, and he noted that AI still struggles to classify transactions correctly.

Roblox 产品负责人 Peter Yang 认可 ChatGPT Finances 的方向，但马上把重点放在信任和数据边界上。他关闭了“improve the model for everyone”设置，因为不希望自己的金融数据被用于模型训练或广告定向。他也指出，AI 目前仍然很难把交易正确分类。

Source: https://x.com/petergyang/status/2055450577094738018
Source: https://x.com/petergyang/status/2055396161910194395
Source: https://x.com/petergyang/status/2055436179643019395

### Madhu Guru

Google product leader Madhu Guru argued that AI is breaking the career model for PMs who were trained to reuse playbooks. For two decades, many product teams succeeded by applying patterns invented elsewhere, but AI product work has fewer stable templates. His conclusion is blunt: PMs need to become inventors again, because "you can't A/B test your way to a breakthrough AI product."

Google 产品负责人 Madhu Guru 认为，AI 正在打破那些只会复用 playbook 的 PM 职业模型。过去二十年，很多产品团队靠把少数团队发明的产品模式迁移到自己的领域也能做出成绩，但 AI 产品工作里稳定模板更少。他的结论很直接：PM 需要重新成为 inventor，因为“你不能靠 A/B test 做出突破性的 AI product”。

Source: https://x.com/realmadhuguru/status/2055414865146327088

### Guillermo Rauch

Vercel CEO Guillermo Rauch showed Grok CLI using Plugins and Skills to generate and deploy a creative coding site through Vercel. He also explained an enterprise wrinkle for agent-generated apps: Vercel can put even production deployments behind SSO, but agents then need a way to access the protected URL they just created. His answer is `vercel curl`, which lets builders and agents curl authenticated Vercel URLs from inside the ecosystem. He also argued that people who combine agent management skill with strong fundamentals will be hard to beat.

Vercel CEO Guillermo Rauch 展示了 Grok CLI 如何通过 Plugins 和 Skills 生成 creative coding 网站并部署到 Vercel。他还指出 agent 生成应用后的一个企业场景问题：Vercel 可以把 production deployment 放在 SSO 后面，但 agent 随后也需要访问自己刚创建的受保护 URL。他给出的答案是 `vercel curl`，让 builder 和 agent 可以在 Vercel 生态内 curl 已认证的 URL。他还认为，同时擅长 agent management 和基础功的人会非常强。

Source: https://x.com/rauchg/status/2055491454307582454
Source: https://x.com/rauchg/status/2055440326765244742
Source: https://x.com/rauchg/status/2055278852931530784

### Aaron Levie

Box CEO Aaron Levie said he is "fully forward deployed engineering pilled" because AI is not like traditional software. Classical SaaS ships a relatively stable artifact, while AI systems keep changing as models improve, capabilities shift, and operating practices evolve. His view is that a vendor working across thousands of customers can propagate best practices more efficiently than every company relearning them alone, and that the learning should feed directly back into the product. He also repeated that headless software is the future.

Box CEO Aaron Levie 说自己已经完全认同 forward deployed engineering，因为 AI 和传统软件不同。经典 SaaS 交付的是相对稳定的技术，而 AI system 会随着模型升级、能力变化和使用实践演进而持续改变。他认为，一个服务数千家客户的 vendor 比每家公司单独摸索更适合沉淀和传播最佳实践，而且这些学习应该回流到核心产品里。他也再次强调 headless software 是未来。

Source: https://x.com/levie/status/2055501840419328286
Source: https://x.com/levie/status/2055357619888595271

### Garry Tan

Y Combinator CEO Garry Tan focused on California politics rather than AI product work in today's feed. He argued that the "Overpaid CEO" tax would pass costs to consumers, reduce city revenue, and make cities and states poorer, and he also pointed readers to his voter guide for current California elections.

Y Combinator CEO Garry Tan 今天的 feed 主要集中在 California 政策，而不是 AI 产品。他认为“Overpaid CEO”税不会真正针对高薪 CEO，而会把成本转嫁给消费者，降低城市收入，并让城市和州变得更穷。他也推荐读者查看自己的 California voter guide。

Source: https://x.com/garrytan/status/2055446378596474891
Source: https://x.com/garrytan/status/2055384351307858390
Source: https://x.com/garrytan/status/2055320066577891415

### Matt Turck

FirstMark's Matt Turck had no substantive AI analysis in today's feed beyond a personal high-engagement post.

FirstMark 的 Matt Turck 今天的 feed 中没有实质性 AI 分析，主要是一条个人高互动帖子。

Source: https://x.com/mattturck/status/2055404881024848056

### Nikunj Kothari

FPV Ventures partner Nikunj Kothari described `/goal` as feeling like AGI when given the right tools. His example was a long-running agentic workflow that moved through more than 2,000 database line items, fixed product images and frontend bugs caused by image variation, improved descriptions, used a browser harness for live web information, fact-checked with web search, and wrote reusable scripts while he was away from the keyboard.

FPV Ventures partner Nikunj Kothari 说，`/goal` 在给到合适工具后感觉“就像 AGI”。他的例子是一个长时间运行的 agentic workflow：处理 2,000 多条数据库 item，修复产品图片以及由不同图片引发的前端 bug，改写描述，用 browser harness 获取实时网页信息，用 web search fact check，并把未来可复用的脚本写好，而他本人当时不在电脑前。

Source: https://x.com/nikunj/status/2055426430654439485
Source: https://x.com/nikunj/status/2055428193398780296
Source: https://x.com/nikunj/status/2055288369958289536

### Peter Steinberger

Peter Steinberger gave the clearest operating picture of an agent-native company today. He said OpenClaw is trying to answer what software building looks like when tokens do not matter: roughly 100 Codex instances running in the cloud, PR and security reviews, issue deduplication, spam detection, benchmark regression checks, meeting listeners that create PRs from discussions, and browser-driven agents that can reproduce complex setups. He also launched `clawpatch` 0.1.0, a tool that maps codebases into semantic feature slices, reviews them for bugs and quality issues, and records fix attempts with validation. Separately, he said Svelte has been a pleasant alternative to React for recent Codex-assisted projects.

Peter Steinberger 今天给出了最清晰的 agent-native 公司运营图景。他说 OpenClaw 想回答一个问题：如果 token 不再重要，未来的软件会怎么构建？他们在云端常态运行约 100 个 Codex instance，做 PR review、安全 review、issue 去重、spam detection、benchmark regression 检测、会议监听并根据讨论创建 PR，以及用 browser-driven agent 复现复杂环境。他还发布了 `clawpatch` 0.1.0，这个工具会把 codebase 映射成语义 feature slice，检查 bug 和质量问题，并记录带验证的修复尝试。另外，他说最近几个项目用 Svelte 体验不错，相比 React 少一些坑，Codex 也处理得很好。

Source: https://x.com/steipete/status/2055405041843052792
Source: https://x.com/steipete/status/2055364630709448970
Source: https://x.com/steipete/status/2055402519841411165

### Dan Shipper

Every CEO Dan Shipper said Codex-native apps are the future and pointed readers to a deep dive on trying to build an agent-as-a-service platform on OpenClaw. His two takeaways were that OpenClaw is powerful but difficult to build on as a platform because it moves fast and introduces regressions, and that one well-maintained company super-agent may beat giving every employee a separate fragile agent. The operational lesson is that agent adoption often needs a technical owner who keeps the shared agent working well for everyone.

Every CEO Dan Shipper 说 Codex-native apps 是未来，并推荐了一篇关于在 OpenClaw 上构建 agent-as-a-service platform 的 deep dive。他的两个 takeaway 是：OpenClaw 很强，但作为平台承载层很难，因为变化太快、regression 很多；相比给每个人一个脆弱的一对一 agent，一个由专人维护好的公司级 super agent 可能更有效。运营层面的结论是，agent adoption 往往需要一个技术 owner 持续把共享 agent 维护好。

Source: https://x.com/danshipper/status/2055451869841965154
Source: https://x.com/danshipper/status/2055412891910586516
Source: https://x.com/danshipper/status/2055347527457886336

### Sam Altman

OpenAI CEO Sam Altman responded appreciatively to a product feedback thread, noting that the team takes reports seriously even when the underlying answer is that users have adapted to the current level of capability and now want more.

OpenAI CEO Sam Altman 回应了一条产品反馈，感谢团队认真对待这些 report。他补充说，有时最后答案只是用户已经习惯了当前这层“魔法”，于是自然想要更多能力。

Source: https://x.com/sama/status/2055356452286640630

## Podcast

### Unsupervised Learning: Ep 86: Yann LeCun on Leaving Meta, Breaking The LLM Paradigm, &amp; Why Hinton is Wrong

The takeaway: Yann LeCun's case is not that LLMs are useless, but that they are the wrong path to human-like intelligence.

核心 takeaway：Yann LeCun 并不是说 LLM 没用，而是说它不是通向 human-like intelligence 的正确路线。

LeCun frames AMI, his new company, around "AI for the real world." Language models are useful for language, code, math, and other symbolic domains, but reality is high-dimensional, continuous, noisy, and messy. His argument is that agents need world models: systems that can anticipate the consequences of their own actions, then plan by search or optimization instead of generating the next token or the next action.

LeCun 把自己的新公司 AMI 定位为“AI for the real world”。语言模型对语言、代码、数学和其他符号领域很有用，但现实世界是高维、连续、嘈杂且混乱的。他的观点是，agent 需要 world model：系统必须能预测自己行动的后果，然后通过 search 或 optimization 做规划，而不是生成下一个 token 或下一个 action。

That leads to his critique of current robotics and VLA approaches. He sees imitation-learning-heavy demos as progress, but not a reliable route to robust physical intelligence because they require huge amounts of data and still lack deep consequence prediction. The model he favors is JEPA, or joint embedding predictive architecture, where systems learn to predict abstract representations rather than pixels. He says this non-generative family, including work like DINO, iJEPA, and VJEPA, has been much more successful for images and video than pixel reconstruction.

这也解释了他对当前 robotics 和 VLA 路线的批评。他承认 imitation learning 驱动的 demo 有进展，但认为它们不是通向可靠物理智能的路线，因为它们需要巨量数据，而且仍缺少深层的后果预测能力。他更看好的模型是 JEPA，也就是 joint embedding predictive architecture，让系统预测抽象 representation，而不是预测 pixel。他认为包括 DINO、iJEPA、VJEPA 在内的非生成式路线，在 image 和 video representation 上比 pixel reconstruction 成功得多。

The Meta context is also revealing. LeCun says the company became increasingly focused on catching up in LLMs after Llama's commercialization push and later disappointments, which made Meta less suited to scaling the world-model agenda into products. His startup is a bet that real-world intelligence needs a different architecture and a different organizational focus.

Meta 的背景也很关键。LeCun 说，Llama 商业化推进以及后续不如预期之后，Meta 越来越专注于追赶 LLM 产业前沿，这让它不再适合把 world-model 路线扩展成产品。他的新创业公司本质上是在押注：真实世界智能需要不同的架构，也需要不同的组织重心。

Source: https://www.youtube.com/@RedpointAI

## Blog

No blog posts in today's feed.

今天的 feed 中没有 blog post。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
