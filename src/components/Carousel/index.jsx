import React, { useState } from 'react'
import '../../Styles/app.css'
import figmaImg from '../../assets/figma_group.png'
import reactImg from '../../assets/react_group.png'
import jsImg from '../../assets/js_group.png'
import htmlImg from '../../assets/html_group.png'
import cssImg from '../../assets/css_group.png'
import sassImg from '../../assets/sass_group.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

const images = [
  { src: figmaImg, alt: 'Figma Pic' },
  { src: reactImg, alt: 'React Pic' },
  { src: jsImg, alt: 'JS Pic' },
  { src: htmlImg, alt: 'HTML Pic' },
  { src: cssImg, alt: 'CSS Pic' },
  { src: sassImg, alt: 'SaSS Pic' },
]

const numImagesToShow = 4 // Number of images to show in the carousel

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  const getIndicesToDisplay = () => {
    const start = currentIndex % images.length
    const end = (start + numImagesToShow) % images.length
    return start <= end
      ? Array.from(
          { length: numImagesToShow },
          (_, index) => (start + index) % images.length
        )
      : Array.from(
          { length: numImagesToShow },
          (_, index) => (start + index + images.length) % images.length
        )
  }

  return (
    <div className="carousel-global-container">
      <div className="carousel">
        <div className="carousel-buttons">
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            style={{ color: '#ffffff', cursor: 'pointer' }}
            onClick={goToPrevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            style={{ color: '#ffffff', cursor: 'pointer' }}
            onClick={goToNextSlide}
          />
        </div>
        <div className="carousel-images">
          {getIndicesToDisplay().map((index) => (
            <img
              key={index}
              src={images[index].src}
              alt={images[index].alt}
              className={index === currentIndex % images.length ? 'active' : ''}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
