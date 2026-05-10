[English](../../en/daily/ai-digest-2026-05-10-Sun.md) | [中文](../../zh/daily/ai-digest-2026-05-10-Sun.md) | [Bilingual](./ai-digest-2026-05-10-Sun.md)

---

# AI Builders Digest

## Reader's Briefing / 导读
1. Agent adoption is becoming ordinary work. Sam Altman, Peter Steinberger, Garry Tan, and Nikunj Kothari all point at a world where Codex-style task execution, MCP-connected tools, and model-native planning are moving from demos into daily workflows.
Agent 正在变成日常工作的一部分。Sam Altman、Peter Steinberger、Garry Tan 和 Nikunj Kothari 都指向同一个趋势：Codex 式任务执行、MCP 连接工具、模型原生规划，正在从演示走进真实工作流。

2. The human edge is shifting toward judgment. Aaron Levie and Dan Shipper both emphasize that agents make entry into complex fields easier, but experienced people still win by knowing what good work looks like, how to prompt, and when benchmarks are measuring the operator as much as the model.
人的优势正在转向判断力。Aaron Levie 和 Dan Shipper 都强调，agent 会让更多人进入复杂领域，但有经验的人仍然更占优，因为他们知道什么是好结果、如何 prompt，以及什么时候 benchmark 测到的是人和模型的组合能力。

3. AI-generated artifacts need taste and maintenance. Peter Yang warns that small amounts of AI slop compound when generated Markdown becomes future context, while Zara Zhang argues that HTML matters because AI can handle manipulation and humans need beautiful, consumable outputs.
AI 生成物需要品味和维护。Peter Yang 提醒，AI 生成 Markdown 里的少量 slop 会在后续上下文中不断复利；Zara Zhang 则认为 HTML 重要，是因为当 AI 负责操作时，人类更需要漂亮、可消费的输出。

4. Claude's latest product direction is about reliability, memory, and connectors. Anthropic explains recent Claude Code quality regressions, while Claude Blog expands connectors into consumer apps and adds filesystem-based memory for managed agents.
Claude 最近的产品主线是可靠性、memory 和 connectors。Anthropic 解释了 Claude Code 近期质量问题的原因，Claude Blog 则把 connectors 扩展到日常消费 app，并为 Managed Agents 加入基于文件系统的 memory。

5. Voice is becoming a serious interface layer. ElevenLabs' Mati Staniszewski frames audio as a broad frontier: multilingual speech, voice agents for revenue and public services, emotional intelligence, and eventually unified audio models that can speak, pause, and sing in one continuous voice.
Voice 正在成为严肃的交互层。ElevenLabs 的 Mati Staniszewski 把 audio 描述成一个宽阔前沿：多语言语音、面向营收和公共服务的 voice agents、情绪智能，以及未来可以在同一个连续声音中说话、停顿、唱歌的统一 audio model。

## X / Twitter
### Swyx

### Swyx

Swyx is gearing up for AI Engineer Singapore with a delightfully specific signal: Singapore's Minister of Foreign Affairs Vivian Balakrishnan is apparently a NanoClaw fan and will keynote the event alongside NanoClaw creator Gavriel Cohen. The substance beneath the excitement is international AI engineering adoption, where government-level use cases are becoming part of the builder conversation. Links: https://x.com/swyx/status/2053371077477507240, https://x.com/swyx/status/2053370687931498603

Swyx 正在为 AI Engineer Singapore 预热，而且信号很具体：Singapore Minister of Foreign Affairs Vivian Balakrishnan 似乎是 NanoClaw 粉丝，并将和 NanoClaw creator Gavriel Cohen 一起出现在活动中。热闹背后的重点是，国际 AI engineering 的采用正在进入政府级 use case 和 builder 叙事。链接：https://x.com/swyx/status/2053371077477507240，https://x.com/swyx/status/2053370687931498603

He also points at Codex usage modes as a proxy for alignment and agent adoption, asking what percentage of users use the mode and how much that has grown over the last month. Link: https://x.com/swyx/status/2053364156510982164

他还把 Codex 某种使用模式当作 alignment 和 agent adoption 的代理指标，想知道有多少 Codex 用户使用这种模式，以及过去一个月增长了多少。链接：https://x.com/swyx/status/2053364156510982164

### Kevin Weil

### Kevin Weil

OpenAI's Kevin Weil flagged a piece as "a matter of extreme importance" and praised the writing. The post itself is light on context in the feed, but the signal is that he is amplifying long-form thinking rather than a product announcement. Link: https://x.com/kevinweil/status/2053225351946682733

OpenAI 的 Kevin Weil 转发并称某篇内容是“一件极其重要的事”，还称赞其写作。feed 里上下文不多，但可以看出他在放大一篇长文思考，而不是发布产品消息。链接：https://x.com/kevinweil/status/2053225351946682733

### Peter Yang

### Peter Yang

Peter Yang names a common AI trap: you ask an agent to generate Markdown, tolerate the first 5% of slop, then later let new generated files reference the old ones until the slop compounds. His practical warning is about context hygiene: generated docs become training material for your own future work unless someone edits them with taste. Links: https://x.com/petergyang/status/2053317001976881312, https://x.com/petergyang/status/2053196581139321300

Peter Yang 点出了一个常见 AI 陷阱：你让 agent 生成 Markdown，第一批文件里 5% 的 slop 你忍了；之后新文件又引用旧文件，slop 就会复利。这个提醒很实用：生成文档会成为你未来工作的上下文，除非有人用审美和判断力认真编辑它们。链接：https://x.com/petergyang/status/2053317001976881312，https://x.com/petergyang/status/2053196581139321300

He also wants Claude Code to communicate better when it hangs for minutes, which is a very concrete UX request for long-running agents: silence makes users unsure whether the model is thinking, stuck, or gone. Link: https://x.com/petergyang/status/2053170264121450616

他还希望 Claude Code 在卡住几分钟时能更好地沟通。这是 long-running agent 很具体的 UX 问题：沉默会让用户不知道模型是在思考、卡住，还是已经消失。链接：https://x.com/petergyang/status/2053170264121450616

### Guillermo Rauch

### Guillermo Rauch

Vercel CEO Guillermo Rauch posted a minimal sunshine emoji with a link. There is not enough substantive context in the feed to infer a product or technical point, so this one is mostly a mood signal rather than a digest item. Link: https://x.com/rauchg/status/2053202932812911027

Vercel CEO Guillermo Rauch 发了一个非常简短的太阳表情和链接。feed 中没有足够上下文推断产品或技术点，所以这更像是情绪信号，而不是实质 digest 条目。链接：https://x.com/rauchg/status/2053202932812911027

### Aaron Levie

### Aaron Levie

Box CEO Aaron Levie argues that agents will make it dramatically easier for people to enter complicated fields: software, creative work, research, and more. But his more interesting point is the counterweight: experienced people still have a major edge because judgment and historical context determine whether AI output is merely accessible or actually excellent. Link: https://x.com/levie/status/2053267097493573921

Box CEO Aaron Levie 认为，agents 会显著降低进入复杂领域的门槛：软件、创意工作、研究等等。但更有意思的是他的另一半判断：有经验的人仍然有巨大优势，因为判断力和历史上下文决定了 AI 输出只是“可用”，还是能真的做到优秀。链接：https://x.com/levie/status/2053267097493573921

### Garry Tan

### Garry Tan

Y Combinator CEO Garry Tan is experimenting in the agent tooling stack. He says GBrain v0.31.1 now has real MCP thin client support, so one "home GBrain server" can serve other clients over MCP instead of each environment running everything locally. Link: https://x.com/garrytan/status/2053306243704410460

Y Combinator CEO Garry Tan 正在 agent tooling stack 里做实验。他说 GBrain v0.31.1 已经支持真正的 MCP thin client，因此一个“home GBrain server”可以通过 MCP 服务其他 client，而不是每个环境都在本地跑完整能力。链接：https://x.com/garrytan/status/2053306243704410460

He also shares a simple comprehension trick: have agents draw ASCII diagrams of systems, then keep asking questions until the model's representation becomes clear. His Hermes agent Neuromancer being excited about a GBrain changelog citation is a small but telling glimpse of people treating agents as persistent collaborators. Links: https://x.com/garrytan/status/2053191327181865376, https://x.com/garrytan/status/2053316036661838107

他还分享了一个理解系统的小技巧：让 agent 用 ASCII diagram 画出系统，然后不断提问，直到模型的表示足够清楚。他的 Hermes agent Neuromancer 因为被 GBrain changelog 引用而兴奋，也很微妙地展示了人们正在把 agent 当成持续协作者。链接：https://x.com/garrytan/status/2053191327181865376，https://x.com/garrytan/status/2053316036661838107

### Zara Zhang

### Zara Zhang

Zara Zhang makes a sharp case for HTML as an AI-era output format. If AI handles manipulation, output should be optimized less for humans pushing pixels in PowerPoint and more for human consumption: beautiful, visual, interactive artifacts that people can actually absorb. Link: https://x.com/zarazhangrui/status/2053291803135410674

Zara Zhang 给出了一个很清晰的 HTML 论点：在 AI 时代，如果 AI 负责 manipulation，输出格式就不该继续围绕人类在 PowerPoint 里推像素，而应该围绕人类消费信息：漂亮、视觉化、交互式、真正容易吸收的 artifacts。链接：https://x.com/zarazhangrui/status/2053291803135410674

### Nikunj Kothari

### Nikunj Kothari

Nikunj Kothari observes that founders and VCs both think the bar for being a good VC is low: do what you say, and you are already top decile. It is funny because it is operationally boring, and probably true. Link: https://x.com/nikunj/status/2053289104331493566

Nikunj Kothari 观察到，founder 和 VC 都觉得“做好 VC 的门槛很低”：说到做到，就已经是 top decile。好笑之处在于它非常朴素，而且大概是真的。链接：https://x.com/nikunj/status/2053289104331493566

His more directly useful AI note is a custom-instructions pattern: when asking models to estimate work, tell them to assume the model is doing the work and report time in model-execution units like seconds, tool calls, and iterations, while separating human prerequisites such as credentials or approvals. Link: https://x.com/nikunj/status/2053159569015328953

他更直接有用的 AI 建议是一段 custom instructions：让模型估算工作时，假设模型自己会执行任务，用 seconds、tool calls、iterations 这类模型执行单位来报告时间，并单独列出 credentials、approval 等人类前置条件。链接：https://x.com/nikunj/status/2053159569015328953

### Peter Steinberger

### Peter Steinberger

Peter Steinberger is pushing Codex into practical developer workflows. He says he taught Codex to look for social signals when reviewing PRs, and shows Crabbox's improved Windows terminal handling enabling Codex to E2E-fix gifgrep so animated GIFs render in the terminal. Links: https://x.com/steipete/status/2053374981824798751, https://x.com/steipete/status/2053329609064685740

Peter Steinberger 正在把 Codex 推进真实开发工作流。他说自己教 Codex 在 PR review 时关注 social signals；还展示了 Crabbox 改进 Windows terminal handling 后，Codex 可以端到端修好 gifgrep，让 animated GIF 在 terminal 里渲染。链接：https://x.com/steipete/status/2053374981824798751，https://x.com/steipete/status/2053329609064685740

He also notes that the latest spogo Spotify CLI is faster and that "codex is my dj now," with a pointer to a YouTube-to-Sonos tool. Link: https://x.com/steipete/status/2053310800773685600

他还提到最新版 spogo Spotify CLI 更快了，并说“codex is my dj now”，同时附了一个 YouTube-to-Sonos 工具。链接：https://x.com/steipete/status/2053310800773685600

### Dan Shipper

### Dan Shipper

Dan Shipper pushes back on a genre of AI criticism: showing that a tool can perform poorly is weak science unless the tool is otherwise extremely useful. His point is that failures matter most when they are measured against real capability, not against toy misuse. Links: https://x.com/danshipper/status/2053203284165337237, https://x.com/danshipper/status/2053199393658937423

Dan Shipper 反驳了一类 AI 批评：证明一个工具可以表现很差，是最低级的 science 和 journalism，除非这个工具本身确实非常有用。他的重点是，失败当然重要，但应该放在真实能力背景下衡量，而不是玩具式误用。链接：https://x.com/danshipper/status/2053203284165337237，https://x.com/danshipper/status/2053199393658937423

On Mythos, he argues that benchmarks do not measure model capability alone. They measure capability after skilled humans have found prompts that let the model's capability appear, and that human work still looks very much like a job. Link: https://x.com/danshipper/status/2053191885116571935

谈到 Mythos，他认为 benchmark 并不只测模型能力，还测“人类找到能让模型能力显现的 prompt”之后的能力。这个人类工作并不 trivial，而且看起来仍然非常像一份工作。链接：https://x.com/danshipper/status/2053191885116571935

### Sam Altman

### Sam Altman

Sam Altman gives the most compact case for agent optimism: kick off a bunch of Codex tasks, run around outside with his kid, then come back at naptime to completed work. That is the everyday promise of agents: less spectacle, more parallel progress while life continues. Link: https://x.com/sama/status/2053191344999604409

Sam Altman 用很短的一句话概括了 agent 乐观主义：启动一堆 Codex tasks，带孩子在阳光下跑一跑，午睡时间回来发现任务都完成了。这就是 agent 的日常承诺：少一点戏剧性，多一点生活继续时的并行进展。链接：https://x.com/sama/status/2053191344999604409

He also jokes about "5.5" as an "autistic genius" with strange naming taste. The feed does not provide more context, so the useful signal is mostly tone around model personality and capability. Links: https://x.com/sama/status/2053192920933777486, https://x.com/sama/status/2053192407664259251

他还调侃“5.5”是一个有奇怪命名品味的“autistic genius”。feed 没有更多上下文，所以可用信号主要是他对模型个性和能力的语气。链接：https://x.com/sama/status/2053192920933777486，https://x.com/sama/status/2053192407664259251

## Podcast
### Training Data: ElevenLabs' Mati Staniszewski: How Voice Becomes the Interface for Everything

### Training Data：ElevenLabs' Mati Staniszewski: How Voice Becomes the Interface for Everything

The Takeaway: ElevenLabs' real bet is not just better text-to-speech, but voice as the default interface for translation, agents, education, public services, and eventually richer audio intelligence.

核心 takeaway：ElevenLabs 真正押注的不只是更好的 text-to-speech，而是把 voice 变成翻译、agents、教育、公共服务，以及未来更丰富 audio intelligence 的默认交互层。

Mati Staniszewski traces ElevenLabs back to a very specific frustration: growing up in Poland, foreign films were often narrated by one flat voice for every character. That made the company thesis concrete: people should be able to speak any language with the same emotion and intonation. The company started in audio partly because it was overlooked in 2022, when crypto and metaverse still absorbed much of the industry's attention and audio frontier models required less compute than giant text or image models.

Mati Staniszewski 把 ElevenLabs 的起点追溯到一个非常具体的挫败感：在 Poland 长大时，外国电影常常由同一个平板声音给所有角色配旁白。这让公司的 thesis 变得很具体：人应该能用同样的情绪和语调说任何语言。ElevenLabs 选择 audio，也因为 2022 年这个领域被低估了，当时 crypto 和 metaverse 仍然吸走大量注意力，而 audio frontier model 的 compute 要求也比大型 text 或 image model 更低。

The most interesting company-building detail is organizational: ElevenLabs keeps teams under roughly ten people and embeds engineers even in non-engineering teams like people, legal, go-to-market, and ops. That matters more in a vibe-coding world because non-technical teams can generate software-shaped work, but still need strong review for security, infrastructure, and business correctness.

最有意思的公司建设细节是组织方式：ElevenLabs 把团队维持在大约十人以内，并把 engineer 嵌入 people、legal、go-to-market、ops 等非工程团队。在 vibe coding 世界里，这一点更重要，因为非技术团队也能生成“像软件一样”的东西，但涉及 security、infrastructure 和业务正确性时仍然需要强 review。

On voice agents, Staniszewski thinks customer support is only the obvious beachhead. The more overlooked opportunities are revenue workflows, citizen services, healthcare, and education. He points to use cases like restaurants updating opening hours, telecom inbound sales, Ukraine government information access, and interactive Masterclass-style learning. The next frontier is emotional intelligence: agents that notice stress, excitement, or pace and respond with the right tone. Link: https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

谈到 voice agents，Staniszewski 认为 customer support 只是最显眼的 beachhead。更容易被忽视的机会在 revenue workflow、citizen services、healthcare 和 education。他提到的场景包括餐厅更新营业时间、telecom inbound sales、Ukraine 政府信息访问，以及 Masterclass 式互动学习。下一阶段前沿是 emotional intelligence：agent 能识别压力、兴奋或语速，并用合适语气回应。链接：https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

## Blog
### Anthropic Engineering: An update on recent Claude Code quality reports

### Anthropic Engineering：An update on recent Claude Code quality reports

Anthropic's postmortem says recent Claude degradation reports came from three product-layer changes, not the API or inference layer. The resolved issues affected Claude Code, Claude Agent SDK, and Claude Cowork, and were fixed by April 20 in v2.1.116.

Anthropic 的 postmortem 表示，近期 Claude 质量下降报告来自三处产品层变化，而不是 API 或 inference layer。受影响的是 Claude Code、Claude Agent SDK 和 Claude Cowork，问题已在 4 月 20 日的 v2.1.116 中修复。

The first mistake was changing Claude Code's default reasoning effort from high to medium on March 4 to reduce long latency. Anthropic now says that was the wrong tradeoff and reverted it on April 7. The second was a March 26 bug in clearing old thinking sections after idle sessions: instead of clearing once, the broken flag kept clearing thinking every turn, causing forgetfulness, repetition, odd tool choices, and cache misses. The third was a system prompt verbosity limit shipped with Opus 4.7 that later showed a 3% drop on a broader eval and was reverted on April 20.

第一个错误是 3 月 4 日把 Claude Code 默认 reasoning effort 从 high 改成 medium，以降低长延迟。Anthropic 现在承认这是错误 tradeoff，并在 4 月 7 日回滚。第二个是 3 月 26 日清理 idle session 旧 thinking sections 的 bug：本应只清理一次，却在之后每一轮都持续清理，导致遗忘、重复、奇怪工具选择和 cache miss。第三个是随 Opus 4.7 发布的系统 prompt verbosity 限制，后来在更宽 eval 中显示 3% drop，并于 4 月 20 日回滚。

The practical lesson is familiar but important: agent harness changes, prompt changes, and context-management flags can degrade capability even when the underlying model is fine. Anthropic says it will broaden per-model evals, run ablations for prompt changes, use more public-build dogfooding, and improve internal Code Review with more repo context. Link: https://www.anthropic.com/engineering/april-23-postmortem

实际教训很清楚：agent harness、prompt 和 context-management flag 的变化，都可能在底层模型没问题时降低能力。Anthropic 表示会扩大 per-model evals，为 prompt changes 做 ablation，更多使用 public build dogfooding，并用更多 repo context 改进内部 Code Review。链接：https://www.anthropic.com/engineering/april-23-postmortem

### Claude Blog: New connectors in Claude for everyday life

### Claude Blog：New connectors in Claude for everyday life

Claude is expanding connectors beyond work tools into daily-life apps including AllTrails, Audible, Booking.com, Instacart, Credit Karma, TurboTax, Resy, Spotify, StubHub, Taskrabbit, Tripadvisor, Uber, Uber Eats, and Viator. Claude's connector directory has grown to more than 200 connectors since July 2025.

Claude 正在把 connectors 从工作工具扩展到日常生活 app，包括 AllTrails、Audible、Booking.com、Instacart、Credit Karma、TurboTax、Resy、Spotify、StubHub、Taskrabbit、Tripadvisor、Uber、Uber Eats 和 Viator。自 2025 年 7 月以来，Claude connector directory 已经增长到 200 多个 connectors。

The product shift is that connectors now surface dynamically inside conversations. If a user asks for a hike, Claude can suggest AllTrails; if multiple apps could help, Claude shows options and lets the user choose. Anthropic emphasizes that Claude remains ad-free, without paid placements or sponsored answers, and that connected app data is not used to train models. For builders, the interesting move is that app discovery becomes contextual: the interface is no longer just a directory, but a conversation that knows when a connector is useful. Link: https://claude.com/blog/connectors-for-everyday-life

产品变化在于 connectors 现在会在对话中动态出现。用户问徒步路线时，Claude 可以推荐 AllTrails；如果多个 app 都能帮忙，Claude 会展示选项让用户选择。Anthropic 强调 Claude 仍然无广告，没有 paid placements 或 sponsored answers，连接 app 的数据也不会用于训练模型。对 builders 来说，真正有意思的是 app discovery 正在变成 contextual：入口不只是目录，而是一个知道何时该调用 connector 的对话界面。链接：https://claude.com/blog/connectors-for-everyday-life

### Claude Blog: Built-in memory for Claude Managed Agents

### Claude Blog：Built-in memory for Claude Managed Agents

Memory for Claude Managed Agents is now in public beta. The design is filesystem-based: memories are files that agents can read, write, export, audit, roll back, and redact through the API. That makes memory feel less like a black-box feature and more like production infrastructure.

Claude Managed Agents 的 memory 现在进入 public beta。设计是 filesystem-based：memories 是文件，agent 可以通过 API 读取、写入、导出、审计、回滚和 redact。这让 memory 更像生产基础设施，而不是黑箱功能。

The target use case is long-running agents that improve across sessions and share what they learn. Anthropic says memory is scoped with permissions and audit logs, and can support org-wide read-only stores as well as per-user writable stores. The customer examples are concrete: Netflix agents carry cross-session context, Rakuten reports first-pass errors cut by 97%, Wisedocs speeds document verification by 30%, and Ando uses memory for workplace messaging behavior. Link: https://claude.com/blog/claude-managed-agents-memory

目标场景是跨 session 变聪明、并能共享经验的 long-running agents。Anthropic 表示 memory 带有权限 scope 和 audit logs，可以支持组织级 read-only store，也可以支持按用户隔离的 writable store。客户例子也很具体：Netflix agents 携带跨 session context，Rakuten 称 first-pass errors 降低 97%，Wisedocs 文档验证速度提升 30%，Ando 则用 memory 学习 workplace messaging 行为。链接：https://claude.com/blog/claude-managed-agents-memory

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
