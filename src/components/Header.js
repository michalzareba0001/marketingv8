// Header.js
import React from 'react';
import { useLanguage } from '../LanguageContext';
import './header.css';
import Logo from '../images/svg/v8logo.svg';

const Header = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = () => {
    setLanguage(language === 'english' ? 'polish' : 'english');
  };

  return (
    <div className='header-main'>
      <div className='col-one'>
        <div className='v8logo'>
          <a href='./index.html'>
            <img src={Logo} alt='v8logo' className='v8logo-svg' />
          </a>
        </div>
      </div>
      <div className='col-two'>
        <button onClick={handleLanguageChange}>
          {language === 'english' ? 'Switch to Polish' : 'Przełącz na angielski'}
        </button>
      </div>
    </div>
  );
};

export default Header;
