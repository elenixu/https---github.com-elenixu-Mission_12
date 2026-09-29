import React from 'react'
import { Chip, Stack } from '@mui/material'

function Tags(props) {
  return (
    <Stack
      direction="row"
      useFlexGap
      flexWrap="wrap"
      justifyContent="center"
      spacing={0.75}
      sx={{ width: '100%', minWidth: 0, maxWidth: '100%', py: 0.5 }}
    >
      {/* Map through the tag prop array and render each tag */}
      {props.taglist.map((tag, index) => (
        <Chip
          key={`${tag}-${index}`}
          label={tag}
          size="small"
          sx={{ bgcolor: '#e4e4e8', color: '#28282c', fontWeight: 600 }}
        />
      ))}
    </Stack>
  )
}

export default Tags
