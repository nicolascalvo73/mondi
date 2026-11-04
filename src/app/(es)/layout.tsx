export { viewport } from '@/site/viewport'
import RootShell from '@/site/RootShell'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="es">{children}</RootShell>
}
