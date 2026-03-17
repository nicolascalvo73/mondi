'use client'

import { Container, Grid, Box, Typography, Card, CardContent, Chip, Paper, Divider } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const planes = [
  {
    nombre: 'Landing Page',
    precio: 'USD 300',
    descripcion: 'Ideal para lanzar un producto o servicio',
    caracteristicas: [
      'Diseño responsive',
      'Formulario de contacto',
      'SEO básico',
      'Hosting incluido 1 año',
      'Dominio .com.ar incluido',
    ],
  },
  {
    nombre: 'Web completa',
    precio: 'USD 700',
    descripcion: 'Para empresas que necesitan presencia profesional',
    caracteristicas: [
      'Hasta 5 secciones',
      'Diseño personalizado',
      'SEO optimizado',
      'Blog integrado',
      'Hosting incluido 1 año',
      'Dominio .com.ar incluido',
      'Capacitación de uso',
    ],
    destacado: true,
  },
  {
    nombre: 'Tienda Online',
    precio: 'USD 400',
    descripcion: 'Configuración completa de tu e-commerce',
    caracteristicas: [
      'Setup en plataforma elegida',
      'Diseño de tema',
      'Carga de productos (hasta 50)',
      'Medios de pago',
      'Capacitación completa',
    ],
  },
]

export default function PreciosSection() {
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
          Precios{' '}
          <Box component="em" sx={{ fontStyle: 'italic', color: 'primary.main' }}>
            transparentes
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
          Sin sorpresas ni costos ocultos. Sabés exactamente qué estás pagando.
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
                  label="El más elegido"
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
                      desde
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
            sx={{ mb: 3, fontFamily: 'var(--font-epilogue)' }}
          >
            Add-on: Mantenimiento mensual
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
                USD 80/mes
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Mantenimiento básico
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 3 }}>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ fontSize: '1.25rem', color: 'primary.main' }} />
                  <Typography variant="body2">Actualizaciones de seguridad</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ fontSize: '1.25rem', color: 'primary.main' }} />
                  <Typography variant="body2">Backup semanal</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ fontSize: '1.25rem', color: 'primary.main' }} />
                  <Typography variant="body2">Soporte por email</Typography>
                </Box>
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
                USD 150/mes
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Mantenimiento premium
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 3 }}>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ fontSize: '1.25rem', color: 'primary.main' }} />
                  <Typography variant="body2">Todo lo del plan básico</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ fontSize: '1.25rem', color: 'primary.main' }} />
                  <Typography variant="body2">Cambios de contenido ilimitados</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ fontSize: '1.25rem', color: 'primary.main' }} />
                  <Typography variant="body2">Soporte prioritario</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ fontSize: '1.25rem', color: 'primary.main' }} />
                  <Typography variant="body2">Reportes mensuales</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <Typography
          variant="body2"
          sx={{ fontStyle: 'italic', color: 'text.secondary', textAlign: 'center', mb: 2 }}
        >
          Proyectos VTEX Enterprise: presupuesto personalizado según alcance y complejidad.
        </Typography>
        <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', color: 'text.secondary', mt: 2 }}>
          Precios en dólares estadounidenses. Método de pago: transferencia, Mercado Pago, PayPal, crypto.
        </Typography>
      </Container>
    </Box>
  )
}
