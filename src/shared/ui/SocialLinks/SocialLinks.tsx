import { Link, Stack } from '@mui/material'
import type { LinkItem } from '@/shared/types'

interface Props {
  links: LinkItem[]
}

export const SocialLinks = ({ links }: Props) => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    sx={{ gap: 1.5 }}
  >
    {links.map(({ icon: Icon, url }) => (
      <Link
        href={url}
        key={url}
        underline="none"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 16,
          height: 16
        }}
      >
        <Icon
          sx={{
            color: 'primary.contrastText',
            fontSize: 16
          }}
        />
      </Link>
    ))}
  </Stack>
)
