import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';

function Package() {
  return (
    <DropdownButton id="Upper-section-green-section-dropdown-button-nav" title="Truehealth Packages">
      <Dropdown.Item href="/truepackage/Card">Truhealth Screen</Dropdown.Item>
      <Dropdown.Item href="#/action-2">TruHealth Plus</Dropdown.Item>
      <Dropdown.Item href="#/action-3">TruHealth Youth</Dropdown.Item>
      <Dropdown.Item href="#/action-1">TruHealth Master</Dropdown.Item>
      <Dropdown.Item href="#/action-2">TruHealth Senior</Dropdown.Item>
      <Dropdown.Item href="#/action-3">TruHealth SmartWoman</Dropdown.Item>
      <Link to="/truepackage"><button className='drop-section-button'>View All</button></Link>
    </DropdownButton>
    
  );
}

export default Package;