import React from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

import '../../Styles/app.css'

function Header() {
  const { t, i18n } = useTranslation('global')

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="h-global-container">
      <div className="h-links-container">
        <a href="#about" className="h-links-text">
          {t('header-home')}
        </a>
        <a href="#skills" className="h-links-text">
          {t('header-competences')}
        </a>
        <a href="#projects" className="h-links-text">
          {t('header-projects')}
        </a>
        <a href="#contact" className="h-links-text">
          {t('header-contact')}
        </a>
        <select
          className="h-buttons-container"
          onChange={(e) => handleChangeLanguage(e.target.value)}
        >
          <option value="Eng">
            {t('button-language-eng')}
            <FontAwesomeIcon
              icon={faLanguage}
              style={{ color: '#000000', marginLeft: '5px' }}
            />
          </option>
          <option value="Fr">
            {t('button-language-fr')}
            <FontAwesomeIcon
              icon={faLanguage}
              style={{ color: '#000000', marginLeft: '5px' }}
            />
          </option>
          <option value="Esp">
            {t('button-language-esp')}
            <FontAwesomeIcon
              icon={faLanguage}
              style={{ color: '#000000', marginLeft: '5px' }}
            />
          </option>
        </select>
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
