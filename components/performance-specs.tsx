import { Gauge, Minimize2, Wind } from "lucide-react"

const specs = [
  {
    icon: Gauge,
    title: "Aero-Fit",
    description: "Second-skin tailoring for maximum drag reduction at high velocity.",
    variant: "light" as const
  },
  {
    icon: Minimize2,
    title: "Pro Compression",
    description: "Muscle vibration dampening for extended peak power output.",
    variant: "dark" as const
  },
  {
    icon: Wind,
    title: "Ultra-Breathability",
    description: "Advanced micro-mesh panels for thermal regulation in the void.",
    variant: "light" as const
  }
]

export function PerformanceSpecs() {
  return (
    <section className="w-full py-12 md:py-16 bg-white px-6 md:px-12">
      <div className="flex flex-col md:flex-row gap-4 items-stretch h-full">
        {specs.map((spec, index) => {
          const Icon = spec.icon
          const isDark = spec.variant === "dark"
          
          return (
            <div 
              key={index}
              className={`flex-1 p-8 flex flex-col justify-between min-h-[280px] ${
                isDark ? "bg-black text-white" : "bg-surface-container-highest text-black"
              }`}
            >
              <Icon className={`w-12 h-12 ${isDark ? "text-accent" : "text-black"}`} strokeWidth={1.5} />
              
              <div>
                <h4 className="font-[var(--font-headline)] font-bold text-2xl tracking-widest uppercase mb-4">
                  {spec.title}
                </h4>
                <p className={`font-sans uppercase text-xs tracking-widest leading-relaxed ${
                  isDark ? "text-muted" : "text-secondary"
                }`}>
                  {spec.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
