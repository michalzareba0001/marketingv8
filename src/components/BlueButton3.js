import React from 'react'
import './BlueButton2.css'

function BlueButton3(props) {
    const handleArrowClick = () => {
        const contactPopup = document.querySelector('.contact-popup');
        if (contactPopup) {
          if(contactPopup.classList.contains('contact-popup-active')){
            contactPopup.classList.remove('contact-popup-active');
          }
          else{
            contactPopup.classList.add('contact-popup-active');
          }
        }
      };
    
  return (
    <a href={props.href}>
    <button className='blue-button2' onClick={handleArrowClick}>
        <span className='button-text2'>{props.text}</span>
    </button>
    </a>
  )
}

export default BlueButton3