import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';

function HealthConsitions() {
  return (
    <DropdownButton id="Upper-section-green-section-dropdown-button-nav" title="Health Conditions">
      <Dropdown.Item href="/healthconditions/alcoholism">Alcohol</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Anger</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Eating Poorly</Dropdown.Item>
      <Dropdown.Item href="#/action-1">Hearburn</Dropdown.Item>
      
      <Link to="/healthconditions"><button className='drop-section-button'>View All</button></Link>
    </DropdownButton>
    
  );
}

export default HealthConsitions;