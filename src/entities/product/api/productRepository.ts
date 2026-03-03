import type { Product } from '../model/types'
import {
  getProductBySlug as getBySlug,
  getProductsByCategory as getByCategory,
  getAllProducts as getAll
} from '../lib/productHelpers'

/**
 * Репозиторий продуктов. Сейчас отдаёт моковые данные,
 * в будущем здесь будут вызовы API и маппинг ответов в Product.
 */

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const product = getBySlug(slug)
  return product ?? null
}

export async function getProductsByCategory(
  categorySlug: string
): Promise<Product[]> {
  return getByCategory(categorySlug)
}

export async function getAllProducts(): Promise<Product[]> {
  return getAll()
}
