[English](./ai-digest-2026-08-25-Tue.md) | [中文](../../zh/daily/ai-digest-2026-08-25-Tue.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-08-25-Tue.md)

---

# AI Builders Digest

## Reader's Briefing

**1. OpenAI reshapes Plus-plan economics to keep weekly usage generous.** Thibault Sottiaux, who works on Codex & ChatGPT at OpenAI, announced that ChatGPT Work and Codex will bring back the 5-hour usage limit for Plus accounts starting tomorrow, saying the limit smooths compute load so the plan can stay generous on weekly usage and prevents casual, newer users from accidentally burning through their entire week. He also teased that OpenAI DevDay 2026 "will be our best DevDay in the history of the company. It will not be close."

**2. An eval is only as good as its ability to discriminate.** Madhu Guru, Senior Director of AI at Meta and previously a leader on Gemini, Veo, and Nano Banana at Google, continues his evals series with part eight on the discriminatory property of evals: a hill-climbing eval is useful only when it can separate AI systems that are meaningfully different. Five systems scoring 92 to 95 is like giving a fifth-grade math test to a group of PhDs, he argues. The sweet spot is "realistic + difficult + sensitive to differences in capability."

**3. Enterprise data becomes the battleground for agents.** Box CEO Aaron Levie argues that systems of record have never been more important, because AI agents will do 100X more work on these platforms than people ever did, which makes governance, reliability, security, access controls, and business logic more critical than ever. He calls the OpenAI Hugging Face incident "just a small peek into what the future will look like," and separately credits zero data retention (ZDR) with a substantial share of AI's growth, warning that "without ZDR, AI diffusion grinds to a halt."

**4. Prompt-native, agent-assisted work is becoming the default.** Replit CEO Amjad Masad says Replit Agent has "completely replaced Claude CoWork" in his day-to-day work because it is more persistent and uses software more effectively. OpenClaw's Peter Steinberger argues we need to move away from "software that we can't change with a prompt," Vercel CEO Guillermo Rauch points out that new software should be "faster, cheaper, more capable, and… smaller," and Y Combinator President & CEO Garry Tan shares his iteration loop: form a view, turn it into an artifact or experiment, test it against reality, and revise and run again.

**5. Platform risk and product friction decide what people keep using.** Every CEO Dan Shipper reports that Google disabled Every's YouTube account with zero notice and no reason given, a reminder of creators' dependence on platforms. Peter Yang says he usually stops using any product that forces a login, with entertainment and gaming as the only exceptions, and he is exploring using AI voice agents to navigate phone support systems and talk to real humans.

## X / Twitter

### Thibault Sottiaux: Codex & ChatGPT at OpenAI
Sottiaux announced that the 5-hour usage limit is returning for Plus accounts across ChatGPT Work and Codex starting tomorrow. He explains it as necessary on two fronts: the limit smooths load on compute so the plan can stay generous in terms of weekly usage, and Plus users tend to be relatively casual, newer users who can accidentally eat through their whole week's allowance and end up confused. For the upcoming months, the 5-hour limit will not be enabled for Pro $100 and Pro $200 subscriptions. He also predicted that OpenAI DevDay 2026 "will be our best DevDay in the history of the company. It will not be close."

- [Thibault Sottiaux on the 5-hour Plus limit](https://x.com/thsottiaux/status/2092058556707344708)
- [Thibault Sottiaux on DevDay 2026](https://x.com/thsottiaux/status/2092117461646856505)

### Peter Yang
Yang says that whenever he has to log in to a new website or app, or even use an agent trapped inside one, he usually prefers to stop using the product entirely, with entertainment and gaming as the only exceptions. He's now running three AI "chief of staffs" and notes the next step is to add one more, and he's looking for the easiest way to have AI call customer support phone numbers with voice, navigate automated phone systems, and talk to a human to book appointments or cancel subscriptions.

- [Peter Yang on login friction](https://x.com/petergyang/status/2092080901094248474)
- [Peter Yang on AI chiefs of staff](https://x.com/petergyang/status/2092048940732682395)
- [Peter Yang on AI voice for customer support](https://x.com/petergyang/status/2092031413319266382)

### Nan Yu: product enthusiast
Yu describes setting up a new computer with Codex, which handles jobs like downloading and installing Handy, Slack, Chrome, CleanShot, and Rectangle, adding that it "makes you wish siri was good."

- [Nan Yu on setting up a computer with Codex](https://x.com/thenanyu/status/2092048044502192374)

### Madhu Guru: Senior Director of AI at Meta
In part eight of his "How to build great evals" series, Guru argues that an eval is only useful when it can discriminate: if five AI systems score 92, 93, 95, 94, and 92, and you already know A and C are substantially better than D and E, the eval has low discriminatory power, like giving a fifth-grade math test to a group of PhDs. He says the sweet spot is an eval that is "realistic + difficult + sensitive to differences in capability," and poses the question of what to do once good evals saturate as harnesses and underlying models improve.

- [Madhu Guru on the discriminatory property of evals](https://x.com/realmadhuguru/status/2092058332735693264)

### Amjad Masad: CEO at Replit
Masad says Replit Agent has completely replaced Claude CoWork in his day-to-day work: it's "much more persistent and fastidious, and it uses code/software more effectively to complete tasks."

- [Amjad Masad on Replit Agent](https://x.com/amasad/status/2091962601907638352)

### Guillermo Rauch: CEO of Vercel
Rauch pushes back on software's tendency to get slower, more bloated, buggier, and bigger over time, arguing that the new generation should be "faster, cheaper, more capable, and… smaller," and pointing to a project he says is architected from the outset to prevent exactly that. He also went down a terminal rabbit hole: the reset command is oddly slow because, since 1979, 3BSD's tset has included a sleep(1) meant to let mechanical printer-and-ink terminals "settle down," so he asked fx to write a faster alternative in Zig that takes 1ms instead of 1s.

- [Guillermo Rauch on software getting faster and smaller](https://x.com/rauchg/status/2092081554814320677)
- [Guillermo Rauch on the terminal reset rabbit hole](https://x.com/rauchg/status/2091957823945216474)

### Aaron Levie: CEO of Box
Levie argues that systems of record have never been more important in a world where AI agents will do 100X more work on these platforms than people ever did, querying data, processing tasks, executing workflows, and collaborating with human and agent users. That makes governance, reliability, security, access controls, and business logic more critical than ever; he calls the OpenAI Hugging Face incident "just a small peek into what the future will look like with agents running around trying to execute on their goals." Separately, he argues that zero data retention (ZDR) is responsible for a substantial amount of AI's growth because it simplified the compliance process for handling data with subprocessors, and he warns that "without ZDR, AI diffusion grinds to a halt."

- [Aaron Levie on systems of record and agents](https://x.com/levie/status/2092087679240569126)
- [Aaron Levie on zero data retention](https://x.com/levie/status/2091909170308296950)

### Garry Tan: President & CEO of Y Combinator
Tan says Conductor Cloud has made him much more productive and freed him from keeping his MacBook Pro cracked open, and he pushes back on negative takes about datacenters, arguing they "create jobs and prosperity, actually." He also shared his working method: "Form a view. Turn it into an artifact or experiment. Put it in contact with reality. Read the result without self-deception. Revise and run again."

- [Garry Tan on Conductor Cloud](https://x.com/garrytan/status/2092062231488061584)
- [Garry Tan on datacenters](https://x.com/garrytan/status/2092062820229890209)
- [Garry Tan on his iteration loop](https://x.com/garrytan/status/2092059517446156640)

### Zara Zhang: Builder
Zhang makes the unpopular case that hackathons are an outdated event format, at least the way they are traditionally held. She also recommends a Sam Altman interview, saying interviewer davidsenra immediately cuts to the chase and gets his guests to be their most natural selves, and that Altman seems his most comfortable self in it.

- [Zara Zhang on hackathons](https://x.com/zarazhangrui/status/2092079390301556883)
- [Zara Zhang on the Sam Altman interview](https://x.com/zarazhangrui/status/2092053829772881972)

### Nikunj Kothari: Partner at FPV Ventures
Kothari observes that every unconventional deal that's officially wired "dies a 100 times" in venture, and it usually takes one champion sticking their neck out for the founder and quietly steering it to completion. His advice: founders should figure out who their real champion is, arm them with whatever information makes the case, and lean on associates and non-voting partners, who are incentivized to help and are a good test of how they'd partner with you on the cap table.

- [Nikunj Kothari on deal champions](https://x.com/nikunj/status/2092079149028716877)

### Peter Steinberger: OpenClaw
Steinberger argues that "we need to get away from software that we can't change with a prompt."

- [Peter Steinberger on prompt-changeable software](https://x.com/steipete/status/2091923535513928015)

### Dan Shipper: CEO of Every
Shipper says Google disabled Every's YouTube account with zero notice and no reason given, and is asking for help or anyone with experience getting such accounts restored. It's a reminder of the platform risk creators carry when their distribution lives on a third-party service.

- [Dan Shipper on Every's disabled YouTube account](https://x.com/danshipper/status/2092026065644335446)
- [Dan Shipper asking Google and YouTube for help](https://x.com/danshipper/status/2092034751037096260)

### Aditya Agarwal: General Partner at SPC
Agarwal highlights Hans Robertson, who was early at VMware, co-founded Meraki and sold it to Cisco for $1.2B, and co-founded Verkada in 2016, where he is still running the company today. Robertson is visiting SPC this week.

- [Aditya Agarwal on Hans Robertson](https://x.com/adityaag/status/2091958074827313523)

## Podcast

The validated podcast feed contained no new qualifying episodes for this digest, so there is nothing to summarize this cycle.

## Blog

The validated blog feed contained no new qualifying posts for this digest, so there is nothing to summarize this cycle.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
