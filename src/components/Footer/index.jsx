import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next'
import { Box, Container, IconButton, Typography } from '@mui/material'

import LikeButton from '../LikeButton'

function Footer() {
  const [t] = useTranslation('global')

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#050506',
        py: 6,
        mt: 10,
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Box
          spacing={2}
          alignItems="center"
          sx={{
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Typography color="text.secondary" variant="h6" textAlign="center">
            {t('footer-message')}
          </Typography>

          <Box
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <IconButton
              component="a"
              href="https://github.com/elenixu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              color="inherit"
            >
              <FontAwesomeIcon icon={faGithub} />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.linkedin.com/in/elenagilsalazar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              color="inherit"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
          </Box>

          <LikeButton />
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
