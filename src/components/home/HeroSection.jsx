import React from 'react';
import './HeroSection.css';
// Make sure these paths are correct based on your project structure
import logo from '../../assets/home/vfilms-logo.svg';
import mandala from '../../assets/home/hero-mandala.png';

const Home = () => {
  return (
    // id="home" allows the navbar to scroll here
    <section id="home" className="hero-section">
      <div className="hero-container">
        
        {/* --- Left Column (Logo with Mandala) --- */}
        <div className="hero-left">
          <div className="hero-logo-wrapper">
            {/* The rotating mandala background */}
            <img src={mandala} alt="Mandala" className="hero-mandala" />
            {/* The main logo centered on top */}
            <img src={logo} alt="V Films Logo" className="hero-logo" />
          </div>
        </div>

        {/* --- Right Column (Text Content) --- */}
        <div className="hero-right">
          <h1 className="hero-title">
            Varnan is where stories find
            their voice and form
          </h1>
          <h2 className="hero-subtitle">
            Films . Brands . Art
          </h2>
          <p className="hero-description">
            Since 2008, V've been telling stories - stories of people,
            their journeys, and the places that shape them.
            Some begin in polished boardrooms, others in humble
            village squares. But every story starts the same way - by
            listening with intention. V believes it takes trust, patience,
            and an eye for the unseen to capture what truly matters.
            V doesn't just tell stories - V honors them.
          </p>
        </div>
      </div>

      {/* --- Scroll Down Arrow --- */}
      {/* Links to the #contact section */}
      <a href="#team" className="scroll-down-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 19.344l-8.662-8.662 1.414-1.414L12 16.516l7.248-7.248 1.414 1.414L12 19.344z"/>
        </svg>
      </a>
    </section>
  );
};

export default Home;