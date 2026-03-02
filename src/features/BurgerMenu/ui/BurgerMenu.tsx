import { useToggleDrawer } from '@/shared/lib'
import { BurgerMenuButton } from './BurgerMenuButton'
import { BurgerMenuDrawer } from './BurgerMenuDrawer'

export const BurgerMenu = () => {
  const { isOpen, close, toggle } = useToggleDrawer()
  return (
    <>
      <BurgerMenuButton toggle={toggle} />
      <BurgerMenuDrawer isOpen={isOpen} close={close} />
    </>
  )
}
