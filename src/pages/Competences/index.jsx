import React from 'react'
import Carousel from '../../components/Carousel'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography } from '@mui/material'

function Competences() {
  const [t] = useTranslation('global')
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: { xs: 7, md: 12 },
        borderTop: '1px solid rgba(255,255,255,.07)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 400,
            mb: 1.5,
          }}
        >
          {t('competences-title')}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ maxWidth: 780, lineHeight: 1.9, mb: 4 }}
        >
          {t('competences-message')}
        </Typography>
        <Carousel />
      </Container>
    </Box>
  )
}

export default Competences
