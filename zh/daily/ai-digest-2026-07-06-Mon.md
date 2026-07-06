[English](../../en/daily/ai-digest-2026-07-06-Mon.md) | [中文](./ai-digest-2026-07-06-Mon.md) | [双语](../../bilingual/daily/ai-digest-2026-07-06-Mon.md)

---

# AI Builders Digest

## 导读
1. 今天最大的基础设施信号是：AI agent 已经不再只是互联网的边缘流量。Cloudflare CEO Matthew Prince 说 bot 流量已经超过人类流量，这会迫使广告、爬取、安全以及网站如何获得收入都重新设计。

2. 产品团队评价 AI 的重点正在从演示效果转向它能不能发现真实问题。Linear 的 Nan Yu 强调要亲自使用产品并把它弄坏，Anthropic 的 Cat Wu 则举例说，模型能在没有明确提示的情况下选对分析方法。

3. 开发者平台正在把 AI 使用变成一个可观测的市场。Vercel 的 Guillermo Rauch 展示了 AI Gateway 中不同模型的 token 支出变化，Peter Steinberger 也在给 AI 工具用户增加 reset 到期时间可见性。

4. Apple 平台上的 AI 正在变成“本地模型与前沿模型如何路由”的问题。Claude 对 Foundation Models framework 的支持，让 Swift app 可以先用 Apple 的端侧模型，再把更复杂的推理或代码任务交给 Claude。

5. 今天 feed 里有不少假期和足球内容，但有效信号仍然清楚：builders 关注的是可运营的杠杆，而不只是模型新鲜感。真正重要的问题是 agent 应该在哪里运行、如何被度量，以及什么商业模式能支撑它们带来的流量。

## X / Twitter
### Swyx
Swyx 今天被抓取到的内容更偏社交，而不是技术更新：一条在 feed 里只是链接残片，另一条说自己很想加入 Daksh Gupta 的 hip-hop crew，但时间冲突了，并附上自己 2003 年舞团照片。这里没有很强的 AI 产品信号，但能看到 builder 社群仍然把工作、社区和个人故事混在公开叙事里。

https://x.com/swyx/status/2073657149067321412
https://x.com/swyx/status/2073630312249327918

### OpenAI 的 Thibault Sottiaux
OpenAI 的 Thibault Sottiaux 提了一个很有用的产品质量问题：Codex 还有哪些事情做不好，而且本来早该做好？这等于直接邀请 builders 指出 coding agent 闭环里的缺口。他的另一条内容是和 Sol 的一个 emoji 算术玩笑，模型把负数 emoji 解释成“欠下的 salute”。

https://x.com/thsottiaux/status/2073565412336308699
https://x.com/thsottiaux/status/2073554978053005607
https://x.com/thsottiaux/status/2073551549494596079

### Peter Yang
Peter Yang 今天被抓取到的内容主要是足球和一句轻松的 AI agree with me 玩笑，没有值得展开的 AI builder 更新。这里的有效提醒是：不是每个活跃 builder feed item 都是产品信号，这几条更像世界杯即时反应。

https://x.com/petergyang/status/2073516954779029800
https://x.com/petergyang/status/2073492785991438426
https://x.com/petergyang/status/2073486769828614296

### Linear Head of Product Nan Yu
Linear head of product Nan Yu 用“手写代码时会不停骂脏话”的玩笑，引出了一个更尖锐的点：当 AI agent 复现真实工作的混乱质感时，它反而更像真的能干活。更实质的是，他认为最好的 bug 捕捉方式仍然是自己使用产品并尝试把它弄坏；code review 更适合看架构、API 设计和技术债，而不是发现大多数 bug。他还提出了 agent 造成破坏时的责任问题：如果模型删掉了所有 production table，到底是谁被开除？

https://x.com/thenanyu/status/2073412466436878666
https://x.com/thenanyu/status/2073410944969932877
https://x.com/thenanyu/status/2073410299680428445

### Anthropic 的 Amanda Askell
Anthropic 的 Amanda Askell 今天发的是节日祝福，不是 AI safety 或产品观点。今天没有值得展开的 AI builder 更新。

https://x.com/AmandaAskell/status/2073569330940531152

### Anthropic 的 Cat Wu
Anthropic 的 Cat Wu 提到了模型判断力提升的一个具体例子：在一次 retention analysis 中，Claude Fable 5 在没有被明确要求的情况下，选择了 propensity score matching，用活跃度匹配用户，让比较更接近同类对比。她的重点是，更好的判断力会贯穿多种工作场景，从 Cowork 里写邮件和文档，到 Claude Code 里调试复杂错误。

https://x.com/_catwu/status/2073439890482794966

### Vercel CEO Guillermo Rauch
Vercel CEO Guillermo Rauch 做了一个动画，展示 Vercel AI Gateway 历史使用中的 token 支出份额变化。这个 Gateway 每月聚合来自数百万开发者的数万亿 token。他的观察是，这个市场非常动态：在这组数据里 Anthropic 占优，各家 lab 的份额不断波动，open-weight AI 也在上升。模型选择不再只是静态榜单，而是一个可观测的生产市场。

https://x.com/rauchg/status/2073563586270781674
https://x.com/rauchg/status/2073428532613775819

### YC CEO Garry Tan
YC CEO Garry Tan 今天被抓取到的内容是旧金山住房政治，而不是 AI。对 founders 来说，主线更偏运营而非技术：他继续强调供给侧住房、安全和 YIMBY 政策，是创业城市正常运转的前提。

https://x.com/garrytan/status/2073575065917280331
https://x.com/garrytan/status/2073558419412500564
https://x.com/garrytan/status/2073558154873593926

### FirstMark 的 Matt Turck
FirstMark 的 Matt Turck 今天在 X 上主要聊足球，所以真正和 AI 相关的内容是下面的 MAD Podcast。podcast feed 才是今天的有效信号，而不是这些比赛反应。

https://x.com/mattturck/status/2073543980109733924
https://x.com/mattturck/status/2073506928773185551
https://x.com/mattturck/status/2073456675567071374

### FPV Ventures Partner Nikunj Kothari
FPV Ventures partner Nikunj Kothari 发了一条独立日反思：自己为了本科来到美国，此后一直留在这里，因为这个国家提供了巨大的机会面。这不是 AI 产品更新，但和今天 founder/investor 的主题一致：尽管有问题，美国仍然被视为 ambitious builders 的平台。

https://x.com/nikunj/status/2073447791876317338

### Peter Steinberger
Peter Steinberger 预告了一个 AI 工具用户很需要的小功能：下一版 OpenClaw 会明确显示 reset 什么时候到期，让用户更有意识地管理使用窗口。这条不大，但指向真实产品需求：当 AI 工具变成日常基础设施，quota、reset 时间和使用可见性就是用户体验的一部分。

https://x.com/steipete/status/2073482942513565713
https://x.com/steipete/status/2073450886698070282

### Every CEO Dan Shipper
Every CEO Dan Shipper 开了一个“Codex in ChatGPT”的递归玩笑，焦点仍然是一个 AI 助手帮助操作或理解另一个 AI 工作界面。他另一条被抓取到的内容，是从 Grant Sanderson 上 Dwarkesh 节目延伸出的轻松吐槽：自己一直把很多著名数学家的名字念错了。更实质的信号是，AI 媒体、数学解释者和 coding agents 正在 builder 文化里继续交叉。

https://x.com/danshipper/status/2073586548545638459
https://x.com/danshipper/status/2073422764275364153

### Sam Altman
Sam Altman 今天的内容是独立日反思，而不是 AI 产品笔记。他称赞了 “life, liberty, and the pursuit of happiness” 这句话，也把美国描述成一个由 250 年建设出来、非常令人印象深刻的社会实验。

https://x.com/sama/status/2073636003215249515
https://x.com/sama/status/2073635910512726444

## Podcast
### The MAD Podcast with Matt Turck: Cloudflare CEO: The Internet's Business Model Is Dead
The Takeaway: Matthew Prince 认为，互联网正在从“人类注意力经济”切换到“agent 流量经济”，而旧广告模式会失效，因为 “bots don't click on ads.”

Cloudflare cofounder and CEO Matthew Prince 对互联网行为有一个少见的全局视角，因为 Cloudflare 位于很大一部分全球流量前面。他的核心判断很直接：bot 和 AI agent 流量已经在 2026 年上半年超过人类流量，比 Cloudflare 原先预期更早。他说过去 bot 流量大约长期维持在 20% 左右，但 AI 驱动的 crawling 和 agent 行为把曲线迅速拉高，未来五年互联网 bot 流量可能达到今天的 1000 倍。

真正重要的是商业含义。过去近三十年，web 很大程度由广告资助，而广告默认背后是人类注意力。Prince 那句最值得记住的话就是限制条件：“The problem is bots don't click on ads.” 如果 agent 代表用户购物、阅读、比较和总结，publisher 和软件公司就需要新的机器访问授权、定价和安全模型。

Prince 也把 Cloudflare 定位成 AI infrastructure company，而不只是 CDN 或安全层。议题包括 Workers、AI Gateway 和 agent security，但更深层的变化是：基础设施提供商现在必须区分有用 agent 和滥用 scraping，帮助网站控制访问，并支持内容所有者、AI 系统和用户之间的新经济合约。

https://www.youtube.com/watch?v=UN47z_opfmo

## Blog
### Claude Blog: Building intelligent apps for Apple platforms with Claude in the Foundation Models framework
Claude Blog 发布了一个 Swift package，让 Apple developers 可以通过 Apple 的 Foundation Models framework 调用 Claude 来处理更复杂的 workflow。实际模式是在同一个 app 体验里做模型路由：先用 Apple 端侧模型完成快速本地任务，比如 summarization 或 extraction，再把 multi-step reasoning、code generation、web search、code execution、tool calls、streaming 和 structured responses 交给 Claude。

对开发者来说，关键细节是 typed handoff。Apple 的 framework 可以通过 @Generable annotations 返回 Swift values，所以 Claude request 可以从干净的结构化输入开始，而不是 raw user text。Anthropic 举的例子包括：journaling app 先本地生成 prompt，再让 Claude 从几个月的日记里找主题；learning app 先本地解释术语，再用 Claude 回答更深的追问。

这个 package 被描述为面向 Apple 下一代 OS：iOS 27、iPadOS 27、macOS 27、visionOS 27 和 watchOS 27，并使用 Anthropic API key。

https://claude.com/blog/claude-for-foundation-models

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
