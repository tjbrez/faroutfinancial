import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, source, sendEmail } = await request.json();

    // Save to LeadCapture
    await prisma.leadCapture.upsert({
      where: {
        email_source: {
          email,
          source: 'waitlist'
        }
      },
      update: {
        lastAttempt: new Date(),
        attempts: { increment: 1 }
      },
      create: {
        email,
        source: 'waitlist'
      }
    });

    // Send welcome email if requested
    if (sendEmail) {
      await resend.emails.send({
        from: 'Far Out Financial <hello@faroutfinancial.com>',
        to: email,
        subject: 'Welcome to the Far Out Financial Waitlist! 🌊',
        html: `
          <h1>Hang Loose! You're on the List!</h1>
          <p>Thanks for joining the Far Out Financial waitlist. We're stoked to have you along for the ride!</p>
          <p>We'll keep you posted on our launch and any other exciting updates.</p>
          <p>Catch you on the flip side! 🏄‍♂️</p>
        `
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json({ error: "Error saving to waitlist" }, { status: 500 });
  }
}
