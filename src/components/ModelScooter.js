import React from 'react'

function ModelScooter(props) {
  return (
    <div className='ModelScooterBlock'>
        <img className='ModelScooterBlockImg' src={props.imgurl} alt={props.title} />
        <h3>{props.title}</h3>
        <p className='ModelScooterBlockDescription'>{props.description}</p>
    </div>
  )
}

export default ModelScooter