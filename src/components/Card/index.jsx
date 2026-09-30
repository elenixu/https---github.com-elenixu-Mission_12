import React, { useState } from 'react'
import Tags from '../Tag'
import ReactCardFlip from 'react-card-flip'
import { Box, Button, Paper, Stack, Typography } from '@mui/material'

function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false)

  function flipCard() {
    setIsFlipped(!isFlipped)
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 368, mx: 'auto' }}>
      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
        <Paper
          elevation={8}
          onClick={flipCard}
          sx={{
            boxSizing: 'border-box',
            width: '100%',
            minHeight: 470,
            p: 2,
            borderRadius: 3.5,
            bgcolor: '#f5f5f7',
            color: '#161619',
            cursor: 'pointer',
            textAlign: 'center',
          }}
        >
          <Stack
            spacing={1}
            alignItems="center"
            sx={{ width: '100%', minWidth: 0 }}
          >
            <Typography variant="h6" component="h3">
              {props.title}
            </Typography>
            <Box sx={{ width: '100%', height: 1, bgcolor: 'rgba(0,0,0,.2)' }} />
            <Typography variant="caption" color="text.secondary">
              Technology used
            </Typography>
            <Tags taglist={props.taglist} />
            <Box
              component="img"
              src={props.picture}
              alt={`${props.title} project preview`}
              sx={{ width: '100%', height: 310, objectFit: 'contain' }}
            />
          </Stack>
        </Paper>
        <Paper
          elevation={8}
          onClick={flipCard}
          sx={{
            boxSizing: 'border-box',
            width: '100%',
            minHeight: 470,
            p: 3,
            borderRadius: 3.5,
            bgcolor: '#171719',
            color: 'common.white',
            cursor: 'pointer',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" component="h3" sx={{ pt: 5, pb: 2 }}>
            {props.title}
          </Typography>
          <Typography
            sx={{ px: 1, overflowY: 'auto', maxHeight: 250, lineHeight: 1.7 }}
          >
            {props.description}
          </Typography>
          <Stack
            direction="row"
            spacing={1.5}
            justifyContent="center"
            sx={{ mt: 'auto', pt: 3, flexWrap: 'wrap' }}
          >
            <Button
              variant="contained"
              onClick={(event) => {
                event.stopPropagation()
                window.open(props.gitlink, '_blank', 'noopener,noreferrer')
              }}
            >
              GitHub Link
            </Button>
            {props.websitelink && (
              <Button
                variant="contained"
                onClick={(event) => {
                  event.stopPropagation()
                  window.open(
                    props.websitelink,
                    '_blank',
                    'noopener,noreferrer',
                  )
                }}
              >
                Online Website
              </Button>
            )}
          </Stack>
        </Paper>
      </ReactCardFlip>
    </Box>
  )
}

export default Card
