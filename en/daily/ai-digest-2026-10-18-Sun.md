[English](./ai-digest-2026-10-18-Sun.md) | [中文](../../zh/daily/ai-digest-2026-10-18-Sun.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-10-18-Sun.md)

---

# AI Builders Digest

## Reader's Briefing

Box CEO Aaron Levie argues that predictions about the end of software engineering got the demand curve backwards. As agents use tools, operate computers, write code on the fly and process data, more work becomes software-shaped across trading, life sciences and supply chains, so engineering gains importance rather than losing it. His conclusion is that manual coding may fade, but "almost everything will be code," which leaves people who understand it in a strong position ([tweet](https://x.com/levie/status/2111525362446520466)).

Replit CEO Amjad Masad clarified that Replit remains model agnostic. Users can still choose Anthropic models and many other supported models, while OpenAI is now the preferred partner powering Agent on the basis of performance, cost and the strength of the partnership. He framed the change as optimizing the default experience for the best performance at the best price without removing model choice ([tweet](https://x.com/amasad/status/2111494912562888939)).

Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, described a practical cross-account workflow. His work "dot" Burger coordinated with his personal "dot" Dorito over email at his request to obtain documents, then worked with his CPA to prepare tax material. The task took 20 minutes, and his conclusion was: "We're still so early" ([tweet](https://x.com/thsottiaux/status/2111495392559067199)).

Swyx shared unusually concrete numbers about his audience and recommendation traffic. He said he serves more than 1 million unique viewers a month almost nonstop since May, yet 58% of monthly viewers are new and 68% are not subscribed; viewing clusters from 7am to 11am PT, and "nobody watches after 5pm." He also described two years of little recommendation traffic before browsing recommendations picked up, said click-through rates "suck," and framed his goal as collaborating with creators his audience already likes ([tweet](https://x.com/swyx/status/2111350966419411070), [tweet](https://x.com/swyx/status/2111353401363902573), [tweet](https://x.com/swyx/status/2111351354409300230)).

Peter Yang shared a prompt for auditing the 45 apps and agents connected to his Google account. The prompt asks an assistant to review every connection, distinguish basic sign-in from Gmail, Drive or Calendar access, flag broad permissions and duplicate entries, and obtain explicit approval before disconnecting anything. He also said the Claude Code app is much faster now and arguably simpler than ChatGPT, while still missing better browser and computer use, remote control for all threads, and live voice ([tweet](https://x.com/petergyang/status/2111508293818671449), [tweet](https://x.com/petergyang/status/2111496600522805624)).

Carnegie Mellon professor Andy Pavlo, who recently founded ClickHouse Labs, argues that the database conversation has moved from vector search to agents that create, branch, write to and sometimes delete databases. He calls vector indexes table stakes, says agents need the same guardrails as humans, expects Postgres to remain the model default, and is openly skeptical of native graph databases. "At the end of the day, it's just an index," he says of vector databases, while the durable advantage may come from branching, shared state and the scaffolding around the core engine ([podcast](https://www.youtube.com/@DataDrivenNYC/videos)).

## X / Twitter

### Aaron Levie, Box CEO

Aaron Levie rejects the idea that automation shrinks the need for software engineering. Because agents can use tools, work with computers, write software on the fly and process data far faster than humans, software can now be applied to problems that were never reasonably digitized before. He expects engineering to become more important across banking, life sciences and manufacturing as more work takes the shape of software problems. Manual coding may decline, but "almost everything will be code," leaving people who understand it in a fantastic position ([tweet](https://x.com/levie/status/2111525362446520466)).

### Amjad Masad, Replit CEO

Amjad Masad clarified Replit's position after comments at TC Disrupt: the platform remains model agnostic and users can still choose Anthropic models and many other supported models. OpenAI is now Replit's preferred partner powering Agent based on performance, cost and the strength of the partnership. Masad says the aim is to preserve model choice while optimizing the default experience for the best performance at the best price ([tweet](https://x.com/amasad/status/2111494912562888939)).

### Thibault Sottiaux, Codex and ChatGPT at OpenAI

Thibault Sottiaux described his work "dot" Burger coordinating with his personal "dot" Dorito over email to get documents, then coordinating with his CPA to file tax material. The whole task took 20 minutes. His reaction was that "we're still so early" ([tweet](https://x.com/thsottiaux/status/2111495392559067199)).

### Swyx

Swyx says he serves more than 1 million unique viewers a month almost nonstop since May, but 58% of those monthly viewers are new and 68% are not subscribed. He says most viewing happens from 7am to 11am PT daily, with nobody watching after 5pm. He also described getting little recommendation traffic for two years before browsing discovery improved, admitted that click-through rates "suck," and said his goal is to collaborate with creators his audience already loves ([tweet](https://x.com/swyx/status/2111350966419411070), [tweet](https://x.com/swyx/status/2111353401363902573), [tweet](https://x.com/swyx/status/2111351354409300230)).

### Peter Yang

Peter Yang published a prompt for auditing the many apps and agents connected to a Google account, based on his own setup with 45 connections. It tells an assistant to review every app, separate basic Google sign-in from access to Gmail, Drive, Calendar or other data, flag broad permissions and duplicates, and wait for explicit approval before disconnecting anything. Separately, he said the Claude Code app is much faster now and arguably simpler to use than ChatGPT, though it still lacks better browser and computer use, remote control for all threads, and live voice ([tweet](https://x.com/petergyang/status/2111508293818671449), [tweet](https://x.com/petergyang/status/2111496600522805624)).

The remaining builders in the validated feed posted only brief reactions or personal notes, so they are omitted.

## Podcast

### The MAD Podcast with Matt Turck: What Happens When Billions of AI Agents Hit Your Database? (Andy Pavlo)

**The Takeaway:** The agent era will not be won by vector search alone; the durable advantages are guardrails, branching and the operational scaffolding around a fast database core.

Andy Pavlo is a Carnegie Mellon professor whose database courses have taught both engineers and AI models, and he recently founded ClickHouse Labs. His subject is no longer abstract: agents create databases, write to them, branch them and sometimes delete them. Vector databases looked like the center of AI infrastructure when RAG took off, but Pavlo argues the moat was thin: a vector index is just an index, and within a year nearly every database vendor had one. "At the end of the day, it's just an index," he says. Vector search became table stakes rather than a category of its own.

The more important problem is control. Pavlo compares agents to toddlers who need guardrails, not constant approval clicks, because a human cannot babysit hundreds of agents running around the clock. Permissions, sandboxes and database branching let agents test changes without touching production. The same controls that protect against reckless humans apply to agents, whether the request arrives through SQL or an MCP server. He notes that more than 60% of open source database systems now receive commits from agents, which raises the stakes for safe development workflows.

Model behavior shapes the market too. When asked to build an application, models usually recommend Postgres because it dominates their training data. Pavlo says two database companies have asked him how to become the first recommendation over Postgres, a request he compares to SEO. He remains skeptical of native graph databases, saying he has not seen benchmarks where they outperform relational systems that handle graph traversal on the server side. GPU databases are getting renewed attention from Nvidia, but he says the economics remain uncertain.

The lesson for database companies is that the core engine is only part of the product. Snowflake won partly through user interface, developer experience, ingestion and interoperability, and Pavlo sees ClickHouse improving the same surrounding scaffolding. Agentic workloads may not require a radically different engine, but they do require systems that are fast, safe to modify and easy to operate at scale. That is where the next durable advantage is likely to sit.

Source: https://www.youtube.com/@DataDrivenNYC/videos

## Blog

The validated feed contained no new qualifying blog posts in this run.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
