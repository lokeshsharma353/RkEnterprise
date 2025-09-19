// Premium Interior Design Website - Advanced JavaScript

// Portfolio Data
const portfolioData = [
  {
    id: 1,
    title: "Luxury Penthouse",
    category: "luxury",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Modern", "Luxury", "Penthouse"],
    location: "Gurgaon, NCR",
    area: "4500 sq ft",
    year: "2023",
    description: "A stunning penthouse featuring contemporary design with panoramic city views, premium finishes, and state-of-the-art amenities."
  },
  {
    id: 2,
    title: "Modern Villa",
    category: "residential",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Villa", "Contemporary", "Spacious"],
    location: "Noida, NCR",
    area: "3200 sq ft",
    year: "2023",
    description: "Contemporary villa design with open-plan living, natural lighting, and seamless indoor-outdoor integration."
  },
  {
    id: 3,
    title: "Corporate Office",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Office", "Professional", "Modern"],
    location: "Connaught Place, Delhi",
    area: "6000 sq ft",
    year: "2023",
    description: "Modern corporate office space designed for productivity and collaboration with ergonomic furniture and smart technology."
  },
  {
    id: 4,
    title: "Boutique Hotel",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Hotel", "Luxury", "Hospitality"],
    location: "Aerocity, Delhi",
    area: "8000 sq ft",
    year: "2023",
    description: "Boutique hotel interior combining luxury and comfort with bespoke furnishings and ambient lighting design."
  },
  {
    id: 5,
    title: "Family Home",
    category: "residential",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Family", "Cozy", "Traditional"],
    location: "Faridabad, NCR",
    area: "2800 sq ft",
    year: "2023",
    description: "Warm and inviting family home with traditional elements, cozy living spaces, and child-friendly design features."
  },
  {
    id: 6,
    title: "Designer Apartment",
    category: "luxury",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Apartment", "Designer", "Chic"],
    location: "Greater Kailash, Delhi",
    area: "2200 sq ft",
    year: "2023",
    description: "Chic designer apartment featuring bold colors, artistic elements, and sophisticated urban living solutions."
  }
];

// Testimonials Data
const testimonialsData = [
  {
    id: 1,
    name: "Rajesh Sharma",
    location: "Gurgaon",
    content: "RkEnterprise transformed our home into a masterpiece. The attention to detail and creativity exceeded our expectations. Truly exceptional work!",
    avatar: "RS",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Gupta",
    location: "Delhi",
    content: "Professional service and stunning designs. Our office space now reflects our brand perfectly. The team's expertise is unmatched.",
    avatar: "PG",
    rating: 5
  },
  {
    id: 3,
    name: "Vikram Singh",
    location: "Noida",
    content: "From concept to completion, the experience was seamless. Our living room is now the heart of our home. Highly recommended!",
    avatar: "VS",
    rating: 5
  },
  {
    id: 4,
    name: "Anita Mehta",
    location: "Faridabad",
    content: "Outstanding work quality and timely delivery. RkEnterprise made our dream home a reality with their innovative design solutions.",
    avatar: "AM",
    rating: 5
  }
];

// Global Variables
let currentTestimonial = 0;
let visibleProjects = 6;
let currentFilter = 'all';
let isLoading = false;

// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const scrollProgress = document.getElementById('scrollProgress');
const backToTop = document.getElementById('backToTop');

// Initialize Website
document.addEventListener('DOMContentLoaded', function() {
  initializeWebsite();
  
  // Show lead popup after 3 seconds
  setTimeout(() => {
    showLeadPopup();
  }, 3000);
});

function initializeWebsite() {
  // Hide loading screen
  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 2000);

  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }

  // Initialize components
  initializeCustomCursor();
  initializeScrollEffects();
  initializeNavigation();
  initializeCounters();
  loadPortfolio();
  loadTestimonials();
  initializePortfolioFilters();
  
  // Add event listeners
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
}

// Custom Cursor - Removed
function initializeCustomCursor() {
  // Custom cursor functionality removed
  return;
}

// Scroll Effects
function initializeScrollEffects() {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
}

function handleScroll() {
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  // Update scroll progress
  if (scrollProgress) {
    scrollProgress.style.width = scrollPercent + '%';
  }

  // Update navbar
  if (navbar) {
    if (scrollTop > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Show/hide back to top button
  if (backToTop) {
    if (scrollTop > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
}

// Navigation
function initializeNavigation() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

function toggleMenu() {
  navLinks.classList.toggle('active');
}

function closeMenu() {
  navLinks.classList.remove('active');
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  closeMenu();
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Counter Animation
function initializeCounters() {
  const counters = document.querySelectorAll('[data-count]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-count'));
        animateCounter(counter, target);
        observer.unobserve(counter);
      }
    });
  });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + (target === 100 ? '%' : '+');
  }, 40);
}

// Portfolio Functions
function loadPortfolio() {
  const portfolioGrid = document.getElementById('portfolioGrid');
  if (!portfolioGrid) return;

  portfolioGrid.innerHTML = '';
  
  const filteredProjects = currentFilter === 'all' 
    ? portfolioData 
    : portfolioData.filter(project => project.category === currentFilter);

  const projectsToShow = filteredProjects.slice(0, visibleProjects);

  projectsToShow.forEach((project, index) => {
    const projectElement = createPortfolioItem(project, index);
    portfolioGrid.appendChild(projectElement);
  });
}

function createPortfolioItem(project, index) {
  const item = document.createElement('div');
  item.className = 'portfolio-item';
  item.setAttribute('data-aos', 'fade-up');
  item.setAttribute('data-aos-delay', (index % 3) * 100);
  item.onclick = () => openProjectModal(project.id);
  
  item.innerHTML = `
    <div class="portfolio-image" style="background-image: url('${project.image}')">
      <div class="portfolio-overlay">
        <h3 style="color: white; margin-bottom: 1rem;">${project.title}</h3>
        <button class="btn-primary">
          <span>View Details</span>
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
    <div class="portfolio-info">
      <h3>${project.title}</h3>
      <p>Premium ${project.category} design project</p>
      <div class="portfolio-tags">
        ${project.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
      </div>
    </div>
  `;
  
  return item;
}

function initializePortfolioFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Update filter and reload portfolio
      currentFilter = filter;
      visibleProjects = 6;
      loadPortfolio();
    });
  });
}

function loadMoreProjects() {
  visibleProjects += 3;
  loadPortfolio();
}

function openProjectModal(projectId) {
  const project = portfolioData.find(p => p.id === projectId);
  if (!project) return;
  
  const modal = document.createElement('div');
  modal.className = 'project-modal-overlay';
  modal.innerHTML = `
    <div class="project-modal-content">
      <button class="modal-close" onclick="closeProjectModal()">
        <i class="fas fa-times"></i>
      </button>
      <div class="project-modal-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="project-modal-info">
        <h2>${project.title}</h2>
        <p class="project-description">${project.description}</p>
        <div class="project-details">
          <div class="detail-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>Location: ${project.location}</span>
          </div>
          <div class="detail-item">
            <i class="fas fa-ruler-combined"></i>
            <span>Area: ${project.area}</span>
          </div>
          <div class="detail-item">
            <i class="fas fa-calendar"></i>
            <span>Year: ${project.year}</span>
          </div>
          <div class="detail-item">
            <i class="fas fa-tag"></i>
            <span>Category: ${project.category}</span>
          </div>
        </div>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <button class="btn-primary" onclick="scrollToSection('contact'); closeProjectModal();">
          <span>Get Similar Design</span>
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  
  // Add modal styles
  const style = document.createElement('style');
  style.textContent = `
    .project-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2000;
      padding: 2rem;
    }
    .project-modal-content {
      background: var(--bg-primary);
      border-radius: var(--border-radius);
      max-width: 900px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    .project-modal-image {
      position: relative;
    }
    .project-modal-image img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: var(--border-radius);
    }
    .project-modal-info {
      padding: 2rem;
    }
    .project-modal-info h2 {
      color: var(--text-primary);
      margin-bottom: 1rem;
      font-size: 2rem;
    }
    .project-description {
      color: var(--text-secondary);
      margin-bottom: 2rem;
      line-height: 1.6;
    }
    .project-details {
      margin-bottom: 2rem;
    }
    .detail-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
      color: var(--text-secondary);
    }
    .detail-item i {
      color: var(--primary);
      width: 20px;
    }
    .project-tags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-bottom: 2rem;
    }
    .project-tag {
      background: rgba(0, 212, 255, 0.15);
      color: var(--primary);
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }
    @media (max-width: 768px) {
      .project-modal-content {
        grid-template-columns: 1fr;
        margin: 1rem;
      }
      .project-modal-info {
        padding: 1rem;
      }
    }
  `;
  document.head.appendChild(style);
}

function closeProjectModal() {
  const modal = document.querySelector('.project-modal-overlay');
  if (modal) {
    modal.remove();
    document.body.style.overflow = 'auto';
  }
}

// Testimonials Functions
function loadTestimonials() {
  const testimonialsSlider = document.getElementById('testimonialsSlider');
  const testimonialsDots = document.getElementById('testimonialsDots');
  
  if (!testimonialsSlider || !testimonialsDots) return;

  // Load testimonials
  testimonialsSlider.innerHTML = '';
  testimonialsDots.innerHTML = '';

  testimonialsData.forEach((testimonial, index) => {
    // Create testimonial item
    const testimonialItem = document.createElement('div');
    testimonialItem.className = `testimonial-item ${index === 0 ? 'active' : ''}`;
    testimonialItem.style.display = index === 0 ? 'block' : 'none';
    
    testimonialItem.innerHTML = `
      <div class="testimonial-content">"${testimonial.content}"</div>
      <div class="testimonial-author">
        <div class="author-avatar">${testimonial.avatar}</div>
        <div class="author-info">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.location}</p>
        </div>
      </div>
    `;
    
    testimonialsSlider.appendChild(testimonialItem);

    // Create dot
    const dot = document.createElement('div');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => showTestimonial(index));
    testimonialsDots.appendChild(dot);
  });

  // Auto-rotate testimonials
  setInterval(() => {
    nextTestimonial();
  }, 5000);
}

function showTestimonial(index) {
  const testimonialItems = document.querySelectorAll('.testimonial-item');
  const dots = document.querySelectorAll('.testimonials-dots .dot');

  testimonialItems.forEach((item, i) => {
    item.style.display = i === index ? 'block' : 'none';
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  currentTestimonial = index;
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonialsData.length;
  showTestimonial(currentTestimonial);
}

function prevTestimonial() {
  currentTestimonial = currentTestimonial === 0 ? testimonialsData.length - 1 : currentTestimonial - 1;
  showTestimonial(currentTestimonial);
}

// Modal Functions
function openConsultationModal() {
  const modal = document.getElementById('consultationModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeConsultationModal() {
  const modal = document.getElementById('consultationModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

async function submitConsultation(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    projectType: formData.get('projectType'),
    budget: formData.get('budget'),
    details: formData.get('details')
  };

  try {
    // Send to backend
    await fetch('/api/consultation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  } catch (error) {
    console.log('Backend not available, continuing with WhatsApp only');
  }

  // Create WhatsApp message
  const message = `New Consultation Request:%0A%0AName: ${data.name}%0APhone: ${data.phone}%0AEmail: ${data.email}%0AProject Type: ${data.projectType}%0ABudget: ${data.budget}%0ADetails: ${data.details}`;
  const whatsappUrl = `https://wa.me/9588563701?text=${message}`;
  
  window.open(whatsappUrl, '_blank');
  closeConsultationModal();
  event.target.reset();
  
  // Show success message
  showNotification('Consultation request sent! We\'ll contact you soon.', 'success');
}

// Contact Form
async function submitForm(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message')
  };

  try {
    // Send to backend
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  } catch (error) {
    console.log('Backend not available, continuing with WhatsApp only');
  }

  // Create WhatsApp message
  const message = `New Contact Form Submission:%0A%0AName: ${data.name}%0AEmail: ${data.email}%0APhone: ${data.phone}%0AService: ${data.service}%0AMessage: ${data.message}`;
  const whatsappUrl = `https://wa.me/9588563701?text=${message}`;
  
  window.open(whatsappUrl, '_blank');
  event.target.reset();
  
  // Show success message
  showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
}

// Theme Toggle - Removed

// Notification System
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
      <span>${message}</span>
    </div>
  `;
  
  // Add notification styles
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 2rem;
    background: ${type === 'success' ? '#10B981' : '#3B82F6'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: 0 8px 40px rgba(0,0,0,0.12);
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 5000);
}

// Resize Handler
function handleResize() {
  // Handle responsive design changes
  return;
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
  const modal = document.getElementById('consultationModal');
  if (modal && e.target === modal) {
    closeConsultationModal();
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('navLinks');
  
  if (navLinks && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    closeMenu();
  }
});

// Lead Capture Popup Functions
function showLeadPopup() {
  const popup = document.getElementById('leadPopup');
  if (popup && !localStorage.getItem('leadPopupShown')) {
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLeadPopup() {
  const popup = document.getElementById('leadPopup');
  if (popup) {
    popup.classList.remove('active');
    document.body.style.overflow = 'auto';
    localStorage.setItem('leadPopupShown', 'true');
  }
}

async function submitLeadPopup(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone')
  };

  try {
    // Send to backend
    await fetch('/api/lead-capture', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  } catch (error) {
    console.log('Backend not available, continuing with WhatsApp only');
  }

  // Hide form and show thank you message
  const form = document.getElementById('leadPopupForm');
  const thankYou = document.getElementById('thankYouMessage');
  
  form.style.display = 'none';
  thankYou.style.display = 'block';
  
  // Auto close after 3 seconds
  setTimeout(() => {
    closeLeadPopup();
    form.style.display = 'block';
    thankYou.style.display = 'none';
    form.reset();
  }, 3000);
  
  // Create WhatsApp message
  const message = `New Lead Capture:%0A%0AName: ${data.name}%0AEmail: ${data.email}%0APhone: ${data.phone || 'Not provided'}`;
  const whatsappUrl = `https://wa.me/9588563701?text=${message}`;
  
  // Send to WhatsApp (optional - opens in new tab)
  window.open(whatsappUrl, '_blank');
}

// Close popup when clicking outside
document.addEventListener('click', (e) => {
  const popup = document.getElementById('leadPopup');
  const popupContent = document.querySelector('.popup-content');
  if (popup && e.target === popup && !popupContent.contains(e.target)) {
    closeLeadPopup();
  }
});

// Theme functionality removed