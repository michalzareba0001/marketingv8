import React from 'react'
import TextSvg from '../images/svg/becomeOurPrestigeCustomer.svg'
import ArrowSvg from '../images/svg/arrowRight.svg'
import './RoundText.css'



function RoundText(props) {
  return (
    <div className='round-text'>

      <img src={TextSvg} className='text-svg' style={{ height: `${props.height}` }} alt='become our prestige customer' />
      <img src={ArrowSvg} className='arrow-svg' style={{ width: `${props.arrwidth}` }} alt='arrow right' />
    </div>
  )
}

export default RoundText