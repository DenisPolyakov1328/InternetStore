import { routes } from '@/shared/router'
import type { NavKey } from '@/shared/i18n/messageKeys'

export interface SubCategoryStructure {
  id: string
  labelKey: NavKey
  href: string
}

export interface NavItemStructure {
  id: string
  titleKey: NavKey
  subCategories: SubCategoryStructure[]
}

export const navItemsStructure: NavItemStructure[] = [
  {
    id: 'main',
    titleKey: 'main',
    subCategories: [
      { id: 'main-home', labelKey: 'mainHome', href: routes.home },
      { id: 'main-news', labelKey: 'mainNews', href: routes.news },
      { id: 'main-popular', labelKey: 'mainPopular', href: routes.popular },
      { id: 'main-sales', labelKey: 'mainSales', href: routes.sales }
    ]
  },
  {
    id: 'catalog',
    titleKey: 'catalog',
    subCategories: [
      {
        id: 'catalog-clothes',
        labelKey: 'catalogClothes',
        href: routes.category('clothes')
      },
      {
        id: 'catalog-shoes',
        labelKey: 'catalogShoes',
        href: routes.category('shoes')
      },
      {
        id: 'catalog-accessories',
        labelKey: 'catalogAccessories',
        href: routes.category('accessories')
      },
      { id: 'catalog-new', labelKey: 'catalogNew', href: `${routes.categories}/new` },
      { id: 'catalog-sale', labelKey: 'catalogSale', href: `${routes.categories}/sale` }
    ]
  },
  {
    id: 'info',
    titleKey: 'info',
    subCategories: [
      { id: 'info-about', labelKey: 'infoAbout', href: routes.about },
      { id: 'info-delivery', labelKey: 'infoDelivery', href: routes.delivery },
      { id: 'info-return', labelKey: 'infoReturn', href: routes.returnPolicy },
      { id: 'info-contacts', labelKey: 'infoContacts', href: routes.contacts },
      { id: 'info-faq', labelKey: 'infoFaq', href: routes.faq }
    ]
  },
  {
    id: 'account',
    titleKey: 'account',
    subCategories: [
      { id: 'account-login', labelKey: 'accountLogin', href: routes.login },
      { id: 'account-register', labelKey: 'accountRegister', href: routes.register },
      { id: 'account-orders', labelKey: 'accountOrders', href: routes.accountOrders },
      {
        id: 'account-favorites',
        labelKey: 'accountFavorites',
        href: routes.accountFavorites
      },
      {
        id: 'account-settings',
        labelKey: 'accountSettings',
        href: routes.accountSettings
      }
    ]
  }
]
