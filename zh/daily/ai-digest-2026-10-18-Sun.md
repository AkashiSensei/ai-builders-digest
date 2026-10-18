[English](../../en/daily/ai-digest-2026-10-18-Sun.md) | [中文](./ai-digest-2026-10-18-Sun.md) | [双语](../../bilingual/daily/ai-digest-2026-10-18-Sun.md)

---

# AI Builders Digest

## 导读

Box CEO Aaron Levie 认为，关于软件工程将被终结的预测把需求曲线看反了。当 agent 能够使用工具、操作电脑、即时编写代码并处理数据时，交易、生命科学和供应链等更多工作都会呈现软件形态，因此工程能力不是变得不重要，而是变得更重要。他的结论是，手写代码或许会减少，但“almost everything will be code”，真正理解代码的人将处于非常有利的位置（[推文](https://x.com/levie/status/2111525362446520466)）。

Replit CEO Amjad Masad 澄清，Replit 仍然保持模型无关。用户依然可以选择 Anthropic 模型以及许多其他受支持的模型，而 OpenAI 现在成为驱动 Agent 的首选合作伙伴，依据是性能、成本和合作关系。他表示，这一调整是在保留模型选择的同时，把默认体验优化到最佳性能与最佳价格（[推文](https://x.com/amasad/status/2111494912562888939)）。

在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 描述了一个实际的工作与个人账号协作流程。他的工作“dot” Burger 应他的请求，通过邮件与个人“dot” Dorito 协作获取文件，然后再与他的 CPA 协作准备税务材料。整个过程用了 20 分钟，他的结论是：“We're still so early”（[推文](https://x.com/thsottiaux/status/2111495392559067199)）。

Swyx 分享了关于自己观众规模和推荐流量的数据，具体程度少见。他说自 5 月以来，自己几乎不间断地每月服务超过 100 万名独立观众，但其中 58% 是当月新观众，68% 没有订阅；观看主要集中在太平洋时间每天 7 点到 11 点，“nobody watches after 5pm”。他还提到，前两年推荐流量很少，后来浏览推荐才慢慢起来，点击率“suck”，并把目标定为与观众已经喜欢的创作者合作（[推文](https://x.com/swyx/status/2111350966419411070)、[推文](https://x.com/swyx/status/2111353401363902573)、[推文](https://x.com/swyx/status/2111351354409300230)）。

Peter Yang 分享了一段用于审查 Google 账号所连接应用和 agent 的 prompt。他以自己账号中 45 个连接为例，要求助手逐一检查所有应用，区分基础 Google 登录与 Gmail、Drive、Calendar 等数据访问权限，标出权限过宽和重复条目，并在断开任何连接前取得明确同意。他还说，Claude Code 应用现在快了很多，使用上可以说比 ChatGPT 更简单，但仍缺少更好的浏览器和电脑操作能力、对所有线程的远程控制，以及实时语音（[推文](https://x.com/petergyang/status/2111508293818671449)、[推文](https://x.com/petergyang/status/2111496600522805624)）。

Carnegie Mellon 教授 Andy Pavlo 最近创办了 ClickHouse Labs。他认为，数据库讨论已经从向量搜索转向会创建、分支、写入，有时还会删除数据库的 agent。他说向量索引已经是基础能力，agent 需要和人类一样的 guardrails，Postgres 仍会是模型的默认推荐，而他对原生图数据库持公开怀疑态度。谈到向量数据库时，他说：“At the end of the day, it's just an index.” 真正持久的优势可能来自 branching、shared state，以及核心引擎之外的配套能力（[播客](https://www.youtube.com/@DataDrivenNYC/videos)）。

## X / Twitter

### Aaron Levie, Box CEO

Aaron Levie 不接受自动化会缩小软件工程需求的说法。因为 agent 能够使用工具、操作电脑、即时编写软件，并以前所未有的速度处理数据，软件现在可以被用来解决过去根本无法合理数字化的问题。他预计，随着越来越多工作呈现软件问题的形态，工程能力在银行、生命科学和制造业中会变得更加重要。手写代码可能减少，但“almost everything will be code”，真正理解代码的人将处于非常有利的位置（[推文](https://x.com/levie/status/2111525362446520466)）。

### Amjad Masad, Replit CEO

Amjad Masad 在 TC Disrupt 发言后澄清了 Replit 的立场：平台仍然保持模型无关，用户依然可以选择 Anthropic 模型以及许多其他受支持的模型。OpenAI 现在是 Replit 驱动 Agent 的首选合作伙伴，依据是性能、成本和合作关系。Masad 说，目标是在保留模型选择的同时，把默认体验优化到最佳性能与最佳价格（[推文](https://x.com/amasad/status/2111494912562888939)）。

### Thibault Sottiaux, Codex and ChatGPT at OpenAI

Thibault Sottiaux 描述了他的工作“dot” Burger 通过邮件与个人“dot” Dorito 协作获取文件，然后再与他的 CPA 协作准备税务材料。整个任务用了 20 分钟。他的反应是：“we're still so early”（[推文](https://x.com/thsottiaux/status/2111495392559067199)）。

### Swyx

Swyx 说，自 5 月以来，他几乎不间断地每月服务超过 100 万名独立观众，但其中 58% 是当月新观众，68% 没有订阅。他说观看主要集中在太平洋时间每天 7 点到 11 点，下午 5 点之后几乎没有人看。他还提到，前两年推荐流量很少，后来浏览推荐才慢慢起来，并承认点击率“suck”；他说自己的目标是与观众已经喜欢的创作者合作（[推文](https://x.com/swyx/status/2111350966419411070)、[推文](https://x.com/swyx/status/2111353401363902573)、[推文](https://x.com/swyx/status/2111351354409300230)）。

### Peter Yang

Peter Yang 发布了一段 prompt，用于审查 Google 账号所连接的众多应用和 agent，例子来自他自己账号里的 45 个连接。这段 prompt 要求助手逐一检查所有应用，区分基础 Google 登录与 Gmail、Drive、Calendar 等数据访问权限，标出权限过宽和重复条目，并在断开任何连接前等待明确同意。另外，他说 Claude Code 应用现在快了很多，使用上可以说比 ChatGPT 更简单，但仍缺少更好的浏览器和电脑操作能力、对所有线程的远程控制，以及实时语音（[推文](https://x.com/petergyang/status/2111508293818671449)、[推文](https://x.com/petergyang/status/2111496600522805624)）。

本次经过验证的 feed 中，其余 builder 只发布了简短回应或个人动态，因此未纳入。

## Podcast

### The MAD Podcast with Matt Turck: What Happens When Billions of AI Agents Hit Your Database? (Andy Pavlo)

**核心结论：** agent 时代的数据库竞争不会只靠向量搜索取胜；更持久的优势在于 guardrails、branching，以及围绕高性能数据库核心的运营配套能力。

Andy Pavlo 是 Carnegie Mellon 教授，他的数据库课程教过一代工程师，也教过 AI 模型，最近他创办了 ClickHouse Labs。他讨论的问题已经不再抽象：agent 会创建数据库、写入数据库、为数据库建立分支，有时还会删除数据库。RAG 兴起时，向量数据库看起来是 AI 基础设施的中心，但 Pavlo 认为护城河很浅：向量索引本质上只是一个索引，不到一年，几乎所有数据库厂商都推出了自己的向量索引。“At the end of the day, it's just an index.” 向量搜索变成了基础能力，而不再是一个独立品类。

更重要的问题是控制。Pavlo 把 agent 比作需要 guardrails 的幼儿，而不是需要人类不停点击批准的流程，因为没有人能全天候照看数百个 agent。权限、sandbox 和数据库 branching 让 agent 可以在不接触生产环境的情况下测试改动。无论请求来自 SQL 还是 MCP server，保护人类不闯祸的控制手段同样适用于 agent。他指出，目前超过 60% 的开源数据库系统会收到来自 agent 的 commit，这让安全开发流程变得更加重要。

模型行为也会塑造市场。当被要求构建一个应用时，模型通常会推荐 Postgres，因为 Postgres 在训练数据中占据主导地位。Pavlo 说，有两家数据库公司问过他，怎样才能让 agent 优先推荐自己的数据库而不是 Postgres，他把这种请求比作 SEO。他对原生图数据库保持怀疑，表示没有看到 benchmark 证明它们能胜过在服务端完成图遍历的关系型系统。GPU 数据库正因 Nvidia 的推动重新受到关注，但他认为经济性仍不明朗。

对数据库公司来说，核心引擎只是产品的一部分。Snowflake 的成功部分来自用户界面、开发者体验、数据摄入和互操作性，Pavlo 认为 ClickHouse 也在改进同样的外围配套。Agentic workload 未必需要完全不同的引擎，但确实需要速度快、可安全修改、易于大规模运营的系统。下一阶段的持久优势很可能就在这里。

来源：https://www.youtube.com/@DataDrivenNYC/videos

## Blog

本次经过验证的 feed 中没有新的合格博客内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
