'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type ThemeMode = 'light' | 'dark'

interface ThemeContextType {
  mode: ThemeMode
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light')

  useEffect(() => {
    const savedMode = localStorage.getItem('theme-mode') as ThemeMode
    if (savedMode) {
      setMode(savedMode)
    }
  }, [])

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme-mode', newMode)
      return newMode
    })
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeMode() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeMode must be used within ThemeContextProvider')
  }
  return context
}
