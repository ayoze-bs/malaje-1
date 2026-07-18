import type { MetadataRoute } from "next"
import { getProducts } from "@/lib/products"

const BASE_URL = "https://malajeclub.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/coleccion", "/historia", "/contacto", "/privacidad", "/terminos"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }))

  const productRoutes = getProducts().map((product) => ({
    url: `${BASE_URL}/producto/${product.slug}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...productRoutes]
}
