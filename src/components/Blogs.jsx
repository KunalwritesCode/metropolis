import React from 'react'
import News from './bootstrap/News'

const Blogs = () => {
  return (
    <div>
      <div className='Mid-section'>
       <h1>Latest Blogs & News</h1>
      <button className='Mid-section-button1'>All</button>
      <button className='Mid-section-button2'>Disease</button>
      <button className='Mid-section-button2'>Lifestyle</button>
      <button className='Mid-section-button2'>Nutrition</button>
      <button className='Mid-section-button4'>Health Test</button>
      <button className='Mid-section-button5'>View More</button>
    </div>
    <div>
     <News />
    </div>
    </div>
  )
}

export default Blogs
