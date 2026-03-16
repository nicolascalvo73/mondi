import type { Metadata } from 'next'
import { Epilogue, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/lib/theme'

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-epilogue',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mondi Studio — Diseño y desarrollo',
  description: 'Estudio de diseño web. Landing pages, webs institucionales, tiendas online y mantenimiento. Comunicación directa, sin estructuras de agencia.',
  keywords: ['diseño web', 'desarrollo web', 'Argentina', 'landing page', 'tienda online', 'Tienda Nube', 'Shopify', 'VTEX'],
  authors: [{ name: 'Mondi Studio' }],
  openGraph: {
    title: 'Mondi Studio — Diseño y desarrollo web en Córdoba',
    description: 'Tu negocio, con la cara que merece.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mondistudio.com.ar',
    siteName: 'Mondi Studio',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${epilogue.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Ir al contenido principal
        </a>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
