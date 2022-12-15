import React from 'react'
import CardCarousel from './bootstrap/CardCarousel';

const Package = () => {
  return (
    <div>
    <div className='Mid-section'>
       <h1>TruHealth Packages</h1>
      <button className='Mid-section-button1'>All</button>
      <button className='Mid-section-button2'>Male</button>
      <button className='Mid-section-button3'>Female</button>
      <button className='Mid-section-button4'>Couple</button>
      <button className='Mid-section-button5'>View More</button>
    </div>
    <div className='Mid-section-para'>
        <p>Choose from our wide range of TruHealth Package and Health Checkups</p>
    </div>
    <div><CardCarousel /></div>
    
    
    </div>
    
  )
}

export default Package
