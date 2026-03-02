import type { ReactElement } from 'react'
import DryCleaningIcon from '@mui/icons-material/DryCleaning'
import WatchIcon from '@mui/icons-material/Watch'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import NewReleasesIcon from '@mui/icons-material/NewReleases'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import { Footprints } from 'lucide-react'
import { UnderwearIcon } from '@/shared/ui/icons'

export const categoriesIconMap: Record<string, ReactElement> = {
  clothes: <DryCleaningIcon />,
  shoes: <Footprints color="#7d879c" />,
  sportswear: <FitnessCenterIcon />,
  underwear: <UnderwearIcon />,
  accessories: <WatchIcon />,
  new: <NewReleasesIcon />,
  sale: <LocalOfferIcon />
} as const
