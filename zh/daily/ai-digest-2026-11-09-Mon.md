[English](../../en/daily/ai-digest-2026-11-09-Mon.md) | [中文](./ai-digest-2026-11-09-Mon.md) | [双语](../../bilingual/daily/ai-digest-2026-11-09-Mon.md)

---

# AI Builders Digest

## 导读

Box CEO Aaron Levie 认为，AI 正从“产出速度大致等于你和它来回聊天速度”的阶段，进入“把一个问题交给一组 agent，让它们完成任意规模工作”的阶段。Agent swarm 和并行分发，可以把 20% 到 50% 的生产力提升，变成没有明显上限的提升。这个变化先从编程开始，正在延伸到网络安全、科学、生命科学，以及任何可以把基于电脑的工作并行化的领域。更深一层的变化是，算力成为团队可以灵活调用的变量，过去“花的时间越多，产出越多”的假设正在被打破。

在 OpenAI 负责 Codex 产品的 Nan Yu 主张，应该选择“最笨但能工作”的架构和设计，而不是“最简单”的方案。他说，简单是迭代出来的结果，而聪明会让用户也必须一样聪明，才能理解你的聪明。他还认为，当你知道自己要做什么时，AI 让软件变得容易得多；当你不知道时，AI 会让它难得多。没有清晰度，团队会交付一堆垃圾，还为此花掉很多钱。YC 总裁兼 CEO Garry Tan 补充说，一旦前沿模型让软件变得容易修改，现有的 bug 就会变得有点难以忍受，个人化的即时软件也显得不可避免。

在斯坦福教授 Modern Software Developer、同时担任 Monaco AI 负责人的 Mihail Eric，正在围绕 harness 的内部机制刷新 AI 原生工程教育。他的课程让学生用大约 200 行代码从零构建一个 coding agent，然后拦截一个最先进 agent 的请求，查看它的 system、plan 和 compaction prompt。课程还会讲到规模化 context engineering、工具设计与 MCP、agent 配置、agent-ready 代码库、agentic code review 和安全。他的直白判断是，“the floor is much higher”：训练有素的 AI 原生工程师可以非常有价值，但前提是有足够的软件工程基础，能够思考架构、取舍和验证。

Eric 给团队的操作建议是，“you buy to learn and you build to keep”。Monaco 会在成熟产品确实有价值时购买，比如用 Devin 做 code review；当市场无法满足自己的基础设施需求时，就自己构建，包括 Monocoder 后台 agent 平台和 Hal Slack bot。他对 skill 泛滥同样保持怀疑：大多数 skill 写得不好，会在错误的时候触发，需要定期清理；不过，能够承载组织知识的 skill 可能活得更久。他还预计 platform engineer 会越来越重要，因为它掌握着 agent 运行所依赖的云、开发者体验和安全边界。

Builder Zara Zhang 几乎不再使用“vibe coding”这个词，因为它带有负面含义，暗示产出没有投入多少努力或灵魂，只是 AI slop。她认为，人们在使用 AI 编程工具时，同样可以投入心血，这两件事并不矛盾。她还说，做产品的快乐，来自技术行为的可预测性与人类行为的不可预测性之间的碰撞。

Vercel CEO Guillermo Rauch 用 WebGL2 和 Web Audio 做了一个唱片机的物理模拟。它把一首歌转换成凹槽的物理形状，再让模拟唱针每秒 384,000 次沿着槽壁运动，爆裂声、噼啪声、wow 和 flutter，以及内圈音轨变闷，都是模拟自然产生的结果。FPV Ventures 合伙人 Nikunj Kothari 则认为，在旧金山认识有趣的人，靠的是展示你的作品，而不是要求“networking”或“pick your brain”。一封用心的 cold email、一条五行的精准 DM、一个已经上线的 side project，或者一个你组织的 meetup，都算数；他说，即使是最忙的人，只要你给出理由，也能挤出 15 分钟。

## X / Twitter

### Nan Yu

在 OpenAI 负责 Codex 产品的 Nan Yu 主张，应该选择“最笨但能工作”的架构和设计，而不是“最简单”的方案。他说，简单是迭代出来的结果，而聪明意味着用户也必须一样聪明，才能理解你的聪明。他还认为，当你知道自己要做什么时，AI 让软件容易得多；当你不知道时，AI 会让它难得多。没有清晰度，团队会交付一堆垃圾，还为此花掉很多钱。([post](https://x.com/thenanyu/status/2119493015190249556)) ([post](https://x.com/thenanyu/status/2119462979179892925)) ([post](https://x.com/thenanyu/status/2119462224721002560))

### Guillermo Rauch

Vercel CEO Guillermo Rauch 用 WebGL2 和 Web Audio 做了一个唱片机的物理模拟。它把一首歌转换成凹槽的物理形状，再让模拟唱针每秒 384,000 次沿着槽壁运动；爆裂声、噼啪声、wow 和 flutter，以及内圈音轨变闷，都是模拟自然产生的结果。转换后的歌曲属于公有领域或 CC 授权，他也给出了代码链接，方便别人 remix 和重新部署。([post](https://x.com/rauchg/status/2119536313712230802))

### Aaron Levie

Box CEO Aaron Levie 认为，AI 正从“产出速度大致等于聊天来回速度”的阶段，进入“把问题交给 agent，让它们完成任意规模工作”的阶段。Agent swarm 和并行分发，可以把 20% 到 50% 的生产力提升，变成没有明显上限的提升，先从编程开始，再延伸到网络安全、科学、生命科学，以及任何可以把基于电脑的工作并行化的领域。他还说，builder 应该每三到六个月重新检查一次“现在能做什么”，因为最近在 computer use、工具使用、减少 context rot、推理、多模态和领域专业能力上的进步，让 agent 可以使用现有的 API 和系统，而不是从零生成一切。([post](https://x.com/levie/status/2119592025440092192)) ([post](https://x.com/levie/status/2119502716770902234))

### Garry Tan

YC 总裁兼 CEO Garry Tan 说，他的 gstack-evals 项目尝试复现一篇 Jev Engineering 文章，结果发现文章可以复现，而 particle-1 的表现更好。他认为，一旦前沿模型让软件变得容易修改，现有的 bug 就会变得有点难以忍受，个人化的即时软件也显得不可避免。他的结论是：“You're really going to want your own software factory.” ([post](https://x.com/garrytan/status/2119624260675350605)) ([post](https://x.com/garrytan/status/2119615647592395037)) ([post](https://x.com/garrytan/status/2119612084220842483))

### Zara Zhang

Builder Zara Zhang 几乎不再使用“vibe coding”这个词，因为它暗示产出没有投入多少努力或灵魂，只是 AI slop。她认为，人们在使用 AI 编程工具时，同样可以投入心血，这两件事并不矛盾；她想要一个更好的说法。她还说，做产品的快乐，来自技术行为的可预测性与人类行为的不可预测性之间的碰撞。([post](https://x.com/zarazhangrui/status/2119592080318341128)) ([post](https://x.com/zarazhangrui/status/2119342420412510686))

### Nikunj Kothari

FPV Ventures 合伙人 Nikunj Kothari 说，在旧金山认识有趣的人，靠的是展示你的作品，而不是要求“networking”“synergies”或“pick your brain”。一封用心的 cold email、一条五行的精准 DM、一个已经上线的 side project，或者一个你组织的 meetup，都算数。他说，即使是最忙的人，只要你给出理由，也能挤出 15 分钟。([post](https://x.com/nikunj/status/2119670529254981756))

## Podcast

### Latent Space：百万 AI 工程师特别节目，斯坦福如何教授 AI 原生工程，对话 Mihail Eric（Monaco）

节目链接：[观看](https://www.youtube.com/watch?v=dpY7YzZo4kE)

**核心观点：** AI 原生工程提高的是初级工程师必须达到的下限，而不是降低门槛。

Mihail Eric 在斯坦福教授 Modern Software Developer，同时是 Monaco 的 AI 负责人。他的课程先让学生用大约 200 行代码从零构建一个 coding agent，再通过代理拦截请求，查看一个最先进 harness 内部的 prompt。重点不是崇拜某个工具，而是让整台机器变得可理解：规模化 context engineering、工具设计、MCP、compaction、sub-agent、agent-ready 代码库、code review 和安全，都是设计决策，而不是厂商功能。

Eric 最直白的判断是，“the floor is much higher”。训练有素的 AI 原生工程师可以成为公司里最有用的资产之一，但前提是有足够的软件工程基础，能够思考架构、取舍和验证。否则，一句 prompt 生成几万行代码，只会让 builder 跟不上系统，而写代码已经比理解代码容易得多。他建议每天花十分钟做实验，而不是试图追上每一个新工具。

他给团队的操作哲学是，“you buy to learn and you build to keep”。Monaco 会在成熟产品存在时购买，比如用 Devin 做 code review；当市场无法满足基础设施需求时，就自己构建，包括 Monocoder 后台 agent 平台和 Hal Slack bot。安全也是同一套逻辑：每一个依赖都是攻击面；但他也提醒，全部自己重写，会用第三方的审视换取自己的盲区。

更大的目标是 software factory：一台制造机器的机器，人类集中在 intent 和 review 上。Eric 预计 platform engineering 会变得更重要，而不是更不重要，因为它掌握着 agent 运行所依赖的云、开发者体验和安全边界。他给想脱颖而出的学生的建议很具体：做 benchmark 和 eval，写严谨的工程博客，尝试足够有野心的项目，证明自己能够执行。

## Blog

经过验证的 feed 中没有新的合格博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
