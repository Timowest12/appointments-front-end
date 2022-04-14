import React from 'react'
import ReactDom from 'react-dom'

const ReserveModal = ({ open, onClose }) => {
  if (!open) return null

  return ReactDom.createPortal(
    <>
    <div className="high-ind">
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">Book a Scooter for test drive</p>
                <button className="delete" aria-label="close" onClick={onClose} />
            </header>
            <section className="modal-card-body">
                testing
            </section>
            <footer className="modal-card-foot">
                <button className="button is-success">Save changes</button>
                <button className="button">Cancel</button>
            </footer>
        </div>
    </div>
    </>,
    document.getElementById('portal')
  )
}

export default ReserveModal