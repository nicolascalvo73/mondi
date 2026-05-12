'use client'

import { Chip, Box } from '@mui/material'

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string | null
  onSelectCategory: (category: string | null) => void
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        flexWrap: 'wrap',
        mb: 4,
      }}
    >
      <Chip
        label="Todos"
        onClick={() => onSelectCategory(null)}
        color={selectedCategory === null ? 'primary' : 'default'}
        sx={{
          fontFamily: 'var(--font-inter), sans-serif',
          fontWeight: selectedCategory === null ? 600 : 400,
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: selectedCategory === null ? undefined : 'rgba(232, 98, 42, 0.08)',
          },
        }}
      />
      {categories.map((category) => (
        <Chip
          key={category}
          label={category}
          onClick={() => onSelectCategory(category)}
          color={selectedCategory === category ? 'primary' : 'default'}
          sx={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontWeight: selectedCategory === category ? 600 : 400,
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: selectedCategory === category ? undefined : 'rgba(232, 98, 42, 0.08)',
            },
          }}
        />
      ))}
    </Box>
  )
}
