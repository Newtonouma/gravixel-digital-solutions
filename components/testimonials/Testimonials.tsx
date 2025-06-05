import React, { useState, useEffect, useRef } from 'react';
import './testimonials.css';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      content: "Gravixel delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and innovative approach helped us increase our online sales by 150%.",
      rating: 5,      image: "/images/testimonials/client1.svg"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder, Digital Ventures",
      content: "Working with Gravixel was a game-changer for our business. Their team's expertise in mobile development created an app that our users absolutely love. Highly recommended!",
      rating: 5,
      image: "/images/testimonials/client2.svg"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "Marketing Director, Creative Solutions",
      content: "The UI/UX design team at Gravixel transformed our outdated interface into a modern, user-friendly experience. Our customer satisfaction scores have never been higher.",
      rating: 5,
      image: "/images/testimonials/client3.svg"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "CTO, InnovateCorp",
      content: "Gravixel's cloud solutions helped us scale our infrastructure seamlessly. Their technical expertise and support throughout the project were outstanding.",
      rating: 5,
      image: "/images/testimonials/client4.svg"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Product Manager, Futuretech",
      content: "The analytics platform developed by Gravixel provided us with insights we never had before. Their data science team truly understands business needs.",
      rating: 5,
      image: "/images/testimonials/client5.svg"
    },
    {
      id: 6,
      name: "Robert Martinez",
      position: "VP Operations, GlobalTrade",
      content: "From concept to deployment, Gravixel's team was professional and efficient. They delivered our project on time and within budget while maintaining the highest quality.",
      rating: 5,
      image: "/images/testimonials/client6.svg"
    }
  ];
  // Auto-slide functionality - showing 2 cards at a time
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMobile) {
        setCurrentSlide((prev) => 
          prev >= testimonials.length - 1 ? 0 : prev + 1
        );
      } else {
        setCurrentSlide((prev) => 
          prev >= testimonials.length - 2 ? 0 : prev + 2
        );
      }
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length, isMobile]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };
  const nextSlide = () => {
    if (isMobile) {
      setCurrentSlide((prev) => 
        prev >= testimonials.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentSlide((prev) => 
        prev >= testimonials.length - 2 ? 0 : prev + 2
      );
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      setCurrentSlide((prev) => 
        prev <= 0 ? testimonials.length - 1 : prev - 1
      );
    } else {
      setCurrentSlide((prev) => 
        prev <= 0 ? testimonials.length - 2 : prev - 2
      );
    }
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-background-overlay"></div>
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <div className="testimonials-header-left">
            <button className="testimonials-category-button">
              Testimonials
            </button>
            <h2 className="testimonials-title">
              What Our Clients Say About Us
            </h2>
          </div>
        </div>

        {/* Testimonials Slider */}        <div className="testimonials-slider-container">
          <div 
            className="testimonials-slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="testimonials-track"
              style={{ 
                transform: isMobile 
                  ? `translateX(-${currentSlide * 100}%)` 
                  : `translateX(-${(currentSlide / 2) * 100}%)` 
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-stars">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="testimonial-text">&ldquo;{testimonial.content}&rdquo;</p>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiNmMGYwZjAiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIxOCIgeT0iMTgiPgo8cGF0aCBkPSJNMTIgMTJDMTQuMjA5MSAxMiAxNiAxMC4yMDkxIDE2IDhDMTYgNS43OTA5IDE0LjIwOTEgNDEyIDRDOS43OTA5IDQgOCA1Ljc5MDkgOCA4QzggMTAuMjA5MSA5Ljc5MDkgMTIgMTIgMTJaIiBmaWxsPSIjOTk5Ii8+CjxwYXRoIGQ9Ik0xMiAxNEM5LjMzIDEzIDcgMTYuMzMgNyAyMEgyMEMxNyAxNi4zMyAxNC42NyAxMyAxMiAxNFoiIGZpbGw9IiM5OTkiLz4KPC9zdmc+Cjwvc3ZnPgo=';
                          }}
                        />
                      </div>
                      <div className="author-info">
                        <h4>{testimonial.name}</h4>
                        <span>{testimonial.position}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>          {/* Navigation Arrows */}
          <div className="testimonials-arrows">
            <button 
              className="nav-arrow nav-arrow-prev" 
              onClick={prevSlide}
              aria-label="Previous testimonials"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="nav-arrow nav-arrow-next" 
              onClick={nextSlide}
              aria-label="Next testimonials"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
