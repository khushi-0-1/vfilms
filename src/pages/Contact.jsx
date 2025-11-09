import React from 'react';
import Navbar from '../components/contact/Navbar'; // Correct path
import ContactSection from '../components/contact/ContactSection'; // Correct path

const ContactPage = () => {
  return (
    <div className="contact-page-wrapper"> {/* A wrapper for the whole page */}
      <Navbar /> {/* Navbar is now a sibling to ContactSection */}
      <ContactSection />
    </div>
  );
};

export default ContactPage;