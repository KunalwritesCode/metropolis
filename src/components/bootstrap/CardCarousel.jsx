import React, { Component } from "react";
import Slider from "react-slick";
import StarIcon from '@mui/icons-material/Star';



export default class CardCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
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
        
          <div className="package-section-card-1">
          
            <a href="/truepackage/Card"><img className="package-section-Card-image" src="https://www.metropolisindia.com/newdata/images/1663764671_Screening_(500x500).png" alt="#" /></a>
            <div className="package-section-card-1-head"> 
            <h3>Truhealth Screen</h3>
            <button className="package-card-section-butoon-one" >0<StarIcon /> </button>
           </div>
           <div>
           <button className="package-section-card-1-head-button">3 Profile | 4 Parameters</button>
           </div>
           <hr />
           <h3>Rs.499</h3>
           <button className="package-section-card-1-Cart-button">Add to Cart</button>
           </div>
            
            
          <div className="package-section-card-1">
          
            <a href="/truepackage/Card"><img className="package-section-Card-image" src="https://www.metropolisindia.com/newdata/images/1609946752_500x500_2_01.jpg" alt="#" /></a>
            <div className="package-section-card-1-head">
            <h3>Truhealth Plus</h3>
            <button className="package-card-section-butoon-one">
            5<StarIcon /> 
            </button>
           </div>
           <div>
           <button className="package-section-card-1-head-button">8 Profile | 69 Parameters</button>
           </div>
           <hr />
           <h3>Rs.2800</h3>
           <button className="package-section-card-1-Cart-button">Add to Cart</button>
            
          </div>
         
          <div className="package-section-card-1">
            <img className="package-section-Card-image" src="https://www.metropolisindia.com/newdata/images/1609946964_500x500_07.jpg" alt="#" />
            <div className="package-section-card-1-head">
            <h3>Truhealth Youth</h3>
            <button className="package-card-section-butoon-one">
            5<StarIcon /> 
            </button>
            </div>
            <div>
           <button className="package-section-card-1-head-button">8 Profile | 71 Parameters</button>
           </div>
           <hr />
           <h3>Rs.4000</h3>
           <button className="package-section-card-1-Cart-button">Add to Cart</button>
          </div>
          <div className="package-section-card-1">
            <img className="package-section-Card-image" src="https://www.metropolisindia.com/newdata/images/1609946923_500x500_02.jpg" alt="#" />
            <div className="package-section-card-1-head">
            <h3>Truhealth Screen</h3>
            <button className="package-card-section-butoon-one">0<StarIcon /> </button>
            </div>
            <div>
           <button className="package-section-card-1-head-button">3 Profile | 4 Parameters</button>
           </div>
           <hr />
           <h3>Rs.499</h3>
           <button className="package-section-card-1-Cart-button">Add to Cart</button>
          </div>
          <div className="package-section-card-1">
            <a href="/truepackage/Card"><img className="package-section-Card-image" src="https://www.metropolisindia.com/newdata/images/1609946892_500x500_04.jpg" alt="#" /></a>
            <div className="package-section-card-1-head">
            <h3>Truhealth Screen</h3>
            <button className="package-card-section-butoon-one">0<StarIcon /> </button>
            </div>
            <div>
           <button className="package-section-card-1-head-button">3 Profile | 4 Parameters</button>
           </div>
           <hr />
           <h3>Rs.499</h3>
           <button className="package-section-card-1-Cart-button">Add to Cart</button>
          </div>
          
          <div className="package-section-card-1">
            <a href="/truepackage/Card"><img className="package-section-Card-image" src="https://www.metropolisindia.com/newdata/images/1609946875_500x500_06.jpg" alt="#" /></a>
            <div className="package-section-card-1-head">
            <h3>Truhealth Screen</h3>
            <button className="package-card-section-butoon-one">0<StarIcon /> </button>
            </div>
            <div>
           <button className="package-section-card-1-head-button">3 Profile | 4 Parameters</button>
           </div>
           <hr />
           <h3>Rs.499</h3>
           <button className="package-section-card-1-Cart-button">Add to Cart</button>
          </div>
          <div className="package-section-card-1">
            <img className="package-section-Card-image" src="https://www.metropolisindia.com/newdata/images/1609946867_500x500_03.jpg" alt="#" />
            <div className="package-section-card-1-head">
            <h3>Truhealth TruHealth</h3>
            <button className="package-card-section-butoon-one">0<StarIcon /> </button>
            </div>
            <div>
           <button className="package-section-card-1-head-button">3 Profile | 4 Parameters</button>
           </div>
           <hr />
           <h3>Rs.499</h3>
           <button className="package-section-card-1-Cart-button">Add to Cart</button>
          </div>
          <div className="package-section-card-1">
            <img className="package-section-Card-image" src="https://www.metropolisindia.com/newdata/images/1612965476_smartcouple_210x210.png" alt="#" />
            <div className="package-section-card-1-head">
            <h3>Truhealth Screen</h3>
            <button className="package-card-section-butoon-one">0<StarIcon /> </button>
            </div>
            <div>
           <button className="package-section-card-1-head-button">3 Profile | 4 Parameters</button>
           </div>
           <hr />
           <h3>Rs.499</h3>
           <button className="package-section-card-1-Cart-button">Add to Cart</button>
          </div>
          <div className="package-section-card-1">
            <img className="package-section-Card-image" src="https://www.metropolisindia.com/newdata/images/TruHealthSeniorCouple.jpg" alt="#" />
            <div className="package-section-card-1-head">
            <h3>Truhealth Screen</h3>
            <button className="package-card-section-butoon-one">0<StarIcon /> </button>
            </div>
            <div>
           <button className="package-section-card-1-head-button">3 Profile | 4 Parameters</button>
           </div>
           <hr />
           <h3>Rs.499</h3>
           <button className="package-section-card-1-Cart-button">Add to Cart</button>
          </div>
        </Slider>
      </div>
      
    );
  }
}