import { NextRequest, NextResponse } from "next/server";
import { validateLeadForm, LeadFormData } from "@/lib/validators";

export async function POST(req: NextRequest) {
  try {
    const body: LeadFormData = await req.json();

    // 1. Validation
    const { isValid, errors } = validateLeadForm(body);
    if (!isValid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // 2. Honeypot anti-spam check
    if (body.honeypot && body.honeypot.trim() !== "") {
      return NextResponse.json({ success: false, error: "Spam submission detected" }, { status: 400 });
    }

    // 3. Forward to Google Apps Script if APPS_SCRIPT_URL is provided
    const appsScriptUrl = process.env.APPS_SCRIPT_URL;
    const appsScriptToken = process.env.APPS_SCRIPT_TOKEN;

    if (appsScriptUrl) {
      try {
        await fetch(appsScriptUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: appsScriptToken,
            data: body,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.error("Apps Script forwarding failed (non-blocking):", err);
      }
    }

    // 4. Return success response
    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully.",
      firstName: body.fullName.split(" ")[0],
    });
  } catch (err: any) {
    console.error("Error processing lead:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please contact us on WhatsApp directly." },
      { status: 500 }
    );
  }
}
