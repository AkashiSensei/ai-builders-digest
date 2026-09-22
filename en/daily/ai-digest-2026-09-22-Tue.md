[English](./ai-digest-2026-09-22-Tue.md) | [中文](../../zh/daily/ai-digest-2026-09-22-Tue.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-09-22-Tue.md)

---

# AI Builders Digest

## Reader's Briefing

**1. Agents are becoming economic actors, and the platform layer underneath them may matter more than the chat window.** Box CEO Aaron Levie argues that personal agents which transact on your behalf carry significant monetization potential, because once agents can handle arbitrarily complex tasks end to end, a substantial share of commerce inevitably flows through them. He expects people to start by throwing simple, annoying daily tasks at an agent, get comfortable, and then hand over more complex work, which means lower friction produces more spending than before rather than less. That creates room for the agent providers such as Muse, and for an entirely new layer built for agents to interact with, from commerce and local services to B2B services. In a second post he pushes further: agents will use software 100 times more than people ever did, and as interfaces fade into the background the core primitives matter more, especially when agents can take destructive actions. His conclusion is that the biggest opportunity sits with platforms that can act as the security layer and guardrails for agents, manage data for both agents and people, and orchestrate the business logic.

**2. Peter Yang says the inbox is being replaced by the chat with your agent, and asks what that does to advertising.** Yang, who makes practical AI tutorials and interviews for busy people, thinks the ad markets are in for a rude awakening: if a large part of your business is showing targeted display ads to humans, what happens when agents browse your website and get the job done without a human seeing your ads at all. He also pointed to ChatGPT Finances as evidence of what agents already handle, quoting Ethan, the product lead for ChatGPT Finances, who used points to book a hotel, was billed anyway, and says ChatGPT caught the charge, worked with customer service and got him reimbursed. Yang added his own version: he asked ChatGPT to cancel a hotel booking for his parents, monitor the replies and keep following up until the money came back. His summary of how he lives now: "Nah. I no longer live in email or text, I live in the chat with my agent(s)."

**3. Coding agents are now competing on big, parallel, PR-sized work.** Y Combinator President and CEO Garry Tan calls Capy his favorite new agentic coding secret weapon of the past week, saying he is not sure how it does it but that it tracks multi-step workflows and produces large PRs faster than Codex or Claude Code on their own. He shared a worked example, a PR where an agent executed an ambitious bug-fix wave on GBrain with clear task delineation, automatic parallelization and a clean GitHub PR and CI workflow. Nikunj Kothari, a partner at FPV Ventures, says he has used Codex as his primary agent for so long that he forgets the average person has never touched one, rates Instinct and Muse for zero-setup browser use on the phone, calls Codex on Mac undefeated for computer-use work, and is waiting to see what the rumored mass-market agent release looks like. Vercel CEO Guillermo Rauch says he gave Grok 4.7 a hard problem involving reverse-engineering a running binary and that it was beautifully solved, and fast. Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, teased that a promised reset for Tuesday is close.

**4. Curation beats brute force, and running your own agent is leverage.** Nikunj Kothari argues that with a few exceptions, the companies boasting about tokenmaxxing have the worst product experiences, because good products are about curation and gardening rather than throwing the kitchen sink at agents and expecting them to figure it out. Peter Steinberger, who works on OpenClaw and OpenAI, addressed the "Meta uses OpenClaw" story by saying Meta built its own agent, inspired by the work, and crediting Nat and his team on the result. In a separate post he said a review found nothing critical, writing that he was proud to say they did their homework, and he framed the appeal of self-hosting bluntly: "The beauty of running a claw yourself: they cannot block you."

**5. Browser agents just crossed a safety threshold.** Claude in Chrome is now generally available on every paid Claude plan, and Claude can take actions autonomously in the browser instead of needing approval for every one, with a safety classifier that validates each action before it runs to confirm it is safe and matches your request. Claude Blog describes the defenses built since the pilot: training against a growing library of prompt injection attacks, probes that screen web content before Claude acts on it, and pre-action verification that uses the same mechanism as auto mode in Claude Code. On Anthropic's current evaluation, built from stronger attacks sourced by professional red-teamers, attacks that reached the model succeeded 17.6 percent of the time against Opus 4.5 and 3.8 percent against Opus 5 before any additional safeguards; with probes and the safety classifier, no attacks succeeded against Claude Sonnet 5, Claude Opus 5 or Claude Mythos 5, while Fable 5 saw a 0.3 percent attack success rate, and all successful breaks were manually verified as low severity. Anthropic calls prompt injection a moving target and says it will keep investing in attack discovery and red-teaming. Claude in Chrome still requires the desktop app for files and other applications, and does not run on other Chromium browsers or on mobile yet.

## X / Twitter

### Swyx: affiliations include smol.ai, Cognition and the Latent Space podcast

Swyx said the latest Latent Space episode is out, available by email, Apple Podcasts and YouTube.

- [Swyx: the latest Latent Space episode is out](https://x.com/swyx/status/2102160025666101658)

### Thibault Sottiaux: Codex and ChatGPT at OpenAI

Thibault Sottiaux teased an imminent change, writing that the reset he promised for Tuesday is almost here: "Ladies and gentlemen... start... your... ENGINES. We are almost Tuesday and I promised a reset for Tuesday. Among some other things. See you soon."

- [Thibault Sottiaux: a promised Tuesday reset is coming](https://x.com/thsottiaux/status/2102254445082116335)

### Peter Yang: practical AI tutorials and interviews for busy people

Peter Yang made three points. First, he expects a rude awakening in the ad markets: if a huge part of your business is showing targeted display ads to humans, what happens when agents browse your website and get the job done without a human seeing your ads at all. Second, he highlighted ChatGPT Finances, quoting Ethan, the product lead for ChatGPT Finances, who said points booked him a hotel but he was still billed, and that ChatGPT caught it, worked with customer service and got him reimbursed; Yang added that he once asked ChatGPT to cancel a hotel booking for his parents, monitor the replies and keep following up until the money came back. Third, on how he works now: "Nah. I no longer live in email or text, I live in the chat with my agent(s)."

- [Peter Yang: a rude awakening for the ad markets](https://x.com/petergyang/status/2102215701255844074)
- [Peter Yang: ChatGPT Finances caught a charge he missed](https://x.com/petergyang/status/2102186174911746151)
- [Peter Yang: "I live in the chat with my agent(s)"](https://x.com/petergyang/status/2102181024507765167)

### Thariq: Claude Code at Anthropic

Thariq says a phrase has become part of his daily prompting habit: "I now type 'use big pictures and few words' several times a day."

- [Thariq: "use big pictures and few words"](https://x.com/trq212/status/2102186805034635576)

### Amjad Masad: CEO, Replit

Amjad Masad argued that "AI is reviving the American Dream."

- [Amjad Masad: "AI is reviving the American Dream"](https://x.com/amasad/status/2102120769232978174)

### Guillermo Rauch: CEO, Vercel

Guillermo Rauch says he gave Grok 4.7 a pretty hard problem that involved reverse-engineering a running binary, and that it was beautifully solved and very fast. He also announced that in addition to the type-safe AI SDK API, Jev can now be used over HTTP in AI Gateway, and responded to a comparison of two products with "Game recognizing game."

- [Guillermo Rauch: Grok 4.7 solved a hard reverse-engineering problem](https://x.com/rauchg/status/2102089968860721335)
- [Guillermo Rauch: Jev over HTTP in AI Gateway](https://x.com/rauchg/status/2102205684544852121)
- [Guillermo Rauch: "Game recognizing game"](https://x.com/rauchg/status/2102126936592191695)

### Aaron Levie: CEO, Box

Aaron Levie sees significant monetization potential in personal agents that transact on your behalf. If agents are perfectly capable of handling an arbitrarily complex task end to end, he expects a substantial amount of commerce to inevitably go through them: people start with daily simple and annoying tasks, get used to it, then throw more complex tasks at the agent, and lower friction for commerce and services means spending even more than before. That creates opportunity for agent providers like Muse as well as for a completely new layer that agents want to interact with, from commerce to local to B2B services. In a second post he argues that agents will use software 100 times more than people ever did, so the core primitives behind fading interfaces become even more important, especially when agents can take destructive actions or when the context they access can make or break a workflow. He expects the platforms that best act as the security layer and guardrails for agents, manage data for agents and people, and orchestrate business logic to have a huge opportunity right now, for both new startups and existing platforms that can move fast enough.

- [Aaron Levie: personal agents that transact have big monetization potential](https://x.com/levie/status/2102253246807261579)
- [Aaron Levie: agents will use software 100X more than people](https://x.com/levie/status/2102235949430354273)

### Garry Tan: President and CEO, Y Combinator

Garry Tan calls Capy his most favorite new agentic coding secret weapon of the last week, saying he is not really sure how it does it but that it tracks multi-step workflows and does large PRs faster than Codex or Claude Code on its own. He shared an example PR where an agent executed an ambitious bug-fix wave on GBrain with very clear task delineation, automatic parallelization and a clean GitHub PR and CI workflow. He also argued that Cluely, as a real-time thought helper and semi-adversarial assistant with ongoing context, is still a good idea.

- [Garry Tan: Capy is his favorite new agentic coding tool](https://x.com/garrytan/status/2102095924893827501)
- [Garry Tan: an example parallelized bug-fix PR on GBrain](https://x.com/garrytan/status/2102096495847551011)
- [Garry Tan: Cluely is still a good idea](https://x.com/garrytan/status/2102233173833007536)

### Nikunj Kothari: partner, FPV Ventures

Nikunj Kothari has used Codex as his primary agent for so long that he forgets the average person has never used one. He rates Instinct and Muse for browser use on the phone, showing what a great agent feels like for the masses with zero setup, but calls Codex on Mac simply undefeated in all the work it can do with computer use, and he cannot wait to see the latest launch as companies reportedly get ready to release their agent to the masses. His other point is a warning about excess: with a few exceptions, the companies boasting about tokenmaxxing have the worst product experiences, because good products are all about curation and gardening rather than throwing the kitchen sink at agents expecting them to figure it out. As he puts it, "Less is more has never more apt."

- [Nikunj Kothari: Codex as a primary agent, and waiting for the mass-market launch](https://x.com/nikunj/status/2102186665863463199)
- [Nikunj Kothari: tokenmaxxing companies have the worst product experiences](https://x.com/nikunj/status/2102049065504739366)

### Peter Steinberger: OpenClaw and OpenAI

Peter Steinberger addressed the "Meta uses OpenClaw" story by clarifying that Meta built its own agent, inspired by the work, and crediting Nat and his team: "They built their own agent, being inspired. Nat and his team did a great job. Kudos!" In a separate post he wrote that he was proud to say they did their homework and that a review "found nothing critical." He also framed the case for self-hosting an agent: "The beauty of running a claw yourself: they cannot block you."

- [Peter Steinberger: Meta built its own agent, inspired by OpenClaw](https://x.com/steipete/status/2102116206371315854)
- [Peter Steinberger: "Proud to say that we did our homework"](https://x.com/steipete/status/2102049706830647467)
- [Peter Steinberger: "they cannot block you"](https://x.com/steipete/status/2102044040397238286)

## Podcast

The validated podcast feed for this run contained no new qualifying episodes.

## Blog

### Claude Blog: Claude in Chrome is generally available

Claude in Chrome is now generally available on every paid Claude plan, and Claude can take actions autonomously in the browser instead of needing approval for every one. A safety classifier validates each action before it is performed to ensure it is safe and matches your request, and automatic approval can be switched off in settings. Much of the product's value is reach: many of the tools people use every day connect to Claude, but internal dashboards, legacy systems and vendor portals do not, and Claude in Chrome can view the page you are on and take actions like reading and typing text, clicking links, navigating between pages and filling out forms using your existing logins.

Most of the post is about prompt injection, the class of attack where malicious instructions are hidden in a website, an email or a form field and try to redirect an agent against the user's wishes. Claude Blog says the team trained Claude against a growing library of attacks sourced from internal automated attackers, external red-teamers and real-world monitoring, deployed probes that screen web content before Claude acts on it, and added classifiers that make it possible for Claude to safely take more autonomous actions. The results it reports: on an evaluation using stronger attacks sourced by professional red-teamers, attacks that reached the model succeeded 17.6 percent of the time against Opus 4.5 and 3.8 percent against Opus 5 before any additional safeguards, while with probes and the safety classifier no attacks succeeded against Claude Sonnet 5, Claude Opus 5 or Claude Mythos 5, and Fable 5 saw a 0.3 percent attack success rate, with all successful breaks manually verified as low severity. The post calls prompt injection a moving target and says the team will keep investing in attack discovery, red-teaming and stronger classifiers. Claude in Chrome still needs the desktop app to work with files on your computer or other applications, and it does not run on other Chromium browsers or on mobile yet.

- [Claude Blog: Claude in Chrome is generally available](https://claude.com/blog/claude-in-chrome-generally-available)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
