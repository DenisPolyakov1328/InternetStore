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
      { id: 'careers', label: 'Карьера', href: '#' },
      { id: 'stores', label: 'Наши магазины', href: '#' },
      { id: 'cares', label: 'Забота о клиентах', href: '#' },
      { id: 'terms', label: 'Условия и положения', href: '#' },
      { id: 'privacy', label: 'Политика конфиденциальности', href: '#' }
    ]
  },
  {
    id: 'customer',
    title: 'Служба поддержки',
    items: [
      { id: 'help', label: 'Центр помощи', href: '#' },
      { id: 'track', label: 'Отследить заказ', href: '#' },
      { id: 'bulk', label: 'Корпоративные закупки', href: '#' },
      { id: 'returns', label: 'Возврат и возмещение', href: '#' }
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
