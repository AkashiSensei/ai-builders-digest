[English](./ai-digest-2026-11-07-Sat.md) | [中文](../../zh/daily/ai-digest-2026-11-07-Sat.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-11-07-Sat.md)

---

# AI Builders Digest

## Reader's Briefing

The application layer is turning into a contest over model choice. Peter Yang argues that apps which route across models from multiple labs are being absorbed by the labs, while the remaining independent examples are often open source. He still sees strong user and enterprise demand for multi-model tools, which makes the next wave of acquisitions and open-source forks worth watching.

Agents are moving into the tools people already use, and the interface is changing with them. Thariq points to creator apps such as Instagram Edits and Roblox Studio shipping built-in MCPs, so agents can handle part of the work while people finish it in familiar software. Vercel CEO Guillermo Rauch makes a related bet: generative UI, rendered directly from an LLM into Slack or Teams, will become the dominant human-agent interaction pattern.

The agent stack is also becoming more disposable and more measurable. YC President and CEO Garry Tan argues for eval-driven development of agent skills, noting that he removed a skill because Opus 5.5 did the job better. He also highlights computer use in Aside as a real Chromium browser that sites struggle to block, and shares a striking claim that a small amount of ordinary moral advice reduced malicious behavior to 0%.

Biology is the clearest example of AI moving from description to intervention. Fabian Theis, who leads AI and computational biology efforts at Helmholtz Munich, describes a progression from building cell atlases to predicting cell behavior and now steering the next experiment. His lab's Lab Compass is an inverse generative model that, given a forward model of a cell, proposes the perturbation needed to reach a target state.

The bottleneck in that shift is not just model architecture. Theis stresses that perturbation data has become much richer, but also that simple baselines still win on many tasks and that benchmark metrics can be gamed. He sees representation learning and action modeling as separate problems, and argues that the strongest commercial moats will combine unique data with lab-in-the-loop execution rather than a generic virtual-cell platform.

Builders are also rethinking how they earn attention and capital. Zara Zhang calls a personal website the new resume because it shows taste and actual work rather than a list of titles. Nikunj Kothari pairs a local, open-source messages-analysis tool with a satire of token-heavy seed rounds, while Swyx turns a potential Anthropic IPO into a weekly coverage franchise. The common thread is distribution built on a distinct point of view.

## X / Twitter

### Swyx

Swyx, whose listed affiliations include smol.ai, Cognition, Temporal, AI Engineer, and Latent Space, says he is committing to weekly coverage of the Anthropic IPO "all the way until it does or doesn't happen." He frames the project as combining his experience covering mega-IPOs from $BABA to $TEAM with his AI engineering work, alongside Jamin Ball. ([post](https://x.com/swyx/status/2118905788915982341))

### Peter Yang

Peter Yang, who writes practical AI tutorials and interviews, argues that apps able to use models from different labs are being acquired by the labs themselves. He cites conductor_build and Cursor as examples of that trend, while t3dotcodes and orca_build remain open source. He still believes there is "a lot of user and enterprise demand" for multi-model apps and wonders how the market will shake out. ([post](https://x.com/petergyang/status/2118811231545122998))

### Thariq

Thariq, formerly on Claude Code at Anthropic, highlights a pattern he likes: creator apps such as Instagram Edits and Roblox Studio are shipping with built-in MCPs. That lets agents do some of the work while power users collaborate and continue in tools they already know. ([post](https://x.com/trq212/status/2118822238262853904))

### Guillermo Rauch

Vercel CEO Guillermo Rauch argues that generative UI for conversational agents will become the dominant human-agent interaction paradigm. He describes combining AI SDK with Chat SDK and json-render to go straight from an LLM to UI on platforms such as Slack and Teams. ([post](https://x.com/rauchg/status/2118856239719608353))

### Garry Tan

YC President and CEO Garry Tan says computer use in Aside is impressive partly because it is a real Chromium browser that "few/almost no sites can block." ([post](https://x.com/garrytan/status/2118951284376285508)) He argues that eval-driven development loops for agent skills are necessary because every new model improves and old skills can be removed; he cut /investigate after Opus 5.5 handled it better. ([post](https://x.com/garrytan/status/2118920030243139596)) He also shared a claim that 3 million tokens of advice from ordinary people facing complex moral dilemmas reduced malicious behavior to 0%, with a 28-fold efficiency jump across model generations. ([post](https://x.com/garrytan/status/2118950671886287323))

### Zara Zhang

Builder Zara Zhang argues that "your personal website is the new resume." LinkedIn shows a list of titles, she says, while a personal site shows taste, thinking, and actual work. She adds that builders do not need to be confined by existing social media platforms. ([post](https://x.com/zarazhangrui/status/2118939184841052386))

### Nikunj Kothari

FPV Ventures partner Nikunj Kothari reintroduced texts wrapped, a Mac tool that analyzes iMessage, WhatsApp, and phone calls with one terminal command and full disk access. It runs locally, uses no AI, and is open source. ([post](https://x.com/nikunj/status/2118840414853861627)) He also published a satirical guide to building a $100M company in two weeks, mocking token-heavy burn, paid launch promotion, creative ARR metrics, and tranched seed rounds; he labels it satire but says each sentence has happened to him individually. ([post](https://x.com/nikunj/status/2118758688567792008))

## Podcast

### Latent Space: Controlling Biology - Fabian Theis, Helmholtz Munich

Source: [Latent Space](https://www.youtube.com/@LatentSpacePod)

**The Takeaway:** The virtual-cell field is moving from mapping and predicting cell behavior to actively choosing the next experiment. Fabian Theis, who leads AI and computational biology efforts at Helmholtz Munich and whose lab produced widely used tools such as Scanpy and scVerse, argues that the next leap is a closed loop between models and wet labs. His team's new Lab Compass is an inverse generative model: once you have a forward world model of a cell, it can tell you what perturbation to apply to reach a desired state. As Theis puts it, "We can really now start guiding the experimentation."

That shift depends on richer perturbation data. Theis traces the change from sparse control-versus-disease comparisons to experiments measuring millions of transcriptomes and testing large drug or CRISPR panels. He expects more work on organoids and multicellular systems because single cell lines give limited readouts. But scale alone is not enough. He is blunt that simple baselines remain hard to beat on many tasks, and that the Arc virtual-cell challenge exposed how easily metrics can be gamed. The winning approach, he notes, was flow matching, a nonlinear method, but he still tells students to establish the baseline first.

Theis separates representation learning from action modeling. Foundation models can learn a useful latent space, but predicting how a cell changes under a perturbation requires a world model that maps state plus action to the next state. His group combines a 350-million-cell, 16-species latent space with flow matching. On commercialization, he is skeptical of generic "virtual cell platform" pitches and sees the strongest moat in unique data plus lab-in-the-loop execution, such as a Cancer Organoid Perturbation Atlas built with pharma. His long-running Y-model pairs a methods advisor with a wet-lab advisor, because the hardest part is not just building the model but persuading experimentalists to test its next question.

## Blog

The validated feed contained no new qualifying blog posts.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
