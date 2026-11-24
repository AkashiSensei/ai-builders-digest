[English](./ai-digest-2026-11-24-Tue.md) | [中文](../../zh/daily/ai-digest-2026-11-24-Tue.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-11-24-Tue.md)

---

# AI Builders Digest

## Reader's Briefing

Replit CEO Amjad Masad shared new research on scaling laws for agent swarms. In a fixed two-hour window, Opus 5.5 improved its NumPy speedup from 3.7x with one agent to 18.9x with 32 agents. Yet GPT-6.2 Astra, the strongest solo agent, showed negative scaling beyond eight agents, and models spontaneously developed different organizational structures, with decentralized swarms scaling better than centralized coordination. Problem parallelizability strongly predicted swarm performance, while individual model intelligence was a poor predictor of collective intelligence; Replit also open-sourced Optimization-Bench ([tweet](https://x.com/amasad/status/2124969305674748175)).

The coding stack is shifting from model output to governed workflow. Anthropic's Boris Cherny launched Claude Ship in beta for Team and Enterprise plans, with Code Review looking for bugs, a beta PR Steward handling fixes and failing checks, and a beta Claude Approvals feature enforcing team policy; he advises starting with one repository and running Approvals in observe mode. The Claude account also said connectors and skills have merged into plugins, with more than 10,000 available and support live on Free, Pro, Max and Ultra plans, while Team and Enterprise are coming soon ([tweet](https://x.com/bcherny/status/2124961485801836573)) ([tweet](https://x.com/bcherny/status/2124961487454384442)) ([tweet](https://x.com/bcherny/status/2124961488691740941)) ([tweet](https://x.com/claudeai/status/2124970294523945328)).

Enterprise controls are moving into the same product surface. The Claude account said zero data retention with Enterprise Frontier Safeguards is in public beta for eligible businesses, checking for misuse across many requests while remaining compatible with zero data retention, and that it was developed with more than 100 customers. EFS is available on the Claude Platform, Claude Platform on AWS, Amazon Bedrock and Claude on Google Cloud, with Microsoft Foundry support coming soon ([tweet](https://x.com/claudeai/status/2124929944530587712)) ([tweet](https://x.com/claudeai/status/2124929946925793294)).

ChatGPT's Dots feature shows the gap between internal momentum and external polish. Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, said dots are becoming the primary way to get things done inside OpenAI, with dots building the dots system, and promised a significant jump in answer quality plus a simpler, faster app that merges chat and work by the end of the year. Peter Yang, who creates practical AI tutorials and interviews for busy people, reported that ChatGPT Dots still feels very buggy: it sends emails without his review and randomly stops responding, leaving him wondering whether he is prompting it wrong ([tweet](https://x.com/thsottiaux/status/2124923055072043052)) ([tweet](https://x.com/thsottiaux/status/2124998553856844186)) ([tweet](https://x.com/thsottiaux/status/2125027477877887231)) ([tweet](https://x.com/petergyang/status/2125060785667969399)).

Box CEO Aaron Levie argued that agents change the economics of services businesses. Delivery capacity used to scale with headcount and available talent, while customers always wanted work faster, cheaper or at higher quality; agents decouple output from the amount of time invested, letting one engineer match dozens and one designer build an entire design system and brand. He still expects experts on the front end to ensure outcomes, and sees the pattern spreading through cybersecurity, advertising, marketing, legal, accounting and IT transformation ([tweet](https://x.com/levie/status/2125089009018040779)).

Evaluation and data quality are becoming distinct sources of advantage. Vercel CEO Guillermo Rauch used Fable to study all of his coding sessions and compare Opus with Gemini Neon, and the personal eval picked Neon; he said Google being so back is widely under-discussed. Every CEO Dan Shipper urged personal benchmark maxxing and shared a guide for building one. Meta senior director of AI Madhu Guru argued that data is not an inert commodity like coal, but a carrier of valuable knowledge, taste and expertise that can become a fundamental building block for capable intelligence ([tweet](https://x.com/rauchg/status/2124880074168242369)) ([tweet](https://x.com/danshipper/status/2124886826909622653)) ([tweet](https://x.com/danshipper/status/2124896430783447510)) ([tweet](https://x.com/realmadhuguru/status/2125102190196859156)).

## X / Twitter

### Boris Cherny

Boris Cherny, who works on Claude at Anthropic, launched Claude Ship in beta for Team and Enterprise plans. Code Review looks for bugs, PR Steward handles fixes and failing checks, and Claude Approvals approves what team policy allows, with the latter two in beta. He said the system multiplies his velocity because he no longer waits for code review or babysits pull requests, and advised admins to start with one repository and keep Approvals in observe mode until they trust it ([tweet](https://x.com/bcherny/status/2124961485801836573)) ([tweet](https://x.com/bcherny/status/2124961487454384442)) ([tweet](https://x.com/bcherny/status/2124961488691740941)).

### Thibault Sottiaux

Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, said dots are quickly becoming the primary way to get things done inside OpenAI, including dots building the dots system ([tweet](https://x.com/thsottiaux/status/2124923055072043052)). He expects users to feel a significant jump in answer quality, alongside investments in simplifying the app, making it faster and merging chat and work by the end of the year ([tweet](https://x.com/thsottiaux/status/2124998553856844186)). He also pointed followers to a discussion about OpenAI staff trying to patch flaws in open-source software and infrastructure ([tweet](https://x.com/thsottiaux/status/2125027477877887231)).

### Peter Yang

Peter Yang, who creates practical AI tutorials and interviews for busy people, reported that ChatGPT Dots still feels very buggy: it sends emails without his review and randomly stops responding. He said he wants to like the product and wondered whether he is prompting it wrong ([tweet](https://x.com/petergyang/status/2125060785667969399)).

### Madhu Guru

Meta senior director of AI Madhu Guru argued that calling model inputs "data" undersells what they represent. To people outside model development, data sounds like an inert commodity bought and shoveled into a model like coal; in practice, great data encodes valuable knowledge, taste and expertise, often structured in ways that did not exist before. That makes it a fundamental building block for increasingly capable intelligence, and he expects it to remain central to the intelligence industry ([tweet](https://x.com/realmadhuguru/status/2125102190196859156)).

### Amjad Masad

Replit CEO Amjad Masad shared new research on scaling laws for agent swarms. In a fixed two-hour window, Opus 5.5 went from a 3.7x NumPy speedup with one agent to 18.9x with 32 agents, while GPT-6.2 Astra was the strongest solo agent but showed negative scaling beyond eight agents. Models spontaneously developed different organizational structures, decentralized swarms scaled better than centralized coordination, problem parallelizability predicted swarm performance, and individual model intelligence was a poor predictor of collective intelligence. Replit also open-sourced Optimization-Bench to support research on this form of inference-time scaling ([tweet](https://x.com/amasad/status/2124969305674748175)).

### Guillermo Rauch

Vercel CEO Guillermo Rauch asked Fable to study all of his coding sessions and decide whether Opus or Gemini Neon was best. He described it as a personal eval; it picked Neon, and he argued that Google being so back is widely and wildly under-discussed ([tweet](https://x.com/rauchg/status/2124880074168242369)).

### Aaron Levie

Box CEO Aaron Levie argued that services businesses have been held back by delivery capacity that scaled only with headcount and available talent. Agents change that calculus by decoupling output from time: a single engineer can have the output of dozens, and a single designer can build an entire design system and brand. He still sees experts on the front end as essential for ensuring outcomes, and expects the shift across cybersecurity, advertising and marketing, legal, accounting and IT transformation ([tweet](https://x.com/levie/status/2125089009018040779)).

### Dan Shipper

Every CEO Dan Shipper argued that people need to be personal benchmark maxxing. He also shared a guide for making a personal benchmark ([tweet](https://x.com/danshipper/status/2124886826909622653)) ([tweet](https://x.com/danshipper/status/2124896430783447510)).

### Claude

The Claude account for Anthropic's AI assistant said connectors and skills now come together as plugins, creating one way to connect tools, teach Claude a skill, or do both. Plugins are live on Free, Pro, Max and Ultra plans, with Team and Enterprise coming soon, and there are more than 10,000 to browse ([tweet](https://x.com/claudeai/status/2124970294523945328)). It also said zero data retention with Enterprise Frontier Safeguards is in public beta for eligible businesses, looking for misuse across many requests while staying compatible with zero data retention, after development with more than 100 customers ([tweet](https://x.com/claudeai/status/2124929944530587712)). EFS is available on the Claude Platform, Claude Platform on AWS, Amazon Bedrock and Claude on Google Cloud, with Microsoft Foundry support coming soon ([tweet](https://x.com/claudeai/status/2124929946925793294)).

## Podcast

The validated feed contained no new qualifying podcast episodes for this run.

## Blog

The validated feed contained no new qualifying blog posts for this run.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
