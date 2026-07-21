import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-[85vh] w-full bg-black overflow-hidden grainy-overlay">
      {/* Foto de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/canarias-cyclist-hero.jpg"
          alt="Ciclistas en las Islas Canarias"
          fill
          className="object-cover opacity-90 contrast-125"
          priority
        />
        {/* Degradado solo a la izquierda, para que el texto sea legible sin tapar la foto entera */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent" />
      </div>

      {/* Bloque diagonal rosa a la derecha */}
      <div
        className="absolute inset-y-0 right-0 z-10 w-[38%] bg-accent hidden md:block"
        style={{ clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />

      {/* Contenido: texto alineado a la izquierda */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 max-w-4xl">
        <p className="font-[var(--font-headline)] font-bold text-xs sm:text-sm tracking-[0.3em] text-accent uppercase mb-4">
          Colección 2026 — Rendimiento sin atajos
        </p>
        <h1 className="font-[var(--font-headline)] font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white uppercase mb-10 leading-[0.9]">
          NO HAY<br />META FÁCIL
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-accent text-white font-[var(--font-headline)] font-bold tracking-widest uppercase py-5 px-10 hover:bg-white hover:text-black transition-colors duration-0">
            Comprar Colección
          </button>
          <button className="border-2 border-white text-white font-[var(--font-headline)] font-bold tracking-widest uppercase py-5 px-10 hover:bg-white hover:text-black transition-colors duration-0">
            Ver la Historia
          </button>
        </div>
      </div>
    </section>
  )
}
