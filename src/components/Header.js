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
        <div className='language-switcher'>
          <span onClick={handleLanguageChange} className={language === 'english' ? 'blue-color' : 'white-color'}>EN</span>
          <div className='dot-space'>

            <div
              className={`dot ${language === 'english' ? 'en' : 'pl'}`}
              onClick={handleLanguageChange}
            ></div>

          </div>
          <span onClick={handleLanguageChange} className={language !== 'english' ? 'blue-color' : 'white-color'}>PL</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
