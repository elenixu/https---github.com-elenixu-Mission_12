import React from 'react'
import '../../Styles/app.css'
import cardMaquette from '../../assets/card.png'

function Travaux() {
  return (
    <div className="tr-container-global">
      <div className="tr-content">
        <div className="tr-container-text">
          <div className="gl-title">Mes travaux</div>
          <div className="gl-text">Differents projets faites:</div>
        </div>
        <div className="tr-container-cards">
          <img src={cardMaquette} alt="maquette Pic" />
          <img src={cardMaquette} alt="maquette Pic" />
        </div>
      </div>
    </div>
  )
}

export default Travaux
