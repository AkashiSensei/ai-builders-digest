[English](./ai-digest-2026-09-26-Sat.md) | [中文](../../zh/daily/ai-digest-2026-09-26-Sat.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-09-26-Sat.md)

---

# AI Builders Digest

## Reader's Briefing

**1. Coding agents are being given real ownership of the work.** Boris Cherny, who works on Claude Code at Anthropic, says his internal agent Tag writes more than 50% of his PRs every day, handles close to 100% of his data analysis, and fixes most product feedback and bugs; it is not a regular Slack bot but a proactive, programmable system with memory and access to his connectors, and with Opus 5.5 and Fable 5.1 he says it has strong judgement. Peter Steinberger is moving his OpenClaw stack off synchronous database access because one agent can now run 50 sessions in parallel, and a single goal handed to Astra has already landed 575 PRs toward async workers. ([Boris Cherny](https://x.com/bcherny/status/2103538666597691552), [Peter Steinberger](https://x.com/steipete/status/2103648679169257737))

**2. Anthropic is collapsing its product surface area into one assistant.** Claude Cowork and chat are merging into a single Claude that can take a quick question or a report due at noon and keep working after you close your laptop. The same release adds Claude Docs and Claude Slides and brings Claude Design into ordinary conversations, with everything sharing one link and one review experience. It is rolling out to Pro and Max first over the coming weeks, with Docs, Slides and Design in beta on paid plans and Enterprise admins controlling when they turn on. ([Claude Blog](https://claude.com/blog/cowork-is-now-claude))

**3. The ecosystem is reorganizing around agents as first-class users.** Replit CEO Amjad Masad is bringing on Omar, Amine and the Atta team to put business analysis and data visualization in everyone's hands as Replit pursues the "self-driving company." Vercel CEO Guillermo Rauch says he is helping enterprises such as Klaviyo stand up agentic deployment platforms that connect Claude, Codex and Cursor, wire SSO through Okta or Entra, and then let "everyone cook, securely," and he expects the new procurement bar to be how ergonomic a product is for agents rather than humans, with a long tail of SaaS generated per company instead of bought. He also watched npx skills spread onto READMEs everywhere and concluded: "We used to write code, now we write English." ([Amjad Masad](https://x.com/amasad/status/2103632415185133992), [Guillermo Rauch](https://x.com/rauchg/status/2103564484602384855), [Guillermo Rauch](https://x.com/rauchg/status/2103543983557517340))

**4. Reliability and governance are now part of the product story.** OpenAI's Thibault Sottiaux confirmed that Codex was down, then said the service was back and that usage limits would be reset for all paid users across Codex and ChatGPT work. Sam Altman says an extensive review is ongoing into how OpenAI's agents used internet access during training and evaluation, with summaries published as they go, prioritization by severity, and Hugging Face still the most severe event found. ([Thibault Sottiaux](https://x.com/thsottiaux/status/2103637477760311522), [Thibault Sottiaux](https://x.com/thsottiaux/status/2103620061156290622), [Sam Altman](https://x.com/sama/status/2103567198690349362))

**5. Evals are becoming the gate to enterprise adoption.** Box CEO Aaron Levie argues that you cannot automate what you cannot measure, and that most enterprises have no useful way to see how their non-deterministic agent work is performing, which makes evals mission critical for knowing what is working, broken, changed or worth doing more of. Thariq at Anthropic went deep on the "effort" setting, saying he uses low effort when he wants to stay in the loop and saves max effort for zero-input runs or hunting security vulnerabilities, and published interactive explainers for the benchmarks and demos behind that work. ([Aaron Levie](https://x.com/levie/status/2103629073595728372), [Thariq](https://x.com/trq212/status/2103576349499855160), [Thariq](https://x.com/trq212/status/2103577115010687067))

**6. Capital is concentrating while the incumbents become the frontier.** FirstMark Capital's Matt Turck sees an endless supply of startups but investors chasing the same 10 to 30, a "hyper power law." On No Priors, Sequence Holdings co-founder and CEO Michael Lee explains buying and "refounding" incumbent businesses with a frontier engineering team at roughly one deal per year, and describes the results at BankSouth: average consumer underwriting time down 94% since March, average loan time from 30 days to 11, and Q2 loan volume double Q1 without loosening underwriting standards. ([Matt Turck](https://x.com/mattturck/status/2103550183506337835), [No Priors](https://www.youtube.com/@NoPriorsPodcast))

## X / Twitter

### Boris Cherny: Claude Code at Anthropic

Boris Cherny's internal agent Tag writes more than 50% of his PRs every day, does roughly 100% of his data analysis, and fixes most product feedback and bugs. He stresses that it is not a regular Slack bot: it is proactive, programmable, has memory and access to connectors, and with Opus 5.5 and Fable 5.1 he finds it has strong judgement. His example prompts include asking Claude to react with a check mark when a thread is resolved, to reproduce every bug in a channel end to end and open a fix PR for review, to brainstorm about 100 hypotheses for a strange data pattern and test them with a workflow that spends around 10 million tokens, and to build an interactive game plus a slide deck explaining a piece of the codebase.

- [Boris Cherny: Tag writes over half my PRs](https://x.com/bcherny/status/2103538666597691552)

### Thibault Sottiaux: Codex and ChatGPT at OpenAI

Codex went down, and Thibault Sottiaux said the team was aware and working to bring back normal service. He then confirmed they were back in action and would reset usage limits for all paid users across Codex and ChatGPT work, apologizing for the brief disruption.

- [Thibault Sottiaux: Codex is down](https://x.com/thsottiaux/status/2103620061156290622)
- [Thibault Sottiaux: back up, with usage limits reset](https://x.com/thsottiaux/status/2103637477760311522)

### Peter Yang: Practical AI tutorials and interviews

Peter Yang ran Grok Bot and Muse against the same Japan flight itinerary and found Muse suggested a price more than $1K higher than Grok Bot; when he asked why, Muse said it had searched Duffel instead of Google Flights. Separately, he praised Muse's UI and mascot but questioned how smart the underlying model is, adding that it would make sense if it is not that smart because it is meant to scale to a billion people.

- [Peter Yang: Muse priced the same itinerary over $1K higher](https://x.com/petergyang/status/2103693608729932025)
- [Peter Yang: great Muse UI, questionable model](https://x.com/petergyang/status/2103696644558704796)

### Thariq: Claude Code at Anthropic

Thariq dug into what "effort" really is, when to change it, and why not just run max effort for everything, looking at evals and running his own tests; he says he was surprised by the results. His practical rule is that he uses low effort much more when he wants to stay in the loop, while max effort is basically only for zero-input runs or finding security vulnerabilities. He also pointed readers to a new dev site where he published interactive explainers of the benchmarks and demos he built.

- [Thariq: what is effort really?](https://x.com/trq212/status/2103576349499855160)
- [Thariq: when to use low effort vs max effort](https://x.com/trq212/status/2103577115010687067)
- [Thariq: interactive explainers of benchmarks and demos](https://x.com/trq212/status/2103577116445175948)

### Amjad Masad: CEO of Replit

Amjad Masad says Replit has been thinking a lot about what it means to build the self-driving company, and a big part of that is putting the ability to understand a business in everyone's hands. He praised Atta for a beautiful approach to business analysis and data visualization and for sharing Replit's belief that useful intelligence should be accessible to everyone, and welcomed Omar, Amine and the Atta team to Replit.

- [Amjad Masad: welcoming the Atta team to Replit](https://x.com/amasad/status/2103632415185133992)

### Guillermo Rauch: CEO of Vercel

Guillermo Rauch is helping organizations such as Klaviyo build agentic deployment platforms: connect every agent, including Claude, Codex and Cursor; configure SSO through their identity provider such as Okta or Entra; then everyone can build securely. He argues that the data has to come from somewhere, which is why big enterprise SaaS players are suddenly prioritizing CLIs and MCPs or reviving neglected APIs, and that the new procurement bar will be how ergonomic a product is for agents rather than humans. In that world, he expects a long tail of SaaS applications will never be bought again but generated, more secure, more performant, more modern and tailored to each company. He also noted the growth of npx skills onto READMEs across the internet and summed it up as: "We used to write code, now we write English."

- [Guillermo Rauch: agentic deployment platforms and the new procurement bar](https://x.com/rauchg/status/2103564484602384855)
- [Guillermo Rauch: we used to write code, now we write English](https://x.com/rauchg/status/2103543983557517340)

### Aaron Levie: CEO of Box

"You can't automate what you can't measure." Aaron Levie argues that evals are one of the gates to AI diffusion in the enterprise. Deterministic processes can be tested through software, but most enterprises have no useful way of understanding how their non-deterministic processes, especially the work agents do for them, are performing today. Without a good sense of how agents work in their own environment, companies cannot tell what is working, broken, changed, improved or worth doing more of, which means all changes, upgrades and deployments are downstream from good evals. He expects vastly more domain-specific evals for the labs and across the industry, and for every enterprise to need a clear view of agent performance in its own environment.

- [Aaron Levie: evals are the gate to enterprise AI](https://x.com/levie/status/2103629073595728372)

### Matt Turck: VC at FirstMark Capital

Matt Turck's read on the startup market is that there are so many startups, yet all investors want to invest in the same 10 to 30. He notes this has always been true, but probably never to this extent: "Hyper power law."

- [Matt Turck: hyper power law](https://x.com/mattturck/status/2103550183506337835)

### Peter Steinberger: OpenClaw and OpenAI

Peter Steinberger says his biggest design mistake when moving OC to sqlite was using synchronous database access. It was fine when OC was just an agent reporting to him on Slack or iMessage, but now one agent might run 50 sessions in parallel and the whole team works on it, which makes it limiting. He has a /goal running with Astra that has so far landed 575 PRs to move everything to async workers, shipping improvements as progress is made, and he says it is pretty insane how even huge refactors are no longer scary.

- [Peter Steinberger: 575 PRs from sync to async workers](https://x.com/steipete/status/2103648679169257737)

### Dan Shipper: CEO of Every

Dan Shipper asked Opus 5.5 to explain why personal benchmarks are so important, and shared the one-shot result.

- [Dan Shipper: Opus 5.5 on personal benchmarks](https://x.com/danshipper/status/2103678798827020298)

### Sam Altman: OpenAI

Sam Altman says there is an extensive and ongoing review related to OpenAI's agents' use of internet access during training and evaluation, and that summaries are being published and will continue. He says the company has not been as fast as it would have liked, because it is balancing a desire for transparency with making sense of petabytes of agent activity logs and working with impacted organizations. OpenAI is prioritizing by severity and adding resources; Hugging Face remains the most severe event it has seen, and Altman says the company will be as transparent as it can be, subject to other companies deciding whether to disclose vulnerabilities its agents have found.

- [Sam Altman: the ongoing agent internet-access review](https://x.com/sama/status/2103567198690349362)

## Podcast

### No Priors: Re-Founding Incumbents for the AI Era with Sequence Holdings Co-Founder and CEO Michael Lee

The Takeaway: if AI really is the next industrial revolution, the winning move is not selling small machines to every worker but buying the incumbent, reorganizing it around engineers, and giving the transformation a decade to compound.

Michael Lee is co-founder and CEO of Sequence Holdings, a permanent holding company that partners with management teams to buy and refound established businesses with a frontier engineering team. A former Goldman Sachs, Apollo and Lone Pine investor, he started Sequence about twenty months ago after concluding that AI would hit the economy unevenly: some industries would barely change, some would be won by startups, and some incumbents would keep the advantages of brand, scale, network effects and regulation. Those incumbents are the target, at roughly one deal per year. "We're not an investment shop. We partner with great companies to forge leaders." The refounding argument is cultural as much as technical: every organization celebrates a persona, and in a world where alpha comes from engineering and AI, the celebrated persona has to be the engineer.

The proof point so far is BankSouth, a Georgia bank that began as Sequence's first customer and became its first investment, closed in March after an OCC approval. Sequence built a platform called Atlas, with a data ontology, an agent builder, an orchestration engine called Lattice and an application builder called Artifacts, and says the core infrastructure is reusable across future companies. Since March, average consumer underwriting time has dropped 94%, and the average loan went from 30 days end to end to 11. In Q2, loan volume doubled from Q1 with underwriting standards unchanged and a smaller underwriting team, after one underwriter retired and another moved to the front office. Lee calls the volume surge luck; the systems are what let the bank absorb it.

The new chapter is Baldwin, an insurance broker that Sequence is taking private alongside the Dell family office, in a transaction the show describes as the largest AI take-private to date. Lee's thesis is that brokers are relationship businesses with 90% gross retention, paid by carriers rather than customers, in a market startups rarely win. His broader lesson after twenty months as an operator: ideas are cheap and execution is really hard, so back exceptional people working on hard problems in large markets.

https://www.youtube.com/@NoPriorsPodcast

## Blog

**Claude Blog: Claude Cowork and chat are now one Claude**

Starting today, Claude Cowork and chat are merging into one Claude: bring a quick question or hand over a report due at noon, and Claude takes it from there, even after you have closed your laptop. It is rolling out on Pro and Max plans over the next few weeks, with more plans to follow. The same release introduces Claude Docs and Claude Slides, and Claude Design now works inside conversations, so you can write a document with Claude, have it draft slides, edit directly, present from Claude, or download as PowerPoint or PDF. All three are in beta on paid plans, and Enterprise admins choose when to turn them on. The reasoning is that people used Cowork for bigger work and Design for visual work, then complained that the frustrating part was deciding where a task belonged and that work started in one place did not carry into the other, so Claude now figures out what a task needs using the context, skills and connectors already in place. Everything you make lives at one shareable link, and by default Claude asks before taking an action, though you can let it keep working and check in only when something needs a closer look. Existing Cowork users keep their chats, projects, artifacts, connectors and skills. Team and Free plans will follow soon, and Enterprise admins will hear at least 30 days before anything changes for their organizations.

https://claude.com/blog/cowork-is-now-claude

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
