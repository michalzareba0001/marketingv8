import React from 'react'
import './GrowYourBusiness.css'
import CounterUno from './CounterUno'
import CounterDos from './CounterDos'
import CounterTrees from './CounterTrees'
import InfinityAnimation from './InfinityAnimation'

function GrowYourBusiness() {
  return (
    <div className='main-container grow-your-business-anchor'>
      <div className='content-container'>
        <p className='small-text'>
          Working with us is not a cost. It’s an investment to your business growth.
        </p>
        <h3 className='first-title'>
          Grow your business<br />
          with effective and proven<br />
          ways to acquire customers.
        </h3>
        <div className='counters'>
          <div className='counter1'>
            <hr className='thin-line' />
            <CounterUno />

            <p className='counter-description'>
              Our numbers speak for us.<br />
              160 million, reported customer<br />
              revenues annually.
            </p>
          </div>
          <div className='counter2'>
            <hr className='thin-line' />
            <CounterDos />

            <p className='counter-description'>
              We have a database of over 19 000<br />
              satisfied customers from all over<br />
              the world, and it is constantly growing.
            </p>
          </div>
          <div className='counter3'>
            <hr className='thin-line' />
            <CounterTrees />

            <p className='counter-description'>
              We help growth<br />
              customers businesses<br />
              in over 36 different countries.
            </p>
          </div>
          <div className='counter4'>
            <hr className='thin-line' />
            <InfinityAnimation />

            <p className='counter-description'>
              Possibilities for your<br/>
              business when you<br/>
              partner with us.
            </p>
          </div>

        </div>

      </div>


    </div >
  )
}

export default GrowYourBusiness