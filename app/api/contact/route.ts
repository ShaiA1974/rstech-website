import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "info@rstech.co.il";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { name, email, company, phone, product, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const subject = product
    ? `RSTECH Website Inquiry — ${product}`
    : `RSTECH Website Inquiry from ${name}`;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #CC1C1C; padding: 24px 32px; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">New Inquiry — RSTECH Electronics</h1>
      </div>
      <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #7A8A99; font-size: 13px; width: 130px; vertical-align: top;">Name</td>
            <td style="padding: 8px 0; color: #1a202c; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #7A8A99; font-size: 13px; vertical-align: top;">Email</td>
            <td style="padding: 8px 0; color: #1a202c; font-weight: 600;">
              <a href="mailto:${email}" style="color: #CC1C1C;">${email}</a>
            </td>
          </tr>
          ${company ? `<tr>
            <td style="padding: 8px 0; color: #7A8A99; font-size: 13px; vertical-align: top;">Company</td>
            <td style="padding: 8px 0; color: #1a202c; font-weight: 600;">${company}</td>
          </tr>` : ""}
          ${phone ? `<tr>
            <td style="padding: 8px 0; color: #7A8A99; font-size: 13px; vertical-align: top;">Phone</td>
            <td style="padding: 8px 0; color: #1a202c; font-weight: 600;">${phone}</td>
          </tr>` : ""}
          ${product ? `<tr>
            <td style="padding: 8px 0; color: #7A8A99; font-size: 13px; vertical-align: top;">Product / Interest</td>
            <td style="padding: 8px 0; color: #1a202c; font-weight: 600;">${product}</td>
          </tr>` : ""}
        </table>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <div style="color: #7A8A99; font-size: 13px; margin-bottom: 8px;">Message</div>
        <div style="color: #1a202c; line-height: 1.6; white-space: pre-wrap;">${message}</div>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="color: #7A8A99; font-size: 12px; margin: 0;">
          Sent from rstech.co.il contact form
        </p>
      </div>
    </div>
  `;

  try {
    const result = await resend.emails.send({
      from: "RSTECH Website <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject,
      html: htmlBody,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json({ error: "Failed to send email", detail: result.error.message }, { status: 500 });
    }
  } catch (err: unknown) {
    const error = err as { message?: string };
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email", detail: error?.message }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
