import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [modal, setModal] = useState(false)
  const formRef = useRef()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const toggleModal = () => {
    setModal(!modal)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_2te30bs',
        'template_ru88diq',
        formRef.current,
        'Um2V-wsJwhJEljFVU'
      )
      .then(() => {
        // Show modal after successful submission
        setModal(true)
        // Reset form fields after successful submission
        setEmail('')
        setMessage('')
      })
      .catch((error) => {
        console.error('Failed to send email:', error)
      })
  }

  const [t, i18n] = useTranslation('global')

  return (
    <div>
      <div className="cf-container">
        <form ref={formRef} onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              id="email"
              className="cf-container-email"
              placeholder={t('contact-title-placeholder')}
              value={email}
              onChange={handleEmailChange}
              required
              name="user_email"
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
              name="message"
            />
          </div>
          <div className="cf-button-container-mobile">
            <button type="submit" className="hm-button">
              Envoyer
            </button>
          </div>
        </form>
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div>{t('contact-modal')}</div>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactForm
