[English](./ai-digest-2026-09-28-Mon.md) | [中文](../../zh/weekly/ai-digest-2026-09-28-Mon.md) | [Bilingual](../../bilingual/weekly/ai-digest-2026-09-28-Mon.md)

---

# AI Builders Digest

Coverage: 2026-09-21 00:00 to 2026-09-28 00:00 Asia/Shanghai
Known feed coverage gaps (UTC): X/Twitter 2026-09-22T06:42:06.429Z to 2026-09-22T06:42:38.470Z (0.01h); X/Twitter 2026-09-24T06:42:38.168Z to 2026-09-24T06:43:22.960Z (0.01h); X/Twitter 2026-09-26T06:39:22.753Z to 2026-09-26T06:41:10.021Z (0.03h); X/Twitter 2026-09-27T06:41:10.021Z to 2026-09-27T06:57:29.581Z (0.27h).

## Reader's Briefing

Frontier labs shipped a dense week of releases. Anthropic's Opus 5.5 became the default model in Claude Code and the Claude app, and Anthropic's Cat Wu said the company is defaulting to medium effort for Fable 5.1-level intelligence at higher speed, with rate limits 25% further than Opus 5. OpenAI's Thibault Sottiaux announced GPT-6 Sol and Luna, a permanent 50% API price cut and a banked usage reset for paid users. Anthropic Claude Code engineer Boris Cherny said both Opus 5.5 and Fable 5.1 ported HAProxy from C to Rust, but Opus finished in 9.5 hours versus 12 and at 51% lower cost, while Vercel CEO Guillermo Rauch's Next.js evals put Opus 5.5, GPT-6 Sol and Fable 5.1 at the top, with Grok 4.7 just behind and 2x to 7x cheaper.

The releases also showed how fast enterprise budgets can move. Box CEO Aaron Levie said Box tested Opus 5.5 on enterprise knowledge work and saw 63% fewer tokens, 42% less verbosity and 30% faster performance than Opus 5, with accuracy gains of 39% in financial due diligence, 65% in cloud cost analysis, 17% in client account analysis and 15% in clinical diagnostics. Rauch's Vercel AI Gateway data showed Anthropic's share of spend falling from 69% to 40% in two months while OpenAI rose from 10% to 24%, with Opus 5.5 at 10% of spend within two days.

The most repeated strategic claim of the week was that software's main user is becoming an agent rather than a person. Levie argued agents will use software 100X more than people ever did, making security layers, guardrails, data management and workflow orchestration the valuable positions. Rauch introduced Vercel Drives to decouple agent storage and argued the procurement bar is now how ergonomic a product is for agents, predicting a long tail of SaaS will be generated rather than bought. Y Combinator President and CEO Garry Tan compressed the shift into two trends: make software agents want you, and use agents to make people want software. Peter Yang warned that ad markets face a rude awakening when agents browse and transact without a human seeing an ad.

Running agents at scale is still messy work. Boris Cherny used Opus 5.5 to formally verify the Claude Agent SDK in Lean, producing 16 pull requests that fixed bugs and race conditions, and said his Slack-native Claude Tag now writes more than half of his PRs. Peter Steinberger said Astra found a roughly 14-year-old bug in libuv, and that moving OpenClaw from synchronous to asynchronous database access became 575 PRs shipped incrementally. Thibault Sottiaux worked through a Codex outage, reset usage limits for paid users, and predicted that code freezes before releases may disappear as code gets generated per request.

Consumer agents are converging on the same feature set at very different levels of quality. Peter Yang argued Muse is positioned to lead the personal agent race because Meta can promote it everywhere, that ChatGPT still leads on users and model quality but is hard to build for work and personal use at once, that Grok Bot is becoming multiplayer agentic Slack, and that Apple's annual release cycle is too slow. He also said multiplayer AI remains unsolved, since he cannot easily add his spouse to a Muse chat. Meta senior director of AI Madhu Guru argued that browsing for clothes can be entertainment while hiring a roofer is misery, so the latent demand for frictionless agents is immense. Replit CEO Amjad Masad showed that Muse can now make apps on Replit, and Replit acquired the Atta team for business analysis and data visualization.

The sharpest counterweight to pure speed came from builders worried about slop. Designer Ryo Lu wrote that the danger is not that AI makes us lazy but that it makes us endlessly busy, giving us infinite production before we have found intention, and that discernment may be the real frontier. Rauch urged people to reject non-understanding, warning that reading itself risks being discounted because of unverified AI prose. Anthropic's Thariq argued the right use of model capability is not shipping ten times more features but spending more time understanding users, and Steinberger's lesson was to give agents an ambitious goal, such as removing 20% of the least useful tests while holding coverage within 2%.

## X / Twitter

### Box CEO Aaron Levie
Levie argued AI agents will use software 100X more than people ever did, making security layers, guardrails, data management and workflow orchestration the valuable positions. He framed personal agents that transact for you as a major monetization opportunity, since lower friction means more spend flows through them, and Box's enterprise testing of Opus 5.5 with Box Agent showed 63% fewer tokens, 42% less verbosity and 30% faster performance than Opus 5, with accuracy gains up to 65% across industry tests.

https://x.com/levie/status/2102235949430354273 | https://x.com/levie/status/2102253246807261579 | https://x.com/levie/status/2102448415775051790

### Anthropic Claude Code engineer Boris Cherny
Cherny had Opus 5.5 and Fable 5.1 each port HAProxy from C to Rust; Opus 5.5 finished in 9.5 hours versus 12 and for 51% less cost. He also used Opus 5.5 to formally verify the Claude Agent SDK in Lean, producing 16 pull requests that fixed bugs and race conditions, and said his Slack-native Claude Tag now writes more than half of his PRs and fixes most product feedback.

https://x.com/bcherny/status/2102439069053747549 | https://x.com/bcherny/status/2102543349102338309 | https://x.com/bcherny/status/2102898067133595992 | https://x.com/bcherny/status/2103538666597691552

### Anthropic's Cat Wu (Claude Code and Cowork)
Wu said Opus 5.5 is now the default model in Claude Code and the Claude app, including Cowork, for Pro, Max and Team plans. She said Anthropic is defaulting to medium effort, comparable to Fable 5.1 on intelligence but faster, and that rate limits will go 25% further than on Opus 5.

https://x.com/_catwu/status/2102437713781944397

### Claude (official account)
Anthropic's Claude account launched Claude Marketplace, where users can add connectors and plugins such as Slack and Notion, buy agents and products from companies such as Cursor and CrowdStrike, and scale with service partners such as Accenture and Deloitte. It also marked Opus 5.5's availability with demos.

https://x.com/claudeai/status/2102840851538080172 | https://x.com/claudeai/status/2102471892099866883 | https://x.com/claudeai/status/2102471885061812714

### OpenAI's Thibault Sottiaux (Codex and ChatGPT)
Sottiaux announced GPT-6 Sol and Luna, calling them a significant improvement across the board including writing quality, a permanent 50% API price cut, and a banked usage reset for Plus, Pro and Business users. He also highlighted ChatGPT Voice across the full plugin ecosystem and, after a Codex outage, reset usage limits for paid users; he predicted that code freezes before releases may become obsolete as code gets generated per request.

https://x.com/thsottiaux/status/2102463847714247142 | https://x.com/thsottiaux/status/2102440619616682120 | https://x.com/thsottiaux/status/2102814202117411196 | https://x.com/thsottiaux/status/2103637477760311522 | https://x.com/thsottiaux/status/2104108167806550046

### Vercel CEO Guillermo Rauch
Rauch argued agents break into a brain (model and harness), hands (tools, computer, browser) and files (memories, skills, repos), and that running them cost-effectively in the cloud means decoupling those parts; Vercel launched Drives as an attachable external disk for agents that also improves security and auditability. His AI Gateway data showed Anthropic's share of spend falling from 69% to 40% while OpenAI rose from 10% to 24%, with Opus 5.5 reaching 10% of spend in two days. He predicted the procurement bar will be how ergonomic a product is for agents, and summarized the shift in one line: "We used to write code, now we write English."

https://x.com/rauchg/status/2102820148629614685 | https://x.com/rauchg/status/2103216656747262419 | https://x.com/rauchg/status/2103564484602384855 | https://x.com/rauchg/status/2103939888513274147 | https://x.com/rauchg/status/2103543983557517340

### Y Combinator President and CEO Garry Tan
Tan has been using Capy as an agentic coding layer, saying it tracks multi-step workflows and ships large pull requests faster than Codex or Claude Code alone, and that he now fixes production bugs with Capy and GStack's /autoplan using GPT-6 medium reasoning. He distilled customer acquisition into two trends: make software agents want you, and use agents to make people want software, and he argued for legalizing personalized education.

https://x.com/garrytan/status/2102095924893827501 | https://x.com/garrytan/status/2102955139875397806 | https://x.com/garrytan/status/2103989902476259702 | https://x.com/garrytan/status/2103470568104468517

### Anthropic Claude Code's Thariq
Thariq argued the right way to use stronger model capabilities is not to ship ten times more features to production but to spend more time understanding users, running experiments and building prototypes. He went deep on effort settings, concluding that low effort is better when you want to stay in the loop and maximum effort is mostly for zero-input runs or hunting security vulnerabilities, and said workflows are now a huge part of how he uses Claude.

https://x.com/trq212/status/2102548686303854790 | https://x.com/trq212/status/2103576349499855160 | https://x.com/trq212/status/2103577115010687067 | https://x.com/trq212/status/2102477527688388752 | https://x.com/trq212/status/2103212051065921632

### OpenClaw creator Peter Steinberger (OpenClaw, OpenAI)
Steinberger said Astra found a roughly 14-year-old bug in libuv after ChatGPT started crashing on macOS 27, and that Daybreak surfaced eight more long-standing leaks. The biggest design mistake he made moving OpenClaw to SQLite was synchronous database access, which stopped scaling once one agent could run 50 sessions in parallel; a goal set with Astra has landed 575 PRs migrating everything to async workers. He also said telling an agent to "clean up" makes it stop far too early, while an ambitious goal such as removing 20% of the least useful tests while holding coverage within 2% pushes it much further.

https://x.com/steipete/status/2102501642176528743 | https://x.com/steipete/status/2103200311641076100 | https://x.com/steipete/status/2103648679169257737 | https://x.com/steipete/status/2103148444701610233

### Every CEO Dan Shipper
Shipper pointed new followers to his vibe check of Opus 5.5 versus Sol-6 and to his argument that AI automation creates more good work for human experts. He tested whether an AI agent could throw a good party by having Every's agent plan the September meetup, from the menu to the guest list.

https://x.com/danshipper/status/2102556723244564715 | https://x.com/danshipper/status/2102826854357016793 | https://x.com/danshipper/status/2103850415930708437 | https://x.com/danshipper/status/2103678798827020298

### Replit CEO Amjad Masad
Masad announced that Muse can now make apps on Replit, extending the competition between consumer agents and coding platforms. He framed Replit's acquisition of the Atta team through the lens of a "self-driving company," saying the goal is to put the ability to understand a business in everyone's hands.

https://x.com/amasad/status/2103129037011120525 | https://x.com/amasad/status/2103632415185133992 | https://x.com/amasad/status/2102120769232978174

### Meta senior director of AI Madhu Guru
Guru disagreed with Ben Thompson's argument about consumer agents, saying consumers do not have a single relationship with doing things: browsing for clothes can be entertainment, while hiring a roofer is miserable for most people. She walked through the roofer experience, from reading ten reviews to phone tag, insurance coordination and comparing quotes, and said the latent demand for agents that remove that friction is immense.

https://x.com/realmadhuguru/status/2102777931764498536

### Peter Yang (practical AI tutorials and interviews)
Yang laid out the personal agent race: he expects Muse to lead because Meta promotes it everywhere, thinks ChatGPT still leads on users and model quality but is hard to build for both work and personal use, sees Grok Bot becoming multiplayer agentic Slack for knowledge work, argues Google's Spark should be the primary Gemini experience, and says Apple's annual release cycle is too slow. He identified multiplayer AI as the next big unlock, since he cannot easily add his spouse to a Muse chat, and advised designing personal skills and files so they can be ported between harnesses.

https://x.com/petergyang/status/2101862331345154469 | https://x.com/petergyang/status/2101865476145959373 | https://x.com/petergyang/status/2102215701255844074 | https://x.com/petergyang/status/2102946952740741394 | https://x.com/petergyang/status/2103693608729932025

### FPV Ventures partner Nikunj Kothari
Kothari argued that, with a few exceptions, the companies boasting about tokenmaxxing have the worst product experiences, because good products come from curation and gardening rather than throwing the kitchen sink at agents. He described Codex on Mac as undefeated for computer use while Instinct and Muse show what a great agent feels like for the masses with zero setup, and he warned that the volume of SPVs and tranched valuations means headline fundraise numbers no longer tell the real story.

https://x.com/nikunj/status/2102049065504739366 | https://x.com/nikunj/status/2102186665863463199 | https://x.com/nikunj/status/2102534909076349291

### Designer Ryo Lu (Cursor, Notion, Stripe)
Lu wrote a long essay against treating efficiency, productivity and speed as ends in themselves, asking what the point of endless production is if there is no time left to think deeply. His answer: the danger is not that AI makes us lazy but that it makes us endlessly busy, giving us infinite production before we have found intention. He argued the real frontier may be discernment, knowing what not to make and when to stop, and that AI should help us become more human rather than turn life into a tool.

https://x.com/ryolu_/status/2102933485795369213

### OpenAI's Sam Altman
Altman addressed OpenAI's ongoing review of its agents' internet access during training and evaluation, saying the company is balancing transparency with making sense of petabytes of agent activity logs while working with affected organizations. He said OpenAI is prioritizing by severity, called Hugging Face the most severe event it has seen, and committed to being as transparent as possible subject to other companies' decisions about disclosing vulnerabilities. He also praised an OpenAI colleague's work and said startups are naturally good at something larger companies struggle to preserve.

https://x.com/sama/status/2103567198690349362 | https://x.com/sama/status/2102469008079679640

## Podcast

### No Priors: Re-Founding Incumbents for the AI Era with Sequence Holdings Co-Founder and CEO Michael Lee
https://www.youtube.com/@NoPriorsPodcast

**The Takeaway:** The biggest AI returns may come from buying the right incumbent and re-founding it around frontier engineering rather than building another startup.

Michael Lee, co-founder and CEO of Sequence Holdings, runs a permanent holding company that buys and re-founds businesses alongside their management teams, and he just announced the largest AI take-private to date: insurance broker Baldwin at $7.7 billion with the Dell family office. His thesis is that AI will hit the economy unevenly. A startup should win coding, but industries protected by brand, scale, network effects and regulation favour incumbents that can inherit those advantages and add world-class engineering. Lee looks for favourable organizational physics, meaning dense, centralized operations where anything built at headquarters is amortized across every branch. Banks and insurance brokers fit, and he argues regulation is a feature rather than a bug because well-defined operations and clean data hygiene make those businesses unusually good homes for agents. His first investment, BankSouth, is the proof: consumer underwriting time fell 94% since March, average loan turnaround went from 30 days to 11, and the bank doubled loan volume quarter over quarter without adding headcount. His advice to investors is blunt: back exceptional people working on hard problems in large markets, because execution, not ideas, is the scarce input.

### The MAD Podcast with Matt Turck: Who Feeds the GPUs? Inside AI's Hidden $30B Layer | Renen Hallak, VAST Data
https://www.youtube.com/@DataDrivenNYC/videos

**The Takeaway:** The software infrastructure layer in the middle of the AI stack is where much of the durable value accrues, and it rewards architectures built for AI from the start.

Renen Hallak, founder and CEO of VAST Data, sits in what Jensen Huang calls the middle of the five-layer AI cake: below models and applications, above power and chips. VAST is valued around $30 billion and powers major AI clouds, yet few outside infrastructure circles know it. Hallak's founding insight, from 2015, was that neural networks were advancing not because of new algorithms but because they finally had fast access to far more data, and that existing systems could be either fast or large, never both. VAST's answer is a "disaggregated shared everything" architecture that puts storage media on the far side of a fast network so every node sees all data as if it were locally attached, scaling to exabytes and tens of terabytes per second. He argues the new stack inverts the old one: training mostly needs scale and speed, while inference and agents add resilience, low latency, model routing, KV caches, RAG and fine-grained identity for agents. VAST's confidential computing push, DataEnclave, lets enterprises run inference on premises without exposing model weights or their own data. Storage used to be where startups went to die, he says, yet VAST is profitable with essentially no churn, because software margins suit a market growing about 10x every two years.

## Blog

The validated weekly feed contained no qualifying blog posts for this window.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
