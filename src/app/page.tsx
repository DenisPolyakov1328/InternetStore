import ShoppingCart from '@/ui/ShoppingCart/ShoppingCart'
import DarkModeToggle from '@/ui/Controls/Switch/DarkModeToggle'
import styles from './page.module.css'
import Account from '@/ui/Account/Account'
import Search from '@/ui/Search/Search'

export default function Home() {
  return (
    <div>
      <DarkModeToggle label="Day or Night" />
      <Search />
      <Account />
      <ShoppingCart itemCount={3} />
    </div>
  )
}
