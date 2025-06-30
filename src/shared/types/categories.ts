import { ReactElement } from 'react'

export interface SubCategoryGroup {
    title: string
    items: string[]
}

export interface Category {
    label: string
    icon: ReactElement
    subCategories: SubCategoryGroup[]
}
