'use client'

import { useLanguage } from './LanguageContext'
import es from '../../messages/es.json'
import pt from '../../messages/pt.json'
import en from '../../messages/en.json'

const messages = { es, pt, en }

export function useTranslations() {
  const { language } = useLanguage()
  
  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = messages[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }
  
  return { t, language }
}
