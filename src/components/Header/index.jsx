import React from 'react'
import { useTranslation } from 'react-i18next'

import '../../Styles/app.css'

function Header() {
  const { i18n } = useTranslation('global') // Destructure i18n from useTranslation hook

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="h-global-container">
      <div className="h-links-container">
        <a href="#about" className="h-links-text">
          À propos
        </a>
        <a href="#skills" className="h-links-text">
          Compétences
        </a>
        <a href="#projects" className="h-links-text">
          Projets
        </a>
        <a href="#contact" className="h-links-text">
          Contactez-moi
        </a>
        <button onClick={() => handleChangeLanguage('Eng')}>ENG</button>
        <button onClick={() => handleChangeLanguage('Fr')}>FR</button>
        <button onClick={() => handleChangeLanguage('Esp')}>ESP</button>
      </div>

      <div className="h-links-container-mobile">
        <div className="h-button-container-mobile">
          <a href="#about" className="h-links-text">
            À propos
          </a>
        </div>
        <div className="h-button-container-mobile">
          <a href="#skills" className="h-links-text">
            Compétences
          </a>
        </div>
        <div className="h-button-container-mobile">
          <a href="#projects" className="h-links-text">
            Projets
          </a>
        </div>
        <div className="h-button-container-mobile">
          <a href="#contact" className="h-links-text">
            Contactez-moi
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
