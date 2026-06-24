[English](./ai-digest-2026-06-25-Thu.md) | [中文](../../zh/daily/ai-digest-2026-06-25-Thu.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-06-25-Thu.md)

---

# AI Builders Digest

## Reader's Briefing

- Claude Tag is the day's center of gravity. Anthropic builders described Claude moving into Slack as a shared, sandboxed, proactive teammate that can clone repos, write code, test, monitor channels, and keep per-thread memory and permissions.
- The interface for AI work is shifting from private chat to persistent organizational actors. Andrej Karpathy called this a third major LLM UI paradigm, while Peter Yang framed human-agent interaction as closer to managing a capable employee.
- AI pricing is becoming a fight over where value accrues. Madhu Guru and Aaron Levie both pointed to a barbell between expensive frontier models and cheaper capable models, with applied AI layers routing, evaluating, and tuning for real workflows.
- Agent-native commerce and infrastructure are moving toward APIs and CLIs. Shopify's UCP CLI inspired an embedded shopping demo, Google Workspace CLI drew builder attention, and Vercel is collecting feedback from people building deep agents.
- Biohub's No Priors episode reframed AI biology as an open-source tooling and data problem. Mark Zuckerberg, Priscilla Chan, and Alex Rives described world models for biology that require new scientific data engines, not just existing internet-scale corpora.

## X / Twitter

Andrej Karpathy argued that Claude in Slack is more than another integration: it is a new LLM interaction paradigm. In his framing, the first paradigm was visiting an LLM website, the second was installing an app on your computer, and the third is a persistent asynchronous entity with organizational tools, context, memory, security, and compute that works alongside human teams.
https://x.com/karpathy/status/2069547676849557725

Anthropic's Claude Tag launch dominated the builder feed. Boris Cherny described a Slack beta for Claude Enterprise and Team customers where tagging Claude in a channel spins up an isolated sandbox, clones repos, writes code, tests, compiles, and then throws the sandbox away. He also uses Claude to monitor Slack channels, answer questions, draft PRs, and react when a thread is resolved.
https://x.com/bcherny/status/2069474691010707486
https://x.com/bcherny/status/2069474689819480394
https://x.com/bcherny/status/2069474688619958517

Cat Wu framed Claude Tag as Anthropic's first natively multiplayer and proactive product. She said the internal version merges 65% of product PRs, shared a getting-started guide for configuring agent permissions, and pointed to six common workflows that have resonated with internal users and design partners.
https://x.com/_catwu/status/2069473118742331608
https://x.com/_catwu/status/2069484330938998993
https://x.com/_catwu/status/2069486403696869555

Thariq shared practical operating patterns for channel-based agents: use emoji reactions for visible status, maintain a pinned message summarizing active work, and set up dedicated channels for workflows such as scheduling. The useful signal is that team agents need status surfaces and coordination conventions, not just model capability.
https://x.com/trq212/status/2069474343512617390
https://x.com/trq212/status/2069474342220820657
https://x.com/trq212/status/2069474339679052144

Claude's official account described Claude Tag as a shared channel participant. One Claude can interact with everyone in a channel, build context from ongoing work, and take initiative when ambient behavior is enabled, such as following up on quiet threads or flagging relevant information across channels and tools. The beta is available for Claude Enterprise and Team plans.
https://x.com/claudeai/status/2069468701548531895
https://x.com/claudeai/status/2069468699766005847
https://x.com/claudeai/status/2069468698071494976

Peter Yang pulled the same trend into product design. He asked what design means when the entity accessing your product is an agent looking for an API or CLI, praised the Google Workspace CLI as useful, and joked that human-agent interaction is starting to look like managing a highly capable employee.
https://x.com/petergyang/status/2069603490524254473
https://x.com/petergyang/status/2069551302246592799
https://x.com/petergyang/status/2069530765352907180

Madhu Guru argued that today's token-pricing debate is really a debate about where AI value will accrue: model labs, application layers, distribution, data providers, or other parts of the stack. His read is that business models, moats, value exchange, and execution playbooks are still being negotiated in public by all sides of the ecosystem.
https://x.com/realmadhuguru/status/2069455097193697393

Box CEO Aaron Levie gave the applied-AI version of that argument. He expects a pricing barbell between high-cost frontier models and cheap but capable open or closed-weight models. The applied layer matters because it can route workloads to the best model, control cost, compensate for lower-quality models, and tune around workflows, customer-specific evals, data setup, and domain-specific implementation work.
https://x.com/levie/status/2069639600310767616

Levie also connected Claude Tag to headless enterprise software. If Claude can access corporate files in Box from Slack, enterprise content becomes a portable knowledge base for agents while still living inside the permissions and governance layer employees already use.
https://x.com/levie/status/2069596515560267891

Nikunj Kothari built Plug That Shop after Shopify launched a UCP CLI that exposes store products through the command line. His demo creates contextual embedded shops for websites, with one-click buyer checkout through Shop, using Conductor, Anthropic Opus 4.8, Shopify's UCP CLI, and Railway.
https://x.com/nikunj/status/2069534712763490668
https://x.com/nikunj/status/2069547206504566980

Guillermo Rauch is recruiting high-quality feedback from people deeply building agents for eve, and also pointed to Vercel plus Cursor. The signal is less a finished product announcement than an active search for requirements from builders who are pushing agent infrastructure into production.
https://x.com/rauchg/status/2069590431646769472
https://x.com/rauchg/status/2069513849578082474

Swyx highlighted Zai's rise after its January IPO, saying GLM models went from relatively obscure in his circles to beating DeepSeek and becoming a top open model. He also promoted AI Engineer and LIT Fellows-related sessions, continuing the builder-community thread around open models, events, and high-trust networks.
https://x.com/swyx/status/2069598378191941835
https://x.com/swyx/status/2069665232822366577
https://x.com/swyx/status/2069582337034330186

Josh Woodward shared two Gemini-side adoption notes: Gemini App added a "Get in the game" image template for personalized sports artifacts, and Florida State University reported that NotebookLM changed study habits for struggling students shortly after campus introduction.
https://x.com/joshwoodward/status/2069408025362714957
https://x.com/joshwoodward/status/2069406832523624696

OpenAI Codex builder Thibault Sottiaux posted through a short Codex bug-and-feedback loop: Codex had a bug, it was fixed, and more feedback should keep coming. He also joked about Codex enjoying bugs, which fits the ongoing pattern of public product iteration through builder feedback.
https://x.com/thsottiaux/status/2069579993588625574
https://x.com/thsottiaux/status/2069592160966733853
https://x.com/thsottiaux/status/2069624530960838914

Alex Albert said Claude Tag has completely changed how he works with Claude, making it feel less like using a tool and more like managing a team. That one-line reaction captures the broader shift in the feed: AI products are becoming shared work systems rather than single-player assistants.
https://x.com/alexalbert__/status/2069470389391241314

Garry Tan pointed to Linzumi as "Codex but actually multiplayer," praised Sean Grove's background reducing ChatGPT sycophancy before starting the YC company, and separately argued that Dropbox needs larger plans because AI will make useful data volumes grow exponentially.
https://x.com/garrytan/status/2069474420113146355
https://x.com/garrytan/status/2069434452628185241

Amjad Masad amplified a builder story with the line that it starts with a prompt, but takes a lot of work to get there. His "K-coding" post was lighter, but both fit Replit's continued positioning around prompt-to-product workflows where the prompt is the entry point rather than the whole engineering process.
https://x.com/amasad/status/2069588152285794373
https://x.com/amasad/status/2069322872456364540

Peter Steinberger used the Google Workspace CLI moment to underline why independent builders like CLIs: even if a platform company under-celebrates one, agent and automation workflows often make command-line surfaces unusually valuable.
https://x.com/steipete/status/2069594195522941059

Aditya Agarwal shared South Park Commons' investment in Longshot Space, which is building a cannon that fires payloads into orbit. This is outside the AI-agent theme, but still a builder signal around hard-tech demand, launch capacity, and infrastructure ambition.
https://x.com/adityaag/status/2069464865568166180
https://x.com/adityaag/status/2069464862556619263

Matt Turck's World Cup expansion note was not AI-specific, so the work-relevant takeaway is minimal today.
https://x.com/mattturck/status/2069481767652794768

## Podcast

### No Priors: Biohub: The Future of Biology is Open-Source with Co-Founders Mark Zuckerberg, Priscilla Chan, and Head of Science Alex Rives

The Takeaway: Biohub's strategy is to treat biology progress as a shared tooling, data, and model-building problem. Zuckerberg, Chan, and Rives do not claim Biohub will cure all disease directly; their argument is that open-source tools and new data engines can accelerate the scientific community that does.

Priscilla Chan explained that the work began with a broad goal to cure, prevent, or manage all disease by the end of the century, but conversations with scientists revealed more practical bottlenecks: research silos, slow information sharing, and lab tools that disappear when the postdoc who built them leaves. Biohub's answer is to build shared tools and shared knowledge bases for the field.

Mark Zuckerberg described the original Biohub model as long-term tool development across engineers and scientists from multiple universities. Over time, CZI kept investing more because the science effort was working, expanding beyond the San Francisco Biohub to New York and Chicago and making Biohub the primary philanthropic focus.

The new virtual biology initiative is about modeling biology from proteins to cells to larger systems. Zuckerberg's key distinction is that biology is not like language modeling, where massive public internet corpora already exist. To build useful biological world models, Biohub needs frontier biology groups that can invent the experiments and generate the data that frontier AI models require.

Alex Rives connected this to protein understanding: his team folded more than 1.1 billion proteins and focused on models that understand proteins generally rather than models designed narrowly for a single antibody or target. The longer-term ambition is to design proteins that change physiology, which would move from prediction toward intervention.

The open-source thread matters. The guests repeatedly argued that they will have more impact by putting tools into scientists' hands quickly than by keeping everything internal. In this view, Biohub is not a closed disease-cure factory; it is an infrastructure effort for the broader scientific system.
https://www.youtube.com/@NoPriorsPodcast

## Blog

No new blog posts in today's feed.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
