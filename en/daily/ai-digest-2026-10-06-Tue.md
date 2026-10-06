[English](./ai-digest-2026-10-06-Tue.md) | [中文](../../zh/daily/ai-digest-2026-10-06-Tue.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-10-06-Tue.md)

---

# AI Builders Digest

## Reader's Briefing

**1. Evals are the product spec, and enterprises still lack the environments to run them.** Meta senior director of AI Madhu Guru argues the most common mistake teams make is treating evals as an extra QA step bolted on after an agent is built, insisting that "your evals are your product spec." Box CEO Aaron Levie sees the same gap from the enterprise side: a "decent amount" of agent adoption is bottlenecked by the ability to test, tune, and optimize agents on "real" work environments, from the files they need to CRMs and email. He predicts every enterprise will have someone managing evals plus infrastructure for building and running evals and simulated environments, and calls it a "huge space." ([Madhu Guru](https://x.com/realmadhuguru/status/2107292113214091355), [Aaron Levie](https://x.com/levie/status/2107283615247999257))

**2. The harness layer is where the agent-era economics are shifting.** Y Combinator President and CEO Garry Tan argues that harnesses from labs have an incentive to burn tokens, which gives harnesses from startups real utility; he points to Grep as an example that can "automatically swap token burn into deterministic tested code" that is repeatable just by observing agent use. Thariq, who works on Claude Code at Anthropic, adds a design principle: planning the way he describes is "a lot more token efficient compared to raw HTML," because the model does not have to remake components or logic for common things like state machines, diagrams, and code snippets. ([Garry Tan](https://x.com/garrytan/status/2107129959550685660), [Thariq](https://x.com/trq212/status/2107294499282293017))

**3. The frontier race looks more plural: US open weights are catching up, and "AGI science loops" are next.** Replit CEO Amjad Masad writes simply that "the US is catching up on open-weights models." Garry Tan predicts "AGI Science Loops are coming," that there will be "Muse/Instinct for those AGI Science Loops," and that Halmos is building that. ([Amjad Masad](https://x.com/amasad/status/2107222388429766970), [Garry Tan](https://x.com/garrytan/status/2107173670699622830))

**4. Agents need environments that are local, constrained, and verifiable.** Vercel CEO Guillermo Rauch introduced gdp-ts, "Ghosts of Departed Proofs for TypeScript," a library, linter, and AI skill for safer API design: sensitive functions require "proofs" that the caller performed an authorization check, and the typechecker verifies them at compile time. He argues that while such patterns were once niche because of code-review costs and syntactic overhead, "the situation is now inverted," since "agents are writing more code than we can review" and thrive in tight loops with hard constraints. Thariq calls his version of the idea "local hands": Claude runs in the cloud but can access your files locally, and it is also coming to Cowork. SPC general partner Aditya Agarwal wants to run the Muse/Dot "computer" locally, arguing it is a better agent environment than an "increasingly locked down MacOS." ([Guillermo Rauch](https://x.com/rauchg/status/2107119811444748555), [Thariq](https://x.com/trq212/status/2107229483015258493), [Aditya Agarwal](https://x.com/adityaag/status/2107133989941387282))

**5. Builders keep shipping small, useful surfaces, from collaborative ChatGPT spaces to consumer learning tools.** Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, says a teammate is "cooking up magic with collaborative space right in ChatGPT," which is "improving leaps and bounds every day." Peter Yang, who makes practical AI tutorials and interviews, published a walkthrough for an AI language-learning app that teaches Japanese over live voice calls, built with Gemini Live APIs for voice and Nano Banana for diorama art, and points readers to more on Gemini 3.8 Live. Ryo Lu, a designer who has worked on Cursor, Notion, and Stripe, shipped ryOS Subtitles for Chrome and a tool for watching Netflix with subtitles in any two languages, plus pronunciation guides for Japanese, Chinese, and Korean. ([Thibault Sottiaux](https://x.com/thsottiaux/status/2107200530477101461), [Peter Yang](https://x.com/petergyang/status/2107108755699900459), [Peter Yang](https://x.com/petergyang/status/2107108768240796093), [Ryo Lu](https://x.com/ryolu_/status/2107146629338042853), [Ryo Lu](https://x.com/ryolu_/status/2107146721591726323))

**6. A designer's pause on craft: constant refinement is not the same as making something worth making.** In a long reflection on Steve Jobs, Ryo Lu writes that he has felt the industry "getting stuck in a loop" of constant refinement and more ways to keep people scrolling, and that even as machines get smarter, "we've also become more disconnected and lonely." He says he wishes more energy went to "learning from people's lives and making them better," and closes with a line he keeps close: "the people who are crazy enough to think they can change the world, are the ones who do." ([Ryo Lu](https://x.com/ryolu_/status/2107246891977335049))

## X / Twitter

### Thibault Sottiaux

Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, says a teammate is "cooking up magic with collaborative space right in ChatGPT," adding that it is "improving leaps and bounds every day."

- [Thibault Sottiaux: collaborative space in ChatGPT](https://x.com/thsottiaux/status/2107200530477101461)

### Peter Yang

Peter Yang, who makes practical AI tutorials and interviews for busy people, published a tutorial for an AI language-learning app that teaches him Japanese through live voice calls. The build uses his spec skill to create key designs, Gemini Live APIs for voice, and Nano Banana for diorama art, and he says followers can build an app to learn 100 phrases for any language before a trip. He also points readers to more on Gemini 3.8 Live.

- [Peter Yang: AI language-learning app tutorial](https://x.com/petergyang/status/2107108755699900459)
- [Peter Yang: learn more about Gemini 3.8 Live](https://x.com/petergyang/status/2107108768240796093)

### Madhu Guru

Madhu Guru, senior director of AI at Meta, argues the most common mistake teams make is treating evals as an additional QA step once the agent is built. AI products are fundamentally different, he says: "Your evals are your product spec."

- [Madhu Guru: evals are your product spec](https://x.com/realmadhuguru/status/2107292113214091355)

### Thariq

Thariq, who works on Claude Code at Anthropic, says planning the way he describes is "a lot more token efficient compared to raw HTML," because the model does not need to remake the components or logic for common things like state machines, diagrams, and code snippets. His favorite name for the pattern is "local hands": Claude runs in the cloud but can access your files locally, and it is also coming to Cowork.

- [Thariq: token-efficient planning](https://x.com/trq212/status/2107294499282293017)
- [Thariq: "local hands" and Cowork](https://x.com/trq212/status/2107229483015258493)

### Amjad Masad

Replit CEO Amjad Masad says "the US is catching up on open-weights models."

- [Amjad Masad: US catching up on open weights](https://x.com/amasad/status/2107222388429766970)

### Guillermo Rauch

Vercel CEO Guillermo Rauch introduced gdp-ts, "Ghosts of Departed Proofs for TypeScript," a library, linter, and AI skill for safer API design. Sensitive functions require "proofs" that the caller performed an authorization check, and the typechecker verifies these proofs at compile time, which he says prevents teams and agents from shipping catastrophic security bugs. He notes that while these patterns have existed for some time, especially in ecosystems like Haskell, human code review and cognitive and syntactic overhead made them niche, and that "the situation is now inverted" because agents write more code than humans can review and thrive under hard constraints. The README models a real Vercel API product constraint: changing the password on a Project requires a proof of a certain role plus a certain entitlement.

- [Guillermo Rauch: gdp-ts for safer API design](https://x.com/rauchg/status/2107119811444748555)

### Aaron Levie

Box CEO Aaron Levie says a decent amount of agent adoption and deployment is bottlenecked by being able to test, tune, and optimize agents on "real" work environments, including the files agents need to access, CRMs, and email. It is impossible to know how agents are performing without understanding how well they execute on your evals and how they will perform after a model change or workflow upgrade, and every enterprise is doing this one by one, which is slow and tedious. He predicts every enterprise will have someone managing evals plus infrastructure for building and running evals and simulated environments, and calls it a "huge space."

- [Aaron Levie: evals and simulated environments](https://x.com/levie/status/2107283615247999257)

### Ryo Lu

Ryo Lu, a designer who has worked on Cursor, Notion, and Stripe, shipped ryOS Subtitles for Chrome and a small tool for language learners: watch Netflix with subtitles in any two languages, plus pronunciation guides for Japanese, Chinese, and Korean, with customizable styles and hand-picked defaults. In a separate reflection on remembering Steve Jobs, he writes that he has felt the industry "getting stuck in a loop" of constant refinement, better supply chains, and more ways to keep people scrolling, and that even as machines get smarter, "we've also become more disconnected and lonely." He says he wishes more energy went to "learning from people's lives and making them better," and closes with the line he keeps: "the people who are crazy enough to think they can change the world, are the ones who do."

- [Ryo Lu: ryOS Subtitles for Chrome](https://x.com/ryolu_/status/2107146721591726323)
- [Ryo Lu: dual-language Netflix subtitles](https://x.com/ryolu_/status/2107146629338042853)
- [Ryo Lu: remembering Steve](https://x.com/ryolu_/status/2107246891977335049)

### Garry Tan

Y Combinator President and CEO Garry Tan says "AGI Science Loops are coming," that there will be "Muse/Instinct for those AGI Science Loops," and that Halmos is building that. He also argues that harnesses from labs have an incentive to burn tokens, which means harnesses from startups have real utility, citing Grep as something that can "automatically swap token burn into deterministic tested code" that is repeatable just by observing agent use.

- [Garry Tan: AGI science loops](https://x.com/garrytan/status/2107173670699622830)
- [Garry Tan: harness incentives and token burn](https://x.com/garrytan/status/2107129959550685660)

### Aditya Agarwal

Aditya Agarwal, a general partner at SPC, highlighted that Sergey Levine, cofounder of Physical Intelligence, is coming to SPC: he notes Levine has three Stanford degrees, has been Berkeley EECS faculty since 2016, and "builds the algorithms that let robots learn from experience, linking what they see to how they move." Agarwal also writes that it would be interesting to run the Muse/Dot "computer" locally, which he sees as a better agent environment than an "increasingly locked down MacOS."

- [Aditya Agarwal: Sergey Levine at SPC](https://x.com/adityaag/status/2107171588194152936)
- [Aditya Agarwal: running Muse/Dot locally](https://x.com/adityaag/status/2107133989941387282)

## Podcast

The validated feed contained no new qualifying podcast episodes for this run.

## Blog

The validated feed contained no new qualifying blog posts for this run.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
