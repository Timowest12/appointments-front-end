import React from 'react'
import { Link } from 'react-router-dom'

function ModelScooter(props) {
  return (
    <Link to={`/details/${props.prodId}`}>
    <div className='ModelScooterBlock'>
        <img className='ModelScooterBlockImg' src={props.imgurl} alt={props.title} />
        <h3>{props.title}</h3>
        <p className='ModelScooterBlockDescription'>{props.description}</p>
    </div>
    </Link>
  )
}

export default ModelScooter