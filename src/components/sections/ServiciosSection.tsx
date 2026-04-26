'use client'

import { Container, Grid, Box, Typography, Card, CardContent, Chip, Button } from '@mui/material'
import Image from 'next/image'
import WebIcon from '@mui/icons-material/Web'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import BuildIcon from '@mui/icons-material/Build'
import BusinessIcon from '@mui/icons-material/Business'
import CodeIcon from '@mui/icons-material/Code'
import { useTranslation } from '@/i18n/useTranslation'

export default function ServiciosSection() {
  const { t } = useTranslation()

  return (
    <Box
      component="section"
      id="servicios"
      sx={{
        py: 12,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? '#f6f3ee' : '#1a1a17',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
          {t.servicios.title}{' '}
          <Box component="em" sx={{ fontFamily: 'var(--font-brand)', fontStyle: 'italic', color: 'primary.main' }}>
            {t.servicios.titleHighlight}
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
          {t.servicios.subtitle}
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
             
              </Box>
              <CardContent sx={{ p: 0, position: 'relative', zIndex: 1 }}>
                <WebIcon sx={{ fontSize: '3rem', color: 'primary.main', mb: 2 }} />
                <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
                  {t.servicios.landing.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                  {t.servicios.landing.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip
                    label={t.servicios.landing.chips[0]}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light' ? '#cfe8dc' : '#354b43',
                      color: (theme) =>
                        theme.palette.mode === 'light' ? '#354b43' : '#cfe8dc',
                    }}
                  />
                  <Chip
                    label={t.servicios.landing.chips[1]}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light' ? '#cfe8dc' : '#354b43',
                      color: (theme) =>
                        theme.palette.mode === 'light' ? '#354b43' : '#cfe8dc',
                    }}
                  />
                  <Chip
                    label={t.servicios.landing.chips[2]}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light' ? '#cfe8dc' : '#354b43',
                      color: (theme) =>
                        theme.palette.mode === 'light' ? '#354b43' : '#cfe8dc',
                    }}
                  />
                  <Chip
                    label={t.servicios.landing.chips[3]}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light' ? '#cfe8dc' : '#354b43',
                      color: (theme) =>
                        theme.palette.mode === 'light' ? '#354b43' : '#cfe8dc',
                    }}
                  />
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
                  {t.servicios.mantenimiento.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                  {t.servicios.mantenimiento.description}
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
                  {t.servicios.mantenimiento.cta}
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                p: 5,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light' ? '#cfe8dc' : '#354b43',
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <ShoppingCartIcon sx={{ fontSize: '3rem', color: 'secondary.main', mb: 2 }} />
                <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
                  {t.servicios.tiendas.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                  {t.servicios.tiendas.description}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {t.servicios.tiendas.platforms.map((pl) => (
                    <Typography variant="body2" sx={{ fontWeight: 600 }} key={pl}>
                      • {pl}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Card
              sx={{
                height: '100%',
                p: 5,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light' ? '#e5e2dd' : '#2a2a27',
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
                    label={t.servicios.vtex.badge}
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                      fontWeight: 700,
                    }}
                  />
                </Box>
                <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
                  {t.servicios.vtex.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {t.servicios.vtex.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card
              sx={{
                p: 5,
                position: 'relative',
                overflow: 'hidden',
                background: (theme) =>
                  theme.palette.mode === 'light'
                    ? 'linear-gradient(135deg, #fcf9f4 0%, #f6f3ee 100%)'
                    : 'linear-gradient(135deg, #2a2a27 0%, #1a1a17 100%)',
                border: '2px solid',
                borderColor: 'primary.main',
                '&:hover .code-emoji': {
                  transform: 'scale(1.1) rotate(5deg)',
                },
              }}
            >
              <Box
                className="code-emoji"
                sx={{
                  position: 'absolute',
                  top: '-2rem',
                  right: '2rem',
                  fontSize: '10rem',
                  opacity: 0.1,
                  transition: 'transform 0.3s ease',
                }}
              >
                💻
              </Box>
              <CardContent sx={{ p: 0, position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <CodeIcon sx={{ fontSize: '3.5rem', color: 'primary.main' }} />
                  <Chip
                    label={t.servicios.custom.badge}
                    sx={{
                      backgroundColor: 'secondary.main',
                      color: 'secondary.contrastText',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                    }}
                  />
                </Box>
                <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
                  {t.servicios.custom.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', maxWidth: '60rem' }}>
                  {t.servicios.custom.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip
                    label={t.servicios.custom.chips[0]}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light' ? '#e0bfb4' : '#594139',
                      color: 'text.primary',
                    }}
                  />
                  <Chip
                    label={t.servicios.custom.chips[1]}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light' ? '#e0bfb4' : '#594139',
                      color: 'text.primary',
                    }}
                  />
                  <Chip
                    label={t.servicios.custom.chips[2]}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light' ? '#e0bfb4' : '#594139',
                      color: 'text.primary',
                    }}
                  />
                  <Chip
                    label={t.servicios.custom.chips[3]}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light' ? '#e0bfb4' : '#594139',
                      color: 'text.primary',
                    }}
                  />
                  <Chip
                    label={t.servicios.custom.chips[4]}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light' ? '#e0bfb4' : '#594139',
                      color: 'text.primary',
                    }}
                  />
                  <Chip
                    label={t.servicios.custom.chips[5]}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light' ? '#e0bfb4' : '#594139',
                      color: 'text.primary',
                    }}
                  />
                  <Chip
                    label={t.servicios.custom.chips[6]}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light' ? '#e0bfb4' : '#594139',
                      color: 'text.primary',
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
