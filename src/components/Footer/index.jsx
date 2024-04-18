import React from 'react'
import '../../Styles/app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
function Footer() {
  const [t, i18n] = useTranslation('global')
  return (
    <div className="ft-global-container">
      <div className="ft-text">{t('footer-message')}</div>
      <div className="ft-icons-container">
        <Link to="https://github.com/elenixu">
          <FontAwesomeIcon icon={faGithub} style={{ color: '#ffffff' }} />
        </Link>
        <Link to="https://www.linkedin.com/in/elenagilsalazar/">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: '#ffffff' }} />
        </Link>
      </div>
    </div>
  )
}

export default Footer
