import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref] = useScrollAnimation();

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="cta-section">
      <div className="cta-bg"></div>
      <div className="cta-content">
        <div className="cta-text">
          <h2>Ready to Transform Your Space?</h2>
          <p>Let's create something extraordinary together. Get your free consultation today!</p>
          <div className="cta-features">
            <div className="cta-feature">
              <i className="fas fa-check-circle"></i>
              <span>Free Consultation</span>
            </div>
            <div className="cta-feature">
              <i className="fas fa-check-circle"></i>
              <span>3D Visualization</span>
            </div>
            <div className="cta-feature">
              <i className="fas fa-check-circle"></i>
              <span>Premium Materials</span>
            </div>
          </div>
        </div>
        <div className="cta-actions">
          <button 
            className="cta-main-btn"
            onClick={scrollToContact}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span>Start Your Project</span>
            <i className="fas fa-arrow-right"></i>
          </button>
          <div className="cta-contact-info">
            <div className="cta-phone">
              <i className="fas fa-phone"></i>
              <span>+91 9588563701</span>
            </div>
            <div className="cta-email">
              <i className="fas fa-envelope"></i>
              <span>info@rkenterprise.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="floating-elements">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>
    </section>
  );
};

export default CTA;