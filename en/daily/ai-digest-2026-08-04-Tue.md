[English](./ai-digest-2026-08-04-Tue.md) | [中文](../../zh/daily/ai-digest-2026-08-04-Tue.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-08-04-Tue.md)

---

# AI Builders Digest

## Reader's Briefing
- The central research question today is no longer just how far transformers can scale, but whether models need architectures that learn from live experience rather than only from lab training and short context windows.
- Company agents are starting to look like internal operating systems. Vercel's @v is framed as both router and worker, with sub-agents, skills, memories, and delegation across daily business functions.
- Builders are separating domains where AI progress is easy to verify from domains where value depends on judgment, timing, taste, and messy real-world feedback loops.
- AI is changing the psychology of work as much as the workflow. Several posts point at agency, identity, craft, and the human scaffolding that remains once the model can do more of the task.
- Experiments are moving from demos into strange but concrete surfaces: browser-playable model tests, autonomous chess engines, self-cleaning agent skills, and support-chat agents that negotiate with humans.

## X / Twitter
### Andrej Karpathy
Andrej Karpathy pointed back to Simon Willison's pelican-on-a-bicycle test and made the source playable and forkable in the browser. The useful signal is that odd, reproducible model tests are turning into small software artifacts, not just screenshots or anecdotes.

- https://x.com/karpathy/status/2083948654377996480

### Swyx
Swyx collected two different signals about agents in the wild. One was a caution that social platforms can consume years while making people feel productive. The other was more tactical: in preparation for a computer-use podcast, he shared a Codex CUA moment where an agent handled a support chat, escalated for faster resolution, and replied with receipts when support pushed back.

- https://x.com/swyx/status/2084171901451268599
- https://x.com/swyx/status/2084156733027701164
- https://x.com/swyx/status/2084155512573288478

### Peter Yang
Peter Yang's strongest AI-specific note came from his Hermes interview with Nous Research co-founder Karan Malhotra. Hermes can build its own skills, and the guardrail against skill slop is Hermes Curator: a scheduled background loop that reviews skills and memory, removes waste, and can be customized because the system is open source. He also made the broader product point that personality matters: a capable assistant still fails if it is annoying to talk to.

- https://x.com/petergyang/status/2083968605432267139
- https://x.com/petergyang/status/2083947480136421384
- https://x.com/petergyang/status/2084065527081980285

### Thariq
Anthropic's Thariq connected AI-assisted mathematics to the chess story and Jevons paradox. His point is that making mathematical work easier may increase demand for people who think deeply about math, because there will be more work, more understanding, and more high-level discussion rather than less.

- https://x.com/trq212/status/2083978109376987365
- https://x.com/trq212/status/2083977795290734975

### Amjad Masad
Replit CEO Amjad Masad showed his LLM chess engine playing live, autonomous games on LiChess against humans and bots, with a reported 1253 Elo and three concurrent games running. It is a small but concrete example of agents moving from offline demos into public competitive environments.

- https://x.com/amasad/status/2083926395403821427
- https://x.com/amasad/status/2083936067355635948
- https://x.com/amasad/status/2084017252152856716

### Guillermo Rauch
Vercel CEO Guillermo Rauch described @v as an internal company agent that now participates in daily work across finance, communications, docs, marketing, engineering, analytics, and personalized workflows. The more interesting architecture note is that Vercel had too many separate agents, so @v became both an agent and a router: a front door with sub-agents, skills, memory, and delegation, with occasional purpose-built agents addressed directly.

- https://x.com/rauchg/status/2084042561690456157
- https://x.com/rauchg/status/2084060157085143512
- https://x.com/rauchg/status/2083969120270450911

### Aaron Levie
Box CEO Aaron Levie argued that some of the hardest fields may automate first precisely because they are objectively verifiable. Math, cyber, and code give clearer reward signals during training and scalable tests during execution. By contrast, legal, marketing, sales, finance, and other judgment-heavy domains often have no single right answer, shifting value toward applied AI layers, process redesign, and new ways to test knowledge work over time.

- https://x.com/levie/status/2083965372747882741

### Ryo Lu
Cursor designer Ryo Lu used Rdio, Mailbox, and Apple as reminders that software once became simpler through visible, tactile patterns. His question for the agent era is what remains visible when we leave the world of apps behind, and how software should feel when the interface is less tied to screens full of controls.

- https://x.com/ryolu_/status/2083939454017053179

### Garry Tan
YC CEO Garry Tan framed AI as a growth engine and pushed back against a loss of wonder just as the amount of technological wonder is going parabolic. His market point was old-fashioned but relevant: meritocracy is judged by the territory, not the map, and in startups that still means making something people want.

- https://x.com/garrytan/status/2083957110711386439
- https://x.com/garrytan/status/2083923385193828612
- https://x.com/garrytan/status/2083920039208693996

### Nikunj Kothari
FPV Ventures partner Nikunj Kothari described early and mid-stage venture as "vibes capital," where AI tailwinds, dry powder, and sector fashion can overwhelm fundamentals for another 12-18 months. His warning to founders is practical: in a capital market where funding itself becomes a competitive weapon, understand the volatility before stepping in.

- https://x.com/nikunj/status/2083873335998333227
- https://x.com/nikunj/status/2083925904598733088

### Peter Steinberger
Peter Steinberger only had a light signal in this window, noting a newer kind of spam. There was not enough technical context in the feed to draw a stronger product takeaway.

- https://x.com/steipete/status/2083976289485230449

### Dan Shipper
Every CEO Dan Shipper named a useful emotional pattern around AI: agency rupture. When a model suddenly performs a task that used to require you at every step, the first reaction can feel like identity loss. Over time, people start seeing the human scaffolding around the model, then reconstruct agency so the AI becomes an invisible tool and the human work shifts to quality, taste, and orchestration.

- https://x.com/danshipper/status/2084038453831020916
- https://x.com/danshipper/status/2084024211539116466
- https://x.com/danshipper/status/2084144207254663417

## Podcast
### Training Data: Building the Automated AGI Lab: Core Automation's Jerry Tworek and Rohan Anil
The takeaway: Core Automation's bet is that the next frontier is not just scaling transformers harder, but building architectures and systems that can learn from real experience, use compute more efficiently, and adapt outside the lab.

Jerry Tworek argues that transformers should be appreciated before they are replaced. They carried the field through large-scale pretraining, RL, coding systems, and workflow automation, but their weakness is increasingly visible: models are trained in a lab and then deployed into messy real-world distributions. Benchmarks and training tasks can improve while real-world autonomy remains incomplete.

His proposed direction is test-time learning. In-context learning is useful but small and mechanically limited; continuous fine-tuning runs into catastrophic forgetting and poor data efficiency. Core Automation is therefore looking for architectures that can represent richer learning algorithms over much longer horizons, especially for systems that must learn with users, data, tools, and changing environments.

Rohan Anil frames the architecture question as a compute-allocation problem. Transformers spend inference compute one token at a time, and chain-of-thought increases computational depth by generating more tokens. That works, but it is inefficient. He wants architectures that spend computation better across pretraining and RL, fit hardware realities, and make frontier capability cheaper enough to reach far more people.

The episode's deeper disagreement with the current market is organizational. The biggest labs are locked into competitive product races around transformer scaling and coding agents, while smaller labs often copy the leaders. Core Automation is trying to occupy the niche of doing large-scale architectural research with an integrated team across research, kernels, production, and systems.

- https://www.youtube.com/watch?v=2RJiaf0SY8s

## Blog
No new blog posts were included in today's feed.
