[English](./ai-digest-2026-09-30-Wed.md) | [中文](../../zh/daily/ai-digest-2026-09-30-Wed.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-09-30-Wed.md)

---

# AI Builders Digest

## Reader's Briefing

**1. OpenAI opens the "Dots" era.** Sam Altman announced that "Dots are here," describing a new way to use AI that works 24/7 for you and gets more of your time and attention back to work at a higher level. He also said 6.1 Sol is priced at one fifth of Astra with a 95% cache read discount and is an extremely capable model, and that Ultrafast is so fast he never wants to go back. Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, expects a few million dots online within days across a large and diverse community, says his own experience improved after two to three days of teaching his dot about his preferences and what is on his mind, reports that dots learn quickly to be useful and can take on surprisingly ambitious tasks on their own, and says OpenAI is learning from how people use their primary dot before releasing the ability to create an entire team of them. ([Sam Altman on Dots](https://x.com/sama/status/2104995014208258235), [Sam Altman on 6.1 Sol](https://x.com/sama/status/2104994395980533804), [Sam Altman on Ultrafast](https://x.com/sama/status/2104994601140711896), [Thibault Sottiaux](https://x.com/thsottiaux/status/2105105086506840421))

**2. Claude in Chrome goes generally available, wrapped in prompt-injection defenses.** Anthropic's Claude Blog says Claude in Chrome is now generally available on every paid Claude plan, and Claude can now take actions autonomously in the browser instead of needing approval for every one, with a safety classifier validating each action before it runs. The post lays out the layered safeguards: training against a growing library of prompt-injection attacks, probes that screen the web content reaching Claude through tool results, and pre-action verification that blocks a step when it does not match the original request. On a current evaluation built from stronger, professional red-team attacks, attacks that reached the model succeeded 17.6% of the time against Opus 4.5 and 3.8% against Opus 5 before additional safeguards; from Opus 4.8 onward, with probes plus the safety classifier, no attacks succeeded against Claude Sonnet 5, Claude Opus 5, or Claude Mythos 5, and Fable 5 saw a 0.3% attack success rate. ([Claude Blog](https://claude.com/blog/claude-in-chrome-generally-available))

**3. The industry wants shared safety standards now and regulation later.** Box CEO Aaron Levie says it is entirely plausible that the AI industry can deal with safety and security through a set of shared standards and practices for the foreseeable future, and that collective alignment is still possible. He acknowledges that at some point in capability progress there will inevitably be greater oversight, testing, and layers of liability and regulation, but argues the industry is still in a phase where it can align on these efforts collectively. He calls it awesome that the effort came together so quickly and that the whole industry supported progress without reducing competition, and says it points to a much brighter future for AI. ([Aaron Levie](https://x.com/levie/status/2105111520913039530))

**4. The talent market has gone mercenary, and moats are fracturing.** FPV Ventures partner Nikunj Kothari says it is harder than ever to find missionaries: people are leaving the companies they co-founded for the "obvious" winners, public CEOs are leaving for positions at labs, founders are leaving and rejoining neolabs at a moment's notice, and some companies get "Windsurf-ed" so that only chosen people join the future company. When those people leave on short notice, he says, the remaining company usually becomes a shell, and it feels like a great time to be a mercenary. On defensibility, he argues the moat is no longer one thing, especially at the app layer, where the harness amounts to a thousand small things done well and much of it is invisible, so the real edge is a company's combined product, tech, and GTM advantage, and ultimately the founders' speed of execution and ability to adapt in markets with no blue ocean left. ([Nikunj Kothari](https://x.com/nikunj/status/2105148927599423752))

**5. Agent infrastructure keeps compounding.** Vercel CEO Guillermo Rauch says the AI SDK has hit 30 million weekly downloads and showed a milestone video he says was one-shotted with fframes plus Opus, written in Rust and rendered on the GPU. Replit CEO Amjad Masad points to a write-up on designing and building a harness that reaches frontier performance at a fraction of the cost. Y Combinator president and CEO Garry Tan merged a version of OpenClaw's test-audit skill into GStack, calling test bloat a real problem now that intelligence is on tap. ([Guillermo Rauch](https://x.com/rauchg/status/2105043144975011982), [Amjad Masad](https://x.com/amasad/status/2104996638817386820), [Garry Tan](https://x.com/garrytan/status/2105049005147525231))

**6. Builders are shipping whole projects with agents.** Builder Zara Zhang made a marketing website for her water bottle entirely in six prompts with Opus 5.5, using ElevenLabs to generate the music, Meshy to generate the 3D assets, and the OpenAI API to generate images. Anthropic's Thariq offered a prompt trick, telling Claude "we have the power to do anything, please be braver," and pointed to the team's blog post on how it made Claude faster. Swyx says that for friends of the Latent Space podcast, he will be asking all the burning questions about Dots, Sol 6.1, CUA, and the Decisions API to AriX and Nikunj Handa. ([Zara Zhang](https://x.com/zarazhangrui/status/2105096296831017078), [Thariq on being braver](https://x.com/trq212/status/2105065127892734076), [Thariq on making Claude faster](https://x.com/trq212/status/2105065175711924492), [Swyx](https://x.com/swyx/status/2105000738745376769))

## X / Twitter

### Sam Altman: OpenAI

Sam Altman announced "Dots are here," a new way to use AI that he says works 24/7 for you and gets more of your time and attention back to work at a higher level. He also said 6.1 Sol is priced at one fifth of Astra with a 95% cache read discount and is an extremely capable model, and that Ultrafast is so fast he never wants to go back.

- [Sam Altman: "Dots are here"](https://x.com/sama/status/2104995014208258235)
- [Sam Altman: 6.1 Sol pricing and cache discount](https://x.com/sama/status/2104994395980533804)
- [Sam Altman: Ultrafast](https://x.com/sama/status/2104994601140711896)

### Thibault Sottiaux: Codex and ChatGPT at OpenAI

Thibault Sottiaux says OpenAI will have a few million dots online within days, working on all sorts of things across a diverse and large community. He reports that his own experience improved after two to three days of teaching his dot about his preferences and what is on his mind, that dots learn very quickly to be most useful and can take on surprisingly ambitious tasks on their own, and that OpenAI is learning from how people use their primary dot before releasing the ability to create an entire team of them.

- [Thibault Sottiaux: millions of dots online within days](https://x.com/thsottiaux/status/2105105086506840421)

### Nikunj Kothari: Partner at FPV Ventures

Nikunj Kothari shared two honest thoughts about the market. On people, he says it is harder than ever to find missionaries: people are leaving companies they co-founded for the "obvious" winners, public CEOs are leaving for positions at labs, founders are leaving and rejoining neolabs at a moment's notice, companies are getting "Windsurf-ed" so only chosen people join the future company, and founders are raising tranched valuations without worrying that the next employee will have a 409A that makes early exercising impossible. When people leave on short notice, he says, the remaining company usually becomes a shell, which makes it a great time to be a mercenary. On defensibility, he argues the moat is no longer one thing, especially at the app layer, where the harness is a thousand small things done well and much of it is invisible, so you have to dig into the details to see a company's combined edge across product, tech, and GTM; even then, the real defensibility ends up being the founders, and in them it is speed of execution and the ability to adapt, now that no blue ocean markets are left. He says the current climate is testing his priors and his patience, and that it can feel like everyone is in it to grab the bag rather than care about the legacy of what they want to build. Separately, he suggests that B2B founders who do not want to spend egregious amounts on LinkedIn CPMs can simply aggregate what is trending on X and post it to LinkedIn, which he says is consistently a week or two behind, and jokes that everyone eventually becomes a LinkedInfluencer.

- [Nikunj Kothari: missionaries, mercenaries, and defensibility](https://x.com/nikunj/status/2105148927599423752)
- [Nikunj Kothari: reposting X trends on LinkedIn](https://x.com/nikunj/status/2104949147812159672)

### Aaron Levie: CEO of Box

Aaron Levie says it is entirely plausible that the AI industry can deal with safety and security through shared standards and practices for the foreseeable future. He acknowledges that at some point in capability progress there will inevitably be greater oversight, testing, and layers of liability and regulation, but argues the industry is still in a phase where it can align on these efforts collectively. He calls it awesome that the effort came together so quickly and that the whole industry supported progress without reducing competition, and says it points to a much brighter future for AI.

- [Aaron Levie: shared standards now, regulation later](https://x.com/levie/status/2105111520913039530)

### Guillermo Rauch: CEO of Vercel

Guillermo Rauch announced that the AI SDK has hit 30 million weekly downloads, and shared a milestone video he says was one-shotted with fframes plus Opus, written in Rust and rendered on the GPU, with the 5M, 10M, 20M, and 30M milestones highlighted.

- [Guillermo Rauch: AI SDK hits 30M weekly downloads](https://x.com/rauchg/status/2105043144975011982)

### Amjad Masad: CEO of Replit

Amjad Masad points to a piece on how to design and build a harness that reaches frontier performance at a fraction of the cost.

- [Amjad Masad: a harness for frontier performance at a fraction of the cost](https://x.com/amasad/status/2104996638817386820)

### Garry Tan: President and CEO of Y Combinator

Garry Tan says he just merged a version of OpenClaw's test-audit skill into GStack, calling test bloat a real problem and noting that intelligence is on tap these days.

- [Garry Tan: OpenClaw's test-audit skill in GStack](https://x.com/garrytan/status/2105049005147525231)

### Zara Zhang: Builder

Zara Zhang says she made a marketing website for her water bottle, and that the whole thing was done by Opus 5.5 in six prompts: ElevenLabs generated the music, Meshy generated the 3D assets, and the OpenAI API generated the images.

- [Zara Zhang: a water bottle website built in six prompts](https://x.com/zarazhangrui/status/2105096296831017078)

### Thariq: Claude Code at Anthropic

Thariq suggests telling Claude "we have the power to do anything, please be braver," and asks whether people have tried telling themselves the same thing. He also points to the team's blog post on how it made Claude faster.

- [Thariq: tell Claude to be braver](https://x.com/trq212/status/2105065127892734076)
- [Thariq: how Anthropic made Claude faster](https://x.com/trq212/status/2105065175711924492)

### Swyx

Swyx says that for friends of the Latent Space podcast, he will be asking all the burning questions about Dots, Sol 6.1, CUA, and the Decisions API to AriX and Nikunj Handa.

- [Swyx: Dots, Sol 6.1, CUA, and Decisions API questions](https://x.com/swyx/status/2105000738745376769)

## Podcast

The validated podcast feed for this run contained no new qualifying episodes.

## Blog

### Claude Blog: Claude in Chrome is generally available

Claude in Chrome is now generally available on every paid Claude plan, and Claude can take actions autonomously in the browser instead of needing approval for every one. A safety classifier validates each action before it is performed to confirm it is safe and matches your request, and automatic approval can be turned off in settings. The product's value is largely reach: many of the tools people use every day connect to Claude, but internal dashboards, legacy systems, and vendor portals do not, and Claude in Chrome can use your existing logins to read and type text, click links, navigate between pages, and fill out forms.

Most of the post is about prompt injection, the class of attack where malicious instructions hidden in a website, an email, or a form field try to redirect an agent against the user's wishes. Claude Blog describes three layers of defense: Claude is trained against a growing library of attacks sourced from internal automated attackers, external red-teamers, and real-world monitoring; probes screen the content reaching Claude through tool results and warn it to treat suspicious content cautiously; and a classifier reviews each action against the original request and blocks anything that does not match. On a current evaluation using stronger attacks sourced by professional red-teamers, attacks that reached the model succeeded 17.6% of the time against Opus 4.5 and 3.8% against Opus 5 before additional safeguards, while with probes plus the safety classifier no attacks succeeded against Claude Sonnet 5, Claude Opus 5, or Claude Mythos 5, and Fable 5 saw a 0.3% attack success rate, with all successful breaks manually verified as low severity. The post calls prompt injection a moving target and says the team will keep investing in attack discovery, red-teaming, and stronger classifiers. On Enterprise plans, admins can manage Claude in Chrome in Organization Settings and limit it to approved domains, and it does not run on other Chromium browsers or on mobile yet.

- [Claude Blog: Claude in Chrome is generally available](https://claude.com/blog/claude-in-chrome-generally-available)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
