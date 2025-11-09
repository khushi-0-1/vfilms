// src/App.jsx

import React from 'react';
import Hero from './pages/Hero';

import Contact from './pages/Contact';
import './App.css'; 
import Team from './pages/Team';

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
       <Team />
      
        <Contact />
      </main>
    </div>
  );
}

export default App;