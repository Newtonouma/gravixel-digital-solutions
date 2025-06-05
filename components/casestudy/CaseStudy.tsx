import React, { useState, useEffect } from 'react';
import './casestudy.css';

const CaseStudy: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      className: "ecommerce",
      description: "Modern e-commerce solution with advanced features"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile Development",
      className: "mobile",
      description: "Secure and user-friendly banking application"
    },
    {
      id: 3,
      title: "Healthcare Portal",
      category: "UI/UX Design",
      className: "healthcare",
      description: "Patient management system with intuitive design"
    },
    {
      id: 4,
      title: "Digital Marketing",
      category: "Marketing Strategy",
      className: "marketing",
      description: "Comprehensive digital marketing campaign"
    },
    {
      id: 5,
      title: "SaaS Platform",
      category: "Cloud Solutions",
      className: "saas",
      description: "Scalable software-as-a-service solution"
    },
    {
      id: 6,
      title: "AI Analytics Tool",
      category: "Data Science",
      className: "analytics",
      description: "Advanced analytics with machine learning"
    }
  ];
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === caseStudies.length - 3 ? 0 : prev + 1
      );
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [caseStudies.length]);


  return (
    <section className="case-study-section">
      <div className="case-study-container">
        {/* Top section with buttons and title */}
        <div className="case-study-header">
          <div className="case-study-left">
            <button className="case-study-category-button">
              Case Studies
            </button>
            <h2 className="case-study-title">
              Our Success Stories & Project Highlights
            </h2>
          </div>
          <div className="case-study-right">
            <button className="case-study-view-all-button">
              View All Projects
            </button>
          </div>
        </div>        {/* Carousel section */}
        <div className="case-study-carousel-container">
            <div className="case-study-carousel">
            <div className={`carousel-track ${
              hoveredCard === 0 ? 'hover-left' : 
              hoveredCard === 1 ? 'hover-middle' : 
              hoveredCard === 2 ? 'hover-right' : ''
            }`}>
              {[0, 1, 2].map((position) => {
                const studyIndex = (currentSlide + position) % caseStudies.length;
                const study = caseStudies[studyIndex];
                return (
                  <div
                    key={`${study.id}-${currentSlide}`}
                    className={`case-study-card position-${position} ${hoveredCard === position ? 'hovered' : ''} ${study.className}`}
                    onMouseEnter={() => setHoveredCard(position)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="case-study-content">
                      <h3>{study.title}</h3>
                      <span>{study.category}</span>
                      <p>{study.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
