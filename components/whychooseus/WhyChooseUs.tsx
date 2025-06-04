import React, { useState, useRef } from 'react';
import './whychooseus.css';

const WhyChooseUs: React.FC = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;
    
    circleRefs.current.forEach((circle, index) => {
      if (circle && hoveredStat === index) {
        const circleRect = circle.getBoundingClientRect();
        const circleX = circleRect.left - containerRect.left + circleRect.width / 2;
        const circleY = circleRect.top - containerRect.top + circleRect.height / 2;
        
        // Limit movement to a reasonable range (max 30px in any direction)
        const deltaX = Math.max(-30, Math.min(30, (mouseX - circleX) * 0.3));
        const deltaY = Math.max(-30, Math.min(30, (mouseY - circleY) * 0.3));
        
        circle.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.08)`;
      }
    });
  };

  const handleMouseEnter = (index: number) => {
    setHoveredStat(index);
    const circle = circleRefs.current[index];
    if (circle) {
      circle.classList.add('following');
    }
  };
  const handleMouseLeave = () => {
    if (hoveredStat !== null) {
      const circle = circleRefs.current[hoveredStat];
      if (circle) {
        // Reset transform to original position
        circle.style.transform = '';
        circle.classList.remove('following');
      }
    }
    setHoveredStat(null);
  };

  const stats = [
    { number: '100%', text: 'Client Satisfaction Rate - We&apos;re committed to delivering results that exceed expectations' },
    { number: '4+', text: 'Years of Combined Experience - Our team brings decades of industry expertise' },
    { number: '100', text: 'Projects Completed - Successfully delivered solutions across diverse industries' },
    { number: '98%', text: 'On-Time Delivery Rate - We respect deadlines and deliver when promised' }
  ];
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-container">
        {/* First Div - Side by side content */}
        <div className="why-choose-us-top">
          <div className="why-choose-us-left">            <button className="why-choose-us-button">
              Why Choose Us
            </button>            <h2 className="why-choose-us-left-title">
              Innovative Digital Solutions And Creative Expertise
            </h2>
          </div>
          <div className="why-choose-us-right">
            <p className="why-choose-us-right-paragraph">
              With years of experience in the digital landscape, we understand what it takes 
              to build successful online presence. Our proven track record speaks for itself, 
              with satisfied clients across various industries who trust us with their most 
              important digital initiatives.
            </p>
          </div>        </div>        {/* Second Div - Circular statistics */}
        <div 
          ref={containerRef}
          className="why-choose-us-stats"
          onMouseMove={handleMouseMove}
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              ref={(el) => { circleRefs.current[index] = el; }}
              className="stat-circle"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="stat-number">
                {stat.number}
              </div>
              <div className="stat-overlay">
                <div className="stat-overlay-text">
                  {stat.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Third Div - Bottom paragraph */}
        <div className="why-choose-us-bottom">
          <p className="why-choose-us-bottom-paragraph">
            Choose us as your digital partner and experience the difference that dedicated expertise, 
            innovative solutions, and personalized service can make for your business. We don&apos;t just 
            build websites and applications – we craft digital experiences that drive growth, 
            engagement, and lasting success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
