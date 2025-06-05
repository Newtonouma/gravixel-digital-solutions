'use client';

import { useState } from 'react';
import './faq.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What services does Gravixel Digital Solutions offer?",
      answer: "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, digital marketing, SEO optimization, cloud solutions, and business automation. Our team specializes in creating custom solutions tailored to your specific business needs and goals."
    },
    {
      id: 2,
      question: "How long does it take to complete a typical project?",
      answer: "Project timelines vary depending on complexity and scope. A simple website typically takes 2-4 weeks, while complex web applications or mobile apps can take 8-16 weeks. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      id: 3,
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes regular updates, security patches, performance optimization, backup management, and technical support. We believe in building long-term partnerships with our clients to ensure their digital solutions continue to perform optimally."
    },
    {
      id: 4,
      question: "What is your approach to project management and communication?",
      answer: "We follow agile development methodologies with regular sprint reviews and transparent communication. You'll have access to project management tools, receive weekly progress reports, and have scheduled check-ins with your dedicated project manager. We believe in keeping our clients informed and involved throughout the entire process."
    },
    {
      id: 5,
      question: "How do you ensure the security and quality of your solutions?",
      answer: "Security and quality are our top priorities. We implement industry-standard security practices, conduct thorough testing at every stage, perform code reviews, and follow best practices for data protection. All our solutions undergo rigorous quality assurance testing before deployment, and we provide security audits and compliance documentation when needed."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <button className="faq-category-button">
            FAQ
          </button>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-description">
            Find answers to common questions about our services, processes, and how we can help transform your digital presence.
          </p>
        </div>

        <div className="faq-accordion">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <div className="faq-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
