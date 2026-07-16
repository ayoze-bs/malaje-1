import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { ManifestoSection } from "@/components/manifesto-section"
import { LifestyleSection } from "@/components/lifestyle-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Historia | MALAJE",
  description: "Actitud, disciplina, identidad. La filosofía detrás de MALAJE.",
}

export default function HistoriaPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navigation />
      <ManifestoSection />
      <LifestyleSection />
      <Footer />
    </main>
  )
}
