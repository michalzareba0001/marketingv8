import React from 'react'
import Adobe from '../images/svg/adobe.svg'
import Forbes from '../images/svg/forbes.svg'
import Meta from '../images/svg/meta.svg'
import Clutch from '../images/svg/Clutch.svg'
import GoogleP from '../images/svg/googlepartner.svg'
import './Partners.css'


function Partners() {
  return (
    <div className='partners-container'>
        <img src={Forbes} alt='forbes logo' />
        <img src={Meta} alt='meta logo' />
        <img src={Clutch} alt='clutch logo'/>
        <img src={GoogleP} alt='google partner logo'/>
        <img src={Adobe} alt='adobe logo' />
    </div>
    
  )
}

export default Partners