import React from 'react'
import ContactForm from '../../components/ContactForm'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography } from '@mui/material'

function Contact() {
  const [t] = useTranslation('global')
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 7, md: 12 },
        borderTop: '1px solid rgba(255,255,255,.07)',
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 400,
            mb: 1.5,
            textAlign: 'center',
          }}
        >
          {t('contact-title')}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{
            maxWidth: 780,
            lineHeight: 1.9,
            mb: 4,
            mx: 'auto',
            textAlign: 'center',
          }}
        >
          {t('contact-message')}
        </Typography>
        <ContactForm />
      </Container>
    </Box>
  )
}

export default Contact
