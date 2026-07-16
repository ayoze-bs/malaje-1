import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProduct } from "@/components/featured-product"
import { ManifestoSection } from "@/components/manifesto-section"
import { ProductGrid } from "@/components/product-grid"
import { PerformanceSpecs } from "@/components/performance-specs"
import { LifestyleSection } from "@/components/lifestyle-section"
import { Footer } from "@/components/footer"
import { getProducts } from "@/lib/products"

export default function Home() {
  const [featuredProduct] = getProducts()

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedProduct product={featuredProduct} />
      <ManifestoSection />
      <ProductGrid />
      <PerformanceSpecs />
      <LifestyleSection />
      <Footer />
    </main>
  )
}
