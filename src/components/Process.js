import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [ref] = useScrollAnimation();

  const steps = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Consultation',
      description: 'Free initial consultation to understand your vision and requirements',
      details: 'Our expert designers visit your space, discuss your preferences, lifestyle, and budget to create a personalized design strategy.'
    },
    {
      icon: 'fas fa-drafting-compass',
      title: 'Design & Planning',
      description: '3D visualization and detailed planning of your dream space',
      details: 'We create detailed 3D renderings, floor plans, and material selections with multiple design options for your approval.'
    },
    {
      icon: 'fas fa-hammer',
      title: 'Execution',
      description: 'Professional execution with premium materials and skilled craftsmen',
      details: 'Our certified contractors and skilled artisans bring your design to life using premium materials and latest techniques.'
    },
    {
      icon: 'fas fa-key',
      title: 'Handover',
      description: 'Final inspection and handover of your transformed space',
      details: 'Complete quality check, final touches, and handover with maintenance guidelines and warranty documentation.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section ref={ref} className="process">
      <div className="process-bg"></div>
      <h2 className="section-title">Our Design Process</h2>
      <div className="process-container">
        <div className="process-timeline">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`process-step ${index === activeStep ? 'active' : ''} ${index < activeStep ? 'completed' : ''}`}
              onClick={() => setActiveStep(index)}
            >

              <div className="step-icon">
                <i className={step.icon}></i>
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="step-details">
                  <p>{step.details}</p>
                </div>
              </div>
              <div className="step-connector"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;