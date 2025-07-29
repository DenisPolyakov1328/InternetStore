'use client'
import { CustomIconButton, DrawerWrapper } from '@/shared/ui'
import SearchIcon from '@mui/icons-material/Search'
import { useToggleDrawer } from '@/shared/lib/hooks'
import { MobileSearchContent } from '@/widgets/MobileSearch/ui/MobileSearchContent'

export const MobileSearchTrigger = () => {
  const { isOpen, toggle, close } = useToggleDrawer()

  return (
    <>
      <CustomIconButton icon={SearchIcon} onClick={toggle} />
      <DrawerWrapper open={isOpen} onClose={close}>
        <MobileSearchContent onClose={close} />
      </DrawerWrapper>
    </>
  )
}
