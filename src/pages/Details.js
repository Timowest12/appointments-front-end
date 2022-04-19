import React from 'react';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function Details() {
  return (
    <Container>
      <div className="details-container">
        <div className="flex-direction">
        <div>
            <img className="thumbnail images rounded" src="https://images.carandbike.com/bike-images/large/bajaj/chetak/bajaj-chetak.jpg" alt="vacation house" />
          </div>
          <Card.Body>
            <div classNAme="details-text-container">
              
            </div>

          </Card.Body>
        </div>
      </div>
    </Container>
  );
}

export default Details;
