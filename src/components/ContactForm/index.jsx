import React, { useState } from 'react'
import Button from '../../components/Button'
import { useTranslation } from 'react-i18next'

const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // handle form submission logic here,  (sending data to a server
    console.log('Email:', email)
    console.log('Message:', message)
    // Reset form fields after submission
    setEmail('')
    setMessage('')
  }

  const [t, i18n] = useTranslation('global')

  return (
    <div className="cf-container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            id="email"
            className="cf-container-email"
            placeholder={t('contact-title-placeholder')}
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <textarea
            id="message"
            className="cf-container-message"
            placeholder={t('contact-message-placeholder')}
            value={message}
            onChange={handleMessageChange}
            rows={4}
            required
          />
        </div>
        <div className="cf-button-container-mobile">
          <Button buttonText="Envoyer" className="hm-button" />
        </div>
      </form>
    </div>
  )
}

export default ContactForm
