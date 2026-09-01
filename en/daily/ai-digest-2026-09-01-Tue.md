[English](./ai-digest-2026-09-01-Tue.md) | [中文](../../zh/daily/ai-digest-2026-09-01-Tue.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-09-01-Tue.md)

---

# AI Builders Digest

## Reader's Briefing

**1. OpenAI pulls a top product mind into Codex.** Nan Yu, soon to join OpenAI's product staff after four years as head of product at Linear, announced he is joining the company to work on Codex and ChatGPT, saying he looks forward to bringing everything he learned at Linear about the craft of software into the next chapter.

**2. Model frontier literacy is now core PM work.** Madhu Guru, Senior Director of AI at Meta who previously led Gemini, Veo, and Nano Banana at Google, argues there is immense alpha in understanding the model frontier for your product: what models in each size category can do well today, where each fails, what workarounds overcome those failures, and what models will likely do two to three months out, which should drive the roadmap. He says this is a core part of the PM job now.

**3. Trust is the gate for personal agents.** Peter Yang argues trust will be the biggest barrier, and the biggest driver, of personal agent adoption, a key signal for anyone building agents that touch users' lives.

**4. Open weights open a new play for data-rich companies.** Box CEO Aaron Levie argues that as open-weights models improve and post-training infrastructure matures and commercializes, companies with large amounts of data can reasonably train their own models instead of just licensing data; frontier models keep a broad edge, but expect far more models across every vertical and domain. He also flags that as AI security events pick up, the most sophisticated AI agents will be critical for detecting and preventing security issues, with open models catching up quickly in cyber.

**5. Developers double down on agent infrastructure.** Vercel CEO Guillermo Rauch frames coding tokens as infrastructure that needs governance, optimization, and observation, announcing AI Gateway now ships per-key and per-user budgets; he also argues the next design system is Markdown, with DESIGN.md helping solve AI "slop" and scale design taste. Separately, Y Combinator President & CEO Garry Tan released new evals for his open-source agent memory layer GBrain, and argued Circleback beats Granola for AI note-taking.

## X / Twitter

### Peter Yang

Peter Yang, who publishes practical AI tutorials and interviews for busy people, argues that trust will be the biggest barrier, and the biggest driver, of personal agent adoption.

- [Peter Yang on trust and personal agent adoption](https://x.com/petergyang/status/2094639655258091792)

### Nan Yu: Product staff at OpenAI (prev. head of product at Linear)

Nan Yu announced he is joining OpenAI to work on Codex and ChatGPT, thanking the Linear team for an incredible four years and saying he looks forward to bringing everything he learned there about the craft of software into this next chapter.

- [Nan Yu on joining OpenAI](https://x.com/thenanyu/status/2094427243565269107)

### Madhu Guru: Senior Director of AI at Meta

Madhu Guru, who previously led Gemini, Veo, and Nano Banana at Google, argues there is immense alpha for PMs who understand the model frontier for their specific product and use cases. He says PMs should be able to answer, better than most frontier lab researchers and PMs: what models in each size category can do well today, where each model fails, what workarounds can overcome those failures, and, given the trajectory, what models will likely be able to do two to three months from now and how the roadmap should look. This, he says, is a core part of the PM job now.

- [Madhu Guru on the model frontier as core PM work](https://x.com/realmadhuguru/status/2094591503981281503)

### Guillermo Rauch: CEO of Vercel

Rauch argues that coding tokens are basically infrastructure, yet companies hand them out like an AWS key with no governance; AI Gateway fixes this for all your tokens with per-key and now per-user budgets. In a separate post, he writes that the next design system is Markdown: DESIGN.md is helping solve the hardest problem in AI today, slop, and lets large organizations finally scale design taste.

- [Guillermo Rauch on AI Gateway per-user budgets](https://x.com/rauchg/status/2094523399280435630)
- [Guillermo Rauch on Markdown as the next design system](https://x.com/rauchg/status/2094541309579235680)

### Aaron Levie: CEO of Box

Levie argues that as base open-weights AI models get far better and post-training infrastructure becomes more mature and commercialized, companies with large amounts of data will have new plays for their own models: licensing data for external model training was previously the only option, but you can now reasonably train your own models without the cost and complexity of competing with the labs on research. Frontier models will still have a leg up on the widest set of tasks, but you can see a future with far more models across every vertical and domain. Separately, he says that as AI security events pick up, the most sophisticated AI agents will be critical for detecting and preventing security issues; frontier models are still ahead in cyber, but open models are catching up quickly.

- [Aaron Levie on companies training their own models](https://x.com/levie/status/2094650992818274514)
- [Aaron Levie on AI security agents](https://x.com/levie/status/2094545525102235844)

### Garry Tan: President & CEO of Y Combinator

Tan released new GBrain evals that he says help prove his retrieval-for-AI-agent open source layer is state of the art for reading memory back without an LLM-in-loop, plus evals for saving memory from agent transcripts. In a separate post, he argues Circleback is "so much better than Granola, it's not even close," claiming Granola still doesn't support multiple-person disambiguation.

- [Garry Tan on new GBrain evals](https://x.com/garrytan/status/2094462971598754010)
- [Garry Tan on Circleback vs. Granola](https://x.com/garrytan/status/2094465505142960443)

### Dan Shipper: CEO of Every

Shipper argues that anthropomorphizing AI is good when it serves to help us use, understand, and predict AI better, but bad when it sows panic, fear, and unrealistic or unwarranted comparisons to humans. Most opponents of anthropomorphism, he says, are rightly reacting to its misuse to sow panic or to alter the moral status of agents by claiming consciousness, but it is possible to use anthropomorphism without doing that.

- [Dan Shipper on anthropomorphizing AI](https://x.com/danshipper/status/2094406185109647580)

## Podcast

### Training Data: Rich Sutton and Khurram Javed: Why AI Models Stop Learning, and How to Start It Again

The Takeaway: Today's AI assistants are frozen at deployment, their weights never change, and the next leap in AI depends on systems that keep learning from experience.

Rich Sutton, who invented reinforcement learning, wrote the field's seminal textbook, and authored The Bitter Lesson, sees the debate differently: "I'm not weird. The field is weird." With cofounder and former University of Alberta student Khurram Javed, he founded Oak Lab to build what he calls true intelligence, and this conversation explains why he thinks current LLMs are only part of the answer.

Sutton compresses The Bitter Lesson into 26 words: don't be distracted by human knowledge; instead, focus on learning methods that will scale with computation, like search and learning. On that test, LLMs are both a positive and a negative example. They enabled enormous scaling with computation, but they drink from a finite internet and stop learning the moment they ship. "Their weights never change," he says. He calls synthetic data "just a big mistake": Javed's big world hypothesis holds that the world is infinitely big, and synthetic datasets are bottlenecked by the humans who must decide what good data looks like; agents should learn from simulators they build from their own experience.

The cure for catastrophic forgetting is concrete: step-size optimization, where every weight gets its own meta-learned step size, plus generate-and-test in feature space. That is the algorithm behind continual backprop, which Oak Lab published in Nature a couple of years ago and believes will enable a new generation of continual deep learning.

Oak Lab's most ambitious goal is a self-maintaining mind that forms its own abstractions, plans with learned models, and keeps training itself, staying coherent instead of drifting off. Sutton argues it is within reach: if today's approach can run at 2,000 watts, Moore's law makes a trillion-parameter model at 20 watts plausible in five to ten years. He does not think humans become irrelevant, but he does say "you have to wonder about the large language models. They might be at risk," because all of intelligence is not fluid, capable use of language.

Source: https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

## Blog

The validated blog feed contained no new qualifying items.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
