import React from 'react';
import Card from 'react-bootstrap/Card';

function NewsCard1() {
  return (
    <div className="News-image">
    <Card >
      <Card.Img style={{width :'330px'}} variant="top" src="https://www.metropolisindia.com/blog/wp-content/uploads/2022/12/13-Strategies-To-Manage-Childhood-Diabetes.jpg" />
      <Card.Body>
       <p style={{fontSize : 'medium'}}>December 06,2022</p>
        <Card.Title style={{fontSize : 'medium'}}>13 Strategies to manage Childhood Diabetes</Card.Title>
        <a href="#" style={{fontSize : 'medium'}} className ='News-Card-Link'>Read More</a>
        
      </Card.Body>
    </Card>
 
  </div> );

}

export default NewsCard1;