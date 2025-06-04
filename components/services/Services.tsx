import React from 'react';
import { ArrowRight, Code, Smartphone, TrendingUp, Globe, Shield, Zap } from 'lucide-react';
import './services.css';

const Services = () => {
  const services = [
    {
      icon: <Code className="service-icon" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"]
    },
    {
      icon: <Smartphone className="service-icon" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      features: ["Cross-Platform", "Native Performance", "Push Notifications", "App Store Ready"]
    },
    {
      icon: <TrendingUp className="service-icon" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive business growth.",
      features: ["SEO & SEM", "Social Media", "Content Marketing", "Analytics"]
    },
    {
      icon: <Globe className="service-icon" />,
      title: "E-Commerce Solutions",
      description: "Complete e-commerce platforms with secure payment integration and inventory management systems.",
      features: ["Payment Integration", "Inventory Management", "Order Tracking", "Admin Dashboard"]
    },
    {
      icon: <Shield className="service-icon" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security audits and implementation of best practices.",
      features: ["Security Audits", "Data Protection", "Compliance", "24/7 Monitoring"]
    },
    {
      icon: <Zap className="service-icon" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to optimize your business operations.",
      features: ["Cloud Migration", "Auto Scaling", "Cost Optimization", "DevOps Integration"]
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <div className="services-category">
            <span className="services-category-text">Our Services</span>
          </div>
          <h2 className="services-title">
            Comprehensive Digital Solutions for Your Business
          </h2>
          <p className="services-description">
            We offer a full spectrum of digital services designed to transform your business 
            and drive growth in the digital age. From web development to digital marketing, 
            our expert team delivers cutting-edge solutions tailored to your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card-header">
                <div className="service-icon-container">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              
              <p className="service-description">
                {service.description}
              </p>
              
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="service-feature">
                    <span className="service-feature-dot"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="service-card-footer">
                <button className="service-learn-more">
                  Learn More
                  <ArrowRight className="service-arrow" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="services-cta">
          <div className="services-cta-content">
            <h3 className="services-cta-title">
              Ready to Transform Your Business?
            </h3>            <p className="services-cta-description">
              Let&apos;s discuss how our services can help you achieve your digital goals. 
              Get a free consultation and project estimate today.
            </p>
          </div>
          <div className="services-cta-actions">
            <button className="services-cta-primary">
              Get Free Consultation
              <ArrowRight className="service-arrow" />
            </button>
            <button className="services-cta-secondary">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
