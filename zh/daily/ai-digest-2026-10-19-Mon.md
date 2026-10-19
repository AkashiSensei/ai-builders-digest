[English](../../en/daily/ai-digest-2026-10-19-Mon.md) | [中文](./ai-digest-2026-10-19-Mon.md) | [双语](../../bilingual/daily/ai-digest-2026-10-19-Mon.md)

---

# AI Builders Digest

## 导读

Box CEO Aaron Levie 认为，agent swarms 的意义在于让算力第一次成为大量重要经济任务中的关键变量。研究、数据处理、发现、测试和协调工作目前都受限于人的时间，因此相对于其潜在价值，真正被完成的部分很少。当 agent 能够使用工具、写代码、处理数据、彼此协作并具备领域深度后，只要目标设定正确、投入足够 token，就能处理极其复杂的问题。他预计这会重塑网络安全、生命科学、材料科学、交易、QA 测试和数据处理等领域，也会改变这些领域的竞争格局（[tweet](https://x.com/levie/status/2112051081014649303)）。

Anthropic Engineering 提出，agent 安全必须优先从隔离环境入手。随着 Claude 获得的权限越来越多，即使防护措施进步，理论上的影响范围仍在扩大。人类的逐项批准并不可靠：遥测显示用户批准了大约 93% 的权限提示，而审批疲劳会让监督流于形式。sandbox、虚拟机、egress 控制和严格的文件系统边界，为 agent 能触及的范围设定硬上限，模型层防御则处理剩余的概率性风险。文章中最值得记住的一句话是："The deterministic boundary is what gets hit when everything probabilistic misses." 也就是说，当所有概率性防御都失效时，最终挡住风险的是确定性的边界（[blog](https://www.anthropic.com/engineering/how-we-contain-claude)）。

Reflection AI 联合创始人兼 CEO Misha Laskin 把开放权重同时视为竞争制衡和安全策略。Reflection 的第一个开放模型 Beam 是一个总参数 5000 亿、激活参数 230 亿的模型，预训练使用 6000 块 GB300，强化学习使用超过 1 万块 GB300 训练四周。Laskin 说，它的推理效率比同能力等级的模型高 3 到 4 倍。他的核心论点是，移除网络攻击能力的同时也会移除网络防御能力，而让更多人检查模型行为会让漏洞变得更浅。他还看到 gateway 上的 token 需求正在转向开放模型，并认为开放栈会带动基础设施支出一起迁移（[podcast](https://www.youtube.com/@NoPriorsPodcast)）。

Anthropic 的 Claude Code 复盘非常具体地说明了三个小改动如何叠加成广泛的质量下降。默认 reasoning effort 的调整、一个在每轮都错误丢弃历史思考的缓存优化，以及一个限制回答长度的 system prompt，分别在不同时间影响了不同的流量。API 没有受到影响，三个问题都在 4 月 20 日的 v2.1.116 中解决。Anthropic 表示从未有意降低模型质量，正在为所有订阅用户重置用量限制，并增加按模型运行的 eval、soak period 和渐进式 rollout（[blog](https://www.anthropic.com/engineering/april-23-postmortem)）。

Swyx 给出的招聘信号是，数据密集型工程能力比通用的 AI 应用开发更稀缺。他把 "RAG guy" 和真正做过 data-intensive applications 的人区分开来，称当前的需求差距是他职业生涯中最大的，并正在为一项 mission 招聘，优先 San Francisco，但可以提供 relocation 和签证支持。Peter Yang 则主张用实际工作代替面试：他希望 work trial 成为常态，并引用了一个案例，候选人用两周时间做出一个具体功能并成功交付，团队因此不必再花四周走面试流程（[tweet](https://x.com/swyx/status/2112073533794971941), [tweet](https://x.com/petergyang/status/2111970651326267529)）。

便宜而快速的模型正在把小型实验变成真正交付的产品。Vercel CEO Guillermo Rauch 通过 AI Gateway 使用 deepseek-v4.1-flash-1017-fast，为一个游戏加入了声音、更好的碰撞检测、改进的坡道和跟随汽车的镜头，总成本约 30 美分。在 Anthropic 负责 Claude Code 的 Thariq 正在探索一种以用 agent 制作角色为主要乐趣的游戏，并计划开源发布，让玩家用 vibe coding 创造自己的角色。Y Combinator 总裁兼 CEO Garry Tan 预测，一年左右之后所有人都会把 AsideAI 和自己的 agent 一起使用。基础设施方面，OpenAI 的 Thibault Sottiaux 表示，同时是 OpenAI API 客户的 OpenCode 用户已经恢复服务，攻击期间可能被扣掉的 credits 也已退还，防御方还可以申请 Daybreak Blue 权限（[tweet](https://x.com/rauchg/status/2111929486661018081), [tweet](https://x.com/trq212/status/2111945336537420259), [tweet](https://x.com/trq212/status/2111884272101691613), [tweet](https://x.com/trq212/status/2111884199359897953), [tweet](https://x.com/garrytan/status/2111971992769565177), [tweet](https://x.com/thsottiaux/status/2112034063934742720)）。

## X / Twitter

### Box CEO Aaron Levie

Box CEO Aaron Levie 认为，agent swarms 不只是又一个生产力功能，因为它让算力成为许多重要经济任务中的关键变量。研究、数据处理、发现工作、测试和协调都受限于人的时间，因此经济体系实际完成的部分远少于这些工作的潜在价值。他说，当 agent 能够使用工具、写代码、处理数据、彼此协作并具备领域深度后，只要设定正确目标并投入足够 token，就可以处理任意复杂的问题。他预计这会重塑网络安全、生命科学、材料科学、交易、QA 测试、数据处理以及这些领域的竞争格局（[tweet](https://x.com/levie/status/2112051081014649303)）。

### Swyx

Swyx 认为，data engineer 比 AI engineer 更重要，市场正在把 "RAG guy" 和真正做过 data-intensive applications 的人区分得越来越清楚。他称这种需求差距是他进入科技行业以来见过最大的。他正在通过 jobs@latent.space 为一个 mission 招聘，优先 San Francisco，但表示可以 relocation，也支持签证，并希望博客或 GitHub 能体现这类工作的候选人联系他（[tweet](https://x.com/swyx/status/2112073533794971941)）。

### OpenAI 的 Thibault Sottiaux

在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 表示，团队与 OpenCode 合作，让同时是 OpenAI API 客户的 OpenCode 用户恢复服务，并退还攻击期间可能被扣掉的 credits。他还提醒防御方可以申请 Daybreak Blue 权限，使用 OpenAI 的 cyber permissive 环境，并强调不要等到事故真的发生才准备（[tweet](https://x.com/thsottiaux/status/2112034063934742720)）。

### Peter Yang

制作实用 AI 教程和访谈的 Peter Yang 主张，work trial 应该取代面试，成为默认的招聘方式。他引用 Pompliano 的经历：团队给候选人两周时间做一个具体功能，候选人问了一些问题、了解了情况，然后把功能做了出来。结果是团队不用再怀疑这个人能不能胜任，还直接交付了一个新功能，而不是花四周时间走面试流程（[tweet](https://x.com/petergyang/status/2111970651326267529)）。

### Vercel CEO Guillermo Rauch

Vercel CEO Guillermo Rauch 通过 AI Gateway 试用了 deepseek-v4.1-flash-1017-fast，对一个游戏做了几项改进。模型加入了声音、更好的碰撞检测、改进的坡道和跟随汽车的镜头，整个运行成本约 30 美分（[tweet](https://x.com/rauchg/status/2111929486661018081)）。

### Anthropic Claude Code 团队的 Thariq

在 Anthropic 负责 Claude Code 的 Thariq 说，他现在常常更愿意用 vibe coding 做游戏的一小部分，而不是真的去玩，尤其是 League 这种需要动脑的游戏，并想把这个观察变成设计原则。他反复回到的一个钩子是，制作游戏和角色的乐趣可以和玩游戏一样大，所以他会把游戏开源发布，让玩家用 vibe coding 创造自己的角色，游戏会围绕这些角色做平衡。尚未解决的问题是玩法机制：角色是像 Salty Bet 那样自己战斗，还是像 Persona 或 Heavy Rain 那样在战斗中提供电影化的选择（[tweet](https://x.com/trq212/status/2111945336537420259), [tweet](https://x.com/trq212/status/2111884272101691613), [tweet](https://x.com/trq212/status/2111884199359897953)）。

### Y Combinator 总裁兼 CEO Garry Tan

Y Combinator 总裁兼 CEO Garry Tan 预测，一年左右之后，所有人都会把 AsideAI 和自己的 agent 一起使用（[tweet](https://x.com/garrytan/status/2111971992769565177)）。

已验证 feed 中其余 builders 只发布了简短反应或个人笔记，因此没有收录。

## Podcast

### No Priors: Beam: The Great American Open Model with ReflectionAI Co-Founder and CEO Misha Laskin

**核心观点：** 开放权重模型不只是更便宜的选择，它还是一种竞争制衡和防御层，让生态中更多人能够检查、定制并加固所有人都依赖的系统。

Misha Laskin 是 Reflection AI 的联合创始人兼 CEO，曾是 Google DeepMind 的研究员，拥有物理学博士学位。过去一年，他的团队一直在构建前沿的开放智能。Reflection 从大约 30 人增长到约 300 人，端到端训练了第一批模型，并发布了第一个开放模型 Beam。Beam 的总参数为 5000 亿，激活参数为 230 亿。预训练使用 6000 块 GB300 运行数周，在基础设施效率提升后现在约需 12 天；强化学习则使用超过 1 万块 GB300 训练四周。Laskin 说，Beam 的推理效率比同能力等级的模型高 3 到 4 倍，比更大的模型最多高 10 倍。

开放的战略意义不仅在于成本，也在于防御。Laskin 认为，移除网络攻击能力的同时也会移除网络防御能力，而少数封闭实验室里的安全研究员无法覆盖所有长尾的意外后果。他说："When you remove cyber offensive capabilities, you also remove cyber defensive capabilities." 他把 Linus 定律应用到安全上：只要有足够多的眼睛，大多数漏洞都会变得容易发现和修补。

他还看到市场正在转向。gateway 上的 token 需求已经从大约 70/30 的封闭对开放，变成 70/30 的开放对封闭。他预计开放模型会拿走大部分 token，就像 Linux 主导服务器，而封闭厂商仍然很有价值。用他的话说，开放模型是 "Trojan horses for the infrastructure that they bring with them"，会把软件、芯片和部署服务一起拉进自己的轨道。企业通常会先租用封闭智能，当每年支出达到 1 亿美元甚至更多时再转向自有部署，这为能够提供推理软件、集群管理和落地服务的合作伙伴创造了需求。

对招聘的启示有些反直觉。Laskin 预计大型模型项目会稳定在 100 名研究员左右，而不是几千人，同时应用研究和以 eval 为导向的部署工程师会成为增长领域。

来源：https://www.youtube.com/@NoPriorsPodcast

## Blog

### Anthropic Engineering: How we contain Claude across products

Anthropic 认为，随着 agent 获得更多权限，工程问题变成如何限制影响范围，而不只是监督它的行为。文章把风险分为三类：用户滥用、模型错误行为和外部攻击者；也把防御分为三层：模型本身、运行环境，以及 agent 能接触到的外部内容。human-in-the-loop 批准并不可靠。遥测显示，用户批准了大约 93% 的权限提示，而审批疲劳会逐渐出现。Claude Code auto mode 能在执行前拦截大约 83% 的过度主动行为，但仍有大约 17% 的过度主动操作会通过，所以它只是 sandbox 内的一层防御。在 Gray Swan 的 Agent Red Teaming 基准上，Claude Opus 4.7 把单次尝试的攻击成功率控制在约 0.1%，在 100 次自适应尝试后约为 5% 到 6%。

三种隔离模式对应了不同产品的设计：为 claude.ai 使用的临时 gVisor 容器；为 Claude Code 使用的 human-in-the-loop 操作系统 sandbox，它把权限提示减少了 84%；以及为 Claude Cowork 使用的封闭虚拟机。失败案例同样具体：项目 hook 在信任对话框出现前就执行；一封钓鱼提示在 25 次重试中有 24 次成功把 ~/.aws/credentials 里的凭据外传；以及通过 api.anthropic.com 绕过 egress allowlist 的数据外传，后者最终用 man-in-the-middle proxy 修复。虚拟机隔离还导致 endpoint detection and response 工具看不到 Cowork 内部。展望未来，Anthropic 把持久记忆投毒、多 agent 信任升级和 agent 身份列为开放问题。

作者是 Max McGuinness、Mikaela Grace、Jiri De Jonghe、Jake Eaton 和 Abel Ribbink。他们的操作原则很简单："The deterministic boundary is what gets hit when everything probabilistic misses."

来源：https://www.anthropic.com/engineering/how-we-contain-claude

### Anthropic Engineering: An update on recent Claude Code quality reports

Anthropic 把用户反馈的 Claude 回答质量下降，追溯到三个影响 Claude Code、Claude Agent SDK 和 Claude Cowork 的不同改动。API 没有受到影响，三个问题都在 4 月 20 日的 v2.1.116 中解决。3 月 4 日，Anthropic 把 Claude Code 的默认 reasoning effort 从 high 改成 medium，以减少过长延迟，但在用户表示更希望默认使用更高智能后，于 4 月 7 日撤回。3 月 26 日，一项原本只想在空闲一小时后清除一次旧思考的缓存优化，变成在会话剩余时间里每一轮都清除，导致健忘、重复、奇怪的 tool 选择和 cache miss；该问题在 4 月 10 日的 v2.1.101 中修复。4 月 16 日，一条限制 tool call 之间文本为 25 个词、最终回答为 100 个词的 system prompt 指令损害了编码质量，在评估显示 Opus 4.6 和 Opus 4.7 出现 3% 下降后，于 4 月 20 日撤回。

这三个问题影响了 Sonnet 4.6、Opus 4.6 和 Opus 4.7。Anthropic 表示："We never intentionally degrade our models." 公司正在为所有订阅用户重置用量限制，也在调整流程：更多内部员工将使用与用户完全相同的公开版本，Code Review 会获得更多代码仓库上下文，system prompt 改动需要按模型运行 eval 并接受更严格的审查，可能影响智能水平的改动会增加 soak period 和渐进式 rollout。

来源：https://www.anthropic.com/engineering/april-23-postmortem

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
