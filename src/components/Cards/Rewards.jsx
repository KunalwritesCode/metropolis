import React, { Component } from "react";
import Slider from "react-slick";

export default class Rewards extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div className="Awards-Section-Card">
            <img src="https://www.metropolisindia.com/newdata/images/Award%20Post.jpeg" alt="#" />
            <h2> Indian Diagonistic Services Provider Company</h2>
          </div>
          <div className="Awards-Section-Card">
            <img src="https://www.metropolisindia.com/newdata/images/Award%20Post.jpeg" alt="#" />
            <h2> Indian Diagonistic Services Provider Company</h2>
          </div>
          <div className="Awards-Section-Card">
            <img src="https://www.metropolisindia.com/newdata/images/Award%20Post.jpeg" alt="#" />
            <h2> Indian Diagonistic Services Provider Company</h2>
          </div>
          <div className="Awards-Section-Card">
            <img src="https://www.metropolisindia.com/newdata/images/Award%20Post.jpeg" alt="#" />
            <h2> Indian Diagonistic Services Provider Company</h2>
          </div>
          <div className="Awards-Section-Card">
            <img src="https://www.metropolisindia.com/newdata/images/Award%20Post.jpeg" alt="#" />
            <h2> Indian Diagonistic Services Provider Company</h2>
          </div>
          <div className="Awards-Section-Card">
            <img src="https://www.metropolisindia.com/newdata/images/Award%20Post.jpeg" alt="#" />
            <h2> Indian Diagonistic Services Provider Company</h2>
          </div>
          
        </Slider>
      </div>
    );
  }
}