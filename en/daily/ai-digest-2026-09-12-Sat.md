[English](./ai-digest-2026-09-12-Sat.md) | [中文](../../zh/daily/ai-digest-2026-09-12-Sat.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-09-12-Sat.md)

---

# AI Builders Digest

## Reader's Briefing

**1. Astra's shipping spree is outrunning its own launch calendar, and OpenAI is clearing the trust debt in public.** Codex and ChatGPT lead Thibault Sottiaux lists Images 2.5, GPT-Live-1, Agents API, Data Agent, and ChatGPT for Financial Services as Astra-powered ships in a single week, and points out that it is not even DevDay yet. He also posted a candid reset: an opt-in context-management experiment that could cause early stops was disabled after an estimated 4,000 to 5,000 users were affected, some skills written for previous models were triggering too often or blocking the model from checking its work, and badly configured engines behind a measured quality degradation were removed. OpenAI also hired Aidan and Sasha from the Git AI team, the makers of an open-source tool that shows how coding agents contribute to a codebase, and committed to keeping Git AI open source. Peter Steinberger added a concrete demo of where computer use stands, showing Astra driving a cloud session playing Doom.

**2. Evals are becoming the discipline that decides whether AI works, and pass/fail scores are not enough.** Anthropic's Thariq argues it is basically impossible to interpret evals from pass/fail scores alone, because many benchmark failures come from overly strict hidden tests and the model's answer sometimes makes more sense than the expected result. He also shipped plugin evals, run with `claude plugin eval init`, aimed at the complaint that it is hard to know whether your skills still work after a new model release. Meta's Madhu Guru blames failed enterprise AI programs on old-school playbooks, under-invested evals, and platform teams building from the outside, and prescribes hiring people who have shipped AI, making evals first class, and embedding builders inside finance, sales, and support. Every CEO Dan Shipper says benchmark scores do not predict performance on your real work, which is why his team is turning three years of hands-on vibe checks into personal, quantitative benchmarks.

**3. The software factory debate is really a debate about where the human stays in the loop.** Peter Yang is skeptical of end-to-end software factories, arguing that outside verification and testing, AI cannot yet improve a product or build a new feature without a human defining requirements and checking the work, and that one wrong assumption in an overnight run can waste the whole token budget. Coinbase CEO Brian Armstrong describes the opposite discipline: every team and repository gets a "brain" of past incidents, financial controls, A/B tests, and pull-request history that agents ingest before changing code. When a human corrects the agent, that correction has to flow back into the brain so the fix applies to every future case, which is what turns one-shot pull-request acceptance into a recursive self-improvement system. His internal harness, Toshi, planned a feature as three phases of ten parallel agent tasks and reported all ten done before he recorded a podcast.

**4. Agentic finance is moving from metaphor to plumbing.** On No Priors, Armstrong lays out Coinbase's three bets: an everything exchange, stablecoin payments, and Agentic Finance. Agents can get self-custodial wallets and their own accounts with no KYC process, because they have no government ID, and roughly 76% of the agent ecommerce transactions Coinbase sees are under 30 cents, below the roughly 30-cent flat minimum that makes card payments uneconomic for small transactions. The X402 payment protocol Coinbase incubated and donated to the Linux Foundation now has Google, Cloudflare, and AWS working on it. The same primitive hunger shows up elsewhere: Box CEO Aaron Levie says Box can now be mounted into agent sandboxes so agents can read and write files, and Vercel CEO Guillermo Rauch says Tailscale's model router runs on Vercel AI Gateway, calling AI gateways the new CDNs.

**5. Builders are rethinking how teams, credit, and attention get allocated.** Zara Zhang calls the one-person company overrated, because building something new is lonely and it is easy to lose motivation without someone to brainstorm, suffer, and celebrate with. FPV Ventures partner Nikunj Kothari watches successful VCs fight over attribution for rare large exits, warns that emerging managers who did the work often do not get the credit, and says founders are the real reference checks. Cursor's Ryo Lu highlights long-lived agents for big ideas now shipping in Cursor, while Peter Yang splits his own stack between local scheduled tasks in Codex and cloud tasks in Grok Bot. Y Combinator's Garry Tan argues for more and higher measures of excellence rather than removing standardized tests.

## X / Twitter

### Thibault Sottiaux: Codex & ChatGPT at OpenAI

Sottiaux says Astra shipped a wave of products in a single week: Images 2.5, GPT-Live-1, Agents API, Data Agent, and ChatGPT for Financial Services, with more planned and DevDay still ahead. In a separate update he walked through fixes for reported quality issues: skills written for previous models were triggering too often or preventing the model from checking its work, an opt-in context-management experiment that could cause early stops or replies to older messages was disabled after an estimated 4,000 to 5,000 users were affected, and badly configured engines behind a measured quality degradation were removed. He also welcomed Aidan and Sasha from the Git AI team to OpenAI, saying their open-source tool helps developers understand how coding agents contribute to a codebase, and committed to keeping Git AI open source.

- [Thibault Sottiaux on Astra's week of ships](https://x.com/thsottiaux/status/2098639827084480864)
- [Thibault Sottiaux on the reset and quality fixes](https://x.com/thsottiaux/status/2098612714704891959)
- [Thibault Sottiaux on the Git AI team joining OpenAI](https://x.com/thsottiaux/status/2098569976143806918)

### Peter Yang

Yang says he has settled on a clean split for his agents: all local scheduled tasks live in Codex, while cloud tasks are being ported to Grok Bot. He is also skeptical of software factories, arguing that outside verification and testing, AI is not yet at a point where it can self-improve a product or build a new feature end to end without a human in the loop. His evidence is practical: whenever he loops something overnight to build something new, one wrong assumption can turn the entire run into a waste of tokens. He ends with a challenge: what products or features have actually been built end to end with a software factory and no human defining the requirements or checking the work?

- [Peter Yang on splitting local and cloud tasks](https://x.com/petergyang/status/2098614492066435228)
- [Peter Yang on software factories](https://x.com/petergyang/status/2098565668241334366)

### Madhu Guru: Senior Director, AI at Meta

Guru diagnoses why most enterprise AI efforts fail. The first mistake is using old-school playbooks: a CEO appoints a trusted lieutenant to run a central AI team staffed with trusted insiders, but the team structures, product patterns, and launch habits that worked for incremental software do not work for AI, which requires experimentation and invention. The second is under-investing in evals by not understanding what good looks like. The third is building AI for the company from the outside, where a central platform team ships tools disconnected from the actual workflows, context, and judgment of the people doing the work, producing begrudging adoption rather than meaningful productivity gains. His prescription: hire leaders who have actually built AI products, make evals a first-class citizen, and embed the best AI builders inside finance, sales, and support to build with those functions rather than for them.

- [Madhu Guru on why enterprise AI efforts fail](https://x.com/realmadhuguru/status/2098448235048378456)

### Thariq: Claude Code at Anthropic

Thariq says it is basically impossible to interpret evals by looking only at pass/fail scores these days, because many benchmark failures come from overly strict hidden tests and in some cases the model's answer makes more sense than the expected result. He also announced plugin evals to address the feedback that it is hard to know whether your skills are still working with new model releases; the command is `claude plugin eval init`, run inside your plugin folder.

- [Thariq on plugin evals](https://x.com/trq212/status/2098531560643539440)
- [Thariq on interpreting evals](https://x.com/trq212/status/2098490139798655427)

### Amjad Masad: CEO of Replit

Masad announced that Replit has acquired a business built entirely on Replit, and said he expects it to be the first of many. He also highlighted a new feature, Routines with budgets.

- [Amjad Masad on acquiring a business built on Replit](https://x.com/amasad/status/2098548464452055437)
- [Amjad Masad on Routines with budgets](https://x.com/amasad/status/2098317466682179643)

### Guillermo Rauch: CEO of Vercel

Rauch says Tailscale's model router is powered by Vercel AI Gateway as its underlying infrastructure, and uses the moment for a broader argument: AI gateways are the new CDNs. Going direct to origin is brittle, and building it yourself is painful and costly.

- [Guillermo Rauch on AI gateways as the new CDNs](https://x.com/rauchg/status/2098531157230969062)

### Aaron Levie: CEO of Box

Levie says Box can now be mounted to agent sandboxes, making it far easier for an agent to read and write files on the agent's computer. His framing: as AI agents execute critical workflows in the enterprise, they will need the same primitives that people have had.

- [Aaron Levie on mounting Box to agent sandboxes](https://x.com/levie/status/2098478938003841123)

### Ryo Lu

Lu says long-lived agents for big ideas are now available in Cursor.

- [Ryo Lu on long-lived agents in Cursor](https://x.com/ryolu_/status/2098324260867772806)

### Garry Tan: President & CEO of Y Combinator

Tan argues that once you score 1600 on the SAT, you should unlock a second, harder test that gives you a second score on top of it, because we should have more and higher measures of excellence. His criticism is that banning the SAT turns everything into a random lottery in which excellence cannot be recognized.

- [Garry Tan on higher measures of excellence](https://x.com/garrytan/status/2098615692425851205)

### Zara Zhang: Builder

Zhang argues that the idea of a one-person company is overrated. Yes, AI lets one person do much more, but building something new can be a profoundly lonely experience, and you need someone to brainstorm with, suffer with, and celebrate with. Without tying yourself to the mast alongside someone else, she says, it is extremely easy to lose motivation.

- [Zara Zhang on the one-person company](https://x.com/zarazhangrui/status/2098483800456179923)

### Nikunj Kothari: Partner at FPV Ventures

Kothari opens with the line that success has many fathers but failure is an orphan, and says he never grasped its gravity until he watched extremely successful VCs fight over attribution for hot deals. Because large exits and markups are genuinely rare, and are what the next fund gets raised on, he expects many names to be scrubbed or conveniently omitted as people revise history to claim credit for what eventually works. His concern is emerging GPs, whose track record is the only thing they can take to future LPs and who often do not get the credit they deserve. His short-term advice: hold your founders close, because they will be the real reference checks.

- [Nikunj Kothari on attribution and emerging managers](https://x.com/nikunj/status/2098550718923997430)

### Peter Steinberger

Steinberger submitted a patch to trycua to make keys work reliably under Linux, calling the framework dope overall. He also showed Astra running in an OpenClaw cloud session playing Doom through computer use, joking that it is not quite AGI yet but probably beats a fly brain.

- [Peter Steinberger on patching trycua for Linux keys](https://x.com/steipete/status/2098527982709256637)
- [Peter Steinberger on Astra playing Doom through CUA](https://x.com/steipete/status/2098527519213604889)

### Dan Shipper: CEO of Every

Shipper argues that better benchmark scores do not tell you much about how well a model performs on your real work. That is why Every has spent the last three years doing vibe checks on new models, long-form reviews based on hands-on testing against real work, and why the team is now doubling down on something more quantitative: an internal platform built inside Every that lets everyone create personal benchmarks from their day-to-day work.

- [Dan Shipper on vibe checks and personal benchmarks](https://x.com/danshipper/status/2098481799047647715)

## Podcast

### No Priors: Coinbase's Everything Exchange: Agentic Finance, Stablecoins, and Tokenization with CEO Brian Armstrong

The Takeaway: the agent economy needs its own financial rails, and whoever builds them will decide whether AI moves from getting stuck at a paywall to paying its own way.

Brian Armstrong, cofounder and CEO of Coinbase, thinks the biggest near-term shift is not a smarter model but a new kind of customer: software agents that need to transact. Crypto rails were useful for humans, he argues, but they will be essential for AI. On No Priors he laid out Coinbase's three bets: an everything exchange where every asset class trades in one place, stablecoin payments that move money anywhere in under a second for under a cent, and what he calls Agentic Finance.

The numbers explain why the plumbing matters. Card payments carry a minimum fee of roughly 30 cents plus a percentage, which makes anything under a dollar awkward, and about 76% of the agent ecommerce transactions Coinbase sees are under 30 cents. Most of that is agents buying data or calling specialized agents, not people buying things. So Coinbase gives agents self-custodial wallets and accounts with no KYC, because an agent has no government ID. "We don't want the AIs to be unbanked," Armstrong says. "If we want to bank the AIs, they deserve financial services as well." Coinbase incubated the X402 payment protocol and donated it to the Linux Foundation, where Google, Cloudflare, and AWS are now working on it.

Armstrong is also running the playbook on Coinbase itself. Each team and repository gets a "brain" of past incidents, financial controls, A/B tests, and pull-request history that agents ingest before changing code. When a human edits the agent's work, the correction flows back into the brain for every future case, which is how one-shot pull-request acceptance climbs into what he calls a recursive self-improvement system. A harness that can plan a feature, spin up ten agents to build ten pieces in parallel, and report back before the recording starts is already doing that.

Beyond crypto, Armstrong's other company, New Limit, is chasing epigenetic reprogramming. Its first liver program targets alcohol-related liver disease, which he estimates could be worth $20 billion if it works, as a step toward restoring younger cell function across the body. His long-run bet is that most of the diseases that take us out are diseases of aging, so reversing that decline is the meta-problem worth solving.

- [No Priors: Coinbase's Everything Exchange: Agentic Finance, Stablecoins, and Tokenization with CEO Brian Armstrong](https://www.youtube.com/watch?v=uLDK4l_-gUE)

## Blog

The validated blog feed contained no new qualifying items.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
