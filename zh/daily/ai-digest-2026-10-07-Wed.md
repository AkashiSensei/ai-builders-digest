[English](../../en/daily/ai-digest-2026-10-07-Wed.md) | [中文](./ai-digest-2026-10-07-Wed.md) | [双语](../../bilingual/daily/ai-digest-2026-10-07-Wed.md)

---

# AI Builders Digest

## 导读

**1. prompt 的重点正在从脚手架转向意图、投入程度和验证。** 在 Anthropic 负责 Claude Code 的 Boris Cherny 说，他「surprised that people are surprised this is how I prompt Claude」，并坚持应该「talk to Claude the way you would a coworker」，因为「there's no secret to prompting」。他说在 Sonnet 3.5 时代 prompt 极其重要，但今天更重要的是告诉模型三件事：你想让它做什么、你希望它投入多少精力、以及它该如何验证自己做对了。同样在 Anthropic 负责 Claude Code 的 Thariq 补充说，「working at a higher level of abstraction has always required understanding the lower level ones」，而 coding agent 并没有改变这一点。（[Boris Cherny](https://x.com/bcherny/status/2107565388250874193)、[Boris Cherny 的 prompt](https://x.com/bcherny/status/2107532985897771152)、[Thariq](https://x.com/trq212/status/2107504677143368163)）

**2. agent 正在分裂成云端的大脑和本地的双手。** Thariq 说趋势是「Claude's 'brains' in the cloud」加上操作你电脑的「local hands」，并指出真正的难点：如果 Claude 只能在你电脑在线时访问你的文件，它可能会「effectively blocked on doing work」，直到电脑重新开机，所以大概率需要某种同步，还要处理各种边缘情况。在 OpenClaw 工作并与 OpenAI 有合作的 Peter Steinberger 展示了这套模式在生产中的样子：他们把团队 agent 接到 X 上，未分配的 session 谁都可以认领，agent 会找出最近改过相关代码的人并在服务器上提醒他。他说「Whole thing was a prompt」，而且因为插件现在支持热重载，团队服务器自己扩展了自己。（[Thariq](https://x.com/trq212/status/2107580785456976085)、[Thariq 谈同步问题](https://x.com/trq212/status/2107580787277340835)、[Peter Steinberger](https://x.com/steipete/status/2107697554448421160)）

**3. AI 即将重塑软件如何被构建，也重塑它如何被保护。** Replit CEO Amjad Masad 说 AI 驱动的逆向工程和反编译进展「absolutely insane」，并预测「pretty soon all software will be de facto open-source」。Box CEO Aaron Levie 认为 cyber「will be one of the most defining domains for AI in the coming years」，安全团队要面对「vibe coded issues, agentic attacks, and even accidental agent swarms hunting for data」，并把 OpenAI 加上 Hugging Face 称为「just a preview of what's to come」。他预计会涌现一批 agentic 安全产品，以及「a booming market for cyber professionals that can effectively deploy agents for security purposes」。（[Amjad Masad](https://x.com/amasad/status/2107671204639465961)、[Aaron Levie](https://x.com/levie/status/2107680435644039269)）

**4. 规模化 AI 决策的关键在置信度阈值和维护债。** Vercel CEO Guillermo Rauch 强调一个「very simple feature」，他认为它「will be extremely impactful for at-scale AI decision-making」，并把它描述为「thinking fast and a bit less fast under a confidence threshold」。在 OpenAI 负责 Codex 产品、此前在 Linear 负责产品的 Nan Yu 警告说，有些改动「will cause extreme degradation in systems that no one loves to maintain, but someone has to」。（[Guillermo Rauch](https://x.com/rauchg/status/2107606246350266469)、[Nan Yu](https://x.com/thenanyu/status/2107506074370920796)）

**5. Claude 持续拓宽「工作发生的地方」。** Anthropic 的 Claude 账号说，现在你可以在 Claude 里粘贴 Google 文件链接，或者直接要一份新的文档、表格或幻灯片，它会在对话旁边打开，供你和 Claude 一起编辑，访问权限遵循你的 Google 共享设置；该功能在所有付费方案上处于 beta。该账号还介绍了 Every：这个团队尽可能把工作都交给 agent，并用 Claude Managed Agents 搭了一个公司 agent，全团队都在 Slack 里用，内部流行后又开放给订阅者。Every CEO Dan Shipper 说，他们「couldn't have built the Every agent without Claude Managed Agents」；Google 副总裁 Josh Woodward 则说 mask-based editing 是他的最爱，并预告「much more coming soon」。（[Claude](https://x.com/claudeai/status/2107522599530139767)、[Claude](https://x.com/claudeai/status/2107574195978641911)、[Dan Shipper](https://x.com/danshipper/status/2107575089441181861)、[Josh Woodward](https://x.com/joshwoodward/status/2107679061854273656)）

**6. post-training 正在成为企业的护城河，而推理才是钱之所在。** Applied Compute 的 CEO 认为，有了 reinforcement learning，「we essentially have a hill climbing machine」，最难的部分是「defining the hill to climb」，所以 eval 很重要，也必须像对待不可替代的员工一样谨慎守护。他用灵活性和控制权来定义「owning your intelligence」，说 post-training「wins inference」，因为最大的工作负载最先回本，并指出 Jevons 悖论：降价会带来用量激增。（[Unsupervised Learning](https://www.youtube.com/@RedpointAI)）

## X / Twitter

### Boris Cherny

在 Anthropic 负责 Claude Code 的 Boris Cherny 说，他「surprised that people are surprised this is how I prompt Claude」。他的建议是：「Talk to Claude the way you would a coworker. There's no secret to prompting. There's no need to be overly scaffolded or prescriptive for most tasks -- give Claude a goal, and it will figure it out.」他补充说「back in the Sonnet 3.5 days, your prompt mattered a lot」，但今天更重要的是传达三件事：你想让它做什么、你希望它投入多少精力、以及它该如何验证自己做对了。他还分享了自己实际使用的 prompt 作为示例。

- [Boris Cherny：他如何 prompt Claude](https://x.com/bcherny/status/2107565388250874193)
- [Boris Cherny：他的 prompt](https://x.com/bcherny/status/2107532985897771152)
- [Boris Cherny：他的 prompt 的另一个例子](https://x.com/bcherny/status/2107565497680314831)

### Thariq

在 Anthropic 负责 Claude Code 的 Thariq 说，「we're increasingly going to be moving towards Claude's 'brains' in the cloud and giving Claude 'local hands' to operate on your computer」，他在 Latent Space 上讨论过这个转变。他指出一个棘手的技术问题：如果 Claude 只能在你电脑在线时访问你的文件，它可能会「effectively blocked on doing work」，直到电脑重新开机，所以大概率需要某种形式的同步，还要处理边缘情况。另外，他认为「working at a higher level of abstraction has always required understanding the lower level ones」，而且他不认为 coding agent 改变了这一点。

- [Thariq：云端的大脑，本地的双手](https://x.com/trq212/status/2107580785456976085)
- [Thariq：同步问题](https://x.com/trq212/status/2107580787277340835)
- [Thariq：抽象仍然需要理解底层](https://x.com/trq212/status/2107504677143368163)

### Peter Steinberger

在 OpenClaw 工作并与 OpenAI 有合作的 Peter Steinberger 说，他把团队的 agent 接到 X 上，好更快触发工作。未分配的 session 谁都能认领，agent 会找出最近改过相关代码的人，并在服务器上提醒他。他说「Whole thing was a prompt」，而且因为插件现在支持热重载，团队服务器自己扩展了自己。

- [Peter Steinberger：把团队 agent 接到 X 上](https://x.com/steipete/status/2107697554448421160)

### Claude

Anthropic 的 Claude 账号说，在 Claude 里你可以粘贴 Google 文件链接，或者要一份新的文档、表格或幻灯片，它会在对话旁边打开，供你和 Claude 一起编辑，访问权限遵循你的 Google 共享设置；该功能在所有付费方案上处于 beta。该账号还介绍了 Every：这个团队尽可能把工作都交给 agent，并用 Claude Managed Agents 搭了一个公司 agent，全团队都在 Slack 里使用，内部流行后又开放给订阅者。该账号还给出了 Dan Shipper 和 Willie Williams 讲述他们如何搭建的完整对话链接。

- [Claude：在对话旁边编辑 Google 文件](https://x.com/claudeai/status/2107522599530139767)
- [Claude：Every 基于 Claude Managed Agents 的公司 agent](https://x.com/claudeai/status/2107574195978641911)
- [Claude：与 Dan Shipper 和 Willie Williams 的完整对话](https://x.com/claudeai/status/2107574198482927900)

### Dan Shipper

Every CEO Dan Shipper 说，他们「couldn't have built the Every agent without Claude Managed Agents」，并说坐下来聊它如何成型的过程「extremely fun」。

- [Dan Shipper：用 Claude Managed Agents 构建 Every agent](https://x.com/danshipper/status/2107575089441181861)

### Josh Woodward

Google 副总裁 Josh Woodward 的 bio 里写着 Google Labs、Gemini App 和 Google AI Studio，他说 mask-based editing 是他的最爱，并预告「much more coming soon」。

- [Josh Woodward：mask-based editing](https://x.com/joshwoodward/status/2107679061854273656)

### Amjad Masad

Replit CEO Amjad Masad 说，AI 驱动的逆向工程和反编译领域正在发生的事「absolutely insane」，并预测「pretty soon all software will be de facto open-source」。他的结论是：「AI is coming for everything and everyone.」

- [Amjad Masad：AI 逆向工程与反编译](https://x.com/amasad/status/2107671204639465961)

### Aaron Levie

Box CEO Aaron Levie 说，cyber「will be one of the most defining domains for AI in the coming years」，也是大多数企业重点关注的方向。他预计 AI 会给安全团队制造一个新层级的工作，要处理「the increase of vibe coded issues, agentic attacks, and even accidental agent swarms hunting for data」，并称 OpenAI 加上 Hugging Face「just a preview of what's to come」。由于安全团队长期是企业里资源最紧张的一群人，他说 AI agent 也会成为答案的一部分，会出现一批新的 agentic 产品，用来保护代码、企业系统、关键基础设施和数据。他称这是「a booming market for cyber professionals that can effectively deploy agents for security purposes in the enterprise」。

- [Aaron Levie：cyber 是 AI 的关键战场](https://x.com/levie/status/2107680435644039269)

### Guillermo Rauch

Vercel CEO Guillermo Rauch 强调一个「very simple feature」，他认为它「will be extremely impactful for at-scale AI decision-making」，并把这种思路描述为「thinking fast and a bit less fast under a confidence threshold」。

- [Guillermo Rauch：规模化 AI 决策的置信度阈值](https://x.com/rauchg/status/2107606246350266469)

### Nan Yu

在 OpenAI 负责 Codex 产品、此前在 Linear 负责产品的 Nan Yu 说，他担心有些改动「will cause extreme degradation in systems that no one loves to maintain, but someone has to」。

- [Nan Yu：没人愿意维护的系统会退化](https://x.com/thenanyu/status/2107506074370920796)

### Nikunj Kothari

FPV Ventures 合伙人 Nikunj Kothari 认为，太多 VC 在 X 上「chasing dopamine」或者故意 rage-baiting 来博取流量，并警告「X is not for nuance, so once you say something, you really can't take it back」。他说受伤更深的是他们「under」的人，而不是说话的人本身，并且他知道有两个人「lost deals that were all set because of the drama going on X」。考虑到资本已经高度商品化、基金数量又那么多，他写道「very few are playing long term games」。

- [Nikunj Kothari：在 X 上追涨多巴胺的 VC](https://x.com/nikunj/status/2107706522457497753)

### Sam Altman

OpenAI 的 Sam Altman 发了一组反思性的推文，写自己「looking up at the stars with extra awe tonight」，并引用「thy sea is so great and my boat is so small」。他感谢「the machines, and the structure of reality, for letting us understand a little more」，也感谢「the untold number of people who put in the technical work, brick by brick over the generations, to get us to the point where such a wonder is possible」。

- [Sam Altman：仰望星空](https://x.com/sama/status/2107691261776052633)
- [Sam Altman：感谢机器](https://x.com/sama/status/2107691262795239805)
- [Sam Altman：一砖一瓦](https://x.com/sama/status/2107691577015755196)

## Podcast

### Unsupervised Learning: Ep 94: Applied Compute CEO on the Limits of RL, the New AI Hyperscaler & Why Post-Training Wins Inference

核心 takeaway：reinforcement learning 就是一台爬山机器，真正持久的优势属于那些用自己的数据、eval 和判断来定义这座山的人，而不是租用别人模型的人。

Applied Compute 的 CEO 曾在 OpenAI 负责 Codex。他现在的公司帮助大型 AI 应用训练和部署自己的模型。他为「owning your intelligence」给出的理由，重点不在实验室有敌意，而在灵活性和控制权：模型跑在哪里、优化什么、如何部署。他说：「The idea of owning your intelligence really is about flexibility and control.」要做到这一点，你需要拿到权重，也需要能 post-train、推理并在多个模型之间路由的基础设施。

谈到 reinforcement learning，他的表述很直白：「What we have with RL is we essentially have a hill climbing machine. The hardest part is actually defining the hill to climb.」这也是 eval 如此重要的原因，他认为 eval 必须被谨慎守护：「Your employees are not fungible. You would not like be comfortable with them going to another company and doing work there. And same thing with these models.」所有公开 benchmark 都会被拿来 benchmark，所以把自己最好的 eval 保密本身就是一种优势。

他最锋利的一句话是：post-training 会赢下推理。最大、最成熟的工作负载最先从定制模型上回本，而且因为训练和推理可以协同优化，模型怎么训练会影响它怎么被服务。他还认为 post-training 的成本正在快速下降，而 Jevons 悖论依然成立：每一次降价都会带来用量激增，所以决定哪个模型胜出的越来越是效率，而不是原始能力。他说，大多数公司应该先把 harness 和 context 优化做到极限，再去动权重。

在招聘上，他坚持最好的工程师仍然要学基本功。他的团队会让候选人放开手脚用 AI 工具，然后要求他们解释设计和取舍：「You can't delegate your thinking away and basically rely on it as a crutch, because then you get these like massive slop code bases that you can't actually explain.」

Source: https://www.youtube.com/@RedpointAI

## Blog

本轮通过验证的 feed 中没有新的合格博客文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
