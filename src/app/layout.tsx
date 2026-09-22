import type { Metadata } from 'next'
import { Unbounded, Inter, JetBrains_Mono } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeContextProvider } from '@/lib/ThemeContext'
import { LanguageContextProvider } from '@/lib/LanguageContext'
import { DolarBlueProvider } from '@/lib/DolarBlueContext'
import ThemeRegistry from '@/lib/ThemeRegistry'

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  weight: ['400', '700', '900'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
  title: {
    default: 'Mondi Studio',
    template: '%s | Mondi Studio',
  },
  description: 'Diseño y desarrollo web profesional para negocios en toda Argentina. Landings, tiendas online (Tienda Nube, Shopify, VTEX, WooCommerce) y webs institucionales para PyMEs y profesionales. Entrega rápida, precios claros, sin estructuras de agencia.',
  metadataBase: new URL('https://www.mondistudio.com.ar'),
  keywords: [
    'diseño web Argentina',
    'desarrollo web Argentina',
    'páginas web profesionales Argentina',
    'tienda online Argentina',
    'landing page Argentina',
    'diseño web Córdoba',
    'agencia web Argentina',
    'Tienda Nube Argentina',
    'VTEX Argentina',
    'Shopify Argentina',
    'WooCommerce Argentina',
    'web para PyMEs Argentina',
    'diseño web Buenos Aires',
    'diseño web Rosario',
    'web profesional emprendedores Argentina',
    'Mondi Studio',
  ],
  authors: [{ name: 'Mondi Studio', url: 'https://www.mondistudio.com.ar' }],
  creator: 'Mondi Studio',
  publisher: 'Mondi Studio',
  alternates: {
    canonical: 'https://www.mondistudio.com.ar',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico'],
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.mondistudio.com.ar',
    siteName: 'Mondi Studio',
    title: 'Mondi Studio',
    description: 'Landings, tiendas online y webs para negocios en toda Argentina. Comunicación directa, precios transparentes, sin estructuras de agencia.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mondi Studio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mondi Studio — Diseño Web en Argentina',
    description: 'Landings, tiendas online y webs para negocios en toda Argentina.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${unbounded.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning>
        <a className="skip-link" href="#main-content">
          Ir al contenido principal
        </a>
        <AppRouterCacheProvider>
          <LanguageContextProvider>
            <DolarBlueProvider>
              <ThemeContextProvider>
                <ThemeRegistry>
                  <CssBaseline />
                  {children}
                </ThemeRegistry>
              </ThemeContextProvider>
            </DolarBlueProvider>
          </LanguageContextProvider>
        </AppRouterCacheProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              '@id': 'https://www.mondistudio.com.ar',
              name: 'Mondi Studio',
              alternateName: [
                'Mondi Studio Argentina',
                'Mondi Studio Córdoba',
                'Diseño web Argentina',
              ],
              url: 'https://www.mondistudio.com.ar',
              logo: 'https://www.mondistudio.com.ar/logo.svg',
              image: 'https://www.mondistudio.com.ar/og-image.png',
              description: 'Estudio de diseño y desarrollo web con base en Córdoba, Argentina. Trabajamos con negocios de todo el país. Especializado en landings, tiendas online y webs institucionales para PyMEs y profesionales.',
              telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
                ? `+${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}` 
                : undefined,
              email: 'hola@mondistudio.com.ar',
              founder: {
                '@type': 'Person',
                name: 'Nicolás Calvo',
                jobTitle: 'Desarrollador Frontend Senior',
                worksFor: {
                  '@type': 'Organization',
                  name: 'Mondi Studio',
                },
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Córdoba',
                addressRegion: 'Córdoba',
                addressCountry: 'AR',
                postalCode: '5000',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -31.4201,
                longitude: -64.1888,
              },
              areaServed: [
                { '@type': 'Country', name: 'Argentina' },
                { '@type': 'City', name: 'Córdoba' },
                { '@type': 'City', name: 'Buenos Aires' },
                { '@type': 'City', name: 'Rosario' },
                { '@type': 'City', name: 'Mendoza' },
                { '@type': 'City', name: 'Tucumán' },
                { '@type': 'City', name: 'Santa Fe' },
              ],
              serviceType: [
                'Diseño web',
                'Desarrollo web',
                'Landing pages',
                'Tiendas online',
                'E-commerce',
                'Configuración Tienda Nube',
                'Configuración Shopify',
                'Desarrollo VTEX',
                'Mantenimiento web',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Servicios de Mondi Studio',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Landing Page profesional',
                      description: 'Página de aterrizaje optimizada para conversión con diseño personalizado, formulario de contacto y SEO básico incluido.',
                    },
                    priceSpecification: {
                      '@type': 'PriceSpecification',
                      price: '300',
                      priceCurrency: 'USD',
                      minPrice: '300',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Web institucional',
                      description: 'Sitio web completo para empresas y profesionales. Hasta 5 secciones, blog, galería y SEO optimizado.',
                    },
                    priceSpecification: {
                      '@type': 'PriceSpecification',
                      price: '700',
                      priceCurrency: 'USD',
                      minPrice: '700',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Tienda online',
                      description: 'E-commerce completo en Tienda Nube, Shopify, WooCommerce o VTEX. Incluye medios de pago y capacitación.',
                    },
                    priceSpecification: {
                      '@type': 'PriceSpecification',
                      price: '400',
                      priceCurrency: 'USD',
                      minPrice: '400',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Mantenimiento web mensual',
                      description: 'Mantenimiento, actualizaciones, backups y soporte continuo para tu web.',
                    },
                    priceSpecification: {
                      '@type': 'PriceSpecification',
                      price: '80',
                      priceCurrency: 'USD',
                      minPrice: '80',
                    },
                  },
                ],
              },
              sameAs: [
                'https://instagram.com/mondistudio',
              ],
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
              },
              priceRange: '$$',
              currenciesAccepted: 'USD, ARS',
              paymentAccepted: 'Transferencia bancaria, Mercado Pago, PayPal, Crypto',
            }),
          }}
        />
      </body>
    </html>
  )
}
