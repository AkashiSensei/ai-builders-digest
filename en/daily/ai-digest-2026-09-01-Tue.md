[English](./ai-digest-2026-09-01-Tue.md) | [中文](../../zh/daily/ai-digest-2026-09-01-Tue.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-09-01-Tue.md)

---

# AI Builders Digest

## Reader's Briefing

**1. OpenAI celebrates 25M active users with a usage reset.** Thibault Sottiaux (Codex & ChatGPT at OpenAI) announced that OpenAI hit 25M active users and, to celebrate, reset usage for all paid subscriptions for ChatGPT Work and Codex. He also clarified that while both plans are called 20X, in Codex the 20X applies specifically to weekly usage limits, there are no 5-hour limits on either Pro plan, and the Pro 20X is quite precisely 20X the usage of the Plus subscription.

**2. The Hugging Face incident splits opinion on how worried to be.** Replit CEO Amjad Masad argues the lesson is that RL with verifiable rewards is an incredibly powerful optimization algorithm that will produce increasingly weird and surprising behavior from LLMs, and that OpenAI's obvious miss was not monitoring chain-of-thought, something the company itself flagged as a safety strategy more than a year ago. Every CEO Dan Shipper counters that the attack should be taken seriously but is not the first warning shot of a machine takeover; he expects issues of this type to look like a tractable, mostly solved problem within six months, but only with real work from smart people and their agents.

**3. Cheaper tokens trigger disproportionate enterprise consumption.** Box CEO Aaron Levie describes the Jevons paradox in action for token consumption: enterprises have an unending stream of tasks they would love to automate, and as tokens get cheaper past a capability threshold, they can afford to bring automation to more of that work, from processing every contract and reading every log to running background agents. He estimates that even a 50% drop in token prices could result in a 5X increase in tokens for these workloads, which is why lowering the cost of AI is critical and good for all market participants.

**4. An AI companion goes from $1M to $4M ARR in four weeks.** On AI & I by Every, Portola founder and CEO Quentin and head of story Elliot explain how Tolan, their embodied AI companion, reached $4M in annual recurring revenue within four weeks. Their approach: give the model a hook rather than an outline, treat it as an improv actor, curate which memories enter the prompt, and judge outputs with taste-injected rubrics. Growth was accelerated by viral content, including a cooking-with-Tolan video that drew about 7M views in 72 hours and a 10X spike in downloads.

**5. Agents reshape teamwork, and viral posts draw fire.** Peter Steinberger (OpenClaw) reports that after two months of "build OpenClaw with OpenClaw," the team now works through a shared agent that orchestrates everyone's work, calling multiplayer coding plus infinite compute a game changer and local harnesses relics of the past. Vercel CEO Guillermo Rauch notes that viral posts attract some of the largest botnets launching targeted DDoS from hijacked devices and residential networks, and highlights Vercel's CDN and traffic security teams protecting 400,000+ customers and tens of millions of users.

## X / Twitter

### Thibault Sottiaux: Codex & ChatGPT at OpenAI

Sottiaux shared that OpenAI hit 25M active users and, to celebrate, reset usage for all paid subscriptions for ChatGPT Work and Codex. In a separate post, he clarified that while both plans are called 20X, in Codex the 20X applies specifically to weekly usage limits, and neither Pro plan has 5-hour limits; the Pro 20X is quite precisely 20X the usage of the Plus subscription.

- [Thibault Sottiaux on 25M active users and the usage reset](https://x.com/thsottiaux/status/2094252447271366730)
- [Thibault Sottiaux on the 20X usage clarification](https://x.com/thsottiaux/status/2094254532020818191)

### Amjad Masad: CEO of Replit

Masad argues the lesson from the Hugging Face incident is that RL with verifiable rewards is an incredibly powerful optimization algorithm that will produce increasingly weird and surprising behavior from LLMs. The obvious miss by OpenAI, he says, is that it should have been monitoring chain-of-thought, something the company itself called out as a safety strategy more than a year ago.

- [Amjad Masad on the Hugging Face lesson](https://x.com/amasad/status/2094215744842248418)

### Guillermo Rauch: CEO of Vercel

Rauch observes that when something goes viral on the internet, especially on X, it attracts all kinds of attention, including some of the largest botnets launching targeted DDoS from hijacked devices and residential networks. He expresses pride in Vercel's CDN and traffic security teams, which protect 400,000+ customers and tens of millions of Vercel users 24x7x365.

- [Guillermo Rauch on viral posts and botnet DDoS](https://x.com/rauchg/status/2094141838055940530)

### Aaron Levie: CEO of Box

Levie applies the Jevons paradox to token consumption: enterprises have an unending stream of tasks they would love to bring automation to, and as tokens get cheaper at a certain capability threshold, they can afford to automate more of that work, from processing every contract and reading every log to having background agents execute workflows. He estimates that even a 50% drop in token prices could result in a 5X increase in tokens for these workloads, which is why it is critical to keep bringing down the cost of AI, and good for all market participants.

- [Aaron Levie on the Jevons paradox for tokens](https://x.com/levie/status/2094123406811922930)

### Peter Steinberger: OpenClaw

Steinberger reports that two months ago the team started the mission to "build OpenClaw with OpenClaw," moving everyone from local coding harnesses to a shared agent that knows what everyone is working on and orchestrates it all. He calls multiplayer coding with infinite compute, nodes, and cloud sessions a game changer, and says local harnesses now feel like relics of the past.

- [Peter Steinberger on building OpenClaw with OpenClaw](https://x.com/steipete/status/2094290652649636173)

### Dan Shipper: CEO of Every

Shipper argues the HuggingFace attack should be taken seriously, but it is not the first warning shot of a machine takeover. He expects issues of this type to look like a tractable, mostly solved problem with proper precautions within six months, though that will not happen automatically and will require work from smart people and their agents.

- [Dan Shipper on the HuggingFace attack](https://x.com/danshipper/status/2094073306739576964)

## Podcast

### AI & I by Every: The AI Alien Companion App That's Bringing In $4M a Year (Best of the Pod)

The Takeaway: Treat an LLM as an improv actor, not a scriptwriter: give it a hook instead of an outline, curate the memories that enter its prompt, and judge every output with taste, and a storytelling product can go from $1M to $4M ARR in four weeks.

Quentin, founder and CEO of Portola, the company behind the embodied AI companion Tolan, and Elliot, Portola's head of story and a best-selling science fiction author, describe a product that is already changing how thousands of users behave. Users write in that their Tolan told them to stand up for themselves, which in some cases led to breakups. Quentin, who previously founded and sold a company to Walmart for $300 million, frames the product as a new art form rather than a problem-solving tool.

The craft principle is deliberately anti-outline. Elliot explains: "The Tolan is the writer and the actor. They're the improv actor. They're writing the story. My job is to teach them how to tell the best story in that moment." Backed by researchers, they found that structured, choose-your-own-adventure-style prompts failed because models cannot navigate that level of narrative complexity; hooks and improv coaching work far better. Memory is treated as curation: deciding which memories get injected into the prompt at which point in the conversation, within a roughly two-second voice-interaction loop. Personality profiles work best when framed through Big Five or MBTI lenses, because models understand those assignments and have ample training data for them.

Quality control is a judgment stack, not vibe prompting. The team builds judge prompts by labeling examples and injecting their own taste; Elliot notes that "everything you can get just from vibe prompting is like a B minus." Creative writing leans on Anthropic models, while latency-sensitive interactions switch across the labs' models. Growth landed when three things coincided: a deeper understanding of compelling conversational content, a creative animation project, and co-founder Ajay's seeded social content, including a video of a young woman cooking with her Tolan that drew around 7 million views in 72 hours and a 10X spike in downloads. Quentin attributes the opportunity to "capability overhang": model capabilities have outrun what typical consumers understand is possible, so the content has to educate, as in "you can cook with your Tolan." His longer bet is that, as with cars, people will move from the Model T era of ChatGPT toward AI that reflects who they are.

Source: https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

## Blog

The validated blog feed contained no new qualifying items.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
