"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", phone: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-8 overflow-hidden min-w-0">
      {isSubmitted ? (
        <motion.div
          className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Send className="h-8 w-8 text-accent" strokeWidth={1.5} />
          </motion.div>
          <h3 className="font-sans text-2xl mb-2">Messaggio inviato!</h3>
          <p className="text-muted-foreground">
            Ti risponderò il prima possibile. Grazie!
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium text-muted-foreground"
              >
                Nome completo
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Mario Rossi"
                className="rounded-xl"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-muted-foreground"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="mario@email.com"
                className="rounded-xl"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label
              htmlFor="phone"
              className="text-sm font-medium text-muted-foreground"
            >
              Telefono (opzionale)
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+39 333 123 4567"
              className="rounded-xl"
              value={formState.phone}
              onChange={(e) =>
                setFormState({ ...formState, phone: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label
              htmlFor="message"
              className="text-sm font-medium text-muted-foreground"
            >
              Messaggio
            </Label>
            <Textarea
              id="message"
              placeholder="Parlami dei tuoi obiettivi o delle tue domande..."
              className="min-h-[120px] rounded-xl resize-none"
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              required
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full lg:w-auto rounded-full bg-foreground hover:bg-foreground/90 group pr-0 tracking-wide"
            disabled={isSubmitting}
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
                <span className="flex-1 -mr-10 text-center text-background text-sm font-medium">
                  Invia messaggio
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/25 group-hover:bg-primary-foreground/30 transition-colors shrink-0">
                  <Send className="w-6 h-6 mr-px mt-px text-primary-foreground" />
                </span>
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
