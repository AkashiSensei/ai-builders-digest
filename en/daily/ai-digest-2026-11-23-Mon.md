[English](./ai-digest-2026-11-23-Mon.md) | [中文](../../zh/daily/ai-digest-2026-11-23-Mon.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-11-23-Mon.md)

---

# AI Builders Digest

## Reader's Briefing

The day's clearest policy thread is a push to make AI safety and pacing measurable across labs. Sam Altman said labs agreed under the White House Accords to establish standards and best practices, then proposed shared evaluation norms, red-teaming and transparency before first use, plus common limits based on perplexity and other measurements until monitoring reaches a concrete milestone such as a successor to chain-of-thought monitors ([tweet](https://x.com/sama/status/2124558713646428663)) ([tweet](https://x.com/sama/status/2124551883130114403)). Swyx highlighted a related OpenAI argument for perplexity as a universal benchmark and warned that headline metrics may only translate at the frontier math level ([tweet](https://x.com/swyx/status/2124583459356373052)) ([tweet](https://x.com/swyx/status/2124590240539259381)).

Agent-era software design is splitting into two questions: how agents behave as customers, and how teams of agents coordinate. Peter Yang shared Microsoft Copilot EVP Clamanna's warning that "Agents are very harsh customers," with preferences for performance, price and reliability that differ from human users, down to tolerating a thousand search results instead of ten links ([tweet](https://x.com/petergyang/status/2124669298191090033)). Aaron Levie argued that long-running agents and parallel agent swarms will force the harness and orchestration layer to evolve around shared knowledge, task tracking, human coordination and controlled resource access ([tweet](https://x.com/levie/status/2124658150771188157)).

Security was the day's strongest counterweight to agent optimism. Amjad Masad called desktop AI apps "a security and privacy nightmare," then pointed to Replit Desktop's security model built with Windows and Christie's adoption for secure agentic work ([tweet](https://x.com/amasad/status/2124604574606795002)). Guillermo Rauch warned that free "stealth model" inference can be industrial-scale data exfiltration to nation-state programs, said Dragos research seems to confirm the suspicion, and contrasted Vercel AI Gateway with providers taking those shortcuts ([tweet](https://x.com/rauchg/status/2124595496849445079)). Dan Shipper added a conditional aviation warning: if an incident was caused by an AI-assisted cyber attack, attacks on a plane's weight, fuel and location data could bypass assumptions built after 9/11 ([tweet](https://x.com/danshipper/status/2124567533449613819)).

The tactical builders were unusually concrete. Nan Yu's secret prompt for making vibecoded projects scale, perform better and become more reliable is simply "Use Postgres" ([tweet](https://x.com/thenanyu/status/2124592238974156861)). Swyx recommended a founder journey breakdown that covers IP assignment problems, hiring and layoff advice and how to fish for an acquisition, arguing that more founders should document these lessons ([tweet](https://x.com/swyx/status/2124730733147390347)).

Dan Shipper's closing argument at Every's conference was the day's deepest reframing of work. He cited GDPval results showing AI beating human experts 12.4% of the time in 2024, 47.6% in 2025 and about 83% in 2026, then described doing the work of five roles in one week with one Claude subscription. The point is not that the aggregate curve is fake; it is that generation is becoming cheap while ranking remains hard. "Generation is really cheap, but ranking is hard." Responsibility narrows the search space, perspective decides what matters, and the valuable alpha is the non-consensus use of a model that everyone can access ([episode](https://www.youtube.com/watch?v=WstNofgQF5Q)).

## X / Twitter

### Swyx

Swyx recommended a detailed founder journey breakdown that traces a company from founding to acquisition, including IP assignment problems, hiring and layoff advice and how to fish for an acquisition. He argued that more founders should document these lessons because it can save others a lot of pain ([tweet](https://x.com/swyx/status/2124730733147390347)). On AI progress, he highlighted OpenAI's proposal to use perplexity as a universal metric for industry self-regulation and pacing instead of FLOPS. He quoted the claim that progress on compression gives a shared benchmark for general intelligence, with further transformative capabilities expected in the roughly 0.68 to 0.7 log-perplexity window, and argued that post-training debates are the B plot next to large-scale pretraining. He also wondered whether a metric showing more progress this year than in 2022-2025 reflects reality or only translates at the frontier math level ([tweet](https://x.com/swyx/status/2124583459356373052)) ([tweet](https://x.com/swyx/status/2124590240539259381)).

### Peter Yang

Peter Yang, who makes practical AI tutorials and interviews for busy people, shared a warning from Microsoft Copilot EVP Clamanna: "Agents are very harsh customers." Clamanna argued that agents will look for the best performance, price and reliability, and that what an agent prefers is not always what a person prefers. A person searching the web gets ten links and small snippets; an agent does not care and can be given a thousand results. The implication is that APIs and user experiences will evolve modes that better support agents ([tweet](https://x.com/petergyang/status/2124669298191090033)).

### Nan Yu

Nan Yu, who works on product for Codex at OpenAI and previously led product at Linear, offered a deliberately simple fix for vibecoded projects that need to scale: "Use Postgres." He framed it as a secret prompt that makes projects scale, perform better and become more reliable ([tweet](https://x.com/thenanyu/status/2124592238974156861)).

### Amjad Masad

Replit CEO Amjad Masad argued that desktop AI apps are generally "a security and privacy nightmare." He said Replit worked with Windows to ship a world-class security model for Replit Desktop, and that Christie's, which he describes as the world's preeminent custodian of rare art, chose Replit for secure agentic work ([tweet](https://x.com/amasad/status/2124604574606795002)).

### Guillermo Rauch

Vercel CEO Guillermo Rauch argued that AI should be pointed toward human-understandability and conceptualization. He said the Riemann proof should come with a paper, a walkthrough and new concepts, much as high-level code benefits from an intermediate representation even when an LLM can go straight to CPU instructions ([tweet](https://x.com/rauchg/status/2124654108124848350)). In a separate post, he warned that free "stealth model" inference can be a mechanism of industrial-scale data exfiltration to nation-state programs, said Dragos research seems to confirm that suspicion, and noted that Vercel AI Gateway built real token volume without those shortcuts ([tweet](https://x.com/rauchg/status/2124595496849445079)).

### Aaron Levie

Box CEO Aaron Levie argued that as agents take on more long-running project work and swarms of agents parallelize toward a goal, the agent harness and orchestration architecture will have to evolve. The hardest part is how agents collectively share knowledge, track tasks, coordinate with human users and get access to the right resources without too much or too little exposure. He sees lessons in how human teams already share files, work on computers and communicate in chats and inboxes, but says the primitives must support far higher throughput in a world where agents can more easily become a security risk ([tweet](https://x.com/levie/status/2124658150771188157)).

### Dan Shipper

Every CEO Dan Shipper, who described himself as usually not alarmist, warned that if an aviation incident was caused by an AI-assisted cyber attack, it would be "very bad." He argued that an attacker able to mess with a plane and its pilot's knowledge of weight, fuel and location could make security measures built after 9/11 irrelevant. He stressed that he is not an expert on airplane systems, noted that most planes have manual overrides, and invited people with more knowledge to weigh in ([tweet](https://x.com/danshipper/status/2124567533449613819)).

### Sam Altman

Sam Altman said labs agreed under the White House Accords to establish standards and best practices to improve the safety of their systems, and argued that a discussion about perplexity can further those goals. He proposed that frontier model developers jointly establish shared norms for evaluating models, red-teaming safety cases and transparency standards by the time models are first used. He also floated common limits based on perplexity and other measurements that developers would not cross until monitoring reaches a concrete milestone, such as a successor to chain-of-thought monitors ([tweet](https://x.com/sama/status/2124558713646428663)) ([tweet](https://x.com/sama/status/2124551883130114403)).

## Podcast

### AI & I by Every: A New Vision for Human Work After Automation

**The Takeaway:** In an economy where everyone gets the same model, the scarce asset is the judgment to decide what matters and the responsibility to act on it.

Dan Shipper, co-founder and CEO of Every, makes that case by starting with an uncomfortable measurement. On GDPval, a benchmark where blind experts compare AI and human output on real work tasks, AI won 12.4% of the time in 2024, 47.6% in 2025 and about 83% in 2026, a result he attributes to GPT-5.4. He also describes a week in which one Claude subscription let him do work that would have required a data scientist, game developer, product marketer, engineer and salesperson. The aggregate curve looks like human work going to zero.

Then he zooms in. His team ran the same customer survey through the same model. One colleague found that first-time subscribers churn because Every sends too much email; another found that readers feel lonely; a third turned the results into a Claymation game show. The default model answer was accurate but generic: the writing is the business, the bundle drives retention, and volume is a risk. Because everyone can get that answer, it is cheap.

The sharper experiment came from Every's head of evals, who could predict what Shipper would say in Slack 93% of the time, but only if Claude generated 400 candidate answers per question. It could not reliably rank them. "Generation is really cheap, but ranking is hard." That is why teams still matter. Responsibility narrows the search space; perspective determines what gets picked.

Shipper calls this the allocation economy. "You won't be judged on how much you know, but instead on how well you can allocate and manage the resources to get work done, the resources of intelligence." The floor keeps rising for everyone, so default capability becomes status quo. The alpha is where a person pushes the model with a non-consensus view. He argues this should change how we measure AI: not only whether it solves consensus problems like math and code, but whether it does my work from my perspective. The aggregate freezes humans at their old baseline; the intimate view shows what a person can become with the model ([watch the episode](https://www.youtube.com/watch?v=WstNofgQF5Q)).

## Blog

The validated feed contained no new qualifying blog items.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
