import React from 'react'
import './LogoBrick.css'

function LogoBrick(props) {
  return (
    <div className='logo-brick'>
        <img src={props.src} alt={props.alt} />

    </div>
  )
}

export default LogoBrick