import React from 'react'
import { Link } from 'react-router-dom';
import PlaceIcon from '@mui/icons-material/Place';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Healthrisk from './Megamenu/Healthrisk';
import HealthConsitions from './Megamenu/HealthConditionsdrop';
import Package from './Megamenu/Package';
import Blood from './Megamenu/Blood';

const Navigation = () => {
  return (
    <div className='Upper-section-navigation'>

    <div className='Upper-section-navigation-button1'>
    <Healthrisk />
    
     </div>
    
    <div className='Upper-section-navigation-button2'>
    <HealthConsitions />
    
     </div>
    
    <div className='Upper-section-navigation-button3'>
    <Blood />
    
     </div>
   
    <div className='Upper-section-navigation-button4'>
    <Package />
    
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
