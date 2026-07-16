import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-[85vh] w-full bg-black flex items-center justify-center overflow-hidden grainy-overlay">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/canarias-cyclist-hero.jpg"
          alt="Ciclista en las Islas Canarias"
          fill
          className="object-cover opacity-70 contrast-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-20 text-center px-4">
        <h1 className="font-[var(--font-headline)] font-bold text-6xl md:text-8xl lg:text-9xl tracking-[0.2em] md:tracking-[0.3em] text-white uppercase mb-8 leading-none">
          NOT FOR<br />EVERYONE
        </h1>
        <button className="bg-white text-black font-[var(--font-headline)] font-bold tracking-widest uppercase py-5 px-12 hover:bg-accent hover:text-white transition-colors duration-0">
          Shop Collection
        </button>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <ChevronDown className="w-10 h-10 text-white animate-bounce" />
      </div>
    </section>
  )
}
