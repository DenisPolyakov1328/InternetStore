export interface SubCategoryStructure {
  id: string
  labelKey: string
  href: string
}

export interface NavItemStructure {
  id: string
  titleKey: string
  subCategories: SubCategoryStructure[]
}

export const navItemsStructure: NavItemStructure[] = [
  {
    id: 'main',
    titleKey: 'main',
    subCategories: [
      { id: 'main-home', labelKey: 'mainHome', href: '/' },
      { id: 'main-news', labelKey: 'mainNews', href: '/news' },
      { id: 'main-popular', labelKey: 'mainPopular', href: '/popular' },
      { id: 'main-sales', labelKey: 'mainSales', href: '/sales' }
    ]
  },
  {
    id: 'catalog',
    titleKey: 'catalog',
    subCategories: [
      { id: 'catalog-clothes', labelKey: 'catalogClothes', href: '/categories/clothes' },
      { id: 'catalog-shoes', labelKey: 'catalogShoes', href: '/categories/shoes' },
      { id: 'catalog-accessories', labelKey: 'catalogAccessories', href: '/categories/accessories' },
      { id: 'catalog-new', labelKey: 'catalogNew', href: '/categories/new' },
      { id: 'catalog-sale', labelKey: 'catalogSale', href: '/categories/sale' }
    ]
  },
  {
    id: 'info',
    titleKey: 'info',
    subCategories: [
      { id: 'info-about', labelKey: 'infoAbout', href: '/about' },
      { id: 'info-delivery', labelKey: 'infoDelivery', href: '/delivery' },
      { id: 'info-return', labelKey: 'infoReturn', href: '/return-policy' },
      { id: 'info-contacts', labelKey: 'infoContacts', href: '/contacts' },
      { id: 'info-faq', labelKey: 'infoFaq', href: '/faq' }
    ]
  },
  {
    id: 'account',
    titleKey: 'account',
    subCategories: [
      { id: 'account-login', labelKey: 'accountLogin', href: '/login' },
      { id: 'account-register', labelKey: 'accountRegister', href: '/register' },
      { id: 'account-orders', labelKey: 'accountOrders', href: '/account/orders' },
      { id: 'account-favorites', labelKey: 'accountFavorites', href: '/account/favorites' },
      { id: 'account-settings', labelKey: 'accountSettings', href: '/account/settings' }
    ]
  }
]
