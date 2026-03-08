import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Tailwind,
} from "@react-email/components";

const theme = {
  bg: "#eef2ed",
  card: "#f8faf7",
  primary: "#2d4a36",
  foreground: "#5a7a56",
  muted: "#7a9a76",
  border: "#d5ddd3",
  accent: "#e3ebe1",
};

export default function NotificationEmail({ name, email, phone, message }) {
  return (
    <Html lang="it">
      <Head />
      <Tailwind>
        <Body className="font-sans" style={{ backgroundColor: theme.bg }}>
          <Container className="mx-auto my-10 max-w-[560px]">
            {/* Header */}
            <Section
              className="rounded-t-2xl px-8 py-6 text-center"
              style={{ backgroundColor: theme.primary }}
            >
              <Text className="m-0 text-[22px] font-bold tracking-wide text-white">
                Giacomo Ghione
              </Text>
              <Text
                className="m-0 mt-2 text-xs uppercase tracking-widest"
                style={{ color: "#b8d4b8" }}
              >
                Nutrizione e allenamento
              </Text>
            </Section>

            {/* Body */}
            <Section
              className="rounded-b-2xl px-8 py-8"
              style={{
                backgroundColor: theme.card,
              }}
            >
              <Heading
                className="mb-6 text-xl font-semibold"
                style={{ color: theme.primary }}
              >
                Nuovo messaggio dal sito
              </Heading>

              <table
                cellPadding="0"
                cellSpacing="0"
                role="presentation"
                width="100%"
              >
                <tr>
                  <td className="pb-4" width="50%">
                    <Text
                      className="m-0 mb-1 text-[11px] font-semibold uppercase tracking-wider"
                      style={{ color: theme.muted }}
                    >
                      Nome
                    </Text>
                    <Text
                      className="m-0 text-[15px] font-medium"
                      style={{ color: theme.primary }}
                    >
                      {name}
                    </Text>
                  </td>
                  <td className="pb-4" width="50%">
                    <Text
                      className="m-0 mb-1 text-[11px] font-semibold uppercase tracking-wider"
                      style={{ color: theme.muted }}
                    >
                      Telefono
                    </Text>
                    <Text
                      className="m-0 text-[15px] font-medium"
                      style={{ color: theme.primary }}
                    >
                      {phone || "Non fornito"}
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td className="pb-4" colSpan="2">
                    <Text
                      className="m-0 mb-1 text-[11px] font-semibold uppercase tracking-wider"
                      style={{ color: theme.muted }}
                    >
                      Email
                    </Text>
                    <Text
                      className="m-0 text-[15px] font-medium"
                      style={{ color: theme.primary }}
                    >
                      {email}
                    </Text>
                  </td>
                </tr>
              </table>

              <Hr style={{ borderColor: theme.border }} className="my-5" />

              <Text
                className="m-0 mb-2 text-[11px] font-semibold uppercase tracking-wider"
                style={{ color: theme.muted }}
              >
                Messaggio
              </Text>
              <Section
                className="rounded-xl p-4"
                style={{ backgroundColor: theme.accent }}
              >
                <Text
                  className="m-0 text-[15px] leading-relaxed"
                  style={{ color: theme.primary, whiteSpace: "pre-wrap" }}
                >
                  {message}
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
