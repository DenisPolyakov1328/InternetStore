'use client'
import { useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'
import { HeaderContent } from './HeaderContent'

const HEADER_HEIGHT = 80

export const Header = () => {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(!entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0
      }
    )

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current)
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current)
      }
    }
  }, [])

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1500,
          height: HEADER_HEIGHT,
          bgcolor: 'background.paper',
          boxShadow:
            'rgba(43, 52, 69, 0.05) 0px 0px 24px, rgba(43, 52, 69, 0.05) 0px 3px 6px',
          transform: isFixed ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isFixed ? 1 : 0,
          transition: 'transform 0.4s ease'
        }}
      >
        <HeaderContent isFixed={true} />
      </Box>

      <Box
        ref={sentinelRef}
        sx={{
          height: HEADER_HEIGHT
        }}
      >
        <HeaderContent />
      </Box>
    </>
  )
}
