[English](./ai-digest-2026-11-21-Sat.md) | [中文](../../zh/daily/ai-digest-2026-11-21-Sat.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-11-21-Sat.md)

---

# AI Builders Digest

## Reader's Briefing
The agentic interface is moving from chat into workflows. Linear COO Christina Cordova says more than half of new issues are now created by agents after the company rebuilt around its MCP server, Triage Intelligence and Loops. Google VP Josh Woodward shipped a Gemini Neon experiment from a Friday afternoon into production, OpenAI's Thibault Sottiaux points to a faster and simpler desktop app, and AI tutorial creator Peter Yang shows how to turn Antigravity's web interface into a mobile remote control. The product shifts span agent workflows, rapid experiments and interface polish.

Agent design is moving from instructions toward intent. Box CEO Aaron Levie says agents now do better when given goals and enough freedom, because they can connect dots across a solution space larger than any one person can hold. Cordova adds a counterweight: not every feature needs to be its own agent, and some automation should simply be part of the product. Vercel CEO Guillermo Rauch's personal-shopper example makes the infrastructure point: channels, payments, durability and encryption have to mature before an agent feels shippable.

Go-to-market discipline matters as much as model capability. Cordova reset Linear's goal from enterprise to growth-stage accounts when the company had one salesperson, waited until 2025 to pursue enterprise, and says Linear has at least 10xed since she joined. The company now has 40,000 paying customers, remains seat-based for its core product, and prices some AI features against transparent model costs.

AI costs are pushing new pricing and trust rules. Cordova says new AI features enter beta with clear notice that they may later be paid, and Linear avoids turning previously free features into paid ones. Rauch calls ISO 42001 the SOC 2 of AI and says Vercel's AI infrastructure is audited annually by an accredited third party. Enterprise buyers are being asked to trust the model and the surrounding system together.

Capability progress is outrunning familiar evaluation and relationship signals. Replit CEO Amjad Masad wants to compare two simultaneous Riemann proofs, one AI and one human, on elegance. SPC General Partner Aditya Agarwal cites Riemann progress and a pancreatic-cancer pill as reasons the debate over the "AI trade" misses the point. FirstMarkCap VC Matt Turck's conference story shows automated outreach can create the appearance of persistence without real context, while builder Zara Zhang warns that client-facing artifacts invite clients to ask why they could not have prompted the tool themselves.

Policy and distribution are part of the builder stack. Y Combinator President and CEO Garry Tan argues California should encourage startups instead of an asset seizure tax and spend public money wisely. Peter Yang's mobile setup shows builders improvising distribution when a native app is missing, and Nan Yu's note about improvements for actions performed dozens to hundreds of times a day is a reminder that small interface wins compound inside agent-heavy workflows.

## X / Twitter

### Google VP Josh Woodward
Josh Woodward says a few people were experimenting with Gemini Neon on the Friday afternoon before the holiday week when they saw a user's post they liked, built the idea and put it into production. Users can find the result by long-clicking the model picker on the web.

Source: https://x.com/joshwoodward/status/2123943606906138868

### Thibault Sottiaux, Codex and ChatGPT at OpenAI
Thibault Sottiaux says the team is locked in and asks users to upgrade the desktop app. He describes the new version as faster, simpler and much more pleasant to use.

Source: https://x.com/thsottiaux/status/2123861214644347122

### AI tutorial creator Peter Yang
Peter Yang shares a mobile workaround for Antigravity with Neon: open its web interface, tap see more and share, then choose Add to Home Screen. He says Antigravity does not yet have a mobile app, but the remote-control setup beats Claude's because all threads are available by default.

Source: https://x.com/petergyang/status/2123879309463228445

### Nan Yu, product for Codex at OpenAI
Nan Yu highlights performance and quality-of-life gains for actions users perform dozens to hundreds of times a day.

Source: https://x.com/thenanyu/status/2123983081577267264

### Replit CEO Amjad Masad
Amjad Masad says two separate Riemann proofs, one from AI and one from a human, are arriving at the same time. Assuming both are correct, he wants to compare them, especially for elegance.

Source: https://x.com/amasad/status/2123874539218010491

### Vercel CEO Guillermo Rauch
Guillermo Rauch says a personal shopper agent was his hello world on an internal pre-release version of Eve, but much of the infrastructure was missing. He says agentcardhq now exists, models are better, iMessage and WhatsApp channels are mature, and performance has improved without sacrificing durability or encryption, making it possible to ship a Muse or Instinct-caliber platform on Vercel's open intelligence stack. Separately, he calls ISO 42001:2023 the SOC 2 of AI and says Vercel's AI infrastructure is audited annually by an accredited third party.

Sources: https://x.com/rauchg/status/2123879031049449791, https://x.com/rauchg/status/2123869175085191298

### Box CEO Aaron Levie
Aaron Levie argues that model capability has jumped enough that agents work better with goals and freedom than with precise instructions. A year ago builders had to spell out how to design and develop an idea, but now an agent can connect dots across a much larger solution space and may produce a better implementation. He expects the shift to reach finance, legal, life sciences, cyber and other domains where no person can hold all the relevant knowledge.

Source: https://x.com/levie/status/2123686350410912145

### Y Combinator President and CEO Garry Tan
Garry Tan argues that California does not need an asset seizure tax. He says it should encourage new ideas and startups, then spend public money wisely on things that help people, and he says ivory-tower academics and SEIU-HNW union bosses have it wrong.

Source: https://x.com/garrytan/status/2123796297836896292

### FirstMarkCap VC Matt Turck
Matt Turck tells a cautionary story about automated agentic emailing. A prospect emailed twice to meet at Slush and then three more times after one reply, but when they met by chance, the prospect read Turck's name tag twice, showed no recognition and walked away.

Source: https://x.com/mattturck/status/2123777488786538982

### Builder Zara Zhang
Zara Zhang warns against sending clients Claude Artifacts or ChatGPT-generated sites because it can make them feel they could have prompted the tool themselves. She also writes, "If you curate, you should create."

Sources: https://x.com/zarazhangrui/status/2123813583339532321, https://x.com/zarazhangrui/status/2123692630655873269

### SPC General Partner and Bevel Health Co-founder Aditya Agarwal
Aditya Agarwal writes that "We are solving Riemann and also crushing pancreatic cancer with a pill," then mocks the debate over whether the "AI trade" is good.

Source: https://x.com/adityaag/status/2124019178843894078

## Podcast

### Scaling Linear’s GTM to $100M ARR — Cristina Cordova, COO
**Latent Space**

**The Takeaway:** Linear's path to scale came less from building a large sales machine than from sequencing markets, rebuilding the product around agentic workflows, and pricing AI in ways customers could understand.

Christina Cordova, COO of Linear, joined in 2023 after leading platform work at Notion and spending seven and a half years at Stripe. Linear then had one salesperson, no public-company customers and no account above roughly 500 seats. Rather than chasing enterprise immediately, she reset the company goal to winning growth-stage companies that already had a competing tool. Only in 2025 did Linear declare an enterprise push. Cordova says the company has at least 10xed since she joined and now has 40,000 paying customers.

The product story changed just as sharply. Linear's CEO published "issue tracking is dead," and Cordova describes a shift from manual ticket movement to a system where agents create, assign and act on work. More than 50% of issues created on Linear now come from agents, about a year and a half after its MCP server launched. The company built features such as Triage Intelligence and Loops, but Cordova is careful about the boundary: "not everything necessarily needs to be an agent. It can just be part of the product."

Her pricing and organization choices follow the same discipline. Linear remains seat-based for its core product, while some AI features are usage-based and billed transparently against model costs. New AI capabilities start in beta, and customers are told they may eventually be paid. Headcount stays deliberately lean at about 170 people, with no SDR layer, experienced technical account executives, in-house support and work trials. Cordova's lesson is that advantages now come from speed with quality and from a team that can keep changing. "This new world," she says, "ultimately rewards speed and operating in a very different way."

Source: https://www.youtube.com/watch?v=x0VSm6IjcDQ

## Blog
The validated blog feed contained no new qualifying items in its 72-hour lookback window.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
