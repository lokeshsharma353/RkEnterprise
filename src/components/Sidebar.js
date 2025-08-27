import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <button className={`sidebar-toggle ${isOpen ? 'hidden' : ''}`} onClick={toggleSidebar}>
        <i className="fas fa-bars"></i>
      </button>
      
      <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h3>RkEnterprise</h3>
          <button className="sidebar-close" onClick={toggleSidebar}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <a href="#home" onClick={() => scrollToSection('home')}>
            <i className="fas fa-home"></i>
            <span>Home</span>
          </a>
          <a href="#about" onClick={() => scrollToSection('about')}>
            <i className="fas fa-user"></i>
            <span>About</span>
          </a>
          <a href="#services" onClick={() => scrollToSection('services')}>
            <i className="fas fa-cogs"></i>
            <span>Services</span>
          </a>
          <a href="#gallery" onClick={() => scrollToSection('gallery')}>
            <i className="fas fa-images"></i>
            <span>Gallery</span>
          </a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>
            <i className="fas fa-envelope"></i>
            <span>Contact</span>
          </a>
        </nav>
        
        <div className="sidebar-contact">
          <div className="sidebar-contact-item">
            <i className="fas fa-phone"></i>
            <span>+91 9588563701</span>
          </div>
          <div className="sidebar-contact-item">
            <i className="fas fa-envelope"></i>
            <span>info@rkenterprise.com</span>
          </div>
        </div>
      </div>
      
      <div className={`sidebar-overlay ${isOpen ? 'overlay-active' : ''}`} onClick={toggleSidebar}></div>
    </>
  );
};

export default Sidebar;