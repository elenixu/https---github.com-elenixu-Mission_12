import React, { useRef } from 'react'
import { Chip, Stack } from '@mui/material'

function Tags(props) {
  const dragState = useRef(null)

  const handlePointerDown = (event) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return

    dragState.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: event.currentTarget.scrollLeft,
    }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event) => {
    const drag = dragState.current
    if (!drag || drag.pointerId !== event.pointerId) return

    event.currentTarget.scrollLeft =
      drag.startScrollLeft - (event.clientX - drag.startX)
  }

  const handlePointerUp = (event) => {
    if (dragState.current?.pointerId === event.pointerId) {
      dragState.current = null
    }
  }

  return (
    <Stack
      direction="row"
      useFlexGap
      flexWrap="nowrap"
      justifyContent="flex-start"
      spacing={0.75}
      tabIndex={0}
      aria-label="Project technologies"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onLostPointerCapture={handlePointerUp}
      onClick={(event) => event.stopPropagation()}
      sx={{
        alignSelf: 'stretch',
        boxSizing: 'border-box',
        width: '100%',
        minWidth: 0,
        maxWidth: '100%',
        overflowX: 'auto',
        overflowY: 'hidden',
        cursor: 'grab',
        userSelect: 'none',
        touchAction: 'pan-x',
        scrollbarWidth: 'thin',
        scrollbarColor: '#b7b7bd transparent',
        '&:active': { cursor: 'grabbing' },
        '&::-webkit-scrollbar': { height: 4 },
        '&::-webkit-scrollbar-thumb': {
          bgcolor: '#b7b7bd',
          borderRadius: 4,
        },
        py: 0.5,
      }}
    >
      {/* Map through the tag prop array and render each tag */}
      {props.taglist.map((tag, index) => (
        <Chip
          key={`${tag}-${index}`}
          label={tag}
          size="small"
          sx={{
            flex: '0 0 auto',
            bgcolor: '#e4e4e8',
            color: '#28282c',
            fontWeight: 600,
            '& .MuiChip-label': {
              whiteSpace: 'nowrap',
            },
          }}
        />
      ))}
    </Stack>
  )
}

export default Tags
