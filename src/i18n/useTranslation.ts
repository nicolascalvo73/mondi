'use client'

import { useLanguage } from '@/lib/LanguageContext'
import { translations, type Translations } from './translations'

export function useTranslation(): { t: Translations; language: 'es' | 'en' | 'pt' } {
  const { language } = useLanguage()
  const t = (translations[language] ?? translations.es) as unknown as Translations
  return { t, language }
}
