[English](../../en/daily/ai-digest-2026-09-16-Wed.md) | [中文](./ai-digest-2026-09-16-Wed.md) | [双语](../../bilingual/daily/ai-digest-2026-09-16-Wed.md)

---

# AI Builders Digest

## 导读

**1. Aaron Levie 的 applied layer 论：真正值钱的工作，是模型与企业工作流之间的那座桥。** Box CEO Aaron Levie 写道，「AI 模型的能力，和企业真正想自动化的那些工作流之间，存在一道巨大的鸿沟」，而这道鸿沟就是 applied AI layer 的机会。要跨过去，需要把 intelligence 接到工作流上，重做流程，聚合正确的 context 和数据，设计好 human in the loop 的体验，推动 change management，做 domain specific 的 eval，并管理数据与流程的安全和治理。他预期这一层会在每一个垂直和横向品类里出现，并认为模型越强，这一层反而越重要，因为「更强的能力让更复杂的任务可以被处理，也就放大了做不好这一层所带来的挑战」。

**2. 在播客里，Levie 给出了更锋利的版本：企业端的扩散会比硅谷想象的慢得多。** 他解释说，对世界上大多数人来说，代码是一种 utility，它的价值几乎完全体现在它产出的文本上，这也是 coding agent 能在几个月内普及、而其他知识工作却卡住的原因。销售代表的效率受制于客户是否回复、是否有预算，而大多数企业并没有「把 GitHub 给你就好」这样的时刻，因为他们的数据躺在 legacy 文件共享和本地系统里，还有 agent 无法穿越的访问控制。他的预测是：「五年之后，我敢打赌，企业里 90% 的 token 都来自用户根本没有发起过的任务，用户只是看到一个结果。」

**3. Builders 正在收敛到一个多模型未来：做判断的会是便宜的概率模型。** Vercel CEO Guillermo Rauch 说得很直白：「未来是多模型的。试图把选择藏起来，只会让客户困惑并受损。」Every CEO Dan Shipper 说，他的公司几乎从不测试新的 foundation model，但已经花了大约一周测试一个输出概率而不是文字的新模型，它可以在原本需要 Fable 级别模型的场景里充当 judge，同时速度快 25 倍、价格低 600 倍。Replit CEO Amjad Masad 的回应是一个研究问题：如果输出空间事先已知，为什么不干脆训练一个模型直接输出枚举上的 logprobs。

**4. Agent 脚下的工具层正在变化：MCP 取代 CLI，WebAssembly 成为 web 原生化的一条路。** 在 Anthropic 做 Claude Code 的 Thariq 说，他没想到会这样，但现在认为「对大多数集成来说，MCP 比 CLI 更好」，因为模型在 tool calling 上进步很多，工具可以被延迟加载，MCP 现在也是无状态的；他还建议，如果需要组合或过滤数据，就给 MCP 工具加上 query 这样的参数。Rauch 指出 Safari 27 支持 JSPI，这是 WebAssembly 的一项能力，让同步的原生代码可以挂起在一个 async Promise 上，并指出 libfx 使用浏览器内置的 fetch stack 发起 API 调用。他还正式介绍了 Vercel Labs，作为 Vercel 公开进行研究和实验的部门，背后是 2.47 亿次下载。

**5. Agent 正在进入主流商业软件和教育场景。** Claude 与 Salesforce 的集成进入 beta，把 accounts、opportunities 和 pipeline 带进 Claude，并配有 37 个预置的 sales skills。Claude Blog 补充说，Claude for Small Business 现在有 43 个工作流和 27 个新集成，包括 Shopify、Salesforce、TikTok、Atlassian、Zoom、Xero、Gusto、Square、Stripe 和 Zapier，自 5 月上线以来安装量已超过 90 万次。Google 副总裁 Josh Woodward 则介绍了面向学生的 Gemini Notebook 更新，包括用大约 100 种语言对课堂材料进行实时语音问答，以及随手录制讲座和笔记、音频笔记自动保存进所选 notebook。

**6. 信任、work slop 和资本纪律，是同一轮变化在人和钱两端的边界。** Levie 观察到一种不对称：人们自己用 AI 做头脑风暴时心安理得，但收到同事那份明显由 AI 参与的 deck 时，会悄悄怀疑这个人是否还值得信任、能否真的把事情做成。FPV Ventures 合伙人 Nikunj Kothari 提醒那些以为「钱会自己流过来」的创始人：资本是加速的武器，每家公司都需要一条能在下行周期里活下来的默认路径。在账本的另一侧，SPC 的 Aditya Agarwal 庆祝 Profound 完成 1.8 亿美元 D 轮、估值 18 亿美元，Y Combinator 总裁兼 CEO Garry Tan 则说，用 capydotai 配合 GStack/GBrain 处理 issue 和 PR 修复，原本要一天的工作在同样的 frontier model 下只花了大约一半时间。

## X / Twitter

### Josh Woodward: Google 副总裁

Google 副总裁 Josh Woodward 介绍了面向学生的 Gemini Notebook 新功能，并点出他最喜欢的两个：用大约 100 种语言和课堂材料做实时语音问答，以及随手录制讲座和笔记，音频笔记会自动保存进你选择的 notebook。他还提到，大学生仍然可以在 140 多个国家免费获得 Google AI Plan，从而拿到更高的额度和更多 Google 产品的使用权。

- [Josh Woodward 谈 Gemini Notebook 面向学生的更新](https://x.com/joshwoodward/status/2099921866014306633)

### Peter Yang: 实用 AI 教程与访谈作者

写实用 AI 教程和访谈的 Peter Yang 分享了他给 Grok bot 团队的 solopreneur 建议：把你的生意设计成能让你花更多时间做自己真正喜欢的工作。全职单干三个月后，他的观点是，总会有能赚更多钱的选择，但如果这些选择让你去做自己不喜欢的工作，那就背离了成为 solopreneur 的初衷，所以把无聊的工作交给你的 bot，或者干脆不做。

在随后的一条帖子里，他分享了读者收到 bot code 后反馈的使用场景：找线索、起草 outreach、把成果写成案例；搭一个带来源引用的竞品对比矩阵；监控几百个广告账户，抓出注册和支付流程的故障；盯着 Jira、标记阻塞、起草每周状态更新；给支持工单做分流、草拟回复并带着完整上下文升级；定期测试酒店的预订流程，让预订错误能被发现；为一家电气承包公司自动化文书和后台流程；监控 X 上的 AI builders、核实来源，再把成果变成 hook 和脚本；以及做一个把噪音变成每日简报的 AI 研究台。

- [Peter Yang 谈给 Grok bot 团队的 solopreneur 建议](https://x.com/petergyang/status/2099968897323778416)
- [Peter Yang 谈读者分享的 bot 使用场景](https://x.com/petergyang/status/2100027487681953834)

### Thariq: Anthropic，Claude Code

在 Anthropic 负责 Claude Code 的 Thariq 说，他没想到事情会变成这样，但现在认为对大多数集成来说 MCP 比 CLI 更好。他的理由是：模型在 tool calling 上进步很多，工具现在可以被延迟加载，而 MCP 是无状态的。他的实操建议是，如果需要组合或过滤数据，就给 MCP 工具加上 query 这样的参数。

- [Thariq 谈集成场景里 MCP 与 CLI 的取舍](https://x.com/trq212/status/2099958388230873165)

### Amjad Masad: Replit CEO

Replit CEO Amjad Masad 回应一个他觉得很酷的 demo，抛出了一个研究问题：如果你的输出空间事先已知，为什么不干脆训练一个模型直接输出枚举上的 logprobs？

- [Amjad Masad 谈训练模型输出枚举上的 logprobs](https://x.com/amasad/status/2100056178705514703)

### Guillermo Rauch: Vercel CEO

Vercel CEO Guillermo Rauch 正式介绍了 Vercel Labs，这是 Vercel 公开进行研究和实验的部门。在公司累计 2.47 亿次下载之后，他说目标是把 Vercel 在支持什么、在研究什么、哪些实验没有跑通，都公开分享出来，并感谢 ctatedev 和 cramforce 推动了这个项目。

在模型选择上，Rauch 认为「未来是多模型的」，试图把选择藏起来只会让客户困惑并受损，让他们既无法参与这个时代最激动人心的市场竞争所带来的红利，也无法掌握最适合自己任务的工具。

在 web 平台上，他指出 Safari 27 支持 JSPI，这是 WebAssembly 的一项能力，让同步的原生代码可以挂起在一个 async Promise 上；他还指出 libfx 使用浏览器内置的 fetch stack 发起 API 调用。他的判断是，随着越来越多代码走向原生，WebAssembly 会在 web 的未来里扮演极其重要的角色。

- [Guillermo Rauch 谈推出 Vercel Labs](https://x.com/rauchg/status/2099911447598059812)
- [Guillermo Rauch 谈多模型未来](https://x.com/rauchg/status/2099905740505055680)
- [Guillermo Rauch 谈 WebAssembly、JSPI 与 libfx](https://x.com/rauchg/status/2099974859023683975)

### Aaron Levie: Box CEO

Box CEO Aaron Levie 写道，AI 模型的能力和企业想要自动化的最终工作流之间，存在一道巨大的鸿沟，而这道鸿沟正是 applied AI layer 的机会。要填补它，需要把 intelligence 接到工作流上，往往还要重做流程，聚合正确的 context 和数据，设计好 human in the loop 的体验，推动 change management，做 domain specific 的 eval，并管理数据与流程的安全和治理。他预期这一层会在每一个垂直和横向品类里出现，并认为即使模型以惊人的速度进步，这一层依然必须存在，甚至可能变得更重要，因为更强的能力让更复杂的任务可以被处理，也就放大了做不好这一层所带来的挑战。

- [Aaron Levie 谈 applied AI layer](https://x.com/levie/status/2099976021311398230)

### Garry Tan: Y Combinator 总裁兼 CEO

Y Combinator 总裁兼 CEO Garry Tan 说，他开始用 capydotai 配合 GStack/GBrain 处理一批待解决的 issue 和 pull request，结果原本用原生 Codex 或 Claude Code 要花一天的工作，在同样的 frontier model 下只用了大约一半时间。他的评价是：「我很惊讶。」他还对模型竞赛给出一句简短预测，认为 Muse 会赢。

- [Garry Tan 谈 capydotai 加快 issue 与 PR 修复](https://x.com/garrytan/status/2099964487667454097)
- [Garry Tan 谈 Muse 会赢](https://x.com/garrytan/status/2099980972641124629)

### Nikunj Kothari: FPV Ventures 合伙人

FPV Ventures 合伙人 Nikunj Kothari 说，他遇到太多创始人以为钱会自己流过来、下一轮无论如何都会发生。他的观点是，资本是加速的武器，用得好就无人能敌；但如果一家公司对它依赖太深，一次普通的下行就可能带来不太好的后果。他一直在跟创始人分享：先找出那条能确保公司活下来、又能长成一个自我实现的伟大生意的默认路径，再去推演资本充裕或稀缺时会发生什么，最后提醒大家，「唯一不变的就是变化，我们并不知道未来 6 到 18 个月资本市场会怎么演变」。

- [Nikunj Kothari 谈资本是武器而非安全网](https://x.com/nikunj/status/2100008917980102863)

### Dan Shipper: Every CEO

Every CEO Dan Shipper 说，他的公司几乎从不测试新的 foundation model，但已经花了大约一周测试一个模型，感觉「非常疯狂」，属于那种 6 到 12 个月后会明显不可或缺的东西。区别在于它不输出文字，而是输出概率，因此可以在原本需要 Fable 级别模型的场景里高效地充当 judge，而在 Every 的测试中速度快 25 倍、价格低 600 倍。他推荐大家去看 hammer_mt 在 Every 上做的体验评测。

- [Dan Shipper 谈用输出概率的模型做便宜的 judge](https://x.com/danshipper/status/2099947471518474522)

### Aditya Agarwal: SPC 普通合伙人

SPC 普通合伙人 Aditya Agarwal 解释了公司在还没有 Profound 可看的时候看到了什么。这家公司现在估值 18 亿美元，《财富》100 强里有三分之一在使用它，它也已经成长为增长最快的 AI 营销平台。他提到创始人 thejamescad 和 dbabbs 是在 SPC 认识的，一位是 Uber 的地图工程师，一位是没有大学学位、硬生生把生意做起来的创始人；两人先形成了合作关系，之后才有了那个想法。他还说 SPC 从最开始就参与了每一轮，并祝贺团队完成 1.8 亿美元 D 轮，由 Sequoia 和 Kleiner Perkins 联合领投，Lightspeed、Khosla Ventures、Saga Ventures、Evantic Capital 和 SPC 参投。

- [Aditya Agarwal 谈 Profound 的 1.8 亿美元 D 轮](https://x.com/adityaag/status/2099939685657141257)

### Sam Altman: OpenAI CEO

OpenAI CEO Sam Altman 预告了接下来这一周，说本周有一次大的 ship，之后为 DevDay 还有更多。

- [Sam Altman 谈本周的 large ship 与 DevDay](https://x.com/sama/status/2099872600977760451)

### Claude: Anthropic 的 Claude

Claude 宣布 Salesforce in Claude 进入 beta。它把 accounts、opportunities 和 pipeline 带进 Claude，并配有 37 个预置的 sales skills，用户可以在对话里准备通话、复盘一笔交易、创建 pipeline dashboard，或者直接发出预测。

- [Claude 谈 Salesforce in Claude 进入 beta](https://x.com/claudeai/status/2099876514330206578)

## Podcast

### Training Data: Box's Aaron Levie: On Reinventing Yourself in the AI Age and Enterprise Diffusion

核心要点：AI 里的钱不在模型本身，而在于把 intelligence 接进企业真实运转方式这件不性感的工作，而这件事会比硅谷想象的更慢。

Box 创始人兼 CEO Aaron Levie 卖了二十年面向大型组织的非结构化内容管理，这让他对 AI 扩散的判断格外具体。他的核心观点是，关于「model wrapper」能不能活下来的争论，已经以 application tier 胜出而告一段落。企业需要一座桥，把模型能做的事和它必须嵌入的工作流连起来，而这座桥很深：要接上其他数据系统，要重做业务流程，要在关键节点保留 human in the loop，要管理变革，还要用 domain specific 的 eval 证明准确率。他说，「大概有一万亿美元押在了两种结果上」，而现在看来，这座桥是宽阔而不是狭窄的。

他最锋利的一段分析，是解释为什么 coding agent 扩散得这么快，而其他领域没有。对世界上大多数人来说，代码是一种 utility，它的价值几乎完全体现在它产出的文本上；模型实验室每天都在拿它做 benchmark；而且每个工程师都能自己修好一个挂掉的 MCP server，不需要打电话给 IT。知识工作没有这样的对应物。销售代表的效率受制于客户是否回复、是否有预算，而大多数企业也没有「把 GitHub 给你就好」的时刻，因为他们的数据躺在 legacy 文件共享和本地系统里，还有 agent 无法穿越的访问控制。于是他给出预测：「五年之后，我敢打赌，企业里 90% 的 token 都来自用户根本没有发起过的任务，用户只是看到一个结果。」

他对 system of record 的建议是同时做两件事：做一个在自家产品上比任何通用 agent 明显强 10 到 20 个百分点的 agent；同时让自己 headless，让 Claude、ChatGPT 等平台能通过 API 和 MCP 接进来。他对 AI 带来的文化混乱同样坦率：人们自己用 AI 做头脑风暴时心安理得，却会悄悄怀疑同事那份 AI 参与的 deck 是否意味着这个人还值得信任、还能把事做成。至于 open weights，他的判断是采用率「比大家想的高，比企业真正想要的低，也比五年后会达到的水平低得多得多得多得多」。

- [Training Data: Box's Aaron Levie: On Reinventing Yourself in the AI Age and Enterprise Diffusion](https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8)

## Blog

### Claude Blog: Claude for Small Business launches new workflows, integrations, and training programs

Claude for Small Business 现在包含 43 个工作流和 27 个新集成，接入的都是小企业已经在用的工具，包括 Shopify、Salesforce、TikTok、Atlassian、Zoom、Xero、Gusto、Square、Stripe 和 Zapier。新工作流把 Claude 从「管好后台」扩展到「把生意做大」，同时配上了秋季的免费线下工作坊和合作方 webinar，方便想上手的老板们参加。Anthropic 在 5 月推出这个产品时，它只是一组 connector 和开箱即用的工作流，公司说如今安装量已经超过 90 万次；最早合作并持续合作的伙伴包括 Intuit Quickbooks、PayPal、HubSpot、Canva、Docusign、Google Workspace 和 Microsoft 365。

这次发布是被老板们的需求塑形的。在春季的 Claude SMB Tour 上，来自 10 个城市的 1000 多位老板讲了自己希望 Claude 接下来接手什么，大约三分之一的人要的是帮生意增长，从找线索、回答客户咨询到写方案，还有很多人希望日常报表由它来处理。巡展今年秋天回归，会在美国 10 个城市举办免费工作坊；超过 150 家被培训为 Approved Claude SMB Trainers 的机构会在自己的社区里举办 750 多场工作坊；14 家集成伙伴也会围绕各自的 connector 举办免费 webinar。

客户案例最能说明被省下来的时间。「过去要花我 120 个小时的事，现在 5 分钟就完成了。」华盛顿特区 Blackfyre GovCon 创始人兼 CEO Pedro Rubio 说。印第安纳州 Carmel 的 KBSO Consulting 战略与创新总监 Cara Roellgen 把它看成一个均衡器：「我真的觉得 Claude 是小企业的均衡器，现在我们能做到 100 人、200 人公司才能做到的事。」俄克拉荷马州 Tulsa 的 Driller Design Co. 老板 Garrett French 描述了一个 agent：每天早上 6 点查看 CRM，给待办事项排好优先级，然后发一封邮件，他们把它叫做 daily briefing。

- [Claude Blog: Claude for Small Business launches new workflows, integrations, and training programs](https://claude.com/blog/claude-for-small-business-launches-new-workflows-integrations-and-training-programs)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
