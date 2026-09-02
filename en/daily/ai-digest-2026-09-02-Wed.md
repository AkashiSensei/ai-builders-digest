[English](./ai-digest-2026-09-02-Wed.md) | [中文](../../zh/daily/ai-digest-2026-09-02-Wed.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-09-02-Wed.md)

---

# AI Builders Digest

## Reader's Briefing

**1. Anthropic ships Fable 5.1 everywhere.** The Claude account announced Claude Fable 5.1 is available across the product line today, with Claude Mythos 5.1, its model for cyberdefenders and life scientists, offered through trusted access programs. Anthropic says safeguards improved substantially: cybersecurity safeguards flag benign requests about 60% less often, and fallback rates on basic biology and medical questions fell around 85%. Claude Code's Boris Cherny adds that cache reads on Fable 5.1 dropped to $0.25 per million tokens from $1, cutting up to 38% off a typical Claude Code session, and notes the team is working to reduce "Claude-speak."

**2. Enterprise testing of Fable 5.1 shows sharp gains.** Box CEO Aaron Levie reports that Fable 5.1 jumped 7 percentage points over Fable 5 on Box's complex enterprise work eval for unstructured data tasks, with wins including +17% in financial services and +37% on a technology cost-optimization analysis. Anthropic's Cat Wu says the model let her team take on projects that would previously have taken months, while Thariq says lower-effort settings work well for tasks needing less verification, and switching effort no longer breaks prompt cache.

**3. Builders push past raw capability toward less annoying agents.** Nan Yu, joining OpenAI's product staff after leading product at Linear, argues there is real alpha in making agents less annoying, since users need to stop rage-quitting to reach value, and sees an opening for UX designers to become conversation and rhetoric designers. Peter Yang shares his rule of keeping only a dozen or so lean AI skills and deleting unused ones, and recommends Claude Code's prompt-audit to strip redundant rules as skills drift.

**4. The self-improving product becomes a company pattern.** Meta's Madhu Guru argues self-improving products are a meta idea every company should implement, and lays out the core pieces: crisp metrics, an articulated strategy, a knowledge base of past decisions, connections to internal systems, and a harness built around the product development flow. He separately credits Shopify's ML team as world-class and urges more enterprises to build their own post-training systems, evals, and data flywheels.

**5. AI's next battlegrounds: security, websites, and model rollout discipline.** OpenAI CEO Sam Altman says the company sprinted on safety over the summer, that Astra is done training and is a significant step forward in capability and alignment, and that OpenAI is pacing subsequent models to meet safety standards before launch. Aaron Levie argues AI for cyber is about to go vertical and that security will be a great field as AI helps triage multiplying threats, and Vercel CEO Guillermo Rauch previews a unified compute platform where agent-escape protections apply to builds, functions, and servers.

## X / Twitter

### Boris Cherny: Claude Code, Anthropic

Boris Cherny of Claude Code at Anthropic rounds out the Fable 5.1 release notes: the model writes better with better tone, safeguards now intervene 85% less often on benign biology requests than with Fable 5, and Claude Code users should see around 60% fewer cyber interventions per session. He also flags lower prices for Enterprise, API, and SDK customers, with cache reads at $0.25 per million tokens versus $1 before, up to 38% cheaper for a typical Claude Code session.

- [Boris Cherny on Fable 5.1 writing and tone](https://x.com/bcherny/status/2094864064648536068)
- [Boris Cherny on Fable 5.1 safeguards](https://x.com/bcherny/status/2094864063478276288)
- [Boris Cherny on Fable 5.1 pricing](https://x.com/bcherny/status/2094864062186426373)

### Claude

The Claude account announces Claude Fable 5.1 is available everywhere today, while Claude Mythos 5.1, the model for cyberdefenders and life scientists, is available through trusted access programs. Safeguards also improved: cybersecurity safeguards flag benign requests about 60% less often, and fallback rates on basic biology and medical questions recently dropped around 85%. Separately, Anthropic is introducing Enterprise Frontier Safeguards (EFS), which give enterprise customers complete privacy, equivalent to zero data retention, while remaining state-of-the-art at preventing adversarial use; EFS rolls out in phases starting this fall.

- [Claude on Fable 5.1 and Mythos 5.1 availability](https://x.com/claudeai/status/2094848592812917122)
- [Claude on improved safeguards](https://x.com/claudeai/status/2094848591617483020)
- [Claude on Enterprise Frontier Safeguards](https://x.com/claudeai/status/2094848590245965931)

### Peter Yang

Peter Yang, who creates practical AI tutorials and interviews for busy people, argues for fewer, leaner skills: he keeps only about a dozen, mostly his own, regularly deletes skills he no longer uses, and keeps each as short as possible. He also flags a real problem with skill maintenance, where asking AI to update a skill after a successful run tends to overfit on one thread and make the skill drift over time. His practical tip for Fable 5.1 users is to run Claude Code's /claude-api prompt-audit on skills to strip redundancies and rules tuned for older models.

- [Peter Yang on keeping skills lean](https://x.com/petergyang/status/2094999358525821099)
- [Peter Yang on skill drift and overfitting](https://x.com/petergyang/status/2094995775952740795)
- [Peter Yang on prompt-audit for Fable 5.1](https://x.com/petergyang/status/2094987791566622971)

### Nan Yu: OpenAI product staff (prev. head of product at Linear)

Nan Yu, who is joining OpenAI's product staff after four years as head of product at Linear, argues there is a lot of alpha in making agents less annoying: users need to stop rage-quitting before they can get to value. He sees an untapped opportunity for UX designers to become conversation and rhetoric designers.

- [Nan Yu on making agents less annoying](https://x.com/thenanyu/status/2094928205753040999)

### Madhu Guru: Senior Director of AI at Meta

Madhu Guru, Senior Director of AI at Meta, argues self-improving products are a meta idea every company should implement. He lists the core pieces: crisp definitions of primary, secondary, and guardrail metrics; an articulation of strategy and the metrics you want to move most; a knowledge base of past product decisions and principles; connections to internal systems such as dashboards, APIs, and MCPs; and a harness built around the end-to-end product development flow. He also points to the opportunity for enterprises that build their own post-training systems, evals, and data flywheels, saying he has worked with the Shopify ML team and that they are world class.

- [Madhu Guru on self-improving products](https://x.com/realmadhuguru/status/2094817857821704659)
- [Madhu Guru on enterprise post-training systems](https://x.com/realmadhuguru/status/2094973690576576675)

### Cat Wu: Claude Code and Cowork, Anthropic

Cat Wu, who works on Claude Code and Cowork at Anthropic, says that with Fable 5.1 her team has taken on more ambitious projects that would previously have taken months, and invites builders to put the model to work in Claude Code, Claude Cowork, and Claude Tag.

- [Cat Wu on ambitious Fable 5.1 projects](https://x.com/_catwu/status/2094933602228416603)

### Thariq: Claude Code, Anthropic

Thariq of Claude Code at Anthropic has spent a lot of time with Fable 5.1 and rates it a very good model, recommending it on lower-effort settings for tasks that need less verification or have fewer edge cases. He notes a practical detail: switching effort levels no longer breaks prompt cache.

- [Thariq on Fable 5.1 hands-on](https://x.com/trq212/status/2094945951865520458)

### Guillermo Rauch: CEO of Vercel

Vercel CEO Guillermo Rauch announces Fable 5.1 is now on Vercel AI Gateway, so every model is available through one interface. In a separate thread, he makes the case for Fluid as the unification behind Vercel's build performance, sandbox reliability, and 30-minute function durations: shared Dockerfile, security perimeters, networking, and file systems across compute products. He imagines the same egress firewall features that prevent agent escapes in Sandbox applying to builds, functions, and servers, toward one global unified compute platform. He also welcomes a partnership supporting Tanner Linsley and the TanStack team, committing to high-quality support whether customers choose Next.js or TanStack.

- [Guillermo Rauch on Fable 5.1 on AI Gateway](https://x.com/rauchg/status/2094867652573528074)
- [Guillermo Rauch on Fluid and unified compute](https://x.com/rauchg/status/2094831747037085978)
- [Guillermo Rauch on the TanStack partnership](https://x.com/rauchg/status/2094901483414372716)

### Alex Albert: Research, Anthropic

Alex Albert, who does research at Anthropic, is most excited about Enterprise Frontier Safeguards (EFS), the non-model feature that shipped with Fable 5.1. He explains that with traditional zero data retention there was no way to spot patterns in what agents do across sessions on internal systems, while EFS keeps a company's data in its own cloud and adds an automated monitoring layer that flags risky patterns. He calls it an observability and risk mitigation layer for agents that he expects will become a standard enterprise requirement. He also shares a demo of Fable 5.1 generating videos through code: given a picture of a property lot, it designed a house, rendered it, and produced a cinematic walkthrough.

- [Alex Albert on Enterprise Frontier Safeguards](https://x.com/alexalbert__/status/2094889286990446769)
- [Alex Albert on code-generated video with Fable 5.1](https://x.com/alexalbert__/status/2094860187743986169)

### Aaron Levie: CEO of Box

Box CEO Aaron Levie reports early-release testing of Fable 5.1 against Box's complex enterprise work eval, with a 7 percentage point jump over Fable 5 on unstructured data tasks. He cites wins including +17% on a tax-adjusted profit projection in financial services, +37% on a cost-optimization analysis where the model recognized an ambiguous normalization and computed both forms, and +16% on an educational data analysis task in the public sector, and says Fable 5.1 will be available shortly in Box AI Studio. Separately, he argues AI for cyber is about to go vertical: models are getting insanely good at finding and exploiting vulnerabilities, frontier models lead but open weights are not far behind, and triaging and automating fixes with more AI plus human oversight is essentially the only way forward. His punchline: it is going to be a great time to be in security.

- [Aaron Levie on Box's Fable 5.1 eval results](https://x.com/levie/status/2094851976769257770)
- [Aaron Levie on AI for cyber going vertical](https://x.com/levie/status/2095024699441119612)

### Nikunj Kothari: Partner, FPV Ventures

Nikunj Kothari, a partner at FPV Ventures investing in seed and Series A, argues people are still sleeping on WebMCP, which lets agents call tools to interact with a website natively, including full UI/UX support and interactive elements. He shares a WebMCP challenge demo where an agent built its own views on an El Nino situation tracker, preserved human edits, and created a shareable link for other agents or humans, built with Codex and Railway and live at elneenyo.com.

- [Nikunj Kothari on WebMCP for agents](https://x.com/nikunj/status/2094922789128196314)

### Sam Altman: CEO of OpenAI

OpenAI CEO Sam Altman says that over the summer the company has been sprinting on safety priorities, because it is more important than ever for capabilities and safeguards to advance together, and that OpenAI is going to launch its next model soon. He acknowledges the tension: Astra is very good and finished training a while ago, a significant step forward in both capabilities and alignment, but for the models after it OpenAI has been slowing things as needed to do sufficient safety and alignment work. He argues that managing the transition to a world with abundant and powerful AI should be one of the highest priorities in the world, and that the world will need aligned AI to manage future phases of the transition.

- [Sam Altman on safety, Astra, and the next model](https://x.com/sama/status/2094934592062959832)

## Podcast

### Training Data: Making Cities Awesome: Peregrine's Nick Noone & Ben Rudolph

The Takeaway: AI can make cities safer and more effective without becoming a surveillance panopticon, if the company building it treats data ownership and governance as the product rather than data collection.

Peregrine is building AI that protects cities and communities while rejecting the surveillance state. Co-founders Nick Noone and Ben Rudolph came from opposite worlds: Noone ran Palantir's SOCOM unit and deployed into high-stakes intelligence operations in the Middle East, while Rudolph did refugee work at the Sudanese and Colombian borders with the UN Refugee Agency before building last-mile healthcare in rural India. Both landed on the same thesis: the foundation of an awesome city is safety, both objective safety and the feeling of being safe.

Peregrine inverts the data-collection business model of companies like Flock or Axon: it does not sell more sensors or hoard data, but joins the disparate information an agency already owns, on top of existing systems, with governance and permissioning so institutions can use what they have. "We're fundamentally in the business of joining disparate information to provide a more secure, properly governed solution," Noone says. Customers own their data, and Noone frames this as an anti-network-effect bet: protect the sanctity of each agency's data rather than aggregating it into a central panopticon.

The results are concrete. A county in Florida that suddenly had to run over 100 water rescues in a month discovered that the storm patterns creating sand channels and rip currents had never before occurred for three consecutive days, turning a mystery into an actionable warning. A detective probing a threat against a synagogue used semantic search to find a pattern of prior antisemitic threats that keyword search would have missed. Peregrine's forward-deployed engineers own problems all the way to the outcome, which Noone says looks unscalable but is the best signal for what works: "the way that we maintain trust is not actually taking credit and shouting from the rooftops."

AI is also changing Peregrine's economics: around 90% of the code for its data integrations is now written by agents, with deployment teams supervising hours-long runs of orchestrator and sub-agents. Noone argues that dropping delivery costs by orders of magnitude is what earned small cities access to technology that once required eight-figure contracts, and he wants the endgame to be an institutional memory layer for 10,000 cities, each kept awesome in its own way.

Source: https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

## Blog

The validated blog feed contained no new qualifying items.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
