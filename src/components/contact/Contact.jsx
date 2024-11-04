import React, { useState } from 'react';
import './Contact.css'; // Ensure this CSS file is created
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'email-validator';
import { Vortex } from 'react-loader-spinner';



const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validator.validate(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setLoading(true); 
    try {
      const response = await axios.post('https://portfolio-93ca.onrender.com/send-email', formData);
      toast.success(response.data.message); 
      setFormData({ name: '', email: '', message: '' }); 
    } catch (error) {
      console.error(error); // Log the error for debugging
      toast.error('Failed to send message. Please try again later.'); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-details">
          <h2>Contact Me</h2>
          <ul>
            <li><strong>Address:</strong> Basirhat, Kolkata, West Bengal</li>
            <li><strong>Phone:</strong> +91 8967665685</li>
            <li><strong>Email:</strong> ashiksekh8967@gmail.com</li>
          </ul>
        </div>
        <div className="contact-form">
          <h2>Send a Message</h2>
          <p>If you have any questions, please fill out the form below.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={loading}
              ></textarea>
            </div>
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? (
                  (<Vortex
                   alignment="center"
                    visible={true}
                    height="50"
                    width="50"
                    ariaLabel="vortex-loading"
                    wrapperClass="vortex-wrapper"
                    
                    wrapperStyle={{ display: 'inline-block' }}
                    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                    />)
              ) : 'Send Message'}
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default Contact;
