import { ReactElement } from 'react'

export interface CategoryItem {
  id: string
  label: string
  href: string
}

export interface SubCategoryGroup {
  id: string
  title: string
  href: string
  items: CategoryItem[]
}

export interface Category {
  id: string
  label: string
  icon?: ReactElement
  href: string
  subCategories?: SubCategoryGroup[]
}
