import React, { useState, useEffect } from 'react'
import './CounterUno.css'

function CounterUno() {
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
    if (isVisible) {
      const interval = setInterval(() => {
        if (count >= 160) {
          clearInterval(interval)
        } else {
          setCount(count + 1)
        }
      }, 10)
      return () => clearInterval(interval)
    }
  }, [count, isVisible])

  return (
    <div className='counter-uno-div'>
      <span className='counter-uno-span'>
        ${count}m
      </span>
    </div>
  )
}

export default CounterUno