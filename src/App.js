import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GreatestCompanies from './components/GreatestCompanies';
import GrowYourBusiness from './components/GrowYourBusiness';

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
      <div className='App-max-width'>
        <GrowYourBusiness />

      </div>

      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
