[English](../../en/daily/ai-digest-2026-10-06-Tue.md) | [中文](../../zh/daily/ai-digest-2026-10-06-Tue.md) | [Bilingual](./ai-digest-2026-10-06-Tue.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. Evals are the product spec, and enterprises still lack the environments to run them.** Meta senior director of AI Madhu Guru argues the most common mistake teams make is treating evals as an extra QA step bolted on after an agent is built, insisting that "your evals are your product spec." Box CEO Aaron Levie sees the same gap from the enterprise side: a "decent amount" of agent adoption is bottlenecked by the ability to test, tune, and optimize agents on "real" work environments, from the files they need to CRMs and email. He predicts every enterprise will have someone managing evals plus infrastructure for building and running evals and simulated environments, and calls it a "huge space." ([Madhu Guru](https://x.com/realmadhuguru/status/2107292113214091355), [Aaron Levie](https://x.com/levie/status/2107283615247999257))

**1. evals 就是产品规范，而企业还缺少运行它们的真实环境。** Meta AI 高级总监 Madhu Guru 认为，团队最常见的错误是把 evals 当成 agent 建好之后才补上的 QA 步骤；他强调「your evals are your product spec」。Box CEO Aaron Levie 从企业侧看到了同样的缺口：相当一部分 agent 的采用和部署，卡在能否在「real」工作环境里测试、调优和优化 agent，包括 agent 需要访问的文件、CRM、邮件等等。他预测每家企业都会有人专门负责 evals，并搭建用于构建和运行 evals 与模拟环境的基础设施，他称这是一个「huge space」。（[Madhu Guru](https://x.com/realmadhuguru/status/2107292113214091355)、[Aaron Levie](https://x.com/levie/status/2107283615247999257)）

**2. The harness layer is where the agent-era economics are shifting.** Y Combinator President and CEO Garry Tan argues that harnesses from labs have an incentive to burn tokens, which gives harnesses from startups real utility; he points to Grep as an example that can "automatically swap token burn into deterministic tested code" that is repeatable just by observing agent use. Thariq, who works on Claude Code at Anthropic, adds a design principle: planning the way he describes is "a lot more token efficient compared to raw HTML," because the model does not have to remake components or logic for common things like state machines, diagrams, and code snippets. ([Garry Tan](https://x.com/garrytan/status/2107129959550685660), [Thariq](https://x.com/trq212/status/2107294499282293017))

**2. agent 时代的经济账正在往 harness 这一层转移。** Y Combinator 总裁兼 CEO Garry Tan 认为，实验室做的 harness 有烧 token 的动机，这反而让创业公司的 harness 有了真正的价值；他以 Grep 为例，说它可以「automatically swap token burn into deterministic tested code」，而且只要观察 agent 的使用就能重复。在 Anthropic 做 Claude Code 的 Thariq 又补上一条设计原则：他描述的这种规划方式「a lot more token efficient compared to raw HTML」，因为模型不需要为 state machine、diagram、code snippet 这类常见内容重新造组件和逻辑。（[Garry Tan](https://x.com/garrytan/status/2107129959550685660)、[Thariq](https://x.com/trq212/status/2107294499282293017)）

**3. The frontier race looks more plural: US open weights are catching up, and "AGI science loops" are next.** Replit CEO Amjad Masad writes simply that "the US is catching up on open-weights models." Garry Tan predicts "AGI Science Loops are coming," that there will be "Muse/Instinct for those AGI Science Loops," and that Halmos is building that. ([Amjad Masad](https://x.com/amasad/status/2107222388429766970), [Garry Tan](https://x.com/garrytan/status/2107173670699622830))

**3. 前沿模型的格局更像多极：美国的开放权重在追赶，「AGI science loop」是下一步。** Replit CEO Amjad Masad 只写了一句：「the US is catching up on open-weights models.」Garry Tan 则预测「AGI Science Loops are coming」，会有人为这些 loop 做「Muse/Instinct」，而 Halmos 正在做这件事。（[Amjad Masad](https://x.com/amasad/status/2107222388429766970)、[Garry Tan](https://x.com/garrytan/status/2107173670699622830)）

**4. Agents need environments that are local, constrained, and verifiable.** Vercel CEO Guillermo Rauch introduced gdp-ts, "Ghosts of Departed Proofs for TypeScript," a library, linter, and AI skill for safer API design: sensitive functions require "proofs" that the caller performed an authorization check, and the typechecker verifies them at compile time. He argues that while such patterns were once niche because of code-review costs and syntactic overhead, "the situation is now inverted," since "agents are writing more code than we can review" and thrive in tight loops with hard constraints. Thariq calls his version of the idea "local hands": Claude runs in the cloud but can access your files locally, and it is also coming to Cowork. SPC general partner Aditya Agarwal wants to run the Muse/Dot "computer" locally, arguing it is a better agent environment than an "increasingly locked down MacOS." ([Guillermo Rauch](https://x.com/rauchg/status/2107119811444748555), [Thariq](https://x.com/trq212/status/2107229483015258493), [Aditya Agarwal](https://x.com/adityaag/status/2107133989941387282))

**4. agent 需要的是本地、受约束、可验证的运行环境。** Vercel CEO Guillermo Rauch 介绍了 gdp-ts，即「Ghosts of Departed Proofs for TypeScript」，一个用于更安全 API 设计的库、linter 和 AI skill：敏感函数需要调用方提供「proofs」，证明自己做过授权检查，而类型检查器会在编译期验证这些 proof。他说这类模式过去因为人工 code review 的成本以及认知和语法上的开销而很小众，如今「the situation is now inverted」：因为「agents are writing more code than we can review」，而 agent 恰恰喜欢在有硬约束的紧循环里工作。Thariq 把这种思路叫作「local hands」：Claude 跑在云端，但可以访问你本地的文件，这个能力也即将进入 Cowork。SPC 普通合伙人 Aditya Agarwal 想在本机运行 Muse/Dot 的「computer」，他认为这比一个「increasingly locked down MacOS」更适合做 agent 环境。（[Guillermo Rauch](https://x.com/rauchg/status/2107119811444748555)、[Thariq](https://x.com/trq212/status/2107229483015258493)、[Aditya Agarwal](https://x.com/adityaag/status/2107133989941387282)）

**5. Builders keep shipping small, useful surfaces, from collaborative ChatGPT spaces to consumer learning tools.** Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, says a teammate is "cooking up magic with collaborative space right in ChatGPT," which is "improving leaps and bounds every day." Peter Yang, who makes practical AI tutorials and interviews, published a walkthrough for an AI language-learning app that teaches Japanese over live voice calls, built with Gemini Live APIs for voice and Nano Banana for diorama art, and points readers to more on Gemini 3.8 Live. Ryo Lu, a designer who has worked on Cursor, Notion, and Stripe, shipped ryOS Subtitles for Chrome and a tool for watching Netflix with subtitles in any two languages, plus pronunciation guides for Japanese, Chinese, and Korean. ([Thibault Sottiaux](https://x.com/thsottiaux/status/2107200530477101461), [Peter Yang](https://x.com/petergyang/status/2107108755699900459), [Peter Yang](https://x.com/petergyang/status/2107108768240796093), [Ryo Lu](https://x.com/ryolu_/status/2107146629338042853), [Ryo Lu](https://x.com/ryolu_/status/2107146721591726323))

**5. builder 们还在持续发布小而实用的产品，从 ChatGPT 协作空间到消费级学习工具。** 在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 说，有同事正在「cooking up magic with collaborative space right in ChatGPT」，而且「improving leaps and bounds every day」。做实用 AI 教程和访谈的 Peter Yang 发布了一个用实时语音通话教自己日语的 AI 语言学习应用教程，用 Gemini Live API 做语音，用 Nano Banana 做 diorama 美术，并给出了更多关于 Gemini 3.8 Live 的信息。曾在 Cursor、Notion、Stripe 做设计的 Ryo Lu 发布了 Chrome 扩展 ryOS Subtitles，以及一个能让 Netflix 显示任意双语字幕、并为日语、中文、韩语提供发音指南的小工具。（[Thibault Sottiaux](https://x.com/thsottiaux/status/2107200530477101461)、[Peter Yang](https://x.com/petergyang/status/2107108755699900459)、[Peter Yang](https://x.com/petergyang/status/2107108768240796093)、[Ryo Lu](https://x.com/ryolu_/status/2107146629338042853)、[Ryo Lu](https://x.com/ryolu_/status/2107146721591726323)）

**6. A designer's pause on craft: constant refinement is not the same as making something worth making.** In a long reflection on Steve Jobs, Ryo Lu writes that he has felt the industry "getting stuck in a loop" of constant refinement and more ways to keep people scrolling, and that even as machines get smarter, "we've also become more disconnected and lonely." He says he wishes more energy went to "learning from people's lives and making them better," and closes with a line he keeps close: "the people who are crazy enough to think they can change the world, are the ones who do." ([Ryo Lu](https://x.com/ryolu_/status/2107246891977335049))

**6. 一位设计师对手艺的停顿：不断微调，不等于做出真正值得做的东西。** 在一篇回忆 Steve Jobs 的长文里，Ryo Lu 写道，他感觉这个行业「getting stuck in a loop」：不断微调、优化供应链、想更多办法让人继续刷下去；就算机器越来越聪明，「we've also become more disconnected and lonely」。他说他希望更多精力花在「learning from people's lives and making them better」上，并以自己一直记着的一句话收尾：「the people who are crazy enough to think they can change the world, are the ones who do.」（[Ryo Lu](https://x.com/ryolu_/status/2107246891977335049)）

## X / Twitter

### Thibault Sottiaux

Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, says a teammate is "cooking up magic with collaborative space right in ChatGPT," adding that it is "improving leaps and bounds every day."

在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 说，有同事正在「cooking up magic with collaborative space right in ChatGPT」，并补充说它「improving leaps and bounds every day」。

- [Thibault Sottiaux: collaborative space in ChatGPT](https://x.com/thsottiaux/status/2107200530477101461)

### Peter Yang

Peter Yang, who makes practical AI tutorials and interviews for busy people, published a tutorial for an AI language-learning app that teaches him Japanese through live voice calls. The build uses his spec skill to create key designs, Gemini Live APIs for voice, and Nano Banana for diorama art, and he says followers can build an app to learn 100 phrases for any language before a trip. He also points readers to more on Gemini 3.8 Live.

做实用 AI 教程和访谈的 Peter Yang 发布了一个教程，教人构建一个能通过实时语音通话教自己日语的 AI 语言学习应用。这个项目用他的 spec skill 完成关键设计，用 Gemini Live API 处理语音，用 Nano Banana 生成 diorama 美术；他说读者可以照着做一个能学习任何语言 100 句短语的应用。他还给出了更多关于 Gemini 3.8 Live 的信息。

- [Peter Yang: AI language-learning app tutorial](https://x.com/petergyang/status/2107108755699900459)
- [Peter Yang: learn more about Gemini 3.8 Live](https://x.com/petergyang/status/2107108768240796093)

### Madhu Guru

Madhu Guru, senior director of AI at Meta, argues the most common mistake teams make is treating evals as an additional QA step once the agent is built. AI products are fundamentally different, he says: "Your evals are your product spec."

Meta AI 高级总监 Madhu Guru 认为，团队最常见的错误是把 evals 当成 agent 建好之后才追加的 QA 步骤。AI 产品有着本质不同，他说：「Your evals are your product spec.」

- [Madhu Guru: evals are your product spec](https://x.com/realmadhuguru/status/2107292113214091355)

### Thariq

Thariq, who works on Claude Code at Anthropic, says planning the way he describes is "a lot more token efficient compared to raw HTML," because the model does not need to remake the components or logic for common things like state machines, diagrams, and code snippets. His favorite name for the pattern is "local hands": Claude runs in the cloud but can access your files locally, and it is also coming to Cowork.

在 Anthropic 做 Claude Code 的 Thariq 说，他描述的这种规划方式「a lot more token efficient compared to raw HTML」，因为模型不需要为 state machine、diagram、code snippet 这类常见内容重新造组件和逻辑。他最喜欢把这个模式叫作「local hands」：Claude 跑在云端，但可以访问你本地的文件，这个能力也即将进入 Cowork。

- [Thariq: token-efficient planning](https://x.com/trq212/status/2107294499282293017)
- [Thariq: "local hands" and Cowork](https://x.com/trq212/status/2107229483015258493)

### Amjad Masad

Replit CEO Amjad Masad says "the US is catching up on open-weights models."

Replit CEO Amjad Masad 说：「the US is catching up on open-weights models.」

- [Amjad Masad: US catching up on open weights](https://x.com/amasad/status/2107222388429766970)

### Guillermo Rauch

Vercel CEO Guillermo Rauch introduced gdp-ts, "Ghosts of Departed Proofs for TypeScript," a library, linter, and AI skill for safer API design. Sensitive functions require "proofs" that the caller performed an authorization check, and the typechecker verifies these proofs at compile time, which he says prevents teams and agents from shipping catastrophic security bugs. He notes that while these patterns have existed for some time, especially in ecosystems like Haskell, human code review and cognitive and syntactic overhead made them niche, and that "the situation is now inverted" because agents write more code than humans can review and thrive under hard constraints. The README models a real Vercel API product constraint: changing the password on a Project requires a proof of a certain role plus a certain entitlement.

Vercel CEO Guillermo Rauch 介绍了 gdp-ts，即「Ghosts of Departed Proofs for TypeScript」，一个用于更安全 API 设计的库、linter 和 AI skill。敏感函数需要调用方提供「proofs」，证明自己做过授权检查，类型检查器会在编译期验证这些 proof，他说这能避免团队和 agent 把灾难性的安全漏洞发布出去。他指出，这类模式虽然早已存在，尤其在 Haskell 这样的生态里，但人工 code review 以及认知和语法上的开销让它们一直很小众；如今「the situation is now inverted」，因为 agent 写的代码已经超过人类能 review 的量，而 agent 恰恰在有硬约束的紧循环里如鱼得水。README 里还建模了一个真实的 Vercel API 产品约束：修改 Project 密码必须提供某个角色加某项权益的 proof。

- [Guillermo Rauch: gdp-ts for safer API design](https://x.com/rauchg/status/2107119811444748555)

### Aaron Levie

Box CEO Aaron Levie says a decent amount of agent adoption and deployment is bottlenecked by being able to test, tune, and optimize agents on "real" work environments, including the files agents need to access, CRMs, and email. It is impossible to know how agents are performing without understanding how well they execute on your evals and how they will perform after a model change or workflow upgrade, and every enterprise is doing this one by one, which is slow and tedious. He predicts every enterprise will have someone managing evals plus infrastructure for building and running evals and simulated environments, and calls it a "huge space."

Box CEO Aaron Levie 说，相当一部分 agent 的采用和部署，卡在能否在「real」工作环境里测试、调优和优化 agent，包括 agent 需要访问的文件、CRM、邮件等等。如果不了解 agent 在 evals 上执行得怎么样、以及换模型或升级工作流之后会表现如何，就不可能知道它们的实际表现；而每家企业现在都在一家一家地手动做，又慢又繁琐。他预测每家企业都会有人专门负责 evals，并搭建用于构建和运行 evals 与模拟环境的基础设施，他称这是一个「huge space」。

- [Aaron Levie: evals and simulated environments](https://x.com/levie/status/2107283615247999257)

### Ryo Lu

Ryo Lu, a designer who has worked on Cursor, Notion, and Stripe, shipped ryOS Subtitles for Chrome and a small tool for language learners: watch Netflix with subtitles in any two languages, plus pronunciation guides for Japanese, Chinese, and Korean, with customizable styles and hand-picked defaults. In a separate reflection on remembering Steve Jobs, he writes that he has felt the industry "getting stuck in a loop" of constant refinement, better supply chains, and more ways to keep people scrolling, and that even as machines get smarter, "we've also become more disconnected and lonely." He says he wishes more energy went to "learning from people's lives and making them better," and closes with the line he keeps: "the people who are crazy enough to think they can change the world, are the ones who do."

曾在 Cursor、Notion、Stripe 做设计的 Ryo Lu 发布了 Chrome 扩展 ryOS Subtitles，以及一个面向语言学习者的小工具：在 Netflix 上显示任意两种语言的字幕，并为日语、中文、韩语提供发音指南，还支持自定义样式和精选默认设置。在另一篇回忆 Steve Jobs 的长文里，他写道，他感觉这个行业「getting stuck in a loop」：不断微调、优化供应链、想更多办法让人继续刷下去；就算机器越来越聪明，「we've also become more disconnected and lonely」。他说他希望更多精力花在「learning from people's lives and making them better」上，并以自己一直记着的一句话收尾：「the people who are crazy enough to think they can change the world, are the ones who do.」

- [Ryo Lu: ryOS Subtitles for Chrome](https://x.com/ryolu_/status/2107146721591726323)
- [Ryo Lu: dual-language Netflix subtitles](https://x.com/ryolu_/status/2107146629338042853)
- [Ryo Lu: remembering Steve](https://x.com/ryolu_/status/2107246891977335049)

### Garry Tan

Y Combinator President and CEO Garry Tan says "AGI Science Loops are coming," that there will be "Muse/Instinct for those AGI Science Loops," and that Halmos is building that. He also argues that harnesses from labs have an incentive to burn tokens, which means harnesses from startups have real utility, citing Grep as something that can "automatically swap token burn into deterministic tested code" that is repeatable just by observing agent use.

Y Combinator 总裁兼 CEO Garry Tan 说「AGI Science Loops are coming」，会有人为这些 loop 做「Muse/Instinct」，而 Halmos 正在做这件事。他还认为，实验室做的 harness 有烧 token 的动机，这反而让创业公司的 harness 有了真正的价值；他以 Grep 为例，说它可以「automatically swap token burn into deterministic tested code」，而且只要观察 agent 的使用就能重复。

- [Garry Tan: AGI science loops](https://x.com/garrytan/status/2107173670699622830)
- [Garry Tan: harness incentives and token burn](https://x.com/garrytan/status/2107129959550685660)

### Aditya Agarwal

Aditya Agarwal, a general partner at SPC, highlighted that Sergey Levine, cofounder of Physical Intelligence, is coming to SPC: he notes Levine has three Stanford degrees, has been Berkeley EECS faculty since 2016, and "builds the algorithms that let robots learn from experience, linking what they see to how they move." Agarwal also writes that it would be interesting to run the Muse/Dot "computer" locally, which he sees as a better agent environment than an "increasingly locked down MacOS."

SPC 普通合伙人 Aditya Agarwal 提到，Physical Intelligence 联合创始人 Sergey Levine 即将来到 SPC：他指出 Levine 拥有三个 Stanford 学位，自 2016 年起在 Berkeley EECS 任教，并且「builds the algorithms that let robots learn from experience, linking what they see to how they move」。Agarwal 还写道，如果能在本机运行 Muse/Dot 的「computer」会很有意思，他认为这比一个「increasingly locked down MacOS」更适合做 agent 环境。

- [Aditya Agarwal: Sergey Levine at SPC](https://x.com/adityaag/status/2107171588194152936)
- [Aditya Agarwal: running Muse/Dot locally](https://x.com/adityaag/status/2107133989941387282)

## Podcast

The validated feed contained no new qualifying podcast episodes for this run.

本轮通过验证的 feed 中没有新的合格播客节目。

## Blog

The validated feed contained no new qualifying blog posts for this run.

本轮通过验证的 feed 中没有新的合格博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
