import React from 'react'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import Drop from './bootstrap/Dropdown';
import { Button } from 'react-bootstrap';


const Top = () => {
  return (
    <div className='Upper-section-green-section'>
     <a href='/'><img className='Upper-section-green-section-image' src='https://i.ibb.co/Jvsb5KF/Achinlogo.png' alt='#' /></a> 

      <div className='Upper-section-green-section-input'>
      <Button id='Upper-section-green-section-location'>Mumbai</Button>
      <input className='Upper-section-green-section-input_search' typeof='text' placeholder='Search for tests and checkups' />
      </div>

      <div className='Upper-section-green-section-whatsapp'><WhatsAppIcon fontSize='large' /></div>
      
      
     <div className='Upper-section-green-section-customercare'>
      <p>Customer Care</p>
      <p>8422-801-801</p>
      </div>
      
      <div className='Upper-section-green-section-Phonecallback'><PhoneCallbackIcon fontSize='large' /></div>


      <div className='Upper-section-green-section-callback'>
       <p>Home Visit Booking</p>
       <p>9982-782-555</p>
      </div>

      <div>
        <Drop />
     </div>
    


    </div>
  )
}

export default Top
