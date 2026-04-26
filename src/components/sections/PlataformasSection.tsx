'use client'

import { Container, Grid, Box, Typography, Card, CardContent, Chip, Divider, Button } from '@mui/material'
import { useTranslation } from '@/i18n/useTranslation'

const tiendas = [
  { nombre: 'Tienda Nube', ideal: 'PyMEs argentinas' },
  { nombre: 'Empretienda', ideal: 'Emprendedores' },
  { nombre: 'WooCommerce', ideal: 'WordPress' },
  { nombre: 'Shopify', ideal: 'Internacional' },
  { nombre: 'VTEX', ideal: 'Enterprise', badge: true },
]

const webs = [
  { nombre: 'Next.js', ideal: 'Performance' },
  { nombre: 'WordPress', ideal: 'Gestión simple' },
  { nombre: 'NIC.ar', ideal: 'Dominios .ar' },
  { nombre: 'Mercado Pago', ideal: 'Pagos online' },
  { nombre: 'Cloudflare', ideal: 'Seguridad' },
]

export default function PlataformasSection() {
  const { t } = useTranslation()

  return (
    <Box
      component="section"
      id="plataformas"
      sx={{
        py: 12,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 8 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            {t.plataformas.title}{' '}
            <Box component="em" sx={{ fontFamily: 'var(--font-brand)', fontStyle: 'italic', color: 'primary.main' }}>
              {t.plataformas.titleHighlight}
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '42rem' }}>
            {t.plataformas.subtitle}
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            component="h3"
            sx={{ mb: 4, fontFamily: 'var(--font-epilogue)' }}
          >
            {t.plataformas.tiendasTitle}
          </Typography>
          <Grid container spacing={3}>
            {tiendas.map((plataforma) => (
              <Grid item xs={6} sm={4} md={2.4} key={plataforma.nombre}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 3,
                    textAlign: 'center',
                    position: 'relative',
                    '&:hover .platform-logo': {
                      filter: 'grayscale(0)',
                    },
                  }}
                >
                  {plataforma.badge && (
                    <Chip
                      label="Enterprise"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: '0.5rem',
                        right: '0.5rem',
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                        fontSize: '0.625rem',
                        height: '1.25rem',
                      }}
                    />
                  )}
                  <CardContent sx={{ p: 0 }}>
                    <Box
                      className="platform-logo"
                      sx={{
                        width: '4rem',
                        height: '4rem',
                        borderRadius: '0.5rem',
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'light' ? '#f0ede9' : '#3a3a37',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        filter: 'grayscale(1)',
                        transition: 'filter 0.3s ease',
                        fontSize: '1.5rem',
                      }}
                    >
                      🛒
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>
                      {plataforma.nombre}
                    </Typography>
                    <Chip
                      label={`${t.plataformas.idealPara} ${plataforma.ideal}`}
                      size="small"
                      sx={{
                        fontSize: '0.625rem',
                        height: '1.25rem',
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'light' ? '#cfe8dc' : '#354b43',
                        color: (theme) =>
                          theme.palette.mode === 'light' ? '#354b43' : '#cfe8dc',
                      }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 6, borderColor: 'rgba(224, 191, 180, 0.15)' }} />

        <Box>
          <Typography
            variant="h4"
            component="h3"
            sx={{ mb: 4, fontFamily: 'var(--font-epilogue)' }}
          >
            {t.plataformas.websTitle}
          </Typography>
          <Grid container spacing={3}>
            {webs.map((plataforma) => (
              <Grid item xs={6} sm={4} md={2.4} key={plataforma.nombre}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 3,
                    textAlign: 'center',
                    '&:hover .platform-logo': {
                      filter: 'grayscale(0)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Box
                      className="platform-logo"
                      sx={{
                        width: '4rem',
                        height: '4rem',
                        borderRadius: '0.5rem',
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'light' ? '#f0ede9' : '#3a3a37',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        filter: 'grayscale(1)',
                        transition: 'filter 0.3s ease',
                        fontSize: '1.5rem',
                      }}
                    >
                      🌐
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>
                      {plataforma.nombre}
                    </Typography>
                    <Chip
                      label={`${t.plataformas.idealPara} ${plataforma.ideal}`}
                      size="small"
                      sx={{
                        fontSize: '0.625rem',
                        height: '1.25rem',
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'light' ? '#cfe8dc' : '#354b43',
                        color: (theme) =>
                          theme.palette.mode === 'light' ? '#354b43' : '#cfe8dc',
                      }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            mt: 8,
            p: 4,
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? '#f6f3ee' : '#2a2a27',
            borderRadius: '1rem',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            {t.plataformas.noEncontras}
          </Typography>
          <Button variant="contained" color="primary" href="#contacto">
            {t.plataformas.cta}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
