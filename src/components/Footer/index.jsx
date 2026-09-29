import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import LikeButton from '../LikeButton'
function Footer() {
  const [t] = useTranslation('global')
  return (
    <Box component="footer" sx={{ bgcolor: '#050506', py: 6, mt: 10 }}>
      <Container maxWidth="lg">
        <Stack alignItems="center" spacing={2}>
          <Typography color="text.secondary" textAlign="center" variant="h6">
            {t('footer-message')}
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton
              component={Link}
              to="https://github.com/elenixu"
              target="_blank"
              aria-label="GitHub"
              color="inherit"
            >
              <FontAwesomeIcon icon={faGithub} />
            </IconButton>
            <IconButton
              component={Link}
              to="https://www.linkedin.com/in/elenagilsalazar/"
              target="_blank"
              aria-label="LinkedIn"
              color="inherit"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
          </Stack>
          <LikeButton />
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
