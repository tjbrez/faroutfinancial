import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    const user = await prisma.user.findUnique({
      where: { email }
    });

    return NextResponse.json({ exists: !!user });
  } catch (error) {
    console.error("Email check error:", error);
    return NextResponse.json(
      { error: "Error checking email" },
      { status: 500 }
    );
  }
}
