import React from 'react'
import './header.css'
import Logo from '../images/svg/v8logo.svg'
import BlueButton from './BlueButton'

function Header() {
  return (
    <div className='header-main'>
        <div className='col-one'>
            <div className='v8logo'>
              <a href='./index.html'>
                <img src={Logo} alt='v8logo' className='v8logo-svg' />
              </a>
            </div>
        </div>
        <div className='col-two'>
            
            <BlueButton
            href = 'tel:+48535959510'
            text = 'Talk with Boss'
            />

        </div>
       

    </div>
  )
}

export default Header