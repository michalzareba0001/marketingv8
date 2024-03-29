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

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Wyślij dane do serwera
  //   const formData = {
  //     companyName,
  //     contactNumber,
  //     email,
  //   };
  
    // const httpsAgent = new https.Agent({
    //   rejectUnauthorized: false,
    // });
    const handleSubmit = (e) => {
      e.preventDefault();
      
      const fd = new FormData();
      fd.append('email', email);
      fd.append('Company Name', companyName);
      fd.append('Contact Number', contactNumber);
  
      // const formData = [
      //   email
      // ];
  
      fetch('https://marketingv8.co/contact.php', {
        mode: 'no-cors',
        method: 'POST',
        data: fd, 
        body: fd
      })

      .then((response) => response.json())
      .then((data) => {
        console.log('Odpowiedź serwera:', data.error);
        // Wykonaj odpowiednie działania po wysłaniu formularza
        alert('Formularz został wysłany');
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
