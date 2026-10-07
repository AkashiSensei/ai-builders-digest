[English](../../en/daily/ai-digest-2026-10-07-Wed.md) | [中文](../../zh/daily/ai-digest-2026-10-07-Wed.md) | [Bilingual](./ai-digest-2026-10-07-Wed.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. Prompting is shifting from scaffolds to intent, effort, and verification.** Boris Cherny, who works on Claude Code at Anthropic, says he is "surprised that people are surprised this is how I prompt Claude," insisting you should "talk to Claude the way you would a coworker" because "there's no secret to prompting." Prompts mattered enormously in the Sonnet 3.5 era, he says, but today what matters more is telling the model what you want it to do, how much effort to spend, and how it should verify it did the right thing. Thariq, who also works on Claude Code at Anthropic, adds that "working at a higher level of abstraction has always required understanding the lower level ones," and coding agents do not change that. ([Boris Cherny](https://x.com/bcherny/status/2107565388250874193), [Boris Cherny's prompt](https://x.com/bcherny/status/2107532985897771152), [Thariq](https://x.com/trq212/status/2107504677143368163))

**1. prompt 的重点正在从脚手架转向意图、投入程度和验证。** 在 Anthropic 负责 Claude Code 的 Boris Cherny 说，他「surprised that people are surprised this is how I prompt Claude」，并坚持应该「talk to Claude the way you would a coworker」，因为「there's no secret to prompting」。他说在 Sonnet 3.5 时代 prompt 极其重要，但今天更重要的是告诉模型三件事：你想让它做什么、你希望它投入多少精力、以及它该如何验证自己做对了。同样在 Anthropic 负责 Claude Code 的 Thariq 补充说，「working at a higher level of abstraction has always required understanding the lower level ones」，而 coding agent 并没有改变这一点。（[Boris Cherny](https://x.com/bcherny/status/2107565388250874193)、[Boris Cherny 的 prompt](https://x.com/bcherny/status/2107532985897771152)、[Thariq](https://x.com/trq212/status/2107504677143368163)）

**2. Agents are splitting into cloud brains and local hands.** Thariq says the trend is "Claude's 'brains' in the cloud" paired with "local hands" to operate your computer, and flags the hard part: if Claude can only reach your files while your machine is online, it may be "effectively blocked on doing work" until the computer comes back, so syncing is likely needed, edge cases included. Peter Steinberger, who works on OpenClaw and with OpenAI, shows the pattern in production: his team hooked its agent to X so unassigned sessions are free for anyone to grab, and the agent pings whoever worked on the related code last. "Whole thing was a prompt," he says, and the team server extended itself because plugins are now hot reloadable. ([Thariq](https://x.com/trq212/status/2107580785456976085), [Thariq on the sync problem](https://x.com/trq212/status/2107580787277340835), [Peter Steinberger](https://x.com/steipete/status/2107697554448421160))

**2. agent 正在分裂成云端的大脑和本地的双手。** Thariq 说趋势是「Claude's 'brains' in the cloud」加上操作你电脑的「local hands」，并指出真正的难点：如果 Claude 只能在你电脑在线时访问你的文件，它可能会「effectively blocked on doing work」，直到电脑重新开机，所以大概率需要某种同步，还要处理各种边缘情况。在 OpenClaw 工作并与 OpenAI 有合作的 Peter Steinberger 展示了这套模式在生产中的样子：他们把团队 agent 接到 X 上，未分配的 session 谁都可以认领，agent 会找出最近改过相关代码的人并在服务器上提醒他。他说「Whole thing was a prompt」，而且因为插件现在支持热重载，团队服务器自己扩展了自己。（[Thariq](https://x.com/trq212/status/2107580785456976085)、[Thariq 谈同步问题](https://x.com/trq212/status/2107580787277340835)、[Peter Steinberger](https://x.com/steipete/status/2107697554448421160)）

**3. AI is about to reshape how software is built and secured.** Replit CEO Amjad Masad says advances in AI-powered reverse engineering and decompilation are "absolutely insane," predicting that "pretty soon all software will be de facto open-source." Box CEO Aaron Levie argues cyber "will be one of the most defining domains for AI in the coming years," with security teams facing "vibe coded issues, agentic attacks, and even accidental agent swarms hunting for data," and calls OpenAI plus Hugging Face "just a preview of what's to come." He expects a wave of agentic security products and "a booming market for cyber professionals that can effectively deploy agents for security purposes." ([Amjad Masad](https://x.com/amasad/status/2107671204639465961), [Aaron Levie](https://x.com/levie/status/2107680435644039269))

**3. AI 即将重塑软件如何被构建，也重塑它如何被保护。** Replit CEO Amjad Masad 说 AI 驱动的逆向工程和反编译进展「absolutely insane」，并预测「pretty soon all software will be de facto open-source」。Box CEO Aaron Levie 认为 cyber「will be one of the most defining domains for AI in the coming years」，安全团队要面对「vibe coded issues, agentic attacks, and even accidental agent swarms hunting for data」，并把 OpenAI 加上 Hugging Face 称为「just a preview of what's to come」。他预计会涌现一批 agentic 安全产品，以及「a booming market for cyber professionals that can effectively deploy agents for security purposes」。（[Amjad Masad](https://x.com/amasad/status/2107671204639465961)、[Aaron Levie](https://x.com/levie/status/2107680435644039269)）

**4. At-scale AI decisions hinge on confidence thresholds and maintenance debt.** Vercel CEO Guillermo Rauch highlights a "very simple feature" he believes "will be extremely impactful for at-scale AI decision-making," describing it as "thinking fast and a bit less fast under a confidence threshold." Nan Yu, who works on product for Codex at OpenAI and previously ran product at Linear, warns that some changes "will cause extreme degradation in systems that no one loves to maintain, but someone has to." ([Guillermo Rauch](https://x.com/rauchg/status/2107606246350266469), [Nan Yu](https://x.com/thenanyu/status/2107506074370920796))

**4. 规模化 AI 决策的关键在置信度阈值和维护债。** Vercel CEO Guillermo Rauch 强调一个「very simple feature」，他认为它「will be extremely impactful for at-scale AI decision-making」，并把它描述为「thinking fast and a bit less fast under a confidence threshold」。在 OpenAI 负责 Codex 产品、此前在 Linear 负责产品的 Nan Yu 警告说，有些改动「will cause extreme degradation in systems that no one loves to maintain, but someone has to」。（[Guillermo Rauch](https://x.com/rauchg/status/2107606246350266469)、[Nan Yu](https://x.com/thenanyu/status/2107506074370920796)）

**5. Claude keeps widening the surfaces where work happens.** Anthropic's Claude account says you can now paste a Google file link or ask for a new doc, sheet, or deck and it opens beside the chat for you and Claude to edit together, with access following your Google sharing permissions; it is in beta on all paid plans. The account also spotlights Every, which runs as much work as possible through agents and built a company agent on Claude Managed Agents that the team uses in Slack before releasing it to subscribers. Every CEO Dan Shipper says they "couldn't have built the Every agent without Claude Managed Agents," and Google VP Josh Woodward calls mask-based editing his favorite, promising "much more coming soon." ([Claude](https://x.com/claudeai/status/2107522599530139767), [Claude](https://x.com/claudeai/status/2107574195978641911), [Dan Shipper](https://x.com/danshipper/status/2107575089441181861), [Josh Woodward](https://x.com/joshwoodward/status/2107679061854273656))

**5. Claude 持续拓宽「工作发生的地方」。** Anthropic 的 Claude 账号说，现在你可以在 Claude 里粘贴 Google 文件链接，或者直接要一份新的文档、表格或幻灯片，它会在对话旁边打开，供你和 Claude 一起编辑，访问权限遵循你的 Google 共享设置；该功能在所有付费方案上处于 beta。该账号还介绍了 Every：这个团队尽可能把工作都交给 agent，并用 Claude Managed Agents 搭了一个公司 agent，全团队都在 Slack 里用，内部流行后又开放给订阅者。Every CEO Dan Shipper 说，他们「couldn't have built the Every agent without Claude Managed Agents」；Google 副总裁 Josh Woodward 则说 mask-based editing 是他的最爱，并预告「much more coming soon」。（[Claude](https://x.com/claudeai/status/2107522599530139767)、[Claude](https://x.com/claudeai/status/2107574195978641911)、[Dan Shipper](https://x.com/danshipper/status/2107575089441181861)、[Josh Woodward](https://x.com/joshwoodward/status/2107679061854273656)）

**6. Post-training is becoming the enterprise moat, and inference is where the money is.** Applied Compute's CEO argues that with reinforcement learning "we essentially have a hill climbing machine," where the hardest part is "defining the hill to climb," which is why evals matter and should be guarded like non-fungible employees. He frames "owning your intelligence" around flexibility and control, says post-training "wins inference" because the largest workloads pay off first, and points to Jevons' paradox as price cuts trigger usage spikes. ([Unsupervised Learning](https://www.youtube.com/@RedpointAI))

**6. post-training 正在成为企业的护城河，而推理才是钱之所在。** Applied Compute 的 CEO 认为，有了 reinforcement learning，「we essentially have a hill climbing machine」，最难的部分是「defining the hill to climb」，所以 eval 很重要，也必须像对待不可替代的员工一样谨慎守护。他用灵活性和控制权来定义「owning your intelligence」，说 post-training「wins inference」，因为最大的工作负载最先回本，并指出 Jevons 悖论：降价会带来用量激增。（[Unsupervised Learning](https://www.youtube.com/@RedpointAI)）

## X / Twitter

### Boris Cherny

Boris Cherny, who works on Claude Code at Anthropic, says he is "surprised that people are surprised this is how I prompt Claude." His guidance: "Talk to Claude the way you would a coworker. There's no secret to prompting. There's no need to be overly scaffolded or prescriptive for most tasks -- give Claude a goal, and it will figure it out." He adds that "back in the Sonnet 3.5 days, your prompt mattered a lot," but today it matters more to communicate three things: what you want it to do, how much effort you want it to spend, and how it should verify it did the right thing. He shared his own prompts as examples of what that looks like in practice.

在 Anthropic 负责 Claude Code 的 Boris Cherny 说，他「surprised that people are surprised this is how I prompt Claude」。他的建议是：「Talk to Claude the way you would a coworker. There's no secret to prompting. There's no need to be overly scaffolded or prescriptive for most tasks -- give Claude a goal, and it will figure it out.」他补充说「back in the Sonnet 3.5 days, your prompt mattered a lot」，但今天更重要的是传达三件事：你想让它做什么、你希望它投入多少精力、以及它该如何验证自己做对了。他还分享了自己实际使用的 prompt 作为示例。

- [Boris Cherny: how he prompts Claude](https://x.com/bcherny/status/2107565388250874193)
- [Boris Cherny: the prompt](https://x.com/bcherny/status/2107532985897771152)
- [Boris Cherny: another example of his prompts](https://x.com/bcherny/status/2107565497680314831)

### Thariq

Thariq, who works on Claude Code at Anthropic, says "we're increasingly going to be moving towards Claude's 'brains' in the cloud and giving Claude 'local hands' to operate on your computer," a shift he discussed on Latent Space. He flags a tricky technical problem: if Claude can only access your files when your computer is online, it could be "effectively blocked on doing work" until the machine is back on, so some form of sync is probably needed, with edge cases to solve. Separately, he argues that "working at a higher level of abstraction has always required understanding the lower level ones," and he does not think coding agents change that.

在 Anthropic 负责 Claude Code 的 Thariq 说，「we're increasingly going to be moving towards Claude's 'brains' in the cloud and giving Claude 'local hands' to operate on your computer」，他在 Latent Space 上讨论过这个转变。他指出一个棘手的技术问题：如果 Claude 只能在你电脑在线时访问你的文件，它可能会「effectively blocked on doing work」，直到电脑重新开机，所以大概率需要某种形式的同步，还要处理边缘情况。另外，他认为「working at a higher level of abstraction has always required understanding the lower level ones」，而且他不认为 coding agent 改变了这一点。

- [Thariq: cloud brains, local hands](https://x.com/trq212/status/2107580785456976085)
- [Thariq: the sync problem](https://x.com/trq212/status/2107580787277340835)
- [Thariq: abstraction still requires the lower levels](https://x.com/trq212/status/2107504677143368163)

### Peter Steinberger

Peter Steinberger, who works on OpenClaw and with OpenAI, says he hooked his team's agent up to X to trigger work faster. Unassigned sessions are open for anyone to grab, and the agent looks at who worked on the related code last and pings them on the server. "Whole thing was a prompt," he says, and the team server extended itself because plugins are now hot reloadable.

在 OpenClaw 工作并与 OpenAI 有合作的 Peter Steinberger 说，他把团队的 agent 接到 X 上，好更快触发工作。未分配的 session 谁都能认领，agent 会找出最近改过相关代码的人，并在服务器上提醒他。他说「Whole thing was a prompt」，而且因为插件现在支持热重载，团队服务器自己扩展了自己。

- [Peter Steinberger: hooking the team agent to X](https://x.com/steipete/status/2107697554448421160)

### Claude

Anthropic's Claude account says that in Claude you can paste a Google file link or ask for a new doc, sheet, or deck, and it opens beside the chat for you and Claude to edit together, with access following your Google sharing permissions; it is in beta on all paid plans. The account also highlights Every, which runs as much work as possible through agents and built a company agent on Claude Managed Agents that everyone uses in Slack, then released it to subscribers once it caught on internally. A full conversation with Dan Shipper and Willie Williams on how they built it is linked from the account.

Anthropic 的 Claude 账号说，在 Claude 里你可以粘贴 Google 文件链接，或者要一份新的文档、表格或幻灯片，它会在对话旁边打开，供你和 Claude 一起编辑，访问权限遵循你的 Google 共享设置；该功能在所有付费方案上处于 beta。该账号还介绍了 Every：这个团队尽可能把工作都交给 agent，并用 Claude Managed Agents 搭了一个公司 agent，全团队都在 Slack 里使用，内部流行后又开放给订阅者。该账号还给出了 Dan Shipper 和 Willie Williams 讲述他们如何搭建的完整对话链接。

- [Claude: editing Google files beside the chat](https://x.com/claudeai/status/2107522599530139767)
- [Claude: Every's company agent on Claude Managed Agents](https://x.com/claudeai/status/2107574195978641911)
- [Claude: the conversation with Dan Shipper and Willie Williams](https://x.com/claudeai/status/2107574198482927900)

### Dan Shipper

Every CEO Dan Shipper says the team "couldn't have built the Every agent without Claude Managed Agents," and calls it "extremely fun" to sit down and talk about how it came together.

Every CEO Dan Shipper 说，他们「couldn't have built the Every agent without Claude Managed Agents」，并说坐下来聊它如何成型的过程「extremely fun」。

- [Dan Shipper: building the Every agent with Claude Managed Agents](https://x.com/danshipper/status/2107575089441181861)

### Josh Woodward

Josh Woodward, a vice president at Google whose bio lists Google Labs, Gemini App, and Google AI Studio, called mask-based editing his favorite, with "much more coming soon."

Google 副总裁 Josh Woodward 的 bio 里写着 Google Labs、Gemini App 和 Google AI Studio，他说 mask-based editing 是他的最爱，并预告「much more coming soon」。

- [Josh Woodward: mask-based editing](https://x.com/joshwoodward/status/2107679061854273656)

### Amjad Masad

Replit CEO Amjad Masad says what is happening in AI-powered reverse engineering and decompilation is "absolutely insane," and predicts that "pretty soon all software will be de facto open-source." His conclusion: "AI is coming for everything and everyone."

Replit CEO Amjad Masad 说，AI 驱动的逆向工程和反编译领域正在发生的事「absolutely insane」，并预测「pretty soon all software will be de facto open-source」。他的结论是：「AI is coming for everything and everyone.」

- [Amjad Masad: AI reverse engineering and decompilation](https://x.com/amasad/status/2107671204639465961)

### Aaron Levie

Box CEO Aaron Levie says cyber "will be one of the most defining domains for AI in the coming years" and a huge area of focus for most enterprises. He expects AI to create a new level of work for security teams dealing with "the increase of vibe coded issues, agentic attacks, and even accidental agent swarms hunting for data," calling OpenAI plus Hugging Face "just a preview of what's to come." Because security teams have often been the most resource-starved in the enterprise, he says AI agents will also be part of the answer, with a range of new agentic products for protecting code, enterprise systems, mission-critical infrastructure, and data. He calls it "a booming market for cyber professionals that can effectively deploy agents for security purposes in the enterprise."

Box CEO Aaron Levie 说，cyber「will be one of the most defining domains for AI in the coming years」，也是大多数企业重点关注的方向。他预计 AI 会给安全团队制造一个新层级的工作，要处理「the increase of vibe coded issues, agentic attacks, and even accidental agent swarms hunting for data」，并称 OpenAI 加上 Hugging Face「just a preview of what's to come」。由于安全团队长期是企业里资源最紧张的一群人，他说 AI agent 也会成为答案的一部分，会出现一批新的 agentic 产品，用来保护代码、企业系统、关键基础设施和数据。他称这是「a booming market for cyber professionals that can effectively deploy agents for security purposes in the enterprise」。

- [Aaron Levie: cyber as a defining AI domain](https://x.com/levie/status/2107680435644039269)

### Guillermo Rauch

Vercel CEO Guillermo Rauch highlights a "very simple feature" that he believes "will be extremely impactful for at-scale AI decision-making," describing the idea as "thinking fast and a bit less fast under a confidence threshold."

Vercel CEO Guillermo Rauch 强调一个「very simple feature」，他认为它「will be extremely impactful for at-scale AI decision-making」，并把这种思路描述为「thinking fast and a bit less fast under a confidence threshold」。

- [Guillermo Rauch: confidence thresholds for at-scale AI decisions](https://x.com/rauchg/status/2107606246350266469)

### Nan Yu

Nan Yu, who works on product for Codex at OpenAI and previously ran product at Linear, says he worries that some changes "will cause extreme degradation in systems that no one loves to maintain, but someone has to."

在 OpenAI 负责 Codex 产品、此前在 Linear 负责产品的 Nan Yu 说，他担心有些改动「will cause extreme degradation in systems that no one loves to maintain, but someone has to」。

- [Nan Yu: degradation in unloved systems](https://x.com/thenanyu/status/2107506074370920796)

### Nikunj Kothari

FPV Ventures partner Nikunj Kothari argues that too many VCs are "chasing dopamine" or rage-baiting to get more views on X, warning that "X is not for nuance, so once you say something, you really can't take it back." He says the damage falls on the people "under" them more than on the person talking, and that he knows of two people who "lost deals that were all set because of the drama going on X." Given how much of a commodity capital has become and how many venture funds exist, he writes, "very few are playing long term games."

FPV Ventures 合伙人 Nikunj Kothari 认为，太多 VC 在 X 上「chasing dopamine」或者故意 rage-baiting 来博取流量，并警告「X is not for nuance, so once you say something, you really can't take it back」。他说受伤更深的是他们「under」的人，而不是说话的人本身，并且他知道有两个人「lost deals that were all set because of the drama going on X」。考虑到资本已经高度商品化、基金数量又那么多，他写道「very few are playing long term games」。

- [Nikunj Kothari: VCs chasing dopamine on X](https://x.com/nikunj/status/2107706522457497753)

### Sam Altman

OpenAI's Sam Altman posted a series of reflective notes, writing that he was "looking up at the stars with extra awe tonight" and quoting "thy sea is so great and my boat is so small." He thanked "the machines, and the structure of reality, for letting us understand a little more," and thanked "the untold number of people who put in the technical work, brick by brick over the generations, to get us to the point where such a wonder is possible."

OpenAI 的 Sam Altman 发了一组反思性的推文，写自己「looking up at the stars with extra awe tonight」，并引用「thy sea is so great and my boat is so small」。他感谢「the machines, and the structure of reality, for letting us understand a little more」，也感谢「the untold number of people who put in the technical work, brick by brick over the generations, to get us to the point where such a wonder is possible」。

- [Sam Altman: looking up at the stars](https://x.com/sama/status/2107691261776052633)
- [Sam Altman: thank you to the machines](https://x.com/sama/status/2107691262795239805)
- [Sam Altman: brick by brick](https://x.com/sama/status/2107691577015755196)

## Podcast

### Unsupervised Learning: Ep 94: Applied Compute CEO on the Limits of RL, the New AI Hyperscaler & Why Post-Training Wins Inference

The Takeaway: Reinforcement learning is a hill-climbing machine, and the durable edge belongs to whoever defines the hill with their own data, evals, and judgment instead of renting someone else's model.

核心 takeaway：reinforcement learning 就是一台爬山机器，真正持久的优势属于那些用自己的数据、eval 和判断来定义这座山的人，而不是租用别人模型的人。

Applied Compute's CEO, who previously worked on Codex at OpenAI, runs a company that helps large AI applications train and serve their own models. His case for "owning your intelligence" is less about hostile labs than about flexibility and control: where models run, what they optimize for, and how they are deployed. "The idea of owning your intelligence really is about flexibility and control," he says, and capturing it means having access to weights plus the infrastructure to post-train, infer, and route between models.

Applied Compute 的 CEO 曾在 OpenAI 负责 Codex。他现在的公司帮助大型 AI 应用训练和部署自己的模型。他为「owning your intelligence」给出的理由，重点不在实验室有敌意，而在灵活性和控制权：模型跑在哪里、优化什么、如何部署。他说：「The idea of owning your intelligence really is about flexibility and control.」要做到这一点，你需要拿到权重，也需要能 post-train、推理并在多个模型之间路由的基础设施。

On reinforcement learning, his framing is blunt: "What we have with RL is we essentially have a hill climbing machine. The hardest part is actually defining the hill to climb." That is why evals matter so much, and why he argues they should be guarded: "Your employees are not fungible. You would not like be comfortable with them going to another company and doing work there. And same thing with these models." Every public benchmark gets benchmarked, so keeping your best evals private is itself an advantage.

谈到 reinforcement learning，他的表述很直白：「What we have with RL is we essentially have a hill climbing machine. The hardest part is actually defining the hill to climb.」这也是 eval 如此重要的原因，他认为 eval 必须被谨慎守护：「Your employees are not fungible. You would not like be comfortable with them going to another company and doing work there. And same thing with these models.」所有公开 benchmark 都会被拿来 benchmark，所以把自己最好的 eval 保密本身就是一种优势。

His sharpest claim is that post-training wins inference. The largest, most mature workloads are where custom models pay off first, and because training and inference can be co-optimized, how a model is trained shapes how it is served. He also argues the cost of post-training is falling fast while Jevons' paradox holds: every price cut triggers a usage spike, so efficiency, not raw capability, increasingly decides which model wins. Most companies, he says, should exhaust harness and context optimization before touching the weights.

他最锋利的一句话是：post-training 会赢下推理。最大、最成熟的工作负载最先从定制模型上回本，而且因为训练和推理可以协同优化，模型怎么训练会影响它怎么被服务。他还认为 post-training 的成本正在快速下降，而 Jevons 悖论依然成立：每一次降价都会带来用量激增，所以决定哪个模型胜出的越来越是效率，而不是原始能力。他说，大多数公司应该先把 harness 和 context 优化做到极限，再去动权重。

On hiring, he insists the best engineers still learn the fundamentals. His teams let candidates go all-in with AI tools, then ask them to explain the design and trade-offs: "You can't delegate your thinking away and basically rely on it as a crutch, because then you get these like massive slop code bases that you can't actually explain."

在招聘上，他坚持最好的工程师仍然要学基本功。他的团队会让候选人放开手脚用 AI 工具，然后要求他们解释设计和取舍：「You can't delegate your thinking away and basically rely on it as a crutch, because then you get these like massive slop code bases that you can't actually explain.」

Source: https://www.youtube.com/@RedpointAI

## Blog

The validated feed contained no new qualifying blog posts for this run.

本轮通过验证的 feed 中没有新的合格博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
