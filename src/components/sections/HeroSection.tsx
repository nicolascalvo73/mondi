'use client'

import { Container, Grid, Box, Typography, Button, Chip, Paper } from '@mui/material'
import Image from 'next/image'
import { useTranslation } from '@/i18n/useTranslation'

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        pt: 8,
        pb: 16,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Chip
              label={t.hero.chip}
              sx={{
                backgroundColor: '#cfe8dc',
                color: '#354b43',
                mb: 3,
              }}
            />
            <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
              {t.hero.title}{' '}
              <Box
                component="em"
                sx={{
                  fontFamily: 'var(--font-brand)',
                  fontStyle: 'italic',
                  color: 'primary.main',
                }}
              >
                {t.hero.titleHighlight}
              </Box>
              .
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                lineHeight: 1.65,
                maxWidth: '36rem',
                mb: 4,
                color: 'text.secondary',
              }}
            >
              {t.hero.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button variant="contained" color="primary" href="#contacto" size="large">
                {t.hero.ctaPrimary}
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                href="#plataformas"
                size="large"
                sx={{
                  borderColor: '#E8E2DA',
                  color: 'text.primary',
                }}
              >
                {t.hero.ctaSecondary}
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                aspectRatio: '4/5',
                backgroundColor: 'primary.main',
                borderRadius: '2rem',
                transform: 'rotate(-2deg)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src="/Gemini_Generated_Image_xregmqxregmqxreg.png"
                alt="Mondi Studio"
                fill
                style={{
                  objectFit: 'cover',
                }}
                priority
              />

              <Paper
                sx={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? 'rgba(255,255,255,0.9)'
                      : 'rgba(42, 42, 39, 0.9)',
                  backdropFilter: 'blur(0.75rem)',
                  opacity: 0.85,
                  p: 2.5,
                  borderRadius: '1rem',
                }}
              >
                <Typography variant="caption" sx={{ display: 'block', mb: 0.5 }}>
                  {t.hero.directorCreativo}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-epilogue)',
                    fontStyle: 'italic',
                    fontSize: '0.9375rem',
                  }}
                >
                  {t.hero.quote}
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
