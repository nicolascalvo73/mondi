'use client'

import { Container, Grid, Box, Typography } from '@mui/material'

const pasos = [
  {
    numero: '01',
    titulo: 'Me contás tu negocio',
    descripcion:
      'Charlamos sobre qué necesitás, qué te gusta, y qué querés lograr con tu web. Sin formularios eternos.',
  },
  {
    numero: '02',
    titulo: 'Diseñamos juntos',
    descripcion:
      'Te muestro propuestas, ajustamos lo que haga falta. Vos decidís cómo queda tu proyecto.',
  },
  {
    numero: '03',
    titulo: 'Te entrego todo listo',
    descripcion:
      'Web funcionando, dominio configurado, hosting activo. Todo probado y listo para usar.',
  },
  {
    numero: '04',
    titulo: 'Te acompaño después',
    descripcion:
      'Si necesitás cambios, actualizaciones o tenés dudas, estoy disponible. Sin letra chica.',
  },
]

export default function ProcesoSection() {
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
          Un proceso{' '}
          <Box component="em" sx={{ fontFamily: 'var(--font-brand)', fontStyle: 'italic', color: 'primary.main' }}>
            simple
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
          Sin complicaciones ni pasos innecesarios. Así trabajamos de principio a fin.
        </Typography>

        <Grid container spacing={6}>
          {pasos.map((paso) => (
            <Grid item xs={12} sm={6} md={3} key={paso.numero}>
              <Box sx={{ position: 'relative' }}>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-epilogue)',
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
