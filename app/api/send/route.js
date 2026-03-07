import { sendNotificationEmail, sendConfirmationEmail } from "@/lib/mail";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validazione base
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, email e messaggio sono obbligatori." },
        { status: 400 },
      );
    }

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
