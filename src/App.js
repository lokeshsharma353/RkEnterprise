import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Stats from './components/Awards';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  useEffect(() => {
    document.body.classList.add('preload');
    const timer = setTimeout(() => {
      document.body.classList.remove('preload');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Services />
      <Process />
      <Portfolio />
      <Gallery />
      <Testimonials />
      <Stats />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;