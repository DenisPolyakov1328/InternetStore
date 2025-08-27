import DryCleaningIcon from '@mui/icons-material/DryCleaning'
import WatchIcon from '@mui/icons-material/Watch'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import NewReleasesIcon from '@mui/icons-material/NewReleases'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import { Footprints } from 'lucide-react'
import { Category } from '@/shared/types'

export const categoriesArray: Category[] = [
  {
    id: 'clothes',
    label: 'Одежда',
    icon: <DryCleaningIcon />,
    href: '/categories/clothes',
    subCategories: [
      {
        id: 'outerwear',
        title: 'Верхняя одежда',
        href: '/categories/clothes/outerwear',
        items: [
          {
            id: 'jackets',
            label: 'Куртки',
            href: '/categories/clothes/outerwear/jackets'
          },
          {
            id: 'down-jackets',
            label: 'Пуховики',
            href: '/categories/clothes/outerwear/down-jackets'
          },
          {
            id: 'coats',
            label: 'Пальто',
            href: '/categories/clothes/outerwear/coats'
          },
          {
            id: 'raincoats',
            label: 'Плащи',
            href: '/categories/clothes/outerwear/raincoats'
          }
        ]
      },
      {
        id: 'suits',
        title: 'Классические костюмы',
        href: '/categories/clothes/suits',
        items: [
          {
            id: 'suits',
            label: 'Костюмы',
            href: '/categories/clothes/suits/suits'
          },
          {
            id: 'blazers',
            label: 'Пиджаки',
            href: '/categories/clothes/suits/blazers'
          },
          {
            id: 'trousers',
            label: 'Брюки',
            href: '/categories/clothes/suits/trousers'
          }
        ]
      },
      {
        id: 'shirtwaists',
        title: 'Футболки и рубашки',
        href: '/categories/clothes/shirtwaists',
        items: [
          {
            id: 't-shirts',
            label: 'Футболки',
            href: '/categories/clothes/shirtwaists/t-shirts'
          },
          {
            id: 'polo',
            label: 'Поло',
            href: '/categories/clothes/shirtwaists/polo'
          },
          {
            id: 'shirts',
            label: 'Рубашки',
            href: '/categories/clothes/shirtwaists/shirts'
          },
          {
            id: 'long-sleeves',
            label: 'Лонгсливы',
            href: '/categories/clothes/shirtwaists/long-sleeves'
          }
        ]
      },
      {
        id: 'sweatshirts',
        title: 'Толстовки и свитшоты',
        href: '/categories/clothes/sweatshirts',
        items: [
          {
            id: 'hoodies',
            label: 'Худи',
            href: '/categories/clothes/sweatshirts/hoodies'
          },
          {
            id: 'sweatshirts',
            label: 'Свитшоты',
            href: '/categories/clothes/sweatshirts/sweatshirts'
          },
          {
            id: 'pullovers',
            label: 'Толстовки',
            href: '/categories/clothes/sweatshirts/pullovers'
          }
        ]
      },
      {
        id: 'pants',
        title: 'Штаны',
        href: '/categories/clothes/pants',
        items: [
          {
            id: 'jeans',
            label: 'Джинсы',
            href: '/categories/clothes/pants/jeans'
          },
          {
            id: 'trousers',
            label: 'Брюки',
            href: '/categories/clothes/pants/trousers'
          },
          {
            id: 'shorts',
            label: 'Шорты',
            href: '/categories/clothes/pants/shorts'
          },
          {
            id: 'joggers',
            label: 'Спортивные штаны',
            href: '/categories/clothes/pants/joggers'
          }
        ]
      },
      {
        id: 'homeware',
        title: 'Домашняя одежда',
        href: '/categories/clothes/homeware',
        items: [
          {
            id: 'pajamas',
            label: 'Пижамы',
            href: '/categories/clothes/homeware/pajamas'
          },
          {
            id: 'thermal',
            label: 'Термобелье',
            href: '/categories/clothes/homeware/thermal'
          },
          {
            id: 'loungewear',
            label: 'Домашние костюмы',
            href: '/categories/clothes/homeware/loungewear'
          }
        ]
      }
    ]
  },
  {
    id: 'shoes',
    label: 'Обувь',
    icon: <Footprints color="#7d879c" />,
    href: '/categories/shoes',
    subCategories: [
      {
        id: 'shoe-types',
        title: 'Тип обуви',
        href: '/categories/shoes/shoe-types',
        items: [
          {
            id: 'sneakers',
            label: 'Кроссовки',
            href: '/categories/shoes/shoe-types/sneakers'
          },
          {
            id: 'boots',
            label: 'Ботинки',
            href: '/categories/shoes/shoe-types/boots'
          },
          {
            id: 'shoes',
            label: 'Туфли',
            href: '/categories/shoes/shoe-types/shoes'
          },
          {
            id: 'loafers',
            label: 'Лоферы',
            href: '/categories/shoes/shoe-types/loafers'
          },
          {
            id: 'slippers',
            label: 'Сланцы',
            href: '/categories/shoes/shoe-types/slippers'
          }
        ]
      },
      {
        id: 'seasonal',
        title: 'Сезонная обувь',
        href: '/categories/shoes/seasonal',
        items: [
          {
            id: 'winter',
            label: 'Зимняя',
            href: '/categories/shoes/seasonal/winter'
          },
          {
            id: 'summer',
            label: 'Летняя',
            href: '/categories/shoes/seasonal/summer'
          },
          {
            id: 'demi',
            label: 'Демисезонная',
            href: '/categories/shoes/seasonal/demi'
          }
        ]
      }
    ]
  },
  {
    id: 'sportswear',
    label: 'Спортивная одежда',
    icon: <FitnessCenterIcon />,
    href: '/categories/sportswear',
    subCategories: [
      {
        id: 'sports-clothes',
        title: 'Одежда для спорта',
        href: '/categories/sportswear/sports-clothes',
        items: [
          {
            id: 'sport-t-shirts',
            label: 'Футболки',
            href: '/categories/sportswear/sports-clothes/sport-t-shirts'
          },
          {
            id: 'shorts',
            label: 'Шорты',
            href: '/categories/sportswear/sports-clothes/shorts'
          },
          {
            id: 'tracksuits',
            label: 'Костюмы',
            href: '/categories/sportswear/sports-clothes/tracksuits'
          }
        ]
      },
      {
        id: 'sports-shoes',
        title: 'Обувь для спорта',
        href: '/categories/sportswear/sports-shoes',
        items: [
          {
            id: 'sneakers',
            label: 'Кроссовки',
            href: '/categories/sportswear/sports-shoes/sneakers'
          },
          {
            id: 'gumshoes',
            label: 'Кеды',
            href: '/categories/sportswear/sports-shoes/gumshoes'
          }
        ]
      }
    ]
  },
  {
    id: 'underwear',
    label: 'Нижнее белье',
    icon: (
      <svg
        viewBox="1 -65 511.999 511"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#7d879c"
      >
        <path d="m0 .5.0546875 186.457031 11.1796875 5.488281c97.230469 47.753907 151.113281 102.070313 174.710937 176.117188l4.4375 13.929688h131.234376l4.4375-13.929688c23.597656-74.046875 77.480468-128.363281 174.710937-176.117188l11.179687-5.488281.054688-186.457031zm471.988281 40-.011719 40.996094h-431.953124l-.011719-40.996094zm-431.953125 80.996094h125.777344c-17.433594 39.441406-27.734375 75.089844-33.605469 100.234375-25.183593-21.179688-55.574219-40.824219-92.160156-59.578125zm252.726563 220.996094h-73.523438c-12.15625-32.476563-29.644531-61.425782-52.964843-87.707032 3.582031-20.644531 14.871093-73.910156 43.613281-133.289062h92.226562c28.617188 59.152344 39.984375 112.601562 43.601563 133.304687-23.316406 26.273438-40.796875 55.21875-52.953125 87.691407zm87.03125-120.761719c-5.871094-25.144531-16.171875-60.796875-33.605469-100.234375h125.777344l-.011719 40.65625c-36.585937 18.753906-66.976563 38.398437-92.160156 59.578125zm0 0" />
      </svg>
    ),
    href: '/categories/underwear',
    subCategories: [
      {
        id: 'briefs',
        title: 'Трусы',
        href: '/categories/underwear/briefs',
        items: [
          {
            id: 'classic',
            label: 'Классические',
            href: '/categories/underwear/briefs/classic'
          },
          {
            id: 'boxers',
            label: 'Боксеры',
            href: '/categories/underwear/briefs/boxers'
          }
        ]
      },
      {
        id: 'socks',
        title: 'Носки',
        href: '/categories/underwear/socks',
        items: [
          {
            id: 'casual',
            label: 'Повседневные',
            href: '/categories/underwear/socks/casual'
          },
          {
            id: 'sport',
            label: 'Спортивные',
            href: '/categories/underwear/socks/sport'
          },
          {
            id: 'warm',
            label: 'Теплые',
            href: '/categories/underwear/socks/warm'
          }
        ]
      }
    ]
  },
  {
    id: 'accessories',
    label: 'Аксессуары',
    icon: <WatchIcon />,
    href: '/categories/accessories',
    subCategories: [
      {
        id: 'headwear',
        title: 'Головные уборы',
        href: '/categories/accessories/headwear',
        items: [
          {
            id: 'caps',
            label: 'Бейсболки',
            href: '/categories/accessories/headwear/caps'
          },
          {
            id: 'hats',
            label: 'Шапки',
            href: '/categories/accessories/headwear/hats'
          },
          {
            id: 'panamas',
            label: 'Панамы',
            href: '/categories/accessories/headwear/panamas'
          }
        ]
      },
      {
        id: 'small-accessories',
        title: 'Мелкие аксессуары',
        href: '/categories/accessories/small-accessories',
        items: [
          {
            id: 'watches',
            label: 'Часы',
            href: '/categories/accessories/small-accessories/watches'
          },
          {
            id: 'bracelets',
            label: 'Браслеты',
            href: '/categories/accessories/small-accessories/bracelets'
          },
          {
            id: 'glasses',
            label: 'Очки',
            href: '/categories/accessories/small-accessories/glasses'
          },
          {
            id: 'belts',
            label: 'Ремни',
            href: '/categories/accessories/small-accessories/belts'
          }
        ]
      },
      {
        id: 'bags',
        title: 'Сумки и рюкзаки',
        href: '/categories/accessories/bags',
        items: [
          {
            id: 'backpacks',
            label: 'Рюкзаки',
            href: '/categories/accessories/bags/backpacks'
          },
          {
            id: 'shoulder-bags',
            label: 'Сумки через плечо',
            href: '/categories/accessories/bags/shoulder-bags'
          },
          {
            id: 'waist-bags',
            label: 'Поясные сумки',
            href: '/categories/accessories/bags/waist-bags'
          }
        ]
      }
    ]
  },
  {
    id: 'new',
    label: 'Новинки',
    icon: <NewReleasesIcon />,
    href: '/categories/new',
    subCategories: []
  },
  {
    id: 'sale',
    label: 'Скидки',
    icon: <LocalOfferIcon />,
    href: '/categories/sale',
    subCategories: []
  }
]
