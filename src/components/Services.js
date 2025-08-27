import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const [ref] = useScrollAnimation();
  
  const services = [
    {
      icon: 'fas fa-home',
      title: 'Residential Design',
      description: 'Complete home makeovers with personalized design solutions'
    },
    {
      icon: 'fas fa-building',
      title: 'Commercial Spaces',
      description: 'Professional office and retail space interior design'
    },
    {
      icon: 'fas fa-couch',
      title: 'Furniture Design',
      description: 'Custom furniture design and space optimization'
    },
    {
      icon: 'fas fa-palette',
      title: 'Color Consultation',
      description: 'Expert color schemes and material selection'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Lighting Design',
      description: 'Ambient and functional lighting solutions'
    },
    {
      icon: 'fas fa-tools',
      title: 'Renovation',
      description: 'Complete renovation and remodeling services'
    }
  ];

  return (
    <section id="services" ref={ref} className="services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;