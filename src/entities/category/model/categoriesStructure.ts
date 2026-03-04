import { routes } from '@/shared/router'

export interface CategoryItemStructure {
  id: string
  href: string
}

export interface SubCategoryGroupStructure {
  id: string
  href: string
  items: CategoryItemStructure[]
}

export interface CategoryStructure {
  id: string
  href: string
  iconId?: string
  subCategories: SubCategoryGroupStructure[]
}

function cat(path: string) {
  return routes.category(path)
}
function sub(catId: string, subId: string) {
  return routes.subCategory(catId, subId)
}
function item(catId: string, subId: string, itemId: string) {
  return routes.categoryItem(catId, subId, itemId)
}

export const categoriesStructure: CategoryStructure[] = [
  {
    id: 'clothes',
    href: cat('clothes'),
    subCategories: [
      {
        id: 'outerwear',
        href: sub('clothes', 'outerwear'),
        items: [
          { id: 'jackets', href: item('clothes', 'outerwear', 'jackets') },
          { id: 'down-jackets', href: item('clothes', 'outerwear', 'down-jackets') },
          { id: 'coats', href: item('clothes', 'outerwear', 'coats') },
          { id: 'raincoats', href: item('clothes', 'outerwear', 'raincoats') }
        ]
      },
      {
        id: 'suits',
        href: sub('clothes', 'suits'),
        items: [
          { id: 'suits', href: item('clothes', 'suits', 'suits') },
          { id: 'blazers', href: item('clothes', 'suits', 'blazers') },
          { id: 'trousers', href: item('clothes', 'suits', 'trousers') }
        ]
      },
      {
        id: 'shirtwaists',
        href: sub('clothes', 'shirtwaists'),
        items: [
          { id: 't-shirts', href: item('clothes', 'shirtwaists', 't-shirts') },
          { id: 'polo', href: item('clothes', 'shirtwaists', 'polo') },
          { id: 'shirts', href: item('clothes', 'shirtwaists', 'shirts') },
          { id: 'long-sleeves', href: item('clothes', 'shirtwaists', 'long-sleeves') }
        ]
      },
      {
        id: 'sweatshirts',
        href: sub('clothes', 'sweatshirts'),
        items: [
          { id: 'hoodies', href: item('clothes', 'sweatshirts', 'hoodies') },
          { id: 'sweatshirts', href: item('clothes', 'sweatshirts', 'sweatshirts') },
          { id: 'pullovers', href: item('clothes', 'sweatshirts', 'pullovers') }
        ]
      },
      {
        id: 'pants',
        href: sub('clothes', 'pants'),
        items: [
          { id: 'jeans', href: item('clothes', 'pants', 'jeans') },
          { id: 'trousers', href: item('clothes', 'pants', 'trousers') },
          { id: 'shorts', href: item('clothes', 'pants', 'shorts') },
          { id: 'joggers', href: item('clothes', 'pants', 'joggers') }
        ]
      },
      {
        id: 'homeware',
        href: sub('clothes', 'homeware'),
        items: [
          { id: 'pajamas', href: item('clothes', 'homeware', 'pajamas') },
          { id: 'thermal', href: item('clothes', 'homeware', 'thermal') },
          { id: 'loungewear', href: item('clothes', 'homeware', 'loungewear') }
        ]
      }
    ]
  },
  {
    id: 'shoes',
    href: cat('shoes'),
    subCategories: [
      {
        id: 'shoe-types',
        href: sub('shoes', 'shoe-types'),
        items: [
          { id: 'sneakers', href: item('shoes', 'shoe-types', 'sneakers') },
          { id: 'boots', href: item('shoes', 'shoe-types', 'boots') },
          { id: 'shoes', href: item('shoes', 'shoe-types', 'shoes') },
          { id: 'loafers', href: item('shoes', 'shoe-types', 'loafers') },
          { id: 'slippers', href: item('shoes', 'shoe-types', 'slippers') }
        ]
      },
      {
        id: 'seasonal',
        href: sub('shoes', 'seasonal'),
        items: [
          { id: 'winter', href: item('shoes', 'seasonal', 'winter') },
          { id: 'summer', href: item('shoes', 'seasonal', 'summer') },
          { id: 'demi', href: item('shoes', 'seasonal', 'demi') }
        ]
      }
    ]
  },
  {
    id: 'sportswear',
    href: cat('sportswear'),
    subCategories: [
      {
        id: 'sports-clothes',
        href: sub('sportswear', 'sports-clothes'),
        items: [
          { id: 'sport-t-shirts', href: item('sportswear', 'sports-clothes', 'sport-t-shirts') },
          { id: 'shorts', href: item('sportswear', 'sports-clothes', 'shorts') },
          { id: 'tracksuits', href: item('sportswear', 'sports-clothes', 'tracksuits') }
        ]
      },
      {
        id: 'sports-shoes',
        href: sub('sportswear', 'sports-shoes'),
        items: [
          { id: 'sneakers', href: item('sportswear', 'sports-shoes', 'sneakers') },
          { id: 'gumshoes', href: item('sportswear', 'sports-shoes', 'gumshoes') }
        ]
      }
    ]
  },
  {
    id: 'underwear',
    href: cat('underwear'),
    subCategories: [
      {
        id: 'briefs',
        href: sub('underwear', 'briefs'),
        items: [
          { id: 'classic', href: item('underwear', 'briefs', 'classic') },
          { id: 'boxers', href: item('underwear', 'briefs', 'boxers') }
        ]
      },
      {
        id: 'socks',
        href: sub('underwear', 'socks'),
        items: [
          { id: 'casual', href: item('underwear', 'socks', 'casual') },
          { id: 'sport', href: item('underwear', 'socks', 'sport') },
          { id: 'warm', href: item('underwear', 'socks', 'warm') }
        ]
      }
    ]
  },
  {
    id: 'accessories',
    href: cat('accessories'),
    subCategories: [
      {
        id: 'headwear',
        href: sub('accessories', 'headwear'),
        items: [
          { id: 'caps', href: item('accessories', 'headwear', 'caps') },
          { id: 'hats', href: item('accessories', 'headwear', 'hats') },
          { id: 'panamas', href: item('accessories', 'headwear', 'panamas') }
        ]
      },
      {
        id: 'small-accessories',
        href: sub('accessories', 'small-accessories'),
        items: [
          { id: 'watches', href: item('accessories', 'small-accessories', 'watches') },
          { id: 'bracelets', href: item('accessories', 'small-accessories', 'bracelets') },
          { id: 'glasses', href: item('accessories', 'small-accessories', 'glasses') },
          { id: 'belts', href: item('accessories', 'small-accessories', 'belts') }
        ]
      },
      {
        id: 'bags',
        href: sub('accessories', 'bags'),
        items: [
          { id: 'backpacks', href: item('accessories', 'bags', 'backpacks') },
          { id: 'shoulder-bags', href: item('accessories', 'bags', 'shoulder-bags') },
          { id: 'waist-bags', href: item('accessories', 'bags', 'waist-bags') },
          { id: 'clutches', href: item('accessories', 'bags', 'clutches') }
        ]
      }
    ]
  },
  {
    id: 'new',
    href: `${routes.categories}/new`,
    subCategories: []
  },
  {
    id: 'sale',
    href: `${routes.categories}/sale`,
    subCategories: []
  }
]
