[English](./ai-digest-2026-09-05-Sat.md) | [中文](../../zh/daily/ai-digest-2026-09-05-Sat.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-09-05-Sat.md)

---

# AI Builders Digest

## Reader's Briefing

**1. GPT-6 Astra hits general availability, ahead of schedule.** Sam Altman announces that GPT-6 Astra is now available to all Pro, Enterprise, and Business Premium users in Work/Codex and in the API, and hours later confirms Astra is out to all Plus and Business users with a "Happy building!" Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, says the rollout landed ahead of schedule and that OpenAI will run the full banked reset today for all Plus, Pro, and Business users, including accounts created or upgraded before 8pm PT.

**2. Astra is already paying off inside OpenAI and spreading to builder workflows.** Thibault Sottiaux says Astra was "probably our biggest competitive advantage" while it wasn't generally available, since internal productivity jumped enough for OpenAI to pull plans six months forward and ship them at DevDay instead of mid-next-year. Replit CEO Amjad Masad posts "Astra on Replit," Every CEO Dan Shipper has Astra running his office fantasy team and doing film study for the fantasy football draft, and tutorial builder Peter Yang wants a voice-first Codex app on Apple Watch, or maybe that is what the rumored OpenAI device does.

**3. Browsers are becoming agent infrastructure.** Anthropic makes Claude in Chrome generally available on every paid plan, letting Claude act autonomously in the browser behind probes and a safety classifier, and gives Claude Cowork a built-in browser in the desktop app. Vercel CEO Guillermo Rauch makes the case for WebMCP, arguing agents should "ride the existing WWW infrastructure," with pages exposing debugging tools directly to the agents testing them. Y Combinator's Garry Tan adopts Aside as his preferred AI browser and harness, saying it replaced a two-hour OpenClaw plus Slack setup in under three minutes and is now GStack's preferred remote session browser.

**4. The CPU returns to the center of AI compute.** Arm CEO Rene Haas argues on No Priors that the accelerator boom forgot that "something has to do the orchestration" of where tokens go, and that CPUs do it. He says 80% to 90% of Arm's engineers use AI daily, sees verification rather than design as AI's biggest payoff in chips, expects three to five more years of supply constraints with data-center build-out as the next bottleneck, and expects robotics to run on Arm from humanoid brains to fingertips.

**5. Building with AI: exercises, expectations, and honest wonder.** Meta's Madhu Guru suggests automating one workflow you know well this weekend to force yourself through end-to-end experience, MCPs and tools, human oversight, and evaluation, because "the only way to learn is to build." Aditya Agarwal admits that even understanding RL, inference-time scaling, and data-verification loops doesn't stop models from feeling like "total sorcery," and Zara Zhang cautions that most people perceive AI to be a better writer than it actually is.

## X / Twitter

### Sam Altman: CEO of OpenAI

OpenAI CEO Sam Altman announces that GPT-6 Astra is now available to all Pro, Enterprise, and Business Premium users in Work/Codex, and is available in the API, with rollout to Plus and Business users starting next. A few hours later he confirms Astra is now out to all Plus and Business users, telling builders "Happy building!"

- [Sam Altman on GPT-6 Astra availability](https://x.com/sama/status/2095973658867171733)
- [Sam Altman on Astra reaching Plus and Business users](https://x.com/sama/status/2096008528834244741)

### Thibault Sottiaux: Codex & ChatGPT, OpenAI

Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, says the team is "beyond happy" that Astra rolled out today ahead of schedule, and that OpenAI will do the full banked reset today for all Plus, Pro, and Business users, landing by end of day, including accounts created or upgraded before 8pm PT. In a separate post he credits Astra with being "probably our biggest competitive advantage" while it wasn't generally available: productivity jumped so much that OpenAI shifted some plans six months ahead and will ship them at DevDay instead of mid-next-year.

- [Thibault Sottiaux on Astra rolling out ahead of schedule](https://x.com/thsottiaux/status/2096035437299237298)
- [Thibault Sottiaux on Astra as OpenAI's competitive advantage](https://x.com/thsottiaux/status/2096101429832552872)

### Guillermo Rauch: CEO of Vercel

Vercel CEO Guillermo Rauch says he is "super bullish on WebMCP": much like Tesla FSD meeting the world where it is, agents need to ride the existing WWW infrastructure, and WebMCP makes that more efficient. He points to wins like Next.js dev pages exposing debugging tools directly to the agent in the specific tab it's testing, with page-specific context, instead of sifting through server logs or finding and configuring a separate MCP server. In that world, he argues, "fx + agent-browser is a complete web dev stack with zero loss in debugging depth." He also asserts that "AI software factories will yield bug-free, self-improving software."

- [Guillermo Rauch on WebMCP](https://x.com/rauchg/status/2096065378598441431)
- [Guillermo Rauch on AI software factories](https://x.com/rauchg/status/2095926173293572467)

### Garry Tan: President and CEO of Y Combinator

Y Combinator president and CEO Garry Tan calls the experience of using Aside as an AI harness "absolutely insane": setting up OpenClaw with Slack took him two hours, while Aside's harness with full integrations and browser integration did it in less than 3 minutes, with smart access control defaults. He also says GStack now uses the Aside browser as its preferred remote session browser for agents that need web access and credentials as you, calling Aside "the #1 absolute best way" he has found among AI agent tools, "an amazing browser," "great at credentials," and "an amazing harness and memory system in its own right."

- [Garry Tan on Aside as an AI harness](https://x.com/garrytan/status/2095971990645755941)
- [Garry Tan on GStack using the Aside browser](https://x.com/garrytan/status/2095948689823121872)

### Amjad Masad: CEO of Replit

Replit CEO Amjad Masad posts "Astra on Replit" in a quote tweet, and quips in another that "the singularity is here, it's just not evenly distributed."

- [Amjad Masad on Astra on Replit](https://x.com/amasad/status/2095986658185453928)
- [Amjad Masad on the singularity being unevenly distributed](https://x.com/amasad/status/2096022087035195647)

### Madhu Guru: Senior Director of AI at Meta

Madhu Guru, Senior Director of AI at Meta, suggests one practical thing to do this weekend to get better at building AI products: pick a workflow you know well, from your personal life or work, and automate the whole thing with AI, experimenting until you find a product you're comfortable with. The exercise forces you to think through what a great end-to-end experience looks like, how to use MCPs and tools, where humans should stay in the loop, and how to evaluate it, then keep expanding the ambition. "You'll learn more by doing this once than by reading about AI product building for a month. The only way to learn is to build."

- [Madhu Guru on the weekend AI-building exercise](https://x.com/realmadhuguru/status/2095907570540335174)

### Peter Yang

Peter Yang, who makes practical AI tutorials and interviews for busy people, suggests OpenAI should ship an app for Apple Watch where he can voice-dictate to his Codex threads and get voice replies, so he doesn't have to carry his phone around and feed his screen addiction, adding that maybe that is what the rumored OpenAI device does.

- [Peter Yang on an Apple Watch app for Codex](https://x.com/petergyang/status/2096086845159563476)

### Zara Zhang

Zara Zhang shares the observation that "most people perceive AI to be a better writer than it actually is."

- [Zara Zhang on perceptions of AI writing](https://x.com/zarazhangrui/status/2096082116828406233)

### Dan Shipper: CEO of Every

Every CEO Dan Shipper has put Astra to work on office logistics: he says Astra is running the Every office fantasy team, complete with a team name, and that he has Astra doing film study for the Every fantasy football draft.

- [Dan Shipper on Astra running the office fantasy team](https://x.com/danshipper/status/2095885899871449385)
- [Dan Shipper on Astra doing film study for the draft](https://x.com/danshipper/status/2095882683729490108)

### Aditya Agarwal: General Partner, South Park Commons

Aditya Agarwal, a general partner at South Park Commons, captures a familiar gap between understanding and experience: "I totally understand how RL, inference time scaling, modern data-verification loops work. Also Me: These models are total sorcery. There is no way that they should be able to do what they do."

- [Aditya Agarwal on models feeling like sorcery](https://x.com/adityaag/status/2095910036652577028)

### Swyx

Swyx says he is working on a massive Astra/Fable frontier-model AEO report, and was surprised that Claude recommends Latent Space when asked for the best AI newsletter or podcast.

- [Swyx on the frontier-model AEO report](https://x.com/swyx/status/2096095862732755342)

## Podcast

### No Priors: Redefining Chip Architecture with Arm CEO Rene Haas

The Takeaway: The AI boom did not retire the CPU; it made it the system's traffic cop, and Arm's CEO believes his company now sits at the center of AI compute, robotics, and a multi-year supply crunch.

Rene Haas, CEO of Arm and SoftBank Group International, joined the No Priors podcast to talk about why chip architecture is being redefined. Arm's core business is licensing CPU IP to the companies that build chips for smartphones, data centers, and cars. Last March it shipped its first physical product, the Arm AGI CPU, after Meta asked for a "general purpose agentic CPU" that no one else would supply. Haas describes the move as an evolution: first pure IP components, then "compute subsystems" (in his Lego analogy, Arm provides the blueprint for stitching everything together), then the chip itself, which forced Arm to build supply-chain capabilities its old licensing business never needed.

Haas is blunt about AI inside Arm. A chip design cycle runs 24 to 36 months, and most of that time goes to verification, validation, and debug, "and AI is really good at that." He estimates 80% to 90% of Arm's engineers use AI daily, and compares switching it off to limiting the internet to two hours a day in the 1990s: "The genie's out of the bottle and there's no stopping that." The immature areas are RTL generation and physical design and implementation, because models train on what is publicly available while much chip-design knowledge is proprietary; Arm is working with model makers to close that gap.

Haas also argues that as AI workloads shift from training toward inference, CPUs remain essential: "Something has to do the orchestration, arbitration decision around where those tokens go." He expects the constrained supply environment to last three to five years, with data-center build-out as the next bottleneck, and predicts factory automation, delivery, and distribution will be among the first domains automated by robots, with most humanoid "brains" already running on Arm. On industrial policy he is equally direct: "There is no downside from being the leader."

Source: https://www.youtube.com/@NoPriorsPodcast

## Blog

### Claude Blog: Claude in Chrome is generally available

Claude in Chrome is now generally available on every paid Claude plan, and Claude can take actions autonomously in the browser instead of needing approval for every one. A safety classifier validates each action before it is performed, checking it against what the user originally asked; if the action doesn't match the request, it is blocked. Trained probes also scan web content for prompt injection, the hidden instructions in web pages, emails, or documents that try to trick an AI agent into acting against the user's wishes. Anthropic says it trains Claude against a growing library of attacks from internal automated attackers, external red-teamers, and real-world monitoring.

On its latest evaluation, which uses stronger attacks from professional red-teamers, attacks that reached the model succeeded against Claude Opus 4.5 17.6% of the time and against Claude Opus 5 3.8% of the time before additional safeguards. With probes and the safety classifier enabled, no attacks succeeded against Claude Sonnet 5, Claude Opus 5, or Claude Mythos 5, and only 0.3% of attacks succeeded against Claude Fable 5, all manually verified as low-severity scenarios. Claude in Chrome works with your existing logins, which is how it reaches the tools that don't yet connect to Claude, such as internal dashboards, legacy systems, and vendor portals. Enterprise admins can manage it and limit it to approved domains in Organization Settings, and Anthropic notes it doesn't run on other Chromium browsers or on mobile yet.

- [Claude Blog: Claude in Chrome is generally available](https://claude.com/blog/claude-in-chrome-generally-available)

### Claude Blog: Claude gets its own browser in Cowork

Claude now has a browser built into Claude Cowork on the desktop app. When a task needs a website, a browser opens in the side panel and Claude navigates webpages, reads them, clicks, and types, so users can hand off the web part of a task, such as filling in a form, pulling numbers from a dashboard, or working through a portal that has no connector. It is Claude's browser, not yours: Claude never sees your tabs, bookmarks, or passwords, and you can bring your logins over site by site from Chrome, Edge, or Firefox on macOS and from Firefox on Windows and Linux, with banking, email, and single sign-on left out unless you choose to include them.

Anthropic frames the two options clearly: the built-in browser is for handing web tasks to Claude while you keep working, while Claude in Chrome is for the page you already have open with the accounts you're signed into. The built-in browser runs the same prompt-injection safeguards as Claude in Chrome; Anthropic says those measures meaningfully reduce the risk but can't eliminate it, so it recommends starting on sites you trust. It rolls out this week to Pro, Max, and Team plans in the Claude desktop app on macOS, Windows, and Linux, on by default, and enterprise admins can enable it for their organizations today. The browser lives in the desktop app, and from the web or your phone, Claude can still drive it as long as your desktop app is open and online.

- [Claude Blog: Claude gets its own browser in Cowork](https://claude.com/blog/cowork-built-in-browser)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
