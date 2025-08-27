import { NavItem } from '@/shared/types'

export const navItems: NavItem[] = [
  {
    id: 'main',
    title: 'Главная',
    subCategories: [
      { id: 'main-home', label: 'Домашняя страница', href: '/' },
      { id: 'main-news', label: 'Новости', href: '/news' },
      { id: 'main-popular', label: 'Популярное', href: '/popular' },
      { id: 'main-sales', label: 'Акции', href: '/sales' }
    ]
  },
  {
    id: 'catalog',
    title: 'Каталог',
    subCategories: [
      { id: 'catalog-clothes', label: 'Одежда', href: '/categories/clothes' },
      { id: 'catalog-shoes', label: 'Обувь', href: '/categories/shoes' },
      {
        id: 'catalog-accessories',
        label: 'Аксессуары',
        href: '/categories/accessories'
      },
      { id: 'catalog-new', label: 'Новинки', href: '/categories/new' },
      { id: 'catalog-sale', label: 'Распродажа', href: '/categories/sale' }
    ]
  },
  {
    id: 'info',
    title: 'Информация',
    subCategories: [
      { id: 'info-about', label: 'О магазине', href: '/about' },
      { id: 'info-delivery', label: 'Доставка и оплата', href: '/delivery' },
      { id: 'info-return', label: 'Политика возврата', href: '/return-policy' },
      { id: 'info-contacts', label: 'Контакты', href: '/contacts' },
      { id: 'info-faq', label: 'FAQ', href: '/faq' }
    ]
  },
  {
    id: 'account',
    title: 'Аккаунт',
    subCategories: [
      { id: 'account-login', label: 'Войти', href: '/login' },
      { id: 'account-register', label: 'Регистрация', href: '/register' },
      { id: 'account-orders', label: 'Мои заказы', href: '/account/orders' },
      {
        id: 'account-favorites',
        label: 'Избранное',
        href: '/account/favorites'
      },
      { id: 'account-settings', label: 'Настройки', href: '/account/settings' }
    ]
  }
]
