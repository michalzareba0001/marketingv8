import React from 'react';
import TextSvg from '../images/svg/becomeOurPrestigeCustomer.svg';
import ArrowSvg from '../images/svg/arrowRight.svg';
import './RoundText.css';

function RoundText(props) {
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
    <div className='round-text'>
      <img src={TextSvg} className='text-svg' style={{ height: `${props.height}` }} alt='become our prestige customer' />
      <img src={ArrowSvg} className='arrow-svg' style={{ width: `${props.arrwidth}` }} alt='arrow right' onClick={handleArrowClick} />
    </div>
  );
}

export default RoundText;
