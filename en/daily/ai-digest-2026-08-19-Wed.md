[English](./ai-digest-2026-08-19-Wed.md) | [中文](../../zh/daily/ai-digest-2026-08-19-Wed.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-08-19-Wed.md)

---

# AI Builders Digest

## Reader's Briefing

**1. The trillion-dollar company era is a five-year anomaly.** Three companies went from near zero to a trillion-dollar market cap in roughly five years, versus the 15 to 20 year arcs of SpaceX and Google. On No Priors, Elad argues that few, if any, more will follow in the next three to five years, because a $50-100B revenue stream per company is a different order of magnitude from a huge TAM, while plenty of $10B companies remain to be built.

**2. The tool layer is sprinting.** Google VP Josh Woodward listed what's next for Gemini: revamped Workspace tools within 1-2 weeks, tool-calling improvements in 3.7 Flash, a new "Projects" design, and 49 connectors supported. Claude Code is teasing quality-of-life improvements, Vercel's Cursor Origin now deploys straight to Vercel from hosted repos, and OpenAI's Codex team is asking what obvious capabilities are still missing.

**3. Evals and continual learning are the new frontier.** Madhu Guru's playbook: make quality measurable, study real traces, encode failure modes, and keep evals mirroring live traffic. Swyx's Continual Learning track covered why GRPO isn't enough and why Trajectory went on-policy. Thariq now believes LLM coding models will beat diffusion models at much creative work.

**4. AI-native leverage and data as an asset.** Aaron Levie argues data is becoming valuable in almost any form and belongs on the balance sheet. Amjad Masad flagged a team with no "AI" in its pitch growing at AI rates with a fraction of the headcount, and says pen testing, not just scanning, is how you secure code. Garry Tan open-sourced his Personal AGI kit for Claude Code and Codex.

**5. Moat debates and the rise of brand.** Nikunj Kothari's viral take: nobody in AI has a moat except the venture firm. His counterpoint: brand marketing becomes the major differentiator and one of the most prized assets, especially once agents are the primary users of most products.

## X / Twitter

### Swyx
Swyx pointed to an overview by Trajectory's rronak at his Continual Learning track, covering the main data problems left in continual learning, why GRPO isn't enough, and why Trajectory had to go on-policy and then fix the issues that came with it. He called Trajectory one of the early leaders in the field and praised their "tasteful execution on ambitious goals."

- [Swyx on Trajectory's continual learning overview](https://x.com/swyx/status/2089393073327653344)

### Josh Woodward — VP at Google
Circling back on requested improvements, Woodward shared what's next for the Gemini experience: revamped Workspace tools are being tested within 1-2 weeks, 3.7 Flash showed tool-calling improvements with more coming, a new "Projects" design is done and being implemented, and 49 connectors (and counting) are supported. Several other requested items are done, including fixes for the biggest over-triggering bugs.

- [Josh Woodward's Gemini experience updates](https://x.com/joshwoodward/status/2089520767281324112)

### Boris Cherny — Claude Code at Anthropic
Cherny said "small quality of life improvements like this add up" with more on the way, and asked users what they think of the recent Claude Code change.

- [Boris Cherny on Claude Code quality-of-life improvements](https://x.com/bcherny/status/2089538781909332210)
- [Boris Cherny asking for feedback](https://x.com/bcherny/status/2089537919795212565)

### Thibault Sottiaux — Codex & ChatGPT at OpenAI
Sottiaux asked the community what obvious thing OpenAI should "just do" with Codex, the API, or its models, that is "100% within reach" but still missing.

- [Thibault Sottiaux's roadmap question](https://x.com/thsottiaux/status/2089500941842342287)

### Madhu Guru — Senior Director of AI at Meta
Guru's playbook for getting good at evals: take a workflow you know well and make its quality measurable; study the actual traces, meaning the sequence of prompts typical users run and what good responses look like at each step; and capture where the product fails, such as messy tool call responses or missing context. Then make the eval easy to run repeatedly and automatically, and keep it mirroring live traffic as user patterns evolve.

- [Madhu Guru on evals](https://x.com/realmadhuguru/status/2089480958571331623)

### Thariq — Claude Code at Anthropic
Thariq pointed users to the /design command in Claude Code for design work, and argued that recent procedural-generation art, video-editing, and 3D game demos have updated his view: LLM coding models are better at a lot of creative work than diffusion models. His reasoning is that code is easier to edit, easier to nudge in the direction you want, and easier to export to existing tools.

- [Thariq on /design in Claude Code](https://x.com/trq212/status/2089529798850969805)
- [Thariq on LLM coding models vs diffusion models](https://x.com/trq212/status/2089415712007938315)
- [Thariq on why code is easier to edit](https://x.com/trq212/status/2089415713098522688)

### Amjad Masad — CEO of Replit
Masad highlighted a team that has no "AI" anywhere in its pitch but shows AI-level growth rates, noting they would need 10x the headcount if they weren't "so AI-pilled." Separately, he argued that scanning code for vulnerabilities isn't enough: "it's important to try to break them with pen testing."

- [Amjad Masad on AI-native teams](https://x.com/amasad/status/2089525819567739264)
- [Amjad Masad on pen testing](https://x.com/amasad/status/2089435606338416884)

### Guillermo Rauch — CEO of Vercel
Rauch announced that you can now host your repos in Cursor Origin and deploy to Vercel via Cursor Origin, which is itself hosted on Vercel. "And unlike GitHub, it's online," he joked.

- [Guillermo Rauch on Cursor Origin and Vercel](https://x.com/rauchg/status/2089409162270965858)

### Aaron Levie — CEO of Box
Levie said this is what "data is the new oil" ultimately looks like: AI's thirst for data means we're entering an era where data is valuable almost in any form. In a world of AI, information belongs as an asset on the balance sheet, and how companies manage and mine their organization's intelligence will be a deciding factor for competitiveness and value creation.

- [Aaron Levie on data as an asset](https://x.com/levie/status/2089499887905997272)

### Garry Tan — President & CEO of Y Combinator
Tan open-sourced his "Personal AGI" kit: a private GitHub repo with 70 of his proven skills and the beginnings of a Karpathy-style knowledge wiki, MIT-licensed and free. It works with an existing Claude Code or Codex subscription, and is meant to set up your agent repo quickly from a new directory.

- [Garry Tan on the open-source Personal AGI](https://x.com/garrytan/status/2089438298540519821)
- [Garry Tan on what you get](https://x.com/garrytan/status/2089425134339961173)
- [Garry Tan on how to use it](https://x.com/garrytan/status/2089424620764168485)

### Nikunj Kothari — Partner at FPV Ventures
Kothari's viral take: no one in AI has a moat, from the models (OpenAI, Anthropic, XAI) to the IDEs, harnesses, app builders, wrappers, inference providers, voice layer, data labeling companies, infrastructure, neoclouds, and generative media, "except the venture firm." Separately, he argued brand marketing will become the major differentiator and one of the most prized company assets, especially if agents become the primary users of most products, and predicted the people who excel at it will be hired as cofounders or given a big seat at the table within the next 10 years.

- [Nikunj Kothari on AI moats](https://x.com/nikunj/status/2089486802356961364)
- [Nikunj Kothari on brand marketing](https://x.com/nikunj/status/2089374392295842086)

## Podcast

### No Priors — Chasing Trillion-Dollar Companies, Founder Ambition, Token Budgets, and Regulatory Capture with Sarah & Elad
**The Takeaway:** In AI time, a year moves like three or four normal years, so the biggest risk for a founder isn't the market, it's spending your most productive years inside a company that should have been sold.

Sarah and Elad, the hosts of No Priors, argue the trillion-dollar company era was a freak inflection: three companies went from roughly zero to a trillion-dollar market cap in about five years, while SpaceX and Google each took 15 to 20 years. Elad's contrarian read: don't expect many more in the next three to five years, because reaching $50-100B of revenue per company is a different order of magnitude from a huge TAM. His mental model is punctuated equilibrium: waves explode, then consolidate, and plenty of $10B companies are still there to be built.

Both are equally contrarian about exits. Because "every year of AI time is like three to four years of normal cycle time," a company's maximum-value window is often just 12 to 18 months, so founders should hold a pre-planned board discussion about selling every six months. Sarah's test: "Are you capturing value as costs fall and capabilities increase?" The real opportunity cost isn't equity, it's time, and the 2020-21 cohort trapped in struggling companies has already missed five years of AI change.

On the labs' manic belief that code will be solved within the year and light RSI follows next year, Sarah is skeptical: researchers have predicted RSI "eighteen months away" every eighteen months for five years, and physical compute access, not algorithms, looks like the real limiter. Compute scarcity also pushes labs toward an enforced oligopoly where the interesting question is return on invested tokens: who gets the budget and why.

On regulation, Elad warns that safety without a risk-reward frame stalls everything. He points to nuclear power, where France still generates 70% of its electricity, versus the US at 18% with no reactor built in 40 years: "we had a safety lobby in the seventies basically kill abundant clean energy for us." His closing argument is a call against regulatory capture, because tech's speed and impact came from staying lightly regulated.

- [No Priors episode](https://www.youtube.com/watch?v=6l8oAO_LBx4)

## Blog

The validated feed contained no new qualifying blog posts for this digest period.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
