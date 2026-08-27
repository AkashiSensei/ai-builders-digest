[English](README.md) | **中文**

# AI Builders Digest

来自 AI 建设者的一手观点、产品动向与信号，按日更与周更整理。

聚合了来自 AI 领域最顶尖的建造者——研究员、创始人、产品经理和工程师的最新消息。

> 追踪那些真正在做产品、有独立见解的人，而非只会搬运信息的网红。

这份 digest 更强调 builders 的个人见解、一线观察与产品思考，而不是二手搬运或加工的行业评论。

如果你想看更偏传统 newsletter 形态的内容，可以移步到 [Horizon](https://thysrael.github.io/Horizon/)。

项目仍在测试中。日报和周报由 GitHub Actions 上的 Codex 基于通过验证的 Follow Builders feeds 自动生成。如果更新延迟，请检查 workflow 运行记录、feed 新鲜度以及 DeepSeek API 可用性。

---

最新日报: ai-digest-2026-08-28-Fri.md [中文](zh/daily/ai-digest-2026-08-28-Fri.md) | [English](en/daily/ai-digest-2026-08-28-Fri.md) | [双语](bilingual/daily/ai-digest-2026-08-28-Fri.md)

最新周报: ai-digest-2026-08-24-Mon.md [中文](zh/weekly/ai-digest-2026-08-24-Mon.md) | [English](en/weekly/ai-digest-2026-08-24-Mon.md) | [双语](bilingual/weekly/ai-digest-2026-08-24-Mon.md)

---

## 自动化

- 日报：每天 07:00（Asia/Shanghai）。
- 周报：每周一 18:30（Asia/Shanghai）。它会在等待周一上游更新后，将历史 feed 去重并汇总为上一个完整的周一至周一自然周。
- 成功运行后直接提交到 `main`。
- 必需的 GitHub Actions Secret：`DEEPSEEK_API_KEY`。

Powered by: [follow-builders skill](https://github.com/zarazhangrui/follow-builders) 的最新已验证 feeds。

Executed by: [GitHub Actions](https://github.com/features/actions) & [Codex](https://chatgpt.com/codex/)，模型后端使用 DeepSeek V4 Flash。
