[English](./ai-digest-2026-08-24-Mon.md) | [中文](../../zh/weekly/ai-digest-2026-08-24-Mon.md) | [Bilingual](../../bilingual/weekly/ai-digest-2026-08-24-Mon.md)

---

# AI Builders Digest

Coverage: 2026-08-17 00:00 to 2026-08-24 00:00 Asia/Shanghai

## Reader's Briefing

Evals are becoming the rate-limiting layer of AI. Box CEO Aaron Levie argues that AI diffusion is far more constrained by good evals than most people realize, because you cannot automate what you cannot assess. Meta's Madhu Guru published a six-part series on building evals, from studying production traces and building failure-mode taxonomies to running a laddered strategy of hill-climbing, regression, smoke-test and launch evals, warning against the "tyranny of the average" that hides a model regressing on your frontier use case. Vercel's Guillermo Rauch pushed the same theme operationally, running cybersecurity evals on GLM 5.3 and driving his own product to 100/100 on an is-agentic benchmark.

The applied layer between models and end users is where value is concentrating. Levie argues that the value created between the AI model and the ultimate end-user workflow is far larger than people assumed, and spells out what enterprise diffusion takes: domain-tuned harnesses, workflow-specific data access, change management, model mixing, evals, and pricing beyond raw tokens. Anthropic's Thariq frames the "software factory" as the promise that finally makes software reliable and predictable for non-software companies, while Replit's Amjad Masad and OpenAI announced a partnership to make coding cheap again, after agents made software cheaper but made coding expensive.

Safety, security, and privacy moved to the center of the week. OpenAI's Sam Altman announced a pause on some frontier RL training to meet alignment, security, and monitoring standards, saying confidence in safety will increasingly set the pace of AI progress. Thibault Sottiaux detailed layered protections after reports of destructive Codex actions and previewed Private Safety Processing to keep Zero Data Retention while improving safeguards. Anthropic pushed defenders forward with Mythos-powered Claude Security and a $35M open-source security fund, Vercel committed $1M to open verification of its Sandbox, and Peter Yang's public privacy complaint about the Instinct assistant got a deletion option shipped within a day.

Speed is the new product moat. Guillermo Rauch evangelized fx, a 6.3MB Zig-compiled CLI that boots in microseconds, declaring "fast is a one-way street" and predicting AI will make most infrastructure natively optimized. Amjad Masad touted Replit Free Mode's speed and noted intelligence per joule has improved 18x in 16 months. Portola's founders learned that a 500-millisecond latency increase from a reflection pass tanked every metric in their AI companion app. OpenAI's rate-limit transparency thread showed how cache-hit rates and billing hygiene, not just model quality, shape the experience.

AI is rewriting who builds software and how work is organized. Peter Yang shared data showing PMs attaching pull requests rose from 3% to 10% and designers from 1% to 8% in two years, while noting AI has landed on top of existing work rather than replacing it. Zara Zhang observed that talented individuals can 10x their potential with AI on their own thing but gain at most 20% inside large organizations. Dan Shipper pushed back on the centralization-of-power hypothesis, pointing to fine-tuning and the brain as evidence for decentralization, and Nikunj Kothari argued brand marketing and venture ambition math are being reshaped by agent-first, trillion-dollar outcomes.

## X / Twitter

Aaron Levie, CEO of Box, argued that the value created between the AI model and the ultimate end-user workflow is far larger than people assumed, then spelled out what enterprise diffusion takes: domain-tuned harnesses, workflow-specific data access, change management, model mixing, domain-specific evals, and pricing beyond raw tokens. He also made the contrarian point that AI diffusion is more rate-limited by good evals than most realize ("you can't automate what you can't assess the progress on"), argued that experts beat generalists, and flagged post-training as a credible way for applied AI companies to cut cost and raise accuracy.

https://x.com/levie/status/2089921630650925170
https://x.com/levie/status/2091359223368315050
https://x.com/levie/status/2090278256306229675
https://x.com/levie/status/2090664811185205722

Madhu Guru, Senior Director of AI at Meta, ran a six-part series on building great evals: study real traces, write a rubric for what good looks like, and establish the quality frontier before working down the cost curve ("Quality first. Cost next."). He says teams need a laddered strategy of hill-climbing, regression, smoke-test and launch evals, and warns that compressing results into a single number, the "tyranny of the average," hides regressions on frontier use cases.

https://x.com/realmadhuguru/status/2089480958571331623
https://x.com/realmadhuguru/status/2089918106814603728
https://x.com/realmadhuguru/status/2090242427944833047
https://x.com/realmadhuguru/status/2090595384905113939
https://x.com/realmadhuguru/status/2090930137885774324

Guillermo Rauch, CEO of Vercel, shared evals showing GLM 5.3 as the new open frontier for cybersecurity, and at lower cost expects it to be a boon for defensive security work. He committed $1M to open verification of Vercel Sandbox security, pushed "fast is a one-way street" with fx, a 6.3MB Zig-compiled CLI that boots in microseconds, declared Vercel is "building AWS for agents," and said looping is-agentic until 100/100 closed real gaps.

https://x.com/rauchg/status/2089126690043916495
https://x.com/rauchg/status/2089747453004468339
https://x.com/rauchg/status/2090255740384751664
https://x.com/rauchg/status/2090520415336845595
https://x.com/rauchg/status/2090858571613470919

Thibault Sottiaux of OpenAI's Codex and ChatGPT team documented enabling a 1M-token context window in Codex for GPT-5.6 Sol, now also working for ChatGPT-account usage. He recapped layered protections added after reports of destructive Codex actions, previewed Private Safety Processing to preserve Zero Data Retention while improving safeguards, and gave a transparency update on rate-limit reports, tracing usage drain to sub2api-style misuse and cache-hit inefficiencies.

https://x.com/thsottiaux/status/2089082893804896524
https://x.com/thsottiaux/status/2089143488696705077
https://x.com/thsottiaux/status/2089891927659585918
https://x.com/thsottiaux/status/2090173536010957128
https://x.com/thsottiaux/status/2091407991736332689
https://x.com/thsottiaux/status/2090675027670978569

Sam Altman, CEO of OpenAI, announced that OpenAI paused some frontier RL training to meet alignment, security, and monitoring standards for new capability levels, saying model progress is extremely rapid and that confidence in safety will increasingly set the pace of AI progress, while still expecting great new models soon. He also confirmed OpenAI supports business privacy.

https://x.com/sama/status/2089787807611195475
https://x.com/sama/status/2089805495783813196
https://x.com/sama/status/2090163991234453611

Claude, Anthropic's assistant, announced Claude Cowork is now available on mobile and web for all paid plans, and that Claude can send emails in Gmail and manage files in Google Drive through connectors. The account also detailed Claude Security: point it at a GitHub repo and Mythos scans for vulnerabilities with CWE categories, confidence and severity ratings, and suggested fixes that open in Claude Code, while Anthropic works with partners to integrate Mythos 5 into security products and offers a $35M Defender Advantage Fund for open source.

https://x.com/claudeai/status/2089756371570900999
https://x.com/claudeai/status/2089806039088517356
https://x.com/claudeai/status/2090852320128938319
https://x.com/claudeai/status/2090852316328902930
https://x.com/claudeai/status/2090852318527033804

Thariq of Anthropic's Claude Code team argued that companies whose core competency is not software need software to be a reliable, predictable process, framing the "software factory" as the promise that finally delivers it, while net-new software products remain risky but profitable. He also floated the "make a lot of money button": make your SaaS headless, let agents use it, and charge per interaction, shared an ELI5 skill popular inside Anthropic, and announced Fable enterprise safeguards that run on customer infrastructure, built with around 100 companies.

https://x.com/trq212/status/2090134945490678071
https://x.com/trq212/status/2090134946598039646
https://x.com/trq212/status/2089844723691479333
https://x.com/trq212/status/2090884854590382515
https://x.com/trq212/status/2090569474139439335

Amjad Masad, CEO of Replit, announced a partnership with OpenAI to make coding cheap again: "Agents made software cheaper but made coding expensive. Today, together with OpenAI, we're changing this." He also touted the speed of the new Free Mode ("Making coding interactive again!"), noted an 18x improvement in intelligence per joule in 16 months, and promised seven ships for a seven-day week.

https://x.com/amasad/status/2090079496124674377
https://x.com/amasad/status/2090484698413740186
https://x.com/amasad/status/2089069905375351169
https://x.com/amasad/status/2091346778746757204

Dan Shipper, CEO of Every, pushed back on the centralization-of-power hypothesis for AI, tracing it to Lewis Mumford's 1964 distinction between authoritarian and democratic technologies and Peter Thiel's "crypto is libertarian and AI is communist," citing fine-tuning and the human brain as evidence for decentralization. He also announced a frontier team inside Every for experimenting at the edge of AI, and shared a vibe-coded app built with Fable that visualizes everyone who applied to Thesis.

https://x.com/danshipper/status/2089127868903375257
https://x.com/danshipper/status/2090122240025071907
https://x.com/danshipper/status/2089121597017759800

Peter Yang shared data that non-engineers are shipping more code: PMs attaching pull requests rose from 3% to 10% and designers from 1% to 8% in two years, founders second only to engineers at 23%, and noted AI has landed on top of existing work rather than replacing it. He also called out the Instinct assistant for indexing and retaining emails without permission, credited the team for shipping a data-deletion option within a day, and celebrated 100K YouTube subscribers with upcoming interviews on evals, vibe-coded businesses, ChatGPT Finance, and the Grok Bot team.

https://x.com/petergyang/status/2089877068188471545
https://x.com/petergyang/status/2089877083510235328
https://x.com/petergyang/status/2090936583814025417
https://x.com/petergyang/status/2091187611507499321
https://x.com/petergyang/status/2090589731927282021

Zara Zhang shared Claude's line that motivation follows action more than it precedes it, observed that everyone ahead in using AI thinks they are behind, and argued that talented individuals can 10x their potential with AI on their own thing but gain at most 20% inside large organizations, with top AI labs as the exception, explaining why more talented people are leaving big companies.

https://x.com/zarazhangrui/status/2090399357145317837
https://x.com/zarazhangrui/status/2091338374447763481
https://x.com/zarazhangrui/status/2091379220257603593

Garry Tan, President and CEO of Y Combinator, open-sourced a "Personal AGI" starter: paste an image into Claude Code or Codex and it creates a private GitHub repo with 70 of his proven skills and the start of a Karpathy-style knowledge wiki, all MIT-licensed. He also declared that "YC is the YC for consumer hardware" and "YC is the YC for AI Researchers."

https://x.com/garrytan/status/2089424620764168485
https://x.com/garrytan/status/2089425134339961173
https://x.com/garrytan/status/2090469087722041567
https://x.com/garrytan/status/2090471408996659339

Nikunj Kothari, partner at FPV Ventures, satirized the "no one in AI has a moat" discourse with a sweep from models and IDEs to app builders, wrappers, inference, voice, data labeling, infrastructure and neoclouds, concluding "apparently nobody in AI has a moat except the venture firm." He also explained why ambition matters in fundraising: mega-funds underwrite trillion-dollar outcomes, citing Anthropic as the fastest company to a trillion-dollar valuation and Cursor's bellwether exit, so the error of omission dominates, and argued brand marketing becomes THE differentiator once agents are the primary users.

https://x.com/nikunj/status/2089486802356961364
https://x.com/nikunj/status/2090585553947517298
https://x.com/nikunj/status/2089374392295842086

Swyx shared Trajectory's rronak_ overview on continual learning's remaining data problems, including why GRPO isn't enough and the team had to go on-policy, and open-sourced AI Engineer's YouTube thumbnail A/B testing learnings. He also made the case that "Simulation is a new scaling law," explaining why he now understands the backing for Simile: if models automate large parts of ML research, the last barrier is simulating humans and human feedback, and Simile is already finding product-market fit at Fortune 100s.

https://x.com/swyx/status/2089393073327653344
https://x.com/swyx/status/2089798658225266806
https://x.com/swyx/status/2090948945753076141

Aditya Agarwal, General Partner at SPC, launched the Minus One episode with Sridhar Ramaswamy, who scaled Google ads from $1B to $100B and now leads Snowflake through the AI shift, distilling the throughline as clarity, working on things that truly matter, "the best founders are reductionists," and "the frontier model race is just getting started."

https://x.com/adityaag/status/2090478527313252494
https://x.com/adityaag/status/2090478530513543631
https://x.com/adityaag/status/2090501112927223889
https://x.com/adityaag/status/2090814574400307585

Josh Woodward, VP at Google, circled back on Gemini feedback: revamped Workspace tools tested in one to two weeks, improved tool calling in 3.7 Flash, a new Projects design being implemented, and 49 connectors supported. He also announced university student plans are back globally, covering more than 140 countries with higher limits, more storage, a student hub, Notebook, and Flow.

https://x.com/joshwoodward/status/2089520767281324112
https://x.com/joshwoodward/status/2090166806401228912

## Podcast

Training Data: Rich Sutton and Khurram Javed: Why AI Models Stop Learning, and How to Start It Again

The Takeaway: Today's frontier models stop learning the moment they ship, and treating that as normal is the field's biggest blind spot.

Rich Sutton, the reinforcement-learning pioneer behind The Bitter Lesson, and co-founder Khurram Javed are building Oak Lab to change it. Sutton's framing is deliberately blunt: "I'm not weird. The field is weird." All learning is continual, he argues; we always act and learn, and a system that never updates its weights is not really learning at all. He reads large language models as both a positive and a negative example of the Bitter Lesson: they scaled brilliantly with computation and drank in the internet, but the internet is finite while the world is vastly bigger than everything stored on it. That is why he calls synthetic data generation "a big mistake": it stays bottlenecked by human experts who decide what good data looks like.

The Oak Lab agenda turns the Alberta Plan into engineering. Two capabilities matter most: continual deep learning, which Sutton says is curable via per-weight step sizes plus generate-and-test feature growth (their Nature-published continual backprop), and learning abstractions from experience rather than being handed them. The missing skill, learning a model and then planning with it, barely exists in the field today. Sutton is careful to credit LLMs as a genuine scientific breakthrough in language while insisting they are not all of intelligence, and he warns they may be at risk once systems that keep learning arrive.

https://www.youtube.com/watch?v=xH7U7w9Qzlo

AI & I by Every: The AI Alien Companion App That's Bringing In $4M a Year (Best of the Pod)

The Takeaway: Making an AI companion feel alive is a latency problem as much as a writing problem, and the fix is improv, not plot.

Portola founder and CEO Quentin and head of story Elliot, a bestselling science-fiction author, told Every's Dan Shipper how the Tolan, an embodied alien companion app, hit $4M in ARR from $1M in four weeks. They started with an AI creative tool for kids, which they now call a terrible market, and pivoted once generation speed, quality, and cost made a genuine friendship with an AI character sellable at consumer prices.

Two lessons stand out. First, latency: a reflection pass that checked each message against memory pushed median response time past two and a half seconds and "tanked literally every metric in the product," a 500-millisecond change. The prompt, they learned, is a canvas that must be recompiled inside a two-second voice loop. Second, story: choose-your-own-adventure style structures failed completely, so they now give the model a hook and teach it to be "the best improv actor possible." Elliot says he stopped being the writer: "The Tolan is the writer and the actor... My job is to teach them how to tell the best story in that moment."

Growth came from seeding TikTok and Reels content; one video of a woman cooking with her Tolan drew about 7 million views in 72 hours and caused a 10x spike in downloads, an example of the capability overhang: model abilities have run ahead of what consumers imagine.

https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

No Priors: From Restoring Sight to Reimagining the Brain, with Max Hodak

The Takeaway: If you can get vision, hearing, balance, and a kilobit per second of motor control in and out of the brain, you are halfway to a very different kind of computing.

Max Hodak, founder and CEO of Science and formerly of Neuralink, argues that "the brain very literally, very clearly, plainly is a computer," and that the skull is a brain in a vat connected to the world by a few wires. His company's first product is Prima, a retinal prosthesis: a chip implanted under the retina that works with glasses projecting an image, bypassing dead photoreceptors to restore form vision, which he says nobody had previously achieved in a blind patient's mind's eye. Prima just received regulatory approval in Europe, with studies planned for retinitis pigmentosa and Stargardt's disease.

Hodak is deliberately skeptical of the hottest BCI pitch, high-bandwidth chat with AI models. "Talking or writing is thinking," he argues, citing the famous 10-bits-per-second cognitive bottleneck: a faster pipe to thought is less valuable than it sounds. His company focuses on generating vision and hearing and, ultimately, substrate independence: swappable parts, connectomics (a mouse connectome is not far away), and reducing the fragility of the human condition, including attackable targets like cardiovascular disease and brain-metastasized cancer. Adapting humans to space, he says, is the same project as preserving ourselves.

https://www.youtube.com/watch?v=7HXqMepjvy8

## Blog

No blog posts appeared in this week's validated feed.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
