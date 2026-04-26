import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import Box from '@mui/material/Box'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <Box component="main" id="main-content">
        {children}
      </Box>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
