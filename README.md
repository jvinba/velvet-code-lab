# 🚀 Animated 3D Portfolio Website

A modern, performant portfolio website built with React, Framer Motion, Three.js, and interactive particles.

## ✨ Features

- **🎨 Dark Theme Design** with vibrant gradient accents
- **🎭 Smooth Page Transitions** using Framer Motion
- **🎯 Interactive 3D Elements** with Three.js/React Three Fiber
- **⚡ Interactive Particles** that respond to mouse movements
- **📱 Mobile-First Responsive** design
- **♿ Accessibility Support** with reduced motion preferences
- **📧 Contact Form** with EmailJS integration
- **🎪 Animated Components** with tilt effects and micro-interactions

## 🏗️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom Design System
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Particles**: Custom SVG-based particle system
- **Email**: EmailJS for contact form
- **UI Components**: Shadcn/ui

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📧 Email Configuration

To enable the contact form:

1. Sign up for [EmailJS](https://emailjs.com)
2. Create environment variables:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── lib/                # Utilities and configurations
├── hooks/              # Custom React hooks
├── assets/             # Images and static assets
└── styles/             # Global styles
```

## 🎯 Performance Features

- **Lazy loading** for 3D components
- **Reduced motion** support for accessibility
- **Optimized particles** for mobile devices
- **Efficient animations** with proper cleanup

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Built with ❤️ using modern web technologies.