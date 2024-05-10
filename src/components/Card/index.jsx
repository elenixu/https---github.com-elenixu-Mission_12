import React, { useState } from 'react'
import '../../Styles/app.css'
import Tags from '../Tag'
import ReactCardFlip from 'react-card-flip'

function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false)

  function flipCard() {
    setIsFlipped(!isFlipped)
  }
  return (
    <div>
      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
        <div className="cr-container" onClick={flipCard}>
          <div className="cr-container-text">
            <div className="cr-title">{props.title}</div>
            <div className="cr-title-line"></div>
            <div className="cr-text">Technology used</div>
            <Tags taglist={props.taglist} />
            <img className="cr-picture" src={props.picture} alt="" />
          </div>
        </div>
        <div className="cr-container card-back" onClick={flipCard}>
          <div className="cr-title-back">Project description:</div>
          <div className="cr-text-back">{props.description}</div>
          <div className="cr-buttons-container">
            <button
              className="cr-buttons"
              onClick={() => window.open(props.gitlink)}
            >
              GitHub Link
            </button>
            <button
              className="cr-buttons"
              onClick={() => window.open(props.websitelink)}
            >
              Online Website
            </button>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  )
}

export default Card
