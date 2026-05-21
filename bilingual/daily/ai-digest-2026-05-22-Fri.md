[English](../../en/daily/ai-digest-2026-05-22-Fri.md) | [中文](../../zh/daily/ai-digest-2026-05-22-Fri.md) | [Bilingual](./ai-digest-2026-05-22-Fri.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

1. AI is starting to show up as a research accelerator, not just a product assistant. Sam Altman and Kevin Weil both pointed to a general-purpose model solving a major mathematics problem, framing it as an early example of AI extending scientific discovery.
AI 正在从产品助手变成研究加速器。Sam Altman 和 Kevin Weil 都提到，通用模型解决了一个重要数学开放问题，并把它视为 AI 扩展科学发现能力的早期信号。

2. MCP and API plumbing are becoming strategic infrastructure. Dan Shipper's Stainless thread and the AI & I episode with Alex Rattray argue that reliable agents need small, precise tools, dynamic API discovery, and eventually code execution plus documentation search.
MCP 和 API plumbing 正在变成战略基础设施。Dan Shipper 关于 Stainless 的长帖，以及 AI & I 对 Alex Rattray 的访谈都强调，可靠 agent 需要小而精准的工具、动态 API 发现，以及最终由代码执行和文档搜索组成的更强模式。

3. Enterprise agent adoption is creating a new implementation job category. Aaron Levie argues that Forward Deployed Engineers will matter because agents change employee workflows directly, require technical integration, and evolve faster than cloud-era best practices did.
企业落地 agent 正在催生新的实施角色。Aaron Levie 认为 Forward Deployed Engineer 会长期重要，因为 agent 不只是部署技术，还会直接改变员工工作流，需要技术集成和变更管理，而且模型迭代速度远快于云时代。

4. Search, agents, and web distribution are converging. Swyx and Garry Tan both highlighted Exa as agent search infrastructure, while Guillermo Rauch framed AI support across 42% of the web as a multi-model, multi-modal distribution problem.
搜索、agent 和 Web 分发正在汇合。Swyx 和 Garry Tan 都把 Exa 视为 agent search 基础设施；Guillermo Rauch 则把覆盖 42% Web 的 AI 能力，描述成跨模型、跨提供商、跨模态的分发问题。

5. Builder roles are being redrawn around delegation and domain depth. Zara Zhang's AI-native team model asks ICs to think like managers of agents and managers to stay hands-on, while Google Labs' Genie updates show creative work shifting from playing with outputs to designing worlds directly.
Builder 的角色边界正在围绕委派和领域深度重画。Zara Zhang 认为 AI-native 团队里 IC 要像 manager 一样委派 agent，manager 也要保持动手能力；Google Labs 的 Genie 更新则显示创作正在从消费输出转向直接设计世界。

## X / Twitter

### Swyx

Swyx connected Sam Altman's "business that gets better when models get better" idea to Agent Labs, arguing that agent-lab revenue now tracks model performance more directly, with a visible discontinuity around late 2025. He also said his team quickly chose Exa after a short bake-off, treating high-quality web search as core infrastructure for agents rather than a nice-to-have tool.

Swyx 把 Sam Altman 所说的“模型越强，业务越强”的公司，和他之前称为 Agent Labs 的形态联系起来。他认为 agent lab 的收入正在更直接地跟随模型能力提升，并且在 2025 年末附近出现了明显跃迁。他还提到团队很快在对比后选择了 Exa，说明高质量 Web search 对 agent 来说正在变成基础设施，而不是锦上添花的工具。

Source: https://x.com/swyx/status/2057119153337545096
Source: https://x.com/swyx/status/2057180080078791036
Source: https://x.com/swyx/status/2057180464524456201

### Josh Woodward

Google Labs VP Josh Woodward mostly replied to people discovering and using new Google AI features. The signal is light but consistent with the post-I/O rollout cycle: users are finding the new surfaces, and the Labs team is watching early reactions closely.

Google Labs VP Josh Woodward 今天主要在回应用户发现和使用 Google 新 AI 功能。信号不重，但和 I/O 之后的 rollout 节奏一致：用户正在进入这些新入口，Labs 团队也在密切观察早期反馈。

Source: https://x.com/joshwoodward/status/2057297559643922609
Source: https://x.com/joshwoodward/status/2057280348158063071

### Kevin Weil

OpenAI's Kevin Weil called the latest AI mathematics result "the next in a series of firsts for AI and mathematics." It reinforces OpenAI's framing that frontier models are beginning to contribute to formal research domains, not only coding, writing, and consumer assistance.

OpenAI 的 Kevin Weil 把最新 AI 数学成果称为“AI 和数学一系列首次突破中的下一个”。这延续了 OpenAI 的叙事：frontier model 开始进入正式研究领域，而不只是写代码、写作和消费助手。

Source: https://x.com/kevinweil/status/2057206749552066805

### Peter Yang

Product builder Peter Yang shared a blunt people-ops observation: repeated layoffs and performance cycles are bad for mental health. In a week dominated by agent and model milestones, it is a reminder that AI companies still operate inside very human organizational systems.

产品 builder Peter Yang 提了一个直接的人力组织观察：频繁裁员和绩效周期会伤害心理健康。在一个充满 agent 和模型里程碑的周里，这提醒我们 AI 公司仍然运行在非常现实的人类组织系统里。

Source: https://x.com/petergyang/status/2057281238722072912

### Google Labs

Google Labs showed Project Genie moving from toy-like generation toward a broader creative workflow: users can pick characters, set scenes, and generate game-like worlds in minutes. Genie is now fully available to eligible Google AI Ultra subscribers globally, which turns it from a sandbox demo into a paid consumer AI surface.

Google Labs 展示了 Project Genie 从玩具式生成走向更完整创作流程：用户可以选择角色、设定场景，并在几分钟内生成游戏式世界。Genie 现在已面向符合条件的 Google AI Ultra 订阅用户全球开放，这让它从 sandbox demo 变成了付费消费 AI 入口。

Source: https://x.com/GoogleLabs/status/2057218835074437573
Source: https://x.com/GoogleLabs/status/2057179491693470166

### Guillermo Rauch

Vercel CEO Guillermo Rauch said a new AI capability will bring AI to 42% of the web across models, providers, and modalities. The important builder signal is distribution: AI features are becoming platform plumbing that has to work across text, image, video, audio, and multiple model vendors.

Vercel CEO Guillermo Rauch 表示，一项新的 AI 能力将把 AI 带到 42% 的 Web，覆盖不同模型、提供商和模态。这里重要的 builder 信号是分发：AI 功能正在成为平台 plumbing，必须跨文本、图像、视频、音频和多家模型供应商工作。

Source: https://x.com/rauchg/status/2057212335811620987

### Aaron Levie

Box CEO Aaron Levie argued that Forward Deployed Engineers are going to remain important as long as AI keeps changing quickly. His reasoning is specific: agents directly change employee workflows, require both technical integration and change management, and every model improvement can make old scaffolding redundant.

Box CEO Aaron Levie 认为，只要 AI 继续高速变化，Forward Deployed Engineer 就会长期重要。他的理由很具体：agent 会直接改变员工工作流，需要技术集成和变更管理，而且每次模型进步都可能让旧 scaffolding 变成冗余甚至阻碍。

Source: https://x.com/levie/status/2057315272156135501

### Garry Tan

Y Combinator CEO Garry Tan praised Exa as the search layer he trusts for agents, saying YC uses it across OpenClaw and Hermes Agents. He also tied AI progress to the broader US competitiveness debate, but the concrete builder takeaway is that agent systems increasingly need a reliable, fast, complete search substrate.

Y Combinator CEO Garry Tan 称赞 Exa 是他信任的 agent search 层，并表示 YC 在 OpenClaw 和 Hermes Agents 中都使用它。他也把 AI 进展放进美国竞争力讨论里，但更具体的 builder takeaway 是：agent 系统越来越需要可靠、快速、完整的搜索底座。

Source: https://x.com/garrytan/status/2057202833251000503
Source: https://x.com/garrytan/status/2057168328226230520
Source: https://x.com/garrytan/status/2057238298805129383

### Matt Turck

FirstMark's Matt Turck posted a pop-culture joke about Vaulter, with no substantive AI builder signal in today's feed.

FirstMark 的 Matt Turck 发了一条关于 Vaulter 的流行文化玩笑，今天的 feed 里没有实质 AI builder 信号。

Source: https://x.com/mattturck/status/2057090887268643187

### Zara Zhang

Zara Zhang described a useful AI-native operating model: ICs should learn to think like managers by delegating tasks to agents, setting standards, and verifying output, while managers should become more hands-on builders again. She also highlighted a Google I/O slide arguing that workers need deeper domain expertise, wider adjacent skills, and better AI fluency at the same time.

Zara Zhang 描述了一个有用的 AI-native 组织模型：IC 要学会像 manager 一样把任务委派给 agent、设定标准并验证输出；manager 也要重新变成更 hands-on 的 builder。她还提到 Google I/O 的一页 slide：员工需要同时加深领域专业度、拓宽相邻技能，并提升 AI 使用能力。

Source: https://x.com/zarazhangrui/status/2057324988009685208
Source: https://x.com/zarazhangrui/status/2057267931025957348

### Nikunj Kothari

Nikunj Kothari used Claude to summarize a 308-page SpaceX S-1, a small but practical example of AI compressing dense primary documents into usable reading material. He also reflected on the emotional reality of founding: success brings more problems, failure is often ignored, and the only durable reason to start is deep commitment to the problem.

Nikunj Kothari 用 Claude 总结了 308 页的 SpaceX S-1，这是 AI 压缩密集一手文档、把它变成可读材料的一个小但实用的例子。他还谈到创业的情绪现实：失败没人关心，成功会带来更多问题，唯一能长期支撑的理由是你真的深度投入那个问题。

Source: https://x.com/nikunj/status/2057242868293816569
Source: https://x.com/nikunj/status/2057134939875991973

### Peter Steinberger

Peter Steinberger recommended Cotypist as an "autocomplete everywhere" tool. The short signal is that developer productivity is expanding beyond IDE coding assistants into OS-level writing and completion layers.

Peter Steinberger 推荐了 Cotypist，一个“到处都能 autocomplete”的工具。这个短信号说明，开发者生产力正在从 IDE coding assistant 扩展到系统级写作和补全层。

Source: https://x.com/steipete/status/2057040636449116222

### Dan Shipper

Every CEO Dan Shipper used Anthropic's reported $300 million Stainless acquisition to reframe an earlier AI & I conversation with Stainless CEO Alex Rattray. His key points: reliable MCP servers should expose small precise toolsets, complex APIs may need dynamic endpoint discovery, company data can become a queryable "brain," and the future of MCP may be code execution plus doc search rather than hundreds of direct tools.

Every CEO Dan Shipper 借 Anthropic 据报道以 3 亿美元收购 Stainless 的新闻，重新包装了他早前和 Stainless CEO Alex Rattray 的 AI & I 对话。他的要点是：可靠 MCP server 应该暴露小而精准的工具集，复杂 API 可能需要动态 endpoint discovery，公司数据可以变成可查询的“brain”，而 MCP 的未来可能是代码执行加文档搜索，而不是几百个直接工具。

Source: https://x.com/danshipper/status/2057122805657821240
Source: https://x.com/danshipper/status/2057123430776902031

### Aditya Agarwal

South Park Commons' Aditya Agarwal amplified Feross's "minus-one to zero" founder journey and pointed builders toward SPC applications. The substantive signal is ecosystem-building: early technical communities are still positioning themselves as the place where AI-era founders find collaborators and starting momentum.

South Park Commons 的 Aditya Agarwal 转发了 Feross 从 minus-one 到 zero 的 founder journey，并邀请 builder 申请 SPC。实质信号是生态建设：早期技术社区仍在把自己定位成 AI 时代 founder 寻找合作者和起步动能的地方。

Source: https://x.com/adityaag/status/2057141903334990327
Source: https://x.com/adityaag/status/2057125943773180348
Source: https://x.com/adityaag/status/2057187787242426555

### Sam Altman

OpenAI CEO Sam Altman framed three priorities: AGI accelerating research, AGI accelerating companies, and personal AGI helping everyone pursue their goals. He connected the mathematics result and OpenAI's offer of $2 million in credits for every YC company, then said the third goal, personal AGI, needs more effort next.

OpenAI CEO Sam Altman 提出三个重点：AGI 加速研究、AGI 加速公司、personal AGI 帮助每个人实现目标。他把数学成果和 OpenAI 为每家 YC 公司提供 200 万美元 credits 的计划联系起来，并表示第三点 personal AGI 接下来需要投入更多努力。

Source: https://x.com/sama/status/2057218997503086888
Source: https://x.com/sama/status/2057203171198636251

## Podcast

### AI & I by Every: Inside Stainless: The Developer Tools Startup Anthropic Just Bought for $300 Million

The Takeaway: MCP is not just another integration format; it is a design problem for making the internet usable by agents without drowning models in bad tools, huge payloads, and unsafe permissions.

Stainless CEO Alex Rattray matters because Stainless has built APIs and SDKs for companies including OpenAI and Anthropic, and Anthropic has now acquired the company. His view is practical rather than hype-driven: the future of agent infrastructure depends on careful API design, small tool surfaces, clear descriptions, and ways for models to inspect and use complex systems incrementally.

The sharpest idea is that giving a model every API endpoint directly may be the wrong abstraction. Dan Shipper's summary says Rattray prefers dynamic mode for complex APIs: let the model list endpoints, inspect the one it needs, then execute. That turns tool use from a giant menu into an exploration loop. Rattray also uses MCP internally to query business systems like Notion and HubSpot, and he stores useful company knowledge through Claude Code into GitHub so the team accumulates a searchable operating memory.

The long-term direction is even more interesting: MCP may converge on code execution plus doc search. Instead of exposing hundreds of brittle tools, an agent could write code against an SDK, run it in a controlled environment, and consult docs when it gets stuck. As the intro puts it, "the software companies that learn how to do MCP well are going to win."

Source: https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

### AI & I by Every：Inside Stainless: The Developer Tools Startup Anthropic Just Bought for $300 Million

核心 takeaway：MCP 不只是另一种集成格式；它真正的问题是，如何让 agent 能使用互联网，同时不被糟糕工具、巨大 payload 和不安全权限淹没。

Stainless CEO Alex Rattray 值得关注，因为 Stainless 为 OpenAI、Anthropic 等公司构建 API 和 SDK，而 Anthropic 现在已经收购了这家公司。他的观点很务实，不是 hype：agent 基础设施的未来取决于认真设计 API、小工具面、清晰描述，以及让模型逐步检查和使用复杂系统的方式。

最关键的想法是，把每个 API endpoint 都直接交给模型，可能是错误抽象。Dan Shipper 的总结里提到，Rattray 更喜欢复杂 API 的 dynamic mode：让模型列出 endpoint，检查需要的那个，然后执行。这会把 tool use 从一个巨大的菜单，变成一个探索循环。Rattray 也在内部用 MCP 查询 Notion、HubSpot 等业务系统，并通过 Claude Code 把有价值的公司知识保存到 GitHub，让团队积累可搜索的运营记忆。

更长期的方向更有意思：MCP 可能会收敛到代码执行加文档搜索。与其暴露几百个脆弱工具，不如让 agent 针对 SDK 写代码，在受控环境里运行，并在卡住时查文档。正如开场所说：“the software companies that learn how to do MCP well are going to win.”

来源：https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

## Blog

No new blog posts in today's feed.

今天的 feed 中没有新的博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
通过 Follow Builders skill 生成：https://github.com/zarazhangrui/follow-builders
