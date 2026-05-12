'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Alert,
} from '@mui/material'
import { useTranslations } from '@/lib/useTranslations'

export default function ContactoSection() {
  const { t } = useTranslations()
  
  const servicios = [
    t('contact.form.services.landing'),
    t('contact.form.services.website'),
    t('contact.form.services.ecommerce'),
    t('contact.form.services.maintenance'),
    t('contact.form.services.vtex'),
    t('contact.form.services.other'),
  ]
  
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    negocio: '',
    servicio: '',
    mensaje: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          ...formData,
          subject: `Nuevo contacto de ${formData.nombre} - Mondi Studio`,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ nombre: '', whatsapp: '', negocio: '', servicio: '', mensaje: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <Box
      component="section"
      id="contacto"
      sx={{
        py: 12,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: '#31302d',
            borderRadius: '1.5rem',
            overflow: 'hidden',
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6} sx={{ p: 10 }}>
              <Typography variant="h2" component="h2" sx={{ mb: 2, color: '#f3f0eb' }}>
                {t('contact.title')}{' '}
                <Box component="em" sx={{ color: '#ffb59a' }}>
                  {t('contact.titleHighlight')}
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: '#f3f0eb', opacity: 0.7 }}>
                {t('contact.subtitle')}
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  label={t('contact.form.name')}
                  name="nombre"
                  required
                  fullWidth
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  sx={{
                    '& .MuiInputLabel-root': { color: 'rgba(243, 240, 235, 0.7)' },
                    '& .MuiInput-root': { color: '#f3f0eb' },
                    '& .MuiInput-underline:before': {
                      borderBottomColor: 'rgba(255,255,255,0.2)',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: '#E8622A',
                    },
                  }}
                />

                <TextField
                  label={t('contact.form.whatsapp')}
                  name="whatsapp"
                  type="tel"
                  required
                  fullWidth
                  placeholder={t('contact.form.whatsappPlaceholder')}
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  sx={{
                    '& .MuiInputLabel-root': { color: 'rgba(243, 240, 235, 0.7)' },
                    '& .MuiInput-root': { color: '#f3f0eb' },
                    '& .MuiInput-underline:before': {
                      borderBottomColor: 'rgba(255,255,255,0.2)',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: '#E8622A',
                    },
                  }}
                />

                <TextField
                  label={t('contact.form.business')}
                  name="negocio"
                  fullWidth
                  value={formData.negocio}
                  onChange={(e) => setFormData({ ...formData, negocio: e.target.value })}
                  sx={{
                    '& .MuiInputLabel-root': { color: 'rgba(243, 240, 235, 0.7)' },
                    '& .MuiInput-root': { color: '#f3f0eb' },
                    '& .MuiInput-underline:before': {
                      borderBottomColor: 'rgba(255,255,255,0.2)',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: '#E8622A',
                    },
                  }}
                />

                <TextField
                  select
                  label={t('contact.form.service')}
                  name="servicio"
                  required
                  fullWidth
                  value={formData.servicio}
                  onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                  sx={{
                    '& .MuiInputLabel-root': { color: 'rgba(243, 240, 235, 0.7)' },
                    '& .MuiInput-root': { color: '#f3f0eb' },
                    '& .MuiInput-underline:before': {
                      borderBottomColor: 'rgba(255,255,255,0.2)',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: '#E8622A',
                    },
                    '& .MuiSvgIcon-root': { color: '#f3f0eb' },
                  }}
                >
                  {servicios.map((servicio) => (
                    <MenuItem key={servicio} value={servicio}>
                      {servicio}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  label={t('contact.form.message')}
                  name="mensaje"
                  required
                  fullWidth
                  multiline
                  rows={3}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  sx={{
                    '& .MuiInputLabel-root': { color: 'rgba(243, 240, 235, 0.7)' },
                    '& .MuiInput-root': { color: '#f3f0eb' },
                    '& .MuiInput-underline:before': {
                      borderBottomColor: 'rgba(255,255,255,0.2)',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: '#E8622A',
                    },
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={status === 'loading'}
                  sx={{
                    alignSelf: 'flex-start',
                    px: 6,
                    py: 1.5,
                    minHeight: '2.75rem',
                  }}
                >
                  {status === 'loading' ? t('contact.form.sending') : t('contact.form.submit')}
                </Button>

                {status === 'success' && (
                  <Alert severity="success" sx={{ mt: 2 }}>
                    {t('contact.form.success')}
                  </Alert>
                )}

                {status === 'error' && (
                  <Alert severity="error" sx={{ mt: 2 }}>
                    {t('contact.form.error')}
                  </Alert>
                )}
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: { xs: 'none', md: 'flex' },
                backgroundColor: 'primary.main',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  opacity: 1,
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                }}
              >
                <Image
                  src="/Gemini_Generated_Image_lidxullidxullidx.png"
                  alt="Decorative background"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </Box>
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    py: '1rem',
                    px: 2,
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-unbounded)',
                      fontSize: '1.5rem',
                      fontStyle: 'italic',
                      color: 'primary.contrastText',
                      margin: '0 auto',
                    }}
                  >
                    "Cada proyecto es una oportunidad para hacer algo que funcione de verdad."
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
