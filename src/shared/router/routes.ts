export const routes = {
  home: '/',
  // Каталог и категории
  categories: '/categories',
  category: (category: string) => `/categories/${category}`,
  subCategory: (category: string, subCategory: string) =>
    `/categories/${category}/${subCategory}`,
  categoryItem: (category: string, subCategory: string, item: string) =>
    `/categories/${category}/${subCategory}/${item}`,

  // Основные страницы
  news: '/news',
  popular: '/popular',
  sales: '/sales',

  // Информационные страницы
  about: '/about',
  delivery: '/delivery',
  returnPolicy: '/return-policy',
  contacts: '/contacts',
  faq: '/faq',

  // Аккаунт
  login: '/login',
  register: '/register',
  account: '/account',
  accountOrders: '/account/orders',
  accountFavorites: '/account/favorites',
  accountSettings: '/account/settings',

  // Прочее
  cart: '/cart',
  careers: '/careers',
  stores: '/stores',
  customerCare: '/customer-care',
  terms: '/terms',
  privacy: '/privacy',
  help: '/help',
  trackOrder: '/track-order',
  bulkOrders: '/bulk-orders',
  returns: '/returns',
  product: '/product'
} as const

export type AppRouteKey = keyof typeof routes
