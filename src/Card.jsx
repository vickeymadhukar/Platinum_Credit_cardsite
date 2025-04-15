import React from 'react'
import './Cradstyle.css'
const Card = (props) => {
  return (
    <div className='card'>
      <div className="cardimg">
      
      </div>
      <div className="card-content">
        <h1>{props.head}</h1>
         <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Card
