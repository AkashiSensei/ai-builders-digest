[English](./ai-digest-2026-11-28-Sat.md) | [中文](../../zh/daily/ai-digest-2026-11-28-Sat.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-11-28-Sat.md)

---

# AI Builders Digest

## Reader's Briefing

The adoption gap may matter more than raw model capability. Box CEO Aaron Levie argues that many people and organizations stop at the first AI use cases that impressed them, while background agents and agent swarms require new data pipelines, MCPs, security work, and redesigned workflows. FirstMark Capital's Matt Turck makes the economic case: agents can turn small pockets of idle time into many parallel errands and purchases, and the effect compounds across millions of people.

Thariq at OpenAI wants model quality measured on several axes rather than a single leaderboard. His proposal is to score models like an RPG character sheet, and his Claude versus Codex image experiment separated creativity and endurance from wisdom and alignment. He also framed the exercise as a call for better evals.

FPV Ventures partner Nikunj Kothari sees a governance problem hidden in AI revenue growth: some startups are reselling compute and counting the proceeds as annual recurring revenue. He links this to earlier patterns such as low-margin GMV-like revenue and negative-margin inference, and warns that investors should ask tougher questions before celebrating ARR.

G2i CEO Gabe Greenberg describes human data as a design discipline rather than cheap labeling. The work has moved from thousands of mid-level engineers doing gig-style annotations toward staff-level experts building RL environments and datasets that are difficult but still trainable. He argues that quality now matters more than a 20% price saving.

Ryo Lu argues that the AI race "is not inevitable" and should be treated as a chain of human decisions about budgets, model succession, and acceptable risk. Drawing on Zhuangzi, he says the hardest technical and moral knots are exactly where builders should slow down, and that probabilities can inform risk without settling who has the right to impose it on everyone else.

## X / Twitter

### Thariq, OpenAI

Thariq argued that model quality should be scored on several dimensions, not compressed into a single leaderboard ranking. He compared the ideal to an RPG character sheet and tested the idea by asking Claude and Codex to generate images for the same post: Claude showed more creativity and endurance, while Codex stayed closer to the spirit of his request, which he described as wisdom and alignment. He called the exercise a call for better evals.

Sources: [1](https://x.com/trq212/status/2126386936579600522), [2](https://x.com/trq212/status/2126386934918651919), [3](https://x.com/trq212/status/2126386932989210714)

### Aaron Levie, Box CEO

Box CEO Aaron Levie described the diffusion gap as the central challenge and opportunity in AI. Many people and organizations get stuck on the first use cases that impressed them, even though background agents and agent swarms require substantial system work around data pipelines, MCPs, and security. The deeper constraint is process design: companies must redesign workflows to capture the gains, which creates openings for services and FDE opportunities.

Source: [1](https://x.com/levie/status/2126389098227376238)

### Ryo Lu

Ryo Lu argued that the AI race is "not inevitable" and is instead made of decisions about budgets, model succession, and acceptable risk. He wrote that recursive self-improvement could produce systems no one understands, yet the possibility of loss is often used as an argument to move faster. Drawing on Zhuangzi, he said the hardest knots are where a master slows down, and that builders can choose not to ship something even if it would make someone very rich.

Source: [1](https://x.com/ryolu_/status/2126382660780167304)

### Matt Turck, FirstMark Capital

Matt Turck argued that agents will accelerate the economy by converting small pockets of idle time into many parallel actions. In his Thanksgiving example, agents handle electrician outreach and Black Friday shopping while a person rests, and the effect compounds when millions of people do the same.

Source: [1](https://x.com/mattturck/status/2126477464947892367)

### Nikunj Kothari, FPV Ventures

FPV Ventures partner Nikunj Kothari warned that some startups are reselling compute and counting the proceeds as revenue, even when compute is not their core business. He sees this as the latest step in a pattern that began with low-margin GMV-like revenue and negative-margin inference, all packaged into annual recurring revenue. In his view, naive investors will accept it because it helps deals pass investment committees, but "zero shot this ends well."

Source: [1](https://x.com/nikunj/status/2126326428522442812)

### Dan Shipper, Every CEO

Every CEO Dan Shipper argued that exponential capability graphs are useful for measuring progress inside a lab but misleading for predicting the future of human work. He framed the distinction as a corrective for readers who feel awe, fear, or foreboding when they see those curves.

Source: [1](https://x.com/danshipper/status/2126397711033438535)

## Podcast

### Latent Space: Inside the AI Training Data Market — Gabe Greenberg, G2i

**The Takeaway:** Human data is becoming a product-design problem, where the most valuable suppliers build tasks that sit just beyond today's models while remaining trainable.

Gabe Greenberg is CEO of G2i, a company that supplies human data and computer-use infrastructure to frontier labs. G2i's growth shows how much the labs now depend on this layer: Greenberg says the company did $15 million last year, expects about $100 million this year, is profitable, and has no VC backing. Its customers are roughly five or six frontier labs.

The nature of the work has changed. In 2023 and 2024, projects could involve 6,000 mid-level engineers doing gig-like annotation. Today G2i is recruiting staff-level engineers to build RL environments and complex datasets, where the hard part is not writing more code but designing tasks with the right difficulty, verifiers, seed data, and taste. "If you make them too hard, they become evals," Greenberg says. "And if you make them too easy, they're worthless." The target is a task a few steps beyond what a model can do now, hard enough to teach something and easy enough to remain efficiently trainable.

That changes the buyer-supplier relationship. Labs increasingly want partners who can analyze gaps, not vendors who ship volume. Greenberg says quality now matters more than a 20% price saving. Data spending is moving from roughly 2% to 3% of a lab's compute budget toward 4% to 6%, with a plausible case for much more if better data reduces wasted compute. Post-training has become thick enough that data is now a major constraint.

The next frontier is likely to be robotics, 3D world models, CAD, mechanical engineering, and chip design, while legal, finance, and computer use still have room. The through-line is that intelligence keeps finding longer-horizon problems, and someone has to build the environments that make those problems learnable.

Source: [1](https://www.youtube.com/@LatentSpacePod)

## Blog

The validated blog feed contained no new qualifying items.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
