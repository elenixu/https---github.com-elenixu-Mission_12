import React from 'react'
import '../../Styles/app.css'
import ContactForm from '../../components/ContactForm'

function Contact() {
  return (
    <div className="ct-container-global">
      <div className="ct-content">
        <div className="ct-container-text">
          <div className="gl-title">Me contacter</div>
          <div className="gl-text">Let’s get in touch!</div>
        </div>
        <div className="ct-container-form">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
