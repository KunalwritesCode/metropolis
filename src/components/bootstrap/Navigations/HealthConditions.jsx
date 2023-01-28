import React from 'react'

const HealthConditions = () => {
  return (
    <div>
      <div className='Content-truehealth'>
           <button>Home</button>
           <button>Health Conditions</button>
       </div>

       <div className='Healthrisk-container'>
        <h2>Health Conditions</h2>
      

       <div className='Healthrisk-container-inside'>
          <div>
            <div className='Healthrisk-container-inside-card'>
              <div>
              <img src='https://www.metropolisindia.com/newdata/images/04_07_2022_04_57_01_31.png' />
              </div>
              <div>
                <a href='/healthconditions/alcoholism'><h6>Alcoholism</h6></a>
                <p>Tests: 8</p>
              </div>
            </div>

            <div className='Healthrisk-container-inside-card'>
              <div>
              <img src='https://www.metropolisindia.com/newdata/images/04_07_2022_05_02_51_33.png' />
              </div>
              <div>
                <h6>Hearburn</h6>
                <p>Tests: 8</p>
              </div>
            </div>
            
           


            
          </div>
          <div>
          <div>
            <div className='Healthrisk-container-inside-card'>
              <div>
              <img src='https://www.metropolisindia.com/newdata/images/04_07_2022_04_58_06_82.png' />
              </div>
              <div>
                <h6>Anger</h6>
                <p>Tests: 6</p>
              </div>
            </div>
            <div className='Healthrisk-container-inside-card'>
              <div>
              <img src='https://www.metropolisindia.com/newdata/images/04_07_2022_05_05_11_29.png' />
              </div>
              <div>
                <h6>Medicine Overuse</h6>
                <p>Tests: 7</p>
              </div>
            </div>
            
          </div>
          </div>
          <div>
          <div>
            <div className='Healthrisk-container-inside-card'>
              <div>
              <img src='https://www.metropolisindia.com/newdata/images/04_07_2022_05_01_55_66.png' />
              </div>
              <div>
                <h6>Eating Poorly</h6>
                <p>Tests: 7</p>
              </div>
            </div>

            

          </div>
          </div>
       </div> 
       </div>

    </div>
  )
}

export default HealthConditions
