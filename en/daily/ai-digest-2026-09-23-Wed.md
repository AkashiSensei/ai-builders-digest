[English](./ai-digest-2026-09-23-Wed.md) | [中文](../../zh/daily/ai-digest-2026-09-23-Wed.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-09-23-Wed.md)

---

# AI Builders Digest

## Reader's Briefing

**1. The frontier price war is compressing the cost per task faster than any technology before it.** Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, announced that GPT-6 Sol and Luna are out, a very significant improvement across the board including writing, and that OpenAI is permanently cutting the API price by 50% while loading a banked reset into all Plus, Pro and Business accounts. Box CEO Aaron Levie frames the day as an inflection: with the Opus 5.5 price cuts and the 50% GPT-6 token price drop, the cost per task on a like-for-like basis is falling faster than in any other type of technology in history, which he calls Jevons paradox applied to agents. Vercel CEO Guillermo Rauch's fresh Next.js evals put Opus 5.5, GPT 6 Sol and Fable 5.1 in a tie at 97%, with Grok 4.7 close behind at 94% and 2x-7x cheaper. Levie's read is that every drop opens more use cases for agents to process data, scan code for security issues and read log data to make decisions at scale.

**2. Claude Opus 5.5 shipped as the new default across Anthropic's products.** Cat Wu, who works on Claude Code and Cowork at Anthropic, says Opus 5.5 is now the default model in Claude Code and the Claude app including Cowork for Pro, Max and Team plans, that the team is defaulting to effort medium, which is comparable to Fable 5.1 on intelligence but faster, and that rate limits will go 25% further than on Opus 5. The official Claude account confirmed Opus 5.5 is available today. Boris Cherny, who works on Claude Code at Anthropic, called Opus 5.5 a really good model and his daily driver for the last few weeks. On the enterprise side, Levie reported that Box tested Opus 5.5 with the Box Agent and saw frontier capability levels with 63% fewer tokens used, 42% less verbosity and 30% faster than Opus 5.

**3. Formal verification and ambitious ports show how far coding agents reach.** Cherny says he used Opus 5.5 to formally verify the Claude Agent SDK using Lean, where a couple of short prompts produced 16 PRs fixing various bugs and race conditions, and that TLA+ also works well, sometimes combining Lean and TLA+ to look for issues around data flow, concurrency and state management. He does not know either language well but says Claude is excellent at both, and asks whether formal verification is the future of coding, or at least of bug finding. In a head-to-head, he says Opus 5.5 and Fable 5.1 each ported HAProxy from C to Rust, both passing nearly all of HAProxy's tests, but Opus 5.5 finished in 9.5 hours versus Fable 5.1's 12 hours and for 51% less cost. Y Combinator President and CEO Garry Tan says Capy lets him drop PRs much faster than he would with Codex or Claude Code alone.

**4. Builders are converging on craft, taste and the user rather than raw feature volume.** Vercel CEO Guillermo Rauch praised the tastefulness with which Anthropic ships, arguing that the excitement about headless for the web is that any page could take whatever whimsical or unique shape you wanted, and that with AI there is no excuse not to push the design frontier. Anthropic researcher Alex Albert has been on a Blender kick with Opus 5.5, saying its better 3D modeling and vision mean you can build an entire world from a single prompt, and shared a prompt that recreates San Francisco's Market Street in 1906, the afternoon before the earthquake, with every building traced back to source data. Thariq, who works on Claude Code at Anthropic, argues that the right way to use model capabilities is not to ship 10x more features to production but to spend more time understanding your users, trying experiments and learning about things you do not understand. Aditya Agarwal, General Partner at SPC and co-founder of Bevel Health, makes the delight case: in the mad dash for productivity we often forget that AI products should be delightful and fun.

**5. The rest of the agent-adjacent stack: tools, bugs and safety infrastructure.** Peter Steinberger, who works on OpenClaw and OpenAI, said that after ChatGPT sometimes crashed for him on macOS 27, Astra found a roughly 14-year-old bug in libuv. Aditya Agarwal drew a line from today's model safety debate back to autonomous vehicles, noting that the original safety debate for AI and machine learning was actually in self-driving cars, and that the most interesting part of hosting Waymo's Dmitri Dolgov at SPC was the extensive eval and testing infrastructure Waymo built to release 2-ton robots traveling at 30mph through urban environments. Every CEO Dan Shipper shared a vibe check on Opus 5.5 versus Sol-6, alongside his take on why AI automation creates more good work to do for human experts.

**6. The ecosystem around the models: money, media and distribution.** FPV Ventures partner Nikunj Kothari warns not to believe fundraise headlines: so many SPVs are organized by even the best investors that a large share of a big round can come from SPVs while the headline says something else, and combined with tranched valuations and revenue not being the same, proof is in the pudding and the pudding is not publicly visible anywhere. Garry Tan says GStack actually tells you to apply to YC if you are working on something cool, and argues we need to teach the world to prompt and maximally use AI so that all people can see how it gives you wings in all your pursuits. OpenAI CEO Sam Altman said startups are naturally good at something that is hard for a bigger company to keep doing, calling it an underexplored space.

## X / Twitter

### Thibault Sottiaux: Codex and ChatGPT at OpenAI

Thibault Sottiaux announced that GPT-6 Sol and Luna are out, describing them as a very significant improvement across the board, including writing and general quality. He said OpenAI is permanently reducing the API price by 50%, making both models viable for a ton of new use cases and making usage go further even on subscriptions, and that a banked reset is being loaded into all Plus, Pro and Business accounts. In a separate post he said the team has been focusing on efficiency and intelligence for all, and that this is only possible when you have incredible models at the top end of capability that you can then use to make a big difference in everything else.

- [Thibault Sottiaux: GPT-6 Sol and Luna are out, with a permanent 50% API price cut](https://x.com/thsottiaux/status/2102463847714247142)
- [Thibault Sottiaux: "efficiency and intelligence for all"](https://x.com/thsottiaux/status/2102440619616682120)
- [Thibault Sottiaux: "Maybe our cutest launch so far"](https://x.com/thsottiaux/status/2102509507415048245)

### Aaron Levie: CEO, Box

Aaron Levie called it an insane day in AI, with frontier models just becoming substantially cheaper through the Opus 5.5 price cuts and GPT-6 Sol and Luna dropping token prices by 50%. He argues that the rate at which cost per task falls on a like-for-like basis is unlike any other type of technology in history, and that every time the cost of AI drops, the use cases you can deploy agents against dramatically increase, which he calls Jevons paradox applied to agents. He expects broader diffusion of AI in the economy as agents process all of our data, scan our code for security issues, read through log data to make decisions and run as agent swarms in workflows. He also detailed Box's testing of Opus 5.5 on complex enterprise knowledge work with the Box Agent: frontier capability levels with major performance improvements over Opus 5, 63% fewer tokens used, 42% less verbosity and 30% faster, including a financial services due diligence task at +39% accuracy, a cloud cost analysis task at +65%, a client account analysis at +17% and a clinical diagnostics task at +15%, with customers able to build AI agents with Opus 5.5 in Box AI Studio shortly.

- [Aaron Levie: cheaper frontier models open up agent use cases, Jevons paradox applied to agents](https://x.com/levie/status/2102477253070430322)
- [Aaron Levie: Box's enterprise tests of Opus 5.5 with the Box Agent](https://x.com/levie/status/2102448415775051790)

### Boris Cherny: Claude Code at Anthropic

Boris Cherny said he used Opus 5.5 to formally verify the Claude Agent SDK using Lean, where a couple of short prompts produced 16 PRs fixing various bugs and race conditions. He added that TLA+ also works well and that he sometimes combines Lean and TLA+ to look for issues around data flow, concurrency and state management, and that while he does not know either language well, Claude is excellent at both, making this approach super useful for formally modeling your code and finding bugs a human probably would not have spotted; he asks whether formal verification is the future of coding, or at least of bug finding. In another post he said Opus 5.5 is a really good model and has been his daily driver for the last few weeks, sharing a head-to-head where Opus 5.5 and Fable 5.1 each ported HAProxy from C to Rust, both passing nearly all of HAProxy's tests, but with Opus 5.5 finishing in 9.5 hours versus Fable 5.1's 12 hours and for 51% less cost.

- [Boris Cherny: formally verifying the Claude Agent SDK with Lean produced 16 PRs](https://x.com/bcherny/status/2102543349102338309)
- [Boris Cherny: Opus 5.5 ported HAProxy to Rust in 9.5 hours for 51% less cost than Fable 5.1](https://x.com/bcherny/status/2102439069053747549)
- [Boris Cherny: "Opus made an infographic"](https://x.com/bcherny/status/2102543350436180277)

### Cat Wu: Claude Code and Cowork at Anthropic

Cat Wu said Claude Opus 5.5 is now the default model in Claude Code and the Claude app, including Cowork, for Pro, Max and Team plans, and that she has been using Opus 5.5 as a daily driver and loves its clear communication skills and its ability to write in her style. She said the team is defaulting to effort medium across products, which is comparable to Fable 5.1 on intelligence but faster, and that rate limits will go 25% further on Opus 5.5 compared to Opus 5. She also pointed to ways to try Opus 5.5 and Claude Tag in Slack.

- [Cat Wu: Claude Opus 5.5 is the new default in Claude Code and the Claude app](https://x.com/_catwu/status/2102437713781944397)
- [Cat Wu: ways to try Opus 5.5 and Claude Tag in Slack](https://x.com/_catwu/status/2102569951974584612)

### Guillermo Rauch: CEO, Vercel

Guillermo Rauch shared fresh Next.js evals where Opus 5.5, GPT 6 Sol and Fable 5.1 all landed at 97% and Grok 4.7 at 94%, noting that Grok is 2x-7x cheaper. He also praised the tastefulness with which Anthropic ships, arguing that the main reason he got excited about headless for the web is that any given page could take whatever whimsical or unique shape you wanted, and that with AI there is no excuse not to push the design frontier. Separately he wrote that software will never die again, and that if you liked Google Reader you can generate and deploy your own, yours forever.

- [Guillermo Rauch: fresh Next.js evals put three models at 97%](https://x.com/rauchg/status/2102519097770885231)
- [Guillermo Rauch: the tastefulness of Anthropic's shipping and pushing the design frontier](https://x.com/rauchg/status/2102438365455167883)
- [Guillermo Rauch: "Software will never die again"](https://x.com/rauchg/status/2102594015669756323)

### Alex Albert: Research at Anthropic

Alex Albert said he has been on a Blender kick with Opus 5.5, arguing that its better 3D modeling and vision mean you can build an entire world from a single prompt, and shared a historically accurate reconstruction of San Francisco's Market Street in 1906, pre-earthquake. The prompt he showed asks the model to recreate Market Street as it stood on April 17, 1906, the afternoon before the earthquake, scoped from the Ferry Building up Market to Fifth Street including the Palace Hotel, the Call Building, the Chronicle Building, Lotta's Fountain and the Emporium, and to build a source file first from the 1899-1905 Sanborn fire insurance maps, the Miles Brothers film "A Trip Down Market Street," period photographs and USGS topography before modeling anything, so that every building traces back to data and is assembled in Blender Python with reusable generators.

- [Alex Albert: building an entire world from a single Opus 5.5 prompt in Blender](https://x.com/alexalbert__/status/2102466523164274839)
- [Alex Albert: the prompt recreating pre-earthquake Market Street from source data](https://x.com/alexalbert__/status/2102466524934271381)

### Thariq: Claude Code at Anthropic

Thariq argued that the right way to use model capabilities is not to ship 10x more features to production, but to spend more time understanding your users, trying experiments, building prototypes and learning about things you do not understand so that you ship things that actually work. He said workflows are a huge part of how he uses Claude these days and that he is glad to have Fable-like intelligence that works with workflows from a cost perspective. On games, he said 3D generation is a great capability to help you imagine your game come to life, but that you should figure out how to make a good, satisfying game loop first.

- [Thariq: use model capabilities to understand users, not to ship 10x more features](https://x.com/trq212/status/2102548686303854790)
- [Thariq: workflows are a huge part of how he uses Claude](https://x.com/trq212/status/2102477527688388752)
- [Thariq: figure out the game loop before the 3D generation](https://x.com/trq212/status/2102549030303867257)

### Garry Tan: President and CEO, Y Combinator

Garry Tan said Capy lets him drop PRs much faster than he would with Codex or Claude Code alone. He also noted that GStack does actually tell you to apply to YC if you are working on something cool, and argued that we need to teach the world to prompt and maximally use AI so that all people can see the way it can give you wings in all your pursuits, and then yearn to solve more problems for ourselves and for one another.

- [Garry Tan: Capy lets him drop PRs much faster than Codex or Claude Code alone](https://x.com/garrytan/status/2102544711647129902)
- [Garry Tan: GStack does tell you to apply to YC](https://x.com/garrytan/status/2102537390774759761)
- [Garry Tan: teach the world to prompt and maximally use AI](https://x.com/garrytan/status/2102501556348440983)

### Claude: the official Claude account

The official Claude account said Claude Opus 5.5 is available today and asked what people will explore, and highlighted two community-built examples: an algorithmic drawing program created by kevin_t_ngo where every drawing is based on a different seed, and a toy brick-building app that turns a photo or a description into a buildable model with custom instructions.

- [Claude: Claude Opus 5.5 is available today](https://x.com/claudeai/status/2102471892099866883)
- [Claude: an algorithmic drawing program by kevin_t_ngo](https://x.com/claudeai/status/2102471889092276516)
- [Claude: a toy brick-building app](https://x.com/claudeai/status/2102471885061812714)

### Aditya Agarwal: General Partner at SPC and co-founder of Bevel Health

Aditya Agarwal argued that while safety and alignment of models is the raging topic today, the original safety debate for AI and machine learning was actually in autonomous vehicles. He described his first Waymo ride as feeling like a religious experience, and said the most interesting part of hosting Waymo's Dmitri Dolgov at SPC was the extensive eval and testing infrastructure Waymo has built out to gain the confidence to release 2-ton robots traveling at 30mph through urban environments, adding that he is excited to release the full video soon. He also noted that this was the first Minus One fireside his 9-year-old asked to attend, and argued that in the mad dash for productivity we often forget that AI products should be delightful and fun, recommending Sentience.

- [Aditya Agarwal: the original AI safety debate was actually in autonomous vehicles](https://x.com/adityaag/status/2102457464432284019)
- [Aditya Agarwal: hosting Waymo's Dmitri Dolgov at SPC](https://x.com/adityaag/status/2102498288658526614)
- [Aditya Agarwal: AI products should be delightful and fun](https://x.com/adityaag/status/2102421668509733058)

### Nikunj Kothari: partner at FPV Ventures

Nikunj Kothari warned that the amount of SPVs organized by even the best investors is mind boggling, so that if you read the headline of a large fundraise you can be reasonably sure a large amount of it came from SPVs even though the headline says something else. Combined with tranched valuations and revenue not being the same, his advice is not to believe the headlines anymore, because the proof is in the pudding and the pudding is not publicly visible anywhere. He also shared part three of his "A Walk In The Park" series featuring Todd Saunders, now also on YouTube, with chapters covering vertical versus horizontal software, a $10M pivot, life after the exit and why raise VC again.

- [Nikunj Kothari: don't believe fundraise headlines](https://x.com/nikunj/status/2102534909076349291)
- [Nikunj Kothari: "A Walk In The Park" part three with Todd Saunders](https://x.com/nikunj/status/2102395699895677325)
- [Nikunj Kothari: "A Walk In The Park" part three is now also on YouTube](https://x.com/nikunj/status/2102409907278602622)

### Dan Shipper: CEO, Every

Dan Shipper said he added almost 10k new followers in a day and pointed newcomers to two things: his vibe check on Opus 5.5 versus Sol-6, and his take on why AI automation creates more good work to do for human experts.

- [Dan Shipper: a vibe check on Opus 5.5 versus Sol-6 and why automation creates more good work](https://x.com/danshipper/status/2102556723244564715)

### Peter Steinberger: OpenClaw and OpenAI

Peter Steinberger said that after ChatGPT sometimes crashed for him following an update to macOS 27, Astra found a roughly 14-year-old bug in libuv.

- [Peter Steinberger: Astra found a roughly 14-year-old bug in libuv](https://x.com/steipete/status/2102501642176528743)

### Sam Altman: OpenAI CEO

Sam Altman said startups are naturally good at this, and that it is hard to keep a bigger company good at it, which he thinks is an underexplored space.

- [Sam Altman: startups are naturally good at what is hard for bigger companies](https://x.com/sama/status/2102469008079679640)

## Podcast

The validated podcast feed for this run contained no new qualifying episodes.

## Blog

The validated blog feed for this run contained no new qualifying posts.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
