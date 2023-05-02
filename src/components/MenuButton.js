import React from 'react'
import './MenuButton.css'

function MenuButton() {
    let clicked = () =>{
        console.log('menu kliknięte')
        let barOne = document.querySelector('.barOne')
        let barTwo = document.querySelector('.barTwo')

        if (barOne.classList.contains('barOne-active') || barTwo.classList.contains('barTwo-active')){
            barOne.classList.remove('barOne-active')
            barTwo.classList.remove('barTwo-active')
        }
        else{
            barOne.classList.add('barOne-active');
            barTwo.classList.add('barTwo-active');
        }
    }

  return (
    <div className='hamburgerButton' onClick={clicked}>
        <span className='barOne'></span>
        <span className='barTwo'></span>
    </div>
  )
}

export default MenuButton