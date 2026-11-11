[English](../../en/daily/ai-digest-2026-11-11-Wed.md) | [中文](./ai-digest-2026-11-11-Wed.md) | [双语](../../bilingual/daily/ai-digest-2026-11-11-Wed.md)

---

# AI Builders Digest

## 导读

Gemini 4 Carbon 已经从发布走向真实测试。Google 的 Josh Woodward 表示，它已在全球面向 Ultra 订阅用户在 Gemini app 上线；Every CEO Dan Shipper 的早期评测则认为，它的编码能力明显强于 Argon，但并非全面胜出：在高级工程师基准上提升明显，能长时间自主运行，在音频和视频任务上也有帮助，写作水平接近 Argon，不过价格更高。现在真正的问题不再是模型能否完成大任务，而是团队能否定义完成标准并审阅结果。

围绕 agent 的讨论，正从单一助手转向协同工作。Box CEO Aaron Levie 认为，以目标为导向的 agent swarm 可以打破聊天乃至单个 agent 的交互瓶颈，并在 harness、基础设施和 FDE 工作上创造新机会。Box 与 Anthropic 更深入的 MCP 集成说明了所需的基础管线：agent 不仅需要读取企业内容，还需要写入权限。

Agentic coding 正在改变模型周围的技术栈。Vercel CEO Guillermo Rauch 预计，agent 会催生新的专用语言，也会让低层技术选择更加多样。他公司的安全审查同时展示了机会和问题的规模：不到一周发现 57,897 个漏洞，其中 14,665 个已由 agent 修复。这组数据指向一个新的约束：如何审阅、排序并信任自动化改动。

Builders 正在反思 demo 文化。Thariq 希望少一些一次性 demo，多一些帮助人与模型协作、把想法变成现实的工具；Ryo Lu 则认为，软件应让更多人参与创造，真正的魔力来自人与人协作，而不是每个人各自运行一支 agent 军队。共同点是，界面和模型同样重要：agent 产品只有融入人的协作方式，才真正成立。

分发与留存正成为容易被忽视的瓶颈。Zara Zhang 认为，用户不回流时，多数情况不是不喜欢产品，而是忘了它；她还建议 builders 尽早分享进行中的作品。Resend 的 Zeno Rocha 补充了基础设施视角：MCP 已成为快速增长的分发渠道，但要做好它，必须重做 OAuth、权限、可观测性和官方集成。被 agent 推荐，正在成为新的产品界面。

## X / Twitter

### Google 副总裁 Josh Woodward

Gemini 4 Carbon 现已在全球面向 Ultra 订阅用户在 Gemini app 中上线。（[来源](https://x.com/joshwoodward/status/2120186249281778135)）

### Every CEO Dan Shipper

Every CEO Dan Shipper 称，Gemini 4 Carbon 的编码能力远强于 Argon，但他大概会继续用 Argon 写作。在 Every 的 day-zero 测试中，Carbon 在一次 Senior Engineer benchmark 上得分 44%，Argon 为 21%，但整体仍处于中游。在另一项 backlog 测试中，它先判断有 6 个任务已就绪，随后完成了 15 个，其中包括其他人已经在做的工作，直到运行近 4.5 小时后被叫停。Shipper 还提到，Carbon 写了 Everycut 一次大型更新中约 95% 的代码，发现了其他模型漏掉的音频剪辑问题，把一段会议录音整理成 6 个带标题的短片，写作表现与 Argon 接近，但成本更高。（[来源](https://x.com/danshipper/status/2120187507396530309)）

### Box CEO Aaron Levie

Box CEO Aaron Levie 认为，agent swarm 有可能带来 AI 产出的又一次跃升。他梳理了演进路径：聊天带来快速响应，但受交互次数限制；agent 能接手完整任务，把数小时或数天的工作压缩到几分钟；如今，以目标为导向的 swarm 会寻找任何通往完成的路径。他认为，只要价值来自研究、跨软件工具的决策、数据处理或代码生成，这种模式就会重要，并点名游戏开发、编程、交易、生命科学、IT 自动化、网络安全、数学和动画。他说，机会包括 harness、应用型 AI 产品和基础设施，也包括一个全新的 FDE 工作领域。（[来源](https://x.com/levie/status/2120385739342897469)）

另外，Levie 表示，agent 处理企业文件的频率将达到人类的 100 倍。Box 与 Anthropic 合作，通过 MCP 为 Box 内容带来完整的读写互操作能力，使 agent 能把内容拉进工作流、把文件更新写回 Box，并直接在 Claude 中查看。他以合同、演示文稿和战略文档为例。（[来源](https://x.com/levie/status/2120261416733036905)）

### Claude

Claude 表示，原名为 Dashboards 的 Claude Data 已在付费方案中正式可用，可根据指标起草数据故事和解说视频供用户审阅；认证查询和实时分享仍处于 beta。（[来源](https://x.com/claudeai/status/2120206372478566799)）

交互式 connector 现在可以在网页和桌面端于 Claude 内打开 Adobe、Atlassian 和 Box 等工具的完整版本，用户既可以自行修改，也可以让 Claude 一起修改。（[来源](https://x.com/claudeai/status/2120206375137484875)）

该账号表示，这些更新从当天开始逐步上线。（[来源](https://x.com/claudeai/status/2120206379315261702)）

### Thariq

曾任职于 Anthropic Claude Code 的 Thariq 认为，行业需要更少的一次性 demo，更多能展示人与模型如何协作、把愿景变成现实的工具。（[来源](https://x.com/trq212/status/2120223476279869875)）

### Vercel CEO Guillermo Rauch

Vercel CEO Guillermo Rauch 称 Rust 是出色的语言和生态，尤其是在 agentic coding 出现之前诞生的背景下。借助 agent，他预计新的语言会涌现，包括面向特定用例的专用语言，以及按需选择 C、LLVM IR 或汇编。他的结论是：AI 是流动的，不再有一刀切的方案。（[来源](https://x.com/rauchg/status/2120337388178379178)）

Rauch 还报告，Vercel Security Review 上线不到一周就发现了 57,897 个漏洞，其中 6,029 个为严重或高危问题，agent 已修复其中的 14,665 个。他说，自己既震惊于会有多少严重漏洞被忽视，也震惊于 agent 修复这些漏洞的轻松程度。无论代码部署在哪里，都可以为任意 repo 开启这项审查。（[来源](https://x.com/rauchg/status/2120188488628977819)）

### Ryo Lu

Ryo Lu 认为，软件不只是用来优化任务或强加约束，更是为了构建一个让更多人能够创造、追求过去做不到之事的世界。他把这种抱负比作电影人和音乐人的工作。（[来源](https://x.com/ryolu_/status/2120380317429350654)）

在另一条帖子中，Lu 表示，真正的魔力发生在人与人的协作中，而不是每个人各自在孤岛里运行一支 agent 军队。（[来源](https://x.com/ryolu_/status/2120337691661443081)）

### Zara Zhang

Zara Zhang 给出了一个直接的留存判断：用户不回来时，20% 是因为不喜欢产品，80% 是因为忘了产品还存在。（[来源](https://x.com/zarazhangrui/status/2120235104194932841)）

她还建议 builders 不要等到作品完成或完美才分享。她说，进行中的作品有时能帮助判断它是否值得做完。（[来源](https://x.com/zarazhangrui/status/2120041030951297033)）

### Peter Yang

Peter Yang 认为，游戏开发者和玩家排斥有品味的 AI 使用方式是错误的。他区分了用 AI 批量生产垃圾内容，以及把 AI 当作另一种工具来做出好游戏。（[来源](https://x.com/petergyang/status/2120370522622181809)）

## Podcast

### Designing for Agents：Zeno Rocha，Resend

核心结论：Zeno Rocha 先把 email 当作开发者体验问题，再把它当作深层基础设施问题，并在赢得信任后逐步重建更多底层能力。

Resend 的 Zeno Rocha 出身前端开发，没有 email 或基础设施背景。正是这种“不懂”，让他敢于质疑一个要求开发者估算发送量、再等两天人工审核的行业。他想做 email 领域的 Stripe：有免费额度、干净的 API，并由产品替用户承担运营摩擦，而不是把摩擦转嫁给用户。Resend 表示，目前服务 430 万用户和超过 12 万名付费客户，客户包括 Warner Brothers 和 HBO。

Deliverability 是最难的部分。Rocha 把 email 描述成一门关于分批、限速、IP 池声誉和读取邮箱服务商反馈信号的科学与艺术。他的原则是：“you need to do exactly what an abuser wouldn't do.” 新域名、仿冒域名、链接与发送域名不一致、突发式群发，都是危险信号；持续稳定地发送，并让链接和图片域名与发送域名一致，才能建立信任。Resend 会从 HTML 自动生成纯文本版本，他说这显著提升了送达率。

产品策略刻意保持广度。Rocha 通过 API、SDK、CLI 和 MCP 让 Resend 保持“无固定形态”，客户可以从 dashboard、代码或 agent 中使用它。MCP 的使用量增长快于 CLI，一度大约每月翻倍，但要做好它，Resend 必须重做 OAuth、权限、可观测性，并进入官方工具商店。他把厂商官方维护视为信任信号，也曾因此更换产品。

Rocha 对优先级同样清楚。他说 Resend 是一家“a 10 million AR company”，并说：“I would rather live in that reality than live in a reality where we're a $100 million company and my daughter doesn't wanna play with me.” 关键不是同时优化所有维度，而是选择自己能够接受的约束，再围绕这些约束构建产品和公司。（[来源](https://www.youtube.com/@LatentSpacePod)）

## Blog

经过验证的 blog feed 中没有新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
