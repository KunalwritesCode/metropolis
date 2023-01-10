import React from 'react'
import { Link } from 'react-router-dom';
import PlaceIcon from '@mui/icons-material/Place';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Navigation = () => {
  return (
    <div className='Upper-section-navigation'>

    <div className='Upper-section-navigation-button1'>
    <Link  to="/healthrisk" className='Upper-section-navigation-buttons' >Health Risk</Link>
    <button className='Upper-section-navigation-buttons'></button>
     </div>
    
    <div className='Upper-section-navigation-button2'>
    <Link to="/healtconditions" className='Upper-section-navigation-buttons' >Health Conditions</Link>
    <button className='Upper-section-navigation-buttons'></button>
     </div>
    
    <div className='Upper-section-navigation-button3'>
    <Link  to="/healthrisk" className='Upper-section-navigation-buttons' >Blood Test</Link>
    <button className='Upper-section-navigation-buttons'></button>
     </div>
   
    <div className='Upper-section-navigation-button4'>
    <Link  to="/healthrisk" className='Upper-section-navigation-buttons' >Truehealth Packages</Link>
    <button className='Upper-section-navigation-buttons'></button>
     </div>
   
    <img className='Upper-section-navigation-house-image' src='https://www.metropolisindia.com/newdata/images/book_home_visit.svg' alt='#' />
   
    <div className='Upper-section-navigation-house'>
         Home Visit
    </div>
   
    <img className='Upper-section-navigation-Rlogo' src='https://www.metropolisindia.com/newdata/images/uploadprescription_w.svg' alt='#' />
   
    <div className='Upper-section-navigation-rx'>
        Upload
    </div>
     <PlaceIcon className='Upper-section-navigation-icon' fontSize='large' />
    <div className='Upper-section-navigation-right-section'>
       Sample Tracking
    </div>
    <SimCardDownloadIcon className='Upper-section-navigation-icon' fontSize='large' />
    <div className='Upper-section-navigation-right-section'>
        Download Report
    </div>
    <PersonOutlineIcon className='Upper-section-navigation-icon'fontSize='large' />
    <div className='Upper-section-navigation-right-section' >Login</div>
      <ShoppingCartIcon className='Upper-section-navigation-icon'fontSize='large' />
    </div>
  )
}

export default Navigation
