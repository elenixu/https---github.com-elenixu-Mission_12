import React from 'react'
import '../../Styles/app.css'
import { Helmet } from 'react-helmet'

import profilePic from '../../assets/Group 1443.png'
import { useTranslation } from 'react-i18next'

function Home() {
  const [t, i18n] = useTranslation('global')

  // Get the current language code
  const currentLanguage = i18n.language

  // Load the PNG file for the current language
  const cvLink = require(`../../translations/${currentLanguage}/cv-${currentLanguage}.png`)

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
    <div>
      <div id="about" className="hm-global-container">
        <Helmet>
          <title>Elena Gil Salazar - Web Integrator Portfolio</title>
          <meta
            name="description"
            content="Explore the projects and skills of Elena Gil Salazar, a recent graduate of Openclassrooms' Web Integrator program. View my portfolio and contact me for collaborations!"
          />
          <link rel="icon" type="image/png" href="%PUBLIC_URL%/ara.png" />
        </Helmet>
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
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  )
}

export default Home
