import { sendNotificationEmail, sendConfirmationEmail } from "@/lib/mail";
import { parseContactForm } from "@/lib/schemas";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body || Array.isArray(body)) {
      return NextResponse.json({ error: "Body non valido." }, { status: 400 });
    }

    const parsed = parseContactForm(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }

    const { name, email, phone, message } = parsed.data;

    await Promise.all([
      sendNotificationEmail({ name, email, phone, message }),
      sendConfirmationEmail({ name, email }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Errore invio email:", error);
    return NextResponse.json(
      { error: "Errore durante l'invio dell'email." },
      { status: 500 },
    );
  }
}
