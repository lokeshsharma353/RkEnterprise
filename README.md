# RkEnterprise - Interior Design Website with Backend

A premium interior design website for RkEnterprise, Delhi's leading interior design company with backend data storage.

## Features

- **Frontend**: React.js, HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Data Storage**: JSON files (easily upgradeable to database)
- **Lead Capture**: Popup form with backend storage
- **Admin Dashboard**: View all submissions
- **WhatsApp Integration**: Automatic message forwarding

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Server
```bash
npm start
```

### 3. Access the Website
- **Website**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3000/admin.html

## Backend Endpoints

- `POST /api/lead-capture` - Store lead capture data
- `POST /api/consultation` - Store consultation requests  
- `POST /api/contact` - Store contact form submissions
- `GET /api/admin/data` - Get all stored data (admin)

## Data Storage

All form submissions are stored in JSON files in the `/data` folder:
- `leads.json` - Lead capture submissions
- `consultations.json` - Consultation requests
- `contacts.json` - Contact form submissions

## Admin Dashboard

Access the admin dashboard at `/admin.html` to:
- View all form submissions
- See statistics and counts
- Filter by submission type
- View detailed information

## Deployment

For production deployment:
1. Use a process manager like PM2
2. Set up a reverse proxy (Nginx)
3. Consider upgrading to a database (MongoDB/PostgreSQL)
4. Add authentication for admin dashboard

## Live Demo

View the live website at: [https://jangirakesh.github.io/RkEnterprise](https://jangirakesh.github.io/RkEnterprise)