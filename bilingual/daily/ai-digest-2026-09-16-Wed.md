[English](../../en/daily/ai-digest-2026-09-16-Wed.md) | [中文](../../zh/daily/ai-digest-2026-09-16-Wed.md) | [Bilingual](./ai-digest-2026-09-16-Wed.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. Aaron Levie's applied-layer thesis: the trillion-dollar work is the bridge between models and enterprise workflows.** Box CEO Aaron Levie writes that "there's a massive chasm between the power of AI models and the ultimate workflows that enterprises are trying to automate," and calls that gap the opportunity for the applied AI layer. Crossing it means connecting intelligence to workflows, reengineering processes, aggregating the right context and data, designing the right human-in-the-loop experiences, driving change management, running domain-specific evals, and managing security and governance. He expects this layer to emerge in every vertical and horizontal category, and argues it only gets more important as models improve, because "greater capability enables even more complex tasks to be tackled, amplifying the challenges if you don't do this well."

**1. Aaron Levie 的 applied layer 论：真正值钱的工作，是模型与企业工作流之间的那座桥。** Box CEO Aaron Levie 写道，「AI 模型的能力，和企业真正想自动化的那些工作流之间，存在一道巨大的鸿沟」，而这道鸿沟就是 applied AI layer 的机会。要跨过去，需要把 intelligence 接到工作流上，重做流程，聚合正确的 context 和数据，设计好 human in the loop 的体验，推动 change management，做 domain specific 的 eval，并管理数据与流程的安全和治理。他预期这一层会在每一个垂直和横向品类里出现，并认为模型越强，这一层反而越重要，因为「更强的能力让更复杂的任务可以被处理，也就放大了做不好这一层所带来的挑战」。

**2. In his podcast conversation, Levie gives the sharper version: enterprise diffusion will be slower than Silicon Valley thinks.** He explains that most of the world's code is a utility whose value is almost entirely captured in the text it produces, which is why coding agents spread in months while other knowledge work stalls. A sales rep is rate-limited by whether a customer replies or has budget, and most enterprises have no "just give us your GitHub" moment because their data sits in legacy file shares and on-prem systems with access controls agents cannot navigate. His prediction: "in five years from now, I would bet, like, 90% of all tokens in the enterprise are things that a user never kicked off, and they just see a result."

**2. 在播客里，Levie 给出了更锋利的版本：企业端的扩散会比硅谷想象的慢得多。** 他解释说，对世界上大多数人来说，代码是一种 utility，它的价值几乎完全体现在它产出的文本上，这也是 coding agent 能在几个月内普及、而其他知识工作却卡住的原因。销售代表的效率受制于客户是否回复、是否有预算，而大多数企业并没有「把 GitHub 给你就好」这样的时刻，因为他们的数据躺在 legacy 文件共享和本地系统里，还有 agent 无法穿越的访问控制。他的预测是：「五年之后，我敢打赌，企业里 90% 的 token 都来自用户根本没有发起过的任务，用户只是看到一个结果。」

**3. Builders are converging on a multi-model future where cheap, probability-based models do the judging.** Vercel CEO Guillermo Rauch states it plainly: "The future is multi-model. Trying to hide the choice confuses and hurts customers." Every CEO Dan Shipper says his company almost never tests new foundation models, but has spent about a week with one that outputs probabilities instead of words, letting it act as a judge in cases that would otherwise need a Fable-level model while running 25x faster and costing 600x less. Replit CEO Amjad Masad's response is a research question: if your output domain is known in advance, why not just train a model to produce logprobs over enums.

**3. Builders 正在收敛到一个多模型未来：做判断的会是便宜的概率模型。** Vercel CEO Guillermo Rauch 说得很直白：「未来是多模型的。试图把选择藏起来，只会让客户困惑并受损。」Every CEO Dan Shipper 说，他的公司几乎从不测试新的 foundation model，但已经花了大约一周测试一个输出概率而不是文字的新模型，它可以在原本需要 Fable 级别模型的场景里充当 judge，同时速度快 25 倍、价格低 600 倍。Replit CEO Amjad Masad 的回应是一个研究问题：如果输出空间事先已知，为什么不干脆训练一个模型直接输出枚举上的 logprobs。

**4. The tooling substrate is shifting under agents: MCP over CLI, and WebAssembly as the web's native path.** Thariq, who works on Claude Code at Anthropic, says he did not expect it but now thinks "MCPs are better than CLIs for most integrations," because models have gotten much better at tool calling, tools can be deferred, and MCP is now stateless, with a suggestion to add params like query when an agent needs to compose or filter data. Rauch notes that Safari 27 supports JSPI, a WebAssembly capability that lets synchronous native code suspend on an async Promise, and that libfx now uses the browser's built-in fetch stack to make API calls. He also formally introduced Vercel Labs as Vercel's in-public research arm, with 247 million downloads behind it.

**4. Agent 脚下的工具层正在变化：MCP 取代 CLI，WebAssembly 成为 web 原生化的一条路。** 在 Anthropic 做 Claude Code 的 Thariq 说，他没想到会这样，但现在认为「对大多数集成来说，MCP 比 CLI 更好」，因为模型在 tool calling 上进步很多，工具可以被延迟加载，MCP 现在也是无状态的；他还建议，如果需要组合或过滤数据，就给 MCP 工具加上 query 这样的参数。Rauch 指出 Safari 27 支持 JSPI，这是 WebAssembly 的一项能力，让同步的原生代码可以挂起在一个 async Promise 上，并指出 libfx 使用浏览器内置的 fetch stack 发起 API 调用。他还正式介绍了 Vercel Labs，作为 Vercel 公开进行研究和实验的部门，背后是 2.47 亿次下载。

**5. Agents are landing inside mainstream business software and education.** Claude's integration with Salesforce is now in beta, bringing accounts, opportunities, and pipeline into Claude alongside 37 pre-built sales skills. The Claude Blog adds that Claude for Small Business now ships 43 workflows and 27 new integrations, including Shopify, Salesforce, TikTok, Atlassian, Zoom, Xero, Gusto, Square, Stripe, and Zapier, and has been installed more than 900,000 times since May. Google VP Josh Woodward highlights Gemini Notebook updates for students, including live spoken Q&A with class materials in about 100 languages and audio notes that save automatically into the chosen notebook.

**5. Agent 正在进入主流商业软件和教育场景。** Claude 与 Salesforce 的集成进入 beta，把 accounts、opportunities 和 pipeline 带进 Claude，并配有 37 个预置的 sales skills。Claude Blog 补充说，Claude for Small Business 现在有 43 个工作流和 27 个新集成，包括 Shopify、Salesforce、TikTok、Atlassian、Zoom、Xero、Gusto、Square、Stripe 和 Zapier，自 5 月上线以来安装量已超过 90 万次。Google 副总裁 Josh Woodward 则介绍了面向学生的 Gemini Notebook 更新，包括用大约 100 种语言对课堂材料进行实时语音问答，以及随手录制讲座和笔记、音频笔记自动保存进所选 notebook。

**6. Trust, work slop, and capital discipline are the human and financial edge of the same shift.** Levie observes the asymmetry that people use AI for their own brainstorms but quietly question whether a colleague's AI-assisted deck means that colleague can still be trusted to execute. Nikunj Kothari, a partner at FPV Ventures, warns founders who assume "the money spigot will magically flow," arguing capital is a weapon for acceleration and that every company needs a default path that survives a downturn. On the other side of that ledger, Aditya Agarwal of SPC celebrates Profound's $180M Series D and $1.8B valuation, and Y Combinator President and CEO Garry Tan says capydotai with GStack/GBrain finished a day's worth of issue and PR fixes in about half the time using the same frontier models.

**6. 信任、work slop 和资本纪律，是同一轮变化在人和钱两端的边界。** Levie 观察到一种不对称：人们自己用 AI 做头脑风暴时心安理得，但收到同事那份明显由 AI 参与的 deck 时，会悄悄怀疑这个人是否还值得信任、能否真的把事情做成。FPV Ventures 合伙人 Nikunj Kothari 提醒那些以为「钱会自己流过来」的创始人：资本是加速的武器，每家公司都需要一条能在下行周期里活下来的默认路径。在账本的另一侧，SPC 的 Aditya Agarwal 庆祝 Profound 完成 1.8 亿美元 D 轮、估值 18 亿美元，Y Combinator 总裁兼 CEO Garry Tan 则说，用 capydotai 配合 GStack/GBrain 处理 issue 和 PR 修复，原本要一天的工作在同样的 frontier model 下只花了大约一半时间。

## X / Twitter

### Josh Woodward: VP, Google

Google VP Josh Woodward highlights new Gemini Notebook features for students, and names his two favorites: a live, spoken Q&A with your class materials in about 100 languages, and the ability to record lectures and notes on the go, with audio notes saving automatically into your chosen notebook. He also notes that university students can still get a free Google AI Plan in more than 140 countries for bigger limits and access to more Google products.

Google 副总裁 Josh Woodward 介绍了面向学生的 Gemini Notebook 新功能，并点出他最喜欢的两个：用大约 100 种语言和课堂材料做实时语音问答，以及随手录制讲座和笔记，音频笔记会自动保存进你选择的 notebook。他还提到，大学生仍然可以在 140 多个国家免费获得 Google AI Plan，从而拿到更高的额度和更多 Google 产品的使用权。

- [Josh Woodward on Gemini Notebook updates for students](https://x.com/joshwoodward/status/2099921866014306633)

### Peter Yang: Practical AI tutorials and interviews

Peter Yang, who writes practical AI tutorials and interviews for busy people, passes along the solopreneur advice he gave the Grok bot team: design your business so you can spend more time doing work you actually enjoy. Three months into working full time on his own, his argument is that there will always be choices that could make more money, but if those choices leave you doing work you do not enjoy, then that defeats the purpose of becoming a solopreneur in the first place, so delegate the boring work to your bots or simply do not do it.

写实用 AI 教程和访谈的 Peter Yang 分享了他给 Grok bot 团队的 solopreneur 建议：把你的生意设计成能让你花更多时间做自己真正喜欢的工作。全职单干三个月后，他的观点是，总会有能赚更多钱的选择，但如果这些选择让你去做自己不喜欢的工作，那就背离了成为 solopreneur 的初衷，所以把无聊的工作交给你的 bot，或者干脆不做。

In a follow-up thread, he shares the use cases readers sent back after he handed out bot codes: finding leads, drafting outreach, and turning wins into case studies; building a competitor comparison matrix with sources; monitoring hundreds of ad accounts and catching broken signup and payment flows; watching Jira, flagging blockers, and drafting the weekly status update; triaging support tickets and escalating with full context; regularly testing a hotel's booking flow so booking errors get caught; automating paperwork and back-office workflows for an electrical contracting business; monitoring AI builders on X, verifying sources, and turning wins into hooks and scripts; and building an AI research desk that turns noise into a daily brief.

在随后的一条帖子里，他分享了读者收到 bot code 后反馈的使用场景：找线索、起草 outreach、把成果写成案例；搭一个带来源引用的竞品对比矩阵；监控几百个广告账户，抓出注册和支付流程的故障；盯着 Jira、标记阻塞、起草每周状态更新；给支持工单做分流、草拟回复并带着完整上下文升级；定期测试酒店的预订流程，让预订错误能被发现；为一家电气承包公司自动化文书和后台流程；监控 X 上的 AI builders、核实来源，再把成果变成 hook 和脚本；以及做一个把噪音变成每日简报的 AI 研究台。

- [Peter Yang on solopreneur advice for the Grok bot team](https://x.com/petergyang/status/2099968897323778416)
- [Peter Yang on the bot use cases readers shared](https://x.com/petergyang/status/2100027487681953834)

### Thariq: Claude Code, Anthropic

Thariq, who works on Claude Code at Anthropic, says he was not expecting things to go this way, but he now thinks MCPs are better than CLIs for most integrations. His reasoning: models have gotten much better at tool calling, tools can now be deferred, and MCP is stateless. His practical tip is that if you need to compose or filter data, add a parameter like query to your MCP tools.

在 Anthropic 负责 Claude Code 的 Thariq 说，他没想到事情会变成这样，但现在认为对大多数集成来说 MCP 比 CLI 更好。他的理由是：模型在 tool calling 上进步很多，工具现在可以被延迟加载，而 MCP 是无状态的。他的实操建议是，如果需要组合或过滤数据，就给 MCP 工具加上 query 这样的参数。

- [Thariq on MCP versus CLI for integrations](https://x.com/trq212/status/2099958388230873165)

### Amjad Masad: CEO of Replit

Replit CEO Amjad Masad responds to a demo he calls cool with a research question: if your output domain is known in advance, why not just train a model to produce logprobs over enums?

Replit CEO Amjad Masad 回应一个他觉得很酷的 demo，抛出了一个研究问题：如果你的输出空间事先已知，为什么不干脆训练一个模型直接输出枚举上的 logprobs？

- [Amjad Masad on training models to produce logprobs over enums](https://x.com/amasad/status/2100056178705514703)

### Guillermo Rauch: CEO of Vercel

Vercel CEO Guillermo Rauch formally introduces Vercel Labs, the home for Vercel's in-public research and experimentation arm. With 247 million downloads behind the company, he says the goal is to share, also in public, what Vercel is supporting, what it is researching, and what experiments did not pan out, crediting ctatedev and cramforce for shaping the initiative.

Vercel CEO Guillermo Rauch 正式介绍了 Vercel Labs，这是 Vercel 公开进行研究和实验的部门。在公司累计 2.47 亿次下载之后，他说目标是把 Vercel 在支持什么、在研究什么、哪些实验没有跑通，都公开分享出来，并感谢 ctatedev 和 cramforce 推动了这个项目。

On model choice, Rauch argues that "the future is multi-model," and that trying to hide the choice confuses and hurts customers, who then cannot participate in the upside of the most exciting market competition of our times or master the best tool for the job.

在模型选择上，Rauch 认为「未来是多模型的」，试图把选择藏起来只会让客户困惑并受损，让他们既无法参与这个时代最激动人心的市场竞争所带来的红利，也无法掌握最适合自己任务的工具。

On the web platform, he notes that Safari 27 supports JSPI, a WebAssembly capability that lets synchronous native code suspend on an async Promise, and that libfx uses the browser's built-in fetch stack to make API calls. His expectation is that as more code goes native, WebAssembly will play a huge role in the future of the web.

在 web 平台上，他指出 Safari 27 支持 JSPI，这是 WebAssembly 的一项能力，让同步的原生代码可以挂起在一个 async Promise 上；他还指出 libfx 使用浏览器内置的 fetch stack 发起 API 调用。他的判断是，随着越来越多代码走向原生，WebAssembly 会在 web 的未来里扮演极其重要的角色。

- [Guillermo Rauch on introducing Vercel Labs](https://x.com/rauchg/status/2099911447598059812)
- [Guillermo Rauch on the multi-model future](https://x.com/rauchg/status/2099905740505055680)
- [Guillermo Rauch on WebAssembly, JSPI, and libfx](https://x.com/rauchg/status/2099974859023683975)

### Aaron Levie: CEO of Box

Box CEO Aaron Levie writes that there is a massive chasm between the power of AI models and the ultimate workflows enterprises are trying to automate, and that this gap is the opportunity for the applied AI layer to fill. Filling it means connecting the intelligence to workflows, often reengineering processes, aggregating the right context and data, allowing for the right human-in-the-loop experiences, driving change management, doing domain-specific evals, and managing the security and governance of the data and process. He expects this layer to emerge in every vertical and horizontal category, and argues that even as models improve at incredible rates the layer still has to exist and may become even more important, because greater capability enables even more complex tasks to be tackled and amplifies the challenges if you do not do this well.

Box CEO Aaron Levie 写道，AI 模型的能力和企业想要自动化的最终工作流之间，存在一道巨大的鸿沟，而这道鸿沟正是 applied AI layer 的机会。要填补它，需要把 intelligence 接到工作流上，往往还要重做流程，聚合正确的 context 和数据，设计好 human in the loop 的体验，推动 change management，做 domain specific 的 eval，并管理数据与流程的安全和治理。他预期这一层会在每一个垂直和横向品类里出现，并认为即使模型以惊人的速度进步，这一层依然必须存在，甚至可能变得更重要，因为更强的能力让更复杂的任务可以被处理，也就放大了做不好这一层所带来的挑战。

- [Aaron Levie on the applied AI layer](https://x.com/levie/status/2099976021311398230)

### Garry Tan: President & CEO of Y Combinator

Y Combinator President and CEO Garry Tan says he has started using capydotai with GStack/GBrain on fix waves for outstanding issues and pull requests, and that it did what would have taken a day with raw Codex or Claude Code in about half as much time, using the same frontier models. His verdict: "I'm amazed." He also offers a short prediction on the model race, writing that he thinks Muse is going to win.

Y Combinator 总裁兼 CEO Garry Tan 说，他开始用 capydotai 配合 GStack/GBrain 处理一批待解决的 issue 和 pull request，结果原本用原生 Codex 或 Claude Code 要花一天的工作，在同样的 frontier model 下只用了大约一半时间。他的评价是：「我很惊讶。」他还对模型竞赛给出一句简短预测，认为 Muse 会赢。

- [Garry Tan on capydotai speeding up issue and PR fixes](https://x.com/garrytan/status/2099964487667454097)
- [Garry Tan on Muse winning](https://x.com/garrytan/status/2099980972641124629)

### Nikunj Kothari: Partner at FPV Ventures

Nikunj Kothari, a partner at FPV Ventures, says he is meeting one too many founders who think the money spigot will magically flow and that the next round will happen no matter what. His argument is that capital is a weapon for acceleration that makes a well-run company unbeatable, but that a company so dependent on it can face not so great consequences in a simple downturn. He has been sharing with founders the need to figure out the default path that ensures survival and a great self-fulfilling business, then to model scenarios for abundant or scarce capital, closing with a reminder that "the only constant is change and we don't know how capital markets evolve in the next 6-18 months."

FPV Ventures 合伙人 Nikunj Kothari 说，他遇到太多创始人以为钱会自己流过来、下一轮无论如何都会发生。他的观点是，资本是加速的武器，用得好就无人能敌；但如果一家公司对它依赖太深，一次普通的下行就可能带来不太好的后果。他一直在跟创始人分享：先找出那条能确保公司活下来、又能长成一个自我实现的伟大生意的默认路径，再去推演资本充裕或稀缺时会发生什么，最后提醒大家，「唯一不变的就是变化，我们并不知道未来 6 到 18 个月资本市场会怎么演变」。

- [Nikunj Kothari on capital as a weapon, not a safety net](https://x.com/nikunj/status/2100008917980102863)

### Dan Shipper: CEO of Every

Every CEO Dan Shipper says his company almost never tests new foundation models, but has been testing one for about a week and finds it "pretty wild," the kind of thing that will be obviously indispensable in 6-12 months. The difference is that it does not produce words as output, it produces probabilities, which lets it act efficiently as a judge in cases where you would need a Fable-level model, while in Every's testing running 25x faster and 600x lower priced. He points readers to a vibe check by hammer_mt on Every.

Every CEO Dan Shipper 说，他的公司几乎从不测试新的 foundation model，但已经花了大约一周测试一个模型，感觉「非常疯狂」，属于那种 6 到 12 个月后会明显不可或缺的东西。区别在于它不输出文字，而是输出概率，因此可以在原本需要 Fable 级别模型的场景里高效地充当 judge，而在 Every 的测试中速度快 25 倍、价格低 600 倍。他推荐大家去看 hammer_mt 在 Every 上做的体验评测。

- [Dan Shipper on a probability-output model as a cheap judge](https://x.com/danshipper/status/2099947471518474522)

### Aditya Agarwal: General Partner at SPC

Aditya Agarwal, a general partner at SPC, explains what the firm saw in Profound before there was a Profound to see. The company is now worth $1.8B, one third of the Fortune 100 runs on it, and it has become the fastest-growing AI marketing platform. He notes that founders thejamescad and dbabbs met at SPC, an Uber maps engineer and a founder with no college degree, that the partnership formed before the idea, and that SPC has invested in every round since the beginning. He congratulates the team on a $180M Series D co-led by Sequoia and Kleiner Perkins, with participation from Lightspeed, Khosla Ventures, Saga Ventures, Evantic Capital, and SPC.

SPC 普通合伙人 Aditya Agarwal 解释了公司在还没有 Profound 可看的时候看到了什么。这家公司现在估值 18 亿美元，《财富》100 强里有三分之一在使用它，它也已经成长为增长最快的 AI 营销平台。他提到创始人 thejamescad 和 dbabbs 是在 SPC 认识的，一位是 Uber 的地图工程师，一位是没有大学学位、硬生生把生意做起来的创始人；两人先形成了合作关系，之后才有了那个想法。他还说 SPC 从最开始就参与了每一轮，并祝贺团队完成 1.8 亿美元 D 轮，由 Sequoia 和 Kleiner Perkins 联合领投，Lightspeed、Khosla Ventures、Saga Ventures、Evantic Capital 和 SPC 参投。

- [Aditya Agarwal on Profound's $180M Series D](https://x.com/adityaag/status/2099939685657141257)

### Sam Altman: CEO of OpenAI

OpenAI CEO Sam Altman teases the week ahead, writing that there is a big ship this week and then more for DevDay.

OpenAI CEO Sam Altman 预告了接下来这一周，说本周有一次大的 ship，之后为 DevDay 还有更多。

- [Sam Altman on a big ship this week ahead of DevDay](https://x.com/sama/status/2099872600977760451)

### Claude: Anthropic's Claude

Claude announces that Salesforce in Claude is now available in beta. It brings accounts, opportunities, and pipeline into Claude with 37 pre-built sales skills, so users can prep a call, review a deal, create a pipeline dashboard, or send a forecast without leaving the conversation.

Claude 宣布 Salesforce in Claude 进入 beta。它把 accounts、opportunities 和 pipeline 带进 Claude，并配有 37 个预置的 sales skills，用户可以在对话里准备通话、复盘一笔交易、创建 pipeline dashboard，或者直接发出预测。

- [Claude on Salesforce in Claude entering beta](https://x.com/claudeai/status/2099876514330206578)

## Podcast

### Training Data: Box's Aaron Levie: On Reinventing Yourself in the AI Age and Enterprise Diffusion

The Takeaway: The money in AI is not in the model alone but in the unglamorous work of wiring intelligence into how enterprises actually operate, and that work will take longer than Silicon Valley expects.

核心要点：AI 里的钱不在模型本身，而在于把 intelligence 接进企业真实运转方式这件不性感的工作，而这件事会比硅谷想象的更慢。

Aaron Levie, the founder and CEO of Box, has spent two decades selling unstructured content management to large organizations, which makes his read on AI diffusion unusually concrete. His central claim is that the argument over whether "model wrappers" can survive has been settled in favor of the application tier. Enterprises need a bridge between what a model can do and the workflow it has to live inside, and that bridge is deep: it requires connecting to other data systems, reengineering business processes, keeping a human in the loop for the moments that matter, managing change, and proving accuracy with domain-specific evals. "Probably a trillion dollars has been bet on basically one two outcomes," he says, and the bet now looks like the bridge is vast rather than limited.

Box 创始人兼 CEO Aaron Levie 卖了二十年面向大型组织的非结构化内容管理，这让他对 AI 扩散的判断格外具体。他的核心观点是，关于「model wrapper」能不能活下来的争论，已经以 application tier 胜出而告一段落。企业需要一座桥，把模型能做的事和它必须嵌入的工作流连起来，而这座桥很深：要接上其他数据系统，要重做业务流程，要在关键节点保留 human in the loop，要管理变革，还要用 domain specific 的 eval 证明准确率。他说，「大概有一万亿美元押在了两种结果上」，而现在看来，这座桥是宽阔而不是狭窄的。

Why coding agents spread so fast while everything else has not is the sharpest part of his analysis. For most of the world, code is a utility whose value is almost entirely captured in the text it produces, the labs benchmark against it daily, and every engineer can fix a broken MCP server without calling IT. Knowledge work offers no equivalent. A sales rep is rate-limited by whether a customer replies or has budget, and most enterprises have no "just give us your GitHub" moment because their data sits in legacy file shares and on-prem systems with access controls agents cannot navigate. Hence his prediction: "in five years from now, I would bet, like, 90% of all tokens in the enterprise are things that a user never kicked off, and they just see a result."

他最锋利的一段分析，是解释为什么 coding agent 扩散得这么快，而其他领域没有。对世界上大多数人来说，代码是一种 utility，它的价值几乎完全体现在它产出的文本上；模型实验室每天都在拿它做 benchmark；而且每个工程师都能自己修好一个挂掉的 MCP server，不需要打电话给 IT。知识工作没有这样的对应物。销售代表的效率受制于客户是否回复、是否有预算，而大多数企业也没有「把 GitHub 给你就好」的时刻，因为他们的数据躺在 legacy 文件共享和本地系统里，还有 agent 无法穿越的访问控制。于是他给出预测：「五年之后，我敢打赌，企业里 90% 的 token 都来自用户根本没有发起过的任务，用户只是看到一个结果。」

His advice to systems of record is to do two things at once: build an agent provably ten to twenty points better than any off-the-shelf agent at using your product, and go headless so Claude, ChatGPT, and other platforms can reach you through APIs and MCP. He is equally candid about the cultural mess AI creates, noting that people happily use AI for their own brainstorms while quietly wondering whether a colleague's AI-assisted deck means that colleague can still be trusted to execute. On open weights, his read is that adoption is "higher than people think, lower than what enterprises actually want, and much, much, much, much, much lower than what it'll be in five years."

他对 system of record 的建议是同时做两件事：做一个在自家产品上比任何通用 agent 明显强 10 到 20 个百分点的 agent；同时让自己 headless，让 Claude、ChatGPT 等平台能通过 API 和 MCP 接进来。他对 AI 带来的文化混乱同样坦率：人们自己用 AI 做头脑风暴时心安理得，却会悄悄怀疑同事那份 AI 参与的 deck 是否意味着这个人还值得信任、还能把事做成。至于 open weights，他的判断是采用率「比大家想的高，比企业真正想要的低，也比五年后会达到的水平低得多得多得多得多」。

- [Training Data: Box's Aaron Levie: On Reinventing Yourself in the AI Age and Enterprise Diffusion](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8)

## Blog

### Claude Blog: Claude for Small Business launches new workflows, integrations, and training programs

Claude for Small Business now includes 43 workflows and 27 new integrations with tools small businesses already use, including Shopify, Salesforce, TikTok, Atlassian, Zoom, Xero, Gusto, Square, Stripe, and Zapier. The new workflows extend Claude from running the back office to growing the business, and they arrive with a fall schedule of free in-person workshops and partner webinars for owners who want help getting started. Anthropic launched the product in May as a set of connectors and ready-to-run workflows, and says it has since been installed more than 900,000 times; original and continued partners include Intuit Quickbooks, PayPal, HubSpot, Canva, Docusign, Google Workspace, and Microsoft 365.

Claude for Small Business 现在包含 43 个工作流和 27 个新集成，接入的都是小企业已经在用的工具，包括 Shopify、Salesforce、TikTok、Atlassian、Zoom、Xero、Gusto、Square、Stripe 和 Zapier。新工作流把 Claude 从「管好后台」扩展到「把生意做大」，同时配上了秋季的免费线下工作坊和合作方 webinar，方便想上手的老板们参加。Anthropic 在 5 月推出这个产品时，它只是一组 connector 和开箱即用的工作流，公司说如今安装量已经超过 90 万次；最早合作并持续合作的伙伴包括 Intuit Quickbooks、PayPal、HubSpot、Canva、Docusign、Google Workspace 和 Microsoft 365。

The release is shaped by what owners asked for. On the spring Claude SMB Tour, more than 1,000 owners in 10 cities said what they wanted Claude to take on next, and about a third asked for help growing the business, from generating leads and answering inbound inquiries to writing proposals, while many wanted day-to-day reporting handled for them. The tour returns this fall with free workshops in 10 US cities, more than 150 organizations trained as Approved Claude SMB Trainers will run over 750 workshops in their own communities, and 14 integration partners are hosting free webinars about their connectors.

这次发布是被老板们的需求塑形的。在春季的 Claude SMB Tour 上，来自 10 个城市的 1000 多位老板讲了自己希望 Claude 接下来接手什么，大约三分之一的人要的是帮生意增长，从找线索、回答客户咨询到写方案，还有很多人希望日常报表由它来处理。巡展今年秋天回归，会在美国 10 个城市举办免费工作坊；超过 150 家被培训为 Approved Claude SMB Trainers 的机构会在自己的社区里举办 750 多场工作坊；14 家集成伙伴也会围绕各自的 connector 举办免费 webinar。

The customer examples are the clearest evidence of the time being reclaimed. "What used to take me 120 hours now takes me five minutes," says Pedro Rubio, founder and CEO of Blackfyre GovCon in Washington, D.C. Cara Roellgen, Director of Strategy and Innovation at KBSO Consulting in Carmel, Indiana, frames it as an equalizer: "I really see Claude as an equalizer for small businesses, where we can do stuff as big as a 100 person, 200 person firm now." Garrett French, owner of Driller Design Co. in Tulsa, Oklahoma, describes an agent that checks the CRM at 6:00 am, prioritizes the to-do list, and sends out an email called the daily briefing.

客户案例最能说明被省下来的时间。「过去要花我 120 个小时的事，现在 5 分钟就完成了。」华盛顿特区 Blackfyre GovCon 创始人兼 CEO Pedro Rubio 说。印第安纳州 Carmel 的 KBSO Consulting 战略与创新总监 Cara Roellgen 把它看成一个均衡器：「我真的觉得 Claude 是小企业的均衡器，现在我们能做到 100 人、200 人公司才能做到的事。」俄克拉荷马州 Tulsa 的 Driller Design Co. 老板 Garrett French 描述了一个 agent：每天早上 6 点查看 CRM，给待办事项排好优先级，然后发一封邮件，他们把它叫做 daily briefing。

- [Claude Blog: Claude for Small Business launches new workflows, integrations, and training programs](https://claude.com/blog/claude-for-small-business-launches-new-workflows-integrations-and-training-programs)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
