"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import "./about.css"

export function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* First div - Image with badge */}        <div className="about-image-section">
          <div className="about-main-image">
            <Image 
              src="/images/about-images/team-image.jpg" 
              alt="Our Team" 
              width={600}
              height={500}
              className="about-image"
            />
            {/* Badge overlay */}
            <div className="about-badge">
              <div className="badge-number">5+</div>
              <div className="badge-line"></div>
              <div className="badge-text">Years of Experience</div>
            </div>
          </div>
        </div>        {/* Second div - Content section */}
        <div className="about-content-section">
          {/* Header section */}
          <div className="about-header">
            <button className="about-category-btn">About Company</button>
            <h2 className="about-title">
              Building Digital Solutions That Transform Your Business
            </h2>
          </div>          {/* Two columns under title */}
          <div className="about-content-grid">
            {/* Left column - Services with progress bars */}
            <div className="about-info">
              {/* Full width line */}
              <div className="about-divider"></div>
              
              {/* Description paragraph */}
              <p className="about-description">
                We specialize in creating innovative digital solutions that drive business growth. 
                Our expertise spans across multiple technologies and platforms, delivering exceptional 
                results for our clients.
              </p>
              
              <div className="about-services">
                <div className="service-item">
                  <div className="service-name">Website Development</div>
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div className="progress-fill" data-percentage="87"></div>
                    </div>
                    <span className="progress-percentage">87%</span>
                  </div>
                </div>                <div className="service-item">
                  <div className="service-name">Mobile App Development</div>
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div className="progress-fill" data-percentage="92"></div>
                    </div>
                    <span className="progress-percentage">92%</span>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service-name">Digital Marketing</div>
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div className="progress-fill" data-percentage="78"></div>
                    </div>
                    <span className="progress-percentage">78%</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="about-buttons">
                <button className="about-btn about-btn-primary">
                  <span>More About Us</span>
                  <ArrowRight size={20} />
                </button>
                <button className="about-btn about-btn-secondary">
                  <span>Talk to Us</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* Right column - Additional image */}
            <div className="about-secondary-image">
              <Image 
                src="/images/about-images/office-image.jpg" 
                alt="Our Office" 
                width={400}
                height={600}
                className="secondary-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
