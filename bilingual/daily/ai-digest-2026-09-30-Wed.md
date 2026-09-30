[English](../../en/daily/ai-digest-2026-09-30-Wed.md) | [中文](../../zh/daily/ai-digest-2026-09-30-Wed.md) | [Bilingual](./ai-digest-2026-09-30-Wed.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

**1. OpenAI opens the "Dots" era.** Sam Altman announced that "Dots are here," describing a new way to use AI that works 24/7 for you and gets more of your time and attention back to work at a higher level. He also said 6.1 Sol is priced at one fifth of Astra with a 95% cache read discount and is an extremely capable model, and that Ultrafast is so fast he never wants to go back. Thibault Sottiaux, who works on Codex and ChatGPT at OpenAI, expects a few million dots online within days across a large and diverse community, says his own experience improved after two to three days of teaching his dot about his preferences and what is on his mind, reports that dots learn quickly to be useful and can take on surprisingly ambitious tasks on their own, and says OpenAI is learning from how people use their primary dot before releasing the ability to create an entire team of them. ([Sam Altman on Dots](https://x.com/sama/status/2104995014208258235), [Sam Altman on 6.1 Sol](https://x.com/sama/status/2104994395980533804), [Sam Altman on Ultrafast](https://x.com/sama/status/2104994601140711896), [Thibault Sottiaux](https://x.com/thsottiaux/status/2105105086506840421))

**1. OpenAI 开启 Dots 时代。**Sam Altman 宣布「Dots are here」，他说这是一种 24/7 为你工作的新 AI 用法，能把你的时间和注意力还给更高层的工作。他还说 6.1 Sol 的价格只有 Astra 的五分之一，cache read 有 95% 的折扣，是极其能打的模型；Ultrafast 快到他再也不想回去用别的方式。OpenAI 负责 Codex 和 ChatGPT 的 Thibault Sottiaux 预计几天内就会有数百万个 dot 上线，横跨一个庞大而多元的社区；他说自己在用了两三天、教过 dot 一些自己的偏好和脑子里在想的事之后，体验明显上了一个台阶；dot 学得很快，能变得非常有用，也能独立接下出人意料的大任务；OpenAI 正在观察大家怎么用主 dot，之后才会放出创建一整支 dot 团队的能力。（[Sam Altman 谈 Dots](https://x.com/sama/status/2104995014208258235)、[Sam Altman 谈 6.1 Sol](https://x.com/sama/status/2104994395980533804)、[Sam Altman 谈 Ultrafast](https://x.com/sama/status/2104994601140711896)、[Thibault Sottiaux](https://x.com/thsottiaux/status/2105105086506840421)）

**2. Claude in Chrome goes generally available, wrapped in prompt-injection defenses.** Anthropic's Claude Blog says Claude in Chrome is now generally available on every paid Claude plan, and Claude can now take actions autonomously in the browser instead of needing approval for every one, with a safety classifier validating each action before it runs. The post lays out the layered safeguards: training against a growing library of prompt-injection attacks, probes that screen the web content reaching Claude through tool results, and pre-action verification that blocks a step when it does not match the original request. On a current evaluation built from stronger, professional red-team attacks, attacks that reached the model succeeded 17.6% of the time against Opus 4.5 and 3.8% against Opus 5 before additional safeguards; from Opus 4.8 onward, with probes plus the safety classifier, no attacks succeeded against Claude Sonnet 5, Claude Opus 5, or Claude Mythos 5, and Fable 5 saw a 0.3% attack success rate. ([Claude Blog](https://claude.com/blog/claude-in-chrome-generally-available))

**2. Claude in Chrome 正式可用，并且带着一整套 prompt injection 防护。**Anthropic 的 Claude Blog 说，Claude in Chrome 现在已在所有付费 Claude 套餐中正式可用，Claude 可以在浏览器里自主执行操作，不再需要对每一步都请求批准；每个动作执行前都会有一个安全分类器做校验。文章列出了层层防护：让 Claude 针对一个不断扩充的 prompt injection 攻击库进行训练；用 probe 在 Claude 通过工具结果读到网页内容之前先做筛查；在执行前比对动作是否匹配最初的需求，不匹配就拦下。在最新一轮用专业红队更强攻击构建的评测中，触及模型的攻击对 Opus 4.5 的成功率是 17.6%，对 Opus 5 是 3.8%，这还是在没有叠加额外防护的情况下；从 Opus 4.8 往后，在 probe 加安全分类器的情况下，Claude Sonnet 5、Claude Opus 5 和 Claude Mythos 5 都没有被攻破，Fable 5 的攻击成功率为 0.3%。（[Claude Blog](https://claude.com/blog/claude-in-chrome-generally-available)）

**3. The industry wants shared safety standards now and regulation later.** Box CEO Aaron Levie says it is entirely plausible that the AI industry can deal with safety and security through a set of shared standards and practices for the foreseeable future, and that collective alignment is still possible. He acknowledges that at some point in capability progress there will inevitably be greater oversight, testing, and layers of liability and regulation, but argues the industry is still in a phase where it can align on these efforts collectively. He calls it awesome that the effort came together so quickly and that the whole industry supported progress without reducing competition, and says it points to a much brighter future for AI. ([Aaron Levie](https://x.com/levie/status/2105111520913039530))

**3. 行业现在想用共享标准做安全，监管留到以后。**Box CEO Aaron Levie 说，在可预见的未来，AI 行业完全有可能通过一套共享的标准与实践来处理安全和安保问题，集体达成一致仍然可行。他也承认，随着能力继续进步，迟早会出现更强的监督、测试以及层层责任与监管，但行业现在还处在一个完全可以靠集体协作对齐这些努力的阶段。他说这件事这么快就能推进、整个行业都愿意在不削弱竞争的前提下支持进步，非常棒，也预示着 AI 的未来会光明得多。（[Aaron Levie](https://x.com/levie/status/2105111520913039530)）

**4. The talent market has gone mercenary, and moats are fracturing.** FPV Ventures partner Nikunj Kothari says it is harder than ever to find missionaries: people are leaving the companies they co-founded for the "obvious" winners, public CEOs are leaving for positions at labs, founders are leaving and rejoining neolabs at a moment's notice, and some companies get "Windsurf-ed" so that only chosen people join the future company. When those people leave on short notice, he says, the remaining company usually becomes a shell, and it feels like a great time to be a mercenary. On defensibility, he argues the moat is no longer one thing, especially at the app layer, where the harness amounts to a thousand small things done well and much of it is invisible, so the real edge is a company's combined product, tech, and GTM advantage, and ultimately the founders' speed of execution and ability to adapt in markets with no blue ocean left. ([Nikunj Kothari](https://x.com/nikunj/status/2105148927599423752))

**4. 人才市场正在雇佣兵化，护城河也在碎裂。**FPV Ventures 合伙人 Nikunj Kothari 说，现在想找到「传教士」比以往任何时候都难：有人离开自己联合创办的公司去加入那些「显而易见」的赢家，上市公司 CEO 离职去实验室任职，创始人说走就走又回到 neolab，有的公司被「Windsurf 化」，只有被挑中的人才能加入新公司。他说，当这些人说走就走时，留下来的公司通常只剩下一个空壳，现在做雇佣兵实在是个好时候。关于护城河，他认为护城河不再只是某一样东西，尤其在应用层，harness 是一千件小事都做好，而且其中很多是看不见的，真正的优势是一家公司在产品、技术和 GTM 上合起来的能力，最终还是要回到创始人身上，也就是他们的执行速度，以及在已经没有蓝海的市场里随机应变的能力。（[Nikunj Kothari](https://x.com/nikunj/status/2105148927599423752)）

**5. Agent infrastructure keeps compounding.** Vercel CEO Guillermo Rauch says the AI SDK has hit 30 million weekly downloads and showed a milestone video he says was one-shotted with fframes plus Opus, written in Rust and rendered on the GPU. Replit CEO Amjad Masad points to a write-up on designing and building a harness that reaches frontier performance at a fraction of the cost. Y Combinator president and CEO Garry Tan merged a version of OpenClaw's test-audit skill into GStack, calling test bloat a real problem now that intelligence is on tap. ([Guillermo Rauch](https://x.com/rauchg/status/2105043144975011982), [Amjad Masad](https://x.com/amasad/status/2104996638817386820), [Garry Tan](https://x.com/garrytan/status/2105049005147525231))

**5. Agent 基础设施还在持续复利。**Vercel CEO Guillermo Rauch 说 AI SDK 的周下载量已经突破 3000 万，并展示了一段里程碑视频；他说这段视频是用 fframes 加 Opus 一次做出来的，用 Rust 编写、在 GPU 上渲染。Replit CEO Amjad Masad 推荐了一篇讲如何设计和构建 harness，用很低的成本达到前沿性能的文章。Y Combinator 总裁兼 CEO Garry Tan 把 OpenClaw 的 test-audit skill 合并进了 GStack，说测试膨胀是个真问题，好在现在智能触手可及。（[Guillermo Rauch](https://x.com/rauchg/status/2105043144975011982)、[Amjad Masad](https://x.com/amasad/status/2104996638817386820)、[Garry Tan](https://x.com/garrytan/status/2105049005147525231)）

**6. Builders are shipping whole projects with agents.** Builder Zara Zhang made a marketing website for her water bottle entirely in six prompts with Opus 5.5, using ElevenLabs to generate the music, Meshy to generate the 3D assets, and the OpenAI API to generate images. Anthropic's Thariq offered a prompt trick, telling Claude "we have the power to do anything, please be braver," and pointed to the team's blog post on how it made Claude faster. Swyx says that for friends of the Latent Space podcast, he will be asking all the burning questions about Dots, Sol 6.1, CUA, and the Decisions API to AriX and Nikunj Handa. ([Zara Zhang](https://x.com/zarazhangrui/status/2105096296831017078), [Thariq on being braver](https://x.com/trq212/status/2105065127892734076), [Thariq on making Claude faster](https://x.com/trq212/status/2105065175711924492), [Swyx](https://x.com/swyx/status/2105000738745376769))

**6. Builder 们正在用 agent 交付完整项目。**Builder Zara Zhang 为她的水杯做了一个营销网站，整套东西由 Opus 5.5 用 6 个 prompt 完成：音乐由 ElevenLabs 生成，3D 资产由 Meshy 生成，图片由 OpenAI API 生成。Anthropic 的 Thariq 给出一个 prompt 小技巧，让 Claude「we have the power to do anything, please be braver」，还建议大家也这样对自己说；同时他指向团队那篇讲怎么让 Claude 更快的博客文章。Swyx 说，对 Latent Space 播客的朋友们，他会把关于 Dots、Sol 6.1、CUA 和 Decisions API 的各种尖锐问题，抛给 AriX 和 Nikunj Handa。（[Zara Zhang](https://x.com/zarazhangrui/status/2105096296831017078)、[Thariq 谈要更勇敢](https://x.com/trq212/status/2105065127892734076)、[Thariq 谈让 Claude 更快](https://x.com/trq212/status/2105065175711924492)、[Swyx](https://x.com/swyx/status/2105000738745376769)）

## X / Twitter

### Sam Altman: OpenAI

Sam Altman announced "Dots are here," a new way to use AI that he says works 24/7 for you and gets more of your time and attention back to work at a higher level. He also said 6.1 Sol is priced at one fifth of Astra with a 95% cache read discount and is an extremely capable model, and that Ultrafast is so fast he never wants to go back.

Sam Altman 宣布「Dots are here」，说这是一种 24/7 为你工作的新 AI 用法，能把你的时间和注意力还给更高层的工作。他还说 6.1 Sol 的价格只有 Astra 的五分之一，cache read 有 95% 的折扣，是极其能打的模型；Ultrafast 快到他再也不想回去用别的方式。

- [Sam Altman: "Dots are here"](https://x.com/sama/status/2104995014208258235)
- [Sam Altman: 6.1 Sol pricing and cache discount](https://x.com/sama/status/2104994395980533804)
- [Sam Altman: Ultrafast](https://x.com/sama/status/2104994601140711896)

### Thibault Sottiaux: Codex and ChatGPT at OpenAI

Thibault Sottiaux says OpenAI will have a few million dots online within days, working on all sorts of things across a diverse and large community. He reports that his own experience improved after two to three days of teaching his dot about his preferences and what is on his mind, that dots learn very quickly to be most useful and can take on surprisingly ambitious tasks on their own, and that OpenAI is learning from how people use their primary dot before releasing the ability to create an entire team of them.

Thibault Sottiaux 说 OpenAI 几天内就会有数百万个 dot 上线，在一个庞大而多元的社区里做各种各样的事。他说自己在用了两三天、教过 dot 一些自己的偏好和脑子里在想的事之后，体验明显上了一个台阶；dot 学得很快，能变得非常有用，也能独立接下出人意料的大任务；OpenAI 正在观察大家怎么用主 dot，之后才会放出创建一整支 dot 团队的能力。

- [Thibault Sottiaux: millions of dots online within days](https://x.com/thsottiaux/status/2105105086506840421)

### Nikunj Kothari: Partner at FPV Ventures

Nikunj Kothari shared two honest thoughts about the market. On people, he says it is harder than ever to find missionaries: people are leaving companies they co-founded for the "obvious" winners, public CEOs are leaving for positions at labs, founders are leaving and rejoining neolabs at a moment's notice, companies are getting "Windsurf-ed" so only chosen people join the future company, and founders are raising tranched valuations without worrying that the next employee will have a 409A that makes early exercising impossible. When people leave on short notice, he says, the remaining company usually becomes a shell, which makes it a great time to be a mercenary. On defensibility, he argues the moat is no longer one thing, especially at the app layer, where the harness is a thousand small things done well and much of it is invisible, so you have to dig into the details to see a company's combined edge across product, tech, and GTM; even then, the real defensibility ends up being the founders, and in them it is speed of execution and the ability to adapt, now that no blue ocean markets are left. He says the current climate is testing his priors and his patience, and that it can feel like everyone is in it to grab the bag rather than care about the legacy of what they want to build. Separately, he suggests that B2B founders who do not want to spend egregious amounts on LinkedIn CPMs can simply aggregate what is trending on X and post it to LinkedIn, which he says is consistently a week or two behind, and jokes that everyone eventually becomes a LinkedInfluencer.

Nikunj Kothari 分享了两点关于当下市场的实话。关于人，他说现在想找到「传教士」比以往任何时候都难：有人离开自己联合创办的公司去加入那些「显而易见」的赢家，上市公司 CEO 离职去实验室任职，创始人说走就走又回到 neolab，有的公司被「Windsurf 化」，只有被挑中的人才能加入新公司，还有创始人在一轮轮抬高的估值里融资，却不去考虑下一位员工拿到的 409A 会不会让提前行权变得不可能。他说，当这些人说走就走时，留下来的公司通常只剩下一个空壳，现在做雇佣兵实在是个好时候。关于护城河，他认为护城河不再只是某一样东西，尤其在应用层，harness 是一千件小事都做好，而且其中很多是看不见的，所以你得深挖细节，才能看出一家公司在产品、技术和 GTM 上的综合优势；但即便看到这些，最终真正的护城河还是创始人，而在创始人身上，护城河就是执行速度和在市场里随机应变的能力，因为现在已经没有蓝海了。他说当下这个环境正在考验他的判断和耐心，也让人感觉大家都在想着捞一笔，而不是在意自己想留下什么。另外他还建议不想在 LinkedIn CPM 上砸大钱的 B2B 创始人，可以直接把 X 上正在流行的话题聚合起来发到 LinkedIn，因为 LinkedIn 总是慢上一两周，他还开玩笑说，每个人最后都会变成 LinkedIn 网红。

- [Nikunj Kothari: missionaries, mercenaries, and defensibility](https://x.com/nikunj/status/2105148927599423752)
- [Nikunj Kothari: reposting X trends on LinkedIn](https://x.com/nikunj/status/2104949147812159672)

### Aaron Levie: CEO of Box

Aaron Levie says it is entirely plausible that the AI industry can deal with safety and security through shared standards and practices for the foreseeable future. He acknowledges that at some point in capability progress there will inevitably be greater oversight, testing, and layers of liability and regulation, but argues the industry is still in a phase where it can align on these efforts collectively. He calls it awesome that the effort came together so quickly and that the whole industry supported progress without reducing competition, and says it points to a much brighter future for AI.

Aaron Levie 说，在可预见的未来，AI 行业完全有可能通过共享的标准与实践来处理安全和安保问题。他承认，随着能力继续进步，迟早会出现更强的监督、测试以及层层责任与监管，但他认为行业现在还处在一个可以靠集体协作对齐这些努力的阶段。他说这件事这么快就能推进、整个行业都愿意在不削弱竞争的前提下支持进步，非常棒，也预示着 AI 的未来会光明得多。

- [Aaron Levie: shared standards now, regulation later](https://x.com/levie/status/2105111520913039530)

### Guillermo Rauch: CEO of Vercel

Guillermo Rauch announced that the AI SDK has hit 30 million weekly downloads, and shared a milestone video he says was one-shotted with fframes plus Opus, written in Rust and rendered on the GPU, with the 5M, 10M, 20M, and 30M milestones highlighted.

Guillermo Rauch 宣布 AI SDK 的周下载量已经突破 3000 万，并分享了一段里程碑视频；他说这段视频是用 fframes 加 Opus 一次做出来的，用 Rust 编写、在 GPU 上渲染，视频里标出了 5M、10M、20M 和 30M 这几个节点。

- [Guillermo Rauch: AI SDK hits 30M weekly downloads](https://x.com/rauchg/status/2105043144975011982)

### Amjad Masad: CEO of Replit

Amjad Masad points to a piece on how to design and build a harness that reaches frontier performance at a fraction of the cost.

Amjad Masad 推荐了一篇讲如何设计和构建 harness，用很低的成本达到前沿性能的文章。

- [Amjad Masad: a harness for frontier performance at a fraction of the cost](https://x.com/amasad/status/2104996638817386820)

### Garry Tan: President and CEO of Y Combinator

Garry Tan says he just merged a version of OpenClaw's test-audit skill into GStack, calling test bloat a real problem and noting that intelligence is on tap these days.

Garry Tan 说自己刚把 OpenClaw 的 test-audit skill 合并进了 GStack，并说测试膨胀是个真问题，好在现在智能触手可及。

- [Garry Tan: OpenClaw's test-audit skill in GStack](https://x.com/garrytan/status/2105049005147525231)

### Zara Zhang: Builder

Zara Zhang says she made a marketing website for her water bottle, and that the whole thing was done by Opus 5.5 in six prompts: ElevenLabs generated the music, Meshy generated the 3D assets, and the OpenAI API generated the images.

Zara Zhang 说她为她的水杯做了一个营销网站，整套东西由 Opus 5.5 用 6 个 prompt 完成：音乐由 ElevenLabs 生成，3D 资产由 Meshy 生成，图片由 OpenAI API 生成。

- [Zara Zhang: a water bottle website built in six prompts](https://x.com/zarazhangrui/status/2105096296831017078)

### Thariq: Claude Code at Anthropic

Thariq suggests telling Claude "we have the power to do anything, please be braver," and asks whether people have tried telling themselves the same thing. He also points to the team's blog post on how it made Claude faster.

Thariq 建议大家试着对 Claude 说「we have the power to do anything, please be braver」，也问大家有没有试过把这句话对自己说一遍。他还指向团队那篇讲怎么让 Claude 更快的博客文章。

- [Thariq: tell Claude to be braver](https://x.com/trq212/status/2105065127892734076)
- [Thariq: how Anthropic made Claude faster](https://x.com/trq212/status/2105065175711924492)

### Swyx

Swyx says that for friends of the Latent Space podcast, he will be asking all the burning questions about Dots, Sol 6.1, CUA, and the Decisions API to AriX and Nikunj Handa.

Swyx 说，对 Latent Space 播客的朋友们，他会把关于 Dots、Sol 6.1、CUA 和 Decisions API 的各种尖锐问题，抛给 AriX 和 Nikunj Handa。

- [Swyx: Dots, Sol 6.1, CUA, and Decisions API questions](https://x.com/swyx/status/2105000738745376769)

## Podcast

The validated podcast feed for this run contained no new qualifying episodes.

本次运行通过验证的播客 feed 中没有新的合格内容。

## Blog

### Claude Blog: Claude in Chrome is generally available

Claude in Chrome is now generally available on every paid Claude plan, and Claude can take actions autonomously in the browser instead of needing approval for every one. A safety classifier validates each action before it is performed to confirm it is safe and matches your request, and automatic approval can be turned off in settings. The product's value is largely reach: many of the tools people use every day connect to Claude, but internal dashboards, legacy systems, and vendor portals do not, and Claude in Chrome can use your existing logins to read and type text, click links, navigate between pages, and fill out forms.

Claude in Chrome 现在已在所有付费 Claude 套餐中正式可用，Claude 可以在浏览器里自主执行操作，不再需要对每一个动作都请求批准。每个动作执行前都会有一个安全分类器做校验，确认它安全且符合你的要求；你也可以在设置里关掉自动批准。这个产品的价值很大程度上在于覆盖范围：很多人每天要用的工具已经连上了 Claude，但内部 dashboard、遗留系统和供应商门户并没有，而 Claude in Chrome 可以用你现有的登录状态读写字、点击链接、在页面之间跳转、填写表单，从而够到这些工具。

Most of the post is about prompt injection, the class of attack where malicious instructions hidden in a website, an email, or a form field try to redirect an agent against the user's wishes. Claude Blog describes three layers of defense: Claude is trained against a growing library of attacks sourced from internal automated attackers, external red-teamers, and real-world monitoring; probes screen the content reaching Claude through tool results and warn it to treat suspicious content cautiously; and a classifier reviews each action against the original request and blocks anything that does not match. On a current evaluation using stronger attacks sourced by professional red-teamers, attacks that reached the model succeeded 17.6% of the time against Opus 4.5 and 3.8% against Opus 5 before additional safeguards, while with probes plus the safety classifier no attacks succeeded against Claude Sonnet 5, Claude Opus 5, or Claude Mythos 5, and Fable 5 saw a 0.3% attack success rate, with all successful breaks manually verified as low severity. The post calls prompt injection a moving target and says the team will keep investing in attack discovery, red-teaming, and stronger classifiers. On Enterprise plans, admins can manage Claude in Chrome in Organization Settings and limit it to approved domains, and it does not run on other Chromium browsers or on mobile yet.

文章大部分篇幅在讲 prompt injection，也就是把恶意指令藏在网页、邮件或表单字段里，试图让 agent 违背用户意愿行事的攻击。Claude Blog 描述了三层防护：让 Claude 针对一个不断扩充的攻击库进行训练，这些攻击来自内部自动化攻击系统、外部红队和真实世界的监控；用 probe 先筛查通过工具结果进入 Claude 的内容，一旦发现可疑就提醒 Claude 提高警惕；再用分类器把每个动作和最初的需求做比对，不匹配就拦下。在最新一轮用专业红队更强攻击构建的评测中，触及模型的攻击对 Opus 4.5 的成功率是 17.6%，对 Opus 5 是 3.8%，这还是在没有叠加额外防护的情况下；而在 probe 加安全分类器的情况下，Claude Sonnet 5、Claude Opus 5 和 Claude Mythos 5 都没有被攻破，Fable 5 的攻击成功率为 0.3%，所有成功突破都经过人工核实，属于低严重度场景。文章说 prompt injection 仍然是个移动靶，团队会继续投入攻击发现、红队和更强的分类器。在企业版套餐里，管理员可以在 Organization Settings 里管理 Claude in Chrome，并把它限制在已批准的域名内；它目前还不能在其他 Chromium 浏览器或移动端上运行。

- [Claude Blog: Claude in Chrome is generally available](https://claude.com/blog/claude-in-chrome-generally-available)

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
