import React, { useState } from "react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [ref] = useScrollAnimation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Create WhatsApp message
    const message = `Hello RkEnterprise!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/9588563701?text=${message}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
    
    return false;
  };

  return (
    <section id="contact" ref={ref} className="contact">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> Sadh Nagar, Palam, New
            Delhi - 110001
          </p>
          <p>
            <i className="fas fa-phone"></i> +91 9588563701
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@rkenterprise.com
          </p>
          <p>
            <i className="fas fa-clock"></i> Mon - Sat: 9:00 AM - 7:00 PM
          </p>

          <h3 style={{ marginTop: "2rem" }}>Follow Us</h3>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <i
              className="fab fa-facebook"
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
            ></i>
            <i
              className="fab fa-instagram"
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
            ></i>
            <i
              className="fab fa-linkedin"
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
            ></i>
            <i
              className="fab fa-youtube"
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
            ></i>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="cta-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
