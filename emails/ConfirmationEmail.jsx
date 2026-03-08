import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Link,
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

export default function ConfirmationEmail({ name }) {
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
                className="text-xl font-semibold"
                style={{ color: theme.primary }}
              >
                Ciao {name},
              </Heading>

              <Text
                className="text-[15px] leading-relaxed"
                style={{ color: theme.primary }}
              >
                Grazie per avermi contattato! Ho ricevuto il tuo messaggio e ti
                risponderò il prima possibile.
              </Text>

              <Hr style={{ borderColor: theme.border }} className="my-6" />

              <Text
                className="m-0 text-[15px] leading-relaxed"
                style={{ color: theme.primary }}
              >
                A presto,
                <br />
                <strong>Giacomo Ghione</strong>
              </Text>

              {/* Social / Website */}
              <Section className="mt-6 text-center">
                <Link
                  href="https://www.giacomoghione.it"
                  className="mr-4 text-xs font-medium"
                  style={{ color: theme.muted }}
                >
                  www.giacomoghione.it
                </Link>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
