import React from 'react';

const Hero = () => {
  const scrollToGallery = () => {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>RkEnterprise</h1>
        <p>Transforming Spaces, Creating Dreams - Premium Interior Design in Delhi</p>
        <button className="cta-button" onClick={scrollToGallery}>Explore Our Work</button>
      </div>
    </section>
  );
};

export default Hero;