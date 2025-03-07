import CustomIconButton from '@/ui/CustomIconButton/CustomIconButton'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { Badge } from '@mui/material'
import SearchBar from '../components/SearchBar/searchBar'
import SearchBarCopy from '@/components/SearchBar/searchBar copy'
import SearchBarTest from '@/components/SearchBar/searchBar test'

export default function Home() {
  return (
    <div>
      <SearchBarTest showCategories={true} />
      <SearchBar />
      <CustomIconButton icon={SearchIcon} />
      <CustomIconButton
        icon={AccountCircleOutlinedIcon}
        href="/Login"
        component="a"
      />
      <Badge badgeContent="3">
        <CustomIconButton
          icon={ShoppingBagOutlinedIcon}
          href="/cart"
          component="a"
        />
      </Badge>
      <SearchBarCopy />

      <SearchBarTest showSearchButton={true} />
    </div>
  )
}
