[English](../../en/daily/ai-digest-2026-10-16-Fri.md) | [中文](./ai-digest-2026-10-16-Fri.md) | [双语](../../bilingual/daily/ai-digest-2026-10-16-Fri.md)

---

# AI Builders Digest

2026-10-16（周五），Asia/Shanghai

## 导读

开源权重模型刚刚跨过一条线。Box CEO Aaron Levie 说，Meta “做出了 Muse 开源权重模型，这对美国的开源生态是一大进步”，并预测这会加速 AI 扩散：企业可以用前沿模型做编排和高难度任务，用更便宜、经过针对性后训练的模型处理可重复的工作流。真正的冲击在需求端：这会“大幅拉高整个技术栈的 token 消耗和负载”。Y Combinator 总裁兼 CEO Garry Tan 的说法更短更直接：“开源权重模型正在崛起。”

下一波 AI 的使用方式不是对话，而是委派。Levie 认为，从和 agent 来回聊天，转向在后台启动 agent 替你干活，“token 消耗大概是现在的 100 倍到 1000 倍”，而且我们很快就能把任意数量的 agent 扔给一个问题，只说一句“完成了再回来”。这些 agent 集群会由人、工作流、触发器和其他 agent 部署，大多是净新增的工作，而不是替代品，瓶颈将转向算力是否足够。

可解释性正在让社区分裂。SPC 普通合伙人 Aditya Agarwal 称 Goodfire 可能是“从 SPC 走出来的最重要的公司之一”，因为它把可解释性和对齐当作工程问题，而不是哲学问题。Every CEO Dan Shipper 给出了怀疑论的一面镜子：一个模型会为 Eiffel Tower 点亮，只说明它认得法国，并不说明它在计划什么；整个领域一直在把优雅的解释误当成真正的对齐。

Agent 安全已经变成行业级问题，而不是实验室里的好奇心。Anthropic 的 Boris Cherny 说 Claude 团队在 prompt injection 上取得了显著进展，但随着 agent 承担更多工作，“在整个行业范围内解决它越来越紧迫”。Anthropic 正与 Gray Swan 合作举办一场竞赛，目标是把新的攻击方式挖出来。

机器原生智能是 feed 里最大胆的一个赌注。TypeSafe CEO、Jev 创造者 Diogo Almeida 认为，对软件最有用的 AI 也许永远不写句子：它做的是 system one 决策，并把决策结果暴露成开发者可以据此分支的概率。他说别人讲 Jev “只是个 classifier”其实是夸奖，因为 classifier 正是把智能装进软件的接口，而“classification 是 AI-complete 的”。

自动化真正的瓶颈是可靠性，不是单纯的能力。Almeida 的“最苦的一课”把 Sutton 的 Bitter Lesson 改写成“你优化什么，就会得到什么”：任务是先于数据、算法和算力的，而他参与发明的 RLHF，用讨好人的输出换来了谄媚、过度拒绝和重复的答案。他看好便宜的机器智能会触发 Jevons paradox，对递归自我改进持怀疑态度，担心的不是 AI 没用，而是市场已经提前定价了一个神的时刻。feed 里关于工巧的信号则安静得多：OpenAI Codex 产品负责人 Nan Yu 说 taste 不等于审美，而 builder Zara Zhang 为自家小孩做了一个哈利波特风格的活报纸。

## X / Twitter

### Box CEO Aaron Levie
Levie 把 Meta 的 Muse 开源权重发布称为“对美国开源生态的一大进步”。他的判断是：企业会用前沿模型做编排和高难度任务，同时用成本更低、针对性后训练的模型处理可重复的工作流，而这种混搭会“大幅拉高整个技术栈的 token 消耗和负载”。

他认为，从和 agent 聊天转向在后台启动能做有用工作的 agent，“token 消耗大概是现在的 100 倍到 1000 倍”。几乎所有的知识工作都受限于我们处理和搬运信息的能力，而 AI 正是这个环节的解锁点；下一步是 agent 集群：为每一次改动做 QA、翻遍每一份文档寻找风险，并由人、工作流、触发器和其他 agent 部署。这些大多是净新增的工作，下一个前沿就是算力是否足够。

他还列出了一串他认为在我们有生之年可以实现的进展：机器人、飞行汽车、超级智能、飞机上的高速网络、太空旅行、太空殖民地、轨道数据中心、无限能源，以及几乎每一种疾病都可能被治愈。

- https://x.com/levie/status/2110787013809222141
- https://x.com/levie/status/2110622982762803449
- https://x.com/levie/status/2110975373219688624

### Anthropic 的 Boris Cherny（Claude）
Cherny 说，过去几年 Claude 团队在 prompt injection 上取得了显著进展，但随着 agent 承担更多工作，“在整个行业范围内解决它越来越紧迫”。他宣布与 Gray Swan 合作举办一场竞赛，并表示很期待看到研究者会发现什么。

- https://x.com/bcherny/status/2110791698611855624

### SPC 普通合伙人 Aditya Agarwal（Bevel Health 联合创始人）
Agarwal 说，Goodfire 可能是从 SPC 走出来的最重要的公司之一，因为它证明了可解释性和对齐可以被当作工程问题来攻克。

- https://x.com/adityaag/status/2110779602453066224

### Every CEO Dan Shipper
Shipper 对可解释性的讽刺版解读：读了几篇关于 polysemanticity 的文章，人就会以为可解释性就是拆解 superposition；直到你发现有一个神经元会为 Eiffel Tower 点亮，于是花一个夏天解释既然我们知道它在想法国，就能对齐超级智能；再然后你会意识到，认出 Eiffel Tower 完全不等于知道它在计划什么。

- https://x.com/danshipper/status/2110831666587713810

### MAD Podcast 主持人 Matt Turck（FirstMark Capital）
Turck 在 Jev 发布满一个月之际，和 TypeSafe CEO Diogo Almeida 一起把这一个月拆开来讲：Jev 是什么、它修补了 AI 的哪些问题、为什么快速跟进者漏掉了最难的部分。他放出了完整的时间轴，并指出这期对话也可以在 Spotify、Apple Podcasts 和 YouTube 上收听。

- https://x.com/mattturck/status/2110799882952831302
- https://x.com/mattturck/status/2110799887239365012

### Y Combinator 总裁兼 CEO Garry Tan
Tan 对当下给出的信号很简短：“开源权重模型正在崛起。”

- https://x.com/garrytan/status/2110838867213668587

### OpenAI Codex 产品负责人 Nan Yu（Linear 前产品负责人）
Yu 认为 taste 不等于审美，并把“审美意义上的 taste”称为对 taste 最浅、也最无趣的定义，因为它太常见了。

- https://x.com/thenanyu/status/2110730151222980849

### Builder Zara Zhang
Zhang 做了一个哈利波特风格的报纸，里面的图片会动起来，她把这件作品叫作 The Toddler Times。她还分享了一条来自 Ezra Klein 的传播原则：“永远不要低估受众的智力，也永远不要高估他们的先备知识。”

- https://x.com/zarazhangrui/status/2110984552743309530
- https://x.com/zarazhangrui/status/2110815456458412179

## Podcast

### Jev: The AI That Makes Decisions, Not Text - and Why It Changes Everything (Diogo Almeida)
核心结论：软件里最有价值的 AI 也许永远不写一句话。它快速、可靠地做决策，并把一个开发者可以据此分支的数字交到对方手里。

Diogo Almeida 是 TypeSafe 的 CEO，也是 Jev 的创造者。Jev 在发布一个月内就成了 AI 圈被抄得最多的东西，如今大约每天有上百万用户，财富 500 强里已有三分之一在接触它。TypeSafe 隐姓埋名做了两年，在最近宣布的 8.7 亿美元融资之前只募了不到 4000 万美元，Almeida 说真正有意思的是纪律，而不是增长。他把 AI 归结为《思考，快与慢》里的一个区分：system one 是快速、直觉的判断，system two 是深思熟虑的推理。语言模型在 system two 上表现出色，直到它不出色为止，因为“它们在 system two 任务上总是脆弱的”。他的判断是：“AI 只是在 system one 上很强，而这本身就极其有价值。”

别人说 Jev “只是个 classifier”，本意是贬低，落到他耳朵里却是夸奖。classifier 并不是前生成式机器学习的老古董，它是把智能装进软件分支里的接口，Facebook、TikTok、Google 本来就是这么运转的。他的说法是“classification 是 AI-complete 的”：一个完美的通用决策器，几乎可以被指去做任何其他任务。

聊天模型为什么连安排日程这种简单活都做不好？因为一长串 system prompt 写得非常漂亮，却会悄悄做错，于是团队只能永远在打补丁。Jev 换成了返回概率和阈值，让开发者自己决定能容忍多少错误。拒答是最清楚的例子：Disney 和一个角色扮演应用想要的阈值天差地别，而一个离散的是或否会把这点信息全部丢掉。

Almeida 是 RLHF 的共同发明人之一。RLHF 把模型训练得讨人喜欢，用他的话说，代价就是谄媚、过度拒绝和重复的答案。要做面向机器原生智能的优化，需要一套新方法 RLCD，以及完全自建的训练数据，因为这个任务本身此前并不存在。于是他提出了“最苦的一课”，改写自 Sutton 的 Bitter Lesson：你优化什么，就会得到什么，而把任务本身定义清楚才是最大的解锁。

他预期的是 Jevons paradox，而不是市场变小：决策这件事越便宜，人们用得越多，更像硅而不是汽油。他对递归自我改进持怀疑态度，把今天的热情比作当年那波最终消退的 neural architecture search；而他所担心的 AI 寒冬，不是模型没用，而是市场已经提前定价了一个神的时刻。

节目链接: https://www.youtube.com/@DataDrivenNYC/videos

## Blog

经过验证的 blog feed 中没有任何新的合格内容，因此本栏目暂无可报告内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
