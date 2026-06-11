"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { CheckCircle2, ArrowRight, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const t = useTranslations("contact");

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function validate() {
    const newErrors: Partial<typeof form> = {};
    if (!form.name.trim()) newErrors.name = t("required");
    if (!form.email.trim()) {
      newErrors.email = t("required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = t("invalidEmail");
    }
    if (!form.message.trim()) newErrors.message = t("required");
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#0F172A] border border-slate-700 rounded-2xl p-12 text-center">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{t("successTitle")}</h3>
        <p className="text-slate-400 max-w-sm mx-auto">{t("successBody")}</p>
      </div>
    );
  }

  const inputBase =
    "w-full border rounded-lg px-4 py-3 text-sm text-[#1a202c] focus:outline-none focus:ring-2 transition-colors bg-white placeholder-[#a0aec0]";
  const inputNormal = inputBase + " border-[#e2e8f0] focus:border-[#CC1C1C] focus:ring-[#CC1C1C]/20";
  const inputError = inputBase + " border-red-400 focus:border-red-500 focus:ring-red-500/20";

  function fieldClass(field: keyof typeof errors) {
    return errors[field] ? inputError : inputNormal;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-[#4a5568] uppercase tracking-wider">
            {t("nameLabel")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder={t("namePlaceholder")}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={fieldClass("name")}
          />
          {errors.name && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
        </div>
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-[#4a5568] uppercase tracking-wider">
            {t("emailLabel")} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder={t("emailPlaceholder")}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={fieldClass("email")}
          />
          {errors.email && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-[#4a5568] uppercase tracking-wider">
            {t("companyLabel")}
          </label>
          <input
            type="text"
            placeholder={t("companyPlaceholder")}
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className={inputNormal}
          />
        </div>
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-[#4a5568] uppercase tracking-wider">
            {t("phoneLabel")}
          </label>
          <input
            type="tel"
            placeholder={t("phonePlaceholder")}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputNormal}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-[#4a5568] uppercase tracking-wider">
          {t("productLabel")}
        </label>
        <input
          type="text"
          placeholder={t("productPlaceholder")}
          value={form.product}
          onChange={(e) => setForm({ ...form, product: e.target.value })}
          className={inputNormal}
        />
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-[#4a5568] uppercase tracking-wider">
          {t("messageLabel")} <span className="text-red-500">*</span>
        </label>
        <textarea
          placeholder={t("messagePlaceholder")}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={5}
          className={fieldClass("message") + " resize-none"}
        />
        {errors.message && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
      </div>

      {status === "error" && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-4">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          {t("errorBody")}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-10 py-3.5 rounded-lg hover:bg-[#A01515] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer shadow-md"
      >
        {status === "sending" ? t("sending") : t("submit")}
        {status !== "sending" && <ArrowRight className="w-4 h-4" />}
      </button>
    </form>
  );
}
