import React from 'react'
import { Button as MuiButton } from '@mui/material'

const Button = ({ buttonText, ...props }) => {
  return <MuiButton {...props}>{buttonText}</MuiButton>
}

export default Button
