import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material'

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
        'Um2V-wsJwhJEljFVU',
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

  const [t] = useTranslation('global')

  return (
    <Box sx={{ width: '100%', maxWidth: 720 }}>
      <Stack component="form" ref={formRef} onSubmit={handleSubmit} spacing={2}>
        <TextField
          id="email"
          type="email"
          name="user_email"
          placeholder={t('contact-title-placeholder')}
          value={email}
          onChange={handleEmailChange}
          required
          fullWidth
          size="small"
          inputProps={{ 'aria-label': t('contact-title-placeholder') }}
          sx={{ bgcolor: 'rgba(255,255,255,.08)', borderRadius: 2 }}
        />
        <TextField
          id="message"
          name="message"
          placeholder={t('contact-message-placeholder')}
          value={message}
          onChange={handleMessageChange}
          required
          multiline
          minRows={7}
          fullWidth
          inputProps={{ 'aria-label': t('contact-message-placeholder') }}
          sx={{ bgcolor: 'rgba(255,255,255,.08)', borderRadius: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            alignSelf: 'flex-start',
            bgcolor: '#fff',
            color: '#0c0c0d',
            '&:hover': { bgcolor: '#dedee2' },
          }}
        >
          Envoyer
        </Button>
      </Stack>
      <Dialog
        open={modal}
        onClose={toggleModal}
        aria-labelledby="contact-success-title"
      >
        <DialogTitle id="contact-success-title">Message envoyé</DialogTitle>
        <DialogContent>{t('contact-modal')}</DialogContent>
        <DialogActions>
          <Button onClick={toggleModal} autoFocus>
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default ContactForm
