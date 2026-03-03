import type { Locale } from '@/shared/i18n/routing'

export type CurrencyCode = 'EUR' | 'USD' | 'GBP'

export type Money = {
  amount: number // пока храню как число
  currency: CurrencyCode
}

export type ProductVariant = {
  id: string
  size?: string
  color?: string
  inStock: boolean
}

/** Локализованные поля: ключ — локаль (ru/en), значение — текст */
export type LocalizedText = Record<Locale, string>

export type Product = {
  id: string
  slug: string // для URL: /product/[slug]
  title: LocalizedText
  description?: LocalizedText
  price: Money

  images: string[] // пути из /public или URL
  categorySlug: string // чтобы связать с категориями (пока достаточно)

  variants?: ProductVariant[] // если товара нет вариантов — можно не задавать
  badges?: Array<'new' | 'sale' | 'bestseller'>
}
