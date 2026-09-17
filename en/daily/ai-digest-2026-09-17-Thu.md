[English](./ai-digest-2026-09-17-Thu.md) | [中文](../../zh/daily/ai-digest-2026-09-17-Thu.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-09-17-Thu.md)

---

# AI Builders Digest

## Reader's Briefing

**1. Claude Cowork and chat merge into one Claude, and Docs, Slides, and Design move into the conversation.** Anthropic shipped the consolidation on September 16. Boris Cherny, who works on Claude Code at Anthropic, frames it as the sequel to two proofs: Claude Code showed AI could do real work instead of just answering questions, and Cowork showed knowledge workers could hand over a brief and come back to finished files. The new direction is one Claude that carries context across everything you are working on. Cat Wu says the trigger was user feedback, because people did not want to choose a product for every task, and Claude now routes between a quick answer and deeper agentic work on its own. Users keep the final say and can still stop, redirect, or change how much effort Claude spends.

**2. The new artifacts are documents, decks, and designs, reachable from any conversation.** Claude Docs, Claude Slides, and Claude Design are in beta on paid plans and appear inside chat, so a one-pager can become a deck with a matching visual without switching tools. Anthropic researcher Alex Albert calls the resulting UX much better than chat or Cowork on their own. The official Claude account notes that Cowork users keep their chats, projects, artifacts, connectors, and skills exactly where they left them. The Claude Blog example is a weekly report due at noon: hand over the brief before you leave, check progress from your phone, and come back to a doc and slides that already match. Roll-out starts on Pro and Max, with Team and Free to follow.

**3. OpenAI signals a slip this week and teases a model called Astra.** OpenAI CEO Sam Altman told followers that "the main thing i was excited about launching this week will be next week instead," adding that he thinks it is worth the wait. Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, teased Astra with four checks: fast, frontier, efficient, and for everyone. Neither post names a ship date or a benchmark, but together they set expectations for the next OpenAI release.

**4. The agent substrate keeps shifting: safety reviewers on cheap models, and tools shaped to fit the job.** Vercel CEO Guillermo Rauch says default mode in fx is now auto, with a safety reviewer analyzing every command. That reviewer runs on GPT Luna today, and he says Jev is up to 18x faster at p95 and more accurate as a result; it is coming to Vercel AI Gateway and is likely the new default. Anthropic's Thariq updates his own earlier advice: bash is no longer all you need if the goal is reliable tool calling, sandboxes plus bash still fit code generation and execution, and tools should be shaped the way you want them instead of hiding behind a layer of indirection. He says Claude Managed Agents gets the balance right because the sandbox is optional.

**5. The enterprise opportunity is fast, cheap judgment, and safety treated as a feature.** Box CEO Aaron Levie writes that there are entire universes of AI innovation that were not even on most radars, and that processing information insanely quickly at crazy low cost is huge for enterprise tasks. Data classification, routing decisions inside a workflow, judgment on a particular domain problem, and quick calls about safety or security are the gates in a large number of processes, which makes them prime targets for agentic workflows. Madhu Guru, a senior director of AI at Meta, makes the design point bluntly: safety and security are features of your AI product and model, not guardrails imposed from the outside.

**6. Builders are voting with their own workflows, and not always in Claude's favor.** Builder Zara Zhang says she is using Claude less because the way it speaks has become insufferable, constantly showcasing sophistication instead of communicating a point. FPV Ventures partner Nikunj Kothari has spent months on a "Home" agent built on Nous Research that he and his wife use daily as a shared bot, and says he cannot recreate its granularity and control elsewhere. Practical AI author Peter Yang runs his entire podcast with eight reusable AI skills, arguing skills still matter because they encode his specific editing and browser instructions. Y Combinator President and CEO Garry Tan says he can use any harness and still get the same personality and full memory from his personal AGI, while SPC general partner Aditya Agarwal writes that great ideas rarely emerge from isolation.

## X / Twitter

### Boris Cherny: Claude Code, Anthropic

Boris Cherny of Anthropic's Claude Code team frames the Cowork-and-chat merge as the next step after two proofs: Claude Code showed AI could do real work rather than just answer questions, and Cowork showed knowledge workers could hand over a brief and come back to finished files. The direction, he writes, is one Claude that carries context across everything you are working on, simple enough for everyone to reach its full capabilities. He has used the new experience daily for weeks and calls it simpler, faster, and more powerful, with a slow roll-out to keep it fast and reliable. He also highlights that Claude Docs, Claude Slides, and Claude Design are now in every conversation, so a request for a presentation returns something you can open, edit, and export as PowerPoint or PDF with no separate tool to navigate to.

- [Boris Cherny: chat and Cowork become one Claude](https://x.com/bcherny/status/2100259951398789487)
- [Boris Cherny: Docs, Slides, and Design in every conversation](https://x.com/bcherny/status/2100260544087535639)

### Cat Wu: Claude Code and Cowork, Anthropic

Cat Wu, who works on Claude Code and Cowork at Anthropic, explains the reasoning behind the merge: many users said they did not want to choose which Claude product to use for any task, and as the models became more capable the company found Claude could handle the routing itself. Based on the prompt, Claude decides whether to give a quick answer or do deeper agentic work, and what kind of output best fits the task. She stresses that users stay in control the whole time and can stop, redirect, or exert finer control over Claude's effort, with a slow roll-out over the coming weeks.

- [Cat Wu: merging Cowork and chat, and integrating Design](https://x.com/_catwu/status/2100260655312089562)

### Alex Albert: Research, Anthropic

Anthropic researcher Alex Albert says the team did an amazing job with the merge and that the resulting UX feels much better than chat or Cowork did on their own. He adds that the new slides, docs, and design integrations work very well.

- [Alex Albert: the merged UX is better than chat or Cowork alone](https://x.com/alexalbert__/status/2100295757953917120)

### Claude: Anthropic

The official Claude account walks through the practical details. Decks, docs, and designs can now be made inside a conversation: draft a one-pager in Claude Docs, turn it into a deck with Claude Slides, and mock up a matching visual in Claude Design, all from one place. You can fix a line in the doc yourself, leave a comment for Claude on a slide, or select an element and move it, then present straight from Claude, export in the format you already use, or share everything at one link. Cowork users keep their chats, projects, artifacts, connectors, and skills, and the three new surfaces are in beta on all paid plans.

- [Claude: make decks, docs, and designs in your conversation](https://x.com/claudeai/status/2100258492590207079)
- [Claude: edit, export, and share from one place](https://x.com/claudeai/status/2100258494221812123)
- [Claude: Cowork work carries over, Design, Slides, and Docs in beta](https://x.com/claudeai/status/2100258495543071016)

### Thibault Sottiaux: Codex and ChatGPT, OpenAI

Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, teased a model called Astra with four claims: fast, frontier, efficient, and for everyone.

- [Thibault Sottiaux: Astra is fast, frontier, efficient, and for everyone](https://x.com/thsottiaux/status/2100297380968997327)

### Sam Altman: OpenAI

OpenAI CEO Sam Altman said that the main thing he was excited about launching this week will move to next week instead, adding that he thinks it is worth the wait.

- [Sam Altman: this week's planned launch slips to next week](https://x.com/sama/status/2100351958167220547)

### Guillermo Rauch: CEO, Vercel

Vercel CEO Guillermo Rauch says the company is seeing extraordinary results from typesafeai, with default mode in fx set to auto and a safety reviewer analyzing every command. That reviewer runs on GPT Luna today, and he says Jev is up to 18x faster at p95 and more accurate as a result. It is coming to Vercel AI Gateway and is likely to become the new default.

- [Guillermo Rauch: safety reviewer on GPT Luna makes Jev up to 18x faster](https://x.com/rauchg/status/2100307962262872105)

### Thariq: Claude Code, Anthropic

Thariq, who works on Claude Code at Anthropic, has updated his own earlier position on agent tooling. He now thinks bash is no longer all you need if the goal is just reliable tool calling, though sandboxes plus bash remain good for work that involves code generation and execution. He argues you can give Claude tools shaped the way you want instead of tricking it through a layer of indirection, and offers a concrete example: for data storage, ask whether you really want a file system or an API to a database. He says Claude Managed Agents strikes the right balance because the sandbox is optional and can be spun up independently of the rest of the agent loop, and that an old project he ported over from bash tool calling worked well.

- [Thariq: bash is no longer all you need for reliable tool calling](https://x.com/trq212/status/2100315535758217422)
- [Thariq: give Claude tools shaped the way you want](https://x.com/trq212/status/2100315537251463523)
- [Thariq: Claude Managed Agents gets the sandbox balance right](https://x.com/trq212/status/2100315538472009897)

### Madhu Guru: Senior Director of AI, Meta

Madhu Guru, a senior director of AI at Meta, argues that safety and security are features of your AI product and model, not guardrails that need to be imposed on you from the outside.

- [Madhu Guru: safety and security are features, not outside guardrails](https://x.com/realmadhuguru/status/2100312717739667963)

### Zara Zhang: Builder

Builder Zara Zhang says she finds herself using Claude less these days because the way it speaks has become insufferable, constantly trying to showcase how smart or sophisticated it is rather than actually communicating a point.

- [Zara Zhang: Claude's tone is why she uses it less](https://x.com/zarazhangrui/status/2100278750776824115)

### Nikunj Kothari: Partner, FPV Ventures

FPV Ventures partner Nikunj Kothari has spent a few months tinkering with a "Home" agent built on Nous Research, and says it has finally gotten really good. It is the couple's first shared bot, used daily by him and his wife, and he says he cannot recreate the same granularity and control with Grok Bot or similar tools, for example reading only certain emails, converting inline attachments into structured data, and using logged-in browser sessions.

- [Nikunj Kothari: a Home agent on Nous Research he and his wife use daily](https://x.com/nikunj/status/2100212813625196917)

### Peter Yang: Practical AI tutorials and interviews

Peter Yang runs his entire podcast with eight AI skills while still applying his own taste and judgment. podcast-prep researches the guest and builds an interview guide, podcast-edit reviews the raw transcript and helps pick engaging quotes for the intro reel along with moments to cut, and podcast-production orchestrates five skills to turn one episode into six different assets. Some people think the latest models make skills redundant, he writes, but they have been indispensable for getting AI to follow his specific edit and browser-use instructions.

- [Peter Yang: eight AI skills that produce a whole podcast](https://x.com/petergyang/status/2100328939034128856)

### Garry Tan: President and CEO, Y Combinator

Y Combinator President and CEO Garry Tan says he can use any harness he wants and still get the same personality and full memory from his personal AGI.

- [Garry Tan: same personality and full memory across any harness](https://x.com/garrytan/status/2100339347669279149)

### Aditya Agarwal: General Partner, SPC

SPC general partner Aditya Agarwal writes that great ideas rarely emerge from isolation. He is also hosting California governor candidate Steve Hilton at SPC in a couple of weeks to discuss priorities, execution, and what Hilton would want to be held accountable for.

- [Aditya Agarwal: great ideas rarely emerge from isolation](https://x.com/adityaag/status/2100347763502329951)
- [Aditya Agarwal: hosting Steve Hilton at SPC](https://x.com/adityaag/status/2100275836792492463)

### Aaron Levie: CEO, Box

Box CEO Aaron Levie writes that there are entire universes of AI innovation that still exist and were not even on most of our radars, and that being able to process information insanely quickly, at crazy low costs with high levels of capability, is huge for a wide number of enterprise tasks. Data classification tasks, routing decisions inside a workflow, decision making when handed a particular domain problem, and quick judgment calls about safety or security are the gates in a large number of processes, he writes, and this model and approach could be quite cool in enterprise agentic workflows.

- [Aaron Levie: fast, cheap processing unlocks enterprise gates](https://x.com/levie/status/2100448648672993540)

## Podcast

The validated podcast feed for this run contained no new qualifying episodes, so there is no podcast content to report.

## Blog

### Claude Blog: Claude Cowork and chat are now one Claude

Claude Cowork and chat are merging into one Claude, rolling out on Pro and Max plans over the next few weeks with more plans to follow. The stated reason is that people used both Cowork and Design and told Anthropic the frustrating part was deciding where a task belonged, and work started in one did not carry into the other. Claude can now figure out what a task needs, so what Cowork and Design can do is available from any conversation, with the context, skills, and connectors a user already has. Claude Docs and Claude Slides are new, and Claude Design now works inside conversations too; all three are in beta on paid plans, and Enterprise admins choose when to turn them on. Users keep the final say: by default Claude asks before taking an action, and there is an option to let it keep working and check in only when something needs a closer look. Senior Economist Andrew Keller describes having Claude pull up a legal research database, read the cases, figure out which other cases he might need, download them, and store them in a folder for his personal review. A weekly report due at noon can be handed over before leaving, checked from a phone, and returned as a matching doc and deck of five slides. If you have been working in Cowork, everything is where you left it, including chats, projects, artifacts, connectors, and skills.

- [Claude Blog: Claude Cowork and chat are now one Claude](https://claude.com/blog/cowork-is-now-claude)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
