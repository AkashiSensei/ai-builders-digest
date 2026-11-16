[English](../../en/daily/ai-digest-2026-11-16-Mon.md) | [中文](./ai-digest-2026-11-16-Mon.md) | [双语](../../bilingual/daily/ai-digest-2026-11-16-Mon.md)

---

# AI Builders Digest

## 导读

在 AI 编程竞赛里，稳定可用正在成为产品能力的一部分。OpenAI 负责 Codex 与 ChatGPT 的 Thibault Sottiaux 表示，Codex 团队可能已经修复了长期困扰用户的“model at capacity”错误。对真正依赖这些工具的开发者来说，模型体验不只取决于 benchmark，也取决于它能否随时响应。

Prompt 设计越来越多地是在纠正模型的默认审美。Peter Yang 转述 Anthropic 的 Nate Parrott 的说法：Claude 每次都在全新上下文中工作，因此会把熟悉的设计当成原创，比如衬线字体、米白背景、橙色，以及卡片边缘的竖条。Claude Design 的做法是明确告诉模型它容易偏向哪些字体和颜色，并要求除非用户主动提出，否则不要使用。

AI 压缩的是制作周期，不一定是采用周期。Parrott 说，Anthropic 现在一到两天就能做出一个原型，而在 The Browser Company 做 Arc 时，每个想法要花几周，之前还有一年的前期制作。真正没有同步压缩的，是把产品交到用户手里，并弄清他们是否会使用。

Guillermo Rauch 的 xeet 展示了一种由 agent 参与的工程方式。这位 Vercel CEO 把它描述为一个用 safe Rust 和 wasm 写成的封闭式、像素级 X 帖子渲染器：不依赖浏览器、网络、文件系统或系统字体，约 1 毫秒就能把帖子渲染成 PNG。一个 Chrome oracle 会校验数万条文本布局规则，CI canary 则持续观察演化，并提交签名 PR 供 agent 处理。

Skill 也可以形成复利。Every CEO Dan Shipper 做了一个用于生成上下文窗口摘要的 skill，并用 autoresearch 反复迭代，直到结果达到他个人品味的 80%，相比没有 skill 的 baseline。他把这次突破归功于 hammer_mt。

Agentic finance 与所有权在 Vlad Tenev 的 Robinhood 路线图中交汇。已有超过 15 万名客户开通 agentic trading 账户，tool calls 达到每天约 3000 万次，Robinhood 还推出了支持 DeFi 的 stock tokens 和 Robinhood Chain。Tenev 把 prediction markets 称为新闻的演进，并认为 Harmonic 的数学超级智能应当让个人也能使用强大的发现工具，而不是把它们锁在集中化的实验室里。

## X / Twitter

### Thibault Sottiaux，OpenAI 的 Codex 与 ChatGPT

OpenAI 负责 Codex 与 ChatGPT 的 Thibault Sottiaux 表示，Codex 团队可能已经修复了让用户头疼的“model at capacity”错误。对每天依赖 Codex 的开发者来说，服务稳定性已经成为产品体验的一部分。

来源：[X 帖子](https://x.com/thsottiaux/status/2122206990101536852)

### Peter Yang，实用 AI 教程与访谈作者

Peter Yang 转述了 Anthropic 的 Nate Parrott 对 Claude 设计趋同的解释。Parrott 说，Claude 会在全新上下文中把熟悉的设计误认为原创：“它会是衬线字体、米白背景、橙色，以及卡片边缘的竖条。” Claude Design 的 prompt 会直接点名模型对某些字体和颜色的偏好，并要求除非用户提出，否则不要使用。Parrott 还提到，他在 Anthropic 现在一到两天就能做出原型，而在 The Browser Company 做 Arc 时，每个想法要花几周；真正没有加速的，是让用户上手并判断他们是否会使用。

来源：[X 帖子](https://x.com/petergyang/status/2122132596352327816)、[X 帖子](https://x.com/petergyang/status/2122060856498524510)

### Guillermo Rauch，Vercel CEO

Vercel CEO Guillermo Rauch 发布了 xeet：一个用 safe Rust 和 wasm 写成的封闭式、像素级 X 帖子渲染器。它不依赖浏览器、网络、文件系统或系统字体，约 1 毫秒即可把帖子渲染成 PNG，Rauch 称其比启动浏览器截图快 100 到 1000 倍，同时保持同样准确。他还把 xeet 描述为一个 autorepo：Chrome oracle 校验数万条文本布局规则，CI canary 观察演化，并提交签名 PR 供 agent 处理。

来源：[X 帖子](https://x.com/rauchg/status/2122184794209714368)

### Dan Shipper，Every CEO

Every CEO Dan Shipper 说，团队最近一直在研究会随着使用不断变好的 compounding skills。他用一个生成上下文窗口摘要的 skill 配合 autoresearch 迭代，最终达到他个人品味的 80%，相比没有 skill 的 baseline。他把这次突破归功于 hammer_mt。

来源：[X 帖子](https://x.com/danshipper/status/2122091033001337134)

## Podcast

### No Priors：Tokenization, Agentic Trading, Harmonic: Robinhood's Mission to Expand Ownership with CEO Vlad Tenev

**核心观点：** Vlad Tenev 希望让所有权像软件一样被广泛分发，用 AI agent 和代币化资产扩大参与，而不是让收益继续集中在少数机构手中。

作为 Robinhood 创始人兼 CEO、Harmonic 联合创始人，Tenev 把 Robinhood 描述为一家围绕“所有权”展开的公司，业务已以不同形式覆盖 120 多个国家。代币化承担全球分发层的角色：股票或私募公司权益仍托管在传统机构，代币则可以在链上转移、拆分和组合。Robinhood Chain 的目标，是让本地金融体系较弱地区的人也能以较低成本获得美国市场敞口。

Agentic trading 的数字最能说明需求。“We're seeing really strong adoption. Like over 150,000 customers have opened AgenTic trading accounts with us in the few months since we've launched it,” Tenev 说。他还提到，tool calls 已达到每天约 3000 万次。Robinhood 的 MCP 和新的 Robinhood Agents 想把对冲基金级别的工具交到个人手中，同时通过独立、沙盒化的账户和默认的交易审批来控制风险。

Prediction markets 则把同样的逻辑延伸到知识：人们应该能直接交易自己的判断，例如某个 AI 模型的排名或一家公司的盈利，而不必借助间接的股票替代品。Tenev 把 prediction markets 称为“新闻的演进”，它既能展示正在发生什么，也能通过赔率显示接下来可能发生什么。

Harmonic 提供了科学版本的获取权论证。它的 Aristotle 模型是国际数学奥林匹克竞赛中三个获得金牌的模型之一，随后被开放给公众处理未解数学问题。Tenev 担心数学 AI 变得“过于集中”；他希望个人也能用这些工具做出发现，而不是只有拥有秘密模型和数据中心的大型实验室才行。

来源：[No Priors](https://www.youtube.com/@NoPriorsPodcast)

## Blog

经过验证的 feed 中没有新的合格博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
