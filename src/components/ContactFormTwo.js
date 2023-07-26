import React, { useState } from 'react';
import BlueButton2 from './BlueButton2';
import './ContactFormTwo.css';

function ContactFormTwo() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [whatSource, setWhatSource] = useState('');
    const [yourMessage, setYourMessage] = useState('');
    const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleContactNumberChange = (e) => {
        setContactNumber(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleWhatSourceChange = (e) => {
        setWhatSource(e.target.value);
    };

    const handleYourMessageChange = (e) => {
        setYourMessage(e.target.value);
    };

    const handlePrivacyPolicyChange = (e) => {
        setPrivacyPolicyAccepted(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !yourMessage) {
            alert('Prosimy wypełnić wszystkie obowiązkowe pola formularza.');
            return;
        }

        if (!privacyPolicyAccepted) {
            alert('Prosimy zaakceptować Politykę prywatności i pliki cookie przed wysłaniem formularza.');
            return;
        }

        const fd = new FormData();
        fd.append('firstName', firstName);
        fd.append('lastName', lastName);
        fd.append('email', email);
        fd.append('ContactNumber', contactNumber);
        fd.append('whatSource', whatSource);
        fd.append('yourMessage', yourMessage);

        fetch('https://marketingv8.co/contact.php', {
            method: 'POST',
            body: fd,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Wystąpił błąd podczas wysyłania formularza');
                }
                return response.json();
            })
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
        <div className='contact-form-main-container'>
            <div className='contact-left'>

            </div>
            <div className='contact-right'>
                <form className='contact-form-two' onSubmit={handleSubmit}>
                    <div className='contact-tittle-div'>
                        <h2 className='contact-title'>Send us a message</h2>
                        <span className='contact-x'>x</span>
                    </div>
                    <h4 className='contact-description'>Prefer e-mail? hello@marketingv8.co</h4>
                    <div className='contact-first-name'>
                        <h4 className='contact-label'>First name*</h4>
                        <input
                            className='contact-input'
                            placeholder='Enter first name'
                            value={firstName}
                            onChange={handleFirstNameChange}
                        />
                    </div>
                    <div className='contact-last-name'>
                        <h4 className='contact-label'>Last name*</h4>
                        <input
                            className='contact-input'
                            placeholder='Enter last name'
                            value={lastName}
                            onChange={handleLastNameChange}
                        />
                    </div>
                    <div className='contact-email'>
                        <h4 className='contact-label'>Your e-mail*</h4>
                        <input
                            className='contact-input'
                            placeholder='Enter e-mail'
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className='contact-phone-nr'>
                        <h4 className='contact-label'>Phone number</h4>
                        <input
                            className='contact-input'
                            placeholder='+1 212-555-1234'
                            value={contactNumber}
                            onChange={handleContactNumberChange}
                        />
                    </div>
                    <div className='contact-what-source'>
                        <h4 className='contact-label'>How did you hear about us</h4>
                        <input
                            className='contact-input'
                            placeholder=''
                            value={whatSource}
                            onChange={handleWhatSourceChange}
                        />
                    </div>
                    <div className='contact-your-message'>
                        <h4 className='contact-label'>How can we help?*</h4>
                        <textarea
                            className='contact-input'
                            placeholder=''
                            rows = {15}
                            value={yourMessage}
                            onChange={handleYourMessageChange}
                        />
                    </div>
                    <div className='contact-privacy-checkbox'>
                        <input
                            type='checkbox'
                            id='privacyPolicy'
                            checked={privacyPolicyAccepted}
                            onChange={handlePrivacyPolicyChange}
                        />
                        <label className='contact-priv-policy' htmlFor='privacyPolicy'>
                            I have read and accept the Privacy Policy & Cookie Policy. *
                        </label>
                    </div>
                    <div className='button-send-two'>
                        <BlueButton2 text='Send message' type='submit' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactFormTwo;
