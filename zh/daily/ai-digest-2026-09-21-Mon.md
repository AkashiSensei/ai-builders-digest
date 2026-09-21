[English](../../en/daily/ai-digest-2026-09-21-Mon.md) | [中文](./ai-digest-2026-09-21-Mon.md) | [双语](../../bilingual/daily/ai-digest-2026-09-21-Mon.md)

---

# AI Builders Digest

## 导读

**1. 个人 agent 的竞争已经很拥挤，赢家还远未确定。** 做实用 AI 教程和访谈的 Peter Yang 在一篇长贴里梳理了这个赛道。他最看好 Meta 的 Muse：app 直观，Meta 正在旗下所有产品里大力推广，而且他认为，让 agent 住在一个像 iMessage 这样的现成聊天软件里并不合理。他的判断是，Muse 会成为 Meta 继 Facebook 之后最成功的自研 app，体量远超 Threads。ChatGPT 凭借十亿以上用户仍然是规模上的领先者，Yang 认为 OpenAI 的模型、computer use 和语音在单项能力上或许都强于 Muse，但他指出，用一个产品同时服务工作与生活、企业与消费者，本身就很难。他把 Google 看作黑马：个人 agent 依赖 Gmail、Google Calendar 和 Google 的数据，可他上次查看时，Google 自己的 agent Spark 还只是 Gemini 里的一个次级标签页。

**2. 多人协作是下一个还没人解开的突破口。** Yang 最犀利的一点是，几乎所有大厂大概都在做协作，却没人真正做好。他没法轻松把配偶拉进一个 Muse 对话一起规划假期，也没法把同事拉进 ChatGPT 或 Grok Bot 的线程里，所以今天的 multiplayer AI 基本上就等于在 Slack 里给 bot 打标签。他还提醒，个人 skill 和文件要设计成能在不同 harness 和 agent 之间迁移，否则用户会把一半时间花在工具之间搬家上。他自己的组合刻意保持多元：Muse 做个人任务，Grok Bot 做云上任务，Claude 处理特定场景，ChatGPT 兜底其他一切；他预计这周这些产品会有大更新。

**3. agent 把 QA 变成人类无法匹敌的苦力活。** Vercel CEO Guillermo Rauch 描述了他指出移动端 app 内浏览器的一个渲染问题后，agent 如何好像深入魔多一样去复现、模拟、修复、部署和验证，甚至临时拉起一个 Vercel deployment 丢给 iPhone simulator 测试。他的结论是，人类的迭代强度根本比不上它，未来的软件会达到我们从未体验过的质量和性能。

**4. Coinbase 想给 AI agent 开银行账户。** Coinbase 联合创始人兼 CEO Brian Armstrong 把公司的第三根支柱称为 agentic finance，也就是 AIFi，他的说法很直接：信用卡网络每笔交易大约收 30 美分固定费用再加一定比例，而 Coinbase 看到的 agent 电商交易里约 76% 金额低于 30 美分，这套收费根本行不通。所以 Coinbase 让人把一段 prompt 粘进 agent，它就能通过自托管钱包和加密 rails 开一个自己的金融账户，不需要 KYC，因为正如他所说：「Our AI agents don't have a government ID.」两种模式都有：一种是绑定个人身份、资金隔离的 agentic 账户，另一种是独立的 agent 钱包，可以持有稳定币，甚至还能融资。这些流量很多走的是 X402，这是 Coinbase 孵化并捐给 Linux Foundation 的支付协议，Google、Cloudflare 和 AWS 都在参与。用他的话说：「We don't want the AIs to be unbanked.」

**5. 代币化是「万物交易所」的另一半。** Armstrong 说，所有资产类别都在上链，股票、大宗商品、crypto、永续合约和 prediction market 可以在同一个地方交易，共享流动性和跨保证金。他透露 Coinbase 已经有 88% 的收入来自非比特币交易；其代币化股票产品目前只在美国以外提供，公司正与 SEC 沟通美国路径，它是真正的一比一由托管实物证券支撑的证券，而不是合成品或衍生品。他估计全球大约有 40 亿人完全无法使用券商或美国投资账户，并预计私募信贷、国债和银行存款会沿着股票的路径陆续上链。

**6. 在 Coinbase 内部，目标是给公司装上「大脑」。** Armstrong 描述了他们追求的递归式自我改进：为每个团队、每个服务代码库，甚至每个人建一个「brain」，内容来自事故历史、财务控制、实验和 PR 通过或拒绝的记录。当工程师修正 agent 的改动时，这份上下文会被写回 brain，让修复作用于所有未来场景；他说这样一来，一次通过 PR 的比例会随时间上升。一个被拆成三个阶段、每阶段十项任务的复杂功能计划，被十个并行 agent 执行，第一阶段已经完成待审。他还联合创办了长寿公司 New Limit，由 AI 模型设计下一批表观遗传重编程实验；他说它已经在人源化小鼠模型中恢复了至少一种人类细胞的功能，并计划针对酒精性肝病启动首个临床试验。

## X / Twitter

### Peter Yang: 面向忙碌人群的实用 AI 教程和访谈

Peter Yang 对个人 agent 赛道的「纸上谈兵」分析认为，Meta 的 Muse 有望领先：app 直观，Meta 又在旗下所有产品里大力推广，而且让 agent 住在像 iMessage 这样的现成聊天软件里并不合理。他预计 Muse 会成为 Meta 继 Facebook 之后最成功的自研 app，体量远超 Threads。他仍认为 ChatGPT 凭借十亿以上用户是规模上的领先者，OpenAI 的模型、computer use 和语音在单项能力上或许都强于 Muse，但用一个产品同时服务工作与生活、企业与消费者本身就很难，这也是他改用 Grok Bot 处理工作的原因。在他看来，Grok Bot 是工作工具而非 Muse 的竞争者，只要再加几个功能，就能变成面向 bot 和人类的「多人协作版 agentic Slack」；Google 则是黑马，因为个人 agent 依赖 Gmail、Calendar 和 Google 的数据，尽管 Spark 目前仍只是 Gemini 里的次级标签页。他的第五点是，没有人解决 multiplayer 问题：他没法把配偶拉进 Muse 对话，也没法把同事拉进 ChatGPT 或 Grok Bot 的线程，今天的 multiplayer AI 基本上就是在 Slack 里给 bot 打标签。在后续补充里，他提到 Apple 和 Siri：它们有设备、也有隐私方面的好口碑，但受制于每年一次的大版本发布节奏，又不在用户反馈所在的平台上，Siri 的迭代速度看起来太慢，难以竞争。他自己的组合是 Muse 做个人事务、Grok Bot 做云上任务、Claude 处理特定场景、ChatGPT 兜底其余一切；他建议读者把个人 skill 和文件设计成能在不同 harness 和 agent 之间轻松迁移。

- [Peter Yang: 对个人 agent 赛道的思考](https://x.com/petergyang/status/2101862331345154469)
- [Peter Yang: Apple 和 Siri 本可以赢，但迭代太慢](https://x.com/petergyang/status/2101865476145959373)

### Guillermo Rauch: CEO, Vercel

Guillermo Rauch 说，agent 测试和 QA 软件的彻底程度无人能及。他指出移动端 app 内浏览器的一个渲染问题后，agent 深入魔多去复现、模拟、修复、部署和验证，甚至临时创建一个 Vercel deployment 丢给 iPhone simulator 测试。他的结论是：人类的迭代强度根本比不上它，未来的软件会达到我们从未体验过的质量和性能。

- [Guillermo Rauch: agent 在 QA 上能拼到人类做不到的程度](https://x.com/rauchg/status/2101846262840799251)

### Aaron Levie: CEO, Box

Aaron Levie 对 agent swarm 的一句话判断：「Literally impenetrable from agent swarms」。

- [Aaron Levie: 「Literally impenetrable from agent swarms」](https://x.com/levie/status/2101731574668747081)

### Matt Turck: FirstMark Capital 投资人、MAD Podcast 主持人

Matt Turck 点出了 AI 话题轮换有多快：他开玩笑说，现在所有人都迷上了 Jev，可他记得就在上周中，大家还都在没完没了地聊 Instinct。

- [Matt Turck: 这个行业的热点几天就换一轮](https://x.com/mattturck/status/2101820308009206077)

### Peter Steinberger: OpenClaw 和 OpenAI

在 OpenClaw 和 OpenAI 工作的 Peter Steinberger 宣布，他的 claw 现在可以跟他 FaceTime 了，另外还提到有一个新 benchmark 发布。

- [Peter Steinberger: 「Your claw can now FaceTime you!」](https://x.com/steipete/status/2101748928274419843)
- [Peter Steinberger: 「New benchmark dropped」](https://x.com/steipete/status/2101748820237500557)

## Podcast

### No Priors: Coinbase’s Everything Exchange: Agentic Finance, Stablecoins, and Tokenization with CEO Brian Armstrong

核心结论：Coinbase 联合创始人兼 CEO Brian Armstrong 认为，下一套金融系统会让 AI agent 拥有自己的账户，而他正在搭建服务它们的加密 rails。

Brian Armstrong 是 Coinbase 的联合创始人兼 CEO，他把公司的未来拆成三步：所有资产类别上链，汇入一个「万物交易所」；稳定币支付可以在不到一秒内、用不到一美分的成本把钱送到世界任何地方；以及 agentic finance，公司内部叫 AIFi。信用卡网络每笔交易大约收 30 美分固定费用再加一定比例，而 Armstrong 说，Coinbase 看到的 agent 电商交易里约 76% 低于 30 美分，这就是他要把 agent 搬到加密 rails 上的原因。工具用起来几乎毫不费力：把一段 prompt 粘进 agent，它就能通过自托管钱包开一个自己的金融账户，不需要 KYC，因为正如他所说：「Our AI agents don't have a government ID.」Coinbase 同时支持绑定个人身份、资金隔离的 agentic 账户，以及独立的 agent 钱包，后者可以持有稳定币，甚至还能融资。这些流量很多走 X402，这是 Coinbase 孵化并捐给 Linux Foundation 的支付协议，Google、Cloudflare 和 AWS 都在参与。

这些数字也说明现在有多早。Armstrong 说，目前只有大约半个百分点的全球 GDP 跑在 crypto 上，每月使用的用户大概在 5000 万到 1 亿之间，而他想把这个数字做到十亿。他坚信 agentic 经济体最终会比人类经济体更大，因为 agent 会比人更多，但他不接受稀缺会消失。土地、能源和芯片依然稀缺，所以交换媒介仍然必要：「crypto was really, really good for humans, and it's going to be essential for AI.」

同样的思路也发生在公司内部。Coinbase 正在为每个团队、每个代码库、甚至每个人建一个「brain」，材料来自事故历史、财务控制、实验和 PR 通过或拒绝的记录；当人类修正 agent 的改动时，这份修正会被写回去，作用于所有未来场景。Armstrong 说，这样一来一次通过 PR 的比例会上升。他还联合创办了长寿公司 New Limit，由 AI 模型设计下一批表观遗传重编程实验；他说它已经在人源化小鼠模型中恢复了至少一种人类细胞的功能，并计划针对酒精性肝病启动首个临床试验。

- [No Priors: Coinbase’s Everything Exchange: Agentic Finance, Stablecoins, and Tokenization with CEO Brian Armstrong](https://www.youtube.com/@NoPriorsPodcast)

## Blog

本次运行中通过验证的博客 feed 没有新的合格文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
