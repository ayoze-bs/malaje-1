import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { CategoryGrid } from "@/components/category-grid"
import { FeaturedProduct } from "@/components/featured-product"
import { ManifestoSection } from "@/components/manifesto-section"
import { TrustBadges } from "@/components/trust-badges"
import { ProductGrid } from "@/components/product-grid"
import { PerformanceSpecs } from "@/components/performance-specs"
import { LifestyleSection } from "@/components/lifestyle-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { getProducts } from "@/lib/products"

export default function Home() {
  const [featuredProduct] = getProducts()

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CategoryGrid />
      <FeaturedProduct product={featuredProduct} />
      <ManifestoSection />
      <TrustBadges />
      <ProductGrid />
      <PerformanceSpecs />
      <LifestyleSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
