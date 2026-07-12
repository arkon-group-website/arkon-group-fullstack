import { NextResponse } from "next/server";

const recipientByCompany: Record<string, string | undefined> = {
  aec: process.env.EMAIL_AEC_TO || process.env.EMAIL_GENERAL_TO,
  elite: process.env.EMAIL_ELITE_TO || process.env.EMAIL_GENERAL_TO,
  ibs: process.env.EMAIL_IBS_TO || process.env.EMAIL_GENERAL_TO,
  qic: process.env.EMAIL_QIC_TO || process.env.EMAIL_GENERAL_TO,
  "tp-digital": process.env.EMAIL_TP_DIGITAL_TO || process.env.EMAIL_GENERAL_TO
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ["fullName", "companyName", "email", "mobile", "projectLocation", "companyService", "description", "consent"];
    const missing = required.filter((key) => !String(body[key] || "").trim());

    if (missing.length > 0) {
      return NextResponse.json({ ok: false, message: "Missing required fields", missing }, { status: 400 });
    }

    const [companyId] = String(body.companyService).split("::");
    const to = recipientByCompany[companyId] || process.env.EMAIL_GENERAL_TO || "info@arkonec.com";
    const subject = `New ARKON Group request - ${body.companyName}`;
    const text = [
      "New ARKON Group website inquiry",
      "",
      `Name: ${body.fullName}`,
      `Company: ${body.companyName}`,
      `Email: ${body.email}`,
      `Mobile: ${body.mobile}`,
      `Project location: ${body.projectLocation}`,
      `Required company/service: ${body.companyService}`,
      `Timeline: ${body.timeline || "Not provided"}`,
      `Preferred contact: ${body.contactMethod || "Not provided"}`,
      `Language: ${body.locale || "en"}`,
      "",
      "Description:",
      String(body.description)
    ].join("\n");

    if (process.env.LEADS_WEBHOOK_URL) {
      await fetch(process.env.LEADS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, to, subject, source: "arkon-group-website" })
      });
    }

    if (process.env.RESEND_API_KEY) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || "ARKON Group <no-reply@arkongroup.com.sa>",
          to,
          reply_to: body.email,
          subject,
          text
        })
      });

      if (!response.ok) {
        const error = await response.text();
        return NextResponse.json({ ok: false, message: "Email delivery failed", error }, { status: 502 });
      }
    }

    return NextResponse.json({ ok: true, message: "Request received" });
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request" }, { status: 400 });
  }
}
