export type Language = 'es' | 'pt' | 'en'

const localeMap: Record<Language, string> = {
  es: 'es-AR',
  pt: 'pt-BR',
  en: 'en-US',
}

export function formatDate(
  dateString: string,
  language: Language,
  options?: Intl.DateTimeFormatOptions
): string {
  const locale = localeMap[language] || localeMap.es
  const date = new Date(dateString)
  return date.toLocaleDateString(locale, options)
}
