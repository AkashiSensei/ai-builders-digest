[English](../../en/daily/ai-digest-2026-05-09-Sat.md) | [中文](../../zh/daily/ai-digest-2026-05-09-Sat.md) | [Bilingual](./ai-digest-2026-05-09-Sat.md)

---

# AI Builders Digest

## Reader's Briefing / 导读
AI safety is moving from model capability to governance and system design. Zico Kolter’s podcast appearance and Matt Turck’s notes both underline the same point: bigger models do not automatically become safer, so release review, preparedness thresholds, monitoring, and ecosystem-level controls matter.
AI safety 正在从模型能力问题，转向治理和系统设计问题。Zico Kolter 的播客和 Matt Turck 的整理都强调同一点：更大的模型不会自动更安全，因此发布审查、preparedness thresholds、monitoring 和 ecosystem-level controls 变得关键。

The agent stack is becoming more practical and more interconnected. Garry Tan’s GStack and GBrain updates, Peter Steinberger’s agent delegation notes, and Ryo Lu’s Cursor workflow all point toward multi-agent tools that operate across browsers, MCP servers, coding loops, and refactor plans.
Agent stack 正在变得更实用，也更互联。Garry Tan 的 GStack/GBrain 更新、Peter Steinberger 的 agent delegation 进展，以及 Ryo Lu 的 Cursor workflow，都指向可以跨浏览器、MCP server、coding loop 和重构计划协作的 multi-agent 工具。

AI coding is shifting from replacement narratives to leverage narratives. Sam Altman emphasized turning strong developers into “superheroes,” while Cursor and OpenClaw examples show AI compressing the path from idea to tested change rather than simply removing engineers from the loop.
AI coding 叙事正在从“替代”转向“增强”。Sam Altman 强调把强开发者变成“superheroes”，Cursor 和 OpenClaw 的例子也显示，AI 正在压缩从 idea 到 tested change 的路径，而不是简单把工程师移出流程。

Enterprise AI is moving deeper into existing work surfaces. Claude’s Microsoft Office rollout and Alex Albert’s Firefox security example both show AI entering mature workflows where context, security, and measurable throughput matter more than standalone chatbot novelty.
Enterprise AI 正在深入既有工作界面。Claude 的 Microsoft Office rollout 和 Alex Albert 提到的 Firefox security 案例都说明，AI 正进入成熟工作流，此时 context、security 和可衡量吞吐量比独立 chatbot 新鲜感更重要。

Differentiation is getting harder as AI capabilities commoditize. Aaron Levie’s competitive-force argument, Zara Zhang’s complaint about indistinguishable AI app pitches, and Madhu Guru’s Gemini retrospective all point to the same builder challenge: once everyone has similar AI tools, distribution, feedback loops, and customer depth become the moat.
随着 AI 能力商品化，差异化正在变难。Aaron Levie 关于竞争力迁移的判断、Zara Zhang 对 AI app pitch 同质化的吐槽，以及 Madhu Guru 对 Gemini 的回顾，都指向同一个 builder 挑战：当所有人都有类似 AI 工具后，distribution、feedback loops 和客户深度才是 moat。

## X / Twitter
### Swyx

Swyx focused on operational trust failures: a DocuSign complaint, a Loom failure while reporting Gusto bugs, and a warning that a phishing attempt nearly worked on him. The useful signal is not a new model release, but a builder reminder that AI-era productivity still depends on brittle identity, workflow, and support surfaces.

Swyx 关注的是运营信任层面的故障：对 DocuSign 的强烈不满、用 Loom 录制 Gusto bug 时又遇到 Loom 出问题，以及提醒大家有一类 phishing 差点骗到他。这里的重点不是新模型，而是一个 builder 的提醒：AI 时代的生产力仍然依赖脆弱的身份、流程和支持系统。

Source 1: https://x.com/swyx/status/2052632502683279417
Source 2: https://x.com/swyx/status/2052627119675769333
Source 3: https://x.com/swyx/status/2052599553283813788

### Kevin Weil

OpenAI executive Kevin Weil shared a compact enthusiasm post, saying he “will never get tired of this.” The linked post is the substance, so the feed only gives a light signal: frontier AI demos are still producing genuine delight even for people close to the work.

OpenAI 高管 Kevin Weil 发了一条很简短的兴奋表达，说自己“永远看不腻这个”。由于主要内容在链接里，feed 只能提供一个轻量信号：即使是离前沿模型很近的人，新的 AI demo 仍然能带来真实的新鲜感。

Source 1: https://x.com/kevinweil/status/2052605586962022459

### Peter Yang

Peter Yang posted a link-only update. There is not enough text in the feed to summarize a specific claim without guessing, so this stays as a source pointer rather than a fabricated take.

Peter Yang 发了一条只有链接的更新。feed 中没有足够文本支持具体判断，因此这里保留为来源指针，不额外编造观点。

Source 1: https://x.com/petergyang/status/2052548729891439057

### Madhu Guru

Madhu Guru announced he is leaving Google after helping build businesses across Search, Ads, and Gemini. His retrospective frames Gemini as an underdog turnaround: OpenAI and Anthropic were ahead three years ago, then Google built the model-building playbook, customer feedback flywheel, and enterprise business needed to compete at the frontier.

Madhu Guru 宣布离开 Google，此前他参与建设了 Search、Ads 和 Gemini 相关业务。他的回顾把 Gemini 描述成一次逆风追赶：三年前 OpenAI 和 Anthropic 领先，Google 随后补上了模型构建方法、客户反馈飞轮和企业业务体系，才重新进入 frontier 竞争。

Source 1: https://x.com/realmadhuguru/status/2052490869320946037

### Amjad Masad

Replit CEO Amjad Masad pointed out that what people are calling the most viral petition in history is hosted on Replit. It is a clean product-distribution signal: consumer-scale spikes are increasingly landing on developer platforms that were originally framed as coding tools.

Replit CEO Amjad Masad 指出，一个被称为史上最 viral 的 petition 托管在 Replit 上。这是一个很直接的产品分发信号：原本被视为 coding tool 的开发者平台，正在承接消费级流量峰值。

Source 1: https://x.com/amasad/status/2052478595277467703

### Alex Albert

Anthropic’s Alex Albert highlighted Firefox using Claude Mythos Preview to fix more security bugs in April than in the previous 15 months combined. The practical takeaway is sharp: AI-assisted security work is moving from abstract promise to measurable bug-fixing throughput in mature codebases.

Anthropic 的 Alex Albert 提到，Firefox 借助 Claude Mythos Preview 在 4 月修复的安全 bug 数量，超过此前 15 个月总和。实际意义很明确：AI 辅助安全工作正在从抽象承诺，变成成熟代码库里可衡量的修复吞吐量。

Source 1: https://x.com/alexalbert__/status/2052468575492088078
Source 2: https://x.com/alexalbert__/status/2052468573516513762

### Aaron Levie

Box CEO Aaron Levie argued that when AI makes a task easy, everyone gets that same advantage. His implication for software is that easier building pushes differentiation toward sales, marketing, customer success, and deeper customer engagement: the question becomes how you stand out once competitors can use the same tools.

Box CEO Aaron Levie 认为，当 AI 让一件事变容易，所有人都会获得同样优势。他对软件行业的判断是：开发更容易之后，差异化资源会流向 sales、marketing、customer success 和更深入的客户互动。关键问题变成：当竞争对手也能用同样工具时，你靠什么脱颖而出。

Source 1: https://x.com/levie/status/2052566788236509254

### Ryo Lu

Cursor designer Ryo Lu showed a workflow going from idea to merge entirely inside Cursor. The signal is that AI coding tools are compressing not just implementation, but the full loop from intent to committed change.

Cursor 设计师 Ryo Lu 展示了从 idea 到 merge 全部在 Cursor 中完成的流程。这里的信号是：AI coding tool 压缩的不只是实现环节，而是从意图到提交变更的完整循环。

Source 1: https://x.com/ryolu_/status/2052496872586272802

### Garry Tan

YC CEO Garry Tan shared updates around GStack and GBrain for agent workflows. GBrain added thin-client mode so Claude Code or a secondary agent can use it over MCP without running its own MCP server, while GStack v1.28 adds browser downloads, headed configuration, anti-bot handling in headless Linux containers, and llms.txt for agent-readable setup.

YC CEO Garry Tan 分享了 GStack 和 GBrain 的 agent workflow 更新。GBrain 新增 thin-client mode，让 Claude Code 或第二 agent 可以通过 MCP 使用它，而不必自己跑 MCP server；GStack v1.28 则增加浏览器下载、headed configuration、headless Linux container 中的 anti-bot 处理，以及方便 agent 读取配置的 llms.txt。

Source 1: https://x.com/garrytan/status/2052629679572701455
Source 2: https://x.com/garrytan/status/2052588782076281324
Source 3: https://x.com/garrytan/status/2052588548126364028

### Matt Turck

FirstMark’s Matt Turck promoted a long discussion with Zico Kolter, OpenAI board member and Carnegie Mellon machine learning leader, covering model-release governance, preparedness frameworks, jailbreaks, prompt injection, mechanistic interpretability, and why safety does not automatically improve with scale.

FirstMark 的 Matt Turck 推荐了与 Zico Kolter 的长谈。Kolter 是 OpenAI board member，也是 Carnegie Mellon 机器学习负责人，讨论覆盖模型发布治理、preparedness framework、jailbreak、prompt injection、mechanistic interpretability，以及为什么安全性不会随着模型规模自动提升。

Source 1: https://x.com/mattturck/status/2052440964782870727
Source 2: https://x.com/mattturck/status/2052440959997063309

### Zara Zhang

Zara Zhang captured a market-positioning problem for new AI apps: so many pitches now sound alike that they blur together. That is a useful warning for builders: capability is no longer enough if the narrative, wedge, and user memory hook are indistinct.

Zara Zhang 点出了新 AI app 的市场定位问题：太多产品信息听起来相似，以至于混成一片。对 builder 来说，这是一个有用提醒：如果叙事、切入口和用户记忆点不清楚，单有能力已经不够。

Source 1: https://x.com/zarazhangrui/status/2052505923625857286

### Nikunj Kothari

FPV Ventures partner Nikunj Kothari took a contrarian shot at weekly 1:1s, calling many of them a micromanagement pattern rather than a path to excellence. He also pointed to real-time generated pixels on Reactorworld, keeping one foot in management culture and one in generative media infrastructure.

FPV Ventures partner Nikunj Kothari 对 weekly 1:1 提出了反常识批评，认为很多 1:1 更像中层管理者的 micromanagement，而不是追求卓越的机制。他还提到 Reactorworld 上的实时生成像素，话题一边是管理文化，一边是生成式媒体基础设施。

Source 1: https://x.com/nikunj/status/2052626010332668278
Source 2: https://x.com/nikunj/status/2052461083282350121
Source 3: https://x.com/nikunj/status/2052409335503081525

### Peter Steinberger

OpenClaw’s Peter Steinberger shared agent-to-agent delegation progress, praised GPT 5.5 plus /goal for planning extensive refactors with end-to-end tests, and highlighted Wi-Find, a ChatGPT Future Class project that detects disaster survivors through walls and debris using AI.

OpenClaw 的 Peter Steinberger 分享了 agent 之间互相委派任务的进展，称 GPT 5.5 配合 /goal 可以规划带 e2e tests 的大型重构，还介绍了 ChatGPT Future Class 项目 Wi-Find：用 AI 通过墙体和废墟探测灾害幸存者。

Source 1: https://x.com/steipete/status/2052630190346457301
Source 2: https://x.com/steipete/status/2052514752245481675
Source 3: https://x.com/steipete/status/2052486085226184742

### Dan Shipper

Every CEO Dan Shipper framed the next phase as an AI platform war. His dispatch with Kieran Klaassen connects the xAI compute deal, managed agents, and Anthropic’s move to turn its API into fuller cloud infrastructure for developers.

Every CEO Dan Shipper 把下一阶段描述为 AI platform war。他与 Kieran Klaassen 的快速讨论把 xAI compute deal、managed agents，以及 Anthropic 将 API 扩展成更完整开发者云基础设施的动作串在一起。

Source 1: https://x.com/danshipper/status/2052501376195080381
Source 2: https://x.com/danshipper/status/2052493496788066812
Source 3: https://x.com/danshipper/status/2052410930257113145

### Aditya Agarwal

South Park Commons general partner Aditya Agarwal pushed the “you can just do things” ethos and promoted SPC’s Embodied AI Hackathon in San Francisco on May 15-17, with applications due by May 12. The theme is clear: hard-tech and embodied-AI founders are being pulled into faster, community-driven build cycles.

South Park Commons general partner Aditya Agarwal 强调“you can just do things”的行动哲学，并推广 SPC 于 5 月 15-17 日在 San Francisco 举办的 Embodied AI Hackathon，申请截止 5 月 12 日。主题很清楚：hard tech 和 embodied AI founder 正被拉入更快、更社区化的 build cycle。

Source 1: https://x.com/adityaag/status/2052544215826260254
Source 2: https://x.com/adityaag/status/2052441427070861816
Source 3: https://x.com/adityaag/status/2052441425724514741

### Sam Altman

OpenAI CEO Sam Altman emphasized augmenting strong software developers rather than replacing them, saying one excellent person can now do an extraordinary amount. He also signaled urgency around helping companies secure themselves and noted a possible generational split in AI interfaces: younger users lean voice, while older users still prefer typing.

OpenAI CEO Sam Altman 强调，与其替代软件开发者，不如把优秀开发者增强成更强的人；他认为现在一个真正优秀的人能完成惊人的工作量。他还提到 OpenAI 想快速帮助企业提升安全，并观察到 AI 交互可能存在代际差异：年轻用户更偏好 voice，年长用户仍更喜欢 typing。

Source 1: https://x.com/sama/status/2052558319940944256
Source 2: https://x.com/sama/status/2052485051812909530
Source 3: https://x.com/sama/status/2052462428663992564

### Claude

Anthropic announced that Claude for Excel, PowerPoint, and Word is now generally available, while Claude for Outlook is in public beta. The key product move is cross-app context: Claude can move between Microsoft apps while carrying the full conversation context.

Anthropic 宣布 Claude for Excel、PowerPoint 和 Word 已经 GA，Claude for Outlook 进入 public beta。关键产品动作是跨 app context：Claude 可以在 Microsoft apps 之间移动，同时保留完整对话上下文。

Source 1: https://x.com/claudeai/status/2052445787930468704
Source 2: https://x.com/claudeai/status/2052445786651168849

## Podcast
**The MAD Podcast with Matt Turck: OpenAI Board Member Zico Kolter on the Real Risks of Frontier AI**

The takeaway: Zico Kolter’s central warning is that model capability can improve with scale, but robustness and safety do not automatically come along for the ride.

Kolter, an OpenAI board member, chair of OpenAI’s Safety and Security Committee, and head of machine learning at Carnegie Mellon, describes safety oversight as a governance function with real release leverage: the committee reviews major model releases, asks for evidence from internal and third-party evaluations, and can delay release when more clarity is needed. He frames preparedness work around concrete risk thresholds in areas like bio, cyber, and self-improvement, while also stressing that many AI risks now live at the ecosystem level rather than inside one model.

The most useful distinction is between capability and robustness. Bigger or better-trained models often get stronger at math, coding, law, and general reasoning, but Kolter says the same passive improvement does not hold for manipulation resistance, jailbreak robustness, or prompt-injection resilience. Safety needs explicit training, monitoring, filters, usage analysis, and system-level design.

He breaks AI risk into four rough categories: ordinary model mistakes, harmful use by capable bad actors, social or psychological effects from widespread deployment, and longer-horizon loss-of-control scenarios. That taxonomy keeps the debate grounded: safety is not one problem, and treating it as one problem leads to bad arguments.

Source: https://www.youtube.com/watch?v=DvyZcCfepeI

**The MAD Podcast with Matt Turck: OpenAI Board Member Zico Kolter on the Real Risks of Frontier AI**

核心 takeaway：Zico Kolter 的主要提醒是，模型能力可能随着 scale 提升，但 robustness 和 safety 不会自动随之提升。

Kolter 是 OpenAI board member、OpenAI Safety and Security Committee 主席，也是 Carnegie Mellon 机器学习负责人。他把安全监督描述为一种真正影响发布节奏的治理职能：委员会会审查主要模型发布，查看内部与第三方评估证据，并在需要更多信息时延后发布。他将 preparedness 工作放在 bio、cyber、自我改进等具体风险阈值上，同时也强调，许多 AI 风险已经从单一模型层面转移到了 ecosystem 层面。

最有价值的区分是 capability 和 robustness。更大或训练更好的模型，通常会在数学、coding、法律和通用推理上变强，但 Kolter 认为，这种被动提升并不会自然出现在抗操纵、jailbreak robustness 或 prompt-injection resilience 上。安全需要显式训练、monitoring、filters、usage analysis 和 system-level design。

他把 AI risk 粗分为四类：普通模型错误、有能力的恶意使用者造成的 harmful use、大规模部署带来的社会或心理影响，以及更长期的 loss-of-control 场景。这个 taxonomy 让讨论更落地：safety 不是一个单一问题，把它当成单一问题会导致糟糕争论。

来源：https://www.youtube.com/watch?v=DvyZcCfepeI

## Blog
No new blog posts in today’s feed.

今日 feed 中没有新的 blog 文章。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
