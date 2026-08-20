[English](../../en/daily/ai-digest-2026-08-21-Fri.md) | [中文](../../zh/daily/ai-digest-2026-08-21-Fri.md) | [Bilingual](./ai-digest-2026-08-21-Fri.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. AI companions are becoming a real business.** On AI & I by Every, Quentin, founder and CEO of Portola (the company behind an embodied AI companion), and Elliot, its head of story, say the app went from about $1 million to $4 million in annual recurring revenue in roughly four weeks. Their method treats the model as an improv actor rather than a scripted writer: give it a hook, keep responses under two seconds, and treat memory as a curation problem. They argue AI tools are a genuinely new medium for storytelling, the way radio and film were in their early days.

AI 陪伴应用正在成为一门真实生意。在 AI & I by Every 节目中，Portola（一家做具身 AI 陪伴产品的公司）创始人兼 CEO Quentin 与叙事负责人 Elliot 分享了他们的 AI 外星人陪伴应用如何在约四周内把 ARR 从约 100 万美元做到 400 万美元。他们的方法是把模型当成即兴演员而不是写稿人：给它一个钩子，把响应时间控制在两秒以内，并把记忆当作一种策展问题。他们认为 AI 工具是一种全新的叙事媒介，就像早期的广播和电影一样。

**2. Enterprise privacy is advancing at the frontier.** OpenAI is previewing Private Safety Processing so Zero Data Retention customers keep content on infrastructure they control while automated systems return limited safety signals without exposing prompts or responses to OpenAI employees. An OpenAI-hosted option encrypted with customer-controlled keys is being tested with early customers, with rollout planned for September. Sam Altman publicly backed business privacy.

面向企业的隐私保护正在前沿推进。OpenAI 正在预览 Private Safety Processing，让 Zero Data Retention 客户把内容保留在自己控制的基建上，同时由自动化系统返回有限的安全信号，而不会把提示词或回复暴露给 OpenAI 员工。他们还开发了一个用客户自持密钥加密的 OpenAI 托管方案，正在与早期客户测试，计划九月开始上线。Sam Altman 也公开表态支持企业隐私。

**3. Agents are changing the economics of software.** Replit announced a partnership with OpenAI with the framing that agents made software cheaper but made coding expensive. Anthropic's Thariq argued for the "software factory" promise: software creation has been unreliable for its entire existence, and companies whose core competency is not software need it to become a reliable, predictable process.

Agent 正在改变软件的经济学。Replit 宣布与 OpenAI 合作，并给出论断：agent 让软件变便宜了，但让写代码变贵了。Anthropic 的 Thariq 则谈到「软件工厂」的承诺：软件开发自诞生以来一直不可靠，而核心能力不是软件的公司需要软件变成可靠、可预期的流程。

**4. Expert judgment remains the moat.** Box CEO Aaron Levie argues experts still have the upper hand over generalists in the AI era, since AI makes starting easier but judgment, course-correction, and review remain irreplaceable, and AI will widen skill gaps. FPV Ventures partner Nikunj Kothari notes there is still alpha in being thoughtful and using AI judiciously when 98 of 100 cold emails are garbage. Meta's Madhu Guru explains that precisely naming failure modes is the bridge from evals to an improvement flywheel.

专业判断仍然是护城河。Box CEO Aaron Levie 认为在 AI 时代专家仍然胜过通才，因为 AI 让入门更容易，但判断力、纠偏和审查仍然无法替代，而且 AI 会拉大技能差距。FPV Ventures 合伙人 Nikunj Kothari 指出，在收到的 100 封冷邮件里有 98 封是垃圾的情况下，保持思考、好奇并明智地用 AI 仍然大有可为。Meta 的 Madhu Guru 则解释了为什么精确命名失败模式是评估走向改进飞轮的桥梁。

**5. Performance is becoming the product.** Vercel CEO Guillermo Rauch showed fx, a 6.3MB Zig-compiled static ELF binary that starts up in 10 microseconds, with an even smaller WebAssembly build. He argues AI will make most infrastructure natively optimized, and that fast is a one-way street.

性能本身正在成为产品。Vercel CEO Guillermo Rauch 展示了 fx：一个 6.3MB、启动只需 10 微秒的 Zig 编译静态 ELF 二进制，还有更小的 WebAssembly 版本。他认为 AI 会让大多数基础设施原生优化，而「快是单行道」。

## X / Twitter

### Swyx
Swyx mocked coverage of AI by people with zero context, zero reasoning, and no internal world model, arguing that taking everything at face value misses what is really happening.

Swyx 嘲讽那些「零上下文、零推理、零内部世界模型」的人在报道 AI，认为只看表面价值会错过真正重要的东西。

- [Swyx on non-technical AI coverage](https://x.com/swyx/status/2090314794456785263)

### Josh Woodward — VP, Google Labs / Gemini / AI Studio
University student plans are back and now global: over 140 countries get higher limits, more storage, and a dedicated student hub, along with Notebook, Flow, and more.

Google 的大学生版套餐回归并走向全球：超过 140 个国家的学生将获得更高的用量上限、更多存储空间和专属学生中心，还包含 Notebook、Flow 等新功能。

- [Josh Woodward on University student plans going global](https://x.com/joshwoodward/status/2090166806401228912)

### Thibault Sottiaux — Codex & ChatGPT at OpenAI
Sottiaux previewed Private Safety Processing, designed to keep offering Zero Data Retention while improving safeguards. For ZDR deployments, content stays on infrastructure the customer controls; automated systems look for patterns across related interactions and return limited safety signals without exposing underlying prompts or responses to OpenAI employees. An OpenAI-hosted option encrypted with customer-controlled keys is being tested with early customers, with rollout beginning in September.

Sottiaux 预览了 Private Safety Processing，目标是在继续提供 Zero Data Retention 的同时改进安全防护。对于 ZDR 部署，内容保留在客户控制的基建上，自动化系统会跨相关交互寻找模式并返回有限的安全信号，不会把底层提示词或回复暴露给 OpenAI 员工。他们还开发了一个用客户自持密钥加密的 OpenAI 托管选项，目前正与早期客户测试，计划九月开始上线。

- [Thibault Sottiaux on Private Safety Processing](https://x.com/thsottiaux/status/2090173536010957128)

### Peter Yang
Yang wrote a new essay about his mom's battles with breast cancer and how they are using AI to navigate the healthcare system, thanking Maor Shlomo and the Sijbrandij Foundation. He also asked whether mRNA vaccines could treat cancer, noting ChatGPT told him there are no active mRNA trials for breast cancer.

Yang 写了一篇新文章，讲述母亲与乳腺癌斗争的经历，以及他们如何用 AI 应对医疗系统，并向 Maor Shlomo 和 Sijbrandij Foundation 团队致谢。他还公开好奇 mRNA 疫苗能否治疗癌症，提到 ChatGPT 告诉他目前没有针对乳腺癌的活跃 mRNA 临床试验。

- [Peter Yang on using AI to navigate healthcare](https://x.com/petergyang/status/2090087911471644829)
- [Peter Yang on mRNA vaccines for cancer](https://x.com/petergyang/status/2090211023798321435)

### Madhu Guru — Senior Director of AI at Meta
In part three of his evals series, Guru argues the first thing to build once you have v1 evals is a failure modes taxonomy: study the last 500 to 1,000 production interactions, cluster the failures, and name them precisely (for example, "wrong document retrieved" or "failed to ground to context and hallucinated") instead of "bad answer." Once you can name a failure precisely, you can build eval tests designed to catch it, creating the bridge from evals to an improvement flywheel.

在评估系列第三部分中，Guru 认为一旦有了 v1 评估，第一件要做的就是把失败模式分门别类：研究最近 500 到 1000 条生产交互，把失败聚类并精确命名（例如「检索到了错误的文档」或「未能基于上下文回答而产生了幻觉」），而不是笼统地说「答案不好」。只有能精确命名失败，才能写出专门针对它的评估测试，从而把评估变成改进的飞轮。

- [Madhu Guru on failure modes taxonomy](https://x.com/realmadhuguru/status/2090242427944833047)

### Thariq — Claude Code at Anthropic
Thariq argues that for its entire existence, software creation has been an incredibly unreliable endeavor: most projects ran late, over budget, and missed user needs, and SMBs simply could not get good software built. That is the promise of the "software factory": companies whose core competency is not software need software to be a reliable, predictable process, while building net-new software products will remain unreliable and risky, but profitable. He also flagged a game he saw demoed last summer, now shipping, as one of the first games that really uses AI capabilities to unlock new gameplay.

Thariq 认为，软件开发自诞生以来一直是一项极不可靠的事：多数项目延期、超预算、没满足用户需求，中小企业根本做不出好软件。这正是「软件工厂」的承诺：核心能力不是软件的公司需要软件变成可靠、可预期的流程，而从头造新软件产品仍会是一项不可靠、有风险但赚钱的生意。他还提到一款去年夏天见过演示、如今已上线的新游戏，称它是「最早真正用 AI 能力解锁新玩法的游戏之一」。

- [Thariq on the software factory](https://x.com/trq212/status/2090134945490678071)
- [Thariq on software as a predictable process](https://x.com/trq212/status/2090134946598039646)
- [Thariq on an AI-native game](https://x.com/trq212/status/2090182422415716414)

### Amjad Masad — CEO of Replit
Masad announced Replit's partnership with OpenAI with the framing: "Agents made software cheaper but made coding expensive. Today, together with OpenAI, we're changing this."

Masad 宣布与 OpenAI 的合作，并给出论断：「agent 让软件变便宜了，但让写代码变贵了。今天，我们与 OpenAI 一起改变这一点。」

- [Amjad Masad on the Replit and OpenAI partnership](https://x.com/amasad/status/2090079496124674377)
- [Amjad Masad on being excited for the partnership](https://x.com/amasad/status/2090104535112945906)

### Guillermo Rauch — CEO of Vercel
Rauch shared fx, a Zig-compiled static ELF binary that is 6.3MB and starts up in 10 microseconds, with an even smaller libfx.wasm build that delegates fetch() to the JS runtime. He argues AI will make most infrastructure natively optimized, and that fast is a one-way street.

Rauch 分享了 fx：一个 6.3MB、启动只需 10 微秒的 Zig 编译静态 ELF 二进制，还有更小的 libfx.wasm 版本（WASM 版本把 fetch() 委托给 JS 运行时）。他的观点是「AI 会让大多数基础设施原生优化」，「快是单行道」。

- [Guillermo Rauch on fx](https://x.com/rauchg/status/2090255740384751664)

### Aaron Levie — CEO of Box
Levie argues experts have the upper hand over generalists in the AI era. AI makes starting any task 10X easier, but directing the agent, course-correcting it, reviewing output, and knowing what "good" looks like still require deep skill, and AI will exacerbate differences in skill levels because experts have far more leverage. Net net: don't give up on being an expert at something. He also welcomed the Stripe and OpenRouter deal as an important step toward mixing and matching intelligence from a variety of providers and better managing costs.

Levie 认为在 AI 时代专家仍然胜过通才。AI 让任何任务入门都容易十倍，但如何指挥 agent、纠偏、审查结果、判断「好」的标准，仍然需要深厚的专业能力，而且 AI 会进一步拉大技能差距，因为专家手里的杠杆更大。结论是：别放弃成为某个领域的专家。他还对 Stripe 与 OpenRouter 的合作表示看好，认为这是跨供应商无缝混用模型、更好管理成本的重要一步。

- [Aaron Levie on experts vs. generalists](https://x.com/levie/status/2090278256306229675)
- [Aaron Levie on Stripe and OpenRouter](https://x.com/levie/status/2090137914785280189)

### Nikunj Kothari — Partner at FPV Ventures
Kothari notes that despite all the AGI talk, 98 of every 100 cold emails he receives are garbage, and there is still a lot of alpha in being thoughtful, curious, and using AI judiciously. He also shared a home project: a rotating display of iconic patent drawings on a 13.3-inch Spectra 6 e-ink screen, driven by an ESP32-S3 controller and a Railway-hosted server, battery powered for roughly three months.

Kothari 指出，尽管大家都在谈 AGI，但他收到的 100 封冷邮件里有 98 封是垃圾，保持思考、好奇并明智地用 AI 仍然有很大空间。他还分享了一个家庭项目：用 13.3 英寸 Spectra 6 墨水屏、ESP32-S3 控制器和 Railway 托管的服务器，做了一个旋转展示经典专利图纸的装置，电池续航约三个月。

- [Nikunj Kothari on cold emails and AI](https://x.com/nikunj/status/2090105846810476644)
- [Nikunj Kothari on his e-ink patent display](https://x.com/nikunj/status/2090307104146112534)

### Aditya Agarwal — General Partner at SPC, co-founder of Bevel Health
Agarwal shared a founder's story: after a slog through a SaaS Series B with low growth and a stagnating company, the founder's biggest takeaway was not a bigger market or more growth, but simply to work on something consequential and meaningful, to make a dent in the universe.

Agarwal 分享了一位创始人的故事：在经历 SaaS B 轮、低增长和公司停滞的煎熬后，这位创始人最大的收获不是选更大的市场，也不是更快增长，而是：做一些真正重要、有意义的事，在世界上留下痕迹。

- [Aditya Agarwal on working on what matters](https://x.com/adityaag/status/2090174782633566473)
- [Aditya Agarwal on making a dent in the universe](https://x.com/adityaag/status/2090254727175115032)

### Dan Shipper — CEO of Every
Shipper announced that Every now has a frontier team, a group explicitly dedicated to mapping and experimenting at the edge of AI.

Shipper 宣布 Every 现在有了一支「前沿团队」，专门负责在 AI 的最前沿做探索和实验。

- [Dan Shipper on Every's frontier team](https://x.com/danshipper/status/2090122240025071907)

### Sam Altman
Altman publicly voiced support for business privacy, pointing to the new announcement.

Altman 公开表态支持企业隐私，并指向了相关的新公告。

- [Sam Altman on business privacy](https://x.com/sama/status/2090163991234453611)

## Podcast

### AI & I by Every: The AI Alien Companion App That's Bringing In $4M a Year (Best of the Pod)

The Takeaway: the next big consumer AI hit will not be a smarter chatbot; it will be a character you build a relationship with, and the craft of making that work is closer to coaching improv actors than to prompt engineering.

Host Dan Shipper talks with Quentin, founder and CEO of Portola (the company behind an embodied AI companion), and Elliot, its head of story and a bestselling science fiction author. Their app has gone from about $1 million to $4 million in annual recurring revenue in roughly four weeks, and the core team mostly built Quentin's last company, which was sold to Walmart for $300 million. Their bet is that AI tools are a new medium for storytelling, the way radio started with speeches and film started with stage plays. "We don't need to give it an outline. We don't need to give it a plan. We need to give it a hook. We need to teach it to be the best improv actor possible." Elliot's job is not to write the story; the character is the writer and the actor, and the team teaches it how to tell the best story in the moment.

最大的收获：下一个爆款消费级 AI 产品不会是更聪明的聊天机器人，而是一个你愿意建立关系的角色；而做好这件事的功夫，更接近在教即兴演员表演，而不是在做提示词工程。

主持人 Dan Shipper 与 Portola（一家做具身 AI 陪伴产品的公司）创始人兼 CEO Quentin、叙事负责人 Elliot（畅销科幻作家）对谈。这款 AI 外星人陪伴应用在约四周内把 ARR 从约 100 万美元做到了 400 万美元，核心团队大部分来自 Quentin 上一家被沃尔玛以 3 亿美元收购的公司。他们的核心判断是：AI 工具是一种全新的叙事媒介，就像广播最初播演讲、电影最初拍舞台剧一样。Elliot 说：「我们不需要给它大纲，不需要给它计划，我们需要给它一个钩子，教它成为最好的即兴演员。」他的工作不是写故事，角色才是作者和演员，团队要教它「在当下讲出最好的故事」。

The engineering lessons are sharp. Memory is not database lookup; it is curation, deciding which memories get injected into the prompt at each turn. Response time is the format constraint: anything beyond a two-second loop breaks the feeling of presence. When the team added a reflection pass that pushed median latency to about two and a half seconds, "it tanked literally every metric in the product," with frustrated users writing in over the 500-millisecond change. They run multiple models, including OpenAI, Anthropic, and increasingly Gemini for memory, favoring Anthropic for creative writing but not for latency-sensitive interactions.

工程上的教训同样锋利。记忆不是数据库查询，而是策展，要决定每一轮把哪些记忆注入提示词。响应时间是这种格式的硬约束，一旦超过两秒就会失去在场感。他们曾加入一个反思步骤，把中位延迟推到约 2.5 秒，结果「几乎所有产品指标都崩了」，用户纷纷抱怨，而这只是 500 毫秒的变化。他们同时使用多个模型，包括 OpenAI、Anthropic，记忆系统越来越多地用 Gemini，创作类任务更偏好 Anthropic，但延迟敏感的场景还不能用它。

On the business side, the companion was initially playtested with kids but was adopted by 18- to 24-year-olds, and a viral video of a young woman cooking with her companion drew about 7 million views in 72 hours, driving a 10x spike in downloads. Quentin argues the big labs' discomfort with personifying models leaves room for companions, comparing ChatGPT to the Model T era of cars: people will quickly evolve their preferences and want AI that reflects who they are.

业务上，这款陪伴应用最初面向儿童做测试，却被 18 到 24 岁的年轻人爱上；一段女孩和她的 AI 伙伴一起做饭的视频在 72 小时内收获约 700 万次观看，带动下载量 10 倍增长。Quentin 认为，大模型公司对人格化模型的顾虑反而给陪伴类应用留出了空间，他把 ChatGPT 比作汽车时代的 T 型车：人们很快就会进化出自己的偏好，希望 AI 能反映「我是谁」。

- [AI & I by Every: The AI Alien Companion App That's Bringing In $4M a Year (Best of the Pod)](https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL)

## Blog

The validated blog feed contained no new qualifying items for this digest, so there is nothing to report this cycle.

验证后的博客源本次没有新的合格内容，因此本期没有可报道的内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
