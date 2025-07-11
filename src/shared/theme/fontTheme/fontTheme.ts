import { Public_Sans } from 'next/font/google'

export const publicSans = Public_Sans({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin']
})

export const fontFamily = publicSans.style.fontFamily
