import React from 'react';
import './TeamSection.css';
// Import team assets
import stickyNote from '../../assets/team/Sticky-note.svg';
import peopleWithShadow from '../../assets/team/People-with-shadow.svg';
import indiaGate from '../../assets/team/India-Gate.svg';
// --- ARROW IMPORTS REMOVED ---
// import arrowFilmMakers from '../../assets/team/arrow-near-film-makers.svg';
// import arrowArtCurators from '../../assets/team/arrow-near-art-curators.svg';
// import arrowIndiaGate from '../../assets/team/arrow-near-india-gate.svg';
// ----------------------------
import navbarLogo from '../../assets/team/Navbar-with-vfilms-logo.svg';

const TeamSection = () => {
  return (
    <section className="team-section">
   
      
      {/* Navbar */}
      <nav className="team-navbar">
        <img src={navbarLogo} alt="V Films Logo and Menu" className="team-navbar-img" />
      </nav>

      {/* Main Content Container */}
      <div className="team-content">
        {/* Sticky Note - Top Left */}
        <div className="sticky-note-container">
          <img src={stickyNote} alt="Sticky Note" className="sticky-note" />
          
        </div>

        {/* Team Silhouettes - Right Side Center */}
        <div className="team-silhouettes-container">
          {/* --- ARROW IMAGES REMOVED --- */}
          {/* <img src={arrowFilmMakers} alt="Film Makers" className="arrow-film-makers" /> */}
          {/* <img src={arrowArtCurators} alt="Art Curators" className="arrow-art-curators" /> */}
          {/* ---------------------------- */}
          <img src={peopleWithShadow} alt="Team" className="people-silhouettes" />
          
        </div>

        {/* India Gate - Bottom Left */}
        <div className="india-gate-container">
          <img src={indiaGate} alt="India Gate" className="india-gate" />
          {/* --- ARROW IMAGE REMOVED --- */}
          {/* <img src={arrowIndiaGate} alt="Delhi" className="arrow-india-gate" /> */}
          {/* --------------------------- */}
        </div>

        {/* CTA Section - Bottom Right */}
        <div className="cta-container">
          <p className="cta-text">
            Take a closer look at the stories V bring to life.
          </p>
          <button className="cta-button">View Portfolio</button>
        </div>
      </div>

      {/* Scroll Down Arrow (points to Contact) */}
      <a href="#about" className="scroll-down-arrow-team">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 19.344l-8.662-8.662 1.414-1.414L12 16.516l7.248-7.248 1.414 1.414L12 19.344z"/>
  </svg>
</a>

    </section>
  );
};

export default TeamSection;