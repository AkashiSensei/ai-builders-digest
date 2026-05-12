[English](../../en/daily/ai-digest-2026-05-12-Tue.md) | [中文](../../zh/daily/ai-digest-2026-05-12-Tue.md) | [Bilingual](./ai-digest-2026-05-12-Tue.md)

---

# AI Builders Digest

## Reader's Briefing / 导读
Agent work is becoming an organizational role, not just a tool habit. Aaron Levie says serious enterprise agents need context, safe system wiring, quality checks, human review design, and ongoing maintenance.
Agent 工作正在变成一种组织角色，而不只是个人工具习惯。Aaron Levie 认为，严肃的企业 agent 需要上下文、安全的系统接入、质量检查、人类审核设计，以及持续维护。

Builders are still using AI most effectively through tiny personal workflows. Peter Yang wants AI to scan school newsletters, Dan Shipper used Codex to build a MIDI learning helper in minutes, and Peter Steinberger keeps folding Codex into his own workbench.
Builders 仍然在小而具体的个人 workflow 里获得最高 AI 杠杆。Peter Yang 想让 AI 扫描学校 newsletter，Dan Shipper 用 Codex 几分钟做出 MIDI 学习助手，Peter Steinberger 则继续把 Codex 嵌入自己的工作台。

HTML keeps showing up as the flexible artifact format for agent work. Thariq uses it for planning, specs, reviews, reports, and exploration, while developer tools are embedding browsers directly into local workflows.
HTML 持续成为 agent 工作中的灵活 artifact 格式。Thariq 用它做 planning、spec、review、report 和 exploration，developer tools 也开始把 browser 直接嵌入本地 workflow。

Inference is the next infrastructure crunch. Baseten CEO Tuhin Srivastava argues that AI-native applications, custom models, and enterprise adoption are still early, with workload growth pushing demand toward specialized inference clouds.
Inference 正在成为下一轮基础设施瓶颈。Baseten CEO Tuhin Srivastava 认为，AI-native applications、custom models 和 enterprise adoption 都还在早期，工作负载增长会继续把需求推向专业 inference cloud。

Anthropic's Managed Agents architecture is about decoupling long-running agents into durable sessions, replaceable harnesses, and isolated sandboxes so agents can recover, stay observable, and keep credentials away from generated code.
Anthropic 的 Managed Agents 架构核心是把长任务 agent 拆成 durable sessions、可替换 harnesses 和隔离 sandboxes，让 agent 能恢复、可观察，并把 credentials 与生成代码隔离。

## X / Twitter
### Swyx

Swyx pointed to a build-versus-buy SaaS discussion and tagged Aaron Levie for corrections. The feed only captures the short framing, but it fits the broader enterprise-agent theme: the interesting question is no longer whether software should be bought or built, but where AI changes the boundary between packaged workflow, internal automation, and custom agent infrastructure.

Swyx 指向了一场 build-versus-buy SaaS 讨论，并 tag Aaron Levie 让他纠正。Feed 里只有很短的 framing，但它和更大的 enterprise-agent 主题一致：今天的问题不再只是软件该买还是该自建，而是 AI 如何改变 packaged workflow、内部自动化和 custom agent infrastructure 之间的边界。

Links: https://x.com/swyx/status/2053572059767427302

链接: https://x.com/swyx/status/2053572059767427302

### Peter Yang

Peter Yang gave a very grounded automation prompt: long school newsletters should be summarized into the few facts a parent actually needs, like early dismissal or urgent dates. That is a useful reminder that the best consumer AI workflows are often not glamorous; they remove attention tax from ordinary documents. He also shared his newsletter signup and reacted to an unexpected external post without enough feed context to infer the subject.

Peter Yang 给了一个非常接地气的 automation prompt：十页学校 newsletter 应该被总结成家长真正需要知道的几件事，比如是否提前放学、是否有重要日期。这提醒我们，最好的 consumer AI workflow 往往并不炫，它只是从普通文档里拿掉注意力税。他还分享了自己的 newsletter 注册链接，并对一条外部帖子表示意外，但 feed 没有足够上下文判断主题。

Links: https://x.com/petergyang/status/2053672364681134511, https://x.com/petergyang/status/2053586591822848364, https://x.com/petergyang/status/2053552061632102402

链接: https://x.com/petergyang/status/2053672364681134511, https://x.com/petergyang/status/2053586591822848364, https://x.com/petergyang/status/2053552061632102402

### Thariq

Thariq said he has been using HTML for planning, specs, exploration, code review, reports, and more. The signal is consistent with a growing pattern among agent-heavy builders: HTML is becoming a practical intermediate artifact because it can be inspected by humans, manipulated by agents, and embedded in workflows. He also highlighted Jarred Sumner's attempt to rewrite Bun in Rust while passing 99.8% of the existing test suite, using it as a prod toward more ambitious engineering bets.

Thariq 说自己一直在用 HTML 做 planning、spec、exploration、code review、report 等工作。这个信号和 agent-heavy builders 的一个趋势一致：HTML 正在成为实用的中间 artifact，因为它能被人类检查、被 agent 操作，也能嵌入 workflow。他还提到 Jarred Sumner 尝试用 Rust 重写 Bun，并通过了现有 test suite 的 99.8%，以此提醒大家工程野心还可以更大。

Links: https://x.com/trq212/status/2053632475294040084, https://x.com/trq212/status/2053559397654348159

链接: https://x.com/trq212/status/2053632475294040084, https://x.com/trq212/status/2053559397654348159

### Guillermo Rauch

Guillermo Rauch shared a short personal update from an SF calisthenics club and a Mother's Day note about his mother putting herself through engineering school in Argentina. There was not enough product or technical context in these posts to extract an AI builder takeaway.

Guillermo Rauch 分享了一条来自 SF calisthenics club 的个人动态，以及一条 Mother's Day 帖子，感谢母亲在 Argentina 自学完成 engineering school。两条内容都缺少产品或技术上下文，无法可靠提炼 AI builder takeaway。

Links: https://x.com/rauchg/status/2053613142761206080, https://x.com/rauchg/status/2053558741283623308

链接: https://x.com/rauchg/status/2053613142761206080, https://x.com/rauchg/status/2053558741283623308

### Aaron Levie

Aaron Levie argued that moving agents from coding into broader knowledge work is a serious technical job. Teams need to provide context and data, wire systems safely, verify output quality, design human-in-the-loop workflows, and keep agents maintained as models and systems change. Box is responding by hiring AI automation engineers: technical people who work directly with business functions, closer to forward-deployed engineers for internal operations than casual automation tinkerers.

Aaron Levie 认为，把 agents 从 coding 推向更广泛的 knowledge work，是一项严肃的技术工作。团队需要提供上下文和数据，安全接入系统，验证输出质量，设计 human-in-the-loop workflow，并在模型和系统升级后持续维护。Box 因此开始招聘 AI automation engineers：这类人直接与业务职能合作，更像面向内部运营的 forward-deployed engineers，而不是业余自动化玩家。

Links: https://x.com/levie/status/2053672965125140915

链接: https://x.com/levie/status/2053672965125140915

### Ryo Lu

Ryo Lu shared that ryOS now has an IRC bridge to Pieter Levels' retro PC, framing it as a way to let online worlds connect. The useful signal is small but real: personal computing experiments are blending social presence, retro interfaces, and networked tools in ways that feel closer to living systems than static apps.

Ryo Lu 分享 ryOS 现在有了通往 Pieter Levels retro PC 的 IRC bridge，并把它称为让不同 online worlds 连接起来。这个信号很小但有趣：personal computing 实验正在把 social presence、retro interfaces 和 networked tools 混在一起，做出比静态 app 更像 living systems 的东西。

Links: https://x.com/ryolu_/status/2053523477878259951, https://x.com/ryolu_/status/2053523744019427416

链接: https://x.com/ryolu_/status/2053523477878259951, https://x.com/ryolu_/status/2053523744019427416

### Garry Tan

Garry Tan's most substantive post was philosophical: the highest form of design is transforming human pain and suffering. The remaining feed items were playful or sports-adjacent, so the durable takeaway is about YC-style product taste: the best design work starts from a painful human reality, not from surface polish.

Garry Tan 最有信息量的一条是偏哲学的：最高级也最重要的 design，是把人类痛苦转化成别的东西。其他 feed 内容偏玩笑或体育，所以更持久的 takeaway 是 YC 式产品品味：最好的设计工作不是从表面 polish 开始，而是从真实的人类痛点开始。

Links: https://x.com/garrytan/status/2053689459032379860, https://x.com/garrytan/status/2053645909682954545, https://x.com/garrytan/status/2053622975778246807

链接: https://x.com/garrytan/status/2053689459032379860, https://x.com/garrytan/status/2053645909682954545, https://x.com/garrytan/status/2053622975778246807

### Nikunj Kothari

Nikunj Kothari posted a personal travel observation about how parenthood changes the tradeoff of red-eye flights. There was not enough AI or product context in the feed to turn this into a technical takeaway.

Nikunj Kothari 发了一条关于有孩子后如何看待 red-eye flights 的个人观察。Feed 中没有足够 AI 或产品上下文，无法转化为技术 takeaway。

Links: https://x.com/nikunj/status/2053685737716089020

链接: https://x.com/nikunj/status/2053685737716089020

### Peter Steinberger

Peter Steinberger kept showing what agent-native developer workflow looks like in practice. He challenged Codex to end-to-end test OpenClaw chat completion improvements using OpenClaw itself, used a side conversation to ask questions while the work ran, and described Birdclaw as a Twitter archive that lets him ask Codex about old favorites and bookmarks. He also built a browser into RepoBar so issues, PRs, SHAs, and workflows can carry context directly into his work.

Peter Steinberger 继续展示 agent-native developer workflow 的实际形态。他让 Codex 用 OpenClaw 自己来端到端测试 OpenClaw chat completion endpoint 的改进，工作运行时又用 side conversation 继续提问；他还描述 Birdclaw 可以保存完整 Twitter archive，让他问 Codex 过去收藏或 bookmark 过的怪帖。他也在 RepoBar 里内置 browser，让 issues、PRs、SHAs 和 workflows 可以把上下文直接带入工作。

Links: https://x.com/steipete/status/2053744332675408151, https://x.com/steipete/status/2053737275268177980, https://x.com/steipete/status/2053717468623872230

链接: https://x.com/steipete/status/2053744332675408151, https://x.com/steipete/status/2053737275268177980, https://x.com/steipete/status/2053717468623872230

### Dan Shipper

Dan Shipper shared a weekend Codex-native project: connect a MIDI keyboard, ask Codex to make a watcher script plus a small web app showing played chords, then ask for exercises and improvement guidance. His point is the speed of useful personal software: a niche learning loop that would normally be too small to justify building can now appear in a few minutes. He also noted strong A/B test uplifts from a new social and YouTube hire.

Dan Shipper 分享了一个 Codex-native weekend hack：买线连接 MIDI keyboard，让 Codex 做 watcher script 和小 web app 来显示正在弹的 chords，再让它给练习和改进建议。他要表达的是 personal software 的速度：过去太小众、不值得专门开发的学习闭环，现在几分钟就能出现。他还提到新加入的 social 和 YouTube 同事找到了很强的 A/B test uplift。

Links: https://x.com/danshipper/status/2053551046299959760, https://x.com/danshipper/status/2053580741515051114, https://x.com/danshipper/status/2053628011233095875

链接: https://x.com/danshipper/status/2053551046299959760, https://x.com/danshipper/status/2053580741515051114, https://x.com/danshipper/status/2053628011233095875

### Sam Altman

Sam Altman joked about naming and reacted to an external post. There was not enough substantive context in the feed to infer a product update, but the engagement around model naming shows how much attention the AI audience still routes through tiny signals from lab leaders.

Sam Altman 调侃了下一代模型命名，并回应了一条外部帖子。Feed 中没有足够实质上下文判断产品更新，但围绕模型命名的互动说明，AI 受众仍然会从 lab leaders 的细微信号里分配大量注意力。

Links: https://x.com/sama/status/2053572868936761350, https://x.com/sama/status/2053566155571560868

链接: https://x.com/sama/status/2053572868936761350, https://x.com/sama/status/2053566155571560868

## Podcast
### No Priors: Baseten CEO Tuhin Srivastava on the AI Inference Crunch, Custom Models, and Building the Inference Cloud

The Takeaway: Baseten is betting that inference becomes the defining AI infrastructure market as applications, enterprises, and custom models all scale together.

核心 takeaway：Baseten 赌的是，随着 applications、enterprises 和 custom models 同时扩张，inference 会成为 AI infrastructure 的决定性市场。

Tuhin Srivastava says Baseten has grown 30x in a year because more companies now understand that AI can be embedded everywhere. Open-source models have crossed an important capability threshold, post-training and reinforcement techniques are becoming mainstream, and customers increasingly want to own more of their inference stack. In his view, the application layer will survive because differentiated user signals often live inside workflows rather than inside generic models.

Tuhin Srivastava 说 Baseten 一年增长 30 倍，是因为越来越多公司开始理解 AI 可以被嵌入任何地方。Open-source models 已经跨过关键能力门槛，post-training 和 reinforcement techniques 正在主流化，客户也越来越希望拥有更多自己的 inference stack。在他看来，application layer 会继续存在，因为差异化 user signals 往往存在于 workflow 中，而不是通用模型本身。

The strongest enterprise point is that adoption is still early. Srivastava says much of today's inference volume comes from AI-native application companies, while the broader enterprise market is still coming online. Serving companies like Abridge, OpenEvidence, Decagon, Gamma, and Clay gives Baseten a translated view of what enterprises will require: data retention, deployment patterns, latency targets, GPU needs, transparency expectations, and domain-specific model behavior.

最强的 enterprise 观点是：adoption 仍然很早。Srivastava 说，今天大量 inference volume 来自 AI-native application companies，而更广泛的 enterprise market 还在上线早期。服务 Abridge、OpenEvidence、Decagon、Gamma、Clay 等公司，让 Baseten 能提前看到 enterprise 会要求什么：data retention、deployment patterns、latency targets、GPU needs、transparency expectations，以及 domain-specific model behavior。

He also argues that customers start with capability, then optimize cost. The frontier mix now includes closed models, Chinese open models, speech models, and specialized systems, and serious users simply want the best model for the task. That pushes infrastructure providers toward reliable serving, model flexibility, security boundaries, and the ability to support a long tail of custom models as AI moves from demos into production workloads.

他还认为，客户通常先看 capability，再优化 cost。今天的 frontier mix 包括 closed models、中国开源模型、speech models 和 specialized systems，严肃用户只想为具体任务选择最好的模型。这会把 infrastructure providers 推向可靠 serving、模型灵活性、安全边界，以及支持大量 custom models 的能力，因为 AI 正在从 demo 进入 production workloads。

Link: https://www.youtube.com/watch?v=XAbKflCncDo

链接: https://www.youtube.com/watch?v=XAbKflCncDo

## Blog
### Anthropic Engineering: Scaling Managed Agents: Decoupling the brain from the hands

Anthropic Engineering described the architecture behind Claude Managed Agents as a move away from single-container "pet" agents toward decoupled, replaceable components. The core abstractions are a session, which stores the durable append-only log; a harness, which runs the agent loop and routes tool calls; and a sandbox, where generated code runs and files are edited. Each piece can fail or be swapped without forcing the others to survive.

Anthropic Engineering 介绍了 Claude Managed Agents 背后的架构：从单容器的 "pet" agents，转向解耦、可替换的组件。核心抽象包括 session，用来存储 durable append-only log；harness，用来运行 agent loop 并路由 tool calls；sandbox，用来运行生成代码和编辑文件。每一部分都可以失败或替换，而不要求其他部分一起存活。

The practical lesson is that long-running agents need operating-system-like boundaries. When the harness and sandbox lived in one container, container failure could lose the session, debugging was hard, and connecting to customer infrastructure required awkward network assumptions. By moving the harness outside the container and treating the sandbox as a tool, Anthropic can restart failed sandboxes, reboot harnesses from the session log, and let agents recover through explicit interfaces.

实际经验是，长任务 agents 需要类似操作系统的边界。过去 harness 和 sandbox 在同一个 container 中，container failure 可能导致 session 丢失，debugging 很困难，连接客户 infrastructure 也需要笨重的网络假设。把 harness 移出 container、把 sandbox 当作 tool 后，Anthropic 可以重启失败的 sandboxes，从 session log 中 reboot harnesses，并让 agents 通过明确接口恢复。

The security boundary is just as important. Anthropic keeps credentials away from the sandbox where generated code runs. Repository tokens can be wired into the local git remote during initialization, while MCP OAuth tokens live in a vault and are accessed through a proxy. The agent can use tools without seeing the underlying secrets. That matters because stronger models weaken assumptions about what a limited token or prompt instruction can prevent.

安全边界同样重要。Anthropic 让 credentials 远离运行生成代码的 sandbox。Repository tokens 可以在初始化时写入 local git remote，而 MCP OAuth tokens 存在 vault 中，并通过 proxy 访问。Agent 可以使用工具，但看不到底层 secrets。模型越强，越不能依赖“有限 token 或 prompt instruction 足以阻止危险行为”这类假设。

The final design idea is that the session is not the context window. Instead of irreversibly deciding what to compact or discard, Managed Agents keep a durable event stream that the harness can query, slice, and transform before feeding selected context back to Claude. This makes context management an evolvable harness behavior while preserving the raw session history as a recoverable source of truth.

最后一个设计思想是：session 不是 context window。Managed Agents 不把 context 处理变成不可逆的 compact 或 discard 决策，而是保留 durable event stream，让 harness 可以 query、slice、transform 后再把选中的上下文喂给 Claude。这让 context management 成为可演进的 harness behavior，同时保留原始 session history 作为可恢复的 source of truth。

Link: https://www.anthropic.com/engineering/managed-agents

链接: https://www.anthropic.com/engineering/managed-agents

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
