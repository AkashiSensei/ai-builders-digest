[English](./ai-digest-2026-11-13-Fri.md) | [中文](../../zh/daily/ai-digest-2026-11-13-Fri.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-11-13-Fri.md)

---

# AI Builders Digest

## Reader's Briefing

The fast-model race is now being judged on enterprise work, not benchmark bragging. Google introduced Gemini 4 Hydrogen as a big step for Gemini, while Box CEO Aaron Levie reported that it beat Gemini 3.8 Flash by 5 percentage points on Box's Complex Work Eval, finished tasks in less than half the time, and used about 12% fewer tokens on a typical task. That combination points to a practical question for buyers: not just peak intelligence, but accuracy per second and per token.

Claude Meetings pushes assistants from a side chat into the room. Claude joins Google Meet as a visible participant, can answer spoken or chat questions, start a document, keep notes, and leave action items and transcripts on the meeting page. The design bet is that shared context is more useful when teammates can see and correct the work as it happens.

Agents are moving from generating software to operating the business around it. Replit Agent can now buy things for a company, including ads to acquire customers, while Vercel CEO Guillermo Rauch argues that agents are becoming design engineers and need a low-level UI SDK rather than rigid, single-framework abstractions.

Security is becoming an agent interface. OpenAI's Thibault Sottiaux says the company announced tools under development for automated patching and automated red teaming. The announcement positions agent work around executable security workflows, from finding weaknesses to repairing them.

Isomorphic Labs is trying to move drug discovery into simulation before it reaches patients. President Max Jaderberg argues that clinical failure often comes from toxicity or off-target effects that only show up in people, and that better predictive models could make wet-lab work a validation step rather than the main learning loop. The goal is not to eliminate experiments, but to enter them with far higher odds.

The industry's dependence on founder-led capital and dealmaking was another thread. FirstMark Capital VC Matt Turck described the AI ecosystem losing its "central banker," its most active investor, and a bold acquirer in Jensen Huang, while SPC General Partner Aditya Agarwal said the industry would not be where it is today without him and called the moment "viscerally painful."

## X / Twitter

**Josh Woodward, VP at Google**

Google VP Josh Woodward announced Gemini 4 Hydrogen, now in Gemini App, calling it fast, smart, and "a big jump." He also showed Gemini shifting to a first-person view, with pre-orders, demos at select Warby Parker, Gentle Monster, and Google stores, and shipping on Dec. 10. ([Hydrogen](https://x.com/joshwoodward/status/2120942262054232392), [point of view](https://x.com/joshwoodward/status/2120990820631450061), [pre-orders](https://x.com/joshwoodward/status/2120990821902397885))

**Claude, Anthropic's AI assistant**

Claude Meetings begins with Google Meet, with other video platforms to follow. Claude joins as a visible participant, can take spoken or chat questions, start a doc, and lets teammates watch and correct the work; after the call, notes, action items, the transcript, and anything Claude built appear on the meeting page. ([launch](https://x.com/claudeai/status/2120974000746582357), [meeting page](https://x.com/claudeai/status/2120973999295643679), [participant mode](https://x.com/claudeai/status/2120973996304830859))

**Aaron Levie, Box CEO**

Box CEO Aaron Levie said early access testing of Gemini 4 Hydrogen on the Box AI Complex Work Eval found it 5 percentage points more accurate than Gemini 3.8 Flash. It also completed tasks in less than half the time with about 12% fewer tokens on a typical task, and it will roll out in Box AI Studio so customers can build custom agents. ([source](https://x.com/levie/status/2120947988143198302))

**Guillermo Rauch, Vercel CEO**

Vercel CEO Guillermo Rauch argues that agents change what frameworks and component libraries are for: build lower-level primitives, then let agents assemble UI. He calls UI SDK the "x86 instruction set" for agents and says rigid, single-framework abstractions are "kryptonite" for an untiring creation machine, while packaged behaviors preserve accessibility, performance, cohesion, and token efficiency. ([source](https://x.com/rauchg/status/2120966768483262648))

**Amjad Masad, Replit CEO**

Replit CEO Amjad Masad announced that Replit Agent can now buy things for a business, including ads to acquire new customers. The move extends the agent from building software toward running operational purchasing tasks. ([source](https://x.com/amasad/status/2121018020520931712))

**Thibault Sottiaux, Codex and ChatGPT at OpenAI**

Thibault Sottiaux of OpenAI's Codex and ChatGPT work said OpenAI announced tools under development for cybersecurity across automated patching and automated red teaming. He pointed readers to the recording of the announcement. ([source](https://x.com/thsottiaux/status/2121036562058400200))

**Matt Turck, FirstMark Capital VC**

FirstMark Capital VC Matt Turck framed the Jensen Huang situation as a loss of the AI ecosystem's "central banker," its most active investor, and a bold acquirer, adding that such aggressive moves are the kind only a founder can make. ([source](https://x.com/mattturck/status/2120951444526264388))

**Aditya Agarwal, SPC General Partner**

SPC General Partner Aditya Agarwal said the industry would not be where it is today without Jensen Huang, and that it is "viscerally painful" to see what is happening. ([source](https://x.com/adityaag/status/2120924059709956201))

## Podcast

### No Priors: Powering AI-Driven Drug Discovery with President of Isomorphic Labs Max Jaderberg

**The Takeaway:** The best way to fix drug discovery is to learn what will fail before a molecule reaches a patient.

Max Jaderberg is president and a founding-team member of Isomorphic Labs, an Alphabet-backed company with the stated goal of solving all disease. His path ran from computer vision and DeepMind's game-playing research to the AlphaFold results, which gave the founding team its first proof that deep learning could generalize in biology. The stakes are hard to overstate: approval counts have stayed roughly flat while knowledge, modalities, cost, and timelines have all grown. Isomorphic's answer is to turn as much medicinal chemistry and disease biology as possible into predictive models, so experiments validate hypotheses rather than serve as the only way to discover them.

The core diagnosis is empirical trial and error. Jaderberg notes that problems such as toxicity, hitting the wrong target, or biology behaving differently than expected can stay invisible until human trials. Better simulations of proteins, cells, and compound behavior could compress that uncertainty and raise the odds that each real-world experiment works.

"A rat isn't actually a human. It's not actually very predictive," Jaderberg says, estimating that animal studies are about 30% predictive of human clinical toxicity. That is why Isomorphic wants to combine in-vitro measurements, organoids, organs-on-chip, and AI models into better human-relevant endpoints. It also generates its own data rather than relying only on biased repositories assembled as byproducts of past drug programs.

The business model is equally deliberate. Isomorphic keeps its drug-design engine in-house, does not sell access or tokens, and applies it to both proprietary programs and partnerships with pharma and biotech teams. The models are designed to be general across diseases, targets, and modalities; internal work focuses on oncology, immunology, and inflammation. Better engineering could also unlock combinations of drugs that modulate several targets at once, a strategy currently limited by liver and toxicity risks.

Jaderberg does not promise a clinical-trial date, saying the science is hard and the company is building its clinical team. His five-year test is blunt: predictive understanding of disease biology and the ability to design precise, low-toxicity molecules should improve by a step change. ([source](https://www.youtube.com/@NoPriorsPodcast))

## Blog

The validated blog feed contained no new qualifying items.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
