'use client'

import { createTheme } from '@mui/material/styles'

const getTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode,
    background: {
      default: mode === 'light' ? '#fcf9f4' : '#1c1c19',
      paper: mode === 'light' ? '#ffffff' : '#2a2a27',
    },
    text: {
      primary: mode === 'light' ? '#1c1c19' : '#f3f0eb',
      secondary: mode === 'light' ? '#594139' : '#c4b5ae',
    },
    primary: {
      main: '#E8622A',
      contrastText: '#ffffff',
      dark: '#a43700',
    },
    secondary: {
      main: '#4d635a',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), sans-serif',
    h1: {
      fontFamily: 'var(--font-unbounded), sans-serif',
      fontSize: 'clamp(1.875rem, 4vw, 3.25rem)',
      fontWeight: 900,
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontFamily: 'var(--font-unbounded), sans-serif',
      fontSize: 'clamp(1.375rem, 3vw, 2.375rem)',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: 'var(--font-unbounded), sans-serif',
      fontSize: 'clamp(1.0625rem, 1.5vw, 1.625rem)',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontFamily: 'var(--font-unbounded), sans-serif',
      fontSize: '1.0625rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontSize: '1.0625rem',
      lineHeight: 1.65,
    },
    body2: {
      fontSize: '0.9375rem',
      lineHeight: 1.6,
    },
    caption: {
      fontSize: '0.75rem',
      letterSpacing: '0.08em',
      fontWeight: 700,
      textTransform: 'uppercase' as const,
    },
  },
  shape: {
    borderRadius: 16,
  },
  spacing: (factor: number) => `${0.5 * factor}rem`,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          fontSize: '16px',
        },
        '.skip-link': {
          position: 'absolute',
          top: '-100%',
          left: 0,
          background: '#E8622A',
          color: '#fff',
          padding: '0.5rem 1rem',
          zIndex: 9999,
          '&:focus': { top: 0 },
        },
        '*:focus-visible': {
          outline: '0.1875rem solid #E8622A',
          outlineOffset: '0.1875rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: 'var(--font-inter)',
          fontWeight: 700,
          fontSize: '1rem',
          borderRadius: '9999rem',
          padding: '0.75rem 2rem',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        },
        containedPrimary: {
          '&:hover': {
            transform: 'scale(1.04)',
            boxShadow: '0 0.375rem 1.25rem rgba(232, 98, 42, 0.32)',
          },
        },
        outlinedSecondary: {
          borderColor: '#E8E2DA',
          '&:hover': {
            backgroundColor: '#f0ede9',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '1rem',
          border: '0.0625rem solid rgba(224, 191, 180, 0.25)',
          boxShadow: 'none',
          transition: 'border-color 0.2s ease, transform 0.2s ease',
          '&:hover': {
            borderColor: 'rgba(232, 98, 42, 0.3)',
            transform: 'translateY(-0.125rem)',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: 'standard' },
      styleOverrides: {
        root: {
          '& .MuiInput-underline:before': {
            borderBottomColor: 'rgba(255,255,255,0.2)',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#E8622A',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '9999rem',
          fontWeight: 700,
          fontSize: '0.75rem',
          letterSpacing: '0.05em',
          height: '1.75rem',
        },
      },
    },
  },
})

export default getTheme('light')
export { getTheme }
