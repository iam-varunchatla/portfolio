# Varun Chatla - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS showcasing Cloud DevOps and MLOps expertise.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Performance**: Built with Vite for lightning-fast development and production builds
- **Interactive Components**: Animated sections using Framer Motion
- **Smooth Navigation**: Single-page application with smooth scrolling

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

## 🛠️ Installation & Setup

1. **Clone or navigate to the repository**
   ```bash
   cd d:\Aiml\portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   The application will automatically open at `http://localhost:3000`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🏗️ Project Structure

```
portfolio/
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx   # Navigation bar
│   │   ├── Hero.jsx     # Hero/landing section
│   │   ├── About.jsx    # About section
│   │   ├── Experience.jsx # Professional experience
│   │   ├── Projects.jsx # Featured projects
│   │   ├── Skills.jsx   # Technical skills
│   │   └── Contact.jsx  # Contact information
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles & Tailwind
├── index.html           # HTML template
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## 🎨 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Language**: JavaScript (ES6+)

## 🌟 Sections

1. **Hero**: Introduction and call-to-action
2. **About**: Professional summary and education
3. **Experience**: Professional work history
4. **Projects**: Featured portfolio projects
5. **Skills**: Technical skills and certifications
6. **Contact**: Contact information and social links

## 🎯 Customization

### Update Personal Information

Edit the content in the following files:
- Hero section: `src/components/Hero.jsx`
- About section: `src/components/About.jsx`
- Experience: `src/components/Experience.jsx`
- Projects: `src/components/Projects.jsx`
- Skills: `src/components/Skills.jsx`
- Contact: `src/components/Contact.jsx`

### Change Theme Colors

Modify colors in `tailwind.config.js`:
```javascript
colors: {
  primary: '#0A192F',    // Background color
  secondary: '#112240',  // Secondary background
  accent: '#64FFDA',     // Accent/highlight color
  text: '#8892B0',       // Text color
  textLight: '#CCD6F6',  // Light text color
}
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Deploy Options

- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag and drop `dist/` folder to Netlify
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload `dist/` contents to S3 bucket

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Varun Chatla**
- Cloud DevOps & MLOps Engineer
- MTech, BITS Pilani (pursuing)
- Location: India

---

Built with ❤️ using React and Tailwind CSS
