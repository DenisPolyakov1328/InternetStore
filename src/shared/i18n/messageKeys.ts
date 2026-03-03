import type en from './messages/en.json'

export type NavKey = keyof (typeof en)['nav']
export type FooterKey = keyof (typeof en)['footer']
export type SearchKey = keyof (typeof en)['search']
export type CategoriesKey = keyof (typeof en)['categories']
