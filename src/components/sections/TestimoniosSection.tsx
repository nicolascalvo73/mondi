'use client'

import { Container, Grid, Box, Typography, Card, CardContent, Avatar } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import { useState, useEffect } from 'react'
import { useTranslations } from '@/lib/useTranslations'

function getRandomTestimonios(testimonios: any[], cantidad: number) {
  const shuffled = [...testimonios].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, cantidad)
}

export default function TestimoniosSection() {
  const { t } = useTranslations()
  
  const todosLosTestimonios = (typeof t('testimonials.clients') === 'object' ? t('testimonials.clients') : []) as any[]
  
  const [testimonios, setTestimonios] = useState(todosLosTestimonios.slice(0, 3))

  useEffect(() => {
    setTestimonios(getRandomTestimonios(todosLosTestimonios, 3))
  }, [])

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
          {t('testimonials.title')}{' '}
          <Box component="em" sx={{ color: 'primary.main' }}>
            {t('testimonials.titleHighlight')}
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
          {t('testimonials.subtitle')}
        </Typography>

        <Grid container spacing={4}>
          {testimonios.map((testimonio: any) => (
            <Grid item xs={12} md={4} key={testimonio.name}>
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
                      {testimonio.initials}
                    </Avatar>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 700 }}>
                        {testimonio.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                        {testimonio.role} · {testimonio.company}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: 'var(--font-unbounded)',
                      fontStyle: 'italic',
                      color: 'text.secondary',
                      mb: 3,
                      '&::before': { content: '"\\201C"' },
                      '&::after': { content: '"\\201D"' },
                    }}
                  >
                    {testimonio.text}
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
