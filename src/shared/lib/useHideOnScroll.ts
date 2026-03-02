'use client'
import { useEffect } from 'react'

export const useHideOnScroll = (callback: () => void, when = true) => {
  useEffect(() => {
    if (!when) return

    const handleScroll = () => {
      callback()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [callback, when])
}
