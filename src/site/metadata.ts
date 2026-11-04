import type { Metadata } from 'next'
import { content, type Lang } from './content'

const ORIGIN = 'https://www.mondistudio.com.ar'

export function siteMetadata(lang: Lang): Metadata {
  const c = content[lang].meta
  const path = lang === 'es' ? '/' : '/en/'
  return {
    metadataBase: new URL(ORIGIN),
    title: c.title,
    description: c.description,
    alternates: {
      canonical: path,
      languages: { 'es-AR': '/', en: '/en/', 'x-default': '/' },
    },
    authors: [{ name: 'Mondi Studio', url: ORIGIN }],
    creator: 'Mondi Studio',
    publisher: 'Mondi Studio',
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    },
    openGraph: {
      type: 'website',
      locale: c.ogLocale,
      url: path,
      siteName: 'Mondi Studio',
      title: c.title,
      description: c.description,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Mondi Studio' }],
    },
    twitter: { card: 'summary_large_image', title: c.title, description: c.description, images: ['/og-image.png'] },
    robots: { index: true, follow: true },
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? '' },
  }
}
