[English](../../en/daily/ai-digest-2026-05-07-Thu.md) | [中文](../../zh/daily/ai-digest-2026-05-07-Thu.md) | [Bilingual](./ai-digest-2026-05-07-Thu.md)

---

# AI Builders Digest - 2026-05-07

## Reader's Briefing / 导读

Enterprise AI is moving from model access to organizational deployment. Aaron Levie's agent rollout comments and Anthropic's auto mode post point at the same hard problem: getting powerful agents into real workflows requires permissions, logging, evals, trust boundaries, and change management.

企业 AI 正从“能访问模型”转向“能在组织里落地”。Aaron Levie 关于企业 agent 部署的判断，与 Anthropic 的 auto mode 文章指向同一个难题：要把强大的 agent 放进真实工作流，必须处理权限、日志、eval、信任边界和变更管理。

Agent tooling is becoming more specialized and operational. Vercel's deepsec, Garry Tan's GBrain, and Peter Steinberger's Crabbox updates show builders turning agents into repeatable infrastructure for security review, personal context, remote QA, and multi-environment testing.

Agent 工具正在变得更垂直、更运维化。Vercel 的 deepsec、Garry Tan 的 GBrain、Peter Steinberger 的 Crabbox 更新，都显示 builders 正把 agent 变成可重复运行的基础设施，用于安全审查、个人上下文、远程 QA 和多环境测试。

Voice and multimodal interfaces are becoming a near-term product frontier. Sam Altman is watching users change how they interact with AI as voice models improve, while Amjad Masad and Nikunj Kothari point to practical multimodal use cases in education, production workloads, OCR, and live voice.

语音和多模态界面正在成为近期产品前沿。Sam Altman 观察到，随着 voice models 变强，人们已经开始改变与 AI 交互的方式；Amjad Masad 和 Nikunj Kothari 则分别指向教育、生产负载、OCR 和实时语音里的实际多模态场景。

Autonomy is a long-horizon AI lesson, not just a transportation story. Dmitri Dolgov's Waymo discussion is a reminder that AI products with physical-world consequences need persistence through hype cycles, rigorous validation, world models, simulation, critics, and structured runtime checks.

自动驾驶不仅是交通故事，也是长周期 AI 产品的样本。Dmitri Dolgov 对 Waymo 的讨论提醒我们，涉及物理世界后果的 AI 产品，需要穿越 hype cycle 的耐心、严格验证、world models、模拟器、critic，以及结构化的运行时检查。

Startup execution is being re-priced around retention, testing, and real utility. Nikunj Kothari warns that momentum and polished launch videos are not moats, while Garry Tan's testing obsession and Peter Yang's agent-for-kids question keep the focus on useful things people can actually build and share.

创业执行正在重新围绕留存、测试和真实效用定价。Nikunj Kothari 警告，势能和精致发布视频不是护城河；Garry Tan 对测试的执着，以及 Peter Yang 关于孩子用 agent 创作的提问，都把焦点拉回到人们真正能构建、分享和使用的东西。

## X / Twitter

### Swyx

Swyx reconstructed a revenue and valuation comparison from the Wall Street Journal, putting OpenAI at roughly an $850B valuation and around $30B ARR, and Anthropic at roughly a $900B valuation and around $44B ARR, while noting that Anthropic's recognized revenue may be $8B-$10B lower under OpenAI's methodology. He also pointed readers to a newly released talk version and highlighted Patrick Debois as a keynote he had backed early because of Debois's long-running support for the AI Engineer community.

Swyx 根据 Wall Street Journal 的信息重建了 OpenAI 与 Anthropic 的收入和估值对比：OpenAI 估值约 8500 亿美元、ARR 约 300 亿美元；Anthropic 估值约 9000 亿美元、ARR 约 440 亿美元，同时指出如果按 OpenAI 的方法确认收入，Anthropic 的收入可能要低 80 亿到 100 亿美元。他还转发了新发布的演讲版本，并提到 Patrick Debois 是他早早支持的 keynote，因为 Debois 长期支持 AI Engineer 社区。

Sources: https://x.com/swyx/status/2051440392722391180, https://x.com/swyx/status/2051329419860758932, https://x.com/swyx/status/2051329252344369626

来源: https://x.com/swyx/status/2051440392722391180, https://x.com/swyx/status/2051329419860758932, https://x.com/swyx/status/2051329252344369626

### Peter Yang

Roblox product leader Peter Yang framed the next AI adoption curve in three steps: coding first, knowledge work second, and personal agents third. He also asked for ideas to help his eight-year-old build agent-powered projects that could be shared with classmates and teachers, which is a practical version of the same question: what becomes worth building when agents lower the floor for non-professional creators?

Roblox 产品负责人 Peter Yang 把下一轮 AI 采用曲线概括为三步：先是 coding，其次是 knowledge work，第三步是 personal agents。他还征集想法，希望帮助自己 8 岁的孩子用 agents 做出能分享给同学和老师的项目，这其实是同一个问题的实践版：当 agents 降低非专业创作者的门槛后，什么东西会变得值得构建？

Sources: https://x.com/petergyang/status/2051508988936937764, https://x.com/petergyang/status/2051459299860533483

来源: https://x.com/petergyang/status/2051508988936937764, https://x.com/petergyang/status/2051459299860533483

### Amjad Masad

Replit CEO Amjad Masad shared examples of Replit helping an entrepreneur find investors and land meetings, and highlighted a multimodal learning platform for deaf students as a strong AI education use case. The pattern is less about generic coding acceleration and more about agents helping people get access, communicate, and build practical tools around real constraints.

Replit CEO Amjad Masad 分享了 Replit 帮助创业者找到投资人并获得会议机会的案例，也提到一个面向聋哑学生的多模态学习平台，是 AI 教育的好用例。这里的重点不只是泛泛的 coding 加速，而是 agents 帮人获得机会、完成沟通，并围绕真实限制构建实用工具。

Sources: https://x.com/amasad/status/2051511694040744139, https://x.com/amasad/status/2051406536443035922

来源: https://x.com/amasad/status/2051511694040744139, https://x.com/amasad/status/2051406536443035922

### Guillermo Rauch

Vercel CEO Guillermo Rauch introduced deepsec, an open-source agent orchestrator for deep security reviews. Vercel built it internally, tested it against major open-source projects, and is now positioning it as a way to run thousands of agents in parallel through Vercel Sandbox so security reviews that once required large teams can surface critical vulnerabilities in minutes.

Vercel CEO Guillermo Rauch 发布了 deepsec，一个用于深度安全审查的开源 agent orchestrator。Vercel 先在内部构建并用于大型开源项目测试，现在把它定位为一种通过 Vercel Sandbox 并行运行数千个 agents 的方式，让原本需要大团队花数月发现的关键漏洞，可以在几分钟内浮现。

Source: https://x.com/rauchg/status/2051386798899888539

来源: https://x.com/rauchg/status/2051386798899888539

### Aaron Levie

Box CEO Aaron Levie argued that Anthropic and OpenAI's enterprise agent initiatives are early signs of a fast-growing implementation market. As agents move beyond coding into knowledge work, companies still need upgraded IT systems, trusted context access, workflow modernization, human-agent operating models, adoption work, and change management. The models may contain enormous capability, but applying that intelligence to stable business processes has no shortcut.

Box CEO Aaron Levie 认为 Anthropic 和 OpenAI 帮助企业部署 AI agents 的新计划，是一个快速增长的实施市场的早期信号。当 agents 从 coding 进入 knowledge work，企业仍然需要升级 IT 系统、提供可信上下文、改造工作流、定义人和 agent 的协作关系、推动采用和变更管理。模型本身能力巨大，但把这种智能稳定应用到业务流程里没有捷径。

Source: https://x.com/levie/status/2051344780328858040

来源: https://x.com/levie/status/2051344780328858040

### Garry Tan

Y Combinator CEO Garry Tan said GBrain is different because it unifies memory, code tooling, and search under one graph and one query interface, which he uses all day with a 100k Markdown file and an OpenClaw plus Hermes setup. He also shipped GBrain v0.27 with broader non-Anthropic and non-OpenAI embedding and LLM support, with multimodal embeddings, deep photo OCR, descriptions, and EXIF extraction coming next.

Y Combinator CEO Garry Tan 说 GBrain 的不同之处在于，它不是单独的 memory layer、code tool 或 search engine，而是把三者统一到一个 graph 和一个 query interface 下；他每天都在配合 100k Markdown 文件、OpenClaw 和 Hermes agent setup 使用它。他还发布了 GBrain v0.27，加入更多非 Anthropic、非 OpenAI 的 embeddings 和 LLM 支持，接下来会有 multimodal embeddings、深度照片 OCR、描述和 EXIF 提取。

Sources: https://x.com/garrytan/status/2051525161380364315, https://x.com/garrytan/status/2051517574589116510, https://x.com/garrytan/status/2051536806932566406

来源: https://x.com/garrytan/status/2051525161380364315, https://x.com/garrytan/status/2051517574589116510, https://x.com/garrytan/status/2051536806932566406

### Nikunj Kothari

FPV Ventures partner Nikunj Kothari argued that the 2023-2025 startup vintage is learning that launch videos and distribution can raise funding but do not fix retention. His warning is blunt: momentum was never a moat, and the widening seed-to-Series A gap will likely produce more acquihires. He also called Gemini Flash "criminally" cheap and good, citing 1M context windows, structured outputs, production usefulness, and a new live voice model.

FPV Ventures partner Nikunj Kothari 认为，2023 到 2025 年这一批 startups 正在意识到，漂亮的发布视频和只重视 distribution 也许能融到钱，但不能解决 retention。他的提醒很直接：momentum 从来不是护城河，而 seed 到 Series A 的断层正在显示这一点，接下来 acquihire 可能会更快增多。他还称 Gemini Flash 又便宜又好，提到 1M context windows、structured outputs、生产可用性，以及新的 live voice model。

Sources: https://x.com/nikunj/status/2051349526171287930, https://x.com/nikunj/status/2051321911741972900

来源: https://x.com/nikunj/status/2051349526171287930, https://x.com/nikunj/status/2051321911741972900

### Peter Steinberger

Peter Steinberger released Crabbox 0.5.0 with desktop and browser leases, VNC and authenticated WebVNC, AWS Windows plus WSL2, screenshots, and app launch support. He also described a QA workflow where agents reproduce issues in ephemeral Crabboxes, set up the exact state needed to test and fix them, and post PR videos as evidence.

Peter Steinberger 发布了 Crabbox 0.5.0，包含 desktop 和 browser leases、VNC 与 authenticated WebVNC、AWS Windows 加 WSL2、截图和 app launch 支持。他还描述了一种 QA 工作流：agents 可以在临时 Crabboxes 里复现 issue，搭建测试和修复所需的准确状态，并在 PR 中发布视频作为证据。

Sources: https://x.com/steipete/status/2051557150040711425, https://x.com/steipete/status/2051485798613111116

来源: https://x.com/steipete/status/2051557150040711425, https://x.com/steipete/status/2051485798613111116

### Aditya Agarwal

South Park Commons general partner Aditya Agarwal pushed back on the accelerator label, saying SPC has never wanted to be one because velocity without grounding toward true north is not interesting. It is a concise reminder that speed only matters when the direction is real.

South Park Commons general partner Aditya Agarwal 回应了“accelerator”这个标签，说 SPC 从来不想成为 accelerator，因为没有 true north 支撑的速度并不有趣。这是一个简洁提醒：速度只有在方向真实时才有意义。

Source: https://x.com/adityaag/status/2051330205902581842

来源: https://x.com/adityaag/status/2051330205902581842

### Sam Altman

Sam Altman said he is excited for voice models to get great and is already seeing people change how they interface with AI. He also said OpenAI will do something for people who applied to the GPT-5.5 party but could not fit into the event.

Sam Altman 说他很期待 voice models 变得真正好用，而且已经看到人们开始改变与 AI 交互的方式。他还表示，OpenAI 会为申请 GPT-5.5 party 但因为空间不足没能参加的人做一些安排。

Sources: https://x.com/sama/status/2051464865634742334, https://x.com/sama/status/2051318922805436896

来源: https://x.com/sama/status/2051464865634742334, https://x.com/sama/status/2051318922805436896

## Podcast

### Training Data: Waymo's Dmitri Dolgov: 20 Million Rides and the Road to Full Autonomy

The takeaway: Dmitri Dolgov's Waymo story is a case study in staying alive long enough for a hard AI product to become real, then scaling only after the validation discipline catches up with the ambition.

核心 takeaway：Dmitri Dolgov 的 Waymo 故事，是一个困难 AI 产品如何熬到真实可用，并且只在验证纪律追上雄心之后才开始规模化的案例。

Dolgov, Waymo's long-time technical leader, traces the mission back to the DARPA autonomous vehicle era and the 2009 Google self-driving car project. The early team was about a dozen people, working around the clock on hardware, calibration, algorithms, in-car UX, and night testing. Their first goals now sound small compared with today's fleet: 100,000 fully autonomous miles and ten difficult 100-mile Bay Area routes completed without intervention.

Dolgov 是 Waymo 长期技术领导者，他把这条使命追溯到 DARPA 自动驾驶挑战赛时代，以及 2009 年的 Google self-driving car project。早期团队大约只有十几个人，日夜处理硬件、校准、算法、车内 UX 和夜间测试。当年的目标放到今天看已经很小：10 万英里全自动驾驶，以及 10 条高难度 Bay Area 百英里路线全程无接管。

The most useful lesson is his view of AI hype cycles. Breakthroughs like convolutional nets, transformers, and LLMs can reshape the easy early part of a curve, but they do not erase the long tail. For autonomous vehicles, the goal is not a demo or driver assistance. It is a fully autonomous product with superhuman safety in the physical world, where someone dies on roads every 26 seconds. That mission, plus a realistic view of the long tail, gave the team stamina.

最有价值的经验是他对 AI hype cycle 的看法。卷积神经网络、transformers、LLMs 这样的突破，可以重塑曲线前段那些较容易的问题，但不会抹掉长尾。对自动驾驶来说，目标不是 demo，也不是驾驶辅助，而是在物理世界里提供具备超人安全水平的全自动产品。全球道路上每 26 秒就有人因车祸失去生命，这个使命感加上对长尾的清醒判断，给了团队耐力。

Dolgov also rejects the simple "end to end versus not" framing. Waymo's foundation model is end to end from sensors to decisions, but the product also needs structured intermediate representations, runtime validation, closed-loop evaluation, reinforcement learning rewards, a simulator, and a critic. The line that captures the philosophy: the question is not end to end or something else, but "end to end and then what else?"

Dolgov 也反对简单的“end to end versus not”框架。Waymo 的 foundation model 从 sensors 到 decisions 是 end to end，但产品还需要结构化中间表示、运行时验证、closed-loop evaluation、reinforcement learning rewards、simulator 和 critic。最能概括这套哲学的一句话是：问题不是 end to end 还是别的，而是“end to end，然后还需要什么？”

Source: https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

来源: https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

## Blog

### Anthropic Engineering: Claude Code auto mode: a safer way to skip permissions

Anthropic Engineering introduced Claude Code auto mode, a permission model that tries to sit between constant manual approvals and the unsafe `--dangerously-skip-permissions` flag. The motivation is approval fatigue: Claude Code users approve 93% of prompts, which means the review layer often becomes clicking instead of judgment.

Anthropic Engineering 介绍了 Claude Code auto mode，这是一种介于频繁手动批准和不安全的 `--dangerously-skip-permissions` 之间的权限模型。动机是 approval fatigue：Claude Code 用户会批准 93% 的提示，这意味着审查层常常变成机械点击，而不是判断。

Auto mode uses two defenses. On the input side, a prompt-injection probe scans tool outputs before they enter the agent context and adds warnings when content looks hostile. On the output side, a transcript classifier gates tool calls before execution, seeing user messages and bare tool calls while stripping assistant text and tool outputs. Anthropic reports a two-stage classifier setup: stage one is a fast cautious filter, and stage two adds reasoning only for flagged actions, dropping real-traffic false positives from 8.5% to 0.4% while accepting that some dangerous actions still get through.

Auto mode 有两层防线。输入侧，prompt-injection probe 会在 tool outputs 进入 agent context 前扫描，并在内容看起来有敌意时加入警告。输出侧，transcript classifier 会在 tool calls 执行前拦截，只看 user messages 和裸 tool calls，并剥离 assistant text 与 tool outputs。Anthropic 报告了两阶段 classifier：第一阶段是快速且谨慎的 filter，第二阶段只对被标记的动作加入 reasoning，将真实流量中的 false positives 从 8.5% 降到 0.4%，同时承认仍会有一些危险动作漏过。

The practical message is sober: auto mode is meant to be substantially safer than skipping permissions entirely, not a replacement for careful human review on high-stakes infrastructure. The hard case remains overeager behavior, where the agent is trying to help but takes an action beyond what the user actually authorized.

实际信息很克制：auto mode 的目标是比完全跳过权限安全得多，而不是替代高风险基础设施上的认真人工审查。最难的情况仍然是 overeager behavior，也就是 agent 试图帮忙，却采取了超出用户真实授权范围的行动。

Source: https://www.anthropic.com/engineering/claude-code-auto-mode

来源: https://www.anthropic.com/engineering/claude-code-auto-mode

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
