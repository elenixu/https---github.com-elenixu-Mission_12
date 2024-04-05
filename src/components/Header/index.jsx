import React from 'react'
import Button from '../../components/Button'
import '../../Styles/app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className="h-global-container">
      <div className="h-links-container">
        <div className="h-links-text">À propos</div>
        <div className="h-links-text">Compétences</div>
        <div className="h-links-text">Projets</div>
        <div className="h-links-text">Contactez-moi</div>
        <Button buttonText="Français" className="h-button">
          <FontAwesomeIcon icon={faLanguage} />
        </Button>
      </div>
    </div>
  )
}

export default Header
