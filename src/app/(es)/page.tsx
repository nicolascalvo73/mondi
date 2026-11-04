import Home from '@/site/Home'
import { siteMetadata } from '@/site/metadata'

export const metadata = siteMetadata('es')

export default function Page() {
  return <Home lang="es" />
}
