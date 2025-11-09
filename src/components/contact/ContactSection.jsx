import React, { useState } from 'react';
import './ContactSection.css'; // Import the CSS file

// Import images from your assets/contact folder
import vectorTopRight from '../../assets/contact/footer-vector-upward.png';
import vectorBottomLeft from '../../assets/contact/footer-vector-downward.png';

const ContactSection = () => {
  // --- State Management ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear the error for this field as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // --- Form Validation ---
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Your email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Your message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // --- Form Submission ---
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser submission
    setSubmitStatus(null); // Reset status

    // 1. Validate
    if (!validateForm()) {
      return; // Stop if validation fails
    }

    // 2. Set loading state
    setIsLoading(true);

    // 3. Send data to API
    try {
      const response = await fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // API returns 200-299 status
        setSubmitStatus('success');
        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        // API returns error status (4xx, 5xx)
        console.error('API Error:', response.status, response.statusText);
        setSubmitStatus('error');
      }
    } catch (error) {
      // Network error, etc.
      console.error('Fetch Error:', error);
      setSubmitStatus('error');
    } finally {
      // 4. Reset loading state
      setIsLoading(false);
    }
  };

  // --- JSX (The View) ---
  return (
    <section id="contact" className="contact-section">
      {/* Decorative Vectors */}
      <img src={vectorTopRight} alt="" className="contact-vector top-right" />
      <img src={vectorBottomLeft} alt="" className="contact-vector bottom-left" />

      <div className="contact-container">
        {/* --- Left Side Text (CLASSNAMES REMOVED) --- */}
        <div className="contact-info">
          <p>
            Whether you have an idea, a question, or simply want
            to explore how V can work together, V're just a
            message away.
            Let's catch up over coffee ☕✨<br />
            Great stories always begin with a good conversation
          </p>
        </div>

        {/* --- Right Side Form (This whole div stays the same) --- */}
        <div className="contact-form-wrapper">
          <div className="contact-form-header">
            <h2>Join the Story</h2>
            <p>Ready to bring your vision to life? Let's talk.</p>
          </div>

          {/* --- FORM SECTION --- */}
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name*" 
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email*"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your message*"
                value={formData.message}
                onChange={handleChange}
                disabled={isLoading}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>

            {/* --- Submission Status Messages --- */}
            {submitStatus === 'success' && (
              <p className="success-message">Form Submitted</p>
            )}
            {submitStatus === 'error' && (
              <p className="error-message-submit">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
          
          <div className="contact-footer-details">
            <a href="mailto:vernita@varnamfilms.co.in">vernita@varnamfilms.co.in</a>
            <span>+91 98736 84567</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;