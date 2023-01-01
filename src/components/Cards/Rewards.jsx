import React, { Component } from "react";
import Slider from "react-slick";

export default class Rewards extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 500,
      pauseOnHover: true
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div className="Awards-Section-Card">
            <img src="https://www.metropolisindia.com/newdata/images/Award%20Post.jpeg" alt="#" />
            <p> Indian Diagonistic Services Provider Company</p>
          </div>
          <div className="Awards-Section-Card">
            <img src="https://www.metropolisindia.com/newdata/images/Award%20Post.jpeg" alt="#" />
            <p> Indian Diagonistic Services Provider Company</p>
          </div>
          <div className="Awards-Section-Card">
            <img src="https://www.metropolisindia.com/newdata/images/Award%20Post.jpeg" alt="#" />
            <p> Indian Diagonistic Services Provider Company</p>
          </div>
          <div className="Awards-Section-Card">
            <img src="https://www.metropolisindia.com/newdata/images/Award%20Post.jpeg" alt="#" />
            <p> Indian Diagonistic Services Provider Company</p>
          </div>
          <div className="Awards-Section-Card">
            <img src="https://www.metropolisindia.com/newdata/images/Award%20Post.jpeg" alt="#" />
            <p> Indian Diagonistic Services Provider Company</p>
          </div>
          <div className="Awards-Section-Card">
            <img src="https://www.metropolisindia.com/newdata/images/Award%20Post.jpeg" alt="#" />
            <p> Indian Diagonistic Services Provider Company</p>
          </div>
          
        </Slider>
      </div>
    );
  }
}