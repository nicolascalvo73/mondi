'use client'

import { Container, Box, Typography, Grid, Chip } from '@mui/material'
import { SanityPost } from '@/sanity/types'
import PostCard from '@/components/blog/PostCard'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import { useTranslations } from '@/lib/useTranslations'

interface BlogListingClientProps {
  posts: SanityPost[]
}

export default function BlogListingClient({ posts }: BlogListingClientProps) {
  const { t } = useTranslations()

  const featuredPost = posts[0]
  const regularPosts = posts.slice(1)

  return (
    <Container maxWidth="lg" sx={{ pt: '7rem', pb: '8rem' }}>
      {/* Hero Section */}
      <Box sx={{ mb: '4rem', textAlign: { xs: 'center', md: 'left' } }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontFamily: 'var(--font-unbounded)',
            fontSize: { xs: '3rem', md: '4.5rem' },
            fontWeight: 700,
            fontStyle: 'italic',
            lineHeight: 1.1,
            mb: '1.5rem',
          }}
        >
          {t('blog.title')}{' '}
          <Box component="span" sx={{ fontWeight: 400, opacity: 0.7 }}>
            {t('blog.titleCode')}
          </Box>{' '}
          y{' '}
          <Box component="span" sx={{ color: 'secondary.main' }}>
            {t('blog.titleCoffee')}
          </Box>
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            fontWeight: 400,
            color: 'text.secondary',
            maxWidth: '42rem',
            lineHeight: 1.6,
            mx: { xs: 'auto', md: 0 },
          }}
        >
          {t('blog.subtitle')}
        </Typography>
      </Box>

      {posts.length > 0 ? (
        <>
          {/* Featured Post */}
          {featuredPost && (
            <Box sx={{ mb: '4rem' }}>
              <PostCard post={featuredPost} featured />
            </Box>
          )}

          {/* Categories */}
          <Box
            sx={{
              mb: '3rem',
              display: 'flex',
              gap: '0.75rem',
              overflowX: 'auto',
              pb: '1rem',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            <Chip
              label={t('blog.categories.all')}
              sx={{
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                fontWeight: 700,
                fontSize: '0.875rem',
                height: '2.5rem',
                px: '1.5rem',
              }}
            />
            {[
              { key: 'design', label: t('blog.categories.design') },
              { key: 'business', label: t('blog.categories.business') },
              { key: 'tech', label: t('blog.categories.tech') },
              { key: 'corner', label: t('blog.categories.corner') },
            ].map((cat) => (
              <Chip
                key={cat.key}
                label={cat.label}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light' ? '#cfe8dc' : '#354b43',
                  color: (theme) =>
                    theme.palette.mode === 'light' ? '#354b43' : '#cfe8dc',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  height: '2.5rem',
                  px: '1.5rem',
                  '&:hover': {
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light' ? '#b4ccc1' : '#2d3f38',
                  },
                }}
              />
            ))}
          </Box>

          {/* Blog Grid */}
          <Grid container spacing={4}>
            {regularPosts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post._id}>
                <PostCard post={post} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Box
          sx={{
            textAlign: 'center',
            py: '6rem',
            px: '2rem',
            backgroundColor: '#cfe8dc20',
            borderRadius: '1rem',
            border: '0.125rem dashed #b4ccc1',
          }}
        >
          <LightbulbIcon
            sx={{
              fontSize: '5rem',
              mb: '1.5rem',
              opacity: 0.3,
              color: 'primary.main',
            }}
          />
          <Typography
            variant="h3"
            sx={{
              mb: '1rem',
              fontFamily: 'var(--font-unbounded)',
              fontStyle: 'italic',
            }}
          >
            {t('blog.empty.title')}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.125rem' }}>
            {t('blog.empty.description')}
          </Typography>
        </Box>
      )}
    </Container>
  )
}
