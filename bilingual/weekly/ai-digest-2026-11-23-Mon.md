[English](../../en/weekly/ai-digest-2026-11-23-Mon.md) | [中文](../../zh/weekly/ai-digest-2026-11-23-Mon.md) | [Bilingual](./ai-digest-2026-11-23-Mon.md)

---

# AI Builders Digest

Coverage: 2026-11-16 00:00 to 2026-11-23 00:00 Asia/Shanghai
覆盖范围：2026-11-16 00:00 至 2026-11-23 00:00（Asia/Shanghai）
Known feed coverage gaps (UTC): X/Twitter 2026-11-18T06:28:37.829Z to 2026-11-18T06:30:05.741Z (0.02h); X/Twitter 2026-11-22T06:27:10.098Z to 2026-11-22T06:38:54.921Z (0.20h).
已知 feed 覆盖缺口（UTC）：X/Twitter 2026-11-18T06:28:37.829Z 至 2026-11-18T06:30:05.741Z（0.02 小时）；X/Twitter 2026-11-22T06:27:10.098Z 至 2026-11-22T06:38:54.921Z（0.20 小时）。

## Reader's Briefing / 导读

The week's clearest shift was in the unit of agent work. Builders stopped describing agents as answer machines or even individual task runners and started describing them as outcome owners. Box CEO Aaron Levie outlined systems that receive a goal, choose an implementation, test and deploy it, then keep improving it. Replit CEO Amjad Masad and Vercel CEO Guillermo Rauch pushed the same idea into infrastructure: parallel swarms, shared message boards, and orchestration layers that let many agents coordinate instead of waiting for one perfect prompt.

本周最清晰的变化，是 agent 的工作单位变了。Builders 不再只是把 agent 描述成答题机器或单项任务执行者，而是开始把它描述成结果负责人。Box CEO Aaron Levie 勾勒了一类系统：接收目标，选择实现方式，测试并部署，然后持续改进。Replit CEO Amjad Masad 和 Vercel CEO Guillermo Rauch 把同样的想法推进到基础设施层：并行 swarm、共享 message board，以及让多个 agent 协同工作的编排层，而不是等待一个完美 prompt。

That ambition made verification the scarce skill. Rauch's new X renderer was built as an "autorepo" whose Chrome oracle checks tens of thousands of layout rules before agents propose changes. Every CEO Dan Shipper described skills that improve through repeated evaluation, then warned that benchmarks encode choices about what to measure and what to hold constant. Anthropic's former Claude Code lead Thariq argued that collaborating with models is itself a technical discipline, not a temporary scaffold to be discarded as models improve.

这种野心让验证成为稀缺能力。Rauch 的新 X renderer 被做成一个 autorepo，由 Chrome oracle 检查数万条布局规则，然后让 agent 提交改动。Every CEO Dan Shipper 描述了一种通过反复评估不断变好的 skill，同时提醒 benchmark 本身就包含了对测量什么、固定什么的选择。Anthropic 前 Claude Code 负责人 Thariq 认为，与模型协作本身就是一项技术能力，不是模型变强后就可以丢掉的临时脚手架。

The model release cadence reset expectations again. OpenAI's Sam Altman introduced 6.2 Sol and Astra as capable and token-efficient, while conceding that the models still need to become nicer to work with. OpenAI's Thibault Sottiaux said the gap between polished launch videos and live user reactions came partly from late changes that arrived after early testers had recorded. Google's Josh Woodward shipped Gemini 4 Hydrogen, Gemini 4 Neon, and computer-use features, while Peter Yang found Neon competitive on writing and personality but still behind Opus 5.5 on design.

模型发布节奏再次抬高了预期。OpenAI 的 Sam Altman 将 6.2 Sol 和 Astra 介绍为能力强且 token 效率高的模型，同时承认它们还需要变得更好用。OpenAI 的 Thibault Sottiaux 说，发布视频与真实用户反馈之间的落差，部分来自早期测试者录制之后才完成的后期改动。Google 的 Josh Woodward 推出了 Gemini 4 Hydrogen、Gemini 4 Neon 和 computer-use 功能；Peter Yang 则认为 Neon 在写作和个性上已经很有竞争力，但在设计上仍落后于 Opus 5.5。

Product surfaces are being rebuilt around agents rather than chat boxes. OpenAI previewed a new ChatGPT mobile design that gives Codex and Projects dedicated placement, then followed with a desktop refresh for a billion-user product. Replit made agent swarms available through a prompt and exposed their coordination in Missions. Google moved Project Genie onto Genie 4, and Vercel introduced a model-agnostic message board for agents. Linear's shift from issue tracking to agent orchestration showed the same pattern in enterprise software.

产品界面正在围绕 agent 重建，而不是围绕聊天框重建。OpenAI 预告了新的 ChatGPT 移动端设计，让 Codex 和 Projects 拥有更显眼的位置，随后又为十亿级用户产品更新了桌面端。Replit 让用户用一个 prompt 启动 agent swarm，并在 Missions 中展示它们的协作过程。Google 将 Project Genie 升级到 Genie 4，Vercel 推出了面向 agent 的模型无关 message board。Linear 从 issue tracking 转向 agent orchestration，也体现了同样的企业软件变化。

The physical world supplied the week's boldest strategic frame. Black Forest Labs described its move from image generation to visual intelligence as a path toward video, action, and robotics, with a 7B action model and a 2027 manufacturing bet. Arda CEO Bob McGrew argued that digital superintelligence without perception and manipulation would remain trapped in data centers. Aditya Agarwal connected the same hardware theme to India, where SPC led a $24 million seed round for Bharat Semi.

物理世界提供了本周最大胆的战略框架。Black Forest Labs 把从图像生成走向 visual intelligence 的路径描述为通向视频、动作和机器人的路线，并给出了 7B action model 和 2027 年制造业押注。Arda CEO Bob McGrew 认为，没有感知和操作能力的数字超级智能会被困在数据中心。Aditya Agarwal 把同样的硬件主题连接到印度，SPC 领投了 Bharat Semi 的 2400 万美元种子轮。

Distribution and organization are changing alongside the technology. Linear COO Cristina Cordova said agents now create more than half of the issues on Linear, while its go-to-market team stayed deliberately small and earned trust through technical selling. Nikunj Kothari advised founders to lead fundraising with the second-order consequence of success, not the mechanics of the build. Zara Zhang made the case for repeatable publishing over one-day virality.

分发和组织方式也在随技术改变。Linear COO Cristina Cordova 说，现在 Linear 上超过一半的 issue 由 agent 创建，而公司的 GTM 团队仍然刻意保持精简，通过技术型销售建立信任。Nikunj Kothari 建议创始人在融资时先讲成功后的二阶影响，而不是先讲如何实现。Zara Zhang 则主张持续稳定发布，而不是追求只火一天的病毒传播。

## X / Twitter

### Aaron Levie

Box CEO Aaron Levie argued that token spend per employee still has no visible ceiling. He sees agents moving from short answers and managed tasks to goal-driven systems that can design a solution, test it, deploy it, and optimize it continuously across engineering and other knowledge work. His advice is to give agents goals and enough freedom to find a better implementation, rather than specifying every step in advance.

Box CEO Aaron Levie 认为，每位员工对应的 token 支出仍看不到上限。他看到 agent 正从短回答和受管理的任务，转向能够设计、测试、部署并持续优化的目标驱动系统，而且这种变化会从工程扩展到其他知识工作。他的建议是给 agent 目标以及足够自由，让它们寻找更好的实现方式，而不是提前规定每一步。

Sources: https://x.com/levie/status/2122508098351038532, https://x.com/levie/status/2123278949749059756, https://x.com/levie/status/2123686350410912145

### Aditya Agarwal

SPC general partner and Bevel Health co-founder Aditya Agarwal said embedding AI close to silicon will be critical for hard tech, as SPC led Bharat Semi's $24 million seed round. He also highlighted Fig's RoleCUA work on mapping expert roles across months of real work so agents can move from single tasks to whole jobs. He argued that early-stage VCs complaining they cannot do AI simply need to take more risk and work on frontier problems.

SPC general partner 兼 Bevel Health 联合创始人 Aditya Agarwal 表示，把 AI 尽可能贴近芯片对 hard tech 至关重要，SPC 也领投了 Bharat Semi 的 2400 万美元种子轮。他还提到 Fig 的 RoleCUA，通过映射专家角色数月真实工作，让 agent 从单一任务走向完整岗位。他认为，抱怨做不了 AI 的早期 VC 只是需要承担更多风险，并关注前沿问题。

Sources: https://x.com/adityaag/status/2122386958101959118, https://x.com/adityaag/status/2123479646629183631, https://x.com/adityaag/status/2123293726110020052

### Amjad Masad

Replit CEO Amjad Masad called agent swarms the next scaling frontier, another axis beyond larger models and longer thinking time. Replit now lets users start a swarm with one prompt and inspect how agents coordinate inside Missions. He also open-sourced Amuse, built with Missions, and pointed to a high schooler using GitHub issues to coordinate agents working on a GTA VI PC port as a possible new model for open source.

Replit CEO Amjad Masad 把 agent swarm 称为 AI 的下一个 scaling frontier，是在更大模型和更长思考时间之外的另一个维度。Replit 现在允许用户用一个 prompt 启动 swarm，并在 Missions 中查看 agent 如何协作。他还开源了用 Missions 构建的 Amuse，并提到一名高中生用 GitHub issue 协调 agent 完成 GTA VI 的 PC 移植，这可能是一种新的开源模式。

Sources: https://x.com/amasad/status/2122809964649459861, https://x.com/amasad/status/2123133509028008331, https://x.com/amasad/status/2124277564596519355, https://x.com/amasad/status/2124345037408686228

### Dan Shipper

Every CEO Dan Shipper focused on compounding workflows rather than one-off prompts. He described building a context-window summarization skill and using autoresearch to iterate until it matched 80 percent of his taste for summaries. He also proposed proof of work, measured by tokens spent on a piece of content, as a possible feed-ranking signal. His caution about benchmarks was sharp: numbers can rise even when the thing being measured has drifted away from the outcome users care about.

Every CEO Dan Shipper 关注可累积的工作流，而不是一次性 prompt。他描述了一个 context window 摘要 skill，并用 autoresearch 反复迭代，直到效果达到他对摘要品味的 80%。他还提出，可以按 agent 为一段内容消耗的 token 数量来衡量 proof of work，并以此作为 feed 排序信号。他对 benchmark 的提醒很尖锐：数字上升，不一定代表被测量的东西仍然接近用户真正关心的结果。

Sources: https://x.com/danshipper/status/2122091033001337134, https://x.com/danshipper/status/2122541401804054826, https://x.com/danshipper/status/2124292892168475086

### Garry Tan

Y Combinator president and CEO Garry Tan pitched GBrain's hosted option as a way to roll individual employee memory into team and company memory. He is planning a Rust backend for GBrain that would replace Postgres with pgvector or PGlite as the store for vector search, graph search, embeddings, RAG, and HNSW. The larger theme is a software factory with persistent organizational memory, not a single assistant tied to one chat.

Y Combinator 总裁兼 CEO Garry Tan 推荐 GBrain 的 hosted 选项，把单个员工记忆汇总成团队记忆和公司记忆。他计划用 Rust 重写 GBrain 后端，取代 Postgres 配 pgvector 或 PGlite，作为 vector search、graph search、embeddings、RAG 和 HNSW 的存储层。更大的主题是一个拥有持久组织记忆的 software factory，而不是绑定在单个聊天里的助手。

Sources: https://x.com/garrytan/status/2122517681740124271, https://x.com/garrytan/status/2122576951080792543

### Guillermo Rauch

Vercel CEO Guillermo Rauch introduced xeet, a Rust and WebAssembly renderer that turns an X post into a PNG in about a millisecond without a browser. Its structure as an autorepo is the important part: a Chrome oracle verifies tens of thousands of text-layout rules, then agents can act on signed pull requests. He also argued that agent users change product development from user interviews to evals, and launched Vercel Board as model-agnostic message-board infrastructure for large agent fleets. His read on demand is that compute is becoming the new economy, with AI Gateway token use up roughly 40 percent month over month.

Vercel CEO Guillermo Rauch 推出了 xeet，一个用 Rust 和 WebAssembly 编写的 X 帖子渲染器，不启动浏览器就能在约一毫秒内把帖子渲染成 PNG。更重要的是它的 autorepo 结构：Chrome oracle 验证数万条文字布局规则，然后 agent 可以根据签名 pull request 采取行动。他还认为 agent 用户让产品开发从用户访谈转向 eval，并推出 Vercel Board，作为面向大规模 agent fleet 的模型无关 message board 基础设施。他对需求的判断是，compute 正在成为新的经济基础，AI Gateway 的 token 使用量大约每月环比增长 40%。

Sources: https://x.com/rauchg/status/2122184794209714368, https://x.com/rauchg/status/2122415506451841215, https://x.com/rauchg/status/2123237505810178434, https://x.com/rauchg/status/2123203741570740504

### Josh Woodward

Google VP Josh Woodward said Gemini can now complete tasks free of charge in six countries using the Gemini 4 Hydrogen model, with capabilities including Duplex calls, Google Pay checkout, RCS messaging, forwarded email, and deeper Workspace actions. He then introduced Gemini 4 Neon as faster, cheaper, and better at complex instructions. Google also brought Genie 4, an agent and a community gallery to Project Genie, and added Mac computer control to the Gemini app.

Google VP Josh Woodward 表示，Gemini 现在可以在六个国家免费完成任务，底层使用 Gemini 4 Hydrogen 模型，能力包括 Duplex 电话、Google Pay 结账、RCS 消息、转发邮件以及更深入的 Workspace 操作。随后他介绍了 Gemini 4 Neon，强调它更快、更便宜，也更擅长遵循复杂指令。Google 还让 Genie 4、一个 agent 和社区 gallery 进入 Project Genie，并为 Gemini app 增加了 Mac 电脑操作能力。

Sources: https://x.com/joshwoodward/status/2122737427970425171, https://x.com/joshwoodward/status/2123177835254952348, https://x.com/joshwoodward/status/2123123552052494529, https://x.com/joshwoodward/status/2123534862569324703

### Nikunj Kothari

FPV Ventures partner Nikunj Kothari compressed the infrastructure cycle into four quarters: vibe coding, harnesses, sandboxes, then agentic CI. He also noticed how quickly model sentiment swings, with OpenAI, Anthropic, and Gemini each taking turns as the crowd favorite. His strongest practical post was a fundraising lesson: show investors the second and third-order outcome if the plan works, then explain how the company earns the right to build it. Separately, he sketched a consumer-safety stack for elderly relatives that would combine browser protection, network filtering, payment checks, voice-clone detection, and insurance.

FPV Ventures partner Nikunj Kothari 把基础设施周期压缩成四个季度：vibe coding、harness、sandbox，然后是 agentic CI。他还注意到模型口碑变化极快，OpenAI、Anthropic 和 Gemini 轮流成为人群宠儿。他最有实操价值的帖子是一条融资经验：先向投资人展示计划成功后的二阶和三阶结果，再解释公司如何获得实现它的资格。另外，他为一个面向老年亲属的消费者安全产品画了草图，结合浏览器保护、网络过滤、支付检查、语音克隆检测和保险。

Sources: https://x.com/nikunj/status/2122543500814336281, https://x.com/nikunj/status/2122833396787495317, https://x.com/nikunj/status/2123066196052381864, https://x.com/nikunj/status/2123426647273800172

### Peter Yang

Peter Yang distilled Anthropic designer Nate Parrott's advice for avoiding AI design slop: provide screenshots and real interfaces as context, research familiar UX patterns, name the model's default biases, start with wireframes, and remix several options. He argued that models now have short shelf lives, so builders should optimize for skills that transfer across models rather than emotional attachment to one release. His Gemini 4 Neon review found it faster than Carbon and competitive with Opus 5.5 on writing and personality, though not yet better at 3D and design. He also credited Google's huge employee base as an underrated testing advantage.

Peter Yang 总结了 Anthropic 设计师 Nate Parrott 避免 AI 设计 slop 的建议：提供截图和真实界面作为上下文，研究熟悉的 UX 模式，明确指出模型的默认偏好，从 wireframe 开始，并混合多个方案。他认为模型现在的保质期很短，所以 builder 应该打磨能跨模型迁移的能力，而不是对某个版本产生情绪依赖。他对 Gemini 4 Neon 的评测发现，它比 Carbon 更快，在写作和个性上与 Opus 5.5 有竞争力，但在 3D 和设计上还没有胜出。他还认为 Google 庞大的员工规模是一个被低估的测试优势。

Sources: https://x.com/petergyang/status/2122347721298510021, https://x.com/petergyang/status/2122839368444661870, https://x.com/petergyang/status/2123540875733315815, https://x.com/petergyang/status/2123648490844897389

### Ryo Lu

Ryo Lu observed that crazy ideas are now possible to build, but they still demand just as much care and effort. He demonstrated the point with ryOS Karaoke, a native iOS app almost one-shotted with Airbuild that turns a folded iPhone Duo into a tiny karaoke machine. The contrast is useful: generation gets faster, but product judgment remains the differentiator.

Ryo Lu 观察到，疯狂的想法现在确实可以实现了，但仍然需要同样的用心和投入。他用 ryOS Karaoke 展示了这一点：一个用 Airbuild 几乎 one-shot 完成的原生 iOS 应用，可以把折叠的 iPhone Duo 变成迷你卡拉 OK 机。这个对比很有用：生成速度变快了，但产品判断仍然是差异化所在。

Sources: https://x.com/ryolu_/status/2122929249967554583, https://x.com/ryolu_/status/2124473853858725907

### Sam Altman

OpenAI's Sam Altman introduced 6.2 Sol and Astra as capable and very token-efficient models, singling out 6.2 Sol ultrafast as a different kind of experience. He acknowledged that the models still need work on being nice to work with and said upcoming releases would prioritize that. He also praised Greg Brockman's evolution from early OpenAI engineer to leader of some of its hardest business responsibilities.

OpenAI 的 Sam Altman 将 6.2 Sol 和 Astra 介绍为能力强且非常 token 高效的模型，并特别提到 6.2 Sol ultrafast 会带来不同体验。他承认这些模型还需要在易用和顺手程度上继续改进，并说后续发布将优先处理这一点。他还称赞 Greg Brockman 从早期 OpenAI 工程师成长为负责公司一些最困难业务责任的领导者。

Sources: https://x.com/sama/status/2122798039899263456, https://x.com/sama/status/2122798042734633452, https://x.com/sama/status/2123103873166381287

### Swyx

Swyx argued that Devin's bots show what multi-agent teams should look like: always on, proactive, owning outcomes rather than tasks, managing subagents, and reporting through interactive artifacts. He rejected the "AI employee" frame as overpromising while the industry still lacks AGI, favoring agent managers that own a problem area. He was also an enthusiastic Astra user, saying it stopped getting stuck in loops and now runs part of his content pipeline. His media critique was blunt: the X algorithm rewards overconfident predictions and lets forecasters profit from later apology posts.

Swyx 认为，Devin 的 bots 展示了多 agent 团队应该是什么样：始终在线、主动、对结果而不是任务负责、管理 subagent，并通过交互式 artifact 汇报。他不认同 AI employee 这个说法，认为在还没有 AGI 时这样承诺过度，更合适的是拥有问题域的 agent manager。他也是 Astra 的积极用户，说它不再陷入糟糕循环，现在负责他内容流水线的一部分。他对媒体的批评很直接：X 算法奖励过度自信的预测，也让预测者可以从后来的道歉帖中获益。

Sources: https://x.com/swyx/status/2122746401482592549, https://x.com/swyx/status/2122862646265520150, https://x.com/swyx/status/2123591875349422435

### Thariq

Thariq, formerly Claude Code at Anthropic, thinks software factories are a temporary problem because models will learn to build them. The more interesting question is how to create a workspace where agents collaborate with a human. He also argued that most people will not want to generate all their own software because good software is a set of strong opinions that someone has thought through. His closing point was that collaborating with increasingly powerful models is a technical skill with no diminishing returns yet, so builders should not disintermediate themselves too quickly.

曾负责 Anthropic Claude Code 的 Thariq 认为，software factory 只是一个暂时的问题，因为模型会学会自己构建它们。更有趣的问题是，如何打造一个让 agent 与人类协作的工作空间。他还认为，大多数人不会想生成自己所有的软件，因为好软件是一组有人认真思考过的强观点。他最后的判断是，与越来越强的模型协作本身就是一项技术能力，而且目前还看不到边际收益递减，所以 builder 不应过早把自己从流程中移除。

Sources: https://x.com/trq212/status/2122438326431154210, https://x.com/trq212/status/2123106370161705127, https://x.com/trq212/status/2123524052195463568, https://x.com/trq212/status/2124239684536840682

### Thibault Sottiaux

OpenAI's Thibault Sottiaux said the 6.2 models are extremely efficient in completion speed, cost, and how far a usage allowance goes. He also explained the disconnect between launch-week influencer videos and live user reactions: early testers recorded before several late changes landed. On the product side, he previewed a ChatGPT mobile redesign that gives Codex and Projects prominent placement, then shipped a desktop refresh aimed at 1.2 billion users.

OpenAI 的 Thibault Sottiaux 说，6.2 模型在任务完成速度、成本和用量可支撑的工作量上都非常高效。他还解释了发布周 influencer 视频与真实用户反馈之间的落差：早期测试者在几项后期改动落地前就完成了录制。产品方面，他预告了新的 ChatGPT 移动端设计，让 Codex 和 Projects 更显眼，随后又为 12 亿用户规模的产品更新了桌面端。

Sources: https://x.com/thsottiaux/status/2122754551187132438, https://x.com/thsottiaux/status/2122929634916679820, https://x.com/thsottiaux/status/2123557171321561133, https://x.com/thsottiaux/status/2123612433923051976

### Zara Zhang

Builder Zara Zhang argued that it is better to be slightly viral every week than massively viral for one day, because consistent high-quality output compounds. She paired that with a simple rule for curators: if you curate, you should create. Her client-facing warning was equally practical: do not deliver Claude Artifacts or ChatGPT sites as the final product, because clients may conclude they could have prompted the tool themselves.

Builder Zara Zhang 认为，每周小范围传播一次，比只火一天更好，因为持续输出高质量内容会形成复利。她还给策展者一条简单规则：如果你做策展，也应该自己创作。她对客户的提醒同样实用：不要把 Claude Artifacts 或 ChatGPT 网站直接当作最终交付物，因为客户可能会觉得自己也能 prompt 出来。

Sources: https://x.com/zarazhangrui/status/2122953849120153714, https://x.com/zarazhangrui/status/2123692630655873269, https://x.com/zarazhangrui/status/2123813583339532321

## Podcast

### Building Visual Intelligence &mdash; Andreas Blattmann &amp; Dustin Podell, Black Forest Labs

The Takeaway: Black Forest Labs is treating images, video, audio, and action as one visual-intelligence problem whose natural next stop is robotics.

核心结论：Black Forest Labs 正在把图像、视频、音频和动作视为同一个 visual intelligence 问题，而它的自然下一站是机器人。

Andreas Blattmann, co-inventor of latent diffusion, and Dustin Podell, a creator of SDXL who worked across SD3 and the Flux models, trace the company from Stable Diffusion's open ecosystem to Flux.3, a multimodal model trained across images, video, audio, and actions. Their distinction is useful: language models approximate deliberate reasoning, while visual models capture the fast, intuitive physics people use to catch a ball or pick up a bottle. That system-one intelligence is what makes the same technology useful for image editing, video, and real-world action.

Latent diffusion 共同发明人 Andreas Blattmann，以及 SDXL 创作者之一、参与 SD3 和 Flux 系列工作的 Dustin Podell，讲述了公司如何从 Stable Diffusion 的开放生态走到 Flux.3。Flux.3 是一个跨图像、视频、音频和动作训练的多模态模型。两人给出的区分很有用：语言模型接近深思熟虑的推理，视觉模型捕捉的是人接球或拿起瓶子时使用的快速直觉物理理解。正是这种 system one intelligence，让同一套技术可以服务于图像编辑、视频和真实世界动作。

The commercial base is already substantial. The episode notes $450 million raised and more than $100 million in reported revenue. The strategic bet is broader than generation: the company describes itself as having outgrown the image-lab framing. "BFL was not founded to be an image generation lab. Video modeling is actually the central means to understanding how our world basically works."

商业基础已经不小。节目提到公司累计融资 4.5 亿美元，已公布收入超过 1 亿美元。战略押注则比生成更大：公司认为自己的定位已经超出图像实验室。节目原话是：“BFL was not founded to be an image generation lab. Video modeling is actually the central means to understanding how our world basically works.”

Flux.3 Action is a 7B model designed to run close to the robot, with fine-tuning meant to close the last mile rather than teach every task. The founders expect in-context robot learning and commercial manufacturing deployments to arrive before consumer robots become ordinary, pointing to 2027 as the year robotics starts to matter in factories.

Flux.3 Action 是一个 7B 模型，目标是贴近机器人运行，fine-tuning 用来补齐最后一公里，而不是教会每一个任务。两位创始人预计，in-context robot learning 和制造业商业部署会先于消费级机器人普及，并把 2027 年视为机器人在工厂中开始真正重要的一年。

https://www.youtube.com/watch?v=8cGfJOU3AlQ

### Superintelligence Needs the Physical World with CEO and Co-Founder of Arda Bob McGrew

The Takeaway: Superintelligence may be built in data centers, but its consequences will remain trapped there unless intelligence gains perception and action in the physical world.

核心结论：超级智能也许会在数据中心里被造出来，但如果缺少物理世界中的感知和行动，它的影响仍会被困在那里。

Bob McGrew, Arda's CEO and co-founder and formerly OpenAI's chief research officer and an early Palantir executive, argues that the hard-takeoff story overweights researcher labor. In his telling, researchers are not the binding constraint. Experiments, GPUs, networks, and the ability to turn designs into physical systems are. Even fully automated research would produce a large one-time acceleration, not recursive self-improvement by itself. His test is concrete: "If you look around outside, how different is anything from ten years ago before AI happened? Not very different at all."

Arda CEO 兼联合创始人 Bob McGrew 曾是 OpenAI 首席研究官和 Palantir 早期高管。他认为 hard takeoff 叙事高估了研究员劳动力的作用。按他的解释，研究员不是约束条件，实验、GPU、网络，以及把设计变成物理系统的能力才是。即使研究完全自动化，也只会带来一次大幅加速，而不是仅凭这一点就实现递归自我改进。他的检验很具体：“If you look around outside, how different is anything from ten years ago before AI happened? Not very different at all.”

Arda's answer is manufacturing. McGrew wants reconfigurable robotic work cells that can absorb design changes quickly, with two arms and a camera rather than a humanoid form. Closed-world factory tasks are the near-term opening; open-world home robots can wait. The longer arc is self-replicating factories and machines that build machines, extending industrial capacity beyond Earth.

Arda 的答案是制造业。McGrew 想要可重构的机器人工作单元，能够快速吸收设计变化，形态是两条手臂加一个摄像头，而不是人形机器人。封闭世界的工厂任务是近期入口，开放世界的家用机器人可以稍后再来。更长远的图景是自复制工厂和能制造机器的机器，把工业能力扩展到地球之外。

The strategic claim is that intelligence becomes useful when paired with cheap perception and manipulation. "I don't think you are actually gonna be able to get to superintelligence without changes in the physical world." The payoff is not just productivity, but a physical substrate for discovery, resilience, and eventually space exploration.

他的战略判断是，智能只有与廉价感知和操作能力结合才会真正有用。“I don't think you are actually gonna be able to get to superintelligence without changes in the physical world.” 回报不只是生产力，还包括发现、韧性以及最终太空探索所需的物理基础。

https://www.youtube.com/watch?v=_wLzJINt9iQ

### Scaling Linear’s GTM to $100M ARR &mdash; Cristina Cordova, COO

The Takeaway: Linear scaled to $100 million in ARR by adding enterprise selling without abandoning the product-led discipline that made the product trusted.

核心结论：Linear 在保持 product-led 纪律的同时加入企业销售，从而把 ARR 做到了 1 亿美元。

Cristina Cordova, Linear's COO, joined when the company had roughly 40 employees and a self-serve base that reached startups but rarely public-company accounts. Her mandate was to build the business motion without turning Linear into a conventional sales-heavy company. She describes a deliberately small team, work trials, experienced account executives who can sell technical products, and a support organization given unusual attention because the founders did not want to outsource it entirely. Sales earned credibility with engineering by staying close to customer problems instead of hiring far ahead of demand.

Linear COO Cristina Cordova 加入时，公司大约有 40 名员工，自服务用户基础能够触达创业公司，却很少拿到上市公司客户。她的任务是建立 business motion，同时不把 Linear 变成传统意义上销售驱动的公司。她描述了刻意保持精简的团队、work trial、能够销售技术产品的资深 AE，以及一个受到特别重视的支持组织，因为创始人不想把它完全外包。销售通过与客户问题保持近距离而不是大幅超前招聘，赢得了工程团队的信任。

The agent shift changed the product's center of gravity. Linear launched an MCP server in 2025, and Cordova says that "over 50% of issues created on Linear are created by agents" roughly a year and a half later. That pushed the company from issue tracking toward agent orchestration and a new API for teams building their own agents. The operating lesson is that a product-led company can add sales, but only if the motion reinforces the product's philosophy.

Agent 的变化改变了产品重心。Linear 在 2025 年推出 MCP server，Cordova 说大约一年半后，“over 50% of issues created on Linear are created by agents”。这推动公司从 issue tracking 走向 agent orchestration，并为自建 agent 的团队提供新 API。运营上的经验是，product-led 公司可以加入销售，但前提是销售方式强化而不是稀释产品哲学。

Cordova is also candid that not every company needs a COO. Hire one when founders know what great looks like in a function but do not yet know how to build it.

Cordova 也很坦率：不是每家公司都需要 COO。只有当创始人知道某个职能里什么是优秀，却还不知道如何搭建它时，才适合引入这样的人。

https://www.youtube.com/watch?v=x0VSm6IjcDQ

### Also published / 其他已发布

- [Notion’s Founder on the One Thing Your AI Is Missing](https://www.youtube.com/watch?v=PGWvMrF4XIA): AI &amp; I by Every. Ivan Zhao argues that agents make workflows and interfaces easier to generate, but durable business context and data remain the harder layer. Ivan Zhao 认为 agent 让工作流和界面更容易生成，但可持久的业务上下文和数据仍然是更难的一层。

## Blog

The validated weekly feed contained no qualifying blog posts.

经过验证的周度 feed 中没有符合条件的博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
