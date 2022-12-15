import React from 'react'

const Apps = () => {
  return (
    <div className='our-apps-section'>
      <div>
        <img className='our-apps-section-image' src='https://www.metropolisindia.com/newdata/images/mobile-app-new.png' />
      </div>
        
      <div className='our-apps-section-second'>
       <div className='our-apps-section-text'>
       <h1>Presenting the all new Metropolis Healthcare App!</h1>
        <p>The App features different options that let you book home visits, search for a specific test,<br /> locate nearest labs, access smart reports and much more.</p>
        <p>Now you can track your inner health on the go and get all test related updates in just a few taps.</p>
       </div>

       <div className='our-apps-section-more'>
        <button className='our-apps-section-button'>Know More</button>
        <div className='our-apps-section-more-logo'>
        <img style={{width :'50px'}} src='https://www.metropolisindia.com/newdata/images/hiclipart.com%20(1).png' />
        <img style={{width :'50px'}} src='https://www.metropolisindia.com/newdata/images/hiclipart.com.png' />
        </div>
        
       </div>
      </div>
    </div>
  )
}

export default Apps
