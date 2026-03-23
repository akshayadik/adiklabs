// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;
        
        if (!apiKey) {
            return NextResponse.json({ error: "API configuration missing" }, { status: 500 });
        }

        const resend = new Resend(apiKey);
        const { name, email, message, interest } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Email to you
        await resend.emails.send({
            from: "AdikLabs <akshay@adiklabs.com>",
            to: "akshay@adiklabs.com",
            subject: `New ${interest} Inquiry from ${name}`,
            replyTo: email,
            html: `<h3>New Message</h3><p><strong>Name:</strong> ${name}</p><p>${message}</p>`,
        });

        // Confirmation to user
        await resend.emails.send({
            from: "AdikLabs <akshay@adiklabs.com>",
            to: email,
            subject: "Thanks for reaching out to AdikLabs",
            html: `<p>Hi ${name}, thanks for your interest in <strong>${interest}</strong>. I'll get back to you shortly.</p>`,
        });

        return NextResponse.json({ success: true });

    } catch (err) {
        console.error("Resend Error:", err);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}