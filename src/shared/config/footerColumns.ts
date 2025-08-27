import { FooterColumn } from '@/shared/types'

export const footerColumns: FooterColumn[] = [
  {
    id: 'company',
    withCustomContent: 'companyInfo'
  },
  {
    id: 'about',
    title: 'О нас',
    items: [
      { id: 'careers', label: 'Карьера', href: '/careers' },
      { id: 'stores', label: 'Наши магазины', href: '/stores' },
      { id: 'cares', label: 'Забота о клиентах', href: '/customer-care' },
      { id: 'terms', label: 'Условия и положения', href: '/terms' },
      { id: 'privacy', label: 'Политика конфиденциальности', href: '/privacy' }
    ]
  },
  {
    id: 'customer',
    title: 'Служба поддержки',
    items: [
      { id: 'help', label: 'Центр помощи', href: '/help' },
      { id: 'track', label: 'Отследить заказ', href: '/track-order' },
      { id: 'bulk', label: 'Корпоративные закупки', href: '/bulk-orders' },
      { id: 'returns', label: 'Возврат и возмещение', href: '/returns' }
    ]
  },
  {
    id: 'contact',
    title: 'Контакты',
    items: [
      {
        id: 'address',
        label: 'г. Краснодар, ул. Тургенева 117/1'
      },
      { id: 'email', label: 'Email: kappelmarc@gmail.com' },
      { id: 'phone', label: 'Телефон: 937 999 2' }
    ],
    withCustomContent: 'socialLinks'
  }
]
