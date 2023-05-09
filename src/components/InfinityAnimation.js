import React from 'react'
import './InfinityAnimation.css'
import Infinity from '../images/svg/infinity.svg' 

function InfinityAnimation() {
  return (
    <div className='infinity-div'>
        <span className='infinity-span'>
            <img src={Infinity} className='infinity' alt='infinity sign' /> 
        </span>
    </div>
  )
}

export default InfinityAnimation