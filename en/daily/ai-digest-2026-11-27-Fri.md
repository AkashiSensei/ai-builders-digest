[English](./ai-digest-2026-11-27-Fri.md) | [中文](../../zh/daily/ai-digest-2026-11-27-Fri.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-11-27-Fri.md)

---

# AI Builders Digest

## Reader's Briefing

The loudest assumption in AI right now is that the race is inevitable. Ryo Lu, a designer who worked on Cursor, Notion and Stripe and has built startups, argues the opposite: a race is made of decisions, with someone approving each budget and each next model, and calling it inevitable is how people stop having to answer for those choices. He describes how the work has flipped from driving every detail to describing an outcome and watching it come back finished, and warns that recursive self-improvement could take us to a point where nobody is driving. His counterweight is deliberately unproductive time, drawing on Zhuangzi and his move to Taipei to argue that unplanned, "useless" experiences are worth protecting and that a master slows down at the hardest knot ([tweet](https://x.com/ryolu_/status/2126382660780167304)).

The enterprise side of AI has a diffusion problem that looks like success. Box CEO Aaron Levie said most people, and even large organizations, get stuck with the use cases that first wowed them and have little incentive to move on to full agents or agent swarms that can handle ambiguous work in the background. The blocker is not just model quality but the unglamorous architecture around it: system work, data pipelines, MCPs, security, and then redesigning the actual workflow. That gap explains both the upside for organizations that figure it out early and the boom in services and forward-deployed engineering for everyone else ([tweet](https://x.com/levie/status/2126389098227376238)).

Revenue quality is becoming a bigger story than revenue growth. Nikunj Kothari, a partner at fpvventures, called out startups that "resell" compute and count it as revenue even when compute is not their primary business, folding low-margin or negative-margin activity into a tidy ARR number. He traces the pattern from GMV-like revenue to inference at negative gross margins to straight compute resale, and argues that naive investors accept it because it lets deals clear investment committees while seed investors celebrate markups. His conclusion: "zero shot this ends well" ([tweet](https://x.com/nikunj/status/2126326428522442812)).

Agents are being sold as an economic accelerant, but the interesting question is how they will be measured and compared. Matt Turck, a VC at FirstMark Capital and host of the MAD Podcast, argued that agents expand what one person can finish in a day: his Thanksgiving example added emailing electricians and Black Friday shopping to the usual food coma and Netflix, and he said the effect multiplied across millions of people is gigantic ([tweet](https://x.com/mattturck/status/2126477464947892367)). On the model side, Thariq, who works at OpenAI and formerly worked on Claude Code at Anthropic, said models should be scored more like an RPG stat sheet than a leaderboard, then compared Claude and Codex on the same image-generation prompt: Claude showed more creativity and endurance, while Codex followed the spirit of the request better, which he framed as wisdom and alignment ([tweet](https://x.com/trq212/status/2126386932989210714)) ([tweet](https://x.com/trq212/status/2126386934918651919)) ([tweet](https://x.com/trq212/status/2126386936579600522)).

The exponential curves that make AI progress feel unstoppable are useful in one place and misleading in another. Every CEO Dan Shipper wrote that they are an effective way to measure capabilities inside a lab, but nonsense when used to predict the future of human work. The graphs can inspire awe, fear and foreboding, yet the shape of a benchmark curve does not map cleanly onto how jobs, teams and organizations actually change ([tweet](https://x.com/danshipper/status/2126397711033438535)).

The market for AI training data has quietly become a high-end services business. Gabe Greenberg, CEO of G2I, says his company went from about $15 million in revenue last year to roughly $100 million this year, profitable and without VC backing, selling human data and computer-use environments to five or six frontier labs. The work has shifted from thousands of mid-level engineers doing gig-like labeling to smaller teams of staff-level engineers building complex datasets with taste, and the labs now pay for quality, gap analysis and partnership rather than a 20 percent discount. Greenberg's advice for task design is a useful calibration rule for anyone building evals: tasks should be just beyond what the model can do today, because too hard turns them into evals and too easy makes them worthless ([episode](https://www.youtube.com/@LatentSpacePod)).

## X / Twitter

### Thariq

Thariq, who works at OpenAI and formerly worked on Claude Code at Anthropic, argued that models should be scored more like an RPG stat sheet than a leaderboard, and that the comparison is also a call for evals. He put Claude and Codex to the same image-generation prompt: Claude's result looked better and showed more creativity and endurance, while Codex stuck closer to the spirit of what he wanted, which he described as more wisdom and alignment. His point is that a single rank compresses away the traits that matter for a specific job ([tweet](https://x.com/trq212/status/2126386932989210714)) ([tweet](https://x.com/trq212/status/2126386934918651919)) ([tweet](https://x.com/trq212/status/2126386936579600522)).

### Aaron Levie

Box CEO Aaron Levie said the diffusion of AI is both a challenge and an opportunity. Most people will probably get stuck with the use cases that initially wowed them, and even large organizations can settle for early AI gains before deploying full agents or agent swarms that handle complex, ambiguous work. He attributed much of the gap to technical complexity: system work, data pipelines, MCPs and security, followed by the harder task of redesigning workflows. That is why he sees a large opportunity for organizations that figure it out early, and a massive services and forward-deployed-engineering opportunity for those that cannot ([tweet](https://x.com/levie/status/2126389098227376238)).

### Ryo Lu

Ryo Lu, a designer who worked on Cursor, Notion and Stripe and has built startups, published a long essay arguing that "the race is not inevitable." He described how the work has flipped from driving every detail to describing an outcome and watching it come back finished, and warned that recursive self-improvement could lead to a point where nobody is driving. He framed the race as a series of decisions rather than a force of nature, and said he moved to Taipei to slow down, drawing on Zhuangzi to argue that unplanned, "useless" experiences are worth protecting and that builders should slow down at the hardest knot ([tweet](https://x.com/ryolu_/status/2126382660780167304)).

### Matt Turck

Matt Turck, a VC at FirstMark Capital and host of the MAD Podcast, argued that agents will accelerate the economy by expanding what people can get done in the same amount of time. His Thanksgiving example: without agents, a food coma, Netflix, some work and exhaustion; with agents, all of that plus emailing electricians for a long-overdue home project and doing Black Friday shopping. Multiply that by millions of people, he said, and the economic impact is gigantic ([tweet](https://x.com/mattturck/status/2126477464947892367)).

### Nikunj Kothari

Nikunj Kothari, a partner at fpvventures, called out a pattern he says nobody in Silicon Valley wants to discuss: startups "reselling" compute to other companies and counting it as revenue, even when compute is not their primary business. He traced the progression from GMV-like revenue with low margins to inference at negative gross margins and now straight compute resale, all folded into a tidy ARR number so deals can clear investment committees and seed investors can celebrate markups. His conclusion was blunt: "zero shot this ends well" ([tweet](https://x.com/nikunj/status/2126326428522442812)).

### Dan Shipper

Every CEO Dan Shipper wrote that the exponential curves used to show AI progress are an effective way to measure capabilities inside a lab, but nonsense when used to predict the future of human work. He said the graphs can inspire awe, fear and foreboding, and his piece explains why the shape of a benchmark curve does not map cleanly onto how work actually changes ([tweet](https://x.com/danshipper/status/2126397711033438535)).

## Podcast

### Latent Space: Inside the AI Training Data Market — Gabe Greenberg, G2i

**The Takeaway:** The market for AI training data has moved from cheap gig labeling to a staff-engineer craft, and the frontier labs now pay for taste, context and partnership rather than raw volume.

Gabe Greenberg is CEO of G2I, which supplies human data and computer-use environments that frontier labs use to train models; his company also runs the React Miami and AIE Miami conferences. The business has scaled fast: G2I did about $15 million in revenue last year and roughly $100 million this year, according to Greenberg, profitable and without venture backing, with a real chance to triple again. It sells to only five or six customers, which sounds fragile until you see how much those labs need.

The work itself has changed shape. In 2023 and 2024, a single project might involve 6,000 mid-level engineers doing something close to gig work. Today the same budgets go to far fewer staff-level engineers building complex datasets with real taste. The hardest part is calibration: "if you make them too hard, they become evals... and if you make them too easy, they're worthless." Tasks have to sit a few steps beyond what the model can do now so they are trainable, and efficiently trainable.

That is why labs are buying partnerships, not commodity data. Greenberg says quality now beats a 20 percent price saving, and labs want gap analysis and people who understand their research bottlenecks. Data's share of compute budgets is moving from 2 to 3 percent toward 4 to 6 percent, with a case that it could rationally be much higher because better data means less wasted compute.

His next frontiers are robotics, 3D world models, CAD, mechanical engineering and chip design, plus more computer-use data. The recurring risk is operational: thousands of people in the vendor funnel create security, supply-chain and leakage problems that labs would rather not own. The lesson is that data is no longer a commodity you shovel into a model. It is a service business built on expertise, judgment and trust.

Source: [Latent Space](https://www.youtube.com/@LatentSpacePod)

## Blog

The validated feed contained no new qualifying blog posts for this run.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
