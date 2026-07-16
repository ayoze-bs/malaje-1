import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Colección | MALAJE",
  description: "Explora la colección técnica MALAJE: ropa deportiva de precisión para el atleta de alta intensidad.",
}

export default function ColeccionPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navigation />
      <ProductGrid />
      <Footer />
    </main>
  )
}
