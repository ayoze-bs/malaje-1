import Image from "next/image"
import Link from "next/link"
import { getCategories } from "@/lib/categories"

export function CategoryGrid() {
  const categories = getCategories()

  return (
    <section className="w-full py-12 md:py-16 bg-surface px-6 md:px-8">
      <h2 className="font-[var(--font-headline)] font-bold text-2xl md:text-3xl tracking-widest uppercase mb-8">
        Comprar por categoría
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className="group relative aspect-[3/4] overflow-hidden bg-neutral-100 block"
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-6 left-6 font-[var(--font-headline)] font-bold text-white text-xl md:text-2xl tracking-widest uppercase">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
