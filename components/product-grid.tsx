import Image from "next/image"
import Link from "next/link"
import { getProducts, formatPrice } from "@/lib/products"

export function ProductGrid() {
  const products = getProducts()

  return (
    <section className="w-full py-12 md:py-16 bg-surface px-6 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/producto/${product.slug}`}
            className="bg-surface-container-low p-6 md:p-8 group cursor-pointer block"
          >
            <div className="aspect-square overflow-hidden bg-neutral-100 mb-6 relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className={`object-contain transition-transform duration-700 group-hover:scale-105 ${product.flipImage ? "scale-x-[-1]" : ""}`}
              />
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-[var(--font-headline)] font-bold text-lg tracking-widest uppercase mb-2">
                  {product.name}
                </h3>
                <p className="font-[var(--font-headline)] font-bold text-accent text-xs tracking-widest uppercase">
                  {product.series}
                </p>
              </div>
              <span className="font-[var(--font-headline)] font-bold text-lg">
                {formatPrice(product.price)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
