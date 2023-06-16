import React from 'react'
import './FooterBottomBar.css'
import Facebook from '../images/svg/facebook.svg'
import LinkedIn from '../images/svg/linkedin.svg'
import Instagram from '../images/svg/instagram.svg'
import Behance from '../images/svg/behance.svg'
import Clutch from '../images/svg/clutch.svg'

function FooterBottomBar() {
    return (
        <div className='bottom-bar-container'>
            <div className='col-one'>
                <img src={Facebook} alt='facebook icon' />
                <img src={LinkedIn} alt='linkedin icon' />
                <img src={Instagram} alt='instagram icon' />
                <img src={Behance} alt='behance icon' />
                <img src={Clutch} alt='clutch icon' />

            </div>
            <div className='col-two'>
                <a href='#' className='gray-link'>Privacy Policy</a>
                <a href='#' className='gray-link'>Cookie Policy</a>
                <a href='#' className='gray-link'>Cookie Settings</a> 

            </div>
            <div className='col-three'>
                <p>©2023 Marketing V8. All rights reserved.</p>

            </div>
        </div>

    )
}

export default FooterBottomBar