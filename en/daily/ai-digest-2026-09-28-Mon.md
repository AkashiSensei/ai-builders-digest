[English](./ai-digest-2026-09-28-Mon.md) | [中文](../../zh/daily/ai-digest-2026-09-28-Mon.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-09-28-Mon.md)

---

# AI Builders Digest

## Reader's Briefing

**1. The applied layer is the new center of gravity.** Box founder and CEO Aaron Levie argues that the model wrapper is working because enterprise value lives in the bridge between a model's capability and an actual workflow, not in raw intelligence on its own. The gap is real: connecting other data systems, keeping a human in the loop, absorbing delays, managing change, and coping with legacy systems are all work that a smarter model does not remove. He compares it to cloud infrastructure, where AWS and Azure created trillions of dollars of value and so did Snowflake and Databricks on top of them, and he puts the applied-layer opportunity at roughly a trillion dollars. ([Training Data](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8))

**2. Systems of record have two jobs.** Levie's rule for any company sitting on proprietary data and workflows is to build an agent provably ten or twenty points better at your own product than an off-the-shelf agent, and at the same time go headless, exposing deterministic APIs and MCP endpoints so Claude, ChatGPT, and other agents can call it. Box built an agentic harness over its own file system and search engine that runs several searches, re-ranks results, and reads documents across the hundreds of billions of files its customers store, and BoxLabs is hill-climbing accuracy on hard tasks such as extracting structure from 100-page loan documents from about 70% toward 97%. ([Training Data](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8))

**3. Token subsidies are temporary, and the open-weights paradox is real.** Levie expects providers to face ordinary capitalism once they are public and must fund training runs, while non-economic players such as Meta, SpaceX, China, and NVIDIA could accept 10% inference margins because they are really paying for compute clusters. He subscribes to the Decagon argument that closed labs can keep growing even as open weights also grow: each use case that matures can be peeled off to a cheaper open model, so a blended workload might put half of spend on a frontier model while running ten times as many tokens on an open one. On the model race he calls Fable 5.1 the clear state of the art, says Gemini is disproportionately strong on some Box use cases, and calls the frontier neck and neck. ([Training Data](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8))

**4. Enterprise diffusion will be slower than Silicon Valley expects.** Coding adopted AI unusually fast because code's value is almost entirely represented by text, labs hyper-train on it, its users can debug their own tooling, and the work pays well. Almost no other knowledge work shares those properties: a sales rep is still rate limited by whether a customer replies or has budget, and enterprise data sits in legacy on-premises systems behind access controls that make a simple "connect your GitHub" impossible. Levie expects legal to diffuse next, and bets that in five years 90% of enterprise tokens will be initiated by an agent rather than a person, with users reviewing results. ([Training Data](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8))

**5. Work slop is really a question about trust.** Levie separates the corporate hat from the philosophical one and argues that for most of the world code is a utility, so agent-generated code is not just acceptable but preferable. A strategy deck is different, because it is a proxy for whether the person who sent it can execute; a Stan Druckenmiller column that scanned as fully AI-written did not trigger his usual allergy, which he reads as evidence that the reaction is about trust in the author, not the tool. He calls the next three to five years a messy period for deciding what a person's role and output are actually for. ([Training Data](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8))

**6. Builders are rethinking where the software ends and the agent begins.** Vercel CEO Guillermo Rauch ported his Mini web browser to Rust and Swift, bundling up-to-date Chromium with the cef crate, embedding an agent that talks to his local fx CLI over ACP, and letting it drive the browser through an MCP server, and concludes that native is the future on desktop and in the cloud. Anthropic's Thariq, who works on Claude Code, says his biggest fear is that we eat the productivity gains of agents by simply becoming lazier, while OpenAI's Thibault Sottiaux argues that the pre-release code freeze is fading and future code may be generated online per request under constraints. FirstMark Capital's Matt Turck notes the gap between AI researchers, who believe in neither doom nor runaway acceleration, and non-researchers who hold very certain views. ([Guillermo Rauch](https://x.com/rauchg/status/2104428800134013205), [Thariq](https://x.com/trq212/status/2104273243599405395), [Thibault Sottiaux](https://x.com/thsottiaux/status/2104108167806550046), [Matt Turck](https://x.com/mattturck/status/2104331402385002831))

## X / Twitter

### Thibault Sottiaux: Codex and ChatGPT at OpenAI

Thibault Sottiaux argues that the code freeze before releases is not really a thing anymore, and that in the future code might even be generated online per request according to some constraints.

- [Thibault Sottiaux: the pre-release code freeze is fading](https://x.com/thsottiaux/status/2104108167806550046)

### Peter Yang: Practical AI tutorials and interviews

Peter Yang observes that almost nobody has fond memories of the SaaS or business software they used back in the day, while everyone remembers their favorite games, and argues that games are the software with the longest staying power in our memory. He jokes that LLM models are probably the inverse of that.

- [Peter Yang: games versus LLM models](https://x.com/petergyang/status/2104414495376564517)

### Thariq: Claude Code at Anthropic

Thariq says what he is most afraid of is that we eat the productivity gains of agents by just becoming lazier.

- [Thariq: afraid we just become lazier](https://x.com/trq212/status/2104273243599405395)

### Guillermo Rauch: CEO of Vercel

Guillermo Rauch ported his Mini web browser to Rust and Swift and says it is faster, more secure, and, shockingly, nicer to iterate on than Electron plus Bun. He uses the cef crate to bundle up-to-date Chromium, and his fx acp embeds an agent without bloating the app: the agent talks to his local fx CLI over ACP, and fx can then manage the browser through an MCP server. Ditching Electron gave him Liquid Glass, faster boots, and a more Mac-native feel, and he argues that native is the future both on the desktop and in the cloud, with Vercel's bet on Fluid supporting that shift.

- [Guillermo Rauch: ported his Mini browser to Rust and Swift](https://x.com/rauchg/status/2104428800134013205)

### Aaron Levie: CEO of Box

Aaron Levie thinks through a world where agents make the best or most efficient choice for their users. In markets that benefit from the friction of changing habits, he expects switching costs to fall and competition to rise until some equilibrium is reached between the disruptive alternatives and the incumbents; in markets hurt by friction, he expects agents to unlock activity that was too costly before, with healthcare, travel, local services, and certain information services as likely net beneficiaries. He concludes that a future meaningfully mediated by agents working tirelessly for people and their goals cannot function exactly like today.

- [Aaron Levie: agents and switching costs](https://x.com/levie/status/2104350592290406849)

### Garry Tan: President and CEO of Y Combinator

Garry Tan argues that anyone who thinks they can handle anti-bot work with Chrome DevTools Protocol has not actually hit any real anti-bot.

- [Garry Tan: CDP versus real anti-bot](https://x.com/garrytan/status/2104288345547591747)

### Matt Turck: VC at FirstMark Capital

Matt Turck says it continues to be notable how many AI researchers, who understand how AI actually works, believe in neither AI doom nor massive uncontrollable acceleration, while non-AI researchers with limited knowledge have very definite and certain views on the topic.

- [Matt Turck: who holds certain views on AI](https://x.com/mattturck/status/2104331402385002831)

### Zara Zhang: Builder

Zara Zhang tells people who ask why she keeps posting without monetizing her content that they are missing two things: self-expression is an innate human instinct that requires no justification, and influence is far more valuable than money. She also warns that new technology can be so dazzling and flashy that it blinds us to the ways it is not working, and can make people feel that a failure is their own fault rather than the technology's, because the world is moving so fast and everyone else seems ahead.

- [Zara Zhang: influence is more valuable than money](https://x.com/zarazhangrui/status/2104253882025341231)
- [Zara Zhang: technology can blind us to what is not working](https://x.com/zarazhangrui/status/2104112917264126195)

### Nikunj Kothari: Partner at FPV Ventures

Nikunj Kothari calls Astra absurd, saying that if you give it decently hard, verifiable end-to-end tasks with the right tools, it just flies.

- [Nikunj Kothari: Astra on hard end-to-end tasks](https://x.com/nikunj/status/2104444216017637575)

### Peter Steinberger: OpenClaw and OpenAI

Peter Steinberger says he needs to distribute CI load, and his plan is to let Codex decide which tests actually need to run, drastically cut CI, and run tests hourly.

- [Peter Steinberger: letting Codex decide which tests run](https://x.com/steipete/status/2104305554760114488)

### Dan Shipper: CEO of Every

Dan Shipper offers a one-line observation: an industry built on modeling humans as rational agents panics as humans adopt rational agents.

- [Dan Shipper: rational agents](https://x.com/danshipper/status/2104302924251951553)

## Podcast

### Training Data: Box's Aaron Levie: On Reinventing Yourself in the AI Age and Enterprise Diffusion

The Takeaway: The durable opportunity in AI is not the model but the bridge between a model and a real workflow, and whoever builds that bridge for the enterprise captures value the labs cannot reach.

Aaron Levie has run Box for twenty years, watching enterprises pile up hundreds of billions of unread files. The applied layer, once dismissed as a model wrapper, is now the main event. "There's a lot of gap between the model and the workflow," he says, and closing it means wiring in other data systems, keeping a human in the loop, and modernizing legacy systems. He compares it to cloud infrastructure, which created trillions in value but never did the last mile; Snowflake and Databricks did.

Box's reinvention has two halves. One is an agentic harness over its file system and search engine that runs several searches, re-ranks results, and reads documents, because Box knows how its users pick the relevant file; BoxLabs pushes accuracy on hard tasks like extracting structure from 100-page loan documents from about 70% toward 97%. The other half is going headless, exposing APIs and MCP endpoints so other agents can call Box, which is why Levie now uses Salesforce far more, purely through Claude or ChatGPT. His advice to any system of record: build an agent provably ten or twenty points better at your own product than anything off the shelf, and make it work with everyone else's agent too.

On models, he is unsentimental. Token subsidies cannot survive public markets and training costs, and non-economic players like Meta, SpaceX, China, and NVIDIA could push inference margins toward 10%, shifting more value to applications. He subscribes to the open-weights paradox: closed labs keep growing while open models also grow, because matured use cases get peeled off to cheaper models, splitting spend roughly 50/50 while running ten times the tokens on the open one. Fable 5.1 is, in his view, clearly state of the art, and the frontier is otherwise neck and neck.

Ordinary knowledge work will diffuse slowly. Coding was a special case: its value is almost entirely text, labs hyper-train on it, its users debug their own tooling, and it pays well. A sales rep has none of that, because a sale still depends on the customer. "I would bet, like, 90% of all tokens in the enterprise are things that a user never kicked off," Levie says.

https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

## Blog

The validated feed contained no new qualifying blog posts for this run.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
