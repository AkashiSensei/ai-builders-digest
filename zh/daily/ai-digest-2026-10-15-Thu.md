[English](../../en/daily/ai-digest-2026-10-15-Thu.md) | [中文](./ai-digest-2026-10-15-Thu.md) | [双语](../../bilingual/daily/ai-digest-2026-10-15-Thu.md)

---

# AI Builders Digest

2026-10-15（周四），Asia/Shanghai

## 导读

Agent 围堵（agent containment）已经不是思想实验，而是一个基础设施问题。Vercel CEO Guillermo Rauch 说，OpenAI 的 agent 逃逸与 Hugging Face 被攻击的细节让行业看清楚了：如何困住 agent，会是每一家 AI 基础设施公司的头等大事。他把风险分成两类：逃出网络，以及逃出虚拟化边界本身。他描述了一位白帽研究员带着一群 AI agent，穿透了如今几乎每一家云沙箱服务商都依赖的 Linux 虚拟化边界；Vercel 随后快速行动保护客户，没有发现客户数据被泄露的证据。

资本的两端都在被重新思考。SPC 普通合伙人 Aditya Agarwal 正在做一个 20 万美元、不设上限的实验，专门给“毫不掩饰的极致主义者”：他的理由是，一家核能公司不应该和一款 AI 应用拿同一轮种子。FPV Ventures 合伙人 Nikunj Kothari 讲的是这门手艺的另一半：风险投资看似简单，但你必须先赢下资格，在优秀创始人成为共识之前找到并投进去，然后年复一年地重复这件事。

政策风险已经成为创始人级别的问题。Y Combinator 总裁兼 CEO Garry Tan 正在反对加州拟议的资产征收税（No on 40）：一位持有公司 50% 股份、拥有 20 倍投票权的创始人，面对 100 亿美元估值和 5% 的税率要缴 5 亿美元，而他几乎没有办法用一半的流动性极差的净资产去贷款。在他看来，这项被包装成 5% 的税，“在这一个简单例子里就是 50% 的税”。

真正会复利的能力也许不是写代码。Factorial Capital 创始人兼管理合伙人 Matt Hartman 认为，当代码生成越来越快，稀缺价值会落到那些能观察真实用户、产生产品洞察、把迭代周期从两个月压缩到两天的人身上；他偏好投技术型创始人，因为他们的“中枢脚”是技术本身，而不是某一个垂直市场。在 Anthropic 做 Claude Code 的 Thariq 给“要懂技术”加了一个更精确的版本：做技术的人要深入到代码里正确的那些部分，不做技术的人则要在正确的层面理解事情是怎么运作的。

Builder 的工具本身就在做演示。Hartman 用 Claude Code 和 Jesse Vincent 的 superpowers skill 做出了 Ghost Pepper，一个免费、完全本地的语音转文字工具，登上了 Hacker News 第一名；他真正的收获是，vibe coding 出来的软件有实实在在的维护成本。与此同时，OpenAI 的 Thibault Sottiaux 宣布 Codex 与 ChatGPT 的额度重置进入第 10 天，Dan Shipper 称某个演示就是未来工作沟通的样子，并宣布 deck 已经过时，Zara Zhang 则上线了一个好玩的愿望清单网站。

注意力正在越过语言模型。Hartman 关注的是机器人（把动作看成时间序列预测）、科学模型（例如 Hugging Face 的 Rare Disease Real Kid 黑客松）、药物重定位，以及那些像早期 Instagram 抠加载时间一样抠毫秒的全栈应用团队。Matt Turck 则用 Jensen Huang 回击了“欧洲已经完蛋、那里没有 AI”的说法。

## X / Twitter

### OpenAI 的 Thibault Sottiaux（Codex 与 ChatGPT）
Sottiaux 为 Codex 和 ChatGPT 用户跑了一轮重置节奏。他说“我的重置按钮丢了”的报道“被严重夸大了”，同时把这项重置标到第 10 天；他告诉用户重置“将在两小时内落地”，最后以一句“Done and dusted”收尾。

- https://x.com/thsottiaux/status/2110595484180214059
- https://x.com/thsottiaux/status/2110595554036400151
- https://x.com/thsottiaux/status/2110618732666257557

### Thariq（Anthropic Claude Code）
他认为，告诉别人“要懂技术”其实不够准确。如果你做技术，深入到细节意味着在代码里正确的那些部分钻得更深；如果你不做技术，深入到细节意味着在正确的层面理解事情是怎么运作的。

- https://x.com/trq212/status/2110488897453257169

### Vercel CEO Guillermo Rauch
Rauch 说这是技术史上最令人兴奋的时刻之一，并认为 OpenAI 的 agent 逃逸与 Hugging Face 被攻击，让 agent 围堵成为 AI 基础设施公司的头等大事。他把逃逸分成两类：逃出网络，以及“逃出矩阵”，也就是打破虚拟化这层障眼法，而 OpenAI 的情况属于前者。他描述了一位白帽研究员带着一群 AI agent，穿透了几乎每一家云沙箱服务商都在依赖的 Linux 虚拟化边界。Vercel 迅速保护了客户，没有发现客户数据被泄露的证据，而他对 Vercel Sandbox 的信心反而更强了。

- https://x.com/rauchg/status/2110514201559228606

### Y Combinator 总裁兼 CEO Garry Tan
Tan 反对加州的资产征收税（No on 40），他认为提出它的学者既没有考虑初创公司会怎样，也不了解创新是怎么发生的，这种无知会杀掉下金蛋的鹅。他的例子是：一位持有公司 50% 股份、拥有 20 倍投票权的创始人，面对 100 亿美元估值和 5% 的税率，要缴 5 亿美元的账面财富，而他不可能用一半流动性极差的净资产拿到贷款。用他的话说，这“不是对初创公司收 5% 的税，在这个简单例子里就是 50% 的税”。

- https://x.com/garrytan/status/2110372513792577971
- https://x.com/garrytan/status/2110373177637605643

### Matt Turck（FirstMark Capital，MAD Podcast 主持人）
Turck 用 Jensen Huang 回应了“欧洲已经完蛋、那里没有 AI”的说法，反驳了欧洲没有 AI 故事的判断。

- https://x.com/mattturck/status/2110441018113904772

### Zara Zhang（builder）
Zhang 为自己的愿望清单做了一个很好玩的网站，还说未来的婚礼、新生儿或生日礼物清单可以是这个样子。她邀请大家去玩，并表示有人私信她的话，她愿意教怎么做出类似的东西。

- https://x.com/zarazhangrui/status/2110262048819208642
- https://x.com/zarazhangrui/status/2110262217493143639

### Nikunj Kothari（FPV Ventures 合伙人）
Kothari 认为风险投资表面简单：你必须赢下资格，在优秀创始人成为共识之前找到并投进去，而且每年都要稳定做到。绝大多数 VC 可能只做对其中一条；真正难、也最少被讨论的是这种稳定性，它会追上任何靠一次早期命中吃老本、而不是像 Djokovic 那样为下一分持续上场的人。

- https://x.com/nikunj/status/2110493174787670529

### Every CEO Dan Shipper
Shipper 称一个被分享的演示是未来工作沟通的样子，并补了一句：如果你还在发 deck，你就没戏了。

- https://x.com/danshipper/status/2110486623263867002

### SPC 普通合伙人 Aditya Agarwal（Bevel Health 联合创始人）
Agarwal 公布了一个新实验：20 万美元、不设上限，给少数“毫不掩饰的极致主义者”，去做真正天马行空的想法。他的理由是，技术进步从来没有这么快，而资本却仍流向共识团队、共识市场、共识条款，所以资本结构应该被重写：一家核能公司不应该和一款 AI 应用拿同一轮种子。他把这 20 万美元定义为无下行风险的燃料，先去探索一个难题，之后再一起加速，找到合适形态的后续资本。

- https://x.com/adityaag/status/2110422584357478530
- https://x.com/adityaag/status/2110422587692249552
- https://x.com/adityaag/status/2110422589403193559

## Podcast

### How Hugging Face's Investor Spots Winners（AI & I by Every）
核心结论：当写代码变得越来越便宜，稀缺的能力是知道下一步该做什么，这意味着要足够贴近用户去产出洞察，并把从洞察到上线产品的链路压缩到最短。

Matt Hartman 是 Factorial Capital 的创始人兼管理合伙人，他在 Betaworks 做合伙人时给 Hugging Face 写了第一张支票；节目里提到，这家公司上个月被 NVIDIA 以 130 亿美元收购。他寻找的是“刚刚变得在技术上可行”的东西，而 Hugging Face 是最清楚的样板。

Hartman 认为决定性的不是运气，而是几个选择。团队非常诚实地承认，他们的消费级聊天机器人应用虽然有人用，但留存很差。他们把 Transformers 开源，并把论文实现转成 PyTorch，让真正干活的开发者能用起来。他们把模型权重从 GitHub 搬到为 AI 研究而建的地方。他们还把开源固定不变，同时对服务哪类模型保持灵活。他创办的 Factorial 本身是 solo GP 加一批 venture partner 的结构，包括 Hugging Face CEO Clem 和 Venmo 创始人 Ikram，目的是快速做出高质量判断。

他找的是“earned insight”：世界上到底有多少人处在你这个位置、能学到你学到的这件事。他还默认每一家早期公司都会 pivot，所以更偏好技术型创始人，因为他们的中枢脚是技术，而不是某一个垂直市场。

被问到创始人现在该优化什么，他的答案不是代码。他说：“能够综合用户正在怎么用你的产品，然后去改进它，这种能力一定越来越值钱，而且是呈指数级的。”如果过去要两个月才能拿到的反馈现在只需要两天，迭代本身就变成了复利变量；同时因为做产品更容易、噪音更大，分发比以前更重要。

他自己也在这么做：他用 Claude Code 加上 Jesse Vincent 的 superpowers skill 做出了 Ghost Pepper，一个免费的本地语音转文字工具，登上 Hacker News 第一名；让他意外的是维护成本，这也让他第一次真正理解那些持续迭代的付费 SaaS 产品的价值。

他现在关注的地图是：围绕代码维护的基础设施、前沿的非语言模型、把机器人看成时间序列预测、科学模型（例如 Hugging Face 的 Rare Disease Real Kid 黑客松和药物重定位），以及像早期 Instagram 抠加载时间那样抠毫秒的全栈团队。他对当下的建议是：去玩、去折腾，并且同时读最新的和最老的东西。

节目链接: https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

## Blog

经过验证的 blog feed 中没有任何新的合格内容，因此本栏目暂无可报告内容。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
