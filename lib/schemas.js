import { z } from "zod";

// ============================================
// SCHEMA
// ============================================

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Il nome deve avere almeno 2 caratteri.")
    .max(80, "Il nome può avere al massimo 80 caratteri."),
  email: z.string().email("Inserisci un indirizzo email valido."),
  phone: z
    .string()
    .max(20, "Il numero di telefono è troppo lungo.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Il messaggio deve avere almeno 10 caratteri.")
    .max(1000, "Il messaggio può avere al massimo 1000 caratteri."),
  privacy: z.literal(true, {
    error: "Devi accettare la Privacy Policy.",
  }),
});

// ============================================
// HELPER (parse per route API)
// ============================================

/**
 * Helper generico: parsa un body con uno schema Zod
 * @param {Object} body - Body della richiesta
 * @param {z.ZodSchema} schema - Schema Zod
 * @returns {{ success: true, data: Object } | { success: false, error: string }}
 */
function parseBody(body, schema) {
  const result = schema.safeParse(body);

  if (!result.success) {
    const message = result.error.issues.map((i) => i.message).join(", ");
    return { success: false, error: message };
  }

  return { success: true, data: result.data };
}

/**
 * Parsa e valida il body per il form contatti
 */
export function parseContactForm(body) {
  return parseBody(body, contactFormSchema);
}
