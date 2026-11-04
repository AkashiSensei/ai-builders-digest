[English](./ai-digest-2026-11-04-Wed.md) | [中文](../../zh/daily/ai-digest-2026-11-04-Wed.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-11-04-Wed.md)

---

# AI Builders Digest

## Reader's Briefing

Agentic coding is moving from permission-by-permission supervision toward delegated trust. Cat Wu describes Claude Code's shift from manual approvals to auto-approved large migrations, while Boris Cherny says Claude can now connect Team and Enterprise users to company plugins automatically. [Cat Wu](https://x.com/_catwu/status/2117731934340337676) [Boris Cherny](https://x.com/bcherny/status/2117693181651542387)

At the same time, the productivity gap is widening. Box CEO Aaron Levie says top-end gains have jumped from 30-50% to a possible 5-10x in two years, and OpenAI's Thibault Sottiaux warns that today's agents are "incredible, and yet so frustrating still." [Aaron Levie](https://x.com/levie/status/2117505799937577263) [Thibault Sottiaux](https://x.com/thsottiaux/status/2117746467058405665)

Agent interfaces are reaching into operational work: Peter Yang maps out Grok Bot phone calls for bills, cancellations, and reservations; Vercel CEO Guillermo Rauch makes an automatic security agent available for every repository; and FPV Ventures partner Nikunj Kothari pairs Codex with Claude Code to inspect code paths and latency. [Peter Yang](https://x.com/petergyang/status/2117783921748558185) [Guillermo Rauch](https://x.com/rauchg/status/2117734833824948373) [Nikunj Kothari](https://x.com/nikunj/status/2117773647868018897)

The infrastructure battle is a software battle. Nebius's CTO argues that capacity is scarce but "software is the moat," with demand still "barely scratching the surface"; the same discussion points to 500-700 GB/s shared storage and a shift from requests to outcomes. [Unsupervised Learning](https://www.youtube.com/@RedpointAI)

The autonomy contract remains unresolved. Thariq predicts the best models will eventually "just be right," while Sam Altman insists people must retain control of the future and that this requirement should constrain AI progress. [Thariq](https://x.com/trq212/status/2117670540148347273) [Sam Altman](https://x.com/sama/status/2117794005165748448)

## X / Twitter

### Swyx

Swyx highlighted Addy Osmani's AI Engineer NYC talk on how Anthropic "yolos 30k code changes a day" in a dark-factory approach, alongside SonarSource research on why every loop needs independent verification. He also announced the final AI Engineer track, "Raising your Ambition," with a speaker lineup and 1,000 attendees in San Francisco plus an online livestream. [AI Engineer NYC talk](https://x.com/swyx/status/2117558305891746212) [AI Engineer track](https://x.com/swyx/status/2117679157035602065)

### Boris Cherny

Anthropic's Boris Cherny says Claude can now auto-connect Team and Enterprise users to company plugins. Admins configure the plugins, and teammates are connected automatically the first time they use them. [Source](https://x.com/bcherny/status/2117693181651542387)

### Thibault Sottiaux

OpenAI's Thibault Sottiaux, who works on Codex and ChatGPT, says today's agents are "incredible, and yet so frustrating still." He expects things to change repeatedly and wants to solve the remaining friction to get back to a flow state. [Source](https://x.com/thsottiaux/status/2117746467058405665)

### Peter Yang

Peter Yang, who creates practical AI tutorials and interviews, observes that leaving AI-native companies after one or two years no longer looks unusual. He asks whether the pace is sustainable, especially for parents. He also shows Grok Bot's phone-call feature handling bill negotiation, subscription cancellations, hold queues, reservations, and contractor quotes, while noting that it currently works only with US numbers. [Hiring pace](https://x.com/petergyang/status/2117825980115067035) [Grok Bot](https://x.com/petergyang/status/2117783921748558185)

### Cat Wu

Cat Wu marked her last day at Anthropic after two years on Claude Code. She traced the shift from manually approving every permission prompt and mostly using Claude for questions and tests to default auto-approval, large migrations, and new products. She credited user feedback and the teams behind Claude Code, Cowork, and Tag. [Source](https://x.com/_catwu/status/2117731934340337676)

### Thariq

Thariq, formerly on Claude Code at Anthropic, calls the prospect of models needing fewer tokens and less verification "basically the bitter lesson at work." His prediction: the smartest models will not need to check their work for bugs because they "will just be right." [Source](https://x.com/trq212/status/2117670540148347273)

### Guillermo Rauch

Vercel CEO Guillermo Rauch introduced a security agent, internally nicknamed "hacker," that audits every line of code automatically. It can be enabled on all repositories whether or not they are hosted on Vercel, and he says it was built entirely by Vercel's security team. He also highlighted Vercel CI and Security Review, and recommended that CLIs ship a doctor subcommand. [Security agent](https://x.com/rauchg/status/2117734833824948373) [CI and review](https://x.com/rauchg/status/2117765475010822497) [Doctor subcommand](https://x.com/rauchg/status/2117802827519250568)

### Aaron Levie

Box CEO Aaron Levie argues that the gap between operators living at the AI frontier and everyone else may be the widest it has ever been. He estimates that top-end productivity gains have moved from 30-50% two years ago to perhaps 5-10x today, driven by longer tasks, stronger harnesses, better data, and systems for working with many agents at once. He expects the distance to keep widening given the likely pace of RSI. [Source](https://x.com/levie/status/2117505799937577263)

### Matt Turck

FirstMark Capital VC Matt Turck called SurrealDB 4 a major moment for the database company. He described it as multi-model across vector, graph, and document workloads, ACID compliant, with a rebuilt engine, native Postgres and MySQL support, and Cloudflare-backed scalability handling more than 10 billion peak rows per second. [Source](https://x.com/mattturck/status/2117741948609949932)

### Nikunj Kothari

FPV Ventures partner Nikunj Kothari says his favorite underused Claude Code skills are `/insights` and `/playground`. He runs `/insights` on a biweekly cron job to improve his setup, pairs it with X bookmarks about software factories, and uses `/playground` to visualize workflows. He also pairs Codex and Claude Code to find dead code, hot pathways, and latency improvements, and now regularly uses the ChatGPT Codex, Claude, Bot, and Muse apps. [Claude Code workflow](https://x.com/nikunj/status/2117773647868018897) [Multiple apps](https://x.com/nikunj/status/2117650163066183769)

### Sam Altman

Sam Altman says people should always control the future and rejects the idea that humans should be relegated to tasks that AI systems think are worth rewarding. He argues that people should not cede control to superintelligence and that this requirement should ultimately constrain AI progress. [Source](https://x.com/sama/status/2117794005165748448)

## Podcast

### Unsupervised Learning: Ep 96: Nebius CTO on Racing the Hyperscalers Before AWS Wakes Up

**The Takeaway:** The opening for AI cloud challengers is not just scarce GPUs, but the ability to turn scarce hardware into a predictable, software-defined service for wildly different workloads.

Nebius's CTO, whose core hardware team came from Yandex and whose software platform was rebuilt from scratch, argues that "software is the moat." Nebius built one platform for a customer running tens of thousands of GPUs in an interconnected cluster and a self-service user renting one GPU for half an hour. The company wants to move past the crowded "neocloud" label and compete with AWS and Google Cloud, despite earning roughly 1% of AWS's revenue. [Episode source](https://www.youtube.com/@RedpointAI)

The demand case remains aggressive. Comparing today's market with two years ago, the CTO says "we are barely scratching the surface" and expects overall demand to increase "tenfold, hundredfold maybe" over the next three years. Part of the bottleneck is structural: even with more chips, hyperscalers face costly changes to infrastructure built for other workloads. [Episode source](https://www.youtube.com/@RedpointAI)

The operational details are more grounded than the market slogans. Training customers can push shared storage to 500-700 GB/s, and Nebius has production disaggregated inference for its most demanding customers, but treats it as a manual, case-by-case setup rather than a universal answer. Its cloud allocates some Blackwell capacity by rack and packs multiple workloads into it. [Episode source](https://www.youtube.com/@RedpointAI)

The most useful shift is from requests to outcomes. For serious enterprise agents, the CTO says customers care less about raw cost and more about "predictability of the outcome." He is watching harness and tool optimization more than another larger model, because "a lot of future AI adoption lies in how reliable your agentic scenarios are and how reliably you reach those outcomes." [Episode source](https://www.youtube.com/@RedpointAI)

## Blog

The validated blog feed contained no new qualifying items.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
