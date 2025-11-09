// src/pages/Team.jsx

import React from 'react';
import TeamSection from '../components/team/TeamSection'; // Import from new folder

const TeamPage = () => {
  return (
    // id="team" is the new scroll target
    <section id="team">
      <TeamSection />
    </section>
  );
};

export default TeamPage;