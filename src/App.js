import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GreatestCompanies from './components/GreatestCompanies';
import GrowYourBusiness from './components/GrowYourBusiness';
import PortfolioSection from './components/PortfolioSection';
import WeAreAll from './components/WeAreAll';

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
      </div>
      
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
