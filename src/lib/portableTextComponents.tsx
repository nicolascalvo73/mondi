import { PortableTextComponents } from '@portabletext/react'
import { getImageUrl } from './sanityImage'

export const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 700,
        marginTop: '2.5rem',
        marginBottom: '1rem',
        lineHeight: 1.3,
        color: '#1a1a1a',
        fontFamily: 'var(--font-unbounded), sans-serif'
      }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: 700,
        marginTop: '2rem',
        marginBottom: '0.75rem',
        lineHeight: 1.4,
        color: '#1a1a1a',
        fontFamily: 'var(--font-unbounded), sans-serif'
      }}>
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote style={{
        borderLeft: '4px solid #E8622A',
        paddingLeft: '1.5rem',
        marginLeft: 0,
        marginRight: 0,
        marginTop: '1.5rem',
        marginBottom: '1.5rem',
        fontStyle: 'italic',
        color: '#666',
        fontSize: '1.125rem'
      }}>
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p style={{
        marginBottom: '1.25rem',
        lineHeight: 1.8,
        color: '#333',
        fontFamily: 'var(--font-inter), sans-serif'
      }}>
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul style={{
        marginTop: '1rem',
        marginBottom: '1.5rem',
        paddingLeft: '1.5rem',
        lineHeight: 1.8,
        fontFamily: 'var(--font-inter), sans-serif'
      }}>
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol style={{
        marginTop: '1rem',
        marginBottom: '1.5rem',
        paddingLeft: '1.5rem',
        lineHeight: 1.8,
        fontFamily: 'var(--font-inter), sans-serif'
      }}>
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li style={{ marginBottom: '0.5rem', color: '#333' }}>{children}</li>
    ),
    number: ({ children }) => (
      <li style={{ marginBottom: '0.5rem', color: '#333' }}>{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong style={{ fontWeight: 700, color: '#1a1a1a' }}>{children}</strong>
    ),
    em: ({ children }) => (
      <em style={{ fontStyle: 'italic' }}>{children}</em>
    ),
    link: ({ value, children }) => {
      const href = value?.href || '#'
      const isExternal = href.startsWith('http')
      
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          style={{
            color: '#E8622A',
            textDecoration: 'underline',
            transition: 'opacity 0.2s'
          }}
        >
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) {
        return null
      }

      const alt = value.alt || 'Blog post image'
      
      try {
        const imageUrl = getImageUrl(value, 800)
        
        return (
          <figure style={{
            margin: '2rem 0',
            width: '100%'
          }}>
            <img
              src={imageUrl}
              alt={alt}
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '0.5rem',
                display: 'block'
              }}
            />
            {value.caption && (
              <figcaption style={{
                marginTop: '0.75rem',
                fontSize: '0.875rem',
                color: '#666',
                textAlign: 'center',
                fontStyle: 'italic',
                fontFamily: 'var(--font-inter), sans-serif'
              }}>
                {value.caption}
              </figcaption>
            )}
          </figure>
        )
      } catch (error) {
        console.error('Error rendering image:', error)
        return null
      }
    },
  },
}
