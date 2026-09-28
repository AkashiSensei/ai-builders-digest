[English](../../en/daily/ai-digest-2026-09-28-Mon.md) | [中文](../../zh/daily/ai-digest-2026-09-28-Mon.md) | [Bilingual](./ai-digest-2026-09-28-Mon.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. The applied layer is the new center of gravity.** Box founder and CEO Aaron Levie argues that the model wrapper is working because enterprise value lives in the bridge between a model's capability and an actual workflow, not in raw intelligence on its own. The gap is real: connecting other data systems, keeping a human in the loop, absorbing delays, managing change, and coping with legacy systems are all work that a smarter model does not remove. He compares it to cloud infrastructure, where AWS and Azure created trillions of dollars of value and so did Snowflake and Databricks on top of them, and he puts the applied-layer opportunity at roughly a trillion dollars. ([Training Data](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8))

**1. 应用层是新的引力中心。**Box 创始人兼 CEO Aaron Levie 认为，所谓「模型套壳」之所以成立，是因为企业价值存在于模型能力与实际工作流之间的那座桥上，而不在单纯的智能本身。这道鸿沟是真实的：接入其他数据系统、在流程中保留人类、承受延迟、做变更管理、应付遗留系统，这些都不是一个更聪明的模型就能抹掉的。他把这件事类比成云计算：AWS 和 Azure 创造了数万亿美元的价值，而在它们之上又长出了 Snowflake 和 Databricks，因为基础设施永远做不了最后一公里。他估计应用层的机会大约有一万亿美元。（[Training Data](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8)）

**2. Systems of record have two jobs.** Levie's rule for any company sitting on proprietary data and workflows is to build an agent provably ten or twenty points better at your own product than an off-the-shelf agent, and at the same time go headless, exposing deterministic APIs and MCP endpoints so Claude, ChatGPT, and other agents can call it. Box built an agentic harness over its own file system and search engine that runs several searches, re-ranks results, and reads documents across the hundreds of billions of files its customers store, and BoxLabs is hill-climbing accuracy on hard tasks such as extracting structure from 100-page loan documents from about 70% toward 97%. ([Training Data](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8))

**2. 系统记录（system of record）有两件事要做。**Levie 给所有掌握专有数据和工作流的公司定的规则是：第一，造出一个在你自己的产品上比现成 agent 明显强 10 到 20 个百分点的 agent；第二，同时做到 headless，把确定性的 API 和 MCP 端点暴露出来，让 Claude、ChatGPT 和其他 agent 都能调用。Box 在自己的文件系统和搜索引擎之上搭了一套 agentic harness，一次做多次搜索、重排结果、读取文档；BoxLabs 则在把难任务的准确率往上爬，比如从 100 页贷款文件里抽取结构化信息，从大约 70% 爬到 97%。（[Training Data](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8)）

**3. Token subsidies are temporary, and the open-weights paradox is real.** Levie expects providers to face ordinary capitalism once they are public and must fund training runs, while non-economic players such as Meta, SpaceX, China, and NVIDIA could accept 10% inference margins because they are really paying for compute clusters. He subscribes to the Decagon argument that closed labs can keep growing even as open weights also grow: each use case that matures can be peeled off to a cheaper open model, so a blended workload might put half of spend on a frontier model while running ten times as many tokens on an open one. On the model race he calls Fable 5.1 the clear state of the art, says Gemini is disproportionately strong on some Box use cases, and calls the frontier neck and neck. ([Training Data](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8))

**3. Token 补贴是暂时的，开源权重悖论是真的。**Levie 预计，模型厂商一旦上市、还要自己承担训练成本，就得面对普通的资本主义规律；而 Meta、SpaceX、中国、NVIDIA 这类非经济驱动玩家，可以把推理利润率压到 10%，因为他们真正在买的是算力集群。他认同 Decagon 的那个论点：闭源实验室继续增长的同时，开源权重也在增长，因为每一个成熟的用例都可以被剥离到更便宜的开源模型上，于是混合负载可能一半的钱花在前沿模型上，却有十倍 token 跑在开源模型上。在模型竞赛上，他认为 Fable 5.1 明显是当时的 state of the art，Gemini 在某些 Box 用例上强得不合比例，而前沿整体是并驾齐驱。（[Training Data](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8)）

**4. Enterprise diffusion will be slower than Silicon Valley expects.** Coding adopted AI unusually fast because code's value is almost entirely represented by text, labs hyper-train on it, its users can debug their own tooling, and the work pays well. Almost no other knowledge work shares those properties: a sales rep is still rate limited by whether a customer replies or has budget, and enterprise data sits in legacy on-premises systems behind access controls that make a simple "connect your GitHub" impossible. Levie expects legal to diffuse next, and bets that in five years 90% of enterprise tokens will be initiated by an agent rather than a person, with users reviewing results. ([Training Data](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8))

**4. 企业端的扩散会比硅谷想象的慢得多。**编程之所以扩散得特别快，是因为代码的价值几乎完全由文本代表，各实验室都在它上面疯狂训练，使用者有能力自己 debug 工具链，而且这份工作报酬高。几乎没有任何其他知识工作同时具备这些条件：销售代表的产出仍然受制于客户是否回复、有没有预算；企业数据还躺在本地遗留系统里，被访问控制挡住，根本不存在「把 GitHub 接进来」那种简单入口。Levie 预计法律会是下一个扩散的领域，并打赌五年后企业里 90% 的 token 由 agent 而不是人发起，人只负责审阅结果。（[Training Data](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8)）

**5. Work slop is really a question about trust.** Levie separates the corporate hat from the philosophical one and argues that for most of the world code is a utility, so agent-generated code is not just acceptable but preferable. A strategy deck is different, because it is a proxy for whether the person who sent it can execute; a Stan Druckenmiller column that scanned as fully AI-written did not trigger his usual allergy, which he reads as evidence that the reaction is about trust in the author, not the tool. He calls the next three to five years a messy period for deciding what a person's role and output are actually for. ([Training Data](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8))

**5. Work slop 本质上是信任问题。**Levie 把「Box 公司立场」和「个人想法」分开，认为对世界上大多数人来说，代码只是一种工具，所以 agent 生成的代码不但可以接受，甚至更可取。但一份战略 deck 不一样，它是「我能不能信任你去执行」的代理指标；一篇在 Pangram 看来 100% 由 AI 写的 Stan Druckenmiller 专栏并没有触发他惯常的过敏反应，他把这理解为：真正引发反应的是对作者的信任，而不是工具本身。他说接下来三到五年会是一段很混乱的时期，人们要重新想清楚一个人的角色和产出到底是为了什么。（[Training Data](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8)）

**6. Builders are rethinking where the software ends and the agent begins.** Vercel CEO Guillermo Rauch ported his Mini web browser to Rust and Swift, bundling up-to-date Chromium with the cef crate, embedding an agent that talks to his local fx CLI over ACP, and letting it drive the browser through an MCP server, and concludes that native is the future on desktop and in the cloud. Anthropic's Thariq, who works on Claude Code, says his biggest fear is that we eat the productivity gains of agents by simply becoming lazier, while OpenAI's Thibault Sottiaux argues that the pre-release code freeze is fading and future code may be generated online per request under constraints. FirstMark Capital's Matt Turck notes the gap between AI researchers, who believe in neither doom nor runaway acceleration, and non-researchers who hold very certain views. ([Guillermo Rauch](https://x.com/rauchg/status/2104428800134013205), [Thariq](https://x.com/trq212/status/2104273243599405395), [Thibault Sottiaux](https://x.com/thsottiaux/status/2104108167806550046), [Matt Turck](https://x.com/mattturck/status/2104331402385002831))

**6. Builders 正在重新思考软件与 agent 的边界。**Vercel CEO Guillermo Rauch 把 Mini 浏览器移植到了 Rust 和 Swift，用 cef crate 打包最新的 Chromium，嵌入一个通过 ACP 与他本地 fx CLI 通信的 agent，再让它经由 MCP server 管理浏览器，结论是 native 是未来，无论桌面还是云端。Anthropic 负责 Claude Code 的 Thariq 说，他最害怕的是我们因为变懒而白白吃掉 agent 带来的生产力收益；OpenAI 的 Thibault Sottiaux 则认为发布前的 code freeze 正在消失，未来的代码甚至可能按照某些约束在线上按需生成。FirstMark Capital 的 Matt Turck 指出一个反差：真正懂 AI 怎么运作的 AI 研究者既不相信 AI 末日，也不相信失控式加速，而不做 AI 研究、了解有限的人反而观点非常确定。（[Guillermo Rauch](https://x.com/rauchg/status/2104428800134013205)、[Thariq](https://x.com/trq212/status/2104273243599405395)、[Thibault Sottiaux](https://x.com/thsottiaux/status/2104108167806550046)、[Matt Turck](https://x.com/mattturck/status/2104331402385002831)）

## X / Twitter

### Thibault Sottiaux: Codex and ChatGPT at OpenAI

Thibault Sottiaux argues that the code freeze before releases is not really a thing anymore, and that in the future code might even be generated online per request according to some constraints.

Thibault Sottiaux 认为，发布前的 code freeze 已经不成立了，未来代码甚至可能按照某些约束在线上按需生成。

- [Thibault Sottiaux: the pre-release code freeze is fading](https://x.com/thsottiaux/status/2104108167806550046)

### Peter Yang: Practical AI tutorials and interviews

Peter Yang observes that almost nobody has fond memories of the SaaS or business software they used back in the day, while everyone remembers their favorite games, and argues that games are the software with the longest staying power in our memory. He jokes that LLM models are probably the inverse of that.

Peter Yang 观察到，几乎没有人对自己当年用过的 SaaS 或商业软件怀有美好回忆，但每个人都记得自己最喜欢的游戏，他认为游戏才是留在我们记忆里最久的软件。他开玩笑说，LLM 模型大概是这件事的反面。

- [Peter Yang: games versus LLM models](https://x.com/petergyang/status/2104414495376564517)

### Thariq: Claude Code at Anthropic

Thariq says what he is most afraid of is that we eat the productivity gains of agents by just becoming lazier.

Thariq 说，他最害怕的是我们因为变懒而白白吃掉 agent 带来的生产力收益。

- [Thariq: afraid we just become lazier](https://x.com/trq212/status/2104273243599405395)

### Guillermo Rauch: CEO of Vercel

Guillermo Rauch ported his Mini web browser to Rust and Swift and says it is faster, more secure, and, shockingly, nicer to iterate on than Electron plus Bun. He uses the cef crate to bundle up-to-date Chromium, and his fx acp embeds an agent without bloating the app: the agent talks to his local fx CLI over ACP, and fx can then manage the browser through an MCP server. Ditching Electron gave him Liquid Glass, faster boots, and a more Mac-native feel, and he argues that native is the future both on the desktop and in the cloud, with Vercel's bet on Fluid supporting that shift.

Guillermo Rauch 把 Mini 浏览器移植到了 Rust 和 Swift，说它更快、更安全，而且出人意料地比 Electron 加 Bun 更好迭代。他用 cef crate 打包最新的 Chromium，fx acp 让他无需让 app 变得臃肿就能嵌入 agent：agent 通过 ACP 与他本地的 fx CLI 通信，fx 则可以通过 MCP server 管理浏览器。抛弃 Electron 之后，他得到了 Liquid Glass、更快的启动速度和更像 Mac 原生的体验；他认为 native 是未来，无论桌面还是云端，Vercel 对 Fluid 的押注会支撑这一转变。

- [Guillermo Rauch: ported his Mini browser to Rust and Swift](https://x.com/rauchg/status/2104428800134013205)

### Aaron Levie: CEO of Box

Aaron Levie thinks through a world where agents make the best or most efficient choice for their users. In markets that benefit from the friction of changing habits, he expects switching costs to fall and competition to rise until some equilibrium is reached between the disruptive alternatives and the incumbents; in markets hurt by friction, he expects agents to unlock activity that was too costly before, with healthcare, travel, local services, and certain information services as likely net beneficiaries. He concludes that a future meaningfully mediated by agents working tirelessly for people and their goals cannot function exactly like today.

Aaron Levie 推演了一个 agent 开始替用户做出最好或最高效选择的世界。在市场里，有些行业过去靠「用户改变习惯很麻烦」这种摩擦获益，他预计这些地方的转换成本会下降，竞争会大幅加剧，直到颠覆性方案和现有玩家之间达到某种平衡；而在被摩擦伤害的市场，agent 会让过去成本太高、根本做不成的交易重新发生，医疗、旅行、本地服务和某些信息服务很可能是净受益方。他的结论是，一个由不知疲倦、为我们和我们的目标工作的 agent 深度中介的未来，不可能和今天一样运转。

- [Aaron Levie: agents and switching costs](https://x.com/levie/status/2104350592290406849)

### Garry Tan: President and CEO of Y Combinator

Garry Tan argues that anyone who thinks they can handle anti-bot work with Chrome DevTools Protocol has not actually hit any real anti-bot.

Garry Tan 认为，那些觉得用 Chrome DevTools Protocol 就能搞定 anti-bot 的人，其实从没遇到过真正的 anti-bot。

- [Garry Tan: CDP versus real anti-bot](https://x.com/garrytan/status/2104288345547591747)

### Matt Turck: VC at FirstMark Capital

Matt Turck says it continues to be notable how many AI researchers, who understand how AI actually works, believe in neither AI doom nor massive uncontrollable acceleration, while non-AI researchers with limited knowledge have very definite and certain views on the topic.

Matt Turck 说，依然很值得注意的是：真正懂 AI 怎么运作的 AI 研究者，既不相信 AI 末日，也不相信大规模失控式加速；而不做 AI 研究、了解有限的人，却对这件事有着非常确定、非常坚决的看法。

- [Matt Turck: who holds certain views on AI](https://x.com/mattturck/status/2104331402385002831)

### Zara Zhang: Builder

Zara Zhang tells people who ask why she keeps posting without monetizing her content that they are missing two things: self-expression is an innate human instinct that requires no justification, and influence is far more valuable than money. She also warns that new technology can be so dazzling and flashy that it blinds us to the ways it is not working, and can make people feel that a failure is their own fault rather than the technology's, because the world is moving so fast and everyone else seems ahead.

Zara Zhang 对问她「为什么一直发内容却不做变现」的人说，他们没理解两件事：自我表达是人类天生的本能，不需要任何理由或功利动机；而影响力比钱有价值得多。她还提醒，新技术可能炫目到让我们看不见它哪里没做好，甚至让人在出问题时觉得是自己不行、而不是技术不行，因为世界跑得太快，别人看起来都走在你前面。

- [Zara Zhang: influence is more valuable than money](https://x.com/zarazhangrui/status/2104253882025341231)
- [Zara Zhang: technology can blind us to what is not working](https://x.com/zarazhangrui/status/2104112917264126195)

### Nikunj Kothari: Partner at FPV Ventures

Nikunj Kothari calls Astra absurd, saying that if you give it decently hard, verifiable end-to-end tasks with the right tools, it just flies.

Nikunj Kothari 说 Astra 离谱得吓人：只要给它难度足够高的、可验证的端到端任务，再配上合适的工具，它就直接起飞。

- [Nikunj Kothari: Astra on hard end-to-end tasks](https://x.com/nikunj/status/2104444216017637575)

### Peter Steinberger: OpenClaw and OpenAI

Peter Steinberger says he needs to distribute CI load, and his plan is to let Codex decide which tests actually need to run, drastically cut CI, and run tests hourly.

Peter Steinberger 说他需要分摊 CI 负载，计划是让 Codex 决定哪些测试真的需要跑，大幅砍掉 CI，改成每小时跑一次测试。

- [Peter Steinberger: letting Codex decide which tests run](https://x.com/steipete/status/2104305554760114488)

### Dan Shipper: CEO of Every

Dan Shipper offers a one-line observation: an industry built on modeling humans as rational agents panics as humans adopt rational agents.

Dan Shipper 给出一句总结：一个建立在「把人建模成理性 agent」之上的行业，在看到人类开始用上理性 agent 时慌了。

- [Dan Shipper: rational agents](https://x.com/danshipper/status/2104302924251951553)

## Podcast

### Training Data: Box's Aaron Levie: On Reinventing Yourself in the AI Age and Enterprise Diffusion

The Takeaway: The durable opportunity in AI is not the model but the bridge between a model and a real workflow, and whoever builds that bridge for the enterprise captures value the labs cannot reach.

核心结论：AI 里真正持久的机会不是模型，而是模型与真实工作流之间的那座桥；谁为企业搭起这座桥，谁就能拿到实验室够不到的价值。

Aaron Levie has run Box for twenty years, watching enterprises pile up hundreds of billions of unread files. The applied layer, once dismissed as a model wrapper, is now the main event. "There's a lot of gap between the model and the workflow," he says, and closing it means wiring in other data systems, keeping a human in the loop, and modernizing legacy systems. He compares it to cloud infrastructure, which created trillions in value but never did the last mile; Snowflake and Databricks did.

Aaron Levie 经营 Box 已经二十年，看着企业堆积起数以千亿计、却从来不读的文件。曾经被嘲讽为「模型套壳」的应用层，如今才是主战场。他说：「There's a lot of gap between the model and the workflow.」要补上这道鸿沟，就得接入其他数据系统、在流程里保留人类、还要现代化遗留系统。他把这件事类比成云计算基础设施：它创造了数万亿美元的价值，却从来不做最后一公里；最后做这件事的是 Snowflake 和 Databricks。

Box's reinvention has two halves. One is an agentic harness over its file system and search engine that runs several searches, re-ranks results, and reads documents, because Box knows how its users pick the relevant file; BoxLabs pushes accuracy on hard tasks like extracting structure from 100-page loan documents from about 70% toward 97%. The other half is going headless, exposing APIs and MCP endpoints so other agents can call Box, which is why Levie now uses Salesforce far more, purely through Claude or ChatGPT. His advice to any system of record: build an agent provably ten or twenty points better at your own product than anything off the shelf, and make it work with everyone else's agent too.

Box 的重塑有两条腿。一条是在自己的文件系统和搜索引擎之上搭 agentic harness：一次做多次搜索、重排结果、读取文档，因为 Box 知道自己用户是怎么挑出相关文件的；BoxLabs 则把难任务的准确率往上爬，比如从 100 页贷款文件里抽取结构化信息，从大约 70% 爬到 97%。另一条是做到 headless，把 API 和 MCP 端点暴露出来，让其他 agent 能调用 Box；这也是 Levie 现在更多用 Salesforce 的原因，他纯粹是通过 Claude 或 ChatGPT 去问它。他对所有系统记录公司的建议是：造一个在自己产品上明显比现成 agent 强 10 到 20 个百分点的 agent，同时让它能与别人的 agent 协作。

On models, he is unsentimental. Token subsidies cannot survive public markets and training costs, and non-economic players like Meta, SpaceX, China, and NVIDIA could push inference margins toward 10%, shifting more value to applications. He subscribes to the open-weights paradox: closed labs keep growing while open models also grow, because matured use cases get peeled off to cheaper models, splitting spend roughly 50/50 while running ten times the tokens on the open one. Fable 5.1 is, in his view, clearly state of the art, and the frontier is otherwise neck and neck.

对模型生意，他很冷静。Token 补贴撑不过公开市场和训练成本，而 Meta、SpaceX、中国、NVIDIA 这类非经济驱动玩家可以把推理利润率压到 10%，从而把更多价值推向应用层。他认同开源权重悖论：闭源实验室继续增长，开源模型也在增长，因为成熟的用例会被剥离到更便宜的模型上，于是花销大致五五分，而跑在开源模型上的 token 是十倍。在他看来，Fable 5.1 明显是 state of the art，前沿其余部分是并驾齐驱。

Ordinary knowledge work will diffuse slowly. Coding was a special case: its value is almost entirely text, labs hyper-train on it, its users debug their own tooling, and it pays well. A sales rep has none of that, because a sale still depends on the customer. "I would bet, like, 90% of all tokens in the enterprise are things that a user never kicked off," Levie says.

真正慢下来的是普通知识工作的扩散。编程是特例：它的价值几乎全是文本，各实验室都在它上面疯狂训练，使用者自己就能 debug 工具链，而且报酬高。销售代表完全不具备这些条件，因为能不能成交仍然取决于客户。Levie 说：「I would bet, like, 90% of all tokens in the enterprise are things that a user never kicked off.」

https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

## Blog

The validated feed contained no new qualifying blog posts for this run.

本次运行通过验证的 feed 中没有新的合格博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
