import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/** Escape HTML entities to prevent XSS in email body */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/** Email di notifica inviata a te */
export async function sendNotificationEmail({ name, email, phone, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Non fornito");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  await transporter.sendMail({
    from: `"Giacomo Ghione" <${process.env.SMTP_USER}>`,
    to: "info@giacomoghione.it",
    subject: `Nuovo messaggio da ${safeName}`,
    replyTo: email,
    html: `
      <h2>Nuovo messaggio dal sito</h2>
      <p><strong>Nome:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Telefono:</strong> ${safePhone}</p>
      <hr />
      <p><strong>Messaggio:</strong></p>
      <p>${safeMessage}</p>
    `,
  });
}

/** Email di conferma inviata a chi compila il form */
export async function sendConfirmationEmail({ name, email }) {
  const safeName = escapeHtml(name);

  await transporter.sendMail({
    from: `"Giacomo Ghione" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Ho ricevuto il tuo messaggio!",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Ciao ${safeName},</h2>
        <p>Grazie per avermi contattato! Ho ricevuto il tuo messaggio e ti risponderò il prima possibile.</p>
        <p>Nel frattempo, se hai altre domande, rispondi pure a questa email.</p>
        <br />
        <p>A presto,</p>
        <p><strong>Giacomo Ghione</strong></p>
      </div>
    `,
  });
}
