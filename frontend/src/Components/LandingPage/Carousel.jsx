import React, { useState } from 'react'
import Slider from 'react-slick'
import { IoIosArrowDropleft,IoIosArrowDropright } from "react-icons/io";
import { GoDot, GoDotFill } from "react-icons/go";


const volvoTrucks = ['https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/market-landing-hero-film-reveal-thumb?fit=constrain,1&wid=1366&hei=600','https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/people-workshop-truck-maintenance?qlt=82&wid=1440&ts=1685353282624&dpr=off&fit=constrain', 'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/serial-production-starts-image1?wid=1024', 'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/2326X800-parts-warranty?qlt=82&wid=1440&ts=1649752006807&dpr=off&fit=constrain', 'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/vehicle-service-genuine-volvo-service-truck?qlt=82&wid=1440&ts=1606326930139&dpr=off&fit=constrain', 'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/volvo-service-contract-classic-blue-service?qlt=82&wid=1440&ts=1673875928061&dpr=off&fit=constrain', 'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/man_female_talking_2048x1045?qlt=82&wid=1440&ts=1709293523969&dpr=off&fit=constrain'];


// STYLING OBJECTS
const slideStyles = {
    width: '100%',
    height: '500px',
    borderRadius: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'all 0.5s',
    
};

const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0,-50%)',
    right: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
    background: 'rgb(0,0,0,0.5)',
    borderRadius: '50px',
    
}

const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0,-50%)',
    left: '32px',
    color: '#fff',
    zIndex: 1,
    fontSize:'45px',
    cursor: 'pointer',
    background: 'rgb(0,0,0,0.5)',
    borderRadius: '50px',
    
}

const sliderStyles = {
    position: 'relative',
    height:'100%'
}

const dotsContainerStyles = {
    display: 'flex',
    justifyContent: "center",
    
}

const dotStyle = {
    margin: '0 5px',
    cursor: 'pointer',
    fontSize:'20px'
}


export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? volvoTrucks.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === volvoTrucks.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
// it is for dot traversal
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    const slideStyleWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${volvoTrucks[currentIndex]})`
    }
  return (
      <div style={sliderStyles}>
          <div>
              <div onClick={goToPrevious}><IoIosArrowDropleft  style={leftArrowStyles}/></div>
              <div onClick={goToNext} ><IoIosArrowDropright style={rightArrowStyles}/></div>
         </div>
         <div style={slideStyleWidthBackground}></div>
          <div style={dotsContainerStyles}>
              {
                  volvoTrucks.map((slide, slideIndex) => (
                      <div onClick={()=>goToSlide(slideIndex)} key={slideIndex} style={dotStyle}>
                        <GoDot/>
                      </div>
                  ))
              }
         </div>
      </div>
  )
}
