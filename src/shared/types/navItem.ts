export interface SubCategory {
  id: string
  label: string
  href: string
}

export interface NavItem {
  id: string
  title: string
  subCategories: SubCategory[]
}
