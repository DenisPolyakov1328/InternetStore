import { ReactElement } from 'react'

export interface SubCategoryGroup {
  id: string
  title: string
  items: string[]
}

export interface Category {
  id: string
  label: string
  icon?: ReactElement
  subCategories?: SubCategoryGroup[]
}
