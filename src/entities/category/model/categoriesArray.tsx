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
    subCategories: [
      {
        id: 'outerwear',
        title: 'Верхняя одежда',
        items: ['Куртки', 'Пуховики', 'Пальто', 'Плащи']
      },
      {
        id: 'suits',
        title: 'Классические костюмы',
        items: ['Костюмы', 'Пиджаки', 'Брюки']
      },
      {
        id: 'shirtwaists',
        title: 'Футболки и рубашки',
        items: ['Футболки', 'Поло', 'Рубашки', 'Лонгсливы']
      },
      {
        id: 'sweatshirts',
        title: 'Толстовки и свитшоты',
        items: ['Худи', 'Свитшоты', 'Толстовки']
      },
      {
        id: 'pants',
        title: 'Штаны',
        items: ['Джинсы', 'Брюки', 'Шорты', 'Спортивные штаны']
      },
      {
        id: 'homeware',
        title: 'Домашняя одежда',
        items: ['Пижамы', 'Термобелье', 'Домашние костюмы']
      }
    ]
  },
  {
    id: 'shoes',
    label: 'Обувь',
    icon: <Footprints color="#7d879c" />,
    subCategories: [
      {
        id: 'shoe-types',
        title: 'Тип обуви',
        items: ['Кроссовки', 'Ботинки', 'Туфли', 'Лоферы', 'Сланцы']
      },
      {
        id: 'seasonal',
        title: 'Сезонная обувь',
        items: ['Зимняя', 'Летняя', 'Демисезонная']
      }
    ]
  },
  {
    id: 'sportswear',
    label: 'Спортивная одежда',
    icon: <FitnessCenterIcon />,
    subCategories: [
      {
        id: 'sports-clothes',
        title: 'Одежда для спорта',
        items: ['Футболки', 'Шорты', 'Костюмы']
      },
      {
        id: 'sports-shoes',
        title: 'Обувь для спорта',
        items: ['Кроссовки', 'Кеды']
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
        focusable="false"
      >
        <path d="m0 .5.0546875 186.457031 11.1796875 5.488281c97.230469 47.753907 151.113281 102.070313 174.710937 176.117188l4.4375 13.929688h131.234376l4.4375-13.929688c23.597656-74.046875 77.480468-128.363281 174.710937-176.117188l11.179687-5.488281.054688-186.457031zm471.988281 40-.011719 40.996094h-431.953124l-.011719-40.996094zm-431.953125 80.996094h125.777344c-17.433594 39.441406-27.734375 75.089844-33.605469 100.234375-25.183593-21.179688-55.574219-40.824219-92.160156-59.578125zm252.726563 220.996094h-73.523438c-12.15625-32.476563-29.644531-61.425782-52.964843-87.707032 3.582031-20.644531 14.871093-73.910156 43.613281-133.289062h92.226562c28.617188 59.152344 39.984375 112.601562 43.601563 133.304687-23.316406 26.273438-40.796875 55.21875-52.953125 87.691407zm87.03125-120.761719c-5.871094-25.144531-16.171875-60.796875-33.605469-100.234375h125.777344l-.011719 40.65625c-36.585937 18.753906-66.976563 38.398437-92.160156 59.578125zm0 0" />
      </svg>
    ),
    subCategories: [
      {
        id: 'briefs',
        title: 'Трусы',
        items: ['Классические', 'Боксеры']
      },
      {
        id: 'socks',
        title: 'Носки',
        items: ['Повседневные', 'Спортивные', 'Теплые']
      }
    ]
  },
  {
    id: 'accessories',
    label: 'Аксессуары',
    icon: <WatchIcon />,
    subCategories: [
      {
        id: 'headwear',
        title: 'Головные уборы',
        items: ['Бейсболки', 'Шапки', 'Панамы']
      },
      {
        id: 'small-accessories',
        title: 'Мелкие аксессуары',
        items: ['Часы', 'Браслеты', 'Очки', 'Ремни']
      },
      {
        id: 'bags',
        title: 'Сумки и рюкзаки',
        items: ['Рюкзаки', 'Сумки через плечо', 'Поясные сумки']
      }
    ]
  },
  {
    id: 'new',
    label: 'Новинки',
    icon: <NewReleasesIcon />,
    subCategories: []
  },
  {
    id: 'sale',
    label: 'Скидки',
    icon: <LocalOfferIcon />,
    subCategories: []
  }
]
