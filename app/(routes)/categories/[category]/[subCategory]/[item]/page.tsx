interface Props {
  params: Promise<{ category: string; subCategory: string; item: string }>
}

export default async function Page({ params }: Props) {
  const { category, subCategory, item } = await params

  return (
    <div>
      Категория: {category}, Подкатегория: {subCategory}, Товар: {item}
    </div>
  )
}
