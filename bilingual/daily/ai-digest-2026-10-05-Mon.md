[English](../../en/daily/ai-digest-2026-10-05-Mon.md) | [中文](../../zh/daily/ai-digest-2026-10-05-Mon.md) | [Bilingual](./ai-digest-2026-10-05-Mon.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. OpenAI's Codex/ChatGPT team commits to a 28-day shipping sprint, and reviewers want a simpler ChatGPT.** Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, says that "over the next 28 days, each day we'll either ship one thing that is a clear improvement and relevant for most codex/work users or ship a full reset." Peter Yang, who makes practical AI tutorials and interviews, welcomes OpenAI's renewed focus on simplifying ChatGPT, which he says "has become a mess," and lists what he would cut: Work vs. Codex, Spaces vs. Pages vs. Sites, and the model and effort picker. His hot take is that "the whole Work launch was a mistake," arguing that just as Claude folded Cowork back into Chat, Work does not need its own brand. ([Thibault Sottiaux](https://x.com/thsottiaux/status/2106845241357824205), [Peter Yang](https://x.com/petergyang/status/2106926956554195018))

**1. OpenAI 的 Codex/ChatGPT 团队承诺进行 28 天的改进冲刺，评测者希望 ChatGPT 更简单。** 在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 说：「Over the next 28 days, each day we'll either ship one thing that is a clear improvement and relevant for most codex/work users or ship a full reset.」做实用 AI 教程和访谈的 Peter Yang 对 OpenAI 重新聚焦简化 ChatGPT 表示欢迎，他说 ChatGPT「has become a mess」，并列出了他想砍掉的地方：Work 与 Codex、Spaces 与 Pages 与 Sites、以及模型和思考强度选择器。他的犀利观点是「the whole Work launch was a mistake」：就像 Claude 把 Cowork 收回进 Chat，Work 也不需要单独的品牌。（[Thibault Sottiaux](https://x.com/thsottiaux/status/2106845241357824205)、[Peter Yang](https://x.com/petergyang/status/2106926956554195018)）

**2. AI is minting new technical jobs, and consumer AI's economics look different from the hype.** Box CEO Aaron Levie says we are already starting to see the jobs AI creates: AI engineers who build applied products sold to or within enterprises, forward-deployed engineers who put agents to work inside companies, and new services firms for deploying AI. He argues the published stats undercount how many existing data, research, and software jobs are being repositioned toward agent deployment at "every bank, life sciences company, manufacturer, and even law firm," concluding that "it's a lot easier to picture what AI can replace vs. what it creates until it starts happening." In a separate post he says a widely cited consumer AI metric "may tell us more about the business model of consumer AI than the state of AI," since consumer AI will almost inevitably be subsidized and monetized through commerce, ads, or device and service purchases, and the number "may level off lower than we think." ([Aaron Levie](https://x.com/levie/status/2106893015063421357), [Aaron Levie](https://x.com/levie/status/2106802940879192260))

**2. AI 正在创造新的技术岗位，消费级 AI 的经济模型和炒作并不一样。** Box CEO Aaron Levie 说，AI 创造的工作已经开始显现：为企业内部或对外构建应用型 AI 产品的 AI 工程师、把 agent 部署进公司里的 forward deployed engineer，以及专门做 AI 部署的新服务公司。他认为公开的岗位统计低估了正在被重新定位到 agent 部署上的存量岗位，这种现象出现在「every bank, life sciences company, manufacturer, and even law firm」，并总结说「it's a lot easier to picture what AI can replace vs. what it creates until it starts happening」。在另一条推文里他说，某个被广泛引用的消费级 AI 指标「may tell us more about the business model of consumer AI than the state of AI」，因为消费级 AI 几乎必然依靠商业、广告或设备与服务购买来补贴和变现，这个数字「may level off lower than we think」。（[Aaron Levie](https://x.com/levie/status/2106893015063421357)、[Aaron Levie](https://x.com/levie/status/2106802940879192260)）

**3. The agent era is rewriting engineering trade-offs, from Rust to the harness layer.** Vercel CEO Guillermo Rauch says DHH "is fundamentally right about Rust," recounting Vercel's multi-year Rust-ification and the migration of Turborepo from Go to Rust, where the ROI was "quite controversial internally" because human migration costs were substantial even though Rust was better for the low-level OS access a build system needs. What changed, he writes, is that "the calculus has now changed. What's 'best for humans' is no longer necessarily 'best for business'," as agents rewrite the economics, and he doubts Rust is the final toolchain since it was designed "before the 'supersonic tsunami' of agents hit." He also notes that as models get faster, harness overhead matters more, with the next Vercel release improving session storage and retrieval plus cloud durability in libfx, and offers a rule of thumb for the agent age: READMEs, blogs, and tweets should be hand-written for humans, while internal documentation can be "AI English" for agents. ([Guillermo Rauch](https://x.com/rauchg/status/2106885457212825983), [Guillermo Rauch](https://x.com/rauchg/status/2106863842450133114), [Guillermo Rauch](https://x.com/rauchg/status/2106848085267902815))

**3. agent 时代正在改写工程上的取舍，从 Rust 到 harness。** Vercel CEO Guillermo Rauch 说 DHH「is fundamentally right about Rust」，并讲述了 Vercel 持续多年的 Rust 化，以及把 Turborepo 从 Go 迁移到 Rust 的经历：尽管 Rust 更适合构建系统所需的底层 OS 访问，但人力迁移成本很大，内部对 ROI 的争议也很大。他写道，变化在于「the calculus has now changed. What's 'best for humans' is no longer necessarily 'best for business'」，因为 agent 改写了经济账；他还认为 Rust 不会是一劳永逸的终极工具链，因为它诞生于「before the 'supersonic tsunami' of agents hit」。他还指出，随着模型变快，harness 的开销越来越重要，Vercel 的下一个版本会改进会话存储与检索，并在 libfx 上解锁云端的持久性；他还给 agent 时代留了一条小准则：README、博客和推文应该手写给人类看，而内部文档可以是给 agent 看的「AI English」。（[Guillermo Rauch](https://x.com/rauchg/status/2106885457212825983)、[Guillermo Rauch](https://x.com/rauchg/status/2106863842450133114)、[Guillermo Rauch](https://x.com/rauchg/status/2106848085267902815)）

**4. Refounding incumbents, not just selling them software, is the bet of the AI transition.** On No Priors, Sequence Holdings co-founder and CEO Michael Lee explains why his permanent holding company buys whole businesses and "refounds" them around frontier engineering instead of selling software or services into them. He argues that in many industries the incumbent holds the lasting advantages, such as brand, scale, network effects, or regulation, and that owning one lets you inherit those advantages and rebuild it. Service providers, he says, have an incentives problem because they optimize for "getting in your wallet, staying in your wallet, growing the share of your wallet," which he calls "a path towards incrementalism." Sequence tries to do roughly one deal a year, and at a Georgia bank it built a platform called Atlas, cut average consumer underwriting time by 94%, and reduced the average loan from 30 days to 11 days end to end. ([No Priors](https://www.youtube.com/watch?v=TCpRwJBQvW0))

**4. 重新 refound 存量公司，而不只是卖软件，才是这轮 AI 转型的赌注。** 在 No Priors 里，Sequence Holdings 联合创始人兼 CEO Michael Lee 解释了他的永久控股公司为什么买下整家公司，并围绕前沿工程能力把它们重新「refound」，而不是向它们卖软件或服务。他认为，在很多行业里，存量公司握有更持久的优势，比如品牌、规模、网络效应或监管；买下其中一家，就能继承这些优势并重建它。他说服务商有激励机制问题，因为它们优化的是「getting in your wallet, staying in your wallet, growing the share of your wallet」，他把这称为「a path towards incrementalism」。Sequence 每年大约只做一笔交易；在佐治亚州的一家银行里，它搭建了名为 Atlas 的平台，把平均消费贷审批时间缩短 94%，并把平均贷款的全流程时间从 30 天降到 11 天。（[No Priors](https://www.youtube.com/watch?v=TCpRwJBQvW0)）

**5. The persistent-agent interface is here, and builders are betting it sticks.** Every CEO Dan Shipper says "dot has become my primary interface to AI over the last few weeks," and his own dot is named "boo." He bets that in a year he will still be interacting with ChatGPT as an always-on persistent agent, "but boo will have disappeared," much as people dropped the personality quirks of early OpenClaw agents "as soon as there was something functionally more powerful available." Y Combinator President and CEO Garry Tan reads the same pattern: "When everyone is building the same primitives it does speak to needs that will only intensify from here. And we will eventually converge on the correct OS." Ryo Lu, who has designed Cursor, Notion, and Stripe, shows the form factor moving that way with a full-bleed desktop layout and a side dock, calling it "lil computer in your pocket." ([Dan Shipper](https://x.com/danshipper/status/2106892868564431255), [Garry Tan](https://x.com/garrytan/status/2106901111106097210), [Ryo Lu](https://x.com/ryolu_/status/2106777615801713054))

**5. 常驻式 agent 界面已经到来，builder 们押注它会持续下去。** Every CEO Dan Shipper 说「dot has become my primary interface to AI over the last few weeks」，并把自己的 dot 取名为 boo。他预测一年后自己依然会以常驻式 agent 的方式与 ChatGPT 交互，但「boo will have disappeared」；这很像早期 OpenClaw 时期，人们一旦发现有功能更强的东西，就会抛弃 agent 的个性小癖好。Y Combinator 总裁兼 CEO Garry Tan 看到了同样的模式：「When everyone is building the same primitives it does speak to needs that will only intensify from here. And we will eventually converge on the correct OS.」设计过 Cursor、Notion 和 Stripe 的 Ryo Lu 展示了这个形态的发展方向：满屏桌面加侧边 dock，他称之为「lil computer in your pocket」。（[Dan Shipper](https://x.com/danshipper/status/2106892868564431255)、[Garry Tan](https://x.com/garrytan/status/2106901111106097210)、[Ryo Lu](https://x.com/ryolu_/status/2106777615801713054)）

**6. Builders keep insisting on human judgment, in-person signal, and understanding what models actually are.** FirstMark Capital VC and MAD Podcast host Matt Turck calls out what he considers the most poorly understood aspect of AI outside AI circles: that "models are grown, not built" and "we don't really know how they work," which is why better interpretability matters. FPV Ventures partner Nikunj Kothari argues there is "so much alpha in meeting founders at their own office," where you can read the office's energy, how co-founders answer and complement each other, and what beta product releases look like, and says founders often tell him he is the only investor who has ever asked. Builder Zara Zhang makes a compact prediction about hiring signal: "X profiles are replacing resumes." ([Matt Turck](https://x.com/mattturck/status/2106821381765956044), [Nikunj Kothari](https://x.com/nikunj/status/2106957269212742135), [Zara Zhang](https://x.com/zarazhangrui/status/2106782239493427588))

**6. builder 们始终坚持人的判断、线下信号，以及搞清楚模型到底是什么。** FirstMark Capital 的投资人、MAD Podcast 主持人 Matt Turck 点出他认为 AI 圈子之外最被误解的一点：「models are grown, not built」，而且「we don't really know how they work」，所以他强调更好的可解释性研究非常紧迫。FPV Ventures 合伙人 Nikunj Kothari 认为「there's so much alpha in meeting founders at their own office」，在办公室里能感受到团队的能量、同事之间如何互动协作、联合创始人如何互相回答和补位，以及 beta 产品发布的样子；他说创始人常告诉他，自己是唯一提出要去办公室见面的投资人。builder Zara Zhang 则给出一个关于招聘信号的简短判断：「X profiles are replacing resumes.」（[Matt Turck](https://x.com/mattturck/status/2106821381765956044)、[Nikunj Kothari](https://x.com/nikunj/status/2106957269212742135)、[Zara Zhang](https://x.com/zarazhangrui/status/2106782239493427588)）

## X / Twitter

### Thibault Sottiaux

Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, set an aggressive shipping cadence: "Over the next 28 days, each day we'll either ship one thing that is a clear improvement and relevant for most codex/work users or ship a full reset. Let the improvements begin."

在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 定下了一个激进的发布节奏：「Over the next 28 days, each day we'll either ship one thing that is a clear improvement and relevant for most codex/work users or ship a full reset. Let the improvements begin.」

- [Thibault Sottiaux: a 28-day codex/work shipping sprint](https://x.com/thsottiaux/status/2106845241357824205)

### Peter Yang

Peter Yang, who makes practical AI tutorials and interviews, is glad OpenAI is focusing on simplifying ChatGPT, which he says "has become a mess." He lists what he would simplify: Work vs. Codex, Spaces vs. Pages vs. Sites, and the model and effort picker. His hot take is that "the whole Work launch was a mistake," arguing that just as Claude folded Cowork back into Chat, Work does not need its own brand. In other posts he relays an answer from Sam, co-founder of Granola, on users skipping the Granola UI and going straight through the MCP: Sam said there was "definitely a pang of sadness to that as a UI designer," and that the team fought it before accepting that for many enterprise workflows "the best way to use Granola is to capture the context, then use it through your internal agent." Yang also quotes Sam's advice that builders should hold themselves accountable not just to shipping version one, but to asking "Does the person actually get daily value out of it?"

做实用 AI 教程和访谈的 Peter Yang 很高兴 OpenAI 开始聚焦简化 ChatGPT，他说 ChatGPT「has become a mess」。他列出了自己想简化的地方：Work 与 Codex、Spaces 与 Pages 与 Sites、以及模型和思考强度选择器。他的犀利观点是「the whole Work launch was a mistake」：就像 Claude 把 Cowork 收回进 Chat，Work 也不需要单独的品牌。在另外几条推文里，他转述了 Granola 联合创始人 Sam 关于用户跳过 Granola 的 UI、直接用 MCP 完成任务的回答：Sam 说作为 UI 设计师「there's definitely a pang of sadness to that」，团队也曾抵抗过，但后来接受了，对很多企业工作流来说「the best way to use Granola is to capture the context, then use it through your internal agent」。Yang 还引用了 Sam 的建议：builder 要对自己负责的不只是把第一个版本发出去，而是回答「Does the person actually get daily value out of it?」

- [Peter Yang: simplifying ChatGPT](https://x.com/petergyang/status/2106926956554195018)
- [Peter Yang: Granola's Sam on MCP-first workflows](https://x.com/petergyang/status/2106897211766530299)
- [Peter Yang: ship for daily value](https://x.com/petergyang/status/2106825485624004691)

### Guillermo Rauch

Guillermo Rauch, CEO of Vercel, says a tool that was hard to imagine getting even faster is now "much faster," and argues that "as models speed up (as with Astra ultrafast), harness overhead matters more and more." He says the next release will bring better performance for session storage and retrieval and "a big unlock for cloud durability in libfx." On engineering strategy, he says DHH "is fundamentally right about Rust," recounting that Vercel migrated Turborepo from Go to Rust even though the ROI was "quite controversial internally" because human migration costs were substantial, with Rust better for the low-level OS access a build system needs. The calculus changed, he writes, because "What's 'best for humans' is no longer necessarily 'best for business'," and he doubts Rust is the final toolchain since it was designed "before the 'supersonic tsunami' of agents hit." On a new project, he says the README is written by hand "because it's for human consumption," while the internal documentation is "AI English, because they're for agents."

Vercel CEO Guillermo Rauch 说，一个原本很难想象还能更快的东西现在「much faster」，并认为「as models speed up (as with Astra ultrafast), harness overhead matters more and more」。他说下一个版本会带来更好的会话存储与检索性能，以及「a big unlock for cloud durability in libfx」。在工程策略上，他说 DHH「is fundamentally right about Rust」，并回顾 Vercel 把 Turborepo 从 Go 迁移到 Rust 的过程：尽管 Rust 更适合构建系统所需的底层 OS 访问，但人力迁移成本很大，内部对 ROI 的争议也很大。他写道，现在情况变了，因为「What's 'best for humans' is no longer necessarily 'best for business'」；他还认为 Rust 不会是一劳永逸的终极工具链，因为它诞生于「before the 'supersonic tsunami' of agents hit」。在一个新项目上，他说 README 是手写的「because it's for human consumption」，而内部文档是「AI English, because they're for agents」。

- [Guillermo Rauch: faster harness, less overhead](https://x.com/rauchg/status/2106885457212825983)
- [Guillermo Rauch: Rust, Turborepo, and the agent calculus](https://x.com/rauchg/status/2106863842450133114)
- [Guillermo Rauch: human READMEs, agent docs](https://x.com/rauchg/status/2106848085267902815)

### Aaron Levie

Aaron Levie, CEO of Box, argues we are "already starting to see what kind of new jobs AI is creating." Because deploying AI takes significant technical work and surrounding services, he points to AI engineers building applied products for enterprises, forward-deployed engineers deploying agents inside companies, and new services firms. He adds that published job stats undercount the existing data, research, and software roles being repositioned toward AI work at "every bank, life sciences company, manufacturer, and even law firm," and concludes that "it's a lot easier to picture what AI can replace vs. what it creates until it starts happening." In a separate post he says a consumer AI metric "may tell us more about the business model of consumer AI than the state of AI," predicting consumer AI will be subsidized and monetized via commerce, ads, or device and service purchases, and that the number "may level off lower than we think."

Box CEO Aaron Levie 认为，我们已经开始看到「what kind of new jobs AI is creating」。因为部署 AI 需要大量技术工作和配套服务，他点出了几类新岗位：为企业构建应用型 AI 产品的 AI 工程师、把 agent 部署进公司内部的 forward deployed engineer，以及新的 AI 部署服务公司。他还说，公开的岗位统计低估了那些正在被重新定位到 AI 工作上的存量数据、研究和软件岗位，这种情况出现在「every bank, life sciences company, manufacturer, and even law firm」，并总结说「it's a lot easier to picture what AI can replace vs. what it creates until it starts happening」。在另一条推文里他说，一个消费级 AI 指标「may tell us more about the business model of consumer AI than the state of AI」，他预测消费级 AI 会通过商业、广告或设备与服务购买来补贴和变现，因此这个数字「may level off lower than we think」。

- [Aaron Levie: the new jobs AI creates](https://x.com/levie/status/2106893015063421357)
- [Aaron Levie: consumer AI's business model](https://x.com/levie/status/2106802940879192260)

### Ryo Lu

Ryo Lu, who has designed Cursor, Notion, and Stripe, shared UI work in progress: a full-bleed desktop layout with a side dock, describing the direction as "lil computer in your pocket."

设计过 Cursor、Notion 和 Stripe 的 Ryo Lu 分享了一个进行中的 UI 作品：满屏桌面布局加侧边 dock，他形容这个方向是「lil computer in your pocket」。

- [Ryo Lu: full-bleed desktop and side dock](https://x.com/ryolu_/status/2106777615801713054)

### Garry Tan

Garry Tan, President and CEO of Y Combinator, observes that "when everyone is building the same primitives it does speak to needs that will only intensify from here," and predicts that "we will eventually converge on the correct OS."

Y Combinator 总裁兼 CEO Garry Tan 观察到，「when everyone is building the same primitives it does speak to needs that will only intensify from here」，并预测「we will eventually converge on the correct OS」。

- [Garry Tan: converging on the correct OS](https://x.com/garrytan/status/2106901111106097210)

### Matt Turck

Matt Turck, a VC at FirstMark Capital and host of the MAD Podcast, flags what he considers the most poorly understood aspect of AI outside AI circles: that "models are grown, not built" and "we don't really know how they work," which is why better interpretability is urgent. He credits Eric Ho of Goodfire AI on the point.

FirstMark Capital 的投资人、MAD Podcast 主持人 Matt Turck 点出他认为 AI 圈子之外最被误解的一点：「models are grown, not built」，而且「we don't really know how they work」，所以更好的可解释性研究非常紧迫。他在这一点上提到了 Goodfire AI 的 Eric Ho。

- [Matt Turck: models are grown, not built](https://x.com/mattturck/status/2106821381765956044)

### Zara Zhang

Builder Zara Zhang offers two short observations: that the new Opus model "just silently goes off to make something for 20+ minutes and comes back with a complete masterpiece," and that "X profiles are replacing resumes."

builder Zara Zhang 给出两条简短观察：新的 Opus 模型「just silently goes off to make something for 20+ minutes and comes back with a complete masterpiece」，以及「X profiles are replacing resumes」。

- [Zara Zhang: Opus 5.5 goes off and comes back](https://x.com/zarazhangrui/status/2106876921082712250)
- [Zara Zhang: X profiles are replacing resumes](https://x.com/zarazhangrui/status/2106782239493427588)

### Nikunj Kothari

Nikunj Kothari, a partner at FPV Ventures, writes that he "just can't believe how people make investments over a Zoom call," and that there is "so much alpha in meeting founders at their own office." In person, he says, you can read the office's energy, how coworkers react and work together, how co-founders answer and complement each other, and what beta product releases look like. Even under time pressure he asks to meet at offices for final meetings, and says founders often tell him he is the only one who has ever asked: "What's the point of calling them into your own conference room and parrot the same deck?"

FPV Ventures 合伙人 Nikunj Kothari 写道，他「just can't believe how people make investments over a Zoom call」，而「there's so much alpha in meeting founders at their own office」。他说，当面能感受到办公室的能量、同事之间如何互动协作、联合创始人如何互相回答和补位，以及 beta 产品发布的样子。即使在时间紧张的情况下，他也会要求最终会议在办公室进行；他说创始人常告诉他，自己是唯一这么做的投资人：「What's the point of calling them into your own conference room and parrot the same deck?」

- [Nikunj Kothari: meet founders at their office](https://x.com/nikunj/status/2106957269212742135)

### Peter Steinberger

Peter Steinberger, who works on OpenClaw and at OpenAI, posted a short release note of "bug fixes & performance improvements."

在 OpenClaw 和 OpenAI 工作的 Peter Steinberger 发了一条简短的更新说明：「bug fixes & performance improvements」。

- [Peter Steinberger: bug fixes and performance improvements](https://x.com/steipete/status/2106796559400882209)

### Dan Shipper

Dan Shipper, CEO of Every, says that "dot has become my primary interface to AI over the last few weeks," and that his dot is named "boo." He bets that in a year he will still be interacting with ChatGPT as an always-on persistent agent, "but boo will have disappeared," comparing it to early OpenClaw days when people loved the personality quirks of their agents but dropped them "as soon as there was something functionally more powerful available."

Every CEO Dan Shipper 说「dot has become my primary interface to AI over the last few weeks」，他的 dot 叫 boo。他押注一年后自己依然会以常驻式 agent 的方式与 ChatGPT 交互，但「boo will have disappeared」；他把这比作早期 OpenClaw 时期：大家喜欢 agent 的个性小癖好，但一旦有功能更强的东西出现，就会立刻把它们丢掉。

- [Dan Shipper: dot, boo, and the persistent agent](https://x.com/danshipper/status/2106892868564431255)

## Podcast

### No Priors: Re-Founding Incumbents for the AI Era with Sequence Holdings Co-Founder and CEO Michael Lee

The Takeaway: If AI is the next industrial revolution, the biggest opportunity may be to buy strong incumbents and "refound" them around frontier engineering, rather than selling them software or services.

The Takeaway：如果 AI 是下一次工业革命，最大的机会也许不是向企业卖软件或服务，而是买下强势的存量公司，围绕前沿工程能力把它们重新「refound」。

Michael Lee is co-founder and CEO of Sequence Holdings, a permanent holding company that partners with management teams to buy and refound businesses as AI-era market leaders. It recently announced the largest AI take-private to date, with the Dell family office, for insurance broker Baldwin at $7.7 billion. Lee came to the idea after covering AI at Lone Pine starting in 2017, when AlphaGo and the first transformer paper landed; when ChatGPT arrived at the end of 2022, he concluded the world finally had an architecture that could scale, and that AI's impact on the economy would be uneven.

Michael Lee 是 Sequence Holdings 的联合创始人兼 CEO，这是一家永久控股公司，与管理团队合作，买下企业并把它重新打造为 AI 时代的市场领导者。它最近与 Dell 家族办公室一起，以 77 亿美元对保险经纪公司 Baldwin 完成了迄今为止规模最大的 AI take private 交易。Lee 的想法来自他 2017 年在 Lone Pine 开始覆盖 AI 的时候，当时 AlphaGo 和第一篇 transformer 论文刚刚出现；到 2022 年底 ChatGPT 问世时，他判断世界终于有了一个可以规模化的架构，而 AI 对经济的影响会是不均衡的。

His thesis is that in many industries the incumbent holds the lasting advantages, whether brand, scale, network effects, or regulation, and that owning one lets you inherit those advantages and rebuild it with a frontier engineering team. Software alone is limited, he argues, because it always sells into the workflow "as it's designed today," and services firms have an incentives problem: they optimize for "getting in your wallet, staying in your wallet, growing the share of your wallet," which he calls "a path towards incrementalism."

他的论点是：在很多行业里，存量公司握有更持久的优势，无论是品牌、规模、网络效应还是监管；买下其中一家，就能继承这些优势，并用前沿工程团队重建它。他认为只靠软件是有局限的，因为软件永远是卖进「as it's designed today」的工作流；而服务公司有激励机制问题，它们优化的是「getting in your wallet, staying in your wallet, growing the share of your wallet」，他称之为「a path towards incrementalism」。

Sequence tries to do roughly one deal a year. Its first investment was a Georgia community bank, where it built a platform called Atlas with four layers, including a data ontology and an agent builder. The results: average consumer underwriting time fell 94%, the average loan went from 30 days to 11 days end to end, and the bank absorbed a quarter in which loan volumes doubled without changing its underwriting standards, with a smaller underwriting team. Lee's biggest lesson from starting a company is empathy for founders: "the highs are highs, the lows are low. There are days where it's extremely, exceptionally lonely, but I cannot be having more fun."

Sequence 每年大约只做一笔交易。它的第一笔投资是佐治亚州的一家社区银行，在那里它搭建了名为 Atlas 的平台，包含四层结构，其中有一层是数据本体，还有一层是 agent builder。结果：平均消费贷审批时间下降了 94%，平均贷款的全流程时间从 30 天降到 11 天，而银行在一个贷款量翻倍的季度里消化了全部业务，既没有改变承销标准，还用了更小的承销团队。Lee 从创业中学到的最重要一课，是对创始人的共情：「the highs are highs, the lows are low. There are days where it's extremely, exceptionally lonely, but I cannot be having more fun.」

https://www.youtube.com/watch?v=TCpRwJBQvW0

## Blog

The validated feed contained no new qualifying blog posts for this run.

本轮通过验证的 feed 中没有新的合格博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
