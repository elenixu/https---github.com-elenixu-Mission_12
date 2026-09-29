import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography component="h1" variant="h3" gutterBottom>
          Elena Gil Salazar
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Portfolio
        </Typography>
        <Button href="/" variant="contained">
          Voir le portfolio
        </Button>
      </Container>
    </Box>
  )
}

export default App
