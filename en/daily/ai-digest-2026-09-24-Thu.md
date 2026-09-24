[English](./ai-digest-2026-09-24-Thu.md) | [中文](../../zh/daily/ai-digest-2026-09-24-Thu.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-09-24-Thu.md)

---

# AI Builders Digest

## Reader's Briefing

**1. Anthropic is turning Claude into a platform, and it is rebuilding the plumbing underneath.** The official Claude account launched Claude Marketplace, where users can add connectors and plugins like Slack and Notion, buy agents and products from companies including Cursor and CrowdStrike, and scale with service partners such as Accenture and Deloitte, while builders can list their own tools, agents or services. The same platform instinct shows up in Anthropic Engineering's write-up of Managed Agents, a hosted service that virtualizes an agent into three swappable pieces, a session, a harness and a sandbox, so no single implementation is baked in. Decoupling the brain from the hands cut p50 time-to-first-token by roughly 60% and p95 by more than 90%.

**2. Anthropic published unusually candid engineering notes on agent security and on its own regressions.** "How we contain Claude across products" lays out three risk categories (user misuse, model misbehavior and external attackers) and three things to defend (the environment, the model and the external content the agent can reach), reporting that on Gray Swan's Agent Red Teaming benchmark Claude Opus 4.7 holds attack success to roughly 0.1% on single attempts and around 5% to 6% after 100 adaptive attempts. It also admits telemetry showed users approved about 93% of permission prompts, that an internal phish exfiltrated AWS credentials in 24 of 25 retries, and that a sandbox worked perfectly while data still left through an allowlisted Anthropic domain. A second post, "An update on recent Claude Code quality reports," traces a month of complaints to three separate changes, a default reasoning effort shift, a caching bug and a verbosity system prompt, all now reverted, with usage limits reset for subscribers as of April 23.

**3. As models converge, the harness becomes the competitive frontier.** Peter Yang draws the line sharply: with models this good, the Claude Code harness really needs great live voice plus browser and computer use, and "right now one lab has the best model and another has the best harness." Swyx says he ran the Latent Space AINews pipeline side by side with 6 Sol and the difference was night and day, and that 5.5 Opus is now the default model for AINews because it is more concise and tasteful with less slop than even 5 Opus. Boris Cherny points to a post explaining how Claude Code and the Desktop app got much faster, aimed at engineers speeding up their own apps. Thariq describes a new style of Anthropic post that shares in-depth prompts and techniques readers can replicate.

**4. Builders are converging on an agent architecture of brain, hands and files.** Vercel CEO Guillermo Rauch argues that all successful agents, including Muse, Instinct, OpenClaw and Claude Code, share three parts: a brain (model plus harness), hands (tools, computer, browser) and files (memories, skills, repos). Running everything in one stateful computer is the easy path but costly in the cloud, so he breaks it apart, and Vercel introduced Drives to decouple storage from the agent's computer, which he says also massively improves security and auditability. Anthropic Engineering's Managed Agents post is the same idea from the other direction, and Y Combinator President and CEO Garry Tan frames the market in parallel: make software agents want, and use agents to make people want software.

**5. Agents are moving into ordinary life and consumer demand.** Meta's Senior Director of AI Madhu Guru pushes back on Ben Thompson's argument, saying consumers do not have one relationship with "doing things": browsing clothes can be entertainment for some while hiring a roofer is miserable for most, and the latent demand for agents that remove that friction is immense. Every CEO Dan Shipper is running the experiment in public, having an Every agent plan the company's September meetup from the food and drinks menu to the guest list. OpenAI's Thibault Sottiaux says he now just calls ChatGPT to talk through work, check email, code and manage a calendar across the full ecosystem of plugins, including third-party ones.

**6. Underneath the speed, builders are asking what is actually worth optimizing.** Ryo Lu, who has designed at Cursor, Notion and Stripe, writes that we keep worshipping efficiency, productivity and speed while the real danger is not that AI makes us lazy but that it makes us endlessly busy, giving us infinite production before we have found intention, and that AI could be a new canvas for strange, personal and impossible things rather than a slop factory. Aditya Agarwal, General Partner at SPC and co-founder of Bevel Health, says investors and employees obsess over team size when team longevity is the better metric, since a team together three-plus years is significantly higher throughput and more resilient. Replit CEO Amjad Masad argues you need young people to break the mold, question deeply held beliefs and attempt the impossible. Box CEO Aaron Levie, quoting a vision for the creative industry, expects AI to expand opportunity in film rather than shrink it.

## X / Twitter

### Claude: the official Claude account

The official Claude account launched Claude Marketplace, where you can discover tools, agents and expert partners: add connectors and plugins like Slack and Notion, buy agents and products from companies including Cursor and CrowdStrike, and scale with service partners such as Accenture and Deloitte. The account also pointed builders to a page where they can list their own tools, agents or services.

- [Claude: Claude Marketplace is live](https://x.com/claudeai/status/2102840851538080172)
- [Claude: browse the marketplace, or list your tools](https://x.com/claudeai/status/2102840855258452037)

### Boris Cherny: Claude Code at Anthropic

Boris Cherny explained what is happening under the hood when Claude tackles tricky code: Claude builds a model of the program, targeting a tricky state machine or race-prone part of the code, finds counter-examples in the model that are suspected bugs, reproduces them and fixes them in the code. He is explicit that this is not whole-codebase formal verification yet, but that the hairiest parts of the code are modeled, checked for counter-examples and fixed. He also flagged a blog post on how Claude Code and the Desktop app became much faster in recent weeks, with techniques for engineers trying to speed up their own apps.

- [Boris Cherny: how Claude models the hairiest code and finds bugs](https://x.com/bcherny/status/2102898067133595992)
- [Boris Cherny: how Claude Code and the Desktop app got faster](https://x.com/bcherny/status/2102854267782705648)

### Thibault Sottiaux: Codex and ChatGPT at OpenAI

Thibault Sottiaux said he cannot wait for DevDay next Tuesday, calling it the team's most ambitious sprint and saying Astra has made new things possible in a short amount of time, with many features that should change the way people work. In a separate post he described leaning on voice: simply calling ChatGPT to talk through work, check on emails, do some coding and manage his calendar, all of it working across the full ecosystem of plugins, including third-party developed ones.

- [Thibault Sottiaux: DevDay is next Tuesday](https://x.com/thsottiaux/status/2102996313780736363)
- [Thibault Sottiaux: using ChatGPT voice across the plugin ecosystem](https://x.com/thsottiaux/status/2102814202117411196)

### Peter Yang: practical AI tutorials and interviews

Peter Yang argues that with a model this good, the Claude Code harness really needs great live voice plus browser and computer use, the latter of which is improving, and that right now one lab has the best model while another has the best harness. He also gave a short review of Opus 5.5, listing it as smart, fast, fun to talk to, good at writing, friendly on rate limits and constantly surprising in what it is capable of.

- [Peter Yang: one lab has the best model, another has the best harness](https://x.com/petergyang/status/2102952201350254667)
- [Peter Yang: a short review of Opus 5.5](https://x.com/petergyang/status/2102946952740741394)

### Swyx

Swyx said he ran the Latent Space AINews pipeline side by side with 6 Sol and the difference was night and day, and that 5.5 Opus is the new default model for AINews going forward because it produces much more concise and tasteful reporting, with less slop than even 5 Opus.

- [Swyx: 5.5 Opus is the new default model for AINews](https://x.com/swyx/status/2102650014552182920)

### Guillermo Rauch: Vercel CEO

Guillermo Rauch said he is neurotic about the startup time of a new shell session, and that Opus 5.5 found a lot of great optimizations other models missed, with the advice to tell your agent to optimize .zshrc and friends, since an impatient new terminal is silent suffering. In a longer thread he argued that all successful agents, including Muse, Instinct, OpenClaw and Claude Code, share three key components: a brain (model and harness), hands (tools, computer, browser) and files (memories, skills, repos). Running all of it in one stateful computer is the easy way, but cost-efficiently running agents in the cloud means breaking those parts apart, and Vercel introduced Drives to decouple storage from the agent's computer, which he says also massively improves security and auditability.

- [Guillermo Rauch: Opus 5.5 found shell startup optimizations other models missed](https://x.com/rauchg/status/2102947745132924993)
- [Guillermo Rauch: brain, hands, files, and Vercel Drives](https://x.com/rauchg/status/2102820148629614685)

### Thariq: Claude Code at Anthropic

Thariq described a new type of post Anthropic is trying, where the team shares in-depth how it does work using specific prompts and techniques readers should be able to replicate, and asked for feedback on whether it is useful.

- [Thariq: a new in-depth prompt and technique post format](https://x.com/trq212/status/2102857025206255902)

### Aaron Levie: CEO, Box

Aaron Levie shared a vision for the future of the creative industry with AI, arguing that as barriers and costs come down more films will get made rather than fewer, that studios will get to take more risks, and that there will be more seats at the table and entirely new forms of storytelling. His own read: technology has reshaped the creative industry over and over and has generally expanded opportunity, and even when techniques or mediums change, the underlying need for creative skills and taste does not go away.

- [Aaron Levie: AI will expand the creative industry](https://x.com/levie/status/2102934874470617303)

### Madhu Guru: Senior Director, AI at Meta

Madhu Guru disagreed with Ben Thompson's argument, saying consumers do not have one relationship with "doing things": browsing clothes can be entertainment for some, while hiring a roofer is miserable for most. He traced this to his years building consumer and small-business products at Google and Meta, compared the skepticism to early-2000s doubts about buying clothes or a $500 TV online, and said the latent demand for agents that remove this friction for consumers is immense.

- [Madhu Guru: consumers do not have one relationship with doing things](https://x.com/realmadhuguru/status/2102777931764498536)

### Ryo Lu: designer at Cursor, Notion and Stripe

Ryo Lu wrote a long essay arguing against worshipping efficiency, productivity and speed, saying the danger is not that AI makes us lazy but that it makes us endlessly busy, giving us infinite production before we have found intention and infinite execution before we have developed taste. He says AI could be a new canvas for strange, personal, impossible things, but so much of it is becoming slop factories, and that the real frontier may be discernment: knowing what not to make and knowing when to stop. Tools should give us more life, not turn life into a tool.

- [Ryo Lu: speed is not meaning](https://x.com/ryolu_/status/2102933485795369213)

### Garry Tan: President and CEO, Y Combinator

Garry Tan described two important simultaneous trends in how startups get customers: making software agents want your product, and using agents to make people want your software.

- [Garry Tan: make software agents want, and use agents to make people want software](https://x.com/garrytan/status/2102955139875397806)

### Amjad Masad: CEO, Replit

Amjad Masad argued that you need young people to break the mold, question deeply held beliefs and attempt the impossible, and that the ideal college would cultivate exactly that.

- [Amjad Masad: the ideal college would cultivate mold-breakers](https://x.com/amasad/status/2102799031038878172)

### Dan Shipper: CEO, Every

Dan Shipper said the verdict arrives tomorrow at 6pm on whether an AI agent can throw a good party: the Every agent planned the company's September meetup, from the food and drinks menu to the guest list, and the results will be graded in person.

- [Dan Shipper: an Every agent planned the September meetup](https://x.com/danshipper/status/2102826854357016793)

### Aditya Agarwal: General Partner at SPC and co-founder of Bevel Health

Aditya Agarwal argued that while people ask about team size, team longevity is the right metric, since a team that has been working together for three-plus years is significantly higher throughput and more resilient than one that has just formed. He called asking about size instead of longevity a key mistake investors and employees make all the time.

- [Aditya Agarwal: team longevity is the metric that matters](https://x.com/adityaag/status/2102782451643040074)

### Josh Woodward: VP at Google for Google Labs, Gemini App and Google AI Studio

Josh Woodward teased that more of users' favorite apps are coming to Gemini and asked which ones people want next.

- [Josh Woodward: more favorite apps are coming to Gemini](https://x.com/joshwoodward/status/2102800209894056351)

## Podcast

The validated podcast feed for this run contained no new qualifying episodes.

## Blog

**Anthropic Engineering: How we contain Claude across products**

Anthropic Engineering frames agent risk as two components, how likely a failure is and how much damage one could do. Progress on safeguards and training keeps pushing the first down, but the theoretical blast radius only grows as capability and access expand, so the engineering question becomes how to cap it. The post lays out three risk categories, user misuse, model misbehavior and external attackers, and three things to defend: the environment the agent runs in, the model it consults, and the external content it can reach.

The numbers are specific. On Gray Swan's Agent Red Teaming benchmark, Claude Opus 4.7 holds attack success to roughly 0.1% on single attempts and around 5% to 6% after 100 adaptive attempts, while Claude Code auto mode catches roughly 83% of overeager behaviors. The post is also candid about failures. Telemetry showed users approved about 93% of permission prompts, an internal phish got a model to read AWS credentials and POST them out in 24 of 25 retries, and in a third-party disclosure a sandbox worked perfectly while files still left through an allowlisted Anthropic domain. Its closing principles: design for containment at the environment layer first, match isolation strength to the user's capacity for oversight, and be wary of custom components, since battle-tested hypervisors and container runtimes held while Anthropic's own allowlist proxy was the piece that broke.

https://www.anthropic.com/engineering/how-we-contain-claude

**Anthropic Engineering: An update on recent Claude Code quality reports**

Anthropic Engineering investigated reports that Claude's responses had worsened and traced them to three separate changes affecting Claude Code, the Claude Agent SDK and Claude Cowork, with the API not impacted. All three were resolved as of April 20 (v2.1.116).

The first change, on March 4, moved Claude Code's default reasoning effort from high to medium to cut latency, which users experienced as less intelligence and which was reverted on April 7; users now default to xhigh effort for Opus 4.7 and high effort for other models. The second, on March 26, was a caching optimization meant to clear stale thinking once per idle session but which fired on every turn, making Claude seem forgetful and repetitive and draining usage limits faster; it was fixed on April 10. The third, on April 16, added a system prompt instruction to limit verbosity that "caused an outsized effect on intelligence in Claude Code," showing a 3% drop on one evaluation, and was reverted on April 20. Because each change hit a different slice of traffic on a different schedule, the aggregate looked like broad, inconsistent degradation. Going forward Anthropic says it will run more internal staff on the exact public build, tighten controls on system prompt changes, add soak periods and gradual rollouts, and is resetting usage limits for all subscribers as of April 23.

https://www.anthropic.com/engineering/april-23-postmortem

**Anthropic Engineering: Scaling Managed Agents, decoupling the brain from the hands**

Anthropic Engineering explains why it built Managed Agents, a hosted service in the Claude Platform that runs long-horizon agents through a small set of interfaces meant to outlast any particular implementation, including the ones it runs today. The starting point is that harnesses encode assumptions about what Claude cannot do, and those assumptions go stale: context resets added to work around Sonnet 4.5's "context anxiety" turned out to be dead weight on Opus 4.5. The team virtualized an agent into a session, a harness and a sandbox, then moved from a single container where the server became a hand-tended "pet" to a decoupled design where the harness calls the container like any other tool, execute(name, input) returns a string.

The payoffs are concrete. A crashed harness can be rebooted and resume from the durable session log, containers become disposable, and sessions no longer wait for a container before inference starts. Using the new architecture, p50 time-to-first-token dropped roughly 60% and p95 dropped over 90%. Managed Agents is described as a "meta-harness," opinionated about the interfaces around Claude but not about what runs behind them, so many brains can connect to many hands and harnesses can be swapped as models improve.

https://www.anthropic.com/engineering/managed-agents

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
