import React, { Component } from "react";
import Slider from "react-slick";
import StarIcon from '@mui/icons-material/Star';



export default class PopularCard extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
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
        <div className="popular-section-card">
            
            <div className="popular-section-card-Upper">
              <img className="popular-section-image" src="https://www.metropolisindia.com/newdata/images/test.svg" alt="#" />
              <button className="popular-section-card-button">5<StarIcon/></button>
            </div>
            <h3>Electrolytes Test</h3>
            <hr />
            <div className="popular-section-card-price">Rs.599</div>
            <button className="popular-section-card-button-Cart">Add to cart</button>

          </div>
          
          <div className="popular-section-card">
            <div className="popular-section-card-Upper">
              <img className="popular-section-image" src="https://www.metropolisindia.com/newdata/images/test.svg" alt="#" />
              <button className="popular-section-card-button">5<StarIcon/></button>
            </div>
            <h3>Electrolytes Test</h3>
            <hr />
            <div className="popular-section-card-price">Rs.599</div>
            <button className="popular-section-card-button-Cart">Add to cart</button>

          </div>
          
          <div className="popular-section-card">
            <div className="popular-section-card-Upper">
              <img className="popular-section-image" src="https://www.metropolisindia.com/newdata/images/test.svg" alt="#" />
              <button className="popular-section-card-button">5<StarIcon/></button>
            </div>
            <h3>Electrolytes Test</h3>
            <hr />
            <div className="popular-section-card-price">Rs.599</div>
            <button className="popular-section-card-button-Cart">Add to cart</button>

          </div>
          
          <div className="popular-section-card">
            <div className="popular-section-card-Upper">
              <img className="popular-section-image" src="https://www.metropolisindia.com/newdata/images/test.svg" alt="#" />
              <button className="popular-section-card-button">5<StarIcon/></button>
            </div>
            <h3>Electrolytes Test</h3>
            <hr />
            <div className="popular-section-card-price">Rs.599</div>
            <button className="popular-section-card-button-Cart">Add to cart</button>

          </div>
          
          <div className="popular-section-card">
            <div className="popular-section-card-Upper">
              <img className="popular-section-image" src="https://www.metropolisindia.com/newdata/images/test.svg" alt="#" />
              <button className="popular-section-card-button">5<StarIcon/></button>
            </div>
            <h3>Electrolytes Test</h3>
            <hr />
            <div className="popular-section-card-price">Rs.599</div>
            <button className="popular-section-card-button-Cart">Add to cart</button>

          </div>
          
          <div className="popular-section-card">
            <div className="popular-section-card-Upper">
              <img className="popular-section-image" src="https://www.metropolisindia.com/newdata/images/test.svg" alt="#" />
              <button className="popular-section-card-button">5<StarIcon/></button>
            </div>
            <h3>Electrolytes Test</h3>
            <hr />
            <div className="popular-section-card-price">Rs.599</div>
            <button className="popular-section-card-button-Cart">Add to cart</button>

          </div>

          <div className="popular-section-card">
            <div className="popular-section-card-Upper">
              <img className="popular-section-image" src="https://www.metropolisindia.com/newdata/images/test.svg" alt="#" />
              <button className="popular-section-card-button">5<StarIcon/></button>
            </div>
            <h3>Electrolytes Test</h3>
            <hr />
            <div className="popular-section-card-price">Rs.599</div>
            <button className="popular-section-card-button-Cart">Add to cart</button>

          </div>

          <div className="popular-section-card">
            <div className="popular-section-card-Upper">
              <img className="popular-section-image" src="https://www.metropolisindia.com/newdata/images/test.svg" alt="#" />
              <button className="popular-section-card-button">5<StarIcon/></button>
            </div>
            <h3>Electrolytes Test</h3>
            <hr />
            <div className="popular-section-card-price">Rs.599</div>
            <button className="popular-section-card-button-Cart">Add to cart</button>

          </div>

          <div className="popular-section-card">
            <div className="popular-section-card-Upper">
              <img className="popular-section-image" src="https://www.metropolisindia.com/newdata/images/test.svg" alt="#" />
              <button className="popular-section-card-button">5<StarIcon/></button>
            </div>
            <h3>Electrolytes Test</h3>
            <hr />
            <div className="popular-section-card-price">Rs.599</div>
            <button className="popular-section-card-button-Cart">Add to cart</button>

          </div>

          <div className="popular-section-card">
            <div className="popular-section-card-Upper">
              <img className="popular-section-image" src="https://www.metropolisindia.com/newdata/images/test.svg" alt="#" />
              <button className="popular-section-card-button">5<StarIcon/></button>
            </div>
            <h3>Electrolytes Test</h3>
            <hr />
            <div className="popular-section-card-price">Rs.599</div>
            <button className="popular-section-card-button-Cart">Add to cart</button>

          </div>

          <div className="popular-section-card">
            <div className="popular-section-card-Upper">
              <img className="popular-section-image" src="https://www.metropolisindia.com/newdata/images/test.svg" alt="#" />
              <button className="popular-section-card-button">5<StarIcon/></button>
            </div>
            <h3>Electrolytes Test</h3>
            <hr />
            <div className="popular-section-card-price">Rs.599</div>
            <button className="popular-section-card-button-Cart">Add to cart</button>

          </div>

          <div className="popular-section-card">
            <div className="popular-section-card-Upper">
              <img className="popular-section-image" src="https://www.metropolisindia.com/newdata/images/test.svg" alt="#" />
              <button className="popular-section-card-button">5<StarIcon/></button>
            </div>
            <h3>Electrolytes Test</h3>
            <hr />
            <div className="popular-section-card-price">Rs.599</div>
            <button className="popular-section-card-button-Cart">Add to cart</button>

          </div>
           
          
        </Slider>
      </div>
      
    );
  }
}