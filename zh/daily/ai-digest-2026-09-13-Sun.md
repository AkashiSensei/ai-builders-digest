[English](../../en/daily/ai-digest-2026-09-13-Sun.md) | [中文](./ai-digest-2026-09-13-Sun.md) | [双语](../../bilingual/daily/ai-digest-2026-09-13-Sun.md)

---

# AI Builders Digest

## 导读

**1. Sam Altman 想在「失去对 AI 的控制」和「权力过度集中」之间走一条窄路。** OpenAI 的 Sam Altman 用两条帖子列出 AI 可能走向糟糕结局的两种方式，并说这两种都必须避免。第一种是失去对未来的控制权，他认为这不可接受：「我们毫不掩饰地站在人类这一边，AI 必须始终服务于人」，同时必须让对齐与安全技术跑在模型能力前面。第二种是权力过度集中：如果某个异常强大的 AI 被一个人或一家公司用来把自己的世界观强加给所有人，结果可能极其反乌托邦。要同时避开这两种威胁，在他看来就得走一条窄中间道路，无论过度集中来自一个国家还是一家实验室。在另一条帖子里，他说世界理应相信，开发越来越强 AI 的美国公司会负责任地行事，并欢迎联邦层面为前沿 AI 制定一致的安全要求框架；但他也认为实验室不必等到反垄断豁免或立法落地才开始行动。他指出，Responsible Scaling Policies 和 Preparedness Frameworks 这类旧工具主要针对已完成模型的部署，而不是开发过程；现在 OpenAI 会在预计显著提升能力的前沿强化学习训练之前，提前制定明确的安全案例。他最后澄清，「pacing」不等于「stopping」：进步会继续，但应当比原本可能的节奏更慢，因为安全案例与监控有显著成本，任何美国竞争压力都不应成为鲁莽的借口。Box CEO Aaron Levie 认同这些具体改进目标是必需品，他说我们在航空航天、生命科学、医疗和国防等领域都期待同等严格的标准，而 AI 将成为交易系统、医疗器械和政府工作流的技术底座。

**2. 采用率数据说明，我们还在非常早期的阶段。** Peter Yang 写实用 AI 教程与访谈，他分享了一张 Brex CEO Pedro 常引用的图：每个点代表 320 万人，灰色框代表从未用过 AI 的 84%，绿色框是使用免费聊天机器人的 16%，橙色框是每月付 20 美元的大约 0.3%，而那个极小的红色框是真正高效使用 agents 的约 0.04%。Yang 说这张图来自 2026 年 2 月，情况可能已经变化，但结论依然成立：世界上大多数人还没开始用。Replit CEO Amjad Masad 说出另一面：曾经有很长一段时间，很多用户因为价格被挡在 AI coding 之外，这让人难受，而现在又可以免费构建了。

**3. Agents 依然会在可靠性上掉链子，尽管它们确实能做出令人印象深刻的事。** Zara Zhang 描述了 Astra 一个反复出现的失败模式：Astra 说自己已经做了 X，她纠正说应该做 Y，Astra 承认确实该做 Y，然后就没有下文了，于是她发问：为什么它不能像其他模型那样直接去做 Y？另一方面，在 Anthropic 负责 Claude Code 的 Boris Cherny 提到 Fable 破解了有 370 年历史的 Cyphral Distich 密码，称这是使用 Claude 的一种非常酷的方式。Peter Steinberger 说他的下一个版本（或 dev channel）通过 APFS、Btrfs、XFS 和 ReFS 的文件夹克隆，让 worktrees 快了约 80%，同时还能节省大量磁盘空间，并补充说这些全部用 Rust 写成。

**4. Arm CEO 说这轮 AI 建设是一个系统问题，CPU 重新回到了中心。** 在 No Priors 里，Arm CEO Rene Haas 解释说，芯片设计需要 24 到 36 个月，但设计并不是最耗时的环节；真正的大头是验证、确认、调试和文档，而这恰恰是 AI 很擅长的事。他说 Arm 有 80% 到 90% 的工程师每天都在用 AI，如果把它关掉，就像回到 1990 年代，互联网每天只在下午两点到四点开放。他对瓶颈的判断很具体：供应链至少在三到五年内都会处于紧张状态，而下一个最大的约束是建设数据中心，不是买晶圆或内存。他还强调 CPU 从未消失：「就像真正的问题是，哪些卡车会把 token 从工厂运出去、送到用户手里？这就是 CPU 要做的事。」

**5. 信念、资本和成本，才是这一轮真正的筛选器。** Haas 说，对新一批芯片创业公司来说，能否拿到资本将是那道门槛，他建议它们尽早建立战略合作，无论是与供应链、私募股权还是银行。FPV Ventures 合伙人 Nikunj Kothari 则提醒：更高的入职估值和更高的总包往往是 bug，而不是 feature；不能因为一家公司估值更高，就认为它更安全或更值得去，而要客观分析它的市场、增长和定位，如果一家公司值 100 倍 ARR，它就得真正长到那个体量。他建议自己算出公司可能的退出价值，并考虑 409a 价格和税务影响，还说在当下这种一切颠倒、数字脱离现实的时期，这一点尤其重要。他补充了一段亲身经历：他曾在一家从「可能是这个星球上最好的投资人之一」那里融了 6000 万美元的公司工作，三年后公司倒闭，所有股权归零。他还分享了一份加入创业公司时该问的问题清单。Haas 补充说，机器人机会巨大，既包括人形机器人也包括专用机器，而工厂自动化、配送和物流会最先落地，并说今天的机器人「大脑」已经在跑 Arm 的技术。

## X / Twitter

### Sam Altman（OpenAI）

OpenAI 的 Sam Altman 列出 AI 可能走向糟糕结局的两种方式，并说这两种都必须避免。第一种是失去对未来的控制权，他认为这不可接受：「我们毫不掩饰地站在人类这一边，AI 必须始终服务于人。」要让这一点成立，他认为对齐与安全技术必须跑在模型能力进展的前面。第二种是权力过度集中：如果某个异常强大的 AI 被一个人或一家公司用来把自己的世界观强加给所有人，结果可能极其反乌托邦。在他的框架里，要同时避开这两种威胁，就得走一条窄中间道路，无论过度集中来自一个国家还是一家实验室。

在另一条帖子里，他说世界理应相信，开发越来越强 AI 的美国公司会负责任地行事，并欢迎联邦层面为前沿 AI 制定一致的安全要求框架；但他也认为，实验室不必等到反垄断豁免或立法落地才开始行动。他指出，Responsible Scaling Policies 和 Preparedness Frameworks 这类旧工具主要关注已完成模型的部署，而不是开发过程；现在 OpenAI 会在预计显著提升能力的前沿强化学习训练之前，提前制定明确的安全案例。他最后澄清，「pacing」不是「stopping」：进步会继续，但应当比原本可能的节奏更慢，因为安全案例与监控有显著成本，任何美国竞争压力都不应成为鲁莽的借口。

- [Sam Altman 谈 AI 可能走向糟糕结局的两种方式](https://x.com/sama/status/2099352016988614852)
- [Sam Altman 谈安全案例与 pacing](https://x.com/sama/status/2099348812305473766)

### Aaron Levie（Box CEO）

Box CEO Aaron Levie 认为，「pacing」容易成为触发词，因为它听起来像是人为放慢能力进步，或借不当监管来拖住竞争对手；但 Dario 提出的那些具体改进目标，在 AI 开发中是绝对的必需品。他指出，我们在航空航天、生命科学、医疗和其他行业都期待同等严格的标准，所以 AI 开发大概也不该有例外，尤其是因为 AI 将成为金融交易系统、医疗器械、生物科技突破、国防系统和政府工作流的技术底座。他说，如何在不明显拖慢创新、也不削弱竞争的前提下做到这一点，是 21 世纪最复杂的问题之一，但需求显然真实存在。

- [Aaron Levie 谈 pacing 与安全](https://x.com/levie/status/2099167992835924301)

### Peter Yang

Peter Yang 写实用 AI 教程和访谈，他重点提到一张 Brex CEO Pedro 常引用来说明 AI 市场仍处早期的图。每个点代表 320 万人：灰色框是从未用过 AI 的 84%，绿色框是使用免费聊天机器人的 16%，橙色框是每月付 20 美元的大约 0.3%，而极小的红色框是真正高效使用 agents 的约 0.04%。Yang 说这张图来自 2026 年 2 月，情况可能已经改善，但他说我们仍然处于非常早期的阶段。

- [Peter Yang 谈 AI 采用率图表](https://x.com/petergyang/status/2099200231820963891)

### Amjad Masad（Replit CEO）

Replit CEO Amjad Masad 说，过去有很长一段时间，很多用户因为价格被挡在 AI coding 之外，这让人难受，而现在又可以免费构建了。

- [Amjad Masad 谈 AI coding 重新免费可构建](https://x.com/amasad/status/2099197117013340450)

### Zara Zhang（Builder）

自称 builder 的 Zara Zhang 指出 Astra 一个反复出现的问题。她描述的模式是：Astra 说自己已经做了 X，她纠正说应该做 Y，Astra 承认确实该做 Y，然后就没有下文。这让她发问：为什么它不能像其他模型那样直接去做 Y？

- [Zara Zhang 谈 Astra 答应行动却没有行动](https://x.com/zarazhangrui/status/2099348631291883945)

### Boris Cherny（Anthropic，Claude Code）

在 Anthropic 负责 Claude Code 的 Boris Cherny 说，Fable 破解了有 370 年历史的 Cyphral Distich 密码，并称这是使用 Claude 的一种非常酷的方式。

- [Boris Cherny 谈 Fable 破解 370 年前的密码](https://x.com/bcherny/status/2099322487603634395)

### Peter Steinberger

Peter Steinberger 说，他的下一个版本（或 dev channel）通过 APFS、Btrfs、XFS 和 ReFS 的文件夹克隆，让 worktrees 快了约 80%，同时还能节省大量磁盘空间。他补充说，这些全部用 Rust 写成。

- [Peter Steinberger 谈用文件夹克隆加速 worktrees](https://x.com/steipete/status/2099197266636783989)
- [Peter Steinberger 谈实现全部用 Rust 写成](https://x.com/steipete/status/2099201162922938418)

### Nikunj Kothari（FPV Ventures 合伙人）

FPV Ventures 合伙人 Nikunj Kothari 说，他每天至少会收到一位创始人发来的短信，问的正是这个两难问题：更高的入职估值和更高的总包往往是 bug，而不是 feature。一家公司以更高估值融资，并不意味着它现实中更安全或更值得去；你必须看它的市场、增长和定位，如果它值 100 倍 ARR，它就得真正长到那个体量。他建议自己算出公司可能的退出价值，并把 409a 价格和税务影响算进去，还说在一切颠倒、数字脱离现实的当下，这一点尤其重要。他补充了一段亲身经历：他曾在一家从「可能是这个星球上最好的投资人之一」那里融了 6000 万美元的公司工作，三年后公司倒闭，所有股权归零。他还分享了一份加入创业公司时该问的问题清单。

- [Nikunj Kothari 谈更高的入职估值为何常常是 bug](https://x.com/nikunj/status/2099198567923765357)
- [Nikunj Kothari 谈加入创业公司前该问的问题](https://x.com/nikunj/status/2099272635926671532)

## Podcast

### No Priors: Redefining Chip Architecture with Arm CEO Rene Haas

核心结论：这轮 AI 建设与其说是设计更好芯片的竞赛，不如说是一场在验证、供应链和数据中心建设上的苦活，这也是为什么 CPU 其实从未离开舞台中心。

Rene Haas 是 Arm 以及 SoftBank Group International 的 CEO，整个职业生涯都在芯片行业里，而他对这轮 AI 热潮的判断相当务实。Arm 的业务是授权 CPU 核心，这些核心最终进入智能手机、数据中心、汽车等各种设备；这门生意曾经干净到让 2013 年从 Nvidia 加入的 Haas 非常喜欢，因为它「没有库存、没有 RMA、没有废料」，毛利率高达 98.5%。现在 Arm 开始做一件新事：交付自己的实体产品，也就是今年 3 月推出的 Arm AGI CPU，起因是 Meta 想要一颗通用 agentic CPU，而市面上没人能提供。

他最反直觉的一点，是关于芯片设计的时间究竟花在哪里。一颗芯片需要 24 到 36 个月，但架构和 RTL 生成并不是最耗时的部分；真正的大头是验证、确认、调试和文档。而这恰恰是 AI 擅长的工作，所以 Arm 有 80% 到 90% 的工程师每天都在用它。Haas 说，如果把它关掉，就像回到 1990 年代，互联网每天只在下午两点到四点开放。「精灵已经出了瓶子，没有什么能挡住它。」

限制本身和收益一样有意思。模型在 RTL 生成和物理设计上依然偏弱，因为很多相关知识都是专有的；这也是为什么 Haas 认为 Arm 最宝贵的资产不只是 IP，还有围绕 IP 的文档和 test bench：「如果一样东西不可用、不可测，它实际上就不可训练；如果它不可训练，它对 AI 就没有用。」

在宏观层面，Haas 直言当前的供应链紧张至少会持续三到五年，而下一个瓶颈是建设数据中心，不是买晶圆或内存。他把所谓供需泡沫的说法称为「差得远」，认为机器人机会巨大，既包括人形机器人也包括专用机器，而工厂自动化、配送和物流会最先落地，最后回到一条简单的国家战略原则：「做领先者没有下行风险。」

- [No Priors: Redefining Chip Architecture with Arm CEO Rene Haas](https://www.youtube.com/@NoPriorsPodcast)

## Blog

经过验证的博客 feed 中没有新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
