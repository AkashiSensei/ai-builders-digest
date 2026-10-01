[English](../../en/daily/ai-digest-2026-10-01-Thu.md) | [中文](./ai-digest-2026-10-01-Thu.md) | [双语](../../bilingual/daily/ai-digest-2026-10-01-Thu.md)

---

# AI Builders Digest

## 导读

**1. OpenAI 的 Dev Day 把 ChatGPT 变成了一个平台。**负责 OpenAI 旗下 Codex 与 ChatGPT 的 Thibault Sottiaux 说，现在可以直接在 ChatGPT 里构建和部署 MCP server，并且能把访问权限限制给你指定的人，或者向全世界开放。他还说 GPT-6.1 Sol 是 OpenAI 迄今需求最高的模型，API 和订阅两条线都一样；ChatGPT 和 Codex 一度负载很重，但已经补充了更多算力，服务速度应该会提升到接近前一天的两倍。同一波更新里，OpenAI CEO Sam Altman 谈到一种持续在线、主动工作的智能，并说公司正在开放生态，让人们能在 ChatGPT 里做应用、把自己的订阅带到任何地方，还能使用 marketplace。（[Thibault Sottiaux on MCP servers in ChatGPT](https://x.com/thsottiaux/status/2105519215092584786)、[Thibault Sottiaux on GPT-6.1 Sol demand](https://x.com/thsottiaux/status/2105464274747527543)、[AI & I by Every](https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL)）

**2. 后台 agent 卖的是时间，不是工具。**Sam Altman 说 Dev Day 发布的 Dots 是第一个帮他重新掌控早晨和大脑空间的东西：他过去最喜欢在清晨做最深的工作，后来公司变大，夜里的问题不看就不行；现在他信任自己的 dot 判断什么才真正需要他看。他说自己用 dot 迭代过一个新功能，方式是把原始想法和语音留言丢进去；还靠 dot 找回了一张 Codex 搜不到的 Slack 截图。Y Combinator 总裁兼 CEO Garry Tan 提到 Capy，说别的代码编辑器只能自上而下协调子 agent，而 Capy 让 agent 群体以同级身份互相沟通、自我协调，因此你可以顺势探索一个空间，而不必事先安排。来自 OpenClaw 与 OpenAI 的 Peter Steinberger 说，聊天流里 agent 互相对话越来越烦，于是他在 OpenClaw harness 里把它改成一行可展开的显示，并认为其他人很快会跟进。（[AI & I by Every](https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL)、[Garry Tan on Capy](https://x.com/garrytan/status/2105449821645480046)、[Peter Steinberger](https://x.com/steipete/status/2105362785534361996)）

**3. Google 的 Gemini 4 时刻，还附带一张待办清单。**Google 副总裁 Josh Woodward 发了一句 "Gemini 4 Argon!"，他在 Google 负责 Google Labs、Gemini App 与 Google AI Studio。Peter Yang 说 "Google cooked on Gemini 4"，但认为 Google 在 coding harness（Antigravity）和个人 agent（Spark）上还得更有竞争力。与此同时，Google Labs 宣布工作流实验产品 Opal 将于 2026 年 11 月 17 日关停，而正在全球上线的 Gemini App skills 正是从 Opal 的经验里做出来的。（[Josh Woodward](https://x.com/joshwoodward/status/2105396307250782446)、[Peter Yang](https://x.com/petergyang/status/2105393240392585359)、[Google Labs](https://x.com/GoogleLabs/status/2105352889665564838)）

**4. 企业 AI 的机会在部署层，而且长得像服务业。**Box CEO Aaron Levie 认为，真正难而值钱的工作是把 AI 扩散进企业：把遗留系统搬到云上，更新数据的组织和访问方式，把软件用新的方式连上 agent，为 agent 重做工作流，想清楚 human-in-the-loop，生成并维护 eval，还要随着新模型和新能力不断更新整套系统。他认为 AI 与传统软件不同，agent 交付的是流程里的实际工作产出，这意味着完全不同的实施与赋能负担，也会催生一批新公司和 FDE 类型的机会。SPC 普通合伙人 Aditya Agarwal 说他一直问创始人的问题是「这家公司最大胆的版本是什么？」，他认为 AI 降低了构建门槛，却大幅抬高了「什么才算伟大创业公司」的门槛，所以起步太小会让融资、招人和做出影响都更难。刚加入 OpenAI、负责 Codex 产品一周的 Nan Yu 说，最突出的是极强的行动偏好，Slack 上随口一聊，几分钟后 PR 和日历邀请就已经摆在你面前。（[Aaron Levie](https://x.com/levie/status/2105354449795621179)、[Aditya Agarwal](https://x.com/adityaag/status/2105339569139056776)、[Nan Yu](https://x.com/thenanyu/status/2105316751802348005)）

**5. 信任与经济性正在成为基础设施的主线。**Vercel CEO Guillermo Rauch 说，大多数 token 聚合器噪音很大，因为里面混着会拿你数据训练的供应商的推广，或者只是自称零数据保留的供应商；他把 Vercel AI Gateway 定位成理解全球 AI token 流向的最大可信数据源，背后是来自 40 多万付费客户和数千家企业的真实使用量，而且不加价。他还推出 Connect，面向想触达 2000 多万开发者以及他们要发布的数十亿个 agent 的服务商，认为静态凭证既是开发体验的灾难，也是巨大的责任风险。在 Every Podcast 里，Sam Altman 把速度说成继价格之后的下一个维度：OpenAI 过去专注压低智能的价格，现在要让速度也普及，靠自研芯片，在不远的将来以好价格做到大约 8 倍速推理，之后再往 100 倍走。（[Guillermo Rauch on AI Gateway](https://x.com/rauchg/status/2105476587756138942)、[Guillermo Rauch on Connect](https://x.com/rauchg/status/2105390544096841942)、[AI & I by Every](https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL)）

**6. AI 的扩散正在触及物理世界和工作本身。**Garry Tan 回忆自己问美国交通部长 Sean Duffy，如果这十年走对了，美国人应该能做成哪些今天做不到的事，并描述了 Duffy 想用 Air Space Intelligence 的 SMART 这类工具取代纸质航图和铅笔排班：他说这能把 2.5 小时的停飞缩短到 45 分钟，同时把最终决定权留给管制员，Duffy 的回应是 "it's dumb AI, not smart AI"。FPV Ventures 合伙人 Nikunj Kothari 说他几乎把工作里能自动化的部分都自动化了，只剩下找项目和写外联邮件、当面见创始人、以及手写 pass note。在 Every Podcast 里，Sam Altman 把以人为中心的文艺复兴和以机器为中心的工业革命作对比，说他希望 AI 带来一波发现、艺术和公司创建的浪潮，同时让人重新掌握主动权。FirstMark Capital 的 VC Matt Turck 则提到一个说法：SaaS 公司看到 Anthropic 的 ARR 增长趋于平缓。（[Garry Tan on air traffic control](https://x.com/garrytan/status/2105395957357588561)、[Nikunj Kothari](https://x.com/nikunj/status/2105532229866942772)、[AI & I by Every](https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL)、[Matt Turck](https://x.com/mattturck/status/2105261211906384132)）

## X / Twitter

### Swyx

Swyx 说 Flow 对硬件工程的意义，就像 Git 和 GitHub 对软件工程的意义，它让成千上万的参与方在从汽车到火箭这类复杂、不可逆、高价值的流程里对齐，用过之后就再也回不去「spreadsheet_final_FINAL_v23」了。他说自己首先是朋友，其次才是 smol 的投资者。

- [Swyx: Flow for hardware engineering](https://x.com/swyx/status/2105348724331606411)

### Josh Woodward: VP at Google

Google 副总裁 Josh Woodward 负责 Google Labs、Gemini App 与 Google AI Studio，他发了一句 "Gemini 4 Argon!"。

- [Josh Woodward: "Gemini 4 Argon!"](https://x.com/joshwoodward/status/2105396307250782446)

### Thibault Sottiaux: Codex and ChatGPT at OpenAI

Thibault Sottiaux 说，现在可以直接在 ChatGPT 里构建和部署 MCP server，并且能把访问权限限制给你指定的人，或者向全世界开放。他还说 GPT-6.1 Sol 是 OpenAI 迄今需求最高的模型，API 和订阅两条线都一样；ChatGPT 和 Codex 一度负载很重，但已经补充了更多算力，服务速度应该会提升到接近前一天的两倍。

- [Thibault Sottiaux: MCP servers in ChatGPT](https://x.com/thsottiaux/status/2105519215092584786)
- [Thibault Sottiaux: GPT-6.1 Sol demand and capacity](https://x.com/thsottiaux/status/2105464274747527543)

### Peter Yang

Peter Yang 说 "Google cooked on Gemini 4"，并认为 Google 现在需要在 coding harness（Antigravity）和个人 agent（Spark）上更有竞争力。

- [Peter Yang: Gemini 4, Antigravity, and Spark](https://x.com/petergyang/status/2105393240392585359)

### Nan Yu: Product at Codex, OpenAI

Nan Yu 在 Linear 带过产品，现在在 OpenAI 负责 Codex 的产品。他说自己入职第一周最突出的感受，是极高的行动偏好：随口聊到一个可能的功能，回到工位时 PR 已经摆在那里；在 Slack 上跟人约下周吃饭，五分钟内日历邀请就发出来了。他说这种「一触即发」的节奏有时会让人措手不及，但很难教出来，一旦丢掉更是极难找回；而一家在旧金山有好几栋大楼的公司还能保持这种能量，很让人佩服。

- [Nan Yu: OpenAI's bias toward action](https://x.com/thenanyu/status/2105316751802348005)

### Thariq: Claude Code at Anthropic

在 Anthropic 负责 Claude Code 的 Thariq 分享了他正在做的一个游戏原型，说原型虽然好玩，但理想情况下他会和两三个人的小团队一起做，因为懂动画和设计的专业人士能让它好很多。他明确说现在只是原型质量，还不足以让人玩；真正的游戏可能需要给角色做三到四个版本、总共八到十个角色。他还说自己已经试了两三个版本，想给角色加一个大幅跳跃，但一直没能找到自己喜欢的操作方式。

- [Thariq: working with a small team](https://x.com/trq212/status/2105333509246386546)
- [Thariq: prototype game quality](https://x.com/trq212/status/2105333507711271060)
- [Thariq: the big jump control scheme](https://x.com/trq212/status/2105333506226503710)

### Google Labs

Google Labs 宣布，正在全球上线的 Gemini App skills 来自工作流定制实验 Opal 的经验，而 Opal 将于 2026 年 11 月 17 日关停。它感谢那些在 Opal 上做过 mini-app、或在 Gemini 里用过 Gems 的人，说他们塑造了可定制 AI 的未来。

- [Google Labs: Opal sunset and skills in Gemini](https://x.com/GoogleLabs/status/2105352889665564838)

### Amjad Masad: CEO of Replit

Replit CEO Amjad Masad 说，你可以制作 Meta VR 应用，并一键发布。

- [Amjad Masad: one-click publish Meta VR apps](https://x.com/amasad/status/2105321112389443805)

### Guillermo Rauch: CEO of Vercel

Vercel CEO Guillermo Rauch 认为大多数 token 聚合器噪音很大，因为里面混着会拿你数据训练的供应商的推广，或者只是自称零数据保留的供应商；他把 Vercel AI Gateway 定位成理解全球 AI token 流向的最大可信数据源：真实使用量、真实客户、一个拥有 40 多万付费客户和数千家企业的规模化平台，而且不加价。他说 Vercel 每周都会拒绝那些 ZDR 声明可疑、口碑不佳的「免费 token」推广，并表示大多数供应商都很烂，目标应该是选最好的供应商，而不是最多的供应商。另外他说，想触达 2000 多万开发者以及他们要发布的数十亿个 agent 的服务商，应该把自己加进 Connect；在他看来，当代码已经「免费」，连接一切就是最后的关卡，而 Connect 比给每个 agent 或应用发静态凭证既更简单也更安全。

- [Guillermo Rauch: Vercel AI Gateway](https://x.com/rauchg/status/2105476587756138942)
- [Guillermo Rauch: Connect](https://x.com/rauchg/status/2105390544096841942)

### Aaron Levie: CEO of Box

Box CEO Aaron Levie 说，现在有一个巨大的机会，就是成为 AI 进入经济体的部署层，因为改造企业工作流的实际工作量远超所有人的想象和意愿。他列出这其中包括：把遗留系统搬到云上，更新数据的组织和访问方式，把软件用新的方式连上 agent，为 agent 重做工作流，想清楚 human-in-the-loop，生成并维护 eval，还要随着新模型和新能力不断更新整套系统。他最关键的区分是：AI 和部署软件不是一回事。传统软件的实施面向一个已被充分理解的成熟技术品类，做完之后客户自己就能跑下去；而 AI agent 是在流程里交付实际的工作增强，实施和赋能流程完全不同。他预计会出现大量新的公司形态和打法，按行业、公司规模、以及公司内部的具体问题来切分；传统系统集成商会现代化转型，也有一些会掉队，现在正是做 forward-deployed engineer 或 FDE 公司的好时候。

- [Aaron Levie: the AI deployment layer](https://x.com/levie/status/2105354449795621179)

### Garry Tan: President and CEO of Y Combinator

Y Combinator 总裁兼 CEO Garry Tan 提到 Capy，说别的代码编辑器只能自上而下协调子 agent，而 Capy 让 agent 群体以同级身份互相沟通、自我协调，因此你可以顺势探索一个空间，而不必事先安排。在另一条帖子里，他回忆自己在 DC 的 Startup Industrial Base 活动上问美国交通部长 Sean Duffy，如果这十年走对了，美国人应该能做成哪些今天做不到的事，并描述了 Duffy 关于空中交通管制的回答：指挥中心里的人坐在六块屏幕前，头顶还要看纸质航图；四架飞机同时抵达同一条跑道，一次只能落一架；一个机场在 15 分钟窗口里能接收 15 架飞机，而航空公司会排 32 架。Tan 说工具是 Air Space Intelligence 的 SMART，这家公司他说曾与最大的公司竞争并胜出；Duffy 因为被指把空中交通管制交给 AI 而受到批评，他的回应是 "it's dumb AI, not smart AI"，最终决定权仍然在管制员手里。

- [Garry Tan: Capy and peer agent swarms](https://x.com/garrytan/status/2105449821645480046)
- [Garry Tan: AI and air traffic control](https://x.com/garrytan/status/2105395957357588561)

### Matt Turck: VC at FirstMark Capital

FirstMark Capital 的 VC Matt Turck 提到一个说法：SaaS 公司看到 Anthropic 的 ARR 增长趋于平缓。

- [Matt Turck: Anthropic ARR growth](https://x.com/mattturck/status/2105261211906384132)

### Nikunj Kothari: Partner at FPV Ventures

FPV Ventures 合伙人 Nikunj Kothari 说他几乎把工作里能自动化的部分都自动化了，只剩下三件事：找项目和写外联邮件，他坚信这块再多技术也帮不上忙；见创始人，主要是当面见，因为 Zoom「太烂了」；以及写 pass note 和通话记录，他至今仍然手写，并说这是工作里最难的部分。他补充说，自己没有行政助理，也不打算请一个。

- [Nikunj Kothari: what he has not automated](https://x.com/nikunj/status/2105532229866942772)

### Peter Steinberger: OpenClaw and OpenAI

Peter Steinberger 说，聊天流里 agent 互相对话越来越烦，于是他在 OpenClaw harness 里把它改成一行可展开的显示，并认为其他人很快会跟进。

- [Peter Steinberger: collapsing inter-agent chatter](https://x.com/steipete/status/2105362785534361996)

### Aditya Agarwal: General Partner at SPC

Aditya Agarwal 说他一直问 SPC 创始人的问题是「这家公司最大胆的版本是什么？」。他认为，今天做公司唯一的办法，就是拿出最勇敢、最大胆的版本，想清楚它如何改变未来的走向；如果一开始就做小了，融资、招到优秀的人、真正做出影响都会变得很难。他把这叫作 AI 的悖论：它让构建变简单，却大幅抬高了「什么才算伟大创业公司」的门槛。

- [Aditya Agarwal: the maximalist version](https://x.com/adityaag/status/2105339569139056776)

## Podcast

### AI & I by Every：Sam Altman 如何用 Dots 夺回自己的时间

核心结论：Dots 与其说是一个更快的聊天窗口，不如说是在把被全天候工作悄悄吃掉的那部分注意力还给人；OpenAI 赌的是下一次平台迁移，是那些在后台主动行动、而不是等你发提示词的 agent。

OpenAI CEO Sam Altman 说，Dev Day 发布的 Dots 是第一个帮他重新掌控早晨和大脑空间的东西。他过去最喜欢清晨，那是他一天里最有创造力的时段，用来处理最深、最复杂的项目。经营一家大公司改变了这一切：夜里发生的问题如果一小时不看，就可能变成真正的灾难；而一早拿起手机，又会把整个大脑污染一整天。现在他信任自己的 dot 判断什么才真正需要他看，他说这让他重新拿回了创作的空间，也拿回了陪孩子的时间。

更值得注意的判断是，这是一次平台迁移。Altman 描述了一个「持续在线、主动工作的智能」世界，说「agent 会在后台 24/7 运行，连着你的系统，主动替你做事」，OpenAI 正在开放生态，让人们能在 ChatGPT 里做应用、把自己的订阅带到任何地方，还能使用 marketplace。在研究层面，他说关键的解锁点是 Astra：一个足够聪明、跨过智能门槛的模型，再加上围绕它的一整套系统工作。

他举的例子都很具体。一个 dot 在 Dev Day 主题演讲的 demo 前五分钟提醒他，现场的舞台布置很可能会让 demo 失效，并问要不要试着修。另一个 dot 在排满会议的一天里，帮他点出了唯一一件必须处理、否则他绝不会发现的事。当 Codex 搜索找不到他曾在 Slack 里见过的东西时，他的 dot 连夜继续找，最后找到了，那是一张截图，而他一直误以为是文字。他还试过在快睡着时留下语音留言，醒来发现功能已经做好，后面几步也一并完成了。

关于速度，Altman 说现在他所有的提示词都跑在 Ultrafast 上，并引用设计师 Bret Victor 的原则：创作者应该和自己正在创造的东西保持即时连接。OpenAI 过去多年专注压低智能的价格，现在速度是下一个维度：靠自研芯片，很快能以好价格做到大约 8 倍速推理，之后还会到 100 倍。他把这件事的赌注定性为文艺复兴对工业革命，希望到来的是一波发现和公司创建的浪潮，而中心是人，不是机器。

https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

## Blog

本次运行通过验证的博客 feed 中没有新的合格内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
