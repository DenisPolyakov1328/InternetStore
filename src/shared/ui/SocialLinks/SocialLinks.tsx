import { Link } from '@mui/material'
import type { LinkItem } from '@/shared/types'

interface Props {
  links: LinkItem[]
}

export const SocialLinks = ({ links }: Props) => (
  <>
    {links.map(({ icon: Icon, url }) => (
      <Link
        href={url}
        key={url}
        underline="none"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          sx={(theme) => ({
            color: theme.palette.primary.contrastText,
            fontSize: '16px'
          })}
        />
      </Link>
    ))}
  </>
)
