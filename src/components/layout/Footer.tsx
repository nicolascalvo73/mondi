'use client'

import { Container, Box, Grid, Typography, Link, Divider } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Plataformas', href: '#plataformas' },
  { label: 'Precios', href: '#precios' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        borderTop: '0.0625rem solid rgba(224, 191, 180, 0.15)',
        pt: 10,
        pb: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'var(--font-epilogue)',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Mondi Studio
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, maxWidth: '28rem' }}>
              Estudio de diseño y desarrollo web. Comunicación directa, sin estructuras
              de agencia.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
              <Link
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'hola@mondistudio.com.ar'}`}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: 'text.primary',
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <EmailIcon sx={{ fontSize: '1.25rem' }} />
                <Typography variant="body2">
                  {process.env.NEXT_PUBLIC_EMAIL || 'hola@mondistudio.com.ar'}
                </Typography>
              </Link>
              <Link
                href={`https://wa.me/${whatsappNumber}?text=Hola%20Mondi%20Studio`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: 'text.primary',
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <WhatsAppIcon sx={{ fontSize: '1.25rem' }} />
                <Typography variant="body2">WhatsApp</Typography>
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'var(--font-epilogue)',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Navegación
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  sx={{
                    color: 'text.primary',
                    textDecoration: 'none',
                    fontSize: '0.9375rem',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: 'rgba(224, 191, 180, 0.15)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © {currentYear} Mondi Studio. Todos los derechos reservados.
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
           Creado con 🤍 y maullidos 🐱 desde Córdoba, Argentina 🇦🇷
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
