import React from 'react'
import RiskCard from './bootstrap/RiskCard'
import { Link } from 'react-router-dom'

const Risk = () => {
  return (
    <div>
      <div className='Mid-section'>
       <h1>Test by Health Risks</h1>
    <Link to="/healthrisk/viewall"><button className='Mid-section-button5'>View More</button> </Link>
    </div>
    <div className='Mid-section-para'>
        <p>Choose test by Health Risk</p>
    </div>
    <RiskCard />
    </div>
  )
}

export default Risk
