[English](./ai-digest-2026-08-29-Sat.md) | [中文](../../zh/daily/ai-digest-2026-08-29-Sat.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-08-29-Sat.md)

---

# AI Builders Digest

## Reader's Briefing

**1. OpenAI cuts off model access through Cursor.** OpenAI's Thibault Sottiaux announced the company is ending access to its models through Cursor, citing trust, with the change requested to take effect November 12. Users can keep using GPT models in Cursor with their own OpenAI API keys, and access continues through OpenAI's IDE extensions. Anthropic's Thariq said his team is excited to keep partnering with Cursor, while Replit CEO Amjad Masad noted OpenAI models are available on Replit for free and offered to fund businesses' transition to an independent, multi-model alternative.

**2. Data becomes the enterprise moat.** On No Priors, Eon co-founders Ofir Ehrlich and Gonen Stein argued that models and compute are commoditized, so a company's data is its most valuable asset; they point to Google buying Spirit Airlines' data out of bankruptcy for $10 million to train models. In the agent era, threats increasingly come from non-human actors with legitimate access, so mapping, classifying, and controlling data is the new core problem.

**3. AI product playbooks have a short half-life.** Madhu Guru, Senior Director of AI at Meta, says AI product playbooks have a roughly three-month half-life, so AI teams must be optimized for inventing rather than milking a playbook. Box CEO Aaron Levie echoes the theme: strongly held AI beliefs, from "RAG is dead" to "we've hit a training wall," cycle every six months, so flexibility matters more than conviction.

**4. The agent form factor splits opinions.** Peter Yang argues Claude Cowork and ChatGPT Work are partial solutions, and Grok Bot is the right end state for a capable AI agent product aimed at non-technical people. Vercel CEO Guillermo Rauch sees the web splitting into ultra-fancy human experiences and agent-centric content and APIs, with "the agent as the new browser" generating just-in-time UI for utilitarian needs.

**5. Trust and safety around agents move to center stage.** Zara Zhang argues "slop" is defined by whether content is informed by unique human experience, not whether it is AI-generated, and asks whether signing into X on Grok Bot's virtual computer risks account bans. Anthropic published a postmortem on three changes that briefly degraded Claude Code quality, plus a deep dive on Managed Agents that keeps credentials unreachable from the sandbox.

## X / Twitter

### Thibault Sottiaux: Codex and ChatGPT at OpenAI

Sottiaux announced that OpenAI is ending access to its models through Cursor and ending the partnership, saying it "boils down to trust," with the change requested to take effect November 12. Users can continue using GPT models through Cursor with their own OpenAI API key, and access remains available through OpenAI's IDE extensions for Cursor. He emphasized that OpenAI will keep working with the broadest range of tools and harnesses, including open-source ones, and continue investing in its own open-source initiatives. He points to a blog post for more on the decision.

- [Thibault Sottiaux on ending the Cursor partnership](https://x.com/thsottiaux/status/2093515916076343774)

### Thariq: Claude Code at Anthropic

Thariq, who works on Claude Code at Anthropic, called himself a long-time admirer of the Cursor team, saying few have done more to bring AI coding to the world, and said he is excited to continue partnering with them.

- [Thariq on continuing to partner with Cursor](https://x.com/trq212/status/2093541555068182781)

### Amjad Masad: CEO of Replit

Masad said OpenAI models are accessible on Replit for free, and that Replit's router makes high-end models extremely cost-efficient. For businesses looking for an independent, multi-model alternative to Cursor, he said Replit would be happy to fund their transition.

- [Amjad Masad on OpenAI models on Replit](https://x.com/amasad/status/2093533378880667787)

### Guillermo Rauch: CEO of Vercel

Rauch argues the web is evolving into two extremes: ultra-fancy human experiences built with WebGL, three.js, and TypeGPU, and agent-centric content, data, and APIs, where markdown and MCP are the tip of the iceberg. The middle ground, he says, will be subsumed by agents producing just-in-time UI: "Think of the agent as the new browser in this model." He also says MCP is growing explosively, pointing to mcp-handler npm downloads as a way to implement MCP servers, and highlights eve as one of the few agent builders that gives you a Git repo where you own the entire intelligence stack, including runtime, model choice, skills, tools, connectivity, and sandbox.

- [Guillermo Rauch on the two extremes of the web](https://x.com/rauchg/status/2093482695838007318)
- [Guillermo Rauch on MCP growth](https://x.com/rauchg/status/2093463771071336497)
- [Guillermo Rauch on eve](https://x.com/rauchg/status/2093387887668814214)

### Aaron Levie: CEO of Box

Levie argues that the average strongly held belief in AI has a half-life of six months at best, listing beliefs the industry has cycled through: open source is too far behind to catch up, the labs can't be profitable at scale, all software will be replaced by agents, you can't build moats on top of models, cheaper models will mean less compute, you don't need evals, RAG is dead, AI will decimate engineering jobs, prompting won't matter, we've hit a training wall, and frontier models are too dangerous to release. His takeaway: remain flexible in your thinking, because the industry is in a constant state of change.

- [Aaron Levie on the half-life of AI beliefs](https://x.com/levie/status/2093568352736436576)

### Madhu Guru: Senior Director of AI at Meta

Guru argues that AI product building has a roughly three-month playbook half-life: traditional product teams are built to discover a playbook and milk it for years, while AI labs consciously throw away playbooks every few months as diminishing returns set in. Builders should focus on meta-principles for continuously learning what the market wants today and in three months, and for executing with extreme urgency. His closing line: "Legacy teams are optimized for playbook milking. AI teams need to be optimized for inventing."

- [Madhu Guru on the AI playbook half-life](https://x.com/realmadhuguru/status/2093562783627620456)

### Peter Yang: AI tutorials and guides

Yang's hot take: Claude Cowork and ChatGPT Work are partial solutions, and Grok Bot is the right end state for a capable AI agent product for non-technical people, because people can easily understand that it's a computer running in the cloud. In contrast, he bets most people can't explain the difference between ChatGPT Work and Codex, or how Claude Cowork actually works.

- [Peter Yang on Grok Bot as the agent end state](https://x.com/petergyang/status/2093379695144530313)

### Zara Zhang: Builder

Zhang argues that whether something counts as "slop" has less to do with whether it's AI-generated and more to do with whether it's informed by specific, unique human experiences and perspectives: "There's plenty of human-generated slop." She also asked whether signing into her real X account on Grok Bot's virtual computer, and asking it to pick out interesting tweets or go through her followers, risks getting the account banned or flagged, noting she has been extremely cautious about giving any agent access to her X account.

- [Zara Zhang on slop and human experience](https://x.com/zarazhangrui/status/2093396989329469505)
- [Zara Zhang on Grok Bot and account risk](https://x.com/zarazhangrui/status/2093317719320064164)

### Nikunj Kothari: Partner at FPV Ventures

Kothari's advice to founders: the best pitches don't even need to use the word "AI," and AI cannot be the only "why now" for your pitch.

- [Nikunj Kothari on AI in pitches](https://x.com/nikunj/status/2093367245024240043)

### Dan Shipper: CEO of Every

Shipper's take: "in AI there are no bad ideas just weak models. Every idea has its day as the exponential continues."

- [Dan Shipper on ideas and models](https://x.com/danshipper/status/2093434101067808930)

### Aditya Agarwal: General Partner at South Park Commons

Agarwal, drawing on his own experience with F1, OPT, CPT, H1-B, and EB-3 green card visas, argues several things can be true at once: there is abuse of the H1-B system that should be stopped, the US makes it too hard for truly high-skilled workers to stay, high-skilled Indians have it harder than most, and any country's laws should prioritize its own citizens.

- [Aditya Agarwal on H1-B and high-skilled immigration](https://x.com/adityaag/status/2093468512459321512)

## Podcast

### No Priors: Rethinking Legacy Data Infrastructure with Eon Co-Founders Ofir Ehrlich and Gonen Stein

The Takeaway: In the AI era, a company's data is its only durable moat, models and compute are commoditized, and the new security frontier is protecting that data from agents that hold legitimate access.

Ofir Ehrlich and Gonen Stein, co-founders of Eon, a cloud backup and disaster recovery service built for the AI era (and previously founders of CloudEndure, which was acquired by AWS), argue that models and compute have near-zero switching costs, while data is the one thing an organization truly owns. Their evidence: Google recently bought the data of bankrupt Spirit Airlines out of bankruptcy for $10 million, not the airplanes, to train models, and labs are approaching hedge funds to buy years of accumulated data that once sat on tapes. "They didn't buy airplanes. They bought the data."

The flip side is a new threat model. Security concerns used to come from human attackers; now agents with legitimate credentials and permissions are operating inside environments, and the velocity is extreme. Every leader they meet either fears this or has already lived it, so companies need to assume breach and be able to map, classify, and recover data in a granular way. Meanwhile, everyone inside an organization can become a builder, including non-technical employees who put company data into tools without thinking about compliance, creating a shadow set of actors handling sensitive data. That's why they expect more dashboards, not fewer, and why non-human identity (NHI) security has become a top-tier category.

The old data stack was built for single-purpose tasks. Agent-generated data is exploding in volume, mixing real value with noise, so the winning infrastructure, in Eon's view, maps and classifies data across clouds, ingests it continuously, and hands it to AI workflows while keeping control.

Source: https://www.youtube.com/@NoPriorsPodcast

## Blog

### Anthropic Engineering: An update on recent Claude Code quality reports

Anthropic traced reports that Claude's responses had worsened for some users to three separate changes affecting Claude Code, the Claude Agent SDK, and Claude Cowork; the API was not impacted, and all three issues were resolved as of April 20 (v2.1.116). On March 4 the default reasoning effort was lowered from high to medium to reduce latency, a tradeoff Anthropic says was wrong and reversed on April 7 after users said they preferred higher intelligence; users now default to xhigh effort for Opus 4.7 and high for other models. A March 26 caching optimization meant to clear older thinking from idle sessions had a bug that cleared it every turn, making Claude seem forgetful and repetitive and driving cache misses that drained usage limits; it was fixed April 10. An April 16 system prompt instruction to keep text between tool calls to 25 words or fewer, shipped with Opus 4.7, hurt coding quality and was reverted April 20; one ablation showed a 3% drop for Opus 4.6 and 4.7. "We never intentionally degrade our models," Anthropic writes, and it is resetting usage limits for all subscribers as of April 23, with plans for per-model evals on every system prompt change, soak periods, and gradual rollouts.

- [Anthropic Engineering: An update on recent Claude Code quality reports](https://www.anthropic.com/engineering/april-23-postmortem)

### Anthropic Engineering: Scaling Managed Agents: Decoupling the brain from the hands

Anthropic's Managed Agents is a hosted service in the Claude Platform for long-horizon agents built on three virtualized interfaces: the session (an append-only log of events), the harness (the loop that calls Claude and routes tool calls), and the sandbox (where Claude runs code), each swappable without disturbing the others. Decoupling the "brain" from the "hands" turns containers into cattle: the harness calls a container as a tool via execute(name, input) → string, provisioned only when needed, which dropped p50 time-to-first-token roughly 60% and p95 over 90%. The architecture also keeps credentials out of the sandbox: Git tokens are wired into the local remote during initialization, and OAuth tokens live in a vault accessed through an MCP proxy, so generated code never touches the tokens. The session acts as a durable context object outside Claude's context window, letting the brain read positional slices of the event stream. "The challenge we faced is an old one: how to design a system for 'programs as yet unthought of.'" Written by Lance Martin, Gabe Cemaj, and Michael Cohen.

- [Anthropic Engineering: Scaling Managed Agents](https://www.anthropic.com/engineering/managed-agents)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
