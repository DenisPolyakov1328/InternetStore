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
    title: {
      ru: 'Базовые футболки (пак 3 шт)',
      en: 'Basic t-shirts (pack of 3)'
    },
    description: {
      ru: 'Набор из трёх однотонных футболок из хлопка.',
      en: 'Set of three solid cotton t-shirts.'
    },
    price: { amount: 39.99, currency: 'EUR' },
    images: ['/products/t-shirts/tshirt-1.jpg'],
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
  },
  {
    id: '13',
    slug: 'classic-espadrilles',
    title: { ru: 'Классические эспадрильи', en: 'Classic espadrilles' },
    description: {
      ru: 'Лёгкая летняя обувь на джутовой подошве.',
      en: 'Light summer shoes on jute sole.'
    },
    price: { amount: 49.99, currency: 'EUR' },
    images: [
      '/products/shoes/espadrilles/espadrilles-1.jpg',
      '/products/shoes/espadrilles/espadrilles-2.jpg',
      '/products/shoes/espadrilles/espadrilles-3.jpg',
      '/products/shoes/espadrilles/espadrilles-4.jpg'
    ],
    categorySlug: 'shoes',
    variants: [
      { id: 'v13-38', size: '38', inStock: true },
      { id: 'v13-39', size: '39', inStock: true },
      { id: 'v13-40', size: '40', inStock: true },
      { id: 'v13-41', size: '41', inStock: false }
    ],
    badges: ['new']
  },
  {
    id: '14',
    slug: 'classic-sneakers',
    title: { ru: 'Классические кеды', en: 'Classic sneakers' },
    description: {
      ru: 'Универсальные кеды на каждый день.',
      en: 'Versatile everyday sneakers.'
    },
    price: { amount: 69.99, currency: 'EUR' },
    images: ['/products/shoes/sneakers/sneakers-1.jpg'],
    categorySlug: 'sneakers',
    variants: [
      { id: 'v14-39', size: '39', inStock: true },
      { id: 'v14-40', size: '40', inStock: true },
      { id: 'v14-41', size: '41', inStock: true },
      { id: 'v14-42', size: '42', inStock: false }
    ],
    badges: ['bestseller']
  },
  {
    id: '16',
    slug: 'sport-sneakers',
    title: { ru: 'Спортивные кеды', en: 'Sport sneakers' },
    description: {
      ru: 'Лёгкие кеды для тренировок и активного отдыха.',
      en: 'Light sneakers for workouts and active wear.'
    },
    price: { amount: 79.99, currency: 'EUR' },
    images: ['/products/shoes/sneakers/sneakers-1.jpg'],
    categorySlug: 'sneakers',
    variants: [
      { id: 'v16-39', size: '39', inStock: true },
      { id: 'v16-40', size: '40', inStock: true },
      { id: 'v16-41', size: '41', inStock: true },
      { id: 'v16-42', size: '42', inStock: true }
    ],
    badges: ['new']
  },
  {
    id: '17',
    slug: 'minimal-sneakers',
    title: { ru: 'Минималистичные кеды', en: 'Minimal sneakers' },
    description: {
      ru: 'Простой дизайн, удобная колодка.',
      en: 'Simple design, comfortable fit.'
    },
    price: { amount: 64.99, currency: 'EUR' },
    images: ['/products/shoes/sneakers/sneakers-1.jpg'],
    categorySlug: 'sneakers',
    variants: [
      { id: 'v17-39', size: '39', inStock: true },
      { id: 'v17-40', size: '40', inStock: false },
      { id: 'v17-41', size: '41', inStock: true },
      { id: 'v17-42', size: '42', inStock: true }
    ]
  },
  {
    id: '18',
    slug: 'urban-sneakers',
    title: { ru: 'Городские кеды', en: 'Urban sneakers' },
    description: {
      ru: 'Стильные кеды для города.',
      en: 'Stylish sneakers for the city.'
    },
    price: { amount: 74.99, currency: 'EUR' },
    images: ['/products/shoes/sneakers/sneakers-1.jpg'],
    categorySlug: 'sneakers',
    variants: [
      { id: 'v18-39', size: '39', inStock: true },
      { id: 'v18-40', size: '40', inStock: true },
      { id: 'v18-41', size: '41', inStock: true },
      { id: 'v18-42', size: '42', inStock: true }
    ],
    badges: ['sale']
  },
  {
    id: '15',
    slug: 'classic-clutch',
    title: { ru: 'Классический клатч', en: 'Classic clutch' },
    description: {
      ru: 'Элегантный клатч на вечер или каждый день.',
      en: 'Elegant clutch for evening or everyday.'
    },
    price: { amount: 89.99, currency: 'EUR' },
    images: [
      '/products/accessories/clutch/clutch-1.jpg',
      '/products/accessories/clutch/clutch-2.jpg',
      '/products/accessories/clutch/clutch-3.jpg'
    ],
    categorySlug: 'clutches',
    badges: ['new']
  },
  {
    id: '19',
    slug: 'classic-backpack',
    title: { ru: 'Классический рюкзак', en: 'Classic backpack' },
    description: {
      ru: 'Универсальный рюкзак для города и путешествий.',
      en: 'Versatile backpack for city and travel.'
    },
    price: { amount: 99.99, currency: 'EUR' },
    images: [
      '/products/accessories/backpacks/backpack-1.jpg',
      '/products/accessories/backpacks/backpack-2.jpg'
    ],
    categorySlug: 'backpacks',
    badges: ['bestseller']
  },
  {
    id: '20',
    slug: 'crew-neck-brown',
    title: { ru: 'Футболка с круглым вырезом тёмно-коричневая', en: 'Dark brown crew neck t-shirt' },
    description: {
      ru: 'Короткий рукав, круглый вырез, рифлёная резинка по низу. Мягкая ткань, свободный крой.',
      en: 'Short sleeve, crew neck, ribbed hem. Soft fabric, relaxed fit.'
    },
    price: { amount: 34.99, currency: 'EUR' },
    images: ['/products/t-shirts/t-shirts-2.jpg'],
    categorySlug: 't-shirts',
    variants: [
      { id: 'v20-s', size: 'S', color: 'Brown', inStock: true },
      { id: 'v20-m', size: 'M', color: 'Brown', inStock: true },
      { id: 'v20-l', size: 'L', color: 'Brown', inStock: false }
    ],
    badges: ['new']
  },
  {
    id: '21',
    slug: 'crew-neck-white',
    title: { ru: 'Футболка с круглым вырезом белая', en: 'White crew neck t-shirt' },
    description: {
      ru: 'Минималистичная белая футболка, круглый вырез, рифлёная резинка по низу. Хлопковый джерси.',
      en: 'Minimalist white t-shirt, crew neck, ribbed hem. Cotton jersey.'
    },
    price: { amount: 29.99, currency: 'EUR' },
    images: ['/products/t-shirts/t-shirts-3.jpg'],
    categorySlug: 't-shirts',
    variants: [
      { id: 'v21-s', size: 'S', color: 'White', inStock: true },
      { id: 'v21-m', size: 'M', color: 'White', inStock: true },
      { id: 'v21-l', size: 'L', color: 'White', inStock: true }
    ]
  },
  {
    id: '22',
    slug: 'classic-hat',
    title: { ru: 'Классическая шляпа', en: 'Classic hat' },
    description: {
      ru: 'Универсальная шляпа для солнца и стиля.',
      en: 'Versatile hat for sun and style.'
    },
    price: { amount: 45.99, currency: 'EUR' },
    images: ['/products/accessories/hats/hats-1.jpg'],
    categorySlug: 'hats',
    badges: ['new']
  }
]
