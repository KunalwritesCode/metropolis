
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Drop() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Help and Support">
      <Dropdown.Item href="#/action-1">Contact us</Dropdown.Item>
      <Dropdown.Item href="#/action-2">FeedBack/Complaints</Dropdown.Item>
      <Dropdown.Item href="#/action-3">FaQ</Dropdown.Item>
    </DropdownButton>
  );
}

export default Drop;