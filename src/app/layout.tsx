import type { Metadata } from 'next'
import { Epilogue, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeContextProvider } from '@/lib/ThemeContext'
import { LanguageContextProvider } from '@/lib/LanguageContext'
import ThemeRegistry from '@/lib/ThemeRegistry'

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
  title: {
    default: 'Mondi Studio — Diseño Web en Córdoba, Argentina',
    template: '%s | Mondi Studio',
  },
  description: 'Diseño y desarrollo web profesional en Córdoba. Landings, tiendas online (Tienda Nube, Shopify, VTEX, WooCommerce) y webs institucionales para PyMEs y profesionales. Entrega rápida, precios claros, sin estructuras de agencia.',
  metadataBase: new URL('https://www.mondistudio.com.ar'),
  keywords: [
    'diseño web Córdoba',
    'desarrollo web Córdoba',
    'páginas web Córdoba Argentina',
    'tienda online Córdoba',
    'Tienda Nube Córdoba',
    'landing page Córdoba',
    'web profesional PyMEs Córdoba',
    'VTEX Córdoba',
    'Shopify Argentina',
    'WooCommerce Córdoba',
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
      {
        url: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐱</text></svg>',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.mondistudio.com.ar',
    siteName: 'Mondi Studio',
    title: 'Mondi Studio — Diseño Web en Córdoba, Argentina',
    description: 'Landings, tiendas online y webs para negocios en Córdoba. Comunicación directa, precios transparentes, sin estructuras de agencia.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mondi Studio — Diseño web profesional en Córdoba',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mondi Studio — Diseño Web en Córdoba',
    description: 'Landings, tiendas online y webs para negocios en Córdoba.',
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
    <html lang="es" className={`${epilogue.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning>
        <a className="skip-link" href="#main-content">
          Ir al contenido principal
        </a>
        <AppRouterCacheProvider>
          <LanguageContextProvider>
            <ThemeContextProvider>
              <ThemeRegistry>
                <CssBaseline />
                {children}
              </ThemeRegistry>
            </ThemeContextProvider>
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
              alternateName: 'Mondi Studio Córdoba',
              url: 'https://www.mondistudio.com.ar',
              logo: 'https://www.mondistudio.com.ar/logo.svg',
              image: 'https://www.mondistudio.com.ar/og-image.png',
              description: 'Estudio de diseño y desarrollo web en Córdoba, Argentina. Especializado en landings, tiendas online y webs institucionales para PyMEs y profesionales.',
              telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
                ? `+${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}` 
                : undefined,
              email: 'hola@mondistudio.com.ar',
              founder: {
                '@type': 'Person',
                name: 'Nicolás Calvo',
                jobTitle: 'Desarrollador Frontend',
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
                { '@type': 'City', name: 'Córdoba', 'address': { '@type': 'PostalAddress', addressCountry: 'AR' } },
                { '@type': 'Country', name: 'Argentina' },
              ],
              serviceType: [
                'Diseño web',
                'Desarrollo web',
                'Landing pages',
                'Tiendas online',
                'E-commerce',
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
                      name: 'Landing Page',
                      description: 'Página de aterrizaje optimizada para conversión',
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
                      description: 'Sitio web completo para empresas y profesionales',
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
                      description: 'E-commerce en Tienda Nube, Shopify, WooCommerce o VTEX',
                    },
                    priceSpecification: {
                      '@type': 'PriceSpecification',
                      price: '400',
                      priceCurrency: 'USD',
                      minPrice: '400',
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
              paymentAccepted: 'Transferencia bancaria, Mercado Pago, PayPal',
            }),
          }}
        />
      </body>
    </html>
  )
}
