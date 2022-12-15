import React from 'react';
import Card from 'react-bootstrap/Card';

function NewsCard2() {
  return (
    <div className="News-image">
    <Card className='News-Image' >
      <Card.Img style={{width :'325px'}} variant="top" src="https://www.metropolisindia.com/blog/wp-content/uploads/2022/11/PSA-Prostate-Specific-Antigen-Tests_-What-You-Should-Know.jpg" />
      <Card.Body>
       <p style={{fontSize : 'medium'}}>December 06,2022</p>
        <Card.Title style={{fontSize : 'medium'}}>13 Strategies to manage Childhood Diabetes</Card.Title>
        <Card.Link style={{fontSize : 'medium'}} href="#" className ='News-Card-Link'>Read More</Card.Link>
        
      </Card.Body>
    </Card>
    </div>
  );
}

export default NewsCard2;