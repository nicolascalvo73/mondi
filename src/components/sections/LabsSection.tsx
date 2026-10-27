'use client'

import { useEffect, useRef, useState } from 'react'
import { Container, Box, Typography } from '@mui/material'
import { useTranslations } from '@/lib/useTranslations'
import { labsProjects, type LabProject } from '@/lib/labsProjects'

function LabCard({ project, name, cta, hidden }: { project: LabProject; name: string; cta: string; hidden?: boolean }) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [active, setActive] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [ready, setReady] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    // En dispositivos sin hover, se activa la card que pasa por el centro de la pantalla
    if (!window.matchMedia('(hover: none)').matches) return
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      rootMargin: '0px -42% 0px -42%',
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (active && !reduced) setLoaded(true)
    const video = videoRef.current
    if (!video) return
    if (active) {
      video.currentTime = 0
      video.play().catch(() => {})
    } else {
      video.pause()
      setReady(false)
    }
  }, [active, loaded, reduced])

  return (
    <Box
      component="a"
      ref={cardRef}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${cta}: ${name}`}
      tabIndex={hidden ? -1 : undefined}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      sx={{
        position: 'relative',
        display: 'block',
        flex: '0 0 auto',
        width: { xs: '14rem', md: '17rem' },
        aspectRatio: '9 / 16',
        borderRadius: 3,
        overflow: 'hidden',
        backgroundColor: 'background.paper',
        boxShadow: '0 0.25rem 1.5rem rgba(0,0,0,0.12)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover, &:focus-visible': {
          transform: 'translateY(-0.25rem)',
          boxShadow: '0 0.75rem 2.5rem rgba(0,0,0,0.25)',
        },
        '&:focus-visible': { outline: '0.1875rem solid', outlineColor: 'primary.main', outlineOffset: '0.25rem' },
      }}
    >
      <Box
        component="img"
        src={`/lab-previews/${project.slug}-thumb.webp`}
        alt=""
        loading="lazy"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: active ? 'grayscale(0)' : 'grayscale(1)',
          transition: 'filter 0.4s ease',
        }}
      />
      {loaded && (
        <Box
          component="video"
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          poster={`/lab-previews/${project.slug}-thumb.webp`}
          onPlaying={() => setReady(true)}
          aria-hidden="true"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: active && ready ? 1 : 0,
            transition: 'opacity 0.35s ease',
          }}
        >
          <source src={`/lab-previews/${project.slug}.webm`} type="video/webm" />
          <source src={`/lab-previews/${project.slug}.mp4`} type="video/mp4" />
        </Box>
      )}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          p: 2.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#fff',
          background: 'linear-gradient(0deg, rgba(0,0,0,0.75), rgba(0,0,0,0))',
          opacity: active && ready ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
      >
        <Typography component="span" sx={{ fontFamily: 'var(--font-unbounded)', fontWeight: 600, fontSize: '1rem' }}>
          {name}
        </Typography>
        <Box component="span" aria-hidden="true" sx={{ fontSize: '1.25rem' }}>
          ↗
        </Box>
      </Box>
    </Box>
  )
}

export default function LabsSection() {
  const { t } = useTranslations()

  const renderSet = (hidden: boolean) => (
    <Box
      aria-hidden={hidden || undefined}
      sx={{
        display: hidden ? { xs: 'flex', '@media (prefers-reduced-motion: reduce)': 'none' } : 'flex',
        gap: 3,
        pr: 3,
      }}
    >
      {labsProjects.map((project) => (
        <LabCard
          key={project.slug}
          project={project}
          name={t(`labs.projects.${project.slug}`)}
          cta={t('labs.visit')}
          hidden={hidden}
        />
      ))}
    </Box>
  )

  return (
    <Box component="section" id="labs" sx={{ py: 12, backgroundColor: 'background.default', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            {t('labs.title')}{' '}
            <Box component="em" sx={{ color: 'primary.main' }}>
              {t('labs.titleHighlight')}
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '42rem' }}>
            {t('labs.subtitle')}
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{
          py: 2,
          maskImage: 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)',
          '@media (prefers-reduced-motion: reduce)': { overflowX: 'auto' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: 'max-content',
            '@keyframes labsScroll': {
              from: { transform: 'translateX(0)' },
              to: { transform: 'translateX(-50%)' },
            },
            animation: 'labsScroll 50s linear infinite',
            '&:hover, &:focus-within': { animationPlayState: 'paused' },
            '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
          }}
        >
          {renderSet(false)}
          {renderSet(true)}
        </Box>
      </Box>
    </Box>
  )
}
