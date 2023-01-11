import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Whywe from "./Whywe";

export default class Truepackages extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 2.4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      pauseOnHover: true
    };
    return (
      <div>
      
         <div className='Content-truehealth'>
           <button>Home</button>
           <button>TrueHealth Packages - Health Packages</button>
       </div>

        <Slider {...settings}>
          <div className="Content-truehealth-Card">
            <img src="https://www.metropolisindia.com/newdata/images/truhealth-category-slider-bg-1.svg" alt="#" />
            
          </div>
          <div className="Content-truehealth-Card">
            <img src="https://www.metropolisindia.com/newdata/images/truhealth_banner3.png" alt="#" />
            
          </div>
          <div className="Content-truehealth-Card">
            <img src="https://www.metropolisindia.com/newdata/images/truhealth_banner1.png" alt="#" />
            
          </div>
          <div className="Content-truehealth-Card">
            <img src="https://www.metropolisindia.com/newdata/images/landing_page_banner1_truhealth.png" alt="#" />
            
          </div>
         
          
          
        </Slider>

        <div className="Content-truehealth-mid">
          <div className="Content-truehealth-mid-top">
            <h2>Metropolis Presents</h2>
            <hr />
            <img src="https://www.metropolisindia.com/newdata/images/logo-category-page.svg" /><hr />
          </div>
          <h3>Explore Inner Health Wellness Programmes Specially Designed for You</h3>
          <div className="Content-truehealth-mid-bottom">
            
            <div className="Content-truehealth-mid-bottom-inside">
              <p>Our inner health plays an important role in helping us to accomplish our daily and long-term goals. Our work-life demands us to be on top of our game, be active to pursue our hobbies and be healthy to spend time with our loved ones. We at Metropolis value these moments & help you cherish them with great inner Health.</p>
              <p>Introducing TruHealth, Expert and comprehensive inner health wellness by Metropolis. It helps you monitor and maintain your inner health parameters better, so that you are ready to achieve your dreams, always.</p>
              <p>Being aware is half the battle won – that is exactly what inspired to launch TruHealth to help you understand your health risks, get health recommendations, regular reminders and much more.</p>
              <h1>Metropolis TruHealth – Because Health is Everything.</h1>
            </div>
            <div>
              <img src="https://www.metropolisindia.com/newdata/images/true-health-checkup.png" />
            </div>
          </div>
        </div>

        <div className="Content-truehealth-Container-Card">
               <h1>Our Range of TruHealth Checkup Packages in Mumbai</h1>
               <p className="truehealth-Container-Card-1-para">Find the most suitable checkup for you from our range of TruHealth Checkups</p>
             
             <div className="truehealth-Container-Card-Row">
               <div className="truehealth-Container-Card-1">
                    <img className="cards-picture" src="https://www.metropolisindia.com/newdata/images/1663764671_Screening_(500x500).png" />
                    <h2>TrueHealth Screen</h2>
                    <h5>Rs 499</h5>
                    <p className="truehealth-Container-Card-1-para-inside">A screening package which covers vital tests like HbA1C for diabetes,TSH for thyroid......</p>

                    <div className="truehealth-Container-Card-1-inside">
                      <img src="https://www.metropolisindia.com/newdata/images/test-include-packge-crw.svg" />
                      <p>Tests Parameters<br />4 Parameters</p>
                    </div>
                    <div className="truehealth-Container-Card-1-inside">
                      <img src="https://www.metropolisindia.com/newdata/images/gander-crw.svg" />
                      <p>Ideal For<br />M/F of any age</p>
                    </div>

                    <div className="truehealth-Container-Card-1-inside-2">
                      <button className="truehealth-Container-Card-1-button-1">Book Now</button>
                      <button className="truehealth-Container-Card-1-button-2">Learn More</button>
                    </div>

               </div>
               <div className="truehealth-Container-Card-1">
                    <img className="cards-picture" src="https://www.metropolisindia.com/newdata/images/1663764671_Screening_(500x500).png" />
                    <h2>TrueHealth Screen</h2>
                    <h5>Rs 499</h5>
                    <p className="truehealth-Container-Card-1-para-inside">A screening package which covers vital tests like HbA1C for diabetes, TSH for thyroid......</p>

                    <div className="truehealth-Container-Card-1-inside">
                      <img src="https://www.metropolisindia.com/newdata/images/test-include-packge-crw.svg" />
                      <p>Tests Parameters<br />4 Parameters</p>
                    </div>
                    <div className="truehealth-Container-Card-1-inside">
                      <img src="https://www.metropolisindia.com/newdata/images/gander-crw.svg" />
                      <p>Ideal For<br />M/F of any age</p>
                    </div>

                    <div className="truehealth-Container-Card-1-inside-2">
                      <button className="truehealth-Container-Card-1-button-1">Book Now</button>
                      <button className="truehealth-Container-Card-1-button-2">Learn More</button>
                    </div>

               </div>
               <div className="truehealth-Container-Card-1">
                    <img className="cards-picture" src="https://www.metropolisindia.com/newdata/images/1663764671_Screening_(500x500).png" />
                    <h2>TrueHealth Screen</h2>
                    <h5>Rs 499</h5>
                    <p className="truehealth-Container-Card-1-para-inside">A screening package which covers vital tests like HbA1C for diabetes, TSH for thyroid......</p>

                    <div className="truehealth-Container-Card-1-inside">
                      <img src="https://www.metropolisindia.com/newdata/images/test-include-packge-crw.svg" />
                      <p>Tests Parameters<br />4 Parameters</p>
                    </div>
                    <div className="truehealth-Container-Card-1-inside">
                      <img src="https://www.metropolisindia.com/newdata/images/gander-crw.svg" />
                      <p>Ideal For<br />M/F of any age</p>
                    </div>

                    <div className="truehealth-Container-Card-1-inside-2">
                      <button className="truehealth-Container-Card-1-button-1">Book Now</button>
                      <button className="truehealth-Container-Card-1-button-2">Learn More</button>
                    </div>

               </div>
             </div>

             <div className="truehealth-Container-Card-Row">
               <div className="truehealth-Container-Card-1">
                    <img className="cards-picture" src="https://www.metropolisindia.com/newdata/images/1663764671_Screening_(500x500).png" />
                    <h2>TrueHealth Screen</h2>
                    <h5>Rs 499</h5>
                    <p className="truehealth-Container-Card-1-para-inside">A screening package which covers vital tests like HbA1C for diabetes,TSH for thyroid......</p>

                    <div className="truehealth-Container-Card-1-inside">
                      <img src="https://www.metropolisindia.com/newdata/images/test-include-packge-crw.svg" />
                      <p>Tests Parameters<br />4 Parameters</p>
                    </div>
                    <div className="truehealth-Container-Card-1-inside">
                      <img src="https://www.metropolisindia.com/newdata/images/gander-crw.svg" />
                      <p>Ideal For<br />M/F of any age</p>
                    </div>

                    <div className="truehealth-Container-Card-1-inside-2">
                      <button className="truehealth-Container-Card-1-button-1">Book Now</button>
                      <button className="truehealth-Container-Card-1-button-2">Learn More</button>
                    </div>

               </div>
               <div className="truehealth-Container-Card-1">
                    <img className="cards-picture" src="https://www.metropolisindia.com/newdata/images/1663764671_Screening_(500x500).png" />
                    <Link to="/truepackage/Card"><h2>TrueHealth Screen</h2></Link>
                    <h5>Rs 499</h5>
                    <p className="truehealth-Container-Card-1-para-inside">A screening package which covers vital tests like HbA1C for diabetes, TSH for thyroid......</p>

                    <div className="truehealth-Container-Card-1-inside">
                      <img src="https://www.metropolisindia.com/newdata/images/test-include-packge-crw.svg" />
                      <p>Tests Parameters<br />4 Parameters</p>
                    </div>
                    <div className="truehealth-Container-Card-1-inside">
                      <img src="https://www.metropolisindia.com/newdata/images/gander-crw.svg" />
                      <p>Ideal For<br />M/F of any age</p>
                    </div>

                    <div className="truehealth-Container-Card-1-inside-2">
                      <button className="truehealth-Container-Card-1-button-1">Book Now</button>
                      <button className="truehealth-Container-Card-1-button-2">Learn More</button>
                    </div>

               </div>
               <div className="truehealth-Container-Card-1">
                    <img className="cards-picture" src="https://www.metropolisindia.com/newdata/images/1663764671_Screening_(500x500).png" />
                    <h2>TrueHealth Screen</h2>
                    <h5>Rs 499</h5>
                    <p className="truehealth-Container-Card-1-para-inside">A screening package which covers vital tests like HbA1C for diabetes, TSH for thyroid......</p>

                    <div className="truehealth-Container-Card-1-inside">
                      <img src="https://www.metropolisindia.com/newdata/images/test-include-packge-crw.svg" />
                      <p>Tests Parameters<br />4 Parameters</p>
                    </div>
                    <div className="truehealth-Container-Card-1-inside">
                      <img src="https://www.metropolisindia.com/newdata/images/gander-crw.svg" />
                      <p>Ideal For<br />M/F of any age</p>
                    </div>

                    <div className="truehealth-Container-Card-1-inside-2">
                      <button className="truehealth-Container-Card-1-button-1">Book Now</button>
                      <button className="truehealth-Container-Card-1-button-2">Learn More</button>
                    </div>

               </div>
             </div>

             <div className="truehealth-Container-Card-Row">
               <div className="truehealth-Container-Card-1">
                    <img className="cards-picture" src="https://www.metropolisindia.com/newdata/images/1663764671_Screening_(500x500).png" />
                    <h2>TrueHealth Screen</h2>
                    <h5>Rs 499</h5>
                    <p className="truehealth-Container-Card-1-para-inside">A screening package which covers vital tests like HbA1C for diabetes,TSH for thyroid......</p>

                    <div className="truehealth-Container-Card-1-inside">
                      <img src="https://www.metropolisindia.com/newdata/images/test-include-packge-crw.svg" />
                      <p>Tests Parameters<br />4 Parameters</p>
                    </div>
                    <div className="truehealth-Container-Card-1-inside">
                      <img src="https://www.metropolisindia.com/newdata/images/gander-crw.svg" />
                      <p>Ideal For<br />M/F of any age</p>
                    </div>

                    <div className="truehealth-Container-Card-1-inside-2">
                      <button className="truehealth-Container-Card-1-button-1">Book Now</button>
                      <button className="truehealth-Container-Card-1-button-2">Learn More</button>
                    </div>

               </div>
               <div className="truehealth-Container-Card-1">
                    <img className="cards-picture" src="https://www.metropolisindia.com/newdata/images/1663764671_Screening_(500x500).png" />
                    <h2>TrueHealth Screen</h2>
                    <h5>Rs 499</h5>
                    <p className="truehealth-Container-Card-1-para-inside">A screening package which covers vital tests like HbA1C for diabetes, TSH for thyroid......</p>

                    <div className="truehealth-Container-Card-1-inside">
                      <img src="https://www.metropolisindia.com/newdata/images/test-include-packge-crw.svg" />
                      <p>Tests Parameters<br />4 Parameters</p>
                    </div>
                    <div className="truehealth-Container-Card-1-inside">
                      <img src="https://www.metropolisindia.com/newdata/images/gander-crw.svg" />
                      <p>Ideal For<br />M/F of any age</p>
                    </div>

                    <div className="truehealth-Container-Card-1-inside-2">
                      <button className="truehealth-Container-Card-1-button-1">Book Now</button>
                      <button className="truehealth-Container-Card-1-button-2">Learn More</button>
                    </div>

               </div>
               <div className="truehealth-Container-Card-1">
                    <img className="cards-picture" src="https://www.metropolisindia.com/newdata/images/1663764671_Screening_(500x500).png" />
                    <h2>TrueHealth Screen</h2>
                    <h5>Rs 499</h5>
                    <p className="truehealth-Container-Card-1-para-inside">A screening package which covers vital tests like HbA1C for diabetes, TSH for thyroid......</p>

                    <div className="truehealth-Container-Card-1-inside">
                      <img src="https://www.metropolisindia.com/newdata/images/test-include-packge-crw.svg" />
                      <p>Tests Parameters<br />4 Parameters</p>
                    </div>
                    <div className="truehealth-Container-Card-1-inside">
                      <img src="https://www.metropolisindia.com/newdata/images/gander-crw.svg" />
                      <p>Ideal For<br />M/F of any age</p>
                    </div>

                    <div className="truehealth-Container-Card-1-inside-2">
                      <button className="truehealth-Container-Card-1-button-1">Book Now</button>
                      <button className="truehealth-Container-Card-1-button-2">Learn More</button>
                    </div>

               </div>
             </div>

             
        </div>
          <div>
          <div className='truehealth-Container-Whyus-container'>
    <div className='truehealth-Container-Whyus-container-start'>
      <div className='truehealth-Container-Whyus-container-inside'>
        <h2>Why Metropolis ?</h2>
        
        <p>Metropolis has a team of 200 senior pathologists and over 2000 technicians delivering diagnostic solutions in the areas of routine, semi specialty and super specialty domains like Oncology, Neurology, Gynaecology, Nephrology and many more.</p>
        <p>We offer a comprehensive range of 4000+ clinical laboratory tests and profiles, which are used for prediction, early detection, diagnostic screening, confirmation and/or monitoring of the disease.</p>
      </div>

      
      <div>
         <div className='truehealth-Container-labdiv-section-first'>
         <img className='truehealth-Container-labdiv-section-first-image' src='https://www.metropolisindia.com/newdata/images/115-lab.svg' alt='#' />
         <h3>115+ Advanced Labs</h3>
         </div>
         <div className='truehealth-Container-labdiv-section-first'>
         <img className='truehealth-Container-labdiv-section-first-image' src='https://www.metropolisindia.com/newdata/images/115-lab.svg' alt='#' />
         <h3>115+ Advanced Labs</h3>
        </div>
      </div>
     

     <div>
         <div className='truehealth-Container-labdiv-section-first'>
         <img className='truehealth-Container-labdiv-section-first-image' src='https://www.metropolisindia.com/newdata/images/115-lab.svg' alt='#' />
         <h3>115+ Advanced Labs</h3>
         </div>
         <div className='truehealth-Container-labdiv-section-first'>
         <img className='truehealth-Container-labdiv-section-first-image' src='https://www.metropolisindia.com/newdata/images/115-lab.svg' alt='#' />
         <h3>115+ Advanced Labs</h3>
        </div>
     </div>
    </div>
    </div>
          </div>
        


        
      </div>
    );
  }
}
