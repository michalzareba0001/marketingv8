import React from 'react'
import './BlueButton.css'

function BlueButton(props) {
  return (
    <a href={props.href}>
    <button className='blue-button'>
        <span className='button-text'>{props.text}</span>
    </button>
    </a>
  )
}

export default BlueButton