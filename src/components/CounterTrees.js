import React, { useState, useEffect } from 'react'
import './CounterUno.css'

function CounterTrees() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (count >= 36) {
        clearInterval(interval)
      } else {
        setCount(count + 1)
      }
    }, 250)
    return () => clearInterval(interval)
  }, [count])

  const formatCount = (value) => {
    return value >= 36 ? "36+" : `${value}`
  }

  return (
    <div className='counter-uno-div'>
      <span className='counter-uno-span'>
        {formatCount(count)}
      </span>
    </div>
  )
}

export default CounterTrees
