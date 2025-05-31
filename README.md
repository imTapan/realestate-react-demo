# Real Estate React Demo

A modern real estate listing application built with React, featuring property listings, detailed property views, and inquiry functionality.

## Features

- 🏠 Property Listings with Category Filtering
- 🔍 Detailed Property Views
- 📝 Property Inquiry System
- 📱 Responsive Design
- 🔒 Privacy Policy and Terms Pages
- 📋 Contact Form

## Tech Stack

- React
- React Router for navigation
- Tailwind CSS for styling
- Vite for build tooling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd realestate-react-demo
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/         # React components
│   ├── Contact.jsx     # Contact page
│   ├── Footer.jsx     # Site footer
│   ├── Home.jsx       # Home page with listings
│   ├── Navbar.jsx     # Navigation bar
│   ├── PrivacyPolicy.jsx  # Privacy policy page
│   ├── PropertyDetail.jsx # Property details page
│   └── Terms.jsx      # Terms and conditions page
├── data/
│   └── properties.js  # Property listings data
├── App.jsx           # Main application component
├── main.jsx         # Application entry point
└── index.css        # Global styles
```

## Features Description

### Property Listings
- Filter properties by category
- Display property cards with key information
- Responsive grid layout

### Property Details
- Detailed property information
- Image gallery
- Property features list
- Inquiry form modal

### Contact System
- Property inquiry form
- Contact page for general inquiries
- Form validation

### Navigation
- Sticky header with logo
- Responsive navigation menu
- Footer with quick links and contact information

## Styling

The application uses Tailwind CSS for styling with:
- Responsive design
- Custom color scheme
- Modern UI components
- Consistent spacing and typography

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request