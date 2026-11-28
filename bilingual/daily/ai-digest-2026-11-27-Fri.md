[English](../../en/daily/ai-digest-2026-11-27-Fri.md) | [中文](../../zh/daily/ai-digest-2026-11-27-Fri.md) | [Bilingual](./ai-digest-2026-11-27-Fri.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

The loudest assumption in AI right now is that the race is inevitable. Ryo Lu, a designer who worked on Cursor, Notion and Stripe and has built startups, argues the opposite: a race is made of decisions, with someone approving each budget and each next model, and calling it inevitable is how people stop having to answer for those choices. He describes how the work has flipped from driving every detail to describing an outcome and watching it come back finished, and warns that recursive self-improvement could take us to a point where nobody is driving. His counterweight is deliberately unproductive time, drawing on Zhuangzi and his move to Taipei to argue that unplanned, "useless" experiences are worth protecting and that a master slows down at the hardest knot ([tweet](https://x.com/ryolu_/status/2126382660780167304)).

当下 AI 领域最响亮的假设，是这场竞赛不可避免。设计过 Cursor、Notion 和 Stripe、也创办过公司的 Ryo Lu 给出了相反的看法：竞赛是由一个个决定组成的，有人批准预算，有人决定用下一代模型去构建再下一代模型；把它称为不可避免，正是让人们不再为这些选择负责的方式。他描述了工作方式如何翻转，从亲自把控每个细节，变成描述一个结果、看着它完成返回；他还警告，recursive self-improvement 可能把行业带到一个没有人真正理解正在发生什么的地步。他的对冲方式是刻意保留不产生效率的时间：他引用庄子，并搬到台北放慢生活，认为那些没有计划、看似“无用”的经历值得保护，真正的高手会在最难的绳结前慢下来（[推文](https://x.com/ryolu_/status/2126382660780167304)）。

The enterprise side of AI has a diffusion problem that looks like success. Box CEO Aaron Levie said most people, and even large organizations, get stuck with the use cases that first wowed them and have little incentive to move on to full agents or agent swarms that can handle ambiguous work in the background. The blocker is not just model quality but the unglamorous architecture around it: system work, data pipelines, MCPs, security, and then redesigning the actual workflow. That gap explains both the upside for organizations that figure it out early and the boom in services and forward-deployed engineering for everyone else ([tweet](https://x.com/levie/status/2126389098227376238)).

企业侧的 AI 有一个看起来像成功的扩散问题。Box CEO Aaron Levie 表示，大多数人、甚至大型组织，都会停留在最初让他们惊艳的用例上，缺乏动力去推进能处理复杂模糊任务的完整 agent 或 agent swarm。真正的阻碍不只是模型能力，还有围绕模型的不起眼工程：系统集成、数据管道、MCP、安全，以及更难的流程重构。这个缺口既解释了为什么早早想清楚的组织有巨大机会，也解释了为什么服务和 forward-deployed engineering 市场正在爆发（[推文](https://x.com/levie/status/2126389098227376238)）。

Revenue quality is becoming a bigger story than revenue growth. Nikunj Kothari, a partner at fpvventures, called out startups that "resell" compute and count it as revenue even when compute is not their primary business, folding low-margin or negative-margin activity into a tidy ARR number. He traces the pattern from GMV-like revenue to inference at negative gross margins to straight compute resale, and argues that naive investors accept it because it lets deals clear investment committees while seed investors celebrate markups. His conclusion: "zero shot this ends well" ([tweet](https://x.com/nikunj/status/2126326428522442812)).

收入质量正在变得比收入增长更重要。fpvventures 合伙人 Nikunj Kothari 点名了一种他所说的硅谷无人愿谈的现象：一些创业公司把转售 compute 的收入算作自己的 revenue，即使 compute 并不是它们的主营业务，把低毛利甚至负毛利的活动塞进一个漂亮的 ARR 数字。他把这条路径从类似 GMV 的低毛利收入，追溯到负毛利的 inference，再到直接转售 compute，并认为天真的投资人会接受它，因为这能让交易通过投委会，而种子投资人也能庆祝 markup。他的结论很直接：“zero shot this ends well”（[推文](https://x.com/nikunj/status/2126326428522442812)）。

Agents are being sold as an economic accelerant, but the interesting question is how they will be measured and compared. Matt Turck, a VC at FirstMark Capital and host of the MAD Podcast, argued that agents expand what one person can finish in a day: his Thanksgiving example added emailing electricians and Black Friday shopping to the usual food coma and Netflix, and he said the effect multiplied across millions of people is gigantic ([tweet](https://x.com/mattturck/status/2126477464947892367)). On the model side, Thariq, who works at OpenAI and formerly worked on Claude Code at Anthropic, said models should be scored more like an RPG stat sheet than a leaderboard, then compared Claude and Codex on the same image-generation prompt: Claude showed more creativity and endurance, while Codex followed the spirit of the request better, which he framed as wisdom and alignment ([tweet](https://x.com/trq212/status/2126386932989210714)) ([tweet](https://x.com/trq212/status/2126386934918651919)) ([tweet](https://x.com/trq212/status/2126386936579600522)).

Agent 被当作经济增长的加速器来推销，但更有意思的问题是它们将如何被衡量和比较。FirstMark Capital 的 VC、MAD Podcast 主持人 Matt Turck 认为，agent 会扩大一个人在一天内能完成的事情：他的感恩节例子是，没有 agent 时是吃撑、看 Netflix、做一点工作然后疲惫不堪；有 agent 时，还能顺便给电工发邮件处理拖了很久的家装项目，并完成 Black Friday 购物。他说，把这种变化乘以数百万人，经济影响将是巨大的（[推文](https://x.com/mattturck/status/2126477464947892367)）。在模型侧，在 OpenAI 工作、此前在 Anthropic 做 Claude Code 的 Thariq 认为，模型更应该像 RPG 属性面板那样被打分，而不是只排一个 leaderboard。他用同一个图像生成 prompt 比较 Claude 和 Codex：Claude 的结果更好看，也展现了更多创造力和耐力；Codex 则更贴近他想要的精神，他称之为更多智慧和 alignment（[推文](https://x.com/trq212/status/2126386932989210714)）（[推文](https://x.com/trq212/status/2126386934918651919)）（[推文](https://x.com/trq212/status/2126386936579600522)）。

The exponential curves that make AI progress feel unstoppable are useful in one place and misleading in another. Every CEO Dan Shipper wrote that they are an effective way to measure capabilities inside a lab, but nonsense when used to predict the future of human work. The graphs can inspire awe, fear and foreboding, yet the shape of a benchmark curve does not map cleanly onto how jobs, teams and organizations actually change ([tweet](https://x.com/danshipper/status/2126397711033438535)).

让 AI 进展看起来势不可挡的指数曲线，在一个地方有用，在另一个地方会误导人。Every CEO Dan Shipper 写道，这些曲线是衡量实验室内部能力的有效方式，但用来预测人类工作的未来就是 nonsense。图表可以带来敬畏、恐惧和不祥的预感，但 benchmark 曲线的形状，并不能直接映射到岗位、团队和组织实际发生的变化（[推文](https://x.com/danshipper/status/2126397711033438535)）。

The market for AI training data has quietly become a high-end services business. Gabe Greenberg, CEO of G2I, says his company went from about $15 million in revenue last year to roughly $100 million this year, profitable and without VC backing, selling human data and computer-use environments to five or six frontier labs. The work has shifted from thousands of mid-level engineers doing gig-like labeling to smaller teams of staff-level engineers building complex datasets with taste, and the labs now pay for quality, gap analysis and partnership rather than a 20 percent discount. Greenberg's advice for task design is a useful calibration rule for anyone building evals: tasks should be just beyond what the model can do today, because too hard turns them into evals and too easy makes them worthless ([episode](https://www.youtube.com/@LatentSpacePod)).

AI 训练数据市场已经悄悄变成一门高端服务生意。G2I CEO Gabe Greenberg 说，公司收入从去年的约 1500 万美元增长到今年的约 1 亿美元，盈利且没有 VC 支持，客户是五六家前沿实验室。工作形态也从成千上万名中级工程师做类似零工的标注，变成更小的 staff-level 工程师团队构建有品味的复杂数据集；实验室现在买的是质量、gap analysis 和合作关系，而不是 20% 的折扣。Greenberg 对任务设计的建议，对任何构建 eval 的人都是一条有用的校准规则：任务应该刚好超出模型今天能做的范围，因为太难就变成了 eval，太容易就毫无价值（[播客](https://www.youtube.com/@LatentSpacePod)）。

## X / Twitter

### Thariq

Thariq, who works at OpenAI and formerly worked on Claude Code at Anthropic, argued that models should be scored more like an RPG stat sheet than a leaderboard, and that the comparison is also a call for evals. He put Claude and Codex to the same image-generation prompt: Claude's result looked better and showed more creativity and endurance, while Codex stuck closer to the spirit of what he wanted, which he described as more wisdom and alignment. His point is that a single rank compresses away the traits that matter for a specific job ([tweet](https://x.com/trq212/status/2126386932989210714)) ([tweet](https://x.com/trq212/status/2126386934918651919)) ([tweet](https://x.com/trq212/status/2126386936579600522)).

在 OpenAI 工作、此前在 Anthropic 做 Claude Code 的 Thariq 认为，模型更应该像 RPG 属性面板那样被打分，而不是只排一个 leaderboard；他同时表示，这也是一次对 evals 的呼吁。他用同一个图像生成 prompt 测试 Claude 和 Codex：Claude 的结果更好看，展现了更多创造力和耐力；Codex 则更贴近他想要的精神，他把这描述为更多智慧和 alignment。他的观点是，单一排名会抹掉对具体任务真正重要的差异（[推文](https://x.com/trq212/status/2126386932989210714)）（[推文](https://x.com/trq212/status/2126386934918651919)）（[推文](https://x.com/trq212/status/2126386936579600522)）。

### Aaron Levie

Box CEO Aaron Levie said the diffusion of AI is both a challenge and an opportunity. Most people will probably get stuck with the use cases that initially wowed them, and even large organizations can settle for early AI gains before deploying full agents or agent swarms that handle complex, ambiguous work. He attributed much of the gap to technical complexity: system work, data pipelines, MCPs and security, followed by the harder task of redesigning workflows. That is why he sees a large opportunity for organizations that figure it out early, and a massive services and forward-deployed-engineering opportunity for those that cannot ([tweet](https://x.com/levie/status/2126389098227376238)).

Box CEO Aaron Levie 表示，AI 的扩散既是挑战也是机会。大多数人可能会停留在最初让他们惊艳的用例上，甚至大型组织也会在部署完整 agent 或能处理复杂模糊任务的 agent swarm 之前，就满足于早期 AI 带来的收益。他把很大一部分差距归因于技术复杂度：系统集成、数据管道、MCP 和安全，之后还有更难的流程重构。因此，他认为早早想清楚的组织有巨大机会，而对做不到的公司来说，服务和 forward-deployed engineering 是一个巨大的市场（[推文](https://x.com/levie/status/2126389098227376238)）。

### Ryo Lu

Ryo Lu, a designer who worked on Cursor, Notion and Stripe and has built startups, published a long essay arguing that "the race is not inevitable." He described how the work has flipped from driving every detail to describing an outcome and watching it come back finished, and warned that recursive self-improvement could lead to a point where nobody is driving. He framed the race as a series of decisions rather than a force of nature, and said he moved to Taipei to slow down, drawing on Zhuangzi to argue that unplanned, "useless" experiences are worth protecting and that builders should slow down at the hardest knot ([tweet](https://x.com/ryolu_/status/2126382660780167304)).

设计过 Cursor、Notion 和 Stripe、也创办过公司的 Ryo Lu 发表了一篇长文，主张“the race is not inevitable”。他描述了工作方式如何翻转，从亲自把控每个细节，变成描述一个结果、看着它完成返回；他还警告，recursive self-improvement 可能把行业带到一个没有人真正理解正在发生什么的地步。他把竞赛看作一连串决定，而不是自然力量，并说自己搬到台北放慢生活，引用庄子来论证那些没有计划、看似“无用”的经历值得保护，真正的高手会在最难的绳结前慢下来（[推文](https://x.com/ryolu_/status/2126382660780167304)）。

### Matt Turck

Matt Turck, a VC at FirstMark Capital and host of the MAD Podcast, argued that agents will accelerate the economy by expanding what people can get done in the same amount of time. His Thanksgiving example: without agents, a food coma, Netflix, some work and exhaustion; with agents, all of that plus emailing electricians for a long-overdue home project and doing Black Friday shopping. Multiply that by millions of people, he said, and the economic impact is gigantic ([tweet](https://x.com/mattturck/status/2126477464947892367)).

FirstMark Capital 的 VC、MAD Podcast 主持人 Matt Turck 认为，agent 会通过扩大人们在同样时间内能完成的事情来加速经济。他的感恩节例子是：没有 agent 时，是吃撑、看 Netflix、做一点工作然后疲惫不堪；有 agent 时，还能顺便给电工发邮件处理拖了很久的家装项目，并完成 Black Friday 购物。他说，把这种变化乘以数百万人，经济影响将是巨大的（[推文](https://x.com/mattturck/status/2126477464947892367)）。

### Nikunj Kothari

Nikunj Kothari, a partner at fpvventures, called out a pattern he says nobody in Silicon Valley wants to discuss: startups "reselling" compute to other companies and counting it as revenue, even when compute is not their primary business. He traced the progression from GMV-like revenue with low margins to inference at negative gross margins and now straight compute resale, all folded into a tidy ARR number so deals can clear investment committees and seed investors can celebrate markups. His conclusion was blunt: "zero shot this ends well" ([tweet](https://x.com/nikunj/status/2126326428522442812)).

fpvventures 合伙人 Nikunj Kothari 点名了一种他所说的硅谷无人愿谈的现象：一些创业公司把转售 compute 给其他公司并算作 revenue，即使 compute 并不是它们的主营业务。他把这条路径从类似 GMV 的低毛利收入，追溯到负毛利的 inference，再到直接转售 compute，全部塞进一个漂亮的 ARR 数字，好让交易通过投委会，也让种子投资人庆祝 markup。他的结论很直接：“zero shot this ends well”（[推文](https://x.com/nikunj/status/2126326428522442812)）。

### Dan Shipper

Every CEO Dan Shipper wrote that the exponential curves used to show AI progress are an effective way to measure capabilities inside a lab, but nonsense when used to predict the future of human work. He said the graphs can inspire awe, fear and foreboding, and his piece explains why the shape of a benchmark curve does not map cleanly onto how work actually changes ([tweet](https://x.com/danshipper/status/2126397711033438535)).

Every CEO Dan Shipper 写道，用来展示 AI 进展的指数曲线，是衡量实验室内部能力的有效方式，但用来预测人类工作的未来就是 nonsense。他说这些图表可以带来敬畏、恐惧和不祥的预感，而他的文章解释了为什么 benchmark 曲线的形状，并不能直接映射到工作实际发生的变化（[推文](https://x.com/danshipper/status/2126397711033438535)）。

## Podcast

### Latent Space: Inside the AI Training Data Market — Gabe Greenberg, G2i

**The Takeaway:** The market for AI training data has moved from cheap gig labeling to a staff-engineer craft, and the frontier labs now pay for taste, context and partnership rather than raw volume.

**核心观点：** AI 训练数据市场已经从廉价的零工标注，变成一门需要 staff-level 工程师的手艺活；前沿实验室现在为品味、上下文和合作关系付费，而不是为原始数据量付费。

Gabe Greenberg is CEO of G2I, which supplies human data and computer-use environments that frontier labs use to train models; his company also runs the React Miami and AIE Miami conferences. The business has scaled fast: G2I did about $15 million in revenue last year and roughly $100 million this year, according to Greenberg, profitable and without venture backing, with a real chance to triple again. It sells to only five or six customers, which sounds fragile until you see how much those labs need.

G2I CEO Gabe Greenberg 的公司为前沿实验室提供 human data 和 computer-use 环境，也运营 React Miami 和 AIE Miami 大会。这门生意增长得很快：Greenberg 说，G2I 去年收入约 1500 万美元，今年约 1 亿美元，盈利且没有 VC 支持，明年还有机会轻松翻三倍。它只服务五六家客户，听起来很脆弱，但看到这些实验室的需求规模，就不会这么想了。

The work itself has changed shape. In 2023 and 2024, a single project might involve 6,000 mid-level engineers doing something close to gig work. Today the same budgets go to far fewer staff-level engineers building complex datasets with real taste. The hardest part is calibration: "if you make them too hard, they become evals... and if you make them too easy, they're worthless." Tasks have to sit a few steps beyond what the model can do now so they are trainable, and efficiently trainable.

工作本身也变了。2023 和 2024 年，一个项目可能需要 6000 名中级工程师，做的活接近零工。今天，同样的预算会交给少得多的 staff-level 工程师，去构建有品味的复杂数据集。最难的是校准：“if you make them too hard, they become evals... and if you make them too easy, they're worthless.” 任务必须刚好超出模型今天能做的范围，才能既训练有效，又高效。

That is why labs are buying partnerships, not commodity data. Greenberg says quality now beats a 20 percent price saving, and labs want gap analysis and people who understand their research bottlenecks. Data's share of compute budgets is moving from 2 to 3 percent toward 4 to 6 percent, with a case that it could rationally be much higher because better data means less wasted compute.

这就是为什么实验室在买合作关系，而不是商品化数据。Greenberg 说，质量现在比 20% 的价格节省重要得多，实验室想要 gap analysis，也想要真正理解他们研究瓶颈的人。数据在 compute 预算中的占比，正从 2% 到 3% 走向 4% 到 6%，还有理由认为它可以合理高得多，因为更好的数据意味着更少的算力浪费。

His next frontiers are robotics, 3D world models, CAD, mechanical engineering and chip design, plus more computer-use data. The recurring risk is operational: thousands of people in the vendor funnel create security, supply-chain and leakage problems that labs would rather not own. The lesson is that data is no longer a commodity you shovel into a model. It is a service business built on expertise, judgment and trust.

他看好的下一个前沿是机器人、3D world models、CAD、机械工程和芯片设计，以及更多 computer-use 数据。反复出现的风险在运营层：供应商漏斗里有成千上万人，会带来安全、供应链和泄露问题，而实验室并不想自己承担这些麻烦。真正的教训是，数据不再是可以直接铲进模型的商品，而是一门建立在专业能力、判断力和信任之上的服务生意。

Sources / 来源: [Latent Space](https://www.youtube.com/@LatentSpacePod)

## Blog

The validated feed contained no new qualifying blog posts for this run.

本次通过验证的 feed 中没有新的合格博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
