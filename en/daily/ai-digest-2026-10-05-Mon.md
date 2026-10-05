[English](./ai-digest-2026-10-05-Mon.md) | [中文](../../zh/daily/ai-digest-2026-10-05-Mon.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-10-05-Mon.md)

---

# AI Builders Digest

## Reader's Briefing

**1. OpenAI's Codex/ChatGPT team commits to a 28-day shipping sprint, and reviewers want a simpler ChatGPT.** Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, says that "over the next 28 days, each day we'll either ship one thing that is a clear improvement and relevant for most codex/work users or ship a full reset." Peter Yang, who makes practical AI tutorials and interviews, welcomes OpenAI's renewed focus on simplifying ChatGPT, which he says "has become a mess," and lists what he would cut: Work vs. Codex, Spaces vs. Pages vs. Sites, and the model and effort picker. His hot take is that "the whole Work launch was a mistake," arguing that just as Claude folded Cowork back into Chat, Work does not need its own brand. ([Thibault Sottiaux](https://x.com/thsottiaux/status/2106845241357824205), [Peter Yang](https://x.com/petergyang/status/2106926956554195018))

**2. AI is minting new technical jobs, and consumer AI's economics look different from the hype.** Box CEO Aaron Levie says we are already starting to see the jobs AI creates: AI engineers who build applied products sold to or within enterprises, forward-deployed engineers who put agents to work inside companies, and new services firms for deploying AI. He argues the published stats undercount how many existing data, research, and software jobs are being repositioned toward agent deployment at "every bank, life sciences company, manufacturer, and even law firm," concluding that "it's a lot easier to picture what AI can replace vs. what it creates until it starts happening." In a separate post he says a widely cited consumer AI metric "may tell us more about the business model of consumer AI than the state of AI," since consumer AI will almost inevitably be subsidized and monetized through commerce, ads, or device and service purchases, and the number "may level off lower than we think." ([Aaron Levie](https://x.com/levie/status/2106893015063421357), [Aaron Levie](https://x.com/levie/status/2106802940879192260))

**3. The agent era is rewriting engineering trade-offs, from Rust to the harness layer.** Vercel CEO Guillermo Rauch says DHH "is fundamentally right about Rust," recounting Vercel's multi-year Rust-ification and the migration of Turborepo from Go to Rust, where the ROI was "quite controversial internally" because human migration costs were substantial even though Rust was better for the low-level OS access a build system needs. What changed, he writes, is that "the calculus has now changed. What's 'best for humans' is no longer necessarily 'best for business'," as agents rewrite the economics, and he doubts Rust is the final toolchain since it was designed "before the 'supersonic tsunami' of agents hit." He also notes that as models get faster, harness overhead matters more, with the next Vercel release improving session storage and retrieval plus cloud durability in libfx, and offers a rule of thumb for the agent age: READMEs, blogs, and tweets should be hand-written for humans, while internal documentation can be "AI English" for agents. ([Guillermo Rauch](https://x.com/rauchg/status/2106885457212825983), [Guillermo Rauch](https://x.com/rauchg/status/2106863842450133114), [Guillermo Rauch](https://x.com/rauchg/status/2106848085267902815))

**4. Refounding incumbents, not just selling them software, is the bet of the AI transition.** On No Priors, Sequence Holdings co-founder and CEO Michael Lee explains why his permanent holding company buys whole businesses and "refounds" them around frontier engineering instead of selling software or services into them. He argues that in many industries the incumbent holds the lasting advantages, such as brand, scale, network effects, or regulation, and that owning one lets you inherit those advantages and rebuild it. Service providers, he says, have an incentives problem because they optimize for "getting in your wallet, staying in your wallet, growing the share of your wallet," which he calls "a path towards incrementalism." Sequence tries to do roughly one deal a year, and at a Georgia bank it built a platform called Atlas, cut average consumer underwriting time by 94%, and reduced the average loan from 30 days to 11 days end to end. ([No Priors](https://www.youtube.com/watch?v=TCpRwJBQvW0))

**5. The persistent-agent interface is here, and builders are betting it sticks.** Every CEO Dan Shipper says "dot has become my primary interface to AI over the last few weeks," and his own dot is named "boo." He bets that in a year he will still be interacting with ChatGPT as an always-on persistent agent, "but boo will have disappeared," much as people dropped the personality quirks of early OpenClaw agents "as soon as there was something functionally more powerful available." Y Combinator President and CEO Garry Tan reads the same pattern: "When everyone is building the same primitives it does speak to needs that will only intensify from here. And we will eventually converge on the correct OS." Ryo Lu, who has designed Cursor, Notion, and Stripe, shows the form factor moving that way with a full-bleed desktop layout and a side dock, calling it "lil computer in your pocket." ([Dan Shipper](https://x.com/danshipper/status/2106892868564431255), [Garry Tan](https://x.com/garrytan/status/2106901111106097210), [Ryo Lu](https://x.com/ryolu_/status/2106777615801713054))

**6. Builders keep insisting on human judgment, in-person signal, and understanding what models actually are.** FirstMark Capital VC and MAD Podcast host Matt Turck calls out what he considers the most poorly understood aspect of AI outside AI circles: that "models are grown, not built" and "we don't really know how they work," which is why better interpretability matters. FPV Ventures partner Nikunj Kothari argues there is "so much alpha in meeting founders at their own office," where you can read the office's energy, how co-founders answer and complement each other, and what beta product releases look like, and says founders often tell him he is the only investor who has ever asked. Builder Zara Zhang makes a compact prediction about hiring signal: "X profiles are replacing resumes." ([Matt Turck](https://x.com/mattturck/status/2106821381765956044), [Nikunj Kothari](https://x.com/nikunj/status/2106957269212742135), [Zara Zhang](https://x.com/zarazhangrui/status/2106782239493427588))

## X / Twitter

### Thibault Sottiaux

Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, set an aggressive shipping cadence: "Over the next 28 days, each day we'll either ship one thing that is a clear improvement and relevant for most codex/work users or ship a full reset. Let the improvements begin."

- [Thibault Sottiaux: a 28-day codex/work shipping sprint](https://x.com/thsottiaux/status/2106845241357824205)

### Peter Yang

Peter Yang, who makes practical AI tutorials and interviews, is glad OpenAI is focusing on simplifying ChatGPT, which he says "has become a mess." He lists what he would simplify: Work vs. Codex, Spaces vs. Pages vs. Sites, and the model and effort picker. His hot take is that "the whole Work launch was a mistake," arguing that just as Claude folded Cowork back into Chat, Work does not need its own brand. In other posts he relays an answer from Sam, co-founder of Granola, on users skipping the Granola UI and going straight through the MCP: Sam said there was "definitely a pang of sadness to that as a UI designer," and that the team fought it before accepting that for many enterprise workflows "the best way to use Granola is to capture the context, then use it through your internal agent." Yang also quotes Sam's advice that builders should hold themselves accountable not just to shipping version one, but to asking "Does the person actually get daily value out of it?"

- [Peter Yang: simplifying ChatGPT](https://x.com/petergyang/status/2106926956554195018)
- [Peter Yang: Granola's Sam on MCP-first workflows](https://x.com/petergyang/status/2106897211766530299)
- [Peter Yang: ship for daily value](https://x.com/petergyang/status/2106825485624004691)

### Guillermo Rauch

Guillermo Rauch, CEO of Vercel, says a tool that was hard to imagine getting even faster is now "much faster," and argues that "as models speed up (as with Astra ultrafast), harness overhead matters more and more." He says the next release will bring better performance for session storage and retrieval and "a big unlock for cloud durability in libfx." On engineering strategy, he says DHH "is fundamentally right about Rust," recounting that Vercel migrated Turborepo from Go to Rust even though the ROI was "quite controversial internally" because human migration costs were substantial, with Rust better for the low-level OS access a build system needs. The calculus changed, he writes, because "What's 'best for humans' is no longer necessarily 'best for business'," and he doubts Rust is the final toolchain since it was designed "before the 'supersonic tsunami' of agents hit." On a new project, he says the README is written by hand "because it's for human consumption," while the internal documentation is "AI English, because they're for agents."

- [Guillermo Rauch: faster harness, less overhead](https://x.com/rauchg/status/2106885457212825983)
- [Guillermo Rauch: Rust, Turborepo, and the agent calculus](https://x.com/rauchg/status/2106863842450133114)
- [Guillermo Rauch: human READMEs, agent docs](https://x.com/rauchg/status/2106848085267902815)

### Aaron Levie

Aaron Levie, CEO of Box, argues we are "already starting to see what kind of new jobs AI is creating." Because deploying AI takes significant technical work and surrounding services, he points to AI engineers building applied products for enterprises, forward-deployed engineers deploying agents inside companies, and new services firms. He adds that published job stats undercount the existing data, research, and software roles being repositioned toward AI work at "every bank, life sciences company, manufacturer, and even law firm," and concludes that "it's a lot easier to picture what AI can replace vs. what it creates until it starts happening." In a separate post he says a consumer AI metric "may tell us more about the business model of consumer AI than the state of AI," predicting consumer AI will be subsidized and monetized via commerce, ads, or device and service purchases, and that the number "may level off lower than we think."

- [Aaron Levie: the new jobs AI creates](https://x.com/levie/status/2106893015063421357)
- [Aaron Levie: consumer AI's business model](https://x.com/levie/status/2106802940879192260)

### Ryo Lu

Ryo Lu, who has designed Cursor, Notion, and Stripe, shared UI work in progress: a full-bleed desktop layout with a side dock, describing the direction as "lil computer in your pocket."

- [Ryo Lu: full-bleed desktop and side dock](https://x.com/ryolu_/status/2106777615801713054)

### Garry Tan

Garry Tan, President and CEO of Y Combinator, observes that "when everyone is building the same primitives it does speak to needs that will only intensify from here," and predicts that "we will eventually converge on the correct OS."

- [Garry Tan: converging on the correct OS](https://x.com/garrytan/status/2106901111106097210)

### Matt Turck

Matt Turck, a VC at FirstMark Capital and host of the MAD Podcast, flags what he considers the most poorly understood aspect of AI outside AI circles: that "models are grown, not built" and "we don't really know how they work," which is why better interpretability is urgent. He credits Eric Ho of Goodfire AI on the point.

- [Matt Turck: models are grown, not built](https://x.com/mattturck/status/2106821381765956044)

### Zara Zhang

Builder Zara Zhang offers two short observations: that the new Opus model "just silently goes off to make something for 20+ minutes and comes back with a complete masterpiece," and that "X profiles are replacing resumes."

- [Zara Zhang: Opus 5.5 goes off and comes back](https://x.com/zarazhangrui/status/2106876921082712250)
- [Zara Zhang: X profiles are replacing resumes](https://x.com/zarazhangrui/status/2106782239493427588)

### Nikunj Kothari

Nikunj Kothari, a partner at FPV Ventures, writes that he "just can't believe how people make investments over a Zoom call," and that there is "so much alpha in meeting founders at their own office." In person, he says, you can read the office's energy, how coworkers react and work together, how co-founders answer and complement each other, and what beta product releases look like. Even under time pressure he asks to meet at offices for final meetings, and says founders often tell him he is the only one who has ever asked: "What's the point of calling them into your own conference room and parrot the same deck?"

- [Nikunj Kothari: meet founders at their office](https://x.com/nikunj/status/2106957269212742135)

### Peter Steinberger

Peter Steinberger, who works on OpenClaw and at OpenAI, posted a short release note of "bug fixes & performance improvements."

- [Peter Steinberger: bug fixes and performance improvements](https://x.com/steipete/status/2106796559400882209)

### Dan Shipper

Dan Shipper, CEO of Every, says that "dot has become my primary interface to AI over the last few weeks," and that his dot is named "boo." He bets that in a year he will still be interacting with ChatGPT as an always-on persistent agent, "but boo will have disappeared," comparing it to early OpenClaw days when people loved the personality quirks of their agents but dropped them "as soon as there was something functionally more powerful available."

- [Dan Shipper: dot, boo, and the persistent agent](https://x.com/danshipper/status/2106892868564431255)

## Podcast

### No Priors: Re-Founding Incumbents for the AI Era with Sequence Holdings Co-Founder and CEO Michael Lee

The Takeaway: If AI is the next industrial revolution, the biggest opportunity may be to buy strong incumbents and "refound" them around frontier engineering, rather than selling them software or services.

Michael Lee is co-founder and CEO of Sequence Holdings, a permanent holding company that partners with management teams to buy and refound businesses as AI-era market leaders. It recently announced the largest AI take-private to date, with the Dell family office, for insurance broker Baldwin at $7.7 billion. Lee came to the idea after covering AI at Lone Pine starting in 2017, when AlphaGo and the first transformer paper landed; when ChatGPT arrived at the end of 2022, he concluded the world finally had an architecture that could scale, and that AI's impact on the economy would be uneven.

His thesis is that in many industries the incumbent holds the lasting advantages, whether brand, scale, network effects, or regulation, and that owning one lets you inherit those advantages and rebuild it with a frontier engineering team. Software alone is limited, he argues, because it always sells into the workflow "as it's designed today," and services firms have an incentives problem: they optimize for "getting in your wallet, staying in your wallet, growing the share of your wallet," which he calls "a path towards incrementalism."

Sequence tries to do roughly one deal a year. Its first investment was a Georgia community bank, where it built a platform called Atlas with four layers, including a data ontology and an agent builder. The results: average consumer underwriting time fell 94%, the average loan went from 30 days to 11 days end to end, and the bank absorbed a quarter in which loan volumes doubled without changing its underwriting standards, with a smaller underwriting team. Lee's biggest lesson from starting a company is empathy for founders: "the highs are highs, the lows are low. There are days where it's extremely, exceptionally lonely, but I cannot be having more fun."

https://www.youtube.com/watch?v=TCpRwJBQvW0

## Blog

The validated feed contained no new qualifying blog posts for this run.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
