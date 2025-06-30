'use client'
import { useState } from 'react'
import { socialLinksBase } from '@/shared/data'
import { TopBarContent } from './TopBarContent'
import { MobileBar } from './MobileBar'

export const TopBar = () => {
  const [isAddIcon, setIsAddIcon] = useState(true)

  const handleClick = () => {
    setIsAddIcon((prev) => !prev)
  }

  return (
    <>
      <TopBarContent
        isAddIcon={isAddIcon}
        toggleIcon={handleClick}
        links={socialLinksBase}
      />
      <MobileBar isAddIcon={isAddIcon} links={socialLinksBase} />
    </>
  )
}
