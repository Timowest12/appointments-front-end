import React from 'react';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../details.css'

function Details() {
  return (
    <Container>
      <div className="details-container">
        <div className="flex-direction">
        <div className="d-flex">
            <ul className="main-ul">
                <button>Models</button>
                <button>Lifestyle</button>
                <button>Shop</button>
                <button>Test Drive</button>
            </ul>
        </div>
        <div>
            <img className="thumbnail images rounded" src="https://images.carandbike.com/bike-images/large/bajaj/chetak/bajaj-chetak.jpg" alt="vacation house" />
          </div>
          <Card.Body>
            <div className="details-text-container">
              <div>
              <h3 className="text-dark">Scooter Name</h3>
              <p className="description my-4">Description</p>
              <p className="description">Scooter location</p>
              <p className="description">Scooter price</p>
              <div>
              </div>
              <button variant="success" className="btn-success theme-btn mt-4 rounded" size="lg" type="button">Reservation</button>

              </div>
            </div>

          </Card.Body>
        </div>
      </div>
    </Container>
  );
}

export default Details;
