import React, { useState } from 'react'

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
    // You can handle form submission logic here, like sending data to a server
    console.log('Email:', email)
    console.log('Message:', message)
    // Reset form fields after submission
    setEmail('')
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          rows={4}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm
