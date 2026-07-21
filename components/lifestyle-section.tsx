import Image from "next/image"

export function LifestyleSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] bg-surface grainy-overlay overflow-hidden">
      <Image
        src="/images/canarias-cyclist-road.jpg"
        alt="Ciclista en carretera de montaña en Canarias"
        fill
        className="object-cover contrast-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      <div className="absolute inset-0 flex items-end md:items-center justify-center z-20 pb-14 md:pb-0">
        <div className="text-center px-8">
          <p className="font-[var(--font-headline)] font-bold text-accent tracking-[0.3em] md:tracking-[0.5em] text-xs uppercase mb-8">
            IDENTITY // ASCENT
          </p>
          <h3 className="font-[var(--font-headline)] font-bold text-white text-4xl md:text-6xl lg:text-7xl tracking-tighter uppercase max-w-2xl">
            THE ROAD IS YOUR MONOLITH.
          </h3>
        </div>
      </div>
    </section>
  )
}
