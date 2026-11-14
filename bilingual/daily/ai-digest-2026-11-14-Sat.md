[English](../../en/daily/ai-digest-2026-11-14-Sat.md) | [中文](../../zh/daily/ai-digest-2026-11-14-Sat.md) | [Bilingual](./ai-digest-2026-11-14-Sat.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

The most durable shift in this batch is from using agents to improving them. Trajectory co-founder Ronak describes a loop where production traces, evaluation, and deployment feed one another, so a model gets cheaper and better on a specific job instead of being retrained in large batches. The promise is less about one universal model than about many specialized ones.

这批内容里最持久的变化，是从“使用 agent”转向“让 agent 变得更好”。Trajectory 联合创始人 Ronak 描述的是一条把生产 trace、评估和部署连成闭环的路径，让模型针对具体工作变得更便宜、更可靠，而不是依赖大规模批量重训。真正的机会也许不是一个万能模型，而是大量针对具体任务定制的模型。

Evaluation is moving back toward real workflows. Garry Tan compared Opus 5.5 and Fable 5.2 on 52 coding tasks, while Nikunj Kothari warned that benchmarks are no substitute for putting a model inside the work it is meant to improve. Together, they point to a practical standard: reproducible evaluation should sit next to real tasks and real costs.

评估正在回到真实工作流。Garry Tan 用 52 个编码任务比较 Opus 5.5 和 Fable 5.2，同时指出两者在这批任务上的差距并不明显；Nikunj Kothari 则提醒，benchmark 不能替代把模型放进自己的流程里实际使用。两者共同指向同一个判断：可复现的评估必须和真实任务、真实成本放在一起看。

Cost is becoming a first-class model-selection metric. Garry Tan found Fable 5.2 cost 2.80x as much per solved task as Opus 5.5, while the Harvey example in the Trajectory discussion describes a customized model that became six times cheaper and improved accuracy from around 4% for an open source model to around 18%. Rogo is pursuing a similar advantage through token efficiency.

成本已经成为模型选择的一等指标。Garry Tan 提到 Fable 5.2 每解决一个任务的成本是 Opus 5.5 的 2.80 倍，而 Ronak 举出的 Harvey 案例显示，定制模型训练后成本降至六分之一，准确率从开源模型约 4% 提升到约 18%。Rogo 则更关注 token 效率，希望用更少的 token、更低的成本完成同样的金融工作。

Agent infrastructure is becoming a product in its own right. Guillermo Rauch framed Workflow SDK 5 and Vercel Workflows around faster steps, stronger security, reliability, and a reusable durability log. Amjad Masad pointed to Replit's work with Visa on agentic commerce, showing how payments and transactions are becoming interfaces for agent products.

Agent 基础设施正在变成可直接交付的产品。Guillermo Rauch 把 Workflow SDK 5 和 Vercel Workflows 描述为 agent 的重大跃迁，强调首步耗时、步间耗时、安全、可靠性和可复用的持久化日志。Amjad Masad 则提到 Replit 与 Visa 在 agentic commerce 上的合作，说明支付和交易场景正在成为 agent 产品的新接口。

AI is also reaching high-stakes personal work. Peter Yang shared a free skill that turns medical records into a one-page brief and clinical-trial research, while also questioning a report that labeled Alice Huang a spy. The combination matters: capability in real life must be paired with discipline about evidence and sources.

AI 也正在进入高风险的个人场景。Peter Yang 分享了一个免费 skill，可以把病历整理成一页摘要并检索临床试验，同时提醒人们审慎看待关于 Alice Huang 的间谍指控报道。这个组合很重要：一边是 AI 进入真实生活的能力，一边是对证据和来源保持怀疑。

## X / Twitter

### Peter Yang

Peter Yang shared a free `/fuck-cancer` workflow that asks ChatGPT or Claude to turn a folder of patient medical records into a one-page brief, research clinical trials, and do more; he invited people to fork it for other long-term conditions ([tweet](https://x.com/petergyang/status/2121430386685395022)). He also pushed back on reporting about Alice Huang, saying it remains unclear whether she is a spy despite WSJ jumping to conclusions, and cited the Singapore government as evidence ([tweet](https://x.com/petergyang/status/2121430819667579031)). He added that an NVIDIA employee had shared a related account and encouraged readers to do their own research ([tweet](https://x.com/petergyang/status/2121431117526134923)).

Peter Yang 分享了一个免费的 `/fuck-cancer` 工作流：把患者的医疗记录放进文件夹，让 ChatGPT 或 Claude 生成一页摘要、检索临床试验，并完成更多任务；他也邀请大家把这个 skill fork 出来，改造成适用于其他长期疾病的版本（[tweet](https://x.com/petergyang/status/2121430386685395022)）。他还质疑了关于 Alice Huang 的报道，表示尽管 WSJ 草率下结论，目前仍不清楚她是否是间谍，并用新加坡政府的信息作为证据（[tweet](https://x.com/petergyang/status/2121430819667579031)）。他补充说，一位 NVIDIA 员工也分享了相关经历，并鼓励读者自行研究（[tweet](https://x.com/petergyang/status/2121431117526134923)）。

### Amjad Masad

Replit CEO Amjad Masad said the company has had a strong partnership with Visa on agentic commerce and that more features and use cases are coming ([tweet](https://x.com/amasad/status/2121428406764204199)). He also said Replit worked with the owner of the StandWithJensen page, which is built and hosted on Replit, to raise its rate limit so it can scale ([tweet](https://x.com/amasad/status/2121389001546567837)).

Replit CEO Amjad Masad 表示，公司与 Visa 在 agentic commerce 上的合作进展良好，未来还会有更多功能和使用场景（[tweet](https://x.com/amasad/status/2121428406764204199)）。他还说，Replit 与 StandWithJensen 页面的所有者合作提高了 rate limit，这个页面由 Replit 构建和托管，现在应该可以承受更大流量（[tweet](https://x.com/amasad/status/2121389001546567837)）。

### Guillermo Rauch

Vercel CEO Guillermo Rauch called Workflow SDK 5 and Vercel Workflows "a monumental step forward for agents" ([tweet](https://x.com/rauchg/status/2121277727940776114)). He highlighted faster time to first step and time between steps, stronger encryption and security, reliability proven at massive scale and across disaster-recovery scenarios, and a reusable durability log for any agent harness named durable-harness.

Vercel CEO Guillermo Rauch 称 Workflow SDK 5 和 Vercel Workflows 是“agent 的一次重大跃迁”（[tweet](https://x.com/rauchg/status/2121277727940776114)）。他提到首步耗时和步间耗时大幅改善，加密与安全进一步加强，系统可靠性已经在大规模场景和多种灾难恢复场景中得到验证，并且把底层持久化日志做成了可供任何 agent harness 复用的 durable-harness。

### Garry Tan

Y Combinator President and CEO Garry Tan recommended keeping Opus 5.5 as the default coding model in Claude Code, based on 52 coding tasks run in Claude Code 2.1.322 ([tweet](https://x.com/garrytan/status/2121464508225053153)). He said Fable 5.2 and Opus 5.5 solved a similar share of those tasks, 82.7% versus 84.6%, but Fable cost 2.80x as much per solved task; because Opus already solves most of them, he expects harder tests will be needed to separate the two. He also shared an open-source harness evaluation repository with the findings ([tweet](https://x.com/garrytan/status/2121463161069228382)).

Y Combinator 总裁兼 CEO Garry Tan 建议继续把 Opus 5.5 作为 Claude Code 的默认编码模型，依据是 Claude Code 2.1.322 中运行的 52 个编码任务（[tweet](https://x.com/garrytan/status/2121464508225053153)）。他说 Fable 5.2 和 Opus 5.5 的任务解决率非常接近，两者分别为 82.7% 和 84.6%，但 Fable 每解决一个任务的成本是 Opus 的 2.80 倍；由于 Opus 已经能解决其中大多数任务，要进一步区分两者需要更难的测试。他还分享了一个开源 harness 评估仓库及发现（[tweet](https://x.com/garrytan/status/2121463161069228382)）。

### Nikunj Kothari

Nikunj Kothari, a partner at FPV Ventures, argued that benchmark-maxxing is back and that there is no substitute for trying models inside the workflows they are meant to improve ([tweet](https://x.com/nikunj/status/2121320899161010360)). He said only a very small number of benchmarks truly matter, while much of the rest is posturing, hill climbing for marketing, or a tactic that works for some companies but will not last.

Nikunj Kothari，FPV Ventures 合伙人，认为 benchmark-maxxing 又回来了，并表示没有任何东西可以替代在真实工作流中测试模型（[tweet](https://x.com/nikunj/status/2121320899161010360)）。他说真正重要的 benchmark 非常少，其余大多是姿态、为了营销而刷榜，或者只对少数公司有效但无法长期持续的做法。

## Podcast

### A Model For Everyone: How Ronak From Trajectory Is Building Products For Continual Learning

**The Takeaway:** The next durable advantage in AI is not a single frontier model, but a tight loop that turns real production traces into cheaper, more reliable models for specific work.

**核心观点：** AI 下一个持久优势不是某个单一的前沿模型，而是一条把真实生产 trace 转化为更便宜、更可靠的专用模型的紧密闭环。

Trajectory co-founder Ronak argues that today's agents are only in "pseudo continual learning": they can perform a task, but they do not accumulate experience. The road-trip analogy is useful. Batch retraining is like picking up paper maps from AAA, while true continual learning should work more like Google Maps, where every route updates the system for the next trip. Trajectory packages training, evaluation, and deployment into a one-click workflow built around agent traces and a definition of what good looks like ([episode](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8)).

Trajectory 联合创始人 Ronak 认为，今天的 agent 只处在“伪持续学习”阶段：它们能完成任务，却不会积累经验。公路旅行的类比很直观。批量重训就像去 AAA 拿纸质地图，而真正的持续学习应该更像 Google Maps，每走一条路线，系统都会为下一趟更新信息。Trajectory 把训练、评估和部署打包成一个一键工作流，核心输入是 agent trace 以及对“什么算好”的定义（[episode](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8)）。

Early customers show why the loop matters. Harvey trained a model that was six times cheaper and moved accuracy from around 4% for an open source model to around 18%, while Rogo focused on cutting token use severalfold. NVIDIA also uses the platform. Ronak says the hard parts are recreating environments and supplying rewards, especially for legal or finance work where no perfect verifier exists. Trajectory is exploring group-size-one training that can learn from individual rollouts rather than replaying the same environment many times, plus a meta-grader that learns from a densely labeled subset of 100 traces and applies it to 10,000.

早期客户说明了这条闭环为什么重要。Harvey 训练出的模型成本降至六分之一，准确率从开源模型约 4% 提升到约 18%；Rogo 则专注于把 token 用量降低数倍。NVIDIA 也在使用这个平台。Ronak 说，真正的难点是重建环境和提供 reward，尤其是法律、金融这类没有完美验证器的场景。Trajectory 正在探索 group size one 训练，让模型从单次 rollout 中学习，而不必多次重放同一环境；同时还在研究 meta grader，用 100 条密集标注的 trace 学习判断标准，再应用到 10,000 条 trace 上。

The larger opportunity is specialization: bridging plentiful model intelligence with plentiful domain experience. Ronak argues that only about 1% of enterprises have adopted AI so far. His goal is to make customization accessible enough to reach the other 99%. As he puts it: "The final stage of continual learning is something more like Google Maps, where every single time you're driving, every route that you make, it is updating."

更大的机会在于专业化，也就是把大量模型智能与真实世界的丰富领域经验连接起来。Ronak 说，目前只有约 1% 的企业真正采用了 AI，他的目标是把定制能力做到足够易用，从而覆盖剩下的 99%。用他的话说：“持续学习的最终阶段更像 Google Maps，你每一次驾驶、每一条路线，都会让系统更新。”

## Blog

The validated blog feed contained no new qualifying items for this run.

本次通过验证的博客 feed 中没有新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
