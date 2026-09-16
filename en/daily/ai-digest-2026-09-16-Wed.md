[English](./ai-digest-2026-09-16-Wed.md) | [中文](../../zh/daily/ai-digest-2026-09-16-Wed.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-09-16-Wed.md)

---

# AI Builders Digest

## Reader's Briefing

**1. Aaron Levie's applied-layer thesis: the trillion-dollar work is the bridge between models and enterprise workflows.** Box CEO Aaron Levie writes that "there's a massive chasm between the power of AI models and the ultimate workflows that enterprises are trying to automate," and calls that gap the opportunity for the applied AI layer. Crossing it means connecting intelligence to workflows, reengineering processes, aggregating the right context and data, designing the right human-in-the-loop experiences, driving change management, running domain-specific evals, and managing security and governance. He expects this layer to emerge in every vertical and horizontal category, and argues it only gets more important as models improve, because "greater capability enables even more complex tasks to be tackled, amplifying the challenges if you don't do this well."

**2. In his podcast conversation, Levie gives the sharper version: enterprise diffusion will be slower than Silicon Valley thinks.** He explains that most of the world's code is a utility whose value is almost entirely captured in the text it produces, which is why coding agents spread in months while other knowledge work stalls. A sales rep is rate-limited by whether a customer replies or has budget, and most enterprises have no "just give us your GitHub" moment because their data sits in legacy file shares and on-prem systems with access controls agents cannot navigate. His prediction: "in five years from now, I would bet, like, 90% of all tokens in the enterprise are things that a user never kicked off, and they just see a result."

**3. Builders are converging on a multi-model future where cheap, probability-based models do the judging.** Vercel CEO Guillermo Rauch states it plainly: "The future is multi-model. Trying to hide the choice confuses and hurts customers." Every CEO Dan Shipper says his company almost never tests new foundation models, but has spent about a week with one that outputs probabilities instead of words, letting it act as a judge in cases that would otherwise need a Fable-level model while running 25x faster and costing 600x less. Replit CEO Amjad Masad's response is a research question: if your output domain is known in advance, why not just train a model to produce logprobs over enums.

**4. The tooling substrate is shifting under agents: MCP over CLI, and WebAssembly as the web's native path.** Thariq, who works on Claude Code at Anthropic, says he did not expect it but now thinks "MCPs are better than CLIs for most integrations," because models have gotten much better at tool calling, tools can be deferred, and MCP is now stateless, with a suggestion to add params like query when an agent needs to compose or filter data. Rauch notes that Safari 27 supports JSPI, a WebAssembly capability that lets synchronous native code suspend on an async Promise, and that libfx now uses the browser's built-in fetch stack to make API calls. He also formally introduced Vercel Labs as Vercel's in-public research arm, with 247 million downloads behind it.

**5. Agents are landing inside mainstream business software and education.** Claude's integration with Salesforce is now in beta, bringing accounts, opportunities, and pipeline into Claude alongside 37 pre-built sales skills. The Claude Blog adds that Claude for Small Business now ships 43 workflows and 27 new integrations, including Shopify, Salesforce, TikTok, Atlassian, Zoom, Xero, Gusto, Square, Stripe, and Zapier, and has been installed more than 900,000 times since May. Google VP Josh Woodward highlights Gemini Notebook updates for students, including live spoken Q&A with class materials in about 100 languages and audio notes that save automatically into the chosen notebook.

**6. Trust, work slop, and capital discipline are the human and financial edge of the same shift.** Levie observes the asymmetry that people use AI for their own brainstorms but quietly question whether a colleague's AI-assisted deck means that colleague can still be trusted to execute. Nikunj Kothari, a partner at FPV Ventures, warns founders who assume "the money spigot will magically flow," arguing capital is a weapon for acceleration and that every company needs a default path that survives a downturn. On the other side of that ledger, Aditya Agarwal of SPC celebrates Profound's $180M Series D and $1.8B valuation, and Y Combinator President and CEO Garry Tan says capydotai with GStack/GBrain finished a day's worth of issue and PR fixes in about half the time using the same frontier models.

## X / Twitter

### Josh Woodward: VP, Google

Google VP Josh Woodward highlights new Gemini Notebook features for students, and names his two favorites: a live, spoken Q&A with your class materials in about 100 languages, and the ability to record lectures and notes on the go, with audio notes saving automatically into your chosen notebook. He also notes that university students can still get a free Google AI Plan in more than 140 countries for bigger limits and access to more Google products.

- [Josh Woodward on Gemini Notebook updates for students](https://x.com/joshwoodward/status/2099921866014306633)

### Peter Yang: Practical AI tutorials and interviews

Peter Yang, who writes practical AI tutorials and interviews for busy people, passes along the solopreneur advice he gave the Grok bot team: design your business so you can spend more time doing work you actually enjoy. Three months into working full time on his own, his argument is that there will always be choices that could make more money, but if those choices leave you doing work you do not enjoy, then that defeats the purpose of becoming a solopreneur in the first place, so delegate the boring work to your bots or simply do not do it.

In a follow-up thread, he shares the use cases readers sent back after he handed out bot codes: finding leads, drafting outreach, and turning wins into case studies; building a competitor comparison matrix with sources; monitoring hundreds of ad accounts and catching broken signup and payment flows; watching Jira, flagging blockers, and drafting the weekly status update; triaging support tickets and escalating with full context; regularly testing a hotel's booking flow so booking errors get caught; automating paperwork and back-office workflows for an electrical contracting business; monitoring AI builders on X, verifying sources, and turning wins into hooks and scripts; and building an AI research desk that turns noise into a daily brief.

- [Peter Yang on solopreneur advice for the Grok bot team](https://x.com/petergyang/status/2099968897323778416)
- [Peter Yang on the bot use cases readers shared](https://x.com/petergyang/status/2100027487681953834)

### Thariq: Claude Code, Anthropic

Thariq, who works on Claude Code at Anthropic, says he was not expecting things to go this way, but he now thinks MCPs are better than CLIs for most integrations. His reasoning: models have gotten much better at tool calling, tools can now be deferred, and MCP is stateless. His practical tip is that if you need to compose or filter data, add a parameter like query to your MCP tools.

- [Thariq on MCP versus CLI for integrations](https://x.com/trq212/status/2099958388230873165)

### Amjad Masad: CEO of Replit

Replit CEO Amjad Masad responds to a demo he calls cool with a research question: if your output domain is known in advance, why not just train a model to produce logprobs over enums?

- [Amjad Masad on training models to produce logprobs over enums](https://x.com/amasad/status/2100056178705514703)

### Guillermo Rauch: CEO of Vercel

Vercel CEO Guillermo Rauch formally introduces Vercel Labs, the home for Vercel's in-public research and experimentation arm. With 247 million downloads behind the company, he says the goal is to share, also in public, what Vercel is supporting, what it is researching, and what experiments did not pan out, crediting ctatedev and cramforce for shaping the initiative.

On model choice, Rauch argues that "the future is multi-model," and that trying to hide the choice confuses and hurts customers, who then cannot participate in the upside of the most exciting market competition of our times or master the best tool for the job.

On the web platform, he notes that Safari 27 supports JSPI, a WebAssembly capability that lets synchronous native code suspend on an async Promise, and that libfx uses the browser's built-in fetch stack to make API calls. His expectation is that as more code goes native, WebAssembly will play a huge role in the future of the web.

- [Guillermo Rauch on introducing Vercel Labs](https://x.com/rauchg/status/2099911447598059812)
- [Guillermo Rauch on the multi-model future](https://x.com/rauchg/status/2099905740505055680)
- [Guillermo Rauch on WebAssembly, JSPI, and libfx](https://x.com/rauchg/status/2099974859023683975)

### Aaron Levie: CEO of Box

Box CEO Aaron Levie writes that there is a massive chasm between the power of AI models and the ultimate workflows enterprises are trying to automate, and that this gap is the opportunity for the applied AI layer to fill. Filling it means connecting the intelligence to workflows, often reengineering processes, aggregating the right context and data, allowing for the right human-in-the-loop experiences, driving change management, doing domain-specific evals, and managing the security and governance of the data and process. He expects this layer to emerge in every vertical and horizontal category, and argues that even as models improve at incredible rates the layer still has to exist and may become even more important, because greater capability enables even more complex tasks to be tackled and amplifies the challenges if you do not do this well.

- [Aaron Levie on the applied AI layer](https://x.com/levie/status/2099976021311398230)

### Garry Tan: President & CEO of Y Combinator

Y Combinator President and CEO Garry Tan says he has started using capydotai with GStack/GBrain on fix waves for outstanding issues and pull requests, and that it did what would have taken a day with raw Codex or Claude Code in about half as much time, using the same frontier models. His verdict: "I'm amazed." He also offers a short prediction on the model race, writing that he thinks Muse is going to win.

- [Garry Tan on capydotai speeding up issue and PR fixes](https://x.com/garrytan/status/2099964487667454097)
- [Garry Tan on Muse winning](https://x.com/garrytan/status/2099980972641124629)

### Nikunj Kothari: Partner at FPV Ventures

Nikunj Kothari, a partner at FPV Ventures, says he is meeting one too many founders who think the money spigot will magically flow and that the next round will happen no matter what. His argument is that capital is a weapon for acceleration that makes a well-run company unbeatable, but that a company so dependent on it can face not so great consequences in a simple downturn. He has been sharing with founders the need to figure out the default path that ensures survival and a great self-fulfilling business, then to model scenarios for abundant or scarce capital, closing with a reminder that "the only constant is change and we don't know how capital markets evolve in the next 6-18 months."

- [Nikunj Kothari on capital as a weapon, not a safety net](https://x.com/nikunj/status/2100008917980102863)

### Dan Shipper: CEO of Every

Every CEO Dan Shipper says his company almost never tests new foundation models, but has been testing one for about a week and finds it "pretty wild," the kind of thing that will be obviously indispensable in 6-12 months. The difference is that it does not produce words as output, it produces probabilities, which lets it act efficiently as a judge in cases where you would need a Fable-level model, while in Every's testing running 25x faster and 600x lower priced. He points readers to a vibe check by hammer_mt on Every.

- [Dan Shipper on a probability-output model as a cheap judge](https://x.com/danshipper/status/2099947471518474522)

### Aditya Agarwal: General Partner at SPC

Aditya Agarwal, a general partner at SPC, explains what the firm saw in Profound before there was a Profound to see. The company is now worth $1.8B, one third of the Fortune 100 runs on it, and it has become the fastest-growing AI marketing platform. He notes that founders thejamescad and dbabbs met at SPC, an Uber maps engineer and a founder with no college degree, that the partnership formed before the idea, and that SPC has invested in every round since the beginning. He congratulates the team on a $180M Series D co-led by Sequoia and Kleiner Perkins, with participation from Lightspeed, Khosla Ventures, Saga Ventures, Evantic Capital, and SPC.

- [Aditya Agarwal on Profound's $180M Series D](https://x.com/adityaag/status/2099939685657141257)

### Sam Altman: CEO of OpenAI

OpenAI CEO Sam Altman teases the week ahead, writing that there is a big ship this week and then more for DevDay.

- [Sam Altman on a big ship this week ahead of DevDay](https://x.com/sama/status/2099872600977760451)

### Claude: Anthropic's Claude

Claude announces that Salesforce in Claude is now available in beta. It brings accounts, opportunities, and pipeline into Claude with 37 pre-built sales skills, so users can prep a call, review a deal, create a pipeline dashboard, or send a forecast without leaving the conversation.

- [Claude on Salesforce in Claude entering beta](https://x.com/claudeai/status/2099876514330206578)

## Podcast

### Training Data: Box's Aaron Levie: On Reinventing Yourself in the AI Age and Enterprise Diffusion

The Takeaway: The money in AI is not in the model alone but in the unglamorous work of wiring intelligence into how enterprises actually operate, and that work will take longer than Silicon Valley expects.

Aaron Levie, the founder and CEO of Box, has spent two decades selling unstructured content management to large organizations, which makes his read on AI diffusion unusually concrete. His central claim is that the argument over whether "model wrappers" can survive has been settled in favor of the application tier. Enterprises need a bridge between what a model can do and the workflow it has to live inside, and that bridge is deep: it requires connecting to other data systems, reengineering business processes, keeping a human in the loop for the moments that matter, managing change, and proving accuracy with domain-specific evals. "Probably a trillion dollars has been bet on basically one two outcomes," he says, and the bet now looks like the bridge is vast rather than limited.

Why coding agents spread so fast while everything else has not is the sharpest part of his analysis. For most of the world, code is a utility whose value is almost entirely captured in the text it produces, the labs benchmark against it daily, and every engineer can fix a broken MCP server without calling IT. Knowledge work offers no equivalent. A sales rep is rate-limited by whether a customer replies or has budget, and most enterprises have no "just give us your GitHub" moment because their data sits in legacy file shares and on-prem systems with access controls agents cannot navigate. Hence his prediction: "in five years from now, I would bet, like, 90% of all tokens in the enterprise are things that a user never kicked off, and they just see a result."

His advice to systems of record is to do two things at once: build an agent provably ten to twenty points better than any off-the-shelf agent at using your product, and go headless so Claude, ChatGPT, and other platforms can reach you through APIs and MCP. He is equally candid about the cultural mess AI creates, noting that people happily use AI for their own brainstorms while quietly wondering whether a colleague's AI-assisted deck means that colleague can still be trusted to execute. On open weights, his read is that adoption is "higher than people think, lower than what enterprises actually want, and much, much, much, much, much lower than what it'll be in five years."

- [Training Data: Box's Aaron Levie: On Reinventing Yourself in the AI Age and Enterprise Diffusion](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8)

## Blog

### Claude Blog: Claude for Small Business launches new workflows, integrations, and training programs

Claude for Small Business now includes 43 workflows and 27 new integrations with tools small businesses already use, including Shopify, Salesforce, TikTok, Atlassian, Zoom, Xero, Gusto, Square, Stripe, and Zapier. The new workflows extend Claude from running the back office to growing the business, and they arrive with a fall schedule of free in-person workshops and partner webinars for owners who want help getting started. Anthropic launched the product in May as a set of connectors and ready-to-run workflows, and says it has since been installed more than 900,000 times; original and continued partners include Intuit Quickbooks, PayPal, HubSpot, Canva, Docusign, Google Workspace, and Microsoft 365.

The release is shaped by what owners asked for. On the spring Claude SMB Tour, more than 1,000 owners in 10 cities said what they wanted Claude to take on next, and about a third asked for help growing the business, from generating leads and answering inbound inquiries to writing proposals, while many wanted day-to-day reporting handled for them. The tour returns this fall with free workshops in 10 US cities, more than 150 organizations trained as Approved Claude SMB Trainers will run over 750 workshops in their own communities, and 14 integration partners are hosting free webinars about their connectors.

The customer examples are the clearest evidence of the time being reclaimed. "What used to take me 120 hours now takes me five minutes," says Pedro Rubio, founder and CEO of Blackfyre GovCon in Washington, D.C. Cara Roellgen, Director of Strategy and Innovation at KBSO Consulting in Carmel, Indiana, frames it as an equalizer: "I really see Claude as an equalizer for small businesses, where we can do stuff as big as a 100 person, 200 person firm now." Garrett French, owner of Driller Design Co. in Tulsa, Oklahoma, describes an agent that checks the CRM at 6:00 am, prioritizes the to-do list, and sends out an email called the daily briefing.

- [Claude Blog: Claude for Small Business launches new workflows, integrations, and training programs](https://claude.com/blog/claude-for-small-business-launches-new-workflows-integrations-and-training-programs)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
