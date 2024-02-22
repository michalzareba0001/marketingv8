import React from 'react'
import './BlueButtonWhiteBg.css'

function BlueButtonWhiteBg(props) {
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
    <button className='blue-button-white-bg' onClick={handleArrowClick}>
        <span className='button-text-white-bg'>{props.text}</span>
    </button>
    </a>
  )
}

export default BlueButtonWhiteBg