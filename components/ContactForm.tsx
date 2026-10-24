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
          ? "告诉我们你在做什么。有仓库或产品链接更好。清晰描述即可。"
          : "Tell us what you are building. A repo or product link helps. A clear description is enough."}
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
          <option value="Build a product">{locale === "zh" ? "交付产品" : "Build a product"}</option>
          <option value="Staff a development team">{locale === "zh" ? "配备开发团队" : "Staff a development team"}</option>
          <option value="Build and staff">{locale === "zh" ? "交付并配备" : "Build and staff"}</option>
          <option value="Smart contracts">{locale === "zh" ? "智能合约" : "Smart contracts"}</option>
          <option value="dApp / product UI">{locale === "zh" ? "dApp / 产品界面" : "dApp / product UI"}</option>
          <option value="DeFi protocol">{locale === "zh" ? "DeFi 协议" : "DeFi protocol"}</option>
          <option value="Real estate / RWA">{locale === "zh" ? "房地产 / RWA" : "Real estate / RWA"}</option>
          <option value="NFT / gaming">{locale === "zh" ? "NFT / 游戏" : "NFT / gaming"}</option>
          <option value="Wallet / identity">{locale === "zh" ? "钱包 / 身份" : "Wallet / identity"}</option>
          <option value="Infrastructure">{locale === "zh" ? "基础设施" : "Infrastructure"}</option>
          <option value="Introduce a candidate">{locale === "zh" ? "介绍候选人" : "Introduce a candidate"}</option>
          <option value="Something else">{locale === "zh" ? "其他" : "Something else"}</option>
        </select>
      </label>

      <label className="mt-5 block text-sm text-muted" htmlFor="link">
        {locale === "zh" ? "仓库、演示或产品站点" : "Repo, demo, or product site"}
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
              ? "链、产品、时间线、现状，以及不可错过的日期。"
              : "Chain, product, timeline, what already exists, and the date you cannot miss."
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
