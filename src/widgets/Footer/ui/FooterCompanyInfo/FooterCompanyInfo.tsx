import { Box } from '@mui/material'
import { Logo, StoreButton } from '@/shared/ui'

type StoreData = {
  id: number
  icon: string
  title: string
  subtitle: string
  href: string
}

const storeArray: StoreData[] = [
  {
    id: 1,
    icon: '/icons/google-play-store.svg',
    title: 'Google Play',
    subtitle: 'Скачать в',
    href: '#'
  },
  {
    id: 2,
    icon: '/icons/app-store.svg',
    title: 'App Store',
    subtitle: 'Загрузить в',
    href: '#'
  }
]

export const FooterCompanyInfo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}
    >
      <Logo component="a" src="/KAPPEL_MARC_WHITE.svg" />
      <Box component="p" sx={{ maxWidth: 370, my: 1, mb: 3 }}>
        Магазин мужской одежды с трендовыми вещами и стильными образами. Большой
        выбор качественных товаров с доставкой по всей стране.
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', margin: '-8px' }}>
        {storeArray.map((store) => (
          <StoreButton
            key={store.id}
            icon={store.icon}
            title={store.title}
            subtitle={store.subtitle}
            href={store.href}
          />
        ))}
      </Box>
    </Box>
  )
}
