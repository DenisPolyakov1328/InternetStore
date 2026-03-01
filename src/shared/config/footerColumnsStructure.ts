export interface FooterColumnStructure {
  id: string
  titleKey?: string
  items?: { id: string; labelKey: string; href?: string }[]
  withCustomContent?: 'companyInfo' | 'socialLinks'
}

export const footerColumnsStructure: FooterColumnStructure[] = [
  { id: 'company', withCustomContent: 'companyInfo' },
  {
    id: 'about',
    titleKey: 'about',
    items: [
      { id: 'careers', labelKey: 'careers', href: '/careers' },
      { id: 'stores', labelKey: 'ourStores', href: '/stores' },
      { id: 'cares', labelKey: 'customerCare', href: '/customer-care' },
      { id: 'terms', labelKey: 'terms', href: '/terms' },
      { id: 'privacy', labelKey: 'privacy', href: '/privacy' }
    ]
  },
  {
    id: 'customer',
    titleKey: 'support',
    items: [
      { id: 'help', labelKey: 'helpCenter', href: '/help' },
      { id: 'track', labelKey: 'trackOrder', href: '/track-order' },
      { id: 'bulk', labelKey: 'bulkOrders', href: '/bulk-orders' },
      { id: 'returns', labelKey: 'returns', href: '/returns' }
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
