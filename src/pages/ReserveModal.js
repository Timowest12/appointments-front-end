import React, { useState } from 'react'
import ReactDom from 'react-dom'

const ReserveModal = ({ open, onClose }) => {
    const [reserve, setReserve] = useState({
        start_date: new Date(),
        end_date: new Date(),
        location: '',
        item: '',
        user_id: '',
    })

    const handleChange = (e) => {
        setReserve({
            ...reserve,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(reserve)
        onClose()
    }

  if (!open) return null

  return ReactDom.createPortal(
    <>
    <div className="high-ind">
        <div className="modal-card text-center">
            <header className="modal-card-head">
                <h2 className="modal-card-title">Book a Scooter for test drive</h2>
            </header>
            <hr />
            <section className="modal-card-body mb-3">
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                </div>
                <div className="dates d-flex mx-auto justify-content-between">
                <div className="field">
                    <label className="label">Start Date</label>
                    <div className="control">
                        <input className="reserve-input" name='start_date' type="date" value={reserve.start_date} onChange={handleChange} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">End Date</label>
                    <div className="control">
                        <input className="reserve-input" name='end_date' type="date" value={reserve.end_date} onChange={handleChange} />
                    </div>
                </div>
                </div>
                <div className="field">
                    <label className="label">Location</label>
                    <div className="control">
                        <input className="reserve-input" type="text" name='location' value={reserve.location} onChange={handleChange} />
                    </div>
                </div>
            </section>
            <footer className="modal-card-foot">
                <button className="button-success" onClick={handleSubmit}>Add Reservation</button>
                <button className="button-close" onClick={onClose}>Cancel</button>
            </footer>
        </div>
    </div>
    </>,
    document.getElementById('portal')
  )
}

export default ReserveModal