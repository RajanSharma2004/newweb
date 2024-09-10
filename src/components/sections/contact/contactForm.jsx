import React, { useState } from 'react';
import { RiMailLine, RiUserLine } from '@remixicon/react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setError(null);

    try {
      const response = await fetch('https://newweb-alpha.vercel.app//send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to send message.');
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Error sending message. Please try again later.');
      setStatus('Error sending message.');
    }
  };

  return (
    <div className="col-lg-8">
      <div className="contact-form contact-form-area">
        <form id="contactForm" className="contactForm" name="contactForm" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Steve Milner"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name" className="for-icon">
                  <i><RiUserLine size={20} /></i>
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="hello@websitename.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email" className="for-icon">
                  <i><RiMailLine size={20} /></i>
                </label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Write Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group mb-0">
                <button type="submit" className="theme-btn">
                  Send Message <i><RiMailLine size={15} /></i>
                </button>
                <div>{status}</div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
