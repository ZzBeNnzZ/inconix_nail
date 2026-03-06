import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, name, phone } = body;

  if (!email || !name || !phone) {
    return NextResponse.json(
      { error: "Name, email, and phone are required" },
      { status: 400 },
    );
  }

  const supabase = await createClient();

  const { error } = await supabase.rpc("insert_soft_opening_reservation", {
    p_name: name,
    p_email: email,
    p_phone: phone,
  });

  if (error) {
    if (error.code === "P0001" && error.message.includes("SPOTS_FULL")) {
      return NextResponse.json({ error: "spots_full" }, { status: 409 });
    }
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "already_registered" },
        { status: 409 },
      );
    }
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
