[English](../../en/daily/ai-digest-2026-05-19-Tue.md) | [中文](../../zh/daily/ai-digest-2026-05-19-Tue.md) | [Bilingual](./ai-digest-2026-05-19-Tue.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

1. Today's strongest signal is that AI is shifting career advice from "learn to code" to "learn to wield technical systems inside real domains." Aaron Levie argued that software skills are not disappearing; they are moving into every industry that needs agentic systems implemented well.
今天最强的信号是，AI 正在把职业建议从“学会写代码”改写成“学会在真实行业里驾驭技术系统”。Aaron Levie 认为，软件能力不是消失了，而是会进入每个需要落地 agentic systems 的行业。

2. The builder craft conversation kept returning to fundamentals. Peter Yang warned against generic eval theater and pushed teams toward real traces, customer feedback, and harder evaluation as models improve, while Levie argued that experts with AI will keep outrunning novices with prompts.
关于 builder 基本功的讨论仍在升温。Peter Yang 反对泛泛的 eval theater，强调团队要基于真实 traces、用户反馈和更难的 eval 来建立产品判断；Levie 则提醒，真正懂行的专家用 AI 会持续跑赢只会写 prompt 的新手。

3. Personal AI systems are becoming practical operating environments, not just chat surfaces. Noah Breyer's Claude Code plus Obsidian setup treats notes, research, daily progress, and mobile access as one working memory, and Garry Tan pointed to ZeroEntropy for querying a 120k-file markdown brain.
Personal AI systems 正在变成实际的工作环境，而不只是聊天界面。Noah Breyer 的 Claude Code 加 Obsidian 工作流，把笔记、研究、每日进展和手机访问整合成一个 working memory；Garry Tan 也提到用 ZeroEntropy 查询 12 万个 markdown 文件组成的个人大脑。

4. Several posts were really about leverage versus optimization. Garry Tan pushed back on cost-cutting as the default AI strategy, saying the ceiling has risen for small AI-human teams; Aditya Agarwal countered doom narratives by pairing AI-heavy coding with ordinary human sources of meaning.
多条动态都在讨论“扩大上限”而不是“压低成本”。Garry Tan 反对把 AI 策略默认理解成降本，认为小型 AI-human teams 的天花板已经被抬高；Aditya Agarwal 则用“周五大量用 AI 写代码，周六看球和孩子跳舞”回应对意义感消失的担忧。

5. The distribution problem still looks harder than the building problem. Zara Zhang put it cleanly: people overestimate how hard it is to build and underestimate how hard it is to win attention after shipping.
分发问题看起来仍然比构建问题更难。Zara Zhang 说得很直接：人们总是高估做出东西的难度，却低估做完之后赢得注意力的难度。

## X / Twitter

### Swyx

Swyx had light updates in today's feed. His most substantive note was that an "agentic Excel" experience is what happens when the AI side panel expands into the main workspace, a compact way to describe where productivity software is heading. The rest of the feed was mostly event and Singapore chatter.

Source: https://x.com/swyx/status/2056201387172843800
Source: https://x.com/swyx/status/2056190797096403162
Source: https://x.com/swyx/status/2056184774256112084

Swyx 今天的更新比较轻量。最有信息量的一条是，他把“agentic Excel”描述成 AI 侧边栏扩展成主工作区之后自然会出现的形态，这很简洁地概括了生产力软件的演进方向。其余内容主要是活动和新加坡相关动态。

来源: https://x.com/swyx/status/2056201387172843800
来源: https://x.com/swyx/status/2056190797096403162
来源: https://x.com/swyx/status/2056184774256112084

### Peter Yang

Roblox product leader Peter Yang pointed at a big Google week, but his more useful builder note was about evals. Teams should build evals from real traces and user feedback, read actual customer conversations to build product sense, and use Claude to synthesize feedback into top themes. His warning was sharp: generic academic benchmarks turn into "eval theater" as models get smarter, because evals have to keep getting harder to keep producing signal.

Source: https://x.com/petergyang/status/2056210471917912140
Source: https://x.com/petergyang/status/2056178065836007853
Source: https://x.com/petergyang/status/2056178053848703019

Roblox 产品负责人 Peter Yang 提到 Google 这一周会有不少动作，但更值得 builder 关注的是他对 eval 的提醒。团队应该从真实 traces 和用户反馈里构建 eval，阅读真实客户对话来培养产品判断，并用 Claude 把反馈综合成主要主题。他的警告很直接：随着模型变聪明，泛泛的学术 benchmark 会变成 “eval theater”，eval 必须变得更难，才会继续提供信号。

来源: https://x.com/petergyang/status/2056210471917912140
来源: https://x.com/petergyang/status/2056178065836007853
来源: https://x.com/petergyang/status/2056178053848703019

### Thariq

Anthropic's Thariq captured the new laptop reality for coding-agent users: bringing both a work machine and a personal machine is no longer overpacking, it is "dual wielding." It is a joke, but it also describes the current split-brain developer setup where agents, credentials, and workspaces often live across multiple machines.

Source: https://x.com/trq212/status/2056145415867937182

Anthropic 的 Thariq 用一句玩笑概括了 coding-agent 用户的新现实：同时带工作电脑和个人电脑已经不是行李过多，而是 “dual wielding”。这是个梗，但也描述了当下开发者的分裂工作流：agents、凭证和工作区经常分布在多台机器上。

来源: https://x.com/trq212/status/2056145415867937182

### Amjad Masad

Replit CEO Amjad Masad highlighted what SMBs are building, pointing to the practical side of the AI app-builder wave. The useful signal is not a grand platform claim; it is that small businesses are becoming a visible source of software demand and experimentation.

Source: https://x.com/amasad/status/2056083305468944820

Replit CEO Amjad Masad 转发了 SMBs 正在构建什么，指向 AI app-builder 浪潮中更实际的一面。这里的信号不是宏大的平台叙事，而是小企业正在成为软件需求和实验的重要来源。

来源: https://x.com/amasad/status/2056083305468944820

### Guillermo Rauch

Vercel CEO Guillermo Rauch posted a visual nod to an ideal developer setup. There was not much text to summarize, but it fits the week’s theme: builders are still converging on cleaner, more ambient command centers for coding, deploying, and monitoring.

Source: https://x.com/rauchg/status/2056201218540904667

Vercel CEO Guillermo Rauch 发了一条关于理想开发者设置的视觉动态。文字信息不多，但它符合本周主题：builders 仍在朝更干净、更环境化的 coding、deployment 和 monitoring 指挥中心收敛。

来源: https://x.com/rauchg/status/2056201218540904667

### Aaron Levie

Box CEO Aaron Levie argued that AI is creating a temporary mismatch between the jobs students expected and the technical jobs companies now need. If coding becomes abundant, every industry still needs technical talent to implement agentic systems, which means the engineering career surface expands beyond traditional customer-facing software teams. He says CEOs and CIOs across industries are asking for more technical talent, not less.

Levie also warned students and colleges not to abandon fundamentals. AI can make people think depth is optional, but the expert who can steer agents, evaluate outputs, fix mistakes, and integrate work into real workflows will be far more capable than the novice who only vibe codes. His bottom line: do not give up on going deep in your craft.

Source: https://x.com/levie/status/2056219645796090197
Source: https://x.com/levie/status/2056051851439857933

Box CEO Aaron Levie 认为，AI 正在制造一种临时错配：学生过去追求的工作，和公司现在真正需要的技术岗位，正在发生偏移。如果 coding 变得充足，每个行业仍然需要技术人才来落地 agentic systems，这意味着工程职业的范围会扩展到传统用户软件团队之外。他说，跨行业的 CEOs 和 CIOs 都在要更多技术人才，而不是更少。

Levie 也提醒学生和学校不要放弃基本功。AI 会让人误以为深度不再重要，但能驾驭 agents、评估输出、修正错误并把成果整合进真实 workflow 的专家，会远比只会 vibe coding 的新手强。他的结论是：不要放弃深入打磨自己的 craft。

来源: https://x.com/levie/status/2056219645796090197
来源: https://x.com/levie/status/2056051851439857933

### Garry Tan

Y Combinator CEO Garry Tan pushed back on the idea that AI is mainly a cost-reduction story. Reacting to a finance-world example, he argued that the ceiling has been raised: a small, intense AI-human-computer-symbiosis team could outperform incumbents that are too focused on lowering costs. His line was blunt: boil the ocean, do not cut your costs.

Tan also pointed to ZeroEntropy as his current top choice for personal AI scenarios against a 120k-file markdown brain. That pairs with the broader shift toward personal knowledge systems that agents can query and act on.

Source: https://x.com/garrytan/status/2056123737544757733
Source: https://x.com/garrytan/status/2056122513743327634
Source: https://x.com/garrytan/status/2056122508550738223

Y Combinator CEO Garry Tan 反对把 AI 主要理解成降本工具。回应一个金融圈案例时，他认为上限已经被抬高：一支小而强的 AI-human-computer-symbiosis 团队，可能超过那些过度关注降本的 incumbents。他的表达很直接：boil the ocean，不要只想着 cut costs。

Tan 还提到，在面对一个由 12 万个 markdown 文件组成的个人大脑时，ZeroEntropy 是他目前最认可的 personal AI 选择。这也呼应了 agents 可以查询和行动的个人知识系统趋势。

来源: https://x.com/garrytan/status/2056123737544757733
来源: https://x.com/garrytan/status/2056122513743327634
来源: https://x.com/garrytan/status/2056122508550738223

### Matt Turck

FirstMark's Matt Turck posted a wry venture note about a multi-billion-dollar fund celebrating a $1B exit. It is more inside-baseball than AI-specific, but it is a reminder that fund size, exit size, and actual return impact are very different things.

Source: https://x.com/mattturck/status/2056129724565373406

FirstMark 的 Matt Turck 发了一条带调侃意味的 VC 动态：一个管理数十亿美元的基金庆祝 10 亿美元退出。它不是 AI 专题，但提醒人们，基金规模、退出规模和真实回报影响是三件不同的事。

来源: https://x.com/mattturck/status/2056129724565373406

### Zara Zhang

Zara Zhang framed a builder truth that is easy to forget during the agent boom: people overestimate how hard it is to build something and underestimate how hard it is to win attention once it exists. AI lowers the making cost, but it does not solve distribution, taste, positioning, or trust.

Source: https://x.com/zarazhangrui/status/2056132881630826952

Zara Zhang 总结了 agent 热潮里很容易被忽略的 builder 真相：人们总是高估做出东西的难度，却低估做出来之后赢得注意力的难度。AI 降低了制作成本，但并不会自动解决分发、品味、定位和信任问题。

来源: https://x.com/zarazhangrui/status/2056132881630826952

### Nikunj Kothari

FPV Ventures partner Nikunj Kothari warned employees joining recently minted unicorns to understand tranched valuations before treating headline compensation as real value. In some deals, common stock strike prices can be far higher than the preferred price, 409A values can be painful, and equity packages can look inflated on paper. His practical advice is to use Claude or ChatGPT to model exit math and diligence the company like an investor would.

His other AI-adjacent post was a Claude Code command joke: use dangerous permissions, set a goal to improve performance, and add a bit of aura. The substantive post, though, was the equity warning.

Source: https://x.com/nikunj/status/2056125669466333672
Source: https://x.com/nikunj/status/2056039276308308217
Source: https://x.com/nikunj/status/2056014576215601431

FPV Ventures partner Nikunj Kothari 提醒加入近期独角兽公司的员工，要先看懂 tranched valuations，再把 headline compensation 当成真实价值。在一些交易结构里，普通股行权价可能远高于 preferred price，409A 可能很痛，股权包在纸面上也可能被明显放大。他的实用建议是，用 Claude 或 ChatGPT 做 exit math，并像投资人一样尽调自己要加入的公司。

他另一条 AI 相关动态是 Claude Code 命令梗：跳过权限、设定目标改善性能，再加一点 aura。不过真正有实质信息的是那条股权提醒。

来源: https://x.com/nikunj/status/2056125669466333672
来源: https://x.com/nikunj/status/2056039276308308217
来源: https://x.com/nikunj/status/2056014576215601431

### Aditya Agarwal

South Park Commons general partner Aditya Agarwal offered a simple counterpoint to anxiety about AI replacing meaning. On Friday he used AI to write a lot of code; on Saturday he watched humans play sports and watched his kid dance. His conclusion: he is not worried that humans will lose meaning and purpose.

Source: https://x.com/adityaag/status/2056015684145127612

South Park Commons general partner Aditya Agarwal 对“AI 会夺走意义感”的焦虑给了一个简单反例。周五他用 AI 写了很多代码；周六他看人类踢球，也看孩子跳舞。他的结论是：他并不担心人类会失去意义和目标。

来源: https://x.com/adityaag/status/2056015684145127612

### Sam Altman

OpenAI CEO Sam Altman said ChatGPT Images 2.0 has already seen more than 1 billion images created in India. The number is the signal: image generation is not just a novelty feature in one market, it is operating at consumer-internet scale.

Source: https://x.com/sama/status/2056165722804654196

OpenAI CEO Sam Altman 表示，ChatGPT Images 2.0 在印度已经生成超过 10 亿张图片。这个数字本身就是信号：图像生成不只是某个市场里的新奇功能，而是在以 consumer internet 的规模运行。

来源: https://x.com/sama/status/2056165722804654196

## Podcast

### AI & I by Every: Claude Code Can Be Your Second Brain

The takeaway: Noah Breyer is using Claude Code less like a coding assistant and more like a thinking operating system on top of Obsidian.

Breyer, co-founder of Percolate and Variance and now an AI strategy consultant at Alethic, runs Claude Code directly over a markdown-based Obsidian vault. That matters because the system can read, search, rewrite, and organize the same files he uses for notes, research, talks, and daily progress. His setup is intentionally not always in writing mode. He tells Claude Code when he is still thinking, so it asks sharper questions, captures fragments, and helps him reason before trying to produce a polished artifact.

The most interesting pattern is the daily learning loop. For a talk he is developing, Breyer keeps research, clipped chats, reference material, conclusion notes, and progress logs inside one project folder. At the end of each day, Claude Code reviews what changed and writes up what he learned that might move the talk forward. He has also extended the same workflow to a home server so he can use Claude Code from his phone, turning spare moments into real research and writing time.

The broader lesson is not "use AI for notes." It is that agentic tools become more powerful when they sit directly on durable personal context, with explicit modes for thinking, researching, writing, and shipping. Breyer's memorable framing is that the phone used to be bad for deep work, but AI has changed his ability to think and work productively from anywhere.

Source: https://www.youtube.com/watch?v=in7i-EVDDlk

核心结论：Noah Breyer 使用 Claude Code 的方式，不太像 coding assistant，更像是架在 Obsidian 之上的 thinking operating system。

Breyer 曾共同创办 Percolate 和 Variance，现在在 Alethic 做 AI strategy consulting。他把 Claude Code 直接跑在 markdown 形式的 Obsidian vault 上。关键在于，这个系统能读取、搜索、改写和整理他实际用于笔记、研究、演讲和每日进展的同一批文件。他的设置并不总是处在写作模式。他会明确告诉 Claude Code 自己还在 thinking mode，让它先提出更尖锐的问题、记录碎片、辅助推理，而不是急着产出成稿。

最有意思的模式是每日学习循环。为了准备一场演讲，Breyer 把研究、剪藏的 chats、参考资料、结论笔记和 progress logs 都放在同一个项目文件夹里。每天结束时，Claude Code 会回顾当天变化，并写下哪些新理解能推进这场演讲。他还把同一套 workflow 扩展到家里的服务器上，这样就能从手机使用 Claude Code，把碎片时间变成真正的研究和写作时间。

更大的启发不是“用 AI 做笔记”，而是 agentic tools 直接坐在持久个人上下文之上时会更强，尤其是当你明确区分 thinking、researching、writing 和 shipping 等模式时。Breyer 最值得记住的判断是，手机过去并不适合 deep work，但 AI 改变了他从任何地方思考和工作的能力。

来源: https://www.youtube.com/watch?v=in7i-EVDDlk

## Blog

No blog posts in today's feed.

今天的 feed 中没有 blog posts。



Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
