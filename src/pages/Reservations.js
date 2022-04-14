import React, { useState } from 'react'
import ReserveModal from './ReserveModal'

function Reservations() {
  const [modalOpen, setModalOpen] = useState(false)
  const reservationsarray = [
    {
      id: 1,
      start_date: '2020-01-01',
      end_date: '2020-01-02',
      location: 'San Francisco',
      item: {
        id: 1,
        name: 'Vespa',
        description: 'A very nice Vespa',
        price: '100',
        image: 'https://media.istockphoto.com/photos/blue-scooter-with-white-background-picture-id1041315464?k=20&m=1041315464&s=612x612&w=0&h=ro2tosXYLDrBsKqKTioXdUKDah8DLdu2ggxK-ZZRRe8=',
      },
      user_id: 1,
    },
    {
      id: 2,
      start_date: '2020-01-01',
      end_date: '2020-01-02',
      location: 'San Francisco',
      item: {
        id: 2,
        name: 'Vespa',
        description: 'A very nice Vespa',
        price: '100',
        image: 'https://media.istockphoto.com/photos/blue-scooter-with-white-background-picture-id1041315464?k=20&m=1041315464&s=612x612&w=0&h=ro2tosXYLDrBsKqKTioXdUKDah8DLdu2ggxK-ZZRRe8=',
      },
      user_id: 1,
    },
    {
      id: 3,
      start_date: '2020-01-01',
      end_date: '2020-01-02',
      location: 'San Francisco',
      item: {
        id: 3,
        name: 'Vespa',
        description: 'A very nice Vespa',
        price: '100',
        image: 'https://media.istockphoto.com/photos/blue-scooter-with-white-background-picture-id1041315464?k=20&m=1041315464&s=612x612&w=0&h=ro2tosXYLDrBsKqKTioXdUKDah8DLdu2ggxK-ZZRRe8=',
      },
      user_id: 1,
    },
    {
      id: 4,
      start_date: '2020-01-01',
      end_date: '2020-01-02',
      location: 'San Francisco',
      item: {
        id: 4,
        name: 'Vespa',
        description: 'A very nice Vespa',
        price: '100',
        image: 'https://media.istockphoto.com/photos/blue-scooter-with-white-background-picture-id1041315464?k=20&m=1041315464&s=612x612&w=0&h=ro2tosXYLDrBsKqKTioXdUKDah8DLdu2ggxK-ZZRRe8=',
      },
      user_id: 1,
    }
  ]

  return (
    <div>
      <div>
        <h2>Reservations</h2>
      </div>
      <div>
        <ul className="d-flex flex-wrap">
          {reservationsarray.map(reservation => (
            <li className="list-group-item w-50 text-center border-0" key={reservation.id}>
              <div>
                <img src={reservation.item.image} alt={reservation.item.name} className="w-50" />
                <h3>{reservation.item.name}</h3>
                <p>{reservation.location}</p>
              <div className='d-flex w-75 justify-content-between mx-auto p-2'>
                <p>Start: {reservation.start_date}</p>
                <p>End: {reservation.end_date}</p>
              </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Book a reservation</button>
      </div>
      <ReserveModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default Reservations
