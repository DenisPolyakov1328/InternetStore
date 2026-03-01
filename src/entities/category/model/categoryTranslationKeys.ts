/**
 * Keys for subcategory title / item label where they differ from id.
 * If not in map, the key is the id itself.
 */
export const subCategoryTitleKeys: Record<string, string> = {
  'clothes|suits': 'classicSuits',
  'clothes|sweatshirts': 'sweatshirtsGroup',
  'shoes|shoe-types': 'shoe-types',
  'sportswear|sports-clothes': 'sportsClothes',
  'sportswear|sports-shoes': 'sportsShoes',
  'accessories|small-accessories': 'smallAccessories'
}

export const categoryItemLabelKeys: Record<string, string> = {
  'shoes|shoe-types|shoes': 'shoesFormal',
  'accessories|bags|shoulder-bags': 'shoulderBags',
  'accessories|bags|waist-bags': 'waistBags',
  'sportswear|sports-clothes|sport-t-shirts': 'sportTShirts'
}

function getSubKey(catId: string, subId: string): string {
  return subCategoryTitleKeys[`${catId}|${subId}`] ?? subId
}

function getItemKey(catId: string, subId: string, itemId: string): string {
  return categoryItemLabelKeys[`${catId}|${subId}|${itemId}`] ?? itemId
}

export function getCategoryLabelKey(catId: string): string {
  return catId
}

export { getSubKey as getSubCategoryTitleKey, getItemKey as getCategoryItemLabelKey }
