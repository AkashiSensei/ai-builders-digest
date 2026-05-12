[English](../../en/daily/ai-digest-2026-05-13-Wed.md) | [中文](../../zh/daily/ai-digest-2026-05-13-Wed.md) | [Bilingual](./ai-digest-2026-05-13-Wed.md)

---

# AI Builders Digest

## Reader's Briefing / 导读
AI output is moving from plain text toward richer visual artifacts. Andrej Karpathy argues that HTML is already a practical next default for LLM responses because humans absorb visual structure faster than raw prose.
AI 输出正在从纯文本走向更丰富的视觉 artifact。Andrej Karpathy 认为，让 LLM 直接生成 HTML 已经是很实用的新默认，因为人类吸收视觉结构比阅读长文本更快。

Agent work is becoming operational infrastructure. Cat Wu's Claude agents control plane points to a future where multiple coding agents are registered, monitored, and steered from a terminal workspace.
Agent 工作正在变成一种运行时基础设施。Cat Wu 提到的 Claude agents control plane 指向一个方向：多个 coding agents 会被注册、监控，并在 terminal workspace 中统一调度。

AI adoption in old-line service businesses depends less on demo magic than on ownership, workflow mapping, data cleanup, and change management. Long Lake's Alexander Taubman frames AI buyouts as an operating model, not a software resale strategy.
老牌服务业里的 AI adoption，靠的不是 demo 魔法，而是 ownership、workflow mapping、data cleanup 和 change management。Long Lake 的 Alexander Taubman 把 AI buyout 描述成一种 operating model，而不是转卖软件。

The strongest AI roll-up thesis is growth, not labor cutting. Long Lake says AI lets labor-intensive businesses handle more customers with existing teams, improve retention, and make local services behave more like software companies.
最强的 AI roll-up 叙事不是裁员，而是增长。Long Lake 认为，AI 可以让劳动密集型企业用现有团队服务更多客户、提高留存，并让本地服务业更像软件公司一样增长。

There were no new blog posts in today's feed, so the durable signal comes from X and the No Priors interview: builders are converging on AI as a practical interface, workflow, and operating leverage layer.
今天的 feed 没有新 blog posts，所以主要信号来自 X 和 No Priors 访谈：builders 正在把 AI 当作实际的 interface、workflow 和 operating leverage layer。

## X / Twitter
### Andrej Karpathy

Former Tesla AI director and OpenAI founding team member Andrej Karpathy argued that asking an LLM to "structure your response as HTML" is a surprisingly strong current interface pattern. His larger point is that audio may be the natural human input to AI, but vision is the preferred output: raw text gives way to markdown, then HTML, then eventually interactive neural video or simulations. The near-term takeaway is simple: before waiting for futuristic interfaces, try making models produce richer browser-native artifacts today.

前 Tesla AI director、OpenAI founding team member Andrej Karpathy 认为，让 LLM 在回答末尾按 HTML 组织输出，是一个出人意料地好用的当前 interface pattern。他更大的观点是：audio 可能是人类给 AI 输入的自然方式，但 vision 才是更适合人类接收的输出；raw text 会走向 markdown，再走向 HTML，最终可能走向 interactive neural video 或 simulations。短期 takeaway 很直接：不用等未来界面，现在就可以让模型生成更丰富的 browser-native artifacts。

Links: https://x.com/karpathy/status/2053872850101285137

链接: https://x.com/karpathy/status/2053872850101285137

### Swyx

Swyx highlighted a realtime AI demo from Thinking Machines and said the bar for "realtime" interaction just moved. The feed does not include the quoted post's full content, so the safe signal is about expectations: builders are watching latency and responsiveness become product-defining qualities, not just infrastructure metrics.

Swyx 提到 Thinking Machines 的一个 realtime AI demo，并说大家对 "realtime" interaction 的标准刚被明显抬高。Feed 没有包含被引用帖子的完整内容，所以可靠信号在于预期变化：builders 正在把 latency 和 responsiveness 看成产品定义因素，而不只是 infrastructure metrics。

Links: https://x.com/swyx/status/2053960011748098462, https://x.com/swyx/status/2054057995492061651, https://x.com/swyx/status/2053989439945498934

链接: https://x.com/swyx/status/2053960011748098462, https://x.com/swyx/status/2054057995492061651, https://x.com/swyx/status/2053989439945498934

### Kevin Weil

OpenAI VP Science Kevin Weil pointed followers to a post by tdrobbo and called it "gold." The feed does not include enough quoted-post context to extract the underlying argument, so there is no substantive product or research takeaway beyond the pointer itself.

OpenAI VP Science Kevin Weil 转发了 tdrobbo 的一条帖子，并称其为 "gold"。Feed 没有提供足够的 quoted-post context 来判断具体论点，所以除了这个指向本身，没有可可靠提炼的产品或研究 takeaway。

Links: https://x.com/kevinweil/status/2054063509869306204

链接: https://x.com/kevinweil/status/2054063509869306204

### Peter Yang

Roblox product leader Peter Yang's most useful signal was cultural rather than technical: everyone loves shipping. The surrounding posts were light, including a complaint about Bay Area kid attractions and a joke about AI feeling slow, but they fit his recurring practical-AI lens: usefulness still depends on whether tools help people get from idea to shipped artifact without friction.

Roblox product leader Peter Yang 最有用的信号偏文化而不是技术：everyone loves shipping。其他帖子比较轻，包括吐槽 Bay Area 儿童娱乐场所和开玩笑说 AI 太慢，但它们仍然贴近他一贯的 practical-AI 视角：工具是否有用，最终取决于它能不能减少从 idea 到 shipped artifact 的摩擦。

Links: https://x.com/petergyang/status/2054036027791294696, https://x.com/petergyang/status/2054036372215025962, https://x.com/petergyang/status/2054038194547777993

链接: https://x.com/petergyang/status/2054036027791294696, https://x.com/petergyang/status/2054036372215025962, https://x.com/petergyang/status/2054038194547777993

### Amanda Askell

Anthropic philosopher and ethicist Amanda Askell shared that Claude's constitution is now available as an audiobook, with faster listening options planned. It is a small but meaningful accessibility move: AI governance documents are usually treated as dense reference text, while making them listenable invites more people to engage with the rules and values behind a deployed model.

Anthropic philosopher and ethicist Amanda Askell 分享说，Claude 的 constitution 现在可以用 audiobook 形式收听，并计划加入倍速选项。这是一个小但有意义的 accessibility 动作：AI governance documents 通常被当作密集参考文本，而可收听版本能让更多人接触部署模型背后的规则和价值观。

Links: https://x.com/AmandaAskell/status/2054010971765805486

链接: https://x.com/AmandaAskell/status/2054010971765805486

### Cat Wu

Anthropic's Cat Wu described `claude agents` as a terminal control plane for Claude Code agents. The workflow is agent-native: run the control plane from a root code directory, then register individual CLI sessions into it so multiple agents can be managed from one place. She also asked for feedback on Claude Code in the cloud across Desktop, iOS, and Android, which suggests Anthropic is pushing coding agents beyond a single local terminal into a cross-device work surface.

Anthropic 的 Cat Wu 把 `claude agents` 描述为 Claude Code agents 的 terminal control plane。这个 workflow 很 agent-native：在 root code directory 里运行 control plane，再把各个 CLI sessions 注册进去，于是多个 agents 可以在一个地方统一管理。她还征集 Claude Code in the cloud 在 Desktop、iOS 和 Android 上的反馈，说明 Anthropic 正在把 coding agents 从单一本地 terminal 推向跨设备 work surface。

Links: https://x.com/_catwu/status/2053999857799672111, https://x.com/_catwu/status/2053873949646405879, https://x.com/_catwu/status/2053874851824419056

链接: https://x.com/_catwu/status/2053999857799672111, https://x.com/_catwu/status/2053873949646405879, https://x.com/_catwu/status/2053874851824419056

## Podcast
### No Priors: Amex Global Business Travel: The World’s First AI Take Private with Long Lake CEO Alexander Taubman

The Takeaway: Long Lake is treating AI as a full operating model for buying and growing service businesses, not as a software layer bolted onto them.

The Takeaway: Long Lake 正在把 AI 当作收购并增长服务业公司的完整 operating model，而不是给公司外接一层软件。

Long Lake cofounder and CEO Alexander Taubman says the firm's Nexus platform sits between models, data sources, business workflows, and employee tools. Roughly 80% of the infrastructure is shared across verticals, but the hard work is local: map workflows, clean data, integrate systems, and sit with teams long enough to understand the real pain points. That is why Long Lake prefers ownership over selling software. If engineers view field employees as customers and can change processes directly, the feedback loop is tighter than a vendor relationship.

Long Lake cofounder and CEO Alexander Taubman 说，公司的 Nexus platform 位于 models、data sources、business workflows 和员工工具之间。大约 80% 的基础设施可以跨 verticals 共享，但真正困难的工作是本地化：map workflows、clean data、integrate systems，并和一线团队坐在一起，直到理解真实 pain points。这也是 Long Lake 更偏好 ownership 而不是卖软件的原因。如果 engineers 把 field employees 当作 customers，并且可以直接改变流程，反馈回路就会比 vendor relationship 更紧。

The counterintuitive part is that Taubman does not frame AI buyouts as headcount reduction. He says the company is "not focused on cost saving" and is instead focused on growth and customer experience. In labor-heavy services, growth usually means hiring, training, and managing proportionally more people. If AI makes existing teams 30% or 40% more efficient, the business starts to grow with software-like incremental margins, which changes how aggressively it can pursue customers.

反直觉的是，Taubman 并没有把 AI buyout 描述成裁员工具。他说公司 "not focused on cost saving"，而是专注于 growth 和 customer experience。在劳动密集型服务业里，增长通常意味着按比例招聘、培训和管理更多人。如果 AI 让现有团队效率提升 30% 或 40%，企业就会开始以接近软件公司的 incremental margins 增长，这会改变它追求客户增长的力度。

The Amex Global Business Travel deal is the flagship version of that thesis: a 111-year-old corporate travel platform, a $6.3 billion proposed take-private, and a plan to double down on existing AI transformation. Taubman's picture is not an autonomous travel bot replacing the company. It is a travel counselor with AI superpowers, backed by an owner willing to do the organizational work.

Amex Global Business Travel 交易是这个 thesis 的旗舰版本：一家 111 年历史的 corporate travel platform，一笔拟议中的 $6.3 billion take-private，以及继续加码现有 AI transformation 的计划。Taubman 描述的不是一个 autonomous travel bot 替代公司，而是拥有 AI superpowers 的 travel counselor，并由一个愿意做组织变革工作的 owner 支撑。

Links: https://www.youtube.com/watch?v=g5TWnUjbeFM

链接: https://www.youtube.com/watch?v=g5TWnUjbeFM

## Blog
No new blog posts in today's feed.

今天的 feed 没有新 blog posts。

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
