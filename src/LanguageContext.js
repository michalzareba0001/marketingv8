// LanguageContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('english');

  useEffect(() => {
    const userLanguage = navigator.language.split('-')[0];
    if (userLanguage === 'pl') {
      setLanguage('polish');
    } else {
      setLanguage('english');
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
