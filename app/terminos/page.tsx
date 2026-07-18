import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Términos | MALAJE",
  description: "Términos y condiciones de MALAJE.",
}

export default function TerminosPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navigation />
      <section className="w-full py-16 md:py-24 px-6 flex flex-col items-center">
        <div className="max-w-xl w-full space-y-6 text-center">
          <h1 className="font-[var(--font-headline)] font-bold text-4xl md:text-5xl tracking-tight uppercase">
            Términos
          </h1>
          <p className="font-sans text-secondary">
            Estamos redactando nuestros términos y condiciones. Si tienes alguna duda,
            escríbenos desde la página de{" "}
            <a href="/contacto" className="text-accent underline">
              contacto
            </a>
            .
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
