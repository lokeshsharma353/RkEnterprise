import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Stats = () => {
  const [ref] = useScrollAnimation();
  
  const statistics = [
    {
      icon: 'fas fa-home',
      number: '150+',
      title: 'Projects Completed',
      description: 'Successful interior design projects'
    },
    {
      icon: 'fas fa-users',
      number: '120+',
      title: 'Happy Clients',
      description: 'Satisfied customers across Delhi NCR'
    },
    {
      icon: 'fas fa-calendar',
      number: '10+',
      title: 'Years Experience',
      description: 'Decade of design expertise'
    },
    {
      icon: 'fas fa-star',
      number: '4.9',
      title: 'Client Rating',
      description: 'Average rating from our clients'
    }
  ];

  return (
    <section ref={ref} className="awards">
      <div className="awards-bg"></div>
      <h2 className="section-title">Our Achievements</h2>
      <div className="awards-grid">
        {statistics.map((stat, index) => (
          <div key={index} className="award-card">
            <div className="award-icon">
              <i className={stat.icon}></i>
            </div>
            <div className="award-content">
              <h3>{stat.number}</h3>
              <p>{stat.title}</p>
              <span className="award-year">{stat.description}</span>
            </div>
            <div className="award-shine"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;