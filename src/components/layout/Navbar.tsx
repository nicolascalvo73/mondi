'use client'

import { useState } from 'react'
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
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useThemeMode } from '@/lib/ThemeContext'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/i18n/useTranslation'
import FlagIcon from '@/components/FlagIcon'

const navHrefs = [
  { key: 'servicios' as const, href: '/#servicios' },
  { key: 'proceso' as const, href: '/#proceso' },
  { key: 'plataformas' as const, href: '/#plataformas' },
  { key: 'precios' as const, href: '/#precios' },
  { key: 'sobreMi' as const, href: '/#sobre-mi' },
  { key: 'blog' as const, href: '/blog' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { mode, toggleTheme } = useThemeMode()
  const { language, setLanguage } = useLanguage()
  const { t } = useTranslation()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleLinkClick = () => {
    setMobileOpen(false)
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    
    // Si es un link externo (no anchor), permitir navegación normal
    if (href && !href.startsWith('#')) {
      return
    }
    
    // Si es un anchor, hacer smooth scroll
    e.preventDefault()
    if (href?.startsWith('#')) {
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
              href="/#hero"
              onClick={handleSmoothScroll}
              sx={{
                fontFamily: 'var(--font-brand)',
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
            {navHrefs.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                onClick={handleSmoothScroll}
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
                {t.nav[link.key]}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5, alignItems: 'center' }}>
            <Button variant="contained" color="primary" href="/#contacto" onClick={handleSmoothScroll}>
              {t.nav.hablemos}
            </Button>
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              <Fab
                size="small"
                aria-label="Español"
                onClick={() => setLanguage('es')}
                sx={{
                  width: '2.25rem',
                  height: '2.25rem',
                  minHeight: '2.25rem',
                  fontSize: '1rem',
                  boxShadow: language === 'es' ? 2 : 0,
                  bgcolor: language === 'es' ? 'primary.main' : 'action.hover',
                  color: language === 'es' ? 'primary.contrastText' : 'text.primary',
                  '&:hover': { bgcolor: language === 'es' ? 'primary.dark' : 'action.selected' },
                }}
              >
                <FlagIcon code="ar" />
              </Fab>
              <Fab
                size="small"
                aria-label="English"
                onClick={() => setLanguage('en')}
                sx={{
                  width: '2.25rem',
                  height: '2.25rem',
                  minHeight: '2.25rem',
                  fontSize: '1rem',
                  boxShadow: language === 'en' ? 2 : 0,
                  bgcolor: language === 'en' ? 'primary.main' : 'action.hover',
                  color: language === 'en' ? 'primary.contrastText' : 'text.primary',
                  '&:hover': { bgcolor: language === 'en' ? 'primary.dark' : 'action.selected' },
                }}
              >
                <FlagIcon code="us" />
              </Fab>
              <Fab
                size="small"
                aria-label="Português"
                onClick={() => setLanguage('pt')}
                sx={{
                  width: '2.25rem',
                  height: '2.25rem',
                  minHeight: '2.25rem',
                  fontSize: '1rem',
                  boxShadow: language === 'pt' ? 2 : 0,
                  bgcolor: language === 'pt' ? 'primary.main' : 'action.hover',
                  color: language === 'pt' ? 'primary.contrastText' : 'text.primary',
                  '&:hover': { bgcolor: language === 'pt' ? 'primary.dark' : 'action.selected' },
                }}
              >
                <FlagIcon code="br" />
              </Fab>
            </Box>
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
          </Box>

          <IconButton
            color="inherit"
            aria-label={t.nav.abrirMenu}
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
          <IconButton onClick={handleDrawerToggle} aria-label={t.nav.cerrarMenu}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navHrefs.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                component="a"
                href={link.href}
                onClick={(e) => {
                  handleSmoothScroll(e as React.MouseEvent<HTMLAnchorElement>)
                  handleLinkClick()
                }}
              >
                <ListItemText primary={t.nav[link.key]} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 2, px: 2 }}>
            <Button
              variant="contained"
              color="primary"
              href="/#contacto"
              fullWidth
              onClick={(e) => {
                handleSmoothScroll(e as React.MouseEvent<HTMLAnchorElement>)
                handleLinkClick()
              }}
            >
              {t.nav.hablemos}
            </Button>
          </ListItem>
          {/* <ListItem disablePadding sx={{ mt: 2, px: 2, display: 'flex', justifyContent: 'center', gap: 1 }}>
            <Fab
              size="small"
              aria-label="Español"
              onClick={() => setLanguage('es')}
              sx={{
                width: '2.25rem',
                height: '2.25rem',
                minHeight: '2.25rem',
                fontSize: '1rem',
                boxShadow: language === 'es' ? 2 : 0,
                bgcolor: language === 'es' ? 'primary.main' : 'action.hover',
                color: language === 'es' ? 'primary.contrastText' : 'text.primary',
                '&:hover': { bgcolor: language === 'es' ? 'primary.dark' : 'action.selected' },
              }}
            >
              <FlagIcon code="ar" />
            </Fab>
            <Fab
              size="small"
              aria-label="English"
              onClick={() => setLanguage('en')}
              sx={{
                width: '2.25rem',
                height: '2.25rem',
                minHeight: '2.25rem',
                fontSize: '1rem',
                boxShadow: language === 'en' ? 2 : 0,
                bgcolor: language === 'en' ? 'primary.main' : 'action.hover',
                color: language === 'en' ? 'primary.contrastText' : 'text.primary',
                '&:hover': { bgcolor: language === 'en' ? 'primary.dark' : 'action.selected' },
              }}
            >
              <FlagIcon code="us" />
            </Fab>
            <Fab
              size="small"
              aria-label="Português"
              onClick={() => setLanguage('pt')}
              sx={{
                width: '2.25rem',
                height: '2.25rem',
                minHeight: '2.25rem',
                fontSize: '1rem',
                boxShadow: language === 'pt' ? 2 : 0,
                bgcolor: language === 'pt' ? 'primary.main' : 'action.hover',
                color: language === 'pt' ? 'primary.contrastText' : 'text.primary',
                '&:hover': { bgcolor: language === 'pt' ? 'primary.dark' : 'action.selected' },
              }}
            >
              <FlagIcon code="br" />
            </Fab>
          </ListItem> */}
          {/* <ListItem disablePadding sx={{ mt: 2, px: 2, display: 'flex', justifyContent: 'center' }}>
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
          </ListItem> */}
        </List>
      </Drawer>
    </AppBar>
  )
}
