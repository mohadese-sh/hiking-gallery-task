'use client'

import { useEffect, useState } from 'react'
import { TThemeVariants } from './types'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<TThemeVariants>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as TThemeVariants | null
    if (savedTheme) setTheme(savedTheme)
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border rounded bg-gray-50 dark:bg-blue-950 text-blue-950 dark:text-gray-50 hover:bg-blue-200 dark:hover:bg-blue-900 transition"
    >
      {theme === 'light' ? '🌞 Light' : '🌙 Dark'}
    </button>
  )
}
