'use client'

import { Container, Box, Grid, Typography, Link, Divider } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { useTranslation } from '@/i18n/useTranslation'

const navHrefs = [
  { key: 'servicios' as const, href: '#servicios' },
  { key: 'proceso' as const, href: '#proceso' },
  { key: 'plataformas' as const, href: '#plataformas' },
  { key: 'precios' as const, href: '#precios' },
  { key: 'sobreMi' as const, href: '#sobre-mi' },
  { key: 'blog' as const, href: '/blog' },
  { key: 'hablemos' as const, href: '#contacto' },
]

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

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
                fontFamily: 'var(--font-brand)',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Mondi Studio
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, maxWidth: '28rem' }}>
              {t.footer.description}
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
               href="https://wa.me/3516283916?text=Hola%20Mondi%20Studio"
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
                <Typography variant="body2">{t.nav.hablemos}</Typography>
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'var(--font-epilogue)',
                fontWeight: 600,
                fontSize: '0.9375rem',
                letterSpacing: '0.04em',
                color: 'text.secondary',
                mb: 1.5,
              }}
            >
              {t.footer.navegacion}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {navHrefs.map((link) => (
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
                  {t.nav[link.key]}
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
            © {currentYear}{' '}
            <Box component="span" sx={{ fontFamily: 'var(--font-brand)' }}>
              Mondi Studio
            </Box>
            . {t.footer.derechos}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
           {t.footer.hechoCon}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
