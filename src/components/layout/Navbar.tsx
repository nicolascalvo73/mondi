'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Avatar,
  Typography,
  Fab,
  keyframes,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Image from 'next/image'
import { useThemeMode } from '@/lib/ThemeContext'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslations } from '@/lib/useTranslations'
import FlagIcon from '@/components/FlagIcon'

const labsCrazy = keyframes`
  0%   { transform: scale(1)    rotate(0deg);   filter: hue-rotate(0deg)   drop-shadow(0 0 4px #863bff); }
  10%  { transform: scale(1.22) rotate(-18deg); filter: hue-rotate(60deg)  drop-shadow(0 0 14px #ff3b8a); }
  20%  { transform: scale(0.82) rotate(24deg);  filter: hue-rotate(120deg) drop-shadow(0 0 8px  #3bffe0); }
  30%  { transform: scale(1.3)  rotate(-30deg); filter: hue-rotate(180deg) drop-shadow(0 0 18px #ffcc3b); }
  40%  { transform: scale(0.88) rotate(32deg);  filter: hue-rotate(240deg) drop-shadow(0 0 6px  #ff3b3b); }
  52%  { transform: scale(1.18) rotate(-12deg); filter: hue-rotate(300deg) drop-shadow(0 0 22px #3b8aff); }
  64%  { transform: scale(0.92) rotate(18deg);  filter: hue-rotate(360deg) drop-shadow(0 0 10px #863bff); }
  76%  { transform: scale(1.12) rotate(-22deg); filter: hue-rotate(300deg) drop-shadow(0 0 16px #ff3baa); }
  88%  { transform: scale(1.05) rotate(8deg);   filter: hue-rotate(60deg)  drop-shadow(0 0 28px #863bff); }
  100% { transform: scale(1)    rotate(0deg);   filter: hue-rotate(0deg)   drop-shadow(0 0 4px  #863bff); }
`

const labsFab = {
  width: '2.5rem',
  height: '2.5rem',
  minHeight: '2.5rem',
  overflow: 'hidden',
  p: 0,
  background: 'linear-gradient(135deg, #863bff 0%, #47bfff 100%)',
  '&:hover': {
    animation: `${labsCrazy} 0.7s ease-in-out infinite`,
    background: 'linear-gradient(135deg, #863bff 0%, #47bfff 100%)',
  },
}

const flagCodes: Record<string, 'ar' | 'br' | 'us'> = {
  es: 'ar',
  pt: 'br',
  en: 'us',
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { mode, toggleTheme } = useThemeMode()
  const { language, cycleLanguage } = useLanguage()
  const { t } = useTranslations()
  const pathname = usePathname()
  const router = useRouter()

  const navLinks = [
    { label: t('nav.services'), href: '#servicios' },
    { label: t('nav.process'), href: '#proceso' },
    { label: t('nav.platforms'), href: '#plataformas' },
    { label: t('nav.pricing'), href: '#precios' },
    { label: t('nav.blog'), href: '/blog' },
    { label: t('nav.about'), href: '#sobre-mi' },
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleLinkClick = () => {
    setMobileOpen(false)
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (href?.startsWith('#')) {
      // Si estamos en una página que no es home, navegar primero a home
      if (pathname !== '/') {
        router.push('/' + href)
        return
      }
      
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <AppBar
      position="sticky"
      component="nav"
      sx={{
        backgroundColor: (theme) => 
          theme.palette.mode === 'light' 
            ? 'rgba(252, 249, 244, 0.8)' 
            : 'rgba(28, 28, 25, 0.8)',
        backdropFilter: 'blur(1.5rem)',
        borderBottom: (theme) =>
          theme.palette.mode === 'light'
            ? '0.0625rem solid rgba(224, 191, 180, 0.15)'
            : '0.0625rem solid rgba(255, 255, 255, 0.1)',
        boxShadow: 'none',
        height: '5rem',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: '5rem !important' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexGrow: { xs: 1, md: 0 } }}>
            <Avatar
              sx={{
                width: '2.5rem',
                height: '2.5rem',
                bgcolor: 'primary.main',
              }}
              alt="Mondiola - Director Creativo"
            >
              M
            </Avatar>
            <Typography
              variant="h6"
              component="a"
              href="#hero"
              onClick={handleSmoothScroll}
              sx={{
                fontFamily: 'var(--font-unbounded)',
                fontWeight: 700,
                fontSize: '1.125rem',
                color: 'text.primary',
                textDecoration: 'none',
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                marginTop: '0.25rem',
              }}
            >
              Mondi Studio
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, mx: 'auto' }}>
            {navLinks.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                onClick={link.href.startsWith('#') ? handleSmoothScroll : undefined}
                sx={{
                  color: 'text.primary',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  px: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(232, 98, 42, 0.08)',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5, alignItems: 'center' }}>
            <Button variant="contained" color="primary" href="#contacto" onClick={handleSmoothScroll}>
              {t('nav.contact')}
            </Button>
            <Fab
              size="small"
              color="primary"
              aria-label="Cambiar idioma"
              onClick={cycleLanguage}
              sx={{
                width: '2.5rem',
                height: '2.5rem',
                minHeight: '2.5rem',
                overflow: 'hidden',
                p: 0,
              }}
            >
              <FlagIcon code={flagCodes[language]} size={40} />
            </Fab>
            <Fab
              size="small"
              color="primary"
              aria-label={mode === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
              onClick={toggleTheme}
              sx={{
                width: '2.5rem',
                height: '2.5rem',
                minHeight: '2.5rem',
              }}
            >
              {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </Fab>
            <Fab
              size="small"
              component="a"
              href="/labs"
              aria-label="Ir a Mondi Labs"
              sx={labsFab}
            >
              <Image src="/mondilabs-icon.svg" alt="Mondi Labs" width={28} height={28} />
            </Fab>
          </Box>

          <IconButton
            color="inherit"
            aria-label="abrir menú de navegación"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: 'text.primary' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: '16rem',
            backgroundColor: 'background.default',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleDrawerToggle} aria-label="cerrar menú">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                component="a"
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('#')) {
                    handleSmoothScroll(e as React.MouseEvent<HTMLAnchorElement>)
                  }
                  handleLinkClick()
                }}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 2, px: 2 }}>
            <Button
              variant="contained"
              color="primary"
              href="#contacto"
              fullWidth
              onClick={(e) => {
                handleSmoothScroll(e as React.MouseEvent<HTMLAnchorElement>)
                handleLinkClick()
              }}
            >
              {t('nav.contact')}
            </Button>
          </ListItem>
          <ListItem disablePadding sx={{ mt: 2, px: 2, display: 'flex', justifyContent: 'center', gap: 1.5 }}>
            <Fab
              size="small"
              color="primary"
              aria-label="Cambiar idioma"
              onClick={cycleLanguage}
              sx={{
                width: '2.5rem',
                height: '2.5rem',
                minHeight: '2.5rem',
                overflow: 'hidden',
                p: 0,
              }}
            >
              <FlagIcon code={flagCodes[language]} size={40} />
            </Fab>
            <Fab
              size="small"
              color="primary"
              aria-label={mode === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
              onClick={toggleTheme}
              sx={{
                width: '2.5rem',
                height: '2.5rem',
                minHeight: '2.5rem',
              }}
            >
              {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </Fab>
            <Fab
              size="small"
              component="a"
              href="/labs"
              aria-label="Ir a Mondi Labs"
              sx={labsFab}
            >
              <Image src="/mondilabs-icon.svg" alt="Mondi Labs" width={28} height={28} />
            </Fab>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  )
}
