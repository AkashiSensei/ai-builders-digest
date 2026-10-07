[English](./ai-digest-2026-10-07-Wed.md) | [中文](../../zh/daily/ai-digest-2026-10-07-Wed.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-10-07-Wed.md)

---

# AI Builders Digest

## Reader's Briefing

**1. Prompting is shifting from scaffolds to intent, effort, and verification.** Boris Cherny, who works on Claude Code at Anthropic, says he is "surprised that people are surprised this is how I prompt Claude," insisting you should "talk to Claude the way you would a coworker" because "there's no secret to prompting." Prompts mattered enormously in the Sonnet 3.5 era, he says, but today what matters more is telling the model what you want it to do, how much effort to spend, and how it should verify it did the right thing. Thariq, who also works on Claude Code at Anthropic, adds that "working at a higher level of abstraction has always required understanding the lower level ones," and coding agents do not change that. ([Boris Cherny](https://x.com/bcherny/status/2107565388250874193), [Boris Cherny's prompt](https://x.com/bcherny/status/2107532985897771152), [Thariq](https://x.com/trq212/status/2107504677143368163))

**2. Agents are splitting into cloud brains and local hands.** Thariq says the trend is "Claude's 'brains' in the cloud" paired with "local hands" to operate your computer, and flags the hard part: if Claude can only reach your files while your machine is online, it may be "effectively blocked on doing work" until the computer comes back, so syncing is likely needed, edge cases included. Peter Steinberger, who works on OpenClaw and with OpenAI, shows the pattern in production: his team hooked its agent to X so unassigned sessions are free for anyone to grab, and the agent pings whoever worked on the related code last. "Whole thing was a prompt," he says, and the team server extended itself because plugins are now hot reloadable. ([Thariq](https://x.com/trq212/status/2107580785456976085), [Thariq on the sync problem](https://x.com/trq212/status/2107580787277340835), [Peter Steinberger](https://x.com/steipete/status/2107697554448421160))

**3. AI is about to reshape how software is built and secured.** Replit CEO Amjad Masad says advances in AI-powered reverse engineering and decompilation are "absolutely insane," predicting that "pretty soon all software will be de facto open-source." Box CEO Aaron Levie argues cyber "will be one of the most defining domains for AI in the coming years," with security teams facing "vibe coded issues, agentic attacks, and even accidental agent swarms hunting for data," and calls OpenAI plus Hugging Face "just a preview of what's to come." He expects a wave of agentic security products and "a booming market for cyber professionals that can effectively deploy agents for security purposes." ([Amjad Masad](https://x.com/amasad/status/2107671204639465961), [Aaron Levie](https://x.com/levie/status/2107680435644039269))

**4. At-scale AI decisions hinge on confidence thresholds and maintenance debt.** Vercel CEO Guillermo Rauch highlights a "very simple feature" he believes "will be extremely impactful for at-scale AI decision-making," describing it as "thinking fast and a bit less fast under a confidence threshold." Nan Yu, who works on product for Codex at OpenAI and previously ran product at Linear, warns that some changes "will cause extreme degradation in systems that no one loves to maintain, but someone has to." ([Guillermo Rauch](https://x.com/rauchg/status/2107606246350266469), [Nan Yu](https://x.com/thenanyu/status/2107506074370920796))

**5. Claude keeps widening the surfaces where work happens.** Anthropic's Claude account says you can now paste a Google file link or ask for a new doc, sheet, or deck and it opens beside the chat for you and Claude to edit together, with access following your Google sharing permissions; it is in beta on all paid plans. The account also spotlights Every, which runs as much work as possible through agents and built a company agent on Claude Managed Agents that the team uses in Slack before releasing it to subscribers. Every CEO Dan Shipper says they "couldn't have built the Every agent without Claude Managed Agents," and Google VP Josh Woodward calls mask-based editing his favorite, promising "much more coming soon." ([Claude](https://x.com/claudeai/status/2107522599530139767), [Claude](https://x.com/claudeai/status/2107574195978641911), [Dan Shipper](https://x.com/danshipper/status/2107575089441181861), [Josh Woodward](https://x.com/joshwoodward/status/2107679061854273656))

**6. Post-training is becoming the enterprise moat, and inference is where the money is.** Applied Compute's CEO argues that with reinforcement learning "we essentially have a hill climbing machine," where the hardest part is "defining the hill to climb," which is why evals matter and should be guarded like non-fungible employees. He frames "owning your intelligence" around flexibility and control, says post-training "wins inference" because the largest workloads pay off first, and points to Jevons' paradox as price cuts trigger usage spikes. ([Unsupervised Learning](https://www.youtube.com/@RedpointAI))

## X / Twitter

### Boris Cherny

Boris Cherny, who works on Claude Code at Anthropic, says he is "surprised that people are surprised this is how I prompt Claude." His guidance: "Talk to Claude the way you would a coworker. There's no secret to prompting. There's no need to be overly scaffolded or prescriptive for most tasks -- give Claude a goal, and it will figure it out." He adds that "back in the Sonnet 3.5 days, your prompt mattered a lot," but today it matters more to communicate three things: what you want it to do, how much effort you want it to spend, and how it should verify it did the right thing. He shared his own prompts as examples of what that looks like in practice.

- [Boris Cherny: how he prompts Claude](https://x.com/bcherny/status/2107565388250874193)
- [Boris Cherny: the prompt](https://x.com/bcherny/status/2107532985897771152)
- [Boris Cherny: another example of his prompts](https://x.com/bcherny/status/2107565497680314831)

### Thariq

Thariq, who works on Claude Code at Anthropic, says "we're increasingly going to be moving towards Claude's 'brains' in the cloud and giving Claude 'local hands' to operate on your computer," a shift he discussed on Latent Space. He flags a tricky technical problem: if Claude can only access your files when your computer is online, it could be "effectively blocked on doing work" until the machine is back on, so some form of sync is probably needed, with edge cases to solve. Separately, he argues that "working at a higher level of abstraction has always required understanding the lower level ones," and he does not think coding agents change that.

- [Thariq: cloud brains, local hands](https://x.com/trq212/status/2107580785456976085)
- [Thariq: the sync problem](https://x.com/trq212/status/2107580787277340835)
- [Thariq: abstraction still requires the lower levels](https://x.com/trq212/status/2107504677143368163)

### Peter Steinberger

Peter Steinberger, who works on OpenClaw and with OpenAI, says he hooked his team's agent up to X to trigger work faster. Unassigned sessions are open for anyone to grab, and the agent looks at who worked on the related code last and pings them on the server. "Whole thing was a prompt," he says, and the team server extended itself because plugins are now hot reloadable.

- [Peter Steinberger: hooking the team agent to X](https://x.com/steipete/status/2107697554448421160)

### Claude

Anthropic's Claude account says that in Claude you can paste a Google file link or ask for a new doc, sheet, or deck, and it opens beside the chat for you and Claude to edit together, with access following your Google sharing permissions; it is in beta on all paid plans. The account also highlights Every, which runs as much work as possible through agents and built a company agent on Claude Managed Agents that everyone uses in Slack, then released it to subscribers once it caught on internally. A full conversation with Dan Shipper and Willie Williams on how they built it is linked from the account.

- [Claude: editing Google files beside the chat](https://x.com/claudeai/status/2107522599530139767)
- [Claude: Every's company agent on Claude Managed Agents](https://x.com/claudeai/status/2107574195978641911)
- [Claude: the conversation with Dan Shipper and Willie Williams](https://x.com/claudeai/status/2107574198482927900)

### Dan Shipper

Every CEO Dan Shipper says the team "couldn't have built the Every agent without Claude Managed Agents," and calls it "extremely fun" to sit down and talk about how it came together.

- [Dan Shipper: building the Every agent with Claude Managed Agents](https://x.com/danshipper/status/2107575089441181861)

### Josh Woodward

Josh Woodward, a vice president at Google whose bio lists Google Labs, Gemini App, and Google AI Studio, called mask-based editing his favorite, with "much more coming soon."

- [Josh Woodward: mask-based editing](https://x.com/joshwoodward/status/2107679061854273656)

### Amjad Masad

Replit CEO Amjad Masad says what is happening in AI-powered reverse engineering and decompilation is "absolutely insane," and predicts that "pretty soon all software will be de facto open-source." His conclusion: "AI is coming for everything and everyone."

- [Amjad Masad: AI reverse engineering and decompilation](https://x.com/amasad/status/2107671204639465961)

### Aaron Levie

Box CEO Aaron Levie says cyber "will be one of the most defining domains for AI in the coming years" and a huge area of focus for most enterprises. He expects AI to create a new level of work for security teams dealing with "the increase of vibe coded issues, agentic attacks, and even accidental agent swarms hunting for data," calling OpenAI plus Hugging Face "just a preview of what's to come." Because security teams have often been the most resource-starved in the enterprise, he says AI agents will also be part of the answer, with a range of new agentic products for protecting code, enterprise systems, mission-critical infrastructure, and data. He calls it "a booming market for cyber professionals that can effectively deploy agents for security purposes in the enterprise."

- [Aaron Levie: cyber as a defining AI domain](https://x.com/levie/status/2107680435644039269)

### Guillermo Rauch

Vercel CEO Guillermo Rauch highlights a "very simple feature" that he believes "will be extremely impactful for at-scale AI decision-making," describing the idea as "thinking fast and a bit less fast under a confidence threshold."

- [Guillermo Rauch: confidence thresholds for at-scale AI decisions](https://x.com/rauchg/status/2107606246350266469)

### Nan Yu

Nan Yu, who works on product for Codex at OpenAI and previously ran product at Linear, says he worries that some changes "will cause extreme degradation in systems that no one loves to maintain, but someone has to."

- [Nan Yu: degradation in unloved systems](https://x.com/thenanyu/status/2107506074370920796)

### Nikunj Kothari

FPV Ventures partner Nikunj Kothari argues that too many VCs are "chasing dopamine" or rage-baiting to get more views on X, warning that "X is not for nuance, so once you say something, you really can't take it back." He says the damage falls on the people "under" them more than on the person talking, and that he knows of two people who "lost deals that were all set because of the drama going on X." Given how much of a commodity capital has become and how many venture funds exist, he writes, "very few are playing long term games."

- [Nikunj Kothari: VCs chasing dopamine on X](https://x.com/nikunj/status/2107706522457497753)

### Sam Altman

OpenAI's Sam Altman posted a series of reflective notes, writing that he was "looking up at the stars with extra awe tonight" and quoting "thy sea is so great and my boat is so small." He thanked "the machines, and the structure of reality, for letting us understand a little more," and thanked "the untold number of people who put in the technical work, brick by brick over the generations, to get us to the point where such a wonder is possible."

- [Sam Altman: looking up at the stars](https://x.com/sama/status/2107691261776052633)
- [Sam Altman: thank you to the machines](https://x.com/sama/status/2107691262795239805)
- [Sam Altman: brick by brick](https://x.com/sama/status/2107691577015755196)

## Podcast

### Unsupervised Learning: Ep 94: Applied Compute CEO on the Limits of RL, the New AI Hyperscaler & Why Post-Training Wins Inference

The Takeaway: Reinforcement learning is a hill-climbing machine, and the durable edge belongs to whoever defines the hill with their own data, evals, and judgment instead of renting someone else's model.

Applied Compute's CEO, who previously worked on Codex at OpenAI, runs a company that helps large AI applications train and serve their own models. His case for "owning your intelligence" is less about hostile labs than about flexibility and control: where models run, what they optimize for, and how they are deployed. "The idea of owning your intelligence really is about flexibility and control," he says, and capturing it means having access to weights plus the infrastructure to post-train, infer, and route between models.

On reinforcement learning, his framing is blunt: "What we have with RL is we essentially have a hill climbing machine. The hardest part is actually defining the hill to climb." That is why evals matter so much, and why he argues they should be guarded: "Your employees are not fungible. You would not like be comfortable with them going to another company and doing work there. And same thing with these models." Every public benchmark gets benchmarked, so keeping your best evals private is itself an advantage.

His sharpest claim is that post-training wins inference. The largest, most mature workloads are where custom models pay off first, and because training and inference can be co-optimized, how a model is trained shapes how it is served. He also argues the cost of post-training is falling fast while Jevons' paradox holds: every price cut triggers a usage spike, so efficiency, not raw capability, increasingly decides which model wins. Most companies, he says, should exhaust harness and context optimization before touching the weights.

On hiring, he insists the best engineers still learn the fundamentals. His teams let candidates go all-in with AI tools, then ask them to explain the design and trade-offs: "You can't delegate your thinking away and basically rely on it as a crutch, because then you get these like massive slop code bases that you can't actually explain."

Source: https://www.youtube.com/@RedpointAI

## Blog

The validated feed contained no new qualifying blog posts for this run.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
