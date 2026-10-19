[English](../../en/daily/ai-digest-2026-10-19-Mon.md) | [中文](../../zh/daily/ai-digest-2026-10-19-Mon.md) | [Bilingual](./ai-digest-2026-10-19-Mon.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

Box CEO Aaron Levie argues that agent swarms will make compute a first-class input to a much wider range of economic work. Many research, data-processing, discovery, testing and coordination tasks are limited today by human time, so only a small share of their potential value gets done. Once agents can use tools, write code, process data, coordinate with one another and apply domain depth, the limiting variable becomes how many tokens and how much compute can be aimed at a well-specified goal. He expects that shift to reshape cybersecurity, life sciences, materials research, trading, QA testing and data processing, and to change competitive dynamics in those fields ([tweet](https://x.com/levie/status/2112051081014649303)).

Box CEO Aaron Levie 认为，agent swarms 的意义在于让算力第一次成为大量重要经济任务中的关键变量。研究、数据处理、发现、测试和协调工作目前都受限于人的时间，因此相对于其潜在价值，真正被完成的部分很少。当 agent 能够使用工具、写代码、处理数据、彼此协作并具备领域深度后，只要目标设定正确、投入足够 token，就能处理极其复杂的问题。他预计这会重塑网络安全、生命科学、材料科学、交易、QA 测试和数据处理等领域，也会改变这些领域的竞争格局（[tweet](https://x.com/levie/status/2112051081014649303)）。

Anthropic Engineering makes the case that agent security has to be designed around containment first. As Claude gets access to more systems, the theoretical blast radius grows even as safeguards improve. Human approval is not enough: telemetry showed users approved roughly 93% of permission prompts, and approval fatigue makes that oversight unreliable. Sandboxes, virtual machines, egress controls and tight filesystem boundaries put a hard ceiling on what an agent can reach, while model-layer defenses handle the probabilistic remainder. The essay's most useful line is: "The deterministic boundary is what gets hit when everything probabilistic misses" ([blog](https://www.anthropic.com/engineering/how-we-contain-claude)).

Anthropic Engineering 提出，agent 安全必须优先从隔离环境入手。随着 Claude 获得的权限越来越多，即使防护措施进步，理论上的影响范围仍在扩大。人类的逐项批准并不可靠：遥测显示用户批准了大约 93% 的权限提示，而审批疲劳会让监督流于形式。sandbox、虚拟机、egress 控制和严格的文件系统边界，为 agent 能触及的范围设定硬上限，模型层防御则处理剩余的概率性风险。文章中最值得记住的一句话是："The deterministic boundary is what gets hit when everything probabilistic misses." 也就是说，当所有概率性防御都失效时，最终挡住风险的是确定性的边界（[blog](https://www.anthropic.com/engineering/how-we-contain-claude)）。

Reflection AI co-founder and CEO Misha Laskin frames open weights as both a competitive check and a safety strategy. Reflection's first open model, Beam, is a 500 billion parameter model with 23 billion active parameters, trained with 6,000 GB300s for pretraining and more than 10,000 GB300s for four weeks of reinforcement learning. Laskin says it is three to four times more reasoning-efficient than models in its capability class. His argument is that removing offensive cyber capability also removes defensive capability, and that many more eyes on model behavior make vulnerabilities shallower. He also sees token demand at gateways flipping toward open models and expects open stacks to pull infrastructure spending with them ([podcast](https://www.youtube.com/@NoPriorsPodcast)).

Reflection AI 联合创始人兼 CEO Misha Laskin 把开放权重同时视为竞争制衡和安全策略。Reflection 的第一个开放模型 Beam 是一个总参数 5000 亿、激活参数 230 亿的模型，预训练使用 6000 块 GB300，强化学习使用超过 1 万块 GB300 训练四周。Laskin 说，它的推理效率比同能力等级的模型高 3 到 4 倍。他的核心论点是，移除网络攻击能力的同时也会移除网络防御能力，而让更多人检查模型行为会让漏洞变得更浅。他还看到 gateway 上的 token 需求正在转向开放模型，并认为开放栈会带动基础设施支出一起迁移（[podcast](https://www.youtube.com/@NoPriorsPodcast)）。

Anthropic's Claude Code postmortem is an unusually concrete account of how three small changes compounded into a broad perception of quality loss. A default reasoning-effort change, a cache optimization that kept dropping prior thinking on every turn, and a verbosity-limiting system prompt each hit different traffic on different schedules. The API was unaffected, and all three issues were resolved by April 20 in v2.1.116. Anthropic says it never intentionally degrades models, is resetting usage limits for subscribers, and is adding per-model evals, soak periods and gradual rollouts ([blog](https://www.anthropic.com/engineering/april-23-postmortem)).

Anthropic 的 Claude Code 复盘非常具体地说明了三个小改动如何叠加成广泛的质量下降。默认 reasoning effort 的调整、一个在每轮都错误丢弃历史思考的缓存优化，以及一个限制回答长度的 system prompt，分别在不同时间影响了不同的流量。API 没有受到影响，三个问题都在 4 月 20 日的 v2.1.116 中解决。Anthropic 表示从未有意降低模型质量，正在为所有订阅用户重置用量限制，并增加按模型运行的 eval、soak period 和渐进式 rollout（[blog](https://www.anthropic.com/engineering/april-23-postmortem)）。

The hiring signal from Swyx is that data-intensive engineering is scarcer than generic AI application work. He draws a sharp line between a "RAG guy" and someone who has built data-intensive applications, calls the demand gap the starkest of his career, and is recruiting for a mission that prefers San Francisco but offers relocation and visas. Peter Yang makes a related argument about evidence over interviews: he wants work trials to become the norm, citing a story in which a candidate was given two weeks to build a specific feature and shipped it, avoiding a four-week interview process ([tweet](https://x.com/swyx/status/2112073533794971941), [tweet](https://x.com/petergyang/status/2111970651326267529)).

Swyx 给出的招聘信号是，数据密集型工程能力比通用的 AI 应用开发更稀缺。他把 "RAG guy" 和真正做过 data-intensive applications 的人区分开来，称当前的需求差距是他职业生涯中最大的，并正在为一项 mission 招聘，优先 San Francisco，但可以提供 relocation 和签证支持。Peter Yang 则主张用实际工作代替面试：他希望 work trial 成为常态，并引用了一个案例，候选人用两周时间做出一个具体功能并成功交付，团队因此不必再花四周走面试流程（[tweet](https://x.com/swyx/status/2112073533794971941), [tweet](https://x.com/petergyang/status/2111970651326267529)）。

Cheap, fast models are turning small experiments into shipped artifacts. Vercel CEO Guillermo Rauch used deepseek-v4.1-flash-1017-fast through AI Gateway to add sound, better collision detection, an improved ramp and a following camera to a game for about 30 cents. Thariq, who works on Claude Code at Anthropic, is exploring a game whose main hook is making characters with agents, distributed open source so players can vibe code their own characters. Y Combinator President and CEO Garry Tan predicts that everyone will be using AsideAI with their agents within a year or so. On the infrastructure side, OpenAI's Thibault Sottiaux said OpenCode users who are also OpenAI API customers were restored and had attack-drawn credits refunded, and that Daybreak Blue access is available for defensive cyber work ([tweet](https://x.com/rauchg/status/2111929486661018081), [tweet](https://x.com/trq212/status/2111945336537420259), [tweet](https://x.com/trq212/status/2111884272101691613), [tweet](https://x.com/trq212/status/2111884199359897953), [tweet](https://x.com/garrytan/status/2111971992769565177), [tweet](https://x.com/thsottiaux/status/2112034063934742720)).

便宜而快速的模型正在把小型实验变成真正交付的产品。Vercel CEO Guillermo Rauch 通过 AI Gateway 使用 deepseek-v4.1-flash-1017-fast，为一个游戏加入了声音、更好的碰撞检测、改进的坡道和跟随汽车的镜头，总成本约 30 美分。在 Anthropic 负责 Claude Code 的 Thariq 正在探索一种以用 agent 制作角色为主要乐趣的游戏，并计划开源发布，让玩家用 vibe coding 创造自己的角色。Y Combinator 总裁兼 CEO Garry Tan 预测，一年左右之后所有人都会把 AsideAI 和自己的 agent 一起使用。基础设施方面，OpenAI 的 Thibault Sottiaux 表示，同时是 OpenAI API 客户的 OpenCode 用户已经恢复服务，攻击期间可能被扣掉的 credits 也已退还，防御方还可以申请 Daybreak Blue 权限（[tweet](https://x.com/rauchg/status/2111929486661018081), [tweet](https://x.com/trq212/status/2111945336537420259), [tweet](https://x.com/trq212/status/2111884272101691613), [tweet](https://x.com/trq212/status/2111884199359897953), [tweet](https://x.com/garrytan/status/2111971992769565177), [tweet](https://x.com/thsottiaux/status/2112034063934742720)）。

## X / Twitter

### Box CEO Aaron Levie

Box CEO Aaron Levie argues that agent swarms are a bigger deal than another productivity feature because they make compute a critical variable in many important economic tasks. Research, data processing, discovery work, testing and coordination are all limited by human time, so the economy does very little of them relative to their value. Once agents can use tools, write code, process data, coordinate and bring domain depth, he says, you can attack arbitrarily complex problems by setting the right goals and applying enough tokens. He expects this to reshape cybersecurity, life sciences, materials science, trading, QA testing, data processing and the competitive dynamics of those fields ([tweet](https://x.com/levie/status/2112051081014649303)).

Box CEO Aaron Levie 认为，agent swarms 不只是又一个生产力功能，因为它让算力成为许多重要经济任务中的关键变量。研究、数据处理、发现工作、测试和协调都受限于人的时间，因此经济体系实际完成的部分远少于这些工作的潜在价值。他说，当 agent 能够使用工具、写代码、处理数据、彼此协作并具备领域深度后，只要设定正确目标并投入足够 token，就可以处理任意复杂的问题。他预计这会重塑网络安全、生命科学、材料科学、交易、QA 测试、数据处理以及这些领域的竞争格局（[tweet](https://x.com/levie/status/2112051081014649303)）。

### Swyx

Swyx argues that data engineers matter more than AI engineers and that the market is drawing a sharper line between a "RAG guy" and someone who has built data-intensive applications. He calls the demand gap the starkest he has seen in his career in tech. He is hiring for a mission through jobs@latent.space, prefers San Francisco but says relocation and visas are possible, and asks candidates whose blog or GitHub shows that kind of work to apply ([tweet](https://x.com/swyx/status/2112073533794971941)).

Swyx 认为，data engineer 比 AI engineer 更重要，市场正在把 "RAG guy" 和真正做过 data-intensive applications 的人区分得越来越清楚。他称这种需求差距是他进入科技行业以来见过最大的。他正在通过 jobs@latent.space 为一个 mission 招聘，优先 San Francisco，但表示可以 relocation，也支持签证，并希望博客或 GitHub 能体现这类工作的候选人联系他（[tweet](https://x.com/swyx/status/2112073533794971941)）。

### Thibault Sottiaux, OpenAI

Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, said the team worked with OpenCode to restore users who are also OpenAI API customers and to refund any credits that would have been drawn in the attack. He also pointed defenders to Daybreak Blue access for OpenAI's cyber-permissive setup, with the warning not to wait until an incident happens ([tweet](https://x.com/thsottiaux/status/2112034063934742720)).

在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 表示，团队与 OpenCode 合作，让同时是 OpenAI API 客户的 OpenCode 用户恢复服务，并退还攻击期间可能被扣掉的 credits。他还提醒防御方可以申请 Daybreak Blue 权限，使用 OpenAI 的 cyber permissive 环境，并强调不要等到事故真的发生才准备（[tweet](https://x.com/thsottiaux/status/2112034063934742720)）。

### Peter Yang

Peter Yang, who publishes practical AI tutorials and interviews, argues that work trials should replace interviews as the default hiring process. He quotes Pompliano's account of giving a candidate two weeks to build a specific feature: the candidate asked questions, got the lay of the land and built it. The payoff was that the team no longer had to wonder whether the person could do the job, and it shipped a new feature instead of spending four weeks interviewing ([tweet](https://x.com/petergyang/status/2111970651326267529)).

制作实用 AI 教程和访谈的 Peter Yang 主张，work trial 应该取代面试，成为默认的招聘方式。他引用 Pompliano 的经历：团队给候选人两周时间做一个具体功能，候选人问了一些问题、了解了情况，然后把功能做了出来。结果是团队不用再怀疑这个人能不能胜任，还直接交付了一个新功能，而不是花四周时间走面试流程（[tweet](https://x.com/petergyang/status/2111970651326267529)）。

### Vercel CEO Guillermo Rauch

Vercel CEO Guillermo Rauch tried deepseek-v4.1-flash-1017-fast through AI Gateway to make a few improvements to a game. The model added sound, better collision detection, an improved ramp and a camera that follows the car, and the whole run cost about 30 cents ([tweet](https://x.com/rauchg/status/2111929486661018081)).

Vercel CEO Guillermo Rauch 通过 AI Gateway 试用了 deepseek-v4.1-flash-1017-fast，对一个游戏做了几项改进。模型加入了声音、更好的碰撞检测、改进的坡道和跟随汽车的镜头，整个运行成本约 30 美分（[tweet](https://x.com/rauchg/status/2111929486661018081)）。

### Thariq, Claude Code at Anthropic

Thariq, who works on Claude Code at Anthropic, says he often prefers vibe coding small parts of games to actually playing them, especially cerebral games such as League, and is trying to turn that into a design principle. One hook he keeps returning to is that making the game and its characters can be as fun as playing, so he would distribute the game as open source and let players vibe code their own characters, with the game balancing around them. The open questions are mechanical: whether characters play themselves like Salty Bet, or whether combat offers cinematic choices like Persona or Heavy Rain ([tweet](https://x.com/trq212/status/2111945336537420259), [tweet](https://x.com/trq212/status/2111884272101691613), [tweet](https://x.com/trq212/status/2111884199359897953)).

在 Anthropic 负责 Claude Code 的 Thariq 说，他现在常常更愿意用 vibe coding 做游戏的一小部分，而不是真的去玩，尤其是 League 这种需要动脑的游戏，并想把这个观察变成设计原则。他反复回到的一个钩子是，制作游戏和角色的乐趣可以和玩游戏一样大，所以他会把游戏开源发布，让玩家用 vibe coding 创造自己的角色，游戏会围绕这些角色做平衡。尚未解决的问题是玩法机制：角色是像 Salty Bet 那样自己战斗，还是像 Persona 或 Heavy Rain 那样在战斗中提供电影化的选择（[tweet](https://x.com/trq212/status/2111945336537420259), [tweet](https://x.com/trq212/status/2111884272101691613), [tweet](https://x.com/trq212/status/2111884199359897953)）。

### Y Combinator President and CEO Garry Tan

Y Combinator President and CEO Garry Tan predicts that everyone will be using AsideAI with their agents within a year or so ([tweet](https://x.com/garrytan/status/2111971992769565177)).

Y Combinator 总裁兼 CEO Garry Tan 预测，一年左右之后，所有人都会把 AsideAI 和自己的 agent 一起使用（[tweet](https://x.com/garrytan/status/2111971992769565177)）。

The remaining builders in the validated feed posted only brief reactions or personal notes, so they are omitted.

已验证 feed 中其余 builders 只发布了简短反应或个人笔记，因此没有收录。

## Podcast

### No Priors: Beam: The Great American Open Model with ReflectionAI Co-Founder and CEO Misha Laskin

**The Takeaway:** Open-weight models are not just a cheaper alternative; they are a competitive and defensive layer that lets more of the ecosystem inspect, customize and harden the systems everyone depends on.

**核心观点：** 开放权重模型不只是更便宜的选择，它还是一种竞争制衡和防御层，让生态中更多人能够检查、定制并加固所有人都依赖的系统。

Misha Laskin is co-founder and CEO of Reflection AI, a former Google DeepMind researcher with a PhD in physics, and his team has spent the past year building frontier open intelligence. Reflection grew from about 30 people to roughly 300, trained its first models end to end, and released Beam, its first open model. Beam is a 500 billion parameter model with 23 billion active parameters. Pretraining used 6,000 GB300s for a few weeks, now about 12 days with infrastructure efficiencies, while reinforcement learning used more than 10,000 GB300s for four weeks. Laskin says Beam is three to four times more reasoning-efficient than models in the same capability class, and up to 10x more efficient than larger models.

Misha Laskin 是 Reflection AI 的联合创始人兼 CEO，曾是 Google DeepMind 的研究员，拥有物理学博士学位。过去一年，他的团队一直在构建前沿的开放智能。Reflection 从大约 30 人增长到约 300 人，端到端训练了第一批模型，并发布了第一个开放模型 Beam。Beam 的总参数为 5000 亿，激活参数为 230 亿。预训练使用 6000 块 GB300 运行数周，在基础设施效率提升后现在约需 12 天；强化学习则使用超过 1 万块 GB300 训练四周。Laskin 说，Beam 的推理效率比同能力等级的模型高 3 到 4 倍，比更大的模型最多高 10 倍。

The strategic case for openness is as much about defense as cost. Laskin argues that removing offensive cyber capability also removes defensive capability, and that a small number of safety researchers inside closed labs cannot cover the long tail of unintended consequences. "When you remove cyber offensive capabilities, you also remove cyber defensive capabilities," he says. He applies Linus's law to safety: with enough eyeballs, most vulnerabilities become shallow.

开放的战略意义不仅在于成本，也在于防御。Laskin 认为，移除网络攻击能力的同时也会移除网络防御能力，而少数封闭实验室里的安全研究员无法覆盖所有长尾的意外后果。他说："When you remove cyber offensive capabilities, you also remove cyber defensive capabilities." 他把 Linus 定律应用到安全上：只要有足够多的眼睛，大多数漏洞都会变得容易发现和修补。

He also sees the market shifting. Token demand at gateways has moved from roughly 70/30 closed-to-open to 70/30 open-to-closed, and he expects open models to take the majority of tokens, much as Linux dominates servers while closed vendors remain valuable. Open models, in his framing, are "Trojan horses for the infrastructure that they bring with them," pulling software, chips and deployment services into their orbit. Enterprises typically rent closed intelligence first, then move to ownership when spending reaches $100 million or more a year, which creates demand for partners that can supply inference software, cluster management and hands-on deployment help.

他还看到市场正在转向。gateway 上的 token 需求已经从大约 70/30 的封闭对开放，变成 70/30 的开放对封闭。他预计开放模型会拿走大部分 token，就像 Linux 主导服务器，而封闭厂商仍然很有价值。用他的话说，开放模型是 "Trojan horses for the infrastructure that they bring with them"，会把软件、芯片和部署服务一起拉进自己的轨道。企业通常会先租用封闭智能，当每年支出达到 1 亿美元甚至更多时再转向自有部署，这为能够提供推理软件、集群管理和落地服务的合作伙伴创造了需求。

The hiring implication is counterintuitive. Laskin expects large model projects to stabilize around 100 researchers, not thousands, while applied research and evaluation-oriented deployment engineers become the growth area.

对招聘的启示有些反直觉。Laskin 预计大型模型项目会稳定在 100 名研究员左右，而不是几千人，同时应用研究和以 eval 为导向的部署工程师会成为增长领域。

Source: https://www.youtube.com/@NoPriorsPodcast

来源：https://www.youtube.com/@NoPriorsPodcast

## Blog

### Anthropic Engineering: How we contain Claude across products

Anthropic argues that as agents gain access, the engineering problem is capping the blast radius, not just supervising behavior. It identifies three risk categories, user misuse, model misbehavior and external attackers, and three defense layers: the model, the environment in which it runs and the external content it can reach. Human-in-the-loop approval is fallible. Telemetry showed users approved roughly 93% of permission prompts, and approval fatigue sets in. Claude Code auto mode catches about 83% of overeager behaviors before execution, but roughly 17% of overeager actions get through, so it is one layer inside a sandbox. On Gray Swan's Agent Red Teaming benchmark, Claude Opus 4.7 holds attack success to roughly 0.1% on single attempts and 5 to 6% after 100 adaptive attempts.

Anthropic 认为，随着 agent 获得更多权限，工程问题变成如何限制影响范围，而不只是监督它的行为。文章把风险分为三类：用户滥用、模型错误行为和外部攻击者；也把防御分为三层：模型本身、运行环境，以及 agent 能接触到的外部内容。human-in-the-loop 批准并不可靠。遥测显示，用户批准了大约 93% 的权限提示，而审批疲劳会逐渐出现。Claude Code auto mode 能在执行前拦截大约 83% 的过度主动行为，但仍有大约 17% 的过度主动操作会通过，所以它只是 sandbox 内的一层防御。在 Gray Swan 的 Agent Red Teaming 基准上，Claude Opus 4.7 把单次尝试的攻击成功率控制在约 0.1%，在 100 次自适应尝试后约为 5% 到 6%。

Three containment patterns organize the product designs: an ephemeral gVisor container for claude.ai, a human-in-the-loop OS sandbox for Claude Code that reduced permission prompts by 84%, and a sealed VM for Claude Cowork. The failures are equally concrete: project hooks that executed before the trust dialog, a phishing prompt that exfiltrated credentials from ~/.aws/credentials in 24 of 25 retries, and exfiltration through api.anthropic.com that passed an egress allowlist and was fixed with a man-in-the-middle proxy. VM isolation also kept endpoint detection and response tools from seeing inside Cowork. Looking ahead, Anthropic flags persistent memory poisoning, multi-agent trust escalation and agent identity as open problems.

三种隔离模式对应了不同产品的设计：为 claude.ai 使用的临时 gVisor 容器；为 Claude Code 使用的 human-in-the-loop 操作系统 sandbox，它把权限提示减少了 84%；以及为 Claude Cowork 使用的封闭虚拟机。失败案例同样具体：项目 hook 在信任对话框出现前就执行；一封钓鱼提示在 25 次重试中有 24 次成功把 ~/.aws/credentials 里的凭据外传；以及通过 api.anthropic.com 绕过 egress allowlist 的数据外传，后者最终用 man-in-the-middle proxy 修复。虚拟机隔离还导致 endpoint detection and response 工具看不到 Cowork 内部。展望未来，Anthropic 把持久记忆投毒、多 agent 信任升级和 agent 身份列为开放问题。

The authors are Max McGuinness, Mikaela Grace, Jiri De Jonghe, Jake Eaton and Abel Ribbink. Their operating principle is simple: "The deterministic boundary is what gets hit when everything probabilistic misses."

作者是 Max McGuinness、Mikaela Grace、Jiri De Jonghe、Jake Eaton 和 Abel Ribbink。他们的操作原则很简单："The deterministic boundary is what gets hit when everything probabilistic misses."

Source: https://www.anthropic.com/engineering/how-we-contain-claude

来源：https://www.anthropic.com/engineering/how-we-contain-claude

### Anthropic Engineering: An update on recent Claude Code quality reports

Anthropic traced reports of degraded Claude responses to three separate changes affecting Claude Code, the Claude Agent SDK and Claude Cowork. The API was not impacted, and all three issues were resolved as of April 20 in v2.1.116. On March 4, Anthropic changed Claude Code's default reasoning effort from high to medium to reduce long latency, then reverted the change on April 7 after users said they preferred higher intelligence by default. On March 26, a cache optimization meant to clear old thinking once after an hour of inactivity instead cleared it on every turn for the rest of the session, causing forgetfulness, repetition, odd tool choices and cache misses; it was fixed on April 10 in v2.1.101. On April 16, a system prompt instruction limiting text between tool calls to 25 words and final responses to 100 words hurt coding quality and was reverted on April 20 after one evaluation showed a 3% drop for Opus 4.6 and Opus 4.7.

Anthropic 把用户反馈的 Claude 回答质量下降，追溯到三个影响 Claude Code、Claude Agent SDK 和 Claude Cowork 的不同改动。API 没有受到影响，三个问题都在 4 月 20 日的 v2.1.116 中解决。3 月 4 日，Anthropic 把 Claude Code 的默认 reasoning effort 从 high 改成 medium，以减少过长延迟，但在用户表示更希望默认使用更高智能后，于 4 月 7 日撤回。3 月 26 日，一项原本只想在空闲一小时后清除一次旧思考的缓存优化，变成在会话剩余时间里每一轮都清除，导致健忘、重复、奇怪的 tool 选择和 cache miss；该问题在 4 月 10 日的 v2.1.101 中修复。4 月 16 日，一条限制 tool call 之间文本为 25 个词、最终回答为 100 个词的 system prompt 指令损害了编码质量，在评估显示 Opus 4.6 和 Opus 4.7 出现 3% 下降后，于 4 月 20 日撤回。

Across the three issues, Sonnet 4.6, Opus 4.6 and Opus 4.7 were affected. Anthropic says, "We never intentionally degrade our models," and is resetting usage limits for all subscribers. It is also changing its process: more internal staff will use the exact public build, Code Review will get more repository context, system prompt changes will require per-model evals and tighter review, and risky changes will get soak periods and gradual rollouts.

这三个问题影响了 Sonnet 4.6、Opus 4.6 和 Opus 4.7。Anthropic 表示："We never intentionally degrade our models." 公司正在为所有订阅用户重置用量限制，也在调整流程：更多内部员工将使用与用户完全相同的公开版本，Code Review 会获得更多代码仓库上下文，system prompt 改动需要按模型运行 eval 并接受更严格的审查，可能影响智能水平的改动会增加 soak period 和渐进式 rollout。

Source: https://www.anthropic.com/engineering/april-23-postmortem

来源：https://www.anthropic.com/engineering/april-23-postmortem

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
