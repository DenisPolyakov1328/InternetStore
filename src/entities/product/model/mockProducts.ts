import type { Product } from './types'

export const mockProducts: Product[] = [
  {
    id: '1',
    slug: 'classic-wool-jacket',
    title: { ru: 'Классическая шерстяная куртка', en: 'Classic wool jacket' },
    description: {
      ru: 'Тёплая куртка из натуральной шерсти, универсальный крой.',
      en: 'Warm jacket made of natural wool, versatile cut.'
    },
    price: { amount: 129.99, currency: 'EUR' },
    images: ['/products/jacket-1.jpeg'],
    categorySlug: 'jackets',
    variants: [
      { id: 'v1-s', size: 'S', color: 'Black', inStock: true },
      { id: 'v1-m', size: 'M', color: 'Black', inStock: true },
      { id: 'v1-l', size: 'L', color: 'Navy', inStock: false }
    ],
    badges: ['new']
  },
  {
    id: '2',
    slug: 'light-down-jacket',
    title: { ru: 'Лёгкий пуховик', en: 'Light down jacket' },
    description: {
      ru: 'Компактный пуховик для межсезонья.',
      en: 'Compact down jacket for mid-season.'
    },
    price: { amount: 89.5, currency: 'EUR' },
    images: ['/products/down-1.jpg'],
    categorySlug: 'down-jackets',
    variants: [
      { id: 'v2-s', size: 'S', inStock: true },
      { id: 'v2-m', size: 'M', inStock: true },
      { id: 'v2-l', size: 'L', inStock: true }
    ],
    badges: ['sale', 'bestseller']
  },
  {
    id: '3',
    slug: 'minimal-watch',
    title: { ru: 'Минималистичные часы', en: 'Minimalist watch' },
    description: {
      ru: 'Классические часы с кожаным ремешком.',
      en: 'Classic watch with leather strap.'
    },
    price: { amount: 79.99, currency: 'USD' },
    images: ['/products/watch-1.jpg'],
    categorySlug: 'watches',
    badges: ['new']
  },
  {
    id: '4',
    slug: 'denim-jacket',
    title: { ru: 'Джинсовая куртка', en: 'Denim jacket' },
    description: {
      ru: 'Классическая джинсовая куртка прямого кроя.',
      en: 'Classic straight-cut denim jacket.'
    },
    price: { amount: 69.99, currency: 'EUR' },
    images: ['/products/jacket-2.jpg'],
    categorySlug: 'jackets',
    variants: [
      { id: 'v4-s', size: 'S', color: 'Blue', inStock: true },
      { id: 'v4-m', size: 'M', color: 'Blue', inStock: true },
      { id: 'v4-l', size: 'L', color: 'Black', inStock: true }
    ],
    badges: ['bestseller']
  },
  {
    id: '5',
    slug: 'long-down-coat',
    title: { ru: 'Длинный пуховик', en: 'Long down coat' },
    description: {
      ru: 'Тёплый длинный пуховик для холодной зимы.',
      en: 'Warm long down coat for cold winter.'
    },
    price: { amount: 199.99, currency: 'EUR' },
    images: ['/products/down-2.jpg'],
    categorySlug: 'down-jackets',
    variants: [
      { id: 'v5-s', size: 'S', color: 'Black', inStock: true },
      { id: 'v5-m', size: 'M', color: 'Black', inStock: false },
      { id: 'v5-l', size: 'L', color: 'Grey', inStock: true }
    ],
    badges: ['new']
  },
  {
    id: '6',
    slug: 'wool-coat',
    title: { ru: 'Шерстяное пальто', en: 'Wool coat' },
    description: {
      ru: 'Элегантное однобортное пальто из кашемировой шерсти.',
      en: 'Elegant single-breasted coat in cashmere wool.'
    },
    price: { amount: 249.99, currency: 'EUR' },
    images: ['/products/coat-1.jpg'],
    categorySlug: 'coats',
    variants: [
      { id: 'v6-s', size: 'S', color: 'Camel', inStock: true },
      { id: 'v6-m', size: 'M', color: 'Camel', inStock: true },
      { id: 'v6-l', size: 'L', color: 'Navy', inStock: true }
    ],
    badges: ['bestseller']
  },
  {
    id: '7',
    slug: 'trench-raincoat',
    title: { ru: 'Тренч плащ', en: 'Trench raincoat' },
    description: {
      ru: 'Классический плащ с поясом, непромокаемая ткань.',
      en: 'Classic belted raincoat, water-resistant fabric.'
    },
    price: { amount: 159.99, currency: 'EUR' },
    images: ['/products/raincoat-1.jpg'],
    categorySlug: 'raincoats',
    variants: [
      { id: 'v7-s', size: 'S', color: 'Beige', inStock: true },
      { id: 'v7-m', size: 'M', color: 'Beige', inStock: true },
      { id: 'v7-l', size: 'L', color: 'Black', inStock: true }
    ]
  },
  {
    id: '8',
    slug: 'sport-watch',
    title: { ru: 'Спортивные часы', en: 'Sports watch' },
    description: {
      ru: 'Водонепроницаемые часы с хронографом.',
      en: 'Water-resistant watch with chronograph.'
    },
    price: { amount: 129.99, currency: 'USD' },
    images: ['/products/watch-2.jpg'],
    categorySlug: 'watches',
    badges: ['new', 'sale']
  },
  {
    id: '9',
    slug: 'basic-tshirt-pack',
    title: { ru: 'Базовые футболки (пак 3 шт)', en: 'Basic t-shirts (pack of 3)' },
    description: {
      ru: 'Набор из трёх однотонных футболок из хлопка.',
      en: 'Set of three solid cotton t-shirts.'
    },
    price: { amount: 39.99, currency: 'EUR' },
    images: ['/products/tshirt-1.jpg'],
    categorySlug: 't-shirts',
    variants: [
      { id: 'v9-s', size: 'S', color: 'White', inStock: true },
      { id: 'v9-m', size: 'M', color: 'Black', inStock: true },
      { id: 'v9-l', size: 'L', color: 'Grey', inStock: true }
    ],
    badges: ['sale']
  },
  {
    id: '10',
    slug: 'oversized-hoodie',
    title: { ru: 'Оверсайз худи', en: 'Oversized hoodie' },
    description: {
      ru: 'Объёмное худи из футера, капюшон с верёвкой.',
      en: 'Oversized hoodie in fleece, drawstring hood.'
    },
    price: { amount: 59.99, currency: 'EUR' },
    images: ['/products/hoodie-1.jpg'],
    categorySlug: 'hoodies',
    variants: [
      { id: 'v10-s', size: 'S', color: 'Black', inStock: true },
      { id: 'v10-m', size: 'M', color: 'Grey', inStock: true },
      { id: 'v10-l', size: 'L', color: 'Navy', inStock: false }
    ],
    badges: ['bestseller']
  },
  {
    id: '11',
    slug: 'slim-blazer',
    title: { ru: 'Приталенный пиджак', en: 'Slim fit blazer' },
    description: {
      ru: 'Пиджак приталенного кроя для офиса и мероприятий.',
      en: 'Slim fit blazer for office and occasions.'
    },
    price: { amount: 179.99, currency: 'EUR' },
    images: ['/products/blazer-1.jpeg'],
    categorySlug: 'blazers',
    variants: [
      { id: 'v11-s', size: 'S', color: 'Navy', inStock: true },
      { id: 'v11-m', size: 'M', color: 'Navy', inStock: true },
      { id: 'v11-l', size: 'L', color: 'Charcoal', inStock: true }
    ],
    badges: ['new']
  },
  {
    id: '12',
    slug: 'smartwatch-pro',
    title: { ru: 'Умные часы Pro', en: 'Smartwatch Pro' },
    description: {
      ru: 'Умные часы с пульсометром и уведомлениями.',
      en: 'Smartwatch with heart rate monitor and notifications.'
    },
    price: { amount: 199.99, currency: 'USD' },
    images: ['/products/watch-3.jpeg'],
    categorySlug: 'watches',
    badges: ['new', 'bestseller']
  }
]
