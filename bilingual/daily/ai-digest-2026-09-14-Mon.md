[English](../../en/daily/ai-digest-2026-09-14-Mon.md) | [中文](../../zh/daily/ai-digest-2026-09-14-Mon.md) | [Bilingual](./ai-digest-2026-09-14-Mon.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. Sam Altman wants a narrow middle path between losing control of AI and letting power concentrate.** In two posts, OpenAI's Sam Altman names the two ways AI progress could go very badly and says both must be avoided. The first is losing control of the future to AI, which he calls unacceptable: "we are unapologetically on Team Humanity, and AI must always serve people," with alignment and safety techniques needing to stay ahead of model capabilities. The second is too much concentration of power, where an extraordinarily powerful AI is used by one person or company to impress their worldview onto everyone else, which he says could be extremely dystopian. Avoiding both requires walking a narrow middle path, whether the over-concentration comes from one country or one lab. In the companion post he welcomes a federal framework that sets consistent safety requirements for frontier AI, but argues labs should not wait for an antitrust exemption or legislation to begin, and notes that OpenAI now formulates explicit safety cases before frontier reinforcement learning runs it expects to significantly increase capability. He defines "pacing" as not stopping: progress continues, but should be slower than it otherwise could be, because safety cases and monitoring carry significant costs. Box CEO Aaron Levie agrees the specific improvement goals are necessities, saying we expect equivalent rigor in aerospace, life sciences, health care, and defense, since AI will underpin trading systems, medical devices, and government workflows.

**1. Sam Altman 想在「失去对 AI 的控制」与「权力过度集中」之间走一条窄路。** OpenAI 的 Sam Altman 用两条帖子列出 AI 可能走向糟糕结局的两种方式，并说这两种都必须避免。第一种是失去对未来的掌控，他认为这不可接受：「我们毫不掩饰地站在人类这一边，AI 必须始终服务于人」；要让这一点成立，对齐与安全技术必须跑在模型能力前面。第二种是权力过度集中：如果某个异常强大的 AI 被一个人或一家公司用来把自己的世界观强加给所有人，结果可能极其反乌托邦。要同时避开这两种威胁，在他看来就得走一条窄中间道路，无论过度集中来自一个国家还是一家实验室。在另一条帖子里，他欢迎联邦层面为前沿 AI 制定一致的安全要求框架，但认为实验室不必等到反垄断豁免或立法落地才开始行动，并指出 OpenAI 现在会在预计显著提升能力的前沿强化学习训练之前，提前制定明确的安全案例。他澄清「pacing」不是「stopping」：进步会继续，但应当比原本可能的节奏更慢，因为安全案例与监控有显著成本。Box CEO Aaron Levie 认同这些具体改进目标是必需品，他说我们在航空航天、生命科学、医疗和国防等领域都期待同等严格的标准，而 AI 将成为交易系统、医疗器械和政府工作流的技术底座。

**2. The adoption math says we are still at the very beginning.** Peter Yang, who writes practical AI tutorials and interviews for busy people, shares a chart Brex CEO Pedro likes to cite: each dot is 3.2 million people, gray boxes are the 84% who have never used AI, green boxes the 16% on a free chatbot, orange boxes the roughly 0.3% who pay $20 a month, and the tiny red box the roughly 0.04% using agents effectively. Yang notes the chart is from February 2026, so things have probably picked up since then, but the point stands that most of the world has not started. Replit CEO Amjad Masad frames the flip side: it was painful to watch so many users priced out of AI coding for a while, and it is now free to build again.

**2. 采用率数据说明，我们仍处在非常早期的阶段。** Peter Yang 写实用 AI 教程与访谈，他分享了一张 Brex CEO Pedro 常引用的图：每个点代表 320 万人，灰色框是从未用过 AI 的 84%，绿色框是使用免费聊天机器人的 16%，橙色框是每月付 20 美元的大约 0.3%，而那个极小的红色框是真正高效使用 agents 的约 0.04%。Yang 说这张图来自 2026 年 2 月，情况可能已经变化，但结论依然成立：世界上大多数人还没开始用。Replit CEO Amjad Masad 说出另一面：曾经有很长一段时间，很多用户因为价格被挡在 AI coding 之外，这让人难受，而现在又可以免费构建了。

**3. Agents still trip on reliability even as they do genuinely impressive things.** Zara Zhang, who describes herself as a builder, describes a recurring Astra failure: the model says it has done X, she corrects it to do Y, it agrees it should do Y, and then nothing happens, prompting her to ask why it does not just go and do Y like other models. In the other direction, Boris Cherny, who works on Claude Code at Anthropic, points to Fable solving the Cyphral Distich, a 370-year-old cipher, as a super cool way to use Claude. Peter Steinberger says his next release, or the dev channel, makes worktrees about 80% faster through APFS, Btrfs, XFS, and ReFS folder clones while saving lots of disk space, and adds that it is all written in Rust.

**3. Agents 依然会在可靠性上掉链子，尽管它们确实能做出令人印象深刻的事。** Zara Zhang 称自己是 builder，她描述了 Astra 一个反复出现的失败模式：Astra 说自己已经做了 X，她纠正说应该做 Y，Astra 承认确实该做 Y，然后就没有下文了，于是她发问：为什么它不能像其他模型那样直接去做 Y？另一方面，在 Anthropic 负责 Claude Code 的 Boris Cherny 提到 Fable 破解了有 370 年历史的 Cyphral Distich 密码，称这是使用 Claude 的一种非常酷的方式。Peter Steinberger 说他的下一个版本（或 dev channel）通过 APFS、Btrfs、XFS 和 ReFS 的文件夹克隆让 worktrees 快了约 80%，同时还能节省大量磁盘空间，并补充说这些全部用 Rust 写成。

**4. Arm's CEO says this buildout is a systems problem, and the CPU is back at the center of it.** Arm CEO Rene Haas explains that chip design takes 24 to 36 months, but design is not the long pole; verification, validation, debug, and documentation are, and AI is very good at exactly that. He says 80% to 90% of Arm engineers use AI daily, and that shutting it off would feel like the 1990s with internet available only between two and four in the afternoon. His read on bottlenecks is specific: the supply chain stays constrained for at least three to five years, and the next big constraint is building data centers, not buying wafers or memory. He also insists the CPU never went away: "It's like literally where are the trucks that are gonna take the tokens away and give them to the users? That's what CPUs do."

**4. Arm CEO 说这轮 AI 建设是一个系统问题，CPU 重新回到了中心。** Arm CEO Rene Haas 解释说，芯片设计需要 24 到 36 个月，但设计并不是最耗时的环节；真正的大头是验证、确认、调试和文档，而这恰恰是 AI 很擅长的事。他说 Arm 有 80% 到 90% 的工程师每天都在用 AI，如果把它关掉，就像回到 1990 年代，互联网每天只在下午两点到四点开放。他对瓶颈的判断很具体：供应链至少在三到五年内都会处于紧张状态，而下一个最大的约束是建设数据中心，不是买晶圆或内存。他还强调 CPU 从未消失：「就像真正的问题是，哪些卡车会把 token 运出去、送到用户手里？这就是 CPU 要做的事。」

**5. Conviction, capital, and cost are the real filters in this cycle.** Haas says access to capital will be the gate for the wave of new chip startups and advises them to build strategic partnerships early, whether with supply chain players, private equity, or banks. FPV Ventures partner Nikunj Kothari warns that a higher entry valuation and higher total comp is often a bug, not a feature; people should analyze the market, traction, and positioning objectively, work out what a company can realistically exit at, and factor in 409a prices and tax implications. He cites firsthand experience: a company that raised $60M from one of the best investors on the planet folded three years in with all equity wiped out. He also shared a checklist of questions to ask when joining a startup. Haas adds that robotics will be enormous across both humanoids and task-specific machines, with factory automation, delivery, and distribution going first, and notes that most humanoid "brains" already run on Arm.

**5. 信念、资本和成本，才是这一轮真正的筛选器。** Haas 说，对新一批芯片创业公司来说，能否拿到资本将是那道门槛，他建议它们尽早建立战略合作，无论是与供应链、私募股权还是银行。FPV Ventures 合伙人 Nikunj Kothari 则提醒：更高的入职估值和更高的总包往往是 bug，而不是 feature；不能因为一家公司估值更高，就认为它更安全或更值得去，而要客观分析它的市场、增长和定位，如果一家公司值 100 倍 ARR，它就得真正长到那个体量。他建议自己算出公司可能的退出价值，并考虑 409a 价格和税务影响，还说在当下这种一切颠倒、数字脱离现实的时期，这一点尤其重要。他补充了一段亲身经历：他曾在一家从「可能是这个星球上最好的投资人之一」那里融了 6000 万美元的公司工作，三年后公司倒闭，所有股权归零。他还分享了一份加入创业公司时该问的问题清单。Haas 补充说，机器人机会巨大，既包括人形机器人也包括专用机器，而工厂自动化、配送和物流会最先落地，并指出今天大多数人形机器人的「大脑」已经在跑 Arm 的技术。

## X / Twitter

### Sam Altman: OpenAI

OpenAI's Sam Altman lays out the two ways AI progress could go very badly and says both must be avoided. The first is losing control of the future to AI, which he calls unacceptable: "we are unapologetically on Team Humanity, and AI must always serve people." To make that hold, he says alignment and safety techniques have to stay ahead of progress in model capabilities. The second is a world with too much concentration of power, where an extraordinarily powerful AI is used by one person or company to impress its worldview onto everyone else, which he says could be extremely dystopian. Avoiding both threats, in his framing, means walking a narrow middle path, whether the over-concentration comes from one country or one lab.

OpenAI 的 Sam Altman 列出 AI 可能走向糟糕结局的两种方式，并说这两种都必须避免。第一种是失去对未来的控制权，他认为这不可接受：「我们毫不掩饰地站在人类这一边，AI 必须始终服务于人。」要让这一点成立，他认为对齐与安全技术必须跑在模型能力进展的前面。第二种是权力过度集中：如果某个异常强大的 AI 被一个人或一家公司用来把自己的世界观强加给所有人，结果可能极其反乌托邦。在他的框架里，要同时避开这两种威胁，就得走一条窄中间道路，无论过度集中来自一个国家还是一家实验室。

In the companion post he says the world deserves confidence that American companies building increasingly capable AI will act responsibly, and welcomes a federal framework with consistent safety requirements for frontier AI, while arguing labs should not wait for an antitrust exemption or legislation to start. He notes that older tools like Responsible Scaling Policies and Preparedness Frameworks focused mainly on deploying finished models rather than the development process, and that OpenAI now formulates explicit safety cases before frontier reinforcement learning runs it expects to significantly increase capability. He closes by clarifying that "pacing" does not mean "stopping": progress will continue, but should be slower than it otherwise could be, because safety cases and monitoring carry significant costs, and no amount of American competitive pressure should justify recklessness.

在另一条帖子里，他说世界理应相信，开发越来越强 AI 的美国公司会负责任地行事，并欢迎联邦层面为前沿 AI 制定一致的安全要求框架；但他也认为，实验室不必等到反垄断豁免或立法落地才开始行动。他指出，Responsible Scaling Policies 和 Preparedness Frameworks 这类旧工具主要关注已完成模型的部署，而不是开发过程；现在 OpenAI 会在预计显著提升能力的前沿强化学习训练之前，提前制定明确的安全案例。他最后澄清，「pacing」不是「stopping」：进步会继续，但应当比原本可能的节奏更慢，因为安全案例与监控有显著成本，任何美国竞争压力都不应成为鲁莽的借口。

- [Sam Altman on the two ways AI progress could go badly](https://x.com/sama/status/2099352016988614852)
- [Sam Altman on safety cases and pacing](https://x.com/sama/status/2099348812305473766)

### Aaron Levie: CEO of Box

Box CEO Aaron Levie argues that "pacing" can act as a trigger word because it sounds like an arbitrary slowdown of capability or a way to hobble competitors through undue regulation, but the specific improvement goals laid out by Dario are absolute necessities in AI development. He points out that we expect equivalent rigor in aerospace, life sciences, health care, and other industries, so AI development probably should not be that different, especially because AI will be the technology underpinning financial trading systems, medical devices, biotech breakthroughs, defense systems, and government workflows. Getting there without meaningfully slowing innovation or reducing competition, he says, is one of the most complex questions of the 21st century, but the need is clearly real.

Box CEO Aaron Levie 认为，「pacing」容易成为触发词，因为它听起来像是人为放慢能力进步，或借不当监管来拖住竞争对手；但 Dario 提出的那些具体改进目标，在 AI 开发中是绝对的必需品。他指出，我们在航空航天、生命科学、医疗和其他行业都期待同等严格的标准，所以 AI 开发大概也不该有例外，尤其是因为 AI 将成为金融交易系统、医疗器械、生物科技突破、国防系统和政府工作流的技术底座。他说，如何在不明显拖慢创新、也不削弱竞争的前提下做到这一点，是 21 世纪最复杂的问题之一，但需求显然真实存在。

- [Aaron Levie on pacing and safety](https://x.com/levie/status/2099167992835924301)

### Peter Yang

Peter Yang, who writes practical AI tutorials and interviews for busy people, highlights a chart that Brex CEO Pedro likes to reference to show how early the AI market still is. Each dot is 3.2 million people: gray boxes are the 84% of the world that has never used AI, green boxes are the 16% using a free chatbot, orange boxes are the roughly 0.3% who pay $20 a month, and a tiny red box is the roughly 0.04% using agents effectively. Yang notes the chart is from February 2026, so things have probably picked up since then, but says we are still super early.

Peter Yang 写实用 AI 教程与访谈，他重点分享了一张 Brex CEO Pedro 常引用的图，用来说明 AI 市场有多早期。每个点代表 320 万人：灰色框是从未用过 AI 的 84%，绿色框是使用免费聊天机器人的 16%，橙色框是每月付 20 美元的大约 0.3%，而极小的红色框是真正高效使用 agents 的约 0.04%。Yang 说这张图来自 2026 年 2 月，情况可能已经变化，但我们仍处在非常早期的阶段。

- [Peter Yang on the AI adoption chart](https://x.com/petergyang/status/2099200231820963891)

### Amjad Masad: CEO of Replit

Replit CEO Amjad Masad says it was painful to see so many users priced out of AI coding for a while, and welcomes the fact that it is now free to build again.

Replit CEO Amjad Masad 说，曾经有很长一段时间，很多用户因为价格被挡在 AI coding 之外，这让人难受；如今又可以免费构建了。

- [Amjad Masad on AI coding becoming free to build with again](https://x.com/amasad/status/2099197117013340450)

### Zara Zhang: Builder

Zara Zhang, who describes herself as a builder, flags a recurring problem with Astra. The pattern she describes: Astra says it has done X, she corrects it to say it should do Y instead, Astra agrees it should do Y, and then nothing happens. That prompts her to ask why it does not just go and do Y, like the other models.

Zara Zhang 称自己是 builder，她指出 Astra 一个反复出现的问题。她描述的模式是：Astra 说自己已经做了 X，她纠正说应该做 Y，Astra 承认确实该做 Y，然后就没有下文了。于是她发问：为什么它不能像其他模型那样直接去做 Y？

- [Zara Zhang on Astra promising to act but not acting](https://x.com/zarazhangrui/status/2099348631291883945)

### Boris Cherny: Claude Code at Anthropic

Boris Cherny, who works on Claude Code at Anthropic, says Fable solved the Cyphral Distich, a 370-year-old cipher, and calls it a super cool way to use Claude.

在 Anthropic 负责 Claude Code 的 Boris Cherny 提到，Fable 破解了有 370 年历史的 Cyphral Distich 密码，称这是使用 Claude 的一种非常酷的方式。

- [Boris Cherny on Fable solving a 370-year-old cipher](https://x.com/bcherny/status/2099322487603634395)

### Peter Steinberger

Peter Steinberger says his next release, or the dev channel, makes worktrees about 80% faster by cloning folders through APFS, Btrfs, XFS, and ReFS, and that it also saves a lot of disk space. He adds that it is all written in Rust.

Peter Steinberger 说，他的下一个版本（或 dev channel）通过 APFS、Btrfs、XFS 和 ReFS 的文件夹克隆让 worktrees 快了约 80%，同时还能节省大量磁盘空间。他补充说，这些全部用 Rust 写成。

- [Peter Steinberger on faster worktrees via folder clones](https://x.com/steipete/status/2099197266636783989)
- [Peter Steinberger on the implementation being written in Rust](https://x.com/steipete/status/2099201162922938418)

### Nikunj Kothari: Partner at FPV Ventures

FPV Ventures partner Nikunj Kothari says he gets at least one text a day from a founder facing this exact conundrum, and argues that a higher entry valuation and higher total comp is often a bug and not a feature. Just because a company raised at a higher valuation does not mean it is realistically more secure or the better place to go; you have to look at the market, the traction, and how well positioned the company is, and if it is worth 100x ARR, it has to grow into that. He advises doing your own analysis of what a company will exit at, and factoring in 409a prices and tax implications, which he says matters a lot when everything is upside down and numbers are not rooted in reality. He adds firsthand experience: he worked at a company that raised $60M from probably one of the best investors on the planet, and it folded three years in with all equity wiped out. He also shared a set of questions to ask when joining a startup.

FPV Ventures 合伙人 Nikunj Kothari 说，他每天至少会收到一条来自面临同样两难处境的创始人的消息，并认为更高的入职估值和更高的总包往往是 bug，而不是 feature。一家公司以更高估值融资，并不意味着它现实中更安全或更值得去；你必须看市场、看增长、看它的定位，如果它值 100 倍 ARR，它就得真正长到那个体量。他建议自己算出公司可能的退出价值，并考虑 409a 价格和税务影响，还说在当下这种一切颠倒、数字脱离现实的时期，这一点尤其重要。他补充了一段亲身经历：他曾在一家从「可能是这个星球上最好的投资人之一」那里融了 6000 万美元的公司工作，三年后公司倒闭，所有股权归零。他还分享了一份加入创业公司时该问的问题清单。

- [Nikunj Kothari on why a higher entry valuation is often a bug](https://x.com/nikunj/status/2099198567923765357)
- [Nikunj Kothari on questions to ask when joining a startup](https://x.com/nikunj/status/2099272635926671532)

## Podcast

### No Priors: Redefining Chip Architecture with Arm CEO Rene Haas

The Takeaway: the AI buildout is less a race to design better chips than a grind through verification, supply chain, and data center construction, and that is why the CPU quietly never went away.

核心结论：这轮 AI 建设与其说是在比谁设计出更好的芯片，不如说是在验证、供应链和数据中心建设上慢慢磨，这也正是 CPU 悄悄从未离开中心的原因。

Rene Haas, CEO of Arm and of SoftBank Group International, has spent his career in chips, and his read on the AI boom is refreshingly unromantic. Arm licenses the CPU cores that end up in smartphones, data centers, cars, and more, and the business was once so clean that Haas, who joined from Nvidia in 2013, loved that it had "no inventory, no RMA, no scrap." It ran at a 98.5% gross margin. Now Arm is doing something new: shipping its own physical product, the Arm AGI CPU introduced in March, after Meta came asking for a general purpose agentic CPU that nobody could provide.

Arm CEO 兼 SoftBank Group International CEO 的 Rene Haas 整个职业生涯都在芯片行业，他对 AI 热潮的判断非常不浪漫。Arm 授权那些最终进入智能手机、数据中心、汽车等设备的 CPU 核心，这门生意曾经干净到让他印象深刻；2013 年从 Nvidia 加入的他很喜欢它「没有库存、没有退货、没有废料」，毛利率高达 98.5%。现在 Arm 在做一件新事：推出自己的实体产品，也就是今年 3 月发布的 Arm AGI CPU，起因是 Meta 来寻求一颗通用 agentic CPU，而当时没有人能提供。

His most counterintuitive point is about where chip design time actually goes. A chip takes 24 to 36 months, but architecture and RTL generation are not the long pole; verification, validation, debug, and documentation are. That is exactly the work AI is good at, which is why 80% to 90% of Arm engineers use it daily. Turn it off, Haas says, and you are back in the 1990s with internet only between two and four in the afternoon. "The genie's out of the bottle and there's no stopping that."

他最反直觉的观点，是关于芯片设计时间到底花在哪里。一颗芯片要花 24 到 36 个月，但架构和 RTL 生成并不是最耗时的那一段；真正的大头是验证、确认、调试和文档。而这恰恰是 AI 擅长的工作，也正是 80% 到 90% 的 Arm 工程师每天在用它。Haas 说，如果把它关掉，就像回到 1990 年代，互联网每天只在下午两点到四点开放。「精灵已经出了瓶子，没有什么能挡住它。」

The limits are as interesting as the gains. Models are still weak at RTL generation and physical design because so much of that knowledge is proprietary, which is why Haas thinks Arm's richest asset is not just its IP but the documentation and test benches around it: "if it's unusable and untestable, it's actually untrainable. And if it's untrainable, it's not usable for AI."

能力提升的边界同样有意思。模型在 RTL 生成和物理设计上仍然偏弱，因为这类知识大多是专有的，所以 Haas 认为 Arm 最值钱的资产不只是 IP，还有围绕它的文档和测试基准：「如果它不可用、不可测，那它其实就不可训练。如果它不可训练，它对 AI 就没有用。」

On the macro picture, Haas is blunt that the current supply chain crunch lasts three to five years at least, and that the next bottleneck is building data centers, not buying wafers or memory. He dismisses talk of a bubble in supply and demand as "not even close," sees robotics as enormous across both humanoids and task-specific machines, with factory automation, delivery, and distribution going first, and returns to a simple rule for national strategy: "There's just not downside from being the leader."

从宏观上看，Haas 直言当前的供应链紧张至少会持续三到五年，而下一个瓶颈是建设数据中心，不是买晶圆或内存。他把供需层面的泡沫论调称为「差得远」。他认为机器人机会巨大，既包括人形机器人也包括专用机器，工厂自动化、配送和物流会最先落地。谈到国家战略，他的规则很简单：「当领先者根本没有任何坏处。」

- [No Priors: Redefining Chip Architecture with Arm CEO Rene Haas](https://www.youtube.com/@NoPriorsPodcast)

## Blog

The validated blog feed contained no new qualifying items.

通过验证的 blog feed 中没有新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
