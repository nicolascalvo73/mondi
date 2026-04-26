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

const navLinks = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Proceso', href: '/#proceso' },
  { label: 'Plataformas', href: '/#plataformas' },
  { label: 'Precios', href: '/#precios' },
  { label: 'Sobre mí', href: '/#sobre-mi' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { mode, toggleTheme } = useThemeMode()

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
            {navLinks.map((link) => (
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
                {link.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5, alignItems: 'center' }}>
            <Button variant="contained" color="primary" href="/#contacto" onClick={handleSmoothScroll}>
              Hablemos
            </Button>
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
                  handleSmoothScroll(e as React.MouseEvent<HTMLAnchorElement>)
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
              href="/#contacto"
              fullWidth
              onClick={(e) => {
                handleSmoothScroll(e as React.MouseEvent<HTMLAnchorElement>)
                handleLinkClick()
              }}
            >
              Hablemos
            </Button>
          </ListItem>
          <ListItem disablePadding sx={{ mt: 2, px: 2, display: 'flex', justifyContent: 'center' }}>
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
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  )
}
