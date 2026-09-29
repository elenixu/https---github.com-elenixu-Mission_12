import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

const ContactForm = () => {
  const [t] = useTranslation('global')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorDetails, setErrorDetails] = useState('')
  const formRef = useRef()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setStatus('idle')
    setErrorDetails('')
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
    setStatus('idle')
    setErrorDetails('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorDetails('')

    try {
      await emailjs.sendForm(
        'service_2te30bs',
        'template_ru88diq',
        formRef.current,
        'LusR8Esm_vBkKg9kA',
      )
      setStatus('success')
      setEmail('')
      setMessage('')
      formRef.current?.reset()
    } catch (error) {
      console.error('EmailJS contact form submission failed:', {
        status: error?.status,
        text: error?.text,
        error,
      })
      const providerMessage = error?.text || error?.message || ''
      setErrorDetails(
        error?.status === 404
          ? [t('contact-send-error-not-found'), providerMessage]
              .filter(Boolean)
              .join(' ')
          : [error?.status ? `HTTP ${error.status}.` : '', providerMessage]
              .filter(Boolean)
              .join(' '),
      )
      setStatus('error')
    }
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 720, mx: 'auto' }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, sm: 3.5 },
          border: '1px solid rgba(255,255,255,.1)',
          borderRadius: 3,
          bgcolor: 'rgba(255,255,255,.035)',
          boxShadow: '0 18px 50px rgba(0,0,0,.2)',
        }}
      >
        <Stack
          component="form"
          ref={formRef}
          onSubmit={handleSubmit}
          spacing={2.5}
        >
          <Typography
            variant="overline"
            color="secondary.light"
            sx={{ letterSpacing: '.16em' }}
          >
            {t('contact-title')}
          </Typography>
          <TextField
            id="email"
            type="email"
            name="user_email"
            label={t('contact-title-placeholder')}
            placeholder={t('contact-title-placeholder')}
            value={email}
            onChange={handleEmailChange}
            required
            fullWidth
            autoComplete="email"
            disabled={status === 'sending'}
            sx={{
              '& .MuiOutlinedInput-root': {
                bgcolor: 'rgba(255,255,255,.035)',
                '& fieldset': { borderColor: 'rgba(255,255,255,.16)' },
                '&:hover fieldset': { borderColor: 'rgba(255,255,255,.4)' },
                '&.Mui-focused fieldset': { borderColor: 'secondary.main' },
              },
            }}
          />
          <TextField
            id="message"
            name="message"
            label={t('contact-message-placeholder')}
            placeholder={t('contact-message-placeholder')}
            value={message}
            onChange={handleMessageChange}
            required
            multiline
            minRows={6}
            fullWidth
            disabled={status === 'sending'}
            sx={{
              '& .MuiOutlinedInput-root': {
                bgcolor: 'rgba(255,255,255,.035)',
                alignItems: 'flex-start',
                '& fieldset': { borderColor: 'rgba(255,255,255,.16)' },
                '&:hover fieldset': { borderColor: 'rgba(255,255,255,.4)' },
                '&.Mui-focused fieldset': { borderColor: 'secondary.main' },
              },
            }}
          />
          {status === 'success' && (
            <Alert severity="success" role="status">
              {t('contact-modal')}
            </Alert>
          )}
          {status === 'error' && (
            <Alert severity="error" role="alert">
              {t('contact-send-error')}
              {errorDetails && (
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ display: 'block', mt: 0.5 }}
                >
                  {errorDetails}
                </Typography>
              )}
            </Alert>
          )}
          <Button
            type="submit"
            variant="contained"
            disabled={status === 'sending'}
            startIcon={
              status === 'sending' ? (
                <CircularProgress size={17} color="inherit" />
              ) : null
            }
            sx={{
              alignSelf: { xs: 'stretch', sm: 'flex-end' },
              minWidth: 150,
              bgcolor: 'secondary.main',
              color: 'common.white',
              '&:hover': { bgcolor: 'secondary.dark' },
            }}
          >
            {status === 'sending' ? t('contact-sending') : t('contact-send')}
          </Button>
        </Stack>
      </Paper>
    </Box>
  )
}

export default ContactForm
