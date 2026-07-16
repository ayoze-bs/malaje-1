import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contacto | MALAJE",
  description: "Ponte en contacto con MALAJE.",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navigation />
      <section className="w-full py-16 md:py-24 bg-black text-white px-6 flex flex-col items-center">
        <div className="max-w-xl w-full space-y-10">
          <h1 className="font-[var(--font-headline)] font-bold text-5xl md:text-6xl tracking-tighter uppercase text-center">
            Contacto
          </h1>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  )
}
