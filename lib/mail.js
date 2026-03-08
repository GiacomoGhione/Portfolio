import nodemailer from "nodemailer";
import { render } from "@react-email/components";
import NotificationEmail from "@/emails/NotificationEmail";
import ConfirmationEmail from "@/emails/ConfirmationEmail";

const isDev = process.env.NODE_ENV !== "production";

/** Crea il transporter: Ethereal in dev, SMTP reale in produzione */
async function getTransporter() {
  if (isDev) {
    const testAccount = await nodemailer.createTestAccount();
    return nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

/** Invia email e in dev logga il link di preview Ethereal */
async function sendMail(options) {
  const transporter = await getTransporter();
  const info = await transporter.sendMail(options);

  if (isDev) {
    console.log("📧 Preview email:", nodemailer.getTestMessageUrl(info));
  }

  return info;
}

/** Email di notifica inviata a te */
export async function sendNotificationEmail({ name, email, phone, message }) {
  const html = await render(NotificationEmail({ name, email, phone, message }));

  await sendMail({
    from: `"Giacomo Ghione" <${process.env.SMTP_USER}>`,
    to: "info@giacomoghione.it",
    subject: `Nuovo messaggio da ${name}`,
    replyTo: email,
    html,
  });
}

/** Email di conferma inviata a chi compila il form */
export async function sendConfirmationEmail({ name, email }) {
  const html = await render(ConfirmationEmail({ name }));

  await sendMail({
    from: `"Giacomo Ghione" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Ho ricevuto il tuo messaggio!",
    html,
  });
}
