import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { getProductBySlug } from '@/entities/product/api'
import { ProductDetailView } from '@/widgets/ProductDetail'
import { routing } from '@/shared/i18n/routing'
import type { Metadata } from 'next'
import type { Locale } from '@/shared/i18n/routing'

interface Props {
  params: Promise<{ slug: string }>
}

function getLocalizedTitle(
  title: Record<Locale, string>,
  locale: Locale
): string {
  return title[locale] ?? title[routing.defaultLocale] ?? ''
}

function getLocalizedDescription(
  description: Record<Locale, string> | undefined,
  locale: Locale
): string | undefined {
  if (!description) return undefined
  return description[locale] ?? description[routing.defaultLocale] ?? undefined
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const locale = (await getLocale()) as Locale
  const product = await getProductBySlug(slug)
  if (!product) return { title: 'Товар не найден' }
  return {
    title: getLocalizedTitle(product.title, locale),
    description: getLocalizedDescription(product.description, locale)
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return <ProductDetailView product={product} />
}
