import React, { useState, useEffect } from 'react'
import './CounterUno.css'

function CounterDos() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (count >= 19000) {
        clearInterval(interval)
      } else {
        setCount(count + 11)
      }
    }, 10)
    return () => clearInterval(interval)
  }, [count])

  const formatCount = (value) => {
    return value >= 19000 ? "19k+" : `${value}`
  }

  return (
    <div className='counter-uno-div'>
      <span className='counter-uno-span'>
        {formatCount(count)}
      </span>
    </div>
  )
}

export default CounterDos
