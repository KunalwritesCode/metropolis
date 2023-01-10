import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className='Upper-section-navbar'>
      <div className='Upper-section-navbar-side'>

      <Link to="/aboutus" > About</Link> 
      <Link to="/aboutus" > Customers </Link> 
      <Link to="/doctors" > Doctors </Link> 
      <Link to="/partners" > Partners</Link> 
      <Link to="/corporate" > Corporate </Link> 
        
        </div>
        <a href='#'>Truehealth Blog</a>
    </nav>
      
           
        
    </div>
  )
}

export default NavBar
