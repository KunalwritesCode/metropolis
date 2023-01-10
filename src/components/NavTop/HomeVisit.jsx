import React from 'react'
import ReviewCarousel from '../Cards/ReviewCarousel'

const HomeVisit = () => {
  return (
    <div>
      <div className='Content-truehealth'>
           <button>Home</button>
           <button>Book a Home Visit</button>
       </div>

       <div>
        <div className='homevisit-container'>
            <img src='https://www.metropolisindia.com/newdata/images/lab_Home_landing_Page_Banner.png' />
        </div>
        <div><form></form></div>
       </div>

       <div className='homevisit-container-top'>
         <h1>Blood Test At Home By Metropolis</h1>
         <p>In this pandemic, it can be difficult for most people to step out of their homes for blood check-ups. And for others, it can be risky. At Metropolis, we understand that health cannot take a backseat even if there’s a COVID-19 outbreak going on.</p>
         <p>With the Metropolis home collection service, you have the convenience of getting blood tests at home at an affordable price without compromising on your safety.</p>
         <p>The home visit service is especially helpful for people having weaker immunity and those who are at a higher risk of facing major complications from COVID-19. So instead of heading outside, having your blood sample collected at home is a safer way to ensure all health needs are fulfilled.</p>
         <h3>You just need to follow some simple steps to book a home collection visit.</h3>

         <div className='homevisit-container-top-inside'>
          <div className='homevisit-container-top-inside-1'>
            
            <h6>Pick a Convenient Location</h6>
            <p>Testing at home is less stressful than taking the riskof stepping  outside <br />during a pandemic. To book a home visit, all you need to do is add your location details and qualified phlebotomists from Metropolis will be at your doorstep for home blood collection.</p>
          </div>
          <div className='homevisit-container-top-inside-2'>
            
            <h6>Professional & Highly Trained Phlebotomists</h6>
            <p>At Metropolis, all our phlebotomists are professional <br />and highly trained in what they do. They ensure utmost safety and follow strict hygiene protocols while collecting your blood samples.</p>
          </div>
         </div>

         <div className='homevisit-container-top-inside'>
          <div className='homevisit-container-top-inside-3'>
            
            <h6>Flexibility and Convenience</h6>
            <p>You can book an appointment as per your convenient time and get your blood sample collected safely from home. The blood sample collection from home service is also available on Sundays.</p>
          </div>
          <div className='homevisit-container-top-inside-4'>
            
            <h6>Get Your Test Reports Online</h6>
            <p>Book a home visit and receive your test reports on email within 24-48 hours of the sample collection. With this service, you have the peace of mind of getting your blood sample taken safely at home and the convenience of viewing your reports online.</p>
          </div>
         </div>
       </div>

       <div className='homevisit-container-mid'>
        <h2>Insist on Metropolis</h2>
        <div className='homevisit-container-mid-inside'>
            <div>
                <img src='https://www.metropolisindia.com/newdata/images/group%201.svg' />
                <h5>Highly Qualified Team</h5>
                <p>Highly trained team of phlebotomists are experts in single prick blood collection</p>
            </div>

            <div>
                <img src='https://www.metropolisindia.com/newdata/images/clock%20(1)%201.svg' />
                <h5>Flexible Timings</h5>
                <p>We understand your needs and hence we collect samples as early as 6:30AM or late evenings</p>
            </div>

            <div>
                <img src='https://www.metropolisindia.com/newdata/images/quickreport.svg' />
                <h5>Quickest Reports</h5>
                <p>Printed and Email Reports delivered to you in the quickest possible time</p>
            </div>

            <div>
                <img src='https://www.metropolisindia.com/newdata/images/calendar%201.svg' />
                <h5>Sunday Services</h5>
                <p>We go the extra mile for your convenience. We collect samples even on Sundays!</p>
            </div>
        </div>
       </div>

       <div className='homevisit-container-review'>
       <h1>What Our Customers Say</h1>
       <p>We’re satisfying our customers every day since 1980</p>
       <ReviewCarousel />
       </div>
    </div>
  )
}

export default HomeVisit
