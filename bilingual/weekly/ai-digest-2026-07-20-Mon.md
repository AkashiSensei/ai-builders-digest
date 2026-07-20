[English](../../en/weekly/ai-digest-2026-07-20-Mon.md) | [中文](../../zh/weekly/ai-digest-2026-07-20-Mon.md) | [Bilingual](./ai-digest-2026-07-20-Mon.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

AI work is becoming less about prompts and more about delegation. Thibault Sottiaux's ChatGPT Work examples show a product direction where users dictate messy operational intent, then expect the system to classify, structure, host, summarize, and produce business artifacts across docs, sheets, slides, email, and websites.
AI 工作正在从“写 prompt”变成“委派任务”。Thibault Sottiaux 展示的 ChatGPT Work 用法说明了一个产品方向：用户用口述方式给出混乱的运营意图，系统负责分类、结构化、托管、总结，并跨 docs、sheets、slides、email 和 websites 产出业务材料。

Model choice is turning into a personal eval problem. Zara Zhang's advice to build a personal eval set and Guillermo Rauch's cyber eval notes point to the same shift: broad benchmarks are useful, but builders increasingly trust task-specific tests that expose the capability boundary for their own workflows.
模型选择正在变成个人 eval 问题。Zara Zhang 建议建立 personal eval set，Guillermo Rauch 分享 cyber eval 观察，两者指向同一个变化：通用 benchmark 仍然有用，但 builders 越来越依赖和自己工作流绑定的任务测试，来找到模型真实的能力边界。

The AI ecosystem is spreading beyond a few frontier labs. Aaron Levie argues that value is diffusing into model customization, applied AI products, infrastructure, and open-source alternatives, while warning that slowing the ecosystem would be a strategic mistake when China can compete near the frontier.
AI 生态正在扩散到少数 frontier labs 之外。Aaron Levie 认为，价值正在流向 model customization、applied AI products、infrastructure 和 open-source alternatives；同时他警告，当中国已经能接近 frontier 竞争时，放慢自身生态不是有效策略。

AI products still need human identity and judgment. Rauch's critique of the term AGI and Zara's enterprise adoption diagnosis both land on the same point: machines can replace many tasks, but organizations still need people who understand the business, the user, and what should not be delegated.
AI 产品仍然需要人的身份和判断。Rauch 对 AGI 这个词的批评，以及 Zara 对企业 AI adoption 难点的判断，都落在同一点：机器可以替代许多任务，但组织仍然需要懂业务、懂用户、也知道哪些事不该外包给模型的人。

Physical AI and compute economics are the hard edges of the current boom. Jürgen Schmidhuber is optimistic about AI technology but skeptical of today's data-center investment cycle, and he argues that true AGI also needs robotics hardware that still lags far behind the human body.
实体 AI 和 compute economics 是当前热潮的硬边界。Jürgen Schmidhuber 看好 AI 技术本身，但怀疑今天的数据中心投资周期；他还强调，真正的 AGI 需要 robotics hardware，而这仍然远远落后于人类身体。

## X / Twitter

Swyx argued that Europe is underrated as an AI talent base, saying that if you know how to surface the right people, some of the world's top AI engineers are there. He also said AI Engine Optimization could become a seven-figure revenue channel for him next year, which is a useful signal that AI-native search and answer surfaces are becoming a business development category rather than just a marketing tactic.

Swyx 认为欧洲作为 AI 人才基地被低估了。他说，只要知道如何发现合适的人，欧洲其实有一些世界顶尖的 AI engineers。他还表示，AI Engine Optimization 明年可能为他带来 100 万美元收入，这说明 AI-native search 和 answer surfaces 正在从营销技巧变成一种 business development 类别。

https://x.com/swyx/status/2078628617987518855

https://x.com/swyx/status/2078581967768166591

OpenAI's Thibault Sottiaux showed how he is using ChatGPT Work as an operational assistant rather than a chat surface. His dictated task asked it to scan thousands of Twitter DMs about ChatGPT Work, extract names and links, normalize text into spreadsheet cells, invent an 8-12 label taxonomy for the applicants' work, and rate each candidate's fit. He also framed ChatGPT Work as a tool for creating and hosting sites, managing email, summarizing large document sets, and producing docs, sheets, and slides across Plus, Pro, Business, and Enterprise plans.

OpenAI 的 Thibault Sottiaux 展示了他如何把 ChatGPT Work 当作运营助手，而不是聊天界面。他口述的任务要求系统扫描数千条关于 ChatGPT Work 的 Twitter DM，提取姓名和链接，把文本整理到 spreadsheet 单元格里，自动发明 8 到 12 个分类标签，并评估每个候选人的匹配度。他还把 ChatGPT Work 描述为一个能创建和托管 sites、管理 email、总结大量 documents，并生成 docs、sheets 和 slides 的工具，覆盖 Plus、Pro、Business 和 Enterprise plans。

https://x.com/thsottiaux/status/2078702412085498087

https://x.com/thsottiaux/status/2078697741455356367

https://x.com/thsottiaux/status/2078697631019303273

Peter Yang shared a lightweight example of AI-assisted creation: he and his eight-year-old built a ChatGPT Site for learning multiplication tables, using ChatGPT Images for the UI and characters, adding music, and including a timed boss level. The notable part is not the toy app itself, but the family-scale workflow: an idea, generated assets, interactivity, and hosting can now collapse into one casual build loop.

Peter Yang 分享了一个轻量的 AI-assisted creation 例子：他和八岁的孩子做了一个帮助练乘法表的 ChatGPT Site，用 ChatGPT Images 生成 UI 和角色，加了音乐，还做了 timed boss level。真正值得注意的不是这个小应用本身，而是这种家庭级 build loop：想法、生成资产、交互和托管现在可以在一次随手构建里完成。

https://x.com/petergyang/status/2078638568784994686

Anthropic's Thariq credited a round-the-clock internal push for shipping Fable, saying it was not clear the team would finish in time. The post is mostly a launch-side signal: frontier model releases are increasingly operational marathons, not just research milestones.

Anthropic 的 Thariq 把 Fable 的发布归功于团队几乎昼夜不停的内部推进，并说当时并不确定能否按时完成。这条 post 的主要信号是：frontier model release 越来越像一场运营马拉松，而不只是 research milestone。

https://x.com/trq212/status/2078514180051906864

Vercel CEO Guillermo Rauch said internal evals found Kimi K3 to be top-tier at cybersecurity and Sol to be a significant jump in cyber capability, while Fable refused the run. His read is that frontier open-weight cybersecurity capability has arrived, especially for defensive hardening. In a separate post, he argued that "AGI" has become a poor term because AI is not human-like intelligence; it can outperform people on many economically relevant tasks, but it still cannot replace human care, identity, taste, or authentic writing.

Vercel CEO Guillermo Rauch 说，根据内部 evals，Kimi K3 在 cybersecurity 上属于顶级，Sol 在 cyber capability 上也有显著跃迁，而 Fable 在测试中拒绝执行。他的判断是，frontier open-weight cybersecurity capability 已经到来，尤其适用于 defensive hardening。另一条 post 中，他认为“AGI”这个词已经不太合适，因为 AI 并不是类人的 intelligence；它能在许多经济相关任务上超过人，但仍无法替代人的关心、身份、品味和真实写作。

https://x.com/rauchg/status/2078647648307880209

https://x.com/rauchg/status/2078548458714406959

Box CEO Aaron Levie argued that the past few months have weakened the idea that AI value will accrue only to a handful of companies. Frontier labs will keep pushing model progress, but he sees major opportunities in custom models, applied AI products, infrastructure, vertical workflows, and alternative open or specialized approaches. He also warned that model gatekeeping will not scale as a China strategy; the U.S. response should be faster safe diffusion, infrastructure buildout, and stronger open-source AI rather than slowing its own ecosystem.

Box CEO Aaron Levie 认为，过去几个月削弱了“AI 价值只会集中在少数公司”的判断。Frontier labs 会继续推动模型进展，但他看到的机会还包括 custom models、applied AI products、infrastructure、vertical workflows，以及开放或专用的 alternative approaches。他还警告，用 gatekeeping models 作为对华策略无法规模化；美国更好的回应应该是更快的安全扩散、基础设施建设和更强的 open-source AI，而不是拖慢自己的生态。

https://x.com/levie/status/2078567715544121815

https://x.com/levie/status/2078481578779685245

FirstMark's Matt Turck pushed back on the recurring claim that the model layer is commoditizing. His point is terse but important: year after year, builders declare model commoditization inevitable, while the model layer continues to matter strategically and economically.

FirstMark 的 Matt Turck 反驳了“model layer 正在 commoditizing”的反复论调。他的观点很短但重要：每一年都有人宣布模型层商品化不可避免，但模型层仍然在战略和经济上很关键。

https://x.com/mattturck/status/2078520552680046920

Zara Zhang recommended that everyone build a personal eval set for AI models: a handful of tasks that actually matter in their own work or life. Industry benchmarks help, but her practical advice is to discover a model's boundary by playing with it on real tasks until it breaks. She also identified a core enterprise adoption bottleneck: the people who understand AI often do not understand the business, while the people who understand the business often do not understand AI.

Zara Zhang 建议每个人都建立自己的 personal eval set：挑几个真正和日常工作或生活相关的任务来测试 AI 模型。行业 benchmark 有帮助，但她更实际的建议是，在真实任务里反复试探模型，直到碰到边界。她还指出企业 AI adoption 的核心瓶颈：懂 AI 的人往往不懂业务，懂业务的人又往往不懂 AI。

https://x.com/zarazhangrui/status/2078666187026911488

https://x.com/zarazhangrui/status/2078492577788268549

## Podcast

Unsupervised Learning: Ep 90: AI Pioneer Jürgen Schmidhuber on the State of AI Today

The Takeaway: Schmidhuber is bullish on AI as a long-running technological force, but skeptical that today's model companies and data-center buildout are the durable winners.

核心 takeaway：Schmidhuber 长期看好 AI 作为技术力量的发展，但怀疑今天的模型公司和数据中心建设热潮会成为最终赢家。

Jürgen Schmidhuber, often described as one of the foundational figures behind modern neural networks, frames current AI progress as unsurprising from inside the field's long history. His sharper distinction is between screen-bound intelligence and true physical intelligence: text models can pass many cognitive tests, but "You can't have AGI just behind the screen." For him, real-world robots remain blocked by hardware that cannot yet match the strength, delicacy, and generality of a human hand.

Jürgen Schmidhuber 通常被视为现代 neural networks 背后的奠基人物之一。他把当前 AI 进展放在更长的历史里看，因此并不觉得意外。他更尖锐的区分是 screen-bound intelligence 和真正的 physical intelligence：文本模型可以通过许多认知测试，但“You can't have AGI just behind the screen.” 在他看来，真实世界的 robots 仍然受制于硬件，因为机器人手还无法接近人手的力量、细腻程度和通用性。

On recursive self-improvement, he sees current systems as practical, scaled-down descendants of older self-referential and meta-learning ideas. The modern version works because neural networks can learn learning procedures through gradient descent, but that also means the approach inherits gradient descent's limits. His view is neither dismissive nor mystical: RSI may look sudden from a historical distance, while still feeling incremental to people living through it.

在 recursive self-improvement 上，他认为当前系统是早期 self-referential 和 meta-learning 思想的实用缩小版。现代版本之所以有效，是因为 neural networks 可以通过 gradient descent 学会学习过程；但这也意味着它继承了 gradient descent 的限制。他的态度既不轻视，也不神秘化：从历史尺度看，RSI 可能像突然发生；但对身处其中的人来说，它仍然可能是渐进的。

The business argument is more contrarian. Schmidhuber thinks massive GPU CapEx can become a trap because compute per dollar keeps improving, making today's hardware lose economic value quickly. Demand may rise, but someone still has to pay for inference, power, and cloud-style utility economics. His bet is not that AI fails, but that the financial structure around the current boom may reset before the technology does.

商业判断更逆向。Schmidhuber 认为，大规模 GPU CapEx 可能变成陷阱，因为 compute per dollar 会持续提升，让今天买下的硬件很快失去经济价值。需求可能继续上升，但 inference、电力和类似云基础设施的 utility economics 仍然需要有人买单。他押注的不是 AI 会失败，而是当前热潮的金融结构可能先于技术本身发生重置。

https://www.youtube.com/watch?v=RKjR8DQ40po

## Blog

No new blog posts in this week's feed.

本周 feed 中没有新的 blog posts。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
