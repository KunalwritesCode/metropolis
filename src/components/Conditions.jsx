import React from 'react'
import ConditionCard from './bootstrap/ConditionCard'

const Conditions = () => {
  return (
    <div>
    <div className='Mid-section'>
       <h1>Test by Health Conditions</h1>
    <button className='Mid-section-button5'>View More</button>
    </div>
    <div className='Mid-section-para'>
        <p>Choose test by Health Conditions</p>
    </div>
    <ConditionCard />
    </div>
  )
}

export default Conditions
