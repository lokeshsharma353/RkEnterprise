const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// Store lead capture data
app.post('/api/lead-capture', (req, res) => {
  const { name, email, phone } = req.body;
  const timestamp = new Date().toISOString();
  
  const leadData = {
    id: Date.now(),
    name,
    email,
    phone: phone || 'Not provided',
    type: 'Lead Capture',
    timestamp,
    date: new Date().toLocaleDateString('en-IN'),
    time: new Date().toLocaleTimeString('en-IN')
  };

  // Save to JSON file
  const filePath = path.join(dataDir, 'leads.json');
  let leads = [];
  
  if (fs.existsSync(filePath)) {
    leads = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
  
  leads.push(leadData);
  fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));
  
  res.json({ success: true, message: 'Lead captured successfully' });
});

// Store consultation requests
app.post('/api/consultation', (req, res) => {
  const { name, phone, email, projectType, budget, details } = req.body;
  const timestamp = new Date().toISOString();
  
  const consultationData = {
    id: Date.now(),
    name,
    phone,
    email,
    projectType,
    budget,
    details,
    type: 'Consultation Request',
    timestamp,
    date: new Date().toLocaleDateString('en-IN'),
    time: new Date().toLocaleTimeString('en-IN')
  };

  const filePath = path.join(dataDir, 'consultations.json');
  let consultations = [];
  
  if (fs.existsSync(filePath)) {
    consultations = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
  
  consultations.push(consultationData);
  fs.writeFileSync(filePath, JSON.stringify(consultations, null, 2));
  
  res.json({ success: true, message: 'Consultation request saved successfully' });
});

// Store contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, message } = req.body;
  const timestamp = new Date().toISOString();
  
  const contactData = {
    id: Date.now(),
    name,
    email,
    phone,
    service,
    message,
    type: 'Contact Form',
    timestamp,
    date: new Date().toLocaleDateString('en-IN'),
    time: new Date().toLocaleTimeString('en-IN')
  };

  const filePath = path.join(dataDir, 'contacts.json');
  let contacts = [];
  
  if (fs.existsSync(filePath)) {
    contacts = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
  
  contacts.push(contactData);
  fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));
  
  res.json({ success: true, message: 'Contact form submitted successfully' });
});

// Get all data (admin endpoint)
app.get('/api/admin/data', (req, res) => {
  const leads = fs.existsSync(path.join(dataDir, 'leads.json')) 
    ? JSON.parse(fs.readFileSync(path.join(dataDir, 'leads.json'), 'utf8')) 
    : [];
  
  const consultations = fs.existsSync(path.join(dataDir, 'consultations.json')) 
    ? JSON.parse(fs.readFileSync(path.join(dataDir, 'consultations.json'), 'utf8')) 
    : [];
  
  const contacts = fs.existsSync(path.join(dataDir, 'contacts.json')) 
    ? JSON.parse(fs.readFileSync(path.join(dataDir, 'contacts.json'), 'utf8')) 
    : [];

  res.json({
    leads: leads.reverse(),
    consultations: consultations.reverse(),
    contacts: contacts.reverse(),
    total: leads.length + consultations.length + contacts.length
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});