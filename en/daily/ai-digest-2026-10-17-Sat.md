[English](./ai-digest-2026-10-17-Sat.md) | [中文](../../zh/daily/ai-digest-2026-10-17-Sat.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-10-17-Sat.md)

---

# AI Builders Digest

## Reader's Briefing

OpenAI cofounder and president Greg Brockman says the week's math results mark a real milestone: roughly 400 important open problems have been resolved, and the old question of whether AI can produce genuinely new knowledge now has a definitive answer. He is careful to note that models are not yet producing whole new theories, but he argues the leverage for human researchers has jumped ([podcast](https://www.youtube.com/@NoPriorsPodcast)). Sam Altman points to the last line of the chain-of-thought from "the solution" printed on a Navier-Stokes milestone shirt ([tweet](https://x.com/sama/status/2111139227761266699)), while Replit CEO Amjad Masad observes mathematicians moving through denial, anger, bargaining, depression and acceptance in compressed time ([tweet](https://x.com/amasad/status/2111206044416500159)).

Brockman's most provocative claim is economic: "cyber spend, security spend should actually vastly outstrip software spend." His logic is that software is becoming cheap, so reliability and security become the scarce goods ([podcast](https://www.youtube.com/@NoPriorsPodcast)). OpenAI has committed $1 billion to help frontline defenders, and internally paused 25 production engineers to let its peak model probe infrastructure, find issues and fix them ([podcast](https://www.youtube.com/@NoPriorsPodcast)).

Drug discovery is the other frontier he expects to change. The current path runs about 15 years and $1.5 billion per drug, much of it clinical trials, and Brockman argues humans are "incredibly bad at biology" while neural nets have no inherent reason to be worse at biology than at natural language ([podcast](https://www.youtube.com/@NoPriorsPodcast)). Data, wet labs and regulatory filings remain bottlenecks, but he expects a large share of the possible gains to arrive quickly.

Box CEO Aaron Levie is pricing in recursive self-improvement. He argues that models exceeding most human engineers, better harnesses for long-running agents, more data and massive parallelism create a flywheel that will accelerate progress "far faster than we've seen before" ([tweet](https://x.com/levie/status/2111312141609586862)). His advice is blunt: if you are not pricing in what RSI will lead to, that is probably a mistake.

On the product side, the agent surface is maturing. Boris Cherny of Anthropic says Claude Slides is how he makes decks now ([tweet](https://x.com/bcherny/status/2111158659971699136)) and Claude Code Review runs on all his pull requests ([tweet](https://x.com/bcherny/status/2111158313463525518)); Thibault Sottiaux says OpenAI added slides support to ChatGPT for Pro, Business and Enterprise ([tweet](https://x.com/thsottiaux/status/2111249810502353152)); Amjad Masad says Replit can deploy into a customer's own cloud so data never leaves home ([tweet](https://x.com/amasad/status/2111267314012496121)). Dan Shipper, CEO of Every, frames the next gap: generation is now cheap and high quality, so editing and oversight are the capabilities that need a bump ([tweet](https://x.com/danshipper/status/2111174407637139668)).

## X / Twitter

### Boris Cherny, Claude at Anthropic

Boris Cherny says Claude Slides is how he makes slide decks now, replacing the old routine of googling for assets like an iPhone frame SVG ([tweet](https://x.com/bcherny/status/2111158659971699136)). He also calls Claude Code Review a core part of his workflow: it runs on all of his pull requests and catches almost every bug before it lands ([tweet](https://x.com/bcherny/status/2111158313463525518)).

### Thibault Sottiaux, Codex and ChatGPT at OpenAI

Thibault Sottiaux says slides support was added to ChatGPT the day before and is currently available in Pro, Business and Enterprise while the team learns from feedback ([tweet](https://x.com/thsottiaux/status/2111249810502353152)).

### Amjad Masad, Replit CEO

Amjad Masad announced that Replit can deploy into a customer's own cloud, with data never leaving home, designed for high-stakes environments such as governments, finance and healthcare ([tweet](https://x.com/amasad/status/2111267314012496121)). He also highlighted Frontier Slides as "super fast" ([tweet](https://x.com/amasad/status/2111261373741383712)). Separately, he described mathematicians working through denial, anger, bargaining, depression and acceptance over recent AI math results, saying the field is at the tail end of depression and entering acceptance ([tweet](https://x.com/amasad/status/2111206044416500159)).

### Guillermo Rauch, Vercel CEO

Guillermo Rauch rebuilt the Roadster demo as a playable, highly accurate simulation that retains many real-world details ([tweet](https://x.com/rauchg/status/2111313462987231519)). He also highlighted a compiler result: TypeScript compiled with scriptc outperforms tsgo by 2 to 4 times, which he framed with the line that TypeScript is the new TypeScript ([tweet](https://x.com/rauchg/status/2111274408706965898)).

### Aaron Levie, Box CEO

Aaron Levie argues that recursive self-improvement is arriving faster than most people expect. He points to model capability exceeding most human engineers, better harnesses and infrastructure for long-running agents, a growing array of data, and the ability to parallelize agents across far more tasks, tests and approaches than any person could handle. Together, he says, these create a flywheel that will accelerate model progress "far faster than we've seen before," and failing to price in RSI is probably a mistake ([tweet](https://x.com/levie/status/2111312141609586862)).

### Garry Tan, Y Combinator President and CEO

Garry Tan described his new project workflow: using Capydotai with AsideAI so his agents can write the first version of the code and help set up DevOps in one pass ([tweet](https://x.com/garrytan/status/2111235500568969451)).

### Nikunj Kothari, FPV Ventures partner

Nikunj Kothari says he wrote a prediction seven months ago, met roughly 50 startups in the space, and has now found the company whose Series A his firm will lead. He frames it as a reminder to shoot your shot because you never know how the universe will collaborate in your favor ([tweet](https://x.com/nikunj/status/2111292452414103892)).

### Dan Shipper, CEO of Every

Dan Shipper, CEO of Every, argues that generation is now cheap and high quality, which shifts the bottleneck. The big capabilities bump, in his view, now needs to come from editing and oversight ([tweet](https://x.com/danshipper/status/2111174407637139668)).

### Sam Altman

Sam Altman shared that the back of a Navier-Stokes milestone shirt carries the last line of the chain-of-thought from the solution ([tweet](https://x.com/sama/status/2111139227761266699)).

### Claude, an AI assistant built by Anthropic

Claude highlighted two examples: Haiku 5.5 wrote twenty haiku and then drew every frame in JavaScript ([tweet](https://x.com/claudeai/status/2111177845846495646)), and a cardiology fellow built a 3D tool to help trainees learn to read coronary angiograms ([tweet](https://x.com/claudeai/status/2111177843413807120)).

Other builders in the validated feed posted only personal notes, promotional links or replies without substantive commentary, so they are omitted.

## Podcast

### No Priors: The Changing Physics of Cybersecurity and Drug Development with OpenAI President Greg Brockman

**The Takeaway:** The same capability jump that let AI resolve hundreds of long-standing open math problems can be aimed at cybersecurity and drug discovery, but the institutions around those fields have to change as fast as the models.

Greg Brockman, cofounder and president of OpenAI, came from a math background and still frames progress in terms of scientific discovery. He says OpenAI has published roughly 400 important open problems that are now resolved, and that the question of whether AI can generate genuinely new knowledge is settled: "it's just impossible to deny." The caveat is that models are not yet producing whole new theories. The interesting part is what humans can do with the leverage.

His most contrarian claim is about security economics. "I have a feeling that cyber spend, security spend should actually vastly outstrip software spend," he says. If software becomes cheap, reliable and secure software becomes the scarce good. He describes the internet as carrying long-standing security debt, and says OpenAI has committed $1 billion to help frontline defenders. Internally, the company paused 25 production engineers, pointed its peak model at its own infrastructure, found and fixed issues, and kept going until the model saturated. He expects that cycle to repeat with every new model.

Drug discovery gets the same first-principles treatment. A drug takes about 15 years and $1.5 billion, much of it clinical trials. Brockman argues humans are "incredibly bad at biology" while neural nets have no inherent reason to be worse at biology than at natural language. Data, wet labs and regulatory filings are the bottlenecks, but he expects a large share of the possible gains to arrive quickly.

The through-line is agency. Brockman wants humans "firmly in the driver's seat," with AI amplifying judgment rather than replacing it. His product corollary is that "the best UI is no UI," which is why OpenAI is pushing proactive agents like DOTS that keep working when you stop.

Source: https://www.youtube.com/@NoPriorsPodcast

## Blog

The validated feed contained no new qualifying blog posts in this run.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
