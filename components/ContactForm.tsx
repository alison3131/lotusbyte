"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { site } from "@/lib/site";

const fieldClass =
  "mt-2 w-full rounded-lg border border-line bg-bg px-3 py-2.5 text-ink outline-none focus:border-gold";

export function ContactForm() {
  const { messages, locale } = useLanguage();

  return (
    <form
      className="rounded-2xl border border-line bg-card p-6 md:p-8"
      action={`mailto:${site.email}`}
      method="post"
      encType="text/plain"
    >
      <p className="font-display text-2xl">
        {locale === "zh" ? "项目简报" : "Project brief"}
      </p>
      <p className="mt-2 text-sm leading-6 text-muted">
        {locale === "zh"
          ? "告诉我们团队今天怎么工作。一段录屏或现有工具的链接会有帮助。清楚描述即可。"
          : "Tell us how the team works today. A recording or a link to the current tool helps. A clear description is enough."}
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-muted" htmlFor="name">
          {messages.apply.fullName}
          <input id="name" name="name" required className={fieldClass} />
        </label>
        <label className="block text-sm text-muted" htmlFor="email">
          {messages.apply.email}
          <input id="email" name="email" type="email" required className={fieldClass} />
        </label>
      </div>

      <label className="mt-5 block text-sm text-muted" htmlFor="company">
        {locale === "zh" ? "公司" : "Company"}
        <input id="company" name="company" className={fieldClass} />
      </label>

      <label className="mt-5 block text-sm text-muted" htmlFor="topic">
        {locale === "zh" ? "你需要什么？" : "What do you need?"}
        <select id="topic" name="topic" className={fieldClass}>
          <option value="A defined build">{locale === "zh" ? "一次明确的构建" : "A defined build"}</option>
          <option value="A retained team">{locale === "zh" ? "一支留任团队" : "A retained team"}</option>
          <option value="Care after launch">{locale === "zh" ? "上线后的照料" : "Care after launch"}</option>
          <option value="Product design">{locale === "zh" ? "产品设计" : "Product design"}</option>
          <option value="Web application">{locale === "zh" ? "Web 应用" : "Web application"}</option>
          <option value="Customer portal">{locale === "zh" ? "客户门户" : "Customer portal"}</option>
          <option value="Operations software">{locale === "zh" ? "运营软件" : "Operations software"}</option>
          <option value="Reporting">{locale === "zh" ? "数据与报告" : "Reporting"}</option>
          <option value="Site and brand">{locale === "zh" ? "网站与品牌" : "Site and brand"}</option>
          <option value="Something else">{locale === "zh" ? "其他" : "Something else"}</option>
        </select>
      </label>

      <label className="mt-5 block text-sm text-muted" htmlFor="link">
        {locale === "zh" ? "现有工具、录屏或网站" : "Current tool, recording, or site"}
        <input id="link" name="link" type="url" placeholder="https://" className={fieldClass} />
      </label>

      <label className="mt-5 block text-sm text-muted" htmlFor="message">
        {locale === "zh" ? "介绍一下工作内容" : "Tell us about the work"}
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder={
            locale === "zh"
              ? "团队今天做什么、哪里卡住了、时间，以及不能错过的日期。"
              : "What the team does today, where it gets stuck, the timeline, and the date you cannot miss."
          }
          className={`${fieldClass} resize-y`}
        />
      </label>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-gold py-3 text-sm font-semibold text-white transition hover:bg-gold-soft"
      >
        {messages.contact.send}
      </button>
    </form>
  );
}
