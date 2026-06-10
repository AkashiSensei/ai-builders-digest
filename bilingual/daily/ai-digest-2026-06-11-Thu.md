[English](../../en/daily/ai-digest-2026-06-11-Thu.md) | [中文](../../zh/daily/ai-digest-2026-06-11-Thu.md) | [Bilingual](./ai-digest-2026-06-11-Thu.md)

---

# AI Builders Digest

## Reader's Briefing / 导读

Claude Fable 5 and the restricted Mythos 5 dominate the builder conversation, with Anthropic-side users framing the release as a step change for long coding sessions, review loops, and more ambitious agent tasks.
Claude Fable 5 与受限开放的 Mythos 5 是本期最强主线。Anthropic 相关 builder 把它描述为长程编码、代码审查、自验证循环和更大胆 agent 任务上的阶跃式提升。

Coding agents are becoming orchestration surfaces rather than single prompts: builders are discussing Codex /goal, nested loops, phone-based workflows, controller-like interfaces, and self-verification routines.
编程智能体正在从“单次 prompt”变成编排界面：大家在讨论 Codex /goal、嵌套循环、手机工作流、控制器式操作，以及让模型自我校验的例程。

The demand curve for software is moving up as models make bespoke tools cheaper, from one-shot websites and games to code review, custom dashboards, and larger test suites.
软件需求曲线正在被模型能力抬高。更便宜的定制软件让一次性网站、小游戏、代码审查、专用仪表盘和大规模测试套件都变得更自然。

AI infrastructure is getting more operational: Vercel is adding budgeted AI Gateway keys, Replit is discounting Claude Mythos access, and builders are separating individual subscription habits from enterprise API-cost discipline.
AI 基础设施开始进入运营细节：Vercel 增加带预算的 AI Gateway key，Replit 折扣接入 Claude Mythos，builder 也在区分个人订阅习惯与企业 API 成本纪律。

Adoption barriers are shifting from interface design to imagination and context. Several posts argue that chat is easy, but users still need examples, private business reality, and clear tasks before agents become broadly useful.
采用门槛正在从界面转向想象力与上下文。多条动态指出，聊天界面已经足够简单，但用户仍需要案例、私有业务现实和清晰任务，agent 才能真正发挥作用。

## X / Twitter

### Andrej Karpathy (@karpathy)
- [Tweet / 推文](https://x.com/karpathy/status/2064409694761054332) (20439 likes, 1871 reposts, 930 replies): This is a super exciting release - Claude Fable 5 is the same underlying model as Mythos but with added safeguards. The benchmarks are great and it's SOTA on everything by a margin but I'll add that *qualitatively* also, this is a major-version-bump-deserving step change forward (imo of the same order as Claude 4.5 was in November), peaking especially for long problem-solving sessions on very difficult problems. You can give it a lot more ambitious tasks than what you're used to, the model "gets it" and it will just go, and it's never felt this tempting to stop looking at the code at all (but don't do this in prod!). The model still has quirks that people will run into and the safeguards are configured to be a little too trigger happy for launch, which can hopefully be tuned over time.

I feel a lot of things changing as working software increasingly comes out on a tap. The Jevon's paradox kicks in and I feel my own demand for software growing substantially. You can ask for anything - explainers, visualizers, dashboards, bespoke single-use apps (e.g. a full wandb that is hyper-specific just for your project), you can 10X your test suite, auto-optimize code, run giant research projects with custom HTML for the results, anything! "Free your mind" (Matrix ref). Really looking forward to all the things people build!
  
  中文要点：Andrej Karpathy 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。

### Swyx (@swyx)
- [Tweet / 推文](https://x.com/swyx/status/2064492823781789969) (132 likes, 5 reposts, 29 replies): btw insane amounts of alpha in telling claude code to "review my code for issues" on Fable rn while it is not pay per use

be prepared to be in abject horror that you shipped anything to prod without a Fable Check™ first https://t.co/wPCWRO84xV
  
  中文要点：Swyx 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。
- [Tweet / 推文](https://x.com/swyx/status/2064421542503797186) (10 likes, 0 reposts, 2 replies): for those keeping track at home it was 34 days between signing this deal and launching Mythos-class model GA to the world.

https://t.co/J1dZDZcxMu

building on @nvidia stack means you can just do things™.
  
  中文要点：Swyx 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。
- [Tweet / 推文](https://x.com/swyx/status/2064415059003248694) (10 likes, 1 reposts, 4 replies): more charts of other tiers where its less stark 

including the vibe shift chart from https://t.co/Ht1G2fials here https://t.co/wkvnoEmsCK
  
  中文要点：Swyx 分享了一条围绕 AI 产品、模型能力或 builder 工作流的动态：more charts of other tiers where its less stark including the vibe shift chart from https://t.co/Ht1G2fials here https://t.co/wkvnoEmsCK

### Josh Woodward (@joshwoodward)
- [Tweet / 推文](https://x.com/joshwoodward/status/2064509357216428171) (156 likes, 10 reposts, 11 replies): The demand for software is going to be off the charts https://t.co/cw1ojEhxq1
  
  中文要点：Josh Woodward 认为模型能力提升会显著扩大软件需求，开发者会要求更多定制应用、测试、仪表盘和研究工具。

### Boris Cherny (@bcherny)
- [Tweet / 推文](https://x.com/bcherny/status/2064469227499929651) (2168 likes, 56 reposts, 209 replies): Enjoy! https://t.co/X38ItA7vpj
  
  中文要点：Boris Cherny 分享了一条围绕 AI 产品、模型能力或 builder 工作流的动态：Enjoy! https://t.co/X38ItA7vpj
- [Tweet / 推文](https://x.com/bcherny/status/2064431111154053187) (8061 likes, 436 reposts, 492 replies): Fable 5 is the biggest step up I’ve felt in our models since Opus 4.5 back in November. After 4.5 came out I uninstalled my IDE when I realized that I’d been doing 100% of my coding in a terminal for a few weeks. With Fable, it’s felt like Claude has stepped up from being a coding agent to a thought and design partner in building the product. Fable has judgement, taste, and dimensionality in a way that previous models didn’t, leading me to trust it more with the most complex work.

I think the first time I had this realization was when I asked Fable to debug something. It is the first model I have used that was so methodical and precise, taking measurements and adding logs then verifying that it truly fixed the issue before declaring victory.

There’s nothing in claude code’s prompting telling the model to do that, it’s just part of its personality. It really has this “big model smell” that I haven’t felt before.
  
  中文要点：Boris Cherny 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。
- [Tweet / 推文](https://x.com/bcherny/status/2064426115255730578) (2086 likes, 162 reposts, 67 replies): We talk a lot about how important it is to set up self-verification loops. Especially in the age of powerful models that can run for long periods of time, self-verification is a key ingredient that enables the model to run for much longer, delivering a result that is closer to what you intended, so you can do more without having to constantly check in on Claude as it works.

@delba_oliveira gives a great breakdown of what that looks like and why it matters
  
  中文要点：Boris Cherny 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。

### Thibault Sottiaux (@thsottiaux)
- [Tweet / 推文](https://x.com/thsottiaux/status/2064572276180484475) (3499 likes, 85 reposts, 212 replies): I would like to claim my 1% of royalty fees. https://t.co/TkizkUmfZ8
  
  中文要点：Thibault Sottiaux 分享了一条围绕 AI 产品、模型能力或 builder 工作流的动态：I would like to claim my 1% of royalty fees. https://t.co/TkizkUmfZ8
- [Tweet / 推文](https://x.com/thsottiaux/status/2064308436133716008) (496 likes, 9 reposts, 533 replies): Do you use codex /goal occasionally or as your main way to get things done?
  
  中文要点：Thibault Sottiaux 讨论 Codex 或编程智能体的工作方式，包括 /goal、手机使用、控制器式编排，以及非技术用户如何知道该让 agent 做什么。
- [Tweet / 推文](https://x.com/thsottiaux/status/2064307859903447396) (593 likes, 17 reposts, 61 replies): Playing codex like an orchestra. One /goal at a time. https://t.co/vlpypZu20A
  
  中文要点：Thibault Sottiaux 讨论 Codex 或编程智能体的工作方式，包括 /goal、手机使用、控制器式编排，以及非技术用户如何知道该让 agent 做什么。

### Peter Yang (@petergyang)
- [Tweet / 推文](https://x.com/petergyang/status/2064577126385459265) (17 likes, 0 reposts, 7 replies): The browser use is really slowing Fable down for me https://t.co/xa1ijT3KMG
  
  中文要点：Peter Yang 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。
- [Tweet / 推文](https://x.com/petergyang/status/2064563041166090672) (28 likes, 0 reposts, 15 replies): wtf does "big model smell" mean
  
  中文要点：Peter Yang 分享了一条围绕 AI 产品、模型能力或 builder 工作流的动态：wtf does "big model smell" mean
- [Tweet / 推文](https://x.com/petergyang/status/2064550073594446059) (17 likes, 0 reposts, 4 replies): Btw this is the prompt I used:

Build F-Zero: futuristic anti-gravity racer with pseudo-3D track (raycasting or mode-7 style scaling), 3 AI opponents, boost meter that drains health, speed 400-800 km/h with visible sense of speed via track warping and scrolling ground pattern, arrow keys to steer, shift to boost, 3 laps on a looping track with checkpoints. 

Style it neon cyberpunk (dark sky, glowing track edges, chromatic aberration on boost), show HUD with position/lap/speed/health, and make the ship bank into turns. Prioritize feel over realism - the speed sensation is the whole game.
  
  中文要点：Peter Yang 展示 AI 编程和应用发布的轻量实验，包括游戏生成、Replit 模型接入和快速原型。

### Thariq (@trq212)
- [Tweet / 推文](https://x.com/trq212/status/2064521202622960058) (443 likes, 16 reposts, 22 replies): at Code w/ Claude Tokyo! say hi if you see me around https://t.co/BXfvEJVvrf
  
  中文要点：Thariq 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。
- [Tweet / 推文](https://x.com/trq212/status/2064437561930682672) (1225 likes, 53 reposts, 103 replies): Fable is a step-change in models, and I hope it changes how you work with Claude. 

More to come in a series of posts on how it’s reshaped our work, but the TLDR: it’s time to be more ambitious. https://t.co/bWoxbTBShh
  
  中文要点：Thariq 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。

### Amjad Masad (@amasad)
- [Tweet / 推文](https://x.com/amasad/status/2064411791015432466) (493 likes, 26 reposts, 24 replies): Try Claude Mythos at 25% off on Replit. https://t.co/Lq68eRydYI
  
  中文要点：Amjad Masad 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。

### Guillermo Rauch (@rauchg)
- [Tweet / 推文](https://x.com/rauchg/status/2064551967461114111) (127 likes, 9 reposts, 17 replies): Vercel CLI now allows you to:
◾ create AI Gateway API keys
◾ pass a --𝚋𝚞𝚍𝚐𝚎𝚝 to cap their spend
◾ set a --𝚛𝚎𝚏𝚛𝚎𝚜𝚑-𝚙𝚎𝚛𝚒𝚘𝚍 for the quota

Think of it as virtual credit cards for AI tokens 🤖💳 https://t.co/ZOuhwIp7h5 https://t.co/mvIsJkaBfR
  
  中文要点：Guillermo Rauch 分享 AI 基础设施与成本控制动态，尤其是 API key、预算上限、配额周期和企业 token 花费管理。
- [Tweet / 推文](https://x.com/rauchg/status/2064419055726215438) (356 likes, 6 reposts, 22 replies): Opus wrote us a VM and then Mythos verified it https://t.co/oOJlo6aSLI
  
  中文要点：Guillermo Rauch 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。

### Alex Albert (@alexalbert__)
- [Tweet / 推文](https://x.com/alexalbert__/status/2064467657483829441) (2346 likes, 130 reposts, 123 replies): We've reset usage limits across our products! 

For those just starting to test Fable, here's four tips for using it more effectively:
1. Give it bigger, more ambitious tasks than what previous models could handle.
2. Use xhigh/high effort as your default for best performance, med for faster interactive sessions.
3. Rework your skills and CLAUDE.mds. Instructions written for prior models anchor Fable to stale patterns, let it use its own judgment first.
4. Move from providing tasks to providing objectives. Describe what done looks like and how to verify it, then let Fable find the path (/loop and /goal are built for this)
  
  中文要点：Alex Albert 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。
- [Tweet / 推文](https://x.com/alexalbert__/status/2064394410004304003) (3054 likes, 125 reposts, 177 replies): I've been at Anthropic through every model launch. There's been a few cases I can remember of a launch that stands out and marks a step-change in how we use models:
- Claude Opus 3
- Claude Sonnet 3.5
- Claude Opus 4.5

And now Claude Fable 5.

With Fable, the model stopped feeling like a tool I direct and started feeling more like something I collaborate with.
  
  中文要点：Alex Albert 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。

### Aaron Levie (@levie)
- [Tweet / 推文](https://x.com/levie/status/2064569513023328268) (278 likes, 23 reposts, 28 replies): This is a critical post to read if you’re building an applied AI company right now.

“An application earns its place in the untrainable corner by doing unglamorous work: arranging a company's private reality so a model can act on it, handing the model the tools to act, working with the customer to change the reality of its workforce. A company that brings the translation is tough to copy – and the translation never ends. Integration and maintenance run as long as the relationship does, won by teams that put domain-specialized engineers and tools next to the customer.”

There’s still an insanely large gulf between model capabilities and what it takes to apply them to specific corporate workflows. Some of that is technology that needs to be built, a lot is access to (and formatting of) the right data to work with, and a ton more is on the change management and specific implementation work (FDEs, etc.) it takes to make AI work in any specific corporate setting. 

2 things can be very true at once: frontier models and labs will continue to grow an incredible amount, and there will be a vast ecosystem of software and services companies that emerge to bring the power of these models to real enterprises. This makes room for new infrastructure provides, applied AI companies in every vertical, new versions of system integrators, and more players.

Incredibly exciting time on all fronts.
  
  中文要点：Aaron Levie 认为模型能力提升会显著扩大软件需求，开发者会要求更多定制应用、测试、仪表盘和研究工具。
- [Tweet / 推文](https://x.com/levie/status/2064396746953023647) (638 likes, 68 reposts, 72 replies): If you thought AI progress was slowing down, well here's the immediate answer to that. Huge jump in capability across the board. This is going to deliver major improvement in agents across almost all knowledge work categories. https://t.co/3CKQuX5HsG https://t.co/yPR4SfMrxM
  
  中文要点：Aaron Levie 分享了一条围绕 AI 产品、模型能力或 builder 工作流的动态：If you thought AI progress was slowing down, well here's the immediate answer to that. Huge jump in capability across the board. This is going to deliver major improvement in agent...
- [Tweet / 推文](https://x.com/levie/status/2064379199629181139) (79 likes, 9 reposts, 17 replies): Great post. So much about model performance is a function of how much compute you’re doing at inference time. This means compute-normalized benchmarks is the only logical path forward. 

And yet, the challenge is it’s a lot harder than it seems given it’s subjective how much compute to apply, which means models behave differently at different thresholds (simplistically, model X’s min thinking may beat model Y’s min thinking, but be reversed at high), and there are a near infinite set of thresholds you could choose to set. 

But either way, moving more in this direction would be great for better understanding AI progress.
  
  中文要点：Aaron Levie 分享了一条围绕 AI 产品、模型能力或 builder 工作流的动态：Great post. So much about model performance is a function of how much compute you’re doing at inference time. This means compute-normalized benchmarks is the only logical path forw...

### Garry Tan (@garrytan)
- [Tweet / 推文](https://x.com/garrytan/status/2064573857911152710) (755 likes, 18 reposts, 82 replies): Fable 5 is the biggest model energy I've ever seen
  
  中文要点：Garry Tan 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。
- [Tweet / 推文](https://x.com/garrytan/status/2064559225859416186) (205 likes, 4 reposts, 43 replies): Just trying to work on fixing GStack and running into this with Fable 5 *long sigh* https://t.co/5t6oabHOnR
  
  中文要点：Garry Tan 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。
- [Tweet / 推文](https://x.com/garrytan/status/2064519190061666393) (206 likes, 9 reposts, 22 replies): I eat Aaron Peskin's hate for breakfast. Guys, we're winning. It feels good. 

Aaron Peskin is no public servant. He was all along just a grifter trying to protect his views at the expense of the people.

We are the real people powered movement of San Francisco. https://t.co/nTuUasuCvU
  
  中文要点：Garry Tan 分享了一条围绕 AI 产品、模型能力或 builder 工作流的动态：I eat Aaron Peskin's hate for breakfast. Guys, we're winning. It feels good. Aaron Peskin is no public servant. He was all along just a grifter trying to protect his views at the e...

### Zara Zhang (@zarazhangrui)
- [Tweet / 推文](https://x.com/zarazhangrui/status/2064587398529606082) (23 likes, 0 reposts, 3 replies): The barrier for non-technical people using coding agents was never the interface. Chatting is the easiest UI ever invented

The barrier is that they don't know what to ask for.

The blank chat box assumes you already know what's possible. Most people don't.

When I tried Town, I was impressed by its onboarding process where the agent proactively suggested workflows & things it can take off my plate, rather than waiting for me to give instructions
  
  中文要点：Zara Zhang 讨论 Codex 或编程智能体的工作方式，包括 /goal、手机使用、控制器式编排，以及非技术用户如何知道该让 agent 做什么。
- [Tweet / 推文](https://x.com/zarazhangrui/status/2064486120386379950) (105 likes, 9 reposts, 12 replies): I will be doing a virtual talk this Friday on my vibe coding process. 

As a non-technical person who has somehow managed to get 30k stars on GitHub, I will be sharing the behind-the-scenes of how I get product ideas, how I work with coding agents, how to design stuff that's not AI slop, and why I think code is a medium for storytelling. 

RSVP here https://t.co/4wxpJjrAAB (Use the code PREMIUMPASS under "Add a coupon" to access the event for free)

(Thanks to @sariazout and the @wwwsublimeapp  community for hosting)
  
  中文要点：Zara Zhang 讨论 Codex 或编程智能体的工作方式，包括 /goal、手机使用、控制器式编排，以及非技术用户如何知道该让 agent 做什么。

### Nikunj Kothari (@nikunj)
- [Tweet / 推文](https://x.com/nikunj/status/2064508462034501997) (48 likes, 3 reposts, 4 replies): For the prompt, in Claude app with research mode on - I dumped the transcript for the episode, have it research all the scurves in history, figure out all the sections and give me a Claude code prompt that I could one shot.

Here’s the website: https://t.co/zPGOiwmiXG
  
  中文要点：Nikunj Kothari 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。
- [Tweet / 推文](https://x.com/nikunj/status/2064506504888373758) (371 likes, 31 reposts, 21 replies): I was listening to the latest episode of @InvestLikeBest and it talked a lot about S-curves..

So I had Fable one shot a website that talked about all the S-curves, their inflection point &amp; commentary on each being a bubble in the last 200 years.

Live now on escurves dot com 🌊 https://t.co/jYMCkJde9x
  
  中文要点：Nikunj Kothari 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。

### Dan Shipper (@danshipper)
- [Tweet / 推文](https://x.com/danshipper/status/2064398724495737180) (43 likes, 3 reposts, 2 replies): @every watch on YouTube: https://t.co/SOW9nt2wC7
  
  中文要点：Dan Shipper 分享了一条围绕 AI 产品、模型能力或 builder 工作流的动态：@every watch on YouTube: https://t.co/SOW9nt2wC7
- [Tweet / 推文](https://x.com/danshipper/status/2064395458777108707) (21 likes, 5 reposts, 1 replies): VIBE CHECK: Claude Fable 5 IS OUT! https://t.co/dGVuRlK7H8
  
  中文要点：Dan Shipper 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。
- [Tweet / 推文](https://x.com/danshipper/status/2064395167658860859) (121 likes, 13 reposts, 4 replies): FABLE (MYTHOS) is OUT!

we've been testing for a week @every. here's our vibe check: https://t.co/ZdceXz3apU https://t.co/jZ2690Th1G
  
  中文要点：Dan Shipper 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。

### Aditya Agarwal (@adityaag)
- [Tweet / 推文](https://x.com/adityaag/status/2064391655453802773) (37 likes, 5 reposts, 4 replies): As an investor, these are the moments that remind you why you fund startups to do important things. https://t.co/AK1rHnp2nG
  
  中文要点：Aditya Agarwal 从创业或投资角度评论 AI 产品、创始人沟通和当下市场信号。

### Claude (@claudeai)
- [Tweet / 推文](https://x.com/claudeai/status/2064394160522559632) (3305 likes, 226 reposts, 132 replies): Claude Fable 5 is available everywhere today. Claude Mythos 5 is restricted to Glasswing partners until we expand our trusted access program.

https://t.co/iQymY0jiGq
  
  中文要点：Claude 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。
- [Tweet / 推文](https://x.com/claudeai/status/2064394159318782217) (2511 likes, 89 reposts, 29 replies): Soon, we intend to expand access to Mythos 5 through a broader trusted access program, both for defensive cybersecurity work and biomedical research.
  
  中文要点：Claude 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。
- [Tweet / 推文](https://x.com/claudeai/status/2064394158056386684) (2626 likes, 95 reposts, 26 replies): For a small group of cyber defenders and critical infrastructure providers, we are also launching Claude Mythos 5.

Mythos 5 shares the same underlying model as Fable 5, but with the safeguards lifted in some areas.
  
  中文要点：Claude 讨论 Claude Fable/Mythos 5 的发布与使用感受，重点是更强的长程问题解决、代码审查、自验证循环和更大胆的 agent 任务。

## Podcast

### We Automated Everything With AI and Tripled Our Headcount
Source / 来源：AI & I by Every | [Watch / 观看](https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL) | Published / 发布时间：2026-05-27T16:28:59.000Z

This Every conversation pushes back on the simple “AI removes work” story. Dan Shipper and Brandon describe an AI-native company where agents are everywhere, but the result has been more ambition and more human work, not a smaller organization. The episode frames agents as leverage that expands the surface area of possible projects: people can automate repetitive pieces, run more experiments, and build more internal software, while still needing humans to define taste, strategy, conflict, and accountability. The core signal is Jevons paradox for knowledge work: as AI lowers the cost of execution, teams often discover more valuable work to do.

中文：这期 Every 的对谈反驳了“AI 会简单消灭工作”的直觉。Dan Shipper 和 Brandon 描述了一个高度 AI-native 的公司：agent 无处不在，但结果不是组织变小，而是野心更大、人类工作更多。节目把 agent 看作扩大项目边界的杠杆：团队可以自动化重复环节、运行更多实验、构建更多内部软件，但仍然需要人来定义品味、战略、冲突处理和责任归属。核心信号是知识工作的杰文斯悖论：执行成本下降后，团队往往会发现更多值得做的事。

## Blog

No new blog posts today.

今天没有新的博客内容。
