import React, { useState } from 'react';
import BlueButtonLong from './BlueButtonLong';
import './Newsletterform.css';

function Newsletterform() {


  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const fd = new FormData();
    fd.append('email', email);

    // const formData = [
    //   email
    // ];

    fetch('https://marketingv8.co/newsletter.php', {
      mode: 'no-cors',
      method: 'POST',
      data: fd, 
      body: fd
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Odpowiedź serwera:', data);
        // Wykonaj odpowiednie działania po wysłaniu formularza
        alert('Adres e-mail został wysłany');
      })
      .catch((error) => {
        console.error('Wystąpił błąd podczas wysyłania formularza:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className='newsletter-input'
          id='email'
          placeholder='Your e-mail'
          value={email}
          onChange={handleEmailChange}
        />
        <BlueButtonLong text='Get my free monthly advice' type='submit' />
      </form>
    </div>
  );
}

export default Newsletterform;
