import React, { Component } from "react";
import Slider from "react-slick";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

export default class ReviewCarousel extends Component {
  state = {
    display: true,
    width: 2000
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div>
        
          <Slider {...settings}>
            <div>
              <div className="Review-Card-Icon">
              <StarIcon style={{fontSize :'large'}} />
              <StarIcon style={{fontSize :'large'}} />
              <StarIcon style={{fontSize :'large'}} />
              <StarIcon style={{fontSize :'large'}} />
              <StarBorderIcon style={{fontSize :'large'}} />
              </div>

              <div className="Review-Card-Para">
                <span>Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry. Lorem Ipsum has been the indus <br />standard dummy text ever since the 1500s, when an un<br /> printer took a galley of type and scrambled it to make a<br />  typenspecimen book</span>
              </div>

              <div className="Review-Card-Head"><h1>Virat Kohli</h1></div>

            </div>
            <div>
            <div className="Review-Card-Icon">
              <StarIcon style={{fontSize :'large'}} />
              <StarIcon style={{fontSize :'large'}} />
              <StarIcon style={{fontSize :'large'}} />
              <StarIcon style={{fontSize :'large'}} />
              <StarBorderIcon style={{fontSize :'large'}} />
              </div>

              <div className="Review-Card-Para">
                <span>Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry. Lorem Ipsum has been the indus <br />standard dummy text ever since the 1500s, when an un<br /> printer took a galley of type and scrambled it to make a<br />  typenspecimen book</span>
              </div>

              <div className="Review-Card-Head"><h1>Virat Kohli</h1></div>

            </div>
            <div>
            <div className="Review-Card-Icon">
              <StarIcon style={{fontSize :'large'}} />
              <StarIcon style={{fontSize :'large'}} />
              <StarIcon style={{fontSize :'large'}} />
              <StarIcon style={{fontSize :'large'}} />
              <StarBorderIcon style={{fontSize :'large'}} />
              </div>

              <div className="Review-Card-Para">
                <span>Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry. Lorem Ipsum has been the indus <br />standard dummy text ever since the 1500s, when an un<br /> printer took a galley of type and scrambled it to make a<br />  typenspecimen book</span>
              </div>

              <div className="Review-Card-Head"><h1>Virat Kohli</h1></div>

            </div>
            <div>
            <div className="Review-Card-Icon">
              <StarIcon style={{fontSize :'large'}} />
              <StarIcon style={{fontSize :'large'}} />
              <StarIcon style={{fontSize :'large'}} />
              <StarIcon style={{fontSize :'large'}} />
              <StarBorderIcon style={{fontSize :'large'}} />
              </div>

              <div className="Review-Card-Para">
                <span>Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry. Lorem Ipsum has been the indus <br />standard dummy text ever since the 1500s, when an un<br /> printer took a galley of type and scrambled it to make a<br />  typenspecimen book</span>
              </div>

              <div className="Review-Card-Head"><h1>Virat Kohli</h1></div>

            </div>
            <div>
            <div className="Review-Card-Icon">
              <StarIcon style={{fontSize :'large'}} />
              <StarIcon style={{fontSize :'large'}} />
              <StarIcon style={{fontSize :'large'}} />
              <StarIcon style={{fontSize :'large'}} />
              <StarBorderIcon style={{fontSize :'large'}} />
              </div>

              <div className="Review-Card-Para">
                <span>Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry. Lorem Ipsum has been the indus <br />standard dummy text ever since the 1500s, when an un<br /> printer took a galley of type and scrambled it to make a<br />  typenspecimen book</span>
              </div>

              <div className="Review-Card-Head"><h1>Virat Kohli</h1></div>

            </div>
            <div>
            <div className="Review-Card-Icon">
              <StarIcon style={{fontSize :'large'}} />
              <StarIcon style={{fontSize :'large'}} />
              <StarIcon style={{fontSize :'large'}} />
              <StarIcon style={{fontSize :'large'}} />
              <StarBorderIcon style={{fontSize :'large'}} />
              </div>

              <div className="Review-Card-Para">
                <span>Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry. Lorem Ipsum has been the indus <br />standard dummy text ever since the 1500s, when an un<br /> printer took a galley of type and scrambled it to make a<br />  typenspecimen book</span>
              </div>

              <div className="Review-Card-Head"><h1>Virat Kohli</h1></div>

            </div>
          </Slider>
        </div>
      
    );
  }
}