'use client'
import { CustomIconButton, DrawerWrapper } from '@/shared/ui'
import SearchIcon from '@mui/icons-material/Search'
import { MobileSearchPanel } from '@/features/MobileSearch/ui/MobileSearchPanel'
import { useMobileSearchDrawer } from '@/features/MobileSearch/lib'

export const MobileSearchTrigger = () => {
  const { isOpen, toggle, close } = useMobileSearchDrawer()

  return (
    <>
      <CustomIconButton icon={SearchIcon} onClick={toggle} />
      <DrawerWrapper open={isOpen} onClose={close}>
        <MobileSearchPanel onClose={close} />
      </DrawerWrapper>
    </>
  )
}
