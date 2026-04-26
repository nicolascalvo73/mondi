'use client'

import { Container, Grid, Box, Typography, Chip } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ForumIcon from '@mui/icons-material/Forum'
import VerifiedIcon from '@mui/icons-material/Verified'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Image from 'next/image'
import { useTranslation } from '@/i18n/useTranslation'

export default function SobreMiSection() {
  const { t } = useTranslation()

  const iconMap = {
    'Entrega en tiempo': AccessTimeIcon,
    'On-time delivery': AccessTimeIcon,
    'Entrega no prazo': AccessTimeIcon,
    'Comunicación directa': ForumIcon,
    'Direct communication': ForumIcon,
    'Comunicação direta': ForumIcon,
    'Sin letra chica': VerifiedIcon,
    'No fine print': VerifiedIcon,
    'Sem letras miúdas': VerifiedIcon,
    'Hecho en Córdoba': LocationOnIcon,
    'Made in Córdoba': LocationOnIcon,
    'Feito em Córdoba': LocationOnIcon,
  }

  const valores = t.sobreMi.valores.map((texto) => ({
    icono: iconMap[texto as keyof typeof iconMap] || VerifiedIcon,
    texto,
  }))

  return (
    <Box
      component="section"
      id="sobre-mi"
      sx={{
        py: 12,
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                aspectRatio: '1',
                backgroundColor: 'primary.main',
                borderRadius: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8rem',
                opacity: 0.9,
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Image
                src="/Gemini_Generated_Image_r1k8m3r1k8m3r1k8.png"
                alt="Mondiola"
                fill
                style={{ objectFit: 'cover', objectPosition: '-2rem center' }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              {t.sobreMi.title}{' '}
              <Box component="em" sx={{ fontFamily: 'var(--font-brand)', fontStyle: 'italic', color: 'primary.main' }}>
                {t.sobreMi.titleHighlight}
              </Box>
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
              {t.sobreMi.p1}
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
              {t.sobreMi.p2}
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
              {t.sobreMi.p3}
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, fontStyle: 'italic', color: 'text.secondary' }}
            >
              {t.sobreMi.p4}
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {valores.map((valor) => {
                const IconComponent = valor.icono
                return (
                  <Chip
                    key={valor.texto}
                    icon={<IconComponent />}
                    label={valor.texto}
                    sx={{
                      backgroundColor: '#cfe8dc',
                      color: '#354b43',
                      fontWeight: 600,
                      px: 1,
                      '& .MuiChip-icon': {
                        color: '#354b43',
                      },
                    }}
                  />
                )
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
