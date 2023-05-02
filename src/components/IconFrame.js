import React from 'react'
import './IconFrame.css'

function IconFrame(props) {
    return (
        <div className='icon-frame' style={{ width: props.width }}>
            <img src={props.icon} className='icon-svg' alt='decoration icon' />
            <span className='icon-title'>{props.text}</span>
        </div>
    )
}

export default IconFrame