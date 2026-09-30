import React from 'react'
import { Helmet } from 'react-helmet'
import { Box, Button, Container, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import profilePic from '../../assets/Group 1443.png'
import { useTranslation } from 'react-i18next'

function Home() {
  const [t] = useTranslation('global')

  // Structured data for JSON-LD
  const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'Person',
    name: 'Elena Gil Salazar',
    url: 'https://https-github-com-elenixu-mission-12.vercel.app/',
    sameAs: [
      'https://www.linkedin.com/in/elenagilsalazar/',
      'https://github.com/elenixu',
    ],
    email: 'elegil93@gmail.com',
    image: '../assets/Group 1433.png',
    description: 'Web Integrator | Openclassrooms Graduate',
  }

  return (
    <Box component="section" id="about" sx={{ py: { xs: 6, md: 10 } }}>
      <Helmet>
        <title>Elena Gil Salazar - Web Integrator Portfolio</title>
        <meta
          name="description"
          content="Explore the projects and skills of Elena Gil Salazar, a recent graduate of Openclassrooms' Web Integrator program. View my portfolio and contact me for collaborations!"
        />
        <link rel="icon" type="image/png" href="%PUBLIC_URL%/ara.png" />
      </Helmet>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.1fr .9fr' },
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              order: { xs: 2, md: 1 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.4rem', md: '4.2rem' },
                fontWeight: 500,
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              {t('home-title')}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 2,
                maxWidth: 620,
                mb: 3,
              }}
            >
              {t('home-message')}
            </Typography>
            <Button
              component={RouterLink}
              to="/cv"
              variant="contained"
              sx={{
                bgcolor: '#fff',
                color: '#0c0c0d',
                '&:hover': { bgcolor: '#e2e2e5' },
              }}
            >
              {t('home-button')}
            </Button>
          </Box>
          <Box
            sx={{
              order: { xs: 1, md: 2 },
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={profilePic}
              alt="Portrait of Elena Gil Salazar"
              sx={{
                width: { xs: 220, sm: 280, md: 340 },
                maxWidth: '100%',
                height: 'auto',
                clipPath: 'circle(47% at 50% 50%)',
                filter: 'drop-shadow(0 24px 55px rgba(153,31,43,.25))',
              }}
            />
          </Box>
        </Box>
      </Container>
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Box>
  )
}

export default Home
