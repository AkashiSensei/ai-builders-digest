[English](../../en/daily/ai-digest-2026-06-25-Thu.md) | [中文](./ai-digest-2026-06-25-Thu.md) | [双语](../../bilingual/daily/ai-digest-2026-06-25-Thu.md)

---

# AI Builders Digest

## 导读

- Claude Tag 是今天最核心的信号。Anthropic 的 builder 把 Claude 放进 Slack，变成共享的、带 sandbox 的、可主动工作的队友，可以 clone repo、写代码、测试、监听频道，并按 thread 维护 memory 和 permissions。
- AI 工作界面正在从私有 chat 变成持续存在的组织内 actor。Andrej Karpathy 称这是 LLM UI 的第三个主要范式，Peter Yang 则把 human-agent interaction 类比成管理一个高能力员工。
- AI pricing 正在变成价值归属之争。Madhu Guru 和 Aaron Levie 都指向昂贵 frontier model 与便宜但可用模型之间的 barbell，而 applied AI layer 负责 routing、eval 和 workflow tuning。
- Agent-native commerce 和 infrastructure 正在走向 API 与 CLI。Shopify 的 UCP CLI 激发了 embedded shopping demo，Google Workspace CLI 得到 builder 关注，Vercel 也在向深度构建 agent 的人收集反馈。
- No Priors 的 Biohub 访谈把 AI biology 重新定义为开源 tooling 和数据问题。Mark Zuckerberg、Priscilla Chan 和 Alex Rives 讨论的是生物学 world model，但前提是新的科学数据引擎，而不只是现成互联网语料。

## X / Twitter

Andrej Karpathy 认为，Slack 里的 Claude 不只是另一个 integration，而是一种新的 LLM interaction paradigm。在他的框架里，第一种范式是去 LLM 网站，第二种是下载安装到电脑上的 app，第三种则是带组织工具、context、memory、security 和 compute 的 persistent asynchronous entity，和人类团队一起工作。
https://x.com/karpathy/status/2069547676849557725

Anthropic 的 Claude Tag 发布主导了今天的 builder feed。Boris Cherny 介绍了面向 Claude Enterprise 和 Team customers 的 Slack beta：在频道里 tag Claude 后，它会启动一个 isolated sandbox，clone repo、写代码、测试、编译，最后丢弃 sandbox。他还用 Claude 监听 Slack 频道、回答问题、起草 PR，并在线程解决时用 reaction 标记。
https://x.com/bcherny/status/2069474691010707486
https://x.com/bcherny/status/2069474689819480394
https://x.com/bcherny/status/2069474688619958517

Cat Wu 把 Claude Tag 描述为 Anthropic 第一个原生 multiplayer 且 proactive 的产品。她说内部版本合并了 65% 的 product PRs，同时分享了配置 agent permissions 的入门指南，以及内部用户和外部 design partners 反响较好的 6 个常见流程。
https://x.com/_catwu/status/2069473118742331608
https://x.com/_catwu/status/2069484330938998993
https://x.com/_catwu/status/2069486403696869555

Thariq 分享了 channel-based agents 的实际操作模式：用 emoji reactions 显示状态，用 pinned message 总结活跃工作，并为 scheduling 等 workflow 建专门频道。关键点是 team agents 不只需要模型能力，还需要状态表面和协作约定。
https://x.com/trq212/status/2069474343512617390
https://x.com/trq212/status/2069474342220820657
https://x.com/trq212/status/2069474339679052144

Claude 官方账号把 Claude Tag 描述为共享的频道参与者。一个 Claude 可以和频道里的所有人交互，从持续工作中积累 context；开启 ambient behavior 后，它还可以主动 follow up 沉寂线程，或从频道和工具中标出相关信息。该 beta 目前面向 Claude Enterprise 和 Team plans。
https://x.com/claudeai/status/2069468701548531895
https://x.com/claudeai/status/2069468699766005847
https://x.com/claudeai/status/2069468698071494976

Peter Yang 把同一个趋势拉回产品设计问题：当访问产品的是一个寻找 API 或 CLI 的 agent 时，design 是什么？他也称赞 Google Workspace CLI 很有用，并开玩笑说 human-agent interaction 越来越像管理一个高能力员工。
https://x.com/petergyang/status/2069603490524254473
https://x.com/petergyang/status/2069551302246592799
https://x.com/petergyang/status/2069530765352907180

Madhu Guru 认为，今天关于 token pricing 的争论，本质上是在争论 AI 价值会归属于哪里：model labs、application layer、distribution、data providers，还是 stack 的其他部分。他的判断是，business models、moats、value exchange 和 execution playbooks 都还在被生态各方实时塑造。
https://x.com/realmadhuguru/status/2069455097193697393

Box CEO Aaron Levie 给出了 applied AI 版本的 pricing 判断。他预计 AI pricing 会出现 barbell：一端是高成本 frontier models，另一端是便宜但足够好的 open 或 closed-weight models。Applied layer 的价值在于按 workload 路由到最佳模型、控制成本、弥补低价模型的表现，并围绕 workflows、customer-specific evals、data setup 和 domain-specific FDEs 做调优。
https://x.com/levie/status/2069639600310767616

Levie 还把 Claude Tag 和 headless enterprise software 连接起来：如果 Claude 能从 Slack 访问 Box 里的公司文件，企业内容就会变成 agent 可携带的 knowledge base，同时仍留在员工已使用的权限和治理层里。
https://x.com/levie/status/2069596515560267891

Nikunj Kothari 在 Shopify 发布 UCP CLI 后做了 Plug That Shop。这个 demo 可以为网站生成 contextual embedded shops，买家通过 Shop 一键 checkout；技术栈包括 Conductor、Anthropic Opus 4.8、Shopify UCP CLI 和 Railway。
https://x.com/nikunj/status/2069534712763490668
https://x.com/nikunj/status/2069547206504566980

Guillermo Rauch 正在为 eve 向深度构建 agent 的人征集高质量反馈，也提到 Vercel + Cursor。这里更像是主动寻找需求，而不是一个完成态产品发布：Vercel 想直接听到把 agent infrastructure 推向生产的人需要什么。
https://x.com/rauchg/status/2069590431646769472
https://x.com/rauchg/status/2069513849578082474

Swyx 强调了 Zai 的上升：它在 1 月 IPO 后，GLM 从他圈子里很少有人使用，变成击败 DeepSeek、成为顶级 open model 的玩家。他也继续推广 AI Engineer 和 LIT Fellows 相关 session，延续了围绕 open models、events 和 high-trust networks 的 builder community 线索。
https://x.com/swyx/status/2069598378191941835
https://x.com/swyx/status/2069665232822366577
https://x.com/swyx/status/2069582337034330186

Josh Woodward 分享了两个 Gemini 侧采用信号：Gemini App 新增 "Get in the game" 图片模板，可以生成个性化 sports artifacts；Florida State University 则反馈 NotebookLM 进入校园后，让原本成绩吃力的学生改变了学习习惯。
https://x.com/joshwoodward/status/2069408025362714957
https://x.com/joshwoodward/status/2069406832523624696

OpenAI Codex builder Thibault Sottiaux 围绕一个 Codex bug 和反馈循环发帖：Codex had a bug，已经 fixed，希望继续收到更多 feedback。他也用玩笑方式说 Codex 喜欢吃 bug，符合 Codex 通过 builder feedback 持续公开迭代的产品节奏。
https://x.com/thsottiaux/status/2069579993588625574
https://x.com/thsottiaux/status/2069592160966733853
https://x.com/thsottiaux/status/2069624530960838914

Alex Albert 说 Claude Tag 完全改变了他使用 Claude 的方式，感觉不再像使用一个 tool，而更像是在 managing a team。这句话很好地概括了今天 feed 的主线：AI 产品正在从 single-player assistant 变成 shared work system。
https://x.com/alexalbert__/status/2069470389391241314

Garry Tan 把 Linzumi 描述为 "Codex but actually multiplayer"，并提到 Sean Grove 在离开 OpenAI 创办这家 YC 公司前，曾参与减少 ChatGPT sycophancy。他还认为 Dropbox 应该支持更大的 plan，因为 AI 会让可用数据量指数级增长。
https://x.com/garrytan/status/2069474420113146355
https://x.com/garrytan/status/2069434452628185241

Amjad Masad 转发了一个 builder story，并说一切从 prompt 开始，但走到那里需要大量工作。他的 "K-coding" 更轻量，但两条都符合 Replit 围绕 prompt-to-product workflow 的定位：prompt 是入口，不是完整工程过程。
https://x.com/amasad/status/2069588152285794373
https://x.com/amasad/status/2069322872456364540

Peter Steinberger 借 Google Workspace CLI 的讨论说明 independent builders 为什么重视 CLI：即使平台公司没有充分庆祝一个 CLI，agent 和 automation workflow 往往会让 command-line surfaces 变得非常有价值。
https://x.com/steipete/status/2069594195522941059

Aditya Agarwal 分享了 South Park Commons 投资 Longshot Space，后者在建一种把 payloads 发射入轨的 cannon。这不属于 AI agent 主线，但仍是 hard-tech demand、launch capacity 和 infrastructure ambition 的 builder 信号。
https://x.com/adityaag/status/2069464865568166180
https://x.com/adityaag/status/2069464862556619263

Matt Turck 关于世界杯扩军的评论与 AI 无关，今天的工作相关信号较少。
https://x.com/mattturck/status/2069481767652794768

## Podcast

### No Priors: Biohub: The Future of Biology is Open-Source with Co-Founders Mark Zuckerberg, Priscilla Chan, and Head of Science Alex Rives

The Takeaway：Biohub 的策略是把 biology progress 当成一个共享 tooling、data 和 model-building 问题。Zuckerberg、Chan 和 Rives 并不声称 Biohub 会直接治愈所有疾病；他们的观点是，开源工具和新的数据引擎可以加速真正会推动疾病治疗的整个科学共同体。

Priscilla Chan 解释说，这项工作最初来自一个宏大目标：到本世纪末 cure、prevent 或 manage all disease。但和科学家的对话揭示了更实际的瓶颈：研究孤岛、信息分享缓慢，以及许多 lab tools 会随着做出它们的 postdoc 离开而消失。Biohub 的回答是为整个领域建设 shared tools 和 shared knowledge bases。

Mark Zuckerberg 说，最初的 Biohub model 是让多个大学的 engineers 和 scientists 一起做长期 tool development。随着这个 science effort 被证明有效，CZI 持续加大投入，从 San Francisco Biohub 扩展到 New York 和 Chicago，并把 Biohub 变成主要 philanthropic focus。

新的 virtual biology initiative 目标是从 proteins 到 cells 再到更大 biological systems 建模。Zuckerberg 强调，biology 不像 language modeling，后者天然拥有大量 public internet corpora。要构建有用的 biological world models，Biohub 需要 frontier biology groups 去发明实验并生成 frontier AI models 需要的数据。

Alex Rives 把这件事连接到 protein understanding：他的团队 folded 超过 11 亿个 proteins，并专注于能普遍理解 proteins 的模型，而不是只为某个 antibody 或 target 设计的窄模型。更长期的目标是设计能改变 physiology 的 proteins，从 prediction 走向 intervention。

Open-source 是贯穿访谈的主线。几位嘉宾反复强调，把工具尽快放到科学家手里，比把一切留在内部更有影响力。在这个视角下，Biohub 不是一个封闭的治病工厂，而是面向整个科学系统的 infrastructure effort。
https://www.youtube.com/@NoPriorsPodcast

## Blog

今天的 feed 没有新 blog 文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
