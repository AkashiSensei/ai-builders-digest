[English](./ai-digest-2026-10-12-Mon.md) | [中文](../../zh/weekly/ai-digest-2026-10-12-Mon.md) | [Bilingual](../../bilingual/weekly/ai-digest-2026-10-12-Mon.md)

---

# AI Builders Digest

Coverage: 2026-10-05 00:00 to 2026-10-12 00:00 Asia/Shanghai
Known feed coverage gaps (UTC): X/Twitter 2026-10-07T06:45:10.543Z to 2026-10-07T06:47:17.990Z (0.04h); X/Twitter 2026-10-10T06:42:38.645Z to 2026-10-10T06:43:45.305Z (0.02h); X/Twitter 2026-10-11T06:43:45.305Z to 2026-10-11T07:04:13.260Z (0.34h).

## Reader's Briefing

The week's most repeated claim was that the primary user of software is becoming an agent. Vercel CEO Guillermo Rauch reported that 58.18% of traffic on Vercel's network is now bot-originated, up from 32% in January 2024, that more than 60% of deployments are agentic, and that up to 83% of pageviews on Vercel's docs come from agents. Meta senior director of AI Madhu Guru listed what that rebuild demands: operating systems where agents are first-class users, cloud infrastructure and permissions built for thousands of agents, and interfaces for humans and agents together.

Compute economics was the second theme, framed less around training than around the flood of inference agents will create. Box CEO Aaron Levie argued agent swarms and background agents will consume 1,000X more tokens than people prompting one at a time, and that the one-agent chat model will look like a relic within a year or two. Google's AI infrastructure chief Amin Vahdat gave the physical version: Google must roughly double token-generation capacity every six months, with as much coming from software as from hardware.

Labs kept compressing the price of intelligence. Anthropic shipped Haiku 5.5, citing major alignment improvements, and halved cache-read prices on Sonnet 5.5 to $0.10 per million tokens, making it about 20% cheaper for long-running work. OpenAI's Thibault Sottiaux re-shipped Codex Cloud, made steering instant, released GPT-6.1 Sol ultrafast and tied ChatGPT subscriptions into a Devin subscription. On No Priors, Reflection AI's Misha Laskin launched Beam, a 500B-parameter open model with 23B active parameters.

When builders named the enterprise bottleneck, they named evals. Madhu Guru said the most common mistake is treating evals as a QA step after the agent is built, when "your evals are your product spec." Levie said deployment is bottlenecked by the ability to test and tune agents in real work environments. Applied Compute's CEO described reinforcement learning as "a hill climbing machine" where "the hardest part is actually defining the hill to climb."

Open weights and safety ran through both X and the podcasts. Laskin argued that with only a few hundred safety researchers inside closed labs it is impossible to cover the long tail of unintended consequences, evoking Linus's Law, and called open models "Trojan horses for the infrastructure that they bring with them." Madhu Guru said open weights did not start the fall in price per unit of intelligence but are "a tailwind on a trend that was already underway."

The most concrete operator lesson came from Every. CEO Dan Shipper said OpenAI's Dots had become his main interface to ChatGPT, useful for filtering Slack noise and school emails but still maddening on permissions, and predicted the character names are disposable because users switch as soon as something performs better. Every's podcast explained why the team replaced personal agent-per-person setups with one shared company agent that everyone contributes to.

## X / Twitter

### Box CEO Aaron Levie

Levie argued agent swarms and background agents will consume 1,000X more tokens than one-at-a-time prompting, so "the vast, vast majority of tokens will be consumed by agents that are just doing continuous work for us," and said the one-agent chat model will look like a relic within a year or two. He said agent deployment is bottlenecked by the ability to test and tune agents on real work environments, and predicted every enterprise will need someone running evals and simulated environments. He called cyber a defining AI domain where models must be contained like insider risks with a "zero trust" architecture, and Box shipped Box Mount to mount Box as a file system inside any agent sandbox.

https://x.com/levie/status/2108750943680630893 | https://x.com/levie/status/2107283615247999257 | https://x.com/levie/status/2107680435644039269 | https://x.com/levie/status/2108952226714865966 | https://x.com/levie/status/2108279490510193078

### Vercel CEO Guillermo Rauch

Rauch reported that 58.18% of traffic on Vercel's network is bot-originated, that over 60% of deployments are agentic and that up to 83% of pageviews on Vercel's docs come from agents, concluding that "the web will thrive, but it will be built for and by agents." He said that as models speed up, harness overhead matters more, and that Vercel's Rust migration had contested returns because the human migration cost was so high: what is "best for humans" is no longer necessarily "best for business." He introduced gdp-ts, a TypeScript library and linter that requires "proofs" of authorization checks to stop teams and agents from shipping security bugs.

https://x.com/rauchg/status/2108733051283050964 | https://x.com/rauchg/status/2106885457212825983 | https://x.com/rauchg/status/2106863842450133114 | https://x.com/rauchg/status/2107119811444748555

### OpenAI's Thibault Sottiaux (Codex and ChatGPT)

Sottiaux ran a public 28-day streak promising either a clear improvement for most Codex/ChatGPT users or a full reset, and honored a community vote for a reset while keeping the shipped improvements. He said Codex Cloud was silently re-shipped and is "pretty good now," made steering instant, released GPT-6.1 Sol ultrafast, announced a new ChatGPT, and tied ChatGPT subscriptions into a Devin subscription.

https://x.com/thsottiaux/status/2106845241357824205 | https://x.com/thsottiaux/status/2108275041276420573 | https://x.com/thsottiaux/status/2108084615349170480 | https://x.com/thsottiaux/status/2108349826727588000 | https://x.com/thsottiaux/status/2108777962053292398

### Every CEO Dan Shipper

Shipper said OpenAI's Dots have taken over Every: they protect attention by posting results into Slack and bringing back replies, catch school emails and missed Slack messages, and work by voice when you are away from your laptop, though permissions still require repeated approvals. He said Every built Checks, a personal benchmarking platform for measuring how good new models are on real work, and that its company agent could not have been built without Claude Managed Agents. He predicted he will still use a persistent agent in a year, but "Boo will probably be dead," because people switch to whatever performs better.

https://x.com/danshipper/status/2107890633486582208 | https://x.com/danshipper/status/2108215087030800657 | https://x.com/danshipper/status/2107575089441181861 | https://x.com/danshipper/status/2106892868564431255

### Anthropic's Boris Cherny (Claude)

Cherny said there is "no secret to prompting": talk to Claude like a coworker, give it a goal and it will figure it out, because prompt wording mattered far more in the Sonnet 3.5 era. He now tells the model what to do, how much effort to spend and how to verify it did the right thing, and shared that a single prompt produced working code Claude verified well, with "no bugs so far."

https://x.com/bcherny/status/2107565388250874193 | https://x.com/bcherny/status/2107565497680314831 | https://x.com/bcherny/status/2108008010253533397

### Anthropic Claude Code's Thariq

Thariq described the "local hands" pattern, where Claude runs in the cloud but reaches files on your computer, and predicted a move toward Claude's brains in the cloud with local hands, while flagging tricky problems if your machine is offline. He said the most common failure he sees is people working outside their expertise who cannot be precise with prompts or plans and burn turns iterating imprecisely. He also ported a side-project Chrome extension from the Agent SDK to Claude Managed Agents with one prompt to Opus 5.5, making it "way more reliable."

https://x.com/trq212/status/2107229483015258493 | https://x.com/trq212/status/2107580785456976085 | https://x.com/trq212/status/2108021247301062894 | https://x.com/trq212/status/2108689101503566319

### Claude (official account)

Anthropic shipped Haiku 5.5 across AWS, Google Cloud and Microsoft Azure, saying it shows major improvements across almost all alignment evaluations with far fewer instances of misaligned behavior. It halved cache-read prices on Sonnet 5.5 to $0.10 per million tokens, making Sonnet 5.5 roughly 20% cheaper on most long-running work. Claude Docs, Slides and Design left beta for every plan including Free, and Anthropic paused its startup program's Claude Team and $1,000 API credit offers after hundreds of thousands of applicants.

https://x.com/claudeai/status/2107894057615987198 | https://x.com/claudeai/status/2107894054142787877 | https://x.com/claudeai/status/2107894060229034197 | https://x.com/claudeai/status/2108271559928389679 | https://x.com/claudeai/status/2108404561413349695

### Meta senior director of AI Madhu Guru

Guru argued the most common team mistake is treating evals as an extra QA step once the agent is built, when "your evals are your product spec." He listed the layers to rebuild for agent users, including desktop and mobile operating systems, cloud infrastructure, identity and permissions for thousands of agents, and shared interfaces. He said open-weight models did not start the fall in price per unit of intelligence but are "a tailwind on a trend that was already underway," and that the field moves capability, then trust, then autonomy.

https://x.com/realmadhuguru/status/2107292113214091355 | https://x.com/realmadhuguru/status/2108236391641706813 | https://x.com/realmadhuguru/status/2108618266776387886 | https://x.com/realmadhuguru/status/2108982858513776899

### Replit CEO Amjad Masad

Masad said AI-powered reverse engineering and decompilation is "absolutely insane" and predicted all software will become "de facto open-source." He warned that desktop AI apps expose users to supply-chain attacks and catastrophic agent mistakes, and said Replit is building a security-focused desktop experience as a Microsoft partner and an early adopter of Nvidia's OpenShell. He said the US is catching up on open-weights models and that "math was bound to fall first" because the purer the field the easier it is for AI to crack.

https://x.com/amasad/status/2107671204639465961 | https://x.com/amasad/status/2107926712277438503 | https://x.com/amasad/status/2107222388429766970 | https://x.com/amasad/status/2107934939287273551

### Y Combinator President and CEO Garry Tan

Tan argued lab harnesses have an incentive to burn tokens, giving startup harnesses real utility, and pointed to Grep converting token burn into deterministic, repeatable tested code. He predicted "AGI Science Loops" are coming with their own Muse/Instinct equivalents, naming Halmos, and said individual contributors with agents will eventually outproduce comparable people managers from prior eras. He described running the merge queue with GStack's /autoplan and agents that only let green full-CI runs into master, saying he rarely intervenes because "the frontier models are fantastic these days."

https://x.com/garrytan/status/2107129959550685660 | https://x.com/garrytan/status/2107173670699622830 | https://x.com/garrytan/status/2108433505038606620 | https://x.com/garrytan/status/2108954740013043789

### SPC general partner Aditya Agarwal

Agarwal published a long answer to the question of what an ambitious software engineer should do now, arguing "I can build it" is a weaker advantage now that AI makes working software widely available. He laid out three paths: work on the thing eating software, team up with a world-class domain expert, or accept supervising coding agents on roughly the same backlog, which he called the least compelling. He also celebrated physical intelligence co-founder Sergey Levine visiting SPC and his first Waymo ride with Waymo co-CEO Dmitri Dolgov.

https://x.com/adityaag/status/2107865115831988530 | https://x.com/adityaag/status/2108578813751791926 | https://x.com/adityaag/status/2107934826686759310

### FPV Ventures partner Nikunj Kothari

Kothari said there is "so much alpha in meeting founders at their own office," where you can read the office energy, how cofounders complement each other and what beta releases look like. He warned that VCs rage-baiting on X are destroying their long-term brand, noting two deals that fell apart over the drama. For a seed-stage founder with dwindling runway he offered three options: be a cockroach and get to default profitable, find an orthogonal fast-growing area, or sell or get acquihired and found again later.

https://x.com/nikunj/status/2106957269212742135 | https://x.com/nikunj/status/2107706522457497753 | https://x.com/nikunj/status/2108410378233549106 | https://x.com/nikunj/status/2109038632975876395

### Peter Yang (practical AI tutorials and interviews)

Yang interviewed Granola co-founder Sam, who said "the easier it gets to build stuff, the more it matters to really sweat the details," and that it is fine for Granola to be used through an MCP instead of its UI because enterprise internal tooling makes it a non-starter otherwise. Yang said OpenAI simplifying ChatGPT is welcome because it has "become a mess," calling Work's separate brand a mistake. He argued anything you ship can be decompiled and rebuilt by AI, so software margins will depend on proprietary data or distribution.

https://x.com/petergyang/status/2106825485624004691 | https://x.com/petergyang/status/2106897211766530299 | https://x.com/petergyang/status/2106926956554195018 | https://x.com/petergyang/status/2107981547102245101

### OpenAI's Nan Yu (product, Codex)

Yu said agents make engineers extremely powerful, but PMs are "generally still bottlenecked on their bandwidth they have to talk to customers," so the ideal engineer-to-PM ratio is 1:1. He described the arc from writing code by hand to tab-completing code to prompting agents, and now "we tab-complete that too," asking whether it is recursive self-improvement. He also worried that fast AI fixes could cause "extreme degradation in systems that no one loves to maintain, but someone has to."

https://x.com/thenanyu/status/2108976262698115550 | https://x.com/thenanyu/status/2108671762984731037 | https://x.com/thenanyu/status/2107506074370920796

### OpenClaw creator Peter Steinberger (OpenClaw, OpenAI)

Steinberger said he hooked his team's claw into X so unassigned sessions can be grabbed by anyone, with the agent pinging whoever last worked on the related code. He spoke at OpenAI DevDay 2026 about how teams can use agents to work better together, and celebrated landing a .claw domain.

https://x.com/steipete/status/2107697554448421160 | https://x.com/steipete/status/2107911769767440832 | https://x.com/steipete/status/2108374513931165759

## Podcast

### Training Data: Google's AI Infrastructure Chief, Amin Vahdat, on the Physics & Economics of Frontier AI

https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

**The Takeaway:** Google measures its buildout in delivered "goodput" per watt, not FLOPS, because at 100,000-accelerator scale something fails multiple times a day and only workload-level performance counts.

Amin Vahdat runs Google's AI infrastructure during what he calls the biggest buildout in human history, with Google alone expected to spend more than $200 billion on capital expenditure this year. He dismisses FLOPS as a vanity metric; the number that matters is "delivered goodput," the useful work a workload delivers under real failure conditions. At 100,000-accelerator scale, he says something fails multiple times a day and perhaps multiple times an hour, so the hard engineering is continuous near-real-time detection and recovery. Google has told teams to roughly double token-generation capacity every six months, and he says as much of that comes from software and model optimization as from silicon, with most intelligence-per-watt gains coming from models. He walks through the TPU program, launched in 2013 as a bet against what he calls "the bitter lesson of chips," and the 2026 decision to ship two chips, 8i for inference and 8T for training, because inference now justifies specialization. On power, he explains why Google prefers grid connection and years of co-planning over vertical integration, and he is candid that energy is the binding long-term constraint.

### No Priors: Beam: The Great American Open Model with ReflectionAI Co-Founder and CEO Misha Laskin

https://www.youtube.com/@NoPriorsPodcast

**The Takeaway:** Reflection AI's Misha Laskin argues open-weight models are the safer default for AI, and that the West needs its own open frontier model so the world is not building on a single country's stack.

Misha Laskin, co-founder and CEO of Reflection AI, scaled the company from about 30 to roughly 300 people in a year to build frontier open intelligence, and released Beam, an open model with 500 billion total parameters and 23 billion active parameters, trained on about 6,000 GB300s in roughly 12 days. He says Beam is three to four times more reasoning-efficient than models of the same capability class because Reflection paired a strong pretraining base with what he believes is the largest reinforcement learning run done in open source. His case for openness is empirical: with a few hundred safety researchers inside closed labs, it is "impossible to cover the long tail of unintended consequences," so, evoking Linus's Law, "with enough eyeballs, all bugs become shallow." He argues the West needs at least two strong open-model efforts so the base everyone builds on does not come from one country, and describes open models as "Trojan horses for the infrastructure that they bring with them." He estimates each generation needs roughly 4x more compute, so catching up to the frontier moves from hundreds of millions to billions to tens of billions of dollars.

### Unsupervised Learning: Ep 94: Applied Compute CEO on the Limits of RL, the New AI Hyperscaler & Why Post-Training Wins Inference

https://www.youtube.com/@RedpointAI

**The Takeaway:** Post-training custom models is how enterprises differentiate, and because inference is where the money goes, "post training actually wins inference."

The CEO of Applied Compute argues that "owning your intelligence" is really about flexibility and control, not protecting against malicious labs: where models run, how they are deployed, and what they are optimized for. He frames reinforcement learning bluntly as "a hill climbing machine" where "the hardest part is actually defining the hill to climb," which is why evals matter so much and why companies should guard them carefully, because employees, like training data, are not fungible. His central commercial claim is that "post training actually wins inference": the largest, most expensive workloads are where post-training pays off first, and because inference is where most model dollars are eventually spent, controlling the model layer compounds. He says it is surprisingly easy to hill climb on non-verifiable domains by turning them into proxy-verifiable ones, such as rubric-based RL graded against expert answers, which is how Applied Compute built a custom model for the legal AI company Harvey. He calls the blocker to continual learning, data-efficient training from sparse rewards, unsolved, and expects the future to be "a non static set of weights" with feedback loops running from the real world back into the model.

### Also published

- AI & I by Every: Why Every Traded Personal Agents for One Company Agent | https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

## Blog

The validated weekly feed contained no qualifying blog posts for this window.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders

