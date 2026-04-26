import { PortableText, PortableTextComponents, PortableTextBlock } from '@portabletext/react'
import { Typography, Box } from '@mui/material'
import Image from 'next/image'

interface PostBodyProps {
  body: PortableTextBlock[]
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Typography variant="body1" sx={{ mb: '1rem', lineHeight: 1.75 }}>
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography
        variant="h2"
        component="h2"
        sx={{
          mt: '3rem',
          mb: '1rem',
          fontFamily: 'var(--font-epilogue)',
        }}
      >
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography
        variant="h3"
        component="h3"
        sx={{
          mt: '2rem',
          mb: '0.75rem',
          fontFamily: 'var(--font-epilogue)',
        }}
      >
        {children}
      </Typography>
    ),
    blockquote: ({ children }) => (
      <Box
        component="blockquote"
        sx={{
          borderLeft: '0.25rem solid',
          borderColor: 'primary.main',
          pl: '1.5rem',
          my: '2rem',
          fontStyle: 'italic',
          color: 'text.secondary',
        }}
      >
        <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
          {children}
        </Typography>
      </Box>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <Box component="strong" sx={{ fontWeight: 700 }}>
        {children}
      </Box>
    ),
    em: ({ children }) => (
      <Box component="em" sx={{ fontStyle: 'italic' }}>
        {children}
      </Box>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <Box
          component="a"
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          sx={{
            color: 'primary.main',
            textDecoration: 'none',
            borderBottom: '0.0625rem solid transparent',
            transition: 'border-color 0.2s ease',
            '&:hover': {
              borderBottomColor: 'primary.main',
            },
          }}
        >
          {children}
        </Box>
      )
    },
  },
  list: {
    bullet: ({ children }) => (
      <Typography
        component="ul"
        sx={{
          mb: '1rem',
          pl: '1.5rem',
          '& li': {
            mb: '0.5rem',
            lineHeight: 1.75,
          },
        }}
      >
        {children}
      </Typography>
    ),
    number: ({ children }) => (
      <Typography
        component="ol"
        sx={{
          mb: '1rem',
          pl: '1.5rem',
          '& li': {
            mb: '0.5rem',
            lineHeight: 1.75,
          },
        }}
      >
        {children}
      </Typography>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?.url) return null
      return (
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            my: '2rem',
          }}
        >
          <Image
            src={value.asset.url}
            alt={value.alt || 'Imagen del artículo'}
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
      )
    },
  },
}

export default function PostBody({ body }: PostBodyProps) {
  return (
    <Box
      sx={{
        '& > *:first-of-type': {
          mt: 0,
        },
        '& > *:last-child': {
          mb: 0,
        },
      }}
    >
      <PortableText value={body} components={components} />
    </Box>
  )
}
