[English](../../en/daily/ai-digest-2026-09-23-Wed.md) | [中文](../../zh/daily/ai-digest-2026-09-23-Wed.md) | [Bilingual](./ai-digest-2026-09-23-Wed.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. The frontier price war is compressing the cost per task faster than any technology before it.** Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, announced that GPT-6 Sol and Luna are out, a very significant improvement across the board including writing, and that OpenAI is permanently cutting the API price by 50% while loading a banked reset into all Plus, Pro and Business accounts. Box CEO Aaron Levie frames the day as an inflection: with the Opus 5.5 price cuts and the 50% GPT-6 token price drop, the cost per task on a like-for-like basis is falling faster than in any other type of technology in history, which he calls Jevons paradox applied to agents. Vercel CEO Guillermo Rauch's fresh Next.js evals put Opus 5.5, GPT 6 Sol and Fable 5.1 in a tie at 97%, with Grok 4.7 close behind at 94% and 2x-7x cheaper.

**1. 前沿模型的价格战，正在以前所未有的速度压缩单位任务成本。** 在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 宣布 GPT-6 Sol 和 Luna 上线，称它们在全维度上都有非常显著的提升，写作能力也在其中；同时 OpenAI 把 API 价格永久下调 50%，并给所有 Plus、Pro 和 Business 账户加载一次 banked reset。Box CEO Aaron Levie 把这一天称为拐点：在 Opus 5.5 降价和 GPT-6 token 价格下调 50% 之后，按同口径计算的单位任务成本下降速度，是任何其他技术都不曾有过的，他称之为「Jevons paradox 在 agent 上的体现」。Vercel CEO Guillermo Rauch 给出的新一轮 Next.js 评测中，Opus 5.5、GPT 6 Sol 和 Fable 5.1 同为 97%，Grok 4.7 以 94% 紧随其后，但便宜 2 到 7 倍。

**2. Claude Opus 5.5 shipped as the new default across Anthropic's products.** Cat Wu, who works on Claude Code and Cowork at Anthropic, says Opus 5.5 is now the default model in Claude Code and the Claude app including Cowork for Pro, Max and Team plans, that the team is defaulting to effort medium, which is comparable to Fable 5.1 on intelligence but faster, and that rate limits will go 25% further than on Opus 5. The official Claude account confirmed Opus 5.5 is available today. Boris Cherny, who works on Claude Code at Anthropic, called Opus 5.5 a really good model and his daily driver for the last few weeks. On the enterprise side, Levie reported that Box tested Opus 5.5 with the Box Agent and saw frontier capability levels with 63% fewer tokens used, 42% less verbosity and 30% faster than Opus 5.

**2. Claude Opus 5.5 一发布就成为 Anthropic 各产品的默认模型。** 在 Anthropic 负责 Claude Code 和 Cowork 的 Cat Wu 说，Opus 5.5 已成为 Claude Code 和 Claude app（含 Cowork）在 Pro、Max、Team 套餐下的默认模型；团队在多个产品上默认使用 effort medium，智能水平与 Fable 5.1 相当但更快，rate limit 相比 Opus 5 可以多用 25%。官方 Claude 账号确认 Opus 5.5 今天上线。在 Anthropic 负责 Claude Code 的 Boris Cherny 称 Opus 5.5 是一个非常好的模型，也是他最近几周的日常主力。在企业侧，Levie 说 Box 用 Box Agent 测试了 Opus 5.5，达到了前沿能力水平，相比 Opus 5 token 用量减少 63%、冗余表述减少 42%、速度提升 30%。

**3. Formal verification and ambitious ports show how far coding agents reach.** Cherny says he used Opus 5.5 to formally verify the Claude Agent SDK using Lean, where a couple of short prompts produced 16 PRs fixing various bugs and race conditions, and that TLA+ also works well, sometimes combining Lean and TLA+ to look for issues around data flow, concurrency and state management. He does not know either language well but says Claude is excellent at both, and asks whether formal verification is the future of coding, or at least of bug finding. In a head-to-head, he says Opus 5.5 and Fable 5.1 each ported HAProxy from C to Rust, both passing nearly all of HAProxy's tests, but Opus 5.5 finished in 9.5 hours versus Fable 5.1's 12 hours and for 51% less cost. Y Combinator President and CEO Garry Tan says Capy lets him drop PRs much faster than he would with Codex or Claude Code alone.

**3. 形式化验证和大规模移植，展示了编码 agent 能走多远。** Cherny 说他用 Opus 5.5 以 Lean 对 Claude Agent SDK 做了形式化验证，几条简短 prompt 就产出了 16 个修复各种 bug 和竞态条件的 PR；他还说 TLA+ 同样好用，有时会把 Lean 和 TLA+ 结合，用来排查数据流、并发和状态管理的问题。他坦言自己并不精通这两门语言，但 Claude 都很擅长，这种做法的价值在于对代码做形式化建模，找出人类很可能发现不了的 bug；他还反问：形式化验证是不是编码的未来，至少是找 bug 的未来？在一次正面对比中，他说 Opus 5.5 和 Fable 5.1 各自把 HAProxy 从 C 移植到 Rust，两者都几乎通过 HAProxy 的全部测试，但 Opus 5.5 用了 9.5 小时，Fable 5.1 用了 12 小时，且成本低 51%。Y Combinator 总裁兼 CEO Garry Tan 说，Capy 让他提交 PR 的速度远超单用 Codex 或 Claude Code。

**4. Builders are converging on craft, taste and the user rather than raw feature volume.** Vercel CEO Guillermo Rauch praised the tastefulness with which Anthropic ships, arguing that the excitement about headless for the web is that any page could take whatever whimsical or unique shape you wanted, and that with AI there is no excuse not to push the design frontier. Anthropic researcher Alex Albert has been on a Blender kick with Opus 5.5, saying its better 3D modeling and vision mean you can build an entire world from a single prompt, and shared a prompt that recreates San Francisco's Market Street in 1906, the afternoon before the earthquake, with every building traced back to source data. Thariq, who works on Claude Code at Anthropic, argues that the right way to use model capabilities is not to ship 10x more features to production but to spend more time understanding your users, trying experiments and learning about things you do not understand. Aditya Agarwal, General Partner at SPC and co-founder of Bevel Health, makes the delight case: in the mad dash for productivity we often forget that AI products should be delightful and fun.

**4. builders 正在把重心转向手艺、品味和对用户的理解，而不是堆功能。** Vercel CEO Guillermo Rauch 称赞 Anthropic 发布产品的品味，认为他对 web「headless」兴奋的原因是每个页面都能长成任意 whimsical 或独特的形态，有了 AI 就更没有理由不去推动设计边界。Anthropic 研究员 Alex Albert 说他最近 on a Blender kick with Opus 5.5，更强的 3D 建模和视觉能力让一句 prompt 就能构建整个世界；他分享了一个 prompt，用来重现 1906 年地震前当天下午的旧金山 Market Street，并让每栋建筑都能回溯到来源数据。在 Anthropic 负责 Claude Code 的 Thariq 认为，正确使用模型能力的方式不是往生产环境塞 10 倍功能，而是花更多时间理解用户、做实验、把不懂的东西搞懂，这样交付的东西才真正可用。SPC 普通合伙人、Bevel Health 联合创始人 Aditya Agarwal 则为「愉悦感」辩护：在疯狂追逐生产力的过程中，我们常常忘了 AI 产品应该让人愉悦、好玩。

**5. The rest of the agent-adjacent stack: tools, bugs and safety infrastructure.** Peter Steinberger, who works on OpenClaw and OpenAI, said that after ChatGPT sometimes crashed for him on macOS 27, Astra found a roughly 14-year-old bug in libuv. Aditya Agarwal drew a line from today's model safety debate back to autonomous vehicles, noting that the original safety debate for AI and machine learning was actually in self-driving cars, and that the most interesting part of hosting Waymo's Dmitri Dolgov at SPC was the extensive eval and testing infrastructure Waymo built to release 2-ton robots traveling at 30mph through urban environments. Every CEO Dan Shipper shared a vibe check on Opus 5.5 versus Sol-6, alongside his take on why AI automation creates more good work to do for human experts.

**5. agent 周边世界的信号：工具、bug 和安全基础设施。** 在 OpenClaw 和 OpenAI 工作的 Peter Steinberger 说，升级到 macOS 27 之后 ChatGPT 有时候会崩溃，结果 Astra 在 libuv 里找到了一个大约 14 年前的 bug。Aditya Agarwal 把今天关于模型安全性的争论拉回到自动驾驶：AI 和机器学习最早的安全辩论其实发生在自动驾驶汽车上；在 SPC 接待 Waymo 的 Dmitri Dolgov 之后，他印象最深的是 Waymo 为了有底气把 2 吨重、在城市道路上以 30mph 行驶的机器人放上路，而搭建起来的庞大评测与测试基础设施。Every CEO Dan Shipper 分享了他对 Opus 5.5 与 Sol-6 的 vibe check，以及他对 AI 自动化为何会给人类专家创造更多好工作的看法。

**6. The ecosystem around the models: money, media and distribution.** FPV Ventures partner Nikunj Kothari warns not to believe fundraise headlines: so many SPVs are organized by even the best investors that a large share of a big round can come from SPVs while the headline says something else, and combined with tranched valuations and revenue not being the same, proof is in the pudding and the pudding is not publicly visible anywhere. Garry Tan says GStack actually tells you to apply to YC if you are working on something cool, and argues we need to teach the world to prompt and maximally use AI so that all people can see how it gives you wings in all your pursuits. OpenAI CEO Sam Altman said startups are naturally good at something that is hard for a bigger company to keep doing, calling it an underexplored space.

**6. 模型之外的生态：资金、内容与分发。** FPV Ventures 合伙人 Nikunj Kothari 提醒不要相信融资头条：即便是「最好」的投资人组织的 SPV 数量也令人瞠目，所以读到一笔大额融资的标题时，你几乎可以确定其中很大一部分来自 SPV，尽管标题写的是别的东西；再叠加分期估值和收入并不等同，他的建议是别再相信标题，因为 proof is in the pudding and the pudding is not publicly visible anywhere。Garry Tan 说如果你在做有意思的事，GStack 确实会建议你去申请 YC，并认为我们需要教全世界写 prompt、把 AI 用到极致，让所有人都看到 AI 如何在各种追求中给你插上翅膀，进而更渴望为自己和彼此解决更多问题。OpenAI CEO Sam Altman 说初创公司天生擅长这件事，而大公司很难一直保持这种能力，他认为这是一个尚未被充分探索的空间。

## X / Twitter

### Thibault Sottiaux: Codex and ChatGPT at OpenAI

Thibault Sottiaux announced that GPT-6 Sol and Luna are out, describing them as a very significant improvement across the board, including writing and general quality. He said OpenAI is permanently reducing the API price by 50%, making both models viable for a ton of new use cases and making usage go further even on subscriptions, and that a banked reset is being loaded into all Plus, Pro and Business accounts. In a separate post he said the team has been focusing on efficiency and intelligence for all, and that this is only possible when you have incredible models at the top end of capability that you can then use to make a big difference in everything else.

Thibault Sottiaux 宣布 GPT-6 Sol 和 Luna 上线，称它们在全维度上都有非常显著的提升，包括写作和那种「你用一下就懂」的整体质量。他说 OpenAI 把 API 价格永久下调 50%，让两个模型都能支撑大量新场景，也让订阅用户的使用额度更耐用；他还说会给所有 Plus、Pro 和 Business 账户加载一次 banked reset。在另一条帖子里，他表示团队一直在关注「让所有人都有更高的效率和智能」，而这只有在你拥有能力上限极高的模型、并用它去改善其他一切时才可能做到。

- [Thibault Sottiaux: GPT-6 Sol and Luna are out, with a permanent 50% API price cut / GPT-6 Sol 和 Luna 上线，API 价格永久下调 50%](https://x.com/thsottiaux/status/2102463847714247142)
- [Thibault Sottiaux: "efficiency and intelligence for all" / 「让所有人都有更高的效率和智能」](https://x.com/thsottiaux/status/2102440619616682120)
- [Thibault Sottiaux: "Maybe our cutest launch so far" / 「Maybe our cutest launch so far」](https://x.com/thsottiaux/status/2102509507415048245)

### Aaron Levie: CEO, Box

Aaron Levie called it an insane day in AI, with frontier models just becoming substantially cheaper through the Opus 5.5 price cuts and GPT-6 Sol and Luna dropping token prices by 50%. He argues that the rate at which cost per task falls on a like-for-like basis is unlike any other type of technology in history, and that every time the cost of AI drops, the use cases you can deploy agents against dramatically increase, which he calls Jevons paradox applied to agents. He expects broader diffusion of AI in the economy as agents process all of our data, scan our code for security issues, read through log data to make decisions and run as agent swarms in workflows. He also detailed Box's testing of Opus 5.5 on complex enterprise knowledge work with the Box Agent: 63% fewer tokens used, 42% less verbosity and 30% faster than Opus 5, including a financial services due diligence task at +39% accuracy, a cloud cost analysis task at +65%, a client account analysis at +17% and a clinical diagnostics task at +15%, with customers able to build AI agents with Opus 5.5 in Box AI Studio shortly.

Aaron Levie 称这是 AI 领域疯狂的一天：随着 Opus 5.5 降价、GPT-6 Sol 和 Luna 把 token 价格下调 50%，前沿模型一下子便宜了很多。他认为，按同口径计算的单位任务成本下降速度，在技术史上没有先例；而 AI 成本每下降一次，可以用 agent 承接的场景就会大幅增加，他把这种现象称为「Jevons paradox 在 agent 上的体现」。他预计 AI 会因此加速在经济中扩散：用 agent 处理所有数据、扫描代码安全问题、读遍日志做决策、在 workflow 里跑 agent swarm。他还详细介绍了 Box 用 Box Agent 对 Opus 5.5 做的企业级测试：相比 Opus 5 token 用量减少 63%、冗余表述减少 42%、速度提升 30%，其中金融服务尽职调查任务准确率 +39%、云成本分析 +65%、客户账户分析 +17%、临床诊断 +15%；客户很快可以在 Box AI Studio 里用 Opus 5.5 构建 AI agent。

- [Aaron Levie: cheaper frontier models open up agent use cases, Jevons paradox applied to agents / 前沿模型更便宜，会打开更多 agent 场景，Jevons paradox 在 agent 上的体现](https://x.com/levie/status/2102477253070430322)
- [Aaron Levie: Box's enterprise tests of Opus 5.5 with the Box Agent / Box 用 Box Agent 对 Opus 5.5 做的企业级测试](https://x.com/levie/status/2102448415775051790)

### Boris Cherny: Claude Code at Anthropic

Boris Cherny said he used Opus 5.5 to formally verify the Claude Agent SDK using Lean, where a couple of short prompts produced 16 PRs fixing various bugs and race conditions. He added that TLA+ also works well and that he sometimes combines Lean and TLA+ to look for issues around data flow, concurrency and state management, and that while he does not know either language well, Claude is excellent at both, making this approach super useful for formally modeling your code and finding bugs a human probably would not have spotted; he asks whether formal verification is the future of coding, or at least of bug finding. In another post he said Opus 5.5 is a really good model and has been his daily driver for the last few weeks, sharing a head-to-head where Opus 5.5 and Fable 5.1 each ported HAProxy from C to Rust, both passing nearly all of HAProxy's tests, but with Opus 5.5 finishing in 9.5 hours versus Fable 5.1's 12 hours and for 51% less cost.

Boris Cherny 说他用 Opus 5.5 以 Lean 对 Claude Agent SDK 做了形式化验证，几条简短 prompt 就产出了 16 个 PR，修复了各种 bug 和竞态条件。他还说 TLA+ 也很好用，有时会把 Lean 和 TLA+ 结合起来排查数据流、并发和状态管理方面的问题；他坦言自己并不精通这两门语言，但 Claude 都很擅长，这种做法对代码做形式化建模、找出人类很可能发现不了的 bug 非常有用；他反问：形式化验证是不是编码的未来，至少是找 bug 的未来？在另一条帖子里他说 Opus 5.5 是一个非常优秀的模型，也是他最近几周的日常主力；他分享了一次对比：Opus 5.5 和 Fable 5.1 各自把 HAProxy 从 C 移植到 Rust，两者都几乎通过 HAProxy 的全部测试，但 Opus 5.5 用了 9.5 小时，Fable 5.1 用了 12 小时，而且成本低 51%。

- [Boris Cherny: formally verifying the Claude Agent SDK with Lean produced 16 PRs / 用 Lean 对 Claude Agent SDK 做形式化验证，产出 16 个 PR](https://x.com/bcherny/status/2102543349102338309)
- [Boris Cherny: Opus 5.5 ported HAProxy to Rust in 9.5 hours for 51% less cost than Fable 5.1 / Opus 5.5 用 9.5 小时把 HAProxy 移植到 Rust，成本比 Fable 5.1 低 51%](https://x.com/bcherny/status/2102439069053747549)
- [Boris Cherny: "Opus made an infographic" / 「Opus 做了一张信息图」](https://x.com/bcherny/status/2102543350436180277)

### Cat Wu: Claude Code and Cowork at Anthropic

Cat Wu said Claude Opus 5.5 is now the default model in Claude Code and the Claude app, including Cowork, for Pro, Max and Team plans, and that she has been using Opus 5.5 as a daily driver and loves its clear communication skills and its ability to write in her style. She said the team is defaulting to effort medium across products, which is comparable to Fable 5.1 on intelligence but faster, and that rate limits will go 25% further on Opus 5.5 compared to Opus 5. She also pointed to ways to try Opus 5.5 and Claude Tag in Slack.

Cat Wu 说 Claude Opus 5.5 已经成为 Claude Code 和 Claude app（含 Cowork）在 Pro、Max、Team 套餐下的默认模型；她自己也把它当日常主力，称赞它沟通清晰、能用她的风格写作。她说团队在多个产品上默认使用 effort medium，智能水平与 Fable 5.1 相当但更快，rate limit 相比 Opus 5 可以多用 25%。她还给出了在 Slack 里试用 Opus 5.5 和 Claude Tag 的途径。

- [Cat Wu: Claude Opus 5.5 is the new default in Claude Code and the Claude app / Claude Opus 5.5 成为 Claude Code 和 Claude app 的新默认模型](https://x.com/_catwu/status/2102437713781944397)
- [Cat Wu: ways to try Opus 5.5 and Claude Tag in Slack / 在 Slack 里试用 Opus 5.5 和 Claude Tag 的途径](https://x.com/_catwu/status/2102569951974584612)

### Guillermo Rauch: CEO, Vercel

Guillermo Rauch shared fresh Next.js evals where Opus 5.5, GPT 6 Sol and Fable 5.1 all landed at 97% and Grok 4.7 at 94%, noting that Grok is 2x-7x cheaper. He also praised the tastefulness with which Anthropic ships, arguing that the main reason he got excited about headless for the web is that any given page could take whatever whimsical or unique shape you wanted, and that with AI there is no excuse not to push the design frontier. Separately he wrote that software will never die again, and that if you liked Google Reader you can generate and deploy your own, yours forever.

Guillermo Rauch 分享了新一轮 Next.js 评测：Opus 5.5、GPT 6 Sol 和 Fable 5.1 都是 97%，Grok 4.7 是 94%，他还特别指出 Grok 便宜 2 到 7 倍。他也称赞 Anthropic 发布产品的品味，认为他对 web「headless」兴奋的原因是每个页面都能长成任意 whimsical 或独特的形态，有了 AI 就更没有理由不去推动设计边界。另外他写道，软件再也不会消亡：你怀念 Google Reader，就自己生成并部署一个，永远属于你。

- [Guillermo Rauch: fresh Next.js evals put three models at 97% / 新一轮 Next.js 评测中三个模型并列 97%](https://x.com/rauchg/status/2102519097770885231)
- [Guillermo Rauch: the tastefulness of Anthropic's shipping and pushing the design frontier / Anthropic 发布产品的品味与推动设计边界](https://x.com/rauchg/status/2102438365455167883)
- [Guillermo Rauch: "Software will never die again" / 「Software will never die again」](https://x.com/rauchg/status/2102594015669756323)

### Alex Albert: Research at Anthropic

Alex Albert said he has been on a Blender kick with Opus 5.5, arguing that its better 3D modeling and vision mean you can build an entire world from a single prompt, and shared a historically accurate reconstruction of San Francisco's Market Street in 1906, pre-earthquake. The prompt he showed asks the model to recreate Market Street as it stood on April 17, 1906, the afternoon before the earthquake, scoped from the Ferry Building up Market to Fifth Street including the Palace Hotel, the Call Building, the Chronicle Building, Lotta's Fountain and the Emporium, and to build a source file first from the 1899-1905 Sanborn fire insurance maps, the Miles Brothers film "A Trip Down Market Street," period photographs and USGS topography before modeling anything, so that every building traces back to data and is assembled in Blender Python with reusable generators.

Alex Albert 说他最近 on a Blender kick with Opus 5.5，认为它更强的 3D 建模和视觉能力让你可以用一句 prompt 构建整个世界；他分享了一个对 1906 年地震前旧金山 Market Street 的历史还原作品。他展示的 prompt 要求模型重现 1906 年 4 月 17 日地震前当天下午的 Market Street，范围从 Ferry Building 沿 Market 到 Fifth Street，包括 Palace Hotel、Call Building、Chronicle Building、Lotta's Fountain 和 Emporium；并先基于 1899 到 1905 年的 Sanborn 火灾保险地图、Miles Brothers 的影片「A Trip Down Market Street」、历史照片和 USGS 地形数据建立来源文件，再在 Blender 里用 Python 组装，让每栋建筑都能回溯到数据，并用可复用的生成器搭建。

- [Alex Albert: building an entire world from a single Opus 5.5 prompt in Blender / 用一句 Opus 5.5 prompt 在 Blender 里构建整个世界](https://x.com/alexalbert__/status/2102466523164274839)
- [Alex Albert: the prompt recreating pre-earthquake Market Street from source data / 那个基于来源数据重现地震前 Market Street 的 prompt](https://x.com/alexalbert__/status/2102466524934271381)

### Thariq: Claude Code at Anthropic

Thariq argued that the right way to use model capabilities is not to ship 10x more features to production, but to spend more time understanding your users, trying experiments, building prototypes and learning about things you do not understand so that you ship things that actually work. He said workflows are a huge part of how he uses Claude these days and that he is glad to have Fable-like intelligence that works with workflows from a cost perspective. On games, he said 3D generation is a great capability to help you imagine your game come to life, but that you should figure out how to make a good, satisfying game loop first.

Thariq 认为，正确使用模型能力的方式不是往生产环境塞 10 倍功能，而是花更多时间理解用户、做实验、搭原型，把不懂的东西搞懂，这样交付的东西才真正可用。他说 workflow 现在是他使用 Claude 的重要部分，也很高兴有 Fable 级别的智能在成本上能支撑 workflow。谈到游戏时他说，3D 生成很适合让你想象中的游戏活起来，但你应该先想清楚怎么做出一个好的、令人满足的游戏循环。

- [Thariq: use model capabilities to understand users, not to ship 10x more features / 用模型能力去理解用户，而不是往生产环境塞 10 倍功能](https://x.com/trq212/status/2102548686303854790)
- [Thariq: workflows are a huge part of how he uses Claude / workflow 现在是他使用 Claude 的重要部分](https://x.com/trq212/status/2102477527688388752)
- [Thariq: figure out the game loop before the 3D generation / 先想清楚游戏循环，再谈 3D 生成](https://x.com/trq212/status/2102549030303867257)

### Garry Tan: President and CEO, Y Combinator

Garry Tan said Capy lets him drop PRs much faster than he would with Codex or Claude Code alone. He also noted that GStack does actually tell you to apply to YC if you are working on something cool, and argued that we need to teach the world to prompt and maximally use AI so that all people can see the way it can give you wings in all your pursuits, and then yearn to solve more problems for ourselves and for one another.

Garry Tan 说 Capy 让他提交 PR 的速度远超单用 Codex 或 Claude Code。他还说如果你在做有意思的事，GStack 确实会建议你去申请 YC；他认为我们需要教全世界写 prompt、把 AI 用到极致，让所有人都看到 AI 如何在各种追求中给你插上翅膀，进而更渴望为自己和彼此解决更多问题。

- [Garry Tan: Capy lets him drop PRs much faster than Codex or Claude Code alone / Capy 提交 PR 的速度远超单用 Codex 或 Claude Code](https://x.com/garrytan/status/2102544711647129902)
- [Garry Tan: GStack does tell you to apply to YC / GStack 确实会建议你去申请 YC](https://x.com/garrytan/status/2102537390774759761)
- [Garry Tan: teach the world to prompt and maximally use AI / 教全世界写 prompt、把 AI 用到极致](https://x.com/garrytan/status/2102501556348440983)

### Claude: the official Claude account

The official Claude account said Claude Opus 5.5 is available today and asked what people will explore, and highlighted two community-built examples: an algorithmic drawing program created by kevin_t_ngo where every drawing is based on a different seed, and a toy brick-building app that turns a photo or a description into a buildable model with custom instructions.

官方 Claude 账号说 Claude Opus 5.5 今天上线，并问大家想探索什么，还介绍了两个社区作品：kevin_t_ngo 做的算法绘画程序，每幅画基于不同的 seed；以及一个玩具积木搭建应用，可以把照片或描述变成可拼装的模型，还支持自定义指令。

- [Claude: Claude Opus 5.5 is available today / Claude Opus 5.5 今天上线](https://x.com/claudeai/status/2102471892099866883)
- [Claude: an algorithmic drawing program by kevin_t_ngo / kevin_t_ngo 做的算法绘画程序](https://x.com/claudeai/status/2102471889092276516)
- [Claude: a toy brick-building app / 一个玩具积木搭建应用](https://x.com/claudeai/status/2102471885061812714)

### Aditya Agarwal: General Partner at SPC and co-founder of Bevel Health

Aditya Agarwal argued that while safety and alignment of models is the raging topic today, the original safety debate for AI and machine learning was actually in autonomous vehicles. He described his first Waymo ride as feeling like a religious experience, and said the most interesting part of hosting Waymo's Dmitri Dolgov at SPC was the extensive eval and testing infrastructure Waymo has built out to gain the confidence to release 2-ton robots traveling at 30mph through urban environments, adding that he is excited to release the full video soon. He also noted that this was the first Minus One fireside his 9-year-old asked to attend, and argued that in the mad dash for productivity we often forget that AI products should be delightful and fun, recommending Sentience.

Aditya Agarwal 认为，今天关于「模型」安全与对齐的讨论非常火热，但 AI 和机器学习最早的安全辩论其实发生在自动驾驶汽车上。他说自己第一次坐 Waymo 的感觉像一次宗教体验，而昨天在 SPC 接待 Waymo 的 Dmitri Dolgov 时，他印象最深的是 Waymo 为了有底气把 2 吨重、在城市场景下以 30mph 行驶的机器人放上路，而搭建起来的庞大评测和测试基础设施；他还说很期待尽快放出完整视频。他也提到这是他 9 岁孩子第一次主动要求参加的一场 Minus One 对谈，并提出 AI 产品应该让人愉悦、好玩，推荐大家试试 Sentience。

- [Aditya Agarwal: the original AI safety debate was actually in autonomous vehicles / AI 最早的安全辩论其实在自动驾驶上](https://x.com/adityaag/status/2102457464432284019)
- [Aditya Agarwal: hosting Waymo's Dmitri Dolgov at SPC / 在 SPC 接待 Waymo 的 Dmitri Dolgov](https://x.com/adityaag/status/2102498288658526614)
- [Aditya Agarwal: AI products should be delightful and fun / AI 产品应该让人愉悦、好玩](https://x.com/adityaag/status/2102421668509733058)

### Nikunj Kothari: partner at FPV Ventures

Nikunj Kothari warned that the amount of SPVs organized by even the best investors is mind boggling, so that if you read the headline of a large fundraise you can be reasonably sure a large amount of it came from SPVs even though the headline says something else. Combined with tranched valuations and revenue not being the same, his advice is not to believe the headlines anymore, because the proof is in the pudding and the pudding is not publicly visible anywhere. He also shared part three of his "A Walk In The Park" series featuring Todd Saunders, now also on YouTube, with chapters covering vertical versus horizontal software, a $10M pivot, life after the exit and why raise VC again.

Nikunj Kothari 提醒说，即便是「最好」的投资人组织的 SPV 数量都多得令人咋舌，因此你读到一笔大额融资的标题时，几乎可以确定其中很大一部分来自 SPV，尽管标题写的是别的东西。再叠加分期估值、以及收入并不等同于同一回事，他的建议是别再相信标题，因为 proof is in the pudding and the pudding is not publicly visible anywhere。他还分享了「A Walk In The Park」第三期，嘉宾是 Todd Saunders，目前也已上线 YouTube；章节涵盖垂直与水平软件、那次 1000 万美元的 pivot、退出之后的生活，以及为什么再次融资。

- [Nikunj Kothari: don't believe fundraise headlines / 别再相信融资头条](https://x.com/nikunj/status/2102534909076349291)
- [Nikunj Kothari: "A Walk In The Park" part three with Todd Saunders / 「A Walk In The Park」第三期，嘉宾 Todd Saunders](https://x.com/nikunj/status/2102395699895677325)
- [Nikunj Kothari: "A Walk In The Park" part three is now also on YouTube / 「A Walk In The Park」第三期也已上线 YouTube](https://x.com/nikunj/status/2102409907278602622)

### Dan Shipper: CEO, Every

Dan Shipper said he added almost 10k new followers in a day and pointed newcomers to two things: his vibe check on Opus 5.5 versus Sol-6, and his take on why AI automation creates more good work to do for human experts.

Dan Shipper 说他一天之内涨了将近 1 万名新粉丝，并举出两篇内容给新读者：他对 Opus 5.5 与 Sol-6 的 vibe check，以及他对 AI 自动化为何会给人类专家创造更多好工作的看法。

- [Dan Shipper: a vibe check on Opus 5.5 versus Sol-6 and why automation creates more good work / 对 Opus 5.5 与 Sol-6 的 vibe check，以及自动化为何创造更多好工作](https://x.com/danshipper/status/2102556723244564715)

### Peter Steinberger: OpenClaw and OpenAI

Peter Steinberger said that after ChatGPT sometimes crashed for him following an update to macOS 27, Astra found a roughly 14-year-old bug in libuv.

Peter Steinberger 说，升级到 macOS 27 之后 ChatGPT 有时候会崩溃，结果 Astra 在 libuv 里找到了一个大约 14 年前的 bug。

- [Peter Steinberger: Astra found a roughly 14-year-old bug in libuv / Astra 在 libuv 里找到一个大约 14 年前的 bug](https://x.com/steipete/status/2102501642176528743)

### Sam Altman: OpenAI CEO

Sam Altman said startups are naturally good at this, and that it is hard to keep a bigger company good at it, which he thinks is an underexplored space.

Sam Altman 说，初创公司天生就擅长这件事，而大公司很难一直保持这种能力，他认为这是一个尚未被充分探索的空间。

- [Sam Altman: startups are naturally good at what is hard for bigger companies / 初创公司天生擅长大公司难以保持的能力](https://x.com/sama/status/2102469008079679640)

## Podcast

The validated podcast feed for this run contained no new qualifying episodes.

本次运行中通过验证的播客 feed 没有新的合格剧集。

## Blog

The validated blog feed for this run contained no new qualifying posts.

本次运行中通过验证的博客 feed 没有新的合格文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
