import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, phone } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // TODO: integrate with email provider (Mailchimp, Resend, ConvertKit, etc.)
    console.log("New signup:", { email, name, phone });

    return NextResponse.json({ success: true, message: "You're on the list!" });
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
