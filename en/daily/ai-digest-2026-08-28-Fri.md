[English](./ai-digest-2026-08-28-Fri.md) | [中文](../../zh/daily/ai-digest-2026-08-28-Fri.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-08-28-Fri.md)

---

# AI Builders Digest

## Reader's Briefing

**1. Claude puts a browser inside the agent loop.** Claude now has its own built-in browser in Cowork on the desktop app: when a task involves a website, a browser opens in the side panel and Claude navigates, fills forms, and finishes the job, with nothing to install and nothing shared from your own browser unless you choose. At the same time, Claude in Chrome is now generally available on all paid plans, and Claude can take autonomous actions in the browser; a safety classifier validates each action before it's performed. In the latest prompt injection evaluations, no attacks succeeded against Claude Sonnet 5, Opus 5, or Mythos 5 with probes plus the automatic approval classifiers, and only 0.3% of attacks succeeded against Fable 5, all in low-severity scenarios.

**2. Enterprises are racing to the applied AI layer.** Box CEO Aaron Levie reported Q2 revenue of $321.1 million, up 9% (11% in constant currency, the company's highest constant-currency growth in 14 quarters), and raised the full-year revenue target to $1.290 billion, driven by enterprise demand to get more out of unstructured data in the AI era. His argument: "the world's most advanced superintelligence is only as useful as the underlying enterprise knowledge it has access to," so enterprises need applied AI platforms that let them swap models and agents at any time while providing guardrails, comprehensive audit logs, and real-time security alerts.

**3. Post-training becomes the new frontier bet.** SPC general partner Aditya Agarwal announced that DeepCogito, a post-training research lab, is announcing a $43M Series A, with research focused on large-scale reinforcement learning and recursive self-improvement; its core method, iterated distillation and amplification (IDA), has been proven publicly on models from 3B to 600B+ parameters. FirstMark's Matt Turck called the NVIDIA-Hugging Face deal a "win-win-win" that makes NVIDIA officially the center of open source AI, and in a podcast guest spot argued that the best venture firm in the world might be NVIDIA and that apps are becoming labs faster than labs are becoming apps.

**4. Agent infrastructure gets faster and safer.** Vercel CEO Guillermo Rauch highlighted global compute for agents: multiple regions, failover, up to 10,000 concurrent sandboxes, and a 5,000 vCPUs/min ramp by default, plus a new vercel security check CLI that calls agents to improve security posture with human-in-the-loop or on a cron. Anthropic's Thariq, who works on Claude Code, shipped a SendFeedback tool so users can have Claude draft and approve feedback, and flagged that several customers are being targeted by fraudulent requests.

**5. The culture war over AI sharpens.** Zara Zhang argued that most PR teams at large companies exist to block real marketing and branding, and that people apply a double standard to AI writing: "it's fine if I use it; it's not fine if YOU use it." Dan Shipper calls this a "definite golden age for polymaths and philosophers," while Peter Steinberger asks "maybe it is a bubble?" and notes that Codex's visualization feature "got really good."

## X / Twitter

### Claude
Claude announced that it now has its own built-in browser in Cowork: when a task involves a website, a browser opens in Cowork's side panel, and Claude navigates, fills forms, and finishes the job. There's nothing to install; the browser lives in the desktop app and stays separate from your own browser and logins, rolling out over the next week on the desktop app for all paid plans. For users who prefer their own browser, Claude in Chrome is now generally available on all paid plans and remains the default for existing users.

- [Claude on the built-in browser in Cowork](https://x.com/claudeai/status/2092755571455758427)
- [Claude on the desktop app rollout](https://x.com/claudeai/status/2092755573183828193)
- [Claude on Claude in Chrome GA](https://x.com/claudeai/status/2092755574563741871)

### Aaron Levie: CEO of Box
Levie shared Box's Q2 results and his thesis on the applied AI layer: revenue reached $321.1 million for the quarter, up 9%, or 11% in constant currency (the highest constant-currency growth in 14 quarters), and the company raised its full-year revenue target to $1.290 billion on the back of enterprise demand to transform in the AI era. He argues that "the world's most advanced superintelligence is only as useful as the underlying enterprise knowledge it has access to," and that the bulk of corporate knowledge, from contracts to financial documents to product roadmaps, lives in unstructured data. As AI agents interact with enterprise data, he says, companies will need applied AI platforms with robust guardrails, comprehensive audit logs, and real-time security alerts, plus the ability to swap models and agents on their workflows at any time.

- [Aaron Levie on Box Q2 and the applied AI layer](https://x.com/levie/status/2092702955292230100)

### Guillermo Rauch: CEO of Vercel
Rauch spotlighted global compute for agents now available through Vercel: multiple regions, failover, up to 10,000 concurrent sandboxes, and a 5,000 vCPUs/min ramp by default, with more regions to come. He also announced a security dashboard alongside a vercel security check CLI, which, much like is-agentic, lets you call on agents to improve your security posture with human-in-the-loop or run in crons.

- [Guillermo Rauch on global compute for agents](https://x.com/rauchg/status/2092735785460277627)
- [Guillermo Rauch on the security check CLI](https://x.com/rauchg/status/2092621371914482026)

### Thariq: Claude Code at Anthropic
Thariq shipped a change that gives Claude a SendFeedback tool: instead of hitting /feedback and writing up a report, users can tell Claude to draft and approve it, which he says helps the team improve and understand problems. He also flagged that several customers are being targeted by fraudulent requests, praised the work Stripe is doing to help, and noted such attacks hurt everyone's ability to provide usage to legitimate users.

- [Thariq on the SendFeedback tool](https://x.com/trq212/status/2092696449616376140)
- [Thariq on fraudulent requests](https://x.com/trq212/status/2092729394565657010)

### Aditya Agarwal: General Partner at SPC
Agarwal announced that DeepCogito, a post-training research lab, is announcing a $43M Series A. He argues the AI frontier will be determined by post-training, and that the lab's research focuses on large-scale reinforcement learning and recursive self-improvement, with iterated distillation and amplification (IDA) as the core method, proven publicly on models from 3B to 600B+ parameters. SPC is backing the founders, who have known each other for 14 years, alongside Benchmark, TQ Ventures, Atreides Management, Nexus Venture Partners, and Zscaler.

- [Aditya Agarwal on DeepCogito's Series A](https://x.com/adityaag/status/2092679288869019700)

### Matt Turck: VC at FirstMark
Turck called the NVIDIA-Hugging Face deal "truly a win-win-win": NVIDIA becomes officially the center of open source AI with Nemotron and now Hugging Face, Hugging Face scores a huge win and gets "the perfect home," and open source AI wins. In a guest spot on a show hosted by Dan Nathan, he covered why the best venture firm in the world might be NVIDIA, the "hyper power law," why apps are becoming labs faster than labs are becoming apps, RSI and "building God," AI bubble versus duration mismatch concerns, and learning to stop underestimating China.

- [Matt Turck on NVIDIA and Hugging Face](https://x.com/mattturck/status/2092808287280329097)
- [Matt Turck on his guest appearance](https://x.com/mattturck/status/2092688916969095587)

### Zara Zhang: Builder
Zhang argued that most PR teams at large companies exist in order to block real marketing and branding, calling it ironic that a function designed to enhance a company's brand ends up being antithetical to it. She also called out a double standard in AI writing: many people seem to apply the logic of "it's fine if I use it; it's not fine if YOU use it."

- [Zara Zhang on PR teams](https://x.com/zarazhangrui/status/2092774923320369394)
- [Zara Zhang on the AI writing double standard](https://x.com/zarazhangrui/status/2092773720112988366)

### Peter Steinberger: OpenClaw + OpenAI
Steinberger noted that Codex's visualization feature "got really good," and, with a contrarian jab at the AI hype cycle, asked "maybe it is a bubble?"

- [Peter Steinberger on Codex visualization](https://x.com/steipete/status/2092822007843061823)
- [Peter Steinberger on the bubble question](https://x.com/steipete/status/2092756010280853815)

### Dan Shipper: CEO of Every
Shipper observed that this is a "definite golden age for polymaths and philosophers," a useful antidote to epistemic despair, calling it an incredible time.

- [Dan Shipper on the golden age for polymaths](https://x.com/danshipper/status/2092636264902148262)

## Podcast

### AI & I by Every: A $10B Hedge Fund's AI Playbook (Best of the Pod)

The Takeaway: Making AI fluency a firm-wide, non-negotiable requirement, not a perk for the curious, is how a ~$10B hedge fund plans to capture the edge before its competitors do.

Will, the CEO, CIO, and managing partner of Walleye, a hedge fund managing close to $10 billion with about 400 employees, is an unlikely AI evangelist. He's a math PhD who started his career writing code for algorithmic strategies, so machines doing financial work is nothing new to him. What changed, he argues, is that large language models made these tools genuinely useful to non-technical people, especially on unstructured data, and firms that treat AI as optional will fall behind.

His proof is a firm-wide email titled "AI at Walleye, a challenge to all of us." It opens: "Using ChatGPT is not cheating. That's a non applicable idea from academia. As a hedge fund, we should be ashamed to leave money on the table by ignoring tools that make us faster, smarter, and more effective." Not using these tools, he says, is like refusing to use the Internet in 1995 because it wasn't perfect.

The playbook is less about exotic models than culture and plumbing: mandatory AI training for every employee regardless of department, weekly internal AI meetups, leaderboards for tool usage, and incentives for anyone whose tool suggestion gets rolled out firm-wide. Around 75% of the firm now uses ChatGPT-class tools almost daily, and about a third use AI coding tools like Windsurf. Internally, nearly every Zoom and call is recorded into a data lake the team calls the Borg, and LLMs process risk-call transcripts to remember, surface insights, and even predict.

Will is adamant that tools don't replace thinking: "These tools don't negate the necessity to think. If anything, they should just give you more time to think." His first principles are incentives, intellectual honesty, and measurement, and he keeps a daily AI-assisted journal because "you can't manage what you can't measure." AI, he insists, is fun, not scary, and leaders have a responsibility to prepare their people for what's coming next.

Source: https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

## Blog

### Claude Blog: Claude in Chrome is generally available
Claude in Chrome is now generally available on every paid Claude plan, and Claude can take actions autonomously in the browser instead of needing approval for every one. A safety classifier validates each action before it's performed to ensure it's safe and matches your request. The extension matters because many everyday tools connect to Claude, but internal dashboards, legacy systems, and vendor portals don't; Claude in Chrome lets Claude access those with your existing logins, viewing pages and doing things like reading and typing text, clicking links, navigating, and filling out forms.

The release leans on hardened prompt injection defenses. Claude is trained against a growing library of attacks, probes screen web content before Claude acts on it, and a classifier reviews every action against what you originally asked: "If the action doesn't match your request, it's blocked." In the latest evaluations using stronger attacks from professional red-teamers, with probes plus the automatic approval safety classifiers, no attacks succeeded against Claude Sonnet 5, Opus 5, or Mythos 5, and 0.3% of attacks succeeded against Fable 5, all manually verified as low-severity scenarios that Anthropic is working to mitigate. Claude in Chrome is available from the Chrome Web Store, Enterprise admins can limit it to approved domains, and it doesn't yet run on other Chromium browsers or on mobile.

- [Claude Blog: Claude in Chrome is generally available](https://claude.com/blog/claude-in-chrome-generally-available)

### Claude Blog: Claude gets its own browser in Cowork
Claude now has a browser built into Claude Cowork on the desktop app. When a task needs a website, a browser opens in the side panel and Claude navigates webpages, reads them, clicks, and types, so you can hand off the web part of the task and stay where you are: Claude can fill in a form, pull numbers from a dashboard, or work through a portal that has no connector. No extension, no setup, and nothing is shared from your own browser unless you choose.

It's Claude's browser, not yours: Claude never sees your tabs, bookmarks, or passwords, and you bring logins over site by site from Chrome, Edge, or Firefox on macOS and from Firefox on Windows and Linux, with banking, email, and single sign-on sites left out unless you include them. The built-in browser is for handing web tasks to Claude while you keep working; Claude in Chrome is for pages you already have open with accounts you're signed in to, and you can switch anytime in Settings → Cowork → Preferred browser. The same prompt injection safeguards as Claude in Chrome apply, though those measures "meaningfully reduce the risk but can't eliminate it," so Anthropic recommends starting on sites you trust. The rollout begins this week for Pro, Max, and Team plans in the desktop app on macOS, Windows, and Linux (in beta), and Enterprise admins can enable it today.

- [Claude Blog: Claude gets its own browser in Cowork](https://claude.com/blog/cowork-built-in-browser)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
