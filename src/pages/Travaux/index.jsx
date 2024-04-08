import React from 'react'
import '../../Styles/app.css'
import cardMaquette from '../../assets/card.png'
import cardMaquette2 from '../../assets/card2.png'
import { Link } from 'react-router-dom'

function Travaux() {
  return (
    <div className="tr-container-global">
      <div className="tr-content">
        <div className="tr-container-text">
          <div id="projects" className="gl-title">
            Mes travaux
          </div>
          <div className="gl-text">Différents projets réalisés :</div>
        </div>
        <div className="tr-container-cards">
          <div className="tr-card">
            <img className="tr-pic" src={cardMaquette} alt="Maquette Pic" />
            <div className="tr-overlay">
              <Link to="https://github.com/elenixu/https---github.com-elenixu-Mission_11">
                <p className="tr-text">Lien GitHub ici</p>
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
