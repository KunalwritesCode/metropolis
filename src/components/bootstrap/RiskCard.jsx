import React, { Component } from "react";
import Slider from "react-slick";

export default class RiskCard extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      
      slidesToShow: 7,
      slidesToScroll: 7,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div className="risk-section">
          
           <img  className="risk-section-image" src="https://www.metropolisindia.com/newdata/images/04_07_2022_04_00_48_18.png" alt="#" />
           <h3>Heart</h3>
            
          </div>
         
          <div className="risk-section">
         <img  className="risk-section-image" src="https://www.metropolisindia.com/newdata/images/04_07_2022_03_58_51_65.png" alt="#" />
          <h3>Liver</h3>
        </div>
          
        <div className="risk-section">
         <img  className="risk-section-image" src="https://www.metropolisindia.com/newdata/images/04_07_2022_04_57_01_31.png" alt="#" />
          <h3>Kidney</h3>
        </div>
          
        <div className="risk-section">
         <img  className="risk-section-image" src="https://www.metropolisindia.com/newdata/images/04_07_2022_04_57_01_31.png" alt="#" />
          <h3>Thyroid</h3>
        </div>
          
        <div className="risk-section">
         <img  className="risk-section-image" src="https://www.metropolisindia.com/newdata/images/04_07_2022_04_57_01_31.png" alt="#" />
          <h3>Bone</h3>
        </div>
          
        <div className="risk-section">
         <img  className="risk-section-image" src="https://www.metropolisindia.com/newdata/images/04_07_2022_04_57_01_31.png" alt="#" />
          <h3>Cancer</h3>
        </div>
         
        <div className="risk-section">
         <img  className="risk-section-image" src="https://www.metropolisindia.com/newdata/images/04_07_2022_04_57_01_31.png" alt="#" />
          <h3>Hormones</h3>
        </div>
          
        <div className="risk-section">
         <img  className="risk-section-image" src="https://www.metropolisindia.com/newdata/images/04_07_2022_04_57_01_31.png" alt="#" />
          <h3>Diabetes</h3>
        </div>

            
        </Slider>
      </div>
    );
  }
}