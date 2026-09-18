[English](./ai-digest-2026-09-18-Fri.md) | [中文](../../zh/daily/ai-digest-2026-09-18-Fri.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-09-18-Fri.md)

---

# AI Builders Digest

## Reader's Briefing

**1. Anthropic reworks Claude Code around persistent projects.** Anthropic's Claude Code team spent the day describing a new Projects experience. Boris Cherny says it changed not only how he interacts with Claude but how he codes: he stopped managing sessions, sends thoughts as they come, and Claude splits them into threads while the project remembers how he works. Cat Wu says Claude now coordinates all of a user's sessions, lets her fire off a batch of tasks and operate at a higher level of abstraction, gives aggregated status updates on request, and keeps long-lived memory that evolves with use. Thariq describes the architecture as one agent per project that manages memory and spins off subagents, and says it can be asked to be proactive or to work on a schedule. The Claude account adds that every thread adds to and draws from shared memory and that the project library keeps user files and Claude-created files, with cloud threads that keep running offline but cannot yet reach local files or internal network tools.

**2. Google takes its agent pitch to the family.** Google Labs announced CC, an AI agent built for families to spend less time on logistics. Up to 5 members can join, mornings start with a shared "Your Day Ahead" brief email, schedules and to-dos autosync with a shared Google Calendar and Tasks, and families can coordinate in Google Chat to offload tasks like weekly meal plans and school supply lists. CC can also be delegated paperwork such as permission slips and forms, and it remembers what applies to everyone versus one person, from grocery lists to dietary restrictions. It is US-only for users 18 and over, with a waitlist or an upgrade path for existing CC. Josh Woodward, a Google VP, says his own family loves it.

**3. Agents are becoming the workload.** Box CEO Aaron Levie argues that agents already make up the majority of inference and will trend toward nearly all of it within a year or two, with the vast majority of tokens consumed by agents executing tasks in the background around the clock. He lists the work: reading every code change to secure software, processing data inside workflows, handling most recruiting and customer-prospecting research, reviewing event streams and logs, and running personal tasks. Replit CEO Amjad Masad draws the compute conclusion, writing that this is why we need a gazillion data centers, and that it is worth it.

**4. Software output is exploding, and deployment speed is the new scoreboard.** Vercel CEO Guillermo Rauch expects more software to be produced next year than in all of computing history. Vercel took 10 years to reach 1 billion deployments, then added 1.4 billion in the last 10 months, and he says deployment, upload, domain assignment and global propagation now take 1 second. The range runs from tiny, personal, even disposable artifacts like an HTML file, a report, a pricing calculator or a slide deck, up to sophisticated apps, agents and platforms. He also notes that an agent pressured to ship a hotfix can run `vercel --turbo --prod` and use the fastest available build machine.

**5. Builders are testing always-on agents and cheaper memory.** FPV Ventures partner Nikunj Kothari built nosugarforkids, a catalog of healthy snacks for kids, with a Claude agent that wakes once a day to check the catalog, prune dead products, find content ideas, check dataforSEO and Google Search Console, write and edit useful pieces without adding slop, and reach out to publications for backlinks. With zero backlinks and no social presence, he says the site has grown organically to about 6k impressions a day and 60 clicks. Y Combinator President and CEO Garry Tan highlights Memorable, which optimizes memory with embeddings instead of more tokens. OpenAI's Thibault Sottiaux, who works on Codex and ChatGPT, floats a multi-model experiment: getting Astra and Fable to agree on a perfect styleguide and hosting it somewhere with a web MCP.

**6. Safety and alignment stay on the agenda.** SPC General Partner Aditya Agarwal says Goodfire AI is the leading non-frontier-lab company working on alignment and safety, calls its approach the right way to solve the problem, and calls the work generationally important. Garry Tan makes the values question explicit, writing that we need alignment to humankind versus any other goal.

## X / Twitter

### Josh Woodward: VP, Google (Google Labs, Gemini app, Google AI Studio)

Josh Woodward pointed followers to the new CC family agent from Google Labs, saying his own family loves it. He also told people who are not yet using Gemini Notebook on their phone that they are missing out.

- [Josh Woodward: his family loves the new CC agent](https://x.com/joshwoodward/status/2100665648825483726)
- [Josh Woodward: Gemini Notebook on your phone](https://x.com/joshwoodward/status/2100616682431807860)

### Boris Cherny: Claude Code, Anthropic

Boris Cherny writes that Projects changed not only how he interacts with Claude but how he codes. He stopped managing sessions: he sends thoughts as they come, Claude splits them into threads, and the project remembers how he works, which is where a large part of his coding now happens. Projects are how he writes much of his code these days, and the new experience is rolling out now.

- [Boris Cherny: Projects changed how he codes](https://x.com/bcherny/status/2100669598995816511)
- [Boris Cherny: rolling out the new Projects experience](https://x.com/bcherny/status/2100639991244427490)

### Thibault Sottiaux: Codex and ChatGPT, OpenAI

Thibault Sottiaux floated a multi-model experiment rather than an announcement: has anyone tried to get Astra and Fable to agree on the perfect styleguide, and then host it somewhere with a web MCP. It reads as a prompt to builders already wiring agents into shared, hostable artifacts.

- [Thibault Sottiaux: Astra, Fable, and a web-hosted styleguide](https://x.com/thsottiaux/status/2100645454245720513)

### Cat Wu: Claude Code and Cowork, Anthropic

In the new Projects experience, Cat Wu says, Claude coordinates all of a user's sessions. She has used it every day because it lets her operate at a higher level of abstraction: she fires off a batch of tasks and moves on, Claude has context on everything she is working on and can give an aggregated status update whenever she asks, and it has long-lived memory that evolves as she uses it. The rollout runs over the coming weeks.

- [Cat Wu: Claude coordinates all of your sessions](https://x.com/_catwu/status/2100641163120423057)

### Thariq: Claude Code, Anthropic

Thariq describes Projects as bringing the architecture of Claude Tag to Claude Code: one agent per project that manages memory and spins off subagents for tasks. You can ask it to be proactive, to do things on a schedule, and he says it feels a lot nicer than juggling a bunch of sessions.

- [Thariq: one agent per project that manages memory](https://x.com/trq212/status/2100638355872706571)

### Google Labs: Google's home for its latest AI tools and experiments

Google Labs announced CC, an AI agent built for families to spend less time on logistics and more time together. You can add up to 5 members, start mornings with a shared "Your Day Ahead" brief email, autosync schedules and to-dos with a shared Google Calendar and Tasks, and coordinate in Google Chat to offload tasks such as crafting weekly meal plans or school supply shopping lists. CC can be delegated paperwork like permission slips and forms, and it remembers what applies to everyone versus what applies to one person, from family grocery lists and favorite restaurants to dietary restrictions and local timezones. Access is US only for users 18 and over, through the waitlist or by upgrading an existing CC.

- [Google Labs: CC, an AI agent built for families](https://x.com/GoogleLabs/status/2100653821907366366)

### Amjad Masad: CEO, Replit

Amjad Masad's reaction to the scale of agent-driven compute was blunt: "This is why we need a gazillion data centers (worth it)."

- [Amjad Masad: a gazillion data centers, worth it](https://x.com/amasad/status/2100829093923320083)

### Guillermo Rauch: CEO, Vercel

Guillermo Rauch expects more software to be produced next year than in all of the history of computing. Vercel took 10 years to reach 1 billion deployments, he says, then added another 1.4 billion in the last 10 months alone. Some of that will be tiny, personal and even disposable software, such as an HTML file with some JavaScript, a report, a pricing calculator or a slide deck, all the way up to sophisticated apps, agents and platforms. He says Vercel has brought the time to deploy, upload, assign a domain and globally propagate an artifact down to 1 second, including the global CDN, firewall, immutable deployments, domain assignment, observability and rollbacks. He also notes that an agent under pressure to ship a hotfix fast can now run `vercel --turbo --prod` and use the fastest available build machine.

- [Guillermo Rauch: more software next year than in all computing history](https://x.com/rauchg/status/2100698591417499972)
- [Guillermo Rauch: an agent can ship a hotfix with vercel --turbo --prod](https://x.com/rauchg/status/2100682030170489160)

### Aaron Levie: CEO, Box

Aaron Levie writes that agents already make up the majority of inference, and that this will quickly trend toward nearly all inference over the next year or two, with the vast majority of tokens used by agents executing tasks for us in the background around the clock. He expects agents to read every code change to secure software, process data inside workflows, handle a significant majority of the research that goes into recruiting and customer prospecting, review every event stream and log from every system, and execute tasks in our personal lives. The rate of new agents coming online that consume tokens is not slowing down, he adds, and new workflows are appearing that were not technically possible a month ago.

- [Aaron Levie: agents will soon be nearly all inference](https://x.com/levie/status/2100799668573946191)

### Garry Tan: President and CEO, Y Combinator

Garry Tan highlights Memorable, which found a way to optimize memory with embeddings instead of more tokens, and calls it a powerful new way to do memory. He also argues that alignment should be to humankind versus any other goal.

- [Garry Tan: Memorable optimizes memory with embeddings](https://x.com/garrytan/status/2100668489178456268)
- [Garry Tan: alignment to humankind versus any other goal](https://x.com/garrytan/status/2100636443127210112)

### Nikunj Kothari: Partner, FPV Ventures

Nikunj Kothari spent more than a year obsessed with self-driving companies, tried a lot of products that did not meet his bar, and built his own first experiment with Claude in the loop: nosugarforkids, a catalog of only healthy snacks for kids, with chat recommendations for school, lunches and snack boxes and a tier list built from nutrients. A Claude agent wakes up once a day to check the catalog for new additions, prune products that may be dead, find content ideas, check dataforSEO and Google Search Console for performance, write and edit useful pieces while trying not to introduce slop, and reach out to publications to get backlinks. Even with zero backlinks and no social presence, he says the site has grown organically to about 6k impressions a day and 60 clicks. He notes there is a full MCP and WebMCP for directing an agent toward the site.

- [Nikunj Kothari: nosugarforkids, built with Claude in the loop](https://x.com/nikunj/status/2100714665571737885)
- [Nikunj Kothari: an MCP and WebMCP for the site](https://x.com/nikunj/status/2100718806004064730)

### Aditya Agarwal: General Partner, SPC

Aditya Agarwal calls one approach the right way to solve alignment and safety, and says Goodfire AI is the leading non-frontier-lab company working on it. In his words, this is generationally important.

- [Aditya Agarwal: Goodfire AI and the right way to solve alignment](https://x.com/adityaag/status/2100746235426836708)

### Claude: Anthropic's AI assistant

Anthropic's Claude account explains how the new Projects work: a project builds over time, every thread adds to and draws from its shared memory, so Claude can remember that a release moved to Friday or who to ask before touching the billing service, and the project's library keeps the files you add and the ones Claude creates. Threads run in the cloud, so they keep working even when your computer is offline, but they cannot reach files or tools on your computer or your internal network yet, and local support is coming very soon. Existing projects on Pro and Max plans keep working as they do today and will be upgraded as the rollout expands across Claude.

- [Claude: a project builds over time with shared memory](https://x.com/claudeai/status/2100632684074549309)
- [Claude: threads run in the cloud](https://x.com/claudeai/status/2100632687316730327)
- [Claude: existing Pro and Max projects keep working](https://x.com/claudeai/status/2100632688625348890)

## Podcast

The validated podcast feed for this run contained no new qualifying episodes.

## Blog

The validated blog feed for this run contained no new qualifying posts.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
