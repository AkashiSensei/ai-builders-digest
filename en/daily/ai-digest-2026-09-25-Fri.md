[English](./ai-digest-2026-09-25-Fri.md) | [中文](../../zh/daily/ai-digest-2026-09-25-Fri.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-09-25-Fri.md)

---

# AI Builders Digest

## Reader's Briefing

**1. The model spend war is being repriced in real time.** Vercel CEO Guillermo Rauch published two months of spend data from Vercel AI Gateway, and the shape of the market moved a lot. Anthropic is still number one in spend but slid from 69% to 40%, OpenAI climbed from 10% to 24% and now leads on token volume, GPT-6 Astra and GPT 5.6 Sol "are ripping," Opus 5.5 reached 10% of spend within two days, and Kimi K3 plus DeepSeek took roughly half of Anthropic's loss. OpenAI is also 62% of image generations. ([Vercel AI Gateway data](https://x.com/rauchg/status/2103216656747262419))

**2. The most important layer in the AI stack is the one almost nobody talks about.** VAST Data CEO Renen Hallak describes his company as sitting in the middle of Jensen Huang's five layer cake, doing the software infrastructure that manages compute, storage, networking and data for the model builders above and the hardware vendors below. That unglamorous position turned VAST into a $30 billion company whose customers include CoreWeave, Nebius, Mistral and Nscale, and whose shared-everything architecture he says is why vendors built on older shared-nothing designs and services like S3 struggle with AI-era workloads. ([Matt Turck on VAST](https://x.com/mattturck/status/2103167531917721866))

**3. Demand is outrunning the physical buildout.** Hallak says one AI cloud customer projected 500 petabytes over three years and came back a quarter later asking for an extra two exabytes, while other customers have stopped selling capacity because they are sold out for the next year and a half. He does not see idle infrastructure anywhere, so the real constraint is land, power, chips and fabs, and he expects this pace to hold for five to ten years. ([MAD Podcast with Renen Hallak](https://www.youtube.com/@DataDrivenNYC/videos))

**4. Confidential computing is becoming the trust layer that unlocks regulated enterprises.** VAST's announcement is about model management, including DataEnclave, which lets an enterprise run inference on its own premises while the model builder's weights stay encrypted end to end, with help from Nvidia and encrypted memory underneath. Hallak argues this is not a technology breakthrough but "an idea whose time has come," and that this low layer is the right place to enforce who, and which agent, is allowed to see what. ([MAD Podcast with Renen Hallak](https://www.youtube.com/@DataDrivenNYC/videos))

**5. Agent-era craft is shifting from prompt tricks to goal setting and tool design.** Peter Steinberger warns that an agent told only to "clean up" stops far too early, and suggests giving it an ambitious goal such as removing 20% of the least useful tests while keeping code coverage within 2%. Thariq says Claude Code will turn plan mode into a built-in mod so users can customize the plan mode prompt, create and share their own modes, or rebind shift+tab entirely. ([Peter Steinberger](https://x.com/steipete/status/2103148444701610233), [Thariq](https://x.com/trq212/status/2103212051065921632))

**6. Product and go-to-market moves are stacking up across the stack.** Google Labs shipped Dreambeans, a fixed daily set of "beans" that point you at the real world; Replit CEO Amjad Masad says Muse can now make apps on Replit; and Claude for Small Business added 43 workflows and 27 integrations on top of more than 900,000 installs. On the media side, Swyx says his "Scaling without Slop" bet is finally working and teased the next phase of Latent Space and AINews, while FPV Ventures partner Nikunj Kothari predicts every trades business will eventually get bespoke software. ([Josh Woodward](https://x.com/joshwoodward/status/2103182635992514569), [Amjad Masad](https://x.com/amasad/status/2103129037011120525), [Claude Blog](https://claude.com/blog/claude-for-small-business-launches-new-workflows-integrations-and-training-programs), [Swyx](https://x.com/swyx/status/2103361254433993165), [Nikunj Kothari](https://x.com/nikunj/status/2103360292973633770))

## X / Twitter

### Swyx

Swyx said his January bet on a content strategy he called "Scaling without Slop" is finally working: it took three years to reach the first 100k YouTube subscribers and only 1.2 months to add the next 100k, with similar traction on AEO, SEO and subscriptions. He also gave notice that the next phase of Latent Space, AINews and the rest of swyx inc is coming.

- [Swyx: the next phase of Latent Space and AINews](https://x.com/swyx/status/2103361254433993165)

### Josh Woodward: VP at Google for Google Labs, Gemini App and Google AI Studio

Josh Woodward introduced Dreambeans, one of the newer experiments in Google Labs, which he says has a growing cult following. The premise is simple: a fixed number of "beans" brew every morning, and they point you at the real world, with real people, doing things you care about together.

- [Josh Woodward: Dreambeans in Google Labs](https://x.com/joshwoodward/status/2103182635992514569)

### Peter Yang

Peter Yang's read on the current model race is that Astra "blew up" 3D models, then Opus "blew up" videos, and he no longer knows what comes next. He also shared a prompting observation: stroking the AI's ego works.

- [Peter Yang: Astra blew up 3D models, Opus blew up videos](https://x.com/petergyang/status/2103318850641260959)
- [Peter Yang: stroking the AI's ego works](https://x.com/petergyang/status/2103310612864569388)

### Thariq: Claude Code at Anthropic

Thariq responded to feedback that many users plan on their own and do not need plan mode, while others like the UX of entering a mode where Claude is just thinking and brainstorming with them. His plan: make plan mode into a built-in mod, and let mods add new modes or override shift+tab. That would let people customize the plan mode prompt, create and share their own modes, or ignore it and rebind shift+tab to something else entirely.

- [Thariq: making plan mode into a built-in mod](https://x.com/trq212/status/2103212051065921632)
- [Thariq: customize the plan mode prompt or rebind shift+tab](https://x.com/trq212/status/2103212052391354794)

### Amjad Masad: CEO, Replit

Amjad Masad announced that Muse can now make apps on Replit.

- [Amjad Masad: Muse can now make apps on Replit](https://x.com/amasad/status/2103129037011120525)

### Guillermo Rauch: CEO, Vercel

Guillermo Rauch shared two months of AI Gateway spend data showing the model market shifting underneath Anthropic: Anthropic still leads in spend but fell from 69% to 40%, OpenAI rose from 10% to 24% and now leads in token volume, Opus 5.5 hit 10% of spend in two days, and Kimi K3 plus DeepSeek took about half of Anthropic's loss. He singled out GPT-6 Astra and GPT 5.6 Sol as "ripping," and noted OpenAI is 62% of image generations.

- [Guillermo Rauch: OpenAI vs Anthropic vs open models, in spend](https://x.com/rauchg/status/2103216656747262419)

### Matt Turck: VC at FirstMark Capital, host of the MAD Podcast

Matt Turck published a conversation with VAST Data CEO Renen Hallak about the middle layer of Jensen Huang's five layer cake for AI, the software infrastructure that few people understand and where VAST became a $30 billion company powering customers including CoreWeave, Nebius, Mistral and Nscale. The episode also points to VAST's announcement on frontier models and sensitive data.

- [Matt Turck: why VAST became a $30B company in the hidden AI software layer](https://x.com/mattturck/status/2103167531917721866)
- [Matt Turck: the conversation is also on Spotify, Apple Podcasts and YouTube](https://x.com/mattturck/status/2103167536141353053)

### Nikunj Kothari: partner at FPV Ventures

Nikunj Kothari shared a thesis he is backing: every small business owner, specifically in the trades, will have bespoke software, and that last mile is where differentiation can happen, in the experience a company gives its customers and its employees.

- [Nikunj Kothari: every trades business will have bespoke software](https://x.com/nikunj/status/2103360292973633770)

### Peter Steinberger: OpenClaw and OpenAI

Peter Steinberger says he pointed Daybreak at a codebase and found eight more long-standing leaks, with a reminder to care for your open source dependencies. He also offered a concrete agent tip: if you just tell the agent to clean up, it will stop far too early, so give it an ambitious goal, for example "remove 20% of the least useful tests while maintaining code coverage within 2%".

- [Peter Steinberger: Daybreak found 8 more long-standing leaks](https://x.com/steipete/status/2103200311641076100)
- [Peter Steinberger: give cleanup agents an ambitious goal](https://x.com/steipete/status/2103148444701610233)

## Podcast

### The MAD Podcast with Matt Turck: Who Feeds the GPUs? Inside AI's Hidden $30B Layer | Renen Hallak, VAST Data

The Takeaway: the AI buildout is not really bottlenecked by models or GPUs but by the unglamorous software layer in between that has to feed those GPUs, and by the land, power and chips nobody can conjure fast enough.

Renen Hallak founded VAST Data in early 2016, before the transformer paper and long before ChatGPT, after spending six months as a student trying and failing to prove P=NP. What convinced him computers were the way to crack the hardest open problems was watching neural nets recognize which videos had cats in them: the algorithms were not new, the data access was, and he concluded the infrastructure of the time was built to be either fast or big, never both. That bet produced a company most recently valued at $30 billion, sitting in the middle of Jensen Huang's five layer cake. "Sometimes I like to call it software infrastructure, and other times I like to call it the operating system for this new era."

The technical core is an architecture Hallak calls disaggregated shared everything. Conventional systems shard data across nodes that must talk to each other, which breaks down badly at AI scale, because cluster communication grows quadratically and one failure forces everybody to recover. VAST instead puts storage media on the far side of a fast network, so every node sees everything as if it were locally attached, and one customer cluster already spans multiple exabytes at tens of terabytes per second. On the demand side, Hallak sounds less excited than spooked: a customer that planned for 500 petabytes over three years came back a quarter later asking for two more exabytes, and some AI clouds have stopped selling capacity because they are sold out for a year and a half. He is blunt about why the traditional hyperscalers are behind, saying their lunch is being eaten by someone else, an innovator's dilemma in which the incumbents' existing cash cows keep them from rebuilding the stack. His new announcement is model management plus DataEnclave, confidential computing that lets a regulated enterprise run inference on premises while the model builder's weights stay encrypted end to end, so neither side sees what it should not.

https://www.youtube.com/@DataDrivenNYC/videos

## Blog

**Claude Blog: Claude for Small Business launches new workflows, integrations, and training programs**

Claude for Small Business got a large expansion: 43 workflows and 27 new integrations with tools small businesses already use, including Shopify, Salesforce, TikTok, Atlassian, Zoom, Xero, Gusto, Square, Stripe and Zapier. The claim is that these workflows extend Claude from running the back office into growing the business, which is what owners asked for. On the spring Claude SMB Tour, more than 1,000 owners in 10 cities gave feedback, and about a third wanted help generating leads, answering inbound inquiries and writing proposals, while many others wanted day-to-day reporting handled for them. Since launching in May as a set of connectors and ready-to-run workflows, Claude for Small Business has been installed more than 900,000 times. Early partners include Intuit Quickbooks, PayPal, HubSpot, Canva, Docusign, Google Workspace and Microsoft 365.

The training side scales with the product: the tour returns this fall with free workshops in 10 US cities, more than 150 organizations trained as Approved Claude SMB Trainers will run over 750 workshops in their own communities, and 14 integration partners are hosting free webinars about their connectors. The outcomes owners describe are specific. "What used to take me 120 hours now takes me five minutes," says Pedro Rubio, founder and CEO of Blackfyre GovCon in Washington, D.C. Garrett French, owner of Driller Design Co. in Tulsa, describes an agent that runs at 6:00 am every morning, reads the CRM, prioritizes the to-do list and emails what needs to be done that day. The release is a direct answer to the most common small business request: help growing the business, not just administering it.

https://claude.com/blog/claude-for-small-business-launches-new-workflows-integrations-and-training-programs

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
