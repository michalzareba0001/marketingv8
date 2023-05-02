import React, { useState, useEffect } from 'react'
import './CounterUno.css'

function CounterUno() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (count >= 160) {
        clearInterval(interval)
      } else {
        setCount(count + 1)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [count])

  const formatCount = (value) => {
    return `$${value}m`
  }

  return (
    <div className='counter-uno-div'>
      <span className='counter-uno-span'>
        {formatCount(count)}
      </span>
    </div>
  )
}

export default CounterUno
