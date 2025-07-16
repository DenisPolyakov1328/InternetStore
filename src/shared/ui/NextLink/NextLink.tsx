import React from 'react'
import Link from 'next/link'
import { ComponentProps } from 'react'

type NextLinkProps = ComponentProps<typeof Link> & {
  children: React.ReactNode
}

export const NextLink = ({ children, ...props }: NextLinkProps) => {
  return (
    <Link {...props} passHref legacyBehavior>
      {children}
    </Link>
  )
}
