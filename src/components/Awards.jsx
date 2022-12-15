import React from 'react'
import Rewards from './Cards/Rewards'

const Awards = () => {
  return (
    <div>
       <div className='Award-Section-Head'>
        <h1>Awards and Accolades</h1>
        <div>
        <p>We're satisfying our customers every day since 1980</p>
        </div>
        
      </div>
      <div>
        <Rewards />
      </div>
    </div>
  )
}

export default Awards
