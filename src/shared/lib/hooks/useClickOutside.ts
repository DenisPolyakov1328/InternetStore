'use client'
import React, { useEffect } from 'react'

export const useClickOutside = (
  ref: React.RefObject<HTMLDivElement | null>,
  callback: () => void,
  when = true
) => {
  useEffect(() => {
    if (!when) return

    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [ref, callback, when])
}
