[English](./ai-digest-2026-06-24-Wed.md) | [中文](../../zh/daily/ai-digest-2026-06-24-Wed.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-06-24-Wed.md)

---

# AI Builders Digest

## Reader's Briefing

- Security is moving from detection to repair. Sam Altman and Thibault Sottiaux both pointed to GPT-5.5-Cyber, Patch The Planet, and Codex Security as a push toward AI systems that fix vulnerabilities rather than only report them.
- Claude Fable 5 is framed less as a chat model and more as a long-horizon teammate. Mike Krieger described delegating multi-hour or overnight work, with verification still acting as the human control loop.
- Agent-native software is becoming self-modifying and context-rich. Krieger's personal media tracker, Box's HTML support, and Vercel's Claude Design flow all point toward apps where agents can create, edit, preview, and ship artifacts directly.
- Evals are becoming an enterprise operating discipline. Aaron Levie argued that model progress, applied agent improvements, and real enterprise automation all depend on companies understanding workflows and measuring agent performance inside them.
- Builders are still wrestling with interfaces and workflow abstractions. Peter Yang questioned Claude Code dynamic workflows, Ryo Lu shared a Cursor Compile talk on building with AI, and Krieger argued that chat needs artifacts, mobile handoff, multiplayer, and richer verification loops.

## X / Twitter

Swyx argued that the most interesting strategic shape in AI may be a combined model lab and neocloud. His read on SpaceX was that compute deals can effectively pay back a major part of a Cursor investment, creating a go-to-market loop no pure model lab or pure GPU cloud can easily copy. The important caveat is supply planning: the strategy works only if the company can handle both outcomes, in-house training going very well or not going well.
https://x.com/swyx/status/2069301071965741388

OpenAI Codex builder Thibault Sottiaux framed the day around cyber defense acceleration: Codex Security, Patch The Planet, and the full version of GPT-5.5-Cyber. He also asked the Codex community what they were building that night, which fits the broader signal that Codex is being positioned as both a security repair system and an everyday building surface.
https://x.com/thsottiaux/status/2069152290326630518
https://x.com/thsottiaux/status/2069267387464274366

Peter Yang surfaced two workflow questions for AI builders. First, he said Claude Code's "dynamic workflow" concept still was not clear to him from the public explanation, which is useful feedback for a feature meant to organize long-running agent work. Second, he wants to interview someone who can use Codex or Claude Code to build fun pixel or Three.js games, a sign that agent coding content is moving from productivity demos into more creative, inspectable software.
https://x.com/petergyang/status/2069267139576693028
https://x.com/petergyang/status/2069118077313425840

Vercel CEO Guillermo Rauch highlighted two product-surface moves. Claude Design can now go to Vercel in one click, tightening the path from AI-generated design to deployable web artifact. Vercel also added WebSocket and socket.io support from CDN to Fluid, which matters for realtime agent and collaboration products that need deployment infrastructure without leaving the Vercel workflow.
https://x.com/rauchg/status/2069219190834127276
https://x.com/rauchg/status/2069109057433035171

Box CEO Aaron Levie made evals the center of the agent story. He argued that model progress, open-weight post-training for specific domains, applied agent improvements, and enterprise deployments that actually augment work all depend on evals. His practical point is that enterprises will need to understand their own workflows and measure how well agents participate in them before they can drive real automation.
https://x.com/levie/status/2069228335255949775

Levie also said Box now lets users preview, edit, manage versions, and securely share HTML-based content. The product read is simple: if agents are producing more HTML artifacts, enterprise content systems need to treat those artifacts as first-class business documents rather than odd files sitting outside governance.
https://x.com/levie/status/2069140445205348432

Cursor designer Ryo Lu shared his Cursor Compile talk on how people build in the age of AI and what does not change. The tweet itself is mostly a pointer, but the signal is consistent with recent Cursor design work: AI changes the speed and shape of making software, while taste, intent, and judgment remain the durable human layer.
https://x.com/ryolu_/status/2069218497272717661
https://x.com/ryolu_/status/2069218604449771989

Zara Zhang published an 11-minute walkthrough of her Frontend Slides skill, including a complete Claude Code demo, how she created the skill, how others can make their own skills, publishing tips, and lessons learned. It is a useful builder artifact because it turns a popular skill into a replicable pattern: package the workflow, explain the design decisions, then show others how to extend it.
https://x.com/zarazhangrui/status/2069311440692072481
https://x.com/zarazhangrui/status/2069311581985665385

Peter Steinberger posted two compact signals around agent culture. "Patch the Planet" aligned with the OpenAI security push, while his note about shared office spaces was more cultural than technical. The work-relevant thread is that agent builders are increasingly talking about software repair, deployment, and collaboration as social systems, not just local coding loops.
https://x.com/steipete/status/2069132838356840857
https://x.com/steipete/status/2069254835686576316

Sam Altman said OpenAI wants to help companies be secure in partnership with the US government and the security ecosystem. He pointed to GPT-5.5-Cyber's CyberGym performance and described Patch The Planet plus Codex Security as tools meant to solve security problems rather than merely find them. That is a clear positioning shift from AI as scanner to AI as remediation teammate.
https://x.com/sama/status/2069121360744550796

## Podcast

### AI & I by Every: How Anthropic Uses Claude Fable 5 With Mike Krieger

The Takeaway: Mike Krieger's clearest message is that Claude Fable 5 changes the unit of work. The model is not just better at turns; it is good enough to accept a complex goal, keep state over hours, recover from blocked services, and come back with something that can be reviewed.

Krieger, head of Anthropic Labs and cofounder of Instagram, said Fable forced him to rethink prompting, task decomposition, and the time horizon of AI work. Instead of starting with small feature prompts, he now spends more time on intent and architecture, then lets long-running Claude Code sessions execute chunks of work in parallel. His most vivid description was that the model feels "like a teammate that I can delegate a lot of work to."

The biggest workflow lesson is verification. Krieger said every serious AI-generated pull request should come with artifacts that let humans check it quickly: screenshot galleries, video captures, real staging flows, regression paths, and robust mocks when real services are hard to spin up. He argued that humans still need to stand behind production work, even if Claude wrote much of it.

The product implications are broader than coding. Krieger showed a personal media tracker where Claude could add items, research sequels, modify the app from inside itself, preview changes, and keep improving the product after the weekend. His point is that agent-native software should expose actions to the agent and eventually let the agent modify the software itself.

He also described new organizational patterns inside Anthropic: each human still owns a product area, but works with many Claude sessions, dashboards of pending PRs, and follow-up conversations to understand tradeoffs before merging. Software engineering is not over in his view. It is being pulled upward into ownership, product judgment, architecture, production understanding, and verification.

The most forward-looking part was dynamic workflows. Krieger described using them to port a complex Python project to TypeScript and Bun over a weekend: understand the system, write a spec, translate module by module, test incrementally, run adversarial checks, and document what could not be ported. Chat may remain the composition interface, but the work increasingly needs code-expressed workflows, mobile handoff, multiplayer context, and progressive disclosure of complexity.
https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

## Blog

No new blog posts in today's feed.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
