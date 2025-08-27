import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={(e) => handleLinkClick(e, 'home')}>RkEnterprise</a>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
        <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
        <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Services</a></li>
        <li><a href="#gallery" onClick={(e) => handleLinkClick(e, 'gallery')}>Gallery</a></li>
        <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;