[English](../../en/daily/ai-digest-2026-10-25-Sun.md) | [中文](./ai-digest-2026-10-25-Sun.md) | [双语](../../bilingual/daily/ai-digest-2026-10-25-Sun.md)

---

# AI Builders Digest

## 导读

今天最值得注意的判断，是 AI 的下一层价值可能不在生成文字，而在决策基础设施。TypeSafe CEO Diogo Almeida 认为，JEV 面向 machine native、system one 的模型可以把经过校准的概率变成可组合的软件积木，可靠性比漂亮文本更重要。

Guillermo Rauch 把模型管理看成校准问题。优秀的 builder 知道什么时候该多加指导，什么时候该让模型用自己的判断超越人类，而模型使用的 engineering vernacular，例如 provenance、evidence，也说明这项工作越来越像调试和验证。

Aaron Levie 预计网络安全会变成 agent swarm 的问题。风险数量和暴露面增长得比人类安全团队更快，这给能够测试攻击、读取日志并调用各类安全工具的 agents 留出了空间。

产品经验正在从新鲜感转向可持续行为。Peter Yang 对 Once 的观察说明，每日仪式、轻量奖励和有意义的里程碑，能把一个应用变成长期习惯。

人的部分仍然决定差异。Ryo Lu、Aditya Agarwal 和 Nikunj Kothari 都把有价值的挣扎、线下关系和判断力，视为不应该被自动化掉的能力。

## X / Twitter

### Guillermo Rauch

Vercel CEO Guillermo Rauch 认为，最重要的 AI 能力是校准到底要给多少指导。控制太多，模型的能力用不出来；控制太少，模型可能跑偏、带入错误偏见或漏掉上下文。他还注意到，模型生成的工程语言常出现 gate、evidence、culprit、durable、provenance、contract 这类词，它们都指向调试和取证式工作。他甚至提出，为了提高生产力，也许根本不需要 simplified technical English 那大约 900 个批准词汇，而是可以有一套小得多的 minimum viable English。

来源：[X 帖子](https://x.com/rauchg/status/2114085432749347086) | [X 帖子](https://x.com/rauchg/status/2114164830403989880)

### Aaron Levie

Box CEO Aaron Levie 预计，很快会有比今天多约 1,000 倍的 token 流经 cyber agents。随着库、工具、基础设施和代码不断扩大攻击面，他认为大多数公司都很难用人类团队跟上新增风险的数量。他看好的方向是 agent swarms，让它们并行调用安全工具、测试各种攻击变体、读取日志并评估企业数据的风险，机会覆盖身份、防火墙、网络、代码扫描和数据保护。他认为，长时运行的 agents、computer use 和更深入的网络安全训练，最近才让这件事变得可行。

来源：[X 帖子](https://x.com/levie/status/2114187326406766604)

### Ryo Lu

设计师 Ryo Lu 提醒，AI 可能抹掉那些曾经教会早期 builder 识别糟糕设计或顽固 bug 的难度。他仍然用这些工具做出了更多东西，但担心看似完整的结果会让人忽略自己从未学会提出的问题。他的平衡点是协作：和人一起工作并不舒服，但正是这种摩擦，让人学会该信任谁、什么时候慢下来，以及什么是只有一起才能做出来的。

来源：[X 帖子](https://x.com/ryolu_/status/2114187405251219954)

### Aditya Agarwal

SPC General Partner、Bevel Health 联合创始人 Aditya Agarwal 说，成为“max AI pilled”之后，他反而更珍惜和家人朋友在线下相处的时间。他的建议是让 agents 去忙，同时给和朋友跳舞、带孩子去公园、庆祝人类留出空间。

来源：[X 帖子](https://x.com/adityaag/status/2114135237806760097)

### Peter Yang

Peter Yang 用 Once 举例，说明一个学习产品如何形成长期习惯。他和四岁孩子已经连续使用这个阅读应用几个月，原因包括每天必须和孩子一起学习的仪式、每节课后拍搞怪照片这样的轻量游戏化，以及完成 30 节课后寄来实体书、让孩子自己阅读的里程碑。他说孩子现在至少有时会主动选择这些书，而不是 YouTube 和手机，并说明这条推荐没有赞助。

来源：[X 帖子](https://x.com/petergyang/status/2114042708105060501)

### Nikunj Kothari

FPV Ventures partner Nikunj Kothari 说，有一篇帖子准确表达了他所说的从 context 到 harnesses 再到 judgment 的演进。他也邀请在这个方向做产品的 builder 一起交流想法。

来源：[X 帖子](https://x.com/nikunj/status/2113994081345126486)

## Podcast

### Jev: The AI That Makes Decisions, Not Text - and Why It Changes Everything (Diogo Almeida)

**核心结论：** 下一波自动化比拼的可能不是更长的聊天输出，而是便宜、可校准、能被软件可靠组合的决策。

TypeSafe CEO Diogo Almeida 认为，AI 最大的商业机会不是再做一个聊天界面，而是让 machine native intelligence 进入软件内部。JEV 面向 system one 决策，输出概率，让代码可以分流、设阈值并继续组合。面对“这不就是 classifier”的质疑，他说这几乎是赞美：classifier 本来就在驱动排序、信息流和分支逻辑，但 JEV 比传统的狭窄分类器更通用。关键在于可靠性和可编程性。开发者不必把所有规则塞进一个巨大的自然语言 prompt，而可以搭建一个个小而可测的 if statement，并调整真正适合自己的阈值。

经济性让这件事更紧迫。TypeSafe 刚宣布 8.7 亿美元 Series A，估值 75 亿美元，发布视频获得 4,000 万次观看。Almeida 说，更重要的信号是 intelligence per dollar 下降后，builder 开始做过去嫌 AI 太贵而不做的应用。他形容传统 LLM 是“95% Einstein, 5% Mr. Bean”，如果系统在犯错时不发出信号，自动化就很难成立。RLHF 让模型更会聊天，RLVR 奖励可验证的答案，但两者都没有解决后台业务决策的可靠性问题。

他的解法是让每个判断都清晰、可测试、可组合。以邮件助理为例，可以把紧急程度、发件人类型、是否升级分别做成独立判断，而不是藏在整段文字里。开发者再按自己能接受多少 false positive 和 false negative 来选阈值。这样 AI 更像软件内部的一层逻辑，而不是替代软件本身。由此得到的判断单元可以复制、堆叠，并以高得多的次数被调用，这也是他看到的 Jevons 式自动化增益。

来源：[播客](https://www.youtube.com/@DataDrivenNYC/videos)

## Blog

通过验证的博客 feed 中没有新的符合条件内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
