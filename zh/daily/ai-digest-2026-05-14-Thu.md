[English](../../en/daily/ai-digest-2026-05-14-Thu.md) | [中文](./ai-digest-2026-05-14-Thu.md) | [双语](../../bilingual/daily/ai-digest-2026-05-14-Thu.md)

---

# AI Builders Digest

## 导读
1. Claude Code auto mode 是本期最清晰的信号：agent 工具正在从“每一步都请用户批准”，走向由模型代替人工判断风险的高自主模式，用安全 classifier 承担大部分权限判断。

2. Anthropic 把真正的风险定义为“过度主动”的 agent，而不只是恶意 prompt injection。系统要拦住那些看似相关、但用户并未授权的动作，比如删除、force-push，或触碰超出请求范围的基础设施。

3. Waymo 的 Dmitri Dolgov 在物理世界给出了同一个主题的另一面：产品级自动驾驶不只是更大的模型。他的核心问题是“end to end, and then what else?”，也就是学习系统之外还需要结构化验证、运行时检查和安全文化。

4. Waymo 的数据说明自动驾驶正在从研发阶段进入规模化运营：累计超过 2000 万次 fully autonomous rides，其中 1000 万发生在最近 7 个月；每周超过 400 万英里全自动驾驶，并已在 11 个城市运营。

5. 本期共同主题是“成熟的自主性”。无论 agent 是在改文件，还是车辆在城市中行驶，前沿问题都不再只是 demo，而是验证、信任边界、成本，以及当模型差一点做对时系统如何安全恢复。

## X / Twitter
今天的 feed 中没有新的 X / Twitter 更新。

## Podcast
### Training Data: Waymo's Dmitri Dolgov: 20 Million Rides and the Road to Full Autonomy

核心结论：Waymo 的判断不是“只要 end-to-end 就够了”，而是 learned driving 之外，还必须有验证、规模化和安全底座，才能做成真正的自动驾驶产品。

Dmitri Dolgov 是 Waymo 的联合 CEO，也是长期技术负责人。他把 Waymo 的路径从 DARPA Challenge 时代讲到今天：服务已经在 11 个城市 fully autonomously 运营。最关键的技术观点，是他反对把问题简化成 end-to-end 与工程系统二选一。他的说法很直接："end to end, and then what else?" 对 driver-assist 原型来说，普通 learned stack 也许够用；但如果目标是一个能在数亿英里规模上达到 superhuman safety 的 fully autonomous service，Waymo 还需要 structured intermediate representations、运行时验证、更丰富的训练与评估流程、closed-loop evaluation，以及 reinforcement learning 的 reward 设计。

这些数字已经不像研发叙事，更像运营叙事。Dolgov 说 Waymo 已完成超过 2000 万次 fully autonomous rides，其中 1000 万发生在最近 7 个月；目前每周 fully autonomous 行驶超过 400 万英里。他还提到，在 Waymo 运营的城市里，Waymo driver 在造成严重伤害的碰撞指标上比人类驾驶安全 13 倍以上。按当前规模，这意味着大约每 8 天避免一次严重伤害。

商业侧的变化，是多年顺序式 de-risking 之后进入加速阶段：扩展更多美国城市，加深现有市场，并计划在 London 和 Tokyo 推出国际服务。产品启发很朴素，也有点反潮流：如果安全是基础，它就必须从第一天起影响架构、评估、硬件降本、社区信任和发布节奏。

https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

## Blog
### Anthropic Engineering: Claude Code auto mode: a safer way to skip permissions

Anthropic 发布了 Claude Code auto mode，一种介于频繁人工审批和不安全的 `--dangerously-skip-permissions` 之间的权限模式。核心判断是：审批弹窗会制造疲劳，尤其是在用户最终会接受 93% 请求的情况下。Auto mode 把许多权限判断交给 model-based classifiers，目标是在不打断常规工作的同时，拦住那些危险动作。

它的架构分两层。输入层有 prompt-injection probe，在工具输出进入 agent 上下文之前扫描，并在内容疑似恶意时提醒 agent 重新锚定用户意图。输出层有运行在 Sonnet 4.6 上的 transcript classifier，在工具调用执行前做判断。它先用快速 yes/no filter，再只对被标记的动作进行 chain-of-thought reasoning。classifier 只看用户消息和工具调用，不看 Claude 自己的解释文字或工具输出，这是为了降低 prompt injection 和自我合理化带来的风险。

这篇文章对取舍讲得很坦诚。在真实内部流量上，完整 pipeline 的 false positive rate 是 0.4%；在真实“过度主动”动作上，false negative rate 仍有 17%。Anthropic 的立场不是说 auto mode 能替代高风险基础设施上的人工复核，而是它明显比完全无护栏运行更安全。实际默认设计包括：allowlist 安全工具、项目内文件编辑不经过 classifier、较高风险动作进入 classifier、被拒后继续尝试更安全路径、subagent handoff 检查，以及连续或累计多次拒绝后终止。

https://www.anthropic.com/engineering/claude-code-auto-mode

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
