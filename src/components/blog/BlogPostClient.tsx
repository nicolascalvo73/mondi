'use client'

import { Container, Box, Typography, Breadcrumbs, Link, Chip, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Image from 'next/image'
import { SanityPost } from '@/sanity/types'
import PostBody from '@/components/blog/PostBody'
import { useTranslations } from '@/lib/useTranslations'
import { useLanguage } from '@/lib/LanguageContext'

interface BlogPostClientProps {
  post: SanityPost
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const { t } = useTranslations()
  const { language } = useLanguage()

  const locale = language === 'es' ? 'es-AR' : language === 'pt' ? 'pt-BR' : 'en-US'

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: post.mainImage?.asset?.url ?? 'https://www.mondistudio.com.ar/og-image.png',
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            author: {
              '@type': 'Organization',
              name: post.author ?? 'Mondi Studio',
              url: 'https://www.mondistudio.com.ar',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Mondi Studio',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.mondistudio.com.ar/logo.svg',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://www.mondistudio.com.ar/blog?slug=${post.slug.current}`,
            },
            url: `https://www.mondistudio.com.ar/blog?slug=${post.slug.current}`,
            inLanguage: 'es-AR',
            keywords: post.categories?.join(', '),
          }),
        }}
      />
      <Container maxWidth="md" sx={{ pt: '7rem', pb: '8rem' }}>
        <Breadcrumbs
        aria-label="navegación"
        sx={{
          mb: '3rem',
          fontSize: '0.75rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          '& .MuiBreadcrumbs-separator': {
            mx: '0.5rem',
            color: 'text.secondary',
            opacity: 0.4,
          },
        }}
      >
        <Link
          href="/"
          underline="none"
          sx={{
            color: 'text.secondary',
            opacity: 0.7,
            transition: 'all 0.2s ease',
            '&:hover': { color: 'primary.main', opacity: 1 },
          }}
        >
          {t('blog.breadcrumbs.home')}
        </Link>
        <Link
          href="/blog"
          underline="none"
          sx={{
            color: 'text.secondary',
            opacity: 0.7,
            transition: 'all 0.2s ease',
            '&:hover': { color: 'primary.main', opacity: 1 },
          }}
        >
          {t('blog.breadcrumbs.blog')}
        </Link>
        <Typography sx={{ color: 'text.primary', fontSize: '0.75rem' }}>
          {post.title.length > 40 ? post.title.substring(0, 40) + '...' : post.title}
        </Typography>
      </Breadcrumbs>

      <Box component="article">
        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <Box sx={{ display: 'flex', gap: '0.5rem', mb: '2rem', flexWrap: 'wrap' }}>
            {post.categories.map((category) => (
              <Chip
                key={category}
                label={category}
                sx={{
                  backgroundColor: '#cfe8dc',
                  color: '#354b43',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  height: '1.75rem',
                }}
              />
            ))}
          </Box>
        )}

        {/* Title */}
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontFamily: 'var(--font-epilogue)',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            fontStyle: 'italic',
            lineHeight: 1.1,
            mb: '2rem',
          }}
        >
          {post.title}
        </Typography>

        {/* Meta */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            mb: '3rem',
            pb: '2rem',
            borderBottom: '0.0625rem solid rgba(164, 55, 0, 0.1)',
            fontSize: '0.875rem',
            color: 'text.secondary',
            flexWrap: 'wrap',
          }}
        >
          {formattedDate && (
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {formattedDate}
            </Typography>
          )}
          {post.author && (
            <>
              <Box
                sx={{
                  width: '0.25rem',
                  height: '0.25rem',
                  borderRadius: '50%',
                  backgroundColor: 'text.secondary',
                  opacity: 0.4,
                }}
              />
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {t('blog.by')} {post.author}
              </Typography>
            </>
          )}
          <Box
            sx={{
              width: '0.25rem',
              height: '0.25rem',
              borderRadius: '50%',
              backgroundColor: 'text.secondary',
              opacity: 0.4,
            }}
          />
          <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
            5 {t('blog.readTime')}
          </Typography>
        </Box>

        {/* Featured Image */}
        {post.mainImage?.asset?.url && (
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 9',
              borderRadius: '1rem',
              overflow: 'hidden',
              mb: '4rem',
              boxShadow: '0 1.25rem 3.125rem rgba(0, 0, 0, 0.08)',
            }}
          >
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </Box>
        )}

        {/* Body Content */}
        {post.body && (
          <Box sx={{ mb: '5rem' }}>
            <PostBody body={post.body} />
          </Box>
        )}

        {/* Back Button */}
        <Box
          sx={{
            pt: '3rem',
            borderTop: '0.0625rem solid rgba(164, 55, 0, 0.1)',
          }}
        >
          <Button
            href="/blog"
            startIcon={<ArrowBackIcon />}
            sx={{
              color: 'text.secondary',
              fontWeight: 600,
              fontSize: '0.875rem',
              px: '1.5rem',
              py: '0.75rem',
              borderRadius: '9999rem',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: 'rgba(232, 98, 42, 0.08)',
                color: 'primary.main',
                transform: 'translateX(-0.25rem)',
              },
            }}
          >
            {t('blog.backToBlog')}
          </Button>
        </Box>
      </Box>
    </Container>
    </>
  )
}
