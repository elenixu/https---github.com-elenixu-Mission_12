import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Competences from './pages/Competences'
import Travaux from './pages/Travaux'
import Contact from './pages/Contact'

import global_eng from './translations/eng/global.json'
import global_fr from './translations/fr/global.json'
import global_esp from './translations/esp/global.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

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

rootElement.render(
  <div className="container-global">
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <Router>
          <>
            <div className="main-header">
              <Header />
              <Home />
            </div>
            <Competences />
            <Travaux />
            <Contact />
            <Footer />
          </>
        </Router>
      </I18nextProvider>
    </React.StrictMode>
  </div>
)
