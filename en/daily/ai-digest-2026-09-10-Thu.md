[English](./ai-digest-2026-09-10-Thu.md) | [中文](../../zh/daily/ai-digest-2026-09-10-Thu.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-09-10-Thu.md)

---

# AI Builders Digest

## Reader's Briefing

**1. Coding agents expand what software gets built, and the job math is not simple subtraction.** Box CEO Aaron Levie argues that lowering the cost of code means the world will use coding agents for far more than anyone would have thought: new tool categories, software for companies that could not afford it before, agents that protect systems from cyber risk, automated life sciences research, complex data workflows, and legacy system upgrades. Engineer leverage rises with all of it, so he expects more engineers, not fewer. Every CEO Dan Shipper adds a caution about the standard automation model: it assumes jobs decompose cleanly into tasks, and that automation always reduces human labor, when in his experience automation often creates multiples more work.

**2. The real bottleneck is diffusion, not capability.** In a second argument, Levie says the gap between AI capability and GDP impact comes from diffusion taking much longer than people think. Even with the world's greatest superintelligence in many workflows, teams remain bound by "the laws of corporate physics" like data preparation, pipelines, process reengineering and change management, and then by the speed of the real world: a customer responding to a proposal, a project permit, a drug discovery pipeline that takes years. Many positive daily AI use cases are net neutral to GDP near term. He calls AI diffusion "the theme of the next decade" and sees huge opportunity in building the bridges between superintelligence and real-world workflows.

**3. Intelligence is getting cheaper and easier to distribute.** Vercel CEO Guillermo Rauch says the company made 8 price cuts, fee removals and structure improvements, plus 16 model discounts, "in the last 6 months alone," with more to come. On the distribution side, Anthropic's Claude Marketplace added CrowdStrike, Cursor, FactoryAI, GammaApp, and Vercel, and enterprises can now use their Anthropic spend commitment to buy more Claude-powered products and agents.

**4. Agent platforms are turning into real product surfaces.** Peter Steinberger reports that cloud sessions now run fast in OpenClaw, with Remote Terminal, WebVNC, and CUA for computer use, and that the dashboards and mini-apps he pushed two months ago have replaced much of the custom tooling his team built around OC. Peter Yang's favorite way to test a new model's thinking is to ask it for brutally honest feedback about the blind spots holding you back, pasting the prompt image into ChatGPT.

**5. Reliability, safety, and long horizons are still human work.** OpenAI's Thibault Sottiaux apologized after some banked resets did not fully apply in ChatGPT Work and Codex, granting affected users another reset and an apology email. Sam Altman welcomed Paul, thanking him for his AI safety work and saying he is excited to work together again. Aditya Agarwal, general partner at South Park Commons and co-founder of Bevel Health, calls Waymo one of the greatest examples of human-oriented technology and points to the long road from Google's 2009 self-driving project to Dmitri Dolgov leading Waymo as co-CEO. Zara Zhang closes with a reminder that an idea is easy and conviction is hard.

## X / Twitter

### Aaron Levie: CEO of Box

Box CEO Aaron Levie says the world is going to use coding agents for far more than anyone would have thought: building tools in entirely new categories, building software for companies that could not afford it before, using agents to protect systems from cyber risk, automating research in life sciences, processing huge amounts of data in complex workflows, and upgrading legacy systems and infrastructure. His conclusion: by lowering the cost of code, we will do much more with it, software becomes more useful, and the leverage of engineers goes up dramatically, which "will mean we need more of them, not fewer."

In a separate post, he argues the way to reconcile AI capability with GDP impact is that diffusion will take much longer than people think, and it will also show up in ways that are hard to measure in GDP immediately. Even with the world's greatest superintelligence in many workflows, teams are bound by "the laws of corporate physics," including getting data prepared and into a pipeline, process reengineering and change management, and aligning on how the new workflow should function. After that they are still bound by the speed of the real world: waiting for a customer to respond to a proposal, getting a permit for a project, or a drug discovery pipeline taking years to reach the consumer. He notes many positive daily AI use cases are entirely net neutral to GDP in the near term, calls AI diffusion "the theme of the next decade," and sees "a tremendous amount of opportunity in building the bridges between superintelligence and real-world workflows."

- [Aaron Levie on coding agents creating more engineering demand](https://x.com/levie/status/2097920810543468551)
- [Aaron Levie on AI diffusion and GDP](https://x.com/levie/status/2097738533297689012)

### Dan Shipper: CEO of Every

Every CEO Dan Shipper calls a recent report "very good and well designed," but flags two assumptions that significantly change the analysis: first, that jobs can be decomposed into tasks; second, that human tasks created by automation are always modeled as a fraction of automated tasks, meaning automation always reduces human labor or at best leaves it the same. He writes: "in my experience, the answer is no. automation often creates multiples more work for humans." He finds task decomposition a useful lens for asking how much of a job is automatable, but not the full picture, because it cannot explain where new tasks come from.

Borrowing from Wittgenstein and Heidegger, he argues a job is "a particular way of seeing and caring about the world": an editor notices things a nurse does not, and vice versa. What you care about shapes what you notice, what seems worth doing, and what counts as doing it well. You can make some of that explicit as a task list, but as tools and circumstances change, the same cares can generate entirely new tasks. That process, he says, is part of the job, and it is missing from the analysis even though it is by definition very hard to model.

- [Dan Shipper on automation and job creation](https://x.com/danshipper/status/2097758891270697101)

### Guillermo Rauch: CEO of Vercel

Vercel CEO Guillermo Rauch highlights 8 price cuts, fee removals and structure improvements, plus 16 model discounts, "in the last 6 months alone." He promises more to come.

- [Guillermo Rauch on Vercel price cuts and model discounts](https://x.com/rauchg/status/2097828203658383674)

### Claude: Anthropic's AI Assistant

Claude announced new names on Claude Marketplace: CrowdStrike, Cursor, FactoryAI, GammaApp, and Vercel. The key change for enterprises is that they can now use their Anthropic spend commitment to buy more Claude-powered products and agents. Anthropic also invited builders on the Claude Platform to get listed, so that its customers can more easily buy their products.

- [Claude on new Claude Marketplace partners](https://x.com/claudeai/status/2097718980437831935)
- [Claude on getting listed on the Claude Platform](https://x.com/claudeai/status/2097718982920855834)

### Peter Steinberger: OpenClaw and OpenAI

Peter Steinberger reports that cloud sessions are now working fast in OpenClaw, with Remote Terminal, WebVNC, and CUA for computer use. In a separate post, he notes that dashboards and mini-apps, which he pushed two months ago, have replaced lots of the custom tooling his team built around OC: "Everything's a sidebar entry, a dashboard or a plugin now for our team server."

- [Peter Steinberger on fast cloud sessions in OpenClaw](https://x.com/steipete/status/2097935551735423464)
- [Peter Steinberger on dashboards and mini-apps replacing custom tooling](https://x.com/steipete/status/2097880507753382201)

### Peter Yang

Peter Yang, who makes practical AI tutorials and interviews for busy people, shares his favorite way to test a new model's thinking abilities: ask it for brutally honest feedback about the blind spots that are holding you back, by pasting the whole prompt image into ChatGPT. He found Astra's feedback especially blunt.

- [Peter Yang on testing a model's thinking with a blind-spot prompt](https://x.com/petergyang/status/2097729250505966046)

### Thibault Sottiaux: Codex & ChatGPT at OpenAI

Thibault Sottiaux of OpenAI's Codex and ChatGPT team says there was "a bit of a kerfuffle" when some banked resets did not fully apply in ChatGPT Work and Codex. Everyone who used one in the affected time window is getting another one, plus an email to apologize.

- [Thibault Sottiaux on banked reset issues](https://x.com/thsottiaux/status/2097752790177370535)

### Sam Altman: OpenAI

Sam Altman welcomed Paul, saying he is grateful for what Paul is doing and for all he has done for AI safety, and that he is excited to work together again.

- [Sam Altman welcoming Paul](https://x.com/sama/status/2097776310940569783)

### Aditya Agarwal: General Partner at South Park Commons

Aditya Agarwal, general partner at South Park Commons and co-founder of Bevel Health, calls Waymo "one of the greatest examples of human-oriented technology" and notes the long road behind it: Dmitri Dolgov joined Google's self-driving project in 2009 and now leads Waymo as co-CEO. Agarwal adds that Dolgov is visiting SPC this month.

- [Aditya Agarwal on Waymo and Dmitri Dolgov](https://x.com/adityaag/status/2097736847879192917)

### Zara Zhang: Builder

Zara Zhang, a builder, puts it simply: "Idea is easy. Conviction is hard."

- [Zara Zhang on ideas and conviction](https://x.com/zarazhangrui/status/2097599758391255259)

## Podcast

The validated podcast feed contained no new qualifying episodes.

## Blog

The validated blog feed contained no new qualifying items.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
