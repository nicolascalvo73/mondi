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
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Plataformas', href: '#plataformas' },
  { label: 'Precios', href: '#precios' },
  { label: 'Sobre mí', href: '#sobre-mi' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

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
        backgroundColor: 'rgba(252, 249, 244, 0.8)',
        backdropFilter: 'blur(1.5rem)',
        borderBottom: '0.0625rem solid rgba(224, 191, 180, 0.15)',
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
                fontFamily: 'var(--font-epilogue)',
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

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button variant="contained" color="primary" href="#contacto" onClick={handleSmoothScroll}>
              Hablemos
            </Button>
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
              href="#contacto"
              fullWidth
              onClick={(e) => {
                handleSmoothScroll(e as React.MouseEvent<HTMLAnchorElement>)
                handleLinkClick()
              }}
            >
              Hablemos
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  )
}
