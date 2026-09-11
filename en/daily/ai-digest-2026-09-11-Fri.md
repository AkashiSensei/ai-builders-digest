[English](./ai-digest-2026-09-11-Fri.md) | [中文](../../zh/daily/ai-digest-2026-09-11-Fri.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-09-11-Fri.md)

---

# AI Builders Digest

## Reader's Briefing

**1. Compute capacity is the binding constraint, and it is reshaping access.** OpenAI's Thibault Sottiaux says the company will pause new subscriptions to its $200 Pro plan so current users keep an incredible experience and continued access to Astra, calling it "the smallest step that allows us to continue giving the broadest access possible." All other plans and the API stay available, existing accounts are unaffected, and capacity is being added as fast as possible. Peter Steinberger's read is that Astra demand is growing too fast. On the podcast, Recursive's Richard Socher calls compute the biggest constraint on the road to recursive self-improvement, and the conversation notes the company raised $650 million and committed $410 million of it to a single Amazon compute deal.

**2. Recursive self-improvement is being framed as a science engine, not just a bigger model.** Socher's Recursive is built to automate AI research itself. The blueprint in his book The Eureka Machine has four pillars: human knowledge ingested through LLMs, the scientific measurements we can now capture, simulation, and real-world experimentation through robotics, with an agent swarm on top. His central claim is that anything AI can simulate, it will solve, and he treats hallucinations as a feature when the goal is exploring genuinely new proteins, molecules, and ideas.

**3. AI risk has moved from a thought experiment to an enterprise operating problem.** Boris Cherny calls the latest Threat Intelligence report "absolutely terrifying and important," arguing that as models get more intelligent they also become more dangerous without the right safeguards and monitoring, and that many capabilities are dual use. Aaron Levie reports that cyber is the top concern among the technology leaders he met, tied to the OpenAI Hugging Face incident, though the conversation in enterprises is pragmatic rather than existential. Amjad Masad pushes back on the most extreme framing.

**4. Coding agents are raising the quality bar and rewriting the deployment stack.** Cherny argues that production code written by Claude should have a higher bar than human-written code, supported at Anthropic by lint rules, tests, Claude-driven end-to-end tests, daily Claude-powered fuzzers, automated code and security reviews, and automated refactoring. Steinberger's instinct: duplicating logic is no longer painful, but abstractions still are. Vercel's Guillermo Rauch says the platform does about 10 million deployments a day and has made its global metadata store 91% faster at p99, under pressure from the growth in agentic deployments.

**5. Enterprise adoption is a workflow and architecture problem, not a model problem.** Levie's notes from the road list multi-model deployments, agent identity and security, ruthless architecture swaps, an early-stages evals gap, and legacy systems as recurring blockers, with process reengineering and embedded forward-deployed engineers producing the biggest ROI. The product layer keeps moving too: Gemini arrives on Windows, Google opens Dreambeans to all US users, and Claude kicks off Fable 5.1 Build Days.

## X / Twitter

### Thibault Sottiaux: Codex & ChatGPT at OpenAI

Sottiaux says OpenAI will pause subscriptions to its $200 Pro plan to make sure current users have an incredible experience and continued access to Astra, calling it "the smallest step that allows us to continue giving the broadest access possible." All other plans and the API remain available, existing accounts are unaffected, and the company is adding more capacity as fast as it can. He also shared a new API for scaled agents on demand, describing it as pretty much the infrastructure that runs under the hood for ChatGPT Work, wrapped up so builders can get started in under a minute.

- [Thibault Sottiaux on pausing $200 Pro subscriptions](https://x.com/thsottiaux/status/2098113585683808624)
- [Thibault Sottiaux on scaled agents on demand](https://x.com/thsottiaux/status/2098238138334548260)

### Boris Cherny: Claude Code at Anthropic

Cherny calls the latest Threat Intelligence report "absolutely terrifying and important," arguing that as models become more intelligent, they also become more dangerous without the right safeguards and monitoring. Many capabilities are dual use, he writes: a model that codes well can be used to hack critical infrastructure, and a model that assists with biology research can also be used to engineer the next pandemic. In a separate reply to a reader, he lays out his code quality rule: throw-away prototypes can be treated as a black box, but production code written by Claude should have a higher bar than human-written code, backed at Anthropic by lint rules, tests, Claude-driven end-to-end tests, daily Claude-powered fuzzers, automated code and security reviews, and automated refactoring. When Claude's code misses the bar, his advice is to use the latest frontier model such as Opus 5 or Fable 5.1, raise effort to high or xhigh, and invest in CLAUDE.md and skills.

- [Boris Cherny on the Threat Intelligence report](https://x.com/bcherny/status/2098281805770309686)
- [Boris Cherny on holding the bar on Claude-written code](https://x.com/bcherny/status/2098217573276131577)
- [Boris Cherny on responding to reader questions](https://x.com/bcherny/status/2098217571153838124)

### Aaron Levie: CEO of Box

Levie's "tales from the road" come from meetings with a couple dozen technology leaders across banking, media, information services, insurance, and consulting. Cyber is top of mind because of the growing rate of vulnerabilities coming at them from AI and the implications of the OpenAI Hugging Face incident, but the conversation is pragmatic rather than existential. Most companies are running multiple frontier models and finding it hard to standardize, with dollars still concentrated on a few vendors and open weights still in their infancy at scale. Agent security and identity management is a growing concern, the biggest ROI comes from changing the workflow itself rather than layering agents onto existing flows, and embedded forward-deployed engineers were the best lesson. He also notes that enterprises keep swapping out architectures, that evals are still very early for most companies, and that legacy systems and fragmented data remain a hurdle. Separately, he announced a deeper partnership with OpenAI so Box enterprise content can be worked with securely in ChatGPT, arguing that software continues to go headless.

- [Aaron Levie on agents in the enterprise](https://x.com/levie/status/2098218284139311615)
- [Aaron Levie on the Box and OpenAI partnership](https://x.com/levie/status/2098135659714085281)

### Guillermo Rauch: CEO of Vercel

Rauch says about 10 million deployments are made on Vercel each day, with 2.35 billion made to date, making it one of the most heavily multi-tenant systems in the world. The global metadata store underneath its CDN, which synchronizes within hundreds of milliseconds so rollbacks, config changes, and new routes propagate, was just made 91% faster at p99, and that also sped up the build-to-deploy pipeline, all while the system is under immense pressure from the growth in agentic deployments. He also frames the platform's direction as "a computer for every agent, in every region."

- [Guillermo Rauch on Vercel deployment volume and metadata performance](https://x.com/rauchg/status/2098091056302833837)
- [Guillermo Rauch on a computer for every agent](https://x.com/rauchg/status/2098158541932794222)
- [Guillermo Rauch on faster deployments](https://x.com/rauchg/status/2098066258155708851)

### Madhu Guru: Senior Director, AI at Meta

Guru's tenth installment on how to build great evals: measure the steps, not just the result. Two agent trajectories can reach the same answer while one searches the right sources, retrieves the right document, makes four clean tool calls, and calculates the result, and the other makes 17 calls, searches the same thing three times, recovers from two errors, and eventually gets there. His process: clearly define the whole workflow, define the tasks in each step, decide how each step is measured, and define the median and hard tasks that the evals should reflect.

- [Madhu Guru on measuring the steps, not just the result](https://x.com/realmadhuguru/status/2098064969464217720)

### Josh Woodward: VP, Google

Woodward, a VP at Google working across Google Labs, the Gemini app, and Google AI Studio, announced that Gemini is now on Windows.

- [Josh Woodward on Gemini for Windows](https://x.com/joshwoodward/status/2098131750660772342)

### Google Labs

Google Labs made Dreambeans available to all US users 18 and older on iOS and Android, free of charge with no subscription required. Users can also connect the Gemini app to Dreambeans, which builds on the nuance and understanding from their chats to surface more insightful and personalized daily stories.

- [Google Labs on Dreambeans and the Gemini app](https://x.com/GoogleLabs/status/2098110018289803558)

### Claude: Anthropic's AI Assistant

Claude announced that Fable 5.1 Build Days start this week, with the Claude community hosting buildathons in cities around the world from September 11 to 25. The invitation: bring a problem, an idea, or just show up and see what is possible.

- [Claude on Fable 5.1 Build Days](https://x.com/claudeai/status/2098138736642933143)

### Amjad Masad: CEO of Replit

Masad's contrarian take: there is a lot of risk with AI, and he worries about cybersecurity in particular, but "extinction risk," meaning literally 100% of humans die, "is not remotely one of them."

- [Amjad Masad on AI risk](https://x.com/amasad/status/2098171265924116732)

### Peter Steinberger: OpenClaw and OpenAI

Steinberger's observation on how coding with agents changes design instincts: duplicating logic is no longer painful, but abstractions still are. He also urges people to move quickly on Astra, saying demand is growing too fast.

- [Peter Steinberger on duplication versus abstractions](https://x.com/steipete/status/2098089196800098798)
- [Peter Steinberger on Astra demand](https://x.com/steipete/status/2098088917782413740)

### Thariq: Claude Code at Anthropic

Thariq shared a prompt for Claude chat: ask it to interview you in depth, using free text or the AskUserQuestion tool when multiple choice works, about relevant parts of your life it does not know about yet, and save it all to memory.

- [Thariq on a prompt to teach Claude about you](https://x.com/trq212/status/2098157600361861579)

### Aditya Agarwal: General Partner at SPC

Agarwal poses a question: if you had a machine capable of doing only one thing, finding cures to our most pressing diseases, how much of your GDP would you devote to it? His answer is "very high," and his conclusion is that this is the world we live in now.

- [Aditya Agarwal on a machine that finds cures](https://x.com/adityaag/status/2098112281267843264)

### Matt Turck: VC at FirstMarkCap and Host of the MAD Podcast

Turck published his conversation with Richard Socher about RSI and scientific progress, with chapters covering why scientific progress is slowing, LLMs learning biology and proteins, next-token prediction as a world model, simulations and verifiers, the path to recursive self-improvement, why hallucinations can drive discovery, going from reading biology to writing it, AI in drug discovery and cancer, the scientific data bottleneck, the four pillars of the Eureka Machine, self-driving robotic laboratories, agent swarms and open-ended discovery, the compute bottleneck, and what Recursive will build first. He notes the conversation is also available on Spotify, Apple Podcasts, and YouTube.

- [Matt Turck on the conversation with Richard Socher](https://x.com/mattturck/status/2098081448330674182)
- [Matt Turck on other places to listen](https://x.com/mattturck/status/2098081452839637480)

### Nikunj Kothari: Partner at FPV Ventures

Kothari's "three truths in early stage venture right now": everyone wants to raise a $50 million seed, everyone thinks they will hit $30 million ARR next year, and every hot tranched seed round magically ends up at roughly a $300 million valuation.

- [Nikunj Kothari on early stage venture](https://x.com/nikunj/status/2098078391065018816)

### Peter Yang

Peter Yang, who makes practical AI tutorials and interviews for busy people, says that in his opinion, for getting things done, Sol beats Astra.

- [Peter Yang on Sol versus Astra](https://x.com/petergyang/status/2098215935467544604)

### Zara Zhang: Builder

Zara Zhang asks why computer use is still so painfully slow.

- [Zara Zhang on computer use](https://x.com/zarazhangrui/status/2098136119154254287)

## Podcast

### The MAD Podcast with Matt Turck: When AI Improves Itself | Richard Socher (Recursive)

The Takeaway: anything AI can simulate, it will solve, and the most valuable thing to point that loop at first is AI research itself.

Richard Socher, one of the most cited researchers in AI, has watched fields move from understanding basic pieces to engineering with them, and he thinks biology is in that transition now. His argument opens with a counterintuitive claim: scientific progress has slowed even as the number of researchers and the money going into science have grown. The reason is that knowledge has fragmented into a labyrinth of subfields, each taking years to master, so we have plenty of pieces and not enough people able to weave them back together.

His company, Recursive, raised $650 million to attack that problem by first automating AI research itself, then pointing the resulting intelligence at physics, chemistry, and especially biology. The blueprint in his book The Eureka Machine has four pillars: human knowledge ingested through large language models, the scientific measurements we can now collect, simulation, and real-world experimentation through robotics, all with an agent swarm on top. Compute is the biggest constraint, and the company committed $410 million of its raise to a single Amazon compute deal.

Two ideas cut against conventional wisdom. First, hallucinations can be a feature: exploring genuinely new proteins or molecules requires predictions that sit outside the training distribution. Second, the impact on jobs depends on the elasticity of demand. Illustration prices collapsed without demand exploding, so illustrators lost. Coding is different, where cheaper code has so far meant more code and more demand for programmers. He is not a believer in a hard takeoff: biology still moves at the speed of clinical trials, and the real bottleneck is data, which is why virtual cells and robotic labs matter more than another benchmark. As he puts it, "Anything you can simulate, AI will solve."

- [The MAD Podcast with Matt Turck: When AI Improves Itself | Richard Socher (Recursive)](https://www.youtube.com/@DataDrivenNYC/videos)

## Blog

The validated blog feed contained no new qualifying items.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
