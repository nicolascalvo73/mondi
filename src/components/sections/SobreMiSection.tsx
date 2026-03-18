'use client'

import { Container, Grid, Box, Typography, Chip } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ForumIcon from '@mui/icons-material/Forum'
import VerifiedIcon from '@mui/icons-material/Verified'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Image from 'next/image'
import { useTranslations } from '@/lib/useTranslations'

export default function SobreMiSection() {
  const { t } = useTranslations()
  
  const valores = [
    { icono: AccessTimeIcon, texto: 'Entrega en tiempo' },
    { icono: ForumIcon, texto: 'Comunicación directa' },
    { icono: VerifiedIcon, texto: 'Sin letra chica' },
    { icono: LocationOnIcon, texto: 'Hecho en Córdoba' },
  ]
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
                sizes="(max-width: 768px) 100vw, 40vw"
                style={{ objectFit: 'cover', objectPosition: '-2rem center' }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              {t('about.title')}{' '}
              <Box component="em" sx={{ fontStyle: 'italic', color: 'primary.main' }}>
                {t('about.titleHighlight')}
              </Box>
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
              Soy desarrollador frontend con años de experiencia en agencias y proyectos enterprise.
              En 2023 decidí hacer algo más cercano: trabajar directo con negocios que necesitan una
              web sin la estructura (y los precios) de una agencia.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
              Acá no hay "equipo de ventas" ni "gerente de cuenta". Me escribís, charlamos, diseñamos
              juntos y te entrego tu proyecto. Simple.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
            Trabajamos en red con múltiples profesionales especializados en cada area para que tu proyecto sea completo y tenga todo lo que requiera.
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, fontStyle: 'italic', color: 'text.secondary' }}
            >
              Ah, y Mondiola (mi gato) supervisa cada proyecto. Es exigente, pero justo.
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
