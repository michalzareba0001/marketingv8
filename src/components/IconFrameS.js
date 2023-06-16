import React from 'react'
import './IconFrameS.css'

function IconFrameS(props) {
    return (
        <div className='icon-frame-s' style={{ width: props.width }}>
            <img src={props.icon} className='icon-svg-s' alt='decoration icon' />
            <span className='icon-title-s'>{props.text}</span>
        </div>
    )
}

export default IconFrameS