"use client"

import * as React from "react"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, ChevronDown, ArrowRight } from "lucide-react"
import "./hero.css"

// Images object for easy management
const heroImages = [
  {
    id: 1,
    src: "/images/heros-images/inovation.jpg",
    alt: "Hero Background 1",
    title: "Innovation"
  },
  {
    id: 2,
    src: "/images/heros-images/global.jpg",
    alt: "Global Solutions",
    title: "Global Reach"
  },
  {
    id: 3,
    src: "/images/heros-images/digital.jpg",
    alt: "Digital Solutions",
    title: "Digital Excellence"
  },
  {
    id: 4,
    src: "/images/heros-images/professional.jpg",
    alt: "Professional Services",
    title: "Professional Solutions"
  }
]

export function Hero() {
  const [selectedLanguage, setSelectedLanguage] = React.useState("English")
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = React.useState(false)
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  // Language options
  const languages = [
    { code: "en", name: "English" },
    { code: "sw", name: "Kiswahili" }
  ]

  // Auto-slide functionality
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language)
    setIsLanguageDropdownOpen(false)
  }

  return (
    <div className="hero-container">
      {/* First div - Top bar with social links, contact info, and language selector */}
      <div className="hero-top-bar">
        {/* Social Media Links */}
        <div className="hero-social-section">
          <a href="#" className="hero-social-link" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a href="#" className="hero-social-link" aria-label="Twitter">
            <Twitter size={18} />
          </a>
          <a href="#" className="hero-social-link" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="#" className="hero-social-link" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>

        {/* Location and Email */}
        <div className="hero-contact-section">
          <div className="hero-contact-item">
            <MapPin size={16} />
            <span>Nairobi, Kenya</span>
          </div>
          <div className="hero-contact-item">
            <Mail size={16} />
            <span>info@gravixel.com</span>
          </div>
        </div>

        {/* Language Dropdown */}
        <div className="hero-language-section">
          <div className="hero-language-dropdown">
            <button 
              className="hero-language-button"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              aria-label="Select Language"
            >
              <span>{selectedLanguage}</span>
              <ChevronDown size={16} className={`hero-dropdown-icon ${isLanguageDropdownOpen ? 'open' : ''}`} />
            </button>
            {isLanguageDropdownOpen && (
              <div className="hero-language-menu">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    className={`hero-language-option ${selectedLanguage === language.name ? 'active' : ''}`}
                    onClick={() => handleLanguageChange(language.name)}
                  >
                    {language.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>      </div>

      {/* Second div - Empty spacer for navbar space */}
      <div className="hero-navbar-spacer"></div>

      {/* Third div - Main content with title, description, and buttons */}
      <div className="hero-content">
        <div className="hero-content-inner">
          <h1 className="hero-title">
            Gravixel Digital Solutions
          </h1>
          <p className="hero-description">
            Transform your business with cutting-edge digital solutions. We provide innovative technology services 
            that drive growth, enhance efficiency, and create meaningful connections with your customers.
          </p>
          <div className="hero-buttons">
            <button className="hero-button hero-button-primary">
              <span>Get In Touch</span>
              <ArrowRight size={20} />
            </button>
            <button className="hero-button hero-button-secondary">
              <span>View Services</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Fourth div - Image slider */}      <div className="hero-slider">
        <div className="hero-slider-container">
          {/* Image container */}
          <div className="hero-slider-images">
            {heroImages.map((image, index) => (
              <div
                key={image.id}
                className={`hero-slider-image ${index === currentImageIndex ? 'active' : ''} ${
                  index < currentImageIndex ? 'prev' : index > currentImageIndex ? 'next' : ''
                }`}
                data-bg-image={image.src}
              >
                <div className="hero-slider-overlay">
                  <h3 className="hero-slider-title">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
