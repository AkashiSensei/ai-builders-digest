[English](../../en/daily/ai-digest-2026-07-11-Sat.md) | [中文](./ai-digest-2026-07-11-Sat.md) | [双语](../../bilingual/daily/ai-digest-2026-07-11-Sat.md)

---

# AI Builders Digest

## 导读
1. 本周的 model release 已经变成一次真实的市场压力测试：OpenAI GPT-5.6 系列、Grok 4.5、Meta Muse Spark 1.1、Sonnet 5、LongCat-2.0 等密集出现，正在压缩 frontier model、open model 和低成本模型之间的差距。

2. 最强的 agent 主题是工作流里的可靠性：Gemini 用户要求更稳定的 Workspace 集成和 tool calling，OpenAI 重置 Codex 使用限制来鼓励更复杂任务，Box 则用企业文档难题测试 GPT-5.6 Sol。

3. builders 正在收敛到同一个工程判断：AI 可以让写代码更灵活，但底层 runtime、infra 和规范必须更确定、更可验证、更抗故障。

4. 播客里的核心观点很反常识：Jurgen Schmidhuber 认为只停留在屏幕里的 AI 还不是真正 AGI，物理机器人、自主提出问题的 artificial scientist，以及 curiosity-driven 实验比又一个基于网页训练的 chatbot 更关键。

5. AI capex 热潮正在受到质疑。Schmidhuber 认为 compute 会持续变便宜，open model 会持续压低价格，而大量靠债务堆出来的数据中心建设，可能在十年内被证明是一次严重错配。

## X / Twitter

### AI engineer 与 Latent Space 联合主持人 Swyx
Swyx 观察到一个很实际的 AEO 信号：即使用户已经有现成的 transactional email 基础设施，frontier models 仍然会在邮件任务里反复选择 Resend。他还把 OpenAI 最新一轮 coding 推进，解读成比外界此前围绕 Greptile 开玩笑时更激进的 repo-understanding 工作流。

https://x.com/swyx/status/2075376938676621752
https://x.com/swyx/status/2075336806661509513
https://x.com/swyx/status/2075269966438494303

### Google Labs VP Josh Woodward
Google Labs VP Josh Woodward 根据 1,400 多条 Gemini 用户反馈做了排序回应。最主要的需求是更可靠的 Google Workspace 集成、更稳定的 tool calling、更好的 chat 项目和文件夹组织、更广泛的 MCP 与 custom skill 支持，以及 Deep Research 能导出到 NotebookLM、并能在同一 chat 中切换研究模式和模型。

https://x.com/joshwoodward/status/2075241749048401936

### OpenAI Codex 与 ChatGPT builder Thibault Sottiaux
Thibault Sottiaux 表示，OpenAI 会在 24 小时内两次重置 ChatGPT Work 和 Codex 的使用限制，让用户有空间尝试更有野心的 GPT-5.6 Sol 任务。他也提到 Codex 的 usage limit reset，并说 Rajan Agarwal 已加入推动 coding capabilities。

https://x.com/thsottiaux/status/2075452680760443190
https://x.com/thsottiaux/status/2075330198887940337
https://x.com/thsottiaux/status/2075389936564588714

### AI 教程作者 Peter Yang
Peter Yang 对 OpenAI 发布的判断是，agents 正在接近主流 knowledge work：ChatGPT 把 images、live voice、browser/computer use 和各类 app plugins 组合起来，已经像一个能干活的同事。他对 GPT-5.6 Sol 最强的评价是复杂任务里的坚持和可靠性，而面向大众市场，他认为 GPT Live 可能更重要，因为 voice 是人类最自然的界面。

https://x.com/petergyang/status/2075345016437039600

### Linear head of product Nan Yu
Nan Yu 质疑创业公司的发布会表演：为什么 founder 要围绕融资金额拍炫热视频，这到底如何帮助业务？这里有价值的信号是，product builders 仍然对把资本本身当成内容保持警惕，尤其当它没有转化为客户价值时。

https://x.com/thenanyu/status/2075369080006087127
https://x.com/thenanyu/status/2075369895408095511
https://x.com/thenanyu/status/2075372186731270618

### Meta AI product leader Madhu Guru
Madhu Guru 宣布加入 Meta 负责 AI products；他此前在 Google 做过 Gemini、Veo 和 Nano Banana。他的判断是，SWE agents 已经改变了软件工程，但大多数复杂系统里的 agents 仍处早期，而 Meta 有机会让更多人真正感受到 agents 的力量。

https://x.com/realmadhuguru/status/2075243087325217038

### Anthropic philosopher and ethicist Amanda Askell
Amanda Askell 分享了一个关于校准的小例子：她在纽约生活时，两次附近建筑坍塌让她误以为这类事件很常见，但更完整的历史记录显示这种印象并不准确。这对 AI risk 和产品讨论也有提醒意义：鲜明的局部案例很容易扭曲 base-rate thinking。

https://x.com/AmandaAskell/status/2075245939548455009
https://x.com/AmandaAskell/status/2075247953309311043

### Anthropic Claude Code builder Thariq
Thariq 把 agentic coding 压缩成一个操作原则：减少未知数。这很好地描述了强 AI coding 工作流真正奖励的东西：更紧的 repro、更清楚的约束、更小的不确定面，以及更少的盲目 prompting。

https://x.com/trq212/status/2075283841758183674
https://x.com/trq212/status/2075280416995705312

### Replit CEO Amjad Masad
Replit CEO Amjad Masad 认为，当 AI 让 coding 变得更不僵硬时，runtime 和 infrastructure 反而需要更刚性。他的 infra 团队开始写 formal specs，并推动更 deterministic、更 resilient 的系统，因为想移动得更快，就需要更坚实的地基。他还说 LLM 市场比六个月前许多投资人想象的动态得多，多家 lab 和新进入者都会继续竞争。

https://x.com/amasad/status/2075423115052790054
https://x.com/amasad/status/2075413916491075755
https://x.com/amasad/status/2075358353686208741

### Vercel CEO Guillermo Rauch
Vercel CEO Guillermo Rauch 预计 Meta Spark 1.1、Grok 4.5 和 GLM 5.2 会在 model release week 中显著抢占 token market share。他的实际判断是：很多 agentic tasks 需要的是足够好的 intelligence 与速度组合，而且 open models 很快会变得极快。

https://x.com/rauchg/status/2075294130327196152
https://x.com/rauchg/status/2075294327354577256
https://x.com/rauchg/status/2075255565627080813

### Anthropic researcher Alex Albert
Alex Albert 指向了更多 Fable 可用性。feed 里只有这个指针，所以可行动信息是：Anthropic 相关 builders 仍在把 Fable 作为活跃的 coding/model surface 来强调。

https://x.com/alexalbert__/status/2075285305096343583

### Box CEO Aaron Levie
Box CEO Aaron Levie 把下一阶段企业 moat 放在一个问题上：企业如何把共享的 AI intelligence 与自己的 proprietary data、workflows 和员工行为连接起来。他还说，Box 的 AI Complex Work eval 显示 GPT-5.6 Sol 在困难的数据型企业任务上优于 GPT-5.5，包括财务预测、重症病例复盘和公共部门评分流程。

https://x.com/levie/status/2075416313481290077
https://x.com/levie/status/2075287443411222628

### Y Combinator CEO Garry Tan
Y Combinator CEO Garry Tan 表示，Meta Muse Spark 1.1，也就是早期 access 阶段叫 Hornbill 的模型，在他的 OpenClaw workflow 上表现很好。这再次说明 builders 判断新模型时，越来越少只看 leaderboard，而是看它能否在自己的 agent setup 里真实工作。

https://x.com/garrytan/status/2075445455438385255

### FirstMark investor Matt Turck
Matt Turck 今天 feed 里的内容主要是 World Cup 评论，而不是 AI 行业分析。无值得记录的 AI-builder 内容。

https://x.com/mattturck/status/2075386931924414686
https://x.com/mattturck/status/2075361793904439489
https://x.com/mattturck/status/2075342627436712362

### FPV Ventures partner Nikunj Kothari
Nikunj Kothari 把 model-release 混战压缩成一张市场地图：GPT-5.6 Sol/Terra/Luna、Grok 4.5、Fable 5、Sonnet 5、Meituan LongCat-2.0、ByteDance Seedream 5 都在 intelligence、cost 和 availability 之间竞争。这个笑话成立，是因为背后的事实很真实：frontier-model positioning 已经越来越难向技术受众解释清楚。

https://x.com/nikunj/status/2075411514773967261

### OpenClaw 与 OpenAI builder Peter Steinberger
Peter Steinberger 今天主要是在转发 demos 和 livestream 计划。更实质的信号是，builder attention 仍然围绕 OpenClaw 和 AI coding demos，而不是一个新的产品论点。

https://x.com/steipete/status/2075350572560191630
https://x.com/steipete/status/2075328495677521934
https://x.com/steipete/status/2075313523237019686

### Every CEO Dan Shipper
Dan Shipper 强调 Every 对 GPT-5.6 Sol 的判断：它是 knowledge work 的 gold standard；同时也调侃了“developers 不算在做 work”的说法。他的内容处在一个产品叙事里：agentic AI 正从 code generation 走向更广义的 knowledge-work evaluation。

https://x.com/danshipper/status/2075264022988116280
https://x.com/danshipper/status/2075330044289802584
https://x.com/danshipper/status/2075389275969826879

### South Park Commons partner Aditya Agarwal
Aditya Agarwal 分享了 South Park Commons 与 Gagan Shukla 的对谈，内容包括申请 Indian Air Force、成为第二位进入太空的印度人、ISS 生活、microgravity，以及未来十年的 space economy。这不是 AI post，但它是有关 resilience、frontier technology 和 space founder lessons 的 builder 内容。

https://x.com/adityaag/status/2075414469497270557
https://x.com/adityaag/status/2075414473695703054

### OpenAI CEO Sam Altman
Sam Altman 强调 Codex 是 OpenAI 新 work product 的核心，而且“不会消失”。他还说，GPT-5.6 Sol、Terra 和 Luna 在企业 dollars-per-task 上是一次大进步；另外，他也表达了对 Fidji 康复一事的难过、感谢和祝福。

https://x.com/sama/status/2075293792048136572
https://x.com/sama/status/2075267201058426944
https://x.com/sama/status/2075354679031067058

## Podcast

### Unsupervised Learning: Ep 90: AI Pioneer Jurgen Schmidhuber on the State of AI Today
The Takeaway：Jurgen Schmidhuber 最尖锐的观点是，今天以 chatbot 为中心的 AI 热潮，仍然缺少真正 AGI 所需要的物理能力、自主目标和 curiosity-driven 实验机制。

Schmidhuber 认为，停留在屏幕里的模型可以通过测试、写代码，但真正的 AGI 需要机器人在物理世界中行动，生成自己的数据，并从自己实验的后果中学习。他把 web-trained LLMs 与 artificial scientists 做了对比：前者深受“人类已经觉得值得发布的内容”影响，后者会自己提出问题、运行实验，并在“几乎理解但还没完全理解”的边缘收集数据。他最有记忆点的一句话是：“Babies don't learn by downloading the web.”

他对商业侧也很直接。当前 data-center boom 在他看来有过度建设的风险，因为 compute per dollar 会持续提升，open models 会持续压低价格，而最大几家 lab 正在背上类似 utility company 的 capex 负担。他不是反 AI，而是反对为当下硬件支付过高价格，并把短暂模型领先误判成长期 moat。

在 safety 上，Schmidhuber 比许多 alignment 讨论更不恐慌。他认为真正聪明的系统会像科学家和孩子一样设定并修改自己的目标，社会会通过 reward、punishment 和 norms 来塑造它们。长期愿景不是 chat，而是 self-improving robot societies：它们能操作现有机器、复制基础设施，并最终把文明扩展到地球之外。

https://www.youtube.com/watch?v=RKjR8DQ40po

## Blog

今日 feed 中没有新的 blog posts。

通过 Follow Builders skill 生成: https://github.com/zarazhangrui/follow-builders
