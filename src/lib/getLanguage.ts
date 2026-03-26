import { cookies } from 'next/headers'
import type { Language } from './formatDate'

export async function getLanguage(): Promise<Language> {
  const cookieStore = await cookies()
  const languageCookie = cookieStore.get('language')
  const language = languageCookie?.value as Language
  return language || 'es'
}
