'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'es' | 'pt' | 'en'

interface LanguageContextType {
  language: Language
  cycleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageContextProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const cycleLanguage = () => {
    setLanguage((prevLanguage) => {
      const languages: Language[] = ['es', 'pt', 'en']
      const currentIndex = languages.indexOf(prevLanguage)
      const nextIndex = (currentIndex + 1) % languages.length
      const newLanguage = languages[nextIndex]
      localStorage.setItem('language', newLanguage)
      return newLanguage
    })
  }

  return (
    <LanguageContext.Provider value={{ language, cycleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageContextProvider')
  }
  return context
}
