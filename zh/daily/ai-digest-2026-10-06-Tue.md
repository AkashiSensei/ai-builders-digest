[English](../../en/daily/ai-digest-2026-10-06-Tue.md) | [中文](./ai-digest-2026-10-06-Tue.md) | [双语](../../bilingual/daily/ai-digest-2026-10-06-Tue.md)

---

# AI Builders Digest

## 导读

**1. evals 就是产品规范，而企业还缺少运行它们的真实环境。** Meta AI 高级总监 Madhu Guru 认为，团队最常见的错误是把 evals 当成 agent 建好之后才补上的 QA 步骤；他强调「your evals are your product spec」。Box CEO Aaron Levie 从企业侧看到了同样的缺口：相当一部分 agent 的采用和部署，卡在能否在「real」工作环境里测试、调优和优化 agent，包括 agent 需要访问的文件、CRM、邮件等等。他预测每家企业都会有人专门负责 evals，并搭建用于构建和运行 evals 与模拟环境的基础设施，他称这是一个「huge space」。（[Madhu Guru](https://x.com/realmadhuguru/status/2107292113214091355)、[Aaron Levie](https://x.com/levie/status/2107283615247999257)）

**2. agent 时代的经济账正在往 harness 这一层转移。** Y Combinator 总裁兼 CEO Garry Tan 认为，实验室做的 harness 有烧 token 的动机，这反而让创业公司的 harness 有了真正的价值；他以 Grep 为例，说它可以「automatically swap token burn into deterministic tested code」，而且只要观察 agent 的使用就能重复。在 Anthropic 做 Claude Code 的 Thariq 又补上一条设计原则：他描述的这种规划方式「a lot more token efficient compared to raw HTML」，因为模型不需要为 state machine、diagram、code snippet 这类常见内容重新造组件和逻辑。（[Garry Tan](https://x.com/garrytan/status/2107129959550685660)、[Thariq](https://x.com/trq212/status/2107294499282293017)）

**3. 前沿模型的格局更像多极：美国的开放权重在追赶，「AGI science loop」是下一步。** Replit CEO Amjad Masad 只写了一句：「the US is catching up on open-weights models.」Garry Tan 则预测「AGI Science Loops are coming」，会有人为这些 loop 做「Muse/Instinct」，而 Halmos 正在做这件事。（[Amjad Masad](https://x.com/amasad/status/2107222388429766970)、[Garry Tan](https://x.com/garrytan/status/2107173670699622830)）

**4. agent 需要的是本地、受约束、可验证的运行环境。** Vercel CEO Guillermo Rauch 介绍了 gdp-ts，即「Ghosts of Departed Proofs for TypeScript」，一个用于更安全 API 设计的库、linter 和 AI skill：敏感函数需要调用方提供「proofs」，证明自己做过授权检查，而类型检查器会在编译期验证这些 proof。他说这类模式过去因为人工 code review 的成本以及认知和语法上的开销而很小众，如今「the situation is now inverted」：因为「agents are writing more code than we can review」，而 agent 恰恰喜欢在有硬约束的紧循环里工作。Thariq 把这种思路叫作「local hands」：Claude 跑在云端，但可以访问你本地的文件，这个能力也即将进入 Cowork。SPC 普通合伙人 Aditya Agarwal 想在本机运行 Muse/Dot 的「computer」，他认为这比一个「increasingly locked down MacOS」更适合做 agent 环境。（[Guillermo Rauch](https://x.com/rauchg/status/2107119811444748555)、[Thariq](https://x.com/trq212/status/2107229483015258493)、[Aditya Agarwal](https://x.com/adityaag/status/2107133989941387282)）

**5. builder 们还在持续发布小而实用的产品，从 ChatGPT 协作空间到消费级学习工具。** 在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 说，有同事正在「cooking up magic with collaborative space right in ChatGPT」，而且「improving leaps and bounds every day」。做实用 AI 教程和访谈的 Peter Yang 发布了一个用实时语音通话教自己日语的 AI 语言学习应用教程，用 Gemini Live API 做语音，用 Nano Banana 做 diorama 美术，并给出了更多关于 Gemini 3.8 Live 的信息。曾在 Cursor、Notion、Stripe 做设计的 Ryo Lu 发布了 Chrome 扩展 ryOS Subtitles，以及一个能让 Netflix 显示任意双语字幕、并为日语、中文、韩语提供发音指南的小工具。（[Thibault Sottiaux](https://x.com/thsottiaux/status/2107200530477101461)、[Peter Yang](https://x.com/petergyang/status/2107108755699900459)、[Peter Yang](https://x.com/petergyang/status/2107108768240796093)、[Ryo Lu](https://x.com/ryolu_/status/2107146629338042853)、[Ryo Lu](https://x.com/ryolu_/status/2107146721591726323)）

**6. 一位设计师对手艺的停顿：不断微调，不等于做出真正值得做的东西。** 在一篇回忆 Steve Jobs 的长文里，Ryo Lu 写道，他感觉这个行业「getting stuck in a loop」：不断微调、优化供应链、想更多办法让人继续刷下去；就算机器越来越聪明，「we've also become more disconnected and lonely」。他说他希望更多精力花在「learning from people's lives and making them better」上，并以自己一直记着的一句话收尾：「the people who are crazy enough to think they can change the world, are the ones who do.」（[Ryo Lu](https://x.com/ryolu_/status/2107246891977335049)）

## X / Twitter

### Thibault Sottiaux

在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 说，有同事正在「cooking up magic with collaborative space right in ChatGPT」，并补充说它「improving leaps and bounds every day」。

- [Thibault Sottiaux：ChatGPT 中的协作空间](https://x.com/thsottiaux/status/2107200530477101461)

### Peter Yang

做实用 AI 教程和访谈的 Peter Yang 发布了一个教程，教人构建一个能通过实时语音通话教自己日语的 AI 语言学习应用。这个项目用他的 spec skill 完成关键设计，用 Gemini Live API 处理语音，用 Nano Banana 生成 diorama 美术；他说读者可以照着做一个能学习任何语言 100 句短语的应用。他还给出了更多关于 Gemini 3.8 Live 的信息。

- [Peter Yang：AI 语言学习应用教程](https://x.com/petergyang/status/2107108755699900459)
- [Peter Yang：了解 Gemini 3.8 Live](https://x.com/petergyang/status/2107108768240796093)

### Madhu Guru

Meta AI 高级总监 Madhu Guru 认为，团队最常见的错误是把 evals 当成 agent 建好之后才追加的 QA 步骤。AI 产品有着本质不同，他说：「Your evals are your product spec.」

- [Madhu Guru：evals 就是产品规范](https://x.com/realmadhuguru/status/2107292113214091355)

### Thariq

在 Anthropic 做 Claude Code 的 Thariq 说，他描述的这种规划方式「a lot more token efficient compared to raw HTML」，因为模型不需要为 state machine、diagram、code snippet 这类常见内容重新造组件和逻辑。他最喜欢把这个模式叫作「local hands」：Claude 跑在云端，但可以访问你本地的文件，这个能力也即将进入 Cowork。

- [Thariq：更省 token 的规划方式](https://x.com/trq212/status/2107294499282293017)
- [Thariq：「local hands」与 Cowork](https://x.com/trq212/status/2107229483015258493)

### Amjad Masad

Replit CEO Amjad Masad 说：「the US is catching up on open-weights models.」

- [Amjad Masad：美国正在追赶开放权重模型](https://x.com/amasad/status/2107222388429766970)

### Guillermo Rauch

Vercel CEO Guillermo Rauch 介绍了 gdp-ts，即「Ghosts of Departed Proofs for TypeScript」，一个用于更安全 API 设计的库、linter 和 AI skill。敏感函数需要调用方提供「proofs」，证明自己做过授权检查，类型检查器会在编译期验证这些 proof，他说这能避免团队和 agent 把灾难性的安全漏洞发布出去。他指出，这类模式虽然早已存在，尤其在 Haskell 这样的生态里，但人工 code review 以及认知和语法上的开销让它们一直很小众；如今「the situation is now inverted」，因为 agent 写的代码已经超过人类能 review 的量，而 agent 恰恰在有硬约束的紧循环里如鱼得水。README 里还建模了一个真实的 Vercel API 产品约束：修改 Project 密码必须提供某个角色加某项权益的 proof。

- [Guillermo Rauch：用 gdp-ts 做更安全的 API 设计](https://x.com/rauchg/status/2107119811444748555)

### Aaron Levie

Box CEO Aaron Levie 说，相当一部分 agent 的采用和部署，卡在能否在「real」工作环境里测试、调优和优化 agent，包括 agent 需要访问的文件、CRM、邮件等等。如果不了解 agent 在 evals 上执行得怎么样、以及换模型或升级工作流之后会表现如何，就不可能知道它们的实际表现；而每家企业现在都在一家一家地手动做，又慢又繁琐。他预测每家企业都会有人专门负责 evals，并搭建用于构建和运行 evals 与模拟环境的基础设施，他称这是一个「huge space」。

- [Aaron Levie：evals 与模拟环境](https://x.com/levie/status/2107283615247999257)

### Ryo Lu

曾在 Cursor、Notion、Stripe 做设计的 Ryo Lu 发布了 Chrome 扩展 ryOS Subtitles，以及一个面向语言学习者的小工具：在 Netflix 上显示任意两种语言的字幕，并为日语、中文、韩语提供发音指南，还支持自定义样式和精选默认设置。在另一篇回忆 Steve Jobs 的长文里，他写道，他感觉这个行业「getting stuck in a loop」：不断微调、优化供应链、想更多办法让人继续刷下去；就算机器越来越聪明，「we've also become more disconnected and lonely」。他说他希望更多精力花在「learning from people's lives and making them better」上，并以自己一直记着的一句话收尾：「the people who are crazy enough to think they can change the world, are the ones who do.」

- [Ryo Lu：Chrome 扩展 ryOS Subtitles](https://x.com/ryolu_/status/2107146721591726323)
- [Ryo Lu：Netflix 双语字幕](https://x.com/ryolu_/status/2107146629338042853)
- [Ryo Lu：回忆 Steve Jobs](https://x.com/ryolu_/status/2107246891977335049)

### Garry Tan

Y Combinator 总裁兼 CEO Garry Tan 说「AGI Science Loops are coming」，会有人为这些 loop 做「Muse/Instinct」，而 Halmos 正在做这件事。他还认为，实验室做的 harness 有烧 token 的动机，这反而让创业公司的 harness 有了真正的价值；他以 Grep 为例，说它可以「automatically swap token burn into deterministic tested code」，而且只要观察 agent 的使用就能重复。

- [Garry Tan：AGI science loops](https://x.com/garrytan/status/2107173670699622830)
- [Garry Tan：harness 激励与 token 消耗](https://x.com/garrytan/status/2107129959550685660)

### Aditya Agarwal

SPC 普通合伙人 Aditya Agarwal 提到，Physical Intelligence 联合创始人 Sergey Levine 即将来到 SPC：他指出 Levine 拥有三个 Stanford 学位，自 2016 年起在 Berkeley EECS 任教，并且「builds the algorithms that let robots learn from experience, linking what they see to how they move」。Agarwal 还写道，如果能在本机运行 Muse/Dot 的「computer」会很有意思，他认为这比一个「increasingly locked down MacOS」更适合做 agent 环境。

- [Aditya Agarwal：Sergey Levine 来到 SPC](https://x.com/adityaag/status/2107171588194152936)
- [Aditya Agarwal：在本机运行 Muse/Dot](https://x.com/adityaag/status/2107133989941387282)

## Podcast

本轮通过验证的 feed 中没有新的合格播客节目。

## Blog

本轮通过验证的 feed 中没有新的合格博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
