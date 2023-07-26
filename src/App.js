import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GreatestCompanies from './components/GreatestCompanies';
import GrowYourBusiness from './components/GrowYourBusiness';
import PortfolioSection from './components/PortfolioSection';
import WeAreAll from './components/WeAreAll';
import TopServices from './components/TopServices';
import UnleashPotential from './components/UnleashPotential';
import WhiteMenuSection from './components/WhiteMenuSection';
import Recommendations from './components/Recommendations';
import Partners from './components/Partners';
import FooterMain from './components/FooterMain';
import FooterBottomBar from './components/FooterBottomBar';
import CookieSettings from './components/CookieSettings';
import ContactFormTwo from './components/ContactFormTwo';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <div className="App-main">
        <HeroSection />
        <GreatestCompanies />
      </div>

      <div className='App-max-width grow-your-buisness-archor'>
        <GrowYourBusiness />
      </div>

      <div className='App-main'>
        <PortfolioSection />
        <WeAreAll />
        <TopServices />
        <UnleashPotential />
      </div>
      <div className='App-max-width'>
        <WhiteMenuSection />
      </div>
      <div className='App-main'>
        <Recommendations />
        <Partners />
      </div>
      <div className='contact-popup'>
      <ContactFormTwo />
      </div>
      <footer className="App-footer">
        <FooterMain />
        <FooterBottomBar />
        <CookieSettings />

      </footer>
    </div>
  );
}

export default App;
