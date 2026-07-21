"use client"

import { useState, type FormEvent } from "react"
import { toast } from "sonner"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    if (!EMAIL_PATTERN.test(email)) {
      setError("Introduce un email válido.")
      return
    }

    setIsSubmitting(true)

    try {
      // Integración con proveedor de email marketing pendiente de conectar.
      await new Promise((resolve) => setTimeout(resolve, 500))
      toast("Te has suscrito correctamente")
      setEmail("")
    } catch {
      setError("No se ha podido completar la suscripción. Inténtalo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full py-16 md:py-20 bg-black text-white px-6 flex flex-col items-center justify-center text-center">
      <div className="max-w-xl w-full space-y-6">
        <h2 className="font-[var(--font-headline)] font-bold text-3xl md:text-4xl tracking-widest uppercase">
          Únete a MALAJE
        </h2>
        <p className="font-sans text-muted tracking-wide uppercase text-xs leading-relaxed">
          Regístrate para recibir un 15% de descuento en tu primer pedido.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" noValidate>
          <label htmlFor="newsletter-email" className="sr-only">
            Dirección de email
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Dirección de email"
            aria-invalid={error !== null}
            aria-describedby={error ? "newsletter-error" : undefined}
            className="flex-1 bg-transparent border border-white/30 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-accent"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-black font-[var(--font-headline)] font-bold tracking-widest uppercase py-3 px-8 hover:bg-accent hover:text-white transition-colors duration-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Apúntate"}
          </button>
        </form>

        {error && (
          <p id="newsletter-error" role="alert" className="text-accent text-xs uppercase tracking-widest">
            {error}
          </p>
        )}
      </div>
    </section>
  )
}
