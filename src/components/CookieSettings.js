import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './CookieSettings.css'
import { useLanguage } from '../LanguageContext';
const CookieSettings = () => {
  const { language } = useLanguage();
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  useEffect(() => {
    const isCookieAccepted = Cookies.get('cookieAccepted');
    if (isCookieAccepted) {
      setShowCookieBanner(false);
    }
  }, []);

  const handleAcceptCookie = () => {
    Cookies.set('cookieAccepted', true, { expires: 365 });
    setShowCookieBanner(false);
  };

  const handleDeclineCookie = () => {
    Cookies.remove('cookieAccepted');
    setShowCookieBanner(false);
  };

  if (!showCookieBanner) {
    return <div></div>;
  }

  return (
    <div className='cookie-settings'>
      {language === 'english' ?
        <h2>Cookie settings</h2>
        :
        <h2>Ustawienia ciasteczek</h2>
      }
      {language === 'english' ?
        <p>This site uses cookies. Do you accept cookies?</p>
        :
        <p>Ta strona używa ciasteczek. Czy akceptujesz ciasteczka?</p>
      }
      {language === 'english' ?
        <button onClick={handleAcceptCookie}>Accept</button>
        :
        <button onClick={handleAcceptCookie}>Akceptuj</button>
      }
      {language === 'english' ?
        <button onClick={handleDeclineCookie}>Decline</button>
        :
        <button onClick={handleDeclineCookie}>Odrzuć</button>
      }
    </div>
  );
};

export default CookieSettings;