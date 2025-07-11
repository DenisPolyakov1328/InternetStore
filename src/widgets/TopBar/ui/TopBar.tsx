'use client'
import { useState } from 'react'
import { socialLinksBase } from '@/shared/data'
import { TopBarContent } from './TopBarContent'
import { MobileBar } from './MobileBar'

export const TopBar = () => {
  const [isSocialOpen, setIsSocialOpen] = useState(true)

  const handleClick = () => {
    setIsSocialOpen((prev) => !prev)
  }

  return (
    <>
      <TopBarContent
        isSocialOpen={isSocialOpen}
        toggleIcon={handleClick}
        links={socialLinksBase}
      />
      <MobileBar isSocialOpen={isSocialOpen} links={socialLinksBase} />
    </>
  )
}
