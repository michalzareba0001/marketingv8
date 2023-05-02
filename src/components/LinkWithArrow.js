import React from 'react'
import BlueArrow from '../images/svg/bluearrow.svg'
import './LinkWithArrow.css'

function LinkWithArrow(props) {
    return (
        <div className='link-with-arrow'>
            <a href={props.href}>
            <span>{props.text}</span><img src={BlueArrow} alt='blue arrow' />
            </a></div>
    )
}

export default LinkWithArrow