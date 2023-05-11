import React from 'react'
import './Kafel.css'

function Kafel(props) {
  return (
    <div className='kafel-div'>
        
            <img src={props.ico} alt='ikona dekoracyjna' />
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        

    </div>
  )
}

export default Kafel