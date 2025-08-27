import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [ref] = useScrollAnimation();

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'luxury', name: 'Luxury' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Villa Interior',
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Luxurious 4BHK villa with contemporary design',
      location: 'Gurgaon',
      area: '3500 sq ft',
      year: '2023'
    },
    {
      id: 2,
      title: 'Corporate Office Design',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Modern office space with ergonomic design',
      location: 'Delhi',
      area: '5000 sq ft',
      year: '2023'
    },
    {
      id: 3,
      title: 'Elegant Apartment',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Sophisticated 3BHK apartment interior',
      location: 'Noida',
      area: '1800 sq ft',
      year: '2023'
    },
    {
      id: 4,
      title: 'Luxury Penthouse',
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Premium penthouse with panoramic views',
      location: 'Delhi',
      area: '4200 sq ft',
      year: '2023'
    },
    {
      id: 5,
      title: 'Boutique Restaurant',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Trendy restaurant with ambient lighting',
      location: 'Gurgaon',
      area: '2500 sq ft',
      year: '2023'
    },
    {
      id: 6,
      title: 'Family Home Makeover',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Complete home renovation with modern touch',
      location: 'Faridabad',
      area: '2200 sq ft',
      year: '2023'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section ref={ref} className="portfolio">
      <div className="portfolio-bg"></div>
      <h2 className="section-title">Our Portfolio</h2>
      
      <div className="portfolio-filters">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="portfolio-item"
            onMouseEnter={() => setHoveredItem(project.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="portfolio-image">
              <img src={project.image} alt={project.title} />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-details">
                    <span><i className="fas fa-map-marker-alt"></i> {project.location}</span>
                    <span><i className="fas fa-ruler-combined"></i> {project.area}</span>
                    <span><i className="fas fa-calendar"></i> {project.year}</span>
                  </div>
                </div>
                <div className="portfolio-actions">
                  <button className="view-btn">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="expand-btn">
                    <i className="fas fa-expand"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;