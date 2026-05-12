'use client'

import { Container, Grid, Box, Typography, Button, Chip, Paper } from '@mui/material'
import Image from 'next/image'
import { useTranslations } from '@/lib/useTranslations'

export default function HeroSection() {
  const { t } = useTranslations()
  
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
              label={t('hero.location')}
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light' ? '#cfe8dc' : '#354b43',
                color: (theme) =>
                  theme.palette.mode === 'light' ? '#354b43' : '#cfe8dc',
                mb: 3,
              }}
            />
            <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
              {t('hero.title')}
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
              {t('hero.subtitle')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button variant="contained" color="primary" href="#contacto" size="large">
                {t('hero.cta')}
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
                {t('hero.platforms')}
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
                src="/Gemini_Generated_Image_xregmqxregmqxreg copy.png"
                alt="Mondi Studio"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
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
                  Director Creativo
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-unbounded)',
                    fontStyle: 'italic',
                    fontSize: '0.9375rem',
                  }}
                >
                  "Miau miau, aprobado."
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
