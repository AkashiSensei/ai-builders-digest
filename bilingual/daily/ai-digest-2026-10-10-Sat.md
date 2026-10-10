[English](../../en/daily/ai-digest-2026-10-10-Sat.md) | [中文](../../zh/daily/ai-digest-2026-10-10-Sat.md) | [Bilingual](./ai-digest-2026-10-10-Sat.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. The agent-driven web is arriving, and agents are becoming its customers.** Vercel CEO Guillermo Rauch posts machine and agent traffic stats from the Vercel network: "Across the entire Vercel network, 58.18% traffic is bot-originated (last 30d). This was 32% in Jan 2024," "60%+ of deployments on Vercel are now agentic, up from ~3% in Jan 2026," and "Up to 83% of pageviews are now coming from agents to Vercel's own documentation sites," a share that "reliably increases the more we optimize content for them." He expects "direct human internet traffic to basically become a rounding error in coming years. The web will thrive, but it will be built for and by agents." In a second post he describes a "new kind of economy" in which "Agents purchasing infrastructure products and services" is already happening through Vercel's CLI and marketplace, now extended to domains so "Agents can now go full stack, from idea to online business, with a banger domain name." Box CEO Aaron Levie adds the compute corollary: "Agents spawning other agents, agents operating in the background on every task, and agent swarms will consume 1,000X more tokens than people prompting agents 1 at a time," which will make chat-style AI "seem like a relic within a year or two." ([Guillermo Rauch](https://x.com/rauchg/status/2108733051283050964), [Guillermo Rauch](https://x.com/rauchg/status/2108669027363295323), [Aaron Levie](https://x.com/levie/status/2108750943680630893))

**1. agent 驱动的互联网正在到来，而 agent 正在成为它新的客户。** Vercel CEO Guillermo Rauch 贴出了 Vercel 网络的机器与 agent 流量数据：「Across the entire Vercel network, 58.18% traffic is bot-originated (last 30d). This was 32% in Jan 2024」、「60%+ of deployments on Vercel are now agentic, up from ~3% in Jan 2026」，以及「Up to 83% of pageviews are now coming from agents to Vercel's own documentation sites」，而且这个比例「reliably increases the more we optimize content for them」。他预计「direct human internet traffic to basically become a rounding error in coming years. The web will thrive, but it will be built for and by agents」。在另一条帖子里，他描述了一种正在诞生的「new kind of economy」：「Agents purchasing infrastructure products and services」已经通过 Vercel 的 CLI 和市场发生，如今又延伸到域名，于是「Agents can now go full stack, from idea to online business, with a banger domain name」。Box CEO Aaron Levie 补上了算力这一层推论：「Agents spawning other agents, agents operating in the background on every task, and agent swarms will consume 1,000X more tokens than people prompting agents 1 at a time」，这会让对话式的 AI 在「a year or two」内「seem like a relic」。（[Guillermo Rauch](https://x.com/rauchg/status/2108733051283050964)、[Guillermo Rauch](https://x.com/rauchg/status/2108669027363295323)、[Aaron Levie](https://x.com/levie/status/2108750943680630893)）

**2. Cheaper intelligence is a trend, not an open-weight miracle, and open weights are winning adoption.** Meta Senior Director of AI Madhu Guru argues open-weight models "did not start the drop in price per unit of intelligence" but are "a tailwind on a trend that was already underway," driven by distillation, infrastructure efficiency, and provider competition: "Version x of the mid-size model = intelligence of version x-1 of the large model. Same intelligence for less $." On the No Priors Podcast, Reflection AI co-founder and CEO Misha Laskin, a former Google DeepMind researcher, says the mix of token demand on gateways has flipped from "seventy thirty closed open to seventy thirty open close now," and describes Beam as "a 500,000,000,000 parameter model total 23 b active," trained on 6,000 GB300s and now reproducible in "about twelve days, maybe less." Anthropic's Thariq offers the hands-on version: one prompt to Opus 5.5 ported a two-week side project onto Claude Managed Agents and "made it way more reliable." ([Madhu Guru](https://x.com/realmadhuguru/status/2108618266776387886), [No Priors Podcast](https://www.youtube.com/@NoPriorsPodcast), [Thariq](https://x.com/trq212/status/2108689101503566319))

**2. 智能变便宜是一股趋势，不是什么开源权重奇迹；而开源权重正在赢得采用。** Meta AI 高级总监 Madhu Guru 反驳了「开源权重模型引发了单价智能下滑」的说法：它们「did not start the drop in price per unit of intelligence」，而是「a tailwind on a trend that was already underway」，驱动力来自蒸馏、基础设施效率以及模型厂商之间的竞争，他总结为「Version x of the mid-size model = intelligence of version x-1 of the large model. Same intelligence for less $」。在 No Priors Podcast 上，Reflection AI 联合创始人兼 CEO Misha Laskin（曾任 Google DeepMind 研究员）说，各大网关上的 token 需求结构已经从「seventy thirty closed open to seventy thirty open close now」，并把 Beam 描述为一个「a 500,000,000,000 parameter model total 23 b active」，用 6,000 块 GB300 训练，如今「about twelve days, maybe less」就能复现。Anthropic 的 Thariq 则给出了一线的版本：一条 prompt 就把一个花了两周做的副业项目迁移到了 Claude Managed Agents，并「made it way more reliable」。（[Madhu Guru](https://x.com/realmadhuguru/status/2108618266776387886)、[No Priors Podcast](https://www.youtube.com/@NoPriorsPodcast)、[Thariq](https://x.com/trq212/status/2108689101503566319)）

**3. Anthropic's security blueprint: containment first, supervision second.** In "How we contain Claude across products," Anthropic Engineering says telemetry showed users approved "roughly 93% of permission prompts," making human-in-the-loop oversight fallible, so it leans on environment-layer containment such as sandboxes, VMs, and egress controls. It says Claude Opus 4.7 holds prompt-injection attack success "to roughly 0.1% on single attempts, and around 5–6% after 100 adaptive attempts," while Claude Code auto mode "catches roughly 83% of overeager behaviors before they execute" but "will never be 100% effective." The companion post "Scaling Managed Agents: Decoupling the brain from the hands" virtualizes an agent into a session, a harness, and a sandbox, and reports that decoupling the "brain" from the "hands" cut p50 time-to-first-token "roughly 60%" and p95 "over 90%." ([Anthropic Engineering](https://www.anthropic.com/engineering/how-we-contain-claude), [Anthropic Engineering](https://www.anthropic.com/engineering/managed-agents))

**3. Anthropic 的安全蓝图：先做隔离，再谈监督。** 在《How we contain Claude across products》中，Anthropic Engineering 说遥测显示用户批准了「roughly 93% of permission prompts」，说明 human-in-the-loop 的监督并不可靠，因此更倚重环境层的隔离手段，比如 sandbox、虚拟机和 egress 控制。文章称 Claude Opus 4.7 在 prompt injection 攻击下，单次尝试的成功率被压到「to roughly 0.1% on single attempts, and around 5–6% after 100 adaptive attempts」，而 Claude Code 的 auto mode「catches roughly 83% of overeager behaviors before they execute」，但「will never be 100% effective」。姊妹篇《Scaling Managed Agents: Decoupling the brain from the hands》把 agent 虚拟化为 session、harness 和 sandbox 三部分，并报告把「brain」与「hands」解耦后，p50 首 token 时间下降了「roughly 60%」，p95 下降了「over 90%」。（[Anthropic Engineering](https://www.anthropic.com/engineering/how-we-contain-claude)、[Anthropic Engineering](https://www.anthropic.com/engineering/managed-agents)）

**4. Anthropic owns up to a month of Claude Code regressions.** In "An update on recent Claude Code quality reports," Anthropic Engineering traces user complaints to three separate changes: a default reasoning-effort switch from high to medium (reverted April 7), a caching bug that cleared reasoning on every turn in stale sessions and drained usage limits (fixed April 10), and a verbosity system prompt that a broader eval showed caused "a 3% drop for both Opus 4.6 and 4.7" (reverted April 20). The API was not affected and all three issues were resolved as of April 20 (v2.1.116). It adds that when it back-tested its Code Review tool on the offending pull requests, "Opus 4.7 found the bug, while Opus 4.6 didn't," and that it is resetting usage limits for all subscribers. ([Anthropic Engineering](https://www.anthropic.com/engineering/april-23-postmortem))

**4. Anthropic 为 Claude Code 一个月的退化公开复盘。** 在《An update on recent Claude Code quality reports》中，Anthropic Engineering 把用户的抱怨追溯到三处改动：默认推理档位从 high 调到 medium（4 月 7 日回退）、一个缓存 bug 让陈旧会话在之后每一轮都清空推理并加速消耗用量额度（4 月 10 日修复），以及一条降低啰嗦程度的 system prompt，更全面的 eval 显示它造成了「a 3% drop for both Opus 4.6 and 4.7」（4 月 20 日回退）。API 并未受影响，三个问题都在 4 月 20 日（v2.1.116）解决。文章还说，公司将为所有订阅用户重置用量额度；而拿有问题的 PR 回测 Code Review 工具时，「Opus 4.7 found the bug, while Opus 4.6 didn't」。（[Anthropic Engineering](https://www.anthropic.com/engineering/april-23-postmortem)）

**5. New product surfaces and interaction habits keep arriving.** OpenAI's Thibault Sottiaux says "Your ChatGPT subscription is now also a Devin subscription" and that "Dots got a pretty big upgrade." OpenAI's Nan Yu celebrates a new muscle memory: "First we wrote code by hand, then we tab-completed the code. Then we evolved to prompting agents…and now we tab-complete that too." FirstMark Capital VC Matt Turck calls a demo where "One prompt to build a professional-level video for your company or product, in your style" "quite literally the vision that Synthesia has been pursuing since the early days," now "available to everyone today." ([Thibault Sottiaux](https://x.com/thsottiaux/status/2108777962053292398), [Thibault Sottiaux](https://x.com/thsottiaux/status/2108773703064657936), [Nan Yu](https://x.com/thenanyu/status/2108671762984731037), [Matt Turck](https://x.com/mattturck/status/2108561284635480443))

**5. 新的产品面和新的交互习惯不断涌现。** OpenAI 的 Thibault Sottiaux 说「Your ChatGPT subscription is now also a Devin subscription」，而且「Dots got a pretty big upgrade」。OpenAI 的 Nan Yu 则庆祝一个新习惯：「First we wrote code by hand, then we tab-completed the code. Then we evolved to prompting agents…and now we tab-complete that too」。FirstMark Capital 的 VC Matt Turck 把一个演示称为「quite literally the vision that Synthesia has been pursuing since the early days」，因为它可以「One prompt to build a professional-level video for your company or product, in your style」，如今「available to everyone today」。（[Thibault Sottiaux](https://x.com/thsottiaux/status/2108777962053292398)、[Thibault Sottiaux](https://x.com/thsottiaux/status/2108773703064657936)、[Nan Yu](https://x.com/thenanyu/status/2108671762984731037)、[Matt Turck](https://x.com/mattturck/status/2108561284635480443)）

**6. Craft, careers, and community notes.** Peter Yang, who writes practical AI tutorials and interviews, makes a blunt prioritization case: "How about let's stop building more personal assistants to manage our emails and more AI startups to manage and cure diseases," and shares a Grok Bot tip: if the bot is your chief of staff, name its email after the role you want rather than yourself. Replit CEO Amjad Masad asks why "Some communities are excited by AI's impact on their field. Others are petrified." FPV Ventures partner Nikunj Kothari tells founders to have marketing exclude VCs, since he gets "3 DMs a day" about paid partnerships, which "Shows really poor judgement." Swyx relaunched his book Coding Career, now "free or on amazon," while Every CEO Dan Shipper points to "Working With Agents in Slack." ([Peter Yang](https://x.com/petergyang/status/2108679515681722787), [Peter Yang](https://x.com/petergyang/status/2108624122339287335), [Amjad Masad](https://x.com/amasad/status/2108597112707686552), [Nikunj Kothari](https://x.com/nikunj/status/2108616889605951834), [Swyx](https://x.com/swyx/status/2108563331376124389), [Dan Shipper](https://x.com/danshipper/status/2108588611000275009))

**6. 关于手艺、职业与社区的几条观察。** 写实用 AI 教程与访谈的 Peter Yang 提出一个直白的主张：「let's stop building more personal assistants to manage our emails and more AI startups to manage and cure diseases」，并分享了一个 Grok Bot 的小技巧：如果这个 bot 是你的 chief of staff，就让它的邮箱用你希望这个角色被叫的名字，而不是你自己的名字。Replit CEO Amjad Masad 发问：「Some communities are excited by AI's impact on their field. Others are petrified.」FPV Ventures 合伙人 Nikunj Kothari 建议创始人的市场团队把 VC 排除在推广之外，因为他每天收到「3 DMs a day」付费合作的私信，而这「Shows really poor judgement」。Swyx 重新发布了他的书 Coding Career，如今「free or on amazon」；Every CEO Dan Shipper 则分享了「Working With Agents in Slack」。（[Peter Yang](https://x.com/petergyang/status/2108679515681722787)、[Peter Yang](https://x.com/petergyang/status/2108624122339287335)、[Amjad Masad](https://x.com/amasad/status/2108597112707686552)、[Nikunj Kothari](https://x.com/nikunj/status/2108616889605951834)、[Swyx](https://x.com/swyx/status/2108563331376124389)、[Dan Shipper](https://x.com/danshipper/status/2108588611000275009)）

## X / Twitter

### Aaron Levie

Aaron Levie (levie on X), CEO of Box, argues that today's chat-style use of AI will look primitive fast: "Agents spawning other agents, agents operating in the background on every task, and agent swarms will consume 1,000X more tokens than people prompting agents 1 at a time." He says the system that "can only work for you at the pace that you can prompt it will seem like a relic within a year or two," because "the vast, vast majority of tokens will be consumed by agents that are just doing continuous work for us in the background and in our workflows." He concludes that is why agent adoption is still early and why much more compute and infrastructure build out will be needed.

Box CEO Aaron Levie（X 上为 levie）认为，今天这种对话式的 AI 用法很快会显得原始：「Agents spawning other agents, agents operating in the background on every task, and agent swarms will consume 1,000X more tokens than people prompting agents 1 at a time」。他说这种「can only work for you at the pace that you can prompt it」的系统，「will seem like a relic within a year or two」，因为「the vast, vast majority of tokens will be consumed by agents that are just doing continuous work for us in the background and in our workflows」。他的结论是，这正是 agent 采用仍处早期、也是为什么还需要远为庞大的算力和基础设施建设的原因。

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

Vercel CEO Guillermo Rauch 贴出了机器和 agent 的流量数据：「Across the entire Vercel network, 58.18% traffic is bot-originated (last 30d). This was 32% in Jan 2024」、「60%+ of deployments on Vercel are now agentic, up from ~3% in Jan 2026」，以及「Up to 83% of pageviews are now coming from agents to Vercel's own documentation sites」，而且这个比例「reliably increases the more we optimize content for them」。他预计「direct human internet traffic to basically become a rounding error in coming years. The web will thrive, but it will be built for and by agents」。在另一条帖子里，他指出一种「new kind of economy」正在诞生，「Agents purchasing infrastructure products and services」，并说 Vercel 正在把这延伸到域名上，于是「Agents can now go full stack, from idea to online business, with a banger domain name」。

- [Guillermo Rauch: Vercel's agent traffic stats](https://x.com/rauchg/status/2108733051283050964)
- [Guillermo Rauch: agents are buying domains](https://x.com/rauchg/status/2108669027363295323)

### Madhu Guru

Madhu Guru, Senior Director of AI at Meta, pushes back on the idea that open-weight models are the reason intelligence keeps getting cheaper: "Open-weight models did not start the drop in price per unit of intelligence. They are a tailwind on a trend that was already underway." He credits three drivers: "Model builders distilling their best models into smaller ones, with cheaper inference," "Infra efficiency," and "Competition between model providers," summing it up as "Version x of the mid-size model = intelligence of version x-1 of the large model. Same intelligence for less $."

Meta AI 高级总监 Madhu Guru 反驳了「开源权重模型让智能持续变便宜」的说法：「Open-weight models did not start the drop in price per unit of intelligence. They are a tailwind on a trend that was already underway」。他给出三个驱动因素：「Model builders distilling their best models into smaller ones, with cheaper inference」、「Infra efficiency」和「Competition between model providers」，并总结为「Version x of the mid-size model = intelligence of version x-1 of the large model. Same intelligence for less $」。

- [Madhu Guru: open weights are a tailwind, not the cause](https://x.com/realmadhuguru/status/2108618266776387886)

### Matt Turck

Matt Turck, a VC at FirstMark Capital and host of the MAD Podcast, calls a demo where "One prompt to build a professional-level video for your company or product, in your style" a "🤯" moment, and says it is "quite literally the vision that Synthesia has been pursuing since the early days. Happening slowly, then all at once. Available to everyone today."

FirstMark Capital 的 VC、MAD Podcast 主持人 Matt Turck，把一个可以「One prompt to build a professional-level video for your company or product, in your style」的演示称为「🤯」时刻，并说这「quite literally the vision that Synthesia has been pursuing since the early days. Happening slowly, then all at once. Available to everyone today」。

- [Matt Turck: one prompt to build a professional-level video](https://x.com/mattturck/status/2108561284635480443)

### Nan Yu

Nan Yu, who works on Codex product at OpenAI, says he "cannot stress how much I've loved using this feature," framing the shift as: "First we wrote code by hand, then we tab-completed the code. Then we evolved to prompting agents…and now we tab-complete that too."

在 OpenAI 负责 Codex 产品的 Nan Yu 说他「cannot stress how much I've loved using this feature」，并把这种变化概括为：「First we wrote code by hand, then we tab-completed the code. Then we evolved to prompting agents…and now we tab-complete that too」。

- [Nan Yu: now we tab-complete agent prompts](https://x.com/thenanyu/status/2108671762984731037)

### Nikunj Kothari

Nikunj Kothari, a partner at FPV Ventures, has a message for founders: "please ask your marketing team to exclude VCs if you decide to promote your product on X." He says he gets "3 DMs a day asking to 'collab' on this 'insane opportunity' which is *cough cough* a paid partnership," and warns it "Shows really poor judgement and word spreads around that you are trying to buy eyeballs to cue a big raise."

FPV Ventures 合伙人 Nikunj Kothari 给创始人提了个建议：「please ask your marketing team to exclude VCs if you decide to promote your product on X」。他说自己每天收到「3 DMs a day asking to 'collab' on this 'insane opportunity' which is *cough cough* a paid partnership」，并警告这「Shows really poor judgement and word spreads around that you are trying to buy eyeballs to cue a big raise」。

- [Nikunj Kothari: founders, exclude VCs from your X promos](https://x.com/nikunj/status/2108616889605951834)

### Peter Yang

Peter Yang, who writes practical AI tutorials and interviews, offers a blunt prioritization take: "How about let's stop building more personal assistants to manage our emails and more AI startups to manage and cure diseases." He also shares a practical Grok Bot tip: if you want the bot to act as your chief of staff, do not register its email under your own name, because "it's weird to copy in yourself"; instead pick the name you want your chief of staff to be called.

写实用 AI 教程与访谈的 Peter Yang 给出了一个直白的优先级判断：「How about let's stop building more personal assistants to manage our emails and more AI startups to manage and cure diseases」。他还分享了一个 Grok Bot 的实用技巧：如果你想让它当你的 chief of staff，就不要把它的邮箱注册成你自己的名字，因为「it's weird to copy in yourself」；而是用你希望这个 chief of staff 被叫的名字。

- [Peter Yang: stop building more email assistants](https://x.com/petergyang/status/2108679515681722787)
- [Peter Yang: how to name your Grok Bot email](https://x.com/petergyang/status/2108624122339287335)

### Swyx

Swyx relaunched his book Coding Career, which readers can now get "free or on amazon," framing the advice as "most of you are unfortunately not qualified but there is somewhat a path."

Swyx 重新发布了他的书 Coding Career，读者现在可以「free or on amazon」拿到，他把这份建议概括为「most of you are unfortunately not qualified but there is somewhat a path」。

- [Swyx: Coding Career relaunched for free](https://x.com/swyx/status/2108563331376124389)

### Thariq

Thariq, who works on Claude Code at Anthropic, describes porting a side project with a single prompt: before joining Anthropic, "I spent about 2 weeks hacking on this as a side project with Opus 4," which "needed a constantly running process & didnt work that well," but "one prompt to Opus 5.5 ported it to Claude Managed Agents & made it way more reliable."

在 Anthropic 负责 Claude Code 的 Thariq 讲了他如何用一条 prompt 迁移一个副业项目：加入 Anthropic 之前，「I spent about 2 weeks hacking on this as a side project with Opus 4」，它「needed a constantly running process & didnt work that well」，但「one prompt to Opus 5.5 ported it to Claude Managed Agents & made it way more reliable」。

- [Thariq: one prompt ported a side project to Managed Agents](https://x.com/trq212/status/2108689101503566319)

### Thibault Sottiaux

Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, says "Your ChatGPT subscription is now also a Devin subscription," and that "Dots got a pretty big upgrade."

在 OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 说「Your ChatGPT subscription is now also a Devin subscription」，而且「Dots got a pretty big upgrade」。

- [Thibault Sottiaux: your ChatGPT subscription is now also a Devin subscription](https://x.com/thsottiaux/status/2108777962053292398)
- [Thibault Sottiaux: Dots got a pretty big upgrade](https://x.com/thsottiaux/status/2108773703064657936)

## Podcast

### No Priors: Beam: The Great American Open Model with ReflectionAI Co-Founder and CEO Misha Laskin

The Takeaway: Western open-weight models are now credible at the frontier, and the winning position is less about the weights themselves than about the compute, infrastructure, and trust a lab can assemble around them.

核心要点：西方的开源权重模型如今已经具备前沿级别的可信度，而真正决定胜负的，不只是权重本身，而是实验室能围绕它聚合起多少算力、基础设施和信任。

Reflection AI co-founder and CEO Misha Laskin, a former Google DeepMind researcher with a PhD in physics, spent the last year building a frontier lab from roughly 30 people to about 300. The first result is Beam, which he describes as "a 500,000,000,000 parameter model total 23 b active," trained on 6,000 GB300s and now reproducible in "about twelve days, maybe less," with reinforcement learning run on "a little over 10,000 GB300s for four weeks." Beam, he says, is "three to four times more efficient than models of the same capability class," because a strong pre-training base for reasoning was amplified by reinforcement learning at what he calls the largest scale done in open source.

Reflection AI 联合创始人兼 CEO Misha Laskin 曾任 Google DeepMind 研究员，拥有物理学博士学位。过去一年，他把这家前沿实验室从大约 30 人做到约 300 人。第一个成果是 Beam，他形容这是一个「a 500,000,000,000 parameter model total 23 b active」，用 6,000 块 GB300 训练，如今「about twelve days, maybe less」就能复现；强化学习则跑在「a little over 10,000 GB300s for four weeks」上。他说 Beam「three to four times more efficient than models of the same capability class」，因为强大的推理预训练底座，又被他说是开源界迄今最大规模的强化学习进一步放大。

Laskin argues the field has shifted from a science problem to an engineering and economics problem. Reinforcement-learning systems "never stopped learning," he says, so the real question becomes where the economically valuable data lives: finance compliance flows, cyber defense, and legal work all look fertile, because a good evaluation lets a lab generate the synthetic data that drives generalization. On the market, he says gateway traffic flipped from "seventy thirty closed open to seventy thirty open close now," and likens the shift to servers running overwhelmingly on open-source Linux while closed giants stay valuable.

Laskin 认为，这个领域已经从科学问题变成了工程与经济问题。强化学习系统「never stopped learning」，所以真正的问题变成：有价值的数据在哪里。金融合规流程、网络防御、法律工作看起来都很有前景，因为只要有一套好的评测，实验室就能生成驱动泛化的合成数据。谈到市场，他说网关流量已经从「seventy thirty closed open to seventy thirty open close now」，并把这一转变类比为服务器几乎都跑在开源 Linux 上，而闭源巨头依然非常有价值。

He is candid about competition and safety. In his formula, a company wins by multiplying "what intelligence density are you able to offer times how much compute do you have times how much trust do you have." He calls the rise of Chinese open models "a massive benefit for the world," but warns that "open models are Trojan horses for the infrastructure that they bring with them," so the West needs at least a couple of competitive open-model labs of its own. On safety he is an open-weights optimist, invoking Linus' law, and he calls alignment work "deeply boring" whack-a-mole rather than a magic equation.

他对竞争与安全同样坦率。按他的公式，一家公司取胜靠的是「what intelligence density are you able to offer times how much compute do you have times how much trust do you have」三者相乘。他称中国开源模型的崛起是「a massive benefit for the world」，但警告「open models are Trojan horses for the infrastructure that they bring with them」，所以西方至少需要两三家有竞争力的开源模型实验室。在安全上他是开源权重的乐观派，引用 Linus 定律，并说 alignment 工作「deeply boring」，是打地鼠，而不是什么魔法公式。

Source: https://www.youtube.com/@NoPriorsPodcast

## Blog

### Anthropic Engineering: How we contain Claude across products

Anthropic Engineering argues that once agents can do work that once required a person or even a team, the risk-reward calculation "tips heavily toward adoption," so the engineering job becomes capping the blast radius. It splits defense into supervising behavior with a human in the loop and containment that enforces access boundaries with sandboxes, VMs, and egress controls. Supervision is fallible: telemetry showed users approved "roughly 93% of permission prompts," and attention drops the more prompts appear. On Gray Swan's Agent Red Teaming benchmark, Claude Opus 4.7 holds attack success "to roughly 0.1% on single attempts, and around 5–6% after 100 adaptive attempts," and Claude Code's model-based auto mode "catches roughly 83% of overeager behaviors before they execute," though any probabilistic defense has a non-zero miss rate.

Anthropic Engineering 的核心论点是：当 agent 已经能做过去需要一个人甚至一个团队才能完成的工作时，风险与收益的天平「tips heavily toward adoption」，于是工程上的关键问题就变成了如何限制影响半径。文章把防御拆成两层：用 human-in-the-loop 监督 agent 的行为，以及用 sandbox、虚拟机和 egress 控制来强制访问边界。监督并不可靠：遥测显示用户批准了「roughly 93% of permission prompts」，而且提示越多，注意力越涣散。在 Gray Swan 的 Agent Red Teaming 基准上，Claude Opus 4.7 把攻击成功率压在「to roughly 0.1% on single attempts, and around 5–6% after 100 adaptive attempts」，Claude Code 基于模型的 auto mode 则「catches roughly 83% of overeager behaviors before they execute」，但任何概率性防御都有非零的漏检率。

The post walks through three isolation patterns for claude.ai, Claude Code, and Claude Cowork, and stresses that the deterministic boundary "is what gets hit when everything probabilistic misses." Two of the incidents that taught the most, an employee phish and a third-party allowlist disclosure, were egress failures where the model layer had nothing anomalous to catch. It also notes that Claude Mythos Preview was "deemed too high to ship in April 2026," and that Claude Cowork runs in a full VM whose only mount is the user's chosen workspace, with credentials staying in the host keychain. The post is written by Max McGuinness, Mikaela Grace, Jiri De Jonghe, Jake Eaton, and Abel Ribbink.

文章梳理了 claude.ai、Claude Code 和 Claude Cowork 三种隔离模式，并强调真正兜底的是确定性边界：「is what gets hit when everything probabilistic misses」。教训最深的两个事故，一起是员工钓鱼，一起是第三方 allowlist 泄露，都属于 egress 失败，模型层在当时没有异常可抓。文章还提到，Claude Mythos Preview 在 2026 年 4 月「deemed too high to ship」，而 Claude Cowork 跑在完整虚拟机里，唯一挂载的是用户选定的工作区，凭证则留在宿主机的 keychain 中。文章作者是 Max McGuinness、Mikaela Grace、Jiri De Jonghe、Jake Eaton 和 Abel Ribbink。

- [Anthropic Engineering: How we contain Claude across products](https://www.anthropic.com/engineering/how-we-contain-claude)

### Anthropic Engineering: An update on recent Claude Code quality reports

Anthropic traced a month of reports that Claude's responses had worsened for some users to three separate changes affecting Claude Code, the Claude Agent SDK, and Claude Cowork; the API was not impacted, and all three were resolved as of April 20 (v2.1.116). First, a March 4 change to Claude Code's default reasoning effort, from high to medium, aimed at cutting the latency that made the UI appear frozen, but it was "the wrong tradeoff" and was reverted on April 7 after users said they preferred higher intelligence by default. Second, a March 26 caching optimization meant to clear stale reasoning once instead cleared it "on every turn for the rest of the session," making Claude forgetful and repetitive and draining usage limits through cache misses; it was fixed on April 10. Third, an April 16 system prompt instruction to keep responses short hurt coding quality, and a broader eval showed "a 3% drop for both Opus 4.6 and 4.7"; it was reverted on April 20.

Anthropic 把一个月来用户抱怨 Claude 回答变差的反馈，追溯到三处分别影响 Claude Code、Claude Agent SDK 和 Claude Cowork 的改动；API 并未受影响，三个问题都在 4 月 20 日（v2.1.116）解决。第一，3 月 4 日把 Claude Code 默认推理档位从 high 调到 medium，本意是减少让 UI 看起来卡死的延迟，但这是「the wrong tradeoff」，在用户反馈更偏好默认高智能后，于 4 月 7 日回退。第二，3 月 26 日一个缓存优化本应只清空一次陈旧推理，结果 bug 让它在「on every turn for the rest of the session」都清空，令 Claude 显得健忘、重复，并通过 cache miss 加速消耗用量额度；4 月 10 日修复。第三，4 月 16 日一条让回复更简短的 system prompt 损害了编码质量，更全面的 eval 显示它造成「a 3% drop for both Opus 4.6 and 4.7」；4 月 20 日回退。

Anthropic says it is resetting usage limits for all subscribers as of April 23, will broaden internal use of the exact public build, and will add per-model evals, soak periods, and gradual rollouts for prompt changes while gating model-specific changes to the model they target. It notes that when it back-tested its Code Review tool against the offending pull requests, "Opus 4.7 found the bug, while Opus 4.6 didn't."

Anthropic 说，从 4 月 23 日起为所有订阅用户重置用量额度，将让更大比例的内部员工使用完全相同的公开版本，并为 prompt 改动加上逐模型的 eval、soak 期和灰度发布，同时把针对特定模型的改动限定在对应模型上。文章还提到，拿有问题的 PR 回测其 Code Review 工具时，「Opus 4.7 found the bug, while Opus 4.6 didn't」。

- [Anthropic Engineering: An update on recent Claude Code quality reports](https://www.anthropic.com/engineering/april-23-postmortem)

### Anthropic Engineering: Scaling Managed Agents: Decoupling the brain from the hands

Anthropic Engineering describes Managed Agents, a hosted service that runs long-horizon agents behind interfaces designed to outlast any particular harness. The lesson is borrowed from operating systems: virtualize the unstable parts. Anthropic splits an agent into a session (an append-only log of everything that happened), a harness (the loop that calls Claude and routes its tool calls), and a sandbox (where Claude can run code and edit files). Its first version bundled all three into one container, which made the server a "pet": lose the container and you lost the session, and debugging meant opening a shell next to user data. Decoupling the "brain" from the "hands" turned containers and harnesses into disposable "cattle": a failed sandbox returns as a tool-call error, and a crashed harness reboots from the session log with wake(sessionId) and resumes from the last event.

Anthropic Engineering 介绍了 Managed Agents：一个有托管的服务，通过一组刻意设计得比任何具体实现都更长寿的接口，来运行长周期 agent。这里借用了操作系统的思路：把不稳定的部分虚拟化。Anthropic 把一个 agent 拆成 session（记录一切发生过的追加式日志）、harness（调用 Claude 并把它的工具调用路由到相应基础设施的循环）和 sandbox（Claude 运行代码、编辑文件的地方）。最初版本把三者塞进同一个容器，结果服务器变成了「pet」：容器一挂，session 就丢了，调试还意味着挨着用户数据开 shell。把「brain」和「hands」解耦后，容器和 harness 都变成了可替换的「cattle」：sandbox 失败会作为工具调用错误返回，harness 崩溃则可以用 wake(sessionId) 从 session 日志重启，并从最后一个事件恢复。

The payoff shows up in latency and security. Because containers are provisioned only when a session needs one, p50 time-to-first-token dropped "roughly 60%" and p95 fell "over 90%." The structural fix was to make sure tokens are never reachable from the sandbox where Claude's generated code runs, using repository-scoped Git tokens and an OAuth vault behind a proxy so "the harness is never made aware of any credentials." The post frames the whole system as a "meta-harness," opinionated about the interfaces around Claude, state and computation, but agnostic about how many brains and hands it will need.

收益体现在延迟和安全上。因为只有当会话真的需要容器时才去申请，p50 首 token 时间下降了「roughly 60%」，p95 下降了「over 90%」。结构性的修复，是确保 token 永远不会落在 Claude 生成代码所运行的 sandbox 里：用仓库级别的 Git token 完成克隆，把 OAuth token 存在保险库中、经由代理访问，从而「the harness is never made aware of any credentials」。文章把整套系统称为「meta-harness」：对围绕 Claude 的接口（状态与计算）很有主见，但对将来需要多少 brain 和 hand 并不设限。

- [Anthropic Engineering: Scaling Managed Agents: Decoupling the brain from the hands](https://www.anthropic.com/engineering/managed-agents)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
