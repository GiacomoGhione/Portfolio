import { sendNotificationEmail, sendConfirmationEmail } from "@/lib/mail";
import { parseContactForm } from "@/lib/schemas";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = parseContactForm(body);

    if (!parsed.success) {
      NextResponse.json({ error: parsed.error }, { status: 400 });
    }

    const { name, email, phone, message } = parsed.data;

    // Invia entrambe le email in parallelo
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
