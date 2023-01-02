import React from 'react'

const About = () => {
  return (
    <div>
       <div className='Content-truehealth'>
           <button>Home</button>
           <button>About Us</button>
       </div>
         
    <div className='About-container'>
       <div className='About-container-Aboutus-top'>
       <a href='#' className='link1'>About</a>
        <a href='#' className='link2' >The Brand</a>
        <a href='#' className='link3'>Team</a>
        <a href='#' className='link4' >Services</a>
        <a href='#' className='link5' >Quality Assurance</a>
        <a href='#' className='link6' >CSR</a>
       </div>
       <h1>About Us</h1>
       <div className='About-container-Aboutus-top-1'>
        <div>
        <p>Metropolis Healthcare Limited is one of leading and renowned Indian diagnostics companies. The Company owns a chain of diagnostic centres across India, South Asia, Africa and the Middle East.<br /> Over the years, Metropolis has carved a niche for itself.</p>
        <p>The Company enjoys a loyal customer base, reflecting its strength as a brand offering superior diagnostic tests and services.</p>
        <p>With its widespread operational network, Metropolis offers a comprehensive range of clinical laboratory tests and profiles. These tests and profiles are used for prediction, early detection, diagnostic screening, confirmation and/or monitoring of the disease.</p>
        <p>Metropolis plays a pivotal role in raising the bar of diagnostic accuracy, technological equipment, customer experience and research-driven empathetic service in the industry.</p>
        </div>
        <div>
            <img className='About-image' src='https://www.metropolisindia.com/newdata/images/about-1.png' />
        </div>
       </div>

       <div className='About-container-Aboutus-top-2'>
         <div className='About-container-Aboutus-top-2-inside'>
         <div>
         <img src='https://www.metropolisindia.com/newdata/images/group-169.svg' />
          <h6>1500+</h6>
          <p>Collection Centers</p>
         </div>
         <div>
         <img src='https://www.metropolisindia.com/newdata/images/group-169.svg' />
          <h6>125+</h6>
          <p>Laboratories</p>
         </div>
         </div>
         
         <div className='About-container-Aboutus-top-2-inside'>
         <div>
         <img src='https://www.metropolisindia.com/newdata/images/group-169.svg' />
          <h6>1500+</h6>
          <p>Collection Centers</p>
         </div>
         <div>
         <img src='https://www.metropolisindia.com/newdata/images/group-169.svg' />
          <h6>125+</h6>
          <p>Laboratories</p>
         </div>
         </div>

         <div className=''>

         </div>
         
       </div>
       </div>
    </div>
  )
}

export default About
