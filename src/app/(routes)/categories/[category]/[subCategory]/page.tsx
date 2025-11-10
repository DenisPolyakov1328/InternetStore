interface Props {
  params: Promise<{ category: string; subCategory: string }>
}

export default async function Page({ params }: Props) {
  const { category, subCategory } = await params

  return (
    <div>
      Категория: {category}, Подкатегория: {subCategory}
    </div>
  )
}
