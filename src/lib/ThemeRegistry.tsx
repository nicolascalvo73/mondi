'use client'

import { ReactNode, useMemo } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { useThemeMode } from './ThemeContext'
import { getTheme } from './theme'

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  const { mode } = useThemeMode()
  
  const theme = useMemo(() => getTheme(mode), [mode])

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
