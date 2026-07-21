import { Truck, RotateCcw, ShieldCheck } from "lucide-react"

type TrustBadge = {
  icon: typeof Truck
  title: string
  description: string
}

const badges: TrustBadge[] = [
  {
    icon: Truck,
    title: "Envío Gratuito",
    description: "En todos los pedidos superiores a 100€ dentro de la península.",
  },
  {
    icon: RotateCcw,
    title: "Devolución Gratuita",
    description: "Los pedidos pueden devolverse en un plazo de 14 días.",
  },
  {
    icon: ShieldCheck,
    title: "Garantía Técnica",
    description: "Nuestras prendas técnicas cuentan con 30 días de garantía.",
  },
]

export function TrustBadges() {
  return (
    <section className="w-full py-12 md:py-16 bg-surface-container px-6 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-8">
        {badges.map((badge) => {
          const Icon = badge.icon

          return (
            <div key={badge.title} className="flex flex-col items-start gap-3">
              <Icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
              <h3 className="font-[var(--font-headline)] font-bold text-sm tracking-widest uppercase">
                {badge.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {badge.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
