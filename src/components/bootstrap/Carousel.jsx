import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function Banner() {
    return (
    <Carousel >
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://www.metropolisindia.com/newdata/images/bannerimages/Metropolis-web-banner-3-with-text.png"
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://www.metropolisindia.com/newdata/images/bannerimages/Desktop_Home%20Page_Banner_New_2-Invest-in-your-health.png.png"
            alt="Second slide"
          />
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.metropolisindia.com/newdata/images/bannerimages/Metropolis-web-banner-2-with-text.png"
            alt="Third slide"
          />
         
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Banner;