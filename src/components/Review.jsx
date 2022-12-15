import React from 'react'
import ReviewCarousel from './Cards/ReviewCarousel'

const Review = () => {
  return (
    <div className='Review-Section'>
      <div className='Review-Section-Head'>
        <h1>What Our Customers Say</h1>
        <div>
        <p>We're satisfying our customers every day since 1980</p>
        </div>
        
      </div>

      <div className='Review-Section-Card'>
        <ReviewCarousel />
      </div>
    </div>
  )
}

export default Review
