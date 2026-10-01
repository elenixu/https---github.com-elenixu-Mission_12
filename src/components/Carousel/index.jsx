import React, { useEffect, useRef } from 'react'
import Flickity from 'flickity'
import 'flickity/css/flickity.css'

import SkillCard from '../SkillCard'
import { skills } from '../SkillCard/skillData'

import { Box } from '@mui/material'

const Carousel = () => {
  const carouselRef = useRef(null)
  const flickityRef = useRef(null)

  useEffect(() => {
    if (!carouselRef.current) return

    flickityRef.current = new Flickity(carouselRef.current, {
      // Infinite carousel
      wrapAround: true,

      // Keep selected skill in the center
      cellAlign: 'center',

      // Allow neighbouring cards to remain visible
      contain: false,

      // Flickity arrows
      prevNextButtons: true,

      // No dots underneath
      pageDots: false,

      // Mouse + touch dragging
      draggable: true,

      // Smooth movement
      selectedAttraction: 0.025,
      friction: 0.28,

      // Accessibility
      accessibility: true,
    })

    return () => {
      flickityRef.current?.destroy()
      flickityRef.current = null
    }
  }, [])

  return (
    <Box
      sx={{
        width: '100%',
        py: 3,

        /*
         * Flickity viewport
         */
        '& .flickity-viewport': {
          minHeight: '185px',
          overflow: 'hidden',
        },

        /*
         * OUTER CELL
         *
         * Flickity controls this element.
         * IMPORTANT:
         * Do NOT put transform: scale() here.
         */
        '& .skill-carousel-cell': {
          width: '145px',

          marginRight: {
            xs: '14px',
            sm: '24px',
            md: '32px',
          },

          opacity: 0.4,

          transition: `
            opacity 450ms ease,
            filter 450ms ease
          `,
        },

        /*
         * Selected Flickity cell
         */
        '& .skill-carousel-cell.is-selected': {
          opacity: 1,

          filter: 'drop-shadow(0 8px 18px rgba(153, 31, 43, .30))',

          zIndex: 2,
        },

        /*
         * INNER CARD
         *
         * We control the scaling here instead
         * of touching Flickity's cell transform.
         */
        '& .skill-carousel-card': {
          transform: 'scale(0.82)',

          transition: 'transform 450ms cubic-bezier(.22,.8,.25,1)',

          transformOrigin: 'center',
        },

        /*
         * Center card becomes full size
         */
        '& .skill-carousel-cell.is-selected .skill-carousel-card': {
          transform: 'scale(1)',
        },

        /*
         * Flickity arrow buttons
         */
        '& .flickity-button': {
          background: 'transparent',
          color: '#fff',

          transition: `
            color 200ms ease,
            transform 200ms ease
          `,

          '&:hover': {
            background: 'transparent',
            color: '#991f2b',
            transform: 'scale(1.15)',
          },

          '&:focus': {
            boxShadow: 'none',
          },
        },

        /*
         * Arrow icon
         */
        '& .flickity-button-icon': {
          fill: 'currentColor',
        },

        /*
         * Reduced motion accessibility
         */
        '@media (prefers-reduced-motion: reduce)': {
          '& .skill-carousel-cell': {
            transition: 'none',
          },

          '& .skill-carousel-card': {
            transition: 'none',
          },
        },
      }}
    >
      <Box
        ref={carouselRef}
        sx={{
          width: '100%',
        }}
      >
        {skills.map((skill) => (
          <Box key={skill.name} className="skill-carousel-cell">
            <Box className="skill-carousel-card">
              <SkillCard
                name={skill.name}
                icon={skill.icon}
                level={skill.level}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Carousel
