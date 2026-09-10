[English](README.md) | **中文**

# AI Builders Digest

来自 AI 建设者的一手观点、产品动向与信号，按日更与周更整理。

聚合了来自 AI 领域最顶尖的建造者——研究员、创始人、产品经理和工程师的最新消息。

> 追踪那些真正在做产品、有独立见解的人，而非只会搬运信息的网红。

这份 digest 更强调 builders 的个人见解、一线观察与产品思考，而不是二手搬运或加工的行业评论。

如果你想看更偏传统 newsletter 形态的内容，可以移步到 [Horizon](https://thysrael.github.io/Horizon/)。

项目仍在测试中。日报和周报由 GitHub Actions 上的 Codex 基于通过验证的 Follow Builders feeds 自动生成。如果更新延迟，请检查 workflow 运行记录、feed 新鲜度以及 DeepSeek API 可用性。

---

最新日报: ai-digest-2026-09-10-Thu.md [中文](zh/daily/ai-digest-2026-09-10-Thu.md) | [English](en/daily/ai-digest-2026-09-10-Thu.md) | [双语](bilingual/daily/ai-digest-2026-09-10-Thu.md)

最新周报: ai-digest-2026-09-07-Mon.md [中文](zh/weekly/ai-digest-2026-09-07-Mon.md) | [English](en/weekly/ai-digest-2026-09-07-Mon.md) | [双语](bilingual/weekly/ai-digest-2026-09-07-Mon.md)

---

## 自动化

- 日报：主触发为每天 16:30（Asia/Shanghai），次日 10:30 仅补偿一次。主触发遇到 feed 过期时会安全延期；补偿触发仍指向前一个上海自然日，若数据依然不可用则明确报错。
- 周报：主触发为每周一 18:30（Asia/Shanghai），周二 12:30 仅补偿一次。它会将历史 feed 去重并汇总为上一个完整的周一至周一自然周。最长 18 小时的上游调度缺口会按实际时长明确披露；更大的缺口会阻止发布。
- 若三种语言的目标版本都已存在，补偿触发会在调用模型前结束，因此每个日期或自然周最多生成一次。若补偿触发晚于更新版本，也会直接跳过，避免 README 的最新版本指针倒退。
- 成功运行后直接提交到 `main`。
- 必需的 GitHub Actions Secret：`DEEPSEEK_API_KEY`。

Powered by: [follow-builders skill](https://github.com/zarazhangrui/follow-builders) 的最新已验证 feeds。

Executed by: [GitHub Actions](https://github.com/features/actions) & [Codex](https://chatgpt.com/codex/)，模型后端使用 DeepSeek V4 Flash。
