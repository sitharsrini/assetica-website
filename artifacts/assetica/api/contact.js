import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, service, message } = body;

    if (!firstName || !lastName || !email) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Notify Assetica team
    const teamEmail = await resend.emails.send({
      from: "Assetica Website <onboarding@resend.dev>",
      to: ["info@assetica.net"],
      replyTo: email,
      subject: `New Enquiry from ${firstName} ${lastName}${service ? ` — ${service}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 20px;">
          <div style="background: #012241; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Website Enquiry</h1>
          </div>
          <div style="background: white; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; width: 140px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 600; font-size: 14px;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${email}" style="color: #0E9F9F; font-size: 14px;">${email}</a></td>
              </tr>
              ${phone ? `<tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;"><a href="tel:${phone}" style="color: #0E9F9F;">${phone}</a></td>
              </tr>` : ""}
              ${service ? `<tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;"><span style="background: #e0f7f4; color: #0E9F9F; padding: 3px 10px; border-radius: 20px; font-size: 13px; font-weight: 600;">${service}</span></td>
              </tr>` : ""}
              ${message ? `<tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #374151; font-size: 14px; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</td>
              </tr>` : ""}
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #f0fdf9; border-radius: 8px; border-left: 4px solid #0E9F9F;">
              <p style="margin: 0; font-size: 13px; color: #374151;">
                💡 Hit <strong>Reply</strong> to respond directly to ${firstName} at <a href="mailto:${email}" style="color: #0E9F9F;">${email}</a>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (teamEmail.error) {
      console.error("Team email error:", teamEmail.error);
      return new Response(JSON.stringify({ error: teamEmail.error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Auto-reply to enquirer
    await resend.emails.send({
      from: "Assetica <onboarding@resend.dev>",
      to: [email],
      subject: "We've received your enquiry — Assetica",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 20px;">
          <div style="background: #012241; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Thank you, ${firstName}!</h1>
          </div>
          <div style="background: white; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
            <p style="color: #374151; font-size: 15px; line-height: 1.7;">
              We've received your enquiry and our valuation experts will get back to you within <strong>1 business day</strong>.
            </p>
            <p style="color: #374151; font-size: 15px; line-height: 1.7;">For urgent matters, please call us directly:</p>
            <a href="tel:+971521551198" style="display: inline-block; background: #0E9F9F; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 15px;">
              📞 +971 52 155 1198
            </a>
            <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
            <p style="color: #9ca3af; font-size: 12px;">Assetica · Business Valuation & Advisory · Dubai, GCC, UK & Europe</p>
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(JSON.stringify({ error: error.message || "Failed to send" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const config = {
  runtime: "edge",
};
