import { Geist_Mono, Rubik } from 'next/font/google'

export const sansRounded = Rubik({
  subsets: ['latin'],
  variable: '--font-sans-rounded',
  display: 'swap',
})

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
