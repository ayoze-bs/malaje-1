export type Category = {
  id: string
  name: string
  href: string
  image: string
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Maillots",
    href: "/coleccion",
    image: "/images/jersey-raven.png",
  },
  {
    id: "2",
    name: "Culottes",
    href: "/coleccion",
    image: "/images/canarias-cyclist-road.jpg",
  },
  {
    id: "3",
    name: "Accesorios",
    href: "/coleccion",
    image: "/images/canarias-cyclist-hero.jpg",
  },
]

export function getCategories(): Category[] {
  return categories
}
