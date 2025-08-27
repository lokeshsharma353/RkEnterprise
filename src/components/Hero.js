import React from 'react';
// Updated: 2025-01-27 15:34

const Hero = () => {
  const scrollToGallery = () => {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>RkEnterprise</h1>
        <p>Transforming Spaces, Creating Dreams - Premium Interior Design in Delhi</p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">150+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="cta-button primary" onClick={scrollToGallery}>Explore Our Work</button>
          <button className="cta-button secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Get Free Quote</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;