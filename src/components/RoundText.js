import React from 'react'
import TextSvg from '../images/svg/becomeOurPrestigeCustomer.svg'
import ArrowSvg from '../images/svg/arrowRight.svg'
import './RoundText.css'
import { Link } from 'react-scroll'


function RoundText(props) {
  return (
    <div className='round-text'>
      <Link to='contact-form' smooth={true} duration={1000}>
        <img src={TextSvg} className='text-svg' style={{ height: `${props.height}` }} alt='become our prestige customer' />
        <img src={ArrowSvg} className='arrow-svg' style={{ width: `${props.arrwidth}` }} alt='arrow right' />
      </Link>
    </div>
  )
}

export default RoundText