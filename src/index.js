import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Competences from './pages/Competences'
import Travaux from './pages/Travaux'
import Contact from './pages/Contact'
import CV from './pages/CV/CV'

import global_eng from './translations/eng/global.json'
import global_fr from './translations/fr/global.json'
import global_esp from './translations/esp/global.json'

import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'

const root = document.getElementById('root')
const rootElement = createRoot(root)

i18next.init({
  interpolation: { escapeValue: true },
  lng: 'fr',
  resources: {
    eng: {
      global: global_eng,
    },
    fr: {
      global: global_fr,
    },
    esp: {
      global: global_esp,
    },
  },
})

const Portfolio = () => {
  return (
    <Box component="div" sx={{ minHeight: '100vh', overflowX: 'hidden' }}>
      <Box
        component="header"
        sx={{
          background:
            'radial-gradient(ellipse at 78% 35%, rgba(153,31,43,.16), transparent 35%)',
        }}
      >
        <Header />
        <Home />
      </Box>

      <Competences />
      <Travaux />
      <Contact />
      <Footer />
    </Box>
  )
}

rootElement.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <Router>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </Router>
      </I18nextProvider>
    </React.StrictMode>
  </ThemeProvider>,
)
