import React from 'react'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import Drop from './bootstrap/Dropdown';
import { Button } from 'react-bootstrap';


const Top = () => {
  return (
    <div className='top-section'>
      <img className='top-image' src='https://www.metropolisindia.com/newdata/images/logo.svg' alt='#' />

      <div className='top-section-input'>
      <Button className='location'>Mumbai</Button>
      <input className='input_search' typeof='text' placeholder='Search for tests and checkups' />
      </div>

      <div className='whatsapp'><WhatsAppIcon /></div>
      
      
     <div className='top-section-customercare'>
      <p>Customer Care</p>
      <p>8422-801-801</p>
      </div>
      
      <div className='callback'><PhoneCallbackIcon /></div>


      <div className='top-section-callback'>
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
