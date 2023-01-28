import React from 'react'
import { masterTestdata } from '../json/masterTest'

const HeartTest = () => {
  return (
    <div>
    
       <div className='Content-truehealth'>
           <button>Home</button>
           <button>Health Risk</button>
           <button>Heart</button>
       </div>
       <div className='Heart-container-top'>
       <div>
        <img src="https://www.metropolisindia.com/newdata/images/04_07_2022_04_00_48_18.png" />
       </div>
       <div>
        <h2>Heart Test</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was populari</p>
       
       </div>

       </div>

       <div className='Heart-container-mid'>
        <div className='Heart-container-mid-1'>
            <p>Tests: 9</p>
        </div>
      

       </div>
      
    
    <div className="row Heart-container-mid-22">
    {masterTestdata.map((task) => (
    <div className='col-lg-3 Heart-container-mid-2'>
        <div className='Heart-container-mid-2-inside'>
            <div className='Heart-container-mid-2-inside-card'>
                <h3>{task.name}</h3>
                <span>{task.price}</span>
                <p>Includes : 1 Parameters</p>
                <button>Add to Cart</button>
            </div>
          </div>
        </div>
        ))}</div>
        </div>
    
  )
}

export default HeartTest
