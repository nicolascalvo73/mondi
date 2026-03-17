'use client'

import { Container, Grid, Box, Typography, Card, CardContent, Avatar } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

const testimonios = [
  {
    nombre: 'María González',
    rol: 'Dueña',
    empresa: 'Café del Centro · Córdoba',
    testimonio:
      'Necesitaba una web rápido para mi cafetería y Mondi la entregó en dos semanas. Quedó hermosa y mis clientes la usan para ver el menú y reservar.',
    iniciales: 'MG',
  },
  {
    nombre: 'Lucas Fernández',
    rol: 'Fundador',
    empresa: 'Tienda Verde · Villa María',
    testimonio:
      'Configuró mi Tienda Nube completa, subió los productos y me enseñó a gestionarla. Ahora vendo online sin depender de nadie y sin las comisiones de mercadolibre.',
    iniciales: 'LF',
  },
  {
    nombre: 'Ana Rodríguez',
    rol: 'Directora',
    empresa: 'Estudio Jurídico · Córdoba',
    testimonio:
      'Comunicación directa, sin vueltas. Me explicó todo y siempre respondió rápido. La web quedó exactamente como la imaginaba. Tengo un sitio web profesional y funcional de primer nivel.',
    iniciales: 'AR',
  },
]

export default function TestimoniosSection() {
  return (
    <Box
      component="section"
      id="testimonios"
      sx={{
        py: 12,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? '#f6f3ee' : '#1a1a17',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
          Lo que dicen{' '}
          <Box component="em" sx={{ fontStyle: 'italic', color: 'primary.main' }}>
            mis clientes
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
          Proyectos reales, clientes reales, resultados reales.
        </Typography>

        <Grid container spacing={4}>
          {testimonios.map((testimonio) => (
            <Grid item xs={12} md={4} key={testimonio.nombre}>
              <Card sx={{ height: '100%', p: 4, pb: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ p: 0, '&:last-child': { pb: 0 }, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Avatar
                      sx={{
                        width: '3rem',
                        height: '3rem',
                        backgroundColor: 'primary.main',
                        fontWeight: 700,
                      }}
                    >
                      {testimonio.iniciales}
                    </Avatar>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 700 }}>
                        {testimonio.nombre}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                        {testimonio.rol} · {testimonio.empresa}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: 'var(--font-epilogue)',
                      fontStyle: 'italic',
                      color: 'text.secondary',
                      mb: 3,
                      '&::before': { content: '"\\201C"' },
                      '&::after': { content: '"\\201D"' },
                    }}
                  >
                    {testimonio.testimonio}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 0.5, mt: 'auto' }}>
                    {[...Array(5)].map((_, index) => (
                      <StarIcon key={index} sx={{ fontSize: '1.25rem', color: '#E8622A' }} />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
