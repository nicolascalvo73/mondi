'use client'

import { Container, Grid, Box, Typography, Card, CardContent, Chip, Button } from '@mui/material'
import WebIcon from '@mui/icons-material/Web'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import BuildIcon from '@mui/icons-material/Build'
import BusinessIcon from '@mui/icons-material/Business'

export default function ServiciosSection() {
  return (
    <Box
      component="section"
      id="servicios"
      sx={{
        py: 12,
        backgroundColor: '#f6f3ee',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
          Servicios que{' '}
          <Box component="em" sx={{ fontStyle: 'italic', color: 'primary.main' }}>
            funcionan
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
          Desde una landing que convierte hasta una tienda enterprise. Todo diseñado para que tu
          negocio crezca.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                height: '100%',
                p: 5,
                position: 'relative',
                overflow: 'hidden',
                '&:hover .ghost-image': {
                  opacity: 1,
                },
              }}
            >
              <Box
                className="ghost-image"
                sx={{
                  position: 'absolute',
                  bottom: '-1rem',
                  right: '-1rem',
                  fontSize: '8rem',
                  opacity: 0.15,
                  transition: 'opacity 0.3s ease',
                }}
              >
                🐱
              </Box>
              <CardContent sx={{ p: 0, position: 'relative', zIndex: 1 }}>
                <WebIcon sx={{ fontSize: '3rem', color: 'primary.main', mb: 2 }} />
                <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
                  Landing page + Web institucional
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                  Sitios diseñados para convertir visitantes en clientes. Optimizados para SEO,
                  mobile y velocidad de carga.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip label="Next.js" sx={{ backgroundColor: '#cfe8dc' }} />
                  <Chip label="WordPress" sx={{ backgroundColor: '#cfe8dc' }} />
                  <Chip label="Responsive" sx={{ backgroundColor: '#cfe8dc' }} />
                  <Chip label="SEO" sx={{ backgroundColor: '#cfe8dc' }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                p: 5,
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <BuildIcon sx={{ fontSize: '3rem', mb: 2 }} />
                <Typography variant="h3" component="h3" sx={{ mb: 2, color: 'inherit' }}>
                  Mantenimiento
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                  Planes mensuales para que tu web esté siempre actualizada, segura y funcionando.
                </Typography>
                <Button
                  variant="outlined"
                  href="#precios"
                  sx={{
                    color: 'primary.contrastText',
                    borderColor: 'primary.contrastText',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderColor: 'primary.contrastText',
                    },
                  }}
                >
                  Ver Planes
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                p: 5,
                backgroundColor: '#cfe8dc',
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <ShoppingCartIcon sx={{ fontSize: '3rem', color: 'secondary.main', mb: 2 }} />
                <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
                  Tiendas online
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                  Configuración completa en las mejores plataformas de e-commerce.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    • Tienda Nube
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    • Empretienda
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    • WooCommerce
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    • Shopify
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Card
              sx={{
                height: '100%',
                p: 5,
                backgroundColor: '#e5e2dd',
                display: 'flex',
                alignItems: 'center',
                '&:hover .rotate-icon': {
                  transform: 'rotate(15deg)',
                },
              }}
            >
              <CardContent sx={{ p: 0, flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <BusinessIcon
                    className="rotate-icon"
                    sx={{
                      fontSize: '3rem',
                      color: 'secondary.main',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  <Chip
                    label="Enterprise"
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                      fontWeight: 700,
                    }}
                  />
                </Box>
                <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
                  VTEX Enterprise
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Desarrollo y mantenimiento de tiendas enterprise en VTEX. Integraciones,
                  customizaciones y soporte técnico especializado.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
