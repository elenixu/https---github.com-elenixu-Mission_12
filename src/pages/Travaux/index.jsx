import React from 'react'
import '../../Styles/app.css'
import cardMaquette from '../../assets/card.png'
import cardMaquette2 from '../../assets/card2.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Travaux() {
  const [t, i18n] = useTranslation('global')
  return (
    <div className="tr-container-global">
      <div className="tr-content">
        <div className="tr-container-text">
          <div id="projects" className="gl-title">
            {t('works-title')}
          </div>
          <div className="gl-text">{t('works-message')}</div>
        </div>
        <div className="tr-container-cards">
          <div className="tr-card">
            <img className="tr-pic" src={cardMaquette} alt="Maquette Pic" />
            <div className="tr-overlay">
              <Link to="https://github.com/elenixu/https---github.com-elenixu-Mission_11">
                <p className="tr-text">{t('works-git')}</p>
              </Link>
            </div>
          </div>

          <div className="tr-card">
            <img className="tr-pic" src={cardMaquette2} alt="Maquette Pic" />
            <div className="tr-overlay">
              <Link to="https://github.com/elenixu/Mission08">
                <p className="tr-text">Lien GitHub ici</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travaux
