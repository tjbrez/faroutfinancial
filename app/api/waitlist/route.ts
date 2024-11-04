import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Add this line to mark the route as dynamic
export const dynamic = 'force-dynamic';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL, // Your email address
      subject: 'New Waitlist Signup!',
      text: `New signup for Far Out Financial waitlist: ${email}`,
      html: `
        <h1>New Waitlist Signup!</h1>
        <p>Someone new has joined the Far Out Financial waitlist:</p>
        <p><strong>Email:</strong> ${email}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist email error:', error);
    return NextResponse.json(
      { error: 'Failed to process waitlist signup' },
      { status: 500 }
    );
  }
}
