[English](./ai-digest-2026-05-14-Thu.md) | [中文](../../zh/daily/ai-digest-2026-05-14-Thu.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-05-14-Thu.md)

---

# AI Builders Digest

## Reader's Briefing
1. Claude Code auto mode is the clearest signal this week: agent tools are moving from "ask before everything" toward model-mediated autonomy, with explicit safety classifiers replacing much of the approval-clicking burden.

2. Anthropic's design frames the real risk as overeager agency, not just hostile prompt injection. The system is built to catch cases where an agent takes a related but unauthorized action, such as deleting, force-pushing, or touching infrastructure beyond the user's request.

3. Waymo's Dmitri Dolgov makes the opposite point in a physical-world domain: autonomy at product scale is not just a bigger model. His core question is "end to end, and then what else?", meaning learned systems still need structured validation, runtime checks, and safety culture.

4. The Waymo numbers show autonomy crossing from research into operations: more than 20 million fully autonomous rides, 10 million of them in the last seven months, over 4 million autonomous miles per week, and service already operating in 11 cities.

5. The shared theme is mature autonomy. Whether the agent is changing files or driving through a city, the frontier is less about demos and more about verification, trust boundaries, cost, and systems that recover safely when the model is almost right but not quite.

## X / Twitter
No new X / Twitter updates were present in today's feed.

## Podcast
### Training Data: Waymo's Dmitri Dolgov: 20 Million Rides and the Road to Full Autonomy

The Takeaway: Waymo's bet is that real autonomy is not "end-to-end or bust"; it is learned driving plus the extra structure needed to validate, scale, and make safety non-negotiable.

Dmitri Dolgov, Waymo's co-CEO and longtime technical leader, traces the work from the DARPA Challenge era to a service now operating fully autonomously in 11 cities. The sharpest technical point is his rejection of a false binary between end-to-end learning and engineered systems. His framing is simple: "end to end, and then what else?" For a driver-assist prototype, a vanilla learned stack may be enough. For a fully autonomous service aiming at superhuman safety over hundreds of millions of miles, Waymo adds structured intermediate representations, runtime validation, richer training and evaluation recipes, closed-loop evaluation, and reinforcement-learning reward design.

The scale numbers are now operational rather than aspirational. Dolgov says Waymo has delivered over 20 million fully autonomous rides, with 10 million in the last seven months, and is driving more than 4 million fully autonomous miles per week. He also says Waymo's driver is more than 13 times safer than a human driver for serious-injury-causing collisions in the cities where it operates, translating to a prevented serious injury roughly every eight days at current scale.

The business story is acceleration after years of sequential de-risking: more US cities, deeper existing markets, and planned international service in London and Tokyo. The product lesson is patient and unfashionable: if safety is the foundation, it has to shape architecture, evaluation, hardware cost reduction, community trust, and launch discipline from day one.

https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

## Blog
### Anthropic Engineering: Claude Code auto mode: a safer way to skip permissions

Anthropic introduced Claude Code auto mode, a permission model meant to sit between constant manual approvals and the unsafe `--dangerously-skip-permissions` path. The core claim is that approval prompts create fatigue, especially when users accept 93% of them anyway. Auto mode delegates many decisions to model-based classifiers, aiming to "catch the dangerous actions" while letting routine work proceed.

The architecture has two layers. At the input layer, a prompt-injection probe scans tool outputs before they enter the agent context and warns the agent when content looks hostile. At the output layer, a transcript classifier running on Sonnet 4.6 evaluates tool calls before execution. It first uses a fast yes/no filter, then runs chain-of-thought reasoning only on flagged actions. The classifier sees user messages and tool calls, but not Claude's own prose or tool outputs, a deliberate choice to reduce prompt-injection and self-rationalization risk.

The post is unusually candid about tradeoffs. On real internal traffic, the full pipeline reports a 0.4% false positive rate. On real overeager actions, it still has a 17% false negative rate. Anthropic's position is not that auto mode replaces careful review for high-stakes infrastructure, but that it is materially safer than running with no guardrails. Practical defaults include allowlisted safe tools, in-project edits without classifier latency, classifier review for higher-risk actions, deny-and-continue recovery, subagent handoff checks, and termination after repeated denials.

https://www.anthropic.com/engineering/claude-code-auto-mode

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
