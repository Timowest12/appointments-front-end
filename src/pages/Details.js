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
            <div className="details-text-container">
              <div>
              <h3 className="text-dark">Scooter Name</h3>
              <p className="description my-4">Description</p>
              <div>
                
              </div>

              </div>
            </div>

          </Card.Body>
        </div>
      </div>
    </Container>
  );
}

export default Details;
