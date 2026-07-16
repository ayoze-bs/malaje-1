export type Product = {
  id: string
  slug: string
  name: string
  series: string
  price: number
  image: string
  description: string
  flipImage?: boolean
  badge?: string
}

export const products: Product[] = [
  {
    id: "1",
    slug: "raven-jersey",
    name: "RAVEN JERSEY",
    series: "Signature Collection",
    price: 189,
    image: "/images/jersey-raven.png",
    description:
      "Diseño geométrico exclusivo con el cuervo MALAJE. Tejido técnico de alto rendimiento con patrón asimétrico en negro, blanco y magenta.",
    badge: "Limited Edition",
  },
  {
    id: "2",
    slug: "raven-jersey-dark",
    name: "RAVEN JERSEY DARK",
    series: "Stealth Edition",
    price: 189,
    image: "/images/jersey-raven.png",
    description: "Versión trasera con franja magenta.",
    flipImage: true,
  },
]

export function getProducts(): Product[] {
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`
}
