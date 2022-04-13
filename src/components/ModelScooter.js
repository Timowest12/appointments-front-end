import React from 'react'

function ModelScooter(props) {
  return (
    <a className='ModelScooterBlock' href={`details/${props.prodId}`}>
        <img className='ModelScooterBlockImg' src={props.imgurl} alt={props.title} />
        <h3>{props.title}</h3>
        <p className='ModelScooterBlockDescription'>{props.description}</p>
    </a>
  )
}

export default ModelScooter