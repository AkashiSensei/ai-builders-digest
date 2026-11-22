[English](./ai-digest-2026-11-22-Sun.md) | [中文](../../zh/daily/ai-digest-2026-11-22-Sun.md) | [Bilingual](../../bilingual/daily/ai-digest-2026-11-22-Sun.md)

---

# AI Builders Digest

## Reader's Briefing

The release cadence around Codex and ChatGPT is becoming a feedback loop. OpenAI's Thibault Sottiaux is already preparing another large update while asking users what still needs attention after the previous day's desktop release ([tweet](https://x.com/thsottiaux/status/2124322968499282388)). Peter Yang is documenting the interface details that decide whether Codex feels native in the mobile app: the new ChatGPT app is clean, Codex threads can be pinned to the bottom navigation by holding the rightmost tab, and local recent Codex threads belong in the left navigation ([tweet](https://x.com/petergyang/status/2124217176655843483)) ([tweet](https://x.com/petergyang/status/2124217179717648537)).

The more capable models become, the more valuable the human skill of working with them appears to be. Thariq argues against removing the builder from the loop, saying that collaboration with models to push the frontier is itself a deeply technical discipline ([thread](https://x.com/trq212/status/2124239688013914132)) ([thread](https://x.com/trq212/status/2124239686482923553)) ([thread](https://x.com/trq212/status/2124239684536840682)).

Agent coordination is showing up in unexpected places. Amjad Masad highlighted a high school student using GitHub issues to divide work across agent swarms during a GTA6 recompilation project, while Garry Tan predicted that a vibe-coded hobbyist PC port could arrive within a month or two with enough tokens ([tweet](https://x.com/amasad/status/2124345037408686228)) ([tweet](https://x.com/garrytan/status/2124154280450134231)). Both point to a world where agents make ambitious side projects cheaper to attempt and easier to coordinate.

AI's deeper promise is not just faster execution but a different relationship to context. Aaron Levie argues that agents will be able to connect unrelated research and enterprise data, decoupling human context limits from productivity and discovery ([tweet](https://x.com/levie/status/2124252844710887549)). Matt Turck supplies the necessary counterweight: excitement about technical breakthroughs can outrun actual understanding ([tweet](https://x.com/mattturck/status/2124239403107459490)).

Measurement remains the bottleneck for trust. Dan Shipper highlighted that benchmarks encode choices about what to measure and hold constant, so rising scores need interpretation, and that watching AI-pilled teams in practice can reveal capability that benchmarks miss ([tweet](https://x.com/danshipper/status/2124292892168475086)).

Drug discovery offers one of the clearest examples of where that capability could matter. Isomorphic Labs president Max Jaderberg describes an industry still dominated by empirical trial and error, with many failures surfacing only in patients, and argues that better predictive models could move understanding earlier and compound across programs ([episode](https://www.youtube.com/watch?v=IiKf3BgBezE)).

## X / Twitter

### Thibault Sottiaux

OpenAI's Thibault Sottiaux, who works on Codex and ChatGPT, said the team is preparing another large update while asking users how the previous day's ChatGPT/Codex desktop release is holding up and what still requires attention. His request keeps the focus on the desktop app's rough edges after the release ([tweet](https://x.com/thsottiaux/status/2124322968499282388)).

### Peter Yang

Practical AI tutorial creator Peter Yang called the new ChatGPT mobile app clean, but noted that Codex threads are not where users might expect. He explained that holding the rightmost tab pins Codex to the bottom navigation, then argued that the left navigation should also surface local recent Codex threads instead of showing only chat threads ([tweet](https://x.com/petergyang/status/2124217176655843483)) ([tweet](https://x.com/petergyang/status/2124217179717648537)).

### Thariq

Thariq, formerly of Claude Code at Anthropic, argued that builders are too quick to disintermediate themselves ([tweet](https://x.com/trq212/status/2124239688013914132)). He said the skill of working with increasingly powerful models keeps becoming more important and has not shown diminishing returns ([tweet](https://x.com/trq212/status/2124239686482923553)). Collaborating with models to push the frontier, in his view, is a deeply technical skill in its own right ([tweet](https://x.com/trq212/status/2124239684536840682)).

### Amjad Masad

Replit CEO Amjad Masad highlighted a high school student recompiling GTA6 to run on PC, but pointed to a more interesting detail: the student was using GitHub issues to coordinate work across agent swarms. He asked whether that pattern points to a new model for open source ([tweet](https://x.com/amasad/status/2124345037408686228)). Separately, he announced that Amuse, built by Replit Missions, is now open source ([tweet](https://x.com/amasad/status/2124277564596519355)).

### Garry Tan

Y Combinator President and CEO Garry Tan took the GTA6 discussion in a different direction, asking how long it will take for a vibe-coded hobbyist PC port that removes the hated design flaws. His estimate was a month or two with enough tokens ([tweet](https://x.com/garrytan/status/2124154280450134231)).

### Aaron Levie

Box CEO Aaron Levie argued that a reported Riemann Hypothesis breakthrough matters well beyond math because it shows AI changing how problems are solved. He expects agents to connect unrelated prior art, research, and decisions and to scan enterprise data for solutions, for the first time decoupling human context limits from the ability to drive productivity and discoveries. Levie expects far more solutions, even if they are less elegant: "The solutions may not be as elegant as they were in the past, but we sure will have far more of them." ([tweet](https://x.com/levie/status/2124252844710887549)).

### Matt Turck

FirstMark Capital venture capitalist Matt Turck added a wry counterweight to the Riemann Hypothesis enthusiasm, describing "the art of tweeting excitedly about AI solving the Riemann Hypothesis when you have no idea what the Riemann Hypothesis is." The line is a pointed warning about the gap between breakthrough narratives and understanding ([tweet](https://x.com/mattturck/status/2124239403107459490)).

### Dan Shipper

Every CEO Dan Shipper highlighted a piece arguing that benchmarks have to choose what to measure and what to keep constant, so rising numbers do not always mean what they appear to mean. He suggested a second window on real capability: looking closely at how AI-pilled teams put model capabilities to work in practice ([tweet](https://x.com/danshipper/status/2124292892168475086)).

## Podcast

### No Priors: Powering AI-Driven Drug Discovery with President of Isomorphic Labs Max Jaderberg

**The Takeaway:** Drug discovery's biggest opportunity is to move more of the understanding of disease biology and toxicity onto computers before patients ever enter the picture.

Max Jaderberg is president and a founding-team member of Isomorphic Labs, the Alphabet-backed company working to apply machine learning across drug design. His argument starts with the industry's economics: medicine creation remains largely empirical, each program is expensive and bespoke, and many failures only surface in clinical trials when toxicity or off-target effects appear. Much of the available data was collected passively and can be biased toward existing research paths, which limits generalization.

Isomorphic's bet is to build a general drug-design engine, train it with data generated for the questions it needs to answer, and use it across modalities and disease areas. Jaderberg says the company keeps the models in house and uses them both for its own pipeline and for partnerships. Internally it focuses on oncology, immunology, and inflammation, including root-node problems that could affect many downstream conditions.

The broader point is about compounding. If every program produces transferable knowledge about disease biology and molecule design, the platform should improve faster than a collection of disconnected experiments. "The really big opportunity is to have much more of that understanding before you go into patients," he says.

Jaderberg is candid about the limits. Biology still requires real-world validation, and some physical steps cannot be compressed. But he thinks predictive models, in vitro endpoints, organoids, organs on chips, and automated labs can shorten the loop. His five-year test is not a single wonder drug. It is a step change in the ability to predict disease biology and design molecules that are more precise and less toxic ([watch the episode](https://www.youtube.com/watch?v=IiKf3BgBezE)).

## Blog

The validated feed contained no new qualifying blog items.

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
