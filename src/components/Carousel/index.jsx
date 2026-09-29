import React, { useState } from 'react'
import figmaImg from '../../assets/figma_group.png'
import reactImg from '../../assets/react_group.png'
import jsImg from '../../assets/js_group.png'
import reduxImg from '../../assets/redux_group.png'
import htmlImg from '../../assets/html_group.png'
import cssImg from '../../assets/css_group.png'
import sassImg from '../../assets/sass_group.png'

import figmaImgMobile from '../../assets/01figma_group.png'
import reactImgMobile from '../../assets/02react_group.png'
import jsImgMobile from '../../assets/03js_group.png'
import reduxImgMobile from '../../assets/04redux_group.png'
import htmlImgMobile from '../../assets/05html_group.png'
import cssImgMobile from '../../assets/06css_group.png'
import sassImgMobile from '../../assets/07sass_group.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { Box, IconButton, Stack } from '@mui/material'

const images = [
  { src: figmaImg, alt: 'Figma Pic' },
  { src: reactImg, alt: 'React Pic' },
  { src: jsImg, alt: 'JS Pic' },
  { src: reduxImg, alt: 'Redux Pic' },
  { src: htmlImg, alt: 'HTML Pic' },
  { src: cssImg, alt: 'CSS Pic' },
  { src: sassImg, alt: 'SaSS Pic' },
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    )
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          display: { xs: 'none', sm: 'grid' },
          gridTemplateColumns: '48px minmax(0, 1fr) 48px',
          alignItems: 'center',
          gap: { sm: 1, md: 2 },
          width: '100%',
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ gridColumn: 1, gridRow: 1 }}
        >
          <IconButton
            aria-label="Previous skill"
            onClick={goToPrevSlide}
            color="inherit"
            sx={{
              color: 'text.primary',
              '&:hover': { color: 'secondary.main' },
            }}
          >
            <FontAwesomeIcon icon={faCircleChevronLeft} />
          </IconButton>
        </Stack>
        <Box
          role="region"
          aria-label="Skills carousel"
          sx={{
            gridColumn: 2,
            gridRow: 1,
            position: 'relative',
            width: '100%',
            height: { sm: 130, md: 170 },
            overflow: 'hidden',
            minWidth: 0,
            maskImage:
              'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
          }}
        >
          {images.map((image, index) => {
            const half = Math.floor(images.length / 2)
            const offset =
              ((index - currentIndex + images.length + half) % images.length) -
              half
            const isVisible = Math.abs(offset) <= 2
            const isActive = index === currentIndex

            return (
              <Box
                component="img"
                key={index}
                src={image.src}
                alt={image.alt}
                aria-hidden={!isVisible}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: `calc(50% + ${offset * 22}%)`,
                  width: '20%',
                  height: { sm: 105, md: 140 },
                  maxWidth: 190,
                  objectFit: 'contain',
                  opacity: isVisible ? (isActive ? 1 : 0.58) : 0,
                  transform: `translate(-50%, -50%) scale(${isActive ? 1.15 : 0.88})`,
                  filter: isActive
                    ? 'drop-shadow(0 8px 16px rgba(153,31,43,.35))'
                    : 'none',
                  zIndex: isActive ? 1 : 0,
                  transition:
                    'left 520ms cubic-bezier(.22,.8,.25,1), transform 520ms cubic-bezier(.22,.8,.25,1), opacity 350ms ease, filter 350ms ease',
                  '@media (prefers-reduced-motion: reduce)': {
                    transition: 'none',
                  },
                }}
              />
            )
          })}
        </Box>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ gridColumn: 3, gridRow: 1 }}
        >
          <IconButton
            aria-label="Next skill"
            onClick={goToNextSlide}
            color="inherit"
            sx={{
              color: 'text.primary',
              '&:hover': { color: 'secondary.main' },
            }}
          >
            <FontAwesomeIcon icon={faCircleChevronRight} />
          </IconButton>
        </Stack>
      </Box>
      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          display: { xs: 'flex', sm: 'none' },
          overflowX: 'auto',
          py: 1,
          '& img': {
            width: 90,
            height: 90,
            objectFit: 'contain',
            flex: '0 0 auto',
          },
        }}
      >
        <Box component="img" src={figmaImgMobile} alt="Figma" />
        <Box component="img" src={reactImgMobile} alt="React" />
        <Box component="img" src={jsImgMobile} alt="JavaScript" />
        <Box component="img" src={reduxImgMobile} alt="Redux" />
        <Box component="img" src={htmlImgMobile} alt="HTML" />
        <Box component="img" src={cssImgMobile} alt="CSS" />
        <Box component="img" src={sassImgMobile} alt="Sass" />
      </Stack>
    </Box>
  )
}

export default Carousel
