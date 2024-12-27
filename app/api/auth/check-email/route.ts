import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
      const { email } = await request.json();
  
      const user = await prisma.user.findUnique({
        where: { email }
      });
  
      if (!user) {
        // Add to LeadCapture when email doesn't exist
        await prisma.LeadCapture.upsert({
          where: {
            email_source: {
              email,
              source: 'signup'
            }
          },
          update: {
            lastAttempt: new Date(),
            attempts: { increment: 1 }
          },
          create: {
            email,
            source: 'signup'
          }
        });
      }
  
      return NextResponse.json({ exists: !!user });
    } catch (error) {
      console.error("Email check error:", error);
      return NextResponse.json(
        { error: "Error checking email" },
        { status: 500 }
      );
    }
}
