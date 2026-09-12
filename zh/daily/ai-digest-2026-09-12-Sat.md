[English](../../en/daily/ai-digest-2026-09-12-Sat.md) | [中文](./ai-digest-2026-09-12-Sat.md) | [双语](../../bilingual/daily/ai-digest-2026-09-12-Sat.md)

---

# AI Builders Digest

## 导读

**1. Astra 的发布节奏已经跑在了自家发布会前面，OpenAI 正在公开清理质量欠账。** OpenAI 负责 Codex 与 ChatGPT 的 Thibault Sottiaux 列出本周由 Astra 驱动的产品：Images 2.5、GPT-Live-1、Agents API、Data Agent 和 ChatGPT for Financial Services，并指出这还不是 DevDay。他还发布了一次坦诚的 reset：一个可能导致提前中断的 opt-in 上下文管理实验在影响约 4000 到 5000 名用户后被关闭；一些为旧模型编写的 skills 触发过于频繁，或让模型无法检查自己的工作；一些配置不当、被测量到造成质量下降的引擎也被移除。OpenAI 还招募了 Git AI 团队的 Aidan 和 Sasha，他们开发的 open-source 工具可以展示 coding agents 如何影响代码库，OpenAI 承诺让 Git AI 继续开源。Peter Steinberger 补上了一个具体的演示：Astra 在云会话里通过 computer use 玩 Doom。

**2. Evals 正在成为判断 AI 是否真正可用的核心功课，只看 pass/fail 分数远远不够。** Anthropic 的 Thariq 认为，如今只看通过或失败几乎无法解读 evals，因为很多 benchmark 失败来自过于严格的隐藏测试，有时模型的答案比预期结果更合理。他还上线了 plugin evals，用 `claude plugin eval init` 在插件目录里运行，回应的是「新模型发布后很难知道 skills 是否还管用」这一反馈。Meta 的 Madhu Guru 把企业 AI 失败归咎于三件事：沿用旧时代的 playbook、对 evals 投入不足，以及由中心平台团队从外部为公司造 AI，导致工具与真正做事的人的工作流、上下文和判断脱节。他的处方是：招募真正做过 AI 产品的负责人，把 evals 变成一等公民，并把最好的 AI builders 嵌入 finance、sales 和 support，与业务一起构建，而不是替业务构建。Every CEO Dan Shipper 说，benchmark 分数并不能说明模型在真实工作中的表现，这也是团队把三年的手感评测升级为个人化、可量化 benchmark 的原因。

**3. 关于 software factory 的争论，本质上是人类应该留在回路的哪个位置。** Peter Yang 对端到端的 software factory 持怀疑态度，他认为除了验证和测试之外，AI 还无法在没有人类定义需求和检查工作的情况下自我改进产品，或从头到尾构建新功能，而且夜间自动运行只要有一个错误假设，整个 token 预算就可能白花。Coinbase CEO Brian Armstrong 描述的是另一种纪律：每个团队和代码仓库都有一个 brain，里面装着过往事故、财务控制、A/B 测试和 pull request 历史，agent 在改代码前会先读它。当人类修正 agent 的产出时，这次修正必须回流进 brain，让修复适用于未来所有情况，这才让一次性 pull request 的接受率逐步上升，形成他所说的递归自我改进系统。他的内部 harness 叫 Toshi，能先把一个功能规划成三个阶段、每阶段十个并行 agent 任务，并在播客录制前报告十项全部完成。

**4. Agentic finance 正在从比喻变成真正的基础设施。** 在 No Priors 里，Armstrong 列出了 Coinbase 的三个方向：everything exchange、stablecoin payments，以及他所说的 Agentic Finance。Agent 可以获得自托管钱包和自己的账户，不需要 KYC，因为 agent 没有政府身份证；Coinbase 看到的 agent 电商交易中约有 76% 金额低于 30 美分，低于约 30 美分的刷卡固定最低费用，这让小额交易在经济上不划算。Coinbase 孵化并捐给 Linux Foundation 的 X402 支付协议，现在有 Google、Cloudflare 和 AWS 一起参与。同样的基础能力需求也出现在别处：Box CEO Aaron Levie 说 Box 现在可以挂载到 agent sandbox，让 agent 读写文件；Vercel CEO Guillermo Rauch 说 Tailscale 的 model router 由 Vercel AI Gateway 提供底层支持，并称 AI gateway 就是新的 CDN。

**5. Builders 正在重新思考团队、功劳和注意力应该如何分配。** Zara Zhang 认为「一人公司」被高估了：AI 确实让一个人能做更多事，但从零构建一件新东西可能极其孤独，你需要有人一起头脑风暴、一起扛、一起庆祝；如果没有人和你一起把自己绑在桅杆上，动力非常容易消失。FPV Ventures 合伙人 Nikunj Kothari 观察到，成功的 VC 会为稀少的大额退出争夺功劳，他提醒说真正出力的新兴 GP 往往得不到应有的认可，而创始人本人才是真正的 reference check。Cursor 的 Ryo Lu 强调，为大想法服务的 long-lived agents 现在已经在 Cursor 上线；Peter Yang 则把自己的工作流拆得很清楚：本地定时任务放在 Codex，云端任务迁到 Grok Bot。Y Combinator 的 Garry Tan 主张提供更多、更高的卓越标准，而不是取消标准化考试。

## X / Twitter

### Thibault Sottiaux（OpenAI，负责 Codex 与 ChatGPT）

Sottiaux 说，Astra 在一周内交付了一批产品：Images 2.5、GPT-Live-1、Agents API、Data Agent 和 ChatGPT for Financial Services，后面还有更多计划，而 DevDay 尚未到来。在另一条更新里，他逐项说明了质量问题的修复：为旧模型编写的 skills 触发过于频繁，或让模型无法检查自己的工作；一个可能导致提前中断或回复旧消息的 opt-in 上下文管理实验在影响约 4000 到 5000 名用户后被关闭；一些配置不当、被测量到造成质量下降的引擎也被移除。他还欢迎 Git AI 团队的 Aidan 和 Sasha 加入 OpenAI，称他们的 open-source 工具能帮助开发者理解 coding agents 如何影响代码库，并承诺让 Git AI 继续开源。

- [Thibault Sottiaux 谈 Astra 一周的发布](https://x.com/thsottiaux/status/2098639827084480864)
- [Thibault Sottiaux 谈 reset 与质量修复](https://x.com/thsottiaux/status/2098612714704891959)
- [Thibault Sottiaux 谈 Git AI 团队加入 OpenAI](https://x.com/thsottiaux/status/2098569976143806918)

### Peter Yang

Yang 说，他为自己的 agent 定下了一个清晰的分工：所有本地定时任务放在 Codex，云端任务则迁往 Grok Bot。他也对 software factory 持怀疑态度，认为除了验证和测试，AI 还没到能在没有人类定义需求、检查工作的情况下自我改进产品，或端到端构建新功能的地步。他的依据很实际：每次让任务在夜间自动构建新东西，只要有一个假设错了，整个运行就变成对 token 的浪费。他最后发问：有哪些产品或功能是真的由 software factory 端到端做出来，而且没有人类定义需求或检查工作？

- [Peter Yang 谈本地任务与云端任务的分工](https://x.com/petergyang/status/2098614492066435228)
- [Peter Yang 谈 software factory](https://x.com/petergyang/status/2098565668241334366)

### Madhu Guru（Meta 高级 AI 总监）

Guru 诊断了大多数企业 AI 项目失败的原因。第一个错误是沿用旧时代的 playbook：CEO 指派一位信任的副手来领导中心 AI 团队，再从公司各部门拉来一群信任的人；但过去那套团队结构、产品模式和发布学习方式并不适用于 AI，AI 需要实验和发明。第二个错误是对 evals 投入不足，并不清楚什么才算做好。第三个错误是从外部为公司造 AI：中心平台团队交付的工具与真正做事的人的工作流、上下文和判断脱节，结果只有勉强的采用，没有实质性的生产力提升。他的处方是：招募真正做过 AI 产品的负责人，把 evals 变成一等公民，并把最好的 AI builders 嵌入 finance、sales 和 support，与这些职能一起构建，而不是替它们构建。

- [Madhu Guru 谈企业 AI 为什么失败](https://x.com/realmadhuguru/status/2098448235048378456)

### Thariq（Anthropic，Claude Code）

Thariq 说，如今只看 pass/fail 分数基本无法解读 evals，因为很多 benchmark 失败来自过于严格的隐藏测试，有时模型的答案比预期结果更合理。他还宣布了 plugin evals，回应的是「新模型发布后很难知道 skills 是否还管用」这一反馈，命令是在插件目录里运行 `claude plugin eval init`。

- [Thariq 谈 plugin evals](https://x.com/trq212/status/2098531560643539440)
- [Thariq 谈如何解读 evals](https://x.com/trq212/status/2098490139798655427)

### Amjad Masad（Replit CEO）

Masad 宣布 Replit 收购了一家完全建立在 Replit 之上的业务，并表示这预计只是众多收购中的第一笔。他还介绍了一个新功能：Routines with budgets。

- [Amjad Masad 谈收购一家建立在 Replit 上的业务](https://x.com/amasad/status/2098548464452055437)
- [Amjad Masad 谈 Routines with budgets](https://x.com/amasad/status/2098317466682179643)

### Guillermo Rauch（Vercel CEO）

Rauch 说，Tailscale 的 model router 由 Vercel AI Gateway 作为底层基础设施提供支持，并借此给出一个更宏观的判断：AI gateway 就是新的 CDN。直接回源很脆弱，自己动手又痛苦又昂贵。

- [Guillermo Rauch 谈 AI gateway 是新的 CDN](https://x.com/rauchg/status/2098531157230969062)

### Aaron Levie（Box CEO）

Levie 说，Box 现在可以挂载到 agent sandbox，让 agent 读写自己电脑上的文件变得容易得多。他的框架是：当 AI agents 在企业里执行关键工作流时，它们需要人类早已拥有的那些基础能力。

- [Aaron Levie 谈把 Box 挂载到 agent sandbox](https://x.com/levie/status/2098478938003841123)

### Ryo Lu

Lu 说，为大想法服务的 long-lived agents 现在已经在 Cursor 上线。

- [Ryo Lu 谈 Cursor 里的 long-lived agents](https://x.com/ryolu_/status/2098324260867772806)

### Garry Tan（Y Combinator 总裁兼 CEO）

Tan 主张，SAT 考到 1600 分之后，应该解锁一场更难的第二次考试，在 1600 之上再给一个分数，因为我们应该有更多、更高的卓越衡量标准。他的批评是，取消 SAT 会让一切变成随机抽签，卓越反而无法被识别。

- [Garry Tan 谈更高的卓越衡量标准](https://x.com/garrytan/status/2098615692425851205)

### Zara Zhang（Builder）

Zhang 认为「一人公司」这个概念被高估了。AI 确实让一个人能做更多事，但从零构建一件新东西可能极其孤独，你需要有人一起头脑风暴、一起扛、一起庆祝。她说，如果不和另一个人一起把自己绑在桅杆上，动力非常容易消失。

- [Zara Zhang 谈一人公司](https://x.com/zarazhangrui/status/2098483800456179923)

### Nikunj Kothari（FPV Ventures 合伙人）

Kothari 以「成功有许多父亲，失败却是孤儿」开场，并说直到看见非常成功的 VC 为热门交易争夺功劳，他才真正体会到这句话的分量。由于大额退出和 markups 确实稀少，而它们正是下一支基金募资的依据，他预计未来几年会看到许多名字被抹掉或恰当地省略，因为大家都会改写历史，去认领最终成功的那些项目。他担心的是新兴 GP：他们能带去见未来 LP 的只有自己的业绩记录，却往往得不到应得的认可。他给出的短期建议是：握紧你的创始人，因为他们才是真正的 reference check。

- [Nikunj Kothari 谈功劳归属与新兴 GP](https://x.com/nikunj/status/2098550718923997430)

### Peter Steinberger

Steinberger 向 trycua 提交了一个补丁，让按键在 Linux 下可靠工作，并称这个框架整体很棒。他还展示了 Astra 在 OpenClaw 云会话里通过 computer use 玩 Doom，并开玩笑说这还不算 AGI，但大概比苍蝇的大脑强。

- [Peter Steinberger 谈为 Linux 按键给 trycua 打补丁](https://x.com/steipete/status/2098527982709256637)
- [Peter Steinberger 谈 Astra 通过 CUA 玩 Doom](https://x.com/steipete/status/2098527519213604889)

### Dan Shipper（Every CEO）

Shipper 认为，更好的 benchmark 分数并不能说明模型在你真实工作中的表现。这也是 Every 过去三年坚持对新模型做 vibe check 的原因：基于真实工作进行上手测试的长文评测。如今团队要进一步量化，在 Every 内部搭了一个平台，让每个人都能用自己的日常工作创建个人 benchmark。

- [Dan Shipper 谈 vibe check 与个人 benchmark](https://x.com/danshipper/status/2098481799047647715)

## Podcast

### No Priors: Coinbase's Everything Exchange: Agentic Finance, Stablecoins, and Tokenization with CEO Brian Armstrong

核心结论：agent 经济需要属于自己的金融轨道，而搭建这些轨道的团队，将决定 AI 能否从卡在付费墙前，走到自己付钱办事。

Brian Armstrong 是 Coinbase 的联合创始人兼 CEO。他认为短期内最大的变化不是更聪明的模型，而是一种新的客户：需要完成交易的软件 agent。他说，crypto 轨道对人类很有用，但对 AI 而言将是必需品。在 No Priors 里，他列出了 Coinbase 的三个方向：让所有资产类别在一个地方交易的 everything exchange、能让资金在不到一秒内以不到一美分的成本流向世界任何角落的 stablecoin payments，以及他所说的 Agentic Finance。

数字解释了为什么这些基础设施重要。刷卡支付有大约 30 美分的固定最低费用，再加一定比例，这让低于一美元的交易很难成立；而 Coinbase 看到的 agent 电商交易中，约有 76% 金额低于 30 美分。这些交易大多是 agent 在购买数据，或调用专门化的其他 agent，而不是人在买东西。因此 Coinbase 给 agent 提供自托管钱包和自己的账户，不需要 KYC，因为 agent 没有政府身份证。Armstrong 说：「我们不想让 AI 没有银行账户。如果我们想让 AI 进入银行体系，它们也值得拥有金融服务。」Coinbase 孵化了 X402 支付协议并把它捐给 Linux Foundation，如今 Google、Cloudflare 和 AWS 都在参与。

Armstrong 也在 Coinbase 内部运行这套方法。每个团队和代码仓库都有一个 brain，里面装着过往事故、财务控制、A/B 测试和 pull request 历史，agent 在改代码前会先读它。当人类修改 agent 的产出时，这次修正必须回流进 brain，让修复适用于未来所有情况，这才让一次性 pull request 的接受率不断上升，形成他所说的递归自我改进系统。一个能在播客开录前把一个功能规划好、拉起十个 agent 并行完成十个模块并回报结果的 harness，已经在这样运转。

在 crypto 之外，Armstrong 的另一家公司 New Limit 正在研究表观遗传重编程。它的第一个肝脏项目针对酒精相关肝病，他估计如果成功，这个药本身价值约 200 亿美元，而这只是恢复全身年轻细胞功能的一步。他的长期判断是：带走我们的大多数疾病都与衰老相关，因此逆转这种衰退才是真正值得解决的元问题。

- [No Priors: Coinbase's Everything Exchange: Agentic Finance, Stablecoins, and Tokenization with CEO Brian Armstrong](https://www.youtube.com/watch?v=uLDK4l_-gUE)

## Blog

经过验证的博客 feed 中没有新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
