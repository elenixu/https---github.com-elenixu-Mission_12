import React from 'react'
import '../../Styles/app.css'
import Carousel from '../../components/Carousel'

function Competences() {
  return (
    <div className="cm-container-global">
      <div className="cm-content">
        <div className="cm-container-info">
          <div className="gl-title">Mes compétences</div>
          <div className="gl-text">Differents logiciels que j’utilise:</div>
        </div>
        <Carousel />
      </div>
    </div>
  )
}

export default Competences
