[English](./ai-digest-2026-05-17-Sun.md) | [中文](../../zh/daily/ai-digest-2026-05-17-Sun.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-05-17-Sun.md)

---

# AI Builders Digest

## Reader's Briefing

1. The strongest signal today is that builders are treating agentic software as an operating model, not a feature. Peter Steinberger described OpenClaw as a company run with many Codex loops for reviews, security, issue triage, benchmark checks, and meeting-driven PRs.

2. Codex is becoming a recurring reference point for practical agent work. Swyx called the product unrecognizable from three months ago, Dan Shipper pointed to Codex-native apps, Nikunj Kothari described a long-running `/goal` workflow, and Sam Altman replied to feedback about users wanting more capability after adapting to the current baseline.

3. Agent deployment is creating new infrastructure and security patterns. Guillermo Rauch highlighted Vercel plugins, Skills, SSO-protected agent deployments, and `vercel curl` as ways to let agents work inside authenticated environments without losing access controls.

4. Product work around AI is shifting away from old playbooks. Madhu Guru argued that PMs trained to execute frameworks now need to invent patterns, while Aaron Levie said AI products need forward deployed engineering because models, workflows, and best practices keep changing after deployment.

5. Yann LeCun's latest long-form argument keeps the architecture debate alive. His thesis is that LLMs are useful but not a route to animal-like or human-like intelligence because real agents need world models, consequence prediction, and planning by search rather than next-token generation.

## X / Twitter

### Swyx

Swyx said Codex has become "completely unrecognizable from 3 months ago," reacting to a demo that felt like "agentic excel on mac." He also surfaced Singapore GovTech's estimate of 1.3 billion agents in the country within two years and noted that a national MCP gateway is being built, while pointing to hints dropped about the Codex roadmap.

Source: https://x.com/swyx/status/2055494400252481687
Source: https://x.com/swyx/status/2055470634331750588
Source: https://x.com/swyx/status/2055467498888118647

### Peter Yang

Roblox product leader Peter Yang liked the new ChatGPT Finances direction but immediately focused on trust and data boundaries. He turned off the "improve the model for everyone" setting because he does not want financial data used for model training or targeted ads, and he noted that AI still struggles to classify transactions correctly.

Source: https://x.com/petergyang/status/2055450577094738018
Source: https://x.com/petergyang/status/2055396161910194395
Source: https://x.com/petergyang/status/2055436179643019395

### Madhu Guru

Google product leader Madhu Guru argued that AI is breaking the career model for PMs who were trained to reuse playbooks. For two decades, many product teams succeeded by applying patterns invented elsewhere, but AI product work has fewer stable templates. His conclusion is blunt: PMs need to become inventors again, because "you can't A/B test your way to a breakthrough AI product."

Source: https://x.com/realmadhuguru/status/2055414865146327088

### Guillermo Rauch

Vercel CEO Guillermo Rauch showed Grok CLI using Plugins and Skills to generate and deploy a creative coding site through Vercel. He also explained an enterprise wrinkle for agent-generated apps: Vercel can put even production deployments behind SSO, but agents then need a way to access the protected URL they just created. His answer is `vercel curl`, which lets builders and agents curl authenticated Vercel URLs from inside the ecosystem. He also argued that people who combine agent management skill with strong fundamentals will be hard to beat.

Source: https://x.com/rauchg/status/2055491454307582454
Source: https://x.com/rauchg/status/2055440326765244742
Source: https://x.com/rauchg/status/2055278852931530784

### Aaron Levie

Box CEO Aaron Levie said he is "fully forward deployed engineering pilled" because AI is not like traditional software. Classical SaaS ships a relatively stable artifact, while AI systems keep changing as models improve, capabilities shift, and operating practices evolve. His view is that a vendor working across thousands of customers can propagate best practices more efficiently than every company relearning them alone, and that the learning should feed directly back into the product. He also repeated that headless software is the future.

Source: https://x.com/levie/status/2055501840419328286
Source: https://x.com/levie/status/2055357619888595271

### Garry Tan

Y Combinator CEO Garry Tan focused on California politics rather than AI product work in today's feed. He argued that the "Overpaid CEO" tax would pass costs to consumers, reduce city revenue, and make cities and states poorer, and he also pointed readers to his voter guide for current California elections.

Source: https://x.com/garrytan/status/2055446378596474891
Source: https://x.com/garrytan/status/2055384351307858390
Source: https://x.com/garrytan/status/2055320066577891415

### Matt Turck

FirstMark's Matt Turck had no substantive AI analysis in today's feed beyond a personal high-engagement post.

Source: https://x.com/mattturck/status/2055404881024848056

### Nikunj Kothari

FPV Ventures partner Nikunj Kothari described `/goal` as feeling like AGI when given the right tools. His example was a long-running agentic workflow that moved through more than 2,000 database line items, fixed product images and frontend bugs caused by image variation, improved descriptions, used a browser harness for live web information, fact-checked with web search, and wrote reusable scripts while he was away from the keyboard.

Source: https://x.com/nikunj/status/2055426430654439485
Source: https://x.com/nikunj/status/2055428193398780296
Source: https://x.com/nikunj/status/2055288369958289536

### Peter Steinberger

Peter Steinberger gave the clearest operating picture of an agent-native company today. He said OpenClaw is trying to answer what software building looks like when tokens do not matter: roughly 100 Codex instances running in the cloud, PR and security reviews, issue deduplication, spam detection, benchmark regression checks, meeting listeners that create PRs from discussions, and browser-driven agents that can reproduce complex setups. He also launched `clawpatch` 0.1.0, a tool that maps codebases into semantic feature slices, reviews them for bugs and quality issues, and records fix attempts with validation. Separately, he said Svelte has been a pleasant alternative to React for recent Codex-assisted projects.

Source: https://x.com/steipete/status/2055405041843052792
Source: https://x.com/steipete/status/2055364630709448970
Source: https://x.com/steipete/status/2055402519841411165

### Dan Shipper

Every CEO Dan Shipper said Codex-native apps are the future and pointed readers to a deep dive on trying to build an agent-as-a-service platform on OpenClaw. His two takeaways were that OpenClaw is powerful but difficult to build on as a platform because it moves fast and introduces regressions, and that one well-maintained company super-agent may beat giving every employee a separate fragile agent. The operational lesson is that agent adoption often needs a technical owner who keeps the shared agent working well for everyone.

Source: https://x.com/danshipper/status/2055451869841965154
Source: https://x.com/danshipper/status/2055412891910586516
Source: https://x.com/danshipper/status/2055347527457886336

### Sam Altman

OpenAI CEO Sam Altman responded appreciatively to a product feedback thread, noting that the team takes reports seriously even when the underlying answer is that users have adapted to the current level of capability and now want more.

Source: https://x.com/sama/status/2055356452286640630

## Podcast

### Unsupervised Learning: Ep 86: Yann LeCun on Leaving Meta, Breaking The LLM Paradigm, &amp; Why Hinton is Wrong

The takeaway: Yann LeCun's case is not that LLMs are useless, but that they are the wrong path to human-like intelligence.

LeCun frames AMI, his new company, around "AI for the real world." Language models are useful for language, code, math, and other symbolic domains, but reality is high-dimensional, continuous, noisy, and messy. His argument is that agents need world models: systems that can anticipate the consequences of their own actions, then plan by search or optimization instead of generating the next token or the next action.

That leads to his critique of current robotics and VLA approaches. He sees imitation-learning-heavy demos as progress, but not a reliable route to robust physical intelligence because they require huge amounts of data and still lack deep consequence prediction. The model he favors is JEPA, or joint embedding predictive architecture, where systems learn to predict abstract representations rather than pixels. He says this non-generative family, including work like DINO, iJEPA, and VJEPA, has been much more successful for images and video than pixel reconstruction.

The Meta context is also revealing. LeCun says the company became increasingly focused on catching up in LLMs after Llama's commercialization push and later disappointments, which made Meta less suited to scaling the world-model agenda into products. His startup is a bet that real-world intelligence needs a different architecture and a different organizational focus.

Source: https://www.youtube.com/@RedpointAI

## Blog

No blog posts in today's feed.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
