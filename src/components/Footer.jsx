import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='Footer-section'>
      <div className='Footer-section-top'>
       <h1>About Metropolis</h1>
       <p>Book a blood test or expert health check-up packages online with Metropolis Healthcare - one of the leading diagnostic service provider in India. Get quality reports trusted by leading doctors and hospitals from our NABL and CAP certified labs of Metropolis.</p>
       <p>One can either visit our nearest Metropolis lab to give your blood sample or opt for blood collection at home service, so that you can get all the benefits of diagnostic centre and pathology labs in the comfort of your home.</p>
       <p>With a certified team of 200 senior pathologists and over 2000 technicians we, provide diagnostic services ranging from routine to semi speciality tests like oncology, neurology, gynaecology, nephrology to complete health check-up packages for Men, Women, Senior Citizens, Youth & Corporates.</p>
        <div className='Footer-section-top-Link'><a className='News-Card-Link' href="#" style={{fontSize : 'medium'}} >Read More</a></div>
      </div>
      <hr />

      <div className='Footer-section-container-card'>
     
      <div>
         <h3>Company</h3> 
          <div className='Footer-section-container'>
            
            <div className='Footer-section-container-1'>
                <a className='Footer-link' href='#' >About US</a>
                <a className='Footer-link' href='#' >Investors</a>
                <a className='Footer-link' href='#' >Our Labs</a>
                <a className='Footer-link' href='#' >Partners</a>
            </div>
            <div className='Footer-section-container-2'>
                <a className='Footer-link' href='#' >Corporates</a>
                <a className='Footer-link' href='#' >CSR</a>
                <a className='Footer-link' href='#' >Media Center</a>
                <a className='Footer-link' href='#' >Testimonials</a>
            </div>
         </div>
        </div>

        <div className='Footer-section-container-card-1'>
         <h3>Patients</h3> 
          <div className='Footer-section-container'>
            
            <div className='Footer-section-container-1'>
                <a className='Footer-link' href='#' >Center Locator</a>
                <a className='Footer-link' href='#' >Covid 19 Test Center</a>
                <a className='Footer-link' href='#' >Book Home Visit</a>
                <a className='Footer-link' href='#' >Truehealth Packages</a>
            </div>
            <div className='Footer-section-container-2'>
                <a className='Footer-link' href='#' >Truhealth Blogs</a>
                <a className='Footer-link' href='#' >Mobile App</a>
                <a className='Footer-link' href='#' >Labs</a>
                
            </div>
         </div>
        </div>

        <div className='Footer-section-container-card-2'>
         <h3>Services</h3> 
          <div className='Footer-section-container'>
            
            <div className='Footer-section-container-1'>
                <a className='Footer-link' href='#' >Pathalogy Testing Services</a>
                <a className='Footer-link' href='#' >Corporate Wellness</a>
                <a className='Footer-link' href='#' >Lab In Hospitals</a>
                <a className='Footer-link' href='#' >Clinical Research Services</a>
            </div>
            
         </div>
        </div>

        <div className='Footer-section-container-card-3'>
         <h3>Doctors</h3> 
          <div className='Footer-section-container'>
            
            <div className='Footer-section-container-1'>
                <a className='Footer-link' href='#' >MetroSpheres</a>
                <a className='Footer-link' href='#' >Refer Patient To Lab</a>
              
            </div>
            
         </div>
        </div>

        <div className='Footer-section-container-card-3'>
         <h3>Services</h3> 
          <div className='Footer-section-container'>
            
            <div className='Footer-section-container-1'>
                <a className='Footer-link' href='#' >Contact Us</a>
                <a className='Footer-link' href='#' >Sitemap</a>
              
            </div>
            
         </div>
        </div>
        </div>

        <hr />

        <div className='footer-section-subcribe'>
           <div>
            <h2>Download App</h2>
            <div className='footer-section-subcribe-get'>
                <img src='https://www.metropolisindia.com/newdata/images/google-play-badge.svg' alt='#' />
                <img src='https://www.metropolisindia.com/newdata/images/app-store-badge.svg' alt='#' />
            </div>
            <p>View your reports and upcoming health checkups at one place</p>
           </div>

            <div className='footer-section-subcribe-follow'>
                <div>
                <h2>Follow Us</h2>
                </div>
                <div>
                 <FacebookIcon className='footer-section-subcribe-follow-icon' style={{fontSize : '40px'}} />
                 <TwitterIcon className='footer-section-subcribe-follow-icon' style={{fontSize : '40px'}}/>
                 <InstagramIcon className='footer-section-subcribe-follow-icon' style={{fontSize : '40px'}} />
                 <LinkedInIcon className='footer-section-subcribe-follow-icon' style={{fontSize : '40px'}} />
                 <YouTubeIcon className='footer-section-subcribe-follow-icon' style={{fontSize : '40px'}} />

                </div>

            </div>

            <div className='footer-section-subcribe-Newsletter'>
                <div>
                    <h2>Subscribe Our NewsLetter</h2>
                </div>
                <div>
                <input typeof='text' placeholder='Enter Your Email' />
                <button>Submit</button>
            </div>
            </div>
        </div>
      </div>

  )
}

export default Footer
