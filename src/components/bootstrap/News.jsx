import React, { Component } from "react";
import Slider from "react-slick";
import NewsCard1 from "../Cards/NewsCard1";
import NewsCard2 from "../Cards/NewsCard2";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class News extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
      
    };
    return (
      <div className="News-Cards">
        
        <Slider {...settings}>
          <div >
           <NewsCard1 />
          </div>
          <div >
            <NewsCard2 />
          </div>
          <div >
            <NewsCard2 />
          </div>
          <div>
          <NewsCard2 />
          </div>
          <div>
          <NewsCard2 />
          </div>
          <div>
          <NewsCard2 />
          </div>
        </Slider>
      </div>
    );
  }
}