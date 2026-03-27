---
description: "Review completa multi-agente del progetto con focus su architettura, codice, UX, sicurezza e performance."
name: "Review Progetto Completa (Multi-Agente)"
argument-hint: "focus opzionale (es: performance, UX, sicurezza, test, SEO)"
agent: "agent"
---

Esegui una review end-to-end di questo repository in modalita multi-agente.

Obiettivo:

- Individuare problemi reali (bug, regressioni comportamentali, rischi di sicurezza, anti-pattern, debt tecnica, gap di test).
- Dare priorita alle issue ad alto impatto.
- Fornire fix concreti e verificabili.

Istruzioni operative:

1. Parti con una mappatura veloce del repository (stack, aree funzionali, entrypoint, parti ad alto rischio).
2. Orchestralo in multi-agente invocando piu volte il subagent `Explore`, ciascuna con focus specifico:
   - Architettura e data flow (routing, boundaries, coupling).
   - Frontend/UI/UX e accessibilita.
   - Backend/API, validazione input, error handling.
   - Performance, caching, rendering, bundle.
   - Sicurezza applicativa e gestione segreti.
   - Qualita del codice e strategia test.
3. Esegui le analisi in parallelo quando possibile e poi consolida i risultati eliminando duplicati.
4. Usa in modo esplicito le skill installate quando pertinenti al dominio:
   - `ui-ux-pro-max`
   - `web-design-guidelines`
   - `vercel-react-best-practices`
   - `vercel-composition-patterns`
   - `shadcn`
5. Per ogni finding, verifica con riferimenti puntuali ai file.

Formato output (obbligatorio):

1. Findings (ordinati per severita: Critical, High, Medium, Low)
   - Titolo breve
   - Impatto (cosa puo rompersi e quando)
   - Evidenza (file e punto del codice)
   - Fix suggerito (specifico)
2. Open Questions / Assunzioni
3. Test mancanti o da rafforzare
4. Piano di remediation prioritizzato (quick wins, medio termine, lungo termine)

Regole di qualita:

- Niente consigli generici: ogni punto deve essere agganciato a codice reale.
- Evidenzia esplicitamente rischi di regressione.
- Se non trovi issue significative in un'area, dichiaralo chiaramente e indica eventuali limiti della verifica.

Focus aggiuntivo richiesto dall'utente:
{{focus opzionale}}
