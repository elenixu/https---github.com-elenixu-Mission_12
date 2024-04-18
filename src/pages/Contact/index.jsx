import React from 'react'
import '../../Styles/app.css'
import ContactForm from '../../components/ContactForm'
import { useTranslation } from 'react-i18next'

function Contact() {
  const [t, i18n] = useTranslation('global')
  return (
    <div className="ct-container-global">
      <div className="ct-content">
        <div className="ct-container-text">
          <div id="contact" className="gl-title">
            {t('contact-title')}
          </div>
          <div className="gl-text">{t('contact-message')}</div>
        </div>
        <div className="ct-container-form">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
