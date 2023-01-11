import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Blood() {
  return (
    <DropdownButton id="Upper-section-green-section-dropdown-button-nav" title="Blood Test">
      <Dropdown.Item href="#/action-1">Food Intolerance Test</Dropdown.Item>
      <Dropdown.Item href="#/action-2">CBC test</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Lipid Profile Test</Dropdown.Item>
      <Dropdown.Item href="#/action-1">Allergy Panel Test</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Vitamin D Blood Test</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Thyroid Test</Dropdown.Item>
      <button className='drop-section-button'>View All</button>
    </DropdownButton>
    
  );
}

export default Blood;