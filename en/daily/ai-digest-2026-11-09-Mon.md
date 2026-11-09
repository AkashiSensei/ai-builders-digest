[English](./ai-digest-2026-11-09-Mon.md) | [中文](../../zh/daily/ai-digest-2026-11-09-Mon.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-11-09-Mon.md)

---

# AI Builders Digest

## Reader's Briefing

Box CEO Aaron Levie argues that AI is moving from an era where output arrives at the pace of a chat back-and-forth to one where a problem can be handed to a set of agents that do an arbitrarily large amount of work. Agent swarms and parallel fan-out can turn 20-50% productivity gains into gains without a clear upper limit, he says, starting with coding and extending to cyber, science, life sciences, and any field where computer-based work can be parallelized. The deeper shift is that compute becomes the variable teams can flex, breaking the old assumption that more time on a task means more output.

Nan Yu, who works on product for Codex at OpenAI, makes the case for the dumbest architecture and design that will work, not the simplest. Simple is something you iterate toward, he says, while cleverness means users also have to be just as clever to understand your cleverness. He argues that AI makes software much easier when you know what you want to build and much harder when you do not: without clarity, teams ship a pile of junk and spend a lot of money doing it. YC President and CEO Garry Tan adds that once frontier models make software easy to change, existing bugs become a little bit unbearable, and personal just-in-time software looks inevitable.

Mihail Eric, who teaches the Modern Software Developer at Stanford and is Head of AI at Monaco, is refreshing AI-native engineering education around the internals of the harness. His course has students build a coding agent from scratch in roughly 200 lines, then intercept the requests of a state-of-the-art agent to inspect its system, plan, and compaction prompts. The curriculum moves through context engineering at scale, tool design and MCP, agent configuration, agent-ready codebases, agentic code review, and security. His blunt framing is that "the floor is much higher": a well-trained AI-native engineer can be extremely valuable, but only with enough foundational software engineering to reason about architecture, trade-offs, and verification.

Eric's operating advice for teams is "you buy to learn and you build to keep." Monaco buys where a mature product earns its place, such as Devin for code review, and builds where the market does not meet its infrastructure needs, including its Monocoder background-agent platform and Hal Slack bot. He is equally skeptical of skill sprawl: most skills are written badly, trigger at the wrong time, and need to be pruned, though skills that encode organizational knowledge can last. He also expects platform engineering to become more important, because it owns the cloud, developer experience, and security boundaries that agents operate inside.

Builder Zara Zhang has almost stopped using the term "vibe coding" because of its negative connotation: it implies that the output lacked effort or soul and is just AI slop. She argues that people can put their heart and soul into work made with AI coding tools, and that the two are not contradictory. She also describes the joy of building a product as the collision between the predictability of how technology behaves and the unpredictability of how humans behave.

Vercel CEO Guillermo Rauch built a physical simulation of a record player with WebGL2 and Web Audio, converting a song into the physical shape of a groove and letting a simulated stylus ride the walls 384,000 times a second; the crackle, pops, wow and flutter, and dull inner grooves emerge as natural byproducts. FPV Ventures partner Nikunj Kothari argues that the way to meet interesting people in San Francisco is to show your work rather than ask for networking or to "pick your brain." A thoughtful cold email, a five-line pointed DM, a shipped side project, or an organized meetup all count, and he says even the busiest people have 15 minutes if you give them a reason.

## X / Twitter

### Nan Yu

Nan Yu, who works on product for Codex at OpenAI, argues that builders should choose the "dumbest" architecture and design that will work rather than the "simplest." Simple is something you iterate toward, he says, while cleverness means users also have to be just as clever to understand your cleverness. He also argues that AI makes software much easier when you know what you want to build and much harder when you do not: without clarity, teams ship a pile of junk and spend a lot of money doing it. ([post](https://x.com/thenanyu/status/2119493015190249556)) ([post](https://x.com/thenanyu/status/2119462979179892925)) ([post](https://x.com/thenanyu/status/2119462224721002560))

### Guillermo Rauch

Vercel CEO Guillermo Rauch built a physical simulation of a record player with WebGL2 and Web Audio. It converts a song into the physical shape of a groove, then a simulated stylus rides those walls 384,000 times a second; the crackle, pops, wow and flutter, and dull inner grooves are natural byproducts of the simulation. The converted songs are public domain or CC-licensed, and he links the code for others to remix and redeploy. ([post](https://x.com/rauchg/status/2119536313712230802))

### Aaron Levie

Box CEO Aaron Levie argues that AI is moving from output at roughly the rate of a chat back-and-forth to agents that can take an arbitrarily large amount of work. Agent swarms and parallel fan-out can turn 20-50% productivity gains into gains without a clear upper limit, starting with coding and extending to cyber, science, life sciences, and any field where computer-based work can be parallelized. He says builders should re-check what is possible every three to six months, because recent progress in computer and tool use, less context rot, reasoning, multimodality, and domain expertise lets agents use existing APIs and systems instead of generating everything from scratch. ([post](https://x.com/levie/status/2119592025440092192)) ([post](https://x.com/levie/status/2119502716770902234))

### Garry Tan

YC President and CEO Garry Tan says his gstack-evals project tried to replicate a Jev Engineering article and found that it replicated, with particle-1 performing even better. He argues that once frontier models make software easy to change, existing bugs become a little bit unbearable, and personal just-in-time software looks inevitable. His conclusion: "You're really going to want your own software factory." ([post](https://x.com/garrytan/status/2119624260675350605)) ([post](https://x.com/garrytan/status/2119615647592395037)) ([post](https://x.com/garrytan/status/2119612084220842483))

### Zara Zhang

Builder Zara Zhang has almost stopped using the term "vibe coding" because it implies that the output did not get much effort or soul and is just AI slop. She argues that people can put their heart and soul into work made with AI coding tools, and the two are not contradictory; she wants a better word for it. She also says the joy of building a product comes from the collision between the predictability of how technology behaves and the unpredictability of how humans behave. ([post](https://x.com/zarazhangrui/status/2119592080318341128)) ([post](https://x.com/zarazhangrui/status/2119342420412510686))

### Nikunj Kothari

FPV Ventures partner Nikunj Kothari says the way to meet interesting people in San Francisco is to show your work, not to ask for "networking," "synergies," or to "pick your brain." A thoughtful cold email, a five-line pointed DM, a shipped side project, or an organized meetup all count. He says even the busiest people have 15 minutes if you give them a reason. ([post](https://x.com/nikunj/status/2119670529254981756))

## Podcast

### Latent Space: [One Million AI Engineer Special] How Stanford Teaches AI-Native Engineering — Mihail Eric, Monaco

Episode: [watch](https://www.youtube.com/watch?v=dpY7YzZo4kE)

**The Takeaway:** AI-native engineering raises the floor for what a junior engineer must know, not lowers it.

Mihail Eric teaches the Modern Software Developer at Stanford and is Head of AI at Monaco. His course starts by having students build a coding agent from scratch in roughly 200 lines, then uses proxy interception to inspect the prompts inside a state-of-the-art harness. The point is not to worship a tool. It is to make the machinery legible: context engineering at scale, tool design, MCP, compaction, sub-agents, agent-ready codebases, code review, and security all become design decisions rather than vendor features.

Eric's bluntest claim is that "the floor is much higher." A well-trained AI-native engineer can be among a company's most useful assets, but only with enough foundational software engineering to reason about architecture, trade-offs, and verification. Otherwise, a one-line prompt that produces tens of thousands of lines of code can leave the builder out of touch with the system, while writing the code has become much easier than understanding it. He recommends experimenting for ten minutes a day rather than trying to track every new tool.

His operating philosophy for teams is "you buy to learn and you build to keep." Monaco buys where a mature product exists, such as Devin for code review, and builds where the market does not meet its infrastructure needs, including its Monocoder background-agent platform and Hal Slack bot. Security follows the same logic: every dependency is attack surface, though he cautions that rebuilding everything in-house trades third-party scrutiny for your own blind spots.

The larger destination is the software factory: a machine that builds the machine, with humans concentrated at intent and review. Eric expects platform engineering to become more important, not less, because it owns the cloud, developer experience, and security boundaries that agents operate inside. His advice to students who want to stand out is specific: build benchmarks and evals, write rigorous engineering posts, and attempt something ambitious enough to prove you can execute.

## Blog

The validated feed contained no new qualifying blog posts.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
