import { BurgerMenuButton } from '@/features/BurgerMenu/ui/BurgerMenuButton'
import { BurgerMenuDrawer } from '@/features/BurgerMenu/ui/BurgerMenuDrawer'
import { useBurgerMenuDrawer } from '@/features/BurgerMenu/lib'

export const BurgerMenu = () => {
  const { isOpen, close, toggle } = useBurgerMenuDrawer()
  return (
    <>
      <BurgerMenuButton toggle={toggle} />
      <BurgerMenuDrawer isOpen={isOpen} close={close} />
    </>
  )
}
