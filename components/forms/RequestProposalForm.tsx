"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import type { Locale } from "@/types";
import { companies, t } from "@/content/site";

interface RequestProposalFormProps {
  locale: Locale;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function RequestProposalForm({ locale }: RequestProposalFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const isArabic = locale === "ar";

  const serviceOptions = useMemo(
    () =>
      companies.flatMap((company) =>
        company.services.map((service) => ({
          value: `${company.id}::${service.en}`,
          label: `${t(locale, company.name)} — ${t(locale, service)}`
        }))
      ),
    [locale]
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/request-proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, locale })
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Submission failed");
      }

      setStatus("success");
      setMessage(isArabic ? "تم استلام طلبكم بنجاح. سيقوم فريقنا بمراجعته والتواصل معكم." : "Your request has been received. Our team will review it and respond.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(isArabic ? "تعذر إرسال الطلب. يرجى المحاولة مرة أخرى." : "The request could not be sent. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="arkon-form" aria-label={isArabic ? "نموذج طلب عرض فني" : "Request proposal form"}>
      <Field label={isArabic ? "الاسم الكامل" : "Full name"} name="fullName" required />
      <Field label={isArabic ? "اسم الشركة" : "Company name"} name="companyName" required />
      <Field label={isArabic ? "المسمى الوظيفي" : "Job title"} name="jobTitle" />
      <Field label={isArabic ? "البريد الإلكتروني" : "Email"} name="email" type="email" required />
      <Field label={isArabic ? "رقم الجوال" : "Mobile number"} name="mobile" required />
      <Field label={isArabic ? "موقع المشروع" : "Project location"} name="projectLocation" required />

      <label className="arkon-field">
        <span>{isArabic ? "نوع المشروع" : "Project type"}</span>
        <select name="projectType" required>
          <option value="">{isArabic ? "اختيار نوع المشروع" : "Select project type"}</option>
          <option value="new-development">{isArabic ? "تطوير جديد" : "New development"}</option>
          <option value="existing-facility">{isArabic ? "منشأة قائمة" : "Existing facility"}</option>
          <option value="infrastructure">{isArabic ? "بنية تحتية" : "Infrastructure"}</option>
          <option value="commercial">{isArabic ? "تجاري أو سكني" : "Commercial or residential"}</option>
          <option value="digital">{isArabic ? "مشروع رقمي" : "Digital project"}</option>
        </select>
      </label>

      <label className="arkon-field">
        <span>{isArabic ? "الشركة أو الخدمة المطلوبة" : "Required company / service"}</span>
        <select name="companyService" required>
          <option value="">{isArabic ? "اختيار الخدمة" : "Select a service"}</option>
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label className="arkon-field md:col-span-2">
        <span>{isArabic ? "وصف المشروع" : "Project description"}</span>
        <textarea name="description" rows={5} required placeholder={isArabic ? "اكتبوا ملخصاً عن نطاق المشروع والاحتياج المطلوب." : "Share the project scope, stage, and required support."} />
      </label>

      <Field label={isArabic ? "رابط الرسومات أو المستندات" : "Drawings / document link"} name="documentLink" type="url" />

      <label className="arkon-field">
        <span>{isArabic ? "الجدول الزمني المطلوب" : "Required timeline"}</span>
        <select name="timeline" required>
          <option value="immediate">{isArabic ? "مطلوب دعم فوري" : "Immediate support required"}</option>
          <option value="one-week">{isArabic ? "خلال أسبوع" : "Within 1 week"}</option>
          <option value="two-four-weeks">{isArabic ? "خلال أسبوعين إلى أربعة أسابيع" : "Within 2 to 4 weeks"}</option>
          <option value="planning">{isArabic ? "مرحلة التخطيط فقط" : "Planning stage only"}</option>
        </select>
      </label>

      <label className="arkon-field">
        <span>{isArabic ? "طريقة التواصل المفضلة" : "Preferred contact method"}</span>
        <select name="contactMethod" required>
          <option value="email">{isArabic ? "البريد الإلكتروني" : "Email"}</option>
          <option value="phone">{isArabic ? "اتصال هاتفي" : "Phone call"}</option>
          <option value="whatsapp">{isArabic ? "واتساب" : "WhatsApp"}</option>
        </select>
      </label>

      <label className="md:col-span-2 flex items-start gap-3 rounded-xl border border-arkon-line bg-arkon-pearl2 p-4 text-sm leading-6 text-arkon-muted">
        <input name="consent" value="accepted" type="checkbox" required className="mt-1 h-4 w-4 accent-arkon-gold" />
        <span>{isArabic ? "أوافق على استخدام مجموعة أركون للمعلومات المقدمة لمراجعة طلبي والتواصل معي بشأن الخدمة المطلوبة." : "I agree that ARKON Group may use the submitted information to review my inquiry and contact me about the requested service."}</span>
      </label>

      <div className="md:col-span-2">
        <button type="submit" className="arkon-btn arkon-btn-gold w-full sm:w-auto" disabled={status === "submitting"}>
          {status === "submitting" ? (isArabic ? "جار الإرسال..." : "Submitting...") : (isArabic ? "إرسال معلومات المشروع" : "Submit Project Information")}
        </button>
        {message ? (
          <p className={status === "error" ? "mt-4 text-sm font-bold text-red-700" : "mt-4 text-sm font-bold text-emerald-700"} role="status">
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="arkon-field">
      <span>{label}</span>
      <input name={name} type={type} required={required} />
    </label>
  );
}
