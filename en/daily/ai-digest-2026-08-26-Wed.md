[English](./ai-digest-2026-08-26-Wed.md) | [中文](../../zh/daily/ai-digest-2026-08-26-Wed.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-08-26-Wed.md)

---

# AI Builders Digest

## Reader's Briefing

**1. Claude memory goes cross-surface and user-controlled.** Claude announced that memory is now unified across chat and Claude Cowork, on by default on Free, Pro, and Max plans, and saved as a list of editable topics in Settings; sensitive topics such as health and religious beliefs stay out of memory unless you switch them on. Claude Code's Boris Cherny calls the update "simpler and more powerful," and Anthropic's Cat Wu, who works on Claude Code and Cowork, says telling Claude to remember something once now carries that context across surfaces.

**2. Search's next act is built for agents, not humans.** Former Twitter CEO Parag Agrawal, now founder of Parallel Web Systems, argues that "human click data is a bug" and that search for agents should rely on agent feedback rather than human clicks, betting agents will drive a thousand times more search than humans ever have. Parallel just announced a Google Cloud partnership as a search and grounding provider for enterprise agent APIs, shipped TurboNow, which Agrawal calls the fastest, highest-quality agentic web search on the market, and is designing Shapley-value-based payments that reward content owners for the value their data creates.

**3. The agent developer stack gets faster, more secure, and more collaborative.** Vercel CEO Guillermo Rauch introduced Run SDK for secure eval of dynamic Code Mode execution in a lightweight QuickJS context, and announced Vercel Connect is GA, letting developers create MCP clients that query services like Notion on behalf of authenticated users. Google Labs opened a waitlist for Play with Putty, a collaborative vibe coding tool for building tools and websites together in real time. OpenAI's Thibault Sottiaux highlighted a new plan for teams and small companies with no 5-hour limits, while Swyx warns to avoid Codex's "locked use" capabilities for now because unstable macOS features locked him out of his keychain twice this week.

**4. Applied AI companies have a window in the enterprise.** Box CEO Aaron Levie argues there is a wide gap between AI models and the underlying workflows of an enterprise, leaving "a ton of opportunity" for applied AI companies: "The world doesn't just want raw models and agents; it wants problems resolved and outcomes achieved." Meta's Madhu Guru continues his evals series with the Eval Roadmap Problem, arguing evals fail when teams treat them as static artifacts and need a roadmap that evolves with usage, from short-context, single-turn QA toward long-context, multi-turn, proactive agents.

**5. AI's beneficiaries and optics are being renegotiated.** SPC general partner Aditya Agarwal says it's unsurprising the public hates datacenter buildout, since AI today mainly helps knowledge workers and the highest-paid segments, and expects the big change when AI finds cures for diseases that ail everyone; he criticizes the industry's fear-mongering. Sam Altman teased "we made a chip and it is fast," and Peter Yang open-sourced /fuck-cancer, an AI skill that helps patients and caregivers navigate cancer diagnosis and treatment with a living, shareable brief.

## X / Twitter

### Claude
Claude announced that memory now works across chat and Claude Cowork, and users decide what's in it: hand Cowork a task and it starts from what Claude already knows from your chats, such as the project you talked through, your manager's preferences, or the client from last quarter. Everything Claude remembers is saved as a list of topics in Settings where each one can be read, edited, or deleted; memory updates on its own as you chat, and you can also say "remember this" to save something specific. Memory is on by default on Free, Pro, and Max plans, and topics some consider sensitive, like health or religious beliefs, stay out of memory unless turned on in Settings.

- [Claude on unified memory](https://x.com/claudeai/status/2092299704864284888)
- [Claude on managing memory in Settings](https://x.com/claudeai/status/2092299707653439497)
- [Claude on sensitive topics and defaults](https://x.com/claudeai/status/2092299710002319742)

### Cat Wu: Claude Code and Cowork at Anthropic
Wu announced that, thanks to user feedback, memory is now unified across Chat and Cowork: "you can tell Claude to remember something once and it'll have that context across surfaces!"

- [Cat Wu on unified memory](https://x.com/_catwu/status/2092337156455051345)

### Boris Cherny: Claude Code at Anthropic
Cherny, who works on Claude Code at Anthropic, welcomed the memory update with a one-liner: "A small improvement: memory is now simpler and more powerful."

- [Boris Cherny on Claude memory](https://x.com/bcherny/status/2092355642363453943)

### Thibault Sottiaux: Codex & ChatGPT at OpenAI
Sottiaux highlighted a new plan "similar to the Pro $100 plan but designed for teams and small companies." It includes all ChatGPT, ChatGPT Work, and Codex features, connects to Google Workspace, Slack, GitHub, Microsoft 365, and more, offers a secure workspace with SAML, SSO, and MFA, centralized billing and administration, usage analytics and spend controls, and notably "no 5h limits."

- [Thibault Sottiaux on the team plan](https://x.com/thsottiaux/status/2092345330272780499)

### Sam Altman
Altman teased the company's chip effort in one line: "we made a chip and it is fast."

- [Sam Altman on the chip](https://x.com/sama/status/2092339694210040187)

### Guillermo Rauch: CEO of Vercel
Rauch announced Run SDK, which brings "secure eval for dynamic Code Mode execution": when agents write code you don't always need a full sandbox, and you can run their code in a lightweight QuickJS secure context that is faster and more cost-efficient (npm i run). He also celebrated Vercel Connect going GA, calling secure connectivity to services and data "the hardest problem in building agents": run e.g. vercel connect create notion, then get an MCP client you can query on behalf of the authenticated user.

- [Guillermo Rauch on Run SDK](https://x.com/rauchg/status/2092382653161107534)
- [Guillermo Rauch on Vercel Connect GA](https://x.com/rauchg/status/2092352411839193234)

### Google Labs
Google Labs opened the waitlist for "Play with Putty," a collaborative vibe coding tool that lets you build tools and websites together in real time. It is currently US only, ages 18+.

- [Google Labs on Play with Putty](https://x.com/GoogleLabs/status/2092293667688173593)

### Aaron Levie: CEO of Box
Levie shares a post on what applied AI strategy looks like at scale, arguing there is a wide gap between AI models and the underlying workflows of an enterprise, which leaves "a ton of opportunity" for applied AI companies: "The world doesn't just want raw models and agents; it wants problems resolved and outcomes achieved." Winning, he says, requires understanding context, driving change management, having a harness that routes to various models, connecting to the critical business systems in the vertical, solving the UX of connecting users to agents in a workflow, and understanding evals. That is "a ton of value that goes beyond just the model intelligence itself," and there is a window of opportunity right now.

- [Aaron Levie on applied AI strategy at scale](https://x.com/levie/status/2092466424694649066)

### Madhu Guru: Senior Director of AI at Meta
In part nine of his "How to build great evals" series, Guru argues most evals fail because teams treat them as static artifacts while user expectations and behaviors evolve. Using a financial research agent as an example, he maps how usage moves from summarizing a 5-page earnings report to monitoring a portfolio and alerting on material changes, and says evals should shift with usage: short-context to long-context, single-turn QA to multi-turn, passage citations to doc and line citations, simple QA to complex synthesis, reactive chat to proactive agent. His practical roadmap: map the dimensions along which usage will evolve, prioritize, mine production traces for shifts, build P0 evals for the next stage of usage, then run them and hill-climb on failure modes.

- [Madhu Guru on the Eval Roadmap Problem](https://x.com/realmadhuguru/status/2092426017118028266)
- [Madhu Guru's full eval series](https://x.com/realmadhuguru/status/2092461206783373758)

### Peter Yang
Yang open-sourced /fuck-cancer, an AI skill that helps patients and caregivers navigate cancer diagnosis and treatment and advocate for themselves. It creates and updates a practical brief with five sections: patient and care-team information, what to do next limited to three specific actions, what we know separating confirmed facts from what remains unclear, medical terms explained in plain English, and a care log of recent updates and decisions. It can save the brief locally as Markdown or update a shareable Google Doc, and uses trusted sources such as the National Cancer Institute and the ClinicalTrials.gov API when research is needed.

- [Peter Yang on /fuck-cancer](https://x.com/petergyang/status/2092249012913258946)
- [Peter Yang on the example brief](https://x.com/petergyang/status/2092311110871617915)

### Nikunj Kothari: partner at FPV Ventures
Kothari introduced the "El Niño situation monitor" (elneenyo.com), built with ChatGPT Codex and Railway: real-time updates, news and what's happening straight from government sources, impact per region and costs, historical records, and a glossary and FAQ on all the different readings. He says the project was originally inspired by The Stalwart's Odd Lots episode.

- [Nikunj Kothari on the El Niño monitor](https://x.com/nikunj/status/2092383834470002922)
- [Nikunj Kothari on how it was built](https://x.com/nikunj/status/2092384774459674957)

### Aditya Agarwal: General Partner at SPC
Agarwal argues it's "totally unsurprising" that the general population hates datacenter buildout, because AI today primarily helps knowledge workers and the highest-paid segments of the country. He suspects the big change will happen when AI can find cures for diseases that ail everyone, and criticizes the industry's fear-mongering: "Instead of painting a positive version of the future, we have instead talked about all the reasons why we should be afraid."

- [Aditya Agarwal on AI's beneficiaries and optics](https://x.com/adityaag/status/2092290497826173186)

### Swyx
Swyx warns people to avoid Codex's "locked use" capabilities right now: he says the feature relies on unstable macOS features and completely locked him out of his macOS keychain twice this week, pointing to an Apple developer forums thread that acknowledges it as a "known bug." He notes it would be nice to do everything in the cloud, but "cloud isn't there yet."

- [Swyx on Codex locked use](https://x.com/swyx/status/2092492963435946494)

## Podcast

### Training Data: Parallel's Parag Agrawal: Building a New Web for AI Agents

The Takeaway: Search is being rebuilt for agents rather than humans, and the winning design replaces human click data with agent feedback, then reworks the web's economics so content owners get paid for the value their data creates.

Parag Agrawal, the former Twitter CEO who now runs Parallel Web Systems, is betting that agents will drive a thousand times more search than humans ever have, and that the technologies and business models built for human eyeballs will not survive that shift. "Our view at Parallel is that human click data is a bug," he says: search for agents should rely on agent feedback, not human feedback, and models are now good enough at compressing information that research from building models can be applied directly to search indexing and ranking.

Parallel launched with a search agent rather than a search engine, competing with outsourced human data curation so it could build its index incrementally, then shipped TurboNow, which Agrawal says cut a three-second response budget to 200 milliseconds and is "the fastest, highest quality agentic web search on the market by a lot." The company also announced it is working with Google Cloud as a search and grounding provider for enterprise agent APIs on GCP.

The deeper argument is economic. Agrawal believes the ad-supported web cannot monetize agent visits, and the current alternative, fixed-fee licensing deals with model labs, breaks down as inference grows 7x year over year. His proposed fix is differential pricing plus Shapley values: simulate what agent outputs would look like without a given source, estimate its marginal contribution, and pay content owners accordingly, with the math able to deliver "meaningful dollars for a very wide range of content owners" within twelve to twenty-four months. The web itself also shifts from pull to push: background agents will watch everything that changes online and trigger work, so "call me if this happens" becomes the new query. As he tells his team, "If it can be done today, do it."

Source: https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

## Blog

The validated blog feed contained no new qualifying posts for this digest, so there is nothing to summarize this cycle.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
