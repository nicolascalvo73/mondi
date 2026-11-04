import { Anton, DM_Sans, JetBrains_Mono, Unbounded } from 'next/font/google'

export const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton', display: 'swap' })
export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-dmsans',
  display: 'swap',
})
export const jbMono = JetBrains_Mono({ subsets: ['latin'], weight: '400', variable: '--font-jbmono', display: 'swap' })
export const unbounded = Unbounded({ subsets: ['latin'], weight: '600', variable: '--font-unbounded', display: 'swap' })

export const fontVars = `${anton.variable} ${dmSans.variable} ${jbMono.variable} ${unbounded.variable}`
