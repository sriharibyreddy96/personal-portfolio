import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import contact_img from "../../Assets/contact_form2.webp";

// Importing React Icons
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if all fields are filled
    if (formData.name && formData.email && formData.mobile && formData.message) {
      // Create template parameters for the user and admin
      const userTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };
  
      const adminTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        mobile: formData.mobile,
        message: formData.message,
      };
  
      // Send email to the user (confirmation)
      emailjs.send('service_isdb8fr', 'template_3c09cp9', userTemplateParams, 'SuJJFD_30k_NYdnj6')
        .then((response) => {
          console.log('User email sent successfully:', response);
        })
        .catch((error) => {
          console.error('Error sending user email:', error);
          console.log('Error details:', error.text);  // Log full error details
          setToastMessage('Error sending confirmation email. Please try again later.');
        });
  
      // Send email to the admin (notification)
      emailjs.send('service_isdb8fr', 'template_9glfaxg', adminTemplateParams, 'SuJJFD_30k_NYdnj6')
        .then((response) => {
          console.log('Admin email sent successfully:', response);
          setToastMessage('Form submitted successfully!');
          setFormData({ name: '', email: '', mobile: '', message: '' });
        })
        .catch((error) => {
          console.error('Error sending admin email:', error);
          console.log('Error details:', error.text);  // Log full error details
          setToastMessage('Error sending form. Please try again later.');
        });
  
      // Clear the toast message after 3 seconds
      setTimeout(() => setToastMessage(''), 3000);
    } else {
      setToastMessage('Please fill in all fields.');
      setTimeout(() => setToastMessage(''), 3000); // Clear toast after 3 seconds
    }
  };
  

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="neon-text">Contact Us</h1>
      </div>
      
      <div className="contact-content">
        <div className="contact-image">
          <img src={contact_img} alt="Contact" />
        </div>

        <div className="contact-form">
          <h2>If You Have Any Queries, Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <FaUser className="input-icon" />
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Your Name"
                required 
                className="neon-input"
              />
            </div>
            <div className="form-group">
              <FaEnvelope className="input-icon" />
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Your Email"
                required 
                className="neon-input"
              />
            </div>
            <div className="form-group">
              <FaPhoneAlt className="input-icon" />
              <input 
                type="number" 
                id="mobile" 
                name="mobile" 
                value={formData.mobile} 
                onChange={handleChange} 
                placeholder="Your Mobile"
                required 
                className="neon-input"
              />
            </div>
            <div className="form-group">
              <FaCommentDots className="input-icon" />
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Your Message"
                required 
                className="neon-input"
              ></textarea>
            </div>
            <button type="submit" className="neon-button">Submit</button>
          </form>
        </div>
      </div>

      {/* Toast message for form submission status */}
      {toastMessage && <div className="toast">{toastMessage}</div>}
    </div>
  );
};

export default Contact;
