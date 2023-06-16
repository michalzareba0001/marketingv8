import React from 'react'
import './BlueButtonLong.css'

function BlueButtonLong(props) {
  return (
    <a href={props.href}>
    <button className='blue-button-long'>
        <span className='button-text-long'>{props.text}</span>
    </button>
    </a>
  )
}

export default BlueButtonLong