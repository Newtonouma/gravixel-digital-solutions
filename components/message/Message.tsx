'use client';

import { useState } from 'react';
import Image from 'next/image';
import './message.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const Message = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const services = [
    'Web Development',
    'Mobile Apps',
    'Digital Marketing',
    'Cloud Solutions'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ ...formData, services });
  };

  return (
    <section className="message-section">
      <div className="message-container">
        {/* Left Side */}
        <div className="message-left">
          {/* First Child - Title and Paragraph */}
          <div className="message-info">
            <h2 className="message-title">Ready to Transform Your Digital Presence?</h2>            <p className="message-description">
              Let&apos;s discuss how our expert team can help you achieve your business goals 
              through innovative digital solutions. From web development to comprehensive 
              digital strategies, we&apos;re here to turn your vision into reality.
            </p>
          </div>          {/* Second Child - Service Buttons */}
          <div className="message-services">
            {services.map((service) => (
              <div
                key={service}
                className="service-button selected"
              >
                <span className="service-checkbox">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {service}
              </div>
            ))}
          </div>

          {/* Third Child - Image */}          <div className="message-image">
            <Image 
              src="/images/messages/message-consultation.webp" 
              alt="Digital consultation team"
              className="consultation-image"
              width={400}
              height={300}
            />
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="message-right">
          <div className="message-form-container">
            <h3 className="form-title">Leave Us a Message</h3>            <p className="form-subtitle">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="message-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="consultation-button">
                <span>Get Your Free Consultation Now</span>
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  className="arrow-icon"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;