'use client'

import { Container, Grid, Box, Typography, Button, Chip, Paper } from '@mui/material'

export default function HeroSection() {
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
              label="Estudio de diseño web · Córdoba, Argentina"
              sx={{
                backgroundColor: '#cfe8dc',
                color: '#354b43',
                mb: 3,
              }}
            />
            <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
              Tu negocio, con la cara que{' '}
              <Box
                component="em"
                sx={{
                  fontStyle: 'italic',
                  color: 'primary.main',
                }}
              >
                merece
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
              Diseño y desarrollo web directo, sin vueltas. Landing pages, webs institucionales,
              tiendas online y mantenimiento. Todo con comunicación clara y entregas en tiempo.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button variant="contained" color="primary" href="#contacto" size="large">
                Quiero mi web
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
                Ver plataformas
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
              <Typography
                sx={{
                  fontSize: '4rem',
                  opacity: 0.3,
                  color: 'primary.contrastText',
                }}
              >
                🐱
              </Typography>

              <Paper
                sx={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(0.75rem)',
                  p: 2.5,
                  borderRadius: '1rem',
                }}
              >
                <Typography variant="caption" sx={{ display: 'block', mb: 0.5 }}>
                  Director Creativo
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-epilogue)',
                    fontStyle: 'italic',
                    fontSize: '0.9375rem',
                  }}
                >
                  "Miau miau, aprobado."
                </Typography>
              </Paper>

              <Paper
                sx={{
                  position: 'absolute',
                  top: '-0.5rem',
                  right: '-0.5rem',
                  backgroundColor: 'background.paper',
                  p: 1.5,
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  boxShadow: '0 0.25rem 1rem rgba(0,0,0,0.1)',
                }}
              >
                <Box
                  sx={{
                    width: '0.5rem',
                    height: '0.5rem',
                    borderRadius: '50%',
                    backgroundColor: '#25D366',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0.5 },
                    },
                  }}
                />
                <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.8125rem' }}>
                  Online & Ready
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
