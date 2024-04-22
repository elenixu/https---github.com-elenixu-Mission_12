import React, { useState, useRef, useEffect } from 'react'
import Button from '../../components/Button'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import Modal from 'react-modal'

const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const formRef = useRef()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
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
      .then(
        () => {
          console.log('SUCCESS!')
          // Show success modal
          setShowSuccessModal(true)
          // Reset form fields after successful submission
          setEmail('')
          setMessage('')
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }

  const handleCloseModal = () => {
    setShowSuccessModal(false)
  }

  const [t, i18n] = useTranslation('global')

  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => {
        setShowSuccessModal(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [showSuccessModal])

  return (
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
          <Button buttonText="Envoyer" className="hm-button" />
        </div>
      </form>
      <Modal
        isOpen={showSuccessModal}
        onRequestClose={handleCloseModal}
        contentLabel="Success Modal"
        className="modal-overlay"
        overlayClassName="modal-content"
      >
        <div className="success-modal">
          <p>{t('Thank you! Your message has been sent!')}</p>
        </div>
      </Modal>
    </div>
  )
}

export default ContactForm
