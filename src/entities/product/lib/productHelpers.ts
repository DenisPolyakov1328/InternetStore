import { mockProducts } from '../model/mockProducts'
import type { Product } from '../model/types'

export function getProductBySlug(slug: string): Product | undefined {
  return mockProducts.find((p) => p.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return mockProducts.filter((p) => p.categorySlug === categorySlug)
}

export function getAllProducts(): Product[] {
  return mockProducts
}
