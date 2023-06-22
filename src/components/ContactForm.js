import React, { useState } from 'react';
import DecoIco1 from '../images/svg/decoIco1.svg';
import DecoIco2 from '../images/svg/decoIco2.svg';
import DecoIco3 from '../images/svg/decoIco3.svg';
import BlueButton2 from './BlueButton2';

import './ContactForm.css';

function ContactForm() {
  const [companyName, setCompanyName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Wyślij dane do serwera
    const formData = {
      companyName,
      contactNumber,
      email,
    };

    fetch('http://localhost:3001/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Odpowiedź serwera:', data);
        // Wykonaj odpowiednie działania po wysłaniu formularza
      })
      .catch((error) => {
        console.error('Wystąpił błąd podczas wysyłania formularza:', error);
      });
  };

  return (
    <div>
      <form className='contact-form' onSubmit={handleSubmit}>
        <input
          className='contact-input'
          placeholder='Company name'
          value={companyName}
          onChange={handleCompanyNameChange}
        />
        <input
          className='contact-input'
          placeholder='Contact number'
          value={contactNumber}
          onChange={handleContactNumberChange}
        />
        <input
          className='contact-input'
          placeholder='E-mail'
          value={email}
          onChange={handleEmailChange}
        />
        <div className='deco-icons'>
          <img src={DecoIco1} alt='decoration icon' className='deco-icon' />
          <img src={DecoIco2} alt='decoration icon' className='deco-icon' />
          <img src={DecoIco3} alt='decoration icon' className='deco-icon' />
        </div>
        <div className='button-send'>
          <BlueButton2 text='Send' type='submit' />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
