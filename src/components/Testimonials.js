import React, { useState, useEffect } from "react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [ref] = useScrollAnimation();

  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "Gurgaon",
      text: "RkEnterprise transformed our home into a masterpiece. The attention to detail and creativity exceeded our expectations!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      text: "Professional service and stunning designs. Our office space now reflects our brand perfectly. Highly recommended!",
      rating: 5,
    },
    {
      name: "Rahul Singh",
      location: "Noida",
      text: "From concept to completion, the team was exceptional. Our living room is now the heart of our home.",
      rating: 5,
    },
    {
      name: "Vikram Gupta",
      location: "Faridabad",
      text: "Outstanding work quality and timely delivery. RkEnterprise made our dream home a reality.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section ref={ref} className="testimonials">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <div className="stars">
            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
              <i key={i} className="fas fa-star"></i>
            ))}
          </div>
          <p className="testimonial-text">
            "{testimonials[currentTestimonial].text}"
          </p>
          <div className="testimonial-author">
            <h4>{testimonials[currentTestimonial].name}</h4>
            <span>{testimonials[currentTestimonial].location}</span>
          </div>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentTestimonial ? "active" : ""}`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
