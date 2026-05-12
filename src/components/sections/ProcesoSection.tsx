'use client'

import { Container, Grid, Box, Typography } from '@mui/material'
import { useTranslations } from '@/lib/useTranslations'

export default function ProcesoSection() {
  const { t } = useTranslations()
  
  const pasos = [
    {
      numero: '01',
      titulo: t('process.steps.talk.title'),
      descripcion: t('process.steps.talk.description'),
    },
    {
      numero: '02',
      titulo: t('process.steps.quote.title'),
      descripcion: t('process.steps.quote.description'),
    },
    {
      numero: '03',
      titulo: t('process.steps.build.title'),
      descripcion: t('process.steps.build.description'),
    },
    {
      numero: '04',
      titulo: t('process.steps.deliver.title'),
      descripcion: t('process.steps.deliver.description'),
    },
  ]
  return (
    <Box
      component="section"
      id="proceso"
      sx={{
        py: 12,
        backgroundColor: '#2D4A3E',
        color: '#F8F5F0',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{ mb: 2, textAlign: 'center', color: 'inherit' }}
        >
          {t('process.title')}{' '}
          <Box component="em" sx={{ color: 'primary.main' }}>
            {t('process.titleHighlight')}
          </Box>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            maxWidth: '42rem',
            mx: 'auto',
            mb: 10,
            opacity: 0.85,
          }}
        >
          {t('process.subtitle')}
        </Typography>

        <Grid container spacing={6}>
          {pasos.map((paso) => (
            <Grid item xs={12} sm={6} md={3} key={paso.numero}>
              <Box sx={{ position: 'relative' }}>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-unbounded)',
                    fontSize: 'clamp(5rem, 10vw, 8rem)',
                    fontWeight: 700,
                    color: 'rgba(248, 245, 240, 0.06)',
                    position: 'absolute',
                    top: '-1.25rem',
                    left: '-0.25rem',
                    zIndex: 0,
                    lineHeight: 1,
                  }}
                >
                  {paso.numero}
                </Typography>
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.875rem',
                      color: 'primary.main',
                      mb: 2,
                    }}
                  >
                    {paso.numero}
                  </Typography>
                  <Typography variant="h4" component="h3" sx={{ mb: 2, color: 'inherit' }}>
                    {paso.titulo}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.75 }}>
                    {paso.descripcion}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
