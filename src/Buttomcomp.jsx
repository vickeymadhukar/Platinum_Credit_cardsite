import React from 'react'
import './App.css'
const Buttomcomp = (props) => {
  return (
    <div>
      <button className='Button-con'>
       {props.text}
      </button>
    </div>
  )
}

export default Buttomcomp
