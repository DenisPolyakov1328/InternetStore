import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import GoogleIcon from '@mui/icons-material/Google'
import { LinkItem } from '@/shared/types'

export const socialLinksBase: LinkItem[] = [
  { icon: TwitterIcon, url: 'https://twitter.com' },
  { icon: FacebookIcon, url: 'https://facebook.com' },
  { icon: InstagramIcon, url: 'https://instagram.com' }
]

export const extendedSocialLinks: LinkItem[] = [
  ...socialLinksBase,
  { icon: YouTubeIcon, url: 'https://youtube.com' },
  { icon: GoogleIcon, url: 'https://google.com' }
]
