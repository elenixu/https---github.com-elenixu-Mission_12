import React from 'react'
import '../../Styles/app.css'
import Button from '../../components/Button'
import profilePic from '../../assets/Group 1443.png'

function Home(buttonText) {
  return (
    <div className="hm-global-container">
      <div className="hm-container-info">
        <div className="hm-name">Salut, je suis Elena</div>
        <div className="hm-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo enim
          vero nemo, non accusantium maxime, sed iusto iste quisquam esse modi
          unde doloremque fugit ratione eveniet excepturi quas, amet deleniti!
        </div>
        <Button buttonText="Télecharger mon CV" className="hm-button" />
      </div>
      <div className="hm-container-image">
        <img src={profilePic} alt="Profile Pic" />
      </div>
    </div>
  )
}

export default Home
