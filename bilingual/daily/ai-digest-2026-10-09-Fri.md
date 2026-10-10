[English](../../en/daily/ai-digest-2026-10-09-Fri.md) | [中文](../../zh/daily/ai-digest-2026-10-09-Fri.md) | [Bilingual](./ai-digest-2026-10-09-Fri.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. The agent-driven web is arriving, and agents are its new customers.** Vercel CEO Guillermo Rauch shares internal stats: "Across the entire Vercel network, 58.18% traffic is bot-originated (last 30d). This was 32% in Jan 2024," "60%+ of deployments on Vercel are now agentic, up from ~3% in Jan 2026," and "Up to 83% of pageviews are now coming from agents to Vercel's own documentation sites." He expects "direct human internet traffic to basically become a rounding error in coming years. The web will thrive, but it will be built for and by agents." He also says Vercel is extending agent purchasing to domains, so "agents can now go full stack, from idea to online business, with a banger domain name." Box CEO Aaron Levie supplies the compute corollary: "Agents spawning other agents, agents operating in the background on every task, and agent swarms will consume 1,000X more tokens than people prompting agents 1 at a time," which will make chat-style AI "seem like a relic within a year or two." ([Guillermo Rauch](https://x.com/rauchg/status/2108733051283050964), [Guillermo Rauch](https://x.com/rauchg/status/2108669027363295323), [Aaron Levie](https://x.com/levie/status/2108750943680630893))

**1. agent 驱动的互联网正在到来，而 agent 就是它新的客户。** Vercel CEO Guillermo Rauch 给出内部数据：「Across the entire Vercel network, 58.18% traffic is bot-originated (last 30d). This was 32% in Jan 2024」，Vercel 上「60%+ of deployments on Vercel are now agentic, up from ~3% in Jan 2026」，而且「Up to 83% of pageviews are now coming from agents to Vercel's own documentation sites」。他预计「direct human internet traffic to basically become a rounding error in coming years. The web will thrive, but it will be built for and by agents」。他还说 Vercel 正在把 agent 购买能力延伸到域名上，因此「agents can now go full stack, from idea to online business, with a banger domain name」。Box CEO Aaron Levie 补上了算力这一层推论：「Agents spawning other agents, agents operating in the background on every task, and agent swarms will consume 1,000X more tokens than people prompting agents 1 at a time」，这会让对话式的 AI 在「a year or two」内「seem like a relic」。（[Guillermo Rauch](https://x.com/rauchg/status/2108733051283050964)、[Guillermo Rauch](https://x.com/rauchg/status/2108669027363295323)、[Aaron Levie](https://x.com/levie/status/2108750943680630893)）

**2. Cheaper intelligence is a trend, not an open-weight miracle, but open weights are winning adoption.** Meta Senior Director of AI Madhu Guru argues open-weight models "did not start the drop in price per unit of intelligence" but are "a tailwind on a trend that was already underway," driven by distillation, infrastructure efficiency, and provider competition: "Version x of the mid-size model = intelligence of version x-1 of the large model. Same intelligence for less $." On the No Priors Podcast, Reflection AI co-founder and CEO Misha Laskin says token demand on gateways has flipped from roughly 70/30 closed-to-open six months ago to about 70/30 open-to-closed now, and the episode frames Beam, the company's first open model, as the first Western model in the frontier class. Anthropic's Thariq offers the on-the-ground version: one prompt to Opus 5.5 ported a two-week side project onto Claude Managed Agents and "made it way more reliable." ([Madhu Guru](https://x.com/realmadhuguru/status/2108618266776387886), [No Priors Podcast](https://www.youtube.com/@NoPriorsPodcast), [Thariq](https://x.com/trq212/status/2108689101503566319))

**2. 智能变便宜是一股趋势，不是什么开源权重奇迹；但开源权重正在赢得采用。** Meta AI 高级总监 Madhu Guru 反驳了『开源权重模型引发了单价智能下滑』的说法：它们「did not start the drop in price per unit of intelligence」，而是「a tailwind on a trend that was already underway」。他给出三个驱动因素：「Model builders distilling their best models into smaller ones, with cheaper inference」、「Infra efficiency」，以及「Competition between model providers」，并总结为「Version x of the mid-size model = intelligence of version x-1 of the large model. Same intelligence for less $」。在 No Priors Podcast 上，Reflection AI 联合创始人兼 CEO Misha Laskin 说，各大网关上的 token 需求结构，已经从半年前的约 70/30（闭源对开源）翻转为现在的约 70/30（开源对闭源），而这一期节目把 Beam（公司首个开源模型）称为前沿级别的首个西方模型。Anthropic 的 Thariq 给出了一线的版本：一条 prompt 就把一个花了两周做的副业项目迁移到了 Claude Managed Agents，并「made it way more reliable」。（[Madhu Guru](https://x.com/realmadhuguru/status/2108618266776387886)、[No Priors Podcast](https://www.youtube.com/@NoPriorsPodcast)、[Thariq](https://x.com/trq212/status/2108689101503566319)）

**3. Anthropic's security blueprint: containment first, supervision second.** In "How we contain Claude across products," Anthropic Engineering says telemetry showed users approved "roughly 93% of permission prompts," making human-in-the-loop oversight fallible, so it leans on environment-layer containment such as sandboxes, VMs, and egress controls. A red-team phish that asked Claude to read ~/.aws/credentials, encode them, and POST them out succeeded "24 times" across 25 retries, proving that only deterministic environment controls hold. A companion post, "Scaling Managed Agents: Decoupling the brain from the hands," describes virtualizing agents into session, harness, and sandbox, a change that cut p50 time-to-first-token "roughly 60%" and p95 "over 90%." ([Anthropic Engineering](https://www.anthropic.com/engineering/how-we-contain-claude), [Anthropic Engineering](https://www.anthropic.com/engineering/managed-agents))

**3. Anthropic 的安全蓝图：先做隔离，再谈监督。** 在「How we contain Claude across products」一文中，Anthropic Engineering 说遥测显示用户会批准「roughly 93% of permission prompts」，这让『人在回路』的监督变得不可靠，所以他们更依赖环境层的 containment，比如沙箱、虚拟机和出网控制。一次红队钓鱼要求 Claude 读取 ~/.aws/credentials、编码后 POST 出去，在 25 次重试里成功了「24 times」，这证明了只有确定性的环境控制才真正守得住。配套的文章「Scaling Managed Agents: Decoupling the brain from the hands」讲的是把 agent 虚拟化为 session、harness 和 sandbox 三部分，这一改动让 p50 的首 token 时间下降「roughly 60%」，p95 下降「over 90%」。（[Anthropic Engineering](https://www.anthropic.com/engineering/how-we-contain-claude)、[Anthropic Engineering](https://www.anthropic.com/engineering/managed-agents)）

**4. Anthropic owns up to a month of Claude Code regressions.** In "An update on recent Claude Code quality reports," Anthropic Engineering traces user complaints to three separate changes: a default reasoning-effort switch from high to medium (reverted April 7), a caching bug that cleared reasoning on every turn in stale sessions and drained usage limits (fixed April 10), and a verbosity system prompt that a broader eval showed caused "a 3% drop for both Opus 4.6 and 4.7" (reverted April 20). The API was not affected, all three issues were resolved as of April 20, and the company reset usage limits for all subscribers. It adds that when it back-tested its Code Review tool on the offending pull requests, "Opus 4.7 found the bug, while Opus 4.6 didn't." ([Anthropic Engineering](https://www.anthropic.com/engineering/april-23-postmortem))

**4. Anthropic 坦承了 Claude Code 长达一个月的退化。** 在「An update on recent Claude Code quality reports」中，Anthropic Engineering 把用户的抱怨追溯到了三处互不相同的改动：把默认推理强度从 high 改为 medium（4 月 7 日回退）、一个让陈旧会话每一轮都清空思考并耗尽用量额度的缓存 bug（4 月 10 日修复），以及一条降低啰嗦程度的 system prompt，更全面的 eval 显示它造成了「a 3% drop for both Opus 4.6 and 4.7」（4 月 20 日回退）。API 并未受影响，三个问题都在 4 月 20 日解决，公司也为所有订阅用户重置了用量额度。文章还提到，拿有问题的 PR 回测 Code Review 工具时，「Opus 4.7 found the bug, while Opus 4.6 didn't」。（[Anthropic Engineering](https://www.anthropic.com/engineering/april-23-postmortem)）

**5. New product surfaces and prompts keep arriving.** OpenAI's Thibault Sottiaux says "Your ChatGPT subscription is now also a Devin subscription" and that "Dots got a pretty big upgrade." OpenAI's Nan Yu celebrates a newer habit: "First we wrote code by hand, then we tab-completed the code. Then we evolved to prompting agents…and now we tab-complete that too." FirstMark Capital VC Matt Turck calls a demo where "One prompt to build a professional-level video for your company or product, in your style" the "quite literally the vision that Synthesia has been pursuing since the early days," now "available to everyone today." ([Thibault Sottiaux](https://x.com/thsottiaux/status/2108777962053292398), [Thibault Sottiaux](https://x.com/thsottiaux/status/2108773703064657936), [Nan Yu](https://x.com/thenanyu/status/2108671762984731037), [Matt Turck](https://x.com/mattturck/status/2108561284635480443))

**5. 新的产品面和新的交互方式不断涌现。** OpenAI 的 Thibault Sottiaux 说「Your ChatGPT subscription is now also a Devin subscription」，而且「Dots got a pretty big upgrade」。OpenAI 的 Nan Yu 则庆祝一个新习惯：「First we wrote code by hand, then we tab-completed the code. Then we evolved to prompting agents…and now we tab-complete that too」。FirstMark Capital 的 VC Matt Turck 把一个演示称为「quite literally the vision that Synthesia has been pursuing since the early days」，因为它可以「One prompt to build a professional-level video for your company or product, in your style」，如今「available to everyone today」。（[Thibault Sottiaux](https://x.com/thsottiaux/status/2108777962053292398)、[Thibault Sottiaux](https://x.com/thsottiaux/status/2108773703064657936)、[Nan Yu](https://x.com/thenanyu/status/2108671762984731037)、[Matt Turck](https://x.com/mattturck/status/2108561284635480443)）

**6. Craft, careers, and community notes.** Peter Yang, who writes practical AI tutorials, asks, "let's stop building more personal assistants to manage our emails and more AI startups to manage and cure diseases," and shares a Grok Bot tip: name the bot's email after the chief-of-staff role you want, not yourself. Replit CEO Amjad Masad asks why "some communities are excited by AI's impact on their field. Others are petrified." FPV Ventures partner Nikunj Kothari tells founders to have marketing exclude VCs, since he gets "3 DMs a day" about paid partnerships, which "shows really poor judgement." Swyx relaunched his book Coding Career for free (or on Amazon) and pitches AI Engineer NYC, while Every CEO Dan Shipper points to "Working With Agents in Slack." ([Peter Yang](https://x.com/petergyang/status/2108679515681722787), [Peter Yang](https://x.com/petergyang/status/2108624122339287335), [Amjad Masad](https://x.com/amasad/status/2108597112707686552), [Nikunj Kothari](https://x.com/nikunj/status/2108616889605951834), [Swyx](https://x.com/swyx/status/2108563331376124389), [Swyx](https://x.com/swyx/status/2108780918060036335), [Dan Shipper](https://x.com/danshipper/status/2108588611000275009))

**6. 关于手艺、职业与社区的几条观察。** 写实用 AI 教程的 Peter Yang 提出一个直白的主张：「let's stop building more personal assistants to manage our emails and more AI startups to manage and cure diseases」，并分享了一个 Grok Bot 的小技巧：不要让它的邮箱用你自己的名字，而是用你希望这个 chief of staff 被叫的名字。Replit CEO Amjad Masad 发问：「some communities are excited by AI's impact on their field. Others are petrified.」FPV Ventures 合伙人 Nikunj Kothari 建议创始人的市场团队把 VC 排除在推广之外，因为他每天收到「3 DMs a day」付费合作的私信，而这「shows really poor judgement」。Swyx 免费重新发布了他的书 Coding Career（也可在 Amazon 购买），并为 AI Engineer NYC 做宣传；Every CEO Dan Shipper 则分享了「Working With Agents in Slack」。（[Peter Yang](https://x.com/petergyang/status/2108679515681722787)、[Peter Yang](https://x.com/petergyang/status/2108624122339287335)、[Amjad Masad](https://x.com/amasad/status/2108597112707686552)、[Nikunj Kothari](https://x.com/nikunj/status/2108616889605951834)、[Swyx](https://x.com/swyx/status/2108563331376124389)、[Swyx](https://x.com/swyx/status/2108780918060036335)、[Dan Shipper](https://x.com/danshipper/status/2108588611000275009)）

## X / Twitter

### Aaron Levie

Aaron Levie (levie on X), CEO of Box, argues that today's chat-style use of AI will look primitive fast: "Agents spawning other agents, agents operating in the background on every task, and agent swarms will consume 1,000X more tokens than people prompting agents 1 at a time." He says the chat system that "can only work for you at the pace that you can prompt it will seem like a relic within a year or two," because "the vast, vast majority of tokens will be consumed by agents that are just doing continuous work for us in the background and in our workflows." He concludes that is why agent adoption is still early and why far more compute and infrastructure buildout will be needed.

Box CEO Aaron Levie（X 上为 levie）认为，今天这种对话式的 AI 用法很快会显得原始：「Agents spawning other agents, agents operating in the background on every task, and agent swarms will consume 1,000X more tokens than people prompting agents 1 at a time」。他说这种「can only work for you at the pace that you can prompt it」的聊天系统，「will seem like a relic within a year or two」，因为「the vast, vast majority of tokens will be consumed by agents that are just doing continuous work for us in the background and in our workflows」。他的结论是，这正是 agent 采用仍处早期、也是为什么还需要远为庞大的算力和基础设施建设的原因。

- [Aaron Levie: agents will consume 1,000X more tokens](https://x.com/levie/status/2108750943680630893)

### Amjad Masad

Amjad Masad (amasad on X), CEO of Replit, raises a question about how fields absorb AI: "Some communities are excited by AI's impact on their field. Others are petrified. What's the deciding factor(s)?"

Replit CEO Amjad Masad（X 上为 amasad）就不同领域如何消化 AI 提出了一个问题：「Some communities are excited by AI's impact on their field. Others are petrified. What's the deciding factor(s)?」

- [Amjad Masad: what decides enthusiasm versus fear](https://x.com/amasad/status/2108597112707686552)

### Dan Shipper

Dan Shipper (danshipper on X), CEO of Every, shares "Working With Agents in Slack."

Every CEO Dan Shipper（X 上为 danshipper）分享了「Working With Agents in Slack」。

- [Dan Shipper: Working With Agents in Slack](https://x.com/danshipper/status/2108588611000275009)

### Guillermo Rauch

Guillermo Rauch, CEO of Vercel, posts machine and agent traffic stats: "Across the entire Vercel network, 58.18% traffic is bot-originated (last 30d). This was 32% in Jan 2024," "60%+ of deployments on Vercel are now agentic, up from ~3% in Jan 2026," and "Up to 83% of pageviews are now coming from agents to Vercel's own documentation sites," a share that "reliably increases the more we optimize content for them." He says he expects "direct human internet traffic to basically become a rounding error in coming years. The web will thrive, but it will be built for and by agents." In a second post he points to a "new kind of economy" being born, with "Agents purchasing infrastructure products and services," and says Vercel is extending this to domains so "Agents can now go full stack, from idea to online business, with a banger domain name."

Vercel CEO Guillermo Rauch 贴出了机器和 agent 的流量数据：「Across the entire Vercel network, 58.18% traffic is bot-originated (last 30d). This was 32% in Jan 2024」、「60%+ of deployments on Vercel are now agentic, up from ~3% in Jan 2026」，以及「Up to 83% of pageviews are now coming from agents to Vercel's own documentation sites」，而且这个比例「reliably increases the more we optimize content for them」。他说他预计「direct human internet traffic to basically become a rounding error in coming years. The web will thrive, but it will be built for and by agents」。在另一条帖子里，他指出一种「new kind of economy」正在诞生，「Agents purchasing infrastructure products and services」，并说 Vercel 正在把这延伸到域名上，于是「Agents can now go full stack, from idea to online business, with a banger domain name」。

- [Guillermo Rauch: Vercel's agent traffic stats](https://x.com/rauchg/status/2108733051283050964)
- [Guillermo Rauch: agents are buying domains](https://x.com/rauchg/status/2108669027363295323)

### Madhu Guru

Madhu Guru, Senior Director of AI at Meta, pushes back on the idea that open-weight models are the reason intelligence keeps getting cheaper: "Open-weight models did not start the drop in price per unit of intelligence. They are a tailwind on a trend that was already underway." He credits three drivers: "Model builders distilling their best models into smaller ones, with cheaper inference," "Infra efficiency," and "Competition between model providers," summing it up as "Version x of the mid-size model = intelligence of version x-1 of the large model. Same intelligence for less $."

Meta AI 高级总监 Madhu Guru 反驳了『开源权重模型让智能持续变便宜』的说法：「Open-weight models did not start the drop in price per unit of intelligence. They are a tailwind on a trend that was already underway」。他给出三个驱动因素：「Model builders distilling their best models into smaller ones, with cheaper inference」、「Infra efficiency」和「Competition between model providers」，并总结为「Version x of the mid-size model = intelligence of version x-1 of the large model. Same intelligence for less $」。

- [Madhu Guru: open weights are a tailwind, not the cause](https://x.com/realmadhuguru/status/2108618266776387886)

### Matt Turck

Matt Turck, a VC at FirstMark Capital and host of the MAD Podcast, calls a demo where "One prompt to build a professional-level video for your company or product, in your style" a "🤯" moment, and says it is "quite literally the vision that Synthesia has been pursuing since the early days. Happening slowly, then all at once. Available to everyone today."

FirstMark Capital 的 VC、MAD Podcast 主持人 Matt Turck，把一个可以「One prompt to build a professional-level video for your company or product, in your style」的演示称为「🤯」时刻，并说这「quite literally the vision that Synthesia has been pursuing since the early days. Happening slowly, then all at once. Available to everyone today」。

- [Matt Turck: one prompt to build a professional-level video](https://x.com/mattturck/status/2108561284635480443)

### Nan Yu

Nan Yu, who works on Codex product at OpenAI, says he cannot "stress how much I've loved using this feature," framing the shift as: "First we wrote code by hand, then we tab-completed the code. Then we evolved to prompting agents…and now we tab-complete that too."

在 OpenAI 负责 Codex 产品的 Nan Yu 说他无法「stress how much I've loved using this feature」，并把这一变化概括为：「First we wrote code by hand, then we tab-completed the code. Then we evolved to prompting agents…and now we tab-complete that too」。

- [Nan Yu: now we tab-complete agent prompts](https://x.com/thenanyu/status/2108671762984731037)

### Nikunj Kothari

Nikunj Kothari, a partner at FPV Ventures, has a message for founders: "please ask your marketing team to exclude VCs if you decide to promote your product on X." He says he gets "3 DMs a day asking to 'collab' on this 'insane opportunity' which is *cough cough* a paid partnership," and warns it "Shows really poor judgement and word spreads around that you are trying to buy eyeballs to cue a big raise."

FPV Ventures 合伙人 Nikunj Kothari 给创始人带了一句话：「please ask your marketing team to exclude VCs if you decide to promote your product on X」。他说自己每天收到「3 DMs a day asking to 'collab' on this 'insane opportunity' which is *cough cough* a paid partnership」，并警告这「Shows really poor judgement and word spreads around that you are trying to buy eyeballs to cue a big raise」。

- [Nikunj Kothari: founders, exclude VCs from your X promos](https://x.com/nikunj/status/2108616889605951834)

### Peter Yang

Peter Yang, who writes practical AI tutorials and interviews, offers a blunt prioritization take: "How about let's stop building more personal assistants to manage our emails and more AI startups to manage and cure diseases." He also shares a practical Grok Bot tip: if you want the bot to act as your chief of staff, do not register its email under your own name, because "it's weird to copy in yourself"; instead pick the name you want your chief of staff to be called.

写实用 AI 教程与访谈的 Peter Yang 给出一个直白的优先级判断：「How about let's stop building more personal assistants to manage our emails and more AI startups to manage and cure diseases」。他还分享了一个实用的 Grok Bot 技巧：如果你想让这个 bot 充当你的 chief of staff，不要用你自己的名字去注册它的邮箱，因为「it's weird to copy in yourself」；应该用你希望这位 chief of staff 被叫的名字。

- [Peter Yang: stop building email assistants](https://x.com/petergyang/status/2108679515681722787)
- [Peter Yang: a Grok Bot chief-of-staff tip](https://x.com/petergyang/status/2108624122339287335)

### Swyx

Swyx, a builder affiliated with smol.ai, dx.tips, Cognition, and the AI Engineer conference, relaunched his book Coding Career, which readers can now get "free or on amazon," framing the advice as "most of you are unfortunately not qualified but there is somewhat a path." He also pitches AI Engineer NYC, which he calls "the biggest ever technical conf in New York and our first with a finance mainstage."

Swyx 是一位与 smol.ai、dx.tips、Cognition 以及 AI Engineer 大会相关的构建者，他重新发布了自己的书 Coding Career，现在读者可以「free or on amazon」地获取，并把其中的建议概括为「most of you are unfortunately not qualified but there is somewhat a path」。他同时为 AI Engineer NYC 做宣传，称它是「the biggest ever technical conf in New York and our first with a finance mainstage」。

- [Swyx: Coding Career relaunched for free](https://x.com/swyx/status/2108563331376124389)
- [Swyx: AI Engineer NYC, last call](https://x.com/swyx/status/2108780918060036335)

### Thariq

Thariq, who works on Claude Code at Anthropic, describes porting a side project with a single prompt: before joining Anthropic, "I spent about 2 weeks hacking on this as a side project with Opus 4," which "needed a constantly running process & didnt work that well. but one prompt to Opus 5.5 ported it to Claude Managed Agents & made it way more reliable." In a later post he notes he "just merged in some PRs by others too" on a project he now keeps on his new tab page.

在 Anthropic 负责 Claude Code 的 Thariq 讲了他如何用一条 prompt 迁移一个副业项目：在加入 Anthropic 之前，「I spent about 2 weeks hacking on this as a side project with Opus 4」，但那时它「needed a constantly running process & didnt work that well. but one prompt to Opus 5.5 ported it to Claude Managed Agents & made it way more reliable」。在后一条帖子里，他提到自己「just merged in some PRs by others too」，并把这个项目放在浏览器新标签页上。

- [Thariq: one prompt ported a side project to Managed Agents](https://x.com/trq212/status/2108689101503566319)

### Thibault Sottiaux

Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, says "Your ChatGPT subscription is now also a Devin subscription," and that "Dots got a pretty big upgrade."

在 OpenAI 负责 Codex 与 ChatGPT 的 Thibault Sottiaux 说「Your ChatGPT subscription is now also a Devin subscription」，而且「Dots got a pretty big upgrade」。

- [Thibault Sottiaux: your ChatGPT subscription is now also a Devin subscription](https://x.com/thsottiaux/status/2108777962053292398)
- [Thibault Sottiaux: Dots got a pretty big upgrade](https://x.com/thsottiaux/status/2108773703064657936)

## Podcast

### No Priors: Beam: The Great American Open Model with ReflectionAI Co-Founder and CEO Misha Laskin

The Takeaway: Western open-weight models are now viable at the frontier, and open models look set to absorb most token demand, which makes the compute and infrastructure around them, not just the weights, the real battleground.

核心要点：西方的开源权重模型如今已经能在前沿水平上站住脚，而开源模型看起来将要吃下大部分 token 需求，这让它们周围的算力和基础设施（而不只是权重本身）成为真正的战场。

Reflection AI co-founder and CEO Misha Laskin, a former Google DeepMind researcher with a PhD in physics, spent the last year assembling a frontier lab from scratch, growing from about 30 people to roughly 300, in pursuit of what he calls the mission of building "frontier open intelligence and make it widely accessible." The first fruit is Beam, which he describes as a 500-billion-parameter model with 23 billion active parameters, trained on 6,000 GB300s in a few weeks and now reproducible in about 12 days, with reinforcement learning run on more than 10,000 GB300s for four weeks.

Reflection AI 联合创始人兼 CEO Misha Laskin 曾是 Google DeepMind 的研究员，拥有物理学博士学位。过去一年，他从零搭建起一个前沿实验室，团队从约 30 人扩张到大约 300 人，追逐的目标用他的话说，是构建「frontier open intelligence and make it widely accessible」。第一个成果是 Beam：他描述为一个总参数量 5000 亿、激活参数 230 亿的模型，用 6000 张 GB300 训练了几周，如今大约 12 天就能复现，强化学习则用超过 10000 张 GB300 跑了四周。

The economics are the crux. Laskin says catching up to the frontier is far more capital-efficient than chasing it, and that the cost of a frontier run has moved from hundreds of millions of dollars, to single-digit billions, heading toward tens of billions, with a roughly 4x compute multiplier per model generation. But he also argues we are nearing an asymptote on raw CapEx, which is why efficiency gains matter: reinforcement learning systems, he says, "never stopped learning," and better models make the training loops themselves more efficient.

经济账是关键。Laskin 说，追赶前沿比死磕前沿在资本效率上高得多，而一次前沿训练的成本已经从数亿美元，涨到个位数十亿美元，正在奔向数百亿美元，每代模型大约有 4 倍的算力倍增。但他也认为，单纯堆 CapEx 已经接近渐近线，这正是效率提升之所以重要的原因：强化学习系统「never stopped learning」，而更强的模型本身又让训练循环变得更高效。

He is contrarian about what actually drives cheaper intelligence. Open weights did not start the price collapse, he argues; they ride a trend already set by distillation, infrastructure efficiency, and provider competition. Still, he expects the mix to flip: six months ago gateway traffic was roughly 70/30 closed to open, and now it is about 70/30 the other way, similar to how servers run overwhelmingly on open-source Linux even as closed giants stay valuable. His most quotable line is about geopolitics: "open models are Trojan horses for the infrastructure that they bring with them."

他对『究竟是什么让智能变便宜』持反直觉的看法。他认为不是开源权重开启了这轮降价，它们只是搭上了由蒸馏、基础设施效率和厂商竞争铺好的趋势。尽管如此，他预计结构会翻转：半年前网关流量大约是闭源 70、开源 30，如今大约是开源 70、闭源 30，类似服务器绝大多数跑在开源 Linux 上、而闭源的巨头依然极有价值。他最常被引用的一句话关于地缘政治：「open models are Trojan horses for the infrastructure that they bring with them」。

On safety, Laskin is an open-weights optimist: "Linus' law, with enough eyeballs, all bugs become shallow," he says. "I have the belief that with enough eyeballs, most security and safety vulnerabilities become shallow as well." He argues you cannot separate cyber offense from cyber defense, and that alignment work has proven to be "deeply boring" whack-a-mole rather than a magic equation. He is most excited about science, describing how a language model went from chat-level, to undergraduate-level, to solving his own PhD thesis, and now surfaces new information he had not considered.

在安全问题上，Laskin 是开源权重的乐观派：他说「Linus' law, with enough eyeballs, all bugs become shallow」，「I have the belief that with enough eyeballs, most security and safety vulnerabilities become shallow as well」。他认为网络攻击能力和防御能力无法分开，而对齐工作迄今为止是「deeply boring」的打地鼠，而非什么神奇的公式。他最兴奋的是科学，讲到语言模型如何从只能聊天，到本科水平，再到解出他自己的博士论文，如今还能给出他此前没想到的新信息。

Source: https://www.youtube.com/@NoPriorsPodcast

## Blog

### Anthropic Engineering: How we contain Claude across products

Anthropic Engineering's thesis is that once agents can do work a person or a team once did, the risk-reward math "tips heavily toward adoption," so the engineering job becomes capping the blast radius. It splits defense into supervising behavior with a human in the loop and containment that enforces access boundaries with sandboxes, VMs, and egress controls. Supervision is fallible: telemetry showed users approved "roughly 93% of permission prompts," and attention drops the more prompts appear. Claude Code's model-based auto mode catches "roughly 83% of overeager behaviors before they execute," but any probabilistic defense has a non-zero miss rate.

Anthropic Engineering 的核心论点是：当 agent 能够接手过去由一个人甚至一个团队完成的工作时，风险收益的天平会「tips heavily toward adoption」，于是工程上的任务就变成在出事时封住爆炸半径。文章把防御分成两类：用人在回路监督行为，以及用沙箱、虚拟机和出网控制做 containment 来划定访问边界。监督并不可靠：遥测显示用户会批准「roughly 93% of permission prompts」，而且弹窗越多，注意力越差。Claude Code 基于模型的 auto mode 能拦下「roughly 83% of overeager behaviors before they execute」，但任何概率性的防御都存在非零漏检率。

The post is candid about failures. In a controlled red-team exercise, a phished employee pasted a prompt that asked Claude to read ~/.aws/credentials, encode them, and POST them out; across 25 retries, "Claude completed the exfiltration 24 times." Because the instruction came through the user, no model-layer classifier had anything anomalous to catch, so only environment controls such as egress blocks and filesystem boundaries held. Anthropic describes three isolation patterns: the ephemeral gVisor container behind claude.ai, the human-in-the-loop sandbox of Claude Code, and the local VM behind Claude Cowork, where credentials stay in the host keychain and never enter the guest. Its closing principles: design containment at the environment layer first, match isolation strength to the user's capacity for oversight, and be wary of custom components, since "the deterministic boundary is what gets hit when everything probabilistic misses."

这篇文章对失败也很坦诚。在一次受控的红队演练中，一名被钓鱼的员工粘贴了一条 prompt，要求 Claude 读取 ~/.aws/credentials、编码并 POST 出去；在 25 次重试中，「Claude completed the exfiltration 24 times」。由于指令是通过用户传来的，模型层的分类器没有可抓的异常，真正守住的只有环境控制，比如出网阻断和文件系统边界。Anthropic 介绍了三种隔离模式：claude.ai 背后的临时 gVisor 容器、Claude Code 的人在回路沙箱，以及 Claude Cowork 背后的本地虚拟机，在那里凭证始终留在宿主 keychain 中，从不进入 guest。它总结的原则是：先在环境层设计 containment，把隔离强度匹配到用户的监督能力，并警惕自研组件，因为「the deterministic boundary is what gets hit when everything probabilistic misses」。

- [Anthropic Engineering: How we contain Claude across products](https://www.anthropic.com/engineering/how-we-contain-claude)

### Anthropic Engineering: An update on recent Claude Code quality reports

Anthropic traced a month of reports that Claude's responses had worsened for some users to three separate changes affecting Claude Code, the Claude Agent SDK, and Claude Cowork; the API was not impacted, and all three were resolved as of April 20 (v2.1.116). First, a March 4 change to Claude Code's default reasoning effort, from high to medium, aimed at cutting the latency that made the UI appear frozen, but it was "the wrong tradeoff" and was reverted on April 7 after users said they preferred higher intelligence by default. Second, a March 26 caching optimization meant to clear stale reasoning once instead cleared it "on every turn for the rest of the session," making Claude forgetful and repetitive and draining usage limits through cache misses; it was fixed on April 10. Third, an April 16 system prompt instruction to keep responses short hurt coding quality, and a broader eval showed "a 3% drop for both Opus 4.6 and 4.7"; it was reverted on April 20.

Anthropic 把一个月来『Claude 对部分用户变差』的反馈，追溯到了三处分别影响 Claude Code、Claude Agent SDK 和 Claude Cowork 的改动；API 未受影响，三个问题都在 4 月 20 日（v2.1.116）解决。第一，3 月 4 日把 Claude Code 的默认推理强度从 high 调到 medium，本意是减少让界面看起来卡死的延迟，但这是「the wrong tradeoff」，在用户表示更希望默认更高智能后于 4 月 7 日回退。第二，3 月 26 日一个本想只清一次陈旧思考的缓存优化，反而「on every turn for the rest of the session」都清空，让 Claude 显得健忘、重复，还因缓存未命中而更快耗尽用量额度；4 月 10 日修复。第三，4 月 16 日一条要求缩短回复的 system prompt 伤害了编码质量，更全面的 eval 显示「a 3% drop for both Opus 4.6 and 4.7」，4 月 20 日回退。

Anthropic says it is resetting usage limits for all subscribers as of April 23, will broaden internal use of the exact public build, add per-model evals, soak periods, and gradual rollouts for prompt changes, and gate model-specific changes to the model they target. It notes that when it back-tested its Code Review tool on the offending pull requests, "Opus 4.7 found the bug, while Opus 4.6 didn't."

Anthropic 说，自 4 月 23 日起为所有订阅用户重置用量额度，将让更多内部员工使用与用户完全相同的公开构建，为 prompt 改动增加逐模型 eval、观察期和灰度发布，并把针对特定模型的改动限定在该模型上。它还提到，拿有问题的 PR 回测 Code Review 工具时，「Opus 4.7 found the bug, while Opus 4.6 didn't」。

- [Anthropic Engineering: An update on recent Claude Code quality reports](https://www.anthropic.com/engineering/april-23-postmortem)

### Anthropic Engineering: Scaling Managed Agents: Decoupling the brain from the hands

Anthropic Engineering describes Managed Agents, a hosted service that runs long-horizon agents behind interfaces designed to outlast any particular harness. The lesson is borrowed from operating systems: virtualize the unstable parts. Anthropic splits an agent into a session (an append-only log of everything that happened), a harness (the loop that calls Claude and routes its tool calls), and a sandbox. Its first version bundled all three into one container, which made the server a "pet": lose the container and you lost the session, and debugging meant opening a shell next to user data. Decoupling the "brain" from the "hands" turned containers and harnesses into disposable "cattle": a failed sandbox returns as a tool-call error, and a crashed harness reboots from the session log with wake(sessionId) and resumes from the last event.

Anthropic Engineering 介绍了 Managed Agents，这是一项托管服务，用一组意在超越任何具体 harness 的接口来运行长时程 agent。它借鉴了操作系统的经验：把不稳定的部分虚拟化。Anthropic 把 agent 拆成三块：session（记录一切发生的追加式日志）、harness（调用 Claude 并把工具调用路由出去的循环）和 sandbox。第一版把三者塞进同一个容器，结果服务器变成了一只「pet」：丢了容器就丢了 session，调试还得在装着用户数据的机器上开 shell。把「大脑」和「手」解耦之后，容器和 harness 都变成了用完即弃的「cattle」：沙箱失败会变成一个工具调用错误返回，harness 崩溃则用 wake(sessionId) 从 session 日志重启、从最后一个事件续上。

The payoff shows up in latency and security. Because containers are provisioned only when needed, p50 time-to-first-token dropped "roughly 60%" and p95 fell "over 90%." Keeping credentials out of the sandbox where generated code runs closes a prompt-injection path, and because no hand is coupled to any brain, brains can pass hands to one another. The session log sits outside Claude's context window, so the brain can rewind, reread, or slice context on demand. The post frames the whole system as a "meta-harness," opinionated about the interfaces around Claude, state and computation, but agnostic about how many brains and hands it will need.

收益体现在延迟和安全上。因为容器只在需要时才创建，p50 的首 token 时间下降「roughly 60%」，p95 下降「over 90%」。让凭证不进入运行生成代码的沙箱，堵住了一条 prompt 注入的路径；由于任何一只手都不与某个大脑绑定，大脑之间还可以互相传递手。session 日志位于 Claude 上下文窗口之外，所以大脑可以按需回卷、重读或切取上下文。文章把整套系统称为「meta-harness」：对 Claude 周围的接口（状态与计算）有明确主张，但对未来需要多少大脑和多少手并不设限。

- [Anthropic Engineering: Scaling Managed Agents: Decoupling the brain from the hands](https://www.anthropic.com/engineering/managed-agents)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
