import React, { useState, useEffect } from 'react'
import './CounterUno.css'

function CounterTrees() {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const element = document.querySelector('.grow-your-business-anchor')
      const rect = element.getBoundingClientRect()
      setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (count >= 36) {
        clearInterval(interval)
      } else {
        setCount(count + 1)
      }
    }, 250)
    return () => clearInterval(interval)
  }, [count], isVisible)

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
