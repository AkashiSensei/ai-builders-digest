[English](../../en/weekly/ai-digest-2026-06-29-Mon.md) | [中文](../../zh/weekly/ai-digest-2026-06-29-Mon.md) | [Bilingual](./ai-digest-2026-06-29-Mon.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

AI memory is moving from retrieval into model adaptation. Engram's Dan Biderman and Jessy Lin argue that the bottleneck is not raw intelligence, but whether models can internalize evolving team context instead of rereading it through giant prompts.
AI memory 正在从 retrieval 走向模型适配。Engram 的 Dan Biderman 和 Jessy Lin 认为，真正的瓶颈不是模型够不够聪明，而是模型能不能把不断变化的团队上下文内化，而不是每次都靠巨大 prompt 重新读取。

Enterprise AI may split memory by workspace, not collapse it into one universal personal profile. The Engram discussion points toward team-level and product-level memory, with control boundaries between work, personal, and application contexts.
企业 AI 的 memory 可能会按 workspace 拆分，而不是合并成一个通用个人画像。Engram 的讨论更像是 team-level 和 product-level memory，同时在工作、个人、应用场景之间保留清晰控制边界。

Fine-tuning is being reframed as a live product primitive. Rather than treating pretraining and post-training as one-time phases, Engram describes a world where models keep learning through adapter tuning, supervised fine-tuning, RL, and distillation pipelines.
Fine-tuning 正在被重新定义成实时产品能力。Engram 不把 pretraining 和 post-training 看成一次性阶段，而是描述了一个模型持续学习的世界：adapter tuning、supervised fine-tuning、RL、distillation 都会进入产品工作流。

The economic pitch for learned context is fewer tokens and better behavior on bespoke work. Engram claims deeply learned team context can reduce the need for massive system prompts and repeated retrieval, sometimes by orders of magnitude.
Learned context 的经济价值是更少 token 和更好的定制行为。Engram 认为，模型真正学会团队上下文后，可以减少巨大 system prompt 和重复 retrieval 的需求，在部分场景里带来数量级的 token 节省。

Coding agents are turning intermediate work into collaborative artifacts. Claude Code artifacts make agent sessions shareable as live pages, shifting status updates, PR walkthroughs, incident timelines, and architecture explanations from chat transcripts into persistent team surfaces.
Coding agents 正在把中间工作变成可协作的 artifacts。Claude Code artifacts 能把 agent session 发布成 live pages，让状态同步、PR walkthrough、incident timeline 和架构解释从 chat transcript 变成团队可持续查看的页面。

## X / Twitter

No new X / Twitter builder posts were present in this week's feed.

本周 feed 中没有新的 X / Twitter builder posts。

## Podcast

Training Data: Memory and Continual Learning: Engram's Dan Biderman and Jessy Lin

The Takeaway: Engram's bet is that AI memory will not be solved by stuffing more context into prompts. The more durable path is teaching models to internalize what matters about a team, product, or workflow.

The Takeaway: Engram 的赌注是，AI memory 不能只靠把更多上下文塞进 prompt 来解决。更长期的路线，是让模型真正内化一个团队、产品或 workflow 中重要的东西。

Dan Biderman and Jessy Lin, cofounders of Engram, describe the company as working on memory and continual learning for models that are not just queried against a workspace, but trained to understand it. Their core claim is refreshingly specific: today's bottleneck is "not really raw intelligence," but understanding new and evolving context. In a company, that means learning initiatives, hiring practices, tools, priorities, and tacit ways of working the way a long-tenured employee would.

Engram 联合创始人 Dan Biderman 和 Jessy Lin 把公司定位在 memory 和 continual learning：模型不只是查询 workspace，而是被训练到真正理解 workspace。他们最核心的判断很具体：今天的瓶颈 "not really raw intelligence"，而是理解新的、不断变化的上下文。放到公司里，这意味着模型要学会项目方向、招聘流程、工具、优先级，以及团队隐性的工作方式，像一个在公司待了很久的员工一样。

Their product philosophy is not anti-RAG or anti-tooling. External memory still matters. The sharper distinction is what should stay external and what should be internalized into weights. Engram trains per-team models inside workspaces, using approaches such as adapter fine-tuning, LoRAs, supervised fine-tuning, RL, and on-policy distillation. The goal is to turn documents and interactions into training signal, not just context-window material.

这套产品哲学并不是反 RAG，也不是反工具。外部 memory 仍然重要。更关键的问题是：哪些知识应该留在外部，哪些应该被内化到 weights 里。Engram 会在 workspace 内训练 per-team models，方法包括 adapter fine-tuning、LoRA、supervised fine-tuning、RL 和 on-policy distillation。目标是把文档和交互变成训练信号，而不只是 context window 里的材料。

The economic argument is the most concrete part. Jessy Lin says learned context can avoid "monstrous system prompts" and, in some cases, lead to "100x fewer tokens" because organization-specific knowledge is often implicit across many documents and conversations. Instead of asking a frontier model to scan 100,000 tokens to infer a company's operating style, a tuned model may answer from internalized context in a much smaller budget.

最具体的是经济账。Jessy Lin 说，learned context 可以避免 "monstrous system prompts"，在某些场景里甚至带来 "100x fewer tokens"，因为组织特定知识往往隐含在大量文档和对话中。与其让 frontier model 每次扫描 100,000 tokens 来推断公司的工作方式，不如让 tuned model 从内化上下文里用更小预算回答。

There are real constraints. Engram needs white-box access to weights, which makes open-source models easiest and closed frontier models possible only through partnerships. The founders also resist the idea of one universal memory wallet: personal, work, and product memories may need to stay separated so users can control what a model remembers where.

约束也很现实。Engram 需要 white-box access to weights，所以 open-source models 最容易做，closed frontier models 只能通过合作方式实现。两位创始人也不太认同一个通用 memory wallet 的设想：个人、工作、产品 memory 可能需要分开，这样用户才能控制模型在什么地方记住什么。

https://www.youtube.com/watch?v=aiR7F4jqjXY

## Blog

Claude Blog: Claude Code now supports artifacts

Claude Code artifacts turn an agent session into a live, shareable web page: PR walkthroughs, system explainers, dashboards, release checklists, incident pages, and other visual outputs built from the session's context. The important shift is not just prettier output. It is that Claude Code can use the codebase, connectors, and conversation to create a page teammates can inspect without replaying the whole chat.

Claude Code artifacts 会把 agent session 变成 live, shareable web page：PR walkthrough、system explainer、dashboard、release checklist、incident page，以及其他由 session context 生成的视觉输出。重点不只是输出更好看，而是 Claude Code 可以使用 codebase、connectors 和对话本身，生成一个队友能直接查看的页面，不需要重放整段聊天。

The strongest use case is debugging and coordination. Anthropic describes incident work where Claude Code publishes a timeline, suspect commits, and an error-rate chart, then republishes the same artifact as the investigation progresses. That changes the collaboration surface: instead of asking one engineer to verbally summarize what the agent found, the team can look at the same evolving artifact.

最强的场景是 debugging 和协作。Anthropic 描述了一类 incident 工作流：Claude Code 发布 timeline、suspect commits 和 error-rate chart，然后随着调查进展不断 republish 同一个 artifact。这改变了协作界面：团队不再需要一个工程师口头复述 agent 找到了什么，而是可以一起看同一个持续更新的 artifact。

Artifacts are private to the author by default, can be shared with authenticated teammates or the organization, and include version history. Admins get organization-level controls, retention policies, and compliance visibility. The feature is in beta for Claude Team and Enterprise users from the Claude Code CLI and desktop app, with pages viewable in a browser.

Artifacts 默认只对作者私有，可以分享给已认证的队友或整个组织，并带有 version history。管理员可以配置组织级控制、retention policies 和 compliance visibility。该功能目前面向 Claude Team 和 Enterprise 用户 beta 开放，可从 Claude Code CLI 和 desktop app 使用，页面可在浏览器中查看。

https://claude.com/blog/artifacts-in-claude-code

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
