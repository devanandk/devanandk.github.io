# Devanand K - Personal Portfolio Website

A modern, responsive personal website and portfolio showcasing my projects, skills, and professional experience. Built with Jekyll and hosted with GitHub Pages.

## 🌟 Features

- Modern, responsive design
- Light/Dark theme toggle
- Mobile-first approach
- SEO optimized
- Fast loading and performance
- Clean and professional UI
- Project showcase
- Professional experience timeline
- Contact information
- Social media integration

## 🛠️ Tech Stack

- Jekyll 4.3.2
- HTML5 & CSS3
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts

## 🚀 Getting Started

### Prerequisites

- Ruby 2.7.0 or higher
- RubyGems
- Bundler
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/devanandk/devanandk.github.io.git
   cd devanandk.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Start the local server:
   ```bash
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000` in your browser

## 📁 Project Structure

```
devanandk.github.io/
├── _layouts/          # Jekyll layouts
├── assets/           # Static assets
│   ├── css/         # Stylesheets
│   ├── js/          # JavaScript files
│   └── images/      # Image files
├── _config.yml      # Jekyll configuration
├── Gemfile          # Ruby dependencies
├── index.html       # Home page
├── about.md         # About page
├── experience.md    # Experience page
├── projects.md      # Projects page
└── contact.md       # Contact page
```

## 🎨 Customization

### Theme Colors
The site uses CSS variables for easy color customization. Edit the following variables in `assets/css/main.css`:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --text-color: #333;
    --bg-color: #ffffff;
    /* ... other variables ... */
}
```

### Content Updates
- Edit markdown files (`.md`) for content changes
- Update `_config.yml` for site-wide settings
- Modify `_layouts/default.html` for layout changes

## 🔒 Security

- Sensitive information is excluded via `.gitignore`
- No API keys or credentials in the repository
- HTTPS enforced on GitHub Pages

## 📱 Responsive Design

The site is fully responsive and tested on:
- Desktop (1920px and below)
- Tablet (768px and below)
- Mobile (480px and below)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 🧪 Testing

1. Local testing:
   ```bash
   bundle exec jekyll serve
   ```

2. Check for broken links:
   ```bash
   bundle exec htmlproofer ./_site
   ```

## 📦 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📫 Contact

- Email: devanand1234@gmail.com
- LinkedIn: [devanandkmenon](https://www.linkedin.com/in/devanandkmenon)
- GitHub: [devanandk](https://github.com/devanandk)

## 🙏 Acknowledgments

- Jekyll team for the amazing static site generator
- Font Awesome for the icons
- All contributors and supporters

---

Made with ❤️ by Devanand K
