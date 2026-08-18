[English](../../en/daily/ai-digest-2026-08-19-Wed.md) | [中文](../../zh/daily/ai-digest-2026-08-19-Wed.md) | [Bilingual](./ai-digest-2026-08-19-Wed.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. The trillion-dollar company era is a five-year anomaly.**
Three companies went from near zero to a trillion-dollar market cap in roughly five years, versus the 15 to 20 year arcs of SpaceX and Google. On No Priors, Elad argues that few, if any, more will follow in the next three to five years, because a $50-100B revenue stream per company is a different order of magnitude from a huge TAM, while plenty of $10B companies remain to be built.

万亿美元公司时代是五年一遇的反常现象。过去五年，三家公司从接近零做到万亿美元市值，而 SpaceX 和 Google 都走了 15 到 20 年。No Priors 的 Elad 认为，未来三到五年很难再有公司达到这一量级：单家公司要做到 500 到 1000 亿美元营收，和"市场空间很大"是两个数量级的问题，而百亿美元级的公司仍有很多机会。

**2. The tool layer is sprinting.**
Google VP Josh Woodward listed what's next for Gemini: revamped Workspace tools within 1-2 weeks, tool-calling improvements in 3.7 Flash, a new "Projects" design, and 49 connectors supported. Claude Code is teasing quality-of-life improvements, Vercel's Cursor Origin now deploys straight to Vercel from hosted repos, and OpenAI's Codex team is asking what obvious capabilities are still missing.

工具层正在全力冲刺。Google 副总裁 Josh Woodward 列出了 Gemini 的更新计划：1-2 周内测试重构的 Workspace 工具、3.7 Flash 的工具调用改进、新的 "Projects" 设计，以及 49 个连接器。Claude Code 在预告体验优化，Vercel 的 Cursor Origin 可以直接从托管仓库部署到 Vercel，OpenAI 的 Codex 团队则在问社区还有哪些显而易见的能力没做。

**3. Evals and continual learning are the new frontier.**
Madhu Guru's playbook: make quality measurable, study real traces, encode failure modes, and keep evals mirroring live traffic. Swyx's Continual Learning track covered why GRPO isn't enough and why Trajectory went on-policy. Thariq now believes LLM coding models will beat diffusion models at much creative work.

Evals 与持续学习成为新前沿。Madhu Guru 的建议：先让质量可衡量、研究真实 traces、把失败模式写进评估，并让评估持续对齐线上流量。Swyx 的 Continual Learning 专场讨论了为什么 GRPO 不够、Trajectory 为何转向 on-policy 训练。Thariq 则认为 LLM 编程模型在很多创意工作上会超过 diffusion 模型。

**4. AI-native leverage and data as an asset.**
Aaron Levie argues data is becoming valuable in almost any form and belongs on the balance sheet. Amjad Masad flagged a team with no "AI" in its pitch growing at AI rates with a fraction of the headcount, and says pen testing, not just scanning, is how you secure code. Garry Tan open-sourced his Personal AGI kit for Claude Code and Codex.

AI 原生杠杆与数据资产。Aaron Levie 认为数据几乎以任何形式都变得有价值，理应进入资产负债表。Amjad Masad 提到一支 pitch 里没有 "AI" 字样的团队跑出了 AI 级增速、人员规模只有常规的十分之一，并强调只扫描漏洞不够，还要用渗透测试真正攻破。Garry Tan 开源了面向 Claude Code 和 Codex 的 Personal AGI 工具包。

**5. Moat debates and the rise of brand.**
Nikunj Kothari's viral take: nobody in AI has a moat except the venture firm. His counterpoint: brand marketing becomes the major differentiator and one of the most prized assets, especially once agents are the primary users of most products.

护城河之辩与品牌的崛起。Nikunj Kothari 的爆款观点是：AI 领域除了风投机构，没人有护城河。他同时预测，品牌营销将成为公司最重要的差异化因素和最宝贵的资产之一，尤其是在 agent 成为多数产品的主要用户之后。

## X / Twitter

### Swyx
Swyx pointed to an overview by Trajectory's rronak at his Continual Learning track, covering the main data problems left in continual learning, why GRPO isn't enough, and why Trajectory had to go on-policy and then fix the issues that came with it. He called Trajectory one of the early leaders in the field and praised their "tasteful execution on ambitious goals."

Swyx 在持续学习（Continual Learning）专场推荐了 Trajectory 的 rronak 的分享：他梳理了持续学习领域剩下的核心数据问题，包括为什么 GRPO 不够用、为什么必须转向 on-policy 训练，以及随之而来的各种问题。Swyx 称 Trajectory 是这一领域的早期领先者之一，并称赞他们在宏大目标上"执行得很有品味"。

- [Swyx on Trajectory's continual learning overview](https://x.com/swyx/status/2089393073327653344)

### Josh Woodward — VP at Google
Circling back on requested improvements, Woodward shared what's next for the Gemini experience: revamped Workspace tools are being tested within 1-2 weeks, 3.7 Flash showed tool-calling improvements with more coming, a new "Projects" design is done and being implemented, and 49 connectors (and counting) are supported. Several other requested items are done, including fixes for the biggest over-triggering bugs.

在回应此前用户提出的改进清单时，Woodward 更新了 Gemini 体验的进展：1-2 周内将测试重构后的 Workspace 工具；3.7 Flash 在工具调用上已有改进，后续还有更多；新的 "Projects" 设计已完成、正在实现；目前支持 49 个连接器（还在增加）。其余多项请求已完成，包括修复最严重的过度触发 bug。

- [Josh Woodward's Gemini experience updates](https://x.com/joshwoodward/status/2089520767281324112)

### Boris Cherny — Claude Code at Anthropic
Cherny said "small quality of life improvements like this add up" with more on the way, and asked users what they think of the recent Claude Code change.

Cherny 表示"这样的小体验优化会积少成多"，还有更多在路上，并邀请用户对 Claude Code 最近的改动给出反馈。

- [Boris Cherny on Claude Code quality-of-life improvements](https://x.com/bcherny/status/2089538781909332210)
- [Boris Cherny asking for feedback](https://x.com/bcherny/status/2089537919795212565)

### Thibault Sottiaux — Codex & ChatGPT at OpenAI
Sottiaux asked the community what obvious thing OpenAI should "just do" with Codex, the API, or its models, that is "100% within reach" but still missing.

Sottiaux 问社区：Codex、API 或我们的模型有什么显而易见、"100% 做得到却还没做"的事？

- [Thibault Sottiaux's roadmap question](https://x.com/thsottiaux/status/2089500941842342287)

### Madhu Guru — Senior Director of AI at Meta
Guru's playbook for getting good at evals: take a workflow you know well and make its quality measurable; study the actual traces, meaning the sequence of prompts typical users run and what good responses look like at each step; and capture where the product fails, such as messy tool call responses or missing context. Then make the eval easy to run repeatedly and automatically, and keep it mirroring live traffic as user patterns evolve.

Guru 分享了他做 evals 的方法：找一个你非常熟悉的工作流，想办法让它的质量可衡量；研究真实的 traces，也就是典型用户的一系列 prompt 序列，以及每一步和最终结果应有的样子；把产品失败的环节记录下来，例如混乱的工具调用、上下文缺失等。然后再让 eval 可以重复、自动运行，并持续对齐线上流量的变化。

- [Madhu Guru on evals](https://x.com/realmadhuguru/status/2089480958571331623)

### Thariq — Claude Code at Anthropic
Thariq pointed users to the /design command in Claude Code for design work, and argued that recent procedural-generation art, video-editing, and 3D game demos have updated his view: LLM coding models are better at a lot of creative work than diffusion models. His reasoning is that code is easier to edit, easier to nudge in the direction you want, and easier to export to existing tools.

Thariq 推荐直接在 Claude Code 里输入 /design 来做设计，并表示最近的程序化生成艺术、视频剪辑和 3D 游戏 demo 让他改变了看法：LLM 编程模型在很多创意工作上会比 diffusion 模型更强。理由是代码更容易编辑、更容易朝你想要的方向调整，也更容易导出到现有工具中使用。

- [Thariq on /design in Claude Code](https://x.com/trq212/status/2089529798850969805)
- [Thariq on LLM coding models vs diffusion models](https://x.com/trq212/status/2089415712007938315)
- [Thariq on why code is easier to edit](https://x.com/trq212/status/2089415713098522688)

### Amjad Masad — CEO of Replit
Masad highlighted a team that has no "AI" anywhere in its pitch but shows AI-level growth rates, noting they would need 10x the headcount if they weren't "so AI-pilled." Separately, he argued that scanning code for vulnerabilities isn't enough: "it's important to try to break them with pen testing."

Masad 提到一支 pitch 里完全没有 "AI" 字样的团队，却跑出了 AI 级别的增速，并说如果他们没有这么 AI 化，人员规模会是现在的 10 倍。他还强调，只扫描代码找漏洞不够，"重要的是用渗透测试真正尝试攻破它"。

- [Amjad Masad on AI-native teams](https://x.com/amasad/status/2089525819567739264)
- [Amjad Masad on pen testing](https://x.com/amasad/status/2089435606338416884)

### Guillermo Rauch — CEO of Vercel
Rauch announced that you can now host your repos in Cursor Origin and deploy to Vercel via Cursor Origin, which is itself hosted on Vercel. "And unlike GitHub, it's online," he joked.

Rauch 宣布现在可以在 Cursor Origin 托管你的仓库，并直接从 Cursor Origin 部署到 Vercel（Cursor Origin 本身也托管在 Vercel 上）。他调侃说"不像 GitHub，它是时刻在线的"。

- [Guillermo Rauch on Cursor Origin and Vercel](https://x.com/rauchg/status/2089409162270965858)

### Aaron Levie — CEO of Box
Levie said this is what "data is the new oil" ultimately looks like: AI's thirst for data means we're entering an era where data is valuable almost in any form. In a world of AI, information belongs as an asset on the balance sheet, and how companies manage and mine their organization's intelligence will be a deciding factor for competitiveness and value creation.

Levie 评论说，这就是"数据是新的石油"最终的样子：AI 对数据极度渴求，我们正在进入一个数据几乎以任何形式都有价值的时代。在 AI 的世界里，信息理应作为资产出现在资产负债表上，而企业如何管理和挖掘自身的组织智能，将成为未来竞争力与价值创造的决定性因素之一。

- [Aaron Levie on data as an asset](https://x.com/levie/status/2089499887905997272)

### Garry Tan — President & CEO of Y Combinator
Tan open-sourced his "Personal AGI" kit: a private GitHub repo with 70 of his proven skills and the beginnings of a Karpathy-style knowledge wiki, MIT-licensed and free. It works with an existing Claude Code or Codex subscription, and is meant to set up your agent repo quickly from a new directory.

Tan 开源了他的 "Personal AGI" 工具包：一个包含 70 个经过验证的 skills 的私有 GitHub 仓库，外加一个 Karpathy 风格知识 wiki 的雏形，MIT 许可、完全免费。它可以配合现有的 Claude Code 或 Codex 订阅使用，新建一个目录即可快速搭好你的 agent 仓库。

- [Garry Tan on the open-source Personal AGI](https://x.com/garrytan/status/2089438298540519821)
- [Garry Tan on what you get](https://x.com/garrytan/status/2089425134339961173)
- [Garry Tan on how to use it](https://x.com/garrytan/status/2089424620764168485)

### Nikunj Kothari — Partner at FPV Ventures
Kothari's viral take: no one in AI has a moat, from the models (OpenAI, Anthropic, XAI) to the IDEs, harnesses, app builders, wrappers, inference providers, voice layer, data labeling companies, infrastructure, neoclouds, and generative media, "except the venture firm." Separately, he argued brand marketing will become the major differentiator and one of the most prized company assets, especially if agents become the primary users of most products, and predicted the people who excel at it will be hired as cofounders or given a big seat at the table within the next 10 years.

Kothari 的爆款观点是：AI 领域没人有护城河，从模型（OpenAI、Anthropic、XAI）到 IDE、harness、应用构建器、wrapper、推理服务商、语音层、数据标注公司、AI 基础设施、neocloud 和生成式媒体，"除了风投机构"。他同时预测，品牌营销将成为公司未来最重要的差异化因素和最宝贵的资产之一，尤其是在 agent 成为多数产品的主要用户之后；未来 10 年内，擅长这件事的人会被请去当联合创始人，或至少进入核心决策层。

- [Nikunj Kothari on AI moats](https://x.com/nikunj/status/2089486802356961364)
- [Nikunj Kothari on brand marketing](https://x.com/nikunj/status/2089374392295842086)

## Podcast

### No Priors — Chasing Trillion-Dollar Companies, Founder Ambition, Token Budgets, and Regulatory Capture with Sarah & Elad
**The Takeaway:** In AI time, a year moves like three or four normal years, so the biggest risk for a founder isn't the market, it's spending your most productive years inside a company that should have been sold.

Sarah and Elad, the hosts of No Priors, argue the trillion-dollar company era was a freak inflection: three companies went from roughly zero to a trillion-dollar market cap in about five years, while SpaceX and Google each took 15 to 20 years. Elad's contrarian read: don't expect many more in the next three to five years, because reaching $50-100B of revenue per company is a different order of magnitude from a huge TAM. His mental model is punctuated equilibrium: waves explode, then consolidate, and plenty of $10B companies are still there to be built.

Both are equally contrarian about exits. Because "every year of AI time is like three to four years of normal cycle time," a company's maximum-value window is often just 12 to 18 months, so founders should hold a pre-planned board discussion about selling every six months. Sarah's test: "Are you capturing value as costs fall and capabilities increase?" The real opportunity cost isn't equity, it's time, and the 2020-21 cohort trapped in struggling companies has already missed five years of AI change.

On the labs' manic belief that code will be solved within the year and light RSI follows next year, Sarah is skeptical: researchers have predicted RSI "eighteen months away" every eighteen months for five years, and physical compute access, not algorithms, looks like the real limiter. Compute scarcity also pushes labs toward an enforced oligopoly where the interesting question is return on invested tokens: who gets the budget and why.

On regulation, Elad warns that safety without a risk-reward frame stalls everything. He points to nuclear power, where France still generates 70% of its electricity, versus the US at 18% with no reactor built in 40 years: "we had a safety lobby in the seventies basically kill abundant clean energy for us." His closing argument is a call against regulatory capture, because tech's speed and impact came from staying lightly regulated.

**核心要点：** AI 世界里一年相当于普通周期的三到四年，创始人最大的风险不是市场，而是把自己最有生产力的年华浪费在一家本该卖掉的公司里。

No Priors 主持人 Sarah 和 Elad 认为，万亿级公司时代是历史上一次反常的拐点：过去五年有三家公司从接近零做到万亿美元市值，而 SpaceX 和 Google 分别用了 15 到 20 年。Elad 的反共识判断是，未来三到五年很难再出现多少家万亿公司，因为做到单家公司 500 到 1000 亿美元营收，和"市场空间很大"是两个数量级的问题；相比之下，还有大量百亿美元公司等着被创造。他的历史观是"间断平衡"：一波浪潮爆发，然后进入整合。

两人对"退出"的看法同样反共识。既然 AI 的一年相当于普通周期的三到四年，一家公司价值最高的窗口往往只有 12 到 18 个月，创始人应该每半年开一次预先安排的董事会，理性讨论是否考虑出售。Sarah 的检验标准是："当成本下降、能力上升时，你是否在兑现价值？"真正的机会成本不是股权，而是时间：2020 到 2021 年那批被套在挣扎公司里的创始人，已经错过了五年的 AI 变化。

对于实验室里"今年代码就会被解决、明年就会迎来轻量级 RSI"的狂热预期，Sarah 持保留态度：过去五年里，聪明的研究人员每 18 个月就会预测一次"RSI 还有 18 个月"，这种预测的可信度存疑；物理算力的可获得性可能比算法本身更接近真正的瓶颈。算力稀缺还会让市场趋向寡头化，真正有趣的问题是"token 投入回报"：把预算给谁、为什么。

在监管问题上，Elad 警告，只讲安全、不讲风险收益会拖慢一切。他以核电为例：法国仍有 70% 的电力来自核电，美国只有 18%，而且 40 年没建过新反应堆，"上世纪 70 年代的安全游说团体基本扼杀了我们廉价的清洁能源"。他的结论是：科技之所以发展这么快、影响这么大，是因为监管一直很轻，行业应该抵制监管俘获（regulatory capture），保持这种状态。

- [No Priors episode](https://www.youtube.com/watch?v=6l8oAO_LBx4)

## Blog

The validated feed contained no new qualifying blog posts for this digest period.

本轮验证后的 feed 中没有新的合格博客内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
