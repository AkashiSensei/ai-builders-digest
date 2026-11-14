[English](./ai-digest-2026-11-14-Sat.md) | [中文](../../zh/daily/ai-digest-2026-11-14-Sat.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-11-14-Sat.md)

---

# AI Builders Digest

## Reader's Briefing

The most durable shift in this batch is from using agents to improving them. Trajectory co-founder Ronak describes a loop where production traces, evaluation, and deployment feed one another, so a model gets cheaper and better on a specific job instead of being retrained in large batches. The promise is less about one universal model than about many specialized ones.

Evaluation is moving back toward real workflows. Garry Tan compared Opus 5.5 and Fable 5.2 on 52 coding tasks, while Nikunj Kothari warned that benchmarks are no substitute for putting a model inside the work it is meant to improve. Together, they point to a practical standard: reproducible evaluation should sit next to real tasks and real costs.

Cost is becoming a first-class model-selection metric. Garry Tan found Fable 5.2 cost 2.80x as much per solved task as Opus 5.5, while the Harvey example in the Trajectory discussion describes a customized model that became six times cheaper and improved accuracy from around 4% for an open source model to around 18%. Rogo is pursuing a similar advantage through token efficiency.

Agent infrastructure is becoming a product in its own right. Guillermo Rauch framed Workflow SDK 5 and Vercel Workflows around faster steps, stronger security, reliability, and a reusable durability log. Amjad Masad pointed to Replit's work with Visa on agentic commerce, showing how payments and transactions are becoming interfaces for agent products.

AI is also reaching high-stakes personal work. Peter Yang shared a free skill that turns medical records into a one-page brief and clinical-trial research, while also questioning a report that labeled Alice Huang a spy. The combination matters: capability in real life must be paired with discipline about evidence and sources.

## X / Twitter

### Peter Yang

Peter Yang shared a free `/fuck-cancer` workflow that asks ChatGPT or Claude to turn a folder of patient medical records into a one-page brief, research clinical trials, and do more; he invited people to fork it for other long-term conditions ([tweet](https://x.com/petergyang/status/2121430386685395022)). He also pushed back on reporting about Alice Huang, saying it remains unclear whether she is a spy despite WSJ jumping to conclusions, and cited the Singapore government as evidence ([tweet](https://x.com/petergyang/status/2121430819667579031)). He added that an NVIDIA employee had shared a related account and encouraged readers to do their own research ([tweet](https://x.com/petergyang/status/2121431117526134923)).

### Amjad Masad

Replit CEO Amjad Masad said the company has had a strong partnership with Visa on agentic commerce and that more features and use cases are coming ([tweet](https://x.com/amasad/status/2121428406764204199)). He also said Replit worked with the owner of the StandWithJensen page, which is built and hosted on Replit, to raise its rate limit so it can scale ([tweet](https://x.com/amasad/status/2121389001546567837)).

### Guillermo Rauch

Vercel CEO Guillermo Rauch called Workflow SDK 5 and Vercel Workflows "a monumental step forward for agents" ([tweet](https://x.com/rauchg/status/2121277727940776114)). He highlighted faster time to first step and time between steps, stronger encryption and security, reliability proven at massive scale and across disaster-recovery scenarios, and a reusable durability log for any agent harness named durable-harness.

### Garry Tan

Y Combinator President and CEO Garry Tan recommended keeping Opus 5.5 as the default coding model in Claude Code, based on 52 coding tasks run in Claude Code 2.1.322 ([tweet](https://x.com/garrytan/status/2121464508225053153)). He said Fable 5.2 and Opus 5.5 solved a similar share of those tasks, 82.7% versus 84.6%, but Fable cost 2.80x as much per solved task; because Opus already solves most of them, he expects harder tests will be needed to separate the two. He also shared an open-source harness evaluation repository with the findings ([tweet](https://x.com/garrytan/status/2121463161069228382)).

### Nikunj Kothari

Nikunj Kothari, a partner at FPV Ventures, argued that benchmark-maxxing is back and that there is no substitute for trying models inside the workflows they are meant to improve ([tweet](https://x.com/nikunj/status/2121320899161010360)). He said only a very small number of benchmarks truly matter, while much of the rest is posturing, hill climbing for marketing, or a tactic that works for some companies but will not last.

## Podcast

### A Model For Everyone: How Ronak From Trajectory Is Building Products For Continual Learning

**The Takeaway:** The next durable advantage in AI is not a single frontier model, but a tight loop that turns real production traces into cheaper, more reliable models for specific work.

Trajectory co-founder Ronak argues that today's agents are only in "pseudo continual learning": they can perform a task, but they do not accumulate experience. The road-trip analogy is useful. Batch retraining is like picking up paper maps from AAA, while true continual learning should work more like Google Maps, where every route updates the system for the next trip. Trajectory packages training, evaluation, and deployment into a one-click workflow built around agent traces and a definition of what good looks like ([episode](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8)).

Early customers show why the loop matters. Harvey trained a model that was six times cheaper and moved accuracy from around 4% for an open source model to around 18%, while Rogo focused on cutting token use severalfold. NVIDIA also uses the platform. Ronak says the hard parts are recreating environments and supplying rewards, especially for legal or finance work where no perfect verifier exists. Trajectory is exploring group-size-one training that can learn from individual rollouts rather than replaying the same environment many times, plus a meta-grader that learns from a densely labeled subset of 100 traces and applies it to 10,000.

The larger opportunity is specialization: bridging plentiful model intelligence with plentiful domain experience. Ronak argues that only about 1% of enterprises have adopted AI so far. His goal is to make customization accessible enough to reach the other 99%. As he puts it: "The final stage of continual learning is something more like Google Maps, where every single time you're driving, every route that you make, it is updating."

## Blog

The validated blog feed contained no new qualifying items for this run.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
