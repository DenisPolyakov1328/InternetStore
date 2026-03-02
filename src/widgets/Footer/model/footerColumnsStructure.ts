import { routes } from '@/shared/router'
import type { FooterKey } from '@/shared/i18n/messageKeys'

export interface FooterColumnStructure {
  id: string
  titleKey?: FooterKey
  items?: { id: string; labelKey: FooterKey; href?: string }[]
  withCustomContent?: 'companyInfo' | 'socialLinks'
}

export const footerColumnsStructure: FooterColumnStructure[] = [
  { id: 'company', withCustomContent: 'companyInfo' },
  {
    id: 'about',
    titleKey: 'about',
    items: [
      { id: 'careers', labelKey: 'careers', href: routes.careers },
      { id: 'stores', labelKey: 'ourStores', href: routes.stores },
      { id: 'cares', labelKey: 'customerCare', href: routes.customerCare },
      { id: 'terms', labelKey: 'terms', href: routes.terms },
      { id: 'privacy', labelKey: 'privacy', href: routes.privacy }
    ]
  },
  {
    id: 'customer',
    titleKey: 'support',
    items: [
      { id: 'help', labelKey: 'helpCenter', href: routes.help },
      { id: 'track', labelKey: 'trackOrder', href: routes.trackOrder },
      { id: 'bulk', labelKey: 'bulkOrders', href: routes.bulkOrders },
      { id: 'returns', labelKey: 'returns', href: routes.returns }
    ]
  },
  {
    id: 'contact',
    titleKey: 'contacts',
    items: [
      { id: 'address', labelKey: 'address' },
      { id: 'email', labelKey: 'email' },
      { id: 'phone', labelKey: 'phone' }
    ],
    withCustomContent: 'socialLinks'
  }
]
