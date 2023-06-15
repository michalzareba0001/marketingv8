import React from 'react'
import './BlueButton2.css'

function BlueButton2(props) {
  return (
    <a href={props.href}>
    <button className='blue-button2'>
        <span className='button-text2'>{props.text}</span>
    </button>
    </a>
  )
}

export default BlueButton2