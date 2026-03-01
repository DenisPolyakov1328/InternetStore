'use client'
import { Box } from '@mui/material'
import { Logo, StoreButton } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const storeArray = [
  {
    id: 1,
    icon: '/icons/google-play-store.svg',
    title: 'Google Play',
    subtitleKey: 'downloadIn' as const,
    href: '#'
  },
  {
    id: 2,
    icon: '/icons/app-store.svg',
    title: 'App Store',
    subtitleKey: 'getOn' as const,
    href: '#'
  }
]

export const FooterCompanyInfo = () => {
  const t = useTranslations('common')
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}
    >
      <Logo src="/KAPPEL_MARC_WHITE.svg" />
      <Box component="p" sx={{ maxWidth: 370, my: 1, mb: 3 }}>
        {t('companyDescription')}
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', margin: '-8px' }}>
        {storeArray.map((store) => (
          <StoreButton
            key={store.id}
            icon={store.icon}
            title={store.title}
            subtitle={t(store.subtitleKey)}
            href={store.href}
          />
        ))}
      </Box>
    </Box>
  )
}
