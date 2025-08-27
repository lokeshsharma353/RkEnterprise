import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About RkEnterprise</h2>
      <div className="about-content">
        <div className="owner-section">
          <div className="owner-image">
            <img src={`${process.env.PUBLIC_URL}/owner.jpg`} alt="Ramkishan Sharma - Founder" className="owner-photo" />
          </div>
          <div className="owner-info">
            <h3>Ramkishan Sharma</h3>
            <p className="owner-title">Founder & Lead Designer</p>
          </div>
        </div>
        <p>
          Welcome to RkEnterprise, Delhi's premier interior design company founded by <strong>Ramkishan Sharma</strong>, where creativity meets functionality. 
          With over a decade of experience in transforming residential and commercial spaces, we specialize in 
          creating bespoke interiors that reflect your personality and lifestyle.
        </p>
        <br />
        <p>
          Our team of skilled designers and craftsmen work tirelessly to bring your vision to life, combining 
          contemporary aesthetics with timeless elegance. From luxurious living rooms to efficient office spaces, 
          we handle every project with meticulous attention to detail and unwavering commitment to quality.
        </p>
        <br />
        <p>
          Based in the heart of Delhi, we serve clients across the NCR region, delivering exceptional interior 
          solutions that exceed expectations. At RkEnterprise, we don't just design spaces – we create experiences 
          that inspire and delight.
        </p>
      </div>
    </section>
  );
};

export default About;