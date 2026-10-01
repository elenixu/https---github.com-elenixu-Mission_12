import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'

const SEGMENTS = 10
const SIZE = 100
const CENTER = SIZE / 2
const RADIUS = 38
const STROKE_WIDTH = 11
const GAP = 2

const SkillCard = ({ name, icon, level }) => {
  const [isHovered, setIsHovered] = useState(false)

  const safeLevel = Math.max(0, Math.min(level, SEGMENTS))

  const circumference = 2 * Math.PI * RADIUS
  const segmentLength = (circumference - SEGMENTS * GAP) / SEGMENTS

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        width: 145,
        minWidth: 145,
        height: 155,
        borderRadius: '28px',
        bgcolor: '#b7b7b7',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        transition:
          'transform .3s ease, background-color .3s ease, box-shadow .3s ease',

        '&:hover': {
          transform: 'scale(1.08)',
          bgcolor: '#fff',
          boxShadow: '0 0 28px rgba(153,31,43,.3)',
        },

        '@keyframes skill-segment-charge': {
          '0%': {
            opacity: 1,
          },
          '35%': {
            opacity: 0.2,
          },
          '70%': {
            opacity: 1,
          },
          '100%': {
            opacity: 1,
          },
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: SIZE,
          height: SIZE,
        }}
      >
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
          {Array.from({ length: SEGMENTS }).map((_, index) => {
            const active = index < safeLevel

            return (
              <circle
                key={index}
                cx={CENTER}
                cy={CENTER}
                r={RADIUS}
                fill="none"
                stroke={active ? '#050506' : '#b7b7b7'}
                strokeWidth={STROKE_WIDTH}
                strokeDasharray={`${segmentLength} ${
                  circumference - segmentLength
                }`}
                strokeDashoffset={-(index * (segmentLength + GAP))}
                strokeLinecap="butt"
                transform={`rotate(-90 ${CENTER} ${CENTER})`}
                style={{
                  opacity: active ? 1 : 0.35,

                  animation:
                    isHovered && active
                      ? `skill-segment-charge 500ms ease ${index * 55}ms both`
                      : 'none',
                }}
              />
            )
          })}
        </svg>

        {/* White center */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            margin: 'auto',

            width: 58,
            height: 58,

            borderRadius: '50%',
            bgcolor: '#fff',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            zIndex: 2,
          }}
        >
          <Box
            component="svg"
            viewBox="0 0 24 24"
            role="img"
            aria-label={`${name} icon`}
            sx={{
              width: 34,
              height: 34,
            }}
          >
            <path d={icon.path} fill={`#${icon.hex}`} />
          </Box>
        </Box>
      </Box>

      <Typography
        sx={{
          mt: 0.5,
          color: '#222',
          fontWeight: 600,
          fontSize: '.85rem',
          textAlign: 'center',
        }}
      >
        {name}
      </Typography>
    </Box>
  )
}

export default SkillCard
