[English](../../en/daily/ai-digest-2026-05-03-Sun.md) | [中文](./ai-digest-2026-05-03-Sun.md) | [双语](../../bilingual/daily/ai-digest-2026-05-03-Sun.md)

---

# AI Builders Digest

## 导读

本期内容主要围绕五个主题展开：

1. **Inference 正在变成下一层稀缺基础设施。** Baseten 这期访谈说明，AI 需求的重心正在从训练叙事转向生产环境里的 inference 容量、定制模型和跨云 runtime fabric。

2. **agent 产品正在按 harness 质量和 memory 能力来被评估，而不只是模型质量。** Claude Managed Agents memory、Claude Code 质量修复，以及 builders 围绕 Codex 的讨论，都指向同一个运行层。

3. **企业 AI 正在进入日常工作流。** Claude connectors 扩展到消费和工作应用，同时 Aaron Levie 继续强调 agent 会扩大 systems of record 的价值，而不是简单替代 seat。

4. **builders 正在把 coding agents 当作协作者。** Zara Zhang 把 agent 描述为 cofounder，Peter Yang 和 Peter Steinberger 都在测试 Codex 功能，而 Replit 借十周年再次强调让所有人都能 coding 的使命。

5. **AI 产品公司正在公开处理可靠性问题。** Anthropic 发布了 Claude Code 质量问题复盘，Sam Altman 公开谈 release 文化，整个生态也越来越习惯把 broken feature 和修复过程摆到台前。

## X / Twitter

**Swyx**
Swyx 提了一个小但很有启发的产品需求：做一个 Chrome extension，把网页上所有图片输入框都升级成可以输入简单文字、用 tldraw 画草图，或者从文字和草图生成指定比例图片的入口。他还提到 Codex 做 Slack 搜索可能比 Slack AI search 更好，并转发了 Grok/xAI 的效率对比。共同主题是界面杠杆：AI 工具嵌入已有输入面时，比要求用户切换到另一个地方更有价值。

https://x.com/swyx/status/2050460622706626740
https://x.com/swyx/status/2050432398161264664
https://x.com/swyx/status/2050396374282408358

**Peter Yang**
Peter Yang 这次几乎都围绕 Codex：他指出自己遇到的第一个 broken Codex feature，调侃买 MacBook Pro 试本地模型最后可能只是继续用云端 agent 的借口，也说和 Codex 一起突破某个卡点时体验很好。这里的信号不只是热情，而是有经验的 AI 产品教育者已经把 agent 可靠性、本地模型尝试和工作流突破当作日常材料来观察。

https://x.com/petergyang/status/2050406287008268450
https://x.com/petergyang/status/2050394924395434233
https://x.com/petergyang/status/2050378287348899962

**Amjad Masad (CEO, Replit)**
Amjad Masad 借 Replit 十周年宣布产品免费 24 小时，并把庆祝活动拉回到一个早于公司的使命：让每个人都能 coding。这条内容的重要性在于，它把 Replit 不只是定义为一个 coding tool，而是定义为一个持续十年的软件创作分发项目。在 agent 时代，这个使命有了更高杠杆，因为 coding 正在被压缩成更短的意图、生成和发布循环。

https://x.com/amasad/status/2050479551537619413

**Aaron Levie (CEO, Box)**
Aaron Levie 用 Atlassian 的业绩继续打磨他的 agent 时代软件论。他的判断方式是：当工作中的 agent 数量达到人类的 100 倍时，哪些软件类别会因为更多工作被执行而增长，比如代码、线索、合同、发票、设计、支付，以及管理这些工作的底层系统。他还强调，硅谷之外的企业更想用 AI 增强和加速瓶颈流程，而单纯降本带来的收益很快会被竞争对手用 AI 更好服务客户而抵消。

https://x.com/levie/status/2050295657836277764
https://x.com/levie/status/2050240083325030404

**Garry Tan (President & CEO, Y Combinator)**
Garry Tan 在这批 feed 里没有太多 AI 相关分析。比较实质的一条是对 California 资产征收提案和税基问题的政策批评，另一条只有链接。对本期 digest 来说，合理结论就是今天没有来自 Garry 的显著 AI 产品信号。

https://x.com/garrytan/status/2050365216421241152
https://x.com/garrytan/status/2050348984171192773

**Zara Zhang**
Zara Zhang 给出了今天最清晰的一条 coding agent 使用方式：她不会把 agent 当作只接命令的员工，而是当作 cofounder，会向它描述问题、交代局面，并询问它的意见。这不是单纯的比喻，而是一种实际工作方法。agent 越强，用户越需要从下命令转向描述问题、提供取舍背景和共同判断。

https://x.com/zarazhangrui/status/2050445806428438734
https://x.com/zarazhangrui/status/2050326543797469415
https://x.com/zarazhangrui/status/2050280810302062927

**Nikunj Kothari**
Nikunj Kothari 分享了一个很小但具体的付费产品里程碑：一个用 Railway、Conductor、Claude 和 Stripe 做出来的项目到了 36,500 美元 ARR，报告基本按成本价出售，因为每份成本是 8 到 9 美元。这里有意思的是 stack 和范围。AI-assisted builder 现在可以足够快地发布狭窄、付费、寻求反馈的产品，小规模收入实验也能暴露真实单位经济。

https://x.com/nikunj/status/2050407946438467878
https://x.com/nikunj/status/2050355231486316818
https://x.com/nikunj/status/2050353986742698400

**Peter Steinberger**
Peter Steinberger 提到了 Codex 新的 `/goal` 功能，也展示了他告诉 Codex 需要付费才能让 xAI 重新工作的一个处理方式。这些内容都不长，但指向同一件事：agent 工作流已经足够可配置，用户会把功能、目标和模型提供方修复当作日常使用的一部分来讨论。这说明产品面正在从新奇工具变成日常操作环境。

https://x.com/steipete/status/2050440893786685837
https://x.com/steipete/status/2050384648119734683
https://x.com/steipete/status/2050275598178586921

**Dan Shipper (CEO, Every)**
Dan Shipper 提了一个很精炼的模型学习判断：模型知道的比任何单个人都多，但单个人学习得比模型更快。这是理解 AI 协作的好框架。模型提供广泛先验，人提供快速本地适应、品味和反馈。最好的工作流不是用一方替代另一方，而是把这个学习循环收紧。

https://x.com/danshipper/status/2050380001279975517
https://x.com/danshipper/status/2050363982813552820
https://x.com/danshipper/status/2050304359024759242

**Aditya Agarwal (General Partner, South Park Commons)**
Aditya Agarwal 把产品判断说得很直接：毁掉一家公司的最好方式，就是关注除了产品之外的一切。它不是 AI-specific，但很适合放进 AI builders digest，因为现在的工具让分心变得格外容易。当 demo、发布、agent 和内容都变便宜时，产品判断只会更重要。

https://x.com/adityaag/status/2050229509840900434

**Sam Altman (CEO, OpenAI)**
Sam Altman 这次更多是在 release culture 的语境里发言：未来发布需要更大的 party，想来的人比预期更多，他还预告了 `/hatch clippy`。信号不重但存在。OpenAI 正在把产品发布当作社区事件来经营，而围绕 agent 的语气也随着工具从基础设施进入文化层而变得更轻松。

https://x.com/sama/status/2050427808456077541
https://x.com/sama/status/2050402088266694689
https://x.com/sama/status/2050399512494227709

**Claude**
Claude 宣布 Code with Claude 将在下周回归，并提供面向 Claude Code 新用户和老用户的不同 session 以及 livestream 注册入口。产品信号很直接：Anthropic 正在把 developer education 当作一等 adoption channel 来投入。对 coding agents 来说，文档不够，会议、session 和共享工作流也是教市场如何使用工具的一部分。

https://x.com/claudeai/status/2050252933866930339

## Podcast

**No Priors - "Baseten CEO Tuhin Srivastava on the AI Inference Crunch, Custom Models, and Building the Inference Cloud"**
The Takeaway：Baseten CEO Tuhin Srivastava 认为，AI 的下一个瓶颈不是模型能不能被调用，而是生产环境里的 inference 能否被拥有、定制、路由，并在供给紧张时规模化运行。

Baseten 一年增长 30 倍，所在的位置正是 AI 从 demo 进入真实 workload 的那层栈。Srivastava 说，市场变化来自三个因素：开源模型跨过了基础能力门槛，post-training 变得主流，客户开始希望拥有更多属于自己的 intelligence。他对 application layer 的关键判断是：当用户信号存在于 workflow 里，而不只是模型里，公司就仍然有 moat。Abridge、客服公司和企业 AI 应用有价值，是因为它们能看到 frontier labs 通常看不到的修改、动作和下游步骤。

最有用的基础设施细节是供给。Baseten 横跨 18 个 cloud 和 90 个 cluster，并且以很高利用率运行，因为可用算力余量非常少。Srivastava 还说，Baseten 上的 workload 绝大多数都是 custom：大约 90-95% 的 token 来自定制模型，而不是原始开源模型。他的世界观是，当任务足够窄时，专用模型可以更好、更快、更便宜；而当所有人都想把 intelligence 嵌入更多地方时，多芯片、多云的 inference layer 就会变成战略能力。

https://www.youtube.com/watch?v=XAbKflCncDo

## Blog

**Anthropic Engineering - "An update on recent Claude Code quality reports"**
Anthropic 将近期 Claude 质量投诉追溯到三个独立的产品层问题，分别影响 Claude Code、Claude Agent SDK 和 Claude Cowork。API 和 inference layer 没有受到影响，公司表示三个问题都已在 4 月 20 日的 v2.1.116 中修复。最关键的细节是，其中一个问题会在 tool use 过程中丢失 reasoning context，表现为遗忘、重复、奇怪的工具选择，以及 usage limit 更快消耗。

这篇文章重要，是因为它把 agent 可靠性当成系统问题，而不是感受问题。为了降低延迟而调整默认 reasoning effort、错误处理 thinking blocks、以及被无关实验掩盖复现路径，这些都是 agent 从 demo 变成带状态、工具、队列和 UX 层的产品后会遇到的问题。

https://www.anthropic.com/engineering/april-23-postmortem

**Claude Blog - "New connectors in Claude for everyday life"**
Claude 正在把 connectors 从工作应用扩展到日常服务，包括 AllTrails、Instacart、Audible、Tripadvisor、TurboTax 等。Anthropic 表示，自 2025 年 7 月以来，connector directory 已经增长到 200 多个 connectors，而且用户经常在一次 Claude 对话里串联多个 app。产品方向很清楚：Claude 想成为跨 app 的操作面，而不是一个目的地式聊天框。

有意思的变化是，它正在从 workplace automation 走向 life workflow automation。用户已经可以在一次对话里从 Amplitude 到 Canva 再到 Asana；现在同样模式被推向旅行、杂务、财务、媒体、订位和本地服务。

https://claude.com/blog/connectors-for-everyday-life

**Claude Blog - "Built-in memory for Claude Managed Agents"**
Claude Managed Agents 的 memory 已经进入 public beta。它的设计很务实：memory 以文件形式存储，可以导出、通过 API 管理、设置权限、审计、回滚，并按不同 scope 在多个 agents 之间共享。Anthropic 的判断是，agent 的 memory 最有效时，是建立在它已经使用的工具之上，所以这个功能直接挂载到 filesystem。

客户案例让商业价值更清楚。Rakuten 的长运行任务型 agents 通过从每次 session 学习，把 first-pass errors 降低了 97%；Wisedocs 则通过记住反复出现的文档问题，把 document verification 加速了 30%。这不是个性化聊天功能里的 memory，而是生产级 agent 基础设施。

https://claude.com/blog/claude-managed-agents-memory

---

*通过 Follow Builders skill 生成：https://github.com/zarazhangrui/follow-builders*
