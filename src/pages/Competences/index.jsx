import React from 'react'
import '../../Styles/app.css'
import Carousel from '../../components/Carousel'
import { useTranslation } from 'react-i18next'

function Competences() {
  const [t, i18n] = useTranslation('global')
  return (
    <div className="cm-container-global">
      <div className="cm-content">
        <div className="cm-container-info">
          <div id="skills" className="gl-title">
            {t('competences-title')}
          </div>
          <div className="gl-text">{t('competences-message')}</div>
        </div>
        <div className="carousel-container-test">
          <Carousel />
        </div>
      </div>
    </div>
  )
}

export default Competences
