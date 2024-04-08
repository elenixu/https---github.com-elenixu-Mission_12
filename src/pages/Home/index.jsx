import React from 'react'
import '../../Styles/app.css'

import profilePic from '../../assets/Group 1443.png'
import cvLink from '../../assets/cv-1.png'

function Home(buttonText) {
  return (
    <div>
      <div id="about" className="hm-global-container">
        <div className="hm-container-info">
          <div className="hm-name">Salut, je suis Elena</div>
          <div className="hm-text">
            Je suis diplômé en intégration web, j'ai acquis une solide
            compréhension des principes fondamentaux du développement web. Je
            suis motivé, créatif et prêt à apprendre de nouvelles technologies
            pour améliorer mes compétences en intégration web.
          </div>
          <a href={cvLink} className="hm-button">
            Télécharger mon CV
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
