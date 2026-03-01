import type { ReactElement } from 'react'

export interface CategoryItemStructure {
  id: string
  labelKey: string
  href: string
}

export interface SubCategoryGroupStructure {
  id: string
  titleKey: string
  href: string
  items: CategoryItemStructure[]
}

export interface CategoryStructure {
  id: string
  labelKey: string
  icon?: ReactElement
  href: string
  subCategories?: SubCategoryGroupStructure[]
}
