'use client'

import { Container, Grid, Box, Typography, Card, CardContent, Chip, Divider, Button } from '@mui/material'
import Image from 'next/image'
import { useTranslations } from '@/lib/useTranslations'

export default function PlataformasSection() {
  const { t } = useTranslations()
  
  const tiendas = [
    { nombre: 'Tienda Nube', ideal: t('platforms.stores.tiendanube'), logo: '/logos/tiendanube.png' },
    { nombre: 'Shopify', ideal: t('platforms.stores.shopify'), logo: '/logos/Shopify.png' },
    { nombre: 'VTEX', ideal: t('platforms.stores.vtex'), badge: true, logo: '/logos/VTEX.png' },
    { nombre: 'WooCommerce', ideal: t('platforms.stores.woocommerce'), logo: '/logos/woo.png' },
    { nombre: 'Empretienda', ideal: t('platforms.stores.empretienda'), logo: '/logos/empretienda.png' },
  ]

  const webs = [
    { nombre: 'SanityCMS', ideal: t('platforms.webs.blogging'), logo: '/logos/Sanity.png' },
    { nombre: 'IA Integration', ideal: t('platforms.webs.wordpress'), logo: '/logos/ia_integration.png' },
    { nombre: 'Mercado Pago', ideal: t('platforms.webs.mercadopago'), logo: '/logos/MERCADOPAGO.png' },
    { nombre: 'Google Business', ideal: t('platforms.webs.googlebusiness'), logo: '/logos/googlebussiness.png' },
    { nombre: 'PayPal', ideal: t('platforms.webs.paypal'), logo: '/logos/PayPal.svg' },
  ]
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
            {t('platforms.title')}{' '}
            <Box component="em" sx={{ fontStyle: 'italic', color: 'primary.main' }}>
              {t('platforms.titleHighlight')}
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '42rem' }}>
            {t('platforms.subtitle')}
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            component="h3"
            sx={{ mb: 4, fontFamily: 'var(--font-epilogue)' }}
          >
            {t('platforms.ecommerce')}
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
                      label={t('services.vtex.badge')}
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
                          theme.palette.mode === 'light' ? '#f0ede9' : '#d4d4d4',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        filter: 'grayscale(1)',
                        transition: 'filter 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Image
                        src={plataforma.logo}
                        alt={plataforma.nombre}
                        width={48}
                        height={48}
                        style={{ 
                          objectFit: plataforma.nombre === 'Empretienda' ? 'cover' : 'contain',
                          width: plataforma.nombre === 'Empretienda' ? '100%' : 'auto',
                          height: plataforma.nombre === 'Empretienda' ? '100%' : 'auto'
                        }}
                      />
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>
                      {plataforma.nombre}
                    </Typography>
                    <Chip
                      label={`${t('platforms.idealFor')}: ${plataforma.ideal}`}
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
            {t('platforms.web')}
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
                          theme.palette.mode === 'light' ? '#f0ede9' : '#d4d4d4',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        filter: 'grayscale(1)',
                        transition: 'filter 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Image
                        src={plataforma.logo}
                        alt={plataforma.nombre}
                        width={48}
                        height={48}
                        style={{ objectFit: 'contain' }}
                      />
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>
                      {plataforma.nombre}
                    </Typography>
                    <Chip
                      label={`${t('platforms.idealFor')}: ${plataforma.ideal}`}
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
            {t('platforms.cta.question')}
          </Typography>
          <Button variant="contained" color="primary" href="#contacto">
            {t('platforms.cta.button')}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
