import React, { useEffect } from 'react';
import './LandingPage.css';
import Carousel from './Carousel';
import ImgContentCard from './homeCard';
import Footer from './footer';

const cardData = [
  { image_src: 'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/people-workshop-truck-maintenance?qlt=82&wid=1440&ts=1685353282624&dpr=off&fit=constrain', position: 'right', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  { image_src: 'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/market-landing-hero-film-reveal-thumb?fit=constrain,1&wid=1366&hei=600', position: 'left', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  { image_src: 'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/man_female_talking_2048x1045?qlt=82&wid=1440&ts=1709293523969&dpr=off&fit=constrain', position: 'right', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  { image_src: 'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/people-workshop-truck-maintenance?qlt=82&wid=1440&ts=1685353282624&dpr=off&fit=constrain', position: 'left', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." }
];

export const LandingPage = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const direction = index % 2 === 0 ? 'left' : 'right';
      if (cardPosition < windowHeight) {
        card.classList.add('animate-card');
        card.classList.add(`animate-card-${direction}`);
      } else {
        card.classList.remove('animate-card');
        card.classList.remove(`animate-card-${direction}`);
      }
    });
  };

  return (
    <div className="landing-page-container">
      <div className='carousel'>
        <Carousel />
      </div>
      <div className="card-container">
        {cardData.map((card, index) => (
          <ImgContentCard key={index} image={card.image_src} imgPosition={card.position} content={card.content} />
        ))}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

