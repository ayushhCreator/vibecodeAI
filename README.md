# VibeCode AI - Landing Page

A stunning, modern, and production-ready landing page for VibeCode AI - an AI coding assistant that helps developers write better code faster, with a focus on creating beautiful UIs.

## 🚀 Features

- **Modern Design**: Inspired by industry leaders like Linear, Vercel, and Stripe
- **Dark/Light Mode**: Beautiful theme switching with system preference detection
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Rich animations and micro-interactions using Framer Motion
- **Component Architecture**: Well-organized, reusable components with TypeScript
- **Performance**: Optimized for speed and SEO

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Heroicons + Lucide React
- **Font**: Inter (Google Fonts)

## 🎨 Design System

### Color Palette
- **Primary**: Electric Purple (#8B5CF6)
- **Background (Dark)**: Almost Black (#020202)
- **Background (Light)**: Off White (#FAFAFA)
- **Text Primary**: Light Gray (#E5E5E5) / Dark Gray (#0A0A0A)
- **Text Secondary**: Medium Gray (#A3A3A3) / Muted Gray (#6B7280)

### Visual Effects
- Aurora/Gradient backgrounds with smooth animations
- Glassmorphism effects with backdrop blur
- Bento grid layouts for feature sections
- Smooth hover states and micro-interactions

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main landing page
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx       # Enhanced button with variants
│   │   ├── card.tsx         # Card component
│   │   └── accordion.tsx    # Accordion for FAQ
│   ├── landing/             # Landing page sections
│   │   ├── navbar.tsx       # Navigation with mobile menu
│   │   ├── hero-section.tsx # Hero with interactive code preview
│   │   ├── features-section.tsx # Bento grid features
│   │   ├── testimonials-section.tsx # Customer testimonials
│   │   ├── pricing-section.tsx # Pricing tiers
│   │   ├── faq-section.tsx  # FAQ accordion
│   │   └── footer.tsx       # Site footer
│   ├── theme-provider.tsx   # Theme context provider
│   └── theme-toggle.tsx     # Dark/light mode toggle
└── lib/
    └── utils.ts             # Utility functions
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Sections Overview

### 1. Navigation Bar
- Sticky navigation with glassmorphism effect
- Mobile-responsive hamburger menu
- Theme toggle and CTA buttons

### 2. Hero Section
- Animated gradient backgrounds
- Interactive code preview with rotating examples
- Floating UI elements and smooth animations

### 3. Features Section
- Bento grid layout with varying card sizes
- Detailed feature descriptions with hover effects
- Icon animations and gradient backgrounds

### 4. Testimonials Section
- Customer testimonials with ratings
- Trust indicators and metrics
- Hover animations and profile images

### 5. Pricing Section
- Three-tier pricing with popular plan highlighting
- Monthly/yearly toggle with savings indicator
- Feature comparisons and CTAs

### 6. FAQ Section
- Accordion-style questions and answers
- Smooth expand/collapse animations

### 7. Footer
- Organized link sections
- Company information and social links

## 🎯 Key Features Implemented

### Interactive Elements & Animations
- ✅ Floating icons in hero section
- ✅ Rotating code examples with typing animation
- ✅ Smooth scroll-triggered animations
- ✅ Hover effects on all interactive elements
- ✅ Mobile-responsive navigation menu
- ✅ Theme toggle with smooth transitions

### Enhanced Code Preview
- ✅ Multiple rotating code examples
- ✅ Terminal-style interface with status indicators
- ✅ Syntax highlighting and smooth transitions
- ✅ Progress indicators for examples

### Detailed Feature Descriptions
- ✅ Expanded feature cards with bullet points
- ✅ Gradient backgrounds and hover effects
- ✅ Icon animations and micro-interactions
- ✅ Call-to-action buttons

### Micro-interactions
- ✅ Button hover and click animations
- ✅ Card lift effects on hover
- ✅ Smooth transitions throughout
- ✅ Loading states and progress indicators

### Enhanced Color Scheme & Spacing
- ✅ Refined color palette with better contrast
- ✅ Improved spacing system (8px grid)
- ✅ Enhanced gradients and visual effects
- ✅ Better typography hierarchy

## 🎨 Customization

The design system is built with CSS custom properties, making it easy to customize:

- Colors: Modify the CSS variables in `globals.css`
- Spacing: Built on an 8px grid system
- Typography: Uses Inter font with consistent scale
- Components: All components accept className props for customization

## 📦 Build & Deploy

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**:
   ```bash
   vercel --prod
   ```

## 🔧 Development

- **Linting**: `npm run lint`
- **Type checking**: Built-in with TypeScript
- **Hot reload**: Automatic with Next.js dev server

## 📄 License

This project is built for demonstration purposes. Feel free to use it as inspiration for your own projects.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.