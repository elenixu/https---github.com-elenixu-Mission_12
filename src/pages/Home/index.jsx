import React from 'react'
import '../../Styles/app.css'

import profilePic from '../../assets/Group 1443.png'
import { useTranslation } from 'react-i18next'

function Home(buttonText) {
  const [t, i18n] = useTranslation('global')

  // Get the current language code
  const currentLanguage = i18n.language

  // Load the PNG file for the current language
  const cvLink = require(`../../translations/${currentLanguage}/cv-${currentLanguage}.png`)

  return (
    <div>
      <div id="about" className="hm-global-container">
        <div className="hm-container-info">
          <div className="hm-name">{t('home-title')}</div>
          <div className="hm-text">{t('home-message')}</div>
          <a href={cvLink} download="resume.png" className="hm-button">
            {t('home-button')}
          </a>
        </div>
        <div className="hm-container-image">
          <img className="hm-image" src={profilePic} alt="Profile Pic" />
        </div>
      </div>
      <div id="about" className="hm-global-container-mobile">
        <div className="hm-container-image">
          <img className="hm-image" src={profilePic} alt="Profile Pic" />
        </div>
        <div className="hm-container-info">
          <div className="hm-name">Salut, je suis Elena</div>
          <div className="hm-text">
            Je suis diplômé en intégration web, j'ai acquis une solide
            compréhension des principes fondamentaux du développement web. Je
            suis motivé, créatif et prêt à apprendre de nouvelles technologies
            pour améliorer mes compétences en intégration web.
          </div>
        </div>
        <div className="hm-button-container">
          <a href={cvLink} className="hm-button">
            Télécharger mon CV
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
