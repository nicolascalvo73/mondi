'use client'

import { useState, useEffect } from 'react'
import { Container, Grid, Box, Typography, Card, CardContent, Chip, Paper, Divider, CircularProgress } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/i18n/useTranslation'

interface CotizacionBlue {
  moneda: string
  casa: string
  nombre: string
  compra: number
  venta: number
  fechaActualizacion: string
}

const planes = [
  {
    nombre: 'Landing Page',
    precioUSD: 400,
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
    nombre: 'Web a medida',
    precioUSD: 800,
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
    precioUSD: 500,
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
  const { language } = useLanguage()
  const { t } = useTranslation()
  const [cotizacion, setCotizacion] = useState<CotizacionBlue | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let cancelled = false
    async function fetchCotizacion() {
      try {
        setLoading(true)
        const res = await fetch('https://dolarapi.com/v1/dolares/blue')
        if (!res.ok) throw new Error('Error al obtener cotización')
        const data: CotizacionBlue = await res.json()
        if (!cancelled) setCotizacion(data)
      } catch {
        // Silenciosamente falla y deja precios en USD
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    fetchCotizacion()
    return () => { cancelled = true }
  }, [])

  function formatPrice(usd: number, suffix?: string) {
    if (language === 'es' && cotizacion) {
      const ars = usd * cotizacion.venta
      return `ARS ${ars.toLocaleString('es-AR')}${suffix ? `/${suffix}` : ''}`
    }
    return `USD ${usd.toLocaleString('en-US')}${suffix ? `/${suffix}` : ''}`
  }

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
          {t.precios.title}{' '}
          <Box component="em" sx={{ fontFamily: 'var(--font-brand)', fontStyle: 'italic', color: 'primary.main' }}>
            {t.precios.titleHighlight}
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
          {t.precios.subtitle}
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
                  label={t.precios.elegido}
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
                      {t.precios.desde}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: 'primary.main',
                      }}
                    >
                      {loading && language === 'es' ? (
                        <CircularProgress size={20} sx={{ color: 'primary.main' }} />
                      ) : (
                        formatPrice(plan.precioUSD)
                      )}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                    {t.precios.planes[planes.indexOf(plan)].descripcion}
                  </Typography>
                  <Divider sx={{ mb: 3 }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {t.precios.planes[planes.indexOf(plan)].caracteristicas.map((caracteristica: string) => (
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
            {t.precios.addonTitle}
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
                {loading && language === 'es' ? (
                  <CircularProgress size={16} sx={{ color: 'primary.main' }} />
                ) : (
                  formatPrice(80, 'mes')
                )}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {t.precios.mantenimientoBasico}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 3 }}>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ fontSize: '1.25rem', color: 'primary.main' }} />
                  <Typography variant="body2">{t.precios.mantenimiento[0][0]}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ fontSize: '1.25rem', color: 'primary.main' }} />
                  <Typography variant="body2">{t.precios.mantenimiento[0][1]}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ fontSize: '1.25rem', color: 'primary.main' }} />
                  <Typography variant="body2">{t.precios.mantenimiento[0][2]}</Typography>
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
                {loading && language === 'es' ? (
                  <CircularProgress size={16} sx={{ color: 'primary.main' }} />
                ) : (
                  formatPrice(150, 'mes')
                )}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {t.precios.mantenimientoPremium}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 3 }}>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ fontSize: '1.25rem', color: 'primary.main' }} />
                  <Typography variant="body2">{t.precios.mantenimiento[1][0]}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ fontSize: '1.25rem', color: 'primary.main' }} />
                  <Typography variant="body2">{t.precios.mantenimiento[1][1]}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ fontSize: '1.25rem', color: 'primary.main' }} />
                  <Typography variant="body2">{t.precios.mantenimiento[1][2]}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ fontSize: '1.25rem', color: 'primary.main' }} />
                  <Typography variant="body2">{t.precios.mantenimiento[1][3]}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <Typography
          variant="body2"
          sx={{ fontStyle: 'italic', color: 'text.secondary', textAlign: 'center', mb: 2 }}
        >
          {t.precios.vtexNote}
        </Typography>
        <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', color: 'text.secondary', mt: 2 }}>
          {language === 'es' && cotizacion
            ? `${t.precios.cotizacion}: $${cotizacion.venta.toLocaleString('es-AR')} ARS (venta). ${t.precios.metodoPago}`
            : `Precios en dólares estadounidenses. ${t.precios.metodoPago}`}
        </Typography>
      </Container>
    </Box>
  )
}
