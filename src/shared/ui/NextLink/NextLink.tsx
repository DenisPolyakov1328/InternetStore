import React from 'react'
import { Link } from '@/shared/i18n/navigation'
import { ComponentProps } from 'react'

type NextLinkProps = Omit<ComponentProps<typeof Link>, 'locale'> & {
  children: React.ReactNode
}

export const NextLink = ({ children, ...props }: NextLinkProps) => {
  return <Link {...props}>{children}</Link>
}
