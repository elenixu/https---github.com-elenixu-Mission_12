import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Container, MenuItem, Select, Stack } from '@mui/material'

function Header() {
  const { t, i18n } = useTranslation('global')

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <Container
      maxWidth="lg"
      component="nav"
      aria-label="Main navigation"
      sx={{ py: 2.5 }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent="center"
        spacing={{ xs: 1, sm: 2 }}
        sx={{
          width: 'fit-content',
          maxWidth: '100%',
          mx: 'auto',
          px: { xs: 1.5, sm: 2.5 },
          py: 1.5,
          borderRadius: 99,
          bgcolor: 'rgba(35,35,38,.88)',
          backdropFilter: 'blur(18px)',
        }}
      >
        <Stack
          direction="row"
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
          spacing={{ xs: 0, sm: 1 }}
        >
          {[
            ['#about', t('header-home')],
            ['#skills', t('header-competences')],
            ['#projects', t('header-projects')],
            ['#contact', t('header-contact')],
          ].map(([href, label]) => (
            <Button
              key={href}
              component="a"
              href={href}
              color="inherit"
              size="small"
            >
              {label}
            </Button>
          ))}
        </Stack>
        <Select
          size="small"
          value={i18n.language}
          onChange={(event) => handleChangeLanguage(event.target.value)}
          aria-label="Choose language"
          sx={{
            minWidth: 112,
            color: '#0c0c0d',
            bgcolor: 'common.white',
            borderRadius: 99,
            '& .MuiOutlinedInput-notchedOutline': { border: 0 },
            '& .MuiSvgIcon-root': { color: '#0c0c0d' },
          }}
        >
          <MenuItem value="fr">{t('button-language-fr')}</MenuItem>
          <MenuItem value="eng">{t('button-language-eng')}</MenuItem>
          <MenuItem value="esp">{t('button-language-esp')}</MenuItem>
        </Select>
      </Stack>
    </Container>
  )
}

export default Header
