# Portfolio Documentation

## Table of Contents
1. Project Structure
2. Core Components
3. Styling System
4. Animation System
5. Background System
6. Performance Optimizations
7. Customization Guide
8. Best Practices
9. Accessibility Guidelines

## 1. Project Structure
```
src/
  ├── components/
  │   ├── Navigation.jsx       # Main navigation with theme toggle
  │   ├── MobileMenu.jsx      # Responsive mobile menu
  │   ├── Hero.jsx            # Hero section with main CTA
  │   ├── Projects.jsx        # Projects showcase
  │   ├── Contact.jsx         # Contact form section
  │   ├── ThemeToggle.jsx     # Dark/light mode toggle
  │   ├── SectionDivider.jsx  # Animated section separator
  │   └── SocialLinks.jsx     # Social media links
  ├── context/
  │   └── ThemeContext.jsx    # Theme management
  ├── config/
  │   └── motion.js           # Animation configurations
  ├── styles/
  │   └── index.css           # Global styles
  ├── App.jsx                 # Main application component
  └── main.jsx               # Application entry point
```

## 2. Core Components

### Navigation Component
```jsx
// Navigation styling
className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-7xl z-50 px-4"

// Navigation container
className="w-full bg-white/80 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm"

// Navigation items
className="px-4 py-2 text-gray-600 hover:text-custom-accent rounded-full text-sm transition-colors"
```

### Hero Section
```jsx
// Hero container
className="relative min-h-screen w-full pt-20 pb-8 lg:pt-32 lg:pb-8 z-10"

// Main heading
className="text-4xl sm:text-5xl lg:text-7xl font-normal text-gray-900 mb-6 tracking-tight font-sans"

// CTA buttons
className="group px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg flex items-center gap-3 transition-all duration-500 ease-in-out justify-center"
```

### Projects Section
```jsx
// Project card
className="backdrop-blur-sm bg-white/80 rounded-2xl shadow-lg overflow-hidden border border-gray-100"

// Technology tags
className="px-4 py-1.5 bg-emerald-100/80 text-custom-accent rounded-full text-sm font-medium backdrop-blur-sm"
```

## 3. Styling System

### Color System
```javascript
// tailwind.config.js
colors: {
  base: {
    lightest: '#EEEEEE',  // Hero section background
    light: '#E5E5E5',     // Projects section
    medium: '#DCDCDC',    // Additional sections
    dark: '#D3D3D3',      // Contact section
    accent: '#E1D2CF',    // Accent color
  }
}
```

### Typography
```jsx
// Headings
className="font-sans text-gray-900 font-normal"  // Regular text
className="font-sans text-gray-900 font-bold"    // Bold text

// Body text
className="text-lg sm:text-xl text-gray-600 leading-relaxed"
```

### Gradients
```javascript
backgroundImage: {
  'hero-pattern': `
    linear-gradient(0deg, rgb(238, 238, 238), rgb(238, 238, 238)),
    radial-gradient(70.02% 70.02% at 50% 87.31%, rgb(225, 210, 207) 0%, rgb(238, 238, 238) 100%)
  `,
  'section-gradient': `
    linear-gradient(to bottom, 
      rgba(238, 238, 238, 1) 0%,
      rgba(229, 229, 229, 0.95) 33%,
      rgba(220, 220, 220, 0.9) 66%,
      rgba(211, 211, 211, 0.85) 100%
    )
  `
}
```

## 4. Animation System

### Motion Configuration
```javascript
// config/motion.js

// Base easing
export const easing = [0.22, 1, 0.36, 1];

// Text animations
export const fadeInUp = {
    initial: {
        y: 30,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: easing,
            delay: 0.2
        }
    }
};

// Section transitions
export const sectionTransition = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing
        }
    }
};

// Line animations
export const lineAnimation = {
    initial: { scaleX: 0 },
    animate: {
        scaleX: 1,
        transition: {
            duration: 1.5,
            ease: easing
        }
    }
};
```

### Viewport Detection
```jsx
// Component level
<motion.div
    variants={fadeInUp}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-100px" }}
>
```

## 5. Background System

### Base Setup
```jsx
// App.jsx
const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [0, 0.05, 0.1, 0.15]
);

// Background layers
<div className="fixed inset-0 bg-base-lightest" />
<motion.div 
    className="fixed inset-0 bg-gray-900"
    style={{ opacity: backgroundOpacity }}
/>
<div className="fixed inset-0 bg-hero-pattern opacity-50" />
```

## 6. Performance Optimizations

### Animation Performance
```jsx
// Use once property for single animation
viewport={{ once: true }}

// Lazy load images
loading="lazy"

// Use will-change for hardware acceleration
className="will-change-transform"
```

### Render Optimization
```jsx
// Prevent unnecessary re-renders
const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
    setIsMounted(true);
}, []);

if (!isMounted) return null;
```

## 7. Customization Guide

### Theme Customization
1. Update colors in tailwind.config.js
2. Modify background gradients
3. Adjust animation timings
4. Customize component styles

### Content Updates
1. Modify text content in components
2. Update project information
3. Customize social links
4. Adjust form fields

### Animation Customization
1. Modify easing functions
2. Adjust animation durations
3. Update transition delays
4. Customize viewport margins

## 8. Best Practices

### Performance
- Use viewport-based animations
- Implement proper lazy loading
- Optimize background transitions
- Monitor scroll performance

### Accessibility
- Maintain proper contrast ratios
- Include ARIA labels
- Support keyboard navigation
- Respect motion preferences

### Responsive Design
- Test on multiple devices
- Ensure mobile-first approach
- Verify touch interactions
- Check background behavior

## 9. Development Guidelines

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Testing
- Verify all animations
- Check responsive behavior
- Test theme switching
- Validate form functionality

### Deployment
- Build production version
- Test performance
- Verify assets loading
- Check SEO elements