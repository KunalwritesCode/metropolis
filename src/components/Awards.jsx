import React from 'react'
import Rewards from './Cards/Rewards'

const Awards = () => {
  return (
    <div>
       <div className='Award-Section-Head'>
        <h1 style={{ PaddingLeft: '40px'}}>Awards and Accolades</h1>
        <div>
        <p>Metropolis has been awarded and appreciated by several brands and institutions</p>
        </div>
        
      </div>
      <div>
        <Rewards />
      </div>
    </div>
  )
}

export default Awards
