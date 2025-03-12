import { CustomIconButton } from '@/shared/ui/CustomIconButton/CustomIconButton'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { Badge } from '@mui/material'
import { SearchBar } from '@/widgets/searchBar'

export default function Home() {
  return (
    <div>
      <SearchBar showCategories={true} />

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
      <SearchBar showSearchButton={true} />
    </div>
  )
}
