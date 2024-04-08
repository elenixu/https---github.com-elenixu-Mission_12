import React, { useState } from 'react'
import '../../Styles/app.css'
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

const images = [
  { src: figmaImg, alt: 'Figma Pic' },
  { src: reactImg, alt: 'React Pic' },
  { src: jsImg, alt: 'JS Pic' },
  { src: reduxImg, alt: 'Redux Pic' },
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
    <div>
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
                className={
                  index === currentIndex % images.length ? 'active' : ''
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div className="carousel-global-container-mobile">
        <div className="carousel-container-imgs-mobile">
          <img className="img-mobile" src={figmaImgMobile} alt="Figma mobile" />
          <img className="img-mobile" src={reactImgMobile} alt="React mobile" />
          <img className="img-mobile" src={jsImgMobile} alt="JS mobile" />
          <img className="img-mobile" src={reduxImgMobile} alt="Redux mobile" />
          <img className="img-mobile" src={htmlImgMobile} alt="HTML mobile" />
          <img className="img-mobile" src={cssImgMobile} alt="CSS mobile" />
          <img className="img-mobile" src={sassImgMobile} alt="SaSS mobile" />
        </div>
      </div>
    </div>
  )
}

export default Carousel
