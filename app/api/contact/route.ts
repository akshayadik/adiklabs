// /app/api/contact/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message, interest } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }


        await resend.emails.send({
            from: "AdikLabs <akshay@adiklabs.com>",
            to: "akshay@adiklabs.com",
            subject: `New ${interest} Inquiry from ${name}`,
            reply_to: email,
            html: `
    <h2>New Contact Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Interest:</strong> ${interest}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
        });

        await resend.emails.send({
            from: "AdikLabs <akshay@adiklabs.com>", // REQUIRED
            to: email,
            subject: "Thanks for reaching out to AdikLabs",
            html: `
    <p>Hi ${name},</p>
    
    <p>Thanks for reaching out regarding <strong>${interest}</strong>.</p>

    <p>I’ve received your message and will get back to you shortly.</p>

    <p>— Akshay from AdikLabs</p>
  `,
        });

        return NextResponse.json({ success: true });

    } catch (err) {
        return NextResponse.json({ error: "Email failed" }, { status: 500 });
    }
}