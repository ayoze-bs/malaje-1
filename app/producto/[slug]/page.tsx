import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { FeaturedProduct } from "@/components/featured-product"
import { Footer } from "@/components/footer"
import { getProductBySlug, getProducts } from "@/lib/products"

export function generateStaticParams() {
  return getProducts().map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return { title: "Producto no encontrado | MALAJE" }
  }

  return {
    title: `${product.name} | MALAJE`,
    description: product.description,
  }
}

export default async function ProductoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-24">
      <Navigation />
      <FeaturedProduct product={product} />
      <Footer />
    </main>
  )
}
