'use client';

import { useState } from 'react';
import './footer.css';

interface NewsletterData {
  email: string;
}

const Footer = () => {
  const [newsletterData, setNewsletterData] = useState<NewsletterData>({
    email: ''
  });

  const handleNewsletterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsletterData({ email: e.target.value });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', newsletterData);
    setNewsletterData({ email: '' });
  };
  const services = [
    'Web Design',
    'Development',
    'SEO Services',
    'Digital Marketing',
    'Brand Strategy',
    'Consulting'
  ];

  const quickLinks = [
    'About Us',
    'Contact',
    'Portfolio',
    'Blog',
    'Careers',
    'Support'
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Upper Section */}
        <div className="footer-upper">
          {/* Company Info */}
          <div className="footer-company">
            <div className="footer-logo">
              <h3 className="logo-text">Gravixel</h3>
              <span className="logo-subtitle">Digital Solutions</span>
            </div>
            
            <div className="company-info">
              <div className="info-item">
                <svg className="info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.58172 7.58172 1 12 1C16.4183 1 21 5.58172 21 10Z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>123 Innovation Street, Tech City, TC 12345</span>
              </div>
              
              <div className="info-item">
                <svg className="info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C10.93 21 3 13.07 3 3.08C3 2.48 3.48 2 4.08 2H7.09C7.69 2 8.17 2.48 8.17 3.08C8.17 4.43 8.4 5.74 8.83 6.96C8.98 7.44 8.83 7.97 8.43 8.37L6.9 9.9C8.07 12.14 9.86 13.93 12.1 15.1L13.63 13.57C14.03 13.17 14.56 13.02 15.04 13.17C16.26 13.6 17.57 13.83 18.92 13.83C19.52 13.83 20 14.31 20 14.91V17.92H22Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
              
              <div className="info-item">
                <svg className="info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>hello@gravixel.com</span>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24V15.564H7.078V12.073H10.125V9.41C10.125 6.387 11.917 4.723 14.658 4.723C15.97 4.723 17.344 4.952 17.344 4.952V7.898H15.83C14.342 7.898 13.875 8.814 13.875 9.749V12.073H17.203L16.671 15.564H13.875V24C19.612 23.094 24 18.1 24 12.073Z"/>
                </svg>
              </a>
              
              <a href="#" className="social-link" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57C23.069 4.958 22.124 5.216 21.127 5.328C22.151 4.725 22.942 3.772 23.314 2.627C22.366 3.189 21.314 3.595 20.187 3.813C19.282 2.869 18.013 2.277 16.616 2.277C13.898 2.277 11.693 4.482 11.693 7.2C11.693 7.583 11.736 7.958 11.82 8.315C7.728 8.116 4.1 6.157 1.671 3.149C1.247 3.893 1.004 4.725 1.004 5.614C1.004 7.304 1.873 8.805 3.195 9.688C2.388 9.662 1.628 9.442 0.964 9.07V9.135C0.964 11.528 2.661 13.515 4.914 13.969C4.501 14.083 4.065 14.145 3.617 14.145C3.299 14.145 2.989 14.115 2.688 14.058C3.316 16.007 5.135 17.43 7.29 17.467C5.604 18.781 3.481 19.553 1.175 19.553C0.777 19.553 0.385 19.531 0 19.488C2.179 20.874 4.767 21.683 7.548 21.683C16.605 21.683 21.557 14.224 21.557 7.782C21.557 7.571 21.552 7.362 21.543 7.153C22.505 6.465 23.316 5.616 23.953 4.57Z"/>
                </svg>
              </a>
              
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"/>
                </svg>
              </a>
              
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.162 12 18.162C15.403 18.162 18.162 15.403 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16ZM18.406 4.155C18.406 5.052 17.678 5.778 16.781 5.778C15.885 5.778 15.157 5.05 15.157 4.155C15.157 3.261 15.885 2.532 16.781 2.532C17.678 2.532 18.406 3.261 18.406 4.155Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-services">
            <h4 className="footer-section-title">Our Services</h4>
            <ul className="services-list">
              {services.map((service, index) => (
                <li key={index} className="service-item">
                  <a href="#" className="service-link">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-quick-links">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="quick-links-list">
              {quickLinks.map((link, index) => (
                <li key={index} className="quick-link-item">
                  <a href="#" className="quick-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4 className="footer-section-title">Subscribe to Our Newsletter</h4>
            <p className="newsletter-description">
              Stay updated with the latest trends in digital solutions and get exclusive insights 
              delivered directly to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <div className="newsletter-input-container">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={newsletterData.email}
                  onChange={handleNewsletterChange}
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-button" aria-label="Subscribe to newsletter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Lower Section */}
        <div className="footer-lower">
          <div className="footer-bottom">
            <p className="copyright">
              © 2025 Gravixel Digital Solutions. All rights reserved.
            </p>
            <div className="footer-links">
              <a href="#" className="footer-link">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#" className="footer-link">Terms of Service</a>
              <span className="separator">|</span>
              <a href="#" className="footer-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
