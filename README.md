# DO Media - Modern Responsive Website

A sleek, modern website built with vanilla HTML, CSS, and JavaScript featuring glassmorphism design, smooth animations, and responsive layout.

## 🌟 Features

- **Modern Glassmorphism Design** - Translucent navbar with backdrop blur effects
- **Smooth Animations** - Custom CSS keyframe animations (fadeInUp, slideIn effects)
- **Interactive Elements** - Hover effects, button ripple animations, and scaling transitions
- **Fully Responsive** - Mobile-first design with hamburger menu for mobile devices
- **Performance Optimized** - Clean, production-ready code with no unused CSS
- **Professional UI/UX** - Gradient backgrounds, floating animations, and modern typography
- **HTML5** - Semantic markup structure
- **CSS3** - Custom properties, Flexbox, Grid, Animations
- **Vanilla JavaScript** - DOM manipulation, Event handling
- **Font** - HelveticaNeue-Thin for typography

## ⚡ Key Features Implemented

### 🎨 Design Elements
- Gradient background with animated shifting
- Glassmorphism navbar with scroll-triggered opacity changes
- Interactive logo with scaling and brightness effects
- Custom button hover states with ripple effects

### 📱 Responsive Design
- Mobile-first approach with 4 breakpoint system
- Hamburger menu for mobile navigation
- Flexible grid layout adapting to all screen sizes
- Optimized typography scaling across devices

### 🎭 Animations & Interactions
- **Smooth Scrolling** - Anchor-based navigation with smooth transitions
- **Ripple Effect** - Material Design-inspired button feedback
- **Hover Animations** - Logo scaling, button transformations, image zoom
- **Loading Animations** - Staggered content appearance on page load

## 📁 Project Structure

```
DO-Media-Website/
│
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── site-logo.png
│   ├── site-icon.jpg
│   ├── laptop.png
│   └── arrow-right.png
├── fonts/
│   └── HELVETICANEUE-THIN.OTF
└── README.md
```

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/do-media-website.git
   ```

2. **Navigate to project directory**
   ```bash
   cd do-media-website
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   # Or use a local server for development
   npx serve .
   ```

## 💻 Code Highlights

### CSS Animations
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### JavaScript Ripple Effect
```javascript
document.getElementById('ctaButton').addEventListener('click', function(e) {
  e.preventDefault();
  const ripple = document.createElement('span');
  const rect = this.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size/2;
  const y = e.clientY - rect.top - size/2;
  ripple.style.cssText = `position:absolute;border-radius:50%;background:rgba(255,255,255,0.3);width:${size}px;height:${size}px;left:${x}px;top:${y}px;transform:scale(0);animation:ripple 0.6s linear;pointer-events:none;`;
  this.append(ripple);
  setTimeout(() => ripple.remove(), 600);
});
```

## 📱 Responsive Breakpoints

| Breakpoint | Screen Size | Layout Changes |
|------------|-------------|----------------|
| Desktop | >968px | Full horizontal layout |
| Tablet | 768px-968px | Stacked layout, mobile menu |
| Mobile | 480px-768px | Reduced padding, smaller text |
| Small Mobile | <480px | Minimal layout, compact design |

## 🎯 Performance Optimizations

- **Optimized CSS** - Removed all unused styles, minimized file size
- **Efficient Animations** - GPU-accelerated transforms and opacity changes
- **Font Loading** - Used `font-display: swap` for better loading performance
- **Clean JavaScript** - Event delegation and efficient DOM manipulation

## 🔮 Future Enhancements

- [ ] Add dark/light theme toggle
- [ ] Implement scroll-triggered animations
- [ ] Add contact form functionality
- [ ] Create additional pages (About, Services, etc.)
- [ ] Add loading screen animation
- [ ] Implement lazy loading for images

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Notes

This project was developed as part of a Software Engineering internship assignment, demonstrating:
- Clean code architecture and optimization
- Modern UI/UX design principles
- Responsive web development skills
- Problem-solving and iterative improvement approach

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

***

⭐ **Star this repository if you found it helpful!**
