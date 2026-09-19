[English](./ai-digest-2026-09-19-Sat.md) | [中文](../../zh/daily/ai-digest-2026-09-19-Sat.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-09-19-Sat.md)

---

# AI Builders Digest

## Reader's Briefing

**1. Diffusion wants to break the autoregressive default.** Inception co-founder and CEO Stefano Ermon, a longtime Stanford professor known as one of the fathers of diffusion, argues the next efficiency jump in AI will come not from chips but from a more parallel way of generating text. He says Inception's Mercury models match the speed-optimized frontier models on benchmarks while running significantly faster, and that a voice-agent customer switched to Mercury to get custom-chip speed on ordinary NVIDIA GPUs. His thesis is that inference is where the economics get decided, and that "the more parallel solution is the one that is eventually going to win."

**2. Claude Code signs on to AGENTS.md.** Thariq, who works on Claude Code at Anthropic, announced that starting in version 2.1.277, Claude Code will check for and use AGENTS.md when a folder has no CLAUDE.md, with the behavior toggleable in /config. The support is built on Claude Code mods, an upcoming way to customize the Claude Code harness; it ships as a built-in mod, and users will be able to build custom versions of project instructions themselves. The feature is small, but the signal is not: agent tools are converging on shared instruction files instead of each inventing its own.

**3. Jev and the cheap, fast inference wave.** Box CEO Aaron Levie showed a Box plus Jev demo that pulls an incident report, asks whether it is customer-facing and how severe it is, files it into escalate, monitor, or review folders, and writes a metadata template with the result, all nearly instantly and at almost no cost. Vercel CEO Guillermo Rauch said open models hit 78.4% of token volume on Vercel AI Gateway that day versus 21.6% closed, with Moonshot AI and DeepSeek at #3 and #4, and that adding Z.ai would push their combined inference spend past OpenAI at #2. FPV Ventures partner Nikunj Kothari built Jevable to catalog Jev demos from X, and highlighted one that scored 3,000 kid snacks against multiple criteria in 28 seconds for $0.11. The release cadence is not slowing: OpenAI's Thibault Sottiaux says he has been working on the keynote with Romain Huet and Sam Altman, that there is so much good stuff it is hard to explain, and that some announcements will land next week.

**4. Personal agents get real, and support lines are not ready.** Peter Yang, who makes practical AI tutorials and interviews, calls Meta's Muse the best personal agent he has tried and says it saved him more than $800 a year on cable and phone bills, which he calls insane value for a free agent. His walkthrough covers 10 use cases, including a personalized morning news feed, a habit tracker, and letting Muse call customer support to negotiate bills; a follow-up transcript shows it negotiating $288 in annual savings on his Comcast bill. His conclusion is a warning: most companies' customer support lines are not ready for agents.

**5. Agents move from sessions to teammates.** Peter Steinberger, who works on OpenClaw and OpenAI, describes roboclaw running the team server, living on Discord, talking with gpt-live, and tracking every session it juggles, so the team can ask about current and past context during meetings. He likes having a teammate hijack his sessions to "deslop" them before a pull request lands, and suggests reorganizing sessions from the home sidebar. He adds that CUA works across these surfaces, so an agent can be more efficient than working from screenshots alone.

**6. Craft is the counterweight to slop.** Builder Zara Zhang writes that it is hard not to create slop when most of what you consume is slop, and that fixing output starts with fixing input. Every CEO Dan Shipper makes a related point, defending jackcheng's demo against a "fake" accusation: he calls the work real and an interesting peek into the future, and says the accusation is not a good look.

## X / Twitter

### Thibault Sottiaux: Codex and ChatGPT, OpenAI

Thibault Sottiaux says he was working on the keynote with Romain Huet and Sam Altman, and that most of the fun was figuring out how to explain everything because there is so much good stuff arriving in quick succession. He says some things will land next week so people are not kept waiting too long, and that he is excited to show what the team has been building and how it comes together over the coming months.

- [Thibault Sottiaux: keynote work with Romain Huet and Sam Altman](https://x.com/thsottiaux/status/2101157729037586694)

### Peter Yang: Practical AI tutorials and interviews for busy people

Peter Yang calls Meta's Muse the best personal agent he has tried, saying it saved him more than $800 a year on his cable and phone bills and calling that insane value for a free AI agent. His new video walks through 10 favorite use cases, including a personalized morning news feed, a habit tracker, and getting Muse to call customer support and negotiate bills. He follows up with a transcript of Muse negotiating $288 in annual savings on his Comcast bill, argues most companies' customer support lines are not ready for agents, and says he can see Muse becoming Meta's next billion-user app.

- [Peter Yang: Meta's Muse is the best personal agent he has tried](https://x.com/petergyang/status/2101033599319613533)
- [Peter Yang: Muse negotiated $288 off his Comcast bill](https://x.com/petergyang/status/2101083891507593576)

### Thariq: Claude Code, Anthropic

Thariq announced that Claude Code is adding support for AGENTS.md: starting in version 2.1.277, if there is no CLAUDE.md in a folder, Claude will check for and use AGENTS.md, and the behavior can be toggled in /config. He explains that the support is built off Claude Code mods, an upcoming way to customize the Claude Code harness; it is a built-in mod, but users will be able to build custom versions of project instructions. He also links the source for the mod.

- [Thariq: Claude Code adds AGENTS.md support in 2.1.277](https://x.com/trq212/status/2101009392611278961)
- [Thariq: AGENTS.md is built on Claude Code mods](https://x.com/trq212/status/2101009393731223817)
- [Thariq: source for the mod](https://x.com/trq212/status/2101009395052343462)

### Guillermo Rauch: CEO, Vercel

Guillermo Rauch says today may be a record day for the share of token volume going to open models on Vercel AI Gateway, at 78.4% open versus 21.6% closed. While spend usually tells a different story, he says Moonshot AI and DeepSeek were #3 and #4 that day, and that adding Z.ai would push their combined inference spend past OpenAI at #2; he notes this is inference spend across providers, mostly in the US, not revenue going to the open-weight labs. He also calls the data and anecdata on Jev's adoption shocking, reads it as demand downstream of an "AI is too expensive or slow" zeitgeist, and says he knows what he is doing this weekend: trying Jev on Vercel.

- [Guillermo Rauch: open models at 78.4% of token volume](https://x.com/rauchg/status/2101186741042663579)
- [Guillermo Rauch: the data on Jev's adoption is shocking](https://x.com/rauchg/status/2101079472732848510)
- [Guillermo Rauch: trying Jev on Vercel this weekend](https://x.com/rauchg/status/2101116978677285241)

### Aaron Levie: CEO, Box

Aaron Levie argues Jev will be useful for agents making split-second decisions in workflows, data classification, judgment calls, and hundreds of other enterprise use cases. He walks through a Box plus Jev demo that pulls an incident report from Box, asks whether it is customer-facing and how severe it is, moves the file into escalate, monitor, or review folders, and sets a metadata template instance with the result, all nearly instantly and at almost no cost. He points to insurance claims, contract management, loan processing, security reviews, and customer log analysis as the same pattern.

- [Aaron Levie: a Box and Jev demo for instant enterprise decisions](https://x.com/levie/status/2101007708044574906)

### Zara Zhang

Zara Zhang argues it is hard not to create slop when most of what you consume is slop. To fix output, she writes, you first have to fix input.

- [Zara Zhang: to fix output, first fix input](https://x.com/zarazhangrui/status/2101123389528457596)

### Nikunj Kothari: Partner, FPV Ventures

Nikunj Kothari built Jevable, a site that showcases the Jev demos being posted on X, filterable by category, with a plus button so people can add their own projects. He also highlights Jev scoring 3,000 kid snacks against multiple criteria in 28 seconds for $0.11.

- [Nikunj Kothari: Jevable catalogs Jev demos from X](https://x.com/nikunj/status/2101077053567332618)
- [Nikunj Kothari: 3,000 snacks scored in 28 seconds for $0.11](https://x.com/nikunj/status/2101006585481073093)

### Peter Steinberger: OpenClaw and OpenAI

Peter Steinberger says the coolest part of roboclaw is that it runs the team server, is live on Discord, talks with gpt-live, and knows about all the sessions it is juggling, so the team can ask about context from current and past sessions while in meetings. He likes having a teammate hijack his sessions to "deslop" them before a pull request lands, and shares a tip: open the home sidebar and ask your claw to reorganize your sessions. He adds that CUA works on all of these too, so an agent can be more efficient than working from screenshots alone.

- [Peter Steinberger: roboclaw runs the team server and knows its sessions](https://x.com/steipete/status/2101141707375227372)
- [Peter Steinberger: teammates deslop sessions before a PR lands](https://x.com/steipete/status/2101139037801283997)
- [Peter Steinberger: CUA works across these surfaces](https://x.com/steipete/status/2101115690719809873)

### Dan Shipper: CEO, Every

Dan Shipper acknowledges there are over-the-top AI demos on X, but says it is sad to see someone call jackcheng's work "fake." He calls jackcheng one of the smartest, most intellectually honest, and craft-focused people he has worked with, says the demo is both real and an interesting peek into the future, and concludes that the accusation is not a good look.

- [Dan Shipper: defending jackcheng's demo against a "fake" claim](https://x.com/danshipper/status/2101155521818476693)

## Podcast

### No Priors: Why Diffusion Will Win AI Inference with Inception Co-Founder and CEO Stefano Ermon

The Takeaway: the next big efficiency win in AI may come not from better chips but from a different way of generating text, and the company betting on it thinks parallelism is destiny.

Stefano Ermon has spent his career on generative models. He was at Stanford when he and his student Yang Song developed the score-based approach that became diffusion, and he now runs Inception, a roughly two-year-old, 50-person company building diffusion-based language models. His argument is that the industry has been optimizing an inherently serial process. Autoregressive models emit one token at a time; diffusion models start from noise and refine the whole output in parallel, the way image and video models already work. Ermon calls it coarse-to-fine generation, and says it makes models easier to steer: instead of waiting for a finished answer to score it, you can nudge the generation toward a constraint or a reward from the start.

Inception's Mercury models, he says, are "comparable in quality with the speed-optimized models for Frontier Labs" while being significantly faster, and they are already serving production traffic. One voice-agent customer moved off custom chips because Mercury matched that speed on ordinary NVIDIA GPUs, which are more available and cheaper. Inception had to build its own serving engine, since nothing like vLLM exists for diffusion language models, and that engineering has become part of its moat.

The harder question is whether diffusion can match frontier intelligence, not just frontier speed. Ermon is candid that he does not know. He puts the latency-sensitive share of today's workloads at 20% to 30% as a lower bound, and argues diffusion models show signs of being more data-efficient because denoising acts as a form of data augmentation. His long-run bet is the bitter lesson: "the more parallel solution is the one that is eventually going to win." He still thinks human ingenuity is what matters most, and points to academia as the place where contrarian bets produced ideas like flash attention and DPO.

- [No Priors: Why Diffusion Will Win AI Inference with Inception Co-Founder and CEO Stefano Ermon](https://www.youtube.com/@NoPriorsPodcast)

## Blog

The validated blog feed for this run contained no new qualifying posts.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
