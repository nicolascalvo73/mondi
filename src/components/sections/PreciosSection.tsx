'use client'

import { Container, Grid, Box, Typography, Card, CardContent, Chip, Paper, Divider } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useTranslations } from '@/lib/useTranslations'

export default function PreciosSection() {
  const { t } = useTranslations()
  
  const planes = [
    {
      nombre: t('pricing.plans.landing.name'),
      precio: t('pricing.plans.landing.price'),
      descripcion: t('pricing.plans.landing.description'),
      caracteristicas: t('pricing.plans.landing.features') as unknown as string[],
    },
    {
      nombre: t('pricing.plans.website.name'),
      precio: t('pricing.plans.website.price'),
      descripcion: t('pricing.plans.website.description'),
      caracteristicas: t('pricing.plans.website.features') as unknown as string[],
      destacado: true,
      badge: t('pricing.plans.website.badge'),
    },
    {
      nombre: t('pricing.plans.ecommerce.name'),
      precio: t('pricing.plans.ecommerce.price'),
      descripcion: t('pricing.plans.ecommerce.description'),
      caracteristicas: t('pricing.plans.ecommerce.features') as unknown as string[],
    },
  ]
  return (
    <Box
      component="section"
      id="precios"
      sx={{
        py: 12,
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
          {t('pricing.title')}{' '}
          <Box component="em" sx={{ color: 'primary.main' }}>
            {t('pricing.titleHighlight')}
          </Box>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            maxWidth: '42rem',
            mx: 'auto',
            mb: 8,
            color: 'text.secondary',
          }}
        >
          {t('pricing.subtitle')}
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {planes.map((plan) => (
            <Grid item xs={12} md={4} key={plan.nombre}>
              <Card
                sx={{
                  height: '100%',
                  p: 4,
                  borderTop: plan.destacado ? '0.25rem solid' : 'none',
                  borderTopColor: plan.destacado ? 'primary.main' : 'transparent',
                  position: 'relative',
                }}
                >
                {plan.destacado && (
                  <Chip
                  label={(plan as any).badge}
                  sx={{
                      position: 'absolute',
                      top: '-0.25rem',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                    }}
                  />
                )}
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h4" component="h3" sx={{ mb: 1 }}>
                    {plan.nombre}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 1 }}>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: '#9e9e9e',
                        fontStyle: 'italic',
                      }}
                    >
                      {t('pricing.from')}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: 'primary.main',
                      }}
                    >
                      {plan.precio}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                    {plan.descripcion}
                  </Typography>
                  <Divider sx={{ mb: 3 }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {plan.caracteristicas.map((caracteristica) => (
                      <Box key={caracteristica} sx={{ display: 'flex', gap: 1.5 }}>
                        <CheckCircleIcon sx={{ fontSize: '1.25rem', color: 'primary.main' }} />
                        <Typography variant="body2">{caracteristica}</Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Paper
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? '#f0ede9' : '#2a2a27',
            borderRadius: '1rem',
            p: 4,
            mb: 4,
          }}
        >
          <Typography
            variant="h4"
            component="h3"
            sx={{ mb: 3, fontFamily: 'var(--font-unbounded)' }}
          >
            {t('pricing.maintenance.title')}
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: 1,
                }}
              >
                {t('pricing.maintenance.basic.price')}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {t('pricing.maintenance.basic.name')}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 3 }}>
                {(t('pricing.maintenance.basic.features') as unknown as string[]).map((feature) => (
                  <Box key={feature} sx={{ display: 'flex', gap: 1.5 }}>
                    <CheckCircleIcon sx={{ fontSize: '1.25rem', color: 'primary.main' }} />
                    <Typography variant="body2">{feature}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: 1,
                }}
              >
                {t('pricing.maintenance.premium.price')}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {t('pricing.maintenance.premium.name')}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 3 }}>
                {(t('pricing.maintenance.premium.features') as unknown as string[]).map((feature) => (
                  <Box key={feature} sx={{ display: 'flex', gap: 1.5 }}>
                    <CheckCircleIcon sx={{ fontSize: '1.25rem', color: 'primary.main' }} />
                    <Typography variant="body2">{feature}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <Typography
          variant="body2"
          sx={{ fontStyle: 'italic', color: 'text.secondary', textAlign: 'center', mb: 2 }}
        >
          {t('pricing.vtexNote')}
        </Typography>
        <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', color: 'text.secondary', mt: 2 }}>
          {t('pricing.paymentNote')}
        </Typography>
      </Container>
    </Box>
  )
}
