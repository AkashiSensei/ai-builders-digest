[English](../../en/daily/ai-digest-2026-09-29-Tue.md) | [中文](./ai-digest-2026-09-29-Tue.md) | [双语](../../bilingual/daily/ai-digest-2026-09-29-Tue.md)

---

# AI Builders Digest

## 导读

**1. Sonnet 5.5 是今天绝对的主角。**Anthropic 的 Claude Code 团队过去一天讨论这个新模型时，用的全是生产环境的语言，而不是 demo。Boris Cherny 说 Sonnet 5.5 在修复 Claude Code 里的一个 bug 时，速度快了 30%，用量却少了 30%；Cat Wu 说 Claude Code 用户用它完成的任务比 Sonnet 5 多大约 30%，因为它足够聪明，做同样的事需要的 token 更少，她还举了一个用工具调用耙一院子落叶的例子，比 Sonnet 5 快 24 秒，少用 6000 个 token。Anthropic 研究负责人 Alex Albert 也补充说，这个模型写得清楚、跑得快，相比 Sonnet 5 是一次能力上的大跃升。（[Boris Cherny](https://x.com/bcherny/status/2104638725317923228)、[Cat Wu](https://x.com/_catwu/status/2104639552170377399)、[Alex Albert](https://x.com/alexalbert__/status/2104633937280811010)）

**2. 企业级测试给这次发布提供了背书。**Box CEO Aaron Levie 说，团队在早期访问阶段用 Sonnet 5.5 跑了 Box Agent 的复杂工作评测，在最难的测试上整体提升 4 分，交付一份成品的时间快约 2.4 倍，还少用 12% 的 token。分行业的提升从金融服务 +18 个百分点，到法律 +7、生命科学 +8、公共部门 +7 不等。他还列举了具体案例：在交易工具尽调里，Sonnet 5.5 抓出了算错的利息总额和定价错误的期权；在商业租约审查里，它拒绝凭空捏造一个「标准」市场基准；在田间试验报告里，它把两个处理组的样本标准差都算对了，而 Sonnet 5 几乎全错。Levie 说客户很快就能在 Box AI Studio 里用 Sonnet 5.5 构建 agent。Every CEO Dan Shipper 发现，即使相比 Opus 5.5，Sonnet 5.5 的写作也明显更好；纯写作他仍然最喜欢 Astra，但在修改润色任务上 Sonnet 已经超过 Astra，而且比 Opus 5.5 更快更便宜，足以成为快速迭代编码和设计工作的默认选择。（[Aaron Levie](https://x.com/levie/status/2104648654074343480)、[Dan Shipper](https://x.com/danshipper/status/2104636728992776510)）

**3. OpenAI 一边调整订阅价格，一边为 DevDay 造势。**Thibault Sottiaux 提前说明，OpenAI 将向新订阅者重新开放 Pro $200 订阅，同时改变用量的计算方式，他说折算下来只有旧 Pro $200 方案 API 花费的一半。他认为这仍然是更划算的选择：5 小时限制不会回来，随着模型效率提高，订阅者每花一美元能完成的工作会越来越多，公司也会继续下调 API 标价而不是抬高标价，本周推出的 GPT-6 Sol 和 GPT-6 Luna 价格就只有之前的一半。Sam Altman 说他很期待 DevDay，并透露 OpenAI「发现了一个新东西」；从 2023 年起每届 DevDay 都到场的 Dan Shipper 则说，这是 OpenAI 有史以来发布最多的一次。（[Thibault Sottiaux](https://x.com/thsottiaux/status/2104823812042940713)、[Sam Altman](https://x.com/sama/status/2104661956879913457)、[Dan Shipper](https://x.com/danshipper/status/2104662907716050988)）

**4. 整个网络正在被改造成 agent 可以直接使用的样子。**Vercel CEO Guillermo Rauch 说，现在可以在不登录的情况下搜索 Vercel 域名，他认为这对 agent 尤其有用；他还讲了一个迁移案例：团队以尽可能少的干预把一个成熟工作负载迁到 Vercel，结果构建快约 70%、渲染快约 75%，并从这次迁移中提炼出两个 AI skill，之后会回馈给社区。Anthropic 的 Thariq 认为，现在已经不可能只是「把 prompt 给别人看」，因为价值都藏在 references、skills 和 examples 里：他经常先让 agent 看他做过的另外三个 repo，上网找参考，再调用别的 AI API。他还说，随着 Sonnet 5.5 让这类智能变得随手可得，围绕更高层抽象（比如 projects、Claude Tags 和动态 workflow）的 token 成本担忧应该会缓解。（[Guillermo Rauch](https://x.com/rauchg/status/2104764419305796094)、[Thariq](https://x.com/trq212/status/2104608785696440510)、[Guillermo Rauch 谈迁移](https://x.com/rauchg/status/2104660502723072281)、[Thariq 谈 token 成本](https://x.com/trq212/status/2104660926373023830)）

**5. 竞争在推动前沿，而 builder 们在把东西做出来。**Peter Yang 用 Sonnet 5.5 做了一个可以玩的 StarCraft 关卡：你扮演 Terran，抵御 Zerg 进攻基地，可以生产 Marines、Siege Tanks 和 Battlecruisers，用的是 Sketchfab 上的 SC2 模型，音乐由 Suno 生成。他说自己只是很高兴有两个（很快会更多）竞争对手在推动前沿，毕竟 X 上的情绪前一阵还在「OpenAI 被碾压」和「Anthropic 完蛋了」之间来回横跳。设计师 Ryo Lu 则展示了他为台湾 YouBike 做的一个工具，涵盖站点、导航和带语音的实时逐向路线指引。官方 Claude 账号也晒出两段 Sonnet 5.5 的生成结果：同一 prompt 下 Sonnet 5 与 Sonnet 5.5 的弹球物理测试对比，以及每一帧都用代码画出来的像素风森林小生物。（[Peter Yang](https://x.com/petergyang/status/2104736498151256303)、[Peter Yang 谈竞争](https://x.com/petergyang/status/2104809410040336784)、[Ryo Lu](https://x.com/ryolu_/status/2104546903807660224)、[Claude 的弹球物理测试](https://x.com/claudeai/status/2104675003673325732)、[Claude 的像素画](https://x.com/claudeai/status/2104675000787603486)）

**6. 基本面比叙事更重要。**FPV Ventures 合伙人 Nikunj Kothari 反驳了那些把 distribution 当成护城河、劝创始人大举融资的投资者，尤其是在巨头们开始挥舞自己的 distribution 优势的时候。他认为真正持久的打法仍然是第一性原理：找到自己的非对称优势，做出高留存、最好还带网络效应的产品，把资本当作复利的武器而不是宿命，并且让自己成为能自我造血的公司，因为钱的水龙头迟早会关。Builder Zara Zhang 则在召集另一种对话：她邀请那些用 AI 做 Web 或前端体验、却苦于做出来不够好看、像「AI 垃圾」的粉丝来聊，也邀请那些看到 X 上各种新模型 demo 却不知道怎么复现的人，以及正在做这些 demo 并愿意分享过程与技巧的人。（[Nikunj Kothari](https://x.com/nikunj/status/2104566122549063756)、[Zara Zhang](https://x.com/zarazhangrui/status/2104689580045979811)）

## X / Twitter

### Boris Cherny：Anthropic 的 Claude Code

Boris Cherny 说 Sonnet 5.5 正在修复 Claude Code 里的一个 bug，速度快了 30%，用量少了 30%。

- [Boris Cherny：Sonnet 5.5 在 Claude Code 中](https://x.com/bcherny/status/2104638725317923228)

### Thibault Sottiaux：OpenAI 的 Codex 与 ChatGPT

Thibault Sottiaux 在 DevDay 之前说明，OpenAI 正在向新订阅者重新开放 Pro $200 订阅，同时改变用量的计算方式，他说折算下来只有旧 Pro $200 方案 API 花费的一半。他承诺 5 小时限制不会回来，随着模型效率提高，订阅者每花一美元能完成的工作会越来越多，OpenAI 也会继续下调 API 价格而不是抬高标价，并指出本周推出的 GPT-6 Sol 和 GPT-6 Luna 价格就只有之前的一半。他还说，第二天会上线更多不占用用量的订阅功能。

- [Thibault Sottiaux：新的 Pro $200 用量算法](https://x.com/thsottiaux/status/2104823812042940713)

### Peter Yang：给忙碌的人看的实用 AI 教程与访谈

Peter Yang 用 Sonnet 5.5 做了一个可以玩的 StarCraft 关卡：你扮演 Terran，抵御 Zerg 进攻基地，可以生产 Marines、Siege Tanks 和 Battlecruisers，用的是 Sketchfab 上的 SC2 模型，音乐由 Suno 生成。他也对 X 上「OpenAI 被 Claude 5.5 碾压」和「Anthropic 被 Codex 打爆」来回横跳的情绪一笑了之，说自己只是很高兴有两个（很快会更多）竞争对手在推动前沿。

- [Peter Yang：用 Sonnet 5.5 做出可玩的 StarCraft 关卡](https://x.com/petergyang/status/2104736498151256303)
- [Peter Yang：很高兴有竞争者在推动前沿](https://x.com/petergyang/status/2104809410040336784)

### Cat Wu：Anthropic 的 Claude Code 与 Cowork

Cat Wu 说 Claude Code 用户用 Sonnet 5.5 完成的任务比 Sonnet 5 多大约 30%，因为它更聪明，做同样的事需要的 token 更少。她举了一个例子：它通过工具调用耙完一院子落叶，比 Sonnet 5 快 24 秒，还少用 6000 个 token。

- [Cat Wu：用 Sonnet 5.5 完成的任务多约 30%](https://x.com/_catwu/status/2104639552170377399)

### Thariq：Anthropic 的 Claude Code

Thariq 说，围绕 projects、Claude Tags 和动态 workflow 这类更高层抽象的 token 成本担忧，应该会随着 Sonnet 和 Opus 5.5 逐渐消失，他建议在做 workflow 时试试 Sonnet 5.5。他还认为，现在已经基本不可能只是「把 prompt 拿给别人看」，因为价值都藏在 references、skills 和 examples 里：他经常先让 agent 看他做过的另外三个 repo，上网找参考，再调用别的 AI API。

- [Thariq：做 workflow 时试试 Sonnet 5.5](https://x.com/trq212/status/2104660926373023830)
- [Thariq：prompt 现在就是 references、skills 和 examples](https://x.com/trq212/status/2104608785696440510)

### Guillermo Rauch：Vercel CEO

Guillermo Rauch 说，现在可以在不登录的情况下搜索 Vercel 域名，他指出这对 agent 尤其有用。他还讲了一个迁移案例：团队以尽可能少的干预把一个工作负载迁到 Vercel，结果构建快约 70%、渲染快约 75%，并从这次迁移中提炼出两个 AI skill，之后会回馈给社区。

- [Guillermo Rauch：不登录也能搜索 Vercel 域名](https://x.com/rauchg/status/2104764419305796094)
- [Guillermo Rauch：一次构建快约 70% 的迁移](https://x.com/rauchg/status/2104660502723072281)

### Alex Albert：Anthropic 研究员

Alex Albert 说 Sonnet 5.5 有着他喜欢 Opus 5.5 的那种感觉：写得清楚、非常快，相比 Sonnet 5 是一次能力上的大跃升，很适合用来做迭代。

- [Alex Albert：Sonnet 5.5 相比 Sonnet 5 是大跃升](https://x.com/alexalbert__/status/2104633937280811010)

### Aaron Levie：Box CEO

Aaron Levie 说，Box 在早期访问阶段用 Sonnet 5.5 跑了 Box Agent 的复杂工作评测，在最难的测试上整体提升 4 分，交付一份成品的时间快约 2.4 倍，还少用 12% 的 token。他给出了分行业的提升：金融服务 +18 个百分点，法律 +7，生命科学 +8，公共部门 +7。他还特别点名了几个任务：在交易工具的尽调里，Sonnet 5.5 抓出了算错的利息总额和定价错误的期权；在商业租约审查里，它拒绝凭空捏造一个「标准」市场基准；在田间试验报告里，它把两个处理组的样本标准差都算对了，而 Sonnet 5 几乎全错。他说客户很快就能在 Box AI Studio 里用 Sonnet 5.5 构建 agent。

- [Aaron Levie：Box Agent 里的 Sonnet 5.5](https://x.com/levie/status/2104648654074343480)

### Ryo Lu：设计师

Ryo Lu 展示了他为台湾 YouBike 做的一个工具，涵盖所有有 YouBike 的城市的站点、导航和带语音的实时逐向路线指引。

- [Ryo Lu：YouBike 站点、导航与语音指路](https://x.com/ryolu_/status/2104546903807660224)

### Zara Zhang：Builder

Zara Zhang 说她想和几类粉丝聊聊：用 AI 做 Web 或前端体验、却苦于做出来不够好看、像「AI 垃圾」的人；看到 X 上各种用最新模型做出来的 demo、却不知道怎么复现的人；以及正在做这些 demo、愿意分享过程与技巧的人。

- [Zara Zhang：想聊聊用 AI 做前端的人](https://x.com/zarazhangrui/status/2104689580045979811)

### Nikunj Kothari：FPV Ventures 合伙人

Nikunj Kothari 反驳了那些把 distribution 当成护城河、劝创始人大举融资的投资者，尤其是在巨头们开始挥舞自己的 distribution 优势的时候。他的建议是坚持第一性原理：找到自己的非对称优势，做出高留存、最好还带网络效应的产品，把资本当作复利的武器而不是宿命，并且让自己成为能自我造血的公司，因为钱的水龙头迟早会关。

- [Nikunj Kothari：distribution、资本与第一性原理](https://x.com/nikunj/status/2104566122549063756)

### Dan Shipper：Every CEO

Dan Shipper 说，即将到来的 DevDay 是 OpenAI 有史以来发布最多的一次，还开玩笑说了句「rsi?」。他也给出了对 Sonnet 5.5 的早期判断：即使相比 Opus 5.5，写作也明显更好；纯写作他仍然最喜欢 Astra，但在修改润色任务上 Sonnet 已经超过 Astra，而且比 Opus 5.5 更快更便宜，成为他团队做快速迭代编码和设计工作的首选模型。他还提到，有几位同事已经觉得自己的技术栈里容不下中间档模型了。

- [Dan Shipper：OpenAI 有史以来发布最多的一次](https://x.com/danshipper/status/2104662907716050988)
- [Dan Shipper：Sonnet 5.5 初体验](https://x.com/danshipper/status/2104636728992776510)

### Sam Altman：OpenAI

Sam Altman 说他很期待第二天的 DevDay，并补充说 OpenAI「发现了一个新东西」。

- [Sam Altman：期待 DevDay](https://x.com/sama/status/2104661956879913457)

### Claude：Anthropic 官方 Claude 账号

官方 Claude 账号分享了两段 Sonnet 5.5 的生成结果：同一 prompt 下 Sonnet 5 与 Sonnet 5.5 的弹球物理测试对比，以及每一帧都用代码画出来的像素风森林小生物。

- [Claude：弹球物理测试，Sonnet 5 对比 Sonnet 5.5](https://x.com/claudeai/status/2104675003673325732)
- [Claude：用代码画出的像素风森林小生物](https://x.com/claudeai/status/2104675000787603486)

## Podcast

本次运行通过验证的 feed 中没有新的合格播客内容。

## Blog

本次运行通过验证的 feed 中没有新的合格博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
