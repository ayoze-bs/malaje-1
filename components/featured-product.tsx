"use client"

import { Zap } from "lucide-react"
import Image from "next/image"
import { toast } from "sonner"
import type { Product } from "@/lib/products"
import { formatPrice } from "@/lib/products"

export function FeaturedProduct({ product }: { product: Product }) {
  return (
    <section className="w-full py-12 md:py-16 bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 gap-8 md:gap-16">
      <div className="w-full md:w-1/2 max-w-xl">
        <div className="aspect-square relative overflow-hidden bg-neutral-100 flex items-center justify-center">
          <Image
            src={product.image}
            alt={`MALAJE ${product.name} - Vista frontal y trasera`}
            fill
            className={`object-contain hover:scale-105 transition-transform duration-500 ${product.flipImage ? "scale-x-[-1]" : ""}`}
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-start text-left">
        <div className="mb-2">
          <span className="font-[var(--font-headline)] font-bold text-accent tracking-widest text-xs uppercase">
            {product.series}
          </span>
        </div>

        <h2 className="font-[var(--font-headline)] font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-black mb-4 uppercase">
          {product.name}
        </h2>

        <p className="font-sans text-base md:text-lg text-secondary mb-6 max-w-md">
          {product.description}
        </p>

        <div className="flex items-end gap-6 mb-6">
          <span className="font-[var(--font-headline)] font-bold text-3xl text-black">
            {formatPrice(product.price)}
          </span>
          {product.badge && (
            <span className="font-[var(--font-headline)] font-bold text-accent text-xs tracking-widest uppercase mb-2">
              {product.badge}
            </span>
          )}
        </div>

        <button
          className="w-full md:w-auto bg-black text-white font-[var(--font-headline)] font-bold tracking-widest uppercase py-4 px-12 hover:bg-accent transition-colors duration-0 flex items-center justify-center gap-3"
          onClick={() => toast("Disponible próximamente — contáctanos mientras tanto", { duration: 4000 })}
        >
          Quick Buy <Zap className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}
