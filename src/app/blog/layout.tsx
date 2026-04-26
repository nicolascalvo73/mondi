import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Diseño Web, E-commerce y Negocios Digitales en Argentina',
  description: 'Recursos y guías sobre diseño web, tiendas online, inteligencia artificial y presencia digital para empresas y emprendedores en toda Argentina.',
  alternates: {
    canonical: 'https://www.mondistudio.com.ar/blog',
  },
  openGraph: {
    title: 'Blog de Mondi Studio — Recursos para negocios digitales en Argentina',
    description: 'Guías sobre diseño web, e-commerce e IA para PyMEs y emprendedores argentinos.',
    url: 'https://www.mondistudio.com.ar/blog',
    type: 'website',
    images: [{ url: '/og-image.png' }],
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
