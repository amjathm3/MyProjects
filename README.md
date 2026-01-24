# Resume Website - React + Tailwind CSS

A modern, responsive resume website built with React and Tailwind CSS.

## Features

- **React Components**: Modular, reusable components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Modern Design**: Clean and professional design with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Scrolling**: Navigation with smooth scroll effects
- **Interactive Elements**: Hover effects and animations throughout
- **Contact Form**: Functional contact form with React state management

## Tech Stack

- React 18
- Tailwind CSS 3
- Vite (Build tool)
- PostCSS & Autoprefixer

## Getting Started

### Prerequisites

- Node.js 18+ (recommended) or Node.js 16+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation component
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About section
│   │   ├── Experience.jsx  # Experience timeline
│   │   ├── Education.jsx   # Education cards
│   │   ├── Skills.jsx      # Skills section
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles with Tailwind
├── index.html
├── package.json
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── postcss.config.js       # PostCSS configuration
```

## Customization

### Updating Content

Edit the component files in `src/components/` to update:
- **Hero.jsx**: Your name, title, and description
- **About.jsx**: Personal and professional summary
- **Experience.jsx**: Work experience entries
- **Education.jsx**: Educational background
- **Skills.jsx**: Your skills organized by category
- **Contact.jsx**: Contact information and form

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#6366f1',  // Change this
        dark: '#4f46e5',     // Change this
      },
    },
  },
}
```

### Adding Your Photo

Replace the SVG placeholder in `src/components/Hero.jsx`:

```jsx
<img 
  src="/your-photo.jpg" 
  alt="Your Name" 
  className="w-full h-full rounded-full object-cover"
/>
```

### Updating Social Links

Edit the social links in `src/components/Hero.jsx`:

```jsx
<a href="https://linkedin.com/in/yourprofile" className="...">LinkedIn</a>
<a href="https://github.com/yourusername" className="...">GitHub</a>
<a href="mailto:your.email@example.com" className="...">Email</a>
```

## Components Overview

### Navbar
- Fixed navigation bar with smooth scrolling
- Mobile-responsive hamburger menu
- Active link highlighting on scroll

### Hero
- Gradient background
- Call-to-action buttons
- Social media links
- Profile image placeholder

### About
- Personal and professional summary
- Clean, readable layout

### Experience
- Timeline layout
- Animated on scroll
- Hover effects

### Education
- Card-based layout
- Responsive grid

### Skills
- Organized by category
- Animated skill tags
- Hover effects

### Contact
- Contact information
- Functional form with React state
- Form validation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this template for your personal resume website.
