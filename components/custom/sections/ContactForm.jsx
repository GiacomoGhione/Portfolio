"use client";

import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";

import { contactFormSchema } from "@/lib/schemas";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      privacy: false,
    },
    validators: {
      onSubmit: contactFormSchema,
    },
    onSubmit: async ({ value }) => {
      setServerError("");

      try {
        const res = await fetch("/api/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: value.name,
            email: value.email,
            phone: value.phone,
            message: value.message,
            privacy: value.privacy,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Errore durante l'invio.");
        }

        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } catch (err) {
        setServerError(err.message);
      }
    },
  });

  if (isSubmitted) {
    return (
      <div className="rounded-3xl bg-card p-8 overflow-hidden min-w-0 lg:mt-10">
        <motion.div
          className="flex flex-col items-center justify-center h-full min-h-100 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/25 mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Send className="h-8 w-8 mt-1 mr-0.5" strokeWidth={1.5} />
          </motion.div>
          <h3 className="font-sans text-2xl mb-2">Messaggio inviato!</h3>
          <p className="text-muted-foreground">
            Ti risponderò il prima possibile. Grazie!
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-card p-8 overflow-hidden min-w-0 lg:mt-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        noValidate
      >
        <FieldGroup>
          {/* Nome + Email */}
          <div className="grid sm:grid-cols-2 gap-4">
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Nome completo</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Inserisci il tuo nome"
                      autoComplete="name"
                      className="rounded-xl text-muted-foreground"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="email"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Inserisci la tua email"
                      autoComplete="email"
                      className="rounded-xl text-muted-foreground"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
          </div>

          {/* Telefono */}
          <form.Field
            name="phone"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>
                    Telefono (opzionale)
                  </FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="tel"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="Inserisci il tuo numero di telefono"
                    autoComplete="tel"
                    className="rounded-xl text-muted-foreground"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          {/* Messaggio */}
          <form.Field
            name="message"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Messaggio</FieldLabel>
                  <Textarea
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="Parlami dei tuoi obiettivi o delle tue domande..."
                    className="min-h-30 rounded-xl resize-none text-muted-foreground"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          {/* Privacy */}
          <form.Field
            name="privacy"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field orientation="horizontal" data-invalid={isInvalid}>
                  <Checkbox
                    id={field.name}
                    name={field.name}
                    checked={field.state.value}
                    onCheckedChange={field.handleChange}
                    aria-invalid={isInvalid}
                  />
                  <div className="flex flex-col">
                    <FieldLabel
                      htmlFor={field.name}
                      className="text-xs text-muted-foreground font-normal leading-relaxed cursor-pointer"
                    >
                      Ho letto e accetto la{" "}
                      <a
                        href="https://www.iubenda.com/privacy-policy/64509424"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-foreground transition-colors"
                      >
                        Privacy Policy
                      </a>
                    </FieldLabel>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </div>
                </Field>
              );
            }}
          />

          {/* Submit */}
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <Button
                type="submit"
                size="lg"
                className="w-full lg:w-auto rounded-full bg-foreground hover:bg-foreground/90 group pr-0 tracking-wide"
                disabled={!canSubmit || isSubmitting}
              >
                {isSubmitting ? (
                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="h-4 w-4 border-2 border-background/30 border-t-background rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                    Invio in corso...
                  </motion.div>
                ) : (
                  <>
                    <span className="flex-1 -mr-6 text-center text-background text-sm font-medium">
                      Invia messaggio
                    </span>
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/25 group-hover:bg-primary-foreground/30 transition-colors shrink-0">
                      <Send className="w-6 h-6 mr-px mt-px text-primary-foreground" />
                    </span>
                  </>
                )}
              </Button>
            )}
          />

          {serverError && (
            <p className="text-destructive text-sm text-center">
              {serverError}
            </p>
          )}
        </FieldGroup>
      </form>
    </div>
  );
}
