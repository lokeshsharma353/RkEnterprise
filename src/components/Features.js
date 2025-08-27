import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Features = () => {
  const [ref] = useScrollAnimation();
  
  const features = [
    {
      icon: 'fas fa-palette',
      title: 'Custom Design',
      description: 'Tailored designs that reflect your unique style and personality'
    },
    {
      icon: 'fas fa-clock',
      title: 'Timely Delivery',
      description: 'Projects completed on schedule without compromising quality'
    },
    {
      icon: 'fas fa-award',
      title: 'Premium Quality',
      description: 'Only the finest materials and craftsmanship in every project'
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Support',
      description: 'Dedicated support team available round the clock'
    }
  ];

  return (
    <section ref={ref} className="features">
      <div className="features-container">
        <h2 className="section-title">Why Choose RkEnterprise?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;