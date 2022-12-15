import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function Banner() {
    return (
    <Carousel >
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://www.metropolisindia.com/bannerimages/Metropolis-web-banner-3-with-text.png"
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://www.metropolisindia.com/bannerimages/Metropolis-web-banner-7-with-text.png"
            alt="Second slide"
          />
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.metropolisindia.com/bannerimages/Metropolis-web-banner-1-with-text.png"
            alt="Third slide"
          />
         
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Banner;