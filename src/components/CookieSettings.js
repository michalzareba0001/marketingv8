import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './CookieSettings.css'
const CookieSettings = () => {
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
      <h2>Cookie settings</h2>
      <p>This site uses cookies. Do you accept cookies?</p>
      <button onClick={handleAcceptCookie}>Accept</button>
      <button onClick={handleDeclineCookie}>Decline</button>
    </div>
  );
};

export default CookieSettings;