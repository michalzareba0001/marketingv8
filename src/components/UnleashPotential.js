import React from 'react'
import './UnleashPotential.css'
import BlueButton from './BlueButton'
import BlueButton2 from './BlueButton2'
import FiveStars from '../images/svg/5stars.svg'


function UnleashPotential() {
  return (
    <div className='unleash-potential-main'>
      <h3>Unleash your business potential <br />
        with us and go beyond.</h3>
      <div className='button-div'>
        <BlueButton2
          href ="tel:+48535959510"
          text='Let’s Talk'
        />
      </div>
      <p>Join our satisfied clients and go beyond with us.</p>
      <div className='stars-section'>
        <div className='col-one'>
          <img src={FiveStars} alt='Five Stars' />
          <p>
            “Many years of our cooperation bear fruit <br />
            very good results of my company.”
          </p>
        </div>
        <div className='col-two'>
          <img src={FiveStars} alt='Five Stars' />
          <p>
            “Effectively coordinatedand<br/>
             professional team"

          </p>


        </div>
        <div className='col-three'>
          <img src={FiveStars} alt='Five Stars' />
          <p>
            “High level of service helps me grow<br/>
            the company on a scale of 20-30% per year”
          </p>


        </div>
      </div>
    </div>
  )
}

export default UnleashPotential