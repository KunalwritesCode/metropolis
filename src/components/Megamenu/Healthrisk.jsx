import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';

function Healthrisk() {
  return (
    <DropdownButton id="Upper-section-green-section-dropdown-button-nav" title="Healthrisk">
      <Dropdown.Item href="/healthrisk/heart">Heart</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Liver</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Kidney</Dropdown.Item>
      <Dropdown.Item href="#/action-1">Thyroid</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Bone</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Cancer</Dropdown.Item>
     <Link to='/healthrisk/viewall'><button className='drop-section-button'>View All</button></Link>
    </DropdownButton>
    
  );
}

export default Healthrisk;