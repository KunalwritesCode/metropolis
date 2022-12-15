import React from 'react'
import PopularCard from './bootstrap/PopularCard';


const Popular = () => {
  return (
    <div>
       <div className='Mid-section'>
       <h1>Popular Tests</h1>
      <button className='Mid-section-button1'>All</button>
      <button className='Mid-section-button2'>Male</button>
      <button className='Mid-section-button3'>Female</button>
      <button className='Mid-section-button5'>View More</button>
    </div>
    <div className='Mid-section-para'>
        <p>Choose from our frequently booked tests</p>
    </div>
    <div><PopularCard /></div>
    
    </div>
  )
}

export default Popular
